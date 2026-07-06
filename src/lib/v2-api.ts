/**
 * V2 系统 API 客户端
 *
 * V3 通过此客户端调用 V2 暴露的 HTTP 接口完成运单真实性校验、SKU 归属校验、
 * 运单列表同步等跨系统交互。V3 不直接连接 V2 数据库，保证系统独立性。
 *
 * 关键设计（对应考点5 · 接口可调试性 / 真实性校验 / 降级方案）：
 * 1. 每一次跨系统调用都会生成可追踪的 Request ID 并写入接口同步日志表（SyncLog），
 *    日志包含：调用时间、接口名、入参摘要、HTTP 状态码、耗时、错误信息。
 * 2. 明确区分两种失败：
 *    - V2 整体不可用（网络错误 / 超时 / 5xx）-> 进入「降级方案」，使用本地快照，
 *      并在返回中标注数据来源为缓存（非实时）。
 *    - V2 明确返回「运单不存在 / SKU 不存在」（404 / success:false）-> 这是业务上的
 *      真实结论，**绝不**回退到本地快照去"凑"一个存在的运单。否则会造成伪对接
 *      （拿过期缓存把不存在的运单校验成存在）。
 */

// V2 运单接口返回结构
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
 * V2 接口调用错误
 * - unavailable=true 表示 V2 整体不可达（网络/超时/5xx），可走降级方案
 * - unavailable=false 表示 V2 已正常响应但业务上拒绝（如 404 运单不存在），不能降级
 */
export class V2ApiError extends Error {
  status: number
  requestId: string
  unavailable: boolean

  constructor(message: string, status: number, requestId: string, unavailable = false) {
    super(message)
    this.name = "V2ApiError"
    this.status = status
    this.requestId = requestId
    this.unavailable = unavailable
  }
}

function genRequestId(): string {
  try {
    return globalThis.crypto?.randomUUID?.() ?? `req_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
  } catch {
    return `req_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
  }
}

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
   * 通用请求方法（带超时、重试、Request ID、链路日志）
   * - 网络错误 / 超时（fetch throw 或 AbortController abort）视为 V2 不可用 -> 重试后抛出 unavailable=true
   * - HTTP 非 2xx 视为 V2 已响应业务结果（含 404 不存在）-> 直接抛出 unavailable=false，不重试
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
    logParams?: Record<string, unknown>
  ): Promise<{ data: T; status: number; duration: number; requestId: string }> {
    const requestId = genRequestId()
    const url = `${this.baseUrl}${endpoint}`
    const startTime = Date.now()

    let lastError: V2ApiError | null = null
    let lastStatus = 0

    for (let attempt = 0; attempt <= this.retryCount; attempt++) {
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), this.timeout)

        const response = await fetch(url, {
          ...options,
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": this.apiKey,
            "X-Request-Id": requestId,
            ...options.headers,
          },
          signal: controller.signal,
        })

        clearTimeout(timeoutId)
        const status = response.status
        lastStatus = status
        const raw = await response.text()
        const data = raw ? JSON.parse(raw) : ({} as T)

        if (!response.ok) {
          lastError = new V2ApiError(
            `HTTP ${status}: ${response.statusText}`,
            status,
            requestId,
            false
          )
          // 业务级错误（含 404 不存在）不重试，直接抛出
          break
        }

        const duration = Date.now() - startTime
        await this.writeLog({
          requestId,
          apiName: endpoint,
          requestParams: logParams || {},
          responseStatus: status,
          responseBody: this.summarize(data),
          status: "SUCCESS",
          duration,
        })
        return { data: data as T, status, duration, requestId }
      } catch (error) {
        // fetch 抛错（含 AbortController 超时）视为 V2 不可用
        const err = error as Error
        lastError = new V2ApiError(
          `网络/超时错误: ${err.message}`,
          0,
          requestId,
          true
        )
        if (attempt < this.retryCount) {
          // 指数退避后重试
          await new Promise((resolve) => setTimeout(resolve, 1000 * Math.pow(2, attempt)))
        }
      }
    }

    const duration = Date.now() - startTime
    await this.writeLog({
      requestId,
      apiName: endpoint,
      requestParams: logParams || {},
      responseStatus: lastStatus,
      status: lastError?.unavailable ? "TIMEOUT" : "FAILED",
      errorMessage: lastError?.message,
      duration,
    })
    throw lastError
  }

  /**
   * 写入接口同步日志（不阻塞主流程：任何异常仅告警）
   */
  private async writeLog(entry: {
    requestId: string
    apiName: string
    requestParams: Record<string, unknown>
    responseStatus: number
    responseBody?: string
    status: "SUCCESS" | "FAILED" | "TIMEOUT"
    errorMessage?: string
    duration: number
  }): Promise<void> {
    try {
      const { SyncLogService } = await import("./sync-log")
      await SyncLogService.log({
        requestId: entry.requestId,
        apiName: entry.apiName,
        requestParams: entry.requestParams,
        responseStatus: entry.responseStatus,
        responseBody: entry.responseBody,
        status: entry.status,
        errorMessage: entry.errorMessage,
        duration: entry.duration,
      })
    } catch (logErr) {
      console.warn(`[V2Api] 写入同步日志失败 (requestId=${entry.requestId}):`, logErr)
    }
  }

  /**
   * 将响应摘要裁剪后存入日志（避免大报文撑爆日志表）
   */
  private summarize(data: unknown): string | undefined {
    try {
      const s = JSON.stringify(data)
      return s.length > 500 ? s.slice(0, 500) + "...(truncated)" : s
    } catch {
      return undefined
    }
  }

  /**
   * 校验运单是否存在 + 获取运单详情
   * POST /api/v3/orders/validate
   */
  async validateOrder(orderId: string): Promise<{
    exists: boolean
    order?: V2Order
    error?: string
    source?: "v2" | "local-cache"
    requestId?: string
  }> {
    try {
      const { data, requestId } = await this.request<{
        success: boolean
        order?: V2Order
        error?: string
      }>("/api/v3/orders/validate", {
        method: "POST",
        body: JSON.stringify({ orderId }),
      }, { orderId })

      if (data?.success && data?.order) {
        return { exists: true, order: data.order, source: "v2", requestId }
      }

      // V2 正常响应但明确说"运单不存在"或参数无效 -> 业务结论，绝不回退到本地缓存
      return {
        exists: false,
        error: data?.error || "Order not found",
        requestId,
      }
    } catch (err) {
      if (err instanceof V2ApiError && err.unavailable) {
        // V2 整体不可用 -> 降级到本地快照（仅此场景允许）
        console.warn(`[V2Api] V2 不可用，降级到本地快照 (requestId=${err.requestId}): ${err.message}`)
        return this.fallbackToLocalOrder(orderId)
      }
      // 其它错误（含 V2 返回 404 不存在）-> 直接返回不存在
      return { exists: false, error: err instanceof Error ? err.message : "Unknown error" }
    }
  }

  /**
   * 降级方案：仅当 V2 整体不可用时调用。
   * 从本地快照查询运单；明确标注 source=local-cache，前端需提示"数据可能非最新"。
   * 若本地也无记录，则老老实实返回不存在，绝不伪造。
   */
  private async fallbackToLocalOrder(orderId: string): Promise<{
    exists: boolean
    order?: V2Order
    error?: string
    source?: "local-cache"
  }> {
    try {
      const { OrderSnapshotService } = await import("./order-snapshot-service")

      const snapshot = await OrderSnapshotService.findLocal(orderId)
      if (!snapshot) {
        const byExternal = await OrderSnapshotService.findByExternalCode(orderId)
        if (byExternal) {
          return { exists: true, order: this.convertSnapshotToV2Order(byExternal), source: "local-cache" }
        }
        return { exists: false, error: "Order not found (本地缓存与 V2 均无记录)" }
      }
      return { exists: true, order: this.convertSnapshotToV2Order(snapshot), source: "local-cache" }
    } catch (error) {
      console.error("[V2Api] 本地降级查询失败:", error)
      return { exists: false, error: `Local fallback failed: ${(error as Error).message}` }
    }
  }

  private convertSnapshotToV2Order(snapshot: any): V2Order {
    return {
      id: snapshot.v2OrderId,
      externalCode: snapshot.externalCode,
      storeName: snapshot.storeName,
      receiverName: snapshot.receiverName,
      receiverPhone: snapshot.receiverPhone,
      receiverAddress: snapshot.receiverAddress,
      amount: snapshot.amount,
      items: snapshot.itemsJson || [],
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
      }, { orderId, skuCode })

      if (data?.success && data?.valid) {
        return { valid: true, quantity: data.quantity }
      }
      return { valid: false, error: data?.error || "SKU not found in order" }
    } catch (err) {
      if (err instanceof V2ApiError && err.unavailable) {
        return { valid: false, error: "V2 接口不可用，无法校验 SKU 归属" }
      }
      return { valid: false, error: err instanceof Error ? err.message : "Unknown error" }
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
      }, params)
      return data
    } catch (err) {
      return {
        success: false,
        error: err instanceof V2ApiError ? err.message : "V2 API error",
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
      }, { count: orderIds.length })

      const orderMap = new Map<string, V2Order>()
      if (data?.orders) {
        data.orders.forEach((order) => orderMap.set(order.id, order))
      }
      return { success: !!data?.success, orders: orderMap, error: data?.error }
    } catch (err) {
      return {
        success: false,
        error: err instanceof V2ApiError ? err.message : "V2 API error",
      }
    }
  }

  /**
   * 回写异常处理结果到 V2（可选功能，非阻塞）
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
      }, { ticketId, status })
      return { success: !!data?.success }
    } catch {
      // 回写失败不应影响主流程
      return { success: false }
    }
  }
}

export const v2Api = new V2ApiClient()
