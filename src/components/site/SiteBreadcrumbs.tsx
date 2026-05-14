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
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 sm:pt-6">
      <ol className="flex min-w-0 flex-wrap items-center gap-1.5 text-xs font-bold text-slate-500 sm:text-sm">
        <li>
          <Link
            className="inline-flex min-h-9 items-center gap-1 rounded-md px-2 text-slate-600 transition-all hover:bg-red-50 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
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
              <ChevronRight className="size-3.5 shrink-0 text-slate-400" aria-hidden />
              {item.href && !isLast ? (
                <Link
                  className="inline-flex min-h-9 min-w-0 items-center rounded-md px-2 text-slate-600 transition-all hover:bg-red-50 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  href={item.href}
                >
                  <span className="truncate">{item.label}</span>
                </Link>
              ) : (
                <span
                  aria-current="page"
                  className="inline-flex min-h-9 min-w-0 items-center rounded-md px-2 text-slate-900"
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
