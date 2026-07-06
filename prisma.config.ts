import "dotenv/config"
import { defineConfig } from "prisma/config"

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  // 添加 binary target 以确保 Vercel 兼容性
  binaryTargets: ["native", "debian-openssl-3.0.x", "linux-musl"],
  datasource: {
    url: process.env.DATABASE_URL || "postgresql://placeholder:placeholder@localhost/placeholder",
  },
})
