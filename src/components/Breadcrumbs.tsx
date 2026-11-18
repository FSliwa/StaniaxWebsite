import { Link } from 'react-router-dom'

export interface BreadcrumbEntry {
  name: string
  path?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbEntry[]
  className?: string
  variant?: 'bar' | 'inline'
}

/** Visible breadcrumb trail synchronized with page BreadcrumbList JSON-LD. */
export function Breadcrumbs({ items, className = '', variant = 'bar' }: BreadcrumbsProps) {
  if (items.length === 0) return null

  const list = (
    <ol className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-600">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1
        return (
          <li key={`${item.name}-${idx}`} className="inline-flex items-center gap-2">
            {idx > 0 && (
              <span aria-hidden="true" className="text-slate-400">
                /
              </span>
            )}
            {isLast || !item.path ? (
              <span className="text-slate-900 font-semibold" aria-current={isLast ? 'page' : undefined}>
                {item.name}
              </span>
            ) : (
              <Link to={item.path} className="hover:text-blue-700 transition-colors">
                {item.name}
              </Link>
            )}
          </li>
        )
      })}
    </ol>
  )

  if (variant === 'inline') {
    return (
      <nav aria-label="Breadcrumb" className={className}>
        {list}
      </nav>
    )
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={`border-b border-slate-200/80 bg-white/70 backdrop-blur-sm ${className}`.trim()}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-3">{list}</div>
    </nav>
  )
}
