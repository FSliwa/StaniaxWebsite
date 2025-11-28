import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'
import { cn } from '@/lib/utils'

// Import optimized gallery images
const galleryImages = import.meta.glob('@/assets/gallery/*.jpg', { eager: true, as: 'url' })
const images = Object.values(galleryImages)

export function LightshipGallery() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Smooth out the scroll progress for inertia feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Transform vertical scroll to horizontal movement
  // We want to move the track to the left as we scroll down
  // The distance should be enough to show all images
  const x = useTransform(smoothProgress, [0, 1], ["1%", "-90%"])

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Header Overlay */}
        <div className="absolute top-12 left-6 md:left-12 z-20">
          <p className="text-blue-600 font-mono text-sm tracking-widest uppercase mb-2 font-bold">
            Park Maszynowy & Realizacje
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter">
            Galeria
          </h2>
        </div>

        {/* Horizontal Track */}
        <motion.div style={{ x }} className="flex gap-8 md:gap-12 px-6 md:px-24">
          {images.map((src, index) => (
            <ParallaxImage key={index} src={src} index={index} />
          ))}
        </motion.div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 h-1 bg-gray-200 rounded-full overflow-hidden z-20">
            <motion.div 
                className="h-full bg-blue-600"
                style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
            />
        </div>

      </div>
    </section>
  )
}

function ParallaxImage({ src, index }: { src: string, index: number }) {
  // Internal parallax logic could go here if we passed scroll progress down
  // For now, let's add a reveal animation and a hover scale
  
  return (
    <motion.div 
      className="relative h-[60vh] w-[40vh] md:h-[70vh] md:w-[50vh] flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100 shadow-xl"
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.4 }}
    >
      <motion.img
        src={src}
        alt={`Gallery Image ${index + 1}`}
        className="h-full w-full object-cover"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: false, margin: "-10%" }} // Re-trigger slightly for effect
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <span className="text-white font-mono text-xs tracking-widest border border-white/30 px-3 py-1 rounded-full backdrop-blur-sm">
            IMG_{index + 1}
        </span>
      </div>
    </motion.div>
  )
}
