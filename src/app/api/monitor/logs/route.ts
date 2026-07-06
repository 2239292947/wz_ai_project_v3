import { NextRequest, NextResponse } from "next/server"
import { SyncLogService } from "@/lib/sync-log"

/**
 * 获取接口日志
 * GET /api/monitor/logs
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const apiName = searchParams.get("apiName")
    const status = searchParams.get("status")
    const limit = parseInt(searchParams.get("limit") || "50")

    const logs = await SyncLogService.getRecentLogs({
      apiName: apiName || undefined,
      status: status || undefined,
      limit,
    })

    return NextResponse.json({
      success: true,
      logs,
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    )
  }
}
