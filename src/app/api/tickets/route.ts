import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/prisma"
import { v2Api } from "@/lib/v2-api"
import { SyncLogService } from "@/lib/sync-log"
import { OrderSnapshotService } from "@/lib/order-snapshot-service"

/**
 * 创建异常工单
 * POST /api/tickets
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      orderId,
      exceptionType,
      category,
      description,
      submittedBy,
    } = body

    if (!orderId || !exceptionType || !category || !submittedBy) {
      return NextResponse.json(
        { success: false, error: "缺少必要参数" },
        { status: 400 }
      )
    }

    // 1. 同步订单（实时校验）
    const syncResult = await OrderSnapshotService.syncOrderFromV2(orderId)

    if (!syncResult.success || !syncResult.snapshot) {
      return NextResponse.json(
        { success: false, error: syncResult.error || "订单不存在或无法访问" },
        { status: 404 }
      )
    }

    const snapshot = syncResult.snapshot

    // 2. 检查是否已有同类型未关闭工单
    const existingTicket = await db().exceptionTicket.findFirst({
      where: {
        orderSnapshotId: snapshot.id,
        exceptionType,
        category,
        status: { notIn: ["COMPLETED", "CANCELLED", "REJECTED"] },
      },
    })

    if (existingTicket) {
      return NextResponse.json(
        {
          success: false,
          error: "该运单已存在同类型未关闭工单",
          existingTicket,
        },
        { status: 409 }
      )
    }

    // 3. 获取系统配置
    const maxResubmitConfig = await db().systemConfig.findUnique({
      where: { configKey: "approval.resubmit.max_count" },
    })

    // 4. 创建工单
    const ticket = await db().exceptionTicket.create({
      data: {
        ticketNo: `${exceptionType === "QC" ? "QC" : "LOG"}-${Date.now()}`,
        orderSnapshotId: snapshot.id,
        exceptionType,
        source: exceptionType === "QC" ? "SCAN_QC" : "MANUAL_LOGISTICS",
        category,
        description,
        status: "PENDING",
        submittedBy,
        maxResubmitCount: parseInt(maxResubmitConfig?.configValue || "3"),
      },
    })

    return NextResponse.json({
      success: true,
      ticket,
    })
  } catch (error) {
    console.error("Create ticket error:", error)
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    )
  }
}

/**
 * 查询工单列表
 * GET /api/tickets
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const status = searchParams.get("status")
    const exceptionType = searchParams.get("exceptionType")
    const source = searchParams.get("source")
    const orderNo = searchParams.get("orderNo")
    const submittedBy = searchParams.get("submittedBy")
    const page = parseInt(searchParams.get("page") || "1")
    const pageSize = parseInt(searchParams.get("pageSize") || "20")

    const where: any = {}

    if (status) {
      where.status = status
    }
    if (exceptionType) {
      where.exceptionType = exceptionType
    }
    if (source) {
      where.source = source
    }
    if (submittedBy) {
      where.submittedBy = submittedBy
    }
    if (orderNo) {
      // 通过订单快照关联查询
      const snapshot = await db().orderSnapshot.findFirst({
        where: {
          OR: [
            { externalCode: { contains: orderNo } },
            { v2OrderId: orderNo },
          ],
        },
      })
      if (snapshot) {
        where.orderSnapshotId = snapshot.id
      } else {
        // 没有找到匹配的订单，返回空结果
        return NextResponse.json({
          success: true,
          tickets: [],
          total: 0,
          page,
          pageSize,
        })
      }
    }

    const [tickets, total] = await Promise.all([
      db().exceptionTicket.findMany({
        where,
        include: {
          orderSnapshot: {
            select: {
              id: true,
              externalCode: true,
              storeName: true,
              receiverName: true,
              amount: true,
            },
          },
          approvalRecords: {
            orderBy: { createdAt: "desc" },
            take: 1,
          },
        },
        orderBy: { submittedAt: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      db().exceptionTicket.count({ where }),
    ])

    return NextResponse.json({
      success: true,
      tickets,
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
