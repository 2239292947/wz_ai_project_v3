# 🚀 一键部署到 Vercel

## 快速部署

### Windows

```bash
cd D:\IdeaProjects\wz_ai\wz_ai_project_v3
scripts\deploy-to-vercel.bat
```

### Linux/Mac

```bash
cd /path/to/wz_ai_project_v3
chmod +x scripts/deploy-to-vercel.sh
./scripts/deploy-to-vercel.sh
```

### 手动部署

```bash
cd D:\IdeaProjects\wz_ai\wz_ai_project_v3

# 1. 提交所有更改
git add .
git commit -m "fix: resolve Prisma Client initialization error in Vercel

- Add postinstall hook to generate Prisma Client
- Add binaryTargets for Vercel compatibility (debian, musl)
- Update vercel.json to use vercel-build script
- Refactor validate-order route (remove OrderSnapshotService import)
- Add debug route for Prisma diagnostics
- Add deployment scripts for Windows and Linux"

# 2. 推送到 GitHub
git push origin main

# 3. Vercel 自动部署（约 2-3 分钟）
```

## ✅ 验证修复

部署完成后，访问以下链接：

### 1. 诊断接口

```
https://wz-ai-project-v3.vercel.app/api/debug/prisma
```

**期望看到**：
```json
{
  "success": true,
  "prisma": {
    "status": "connected",
    "generatedClientExists": true
  },
  "db": {
    "status": "working"
  }
}
```

### 2. 订单验证接口

```
POST https://wz-ai-project-v3.vercel.app/api/v3/orders/validate-order
Body: {"orderId":"order-001"}
```

**期望看到**：
```json
{
  "success": true,
  "source": "v2",
  "order": { ... }
}
```

### 3. 前端测试

访问：https://wz-ai-project-v3.vercel.app/exception

输入订单号：`order-001`，点击"实时校验"

**期望**：✅ 成功显示订单信息

## 📋 已修改的文件

### 核心修复

1. ✅ **package.json**
   - 添加 `postinstall`: `prisma generate`
   - 添加 `vercel-build` 脚本
   - 添加 `prisma` 配置节

2. ✅ **vercel.json**
   - 使用 `vercel-build` 脚本
   - 添加 `NODE_ENV=production`

3. ✅ **prisma.config.ts**
   - 添加 `binaryTargets` 配置

4. ✅ **src/app/api/v3/orders/validate-order/route.ts**
   - 移除 `OrderSnapshotService` 导入
   - 直接使用 `db()` 函数
   - 内联同步逻辑

### 新增文件

5. ✅ **src/app/api/debug/prisma/route.ts**
   - Prisma 诊断路由

6. ✅ **docs/vercel-prisma-fix.md**
   - 详细修复指南

7. ✅ **docs/vercel-prisma-repair-summary.md**
   - 完整修复总结

8. ✅ **scripts/deploy-to-vercel.sh**
   - Linux/Mac 部署脚本

9. ✅ **scripts/deploy-to-vercel.bat**
   - Windows 部署脚本

## ⏱️ 预计时间

- **代码提交**：1 分钟
- **Vercel 构建**：2-3 分钟
- **验证测试**：2 分钟

**总计**：约 5-6 分钟完成部署和验证

## 📞 需要帮助？

查看完整文档：
- 📄 [Vercel Prisma 修复指南](vercel-prisma-fix.md)
- 📄 [修复总结](vercel-prisma-repair-summary.md)
- 📄 [V2 V3 集成](../docs/v2-v3-integration.md)
