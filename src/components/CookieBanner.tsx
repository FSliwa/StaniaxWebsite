import { useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { t, type Lang } from '@/lib/translations'
import { hasDecision, readConsent, revokeConsent, saveConsent, subscribe } from '@/lib/consent'

type CookieBannerProps = {
  className?: string
  lang?: Lang
}

const legalPath = (lang: Lang, slug: 'cookies' | 'privacy') => {
  const map = {
    pl: { cookies: '/polityka-cookies', privacy: '/polityka-prywatnosci' },
    en: { cookies: '/en/cookie-policy', privacy: '/en/privacy-policy' },
    de: { cookies: '/de/cookie-richtlinie', privacy: '/de/datenschutzerklaerung' }
  } as const
  return map[lang][slug]
}

export function CookieBanner({ className, lang = 'pl' }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [analytics, setAnalytics] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    // Baner pojawia się tylko wtedy, gdy nie ma decyzji dla bieżącej wersji polityki.
    if (!hasDecision()) setIsVisible(true)

    // Link "Ustawienia cookies" w stopce otwiera ten sam panel (art. 7 ust. 3 RODO).
    const openFromAnywhere = () => {
      setAnalytics(readConsent()?.analytics ?? false)
      setShowDetails(true)
      setIsVisible(true)
    }
    window.addEventListener('staniax:open-consent-settings', openFromAnywhere)
    const unsubscribe = subscribe(() => {})
    return () => {
      window.removeEventListener('staniax:open-consent-settings', openFromAnywhere)
      unsubscribe()
    }
  }, [])

  const close = useCallback(() => {
    setIsVisible(false)
    setShowDetails(false)
  }, [])

  const acceptAll = () => {
    saveConsent(true)
    close()
  }

  const rejectAll = () => {
    // Świadoma odmowa również jest decyzją — zapisujemy ją, żeby nie pytać w kółko.
    if (readConsent()?.analytics) revokeConsent()
    saveConsent(false)
    close()
  }

  const saveChoice = () => {
    if (!analytics && readConsent()?.analytics) revokeConsent()
    saveConsent(analytics)
    close()
  }

  if (!isVisible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={t(lang, 'cookieTitle')}
      className={cn(
        'fixed bottom-4 left-1/2 z-[70] w-[min(94vw,34rem)] -translate-x-1/2 rounded-3xl border border-white/20 bg-slate-900/97 p-6 text-white shadow-2xl backdrop-blur-md',
        className
      )}
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70">
            {t(lang, 'cookieTitle')}
          </p>
          <p className="text-sm font-medium leading-relaxed text-white/90">{t(lang, 'cookieText')}</p>
        </div>

        {showDetails && (
          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">{t(lang, 'cookieNecessaryTitle')}</p>
                <p className="text-xs leading-relaxed text-white/60">{t(lang, 'cookieNecessaryDesc')}</p>
              </div>
              <span className="shrink-0 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/70">
                {t(lang, 'cookieAlwaysOn')}
              </span>
            </div>

            <label className="flex cursor-pointer items-start justify-between gap-4 border-t border-white/10 pt-3">
              <span>
                <span className="block text-sm font-semibold text-white">{t(lang, 'cookieAnalyticsTitle')}</span>
                <span className="block text-xs leading-relaxed text-white/60">{t(lang, 'cookieAnalyticsDesc')}</span>
              </span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-blue-500"
              />
            </label>
          </div>
        )}

        {/* Akceptacja i odmowa mają identyczną wagę wizualną — wymóg wytycznych
            EDPB 03/2022 dotyczących zwodniczych interfejsów. */}
        <div className="grid gap-3 sm:grid-cols-2">
          <Button size="lg" className="w-full bg-white text-slate-950 hover:bg-white/90" onClick={acceptAll}>
            {t(lang, 'cookieAcceptAll')}
          </Button>
          <Button size="lg" className="w-full bg-white text-slate-950 hover:bg-white/90" onClick={rejectAll}>
            {t(lang, 'cookieRejectAll')}
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
          {showDetails ? (
            <button onClick={saveChoice} className="font-semibold text-white underline underline-offset-4 hover:text-white/80">
              {t(lang, 'cookieSaveChoice')}
            </button>
          ) : (
            <button
              onClick={() => {
                setAnalytics(readConsent()?.analytics ?? false)
                setShowDetails(true)
              }}
              className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
            >
              {t(lang, 'cookieCustomise')}
            </button>
          )}
          <a href={legalPath(lang, 'cookies')} className="text-white/70 underline underline-offset-4 hover:text-white">
            {t(lang, 'cookiePolicyLink')}
          </a>
          <a href={legalPath(lang, 'privacy')} className="text-white/70 underline underline-offset-4 hover:text-white">
            {t(lang, 'privacyPolicyLink')}
          </a>
        </div>
      </div>
    </div>
  )
}
