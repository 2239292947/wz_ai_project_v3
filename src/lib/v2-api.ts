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
        // V2 API 返回订单不存在，降级到本地快照查询
        console.warn(`V2 API returned order not found: ${orderId}, trying local fallback`)
        return this.fallbackToLocalOrder(orderId)
      }
    } catch (error) {
      // V2 API 调用失败，降级到本地快照查询
      console.warn(`V2 API error, falling back to local: ${(error as Error).message}`)
      return this.fallbackToLocalOrder(orderId)
    }
  }

  /**
   * 降级方案：从本地快照查询订单
   * 当 V2 API 不可用时（如 SSO 问题、网络问题），使用本地缓存的订单数据
   */
  private async fallbackToLocalOrder(orderId: string): Promise<{
    exists: boolean
    order?: V2Order
    error?: string
  }> {
    try {
      // 动态导入避免循环依赖
      const { OrderSnapshotService } = await import("./order-snapshot-service")

      // 先通过 v2OrderId 查询
      const snapshot = await OrderSnapshotService.findLocal(orderId)

      // 如果没找到，尝试通过 externalCode 查询
      if (!snapshot) {
        // 假设 orderId 可能是外部单号
        const byExternalCode = await OrderSnapshotService.findByExternalCode(orderId)
        if (byExternalCode) {
          return this.convertSnapshotToV2Order(byExternalCode)
        }
      } else {
        return this.convertSnapshotToV2Order(snapshot)
      }

      return { exists: false, error: "Order not found (local cache)" }
    } catch (error) {
      console.error("Local fallback failed:", error)
      return { exists: false, error: `Local fallback failed: ${(error as Error).message}` }
    }
  }

  /**
   * 将本地快照转换为 V2Order 格式
   */
  private convertSnapshotToV2Order(snapshot: any): {
    exists: boolean
    order?: V2Order
    error?: string
  } {
    try {
      const order: V2Order = {
        id: snapshot.v2OrderId,
        externalCode: snapshot.externalCode,
        storeName: snapshot.storeName,
        receiverName: snapshot.receiverName,
        receiverPhone: snapshot.receiverPhone,
        receiverAddress: snapshot.receiverAddress,
        amount: snapshot.amount,
        items: snapshot.itemsJson || [],
      }
      return { exists: true, order }
    } catch (error) {
      return { exists: false, error: `Failed to convert snapshot: ${(error as Error).message}` }
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
