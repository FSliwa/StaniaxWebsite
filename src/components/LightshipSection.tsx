import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import projectImgAerospace from '@/assets/airplane-04-1600x900.jpg' // Placeholder asset

export function LightshipSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Animation Transforms
  // The section is tall (300vh), so we have plenty of scroll room.
  
  // 1. Media Scale & Parallax
  // Starts slightly zoomed in and scales down to fit or stays full width but moves
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.2, 1])
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  
  // 2. Text Reveal
  // Text slides up and fades in
  const textY = useTransform(scrollYProgress, [0.2, 0.6], [100, 0])
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])
  
  // 3. Overlay Darkness (optional, to make text readable)
  const overlayOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 0.4])

  return (
    <section 
      ref={containerRef} 
      id="lightship-section"
      className="relative h-[300vh] bg-black" 
      data-theme="dark"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Background Media */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.div 
            style={{ scale: mediaScale, y: mediaY }}
            className="w-full h-full"
          >
            <img 
              src={projectImgAerospace} 
              alt="Lightship Style Background" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Dark Overlay for Text Readability */}
          <motion.div 
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-black"
          />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 text-center">
          <motion.div style={{ y: textY, opacity: textOpacity }}>
            <h2 className="text-[8vw] md:text-[6vw] font-black tracking-tighter text-white uppercase leading-none mb-8">
              Precyzja<br />Bez Kompromisów
            </h2>
            <p className="text-white/80 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
              Tworzymy rozwiązania, które definiują nowe standardy w branży. 
              Każdy detal ma znaczenie, każda powłoka to gwarancja jakości.
            </p>
            
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold tracking-wide hover:bg-gray-200 transition-colors">
              Zobacz Proces
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
