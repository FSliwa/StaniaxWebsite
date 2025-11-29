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
    <section id="why-staniax" data-theme="light" ref={containerRef} className="relative h-[150vh] bg-white overflow-hidden">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center">
        
        {/* Parallax Media Composition */}
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

            {/* Centered Text Overlay */}
            <motion.div 
                style={{ opacity: textOpacity, y: textY }}
                className="absolute z-30 flex flex-col items-center text-center max-w-4xl px-4 mix-blend-difference text-white"
            >
                <h2 className="text-[12vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter uppercase mb-6">
                    STANIAX
                </h2>
                <p className="text-lg md:text-2xl font-medium tracking-wide max-w-2xl mx-auto">
                    Specjalistyczne powłoki metaliczne dla przemysłu i prototypowania.
                </p>
                
                <button className="mt-8 group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-blue-400 transition-colors">
                    Dowiedz się więcej
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </motion.div>

        </div>

      </div>
    </section>
  )
}
