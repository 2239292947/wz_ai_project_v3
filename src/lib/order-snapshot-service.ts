import { prisma } from "@/lib/prisma"
import { SystemConfigService } from "./system-config"
import { v2Api } from "./v2-api"
import { SyncLogService } from "./sync-log"

/**
 * 订单快照服务
 * 管理从 V2 同步的运单快照数据
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
    const startTime = Date.now()

    try {
      // 1. 调用 V2 接口获取订单详情
      const result = await v2Api.validateOrder(v2OrderId)

      if (!result.exists || !result.order) {
        // 记录失败日志
        await SyncLogService.log({
          apiName: "validateOrder",
          requestParams: { orderId: v2OrderId },
          responseStatus: 404,
          status: "FAILED",
          errorMessage: result.error,
          duration: Date.now() - startTime,
        })

        return { success: false, error: result.error }
      }

      const order = result.order

      // 2. 保存到本地快照
      const snapshot = await prisma.orderSnapshot.upsert({
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

      // 3. 记录成功日志
      await SyncLogService.log({
        apiName: "validateOrder",
        requestParams: { orderId: v2OrderId },
        responseStatus: 200,
        status: "SUCCESS",
        duration: Date.now() - startTime,
      })

      return { success: true, snapshot }
    } catch (error) {
      // 记录错误日志
      await SyncLogService.log({
        apiName: "validateOrder",
        requestParams: { orderId: v2OrderId },
        responseStatus: 500,
        status: "FAILED",
        errorMessage: (error as Error).message,
        duration: Date.now() - startTime,
      })

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
        await SyncLogService.log({
          apiName: "batchSync",
          requestParams: params,
          responseStatus: 500,
          status: "FAILED",
          errorMessage: result.error,
          duration: Date.now() - startTime,
        })

        return { success: false, synced: 0, failed: 0, error: result.error }
      }

      let synced = 0
      let failed = 0

      // 批量保存
      for (const order of result.orders) {
        try {
          await prisma.orderSnapshot.upsert({
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

      await SyncLogService.log({
        apiName: "batchSync",
        requestParams: params,
        responseStatus: 200,
        status: "SUCCESS",
        duration: Date.now() - startTime,
      })

      return { success: true, synced, failed }
    } catch (error) {
      await SyncLogService.log({
        apiName: "batchSync",
        requestParams: params,
        responseStatus: 500,
        status: "FAILED",
        errorMessage: (error as Error).message,
        duration: Date.now() - startTime,
      })

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
    return prisma.orderSnapshot.findUnique({
      where: { v2OrderId },
    })
  }

  /**
   * 根据外部单号查询快照
   */
  static async findByExternalCode(externalCode: string): Promise<any | null> {
    return prisma.orderSnapshot.findFirst({
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
