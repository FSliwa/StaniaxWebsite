import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string
  rootMargin?: string
}

export function LazyVideo({ src, rootMargin = '200px', ...props }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const isInView = useInView(ref, { once: true, margin: rootMargin as any })

  return (
    <video
      ref={ref}
      src={isInView ? src : undefined}
      {...props}
    />
  )
}
