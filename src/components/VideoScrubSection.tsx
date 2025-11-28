import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import videoSrc from '@/assets/metallic-transformation-video.mp4'

export function VideoScrubSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [duration, setDuration] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Sync video time with scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && duration > 0) {
      // Calculate time based on scroll progress
      // We use a slightly smaller range (0.99) to avoid ending exactly at duration which might loop or stop weirdly
      const time = latest * duration 
      if (Number.isFinite(time)) {
         videoRef.current.currentTime = time
      }
    }
  })

  // Handle video metadata to get duration
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      if (video.readyState >= 1) {
        setDuration(video.duration)
      } else {
        video.onloadedmetadata = () => {
          setDuration(video.duration)
        }
      }
    }
  }, [])

  // Text Animations
  // Step 1: 0% - 20%
  const step1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 1, 0])
  const step1Y = useTransform(scrollYProgress, [0, 0.1, 0.2], [50, 0, -50])

  // Step 2: 30% - 50%
  const step2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [0, 1, 0])
  const step2Y = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [50, 0, -50])

  // Step 3: 60% - 80%
  const step3Opacity = useTransform(scrollYProgress, [0.6, 0.7, 0.8], [0, 1, 0])
  const step3Y = useTransform(scrollYProgress, [0.6, 0.7, 0.8], [50, 0, -50])

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#F4F4F4]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Video Layer */}
        <video 
            ref={videoRef}
            src={videoSrc}
            className="w-full h-full object-cover"
            muted
            playsInline
            preload="auto"
        />

        {/* Overlay Text Layer */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            
            {/* Step 1 */}
            <motion.div 
                style={{ opacity: step1Opacity, y: step1Y }}
                className="absolute left-[10%] max-w-md text-black"
            >
                <h2 className="text-5xl font-black tracking-tighter mb-4">Inicjacja Procesu</h2>
                <p className="text-xl text-gray-600 font-medium">Precyzyjne przygotowanie powierzchni pod metalizację.</p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
                style={{ opacity: step2Opacity, y: step2Y }}
                className="absolute left-[10%] max-w-md text-black"
            >
                <h2 className="text-5xl font-black tracking-tighter mb-4">Transformacja</h2>
                <p className="text-xl text-gray-600 font-medium">Aplikacja powłoki metalicznej w technologii natryskowej.</p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
                style={{ opacity: step3Opacity, y: step3Y }}
                className="absolute left-[10%] max-w-md text-black"
            >
                <h2 className="text-5xl font-black tracking-tighter mb-4">Perfekcja</h2>
                <p className="text-xl text-gray-600 font-medium">Finalne wykończenie i kontrola jakości.</p>
            </motion.div>

        </div>

      </div>
    </section>
  )
}
