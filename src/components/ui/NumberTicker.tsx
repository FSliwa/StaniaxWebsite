import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

interface NumberTickerProps {
  value: number
  direction?: 'up' | 'down'
  delay?: number
  decimalPlaces?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  decimalPlaces = 0,
  prefix = '',
  suffix = '',
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
      setPrefersReducedMotion(mql.matches)
    }
  }, [])

  const motionValue = useMotionValue(direction === 'down' ? value : 0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: '0px' })

  const formatVal = (val: number) =>
    Intl.NumberFormat('pl-PL', {
      useGrouping: false,
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(Number(val.toFixed(decimalPlaces)))

  useEffect(() => {
    if (prefersReducedMotion) return
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(direction === 'down' ? 0 : value)
      }, delay * 1000)
      return () => clearTimeout(timer)
    }
  }, [motionValue, isInView, delay, value, direction, prefersReducedMotion])

  useEffect(() => {
    if (prefersReducedMotion) return
    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${formatVal(latest)}${suffix}`
      }
    })
  }, [springValue, decimalPlaces, prefix, suffix, prefersReducedMotion])

  // Static HTML / SSR / initial render always displays the real target value for SEO & non-JS crawlers
  return (
    <span
      ref={ref}
      className={cn('inline-block tabular-nums tracking-tight', className)}
    >
      {`${prefix}${formatVal(value)}${suffix}`}
    </span>
  )
}
