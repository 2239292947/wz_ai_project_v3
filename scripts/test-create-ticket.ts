/**
 * 测试脚本：创建物流异常工单
 *
 * 模拟手工上报异常流程
 */
import { PrismaClient } from "../src/generated/prisma"
import { v2Api } from "../src/lib/v2-api"
import { OrderSnapshotService } from "../src/lib/order-snapshot-service"

const prisma = new PrismaClient()

async function main() {
  console.log("=== 测试：创建物流异常工单 ===\n")

  try {
    // 1. 实时校验运单
    console.log("1. 实时校验运单 order-002...")
    const result = await v2Api.validateOrder("order-002")

    if (!result.exists) {
      console.error("运单不存在:", result.error)
      return
    }

    console.log("✓ 运单验证通过:", result.order?.externalCode)

    // 2. 同步到本地快照
    console.log("\n2. 同步到本地快照...")
    const syncResult = await OrderSnapshotService.syncOrderFromV2(result.order!.id)

    if (!syncResult.success) {
      console.error("同步失败:", syncResult.error)
      return
    }

    console.log("✓ 快照同步成功")

    // 3. 创建异常工单
    console.log("\n3. 创建物流异常工单...")
    const maxResubmitConfig = await prisma.systemConfig.findUnique({
      where: { configKey: "approval.resubmit.max_count" },
    })

    const ticket = await prisma.exceptionTicket.create({
      data: {
        ticketNo: `LOG-TEST-${Date.now()}`,
        orderSnapshotId: syncResult.snapshot!.id,
        exceptionType: "LOGISTICS",
        source: "MANUAL_LOGISTICS",
        category: "damaged",
        description: "货物外包装破损，商品可能有损伤",
        status: "PENDING",
        priority: "HIGH",
        currentApprovalLevel: 1,
        maxResubmitCount: parseInt(maxResubmitConfig?.configValue || "3"),
        submittedBy: "仓库管理员",
      },
      include: {
        orderSnapshot: true,
      },
    })

    console.log("✓ 工单创建成功:", ticket.ticketNo)
    console.log("状态:", ticket.status)
    console.log("运单号:", ticket.orderSnapshot.externalCode)

    console.log("\n=== 测试完成 ===")
  } catch (error) {
    console.error("测试失败:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
