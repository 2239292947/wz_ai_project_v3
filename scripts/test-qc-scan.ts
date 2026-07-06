/**
 * 测试脚本：创建品控异常工单
 *
 * 模拟完整的扫描品控 -> 创建工单流程
 */
import { PrismaClient } from "@prisma/client"
import { v2Api } from "../src/lib/v2-api"
import { qcRuleEngine } from "../src/lib/qc-rules"
import { SyncLogService } from "../src/lib/sync-log"
import { OrderSnapshotService } from "../src/lib/order-snapshot-service"

const prisma = new PrismaClient()

async function main() {
  console.log("=== 测试：创建品控异常工单 ===\n")

  try {
    // 1. 从 V2 同步订单
    console.log("1. 从 V2 同步订单 order-001...")
    const syncResult = await OrderSnapshotService.syncOrderFromV2("order-001")

    if (!syncResult.success) {
      console.error("同步失败:", syncResult.error)
      return
    }

    console.log("✓ 订单同步成功:", syncResult.snapshot?.externalCode)

    // 2. 品控扫描检测
    console.log("\n2. 执行品控扫描检测...")
    const qcResult = await qcRuleEngine.evaluateScan({
      orderSnapshotId: syncResult.snapshot!.id,
      skuCode: "SKU001",
      skuName: "商品A",
      expectedQuantity: 2,
      scannedQuantity: 3, // 故意多扫 1 件触发数量差异
      exceptionType: "QC",
    })

    console.log("品控结果:", qcResult.passed ? "✓ 通过" : "✗ 异常")
    console.log("描述:", qcResult.description)

    if (!qcResult.passed) {
      console.log("命中规则:", qcResult.results.map((r) => r.ruleName).join(", "))
      console.log("批次锁定:", qcResult.shouldHold ? "是" : "否")
    }

    // 3. 创建扫描记录
    console.log("\n3. 创建扫描记录...")
    const scanRecord = await prisma.scanRecord.create({
      data: {
        scanId: `SCAN-TEST-${Date.now()}`,
        orderSnapshotId: syncResult.snapshot!.id,
        skuCode: "SKU001",
        skuName: "商品A",
        scannedQuantity: 3,
        operator: "测试用户",
        deviceId: "TEST-SCANNER-001",
        qcResult: qcResult.passed ? "PASS" : "FAIL",
        qcDescription: qcResult.description,
        batchStatus: qcResult.shouldHold ? "QC_HOLD" : "NORMAL",
      },
    })
    console.log("✓ 扫描记录创建成功:", scanRecord.scanId)

    // 4. 如果品控异常，创建工单
    if (!qcResult.passed && qcResult.shouldCreateTicket) {
      console.log("\n4. 创建品控异常工单...")
      const maxResubmitConfig = await prisma.systemConfig.findUnique({
        where: { configKey: "approval.resubmit.max_count" },
      })

      const ticket = await prisma.exceptionTicket.create({
        data: {
          ticketNo: `QC-TEST-${Date.now()}`,
          orderSnapshotId: syncResult.snapshot!.id,
          exceptionType: "QC",
          source: "SCAN_QC",
          category: qcResult.results[0]?.ruleName || "QUANTITY_MISMATCH",
          description: qcResult.description,
          status: "PENDING",
          priority: "HIGH",
          currentApprovalLevel: qcResult.autoApprovalLevel,
          maxResubmitCount: parseInt(maxResubmitConfig?.configValue || "3"),
          submittedBy: "扫描系统",
        },
      })

      console.log("✓ 品控工单创建成功:", ticket.ticketNo)
      console.log("状态:", ticket.status)
      console.log("审批级别:", ticket.currentApprovalLevel)

      // 更新扫描记录关联工单
      await prisma.scanRecord.update({
        where: { id: scanRecord.id },
        data: { ticketId: ticket.id },
      })
      console.log("✓ 扫描记录与工单关联成功")
    }

    console.log("\n=== 测试完成 ===")
  } catch (error) {
    console.error("测试失败:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
