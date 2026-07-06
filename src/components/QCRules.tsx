"use client"

import { useState, useEffect } from "react"
import { Plus } from "lucide-react"
import { db } from "@/lib/prisma"

interface QCRule {
  id: string
  name: string
  code: string
  description: string
  exceptionType: string
  triggerCondition: any
  severity: string
  autoCreateTicket: boolean
  autoApprovalLevel: number
  isActive: boolean
}

export function QCRules() {
  const [rules, setRules] = useState<QCRule[]>([])
  const [loading, setLoading] = useState(true)
  const [showAddModal, setShowAddModal] = useState(false)

  useEffect(() => {
    loadRules()
  }, [])

  const loadRules = async () => {
    try {
      const res = await fetch("/api/qc-rules")
      const data = await res.json()
      if (data.success) {
        setRules(data.rules)
      }
    } catch (error) {
      console.error("Load rules error:", error)
    } finally {
      setLoading(false)
    }
  }

  const getSeverityBadge = (severity: string) => {
    const colors: Record<string, string> = {
      LOW: "bg-gray-100 text-gray-700",
      MEDIUM: "bg-blue-100 text-blue-700",
      HIGH: "bg-orange-100 text-orange-700",
      CRITICAL: "bg-red-100 text-red-700",
    }
    const labels: Record<string, string> = {
      LOW: "低",
      MEDIUM: "中",
      HIGH: "高",
      CRITICAL: "严重",
    }

    return (
      <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${colors[severity]}`}>
        {labels[severity] || severity}
      </span>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">品控规则管理</h1>
          <p className="mt-2 text-slate-600">配置品控检测触发条件和阈值</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-white hover:bg-teal-700"
        >
          <Plus className="h-4 w-4" />
          新增规则
        </button>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-slate-500">加载中...</div>
        ) : rules.length === 0 ? (
          <div className="p-8 text-center text-slate-500">暂无规则</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">规则编码</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">规则名称</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">异常类型</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">触发条件</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">严重度</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">自动审批级别</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">状态</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {rules.map((rule) => (
                  <tr key={rule.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{rule.code}</td>
                    <td className="px-6 py-4 text-sm text-slate-700">{rule.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{rule.exceptionType}</td>
                    <td className="px-6 py-4">
                      <pre className="text-xs text-slate-600">
                        {JSON.stringify(rule.triggerCondition, null, 2)}
                      </pre>
                    </td>
                    <td className="px-6 py-4">{getSeverityBadge(rule.severity)}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Level {rule.autoApprovalLevel}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                          rule.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {rule.isActive ? "启用" : "禁用"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 新增规则模态框（简化版） */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-lg rounded-lg bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">新增品控规则</h2>
            <p className="text-sm text-slate-600 mb-4">
              规则配置功能需要后台管理界面支持，当前版本请在数据库中直接配置或通过 API 创建。
            </p>
            <button
              onClick={() => setShowAddModal(false)}
              className="rounded-lg bg-slate-200 px-4 py-2 text-slate-700 hover:bg-slate-300"
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
