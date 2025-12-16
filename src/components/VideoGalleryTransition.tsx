import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ArrowUpRight } from '@phosphor-icons/react'

// Import assets
import videoSrc from '@/assets/Generowanie_Wideo_Dłoni_z_Efektem.mp4'
import sideTile1 from '@/assets/side-tile-1.png'
import sideTile2 from '@/assets/side-tile-2.jpg'
import sideTile3 from '@/assets/side-tile-3.png'
import sideTile4 from '@/assets/side-tile-4.png'



export function VideoGalleryTransition() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })



    // Animation Transforms

    // 1. Hero Video Transition: Full Screen -> Grid Center
    // Center Video Scale (Starts huge, shrinks to 1)
    // Animation Transforms

    // 1. Hero Video Transition: Full Screen -> Grid Center
    // Center Video Scale (Starts huge, shrinks to 1)
    // 1. Hero Video Transition: Full Screen -> Grid Center
    // Center Video Scale (Starts huge, shrinks to 1)
    // 1. Hero Video Transition: Full Screen -> Grid Center
    // Animate Width from Full Screen (100vw) to Grid Column (100%)
    // Hold full width for first 15% of scroll
    const centerWidth = useTransform(scrollYProgress, [0, 0.15, 0.4], ["100vw", "100vw", "100%"])

    // Height & Position Logic:
    // Start: 100vh height, Centered vertically (top: 50%, y: -50%)
    // End: 100% height (of grid cell), Top aligned (top: 0%, y: 0%)
    const centerHeight = useTransform(scrollYProgress, [0, 0.15, 0.4], ["120vh", "120vh", "100%"])
    const centerTop = useTransform(scrollYProgress, [0, 0.15, 0.4], ["50%", "50%", "0%"])
    const centerYCorrection = useTransform(scrollYProgress, [0, 0.15, 0.4], ["calc(-50% - 2vh)", "calc(-50% - 2vh)", "0%"])

    // Animate Border Radius: 0px (Full Screen) -> 32px (Grid Tile)
    const heroRadius = useTransform(scrollYProgress, [0, 0.15, 0.4], ["0px", "0px", "32px"])

    // 2. Assembly Effect & Staggering (Side Columns)
    // Left Column: Enters slightly earlier
    const leftColOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])
    const leftColEnterY = useTransform(scrollYProgress, [0.2, 0.4], [200, 0]) // Slides up more dramatically

    // Right Column: Enters slightly later
    const rightColOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1])
    const rightColEnterY = useTransform(scrollYProgress, [0.25, 0.45], [200, 0]) // Slides up more dramatically

    // 3. Scaling (Side Columns)
    // They start smaller and grow to full size
    const sideColsScale = useTransform(scrollYProgress, [0.2, 0.45], [0.8, 1])

    // 4. Inner Parallax (Video inside the tile moves slightly)
    // We map scroll progress to a larger vertical shift for visibility
    const innerParallaxY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

    // Grid Parallax Effects (Existing logic for column movement during scroll)
    const centerY = useTransform(scrollYProgress, [0, 1], [0, 50])
    const leftColY = useTransform(scrollYProgress, [0, 1], [-50, 100])
    const rightColY = useTransform(scrollYProgress, [0, 1], [-100, 50])

    // Combine entrance Y with parallax Y for smooth motion
    const leftTotalY = useTransform(() => leftColY.get() + leftColEnterY.get())
    const rightTotalY = useTransform(() => rightColY.get() + rightColEnterY.get())

    // Combine vertical centering correction with parallax for the central video
    const finalY = useTransform(() => {
        const correction = centerYCorrection.get() // string like "-50%" or "0%"
        const parallax = centerY.get() // number like 0 or 50
        return `calc(${correction} + ${parallax}px)`
    })

    // Hero Text Animation (Fade Out)
    // Made it fade out slightly later so "Scroll to explore" is visible longer
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
    // Force X centering using a MotionValue to ensure it's not dropped
    const xPosition = useTransform(scrollYProgress, [0, 1], ["-50%", "-50%"])

    return (
        <section ref={containerRef} className="relative h-[250vh] bg-white">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center">

                {/* Hero Text Overlay (Fades out quickly) */}
                <motion.div
                    style={{ opacity: heroOpacity, scale: heroScale }}
                    className="absolute inset-0 z-50 pointer-events-none"
                >
                    <div className="w-full h-full flex flex-col items-center justify-end pb-20">
                        {/* Text removed as per request */}
                    </div>

                    {/* Scroll to explore - Bottom Right */}
                    <div className="absolute bottom-8 right-8 flex items-center gap-3 text-white/80">
                        <span className="text-sm font-medium tracking-widest uppercase hidden sm:block">Scroll to explore</span>
                        <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/5">
                            <ArrowUpRight className="w-4 h-4 rotate-90" />
                        </div>
                    </div>
                </motion.div>



                {/* Bento Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-4 md:gap-8 w-full max-w-[1600px] mx-auto h-[85vh] px-4 sm:px-10">

                    {/* Left Column */}
                    <motion.div
                        style={{ y: leftTotalY, opacity: leftColOpacity, scale: sideColsScale }}
                        className="flex flex-col gap-4 md:gap-8 h-full justify-end"
                    >
                        {/* Top Left */}
                        <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden shadow-2xl group">
                            <motion.div style={{ y: innerParallaxY }} className="w-full h-[150%] -mt-[25%]">
                                <img src={sideTile2} alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            </motion.div>
                        </div>
                        {/* Bottom Left */}
                        <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl group">
                            <motion.div style={{ y: innerParallaxY }} className="w-full h-[150%] -mt-[25%]">
                                <img src={sideTile1} alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Center Column (Hero) - Grid Slot */}
                    <motion.div
                        style={{ y: centerY }}
                        className="relative h-full z-40 col-start-1 md:col-start-2 row-start-1 md:row-start-1"
                    >
                        {/* Animated Hero Video - Breaks out of grid */}
                        <motion.div
                            style={{
                                width: centerWidth,
                                height: centerHeight,
                                borderRadius: heroRadius,
                                left: '50%',
                                top: centerTop,
                                x: xPosition,
                                y: finalY
                            }}
                            className="absolute max-w-none overflow-hidden shadow-2xl group"
                        >
                            <div className="w-full h-full relative">
                                <motion.video
                                    src={videoSrc}
                                    autoPlay muted loop playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                            {/* Center CTA */}
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <MagneticButton
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-white/90 backdrop-blur-md text-black px-6 py-3 rounded-full font-bold flex items-center gap-2"
                                >
                                    Zobacz Więcej <ArrowUpRight className="w-4 h-4" />
                                </MagneticButton>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        style={{ y: rightTotalY, opacity: rightColOpacity, scale: sideColsScale }}
                        className="flex flex-col gap-4 md:gap-8 h-full justify-start"
                    >
                        {/* Top Right */}
                        <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl group">
                            <motion.div style={{ y: innerParallaxY }} className="w-full h-[150%] -mt-[25%]">
                                <img src={sideTile3} alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            </motion.div>
                        </div>
                        {/* Bottom Right */}
                        <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden shadow-2xl group">
                            <motion.div style={{ y: innerParallaxY }} className="w-full h-[150%] -mt-[25%]">
                                <img src={sideTile4} alt="Gallery 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            </motion.div>
                        </div>
                    </motion.div>

                </div>

            </div>

            {/* Bottom Gradient Transition to Blue (Next Section) */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#eff6ff] pointer-events-none z-20" />
        </section>
    )
}
