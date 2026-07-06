import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { SyncLogService } from "@/lib/sync-log"

/**
 * 获取监控统计数据
 * GET /api/monitor/stats
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const hours = parseInt(searchParams.get("hours") || "24")
    const since = new Date(Date.now() - hours * 60 * 60 * 1000)

    const stats = await SyncLogService.getStats(since)

    return NextResponse.json({
      success: true,
      stats,
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    )
  }
}
