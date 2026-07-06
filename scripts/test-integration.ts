import "dotenv/config"
import { v2Api } from "../src/lib/v2-api"

const REAL = "cmr8ym3yb0000gcz0fjuqw9bb" // 真实运单（来自 V2，externalCode=TEST-V3-001）
const FAKE = "FAKE-ORDER-999" // 不存在的运单

async function main() {
  console.log("=== 1) 查询真实运单（期望 exists:true, source:v2）===")
  const r1 = await v2Api.validateOrder(REAL)
  console.log(JSON.stringify(r1, null, 2))

  console.log("\n=== 2) 查询不存在的运单（期望 exists:false，且不应回退到本地缓存伪造）===")
  const r2 = await v2Api.validateOrder(FAKE)
  console.log(JSON.stringify(r2, null, 2))

  console.log("\n=== 3) SKU 归属校验：真实运单 + 正确 SKU（期望 valid:true）===")
  const s1 = await v2Api.validateSKU(REAL, "SKU001")
  console.log(JSON.stringify(s1, null, 2))

  console.log("\n=== 4) SKU 归属校验：真实运单 + 错误 SKU（期望 valid:false）===")
  const s2 = await v2Api.validateSKU(REAL, "NONEXISTENT-SKU")
  console.log(JSON.stringify(s2, null, 2))

  console.log("\n=== 断言 ===")
  const ok =
    r1.exists === true &&
    r1.source === "v2" &&
    r2.exists === false && // 关键：V2 明确返回不存在时，绝不能回退缓存伪造为存在
    s1.valid === true &&
    s2.valid === false
  console.log(ok ? "✅ 全部通过：V3 真实调用 V2 接口，且不存在运单不会被本地缓存伪造" : "❌ 存在失败项")
  process.exit(ok ? 0 : 1)
}

main().catch((e) => {
  console.error("脚本异常:", e)
  process.exit(2)
})
