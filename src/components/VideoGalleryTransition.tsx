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

  // 3. Hero Text Animation (Fade Out & Scale Down)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

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
            
            {/* 2. Massive Headline - Lowered */}
            <motion.h1 
                style={{ opacity: heroOpacity, scale: heroScale }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] sm:text-[18vw] font-black tracking-tighter text-white z-20 pointer-events-none mt-20"
            >
                STANIAX
            </motion.h1>

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

        {/* Gallery Grid (Behind/Around Video) - Absolute Positioning for Scattered Look */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            <div className="relative w-full h-full max-w-[1920px] mx-auto">
                
                {/* Image 1 - Top Left */}
                <motion.div 
                    style={{ opacity: imageOpacity, scale: imageScale }}
                    className="absolute top-[10%] left-[5%] w-[20vw] aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl"
                >
                    <img src={images[0]} alt="Gallery 1" className="w-full h-full object-cover" />
                </motion.div>

                {/* Image 2 - Bottom Left */}
                <motion.div 
                    style={{ opacity: imageOpacity, scale: imageScale }}
                    className="absolute bottom-[15%] left-[8%] w-[25vw] aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl"
                >
                    <img src={images[1]} alt="Gallery 2" className="w-full h-full object-cover" />
                </motion.div>

                {/* Image 3 - Top Right */}
                <motion.div 
                    style={{ opacity: imageOpacity, scale: imageScale }}
                    className="absolute top-[15%] right-[8%] w-[25vw] aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl"
                >
                    <img src={images[2]} alt="Gallery 3" className="w-full h-full object-cover" />
                </motion.div>

                {/* Image 4 - Bottom Right */}
                <motion.div 
                    style={{ opacity: imageOpacity, scale: imageScale }}
                    className="absolute bottom-[10%] right-[5%] w-[20vw] aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl"
                >
                    <img src={images[3]} alt="Gallery 4" className="w-full h-full object-cover" />
                </motion.div>

            </div>
        </div>

      </div>
    </section>
  )
}
