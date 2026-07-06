import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "V3 运单全流程管理系统",
  description: "运单全生命周期管理平台",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
