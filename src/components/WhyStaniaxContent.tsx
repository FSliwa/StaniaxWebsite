import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'

// Assets
import bgImage from '@/assets/airplane-04-1600x900.jpg'
import fgVideo from '@/assets/liquid-gold-hand.mp4'

export function WhyStaniaxContent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax Transforms
  // Background moves slowly (creating depth)
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  
  // Foreground moves faster (sliding up over the background)
  const fgY = useTransform(scrollYProgress, [0.2, 0.8], ["20%", "-10%"])
  
  // Text Reveal (Fade in + Slide up)
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1])
  const textY = useTransform(scrollYProgress, [0.4, 0.6], [50, 0])

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-white overflow-hidden">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center">
        
        {/* 1. Massive Headline (Left) */}
        <div className="absolute top-12 left-6 z-30 mix-blend-difference">
             <h2 className="text-[10vw] leading-[0.8] font-black tracking-tighter text-white uppercase">
                Poznaj<br />Staniax
            </h2>
        </div>

        {/* 2. Parallax Media Composition */}
        <div className="relative w-full h-[80vh] flex items-center justify-center">
            
            {/* Background Layer (Wide, Atmospheric) */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <motion.div 
                    style={{ y: bgY, scale: 1.1 }}
                    className="w-full h-full"
                >
                    <img 
                        src={bgImage} 
                        alt="Atmospheric Background" 
                        className="w-full h-full object-cover opacity-80"
                    />
                </motion.div>
            </div>

            {/* Foreground Layer (Rounded Media, "Hero") */}
            <motion.div 
                style={{ y: fgY }}
                className="relative z-20 w-[80vw] md:w-[50vw] aspect-[4/3] md:aspect-video bg-black rounded-[32px] overflow-hidden shadow-2xl"
            >
                <video 
                    src={fgVideo} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover"
                />
                {/* Inner Shadow/Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </motion.div>

        </div>

        {/* 3. Text Column (Right) */}
        <motion.div 
            style={{ opacity: textOpacity, y: textY }}
            className="absolute top-1/2 right-6 md:right-12 w-[280px] md:w-[320px] z-30"
        >
            <h3 className="text-2xl font-bold mb-4 text-black">
                Technologia Przyszłości
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Dla projektów wymagających najwyższej precyzji i estetyki. Nasze procesy metalizacji próżniowej przekształcają zwykłe powierzchnie w dzieła sztuki inżynieryjnej.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Zaprojektowane, by sprostać wyzwaniom nowoczesnego przemysłu i designu.
            </p>
            
            <button className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black hover:text-blue-600 transition-colors">
                Dowiedz się więcej
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.div>

      </div>
    </section>
  )
}
