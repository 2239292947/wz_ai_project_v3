import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  console.log("开始初始化系统配置...")

  // 清空现有配置
  await prisma.systemConfig.deleteMany()

  // 分级审批金额阈值配置
  const approvalConfigs = [
    {
      configKey: "approval.level1.threshold",
      configValue: "5000",
      configType: "NUMBER",
      description: "一级审批金额阈值（低于此金额只需一级审批）",
      category: "APPROVAL",
    },
    {
      configKey: "approval.level2.threshold",
      configValue: "20000",
      configType: "NUMBER",
      description: "二级审批金额阈值（高于此金额需要二级审批）",
      category: "APPROVAL",
    },
    {
      configKey: "approval.resubmit.max_count",
      configValue: "3",
      configType: "NUMBER",
      description: "审批拒绝后最大重新提交次数",
      category: "APPROVAL",
    },
  ]

  // 超时时长配置（单位：秒）
  const timeoutConfigs = [
    {
      configKey: "timeout.approval.level1",
      configValue: "3600",
      configType: "NUMBER",
      description: "一级审批超时时长（秒）= 1小时",
      category: "TIMEOUT",
    },
    {
      configKey: "timeout.approval.level2",
      configValue: "7200",
      configType: "NUMBER",
      description: "二级审批超时时长（秒）= 2小时",
      category: "TIMEOUT",
    },
    {
      configKey: "timeout.qc.hold",
      configValue: "900",
      configType: "NUMBER",
      description: "品控暂扣超时时长（秒）= 15分钟，独立于审批超时",
      category: "TIMEOUT",
    },
    {
      configKey: "timeout.escalation.buffer",
      configValue: "300",
      configType: "NUMBER",
      description: "升级缓冲时间（秒）= 5分钟",
      category: "TIMEOUT",
    },
  ]

  // 品控规则触发阈值配置
  const qcConfigs = [
    {
      configKey: "qc.quantity_diff.threshold",
      configValue: "10",
      configType: "NUMBER",
      description: "数量差异阈值（百分比）= 10%",
      category: "QC",
    },
    {
      configKey: "qc.damage.level.threshold",
      configValue: "3",
      configType: "NUMBER",
      description: "破损等级阈值（1-5级，>=3级视为异常）",
      category: "QC",
    },
    {
      configKey: "qc.spec.tolerance",
      configValue: "0.05",
      configType: "NUMBER",
      description: "规格偏差容差（5%）",
      category: "QC",
    },
  ]

  // 物流异常类型映射配置
  const logisticsConfigs = [
    {
      configKey: "logistics.exception.lost",
      configValue: '{"action": "COMPENSATE_RESHOP", "compensation": true}',
      configType: "JSON",
      description: "丢件异常处理动作：赔付+重新发货",
      category: "LOGISTICS",
    },
    {
      configKey: "logistics.exception.damaged",
      configValue: '{"action": "COMPENSATE_RETURN", "compensation": true}',
      configType: "JSON",
      description: "破损异常处理动作：赔付+退货入库",
      category: "LOGISTICS",
    },
    {
      configKey: "logistics.exception.rejected",
      configValue: '{"action": "RESHIP", "compensation": false}',
      configType: "JSON",
      description: "拒收异常处理动作：重新发货",
      category: "LOGISTICS",
    },
    {
      configKey: "logistics.exception.timeout",
      configValue: '{"action": "COMPENSATE_ESCALATE", "compensation": true}',
      configType: "JSON",
      description: "超时未签收异常处理动作：赔付+升级",
      category: "LOGISTICS",
    },
    {
      configKey: "logistics.exception.address_error",
      configValue: '{"action": "RESHIP", "compensation": false}',
      configType: "JSON",
      description: "地址错误异常处理动作：重新发货",
      category: "LOGISTICS",
    },
  ]

  // 角色权限配置
  const roleConfigs = [
    {
      configKey: "role.operator.permissions",
      configValue: '["scan", "report_exception"]',
      configType: "JSON",
      description: "操作员权限：扫描、上报异常",
      category: "ROLE",
    },
    {
      configKey: "role.qc_supervisor.permissions",
      configValue: '["scan", "report_exception", "qc_review", "fast_release"]',
      configType: "JSON",
      description: "品控主管权限：扫描、上报异常、品控复核、快速放行",
      category: "ROLE",
    },
    {
      configKey: "role.approver.level1.permissions",
      configValue: '["approve_level1"]',
      configType: "JSON",
      description: "一级审批人权限：审批一级工单",
      category: "ROLE",
    },
    {
      configKey: "role.approver.level2.permissions",
      configValue: '["approve_level1", "approve_level2"]',
      configType: "JSON",
      description: "二级审批人权限：审批一级和二级工单",
      category: "ROLE",
    },
  ]

  // V2 数据同步配置
  const syncConfigs = [
    {
      configKey: "v2.sync.strategy",
      configValue: "realtime_on_report",
      configType: "STRING",
      description: "V2 数据同步策略：realtime_on_report（上报异常时实时同步）/ scheduled_batch（定时批量同步）",
      category: "SYNC",
    },
    {
      configKey: "v2.sync.interval_minutes",
      configValue: "30",
      configType: "NUMBER",
      description: "定时同步间隔（分钟），仅当使用 scheduled_batch 策略时生效",
      category: "SYNC",
    },
    {
      configKey: "v2.sync.timeout_seconds",
      configValue: "10",
      configType: "NUMBER",
      description: "V2 接口超时时间（秒）",
      category: "SYNC",
    },
    {
      configKey: "v2.sync.retry_count",
      configValue: "2",
      configType: "NUMBER",
      description: "V2 接口失败重试次数",
      category: "SYNC",
    },
  ]

  // 合并所有配置
  const allConfigs = [
    ...approvalConfigs,
    ...timeoutConfigs,
    ...qcConfigs,
    ...logisticsConfigs,
    ...roleConfigs,
    ...syncConfigs,
  ]

  // 批量创建
  for (const config of allConfigs) {
    await prisma.systemConfig.create({
      data: config,
    })
  }

  console.log(`✅ 成功初始化 ${allConfigs.length} 条系统配置`)
}

main()
  .catch((e) => {
    console.error("❌ 初始化失败:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
