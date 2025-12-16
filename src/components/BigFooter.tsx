import { MagneticButton } from '@/components/ui/MagneticButton'
import { ArrowUpRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export function BigFooter() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-black text-white pt-24 pb-12 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Top Section: Company Info & Stats */}
                <div className="mb-16 border-b border-white/10 pb-12">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">STANIAX – METALIZACJA PRÓŻNIOWA</h2>
                            <p className="text-3xl text-gray-400 mb-6">LAKIEROWANIE TWORZYW, SZKŁA, METALI</p>
                            <p className="text-lg font-medium text-blue-400 mb-8">SPECJALISTYCZNE POWLEKANIE METALICZNE</p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <MagneticButton className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-gray-200 transition-colors">
                                    BEZPŁATNA KONSULTACJA
                                </MagneticButton>
                                <MagneticButton className="border border-white text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-white/10 transition-colors">
                                    WYCEŃ PROJEKT <ArrowUpRight weight="bold" />
                                </MagneticButton>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 text-center sm:text-left">
                            <div>
                                <span className="block text-4xl font-black text-white mb-1">30+</span>
                                <span className="text-xs uppercase tracking-widest text-gray-500">LAT DOŚWIADCZEŃ</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-black text-white mb-1">2500+</span>
                                <span className="text-xs uppercase tracking-widest text-gray-500">ZREALIZOWANYCH PROJEKTÓW</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-black text-white mb-1">24H</span>
                                <span className="text-xs uppercase tracking-widest text-gray-500">CZAS REAKCJI</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Services & Contact */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 text-sm lg:text-base tracking-wider text-gray-400 font-mono">

                        {/* Column 1: Services */}
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-white font-bold mb-4 text-lg">OFERTA:</h4>
                                <ul className="space-y-3">
                                    <li className="hover:text-white transition-colors cursor-pointer">1. METALIZACJA PRÓŻNIOWA</li>
                                    <li className="hover:text-white transition-colors cursor-pointer">2. LAKIEROWANIE DETALI Z TWORZYW SZTUCZNYCH</li>
                                    <li className="hover:text-white transition-colors cursor-pointer">3. LAKIEROWANIE DETALI ZE SZKŁA I CERAMIKI</li>
                                    <li className="hover:text-white transition-colors cursor-pointer">4. ODBLASKI W METALIZACJI</li>
                                    <li className="hover:text-white transition-colors cursor-pointer">5. GALERIA</li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 2: Addresses */}
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-white font-bold mb-4 text-lg">DANE ADRESOWE:</h4>
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-white font-semibold mb-1">SIEDZIBA :</p>
                                        <p>POLSKA, WARSZAWA 00-132,</p>
                                        <p>UL. GRZYBWOSKA 5 A <a href="https://maps.google.com/?q=Grzybowska+5A+Warszawa" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 ml-1 text-xs">(MAPA-NAWIGACJA)</a></p>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold mb-1">ZAKŁAD USŁUGOWY :</p>
                                        <p>JÓZEFÓW 05-420,</p>
                                        <p>UL. WYSZYŃSKIEGO 116 A <a href="https://maps.google.com/?q=Wyszynskiego+116A+Jozefow" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 ml-1 text-xs">(MAPA-NAWIGACJA)</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Contact & Hours */}
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-white font-bold mb-4 text-lg">KONTAKT:</h4>
                                <p className="mb-2">TEL: <a href="tel:+48882488844" className="text-white hover:text-blue-400 transition-colors font-semibold">( +48 882 488 844 )</a></p>
                                <p>EMAIL: <a href="mailto:metalizacja@staniax.pl" className="text-white hover:text-blue-400 transition-colors font-semibold">metalizacja@staniax.pl</a></p>
                            </div>

                            <div>
                                <h4 className="text-white font-bold mb-4 text-lg">GODZINY OTWARCIA:</h4>
                                <p className="mb-1">PONIEDZIAŁEK- PIĄTEK 7.00. - 17.00</p>
                                <p>SOBOTA, NIEDZIELA - ZAMKNIĘTE</p>
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
                        <p>DESIGNED & DEVELOPED BY FILIP ŚLIWA</p>
                    </div>
                </div>

            </div>
        </footer>
    )
}
