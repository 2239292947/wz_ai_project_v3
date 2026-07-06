import { NextResponse } from "next/server"
import { ApprovalEngine, QCHoldTimeoutService } from "@/lib/approval-engine"

/**
 * 批量处理超时工单（后台任务）
 * POST /api/approval/timeouts/process
 */
export async function POST() {
  try {
    // 处理审批超时工单
    const approvalResult = await ApprovalEngine.processTimeouts()

    // 处理品控暂扣超时
    const qcResult = await QCHoldTimeoutService.processTimeouts()

    return NextResponse.json({
      success: true,
      approval: approvalResult,
      qcHold: qcResult,
      message: `处理完成：审批 ${approvalResult.processed} 条（升级 ${approvalResult.escalated} 条），品控暂扣 ${qcResult.processed} 条（升级 ${qcResult.escalated} 条）`,
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    )
  }
}
