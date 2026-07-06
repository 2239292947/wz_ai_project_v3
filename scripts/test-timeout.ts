/**
 * 测试脚本：超时处理
 *
 * 模拟审批超时和品控暂扣超时的自动处理
 */
import { PrismaClient } from "@prisma/client"
import { ApprovalEngine } from "../src/lib/approval-engine"
import { QCHoldTimeoutService } from "../src/lib/approval-engine"

const prisma = new PrismaClient()

async function main() {
  console.log("=== 测试：超时处理 ===\n")

  try {
    // 1. 创建一个 2 小时前的待审批工单（模拟超时）
    console.log("1. 创建模拟超时的工单...")
    const ticket = await prisma.exceptionTicket.create({
      data: {
        ticketNo: `TIMEOUT-TEST-${Date.now()}`,
        orderSnapshotId: "order-001", // 假设存在
        exceptionType: "LOGISTICS",
        source: "MANUAL_LOGISTICS",
        category: "lost",
        description: "测试超时工单",
        status: "PENDING",
        priority: "MEDIUM",
        currentApprovalLevel: 1,
        submittedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2小时前
        maxResubmitCount: 3,
        submittedBy: "测试用户",
      },
    })

    console.log("✓ 工单创建成功:", ticket.ticketNo)
    console.log("  提交时间:", new Date(ticket.submittedAt).toLocaleString())
    console.log("  已超时:", true)

    // 2. 处理审批超时
    console.log("\n2. 处理审批超时工单...")
    const approvalResult = await ApprovalEngine.processTimeouts()
    console.log("✓ 处理完成")
    console.log("  处理数量:", approvalResult.processed)
    console.log("  升级数量:", approvalResult.escalated)

    // 3. 处理品控暂扣超时
    console.log("\n3. 处理品控暂扣超时...")
    const qcResult = await QCHoldTimeoutService.processTimeouts()
    console.log("✓ 处理完成")
    console.log("  处理数量:", qcResult.processed)
    console.log("  升级数量:", qcResult.escalated)

    // 4. 验证工单状态
    console.log("\n4. 验证工单状态...")
    const updatedTicket = await prisma.exceptionTicket.findUnique({
      where: { id: ticket.id },
    })
    console.log("  当前状态:", updatedTicket?.status)

    console.log("\n=== 测试完成 ===")
  } catch (error) {
    console.error("测试失败:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
