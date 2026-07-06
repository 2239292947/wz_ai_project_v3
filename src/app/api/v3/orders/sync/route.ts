import { NextRequest, NextResponse } from "next/server"

/**
 * V2 系统 API - 供 V3 调用
 * 批量同步运单
 * POST /api/v3/orders/sync
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { startDate, endDate, storeName, externalCode, page = 1, pageSize = 20 } = body

    // 模拟数据
    const allOrders = [
      {
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
      },
      {
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
      },
    ]

    // 简单过滤
    let filtered = allOrders
    if (storeName) {
      filtered = filtered.filter((o) => o.storeName?.includes(storeName))
    }
    if (externalCode) {
      filtered = filtered.filter((o) => o.externalCode?.includes(externalCode))
    }

    const start = (page - 1) * pageSize
    const end = start + pageSize
    const orders = filtered.slice(start, end)

    return NextResponse.json({
      success: true,
      orders,
      total: filtered.length,
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    )
  }
}
