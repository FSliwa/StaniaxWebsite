import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ArrowUpRight } from '@phosphor-icons/react'

// Import assets
import videoSrc from '@/assets/Generowanie_Wideo_Dłoni_z_Efektem.mp4'
import liquidGold from '@/assets/Tworzenie_animacji_wideo_z_grafiki.mp4'
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
  // Center Video Scale (Starts huge, shrinks to 1)
  // Animation Transforms
  
  // 1. Hero Video Transition: Full Screen -> Grid Center
  // Center Video Scale (Starts huge, shrinks to 1)
  // 1. Hero Video Transition: Full Screen -> Grid Center
  // Center Video Scale (Starts huge, shrinks to 1)
  // 1. Hero Video Transition: Full Screen -> Grid Center
  // Animate Width from Full Screen (100vw) to Grid Column (100%)
  const centerWidth = useTransform(scrollYProgress, [0, 0.35], ["100vw", "100%"])
  // Animate X position to keep it centered: Shift left by (100vw - 100%)/2
  const centerX = useTransform(scrollYProgress, [0, 0.35], ["calc(-50vw + 50%)", "0%"])
  
  // Height Logic:
  // To prevent "zoom" (cropping), we MUST respect the video's natural aspect ratio (16:9).
  // 100vw width / (16/9) = 56.25vw height.
  // We animate this to "100%" ONLY if we want it to fill the grid cell later.
  // But initially, it MUST be 56.25vw.
  const videoHeight = useTransform(scrollYProgress, [0, 0.35], ["56.25vw", "100%"])
  
  // 2. Assembly Effect & Staggering (Side Columns)
  // Left Column: Enters slightly earlier
  const leftColOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])
  const leftColEnterY = useTransform(scrollYProgress, [0.2, 0.4], [200, 0]) // Slides up more dramatically
  
  // Right Column: Enters slightly later
  const rightColOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1])
  const rightColEnterY = useTransform(scrollYProgress, [0.25, 0.45], [200, 0]) // Slides up more dramatically

  // 3. Scaling (Side Columns)
  // They start smaller and grow to full size
  const sideColsScale = useTransform(scrollYProgress, [0.2, 0.45], [0.8, 1])

  // 4. Inner Parallax (Video inside the tile moves slightly)
  // We map scroll progress to a larger vertical shift for visibility
  const innerParallaxY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

  // Grid Parallax Effects (Existing logic for column movement during scroll)
  const centerY = useTransform(scrollYProgress, [0, 1], [0, 50])
  const leftColY = useTransform(scrollYProgress, [0, 1], [-50, 100])
  const rightColY = useTransform(scrollYProgress, [0, 1], [-100, 50])

  // Combine entrance Y with parallax Y for smooth motion
  const leftTotalY = useTransform(() => leftColY.get() + leftColEnterY.get())
  const rightTotalY = useTransform(() => rightColY.get() + rightColEnterY.get())
  
  // Hero Text Animation (Fade Out)
  // Made it fade out slightly later so "Scroll to explore" is visible longer
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center px-4 sm:px-10">
        
        {/* Hero Text Overlay (Fades out quickly) */}
        <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="absolute inset-0 z-50 pointer-events-none"
        >
            <div className="w-full h-full flex flex-col items-center justify-end pb-20">
                <h1 className="text-[15vw] leading-none font-black tracking-tighter text-white">
                    STANIAX
                </h1>
                <div className="w-full h-[1px] bg-white/30 mt-4 max-w-[90vw]" />
            </div>

            {/* Scroll to explore - Bottom Right */}
            <div className="absolute bottom-8 right-8 flex items-center gap-3 text-white/80">
                <span className="text-sm font-medium tracking-widest uppercase hidden sm:block">Scroll to explore</span>
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/5">
                    <ArrowUpRight className="w-4 h-4 rotate-90" />
                </div>
            </div>
        </motion.div>


        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-4 md:gap-8 w-full max-w-[1600px] h-[85vh]">
            
            {/* Left Column */}
            <motion.div 
                style={{ y: leftTotalY, opacity: leftColOpacity, scale: sideColsScale }} 
                className="flex flex-col gap-4 md:gap-8 h-full justify-end"
            >
                {/* Top Left */}
                <div className="relative aspect-video rounded-[24px] overflow-hidden shadow-2xl group">
                    <motion.div style={{ y: innerParallaxY }} className="w-full h-[150%] -mt-[25%]">
                        <video src={liquidGold} autoPlay muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>
                </div>
                {/* Bottom Left */}
                <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl group">
                    <motion.div style={{ y: innerParallaxY }} className="w-full h-[150%] -mt-[25%]">
                        <video src={toroidAnim} autoPlay muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>
                </div>
            </motion.div>

            {/* Center Column (Hero) */}
            <motion.div 
                style={{ y: centerY, width: centerWidth, x: centerX }} 
                className="h-full z-40 origin-center"
            >
                <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-2xl group">
                    <motion.div style={{ y: innerParallaxY }} className="w-full h-[150%] -mt-[25%] relative">
                        <motion.div 
                            style={{ height: videoHeight }}
                            className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden"
                        >
                            <motion.video 
                                src={videoSrc} 
                                autoPlay muted loop playsInline 
                                className="w-full h-full object-cover" 
                            />
                        </motion.div>
                    </motion.div>
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
                style={{ y: rightTotalY, opacity: rightColOpacity, scale: sideColsScale }} 
                className="flex flex-col gap-4 md:gap-8 h-full justify-start"
            >
                {/* Top Right */}
                <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl group">
                    <motion.div style={{ y: innerParallaxY }} className="w-full h-[150%] -mt-[25%]">
                        <video src={vinylTrans} autoPlay muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>
                </div>
                {/* Bottom Right */}
                <div className="relative aspect-video rounded-[24px] overflow-hidden shadow-2xl group">
                    <motion.div style={{ y: innerParallaxY }} className="w-full h-[150%] -mt-[25%]">
                        <video src={galleryVideo} autoPlay muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>
                </div>
            </motion.div>

        </div>

      </div>
      
      {/* Bottom Gradient Transition to Blue (Next Section) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#eff6ff] pointer-events-none z-20" />
    </section>
  )
}
