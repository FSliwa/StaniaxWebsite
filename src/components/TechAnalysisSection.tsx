import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

export function TechAnalysisSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Animation Transforms
  
  // 1. Hero Object Scale (Zoom in)
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.5])
  
  // 2. Text Fade Out
  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.15], [0, -50])

  // 3. Dynamic Lines (Airflow Effect)
  // Line 1: Moves Left & Up
  const line1Width = useTransform(scrollYProgress, [0.2, 0.5], ["0px", "300px"])
  const line1X = useTransform(scrollYProgress, [0.2, 0.5], ["0px", "-200px"])
  const line1Y = useTransform(scrollYProgress, [0.2, 0.5], ["0px", "-50px"])
  const line1Opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1])

  // Line 2: Moves Left (Straight)
  const line2Width = useTransform(scrollYProgress, [0.25, 0.55], ["0px", "400px"])
  const line2X = useTransform(scrollYProgress, [0.25, 0.55], ["0px", "-250px"])
  const line2Opacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1])

  // Line 3: Moves Left & Down
  const line3Width = useTransform(scrollYProgress, [0.3, 0.6], ["0px", "300px"])
  const line3X = useTransform(scrollYProgress, [0.3, 0.6], ["0px", "-200px"])
  const line3Y = useTransform(scrollYProgress, [0.3, 0.6], ["0px", "50px"])
  const line3Opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1])

  // 4. Tech Stats Reveal
  const statsOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1])
  const statsY = useTransform(scrollYProgress, [0.6, 0.8], [20, 0])

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#F4F4F4]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Overlay Text - Initial State */}
        <motion.div 
            style={{ opacity: textOpacity, y: textY }}
            className="absolute top-[20%] text-center z-30"
        >
            <h2 className="text-4xl font-black tracking-tighter mb-2 text-black">Analiza Systemu</h2>
            <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Wstępna konfiguracja...</p>
        </motion.div>

        {/* Hero Object - Central */}
        <motion.div 
            style={{ scale }}
            className="relative z-20 w-[300px] h-[200px] bg-[#222] rounded-xl flex items-center justify-center shadow-2xl border border-white/10"
        >
            <div className="text-center">
                <div className="text-white font-bold text-2xl tracking-widest mb-2">STANIAX</div>
                <div className="text-white/50 font-mono text-xs uppercase">Core System</div>
            </div>
            
            {/* Internal Glow/Detail */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-xl pointer-events-none" />
        </motion.div>

        {/* Dynamic Lines (Behind Hero) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            {/* Line 1 */}
            <motion.div 
                style={{ width: line1Width, x: line1X, y: line1Y, opacity: line1Opacity }}
                className="absolute h-[2px] bg-blue-600 left-1/2 top-1/2 origin-right rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"
            />
            {/* Line 2 */}
            <motion.div 
                style={{ width: line2Width, x: line2X, opacity: line2Opacity }}
                className="absolute h-[2px] bg-blue-600 left-1/2 top-1/2 origin-right rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"
            />
            {/* Line 3 */}
            <motion.div 
                style={{ width: line3Width, x: line3X, y: line3Y, opacity: line3Opacity }}
                className="absolute h-[2px] bg-blue-600 left-1/2 top-1/2 origin-right rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"
            />
        </div>

        {/* Tech Stats - Bottom */}
        <motion.div 
            style={{ opacity: statsOpacity, y: statsY }}
            className="absolute bottom-12 w-full max-w-4xl px-6 flex justify-between items-end font-mono text-sm text-gray-600 uppercase tracking-wider z-30"
        >
            <div className="flex flex-col gap-2 p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200">
                <span className="font-bold text-black">Performance</span>
                <span className="text-blue-600">100% Optimal</span>
            </div>
            <div className="flex flex-col gap-2 text-right p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200">
                <span className="font-bold text-black">Logic</span>
                <span className="text-blue-600">Solid State</span>
            </div>
        </motion.div>

      </div>
    </section>
  )
}
