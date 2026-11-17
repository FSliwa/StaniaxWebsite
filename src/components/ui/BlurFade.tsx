import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BlurFadeProps {
  children: React.ReactNode
  className?: string
  duration?: number
  delay?: number
  yOffset?: number
  inViewMargin?: string
}

export function BlurFade({
  children,
  className,
  duration = 0.4,
  delay = 0,
  yOffset = 10,
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }
  }, [])

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial={{ y: yOffset, opacity: 1 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: yOffset, opacity: 1 }}
      transition={{
        delay,
        duration,
        ease: 'easeOut',
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
