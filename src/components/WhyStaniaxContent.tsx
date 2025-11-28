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
    <section ref={containerRef} className="relative bg-[#E5E5E5] py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        
        {/* Top Bar with Labels */}
        <div className="flex justify-between items-center mb-20 text-xs font-medium tracking-widest uppercase text-gray-500 border-t border-gray-300 pt-6">
            <span>STANIAX.1</span>
            <div className="flex gap-2">
                <div className="w-2 h-2 bg-black rotate-45" />
                <div className="w-2 h-2 bg-black rotate-45" />
            </div>
            <div className="flex gap-8">
                <span>Technologia</span>
                <span>Twoja Przyszłość</span>
            </div>
        </div>

        {/* Massive Headline */}
        <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] leading-[0.85] font-black tracking-tighter text-black z-10 relative pointer-events-none text-center"
        >
            POZNAJ<br />STANIAX
        </motion.h2>

        {/* Content Grid */}
        <div className="relative h-[150vh] -top-20">
            
            {/* Overlapping Images - Parallax */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                
                {/* Back Image (Larger - Left Side) */}
                <motion.div 
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
                    className="absolute top-0 left-[2%] w-[55vw] aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden shadow-2xl z-10"
                >
                    <img src={serviceImg1} alt="Staniax Tech" className="w-full h-full object-cover" />
                    <div className="absolute bottom-8 left-8 text-white">
                        <p className="text-4xl font-bold tracking-tighter">Atmos<span className="text-sm align-top opacity-70">AE.1</span></p>
                    </div>
                </motion.div>

                {/* Front Image (Overlapping - Right Side) */}
                <motion.div 
                    style={{ y: useTransform(scrollYProgress, [0, 1], [100, -200]) }}
                    className="absolute top-[35%] right-[5%] w-[50vw] aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-2xl z-20 border-4 border-[#E5E5E5]"
                >
                    <img src={serviceImg2} alt="Staniax Process" className="w-full h-full object-cover" />
                    <div className="absolute bottom-8 left-8 text-white">
                        <p className="text-4xl font-bold tracking-tighter">Panos<span className="text-sm align-top opacity-70">AE.1</span></p>
                    </div>
                </motion.div>

            </div>

            {/* Right Text Column */}
            <div className="absolute top-[5%] right-0 w-[30vw] z-30">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-gray-500">
                        Dla podróży bliskich i dalekich.
                    </h3>
                    <p className="text-2xl font-medium leading-relaxed text-gray-800">
                        Niezależnie od tego, dokąd zmierzasz, każda powłoka Staniax jest zaprojektowana tak, aby uczynić proces łatwiejszym, a cel jeszcze lepszym.
                    </p>
                    <p className="mt-8 text-gray-600 leading-relaxed">
                        Łączymy inżynierię precyzyjną z estetyką, tworząc rozwiązania, które nie tylko chronią, ale i inspirują.
                    </p>
                </motion.div>
            </div>

        </div>

      </div>
    </section>
  )
}
