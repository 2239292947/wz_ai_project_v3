import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

/**
 * 获取系统配置
 * GET /api/config
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get("category")

    const where = category ? { category } : {}

    const configs = await prisma.systemConfig.findMany({
      where,
      orderBy: { category: "asc", configKey: "asc" },
    })

    return NextResponse.json({
      success: true,
      configs,
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    )
  }
}
