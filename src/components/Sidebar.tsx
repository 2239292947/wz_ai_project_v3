"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Package, FileText, Shield, AlertTriangle, BarChart3, Settings, Home } from "lucide-react"

const navigation = [
  { name: "首页", href: "/", icon: Home },
  { name: "扫描操作", href: "/scan", icon: Package },
  { name: "异常上报", href: "/exception", icon: FileText },
  { name: "审批中心", href: "/approval", icon: Shield },
  { name: "工单列表", href: "/tickets", icon: AlertTriangle },
  { name: "系统监控", href: "/monitor", icon: BarChart3 },
  { name: "假设说明", href: "/assumptions", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-slate-200 bg-white">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-slate-200 px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-teal-500" />
            <span className="text-lg font-bold text-slate-900">V3 管理系统</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-teal-50 text-teal-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-200 p-4">
          <p className="text-xs text-slate-500">
            运单全流程管理系统 V3
            <br />
            独立部署 · 独立数据库
          </p>
        </div>
      </div>
    </aside>
  )
}
