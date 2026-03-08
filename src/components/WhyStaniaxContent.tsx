import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import { t, type Lang } from '@/lib/translations'

// Assets
import metallizationVideo from '@/assets/metallization-machine.mp4'

export function WhyStaniaxContent({ lang = 'pl' as Lang }: { lang?: Lang }) {
    const sectionRef = useRef<HTMLDivElement>(null)
    const inView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section ref={sectionRef} className="relative bg-white">
            {/* Subtle top separator */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-10">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            </div>

            {/* Content */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-10 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden shadow-lg"
                >
                    <div className="relative flex flex-col md:flex-row min-h-[420px] md:min-h-[520px] bg-zinc-900 text-white">

                        {/* Video Background */}
                        <div className="absolute inset-0 z-0">
                            <video
                                src={metallizationVideo}
                                autoPlay muted loop playsInline
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                        </div>

                        {/* Text Content */}
                        <div className="relative z-10 flex flex-col justify-end md:justify-center p-8 md:p-16 h-full md:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            >
                                <div className="flex items-center gap-4 mb-6 opacity-70">
                                    <span className="text-sm font-mono tracking-widest uppercase">01</span>
                                    <div className="h-px w-12 bg-white" />
                                    <span className="text-sm font-mono tracking-widest uppercase">{t(lang, 'whyLabel')}</span>
                                </div>

                                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase leading-[0.9]">
                                    {t(lang, 'whyHeading')}
                                </h2>

                                <p className="text-lg md:text-xl font-medium leading-relaxed max-w-md opacity-90">
                                    {t(lang, 'whyDesc')}
                                </p>
                            </motion.div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}
