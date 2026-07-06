# V3 运单全流程管理系统

独立部署、独立数据库的运单全生命周期管理平台。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **数据库**: PostgreSQL (NeonDB)
- **ORM**: Prisma
- **样式**: Tailwind CSS
- **图标**: Lucide React

## 项目结构

```
wz_ai_project_v3/
├── prisma/
│   ├── schema.prisma      # 数据库模型定义
│   ├── seed.ts            # 系统配置初始化
│   └── migrations/        # 数据库迁移
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── api/           # API 路由
│   │   │   ├── scan/      # 扫描操作 API
│   │   │   ├── tickets/   # 工单管理 API
│   │   │   ├── approval/  # 审批流程 API
│   │   │   ├── config/    # 系统配置 API
│   │   │   ├── qc-rules/  # 品控规则 API
│   │   │   ├── monitor/   # 监控 API
│   │   │   └── v3/        # V2 接口模拟（演示用）
│   │   ├── scan/          # 扫描操作页面
│   │   ├── exception/     # 异常上报页面
│   │   ├── approval/      # 审批中心页面
│   │   ├── tickets/       # 工单列表页面
│   │   ├── monitor/       # 系统监控页面
│   │   └── assumptions/   # 假设说明文档
│   ├── components/        # React 组件
│   │   ├── Sidebar.tsx
│   │   ├── ScanOperation.tsx
│   │   ├── ExceptionReport.tsx
│   │   ├── TicketList.tsx
│   │   ├── ApprovalCenter.tsx
│   │   ├── SystemMonitor.tsx
│   │   ├── QCRules.tsx
│   │   └── AssumptionsDoc.tsx
│   ├── lib/               # 核心业务逻辑
│   │   ├── prisma.ts      # Prisma 客户端
│   │   ├── v2-api.ts      # V2 接口客户端
│   │   ├── system-config.ts # 系统配置服务
│   │   ├── qc-rules.ts    # 品控规则引擎
│   │   ├── approval-engine.ts # 审批流程引擎
│   │   ├── inventory-service.ts # 库存服务
│   │   ├── sync-log.ts    # 同步日志服务
│   │   └── order-snapshot-service.ts # 订单快照服务
│   └── types/             # TypeScript 类型定义
├── scripts/               # 测试脚本
├── .env.example           # 环境变量示例
├── next.config.js
└── package.json
```

## 核心功能模块

### 模块零：扫描操作与品控检测

- 扫描录入（支持模拟扫描枪）
- 品控规则引擎自动检测
- 品控暂扣（批次锁定）
- 扫描幂等性（重复扫描不重复创建工单）
- 误判快速放行（品控主管权限）

### 模块一：异常工单上报

- 实时调用 V2 接口校验运单真实性
- 支持物流异常手工上报
- 防止重复上报同类型未关闭工单

### 模块二：分级审批流程引擎

- 一级/二级分级审批
- 并发冲突处理（乐观锁）
- 审批人离职兜底机制
- 超时自动流转
- 权限边界控制
- 幂等性保证

### 模块三：执行联动

- 赔付记录生成
- 库存自动调整
- 可追溯性（审批记录外键关联）

### 模块四：工单列表与追踪

- 多维度筛选和分页
- 超时工单醒目提示
- 状态变更历史审计

### 模块五：跨系统接口与数据一致性

- V2 接口监控页面
- 数据新鲜度标注
- 降级方案（本地快照）

### 模块六：《需求理解与假设说明》文档

- 九项核心假设说明
- 待澄清问题清单
- 多租户假设说明

## 系统配置

所有业务规则均可配置，存储在 `system_config` 表：

| 配置项 | 默认值 | 说明 |
|--------|--------|------|
| `approval.level1.threshold` | 5000 | 一级审批金额阈值（元） |
| `approval.level2.threshold` | 20000 | 二级审批金额阈值（元） |
| `approval.resubmit.max_count` | 3 | 驳回后最大重提次数 |
| `timeout.approval.level1` | 3600 | 一级审批超时（秒） |
| `timeout.approval.level2` | 7200 | 二级审批超时（秒） |
| `timeout.qc.hold` | 900 | 品控暂扣超时（秒） |
| `qc.quantity_diff.threshold` | 10 | 数量差异阈值（%） |
| `qc.damage.level.threshold` | 3 | 破损等级阈值 |

## 快速开始

### 1. 环境配置

```bash
# 复制环境变量文件
cp .env.example .env

# 编辑 .env，配置数据库连接等信息
```

### 2. 安装依赖

```bash
npm install
```

### 3. 数据库初始化

```bash
# 生成 Prisma Client
npm run db:generate

# 推送 schema 到数据库（创建表）
npm run db:push

# 初始化系统配置
npm run db:seed
```

### 4. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

## 测试脚本

### 创建品控异常工单

```bash
npm run test:qc-scan
```

### 创建物流异常工单

```bash
npm run test:create-ticket
```

### 测试审批流程

```bash
npm run test:approval-flow
```

### 测试超时处理

```bash
npm run test:timeout
```

## V2 接口契约

V3 通过 HTTP API 与 V2 系统通信，不直接连接 V2 数据库。

### 已实现接口

- `POST /api/v3/orders/validate` - 校验运单是否存在
- `POST /api/v3/orders/[id]/validate-sku` - 校验 SKU 归属
- `POST /api/v3/orders/sync` - 批量同步运单
- `POST /api/v3/orders/batch` - 批量获取运单详情

### 鉴权

使用 `X-API-Key` 请求头进行鉴权。

### 超时与重试

- 超时时间：10 秒（可配置）
- 重试次数：2 次（可配置）
- 指数退避策略

## 部署

### Vercel 部署

1. 推送代码到 Git 仓库
2. 在 Vercel 导入项目
3. 配置环境变量：
   - `DATABASE_URL`
   - `V2_API_URL`
   - `V2_API_KEY`
4. 部署

### 数据库迁移

```bash
# 创建迁移
npm run db:migrate

# 应用迁移
npm run db:push
```

## 设计亮点

### 1. 状态机分离

- 扫描批次状态与工单状态分离管理
- 通过 `scan_records.ticket_id` 关联
- 工单关闭前批次不得自动解锁

### 2. 并发控制

- 乐观锁机制防止并发审批冲突
- 审批前重新读取工单状态
- 清晰的冲突提示

### 3. 幂等性保证

- 扫描幂等（重复扫描只追加记录）
- 审批幂等（基于工单状态做前置校验）
- 补偿任务幂等

### 4. 一致性保证

- 审批通过与执行联动在同一事务内完成
- 审批记录作为外键关联所有下游动作
- 库存变更可追溯

### 5. 可配置性

- 所有业务规则均为配置项
- 品控规则可后台调整
- 审批阈值可动态修改

## 许可证

MIT
