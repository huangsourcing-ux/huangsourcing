import type { SVGProps } from 'react'

import {
  publicLinkedInHref,
  publicWhatsAppHref,
  whatsappPhoneDisplay,
} from '@/lib/site-links'
import { cn } from '@/lib/utils'

type BrandIconProps = SVGProps<SVGSVGElement>

function WhatsAppIcon({ className, ...props }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12.04 3.5a8.42 8.42 0 0 0-7.12 12.9l-.94 3.5 3.58-.94a8.4 8.4 0 0 0 4.48 1.28h.01a8.37 8.37 0 0 0 8.37-8.37 8.42 8.42 0 0 0-8.38-8.37Zm4.94 11.88c-.21.59-1.23 1.13-1.7 1.2-.45.06-1.01.09-1.64-.1-.38-.12-.86-.28-1.49-.55-2.62-1.13-4.33-3.77-4.47-3.94-.13-.18-1.07-1.43-1.07-2.73 0-1.29.68-1.93.92-2.2.24-.26.53-.32.7-.32h.51c.16.01.39-.06.61.47.24.59.82 2.01.89 2.15.07.15.12.32.03.5-.09.18-.13.29-.27.45-.13.16-.28.36-.4.48-.13.13-.27.27-.12.54.15.27.66 1.09 1.42 1.76.98.87 1.8 1.14 2.07 1.28.27.13.43.11.58-.07.18-.2.67-.78.85-1.05.18-.27.36-.22.61-.13.25.09 1.59.75 1.86.88.28.13.46.2.53.31.07.12.07.69-.14 1.28Z" />
    </svg>
  )
}

function LinkedInIcon({ className, ...props }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19.2 3H4.8A1.8 1.8 0 0 0 3 4.8v14.4A1.8 1.8 0 0 0 4.8 21h14.4a1.8 1.8 0 0 0 1.8-1.8V4.8A1.8 1.8 0 0 0 19.2 3ZM8.36 17.25H5.7V9.4h2.66v7.85ZM7.03 8.32a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08Zm11.22 8.93h-2.66v-4.1c0-.97-.35-1.64-1.23-1.64-.67 0-1.07.45-1.25.89-.06.16-.08.38-.08.59v4.26h-2.66V9.4h2.66v1.08c.36-.55.99-1.32 2.4-1.32 1.75 0 2.82 1.14 2.82 3.6v4.49Z" />
    </svg>
  )
}

const socialLinks = [
  {
    href: publicWhatsAppHref,
    Icon: WhatsAppIcon,
    label: 'WhatsApp',
    supportingLabel: whatsappPhoneDisplay,
  },
  {
    href: publicLinkedInHref,
    Icon: LinkedInIcon,
    label: 'LinkedIn',
    supportingLabel: 'Agent Huang',
  },
] as const

type SocialLinksProps = {
  className?: string
  linkClassName?: string
  showSupportingLabel?: boolean
}

function SocialLinks({ className, linkClassName, showSupportingLabel = false }: SocialLinksProps) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {socialLinks.map(({ href, Icon, label, supportingLabel }) => (
        <a
          aria-label={`${label}: ${supportingLabel}`}
          className={cn(
            'inline-flex h-10 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-950 transition-colors hover:border-red-200 hover:text-red-600',
            linkClassName,
          )}
          href={href}
          key={label}
          rel="noreferrer"
          target="_blank"
        >
          <Icon className="size-4 shrink-0" />
          <span>{label}</span>
          {showSupportingLabel ? (
            <span className="text-xs font-semibold text-slate-500">{supportingLabel}</span>
          ) : null}
        </a>
      ))}
    </div>
  )
}

export { LinkedInIcon, SocialLinks, WhatsAppIcon }
