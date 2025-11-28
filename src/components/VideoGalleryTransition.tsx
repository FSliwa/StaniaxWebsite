import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ArrowUpRight } from '@phosphor-icons/react'

// Import assets
import videoSrc from '@/assets/metallic-transformation-video.mp4'
const galleryImages = import.meta.glob('@/assets/gallery/*.jpg', { eager: true, as: 'url' })
const images = Object.values(galleryImages).slice(0, 4) // Take first 4 images

export function VideoGalleryTransition() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Animation Transforms
  // 1. Video Scale: Starts full width -> shrinks to vertical strip
  const width = useTransform(scrollYProgress, [0, 0.4], ["100%", "30%"])
  const height = useTransform(scrollYProgress, [0, 0.4], ["100%", "80%"])
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["0px", "32px"])
  
  // 2. Images Slide In
  // Left images come from left (-100%), Right from right (100%)
  const leftX = useTransform(scrollYProgress, [0.2, 0.6], ["-100%", "0%"])
  const rightX = useTransform(scrollYProgress, [0.2, 0.6], ["100%", "0%"])
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Central Video */}
        <motion.div 
            style={{ width, height, borderRadius }}
            className="relative z-20 shadow-2xl overflow-hidden"
        >
            <video 
                src={videoSrc} 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Overlay Text on Video (Hero Content) */}
            <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 pb-20 sm:pb-32 lg:pb-40">
                
                {/* Label */}
                <motion.p 
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
                    className="text-white/80 text-xs sm:text-sm font-bold uppercase tracking-[0.5em] mb-4 sm:mb-6 drop-shadow-md"
                >
                    PRZYSZŁOŚĆ METALIZACJI
                </motion.p>

                {/* Massive Headline */}
                <motion.h1 
                    style={{ 
                        opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
                        scale: useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
                    }}
                    className="text-[15vw] leading-[0.8] font-black tracking-tighter text-white mix-blend-overlay opacity-90 select-none pointer-events-none"
                >
                    STANIAX
                </motion.h1>

                {/* Description & CTA Container */}
                <motion.div 
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
                    className="mt-8 sm:mt-12 flex flex-col items-center gap-6 sm:gap-8"
                >
                    <p className="text-white/90 text-base sm:text-lg lg:text-xl font-medium max-w-xl leading-relaxed drop-shadow-md">
                        Specjalistyczne powłoki metaliczne dla przemysłu i prototypowania.
                        <br className="hidden sm:block" />
                        Precyzja, której możesz zaufać.
                    </p>

                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group cursor-pointer pointer-events-auto"
                        aria-label="Przejdź do formularza kontaktowego"
                    >
                        <MagneticButton className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-2xl flex items-center gap-2 group">
                            Rozpocznij Projekt
                            <ArrowUpRight weight="bold" className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </MagneticButton>
                    </button>
                </motion.div>

            </div>
        </motion.div>

        {/* Gallery Grid (Behind/Around Video) */}
        {/* We position them absolutely relative to the center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 p-12">
            <div className="grid grid-cols-2 w-full h-full gap-8 max-w-7xl mx-auto">
                
                {/* Left Column */}
                <div className="flex flex-col justify-between h-full py-12">
                    <motion.div 
                        style={{ x: leftX, opacity }}
                        className="w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl"
                    >
                        <img src={images[0]} alt="Gallery 1" className="w-full h-full object-cover" />
                    </motion.div>
                    <motion.div 
                        style={{ x: leftX, opacity }}
                        className="w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl"
                    >
                        <img src={images[1]} alt="Gallery 2" className="w-full h-full object-cover" />
                    </motion.div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-between h-full py-12">
                    <motion.div 
                        style={{ x: rightX, opacity }}
                        className="w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl"
                    >
                        <img src={images[2]} alt="Gallery 3" className="w-full h-full object-cover" />
                    </motion.div>
                    <motion.div 
                        style={{ x: rightX, opacity }}
                        className="w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl"
                    >
                        <img src={images[3]} alt="Gallery 4" className="w-full h-full object-cover" />
                    </motion.div>
                </div>

            </div>
        </div>

      </div>
    </section>
  )
}
