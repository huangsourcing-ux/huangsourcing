'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const REDIRECT_SECONDS = 4

export function NotFoundRedirect() {
  const router = useRouter()
  const [secondsRemaining, setSecondsRemaining] = useState(REDIRECT_SECONDS)

  useEffect(() => {
    router.prefetch('/')

    const countdown = window.setInterval(() => {
      setSecondsRemaining((seconds) => Math.max(seconds - 1, 0))
    }, 1000)

    const redirect = window.setTimeout(() => {
      router.replace('/')
    }, REDIRECT_SECONDS * 1000)

    return () => {
      window.clearInterval(countdown)
      window.clearTimeout(redirect)
    }
  }, [router])

  return (
    <p className="mt-4 text-sm font-medium text-slate-500" aria-live="polite">
      Redirecting to the homepage in{' '}
      <span className="font-semibold text-slate-800">{secondsRemaining}</span> seconds.
    </p>
  )
}
