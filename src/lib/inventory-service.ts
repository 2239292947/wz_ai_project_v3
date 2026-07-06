import { db } from "@/lib/prisma"

export type InventoryChangeType =
  | "COMPENSATION_DEDUCT"
  | "COMPENSATION_ADD"
  | "RETURN_IN"
  | "RESHIP_DEDUCT"
  | "QC_RELEASE"
  | "QC_HOLD"

/**
 * 库存服务
 * 管理库存变更记录和查询
 */
export class InventoryService {
  /**
   * 创建库存变更记录
   */
  static async recordChange(data: {
    skuCode: string
    warehouseId: string
    quantityChange: number
    changeType: InventoryChangeType
    ticketId?: string
    approvalRecordId?: string
    operator: string
    remark: string
  }): Promise<void> {
    await db().inventoryRecord.create({
      data,
    })
  }

  /**
   * 查询库存变更历史
   */
  static async getHistory(filters: {
    skuCode?: string
    warehouseId?: string
    ticketId?: string
    startDate?: Date
    endDate?: Date
    page?: number
    pageSize?: number
  }): Promise<{
    records: any[]
    total: number
    page: number
    pageSize: number
  }> {
    const { page = 1, pageSize = 20, ...where } = filters
    const skip = (page - 1) * pageSize

    const [records, total] = await Promise.all([
      db().inventoryRecord.findMany({
        where: {
          ...(where.skuCode && { skuCode: where.skuCode }),
          ...(where.warehouseId && { warehouseId: where.warehouseId }),
          ...(where.ticketId && { ticketId: where.ticketId }),
          ...(where.startDate && { createdAt: { gte: where.startDate } }),
          ...(where.endDate && { createdAt: { lte: where.endDate } }),
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: pageSize,
      }),
      db().inventoryRecord.count({
        where: {
          ...(where.skuCode && { skuCode: where.skuCode }),
          ...(where.warehouseId && { warehouseId: where.warehouseId }),
          ...(where.ticketId && { ticketId: where.ticketId }),
          ...(where.startDate && { createdAt: { gte: where.startDate } }),
          ...(where.endDate && { createdAt: { lte: where.endDate } }),
        },
      }),
    ])

    return {
      records,
      total,
      page,
      pageSize,
    }
  }

  /**
   * 查询 SKU 当前库存总量
   */
  static async getSKUTotal(skuCode: string, warehouseId?: string): Promise<number> {
    const result = await db().inventoryRecord.aggregate({
      where: {
        skuCode,
        ...(warehouseId && { warehouseId }),
      },
      _sum: {
        quantityChange: true,
      },
    })

    return result._sum.quantityChange || 0
  }

  /**
   * 根据票证 ID 查询所有相关库存变更
   */
  static async getByTicketId(ticketId: string): Promise<any[]> {
    return db().inventoryRecord.findMany({
      where: { ticketId },
      orderBy: { createdAt: "asc" },
    })
  }
}
