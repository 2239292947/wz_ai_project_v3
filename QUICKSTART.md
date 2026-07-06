# 快速入门指南

## 5 分钟启动项目

### 1. 安装依赖（1 分钟）

```bash
cd wz_ai_project_v3
npm install
```

### 2. 配置环境变量（1 分钟）

`.env` 文件已配置，直接使用即可。

如需修改，编辑 `.env` 文件：

```env
DATABASE_URL=postgresql://neondb_owner:npg_k5cHqr0XAIlQ@ep-lively-meadow-at0o464s-pooler.c-9.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require
V2_API_URL=https://wz-ai-project-git-master-2239292947s-projects.vercel.app
V2_API_KEY=v3-system-api-key-2024
```

### 3. 初始化数据库（2 分钟）

```bash
# 生成 Prisma Client
npm run db:generate

# 推送 schema 到数据库
npm run db:push

# 初始化系统配置
npm run db:seed
```

看到 `✅ 成功初始化 23 条系统配置` 表示成功。

### 4. 启动开发服务器（1 分钟）

```bash
npm run dev
```

访问 http://localhost:3000

## 功能测试

### 测试 1：品控扫描流程

```bash
# 新终端窗口
npm run test:qc-scan
```

预期输出：
- ✓ 订单同步成功
- ✓ 品控检测异常（数量差异）
- ✓ 扫描记录创建成功
- ✓ 品控工单创建成功

### 测试 2：物流异常上报

```bash
npm run test:create-ticket
```

预期输出：
- ✓ 运单验证通过
- ✓ 快照同步成功
- ✓ 物流工单创建成功

### 测试 3：审批流程

```bash
npm run test:approval-flow
```

预期输出：
- ✓ 找到待审批工单
- ✓ 一级审批通过
- ✓ 二级审批通过（如金额超过阈值）

### 测试 4：超时处理

```bash
npm run test:timeout
```

预期输出：
- ✓ 超时工单处理完成
- ✓ 工单状态已更新

## 核心页面说明

### 1. 首页（/）

- 系统导航入口
- 6 大功能模块快速访问

### 2. 扫描操作（/scan）

- 输入运单号搜索
- 实时调用 V2 接口校验
- 录入扫描信息
- 品控自动检测

### 3. 异常上报（/exception）

- 实时校验运单真实性
- 选择异常类型
- 填写描述并提交

### 4. 审批中心（/approval）

- 左侧：待审批工单列表
- 右侧：审批操作和详情
- 支持通过/驳回/升级

### 5. 工单列表（/tickets）

- 多维度筛选
- 分页展示
- 查看详情

### 6. 系统监控（/monitor）

- V2 连接状态
- 接口调用统计
- 最近调用日志
- 数据新鲜度说明

### 7. 假设说明（/assumptions）

- 九项核心假设
- 待澄清问题
- 多租户说明

## 常见问题

### Q1: 数据库连接失败？

检查 `DATABASE_URL` 是否正确，NeonDB 是否可访问。

### Q2: V2 接口调用失败？

当前 V2 接口为演示模式（模拟数据），会返回成功。如连接真实 V2 系统，需配置正确的 `V2_API_URL` 和 `V2_API_KEY`。

### Q3: Prisma Client 报错？

```bash
npm run db:generate
```

### Q4: 端口被占用？

修改 `package.json` 中的 dev 命令：

```json
"dev": "next dev -p 3001"
```

## 下一步

- 📖 阅读 [README.md](README.md) 了解完整功能
- 🚀 查看 [DEPLOYMENT.md](DEPLOYMENT.md) 部署到 Vercel
- 📊 查看 [SUMMARY.md](SUMMARY.md) 了解实现详情

## 技术栈

- Next.js 14 (App Router)
- TypeScript
- PostgreSQL (NeonDB)
- Prisma ORM
- Tailwind CSS

## 核心特性

- ✅ 完整的品控规则引擎
- ✅ 分级审批流程
- ✅ V2 接口封装与降级
- ✅ 并发冲突处理
- ✅ 超时自动流转
- ✅ 幂等性保证
- ✅ 数据一致性保证
- ✅ 系统可配置化
- ✅ 完整的审计日志
