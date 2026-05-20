'use client'

import {
  type CSSProperties,
  type ReactNode,
  type Ref,
  useEffect,
  useRef,
} from 'react'

import { cn } from '@/lib/utils'

type RevealProps = {
  as?: keyof React.JSX.IntrinsicElements
  children: ReactNode
  className?: string
  delayMs?: number
  staggerIndex?: number
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function Reveal({
  as = 'div',
  children,
  className,
  delayMs = 0,
  staggerIndex = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const delay = delayMs + staggerIndex * 80
  const classNames = cn('hs-reveal', className)
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      node.dataset.revealVisible = 'true'
      return
    }

    node.dataset.revealReady = 'true'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          node.dataset.revealVisible = 'true'
          observer.disconnect()
        }
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12,
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  if (as === 'article') {
    return (
      <article className={classNames} ref={ref as Ref<HTMLElement>} style={style}>
        {children}
      </article>
    )
  }

  if (as === 'section') {
    return (
      <section className={classNames} ref={ref as Ref<HTMLElement>} style={style}>
        {children}
      </section>
    )
  }

  if (as === 'li') {
    return (
      <li className={classNames} ref={ref as Ref<HTMLLIElement>} style={style}>
        {children}
      </li>
    )
  }

  return (
    <div className={classNames} ref={ref as Ref<HTMLDivElement>} style={style}>
      {children}
    </div>
  )
}

export { Reveal }
