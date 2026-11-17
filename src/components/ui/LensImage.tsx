import { useState, useRef, MouseEvent, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LensImageProps {
  src: string
  alt: string
  className?: string
  zoomFactor?: number
  lensSize?: number
}

export function LensImage({
  src,
  alt,
  className,
  zoomFactor = 1.8,
  lensSize = 160,
}: LensImageProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [canHover, setCanHover] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      setCanHover(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
    }
  }, [])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!canHover || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePos({ x, y })
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative overflow-hidden',
        canHover && isHovering ? 'cursor-crosshair' : 'cursor-default',
        className
      )}
      onMouseEnter={() => canHover && setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={640}
        height={480}
        className="w-full h-full object-cover"
      />

      <AnimatePresence>
        {canHover && isHovering && (
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.18 }}
            className="absolute z-30 pointer-events-none border-2 border-white/60 shadow-2xl rounded-full bg-no-repeat ring-1 ring-blue-500/40"
            style={{
              width: lensSize,
              height: lensSize,
              left: mousePos.x - lensSize / 2,
              top: mousePos.y - lensSize / 2,
              backgroundImage: `url(${src})`,
              backgroundSize: `${(containerRef.current?.offsetWidth || 0) * zoomFactor}px ${(containerRef.current?.offsetHeight || 0) * zoomFactor}px`,
              backgroundPosition: `-${mousePos.x * zoomFactor - lensSize / 2}px -${mousePos.y * zoomFactor - lensSize / 2}px`,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
