"use client"

import { useState, useEffect } from "react"

interface Order {
  id: string
  externalCode: string | null
  storeName: string | null
  receiverName: string | null
  receiverPhone: string | null
  receiverAddress: string | null
  amount: number | null
  itemsJson: any[]
  syncedAt: Date
}

export function ScanOperation() {
  const [orderId, setOrderId] = useState("")
  const [order, setOrder] = useState<Order | null>(null)
  const [skuCode, setSkuCode] = useState("")
  const [scannedQuantity, setScannedQuantity] = useState("")
  const [operator, setOperator] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  // 搜索订单
  const handleSearchOrder = async () => {
    if (!orderId.trim()) return

    setLoading(true)
    try {
      const res = await fetch(`/api/scan?orderId=${encodeURIComponent(orderId)}`)
      const data = await res.json()

      if (data.success && data.records.length > 0) {
        // 已经有扫描记录，显示订单信息
        const snapshotId = data.records[0].orderSnapshotId
        // 这里需要获取订单快照信息
        setResult({ type: "history", records: data.records })
      } else {
        // 尝试同步订单
        await syncOrder(orderId)
      }
    } catch (error) {
      console.error("Search error:", error)
    } finally {
      setLoading(false)
    }
  }

  // 同步订单
  const syncOrder = async (id: string) => {
    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: id,
          skuCode: "TEST",
          scannedQuantity: 1,
          operator: "test",
        }),
      })
      const data = await res.json()

      if (data.success) {
        setResult({ type: "synced", data })
      } else {
        setResult({ type: "error", error: data.error })
      }
    } catch (error) {
      setResult({ type: "error", error: (error as Error).message })
    }
  }

  // 执行扫描
  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!orderId || !skuCode || !scannedQuantity || !operator) {
      alert("请填写所有必填项")
      return
    }

    setLoading(true)
    setResult(null)

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          skuCode: skuCode.trim(),
          scannedQuantity: parseInt(scannedQuantity),
          operator,
          deviceId: "SCANNER-001",
        }),
      })

      const data = await res.json()
      setResult(data)
    } catch (error) {
      setResult({ type: "error", error: (error as Error).message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">扫描操作与品控检测</h1>
        <p className="mt-2 text-slate-600">
          录入扫描信息，系统自动进行品控规则检测
        </p>
      </div>

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
            onClick={handleSearchOrder}
            disabled={loading}
            className="rounded-lg bg-teal-600 px-6 py-2 text-white hover:bg-teal-700 disabled:opacity-50"
          >
            {loading ? "搜索中..." : "搜索"}
          </button>
        </div>
      </div>

      {/* 扫描表单 */}
      {order && (
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">扫描录入</h2>

          <div className="mb-4 rounded-lg bg-slate-50 p-4">
            <p className="text-sm text-slate-600">
              运单号：<span className="font-medium">{order.externalCode || order.id}</span>
            </p>
            <p className="text-sm text-slate-600">
              收件人：{order.receiverName} {order.receiverPhone}
            </p>
            <p className="text-sm text-slate-600">
              地址：{order.receiverAddress}
            </p>
          </div>

          <form onSubmit={handleScan} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  SKU 编码 *
                </label>
                <input
                  type="text"
                  value={skuCode}
                  onChange={(e) => setSkuCode(e.target.value)}
                  placeholder="扫描或输入 SKU"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-teal-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  扫描数量 *
                </label>
                <input
                  type="number"
                  value={scannedQuantity}
                  onChange={(e) => setScannedQuantity(e.target.value)}
                  placeholder="1"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-teal-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  操作人 *
                </label>
                <input
                  type="text"
                  value={operator}
                  onChange={(e) => setOperator(e.target.value)}
                  placeholder="操作员工号/姓名"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-teal-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-teal-600 px-6 py-3 text-white font-medium hover:bg-teal-700 disabled:opacity-50"
            >
              {loading ? "处理中..." : "执行扫描并检测"}
            </button>
          </form>
        </div>
      )}

      {/* 扫描结果 */}
      {result && (
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">扫描结果</h2>

          {result.type === "error" ? (
            <div className="rounded-lg bg-red-50 p-4 text-red-700">
              {result.error}
            </div>
          ) : result.type === "synced" ? (
            <div className="space-y-4">
              {result.data.qcResult ? (
                <div>
                  <div
                    className={`mb-4 rounded-lg p-4 ${
                      result.data.qcResult.passed
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    <p className="font-medium">
                      {result.data.qcResult.passed ? "✓ 品控检查通过" : "✗ 品控异常"}
                    </p>
                    <p className="mt-1 text-sm">{result.data.qcResult.description}</p>
                  </div>

                  {result.data.ticket && (
                    <div className="rounded-lg bg-orange-50 p-4">
                      <p className="font-medium text-orange-700">
                        已创建品控异常工单：{result.data.ticket.ticketNo}
                      </p>
                      <p className="mt-1 text-sm text-orange-600">
                        状态：{result.data.ticket.status}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="rounded-lg bg-green-50 p-4 text-green-700">
                  {result.data.message}
                </div>
              )}

              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-sm font-medium text-slate-700">扫描记录</p>
                <pre className="mt-2 overflow-auto text-xs text-slate-600">
                  {JSON.stringify(result.data.scanRecord, null, 2)}
                </pre>
              </div>
            </div>
          ) : result.type === "history" ? (
            <div>
              <p className="text-sm text-slate-600 mb-2">历史扫描记录</p>
              <div className="space-y-2">
                {result.records.map((record: any) => (
                  <div key={record.id} className="rounded border border-slate-200 p-3">
                    <p className="text-sm">
                      <span className="font-medium">{record.skuCode}</span> -{" "}
                      {record.scannedQuantity} 件 - {record.qcResult}
                    </p>
                    <p className="text-xs text-slate-500">
                      {new Date(record.scanTime).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}
