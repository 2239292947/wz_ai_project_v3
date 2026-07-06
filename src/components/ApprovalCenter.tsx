"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { formatDistanceToNow } from "date-fns"
import { zhCN } from "date-fns/locale"
import { CheckCircle, XCircle, AlertCircle, ArrowUpCircle, Clock, User } from "lucide-react"

interface Ticket {
  id: string
  ticketNo: string
  exceptionType: string
  category: string
  description: string
  status: string
  currentApprovalLevel: number
  priority: string
  submittedAt: string
  submittedBy: string
  orderSnapshot: {
    externalCode: string | null
    storeName: string | null
    amount: number | null
  }
}

interface ApprovalRecord {
  id: string
  approvalLevel: number
  approverName: string
  action: string
  comment: string
  approvedAt: string
}

export function ApprovalCenter() {
  const router = useRouter()
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)
  const [approvalRecords, setApprovalRecords] = useState<ApprovalRecord[]>([])
  const [loading, setLoading] = useState(false)
  const [actionLoading, setActionLoading] = useState(false)

  // 当前用户（模拟）
  const currentUser = {
    id: "user-001",
    name: "审批人",
  }

  // 加载待审批工单
  const loadPendingTickets = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/tickets?status=PENDING,LEVEL1_APPROVING,LEVEL2_APPROVING")
      const data = await res.json()

      if (data.success) {
        setTickets(data.tickets)
      }
    } catch (error) {
      console.error("Load tickets error:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadPendingTickets()
  }, [])

  // 查看工单详情
  const handleViewTicket = async (ticket: Ticket) => {
    setSelectedTicket(ticket)
    setApprovalRecords([])

    try {
      const res = await fetch(`/api/tickets/${ticket.id}`)
      const data = await res.json()

      if (data.success) {
        setApprovalRecords(data.ticket.approvalRecords || [])
      }
    } catch (error) {
      console.error("Load ticket detail error:", error)
    }
  }

  // 审批操作
  const handleApproval = async (action: "APPROVE" | "REJECT" | "ESCALATE") => {
    if (!selectedTicket) return

    const comment = prompt(`请输入${action === "APPROVE" ? "通过" : action === "REJECT" ? "驳回" : "升级"}意见：`)

    if (comment === null) return

    setActionLoading(true)

    try {
      const res = await fetch(`/api/approval/${selectedTicket.id}/action`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action,
          approverId: currentUser.id,
          approverName: currentUser.name,
          comment,
        }),
      })

      const data = await res.json()

      if (data.success) {
        alert("审批成功")
        // 刷新列表
        await loadPendingTickets()
        // 清空选中
        setSelectedTicket(null)
        setApprovalRecords([])
      } else {
        alert(`审批失败：${data.error}`)
      }
    } catch (error) {
      alert(`审批失败：${(error as Error).message}`)
    } finally {
      setActionLoading(false)
    }
  }

  const getStatusBadge = (status: string) => {
    const badges: Record<string, { label: string; color: string }> = {
      PENDING: { label: "待审批", color: "bg-gray-100 text-gray-700" },
      LEVEL1_APPROVING: { label: "一级审批中", color: "bg-blue-100 text-blue-700" },
      LEVEL2_APPROVING: { label: "二级审批中", color: "bg-purple-100 text-purple-700" },
      EXECUTING: { label: "执行中", color: "bg-yellow-100 text-yellow-700" },
      COMPLETED: { label: "已完成", color: "bg-green-100 text-green-700" },
      REJECTED: { label: "已驳回", color: "bg-red-100 text-red-700" },
    }

    const badge = badges[status] || { label: status, color: "bg-gray-100" }

    return (
      <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${badge.color}`}>
        {badge.label}
      </span>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">审批中心</h1>
        <p className="mt-2 text-slate-600">处理待审批的异常工单</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 左侧：工单列表 */}
        <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-4">
            <h2 className="text-lg font-semibold text-slate-900">
              待审批工单 ({tickets.length})
            </h2>
          </div>

          {loading ? (
            <div className="p-8 text-center text-slate-500">加载中...</div>
          ) : tickets.length === 0 ? (
            <div className="p-8 text-center text-slate-500">暂无待审批工单</div>
          ) : (
            <div className="divide-y divide-slate-200 max-h-[600px] overflow-y-auto">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  onClick={() => handleViewTicket(ticket)}
                  className={`cursor-pointer p-4 hover:bg-slate-50 ${
                    selectedTicket?.id === ticket.id ? "bg-teal-50" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-slate-900">{ticket.ticketNo}</p>
                        {getStatusBadge(ticket.status)}
                      </div>
                      <p className="mt-1 text-sm text-slate-600">
                        {ticket.exceptionType === "QC" ? "品控" : "物流"} - {ticket.category}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        {ticket.orderSnapshot.externalCode || "-"} -{" "}
                        {ticket.orderSnapshot.storeName || "-"}
                      </p>
                      <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {ticket.submittedBy}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatDistanceToNow(new Date(ticket.submittedAt), {
                            addSuffix: true,
                            locale: zhCN,
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 右侧：审批操作 */}
        <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
          {selectedTicket ? (
            <>
              <div className="border-b border-slate-200 p-4">
                <h2 className="text-lg font-semibold text-slate-900">审批工单</h2>
              </div>

              <div className="p-6 space-y-4 max-h-[600px] overflow-y-auto">
                {/* 工单基本信息 */}
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-sm text-slate-600">工单编号</p>
                  <p className="font-medium text-slate-900">{selectedTicket.ticketNo}</p>
                </div>

                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-sm text-slate-600">运单信息</p>
                  <p className="font-medium text-slate-900">
                    {selectedTicket.orderSnapshot.externalCode || "-"}
                  </p>
                  <p className="text-sm text-slate-600">
                    {selectedTicket.orderSnapshot.storeName || "-"} - ¥
                    {selectedTicket.orderSnapshot.amount?.toFixed(2) || "0.00"}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-600">异常描述</p>
                  <p className="mt-1 text-slate-900">{selectedTicket.description}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-600 mb-2">审批操作</p>
                  <div className="flex gap-2">
                    {selectedTicket.status !== "LEVEL2_APPROVING" && (
                      <button
                        onClick={() => handleApproval("ESCALATE")}
                        disabled={actionLoading}
                        className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 disabled:opacity-50"
                      >
                        <ArrowUpCircle className="h-4 w-4" />
                        升级审批
                      </button>
                    )}
                    <button
                      onClick={() => handleApproval("APPROVE")}
                      disabled={actionLoading}
                      className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700 disabled:opacity-50"
                    >
                      <CheckCircle className="h-4 w-4" />
                      通过
                    </button>
                    <button
                      onClick={() => handleApproval("REJECT")}
                      disabled={actionLoading}
                      className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:opacity-50"
                    >
                      <XCircle className="h-4 w-4" />
                      驳回
                    </button>
                  </div>
                </div>

                {/* 审批历史 */}
                {approvalRecords.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-slate-700 mb-2">审批历史</p>
                    <div className="space-y-2">
                      {approvalRecords.map((record) => (
                        <div key={record.id} className="border-l-2 border-slate-200 pl-4">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-slate-900">
                              {record.approverName}
                            </span>
                            <span className="text-xs text-slate-500">
                              {record.action === "APPROVE"
                                ? "通过"
                                : record.action === "REJECT"
                                ? "驳回"
                                : "升级"}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-slate-600">{record.comment}</p>
                          <p className="mt-1 text-xs text-slate-500">
                            {formatDistanceToNow(new Date(record.approvedAt), {
                              addSuffix: true,
                              locale: zhCN,
                            })}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex h-96 items-center justify-center text-slate-500">
              <div className="text-center">
                <AlertCircle className="mx-auto h-12 w-12 text-slate-400" />
                <p className="mt-2">请选择工单进行审批</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
