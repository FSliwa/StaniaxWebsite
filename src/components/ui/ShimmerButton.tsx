import React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
  children?: React.ReactNode
  href?: string
  to?: string
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = 'rgba(255, 255, 255, 0.35)',
      shimmerSize = '0.08em',
      shimmerDuration = '2.8s',
      borderRadius = '12px',
      background = 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #1e40af 100%)',
      className,
      children,
      href,
      to,
      ...props
    },
    ref
  ) => {
    const sharedClassName = cn(
      'group relative z-0 inline-flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/35 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
      className
    )

    const innerContent = (
      <>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
        >
          <span
            className="pointer-events-none absolute -inset-[100%] opacity-60 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${shimmerColor} 60deg, transparent 120deg)`,
              animation: `spin ${shimmerDuration} linear infinite`,
            }}
          />
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute rounded-[inherit]"
          style={{
            inset: shimmerSize,
            background,
            borderRadius,
          }}
        />
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </>
    )

    if (to) {
      return (
        <Link
          to={to}
          style={{ borderRadius, background }}
          className={sharedClassName}
        >
          {innerContent}
        </Link>
      )
    }

    if (href) {
      return (
        <a
          href={href}
          style={{ borderRadius, background }}
          className={sharedClassName}
          onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {innerContent}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        style={{ borderRadius, background }}
        className={sharedClassName}
        {...props}
      >
        {innerContent}
      </button>
    )
  }
)

ShimmerButton.displayName = 'ShimmerButton'
