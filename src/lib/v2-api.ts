import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

// V2 运单接口 Schema
const V2OrderSchema = z.object({
  id: z.string(),
  externalCode: z.string().nullable(),
  storeName: z.string().nullable(),
  receiverName: z.string().nullable(),
  receiverPhone: z.string().nullable(),
  receiverAddress: z.string().nullable(),
  amount: z.number().nullable(),
  items: z.array(
    z.object({
      id: z.string(),
      skuCode: z.string(),
      skuName: z.string(),
      quantity: z.number(),
      spec: z.string().nullable(),
      remark: z.string().nullable(),
    })
  ),
})

export interface V2Order {
  id: string
  externalCode: string | null
  storeName: string | null
  receiverName: string | null
  receiverPhone: string | null
  receiverAddress: string | null
  amount: number | null
  items: {
    id: string
    skuCode: string
    skuName: string
    quantity: number
    spec: string | null
    remark: string | null
  }[]
}

/**
 * V2 系统 API 客户端
 *
 * V3 通过此客户端调用 V2 暴露的接口
 * 不直接连接 V2 数据库，保证系统独立性
 */
export class V2ApiClient {
  private baseUrl: string
  private apiKey: string
  private timeout: number
  private retryCount: number

  constructor() {
    this.baseUrl = process.env.V2_API_URL || ""
    this.apiKey = process.env.V2_API_KEY || ""
    this.timeout = parseInt(process.env.V2_SYNC_TIMEOUT || "10000")
    this.retryCount = parseInt(process.env.V2_SYNC_RETRY_COUNT || "2")
  }

  /**
   * 通用请求方法（带超时和重试）
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<{ data: T; status: number; duration: number }> {
    const url = `${this.baseUrl}${endpoint}`
    const startTime = Date.now()

    let lastError: Error | null = null

    for (let attempt = 0; attempt <= this.retryCount; attempt++) {
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), this.timeout)

        const response = await fetch(url, {
          ...options,
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": this.apiKey,
            ...options.headers,
          },
          signal: controller.signal,
        })

        clearTimeout(timeoutId)
        const duration = Date.now() - startTime

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }

        const data = await response.json()
        return { data: data as T, status: response.status, duration }
      } catch (error) {
        lastError = error as Error
        if (attempt < this.retryCount) {
          // 指数退避
          await new Promise((resolve) => setTimeout(resolve, 1000 * Math.pow(2, attempt)))
        }
      }
    }

    throw lastError || new Error("Unknown error")
  }

  /**
   * 校验运单是否存在 + 获取运单详情
   * POST /api/v3/orders/validate
   */
  async validateOrder(orderId: string): Promise<{
    exists: boolean
    order?: V2Order
    error?: string
  }> {
    try {
      const { data } = await this.request<{
        success: boolean
        order?: V2Order
        error?: string
      }>("/api/v3/orders/validate", {
        method: "POST",
        body: JSON.stringify({ orderId }),
      })

      if (data.success && data.order) {
        return { exists: true, order: data.order }
      } else {
        return { exists: false, error: data.error || "Order not found" }
      }
    } catch (error) {
      return {
        exists: false,
        error: `V2 API error: ${(error as Error).message}`,
      }
    }
  }

  /**
   * 校验 SKU 是否归属于指定运单
   * POST /api/v3/orders/{orderId}/validate-sku
   */
  async validateSKU(orderId: string, skuCode: string): Promise<{
    valid: boolean
    quantity?: number
    error?: string
  }> {
    try {
      const { data } = await this.request<{
        success: boolean
        valid?: boolean
        quantity?: number
        error?: string
      }>(`/api/v3/orders/${orderId}/validate-sku`, {
        method: "POST",
        body: JSON.stringify({ skuCode }),
      })

      if (data.success && data.valid) {
        return { valid: true, quantity: data.quantity }
      } else {
        return { valid: false, error: data.error || "SKU not found in order" }
      }
    } catch (error) {
      return {
        valid: false,
        error: `V2 API error: ${(error as Error).message}`,
      }
    }
  }

  /**
   * 按条件查询/同步运单列表
   * POST /api/v3/orders/sync
   */
  async syncOrders(params: {
    startDate?: string
    endDate?: string
    storeName?: string
    externalCode?: string
    page?: number
    pageSize?: number
  }): Promise<{
    success: boolean
    orders?: V2Order[]
    total?: number
    error?: string
  }> {
    try {
      const { data } = await this.request<{
        success: boolean
        orders?: V2Order[]
        total?: number
        error?: string
      }>("/api/v3/orders/sync", {
        method: "POST",
        body: JSON.stringify(params),
      })

      return data
    } catch (error) {
      return {
        success: false,
        error: `V2 API error: ${(error as Error).message}`,
      }
    }
  }

  /**
   * 批量获取运单详情
   * POST /api/v3/orders/batch
   */
  async getOrdersBatch(orderIds: string[]): Promise<{
    success: boolean
    orders?: Map<string, V2Order>
    error?: string
  }> {
    try {
      const { data } = await this.request<{
        success: boolean
        orders?: V2Order[]
        error?: string
      }>("/api/v3/orders/batch", {
        method: "POST",
        body: JSON.stringify({ orderIds }),
      })

      const orderMap = new Map<string, V2Order>()
      if (data.orders) {
        data.orders.forEach((order) => orderMap.set(order.id, order))
      }

      return {
        success: data.success,
        orders: orderMap,
        error: data.error,
      }
    } catch (error) {
      return {
        success: false,
        error: `V2 API error: ${(error as Error).message}`,
      }
    }
  }

  /**
   * 回写异常处理结果到 V2（可选功能）
   * POST /api/v3/webhooks/exception-update
   */
  async notifyExceptionUpdate(ticketId: string, status: string): Promise<{
    success: boolean
    error?: string
  }> {
    try {
      const { data } = await this.request<{
        success: boolean
        error?: string
      }>("/api/v3/webhooks/exception-update", {
        method: "POST",
        body: JSON.stringify({ ticketId, status }),
      })

      return data
    } catch (error) {
      // 回写失败不应影响主流程
      console.warn("Failed to notify V2:", error)
      return {
        success: false,
        error: `Webhook error: ${(error as Error).message}`,
      }
    }
  }
}

/**
 * 单例实例
 */
export const v2Api = new V2ApiClient()
