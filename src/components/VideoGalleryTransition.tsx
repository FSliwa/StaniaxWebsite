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
  
  // 2. Images Reveal (Fade & Scale instead of Slide)
  const imageOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
  const imageScale = useTransform(scrollYProgress, [0.3, 0.6], [0.9, 1])

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
            
            {/* Hero Content - Distributed Layout */}
            
            {/* Label - Top Left */}
            <motion.div 
                style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
                className="absolute top-8 left-8 z-30"
            >
                <p className="text-white/80 text-xs sm:text-sm font-bold uppercase tracking-[0.5em] drop-shadow-md">
                    PRZYSZŁOŚĆ METALIZACJI
                </p>
            </motion.div>

            {/* Massive Headline - Center */}
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                <motion.h1 
                    style={{ 
                        opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
                        scale: useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
                    }}
                    className="text-[15vw] leading-[0.8] font-black tracking-tighter text-white mix-blend-overlay opacity-90 select-none"
                >
                    STANIAX
                </motion.h1>
            </div>

            {/* Description & CTA - Bottom */}
            <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center z-30 px-4">
                <motion.div 
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
                    className="flex flex-col items-center gap-6 sm:gap-8 text-center"
                >
                    <p className="text-white/90 text-base sm:text-lg lg:text-xl font-medium max-w-xl leading-relaxed drop-shadow-md hidden sm:block">
                        Specjalistyczne powłoki metaliczne dla przemysłu i prototypowania.
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
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 p-4 sm:p-12">
            <div className="grid grid-cols-2 w-full h-full gap-4 sm:gap-8 max-w-7xl mx-auto">
                
                {/* Left Column */}
                <div className="flex flex-col justify-between h-full py-4 sm:py-12">
                    <motion.div 
                        style={{ opacity: imageOpacity, scale: imageScale }}
                        className="w-full aspect-[9/16] bg-gray-100 rounded-2xl overflow-hidden shadow-xl"
                    >
                        <img src={images[0]} alt="Gallery 1" className="w-full h-full object-cover" />
                    </motion.div>
                    <motion.div 
                        style={{ opacity: imageOpacity, scale: imageScale }}
                        className="w-full aspect-[9/16] bg-gray-100 rounded-2xl overflow-hidden shadow-xl"
                    >
                        <img src={images[1]} alt="Gallery 2" className="w-full h-full object-cover" />
                    </motion.div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-between h-full py-4 sm:py-12">
                    <motion.div 
                        style={{ opacity: imageOpacity, scale: imageScale }}
                        className="w-full aspect-[9/16] bg-gray-100 rounded-2xl overflow-hidden shadow-xl"
                    >
                        <img src={images[2]} alt="Gallery 3" className="w-full h-full object-cover" />
                    </motion.div>
                    <motion.div 
                        style={{ opacity: imageOpacity, scale: imageScale }}
                        className="w-full aspect-[9/16] bg-gray-100 rounded-2xl overflow-hidden shadow-xl"
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
