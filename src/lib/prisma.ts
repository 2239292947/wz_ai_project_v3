import { PrismaClient } from "@/generated/prisma"

// Lazy initialization for Vercel serverless environment
let _prisma: PrismaClient | null = null

/**
 * Get or create PrismaClient instance
 * This function MUST be used in API routes to avoid initialization errors
 */
export function db(): PrismaClient {
  if (!_prisma) {
    _prisma = new PrismaClient()
  }
  return _prisma
}

// DO NOT export prisma as a constant - it will cause initialization errors
// Always use db() function instead
