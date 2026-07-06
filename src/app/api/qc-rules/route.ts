import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

/**
 * 获取品控规则列表
 * GET /api/qc-rules
 */
export async function GET(request: NextRequest) {
  try {
    const rules = await prisma.qCRule.findMany({
      orderBy: { createdAt: "desc" },
    })

    return NextResponse.json({
      success: true,
      rules,
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    )
  }
}

/**
 * 创建品控规则
 * POST /api/qc-rules
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const rule = await prisma.qCRule.create({
      data: {
        name: body.name,
        code: body.code,
        description: body.description,
        exceptionType: body.exceptionType,
        triggerCondition: body.triggerCondition,
        severity: body.severity,
        autoCreateTicket: body.autoCreateTicket ?? true,
        autoApprovalLevel: body.autoApprovalLevel ?? 1,
      },
    })

    return NextResponse.json({
      success: true,
      rule,
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    )
  }
}
