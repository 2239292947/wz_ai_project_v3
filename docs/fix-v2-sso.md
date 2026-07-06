# V2 SSO 问题修复指南

## 问题描述

V3 系统调用 V2 API 时，V2 返回 302 重定向到 Vercel SSO 登录页，导致 V3 无法获取真实订单数据。

## 修复步骤

### 方法 A：在 Vercel 控制台禁用 SSO（推荐）

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 找到项目 `wz-ai-project-git-master-2239292947s-projects`
3. 进入 **Settings** → **Deployments**
4. 找到 **Password Protection** 或 **SSO Protection** 设置
5. 选择 **Disable** 或配置允许的 IP 地址范围

### 方法 B：使用 Vercel Access Token（更安全）

如果 V2 需要保护，可以使用 Vercel 的 Bearer Token 认证：

1. 在 Vercel 中创建 **Access Token**
   - Settings → Tokens → Create Token
   - 选择只读权限

2. 修改 V3 的 V2ApiClient 添加 Bearer Token 认证

3. 在 V2 项目配置中启用 **Vercel Cron Jobs** 或 **Protected Routes** 的 Token 认证

### 方法 C：配置 Vercel Firewall（企业级）

1. 升级到 Vercel Pro/Enterprise
2. 配置 **Vercel Firewall** 规则
3. 只允许 V3 项目的 IP 范围访问 V2 API

## 验证

修复后运行以下命令验证：

```bash
curl -s https://wz-ai-project-git-master-2239292947s-projects.vercel.app/api/v3/orders/validate \
  -X POST \
  -H "Content-Type: application/json" \
  -H "X-API-Key: v3-system-api-key-2024" \
  -d '{"orderId":"order-001"}'
```

期望返回：
```json
{
  "success": true,
  "order": { ... }
}
```

而不是：
```
HTTP 302 → https://vercel.com/sso-api?...
```
