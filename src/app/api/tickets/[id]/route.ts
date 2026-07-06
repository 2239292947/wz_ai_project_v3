import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

/**
 * 查询单个工单详情
 * GET /api/tickets/[id]
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    const ticket = await prisma.exceptionTicket.findUnique({
      where: { id },
      include: {
        orderSnapshot: true,
        scanRecords: {
          orderBy: { scanTime: "desc" },
        },
        approvalRecords: {
          orderBy: { createdAt: "asc" },
        },
        compensationRecords: true,
      },
    })

    if (!ticket) {
      return NextResponse.json(
        { success: false, error: "工单不存在" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      ticket,
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    )
  }
}

/**
 * 更新工单
 * PATCH /api/tickets/[id]
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()

    const ticket = await prisma.exceptionTicket.update({
      where: { id },
      data: body,
    })

    return NextResponse.json({
      success: true,
      ticket,
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    )
  }
}
