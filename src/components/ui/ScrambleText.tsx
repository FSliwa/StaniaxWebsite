import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

const CHARS = "-_[]{}—=+*^?#________"

interface ScrambleTextProps {
    text: string
    className?: string
    delay?: number
    duration?: number
}

export function ScrambleText({ text, className, delay = 0, duration = 1000 }: ScrambleTextProps) {
    const [display, setDisplay] = useState(text)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [started, setStarted] = useState(false)

    useEffect(() => {
        if (isInView && !started) {
            const timeout = setTimeout(() => {
                setStarted(true)
                let step = 0
                const totalSteps = 20 // Number of scramble steps
                const intervalTime = duration / totalSteps

                const interval = setInterval(() => {
                    step++
                    if (step >= totalSteps) {
                        setDisplay(text)
                        clearInterval(interval)
                    } else {
                        // Scramble logic: keep first 'progress' characters correct, scramble the rest
                        const progress = Math.floor((step / totalSteps) * text.length)
                        const scrambled = text
                            .split('')
                            .map((char, index) => {
                                if (index < progress) return char
                                if (char === ' ') return ' '
                                return CHARS[Math.floor(Math.random() * CHARS.length)]
                            })
                            .join('')
                        setDisplay(scrambled)
                    }
                }, intervalTime)

                return () => clearInterval(interval)
            }, delay)

            return () => clearTimeout(timeout)
        }
    }, [isInView, started, text, delay, duration])

    return (
        <span ref={ref} className={className}>
            {display}
        </span>
    )
}
