// Core types for the V3 system

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// V2 Order Snapshot (local cache, read-only)
export interface OrderSnapshot {
  id: string
  externalCode: string | null
  storeName: string | null
  receiverName: string | null
  receiverPhone: string | null
  receiverAddress: string | null
  amount: number | null
  items: OrderItemSnapshot[]
  syncedAt: Date
  v2OrderId: string
}

export interface OrderItemSnapshot {
  id: string
  skuCode: string
  skuName: string
  quantity: number
  spec: string | null
  remark: string | null
}

// Scan Record
export interface ScanRecord {
  id: string
  scanId: string
  orderSnapshotId: string
  skuCode: string
  skuName: string
  scannedQuantity: number
  scanTime: Date
  operator: string
  deviceId?: string
  qcResult: "PASS" | "FAIL"
  qcRuleId?: string
  qcRuleName?: string
  qcDescription?: string
  batchStatus: "NORMAL" | "QC_HOLD"
  ticketId?: string
  createdAt: Date
}

// Exception Ticket
export type TicketStatus =
  | "PENDING"
  | "LEVEL1_APPROVING"
  | "LEVEL2_APPROVING"
  | "EXECUTING"
  | "COMPLETED"
  | "REJECTED"
  | "CANCELLED"

export type TicketSource = "SCAN_QC" | "MANUAL_LOGISTICS"

export type ExceptionType = "QC" | "LOGISTICS"

export interface ExceptionTicket {
  id: string
  ticketNo: string
  orderSnapshotId: string
  exceptionType: ExceptionType
  source: TicketSource
  category: string // 异常子类型
  description: string
  status: TicketStatus
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT"
  currentApprovalLevel: number
  resubmitCount: number
  maxResubmitCount: number
  submittedBy: string
  submittedAt: Date
  completedAt?: Date
  createdAt: Date
  updatedAt: Date
  scanRecordIds?: string[] // 关联扫描记录（品控异常）
}

// Approval Record
export type ApprovalAction = "APPROVE" | "REJECT" | "ESCALATE" | "TRANSFER"

export interface ApprovalRecord {
  id: string
  ticketId: string
  approvalLevel: number
  approverId: string
  approverName: string
  action: ApprovalAction
  comment: string
  approvedAt: Date
  createdAt: Date
}

// Compensation Record
export type CompensationDirection = "TO_CUSTOMER" | "FROM_SUPPLIER"

export type CompensationStatus = "PENDING" | "PAID" | "RECOVERED" | "CANCELLED"

export interface CompensationRecord {
  id: string
  ticketId: string
  approvalRecordId: string
  amount: number
  direction: CompensationDirection
  status: CompensationStatus
  reason: string
  paymentMethod?: string
  paidAt?: Date
  createdAt: Date
  updatedAt: Date
}

// Inventory Record
export type InventoryChangeType =
  | "COMPENSATION_DEDUCT"
  | "COMPENSATION_ADD"
  | "RETURN_IN"
  | "RESHIP_DEDUCT"
  | "QC_RELEASE"
  | "QC_HOLD"

export interface InventoryRecord {
  id: string
  skuCode: string
  warehouseId: string
  quantityChange: number
  changeType: InventoryChangeType
  ticketId?: string
  approvalRecordId?: string
  operator: string
  remark: string
  createdAt: Date
}

// QC Rule
export interface QCRule {
  id: string
  name: string
  code: string
  description: string
  exceptionType: string
  triggerCondition: {
    type: "quantity_diff_percent" | "damage_level" | "spec_mismatch" | "label_error" | "batch_anomaly"
    threshold: number
    operator?: ">" | "<" | ">=" | "<=" | "==" | "!="
  }
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL"
  autoCreateTicket: boolean
  autoApprovalLevel: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

// Sync Log
export type SyncStatus = "SUCCESS" | "FAILED" | "TIMEOUT"

export interface SyncLog {
  id: string
  apiName: string
  requestParams: Record<string, unknown>
  responseStatus: number
  responseBody?: string
  status: SyncStatus
  errorMessage?: string
  duration: number // ms
  createdAt: Date
}
