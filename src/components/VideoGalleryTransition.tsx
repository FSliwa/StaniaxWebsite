import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

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
  // 1. Video Scale: Starts full (1) -> shrinks to center (0.6)
  const videoScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.5])
  const videoRadius = useTransform(scrollYProgress, [0, 0.4], ["0px", "24px"])
  
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
            style={{ scale: videoScale, borderRadius: videoRadius }}
            className="relative z-20 w-full h-full shadow-2xl overflow-hidden"
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
            
            {/* Overlay Text on Video */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.h2 
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
                    className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter text-center"
                >
                    Precyzja
                </motion.h2>
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
