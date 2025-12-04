import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import { MagneticButton } from '@/components/ui/MagneticButton'

// Assets
import bgImage from '@/assets/airplane-04-1600x900.jpg'
import fgVideo from '@/assets/liquid-gold-hand.mp4'

export function WhyStaniaxContent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // --- PARALLAX & REVEAL LOGIC ---
  // The section is 200vh tall. 
  // 0.0 - 0.5: The "Cover" (Foreground) is fully visible.
  // 0.5 - 1.0: The "Cover" slides UP to reveal the "Base" (Background).

  // 1. Background (The "Base" Layer)
  // It stays fixed or moves slightly to create depth.
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1])
  const bgOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0.5, 1]) // Fades in as cover lifts

  // 2. Foreground (The "Cover" Layer)
  // Slides UP out of view.
  const coverY = useTransform(scrollYProgress, [0.3, 1], ["0%", "-100%"])
  const coverScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]) // Slight shrink before lifting
  const coverRadius = useTransform(scrollYProgress, [0, 0.3], ["0px", "40px"]) // Rounds corners before lifting

  // 3. Text Elements
  // Title moves slower than the container for parallax feel
  const titleY = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  // Content revealed underneath
  const contentY = useTransform(scrollYProgress, [0.4, 1], ["20%", "0%"])
  const contentOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1])

  // Internal Reveal: Video slides UP to reveal Image
  // We want this to happen when the card is fully visible/centered.
  // Adjusted to [0.4, 0.9] to sync better with the card's "lift" and hold phase.
  const internalRevealY = useTransform(scrollYProgress, [0.4, 0.9], ["0%", "-100%"])

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-black text-white">
      
      {/* STICKY VIEWPORT */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">

        {/* --- LAYER 1: BACKGROUND (REVEALED) --- */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <motion.div 
                style={{ scale: bgScale, opacity: bgOpacity }}
                className="absolute inset-0 w-full h-full"
            >
                <img 
                    src={bgImage} 
                    alt="Aerospace Background" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" /> {/* Darken for text readability */}
            </motion.div>

            {/* Revealed Content */}
            <motion.div 
                style={{ y: contentY, opacity: contentOpacity }}
                className="relative z-10 max-w-5xl px-6 text-center"
            >
                <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                    Precyzja, która definiuje <span className="text-blue-500">przyszłość</span>.
                </h3>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Nasze powłoki to nie tylko ochrona. To inżynieria na poziomie molekularnym, 
                    zaprojektowana, by przetrwać w najbardziej ekstremalnych warunkach. 
                    Od głębin oceanów po orbitę okołoziemską.
                </p>
                <div className="mt-12 flex flex-wrap justify-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-5xl font-black text-white">500+</span>
                        <span className="text-sm uppercase tracking-widest text-gray-400">Projektów</span>
                    </div>
                    <div className="w-px h-16 bg-white/20" />
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-5xl font-black text-white">ISO</span>
                        <span className="text-sm uppercase tracking-widest text-gray-400">9001:2015</span>
                    </div>
                    <div className="w-px h-16 bg-white/20" />
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-5xl font-black text-white">100%</span>
                        <span className="text-sm uppercase tracking-widest text-gray-400">Polski Kapitał</span>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* --- LAYER 2: FOREGROUND (COVER) --- */}
        <motion.div 
            style={{ y: coverY, scale: coverScale, borderRadius: coverRadius }}
            className="absolute inset-0 w-full h-full bg-[#f5f5f7] z-20 origin-bottom flex flex-col overflow-hidden"
        >
            {/* Header Section */}
            <div className="w-full pt-20 pb-10 px-6 text-center z-30">
                <h2 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-slate-900 uppercase">
                    BEYOND<br />LIMITS
                </h2>
                <div className="mt-6 flex justify-center items-center gap-4 text-slate-500">
                    <div className="h-px w-12 bg-slate-300" />
                    <span className="text-sm font-medium tracking-[0.3em] uppercase">Staniax Engineering</span>
                    <div className="h-px w-12 bg-slate-300" />
                </div>
            </div>

            {/* Content Container (White Background, Animated) */}
            <div className="flex-1 px-4 sm:px-10 pb-10 w-full max-w-[1800px] mx-auto">
                <div className="relative w-full h-full bg-white rounded-[40px] overflow-hidden shadow-2xl">
                    
                    {/* LAYER 1: Video (Background/Revealed) */}
                    <div className="absolute inset-0 w-full h-full">
                        <video 
                            src={fgVideo} 
                            autoPlay 
                            muted 
                            loop 
                            playsInline 
                            className="w-full h-full object-cover rounded-[40px]"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-[40px]" />
                        
                        {/* Text Overlay on Video */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                             <h2 className="text-[10vw] leading-[0.8] font-black tracking-tighter uppercase text-center opacity-50 text-white mix-blend-overlay">
                                BEYOND<br />LIMITS
                            </h2>
                        </div>

                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/80">
                            <span className="text-xs uppercase tracking-widest font-medium">Odkryj więcej</span>
                            <ArrowRight className="w-4 h-4 rotate-90 animate-bounce" />
                        </div>
                    </div>

                    {/* LAYER 2: Image (Foreground/Cover) - Slides UP to reveal Layer 1 */}
                    <motion.div 
                        style={{ y: internalRevealY }} 
                        className="absolute inset-0 w-full h-full z-20 bg-white rounded-[40px] overflow-hidden"
                    >
                         <img 
                            src={bgImage} 
                            alt="Aerospace Technology" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                         <div className="absolute bottom-10 left-10 max-w-md text-white z-10">
                            <h3 className="text-3xl font-bold mb-4">
                                Precyzja Lotnicza
                            </h3>
                            <p className="text-sm leading-relaxed opacity-90">
                                Standardy AS9100 w każdym detalu.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>

        </motion.div>

      </div>
    </section>
  )
}
