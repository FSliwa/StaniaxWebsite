import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useSpring, cubicBezier } from 'framer-motion'
import { cn } from '@/lib/utils'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ArrowUpRight } from '@phosphor-icons/react'

// Import assets
import videoSrc from '@/assets/Generowanie_Wideo_Dłoni_z_Efektem.mp4'
import sideTile1 from '@/assets/side-tile-1.png'
import sideTile2 from '@/assets/side-tile-2.jpg'
import sideTile3 from '@/assets/side-tile-3.png'
import sideTile4 from '@/assets/side-tile-4.png' 

const languages = [
  "Metalizacja próżniowa",
  "Vacuum Metallization",
  "Vakuummetallisierung",
  "Métallisation sous vide",
  "Metallizzazione sotto vuoto",
  "Vacuümmetallisatie"
]

export function VideoGalleryTransition() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Smooth spring for scroll progress to remove jitter and add weight
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [langIndex, setLangIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLangIndex((prev) => (prev + 1) % languages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Animation Transforms
  const customEase = cubicBezier(0.65, 0, 0.35, 1); // Cubic bezier for "buttery" feel

  // 1. Hero Video Transition: Full Screen -> Grid Center
  // Animate Width from Full Screen (100vw) to Grid Column (100%)
  const centerWidth = useTransform(smoothProgress, [0, 0.15, 0.4], ["100vw", "100vw", "100%"], { ease: customEase })
  
  // Height & Position Logic:
  const centerHeight = useTransform(smoothProgress, [0, 0.15, 0.4], ["100vh", "100vh", "100%"], { ease: customEase })
  const centerTop = useTransform(smoothProgress, [0, 0.15, 0.4], ["50%", "50%", "0%"], { ease: customEase })
  const centerYCorrection = useTransform(smoothProgress, [0, 0.15, 0.4], ["-50%", "-50%", "0%"], { ease: customEase })
  
  // Animate Border Radius: 0px (Full Screen) -> 40px (Grid Tile)
  const heroRadius = useTransform(smoothProgress, [0, 0.15, 0.4], ["0px", "0px", "40px"], { ease: customEase })
  
  // 2. Assembly Effect & Staggering (Side Columns)
  // Left Column: Enters slightly earlier
  const leftColOpacity = useTransform(smoothProgress, [0.2, 0.4], [0, 1])
  // Overshoot effect: slides up past 0 slightly then settles? 
  // For now, just a smooth slide up with spring physics from smoothProgress
  const leftColEnterY = useTransform(smoothProgress, [0.2, 0.4], [200, 0], { ease: customEase })
  
  // Right Column: Enters slightly later (more stagger)
  const rightColOpacity = useTransform(smoothProgress, [0.25, 0.5], [0, 1])
  const rightColEnterY = useTransform(smoothProgress, [0.25, 0.5], [200, 0], { ease: customEase })

  // 3. Scaling (Side Columns)
  // Start smaller (0.9) and grow to 1
  const sideColsScale = useTransform(smoothProgress, [0.2, 0.45], [0.9, 1], { ease: customEase })

  // 4. Inner Parallax (Video inside the tile moves slightly)
  // Parallax for the main video to give it depth inside the container
  const mainVideoScale = useTransform(smoothProgress, [0, 0.4], [1.1, 1]) // Slight zoom out as it shrinks
  
  // Side tiles parallax
  const innerParallaxY = useTransform(smoothProgress, [0, 1], ["-15%", "15%"])

  // Grid Parallax Effects (Existing logic for column movement during scroll)
  const centerY = useTransform(smoothProgress, [0, 1], [0, 50])
  const leftColY = useTransform(smoothProgress, [0, 1], [-50, 100])
  const rightColY = useTransform(smoothProgress, [0, 1], [-100, 50])

  // Combine entrance Y with parallax Y for smooth motion
  const leftTotalY = useTransform(() => leftColY.get() + leftColEnterY.get())
  const rightTotalY = useTransform(() => rightColY.get() + rightColEnterY.get())
  
  // Combine vertical centering correction with parallax for the central video
  const finalY = useTransform(() => {
    const correction = centerYCorrection.get() // string like "-50%" or "0%"
    const parallax = centerY.get() // number like 0 or 50
    return `calc(${correction} + ${parallax}px)`
  })
  
  // Hero Text Animation (Fade Out)
  // Fade out faster [0, 0.15]
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0])
  const heroScale = useTransform(smoothProgress, [0, 0.15], [1, 0.9])
  // Force X centering using a MotionValue to ensure it's not dropped
  const xPosition = useTransform(smoothProgress, [0, 1], ["-50%", "-50%"])

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-white">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Hero Text Overlay (Fades out quickly) */}
        <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="absolute inset-0 z-50 pointer-events-none"
        >
            <div className="w-full h-full flex flex-col items-center justify-end pb-20">
                <h1 className="text-[15vw] leading-none font-black tracking-tighter text-white">
                    STANIAX
                </h1>
                
                {/* Dynamic Text Rotator */}
                <div className="h-12 mt-2 mb-6 overflow-hidden relative w-full flex justify-center items-center px-4">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={langIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="absolute text-lg sm:text-xl md:text-2xl font-medium tracking-widest text-white/90 uppercase whitespace-nowrap text-center w-full"
                        >
                            {languages[langIndex]}
                        </motion.span>
                    </AnimatePresence>
                </div>

                <div className="w-full h-[1px] bg-white/30 max-w-[90vw]" />
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
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-4 md:gap-8 w-full max-w-[1600px] mx-auto h-[85vh] px-4 sm:px-10">
            
            {/* Left Column */}
            <motion.div 
                style={{ y: leftTotalY, opacity: leftColOpacity, scale: sideColsScale }} 
                className="flex flex-col gap-4 md:gap-8 h-full justify-end will-change-transform"
            >
                {/* Top Left */}
                <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden shadow-2xl group">
                    <motion.div style={{ y: innerParallaxY }} className="w-full h-[150%] -mt-[25%] will-change-transform">
                        <img src={sideTile2} alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>
                </div>
                {/* Bottom Left */}
                <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl group">
                    <motion.div style={{ y: innerParallaxY }} className="w-full h-[150%] -mt-[25%] will-change-transform">
                        <img src={sideTile1} alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>
                </div>
            </motion.div>

            {/* Center Column (Hero) - Grid Slot */}
            <motion.div 
                style={{ y: centerY }} 
                className="relative h-full z-40 col-start-1 md:col-start-2 row-start-1 md:row-start-1 will-change-transform"
            >
                {/* Animated Hero Video - Breaks out of grid */}
                <motion.div
                    style={{ 
                      width: centerWidth, 
                      height: centerHeight,
                      borderRadius: heroRadius, 
                      left: '50%', 
                      top: centerTop,
                      x: xPosition,
                      y: finalY
                    }}
                    className="absolute max-w-none overflow-hidden shadow-2xl group will-change-transform"
                >
                    <div className="w-full h-full relative">
                        <motion.video 
                            style={{ scale: mainVideoScale }}
                            src={videoSrc} 
                            autoPlay muted loop playsInline 
                            className="w-full h-full object-cover will-change-transform" 
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                    
                    {/* Center CTA */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <MagneticButton 
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white/90 backdrop-blur-md text-black px-6 py-3 rounded-full font-bold flex items-center gap-2"
                        >
                            Zobacz Więcej <ArrowUpRight className="w-4 h-4" />
                        </MagneticButton>
                    </div>
                </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div 
                style={{ y: rightTotalY, opacity: rightColOpacity, scale: sideColsScale }} 
                className="flex flex-col gap-4 md:gap-8 h-full justify-start will-change-transform"
            >
                {/* Top Right */}
                <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl group">
                    <motion.div style={{ y: innerParallaxY }} className="w-full h-[150%] -mt-[25%] will-change-transform">
                        <img src={sideTile3} alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>
                </div>
                {/* Bottom Right */}
                <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden shadow-2xl group">
                    <motion.div style={{ y: innerParallaxY }} className="w-full h-[150%] -mt-[25%] will-change-transform">
                        <img src={sideTile4} alt="Gallery 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
