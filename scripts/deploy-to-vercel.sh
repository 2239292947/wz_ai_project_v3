#!/bin/bash
# V3 项目 Vercel 部署脚本
# 用于修复 Prisma Client 初始化错误

set -e

echo "========================================"
echo "V3 项目 Vercel 部署脚本"
echo "========================================"
echo ""

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
  echo "❌ 错误：请在 V3 项目根目录运行此脚本"
  exit 1
fi

# 1. 检查环境变量
echo "📋 步骤 1/7: 检查环境变量..."
if [ ! -f ".env" ]; then
  echo "⚠️  警告：.env 文件不存在"
  echo "请确保已配置以下环境变量："
  echo "  - DATABASE_URL"
  echo "  - V2_API_URL"
  echo "  - V2_API_KEY"
  echo ""
  read -p "是否继续？(y/N) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 1
  fi
else
  echo "✅ .env 文件存在"
fi

# 2. 安装依赖
echo ""
echo "📦 步骤 2/7: 安装依赖..."
npm install

# 3. 生成 Prisma Client
echo ""
echo "🔧 步骤 3/7: 生成 Prisma Client..."
npm run db:generate

# 4. 推送数据库 schema
echo ""
echo "🗄️  步骤 4/7: 推送数据库 schema..."
npm run db:push

# 5. 本地测试
echo ""
echo "🧪 步骤 5/7: 本地测试..."
echo "启动开发服务器..."
npm run dev &
DEV_PID=$!

# 等待服务器启动
sleep 8

# 测试诊断路由
echo ""
echo "测试诊断路由..."
if curl -s http://localhost:3000/api/debug/prisma > /dev/null 2>&1; then
  echo "✅ 开发服务器响应正常"
  echo ""
  echo "诊断信息："
  curl -s http://localhost:3000/api/debug/prisma | head -20
else
  echo "⚠️  警告：开发服务器未响应"
fi

# 停止开发服务器
kill $DEV_PID 2>/dev/null || true

# 6. Git 提交
echo ""
echo "📝 步骤 6/7: Git 提交..."
git add .
git status

read -p "是否提交并推送更改？(y/N) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "已跳过 Git 提交"
  exit 0
fi

git commit -m "fix: resolve Prisma Client initialization error in Vercel

- Add postinstall hook to generate Prisma Client
- Add binaryTargets for Vercel compatibility
- Update vercel.json build command
- Refactor validate-order route to avoid module-level initialization
- Add debug route for Prisma diagnostics
- Update package.json with vercel-build script"

echo ""
echo "🚀 步骤 7/7: 推送到 Vercel..."

read -p "是否推送到远程仓库？(y/N) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "已跳过推送"
  exit 0
fi

git push origin main

echo ""
echo "========================================"
echo "✅ 部署完成！"
echo "========================================"
echo ""
echo "Vercel 会自动检测到新的提交并开始部署。"
echo ""
echo "部署完成后，请验证："
echo "1. https://wz-ai-project-v3.vercel.app/api/debug/prisma"
echo "2. https://wz-ai-project-v3.vercel.app/api/v3/orders/validate-order"
echo ""
echo "详细文档：docs/vercel-prisma-fix.md"
echo ""
