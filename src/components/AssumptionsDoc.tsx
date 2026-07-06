"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, FileText, AlertCircle, HelpCircle } from "lucide-react"

const assumptions = [
  {
    id: 1,
    title: "分级审批金额阈值",
    content: {
      assumption: "一级审批阈值 5,000 元，二级审批阈值 20,000 元；用于比对的「异常金额」由上报人在 V3 录入",
      reason: "参考国内企业常见审批分级：5,000 元以下为部门级审批，20,000 元以上需要总监/副总经理级审批。此阈值已配置为可系统配置项（system_config）。\n特别说明（金额数据来源）：V2 的录单解析产出的运单模型不含「金额」字段（解析源为出库单文本，无货值信息），因此本系统不直接依赖 V2 返回金额，而是由上报人在提交异常工单时录入「异常涉及金额 / 运单货值」（存储于 ExceptionTicket.amount），作为分级审批阈值比对与赔付计算的统一依据。这样既能驱动可配置的金额分级，又不强制要求改造 V2 的解析引擎。",
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
      assumption: "实时同步（上报异常时实时调用 V2 接口校验） + 本地只读快照缓存（标注同步时间）",
      reason: "选择实时校验而非定时批量同步的理由：异常处理必须基于真实存在的运单，定时同步可能造成「凭过期缓存把不存在的运单校验成存在」的伪对接。\n关键降级边界（已在代码中落实）：\n• V2 明确返回「运单不存在 / SKU 不存在」（HTTP 404 或 success:false）——这是业务上的真实结论，V3 直接判为不存在，绝不回退到本地快照去「凑」一个存在的运单；\n• 仅当 V2 整体不可达（网络错误 / 超时 / 5xx）时，才降级到本地快照继续展示，并在前端明确标注「数据可能非最新，获取自某时间」；\n• 本地快照为只读缓存，不回写运单状态，运单状态以 V2 为准。\n每次跨系统调用均生成可追踪 Request ID 并写入接口同步日志表（SyncLog），日志含调用时间、接口名、入参摘要、HTTP 状态码、耗时、错误信息，可按 Request ID 还原完整调用链。",
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

      {/* V2 接口契约与老系统二开意识 */}
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          V2 接口契约与「老系统二开」意识
        </h2>
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            <strong>接口契约（V3 → V2，均经 HTTP 调用，绝不直连 V2 数据库）：</strong>
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <code className="rounded bg-slate-100 px-1 py-0.5">POST /api/v3/orders/validate</code>：校验运单是否存在并返回详情（上报异常时的真实性校验）
            </li>
            <li>
              <code className="rounded bg-slate-100 px-1 py-0.5">POST /api/v3/orders/{"{orderId}"}/validate-sku</code>：校验 SKU 是否归属于指定运单（扫描录入时）
            </li>
            <li>
              <code className="rounded bg-slate-100 px-1 py-0.5">POST /api/v3/orders/sync</code> /{" "}
              <code className="rounded bg-slate-100 px-1 py-0.5">/batch</code>：按条件查询 / 批量获取运单（本地快照初始化与增量同步）
            </li>
          </ul>
          <p>
            <strong>鉴权：</strong>所有 V2 对外接口要求 <code className="rounded bg-slate-100 px-1 py-0.5">X-API-Key</code> 请求头，与 V2 本地配置的{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5">V2_API_KEY</code> 一致才放行，否则返回 401。不是裸奔的开放接口。
          </p>
          <p>
            <strong>不破坏 V2 现有调用方的前提下新增接口（二开意识）：</strong>
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>独立版本前缀隔离：</strong>新增接口统一挂在 <code className="rounded bg-slate-100 px-1 py-0.5">/api/v3/*</code> 路由下，与 V2 既有的{" "}
              <code className="rounded bg-slate-100 px-1 py-0.5">/api/parse</code>、<code className="rounded bg-slate-100 px-1 py-0.5">/api/orders</code> 等完全隔离，新增鉴权逻辑不影响原有调用方。
            </li>
            <li>
              <strong>向后兼容与字段演进：</strong>若 V2 运单金额字段类型从 <code className="rounded bg-slate-100 px-1 py-0.5">int</code> 改为 <code className="rounded bg-slate-100 px-1 py-0.5">decimal</code>，V3 侧用 <code className="rounded bg-slate-100 px-1 py-0.5">number</code> 接收并在序列化时统一处理，且在响应解析层对字段缺失做兜底（缺省为 null），不会因新增/变更字段而整体报错。
            </li>
            <li>
              <strong>灰度与回滚：</strong>接口返回结构以 <code className="rounded bg-slate-100 px-1 py-0.5">success</code> 字段表达业务结果，V3 对「明确不存在（404）」与「服务不可用（超时/5xx）」分别处理，新增字段不影响旧调用。
            </li>
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
