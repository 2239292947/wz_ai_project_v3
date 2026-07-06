/**
 * 简化测试脚本：验证数据库连接和系统配置
 */
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  console.log("=== V3 系统数据库测试 ===\n")

  try {
    // 1. 测试数据库连接
    console.log("1. 测试数据库连接...")
    await prisma.$connect()
    console.log("✓ 数据库连接成功")

    // 2. 查询系统配置
    console.log("\n2. 查询系统配置...")
    const configs = await prisma.systemConfig.count()
    console.log(`✓ 系统配置数量: ${configs} 条`)

    // 3. 查询表结构
    console.log("\n3. 数据库表状态:")

    const [
      orderSnapshotCount,
      syncLogCount,
      scanRecordCount,
      exceptionTicketCount,
      approvalRecordCount,
      compensationRecordCount,
      inventoryRecordCount,
      qcRuleCount,
    ] = await Promise.all([
      prisma.orderSnapshot.count(),
      prisma.syncLog.count(),
      prisma.scanRecord.count(),
      prisma.exceptionTicket.count(),
      prisma.approvalRecord.count(),
      prisma.compensationRecord.count(),
      prisma.inventoryRecord.count(),
      prisma.qCRule.count(),
    ])

    console.log(`  ✓ OrderSnapshot: ${orderSnapshotCount} 条记录`)
    console.log(`  ✓ SyncLog: ${syncLogCount} 条记录`)
    console.log(`  ✓ ScanRecord: ${scanRecordCount} 条记录`)
    console.log(`  ✓ ExceptionTicket: ${exceptionTicketCount} 条记录`)
    console.log(`  ✓ ApprovalRecord: ${approvalRecordCount} 条记录`)
    console.log(`  ✓ CompensationRecord: ${compensationRecordCount} 条记录`)
    console.log(`  ✓ InventoryRecord: ${inventoryRecordCount} 条记录`)
    console.log(`  ✓ QCRule: ${qcRuleCount} 条记录`)

    // 4. 查询关键配置
    console.log("\n4. 关键配置项:")
    const keyConfigs = [
      "approval.level1.threshold",
      "approval.level2.threshold",
      "timeout.approval.level1",
      "timeout.approval.level2",
      "timeout.qc.hold",
      "qc.quantity_diff.threshold",
    ]

    for (const key of keyConfigs) {
      const config = await prisma.systemConfig.findUnique({
        where: { configKey: key },
      })
      if (config) {
        console.log(`  ✓ ${key} = ${config.configValue} (${config.configType})`)
      }
    }

    console.log("\n=== ✅ 所有测试通过 ===")
    console.log("\n数据库状态正常，可以启动开发服务器：")
    console.log("  npm run dev")
  } catch (error) {
    console.error("\n❌ 测试失败:", error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
