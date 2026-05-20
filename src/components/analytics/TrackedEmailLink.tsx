'use client'

import type { AnchorHTMLAttributes, ReactNode } from 'react'

import { trackEmailClick } from '@/lib/analytics'

type TrackedEmailLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  ctaLocation: string
  email: string
}

export function TrackedEmailLink({
  children,
  ctaLocation,
  email,
  href,
  onClick,
  ...props
}: TrackedEmailLinkProps) {
  return (
    <a
      href={href ?? `mailto:${email}`}
      onClick={(event) => {
        trackEmailClick({
          ctaLocation,
          email,
        })
        onClick?.(event)
      }}
      {...props}
    >
      {children}
    </a>
  )
}
