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
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold mb-6">Masz projekt w głowie?</h3>
            <p className="text-gray-400 text-lg mb-8">
              Skontaktuj się z nami, aby omówić szczegóły. Pomożemy Ci przejść od pomysłu do gotowego produktu.
            </p>
            <MagneticButton className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-gray-200 transition-colors">
              Napisz do nas <ArrowUpRight weight="bold" />
            </MagneticButton>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24 text-sm font-mono tracking-wider text-gray-400">
            <div className="space-y-4">
              <p className="text-white font-bold mb-4">Social</p>
              <a href="#" className="block hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="block hover:text-white transition-colors">Instagram</a>
              <a href="#" className="block hover:text-white transition-colors">Facebook</a>
            </div>
            <div className="space-y-4">
              <p className="text-white font-bold mb-4">Legal</p>
              <a href="#" className="block hover:text-white transition-colors">Polityka Prywatności</a>
              <a href="#" className="block hover:text-white transition-colors">Regulamin</a>
              <a href="#" className="block hover:text-white transition-colors">Cookies</a>
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
