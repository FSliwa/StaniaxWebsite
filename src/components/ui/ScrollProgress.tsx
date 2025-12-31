import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollableDistance = documentHeight - windowHeight
      const currentScroll = window.scrollY
      const progress = scrollableDistance > 0 ? currentScroll / scrollableDistance : 0
      setScrollProgress(progress)
    }

    updateScrollProgress()
    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    window.addEventListener('resize', updateScrollProgress, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      window.removeEventListener('resize', updateScrollProgress)
    }
  }, [])

  const scaleX = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[9999]"
      style={{ scaleX }}
    />
  )
}
