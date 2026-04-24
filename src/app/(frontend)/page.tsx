import Link from 'next/link'
import { getPayload } from 'payload'
import { ExternalLink, ShieldCheck } from 'lucide-react'

import config from '@payload-config'
import { Button } from '@/components/ui/button'

async function getUserCount() {
  try {
    const payload = await getPayload({ config })
    const { totalDocs } = await payload.count({ collection: 'users' })
    return { ok: true as const, count: totalDocs }
  } catch (error) {
    console.warn('[Home] user count:', error)
    return { ok: false as const, count: 0 }
  }
}

const HomePage = async () => {
  const result = await getUserCount()
  const userLine = result.ok
    ? `Users in database: ${result.count}.`
    : 'Open /admin to finish setup and create the first user.'

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-10 px-6 py-24 text-center">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          HFsourcing Platform
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Next.js 16 · Payload CMS 3 · Tailwind v4
        </h1>
        <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
          {userLine}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button asChild size="lg">
          <Link href="/admin">
            <ShieldCheck className="size-4" />
            Open admin
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/api/graphql-playground">
            <ExternalLink className="size-4" />
            GraphQL Playground
          </Link>
        </Button>
      </div>
    </main>
  )
}

export default HomePage
