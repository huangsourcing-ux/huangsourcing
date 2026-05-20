import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'

type BreadcrumbItem = {
  href?: string
  label: string
}

type SiteBreadcrumbsProps = {
  items: BreadcrumbItem[]
}

function SiteBreadcrumbs({ items }: SiteBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="hs-container pt-5 sm:pt-6">
      <ol className="flex min-w-0 flex-nowrap items-center gap-1.5 overflow-x-auto pb-1 text-xs font-extrabold text-[var(--hs-muted-soft)] [-webkit-overflow-scrolling:touch] sm:text-sm">
        <li>
          <Link
            className="inline-flex min-h-9 items-center gap-1 rounded-md px-2 text-[var(--hs-muted)] transition-all hover:bg-[var(--hs-accent-soft)] hover:text-[var(--hs-accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hs-accent)] focus-visible:ring-offset-2"
            href="/"
          >
            <Home className="size-3.5" aria-hidden />
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li className="flex min-w-0 items-center gap-1.5" key={`${item.label}-${index}`}>
              <ChevronRight className="size-3.5 shrink-0 text-[var(--hs-border-strong)]" aria-hidden />
              {item.href && !isLast ? (
                <Link
                  className="inline-flex min-h-9 min-w-0 items-center rounded-md px-2 text-[var(--hs-muted)] transition-all hover:bg-[var(--hs-accent-soft)] hover:text-[var(--hs-accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hs-accent)] focus-visible:ring-offset-2"
                  href={item.href}
                >
                  <span className="truncate">{item.label}</span>
                </Link>
              ) : (
                <span
                  aria-current="page"
                  className="inline-flex min-h-9 min-w-0 items-center rounded-md px-2 text-[var(--hs-text)]"
                >
                  <span className="truncate">{item.label}</span>
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export { SiteBreadcrumbs }
