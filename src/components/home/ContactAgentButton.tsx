'use client'

import type { ReactNode } from 'react'

import { Button, type ButtonProps } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/site/SocialLinks'
import { trackWhatsAppClick } from '@/lib/analytics'
import { publicWhatsAppHref } from '@/lib/site-links'
import { cn } from '@/lib/utils'

type ContactAgentButtonProps = {
  analyticsLabel?: string
  analyticsLocation?: string
  children: ReactNode
  className?: string
  href?: string
  size?: ButtonProps['size']
  variant?: ButtonProps['variant']
}

function ContactAgentButton({
  analyticsLabel,
  analyticsLocation = 'contact_agent_button',
  children,
  className,
  href = publicWhatsAppHref,
  size,
  variant,
}: ContactAgentButtonProps) {
  return (
    <Button asChild className={cn(className)} size={size} variant={variant}>
      <a
        aria-label="Talk to Agent Huang on WhatsApp"
        href={href}
        onClick={() =>
          trackWhatsAppClick({
            ctaLabel: analyticsLabel ?? String(children),
            ctaLocation: analyticsLocation,
          })
        }
        rel="noreferrer"
        target="_blank"
      >
        <WhatsAppIcon className="size-4 shrink-0" />
        {children}
      </a>
    </Button>
  )
}

export { ContactAgentButton }
