import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { t, type Lang } from '@/lib/translations'

export const COOKIE_STORAGE_KEY = 'staniax-cookie-consent'
export const OPEN_COOKIE_SETTINGS_EVENT = 'staniax:open-cookie-settings'

export function openCookieSettings() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS_EVENT))
  }
}

function clearAnalyticsCookies() {
  if (typeof document === 'undefined' || typeof window === 'undefined') return
  const host = window.location.hostname
  const rootDomain = host.replace(/^www\./, '')
  const domains = ['', host, `.${host}`, rootDomain, `.${rootDomain}`]
  const cookies = document.cookie ? document.cookie.split(';') : []
  for (const rawCookie of cookies) {
    const eqIdx = rawCookie.indexOf('=')
    const name = (eqIdx > -1 ? rawCookie.slice(0, eqIdx) : rawCookie).trim()
    if (name === '_ga' || name.startsWith('_ga_') || name === '_gid' || name === '_gat') {
      for (const d of domains) {
        const domainAttr = d ? `; domain=${d}` : ''
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; Max-Age=0; path=/${domainAttr}; SameSite=Lax`
      }
    }
  }
}

type CookieBannerProps = {
  className?: string
  lang?: Lang
}

export function CookieBanner({ className, lang = 'pl' }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const consent = window.localStorage.getItem(COOKIE_STORAGE_KEY)
      if (!consent) {
        setIsVisible(true)
      }
    } catch {
      setIsVisible(true)
    }

    const handleOpen = () => setIsVisible(true)
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpen)
    return () => {
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpen)
    }
  }, [])

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(COOKIE_STORAGE_KEY, 'accepted')
      } catch {}
      if (typeof (window as any).updateStaniaxConsent === 'function') {
        ;(window as any).updateStaniaxConsent(true)
      }
    }
    setIsVisible(false)
  }

  const handleReject = () => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(COOKIE_STORAGE_KEY, 'rejected')
      } catch {}
      if (typeof (window as any).updateStaniaxConsent === 'function') {
        ;(window as any).updateStaniaxConsent(false)
      }
      clearAnalyticsCookies()
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

  const dialogLabel =
    lang === 'en'
      ? 'Cookie consent settings'
      : lang === 'de'
        ? 'Cookie-Einstellungen'
        : 'Komunikat o plikach cookies'

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
      aria-label={dialogLabel}
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
