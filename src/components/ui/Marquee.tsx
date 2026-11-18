import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
  repeat?: number
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  repeat = 2,
}: MarqueeProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }
  }, [])

  if (prefersReducedMotion) {
    return (
      <div className={cn('flex flex-wrap gap-3 py-2', className)}>
        {children}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'group flex overflow-hidden p-2 [--duration:34s] [--gap:0.75rem] [gap:var(--gap)] marquee-edge-mask',
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          aria-hidden={i > 0 ? 'true' : undefined}
          className={cn(
            'flex shrink-0 justify-around [gap:var(--gap)]',
            reverse ? 'animate-marquee-reverse' : 'animate-marquee',
            pauseOnHover && 'group-hover:[animation-play-state:paused]'
          )}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
