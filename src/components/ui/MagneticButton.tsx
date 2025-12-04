import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  strength?: number // How strong the magnetic pull is (default: 0.5)
}

export function MagneticButton({ 
  children, 
  className = '', 
  strength = 0.5,
  ...props 
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [relPosition, setRelPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 }
    
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    
    const relX = clientX - left
    const relY = clientY - top
    
    setPosition({ x: x * strength, y: y * strength })
    setRelPosition({ x: relX, y: relY })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative overflow-hidden ${className}`}
      {...props as any}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Spotlight Effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div 
            className="absolute w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_60%)] blur-md"
            style={{ 
                left: relPosition.x, 
                top: relPosition.y 
            }} 
        />
      </motion.div>
    </motion.button>
  )
}
