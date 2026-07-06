import { db } from "@/lib/prisma"
import { SystemConfigService } from "./system-config"
import { v2Api } from "./v2-api"

/**
 * 订单快照服务
 * 管理从 V2 同步的运单快照数据
 *
 * 说明：跨系统调用的链路日志（Request ID / 状态码 / 耗时 / 错误）已统一在
 * v2-api.ts 的 request() 中写入 SyncLog，本服务不再重复记录，避免重复日志。
 */
export class OrderSnapshotService {
  /**
   * 从 V2 同步单个订单并保存到本地快照
   */
  static async syncOrderFromV2(v2OrderId: string): Promise<{
    success: boolean
    snapshot?: any
    error?: string
  }> {
    try {
      // 1. 调用 V2 接口获取订单详情（内部已带 Request ID 与链路日志）
      const result = await v2Api.validateOrder(v2OrderId)

      if (!result.exists || !result.order) {
        // V2 明确返回不存在，或本地降级也无记录 -> 直接失败，绝不伪造
        return { success: false, error: result.error }
      }

      const order = result.order

      // 2. 保存到本地快照
      const snapshot = await db().orderSnapshot.upsert({
        where: { v2OrderId: order.id },
        create: {
          v2OrderId: order.id,
          externalCode: order.externalCode,
          storeName: order.storeName,
          receiverName: order.receiverName,
          receiverPhone: order.receiverPhone,
          receiverAddress: order.receiverAddress,
          amount: order.amount,
          itemsJson: order.items,
          syncedAt: new Date(),
        },
        update: {
          externalCode: order.externalCode,
          storeName: order.storeName,
          receiverName: order.receiverName,
          receiverPhone: order.receiverPhone,
          receiverAddress: order.receiverAddress,
          amount: order.amount,
          itemsJson: order.items,
          syncedAt: new Date(),
        },
      })

      return { success: true, snapshot }
    } catch (error) {
      return {
        success: false,
        error: `同步失败：${(error as Error).message}`,
      }
    }
  }

  /**
   * 批量同步订单
   */
  static async batchSync(params: {
    startDate?: string
    endDate?: string
    storeName?: string
    externalCode?: string
    page?: number
    pageSize?: number
  }): Promise<{
    success: boolean
    synced: number
    failed: number
    error?: string
  }> {
    const startTime = Date.now()

    try {
      const result = await v2Api.syncOrders(params)

      if (!result.success || !result.orders) {
        return { success: false, synced: 0, failed: 0, error: result.error }
      }

      let synced = 0
      let failed = 0

      // 批量保存
      for (const order of result.orders) {
        try {
          await db().orderSnapshot.upsert({
            where: { v2OrderId: order.id },
            create: {
              v2OrderId: order.id,
              externalCode: order.externalCode,
              storeName: order.storeName,
              receiverName: order.receiverName,
              receiverPhone: order.receiverPhone,
              receiverAddress: order.receiverAddress,
              amount: order.amount,
              itemsJson: order.items,
              syncedAt: new Date(),
            },
            update: {
              externalCode: order.externalCode,
              storeName: order.storeName,
              receiverName: order.receiverName,
              receiverPhone: order.receiverPhone,
              receiverAddress: order.receiverAddress,
              amount: order.amount,
              itemsJson: order.items,
              syncedAt: new Date(),
            },
          })
          synced++
        } catch (error) {
          console.error(`Failed to sync order ${order.id}:`, error)
          failed++
        }
      }

      return { success: true, synced, failed }
    } catch (error) {
      return {
        success: false,
        synced: 0,
        failed: 0,
        error: (error as Error).message,
      }
    }
  }

  /**
   * 查询本地快照（降级方案）
   */
  static async findLocal(v2OrderId: string): Promise<any | null> {
    return db().orderSnapshot.findUnique({
      where: { v2OrderId },
    })
  }

  /**
   * 根据外部单号查询快照
   */
  static async findByExternalCode(externalCode: string): Promise<any | null> {
    return db().orderSnapshot.findFirst({
      where: { externalCode },
    })
  }

  /**
   * 判断数据是否新鲜
   */
  static async isFresh(snapshot: any, maxAgeMinutes: number = 30): Promise<boolean> {
    if (!snapshot?.syncedAt) return false

    const age = Date.now() - new Date(snapshot.syncedAt).getTime()
    return age < maxAgeMinutes * 60 * 1000
  }

  /**
   * 获取快照信息（包括数据新鲜度标记）
   */
  static async getWithFreshness(v2OrderId: string): Promise<{
    snapshot: any | null
    isFresh: boolean
    syncedAt?: Date
    source: "realtime" | "cache"
  }> {
    const snapshot = await this.findLocal(v2OrderId)

    if (!snapshot) {
      return { snapshot: null, isFresh: false, source: "cache" }
    }

    const isFresh = await this.isFresh(snapshot)

    return {
      snapshot,
      isFresh,
      syncedAt: snapshot.syncedAt,
      source: isFresh ? "realtime" : "cache",
    }
  }
}
