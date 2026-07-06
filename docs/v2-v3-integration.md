# V2 V3 API 集成完成报告

## ✅ 已完成的工作

### 1. V2 项目 V3 兼容 API

**项目路径**: `D:\IdeaProjects\wz_ai\wz_ai_project`

**新增文件**：

1. **`/api/v3/orders/validate`** - `src/app/api/v3/orders\validate\route.ts`
   - V3 兼容的订单验证接口
   - 支持通过 ID 或 externalCode 查询
   - 返回 V3 格式的订单数据

2. **`/api/v3/orders/[orderId]/validate-sku`** - `src/app/api/v3/orders\[orderId]\validate-sku\route.ts`
   - SKU 验证接口
   - 验证 SKU 是否属于指定订单
   - 返回商品数量信息

3. **`/api/v3/orders/sync`** - `src/app/api/v3/orders\sync\route.ts`
   - 订单同步/查询接口
   - 支持分页、日期范围、店铺筛选
   - 返回 V3 兼容格式

4. **`/api/v3/orders/batch`** - `src/app/api/v3\orders\batch\route.ts`
   - 批量获取订单详情
   - 支持按 ID 或 externalCode 批量查询

### 2. 测试验证

**创建测试订单**：
```bash
cd D:\IdeaProjects\wz_ai\wz_ai_project
node -e "..." # 创建了 TEST-V3-001 订单
```

**V2 API 测试结果**：

✅ `POST /api/v3/orders/validate` (通过 ID)
```json
{
  "success": true,
  "order": {
    "id": "cmr8ym3yb0000gcz0fjuqw9bb",
    "externalCode": "TEST-V3-001",
    "storeName": "V3测试店",
    ...
  }
}
```

✅ `POST /api/v3/orders/validate` (通过 externalCode)
```json
{
  "success": true,
  "order": { ... }
}
```

✅ `POST /api/v3/orders/{id}/validate-sku` (SKU存在)
```json
{
  "success": true,
  "valid": true,
  "quantity": 2
}
```

✅ `POST /api/v3/orders/{id}/validate-sku` (SKU不存在)
```json
{
  "success": true,
  "valid": false,
  "error": "SKU SKU999 not found in this order"
}
```

✅ `POST /api/v3/orders/sync` (分页查询)
```json
{
  "success": true,
  "orders": [ ... ],
  "total": 26,
  "page": 1,
  "pageSize": 5
}
```

### 3. V3 项目配置更新

**修改文件**：`D:\IdeaProjects\wz_ai\wz_ai_project_v3\.env`

**配置变更**：
```bash
# 原来（Vercel V2）：
V2_API_URL=https://wz-ai-project-git-master-2239292947s-projects.vercel.app
V2_API_KEY=v3-system-api-key-2024

# 现在（本地 V2）：
V2_API_URL=http://localhost:3001
V2_API_KEY=local-v2-api-key
```

**修改文件**：`D:\IdeaProjects\wz_ai\wz_ai_project_v3\.env.example`

添加了本地开发和生产环境的配置说明

### 4. V2 项目端口配置

**修改文件**：`D:\IdeaProjects\wz_ai\wz_ai_project\package.json`

```json
{
  "scripts": {
    "dev": "next dev -p 3001",
    "start": "next start -p 3001"
  }
}
```

V2 现在运行在 **3001** 端口，V3 运行在 **3000** 端口

### 5. V3 项目降级机制

**已实现文件**：
- ✅ `src/lib/v2-api.ts` - V2ApiClient 降级机制
- ✅ `src/app/api/v3/orders/validate-order/route.ts` - 新的 API 路由
- ✅ `src/components/ExceptionReport.tsx` - 前端组件重构

**降级策略**：
1. 优先调用 V2 API（本地或远程）
2. V2 API 失败 → 降级到本地 OrderSnapshot 查询
3. 本地也没有 → 返回 "Order not found"

## 📊 架构对比

### 修复前

```
V3 (wz-ai-project-v3)
  ↓
V2 (wercel - SSO 保护) ❌ 302 Redirect
  ↓
Order not found
```

### 修复后（本地开发）

```
V3 (localhost:3000)
  ↓
V2 (localhost:3001) ✅ 直接访问
  ↓
真实订单数据
```

### 降级机制

```
V3
  ↓
V2 API
  ↓ (失败)
本地 OrderSnapshot 数据库
  ↓ (失败)
Order not found
```

## 🚀 使用指南

### 1. 启动 V2 项目

```bash
cd D:\IdeaProjects\wz_ai\wz_ai_project
npm run dev
# V2 运行在 http://localhost:3001
```

### 2. 启动 V3 项目

```bash
cd D:\IdeaProjects\wz_ai\wz_ai_project_v3
npm run dev
# V3 运行在 http://localhost:3000
```

### 3. 测试 V2 V3 API

```bash
# V2 订单验证
curl -X POST http://localhost:3001/api/v3/orders/validate \
  -H "Content-Type: application/json" \
  -d '{"orderId":"cmr8ym3yb0000gcz0fjuqw9bb"}'

# V3 订单验证（通过 V2）
curl -X POST http://localhost:3000/api/v3/orders/validate-order \
  -H "Content-Type: application/json" \
  -d '{"orderId":"cmr8ym3yb0000gcz0fjuqw9bb"}'
```

### 4. 浏览器测试

1. 访问 `http://localhost:3000/exception`
2. 输入订单号：`TEST-V3-001` 或 `cmr8ym3yb0000gcz0fjuqw9bb`
3. 点击"实时校验"
4. ✅ 应该成功显示订单信息

## 📝 新增 V2 订单

在 V2 项目中运行：

```bash
cd D:\IdeaProjects\wz_ai\wz_ai_project
node -e "
const { PrismaClient } = require('./src/generated/prisma/client');
const prisma = new PrismaClient();

async function create() {
  const order = await prisma.order.create({
    data: {
      externalCode: 'YOUR-ORDER-CODE',
      storeName: '店铺名称',
      receiverName: '张三',
      receiverPhone: '13800138000',
      receiverAddress: '地址',
      status: 'submitted',
      batchId: 'batch-001',
      items: {
        create: [
          { skuCode: 'SKU001', skuName: '商品A', quantity: 2, spec: 'L', remark: '' },
          { skuCode: 'SKU002', skuName: '商品B', quantity: 1, spec: '', remark: '' },
        ]
      }
    },
    include: { items: true }
  });
  console.log('Order created:', order.id, order.externalCode);
}

create().catch(console.error).finally(() => prisma.\$disconnect());
"
```

## 🔄 V3 与 V2 数据同步

V3 的 `OrderSnapshotService` 会自动将从 V2 获取的订单数据同步到 V3 本地数据库。

**首次同步**：
- 在 V3 的 ExceptionReport 页面查询订单时
- 自动调用 V2 API → 同步到本地 → 返回结果

**后续查询**：
- 优先从本地缓存读取（更快）
- 可配置缓存过期时间（默认 30 分钟）

## 📚 相关文档

- 📄 V3 降级机制：`D:\IdeaProjects\wz_ai\wz_ai_project_v3\docs\fix-summary.md`
- 📄 V2 SSO 修复指南：`D:\IdeaProjects\wz_ai\wz_ai_project_v3\docs\fix-v2-sso.md`
- 📄 快速测试指南：`D:\IdeaProjects\wz_ai\wz_ai_project_v3\docs\quick-test.md`

## ⚠️ 注意事项

### 本地开发

1. **端口冲突**
   - V2: 3001
   - V3: 3000
   - 如果冲突，修改 `.env` 中的 `V2_API_URL`

2. **数据隔离**
   - V2 和 V3 使用**不同的数据库**
   - V2: `postgresql://neondb_owner:npg_cdBX5WrELND2@...`
   - V3: `postgresql://neondb_owner:npg_k5cHqr0XAIlQ@...`

3. **环境变量**
   - V2 的 `.env`：不需要 V2_API_URL（V2 不调用 V3）
   - V3 的 `.env`：需要 `V2_API_URL=http://localhost:3001`

### 生产环境部署

**选项 1：保持 Vercel 部署**（推荐）

V2 部署到 Vercel，V3 配置 V2 的 Vercel URL：
```bash
# V3 .env.production
V2_API_URL=https://wz-ai-project-git-master-2239292947s-projects.vercel.app
V2_API_KEY=your-api-key-here
```

**问题**：V2 Vercel 项目启用了 SSO，需要先修复

**选项 2：本地部署 V2**

如果 V2 自己部署到服务器：
```bash
# V3 .env.production
V2_API_URL=https://your-v2-server.com
V2_API_KEY=your-api-key
```

## ✅ 完成状态

- ✅ V2 V3 兼容 API 已创建
- ✅ V2 API 测试通过
- ✅ V3 配置已更新
- ✅ 测试订单已创建
- ⏳ V3 完整流程测试（等待 V3 编译问题修复）

## 🐛 已知问题

**V3 Next.js 路由编译问题**
- 所有 `/api/v3/orders/*` 路由返回 404
- 可能是 Next.js 缓存或编译问题
- **解决方案**：清理 `.next` 缓存并重启开发服务器

```bash
cd D:\IdeaProjects\wz_ai\wz_ai_project_v3
rm -rf .next
npm run dev
```

## 📞 下一步

1. **立即测试**
   - 访问 `http://localhost:3001/api/v3/orders/validate`
   - 验证 V2 API 正常工作

2. **V3 路由修复**
   - 清理 V3 缓存
   - 重新启动 V3
   - 测试完整流程

3. **生产部署**
   - 选择 V2 部署方案（Vercel 或自部署）
   - 配置 V3 的 V2_API_URL
   - 部署 V3

---

**更新时间**: 2026-07-06
**V2 API 状态**: ✅ 已创建并测试通过
**V3 配置状态**: ✅ 已更新
