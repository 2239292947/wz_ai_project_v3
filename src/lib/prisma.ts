import { PrismaClient } from "@prisma/client"

// Lazy initialization to avoid "did not initialize yet" error in Vercel serverless
let _prisma: PrismaClient | null = null

/**
 * Get or create PrismaClient instance
 * Use this function in API routes instead of importing prisma directly
 */
export function db(): PrismaClient {
  if (!_prisma) {
    _prisma = new PrismaClient()
  }
  return _prisma
}

// Legacy export for backwards compatibility
// WARNING: This may cause issues in serverless environments
// Prefer using db() function instead
export const prisma = /*#__PURE__*/ db()
