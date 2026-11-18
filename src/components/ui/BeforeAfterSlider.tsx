import { useState } from 'react'
import { ArrowsLeftRight } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  afterVideo?: string
  beforeAlt: string
  afterAlt: string
  beforeLabel?: string
  afterLabel?: string
  ariaLabel?: string
  className?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  afterVideo,
  beforeAlt,
  afterAlt,
  beforeLabel = 'PRZED',
  afterLabel = 'PO REGENERACJI',
  ariaLabel = 'Suwak porównania przed i po metalizacji',
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)

  return (
    <div
      className={cn(
        'relative select-none overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-lg aspect-[16/10]',
        className
      )}
    >
      {/* After Image or Video (Full width base layer) */}
      {afterVideo ? (
        <video
          src={afterVideo}
          autoPlay
          loop
          muted
          playsInline
          aria-label={afterAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <img
          src={afterImage}
          alt={afterAlt}
          loading="lazy"
          width={960}
          height={600}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Before Image (Clipped top layer) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          loading="lazy"
          width={960}
          height={600}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-4 top-4 z-20 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-white/15">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 z-20 rounded-full bg-blue-600/90 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-blue-300/30">
        {afterLabel}
      </span>

      {/* Visual Divider Line & Handle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 z-20 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-blue-700 shadow-xl">
          <ArrowsLeftRight className="h-5 w-5" weight="bold" />
        </div>
      </div>

      {/* Accessible Native Range Input Overlay (supports mouse, touch, and keyboard Left/Right arrows) */}
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        aria-label={ariaLabel}
        onChange={(e) => {
          const val = Number(e.target.value)
          setPosition(val)
        }}
        className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0 focus-visible:opacity-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
      />
    </div>
  )
}
