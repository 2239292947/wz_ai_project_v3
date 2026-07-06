/**
 * 测试订单验证 API
 * 验证修复后的降级机制是否正常工作
 */

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"

interface TestResult {
  name: string
  passed: boolean
  message: string
  duration?: number
}

async function runTest(name: string, testFn: () => Promise<string>): Promise<TestResult> {
  const start = Date.now()
  try {
    const message = await testFn()
    const duration = Date.now() - start
    return { name, passed: true, message, duration }
  } catch (error) {
    const duration = Date.now() - start
    return {
      name,
      passed: false,
      message: `Error: ${(error as Error).message}`,
      duration,
    }
  }
}

async function testValidateOrder(orderId: string): Promise<string> {
  const res = await fetch(`${BASE_URL}/api/v3/orders/validate-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ orderId }),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${data.error}`)
  }

  return JSON.stringify(data, null, 2)
}

async function testMockOrder(): Promise<string> {
  // 测试 mock 数据中的订单（如果存在）
  const orderId = "order-001"
  const result = await testValidateOrder(orderId)

  const data = JSON.parse(result)
  if (!data.success) {
    throw new Error(`Order ${orderId} should exist in mock data`)
  }

  return `Mock order ${orderId} validated successfully (source: ${data.source})`
}

async function testRealOrder(): Promise<string> {
  // 测试真实订单号（应该降级到本地缓存或返回 not found）
  const orderId = "REAL-ORDER-123"
  const result = await testValidateOrder(orderId)

  const data = JSON.parse(result)

  if (data.success && (data.source === "local-cache" || data.source === "local-external-code")) {
    return `Real order ${orderId} found in local cache (source: ${data.source})`
  } else if (!data.success) {
    return `Order ${orderId} not found (expected if not in cache): ${data.error}`
  } else {
    throw new Error(`Unexpected source: ${data.source}`)
  }
}

async function testEmptyOrderId(): Promise<string> {
  const res = await fetch(`${BASE_URL}/api/v3/orders/validate-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ orderId: "" }),
  })

  const data = await res.json()

  if (res.ok) {
    throw new Error("Should return 400 for empty orderId")
  }

  return `Empty orderId correctly rejected: ${data.error}`
}

async function runAllTests() {
  console.log("🧪 Starting Order Validation API Tests\n")
  console.log(`Testing against: ${BASE_URL}\n`)

  const tests: TestResult[] = []

  // Test 1: Mock order (order-001 exists in mock data)
  tests.push(await runTest("Mock Order Validation", testMockOrder))

  // Test 2: Real order (should fallback or not found)
  tests.push(await runTest("Real Order Fallback", testRealOrder))

  // Test 3: Empty orderId validation
  tests.push(await runTest("Empty OrderId Validation", testEmptyOrderId))

  // Print results
  console.log("=".repeat(80))
  console.log("TEST RESULTS")
  console.log("=".repeat(80))

  let passed = 0
  let failed = 0

  tests.forEach((test) => {
    const status = test.passed ? "✅ PASS" : "❌ FAIL"
    const duration = test.duration ? `(${test.duration}ms)` : ""
    console.log(`\n${status} ${test.name} ${duration}`)
    console.log(`   ${test.message}`)

    if (test.passed) passed++
    else failed++
  })

  console.log("\n" + "=".repeat(80))
  console.log(`Summary: ${passed} passed, ${failed} failed out of ${tests.length} tests`)
  console.log("=".repeat(80))

  process.exit(failed > 0 ? 1 : 0)
}

// Run tests
runAllTests().catch((error) => {
  console.error("Test runner failed:", error)
  process.exit(1)
})
