import { useState, useRef, MouseEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LensImageProps {
    src: string
    alt: string
    className?: string
    zoomFactor?: number
    lensSize?: number
}

export function LensImage({ src, alt, className, zoomFactor = 2, lensSize = 150 }: LensImageProps) {
    const [isHovering, setIsHovering] = useState(false)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const containerRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setMousePos({ x, y })
    }

    return (
        <div
            ref={containerRef}
            className={cn("relative overflow-hidden cursor-none", className)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
        >
            {/* Main Image */}
            <img src={src} alt={alt} className="w-full h-full object-cover" />

            {/* Lens Overlay */}
            <AnimatePresence>
                {isHovering && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 pointer-events-none border-2 border-white/20 shadow-2xl rounded-full bg-no-repeat"
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
