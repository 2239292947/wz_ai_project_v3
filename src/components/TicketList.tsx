"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { zhCN } from "date-fns/locale"
import { Eye, Clock, AlertTriangle } from "lucide-react"

interface Ticket {
  id: string
  ticketNo: string
  exceptionType: string
  source: string
  category: string
  status: string
  priority: string
  submittedAt: string
  orderSnapshot: {
    externalCode: string | null
    storeName: string | null
    receiverName: string | null
    amount: number | null
  }
  approvalRecords: any[]
}

export function TicketList() {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [filters, setFilters] = useState({
    status: "",
    exceptionType: "",
    source: "",
    orderNo: "",
  })

  // 加载工单列表
  const loadTickets = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        pageSize: "20",
        ...(filters.status && { status: filters.status }),
        ...(filters.exceptionType && { exceptionType: filters.exceptionType }),
        ...(filters.source && { source: filters.source }),
        ...(filters.orderNo && { orderNo: filters.orderNo }),
      })

      const res = await fetch(`/api/tickets?${params}`)
      const data = await res.json()

      if (data.success) {
        setTickets(data.tickets)
        setTotal(data.total)
      }
    } catch (error) {
      console.error("Load tickets error:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadTickets()
  }, [page, filters])

  // 判断是否即将超时（5分钟内）
  const isNearTimeout = (ticket: Ticket) => {
    if (
      ticket.status !== "PENDING" &&
      ticket.status !== "LEVEL1_APPROVING" &&
      ticket.status !== "LEVEL2_APPROVING"
    ) {
      return false
    }

    const submittedAt = new Date(ticket.submittedAt)
    const now = new Date()
    const elapsedMinutes = (now.getTime() - submittedAt.getTime()) / (1000 * 60)

    // 一级审批 60 分钟，二级 120 分钟
    const timeout = ticket.status === "LEVEL2_APPROVING" ? 120 : 60

    return elapsedMinutes > timeout - 5
  }

  const getStatusBadge = (status: string) => {
    const badges: Record<string, string> = {
      PENDING: "bg-gray-100 text-gray-700",
      LEVEL1_APPROVING: "bg-blue-100 text-blue-700",
      LEVEL2_APPROVING: "bg-purple-100 text-purple-700",
      EXECUTING: "bg-yellow-100 text-yellow-700",
      COMPLETED: "bg-green-100 text-green-700",
      REJECTED: "bg-red-100 text-red-700",
      CANCELLED: "bg-gray-100 text-gray-500",
    }

    const labels: Record<string, string> = {
      PENDING: "待审批",
      LEVEL1_APPROVING: "一级审批中",
      LEVEL2_APPROVING: "二级审批中",
      EXECUTING: "执行中",
      COMPLETED: "已完成",
      REJECTED: "已驳回",
      CANCELLED: "已取消",
    }

    return (
      <span
        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
          badges[status] || "bg-gray-100"
        }`}
      >
        {labels[status] || status}
      </span>
    )
  }

  const getPriorityBadge = (priority: string) => {
    const colors: Record<string, string> = {
      LOW: "bg-gray-100 text-gray-700",
      MEDIUM: "bg-blue-100 text-blue-700",
      HIGH: "bg-orange-100 text-orange-700",
      URGENT: "bg-red-100 text-red-700",
    }

    const labels: Record<string, string> = {
      LOW: "低",
      MEDIUM: "中",
      HIGH: "高",
      URGENT: "紧急",
    }

    return (
      <span
        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
          colors[priority] || "bg-gray-100"
        }`}
      >
        {labels[priority] || priority}
      </span>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">工单列表</h1>
        <p className="mt-2 text-slate-600">查看和管理所有异常工单</p>
      </div>

      {/* 筛选器 */}
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="rounded-lg border border-slate-300 px-4 py-2 focus:border-teal-500 focus:outline-none"
          >
            <option value="">所有状态</option>
            <option value="PENDING">待审批</option>
            <option value="LEVEL1_APPROVING">一级审批中</option>
            <option value="LEVEL2_APPROVING">二级审批中</option>
            <option value="EXECUTING">执行中</option>
            <option value="COMPLETED">已完成</option>
            <option value="REJECTED">已驳回</option>
          </select>

          <select
            value={filters.exceptionType}
            onChange={(e) => setFilters({ ...filters, exceptionType: e.target.value })}
            className="rounded-lg border border-slate-300 px-4 py-2 focus:border-teal-500 focus:outline-none"
          >
            <option value="">所有类型</option>
            <option value="QC">品控异常</option>
            <option value="LOGISTICS">物流异常</option>
          </select>

          <select
            value={filters.source}
            onChange={(e) => setFilters({ ...filters, source: e.target.value })}
            className="rounded-lg border border-slate-300 px-4 py-2 focus:border-teal-500 focus:outline-none"
          >
            <option value="">所有来源</option>
            <option value="SCAN_QC">扫描触发</option>
            <option value="MANUAL_LOGISTICS">手工上报</option>
          </select>

          <input
            type="text"
            value={filters.orderNo}
            onChange={(e) => setFilters({ ...filters, orderNo: e.target.value })}
            placeholder="运单号"
            className="rounded-lg border border-slate-300 px-4 py-2 focus:border-teal-500 focus:outline-none"
          />
        </div>

        <div className="mt-4 text-sm text-slate-600">
          共 {total} 条工单
        </div>
      </div>

      {/* 工单列表 */}
      <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-slate-500">加载中...</div>
        ) : tickets.length === 0 ? (
          <div className="p-8 text-center text-slate-500">暂无工单</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">
                    工单编号
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">
                    运单信息
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">
                    异常类型
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">
                    状态
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">
                    优先级
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">
                    上报时间
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {tickets.map((ticket) => (
                  <tr
                    key={ticket.id}
                    className={`hover:bg-slate-50 ${
                      isNearTimeout(ticket) ? "bg-orange-50" : ""
                    }`}
                  >
                    <td className="px-6 py-4">
                      <p className="font-medium text-slate-900">{ticket.ticketNo}</p>
                      <p className="text-xs text-slate-500">
                        {ticket.source === "SCAN_QC" ? "扫描触发" : "手工上报"}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-slate-900">
                        {ticket.orderSnapshot.externalCode || ticket.id}
                      </p>
                      <p className="text-xs text-slate-500">
                        {ticket.orderSnapshot.storeName || "-"} -{" "}
                        {ticket.orderSnapshot.receiverName || "-"}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-slate-700">
                        {ticket.exceptionType === "QC" ? "品控" : "物流"} - {ticket.category}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(ticket.status)}
                      {isNearTimeout(ticket) && (
                        <div className="mt-1 flex items-center gap-1 text-xs text-orange-600">
                          <Clock className="h-3 w-3" />
                          即将超时
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">{getPriorityBadge(ticket.priority)}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {formatDistanceToNow(new Date(ticket.submittedAt), {
                        addSuffix: true,
                        locale: zhCN,
                      })}
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/tickets/${ticket.id}`}
                        className="inline-flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700"
                      >
                        <Eye className="h-4 w-4" />
                        查看
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* 分页 */}
        {total > 20 && (
          <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4">
            <div className="text-sm text-slate-600">
              第 {page} 页，共 {Math.ceil(total / 20)} 页
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50 disabled:opacity-50"
              >
                上一页
              </button>
              <button
                onClick={() => setPage(page + 1)}
                disabled={page >= Math.ceil(total / 20)}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50 disabled:opacity-50"
              >
                下一页
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
