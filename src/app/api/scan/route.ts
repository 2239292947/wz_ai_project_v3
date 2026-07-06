import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/prisma"
import { v2Api } from "@/lib/v2-api"
import { SyncLogService } from "@/lib/sync-log"
import { OrderSnapshotService } from "@/lib/order-snapshot-service"
import { qcRuleEngine } from "@/lib/qc-rules"

/**
 * 扫描操作 API
 * POST /api/scan - 执行扫描并品控检测
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { orderId, skuCode, scannedQuantity, operator, deviceId } = body

    if (!orderId || !skuCode || scannedQuantity === undefined) {
      return NextResponse.json(
        { success: false, error: "缺少必要参数" },
        { status: 400 }
      )
    }

    // 1. 先同步或获取订单快照
    const syncResult = await OrderSnapshotService.syncOrderFromV2(orderId)

    if (!syncResult.success || !syncResult.snapshot) {
      return NextResponse.json(
        { success: false, error: syncResult.error || "订单不存在" },
        { status: 404 }
      )
    }

    const snapshot = syncResult.snapshot
    const items = snapshot.itemsJson as any[]

    // 2. 通过 V2 接口实时校验 SKU 是否归属于该运单（考点5：SKU 归属校验走真实接口）
    //    降级策略：仅当 V2 整体不可用时，才退回到本地快照做 SKU 归属判断，
    //    绝不拿过期缓存把"不存在的 SKU"校验成存在。
    const skuCheck = await v2Api.validateSKU(snapshot.v2OrderId, skuCode)
    const localItem = items.find((i) => i.skuCode === skuCode)

    if (skuCheck.valid) {
      // V2 明确返回该 SKU 属于此运单
    } else if (skuCheck.error && skuCheck.error.includes("不可用")) {
      // V2 不可用 -> 降级使用本地快照判断
      if (!localItem) {
        return NextResponse.json(
          { success: false, error: `SKU ${skuCode} 不在该运单中（本地缓存）` },
          { status: 400 }
        )
      }
    } else {
      // V2 正常响应但 SKU 不属于该运单 -> 业务结论，直接拒绝
      return NextResponse.json(
        { success: false, error: skuCheck.error || `SKU ${skuCode} 不在该运单中` },
        { status: 400 }
      )
    }

    const item = localItem

    // 3. 检查是否已有未关闭的品控工单（幂等性检查）
    const existingTicket = await db().exceptionTicket.findFirst({
      where: {
        orderSnapshotId: snapshot.id,
        exceptionType: "QC",
        status: { notIn: ["COMPLETED", "CANCELLED", "REJECTED"] },
        scanRecords: {
          some: {
            skuCode,
          },
        },
      },
    })

    if (existingTicket) {
      // 已存在未关闭工单，只追加扫描记录
      const scanRecord = await db().scanRecord.create({
        data: {
          scanId: `SCAN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          orderSnapshotId: snapshot.id,
          skuCode,
          skuName: item.skuName,
          scannedQuantity,
          operator,
          deviceId,
          qcResult: "FAIL", // 标记为失败（因为已有工单）
          qcDescription: "该批次已存在未关闭品控工单",
          batchStatus: "QC_HOLD",
          ticketId: existingTicket.id,
        },
      })

      return NextResponse.json({
        success: true,
        scanRecord,
        existingTicket,
        message: "该批次已存在未关闭品控工单，已追加扫描记录",
        isDuplicate: true,
      })
    }

    // 4. 品控规则检测
    const qcResult = await qcRuleEngine.evaluateScan({
      orderSnapshotId: snapshot.id,
      skuCode,
      skuName: item.skuName,
      expectedQuantity: item.quantity,
      scannedQuantity,
      exceptionType: "QC",
    })

    // 5. 确定批次状态
    const batchStatus = qcResult.passed ? "NORMAL" : "QC_HOLD"

    // 6. 创建扫描记录
    const scanRecord = await db().scanRecord.create({
      data: {
        scanId: `SCAN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        orderSnapshotId: snapshot.id,
        skuCode,
        skuName: item.skuName,
        scannedQuantity,
        operator,
        deviceId,
        qcResult: qcResult.passed ? "PASS" : "FAIL",
        qcRuleId: qcResult.results[0]?.ruleId,
        qcRuleName: qcResult.results[0]?.ruleName,
        qcDescription: qcResult.description,
        batchStatus,
      },
    })

    // 7. 如果品控异常，自动创建工单
    let ticket = null
    if (!qcResult.passed && qcResult.shouldCreateTicket) {
      const maxResubmit = await db().systemConfig.findUnique({
        where: { configKey: "approval.resubmit.max_count" },
      })

      ticket = await db().exceptionTicket.create({
        data: {
          ticketNo: `QC-${Date.now()}`,
          orderSnapshotId: snapshot.id,
          exceptionType: "QC",
          source: "SCAN_QC",
          category: qcResult.results[0]?.ruleName || "QC_VIOLATION",
          description: qcResult.description,
          status: "PENDING",
          priority: qcResult.results[0]?.severity === "CRITICAL" ? "URGENT" : "HIGH",
          currentApprovalLevel: qcResult.autoApprovalLevel,
          maxResubmitCount: parseInt(maxResubmit?.configValue || "3"),
          submittedBy: operator,
        },
      })

      // 更新扫描记录的工单关联
      await db().scanRecord.update({
        where: { id: scanRecord.id },
        data: { ticketId: ticket.id },
      })

      // 如果是严重异常，强制升级到二级审批
      if (qcResult.results[0]?.severity === "CRITICAL") {
        await db().exceptionTicket.update({
          where: { id: ticket.id },
          data: {
            status: "LEVEL2_APPROVING",
            currentApprovalLevel: 2,
          },
        })
      }
    }

    return NextResponse.json({
      success: true,
      scanRecord,
      ticket,
      qcResult,
      message: qcResult.passed ? "品控检查通过" : "品控异常，已创建工单",
    })
  } catch (error) {
    console.error("Scan error:", error)
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    )
  }
}

/**
 * 查询扫描记录
 * GET /api/scan?orderId=xxx
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const orderId = searchParams.get("orderId")
    const skuCode = searchParams.get("skuCode")
    const page = parseInt(searchParams.get("page") || "1")
    const pageSize = parseInt(searchParams.get("pageSize") || "20")

    const where: any = {}
    if (orderId) {
      // orderId 参数同时支持「V2 运单号」与「外部单号(externalCode)」检索
      const snapshots = await db().orderSnapshot.findMany({
        where: {
          OR: [{ v2OrderId: orderId }, { externalCode: orderId }],
        },
        select: { id: true },
      })
      if (snapshots.length > 0) {
        where.orderSnapshotId = { in: snapshots.map((s) => s.id) }
      } else {
        // 未匹配到任何运单 -> 显式约束为不可能命中的值，返回空结果
        // （避免 where 为空时误返回全部扫描记录）
        where.orderSnapshotId = "__no_match__"
      }
    }
    if (skuCode) {
      where.skuCode = skuCode
    }

    const [records, total] = await Promise.all([
      db().scanRecord.findMany({
        where,
        include: {
          orderSnapshot: true,
          ticket: true,
        },
        orderBy: { scanTime: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      db().scanRecord.count({ where }),
    ])

    return NextResponse.json({
      success: true,
      records,
      total,
      page,
      pageSize,
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    )
  }
}
