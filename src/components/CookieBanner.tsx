import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { t, type Lang } from '@/lib/translations'

const STORAGE_KEY = 'staniax-cookie-consent'

type CookieBannerProps = {
  className?: string
  lang?: Lang
}

export function CookieBanner({ className, lang = 'pl' }: CookieBannerProps) {
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
      if (typeof (window as any).updateStaniaxConsent === 'function') {
        ;(window as any).updateStaniaxConsent(true)
      }
    }
    setIsVisible(false)
  }

  const handleReject = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, 'rejected')
      if (typeof (window as any).updateStaniaxConsent === 'function') {
        ;(window as any).updateStaniaxConsent(false)
      }
    }
    setIsVisible(false)
  }

  if (!isVisible) return null

  const rejectLabel =
    lang === 'en'
      ? 'Necessary only'
      : lang === 'de'
        ? 'Nur notwendige'
        : 'Tylko niezbędne'

  const cookiesPath =
    lang === 'en'
      ? '/en/cookie-policy'
      : lang === 'de'
        ? '/de/cookie-richtlinie'
        : '/polityka-cookies'

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
            {t(lang, 'cookieText')}
          </p>
          <p className="text-xs text-white/60">
            {t(lang, 'cookieSubtext')}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-slate-950 hover:bg-white/90 font-bold"
              onClick={handleAccept}
            >
              {t(lang, 'cookieAccept')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/30 bg-transparent text-white hover:bg-white/10"
              onClick={handleReject}
            >
              {rejectLabel}
            </Button>
          </div>
          <Link
            to={cookiesPath}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-white text-center sm:text-right"
          >
            {t(lang, 'cookieMore')}
          </Link>
        </div>
      </div>
    </div>
  )
}
