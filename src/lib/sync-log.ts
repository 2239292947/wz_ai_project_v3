import { prisma } from "@/lib/prisma"
import { SystemConfigService } from "./system-config"

/**
 * 同步日志服务
 * 记录所有 V2 接口调用日志
 */
export class SyncLogService {
  /**
   * 记录接口调用
   */
  static async log(data: {
    apiName: string
    requestParams: Record<string, unknown>
    responseStatus: number
    responseBody?: string
    status: "SUCCESS" | "FAILED" | "TIMEOUT"
    errorMessage?: string
    duration: number
  }): Promise<void> {
    await prisma.syncLog.create({
      data: {
        apiName: data.apiName,
        requestParams: data.requestParams,
        responseStatus: data.responseStatus,
        responseBody: data.responseBody,
        status: data.status,
        errorMessage: data.errorMessage,
        duration: data.duration,
      },
    })
  }

  /**
   * 查询最近同步日志
   */
  static async getRecentLogs(filters: {
    apiName?: string
    status?: string
    limit?: number
  }): Promise<any[]> {
    const { limit = 50 } = filters

    return prisma.syncLog.findMany({
      where: {
        ...(filters.apiName && { apiName: filters.apiName }),
        ...(filters.status && { status: filters.status }),
      },
      orderBy: { createdAt: "desc" },
      take: limit,
    })
  }

  /**
   * 获取同步统计信息
   */
  static async getStats(since?: Date): Promise<{
    total: number
    success: number
    failed: number
    timeout: number
    avgDuration: number
    lastSyncAt?: Date
  }> {
    const where = since ? { createdAt: { gte: since } } : {}

    const [total, success, failed, timeout, avgDurationResult, lastSync] = await Promise.all([
      prisma.syncLog.count({ where }),
      prisma.syncLog.count({ where: { ...where, status: "SUCCESS" } }),
      prisma.syncLog.count({ where: { ...where, status: "FAILED" } }),
      prisma.syncLog.count({ where: { ...where, status: "TIMEOUT" } }),
      prisma.syncLog.aggregate({
        where,
        _avg: { duration: true },
      }),
      prisma.syncLog.findFirst({
        where,
        orderBy: { createdAt: "desc" },
        select: { createdAt: true },
      }),
    ])

    return {
      total,
      success,
      failed,
      timeout,
      avgDuration: Math.round(avgDurationResult._avg.duration || 0),
      lastSyncAt: lastSync?.createdAt,
    }
  }

  /**
   * 清理旧日志
   */
  static async cleanup(before: Date): Promise<number> {
    const result = await prisma.syncLog.deleteMany({
      where: { createdAt: { lt: before } },
    })

    return result.count
  }
}
