# V3 项目部署指南

## 前置准备

- Vercel 账号
- NeonDB 数据库（已配置）
- Git 仓库

## 部署步骤

### 1. 初始化 Git 仓库

```bash
cd wz_ai_project_v3
git init
git add .
git commit -m "Initial commit: V3 运单全流程管理系统"
```

### 2. 推送到 GitHub

```bash
# 在 GitHub 创建新仓库后
git remote add origin https://github.com/your-username/wz_ai_project_v3.git
git branch -M main
git push -u origin main
```

### 3. Vercel 部署

1. 访问 https://vercel.com/new
2. 导入 Git 仓库
3. 配置环境变量：
   - `DATABASE_URL` = `postgresql://neondb_owner:npg_k5cHqr0XAIlQ@ep-lively-meadow-at0o464s-pooler.c-9.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require`
   - `V2_API_URL` = `https://wz-ai-project-git-master-2239292947s-projects.vercel.app`
   - `V2_API_KEY` = `your-api-key-here`
4. 点击 Deploy

### 4. 数据库迁移

首次部署后，在 Vercel 项目的 Environment Variables 中确保 `DATABASE_URL` 已配置，然后：

```bash
# 本地执行
npx prisma db push

# 或使用 Vercel CLI
vercel env pull .env.local
npm run db:push
npm run db:seed
```

### 5. 验证部署

访问 https://wz-ai-project-v3-xxx.vercel.app（Vercel 分配的域名）

检查以下功能：
- [ ] 首页可正常访问
- [ ] 扫描操作页面可正常加载
- [ ] V2 接口连通性测试通过
- [ ] 数据库表已创建
- [ ] 系统配置已初始化

## 注意事项

### V2 接口配置

当前 V2 接口为演示模式（模拟数据）。生产环境需要：

1. 在 V2 项目中实现真实的 V3 接口：
   - `POST /api/v3/orders/validate`
   - `POST /api/v3/orders/[id]/validate-sku`
   - `POST /api/v3/orders/sync`
   - `POST /api/v3/orders/batch`

2. 配置正确的 `V2_API_URL` 和 `V2_API_KEY`

3. 在 V3 中更新 `src/lib/v2-api.ts` 中的鉴权逻辑

### 环境变量

生产环境必须配置：
- `DATABASE_URL` - NeonDB 数据库连接
- `V2_API_URL` - V2 系统 API 地址
- `V2_API_KEY` - V2 接口鉴权密钥
- `NEXT_PUBLIC_APP_URL` - 当前 V3 应用 URL

### 数据库备份

建议定期备份 NeonDB：
1. 登录 NeonDB 控制台
2. 创建备份计划
3. 或使用 `pg_dump` 手动备份

### 监控

- Vercel Dashboard 查看部署日志和性能
- 系统监控页面查看 V2 接口调用状态
- 数据库查询日志（NeonDB 控制台）

## 常见问题

### Prisma Client 未初始化

```bash
npm run db:generate
```

### 数据库连接超时

检查 `DATABASE_URL` 配置，确认 NeonDB 连接池配置正确。

### V2 接口调用失败

检查 `V2_API_URL` 和 `V2_API_KEY` 是否正确，以及 V2 系统是否正常运行。

## 后续优化

1. 实现真实的 V2 接口
2. 添加用户认证和权限管理
3. 集成钉钉/企业微信通知
4. 添加大模型辅助品控判断
5. 实现多租户支持
6. 增加更多品控规则类型
7. 优化性能（缓存、CDN）
