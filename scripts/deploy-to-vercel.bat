@echo off
REM V3 项目 Vercel 部署脚本 (Windows)
REM 用于修复 Prisma Client 初始化错误

setlocal enabledelayedexpansion

echo ========================================
echo V3 项目 Vercel 部署脚本
echo ========================================
echo.

REM 检查是否在正确的目录
if not exist "package.json" (
  echo ❌ 错误：请在 V3 项目根目录运行此脚本
  exit /b 1
)

REM 1. 检查环境变量
echo 📋 步骤 1/7: 检查环境变量...
if not exist ".env" (
  echo ⚠️  警告：.env 文件不存在
  echo 请确保已配置以下环境变量：
  echo   - DATABASE_URL
  echo   - V2_API_URL
  echo   - V2_API_KEY
  echo.
  set /p CONTINUE="是否继续？(y/N): "
  if /i not "!CONTINUE!"=="y" (
    exit /b 1
  )
) else (
  echo ✅ .env 文件存在
)

REM 2. 安装依赖
echo.
echo 📦 步骤 2/7: 安装依赖...
call npm install
if %errorlevel% neq 0 (
  echo ❌ npm install 失败
  exit /b 1
)

REM 3. 生成 Prisma Client
echo.
echo 🔧 步骤 3/7: 生成 Prisma Client...
call npm run db:generate
if %errorlevel% neq 0 (
  echo ❌ prisma generate 失败
  exit /b 1
)

REM 4. 推送数据库 schema
echo.
echo 🗄️  步骤 4/7: 推送数据库 schema...
call npm run db:push
if %errorlevel% neq 0 (
  echo ⚠️  prisma db push 失败（可能表已存在，继续...）
)

REM 5. Git 提交
echo.
echo 📝 步骤 5/7: Git 提交...
git add .
git status

set /p COMMIT="是否提交并推送更改？(y/N): "
if /i "!COMMIT!"=="y" (
  git commit -m "fix: resolve Prisma Client initialization error in Vercel

- Add postinstall hook to generate Prisma Client
- Add binaryTargets for Vercel compatibility
- Update vercel.json build command
- Refactor validate-order route to avoid module-level initialization
- Add debug route for Prisma diagnostics
- Update package.json with vercel-build script"

  echo.
  echo 🚀 步骤 6/7: 推送到远程仓库...
  set /p PUSH="是否推送到远程仓库？(y/N): "
  if /i "!PUSH!"=="y" (
    git push origin main
    echo ✅ 已推送到远程仓库
  ) else (
    echo 已跳过推送
  )
) else (
  echo 已跳过 Git 提交
)

REM 6. 完成
echo.
echo ========================================
echo ✅ 部署准备完成！
echo ========================================
echo.
echo Vercel 会自动检测到新的提交并开始部署。
echo.
echo 部署完成后，请验证：
echo 1. https://wz-ai-project-v3.vercel.app/api/debug/prisma
echo 2. https://wz-ai-project-v3.vercel.app/api/v3/orders/validate-order
echo.
echo 详细文档：docs\vercel-prisma-fix.md
echo.

pause
