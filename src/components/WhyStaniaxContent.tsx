import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Users, Shield, Wrench } from '@phosphor-icons/react'

// Images from Services section (will be passed as props or imported)
import serviceImg1 from '@/assets/482dc07a-e7ec-4a67-a180-35c9f97aa5e3.JPG'
import serviceImg2 from '@/assets/4b131dc0-12bf-4aee-bca5-bee6a42b2e68.JPG'
import serviceImg3 from '@/assets/688dc033-2f1e-4b6e-94e4-728b7278993a.JPG'

export function WhyStaniaxContent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <section ref={containerRef} className="relative bg-white">
      <div className="flex flex-col lg:flex-row">
        
        {/* Left: Sticky Image Container */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen sticky top-0 overflow-hidden">
          <div className="relative w-full h-full">
            {/* Image 1 */}
            <motion.div 
              style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
              className="absolute inset-0"
            >
              <img src={serviceImg1} alt="Wsparcie Techniczne" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Image 2 */}
            <motion.div 
              style={{ opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]) }}
              className="absolute inset-0"
            >
              <img src={serviceImg2} alt="Jakość Produktów" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Image 3 */}
            <motion.div 
              style={{ opacity: useTransform(scrollYProgress, [0.6, 0.9], [0, 1]) }}
              className="absolute inset-0"
            >
              <img src={serviceImg3} alt="Personalizacja" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </div>
        </div>

        {/* Right: Scrolling Content */}
        <div className="w-full lg:w-1/2 bg-white">
          
          {/* Section 1 */}
          <div className="min-h-screen flex flex-col justify-center px-12 lg:px-24 py-24">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-8">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-4xl lg:text-5xl font-black uppercase mb-6 text-gray-900 tracking-tight">
              WSPARCIE TECHNICZNE
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Towarzyszymy klientowi w wyborze odpowiedniego rozwiązania dla jego potrzeb, oferując również techniczny serwis posprzedażny. Nasz zespół inżynierów jest dostępny na każdym etapie projektu.
            </p>
          </div>

          {/* Section 2 */}
          <div className="min-h-screen flex flex-col justify-center px-12 lg:px-24 py-24">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-8">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-4xl lg:text-5xl font-black uppercase mb-6 text-gray-900 tracking-tight">
              JAKOŚĆ PRODUKTÓW
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Innowacyjne pomysły i szczególna uwaga na wpływ środowiskowy produkcji przemysłowej to misja STANIAX. Gwarantujemy najwyższe standardy potwierdzone certyfikatem ISO 9001:2015.
            </p>
          </div>

          {/* Section 3 */}
          <div className="min-h-screen flex flex-col justify-center px-12 lg:px-24 py-24">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-8">
              <Wrench className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-4xl lg:text-5xl font-black uppercase mb-6 text-gray-900 tracking-tight">
              PERSONALIZACJA
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Towarzyszymy klientowi podczas konfiguracji produktu, aby zidentyfikować najlepsze ustawienia wydajności. Każde rozwiązanie jest szyte na miarę specyficznych wymagań Twojej branży.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
