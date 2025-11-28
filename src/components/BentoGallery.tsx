import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import { X, ArrowsOutSimple, CaretLeft, CaretRight } from '@phosphor-icons/react'

// Import optimized gallery images
const galleryImages = import.meta.glob('@/assets/gallery/*.jpg', { eager: true, as: 'url' })
const images = Object.values(galleryImages)

// SVG Filter for Liquid Distortion
const LiquidFilter = () => (
  <svg className="absolute w-0 h-0">
    <defs>
      <filter id="liquid-distortion">
        <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="1" result="warp" />
        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="0" in="SourceGraphic" in2="warp" />
      </filter>
    </defs>
  </svg>
)

export function BentoGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const openLightbox = (index: number) => {
    setSelectedImage(images[index])
    setSelectedIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    const nextIndex = (selectedIndex + 1) % images.length
    setSelectedImage(images[nextIndex])
    setSelectedIndex(nextIndex)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    const prevIndex = (selectedIndex - 1 + images.length) % images.length
    setSelectedImage(images[prevIndex])
    setSelectedIndex(prevIndex)
  }

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <LiquidFilter />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4"
          >
            Park Maszynowy & Realizacje
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter"
          >
            Galeria <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Premium</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((src, index) => {
            // Bento Logic: Some items span 2 cols or 2 rows
            const isLarge = index % 7 === 0 || index % 11 === 0
            const isWide = index % 3 === 0 && !isLarge
            
            return (
              <BentoCard 
                key={index}
                src={src}
                index={index}
                className={cn(
                  isLarge ? "md:col-span-2 md:row-span-2" : isWide ? "md:col-span-2" : "",
                  "relative group overflow-hidden rounded-2xl bg-gray-900 cursor-zoom-in"
                )}
                onClick={() => openLightbox(index)}
              />
            )
          })}
        </div>
      </div>

      {/* Lightbox (Same as before) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
           <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 bg-black/50 rounded-full hidden md:block"
            >
              <CaretLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 bg-black/50 rounded-full hidden md:block"
            >
              <CaretRight className="w-8 h-8" />
            </button>

            <img
              src={selectedImage}
              alt="Full screen view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
        </div>
      )}
    </section>
  )
}

function BentoCard({ src, index, className, onClick }: { src: string, index: number, className: string, onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  
  // Mouse position for Spotlight
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Tilt Effect
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    // Spotlight
    x.set(mouseX)
    y.set(mouseY)

    // Tilt
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    rotateX.set(((mouseY - centerY) / centerY) * -5) // Max 5 deg tilt
    rotateY.set(((mouseX - centerX) / centerX) * 5)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      {/* Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-30"
        style={{
          background: useTransform(
            [x, y],
            ([latestX, latestY]) => `radial-gradient(600px circle at ${latestX}px ${latestY}px, rgba(59, 130, 246, 0.15), transparent 40%)`
          )
        }}
      />

      {/* Image with Liquid Distortion on Hover */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <img 
          src={src} 
          alt="Gallery" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ filter: 'url(#liquid-distortion)' }} // Apply filter, but we need to animate the filter itself
        />
        {/* Note: Animating SVG filter params directly via CSS/JS is complex. 
            For simplicity and performance in this iteration, we use a CSS scale + the static filter 
            which creates a cool warp effect when scaled. 
            For true liquid animation, we'd need a JS loop updating the SVG DOM. 
            Let's stick to the scale + static warp for now as it's performant and looks "liquid" during movement.
        */}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <p className="text-white font-mono text-xs tracking-widest uppercase">Realizacja #{index + 1}</p>
      </div>
    </motion.div>
  )
}
