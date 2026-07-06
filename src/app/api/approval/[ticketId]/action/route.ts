import { NextRequest, NextResponse } from "next/server"
import { ApprovalEngine } from "@/lib/approval-engine"

/**
 * 审批工单
 * POST /api/approval/[ticketId]/action
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ ticketId: string }> }
) {
  try {
    const { ticketId } = await params
    const body = await request.json()
    const { action, approverId, approverName, comment } = body

    if (!action || !approverId || !approverName) {
      return NextResponse.json(
        { success: false, error: "缺少必要参数" },
        { status: 400 }
      )
    }

    const result = await ApprovalEngine.approve(
      ticketId,
      action,
      approverId,
      approverName,
      comment || ""
    )

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      ticket: result.ticket,
      approvalRecord: result.approvalRecord,
    })
  } catch (error) {
    console.error("Approval error:", error)
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    )
  }
}
