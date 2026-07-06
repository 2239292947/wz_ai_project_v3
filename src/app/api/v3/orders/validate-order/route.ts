import { NextRequest, NextResponse } from "next/server"
import { v2Api } from "@/lib/v2-api"
import { OrderSnapshotService } from "@/lib/order-snapshot-service"

/**
 * V3 API 路由：验证运单号
 * 供前端 ExceptionReport 组件调用
 *
 * 流程：
 * 1. 优先调用 V2 API 验证运单真实性
 * 2. 如果 V2 API 不可用（如 SSO 问题），降级到本地快照查询
 * 3. 如果本地也没有，返回"订单不存在"
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { orderId } = body

    if (!orderId || typeof orderId !== "string") {
      return NextResponse.json(
        { success: false, error: "Invalid orderId" },
        { status: 400 }
      )
    }

    console.log(`[API] Validating order: ${orderId}`)

    // 1. 调用 V2 API 验证
    const v2Result = await v2Api.validateOrder(orderId)

    if (v2Result.exists && v2Result.order) {
      // V2 验证成功，同步到本地快照
      console.log(`[API] Order found in V2: ${orderId}, syncing to local...`)
      const syncResult = await OrderSnapshotService.syncOrderFromV2(v2Result.order.id)

      if (syncResult.success && syncResult.snapshot) {
        return NextResponse.json({
          success: true,
          source: "v2",
          order: v2Result.order,
          snapshot: syncResult.snapshot,
        })
      } else {
        // 同步失败，但 V2 数据有效，直接返回 V2 数据
        console.warn(`[API] Sync failed but V2 data valid: ${syncResult.error}`)
        return NextResponse.json({
          success: true,
          source: "v2-unsynced",
          order: v2Result.order,
          warning: syncResult.error,
        })
      }
    }

    // 2. V2 验证失败，降级到本地快照查询
    console.warn(`[API] V2 validation failed: ${v2Result.error}, trying local fallback...`)
    const localSnapshot = await OrderSnapshotService.findLocal(orderId)

    if (!localSnapshot) {
      // 尝试通过外部单号查询
      const byExternalCode = await OrderSnapshotService.findByExternalCode(orderId)
      if (byExternalCode) {
        return NextResponse.json({
          success: true,
          source: "local-external-code",
          order: {
            id: byExternalCode.v2OrderId,
            externalCode: byExternalCode.externalCode,
            storeName: byExternalCode.storeName,
            receiverName: byExternalCode.receiverName,
            receiverPhone: byExternalCode.receiverPhone,
            receiverAddress: byExternalCode.receiverAddress,
            amount: byExternalCode.amount,
            items: byExternalCode.itemsJson || [],
          },
          snapshot: byExternalCode,
        })
      }

      return NextResponse.json(
        { success: false, error: "Order not found in V2 or local cache" },
        { status: 404 }
      )
    }

    // 本地快照存在，检查数据新鲜度
    const isFresh = await OrderSnapshotService.isFresh(localSnapshot, 30)

    return NextResponse.json({
      success: true,
      source: "local-cache",
      order: {
        id: localSnapshot.v2OrderId,
        externalCode: localSnapshot.externalCode,
        storeName: localSnapshot.storeName,
        receiverName: localSnapshot.receiverName,
        receiverPhone: localSnapshot.receiverPhone,
        receiverAddress: localSnapshot.receiverAddress,
        amount: localSnapshot.amount,
        items: localSnapshot.itemsJson || [],
      },
      snapshot: localSnapshot,
      isFresh,
      warning: isFresh
        ? undefined
        : "Data may be outdated, V2 API is currently unavailable",
    })
  } catch (error) {
    console.error("[API] Order validation error:", error)
    return NextResponse.json(
      {
        success: false,
        error: `Validation failed: ${(error as Error).message}`,
      },
      { status: 500 }
    )
  }
}
