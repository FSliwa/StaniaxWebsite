import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ArrowUpRight } from '@phosphor-icons/react'

// Import assets
import videoSrc from '@/assets/Generowanie_Wideo_Produktowego_Dłoń_i_Mikrofon.mp4'
import centerImage from '@/assets/whatsapp-hero-2026-03-05.jpeg'
import sideTile1 from '@/assets/colorful_packaging.png'
import sideTile2 from '@/assets/side-tile-2.jpg'
import sideTile3 from '@/assets/spinning_machine.jpeg'
import sideTile4 from '@/assets/three_reflectors_1765869273944.png'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
}

export function VideoGalleryTransition() {
    const gridRef = useRef<HTMLDivElement>(null)
    const gridInView = useInView(gridRef, { once: true, margin: "-80px" })

    return (
        <div className="relative bg-white">
            {/* Hero Video — Full Screen, edge-to-edge */}
            <div className="relative h-screen min-h-[100dvh] w-full overflow-hidden">
                <video
                    src={videoSrc}
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Scroll indicator */}
                <button
                    onClick={() => {
                        const grid = document.getElementById('bento-grid')
                        grid?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="absolute bottom-8 right-8 z-10 flex items-center gap-3 cursor-pointer group"
                >
                    <span className="text-sm font-medium tracking-widest uppercase hidden sm:block text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:opacity-80 transition-opacity">
                        Scroll to explore
                    </span>
                    <div className="w-12 h-12 rounded-full border-2 border-white/60 flex items-center justify-center backdrop-blur-md bg-black/30 shadow-lg shadow-black/20 group-hover:bg-black/50 group-hover:border-white/80 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 text-white rotate-90" />
                    </div>
                </button>
            </div>

            {/* Bento Grid — Static layout with fade-in on viewport entry */}
            <div
                id="bento-grid"
                ref={gridRef}
                className="relative max-w-[1600px] mx-auto px-4 sm:px-10 py-12 md:py-20"
            >
                <div className="grid grid-cols-2 md:grid-cols-[1fr_1.5fr_1fr] gap-3 md:gap-6 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[280px]">

                    {/* Left Column */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={gridInView ? "visible" : "hidden"}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0 }}
                        className="row-span-1 rounded-[20px] overflow-hidden shadow-lg group"
                    >
                        <img src={sideTile2} alt="Metalizacja próżniowa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </motion.div>

                    {/* Center — spans 2 rows */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={gridInView ? "visible" : "hidden"}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="row-span-2 rounded-[20px] overflow-hidden shadow-lg group relative"
                    >
                        <img
                            src={centerImage}
                            alt="Metalizacja STANIAX"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <MagneticButton
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-white/90 backdrop-blur-md text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 text-sm"
                            >
                                Zobacz Więcej <ArrowUpRight className="w-4 h-4" />
                            </MagneticButton>
                        </div>
                    </motion.div>

                    {/* Right top */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={gridInView ? "visible" : "hidden"}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="row-span-1 rounded-[20px] overflow-hidden shadow-lg group"
                    >
                        <img src={sideTile3} alt="Proces metalizacji" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </motion.div>

                    {/* Left bottom */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={gridInView ? "visible" : "hidden"}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                        className="row-span-1 rounded-[20px] overflow-hidden shadow-lg group"
                    >
                        <img src={sideTile1} alt="Kolorowe opakowania" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </motion.div>

                    {/* Right bottom */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={gridInView ? "visible" : "hidden"}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                        className="row-span-1 rounded-[20px] overflow-hidden shadow-lg group"
                    >
                        <img src={sideTile4} alt="Reflektory" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </motion.div>

                </div>
            </div>
        </div>
    )
}
