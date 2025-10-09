import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const STORAGE_KEY = 'staniax-cookie-consent'

type CookieBannerProps = {
  className?: string
}

export function CookieBanner({ className }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const consent = window.localStorage.getItem(STORAGE_KEY)
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, 'accepted')
    }
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Komunikat o plikach cookies"
      className={cn(
        'fixed bottom-6 left-1/2 z-50 w-[min(90vw,32rem)] -translate-x-1/2 rounded-3xl border border-white/40 bg-slate-900/95 p-6 text-white shadow-2xl backdrop-blur-md',
        className
      )}
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70">Cookies</p>
          <p className="text-base font-medium text-white/90">
            Korzystamy z plików cookies, aby personalizować treści, analizować ruch oraz zapewnić najwyższą jakość usług w naszym serwisie.
          </p>
          <p className="text-xs text-white/60">
            Kontynuując korzystanie z witryny, akceptujesz politykę cookies STANIAX. Zawsze możesz zmienić ustawienia w swojej przeglądarce.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-white text-slate-950 hover:bg-white/90"
            onClick={handleAccept}
          >
            Akceptuję
          </Button>
          <a
            href="/polityka-cookies"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70 transition-colors hover:text-white"
          >
            Dowiedz się więcej
          </a>
        </div>
      </div>
    </div>
  )
}
