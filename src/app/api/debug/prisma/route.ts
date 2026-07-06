import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/prisma"

/**
 * 诊断路由：检查 Prisma 和数据库连接
 * GET /api/debug/prisma
 */
export async function GET(request: NextRequest) {
  try {
    // 1. 检查环境变量
    const dbUrl = process.env.DATABASE_URL
    const hasDbUrl = !!dbUrl
    const dbUrlMasked = dbUrl ? dbUrl.replace(/:[^@]*@/, ":***@") : "NOT SET"

    // 2. 检查 Prisma Client
    let prismaStatus = "unknown"
    let prismaError = ""

    try {
      // 尝试创建一个新的 PrismaClient 实例
      const { PrismaClient } = await import("@prisma/client")
      const testClient = new PrismaClient()

      // 尝试连接
      await testClient.$connect()
      prismaStatus = "connected"
      await testClient.$disconnect()
    } catch (error) {
      prismaStatus = "error"
      prismaError = (error as Error).message
    }

    // 3. 检查 db() 函数
    let dbStatus = "unknown"
    let dbError = ""

    try {
      const dbInstance = db()
      // 尝试一个简单的查询
      await dbInstance.$queryRaw`SELECT 1 as test`
      dbStatus = "working"
    } catch (error) {
      dbStatus = "error"
      dbError = (error as Error).message
    }

    // 4. 检查 OrderSnapshot 表
    let orderCount = -1
    try {
      const dbInstance = db()
      orderCount = await dbInstance.orderSnapshot.count()
    } catch (error) {
      // ignore
    }

    // 5. 检查生成的文件
    const fs = await import("fs")
    const path = await import("path")
    const generatedPath = path.join(process.cwd(), "src", "generated", "prisma", "index.js")

    let generatedExists = false
    let generatedSize = 0

    try {
      if (fs.existsSync(generatedPath)) {
        generatedExists = true
        const stats = fs.statSync(generatedPath)
        generatedSize = stats.size
      }
    } catch (error) {
      // ignore
    }

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      environment: {
        nodeEnv: process.env.NODE_ENV,
        hasDatabaseUrl: hasDbUrl,
        databaseUrlMasked: dbUrlMasked,
        vercel: process.env.VERCEL || "no",
        vercelEnv: process.env.VERCEL_ENV || "not-set",
      },
      prisma: {
        status: prismaStatus,
        error: prismaError || undefined,
        generatedClientExists: generatedExists,
        generatedClientSize: generatedSize,
      },
      db: {
        status: dbStatus,
        error: dbError || undefined,
        orderSnapshotCount: orderCount,
      },
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: (error as Error).message,
        stack: (error as Error).stack,
      },
      { status: 500 }
    )
  }
}
