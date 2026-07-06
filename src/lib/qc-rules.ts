import { db } from "@/lib/prisma"

/**
 * 品控规则检查结果
 */
export interface QCRuleResult {
  triggered: boolean
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL"
  description: string
}

/**
 * 品控规则引擎
 * 根据可配置的品控规则自动判定扫描结果
 */
export class QCRuleEngine {
  private rules: Map<string, (data: QCRuleCheckData) => QCRuleResult> = new Map()

  constructor() {
    this.registerBuiltinRules()
  }

  /**
   * 注册内置规则
   */
  private registerBuiltinRules(): void {
    // 数量差异规则
    this.rules.set("quantity_diff_percent", (data) => {
      if (!data.ruleConfig) {
        return { triggered: false, severity: "LOW", description: "规则配置缺失" }
      }
      const threshold = data.ruleConfig.threshold as number
      const diffPercent = Math.abs(
        ((data.scannedQuantity - data.expectedQuantity) / data.expectedQuantity) * 100
      )

      if (data.ruleConfig.operator === "<") {
        return {
          triggered: diffPercent < threshold,
          severity: "LOW",
          description: `数量差异 ${diffPercent.toFixed(2)}% < 阈值 ${threshold}%`,
        }
      }

      return {
        triggered: diffPercent >= threshold,
        severity: diffPercent >= 20 ? "HIGH" : diffPercent >= 10 ? "MEDIUM" : "LOW",
        description: `数量差异 ${diffPercent.toFixed(2)}% >= 阈值 ${threshold}%`,
      }
    })

    // 破损等级规则
    this.rules.set("damage_level", (data) => {
      if (!data.ruleConfig) {
        return { triggered: false, severity: "LOW", description: "规则配置缺失" }
      }
      const threshold = data.ruleConfig.threshold as number
      const damageLevel = data.damageLevel || 0

      return {
        triggered: damageLevel >= threshold,
        severity: damageLevel >= 4 ? "CRITICAL" : damageLevel >= 3 ? "HIGH" : "MEDIUM",
        description: `破损等级 ${damageLevel} >= 阈值 ${threshold}`,
      }
    })

    // 规格不符规则
    this.rules.set("spec_mismatch", (data) => {
      if (!data.ruleConfig) {
        return { triggered: false, severity: "LOW", description: "规则配置缺失" }
      }
      const threshold = data.ruleConfig.threshold as number
      const tolerance = threshold / 100
      const expectedSpec = data.expectedSpec || ""
      const actualSpec = data.actualSpec || ""

      // 简单匹配：如果规格字符串不完全相同则视为不匹配
      // 实际项目中可能需要更复杂的规格对比逻辑
      const isMatch = expectedSpec === actualSpec

      return {
        triggered: !isMatch,
        severity: "MEDIUM",
        description: `规格不匹配：期望 "${expectedSpec}"，实际 "${actualSpec}"`,
      }
    })

    // 标签错误规则
    this.rules.set("label_error", (data) => {
      return {
        triggered: data.hasLabelError || false,
        severity: "HIGH",
        description: "标签错误或缺失",
      }
    })

    // 批次异常规则
    this.rules.set("batch_anomaly", (data) => {
      return {
        triggered: data.hasBatchAnomaly || false,
        severity: "HIGH",
        description: "批次异常（过期/临期/召回等）",
      }
    })
  }

  /**
   * 检查品控规则
   */
  async checkRules(data: QCRuleCheckData): Promise<QCRuleCheckResult[]> {
    // 从数据库加载启用的规则
    const rules = await db().qCRule.findMany({
      where: { isActive: true, exceptionType: data.exceptionType },
    })

    const results: QCRuleCheckResult[] = []

    for (const rule of rules) {
      const triggerCondition = rule.triggerCondition as {
        type: string
        threshold: number
        operator?: string
      }

      const checker = this.rules.get(triggerCondition.type)

      if (checker) {
        const result = checker({
          ...data,
          ruleConfig: triggerCondition,
        })

        results.push({
          ruleId: rule.id,
          ruleCode: rule.code,
          ruleName: rule.name,
          triggered: result.triggered,
          severity: result.severity as "LOW" | "MEDIUM" | "HIGH" | "CRITICAL",
          description: result.description,
          autoApprovalLevel: rule.autoApprovalLevel,
        })
      }
    }

    return results
  }

  /**
   * 判断扫描是否通过品控
   */
  async evaluateScan(data: QCRuleCheckData): Promise<{
    passed: boolean
    results: QCRuleCheckResult[]
    shouldHold: boolean
    shouldCreateTicket: boolean
    autoApprovalLevel: number
    description: string
  }> {
    const results = await this.checkRules(data)

    const triggeredResults = results.filter((r) => r.triggered)

    if (triggeredResults.length === 0) {
      return {
        passed: true,
        results: [],
        shouldHold: false,
        shouldCreateTicket: false,
        autoApprovalLevel: 1,
        description: "品控检查通过",
      }
    }

    // 取最高严重度
    const severityOrder = { CRITICAL: 4, HIGH: 3, MEDIUM: 2, LOW: 1 }
    const highestSeverity = triggeredResults.reduce((prev, current) => {
      return severityOrder[current.severity] > severityOrder[prev.severity] ? current : prev
    })

    const shouldHold = highestSeverity.severity === "HIGH" || highestSeverity.severity === "CRITICAL"
    const shouldCreateTicket = triggeredResults.some((r) => r.triggered)

    // 取最高审批级别
    const autoApprovalLevel = Math.max(...triggeredResults.map((r) => r.autoApprovalLevel))

    const description = triggeredResults
      .map((r) => `[${r.ruleName}] ${r.description}`)
      .join("；")

    return {
      passed: false,
      results: triggeredResults,
      shouldHold,
      shouldCreateTicket,
      autoApprovalLevel,
      description,
    }
  }
}

/**
 * 品控检查数据结构
 */
export interface QCRuleCheckData {
  orderSnapshotId: string
  skuCode: string
  skuName: string
  expectedQuantity: number
  scannedQuantity: number
  exceptionType: string
  // 可选字段
  damageLevel?: number
  expectedSpec?: string
  actualSpec?: string
  hasLabelError?: boolean
  hasBatchAnomaly?: boolean
  // 规则配置
  ruleConfig?: {
    type: string
    threshold: number
    operator?: string
  }
}

/**
 * 品控规则检查结果
 */
export interface QCRuleCheckResult {
  ruleId: string
  ruleCode: string
  ruleName: string
  triggered: boolean
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL"
  description: string
  autoApprovalLevel: number
}

/**
 * 品控检查最终结果
 */
export interface QCRuleCheckResultAggregated {
  passed: boolean
  results: QCRuleCheckResult[]
  shouldHold: boolean
  shouldCreateTicket: boolean
  autoApprovalLevel: number
  description: string
}

/**
 * 全局品控规则引擎实例
 */
export const qcRuleEngine = new QCRuleEngine()
