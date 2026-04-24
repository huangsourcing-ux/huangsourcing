import type { PoolConfig } from 'pg'

function extractHost(uri: string): string {
  const m = uri.match(/@([^/?:]+)(?::\d+)?(?:\/|\?|$)/)
  return m?.[1] ?? ''
}

/**
 * Tuned for cloud Postgres: explicit TLS + keepAlive reduce
 * "Connection terminated unexpectedly" on remote pools.
 * Local / Docker: set `DATABASE_SSL=false` or use a host that does not match cloud heuristics.
 * [!code]
 */
export function getDatabasePoolOptions(): PoolConfig {
  const connectionString = process.env.DATABASE_URI?.trim() ?? ''
  if (!connectionString) {
    return { connectionString: '' }
  }

  const host = extractHost(connectionString)
  const forceSsl = process.env.DATABASE_SSL === 'true'
  const disableSsl = process.env.DATABASE_SSL === 'false'
  const looksLikeCloud =
    /supabase\.co|supabase\.com|neon\.tech|vercel\.storage|pooler\./i.test(host) ||
    /supabase|neon|vercel|render\.com|railway\.app|\.amazonaws\.com/i.test(connectionString)

  const useSsl = forceSsl || (!disableSsl && looksLikeCloud)
  // Default false: avoids "self signed certificate in chain" (proxies, some cloud setups).
  // Set DATABASE_SSL_REJECT_UNAUTHORIZED=true in production for strict chain verification.
  const rejectUnauthorized = process.env.DATABASE_SSL_REJECT_UNAUTHORIZED === 'true'

  return {
    connectionString,
    max: 10,
    min: 0,
    connectionTimeoutMillis: 30_000,
    idleTimeoutMillis: 30_000,
    keepAlive: true,
    keepAliveInitialDelayMillis: 0,
    application_name: 'hfsourcing-payload',
    ...(useSsl
      ? {
          ssl: {
            rejectUnauthorized,
          },
        }
      : {}),
  } satisfies PoolConfig
}
