"use client"

import { useState } from "react"

interface Order {
  id: string
  v2OrderId: string
  externalCode: string | null
  storeName: string | null
  receiverName: string | null
  receiverPhone: string | null
  receiverAddress: string | null
  amount: number | null
  itemsJson: any[]
  syncedAt: Date
}

export function ExceptionReport() {
  const [orderId, setOrderId] = useState("")
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  // 异常类型选项
  const exceptionTypes = [
    { value: "lost", label: "丢件", action: "赔付 + 重新发货" },
    { value: "damaged", label: "破损", action: "赔付 + 退货入库" },
    { value: "rejected", label: "客户拒收", action: "重新发货" },
    { value: "timeout", label: "超时未签收", action: "赔付 + 升级" },
    { value: "address_error", label: "地址错误", action: "重新发货" },
  ]

  const [selectedType, setSelectedType] = useState("")
  const [description, setDescription] = useState("")
  const [submittedBy, setSubmittedBy] = useState("")

  // 搜索订单
  const handleSearch = async () => {
    if (!orderId.trim()) return

    setLoading(true)
    setError("")
    setOrder(null)

    try {
      // 调用 V3 API 路由验证订单（服务端代理，自动降级）
      const res = await fetch("/api/v3/orders/validate-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId }),
      })

      const data = await res.json()

      if (!data.success) {
        setError(data.error || "订单不存在")
        return
      }

      // 订单验证成功，更新 UI
      setOrder({
        id: data.order.id,
        v2OrderId: data.order.id,
        externalCode: data.order.externalCode,
        storeName: data.order.storeName,
        receiverName: data.order.receiverName,
        receiverPhone: data.order.receiverPhone,
        receiverAddress: data.order.receiverAddress,
        amount: data.order.amount,
        itemsJson: data.order.items || [],
        syncedAt: new Date(),
      })

      // 如果数据来自本地缓存，显示提示
      if (data.source === "local-cache" && data.warning) {
        console.warn(data.warning)
        // 可选：在界面上显示数据可能不是最新的警告
      }
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  // 提交异常工单
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!order || !selectedType || !description || !submittedBy) {
      alert("请填写所有必填项")
      return
    }

    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: order.v2OrderId,
          exceptionType: "LOGISTICS",
          category: selectedType,
          description,
          submittedBy,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setSuccess(true)
        // 清空表单
        setSelectedType("")
        setDescription("")
        // 3秒后关闭成功提示
        setTimeout(() => setSuccess(false), 3000)
      } else {
        setError(data.error || "创建工单失败")
      }
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">异常工单上报</h1>
        <p className="mt-2 text-slate-600">
          从运单发起异常上报，系统将实时校验运单真实性
        </p>
      </div>

      {success && (
        <div className="rounded-lg bg-green-50 p-4 text-green-700">
          ✓ 异常工单创建成功
        </div>
      )}

      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-red-700">{error}</div>
      )}

      {/* 搜索订单 */}
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">查找运单</h2>
        <div className="flex gap-3">
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="输入运单号或外部单号"
            className="flex-1 rounded-lg border border-slate-300 px-4 py-2 focus:border-teal-500 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="rounded-lg bg-teal-600 px-6 py-2 text-white hover:bg-teal-700 disabled:opacity-50"
          >
            {loading ? "校验中..." : "实时校验"}
          </button>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          ⚠️ 系统将实时调用 V2 接口校验运单真实性，不允许对不存在的运单发起异常
        </p>
      </div>

      {/* 订单信息 */}
      {order && (
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">运单信息</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-slate-600">外部单号</p>
              <p className="font-medium">{order.externalCode || "-"}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600">金额</p>
              <p className="font-medium">¥{order.amount?.toFixed(2) || "0.00"}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600">收件人</p>
              <p className="font-medium">{order.receiverName}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600">电话</p>
              <p className="font-medium">{order.receiverPhone}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-slate-600">地址</p>
              <p className="font-medium">{order.receiverAddress}</p>
            </div>
          </div>

          <div className="mt-4 rounded-lg bg-teal-50 p-3 text-sm text-teal-700">
            ✓ 运单真实性校验通过（数据同步时间：{new Date(order.syncedAt).toLocaleString()}）
          </div>
        </div>
      )}

      {/* 上报表单 */}
      {order && (
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">创建异常工单</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                异常类型 *
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-teal-500 focus:outline-none"
                required
              >
                <option value="">请选择异常类型</option>
                {exceptionTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label} - {type.action}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                详细描述 *
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                placeholder="请详细描述异常情况..."
                className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-teal-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                上报人 *
              </label>
              <input
                type="text"
                value={submittedBy}
                onChange={(e) => setSubmittedBy(e.target.value)}
                placeholder="员工工号或姓名"
                className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-teal-500 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-teal-600 px-6 py-3 text-white font-medium hover:bg-teal-700 disabled:opacity-50"
            >
              {loading ? "提交中..." : "提交异常工单"}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
