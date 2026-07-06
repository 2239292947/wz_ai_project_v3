"use client"

import { useState, useEffect } from "react"
import { formatDistanceToNow } from "date-fns"
import { zhCN } from "date-fns/locale"
import { Wifi, WifiOff, Clock, CheckCircle, XCircle, AlertTriangle } from "lucide-react"

export function SystemMonitor() {
  const [stats, setStats] = useState<any>(null)
  const [recentLogs, setRecentLogs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStats()
    loadRecentLogs()
    // 每 30 秒刷新一次
    const interval = setInterval(() => {
      loadStats()
      loadRecentLogs()
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const loadStats = async () => {
    try {
      const res = await fetch("/api/monitor/stats")
      const data = await res.json()
      if (data.success) {
        setStats(data.stats)
      }
    } catch (error) {
      console.error("Load stats error:", error)
    }
  }

  const loadRecentLogs = async () => {
    try {
      const res = await fetch("/api/monitor/logs?limit=20")
      const data = await res.json()
      if (data.success) {
        setRecentLogs(data.logs)
      }
    } catch (error) {
      console.error("Load logs error:", error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "SUCCESS":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "FAILED":
        return <XCircle className="h-4 w-4 text-red-600" />
      case "TIMEOUT":
        return <Clock className="h-4 w-4 text-orange-600" />
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "SUCCESS":
        return "text-green-700"
      case "FAILED":
        return "text-red-700"
      case "TIMEOUT":
        return "text-orange-700"
      default:
        return "text-gray-700"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">系统监控</h1>
        <p className="mt-2 text-slate-600">接口同步状态与数据一致性监控</p>
      </div>

      {/* 连接状态 */}
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">V2 系统连接状态</h2>
        {stats ? (
          <div className="flex items-center gap-4">
            {stats.lastSyncAt ? (
              <>
                <Wifi className="h-8 w-8 text-green-600" />
                <div>
                  <p className="font-medium text-green-700">已连接</p>
                  <p className="text-sm text-slate-600">
                    最后同步：{new Date(stats.lastSyncAt).toLocaleString()}
                  </p>
                </div>
              </>
            ) : (
              <>
                <WifiOff className="h-8 w-8 text-red-600" />
                <div>
                  <p className="font-medium text-red-700">未连接</p>
                  <p className="text-sm text-slate-600">暂无同步记录</p>
                </div>
              </>
            )}
          </div>
        ) : (
          <p className="text-slate-500">加载中...</p>
        )}
      </div>

      {/* 统计信息 */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">总调用次数</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{stats.total}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">成功</p>
            <p className="mt-2 text-3xl font-bold text-green-600">{stats.success}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">失败</p>
            <p className="mt-2 text-3xl font-bold text-red-600">{stats.failed}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">平均响应时间</p>
            <p className="mt-2 text-3xl font-bold text-blue-600">{stats.avgDuration}ms</p>
          </div>
        </div>
      )}

      {/* 接口日志 */}
      <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-4">
          <h2 className="text-lg font-semibold text-slate-900">最近接口调用日志</h2>
        </div>

        {loading ? (
          <div className="p-8 text-center text-slate-500">加载中...</div>
        ) : recentLogs.length === 0 ? (
          <div className="p-8 text-center text-slate-500">暂无日志</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">
                    时间
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">
                    接口
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">
                    状态
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">
                    耗时
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700">
                    错误信息
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {recentLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {formatDistanceToNow(new Date(log.createdAt), {
                        addSuffix: true,
                        locale: zhCN,
                      })}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">
                      {log.apiName}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(log.status)}
                        <span className={`text-sm font-medium ${getStatusColor(log.status)}`}>
                          {log.status === "SUCCESS"
                            ? "成功"
                            : log.status === "FAILED"
                            ? "失败"
                            : "超时"}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{log.duration}ms</td>
                    <td className="px-6 py-4 text-sm text-red-600">{log.errorMessage || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 数据新鲜度说明 */}
      <div className="rounded-lg border border-slate-200 bg-blue-50 p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">数据新鲜度说明</h3>
        <p className="text-sm text-blue-800">
          V3 使用本地快照表缓存 V2 运单数据。数据新鲜度策略：上报异常时实时同步。
          <br />
          如果本地数据超过 30 分钟未同步，将在详情页标注"使用本地缓存，同步于 XX 时间"。
        </p>
      </div>
    </div>
  )
}
