import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'
import { cn } from '@/lib/utils'
import { PenNib, Wrench, Factory, CheckCircle } from '@phosphor-icons/react'
import productionDesign from '@/assets/production-design.png'
import productionPrototype from '@/assets/production-prototype.png'
import productionManufacturing from '@/assets/production-manufacturing.png'
import productionQuality from '@/assets/production-quality.png'

const steps = [
  {
    id: 1,
    title: "Projektowanie",
    description: "Nasz zespół inżynierów tworzy precyzyjne modele CAD/CAM, optymalizując konstrukcję pod kątem wytrzymałości i kosztów produkcji.",
    image: productionDesign,
    color: "bg-blue-50",
    accent: "text-blue-600",
    bgAccent: "bg-blue-600"
  },
  {
    id: 2,
    title: "Prototypowanie",
    description: "Szybkie tworzenie prototypów pozwala na weryfikację założeń projektowych i wprowadzenie niezbędnych korekt przed seryjną produkcją.",
    image: productionPrototype,
    color: "bg-orange-50",
    accent: "text-orange-600",
    bgAccent: "bg-orange-600"
  },
  {
    id: 3,
    title: "Produkcja",
    description: "Wykorzystujemy nowoczesny park maszynowy CNC oraz zaawansowane technologie spawalnicze, aby zapewnić najwyższą jakość wykonania.",
    image: productionManufacturing,
    color: "bg-purple-50",
    accent: "text-purple-600",
    bgAccent: "bg-purple-600"
  },
  {
    id: 4,
    title: "Kontrola Jakości",
    description: "Każdy element przechodzi rygorystyczne testy wytrzymałościowe i pomiary geometryczne, gwarantując zgodność ze specyfikacją.",
    image: productionQuality,
    color: "bg-green-50",
    accent: "text-green-600",
    bgAccent: "bg-green-600"
  }
]

export function LightshipProduction() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress of the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Smooth out the progress for fluid animations
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  // Dynamic Background Color based on active step
  const backgroundColor = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75],
    ["#eff6ff", "#fff7ed", "#faf5ff", "#f0fdf4"] // blue-50, orange-50, purple-50, green-50
  )

  return (
    <motion.section 
        ref={containerRef} 
        style={{ backgroundColor }}
        className="relative"
    >
      <div className="flex flex-col lg:flex-row">
          
          {/* LEFT COLUMN: Sticky Visuals */}
          <div className="lg:w-1/2 relative hidden lg:block h-[400vh]"> {/* Height matches total scroll distance */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="relative w-full aspect-square max-w-xl rounded-[40px] flex items-center justify-center p-10">
                    {/* Background Circle/Shape that morphs */}
                    <motion.div 
                        className="absolute inset-0 rounded-[40px] bg-white shadow-2xl"
                        style={{
                            scale: useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1, 0.9]),
                            rotate: useTransform(smoothProgress, [0, 1], [0, 10])
                        }}
                    />

                    {/* Step Visuals */}
                    {steps.map((step, index) => {
                        // Calculate active range for this step
                        const start = index * 0.25
                        const end = start + 0.25
                        const peak = start + 0.125

                        // Opacity: Fade in, stay, fade out
                        const opacity = useTransform(
                            smoothProgress,
                            [start - 0.1, start, end - 0.1, end],
                            [0, 1, 1, 0]
                        )
                        
                        // Scale: Slight zoom in
                        const scale = useTransform(
                            smoothProgress,
                            [start, end],
                            [0.8, 1.1]
                        )

                        // Y Position: Slide up slightly
                        const y = useTransform(
                            smoothProgress,
                            [start, end],
                            [50, -50]
                        )

                        return (
                            <motion.div
                                key={step.id}
                                style={{ opacity, scale, y }}
                                className="absolute inset-0 flex items-center justify-center p-20"
                            >
                                <div className="w-full h-full relative">
                                    {/* Icon Container */}
                                    <div className="w-full h-full drop-shadow-2xl overflow-hidden rounded-[32px]">
                                        <img 
                                            src={step.image} 
                                            alt={step.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Scrolling Text Steps */}
          <div className="lg:w-1/2 relative">
             {/* Progress Line Container - Sticky within the column */}
             <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200/50">
                <motion.div 
                    className="w-full bg-slate-900 origin-top"
                    style={{ 
                        height: "100vh", // Visible window height
                        scaleY: smoothProgress, // Fills up as we scroll
                        position: 'sticky',
                        top: 0
                    }}
                />
             </div>

             <div className="flex flex-col">
                {steps.map((step, index) => (
                    <StepTextCard 
                        key={step.id} 
                        step={step} 
                        index={index} 
                        totalSteps={steps.length}
                        scrollYProgress={smoothProgress}
                    />
                ))}
             </div>
          </div>
      </div>
      
      {/* Bottom Gradient Transition to Green (Next Section) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#f0fdf4] pointer-events-none z-20" />
    </motion.section>
  )
}

function StepTextCard({ step, index, totalSteps, scrollYProgress }: { step: any, index: number, totalSteps: number, scrollYProgress: MotionValue<number> }) {
    // Calculate range for this step's "Focus" state
    const stepRange = 1 / totalSteps
    const start = index * stepRange
    const end = start + stepRange
    const center = start + (stepRange / 2)

    // Focus Opacity: Dim when not in center of view
    const opacity = useTransform(
        scrollYProgress,
        [start, center - 0.1, center + 0.1, end],
        [0.2, 1, 1, 0.2]
    )

    // Scale: Subtle pop when active
    const scale = useTransform(
        scrollYProgress,
        [start, center, end],
        [0.95, 1, 0.95]
    )

    // X Shift: Slide in slightly
    const x = useTransform(
        scrollYProgress,
        [start, center, end],
        [20, 0, -20]
    )

    return (
        <div className="h-[100vh] flex items-center justify-center lg:justify-start lg:pl-24 px-6 relative">
            <motion.div 
                style={{ opacity, scale, x }}
                className="max-w-md"
            >
                <div className="flex items-center gap-4 mb-6">
                    <span className={cn("text-6xl font-black opacity-20", step.accent)}>
                        0{step.id}
                    </span>
                    <div className={cn("h-[2px] w-12", step.bgAccent)} />
                </div>
                
                <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    {step.title}
                </h3>
                
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
                    {step.description}
                </p>

                {/* Mobile Visual (Visible only on mobile) */}
                <div className="lg:hidden mt-8 w-full aspect-square bg-white rounded-3xl shadow-lg flex items-center justify-center p-12">
                     <div className={cn("w-full h-full overflow-hidden rounded-2xl", step.accent)}>
                        <img 
                            src={step.image} 
                            alt={step.title}
                            className="w-full h-full object-cover"
                        />
                     </div>
                </div>
            </motion.div>
        </div>
    )
}
