import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

// V2 系统模拟数据
const mockOrders = new Map<string, any>()

// 初始化一些模拟数据
mockOrders.set("order-001", {
  id: "order-001",
  externalCode: "EX20240001",
  storeName: "测试店铺A",
  receiverName: "张三",
  receiverPhone: "13800138000",
  receiverAddress: "北京市朝阳区xxx街道",
  amount: 1288.5,
  items: [
    { id: "item-001", skuCode: "SKU001", skuName: "商品A", quantity: 2, spec: "红色/L", remark: "" },
    { id: "item-002", skuCode: "SKU002", skuName: "商品B", quantity: 1, spec: "默认", remark: "" },
  ],
})

mockOrders.set("order-002", {
  id: "order-002",
  externalCode: "EX20240002",
  storeName: "测试店铺B",
  receiverName: "李四",
  receiverPhone: "13900139000",
  receiverAddress: "上海市浦东新区xxx路",
  amount: 3580.0,
  items: [
    { id: "item-003", skuCode: "SKU003", skuName: "商品C", quantity: 5, spec: "XL", remark: "" },
  ],
})

/**
 * V2 系统 API - 供 V3 调用
 * 校验运单是否存在
 * POST /api/v3/orders/validate
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { orderId } = body

    if (!orderId) {
      return NextResponse.json({ success: false, error: "Missing orderId" }, { status: 400 })
    }

    // 模拟验证（延迟 100ms）
    await new Promise((resolve) => setTimeout(resolve, 100))

    const order = mockOrders.get(orderId)

    if (!order) {
      return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, order })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    )
  }
}
