/**
 * 测试脚本：审批流程
 *
 * 模拟完整的分级审批流程
 */
import { PrismaClient } from "../src/generated/prisma"
import { ApprovalEngine } from "../src/lib/approval-engine"

const prisma = new PrismaClient()

async function main() {
  console.log("=== 测试：分级审批流程 ===\n")

  try {
    // 1. 查找一个待审批工单
    console.log("1. 查找待审批工单...")
    const ticket = await prisma.exceptionTicket.findFirst({
      where: { status: "PENDING" },
      include: { orderSnapshot: true },
    })

    if (!ticket) {
      console.log("没有找到待审批工单，请先运行 test-create-ticket.ts 创建工单")
      return
    }

    console.log("✓ 找到工单:", ticket.ticketNo)
    console.log("  当前状态:", ticket.status)
    console.log("  金额:", ticket.orderSnapshot.amount)

    // 2. 一级审批通过
    console.log("\n2. 一级审批通过...")
    const result1 = await ApprovalEngine.approve(
      ticket.id,
      "APPROVE",
      "approver-001",
      "一级审批人",
      "审核通过，符合审批标准"
    )

    if (result1.success) {
      console.log("✓ 一级审批通过")
      console.log("  新状态:", result1.ticket?.status)
      console.log("  审批级别:", result1.ticket?.currentApprovalLevel)

      // 3. 如果需要二级审批，继续二级审批
      if (result1.ticket?.status === "LEVEL2_APPROVING") {
        console.log("\n3. 需要二级审批...")
        const result2 = await ApprovalEngine.approve(
          ticket.id,
          "APPROVE",
          "approver-002",
          "二级审批人",
          "复核通过"
        )

        if (result2.success) {
          console.log("✓ 二级审批通过")
          console.log("  最终状态:", result2.ticket?.status)
        } else {
          console.error("二级审批失败:", result2.error)
        }
      }
    } else {
      console.error("一级审批失败:", result1.error)
    }

    console.log("\n=== 测试完成 ===")
  } catch (error) {
    console.error("测试失败:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
