// Jedno źródło prawdy o zgodzie na cookies.
//
// Założenie: żaden skrypt analityczny nie ładuje się, dopóki użytkownik nie
// wyrazi zgody wyraźnym działaniem. Art. 398 Prawa komunikacji elektronicznej
// wymaga zgody UPRZEDNIEJ, a art. 7 ust. 3 RODO — możliwości jej wycofania
// równie łatwo, jak została udzielona (stąd publiczne `openSettings`).

export const CONSENT_STORAGE_KEY = 'staniax-consent'

// Podbicie wersji unieważnia wcześniejsze zgody i ponownie pokazuje baner.
// Zrób to przy każdej zmianie zakresu przetwarzania lub polityki prywatności.
export const CONSENT_VERSION = 1

const GA_MEASUREMENT_ID = 'G-K4E0LDH848'

export type ConsentState = {
  version: number
  /** Zawsze true — bez tych plików serwis nie działa, więc nie podlegają zgodzie. */
  necessary: true
  analytics: boolean
  /** Dowód, kiedy i na co udzielono zgody (rozliczalność, art. 7 ust. 1 RODO). */
  timestamp: string
}

type Listener = (state: ConsentState | null) => void

const listeners = new Set<Listener>()
let cached: ConsentState | null | undefined

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function gtag(...args: unknown[]) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(args)
}

/** Odczytuje zapisaną zgodę. Zwraca null, gdy brak lub gdy pochodzi ze starszej wersji polityki. */
export function readConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null
  if (cached !== undefined) return cached

  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return (cached = null)
    const parsed = JSON.parse(raw) as ConsentState
    if (parsed?.version !== CONSENT_VERSION) return (cached = null)
    cached = { ...parsed, necessary: true }
    return cached
  } catch {
    return (cached = null)
  }
}

export function hasDecision(): boolean {
  return readConsent() !== null
}

export function analyticsAllowed(): boolean {
  return readConsent()?.analytics === true
}

/** Zapisuje decyzję użytkownika i natychmiast stosuje ją do skryptów zewnętrznych. */
export function saveConsent(analytics: boolean): ConsentState {
  const state: ConsentState = {
    version: CONSENT_VERSION,
    necessary: true,
    analytics,
    timestamp: new Date().toISOString()
  }

  cached = state
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state))
  } catch {
    // Prywatny tryb przeglądarki — zgoda obowiązuje wtedy tylko na czas sesji.
  }

  applyConsent(state)
  listeners.forEach((fn) => fn(state))
  return state
}

/** Wycofanie zgody: czyści decyzję i usuwa ciasteczka GA. */
export function revokeConsent() {
  cached = null
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY)
  } catch {
    /* ignorujemy */
  }
  gtag('consent', 'update', { analytics_storage: 'denied' })
  clearAnalyticsCookies()
  listeners.forEach((fn) => fn(null))
}

export function subscribe(fn: Listener): () => void {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

/** Otwarcie panelu ustawień z dowolnego miejsca (np. linku w stopce). */
export function openSettings() {
  window.dispatchEvent(new CustomEvent('staniax:open-consent-settings'))
}

let analyticsLoaded = false

function loadAnalytics() {
  if (analyticsLoaded || typeof document === 'undefined') return
  analyticsLoaded = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.gtag = window.gtag || ((...args: unknown[]) => gtag(...args))
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true })
}

function clearAnalyticsCookies() {
  if (typeof document === 'undefined') return
  const host = window.location.hostname
  const domains = [host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`]
  document.cookie.split(';').forEach((entry) => {
    const name = entry.split('=')[0]?.trim()
    if (!name || !/^(_ga|_gid|_gat)/.test(name)) return
    domains.forEach((domain) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`
    })
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
  })
}

/** Stosuje stan zgody: ładuje analitykę tylko wtedy, gdy jest na nią zgoda. */
export function applyConsent(state: ConsentState | null) {
  if (state?.analytics) {
    gtag('consent', 'update', { analytics_storage: 'granted' })
    loadAnalytics()
  } else {
    gtag('consent', 'update', { analytics_storage: 'denied' })
  }
}

/** Wywoływane raz przy starcie aplikacji. */
export function initConsent() {
  applyConsent(readConsent())
}
