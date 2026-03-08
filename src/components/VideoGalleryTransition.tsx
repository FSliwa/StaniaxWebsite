import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ArrowUpRight } from '@phosphor-icons/react'

// Import assets
import videoSrc from '@/assets/hand_effect_video.mp4'
import centerImage from '@/assets/whatsapp-hero-2026-03-05.jpeg'
import sideTile1 from '@/assets/colorful_packaging.png'
import sideTile2 from '@/assets/side-tile-2.jpg'
import sideTile3 from '@/assets/spinning_machine.jpeg'
import sideTile4 from '@/assets/three_reflectors_1765869273944.png'
import serviceImg1 from '@/assets/482dc07a-e7ec-4a67-a180-35c9f97aa5e3.JPG'

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
            <div className="relative h-screen min-h-[100dvh] w-full overflow-hidden bg-black">
                <video
                    src={videoSrc}
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-[1.15]"
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

            {/* Section 2 — Bento Grid with header */}
            <div
                id="bento-grid"
                ref={gridRef}
                className="relative max-w-[1600px] mx-auto px-4 sm:px-10 py-16 md:py-28"
            >
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
                    <div>
                        <p className="text-xs uppercase tracking-[0.5em] text-blue-600 font-semibold mb-4">STANIAX Sp. z o.o.</p>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-gray-900 tracking-tighter leading-[0.95]">
                            Metalizacja<br />i Lakierowanie
                        </h2>
                    </div>
                    <p className="text-base md:text-lg text-gray-500 max-w-md leading-relaxed md:text-right">
                        Od 1993 roku tworzymy powłoki najwyższej jakości dla przemysłu, motoryzacji i&nbsp;sektora premium.
                    </p>
                </div>

                {/* Bento Grid — Redesigned layout */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 auto-rows-[160px] sm:auto-rows-[200px] lg:auto-rows-[240px]">

                    {/* Large left — spans 2 cols, 2 rows */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={gridInView ? "visible" : "hidden"}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0 }}
                        className="col-span-2 row-span-2 rounded-[20px] overflow-hidden shadow-lg group relative"
                    >
                        <img
                            src={centerImage}
                            alt="Metalizacja STANIAX"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <MagneticButton
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-white/90 backdrop-blur-md text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 text-sm"
                            >
                                Wyceń Projekt <ArrowUpRight className="w-4 h-4" />
                            </MagneticButton>
                        </div>
                    </motion.div>

                    {/* Stats tile — dark accent */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={gridInView ? "visible" : "hidden"}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                        className="col-span-1 row-span-1 rounded-[20px] bg-gray-900 text-white p-6 md:p-8 flex flex-col justify-between shadow-lg"
                    >
                        <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">Doświadczenie</p>
                        <div>
                            <div className="text-4xl md:text-5xl font-black text-blue-400 leading-none">25+</div>
                            <p className="text-sm text-gray-400 mt-2">lat na rynku</p>
                        </div>
                    </motion.div>

                    {/* Top right image */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={gridInView ? "visible" : "hidden"}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="col-span-1 row-span-1 rounded-[20px] overflow-hidden shadow-lg group"
                    >
                        <img src={sideTile2} alt="Metalizacja próżniowa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </motion.div>

                    {/* Second stats tile */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={gridInView ? "visible" : "hidden"}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                        className="col-span-1 row-span-1 rounded-[20px] bg-blue-600 text-white p-6 md:p-8 flex flex-col justify-between shadow-lg"
                    >
                        <p className="text-xs uppercase tracking-[0.3em] text-blue-200 font-semibold">Projekty</p>
                        <div>
                            <div className="text-4xl md:text-5xl font-black leading-none">2500+</div>
                            <p className="text-sm text-blue-200 mt-2">zrealizowanych</p>
                        </div>
                    </motion.div>

                    {/* Bottom row — 3 image tiles + 1 accent */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={gridInView ? "visible" : "hidden"}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="col-span-1 row-span-1 rounded-[20px] overflow-hidden shadow-lg group"
                    >
                        <img src={sideTile3} alt="Proces metalizacji" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={gridInView ? "visible" : "hidden"}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                        className="col-span-1 row-span-1 rounded-[20px] overflow-hidden shadow-lg group"
                    >
                        <img src={serviceImg1} alt="Powłoki metaliczne" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={gridInView ? "visible" : "hidden"}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="col-span-1 row-span-1 rounded-[20px] overflow-hidden shadow-lg group"
                    >
                        <img src={sideTile1} alt="Kolorowe opakowania" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={gridInView ? "visible" : "hidden"}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                        className="col-span-1 row-span-1 rounded-[20px] overflow-hidden shadow-lg group"
                    >
                        <img src={sideTile4} alt="Reflektory" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </motion.div>

                </div>
            </div>
        </div>
    )
}
