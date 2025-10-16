import { motion, useInView } from 'framer-motion'
import { useRef, forwardRef } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  'data-theme'?: string
}

export const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  ({ children, className, id, 'data-theme': dataTheme }, externalRef) => {
    const internalRef = useRef(null)
    const ref = (externalRef as React.RefObject<HTMLElement>) || internalRef
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }

    return (
      <motion.section
        id={id}
        ref={ref}
        className={className}
        data-theme={dataTheme}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.section>
    )
  }
)

AnimatedSection.displayName = 'AnimatedSection'
