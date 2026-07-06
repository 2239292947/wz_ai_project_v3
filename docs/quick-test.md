# 快速验证指南

## 问题总结

✅ **已完成修复**：订单验证接口现在支持降级机制

## 核心改进

### 1. V2ApiClient 降级机制

**文件**: `src/lib/v2-api.ts`

当 V2 API 调用失败时，自动降级到本地数据库查询：
- 先通过 `v2OrderId` 查询
- 再通过 `externalCode`（外部单号）查询
- 最后返回 "Order not found"

### 2. 新的 API 路由

**端点**: `POST /api/v3/orders/validate-order`

**请求**：
```bash
curl -X POST http://localhost:3000/api/v3/orders/validate-order \
  -H "Content-Type: application/json" \
  -d '{"orderId":"order-001"}'
```

**响应**：
```json
{
  "success": true,
  "source": "v2",  // v2 | v2-unsynced | local-cache | local-external-code
  "order": {
    "id": "order-001",
    "externalCode": "EX20240001",
    "storeName": "测试店铺A",
    ...
  },
  "snapshot": { ... },
  "warning": "Data may be outdated..." // 仅在降级时出现
}
```

### 3. ExceptionReport 组件重构

**改进**：
- ✅ 不再直接导入 V2ApiClient
- ✅ 通过 API 路由访问，符合 Next.js 最佳实践
- ✅ 包体积从 18kB 减少到 2.19kB
- ✅ 支持数据源标识

## 手动测试步骤

### 1. 启动开发服务器

```bash
npm run dev
```

等待看到：
```
✓ Ready on http://localhost:3000
```

### 2. 测试订单验证

#### 测试 1：Mock 订单（order-001）

```bash
curl -X POST http://localhost:3000/api/v3/orders/validate-order \
  -H "Content-Type: application/json" \
  -d '{"orderId":"order-001"}' | jq
```

**期望结果**：
```json
{
  "success": true,
  "source": "v2",  // 或 "local-cache"
  "order": { ... }
}
```

#### 测试 2：不存在的订单

```bash
curl -X POST http://localhost:3000/api/v3/orders/validate-order \
  -H "Content-Type: application/json" \
  -d '{"orderId":"NOT-EXIST-999"}' | jq
```

**期望结果**：
```json
{
  "success": false,
  "error": "Order not found in V2 or local cache"
}
```

#### 测试 3：空订单号

```bash
curl -X POST http://localhost:3000/api/v3/orders/validate-order \
  -H "Content-Type: application/json" \
  -d '{"orderId":""}' | jq
```

**期望结果**：
```json
{
  "success": false,
  "error": "Invalid orderId"
}
```

### 3. 浏览器测试

访问：`http://localhost:3000/exception`

1. 在"运单号"输入框输入 `order-001`
2. 点击"实时校验"
3. ✅ 应该成功显示订单信息
4. 输入一个真实订单号（已同步到本地）
5. ✅ 应该成功显示订单信息（即使 V2 不可用）

## 数据源说明

| source | 说明 | 数据新鲜度 |
|--------|------|-----------|
| `v2` | 来自 V2 API | ✅ 最新 |
| `v2-unsynced` | V2 API 成功但本地同步失败 | ✅ 最新 |
| `local-cache` | 来自本地缓存 | ⚠️ 可能过期（默认30分钟） |
| `local-external-code` | 通过外部单号从本地缓存查询 | ⚠️ 可能过期 |

## 检查修复后的效果

### 修复前
```
用户输入真实订单号
  ↓
V3 调用 V2 API
  ↓
V2 返回 302 SSO 重定向
  ↓
V3 返回 "Order not found" ❌
```

### 修复后
```
用户输入真实订单号
  ↓
V3 调用新的 API 路由
  ↓
尝试 V2 API
  ↓
V2 SSO 失败
  ↓
降级到本地缓存查询 ✅
  ↓
如果本地有数据 → 返回订单信息
如果本地无数据 → 返回 "Order not found"
```

## 后续步骤

### 立即可做

1. ✅ **部署到 Vercel**
   ```bash
   git add .
   git commit -m "fix: add order validation fallback and API route"
   git push
   ```

2. ✅ **测试生产环境**
   - 访问 `https://wz-ai-project-v3.vercel.app/exception`
   - 测试订单验证功能

### 短期优化

3. ⏭️ **修复 V2 SSO**（可选但推荐）
   - 参考 `docs/fix-v2-sso.md`
   - 禁用 V2 项目的 Vercel SSO

4. ⏭️ **同步真实订单数据**
   ```bash
   # 如果实现了同步接口
   curl -X POST http://localhost:3000/api/v3/orders/sync \
     -H "Content-Type: application/json" \
     -d '{"startDate":"2024-01-01","endDate":"2024-12-31"}'
   ```

### 长期优化

5. ⏭️ **实现自动同步**
   - 添加定时任务（Vercel Cron Jobs）
   - 每天自动同步订单数据

6. ⏭️ **添加监控**
   - V2 API 可用性监控
   - 降级使用率统计
   - 告警通知

## 总结

| 项目 | 修复前 | 修复后 |
|------|--------|--------|
| V2 API 失败处理 | ❌ 直接报错 | ✅ 降级到本地缓存 |
| 已同步订单查询 | ❌ 失败 | ✅ 成功 |
| 客户端包体积 | 18 kB | 2.19 kB ✅ 减少 88% |
| 架构合理性 | ❌ 客户端调用服务端代码 | ✅ 通过 API 路由 |
| 用户体验 | ❌ 所有订单都失败 | ✅ 已同步订单可用 |

## 相关文档

- 📄 [完整修复报告](docs/order-validation-fix.md)
- 🔧 [V2 SSO 修复指南](docs/fix-v2-sso.md)
- 📊 [V3 架构文档](../README.md)

---

**问题已修复 ✅** - 订单验证功能现在支持降级机制，即使 V2 API 不可用，已同步的订单也能正常查询。
