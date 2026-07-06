import Link from "next/link"
import { Package, FileText, AlertTriangle, Shield, BarChart3, Settings } from "lucide-react"

export default function HomePage() {
  const modules = [
    {
      id: "scan",
      name: "扫描操作与品控",
      icon: Package,
      description: "扫描录入、品控检测、批次锁定",
      color: "bg-teal-500",
    },
    {
      id: "exception",
      name: "异常工单上报",
      icon: FileText,
      description: "手工上报物流异常",
      color: "bg-blue-500",
    },
    {
      id: "approval",
      name: "分级审批流程",
      icon: Shield,
      description: "工单审批、超时处理、并发控制",
      color: "bg-purple-500",
    },
    {
      id: "tickets",
      name: "工单列表追踪",
      icon: AlertTriangle,
      description: "工单查询、筛选、状态追踪",
      color: "bg-orange-500",
    },
    {
      id: "monitor",
      name: "系统监控",
      icon: BarChart3,
      description: "接口同步状态、数据一致性监控",
      color: "bg-green-500",
    },
    {
      id: "assumptions",
      name: "假设说明文档",
      icon: Settings,
      description: "需求理解与假设说明",
      color: "bg-gray-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                V3 Order Management System
              </h1>
              <p className="mt-2 text-slate-600">
                Order Entry → Scan QC → Exception Report → Approval → Execution
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-slate-500">Database Status</p>
                <p className="text-sm font-medium text-teal-600">● Connected</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {modules.map((module) => {
            const Icon = module.icon
            return (
              <Link
                key={module.id}
                href={`/${module.id}`}
                className="group bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`${module.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                      {module.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {module.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">System Status</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard title="Pending Approval" value="0" color="text-orange-600" />
            <StatCard title="Processing" value="0" color="text-blue-600" />
            <StatCard title="Completed" value="0" color="text-green-600" />
            <StatCard title="QC Hold" value="0" color="text-red-600" />
          </div>
        </div>
      </main>
    </div>
  )
}

function StatCard({ title, value, color }: { title: string; value: string; color: string }) {
  return (
    <div className="bg-slate-50 rounded-lg p-4">
      <p className="text-sm text-slate-600">{title}</p>
      <p className={`text-2xl font-bold ${color} mt-1`}>{value}</p>
    </div>
  )
}
