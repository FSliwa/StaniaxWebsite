import React, { useCallback, useEffect, useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagicCardProps {
  children?: React.ReactNode
  className?: string
  gradientSize?: number
  gradientColor?: string
  gradientOpacity?: number
  gradientFrom?: string
  gradientTo?: string
}

export function MagicCard({
  children,
  className,
  gradientSize = 220,
  gradientColor = '#dbeafe',
  gradientOpacity = 0.7,
  gradientFrom = '#93c5fd',
  gradientTo = '#3b82f6',
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(-gradientSize)
  const mouseY = useMotionValue(-gradientSize)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect()
        mouseX.set(e.clientX - left)
        mouseY.set(e.clientY - top)
      }
    },
    [mouseX, mouseY]
  )

  const handleMouseOut = useCallback(() => {
    mouseX.set(-gradientSize)
    mouseY.set(-gradientSize)
  }, [gradientSize, mouseX, mouseY])

  useEffect(() => {
    const node = cardRef.current
    if (!node) return
    node.addEventListener('mousemove', handleMouseMove)
    node.addEventListener('mouseleave', handleMouseOut)
    return () => {
      node.removeEventListener('mousemove', handleMouseMove)
      node.removeEventListener('mouseleave', handleMouseOut)
    }
  }, [handleMouseMove, handleMouseOut])

  const background = useMotionTemplate`radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)`
  const borderGradient = useMotionTemplate`radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientFrom}, ${gradientTo}, transparent 100%)`

  return (
    <div
      ref={cardRef}
      className={cn(
        'group relative flex overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition-shadow duration-300 hover:shadow-md',
        className
      )}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: borderGradient }}
      />
      <div className="relative z-10 flex w-full flex-col rounded-[calc(1rem-1px)] bg-white p-6">
        {children}
      </div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-px z-0 rounded-[calc(1rem-1px)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background, opacity: gradientOpacity }}
      />
    </div>
  )
}
