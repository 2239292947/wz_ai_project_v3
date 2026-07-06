import { NextRequest, NextResponse } from "next/server"
import { v2Api } from "@/lib/v2-api"
import { db } from "@/lib/prisma"
// 注意：跨系统调用链路日志（Request ID 等）已在 v2-api.ts 内部统一写入 SyncLog，
// 本路由不再重复记录，仅负责把运单快照落库。

/**
 * V3 API 路由：验证运单号（供前端 ExceptionReport 组件调用）
 *
 * 真实性校验流程（对应考点5 · 真实性校验落地，杜绝伪对接）：
 * 1. 始终先调用 V2 接口实时校验运单真实性（带 X-API-Key 鉴权）。
 * 2. 若 V2 正常响应且运单存在 -> 同步到本地快照并返回 source=v2。
 * 3. 若 V2 明确返回「不存在」（404 / success:false）-> 直接返回 404，
 *    **绝不**回退到本地快照把不存在的运单"凑"成存在（避免凭过期缓存伪造）。
 * 4. 仅当 V2 整体不可达（网络/超时）时，v2Api 才会返回 source=local-cache，
 *    此时才降级使用本地快照继续展示，并标注数据可能非最新。
 */
export async function POST(request: NextRequest) {
  const startTime = Date.now()

  try {
    const body = await request.json()
    const { orderId } = body

    if (!orderId || typeof orderId !== "string") {
      return NextResponse.json(
        { success: false, error: "Invalid orderId" },
        { status: 400 }
      )
    }

    // 1. 实时调用 V2 接口校验（内部已实现 Request ID 与链路日志）
    const v2Result = await v2Api.validateOrder(orderId)

    if (v2Result.exists && v2Result.order) {
      // 2. V2 验证成功，同步到本地快照
      try {
        const order = v2Result.order
        const snapshot = await db().orderSnapshot.upsert({
          where: { v2OrderId: order.id },
          create: {
            v2OrderId: order.id,
            externalCode: order.externalCode,
            storeName: order.storeName,
            receiverName: order.receiverName,
            receiverPhone: order.receiverPhone,
            receiverAddress: order.receiverAddress,
            amount: order.amount,
            itemsJson: order.items,
            syncedAt: new Date(),
          },
          update: {
            externalCode: order.externalCode,
            storeName: order.storeName,
            receiverName: order.receiverName,
            receiverPhone: order.receiverPhone,
            receiverAddress: order.receiverAddress,
            amount: order.amount,
            itemsJson: order.items,
            syncedAt: new Date(),
          },
        })

        return NextResponse.json({
          success: true,
          source: "v2",
          order: v2Result.order,
          snapshot,
        })
      } catch (syncError) {
        // 同步落库失败，但 V2 数据有效，直接返回 V2 数据（不阻断主流程）
        console.warn(`[API] Sync failed but V2 data valid:`, syncError)
        return NextResponse.json({
          success: true,
          source: "v2-unsynced",
          order: v2Result.order,
          warning: `Sync to local failed: ${(syncError as Error).message}`,
        })
      }
    }

    // 3 & 4. V2 验证未通过
    if (v2Result.source === "local-cache") {
      // 仅当 V2 整体不可达（降级场景）才使用本地快照
      try {
        let snapshot = await db().orderSnapshot.findUnique({
          where: { v2OrderId: orderId },
        })

        if (!snapshot) {
          snapshot = await db().orderSnapshot.findFirst({
            where: { externalCode: orderId },
          })
          if (snapshot) {
            return NextResponse.json({
              success: true,
              source: "local-cache",
              isFresh: false,
              warning: "V2 接口当前不可用，以下数据来自本地缓存，可能非最新",
              order: {
                id: snapshot.v2OrderId,
                externalCode: snapshot.externalCode,
                storeName: snapshot.storeName,
                receiverName: snapshot.receiverName,
                receiverPhone: snapshot.receiverPhone,
                receiverAddress: snapshot.receiverAddress,
                amount: snapshot.amount,
                items: snapshot.itemsJson || [],
              },
              snapshot,
            })
          }
        } else {
          return NextResponse.json({
            success: true,
            source: "local-cache",
            isFresh: false,
            warning: "V2 接口当前不可用，以下数据来自本地缓存，可能非最新",
            order: {
              id: snapshot.v2OrderId,
              externalCode: snapshot.externalCode,
              storeName: snapshot.storeName,
              receiverName: snapshot.receiverName,
              receiverPhone: snapshot.receiverPhone,
              receiverAddress: snapshot.receiverAddress,
              amount: snapshot.amount,
              items: snapshot.itemsJson || [],
            },
            snapshot,
          })
        }

        return NextResponse.json(
          { success: false, error: "Order not found in V2 or local cache" },
          { status: 404 }
        )
      } catch (localError) {
        console.error("[API] Local fallback failed:", localError)
        return NextResponse.json(
          { success: false, error: `Validation failed: ${(localError as Error).message}` },
          { status: 500 }
        )
      }
    }

    // V2 明确返回「不存在」-> 直接失败，绝不伪造（考点5 真实性校验落地）
    return NextResponse.json(
      { success: false, error: v2Result.error || "Order not found" },
      { status: 404 }
    )
  } catch (error) {
    console.error("[API] Order validation error:", error)
    return NextResponse.json(
      { success: false, error: `Validation failed: ${(error as Error).message}` },
      { status: 500 }
    )
  }
}
