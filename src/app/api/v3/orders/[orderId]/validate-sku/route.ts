import { NextRequest, NextResponse } from "next/server"

/**
 * V2 系统 API - 供 V3 调用
 * 校验 SKU 是否属于指定运单
 * POST /api/v3/orders/[orderId]/validate-sku
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ orderId: string }> }
) {
  try {
    const { orderId } = await params
    const body = await request.json()
    const { skuCode } = body

    if (!skuCode) {
      return NextResponse.json({ success: false, error: "Missing skuCode" }, { status: 400 })
    }

    // 模拟数据
    const mockOrders: Record<string, any> = {
      "order-001": {
        items: [
          { skuCode: "SKU001", quantity: 2 },
          { skuCode: "SKU002", quantity: 1 },
        ],
      },
      "order-002": {
        items: [{ skuCode: "SKU003", quantity: 5 }],
      },
    }

    const order = mockOrders[orderId]

    if (!order) {
      return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 })
    }

    const item = order.items.find((i: any) => i.skuCode === skuCode)

    if (!item) {
      return NextResponse.json({ success: false, error: "SKU not found in order" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      valid: true,
      quantity: item.quantity,
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    )
  }
}
