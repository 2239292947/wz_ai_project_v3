import { db } from "@/lib/prisma"

export type ConfigCategory = "APPROVAL" | "TIMEOUT" | "QC" | "LOGISTICS" | "ROLE" | "SYNC" | "NOTIFICATION"

/**
 * 系统配置服务
 * 用于管理分级审批金额阈值、超时时长等可配置参数
 */
export class SystemConfigService {
  /**
   * 获取配置值
   */
  static async get<T = string>(key: string, defaultValue?: T): Promise<T> {
    const config = await db().systemConfig.findUnique({
      where: { configKey: key },
    })

    if (!config) {
      if (defaultValue !== undefined) {
        return defaultValue
      }
      throw new Error(`System config not found: ${key}`)
    }

    return this.parseValue(config.configValue, config.configType) as T
  }

  /**
   * 批量获取配置
   */
  static async getByCategory(category: ConfigCategory): Promise<Record<string, unknown>> {
    const configs = await db().systemConfig.findMany({
      where: { category, isActive: true },
    })

    const result: Record<string, unknown> = {}
    for (const config of configs) {
      result[config.configKey] = this.parseValue(config.configValue, config.configType)
    }

    return result
  }

  /**
   * 获取所有配置
   */
  static async getAll(): Promise<Record<string, unknown>> {
    const configs = await db().systemConfig.findMany({
      where: { isActive: true },
    })

    const result: Record<string, unknown> = {}
    for (const config of configs) {
      result[config.configKey] = this.parseValue(config.configValue, config.configType)
    }

    return result
  }

  /**
   * 设置配置
   */
  static async set(key: string, value: unknown, type: string, description?: string, category?: string): Promise<void> {
    const configValue = typeof value === "string" ? value : JSON.stringify(value)

    await db().systemConfig.upsert({
      where: { configKey: key },
      create: {
        configKey: key,
        configValue,
        configType: type,
        description,
        category: category || "GENERAL",
      },
      update: {
        configValue,
        description,
        category: category || "GENERAL",
        updatedAt: new Date(),
      },
    })
  }

  /**
   * 解析配置值
   */
  private static parseValue(value: string, type: string): unknown {
    switch (type) {
      case "NUMBER":
        return parseFloat(value)
      case "BOOLEAN":
        return value === "true"
      case "JSON":
        return JSON.parse(value)
      case "STRING":
      default:
        return value
    }
  }
}
