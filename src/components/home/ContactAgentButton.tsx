import type { ReactNode } from 'react'

import { Button, type ButtonProps } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/site/SocialLinks'
import { publicWhatsAppHref } from '@/lib/site-links'
import { cn } from '@/lib/utils'

type ContactAgentButtonProps = {
  children: ReactNode
  className?: string
  size?: ButtonProps['size']
  variant?: ButtonProps['variant']
}

function ContactAgentButton({ children, className, size, variant }: ContactAgentButtonProps) {
  return (
    <Button asChild className={cn(className)} size={size} variant={variant}>
      <a
        aria-label="Talk to Agent Huang on WhatsApp"
        href={publicWhatsAppHref}
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
