import { MagneticButton } from '@/components/ui/MagneticButton'
import { ArrowUpRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export function BigFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 text-sm lg:text-base tracking-wider text-gray-400 font-mono">
            
            {/* Column 1: Addresses */}
            <div className="space-y-8">
                <div>
                    <h4 className="text-white font-bold mb-2">DANE ADRESOWE:</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="text-white font-semibold">SIEDZIBA :</p>
                            <p>POLSKA, WARSZAWA 00-132,</p>
                            <p>UL. GRZYBOWSKA 5 A <a href="#" className="text-blue-500 hover:text-blue-400 ml-2">(MAPA-NAWIGACJA)</a></p>
                        </div>
                        <div>
                            <p className="text-white font-semibold">ZAKŁAD USŁUGOWY :</p>
                            <p>JÓZEFÓW 05-420,</p>
                            <p>UL. WYSZYŃSKIEGO 116 A <a href="#" className="text-blue-500 hover:text-blue-400 ml-2">(MAPA-NAWIGACJA)</a></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Column 2: Contact & Hours */}
            <div className="space-y-8">
                <div>
                    <h4 className="text-white font-bold mb-2">KONTAKT:</h4>
                    <p>TEL: <a href="tel:+48882488844" className="hover:text-white transition-colors">( +48 882 488 844 )</a></p>
                    <p>EMAIL: <a href="mailto:metalizacja@staniax.pl" className="hover:text-white transition-colors">metalizacja@staniax.pl</a></p>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-2">GODZINY OTWARCIA:</h4>
                    <p>PONIEDZIAŁEK - PIĄTEK: 7.00 - 17.00</p>
                    <p>SOBOTA, NIEDZIELA: ZAMKNIĘTE</p>
                </div>

                <div className="pt-4">
                    <MagneticButton className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-gray-200 transition-colors w-fit">
                        Napisz do nas <ArrowUpRight weight="bold" />
                    </MagneticButton>
                </div>
            </div>

          </div>
        </div>

        {/* Big Type */}
        <div className="relative border-t border-white/10 pt-12">
          <motion.h1 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15vw] leading-[0.8] font-black tracking-tighter text-center md:text-left mix-blend-difference select-none pointer-events-none"
          >
            STANIAX
          </motion.h1>
          
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-xs font-mono text-gray-500 uppercase tracking-widest">
            <p>&copy; {currentYear} Staniax. All rights reserved.</p>
            <p>Designed & Developed by AI</p>
          </div>
        </div>

      </div>
    </footer>
  )
}
