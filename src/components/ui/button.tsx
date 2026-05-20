import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-extrabold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-[var(--hs-accent)] focus-visible:ring-[color-mix(in_srgb,var(--hs-accent)_24%,transparent)] focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-[var(--hs-accent)] text-white shadow-[var(--hs-shadow-sm)] hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] active:scale-[0.98]',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        outline:
          'border border-[var(--hs-border)] bg-white/85 text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] hover:border-[color-mix(in_srgb,var(--hs-accent)_42%,var(--hs-border))] hover:bg-white hover:text-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] active:scale-[0.98] dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-[var(--hs-bg-soft)] text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] hover:bg-white hover:shadow-[var(--hs-shadow-md)] active:scale-[0.98]',
        ghost:
          'text-[var(--hs-muted)] hover:bg-[var(--hs-accent-soft)] hover:text-[var(--hs-accent-strong)] active:scale-[0.98] dark:hover:bg-accent/50',
        link: 'text-[var(--hs-accent)] underline-offset-4 hover:text-[var(--hs-accent-strong)] hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
export type { ButtonProps }
