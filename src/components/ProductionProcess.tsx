import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import { PenNib, Wrench, Factory, CheckCircle } from '@phosphor-icons/react'

const steps = [
  {
    id: 1,
    title: "Projektowanie",
    description: "Nasz zespół inżynierów tworzy precyzyjne modele CAD/CAM, optymalizując konstrukcję pod kątem wytrzymałości i kosztów produkcji.",
    icon: <PenNib className="w-full h-full text-blue-500" />,
    color: "bg-blue-50"
  },
  {
    id: 2,
    title: "Prototypowanie",
    description: "Szybkie tworzenie prototypów pozwala na weryfikację założeń projektowych i wprowadzenie niezbędnych korekt przed seryjną produkcją.",
    icon: <Wrench className="w-full h-full text-orange-500" />,
    color: "bg-orange-50"
  },
  {
    id: 3,
    title: "Produkcja",
    description: "Wykorzystujemy nowoczesny park maszynowy CNC oraz zaawansowane technologie spawalnicze, aby zapewnić najwyższą jakość wykonania.",
    icon: <Factory className="w-full h-full text-purple-500" />,
    color: "bg-purple-50"
  },
  {
    id: 4,
    title: "Kontrola Jakości",
    description: "Każdy element przechodzi rygorystyczne testy wytrzymałościowe i pomiary geometryczne, gwarantując zgodność ze specyfikacją.",
    icon: <CheckCircle className="w-full h-full text-green-500" />,
    color: "bg-green-50"
  }
]

export function ProductionProcess() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  // We can track scroll to update active step, or use IntersectionObserver on steps
  // For simplicity and performance, let's use a simple sticky layout where the user scrolls past steps
  // and we update the sticky visual based on viewport position of steps.

  return (
    <section ref={containerRef} className="relative py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Sticky Visual (Left) */}
          <div className="lg:w-1/2 relative">
            <div className="sticky top-24 h-[60vh] rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-2xl flex items-center justify-center p-12">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                            opacity: activeStep === index ? 1 : 0,
                            scale: activeStep === index ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.5 }}
                        className={cn("absolute inset-0 flex items-center justify-center", step.color)}
                    >
                        <div className="w-32 h-32 md:w-48 md:h-48">
                            {step.icon}
                        </div>
                    </motion.div>
                ))}
            </div>
          </div>

          {/* Scrolling Steps (Right) */}
          <div className="lg:w-1/2 py-12 lg:py-0">
            <div className="space-y-32">
                {steps.map((step, index) => (
                    <StepCard 
                        key={step.id} 
                        step={step} 
                        index={index} 
                        onInView={() => setActiveStep(index)} 
                    />
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index, onInView }: { step: any, index: number, onInView: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50% 0px -50% 0px" }}
            onViewportEnter={onInView}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center h-[50vh]"
        >
            <span className="text-6xl font-black text-gray-200 mb-6">0{step.id}</span>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                {step.description}
            </p>
        </motion.div>
    )
}
