import { db } from "@/lib/prisma"
import type { Prisma } from "@/generated/prisma"
import { SystemConfigService } from "./system-config"
import { v2Api } from "./v2-api"
import { SyncLogService } from "./sync-log"

/**
 * 审批流程异常
 */
export class ApprovalError extends Error {
  constructor(
    message: string,
    public code: string
  ) {
    super(message)
    this.name = "ApprovalError"
  }
}

/**
 * 审批流程引擎
 * 处理工单的审批流转、超时、冲突检测等
 */
export class ApprovalEngine {
  /**
   * 获取工单当前审批层级所需的阈值
   */
  static async getApprovalThreshold(level: number): Promise<number> {
    if (level === 1) {
      return SystemConfigService.get<number>("approval.level1.threshold", 5000)
    } else if (level === 2) {
      return SystemConfigService.get<number>("approval.level2.threshold", 20000)
    }
    return Infinity
  }

  /**
   * 判断是否需要升级到二级审批
   */
  static async shouldEscalateToLevel2(amount: number): Promise<boolean> {
    const threshold = await this.getApprovalThreshold(2)
    return amount > threshold
  }

  /**
   * 获取超时时长（秒）
   */
  static async getTimeout(level: number): Promise<number> {
    if (level === 1) {
      return SystemConfigService.get<number>("timeout.approval.level1", 3600)
    } else if (level === 2) {
      return SystemConfigService.get<number>("timeout.approval.level2", 7200)
    }
    return 3600
  }

  /**
   * 获取最大重提次数
   */
  static async getMaxResubmitCount(): Promise<number> {
    return SystemConfigService.get<number>("approval.resubmit.max_count", 3)
  }

  /**
   * 创建审批动作（带并发冲突检测）
   *
   * 使用乐观锁机制防止并发冲突：
   * 1. 读取工单当前状态
   * 2. 检查是否已被处理
   * 3. 在事务中更新状态
   */
  static async approve(
    ticketId: string,
    action: "APPROVE" | "REJECT" | "ESCALATE" | "TRANSFER",
    approverId: string,
    approverName: string,
    comment: string
  ): Promise<{
    success: boolean
    ticket?: {
      id: string
      status: string
      currentApprovalLevel: number
    }
    approvalRecord?: {
      id: string
      action: string
    }
    error?: string
  }> {
    // 1. 读取工单当前状态
    const ticket = await db().exceptionTicket.findUnique({
      where: { id: ticketId },
      include: {
        orderSnapshot: true,
      },
    })

    if (!ticket) {
      return { success: false, error: "工单不存在" }
    }

    // 2. 并发冲突检测：检查工单是否已被处理
    const now = new Date()
    const timeout = await this.getTimeout(ticket.currentApprovalLevel)
    const submittedAt = new Date(ticket.submittedAt)
    const elapsedSeconds = (now.getTime() - submittedAt.getTime()) / 1000

    // 如果工单已经不在待审批状态，说明已被处理
    const isPending =
      ticket.status === "PENDING" ||
      ticket.status === "LEVEL1_APPROVING" ||
      ticket.status === "LEVEL2_APPROVING"

    if (!isPending) {
      return {
        success: false,
        error: `该工单已被处理，当前状态：${ticket.status}，请刷新`,
      }
    }

    // 3. 在事务中执行审批逻辑
    return await db().$transaction(async (tx: Prisma.TransactionClient) => {
      // 重新读取工单（事务内）
      const currentTicket = await tx.exceptionTicket.findUnique({
        where: { id: ticketId },
      })

      if (!currentTicket) {
        throw new ApprovalError("工单不存在", "TICKET_NOT_FOUND")
      }

      // 权限校验：上报人不能审批自己的工单
      if (currentTicket.submittedBy === approverId) {
        throw new ApprovalError("不能审批自己提交的工单", "SELF_APPROVAL_NOT_ALLOWED")
      }

      // 根据当前状态和动作决定下一步
      let nextStatus = currentTicket.status
      let nextApprovalLevel = currentTicket.currentApprovalLevel
      let shouldComplete = false

      switch (currentTicket.status) {
        case "PENDING":
          // 待审批 -> 进入一级审批
          if (action === "APPROVE") {
            nextStatus = "LEVEL1_APPROVING"
          } else if (action === "REJECT") {
            // 检查重提次数
            const maxResubmit = await this.getMaxResubmitCount()
            if (currentTicket.resubmitCount >= maxResubmit) {
              // 超过重提次数，自动关闭
              nextStatus = "CANCELLED"
              shouldComplete = true
            } else {
              nextStatus = "REJECTED"
            }
          } else if (action === "ESCALATE") {
            nextStatus = "LEVEL2_APPROVING"
            nextApprovalLevel = 2
          }
          break

        case "LEVEL1_APPROVING":
          // 一级审批中
          if (action === "APPROVE") {
            // 检查是否需要二级审批（金额来源：工单录入的异常金额 / 运单货值；V2 解析运单无金额字段）
            const amount = currentTicket.amount ?? 0
            const needsLevel2 = await this.shouldEscalateToLevel2(amount)

            if (needsLevel2) {
              nextStatus = "LEVEL2_APPROVING"
              nextApprovalLevel = 2
            } else {
              nextStatus = "EXECUTING"
              shouldComplete = true
            }
          } else if (action === "REJECT") {
            const maxResubmit = await this.getMaxResubmitCount()
            if (currentTicket.resubmitCount >= maxResubmit) {
              nextStatus = "CANCELLED"
              shouldComplete = true
            } else {
              nextStatus = "REJECTED"
            }
          } else if (action === "ESCALATE") {
            nextStatus = "LEVEL2_APPROVING"
            nextApprovalLevel = 2
          }
          break

        case "LEVEL2_APPROVING":
          // 二级审批中
          if (action === "APPROVE") {
            nextStatus = "EXECUTING"
            shouldComplete = true
          } else if (action === "REJECT") {
            const maxResubmit = await this.getMaxResubmitCount()
            if (currentTicket.resubmitCount >= maxResubmit) {
              nextStatus = "CANCELLED"
              shouldComplete = true
            } else {
              nextStatus = "REJECTED"
            }
          }
          break
      }

      // 4. 更新工单状态
      const updatedTicket = await tx.exceptionTicket.update({
        where: { id: ticketId },
        data: {
          status: nextStatus,
          currentApprovalLevel: nextApprovalLevel,
          resubmitCount:
            action === "REJECT" ? { increment: 1 } : undefined,
          completedAt: shouldComplete ? now : undefined,
        },
      })

      // 5. 创建审批记录
      const approvalRecord = await tx.approvalRecord.create({
        data: {
          ticketId,
          approvalLevel: currentTicket.currentApprovalLevel,
          approverId,
          approverName,
          action,
          comment,
          approvedAt: now,
        },
      })

      // 6. 如果审批通过，触发执行联动
      if (shouldComplete && action === "APPROVE") {
        await this.triggerExecution(tx, updatedTicket, approvalRecord.id)
      }

      return {
        success: true,
        ticket: {
          id: updatedTicket.id,
          status: updatedTicket.status,
          currentApprovalLevel: updatedTicket.currentApprovalLevel,
        },
        approvalRecord: {
          id: approvalRecord.id,
          action: approvalRecord.action,
        },
      }
    })
  }

  /**
   * 触发执行联动（赔付/库存等）
   */
  private static async triggerExecution(
    tx: any,
    ticket: any,
    approvalRecordId: string
  ): Promise<void> {
    const { category, exceptionType, orderSnapshot } = ticket

    // 根据异常类型执行不同的动作
    if (exceptionType === "LOGISTICS") {
      await this.executeLogisticsAction(tx, ticket, approvalRecordId)
    } else if (exceptionType === "QC") {
      await this.executeQCAction(tx, ticket, approvalRecordId)
    }
  }

  /**
   * 执行物流异常动作
   */
  private static async executeLogisticsAction(tx: any, ticket: any, approvalRecordId: string): Promise<void> {
    const config = await SystemConfigService.get(
      `logistics.exception.${ticket.category}`,
      { action: "COMPENSATE_RESHOP", compensation: true }
    )

    switch (config.action) {
      case "COMPENSATE_RESHOP":
        // 赔付 + 重新发货（扣减库存）
        await this.createCompensation(tx, ticket, approvalRecordId, "TO_CUSTOMER")
        await this.adjustInventory(tx, ticket, "RESHIP_DEDUCT", -1)
        break

      case "COMPENSATE_RETURN":
        // 赔付 + 退货入库（增加库存）
        await this.createCompensation(tx, ticket, approvalRecordId, "TO_CUSTOMER")
        await this.adjustInventory(tx, ticket, "RETURN_IN", 1)
        break

      case "RESHIP":
        // 重新发货（扣减库存）
        await this.adjustInventory(tx, ticket, "RESHIP_DEDUCT", -1)
        break

      case "COMPENSATE_ESCALATE":
        // 赔付 + 升级
        await this.createCompensation(tx, ticket, approvalRecordId, "TO_CUSTOMER")
        break
    }
  }

  /**
   * 执行品控异常动作
   */
  private static async executeQCAction(tx: any, ticket: any, approvalRecordId: string): Promise<void> {
    switch (ticket.category) {
      case "RELEASE":
        // 放行货物（批次解锁）
        await this.releaseBatchHold(tx, ticket)
        break

      case "RETURN_SUPPLIER":
        // 退回供应商 + 向供应商追偿
        await this.createCompensation(tx, ticket, approvalRecordId, "FROM_SUPPLIER")
        await this.adjustInventory(tx, ticket, "RETURN_IN", 1)
        break

      case "REPURCHASE":
        // 重新采购 + 向供应商追偿
        await this.createCompensation(tx, ticket, approvalRecordId, "FROM_SUPPLIER")
        // 生成采购任务（这里可以创建采购工单）
        break

      case "DOWNGRADE":
        // 降级处理（降价出库）
        await this.createCompensation(tx, ticket, approvalRecordId, "FROM_SUPPLIER")
        await this.adjustInventory(tx, ticket, "QC_RELEASE", 0)
        break
    }
  }

  /**
   * 创建赔付记录
   */
  private static async createCompensation(
    tx: any,
    ticket: any,
    approvalRecordId: string,
    direction: "TO_CUSTOMER" | "FROM_SUPPLIER"
  ): Promise<void> {
    // 根据金额和规则计算赔付金额（金额来源：工单录入的异常金额 / 运单货值）
    const amount = ticket.amount ?? ticket.orderSnapshot?.amount ?? 0
    const compensationAmount = direction === "TO_CUSTOMER" ? amount * 0.8 : amount * 0.5

    await tx.compensationRecord.create({
      data: {
        ticketId: ticket.id,
        approvalRecordId,
        amount: compensationAmount,
        direction,
        status: "PENDING",
        reason: `${direction === "TO_CUSTOMER" ? "赔付给客户" : "向供应商追偿"}：${ticket.category}`,
      },
    })
  }

  /**
   * 调整库存
   */
  private static async adjustInventory(
    tx: any,
    ticket: any,
    changeType: string,
    quantityChange: number
  ): Promise<void> {
    // 获取 SKU 列表（从订单快照）
    const items = ticket.orderSnapshot.itemsJson as any[]

    for (const item of items) {
      await tx.inventoryRecord.create({
        data: {
          skuCode: item.skuCode,
          warehouseId: "default",
          quantityChange: quantityChange * item.quantity,
          changeType: changeType as any,
          ticketId: ticket.id,
          operator: "system",
          remark: `自动调整：${ticket.ticketNo} - ${ticket.category}`,
        },
      })
    }
  }

  /**
   * 解除批次锁定
   */
  private static async releaseBatchHold(tx: any, ticket: any): Promise<void> {
    // 更新相关扫描记录的批次状态
    await tx.scanRecord.updateMany({
      where: {
        ticketId: ticket.id,
        batchStatus: "QC_HOLD",
      },
      data: {
        batchStatus: "NORMAL",
      },
    })
  }

  /**
   * 处理超时工单
   */
  static async processTimeouts(): Promise<{ processed: number; escalated: number }> {
    const now = new Date()
    let processed = 0
    let escalated = 0

    // 查找所有待审批工单
    const pendingTickets = await db().exceptionTicket.findMany({
      where: {
        status: { in: ["PENDING", "LEVEL1_APPROVING", "LEVEL2_APPROVING"] },
      },
      include: {
        orderSnapshot: true,
      },
    })

    for (const ticket of pendingTickets) {
      const submittedAt = new Date(ticket.submittedAt)
      const level = ticket.currentApprovalLevel
      const timeout = await this.getTimeout(level)
      const elapsedSeconds = (now.getTime() - submittedAt.getTime()) / 1000

      if (elapsedSeconds > timeout) {
        // 超时处理：自动升级或驳回
        const shouldEscalate = level === 1 || (level === 2 && elapsedSeconds > timeout * 1.5)

        if (shouldEscalate) {
          // 升级到二级审批
          await db().exceptionTicket.update({
            where: { id: ticket.id },
            data: {
              status: "LEVEL2_APPROVING",
              currentApprovalLevel: 2,
            },
          })
          escalated++
        } else {
          // 自动驳回
          await db().exceptionTicket.update({
            where: { id: ticket.id },
            data: {
              status: "CANCELLED",
              completedAt: now,
            },
          })
        }
        processed++
      }
    }

    return { processed, escalated }
  }
}

/**
 * 品控暂扣超时处理
 */
export class QCHoldTimeoutService {
  /**
   * 处理超时的品控暂扣批次
   */
  static async processTimeouts(): Promise<{ processed: number; escalated: number }> {
    const qcHoldTimeout = await SystemConfigService.get<number>("timeout.qc.hold", 900)
    const now = new Date()
    let processed = 0
    let escalated = 0

    // 查找所有处于 QC_HOLD 状态的扫描记录
    const holdRecords = await db().scanRecord.findMany({
      where: {
        batchStatus: "QC_HOLD",
        ticketId: { not: null },
      },
      include: {
        ticket: {
          include: {
            orderSnapshot: true,
          },
        },
      },
    })

    for (const record of holdRecords) {
      if (!record.ticket) continue

      const scanTime = new Date(record.scanTime)
      const elapsedSeconds = (now.getTime() - scanTime.getTime()) / 1000

      if (elapsedSeconds > qcHoldTimeout) {
        // 品控暂扣超时：强制升级到二级审批
        if (record.ticket.status === "PENDING" || record.ticket.status === "LEVEL1_APPROVING") {
          await db().exceptionTicket.update({
            where: { id: record.ticket.id },
            data: {
              status: "LEVEL2_APPROVING",
              currentApprovalLevel: 2,
            },
          })
          escalated++
        }
        processed++
      }
    }

    return { processed, escalated }
  }
}
