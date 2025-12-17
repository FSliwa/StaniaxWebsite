import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

interface SmoothScrollWrapperProps {
    children: React.ReactNode
}

export function SmoothScrollWrapper({ children }: SmoothScrollWrapperProps) {
    const contentRef = useRef<HTMLDivElement>(null)
    const lenisRef = useRef<Lenis | null>(null)

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        })
        lenisRef.current = lenis

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        lenis.on('scroll', (e: any) => {
            if (contentRef.current) {
                // Skew effect based on velocity
                // e.velocity is the scroll velocity
                const skew = e.velocity * 0.15 // Adjust sensitivity
                // Clamp skew to avoid extreme distortion
                const clampedSkew = Math.max(-5, Math.min(5, skew))

                contentRef.current.style.transform = `skewY(${clampedSkew}deg)`
                contentRef.current.style.transformOrigin = 'center center'
            }
        })

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <div ref={contentRef} className="w-full min-h-screen transition-transform duration-100 ease-out will-change-transform">
            {children}
        </div>
    )
}
