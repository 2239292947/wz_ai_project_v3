"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, FileText, AlertCircle, HelpCircle } from "lucide-react"

const assumptions = [
  {
    id: 1,
    title: "分级审批金额阈值",
    content: {
      assumption: "一级审批阈值 5,000 元，二级审批阈值 20,000 元",
      reason: "参考国内企业常见审批分级：5,000 元以下为部门级审批，20,000 元以上需要总监/副总经理级审批。此阈值可根据实际业务调整，已配置为可系统配置项。",
    },
  },
  {
    id: 2,
    title: "审批超时时长",
    content: {
      assumption: "一级审批超时 1 小时（3600 秒），二级审批超时 2 小时（7200 秒）",
      reason: "一级审批通常为部门负责人，响应较快；二级审批可能需要跨部门协调，给予更长时间。超时后自动升级到下一级或自动驳回（具体策略可配置）。",
    },
  },
  {
    id: 3,
    title: "重提次数上限",
    content: {
      assumption: "审批驳回后允许重新提交最多 3 次",
      reason: "平衡用户体验与风险控制：允许合理的修改完善空间，但避免无限循环。超过 3 次后工单自动关闭，需重新上报。",
    },
  },
  {
    id: 4,
    title: "物流异常类型映射",
    content: {
      assumption: `丢件/破损：赔付给客户 + 重新发货/退货入库
拒收：重新发货（不赔付）
超时未签收：赔付给客户 + 升级处理
地址错误：重新发货（不赔付）`,
      reason: "基于物流行业常见处理规则：丢件/破损属于承运方责任，需赔付；拒收可能因客户原因，不赔付；地址错误属于下单失误，只需重新发货。",
    },
  },
  {
    id: 5,
    title: "角色权限划分",
    content: {
      assumption: `操作员：扫描、上报异常
品控主管：扫描、上报异常、品控复核、快速放行
一级审批人：审批一级工单
二级审批人：审批一级和二级工单`,
      reason: "职责分离原则：操作员只负责数据录入和异常发现；品控主管有品控专业判断权；审批人分层级，避免权限过大。自批自核明确禁止。",
    },
  },
  {
    id: 6,
    title: "V2 数据同步频率与一致性策略",
    content: {
      assumption: "实时同步（上报异常时同步） + 本地快照缓存（30 分钟内有效）",
      reason: "选择实时同步而非定时批量同步的理由：异常处理通常需要最新的运单信息（金额、状态等），定时同步可能导致数据不一致。本地快照用于降级展示（V2 不可用时）。",
    },
  },
  {
    id: 7,
    title: "品控暂扣超时时长",
    content: {
      assumption: "15 分钟（900 秒），独立于审批超时时长",
      reason: "品控暂扣意味着货物被锁定在仓库，产生仓储成本，应比审批环节超时时长更短。15 分钟给予仓库人员足够时间处理，但不会无限期压货。独立配置是为了分别优化：品控处理效率 vs 审批决策时间。",
    },
  },
  {
    id: 8,
    title: "品控规则触发阈值",
    content: {
      assumption: `数量差异：≥ 10% 触发异常
破损等级：≥ 3 级（1-5级）触发异常
规格偏差：严格匹配（偏差 > 5% 视为异常）
标签错误：缺失或明显错误即触发
批次异常：过期/临期/召回等立即触发`,
      reason: "数量差异 10% 是仓储行业常见阈值；破损等级 3 级以上视为明显破损；规格偏差 5% 以内允许合理误差。所有阈值均为可配置项。",
    },
  },
  {
    id: 9,
    title: "品控主管角色权限边界",
    content: {
      assumption: `品控主管权限：扫描、上报异常、品控复核、快速放行
品控主管 ≠ 审批人：品控主管不能审批自己触发的工单（自批自核禁止）
快速放行 ≠ 审批：快速放行绕过完整审批流程，但必须填写复核原因留痕`,
      reason: "品控主管有专业判断权，可以快速处理误判情况，提高效率。但权限与审批人分离，避免利益冲突。快速放行需留痕保证可追溯性。",
    },
  },
]

const questions = [
  "品控暂扣超时后是自动升级还是自动驳回？当前设计为升级到二级审批。",
  "同一运单是否存在不同类型异常工单并存的场景？当前设计允许并存。",
  "降级处理的具体折扣比例是多少？当前设计为系统配置项，默认 8 折。",
  "多商户/多仓库场景下的数据隔离如何实现？当前为单租户假设，多租户需增加 tenant_id 字段。",
  "V2 接口鉴权机制是否已经实现？当前使用简单 API Key，生产环境建议升级到 JWT/OAuth。",
  "品控规则引擎是否支持规则组合（多个规则同时触发）？当前设计支持，取最高严重度。",
  "库存数据是否独立于 V2/WMS？当前设计为 V3 自有库存记录，通过接口与 V2 同步。",
  "批量生成测试数据的脚本是否提供？当前仅提供数据模型，需另行开发 seed 脚本。",
]

export function AssumptionsDoc() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">需求理解与假设说明</h1>
        <p className="mt-2 text-slate-600">
          本说明文档记录了在需求文档基础上所做的假设和补充，以及每项假设的依据。
        </p>
      </div>

      {/* 假设说明 */}
      <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-900">九项核心假设说明</h2>
          <p className="mt-1 text-sm text-slate-600">
            基于需求文档 3.4 业务规则留白部分
          </p>
        </div>

        <div className="divide-y divide-slate-200">
          {assumptions.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => toggleExpand(item.id)}
                className="flex w-full items-center justify-between p-6 text-left hover:bg-slate-50"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-sm font-medium text-teal-700">
                    {item.id}
                  </span>
                  <span className="font-medium text-slate-900">{item.title}</span>
                </div>
                {expandedId === item.id ? (
                  <ChevronDown className="h-5 w-5 text-slate-400" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-slate-400" />
                )}
              </button>

              {expandedId === item.id && (
                <div className="border-t border-slate-200 bg-slate-50 p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-slate-700">
                        <FileText className="mr-2 inline h-4 w-4" />
                        假设内容
                      </h4>
                      <p className="whitespace-pre-line text-sm text-slate-600">
                        {item.content.assumption}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-slate-700">
                        <AlertCircle className="mr-2 inline h-4 w-4" />
                        设定依据
                      </h4>
                      <p className="whitespace-pre-line text-sm text-slate-600">
                        {item.content.reason}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 待澄清问题 */}
      <div className="rounded-lg border border-amber-200 bg-amber-50 shadow-sm">
        <div className="border-b border-amber-200 p-6">
          <h2 className="text-xl font-semibold text-amber-900">
            <HelpCircle className="mr-2 inline h-5 w-5" />
            待产品经理澄清的问题
          </h2>
          <p className="mt-1 text-sm text-amber-700">
            以下问题在实际项目中需要向产品经理确认
          </p>
        </div>

        <div className="p-6">
          <ul className="space-y-3">
            {questions.map((question, index) => (
              <li key={index} className="flex gap-3 text-sm text-amber-900">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-medium">
                  {index + 1}
                </span>
                <span>{question}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 多租户说明 */}
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">多租户假设说明</h2>
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            <strong>当前假设：</strong>单租户系统。V3 当前为单租户设计，未实现多商户/多仓库的数据隔离。
          </p>
          <p>
            <strong>如果要支持多租户，需要调整以下表结构：</strong>
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              在所有业务表（exception_tickets、scan_records、inventory_records 等）增加
              tenant_id 字段
            </li>
            <li>所有查询必须带 tenant_id 过滤条件</li>
            <li>用户权限模型增加租户关联</li>
            <li>接口鉴权需要携带租户信息</li>
          </ul>
          <p>
            <strong>查询逻辑调整：</strong>所有 API 的 where 条件需包含{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5">tenant_id</code>，
            禁止跨租户数据访问。
          </p>
        </div>
      </div>
    </div>
  )
}
