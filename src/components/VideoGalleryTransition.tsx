import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ArrowUpRight } from '@phosphor-icons/react'

// Import assets
import videoSrc from '@/assets/metallic-transformation-video.mp4'
import liquidGold from '@/assets/liquid-gold-hand.mp4'
import toroidAnim from '@/assets/toroid-animation.mp4'
import vinylTrans from '@/assets/vinyl-transformation.mp4'
// Using existing videos as placeholders for the 4th element if needed, or reusing one
import galleryVideo from '@/assets/metallic-transformation-video.mp4' 

export function VideoGalleryTransition() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Animation Transforms
  
  // 1. Hero Video Transition: Full Screen -> Grid Center
  // The center column is roughly 40% of the width. We scale it up to cover the screen initially.
  // We also need to hide the other columns initially.
  
  // Grid Parallax Effects
  const centerY = useTransform(scrollYProgress, [0, 1], [0, 50])
  const leftColY = useTransform(scrollYProgress, [0, 1], [-50, 100])
  const rightColY = useTransform(scrollYProgress, [0, 1], [-100, 50])

  // Center Video Scale (Starts huge, shrinks to 1)
  // We apply this to the center column wrapper
  const centerScale = useTransform(scrollYProgress, [0, 0.3], [2.5, 1])
  
  // Surrounding Columns Opacity (Start invisible, fade in)
  const sideColumnsOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1])
  
  // Hero Text Animation (Fade Out)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9])

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center px-4 sm:px-10">
        
        {/* Hero Text Overlay (Fades out quickly) */}
        <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none"
        >
             <h1 className="text-[12vw] sm:text-[15vw] font-black tracking-tighter text-white mix-blend-difference">
                STANIAX
            </h1>
            <p className="text-white/80 text-lg sm:text-xl font-medium tracking-widest uppercase mt-4 mix-blend-difference">
                Lifestyle Gallery
            </p>
        </motion.div>


        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-4 md:gap-8 w-full max-w-[1600px] h-[85vh]">
            
            {/* Left Column */}
            <motion.div 
                style={{ y: leftColY, opacity: sideColumnsOpacity }} 
                className="flex flex-col gap-4 md:gap-8 h-full justify-end"
            >
                {/* Top Left */}
                <div className="relative aspect-video rounded-[24px] overflow-hidden shadow-2xl group">
                    <video src={liquidGold} autoPlay muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                {/* Bottom Left */}
                <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl group">
                    <video src={toroidAnim} autoPlay muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
            </motion.div>

            {/* Center Column (Hero) */}
            <motion.div 
                style={{ y: centerY, scale: centerScale }} 
                className="h-full z-40 origin-center"
            >
                <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-2xl group">
                    <video src={videoSrc} autoPlay muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                    
                    {/* Center CTA */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <MagneticButton className="bg-white/90 backdrop-blur-md text-black px-6 py-3 rounded-full font-bold flex items-center gap-2">
                            Zobacz Więcej <ArrowUpRight className="w-4 h-4" />
                        </MagneticButton>
                    </div>
                </div>
            </motion.div>

            {/* Right Column */}
            <motion.div 
                style={{ y: rightColY, opacity: sideColumnsOpacity }} 
                className="flex flex-col gap-4 md:gap-8 h-full justify-start"
            >
                {/* Top Right */}
                <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl group">
                    <video src={vinylTrans} autoPlay muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                {/* Bottom Right */}
                <div className="relative aspect-video rounded-[24px] overflow-hidden shadow-2xl group">
                    <video src={galleryVideo} autoPlay muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
            </motion.div>

        </div>

      </div>
    </section>
  )
}
