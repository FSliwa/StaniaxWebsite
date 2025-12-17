import { useRef, useState, MouseEvent } from 'react'
import { motion, useScroll, useTransform, MotionValue, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ArrowRight, Play, Pause } from '@phosphor-icons/react'
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

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative h-[400vh] bg-white z-20 -mt-[20vh] rounded-t-[3rem] shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.15)] [mask-image:linear-gradient(to_bottom,transparent,black_10%)] overflow-hidden"
        >
            {/* Interactive Noise Overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 mix-blend-multiply"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    maskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, transparent, black)`,
                    WebkitMaskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, transparent, black)`
                }}
            />

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

    // Magnetic Play Button Logic
    const cardRef = useRef<HTMLDivElement>(null)
    const [isPlaying, setIsPlaying] = useState(true)
    const videoRef = useRef<HTMLVideoElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const [isHoveringVideo, setIsHoveringVideo] = useState(false)

    const handleVideoMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
    }

    const togglePlay = () => {
        if (!videoRef.current) return
        if (isPlaying) {
            videoRef.current.pause()
        } else {
            videoRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }

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
            <div
                ref={cardRef}
                className={cn(
                    "relative w-full h-full rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl flex flex-col md:flex-row",
                    card.theme === 'dark' ? "bg-zinc-900 text-white" : "bg-white text-black"
                )}
                onMouseMove={card.type === 'video' ? handleVideoMouseMove : undefined}
                onMouseEnter={() => setIsHoveringVideo(true)}
                onMouseLeave={() => setIsHoveringVideo(false)}
                onClick={card.type === 'video' ? togglePlay : undefined}
            >

                {/* Media Background (Full Cover) */}
                <div className="absolute inset-0 z-0 cursor-none">
                    {card.type === 'video' ? (
                        <>
                            <video
                                ref={videoRef}
                                src={card.media}
                                autoPlay muted loop playsInline
                                className="w-full h-full object-cover"
                            />
                            {/* Magnetic Play Button */}
                            <motion.div
                                style={{
                                    x: mouseX,
                                    y: mouseY,
                                    opacity: isHoveringVideo ? 1 : 0
                                }}
                                className="absolute top-0 left-0 w-20 h-20 -ml-10 -mt-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 z-50 pointer-events-none transition-opacity duration-300"
                            >
                                {isPlaying ? (
                                    <Pause className="w-8 h-8 text-white fill-current" weight="fill" />
                                ) : (
                                    <Play className="w-8 h-8 text-white fill-current ml-1" weight="fill" />
                                )}
                            </motion.div>
                        </>
                    ) : (
                        <img
                            src={card.media}
                            alt={card.title}
                            className="w-full h-full object-cover"
                        />
                    )}
                    {/* Overlay Gradient */}
                    <div className={cn(
                        "absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r opacity-80 pointer-events-none",
                        card.theme === 'dark'
                            ? "from-black via-black/50 to-transparent"
                            : "from-white via-white/50 to-transparent"
                    )} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end md:justify-center p-8 md:p-16 h-full md:w-1/2 pointer-events-none">
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
                        "flex items-center gap-3 text-sm font-bold tracking-widest uppercase group w-fit pointer-events-auto",
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
