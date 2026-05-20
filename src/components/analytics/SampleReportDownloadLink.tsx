'use client'

import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ReactNode,
} from 'react'

import { trackSampleReportDownload } from '@/lib/analytics'

type SampleReportDownloadLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  ctaLabel?: string
  ctaLocation: string
  children: ReactNode
  href: string
}

export const SampleReportDownloadLink = forwardRef<
  HTMLAnchorElement,
  SampleReportDownloadLinkProps
>(function SampleReportDownloadLink(
  {
    children,
    ctaLabel = 'Download Sample Report',
    ctaLocation,
    href,
    onClick,
    ...props
  },
  ref,
) {
  return (
    <a
      download
      href={href}
      onClick={(event) => {
        trackSampleReportDownload({
          ctaLabel,
          ctaLocation,
        })
        onClick?.(event)
      }}
      ref={ref}
      {...props}
    >
      {children}
    </a>
  )
})
