import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

// Assets
import precisionImg from '@/assets/precision_turbine.webp'
import technologyImg from '@/assets/technology_robot.webp'
import innovationImg from '@/assets/innovation_material.webp'
import metallizationVideo from '@/assets/metallization-machine.mp4'

interface CardData {
    id: number
    title: string
    subtitle: string
    description: string
    media: string
    type: 'image' | 'video'
    theme: 'dark' | 'light'
}

const cards: CardData[] = [
    {
        id: 1,
        title: "PRECYZJA",
        subtitle: "Standardy Lotnicze",
        description: "Nasze powłoki spełniają rygorystyczne normy AS9100. Precyzja na poziomie mikronów to dla nas standard, nie wyzwanie.",
        media: metallizationVideo,
        type: 'video',
        theme: 'dark'
    }
]

export function WhyStaniaxContent() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-white">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                <div className="relative w-full h-full max-w-[1600px] px-4 sm:px-10 py-10 md:py-20">
                    {cards.map((card, index) => (
                        <Card
                            key={card.id}
                            card={card}
                            index={index}
                            total={cards.length}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function Card({ card, index, total, scrollYProgress }: { card: CardData, index: number, total: number, scrollYProgress: MotionValue<number> }) {
    // Logic for stacking:
    // Card 1: 0 - 0.33 (Visible -> Scales Down)
    // Card 2: 0.33 - 0.66 (Enters -> Visible -> Scales Down)
    // Card 3: 0.66 - 1.0 (Enters -> Visible)

    const stepSize = 1 / total
    const start = index * stepSize
    const end = start + stepSize

    // Entrance (Y position)
    // First card starts at 0. Others start at 100vh and slide up.
    const y = useTransform(
        scrollYProgress,
        [start - 0.1, start], // Start sliding in slightly before its "turn"
        ["100%", "0%"]
    )

    // Scale (Exit effect)
    // When the NEXT card starts entering, this card scales down.
    const nextStart = end
    const scale = useTransform(
        scrollYProgress,
        [nextStart - 0.1, nextStart + 0.1], // As next card enters
        [1, 0.9]
    )

    // Opacity (Darken effect)
    const brightness = useTransform(
        scrollYProgress,
        [nextStart - 0.1, nextStart + 0.1],
        [1, 0.5]
    )

    // For the very first card, we don't want it to slide in from bottom, it should be there.
    // But we want it to scale down when card 2 comes.
    const isFirst = index === 0
    const finalY = isFirst ? "0%" : y

    return (
        <motion.div
            style={{
                y: finalY,
                scale: index !== total - 1 ? scale : 1, // Last card doesn't scale down
                filter: `brightness(${index !== total - 1 ? brightness : 1})`, // Last card doesn't darken
                zIndex: index
            }}
            className="absolute inset-0 w-full h-full p-4 md:p-10 flex items-center justify-center"
        >
            <div className={cn(
                "relative w-full h-full rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl flex flex-col md:flex-row",
                card.theme === 'dark' ? "bg-zinc-900 text-white" : "bg-white text-black"
            )}>

                {/* Media Background (Full Cover) */}
                <div className="absolute inset-0 z-0">
                    {card.type === 'video' ? (
                        <video
                            src={card.media}
                            autoPlay muted loop playsInline
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <img
                            src={card.media}
                            alt={card.title}
                            className="w-full h-full object-cover"
                        />
                    )}
                    {/* Overlay Gradient */}
                    <div className={cn(
                        "absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r opacity-80",
                        card.theme === 'dark'
                            ? "from-black via-black/50 to-transparent"
                            : "from-white via-white/50 to-transparent"
                    )} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end md:justify-center p-8 md:p-16 h-full md:w-1/2">
                    <div className="flex items-center gap-4 mb-6 opacity-70">
                        <span className="text-sm font-mono tracking-widest uppercase">0{card.id}</span>
                        <div className={cn("h-px w-12", card.theme === 'dark' ? "bg-white" : "bg-black")} />
                        <span className="text-sm font-mono tracking-widest uppercase">{card.subtitle}</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase leading-[0.9]">
                        {card.title}
                    </h2>

                    <p className="text-lg md:text-xl font-medium leading-relaxed max-w-md opacity-90 mb-10">
                        {card.description}
                    </p>

                    <button className={cn(
                        "flex items-center gap-3 text-sm font-bold tracking-widest uppercase group w-fit",
                        card.theme === 'dark' ? "text-white" : "text-black"
                    )}>
                        Więcej informacji
                        <div className={cn(
                            "w-8 h-8 rounded-full border flex items-center justify-center transition-all group-hover:w-12",
                            card.theme === 'dark' ? "border-white/30 bg-white/10" : "border-black/30 bg-black/5"
                        )}>
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </button>
                </div>

            </div>
        </motion.div>
    )
}
