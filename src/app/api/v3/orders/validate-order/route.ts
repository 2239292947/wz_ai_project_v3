import { NextRequest, NextResponse } from "next/server"
import { v2Api } from "@/lib/v2-api"
import { db } from "@/lib/prisma"

/**
 * V3 API 路由：验证运单号
 * 供前端 ExceptionReport 组件调用
 *
 * 流程：
 * 1. 优先调用 V2 API 验证运单真实性
 * 2. 如果 V2 API 不可用（如 SSO 问题），降级到本地快照查询
 * 3. 如果本地也没有，返回"订单不存在"
 *
 * 注意：此路由直接在 API 路由中处理逻辑，避免导入 OrderSnapshotService
 * 以防止 Vercel serverless 环境中的 Prisma 初始化问题
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

    console.log(`[API] Validating order: ${orderId}`)

    // 1. 调用 V2 API 验证
    const v2Result = await v2Api.validateOrder(orderId)

    if (v2Result.exists && v2Result.order) {
      // V2 验证成功，尝试同步到本地快照
      console.log(`[API] Order found in V2: ${orderId}, syncing to local...`)

      try {
        // 直接在这里同步，避免导入 OrderSnapshotService
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

        // 记录同步日志（可选，不阻塞主流程）
        try {
          await db().syncLog.create({
            data: {
              apiName: "validateOrder",
              requestParams: { orderId },
              responseStatus: 200,
              status: "SUCCESS",
              duration: Date.now() - startTime,
            },
          })
        } catch (logError) {
          console.warn("[API] Failed to log sync:", logError)
        }

        return NextResponse.json({
          success: true,
          source: "v2",
          order: v2Result.order,
          snapshot,
        })
      } catch (syncError) {
        // 同步失败，但 V2 数据有效，直接返回 V2 数据
        console.warn(`[API] Sync failed but V2 data valid:`, syncError)

        return NextResponse.json({
          success: true,
          source: "v2-unsynced",
          order: v2Result.order,
          warning: `Sync to local failed: ${(syncError as Error).message}`,
        })
      }
    }

    // 2. V2 验证失败，降级到本地快照查询
    console.warn(`[API] V2 validation failed: ${v2Result.error}, trying local fallback...`)

    try {
      // 先通过 v2OrderId 查询
      let snapshot = await db().orderSnapshot.findUnique({
        where: { v2OrderId: orderId },
      })

      // 如果没找到，尝试通过 externalCode 查询
      if (!snapshot) {
        snapshot = await db().orderSnapshot.findFirst({
          where: { externalCode: orderId },
        })

        if (snapshot) {
          return NextResponse.json({
            success: true,
            source: "local-external-code",
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
        // 本地快照存在，检查数据新鲜度
        const isFresh = Date.now() - new Date(snapshot.syncedAt).getTime() < 30 * 60 * 1000 // 30分钟

        return NextResponse.json({
          success: true,
          source: "local-cache",
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
          isFresh,
          warning: isFresh
            ? undefined
            : "Data may be outdated, V2 API is currently unavailable",
        })
      }

      // 本地也没有
      return NextResponse.json(
        { success: false, error: "Order not found in V2 or local cache" },
        { status: 404 }
      )
    } catch (localError) {
      console.error("[API] Local fallback failed:", localError)
      return NextResponse.json(
        {
          success: false,
          error: `Validation failed: ${(localError as Error).message}`,
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("[API] Order validation error:", error)
    return NextResponse.json(
      {
        success: false,
        error: `Validation failed: ${(error as Error).message}`,
        stack: (error as Error).stack,
      },
      { status: 500 }
    )
  }
}
