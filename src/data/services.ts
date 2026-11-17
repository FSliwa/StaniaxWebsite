import type { Lang } from '@/lib/translations'
import type { ServiceDefinition, ServiceId, ServiceLocaleContent } from './services-types'
import { SERVICES_PL } from './services-pl'
import { SERVICES_EN } from './services-en'
import { SERVICES_DE } from './services-de'
import { COMPARISON_ORDER, COMPARISON_SLUGS } from './comparisons'
import { SUBSTRATE_ORDER, SUBSTRATE_SLUGS } from './substrates'
import { LOCAL_WARSAW_SLUGS, PRICING_SLUGS } from './specialty-pages'
import { BLOG_POST_SLUGS } from './blog-posts/slugs'

export * from './services-types'

export const SERVICE_ORDER: ServiceId[] = [
  'reflectors',
  'vacuum-metallization',
  'plastic-metallization',
  'plastic-painting',
  'glass-painting',
  'spray-painting',
]

export const SERVICE_SLUGS: Record<ServiceId, Record<Lang, string>> = {
  reflectors: {
    pl: '/regeneracja-reflektorow',
    en: '/en/headlight-reflector-restoration',
    de: '/de/scheinwerfer-reflektor-aufbereitung',
  },
  'vacuum-metallization': {
    pl: '/metalizacja-prozniowa',
    en: '/en/vacuum-metallisation',
    de: '/de/vakuummetallisierung',
  },
  'plastic-metallization': {
    pl: '/metalizacja-tworzyw-sztucznych',
    en: '/en/plastic-chrome-plating',
    de: '/de/kunststoff-verchromen',
  },
  'plastic-painting': {
    pl: '/lakierowanie-tworzyw-sztucznych',
    en: '/en/plastic-parts-painting',
    de: '/de/kunststofflackierung',
  },
  'glass-painting': {
    pl: '/lakierowanie-szkla-i-ceramiki',
    en: '/en/glass-and-ceramic-painting',
    de: '/de/glas-und-keramiklackierung',
  },
  'spray-painting': {
    pl: '/lakierowanie-natryskowe',
    en: '/en/spray-painting',
    de: '/de/spritzlackierung',
  },
}

export const SERVICES: Record<ServiceId, ServiceDefinition> = {
  reflectors: {
    id: 'reflectors',
    slugs: SERVICE_SLUGS.reflectors,
    locales: {
      pl: SERVICES_PL.reflectors,
      en: SERVICES_EN.reflectors,
      de: SERVICES_DE.reflectors,
    },
  },
  'vacuum-metallization': {
    id: 'vacuum-metallization',
    slugs: SERVICE_SLUGS['vacuum-metallization'],
    locales: {
      pl: SERVICES_PL['vacuum-metallization'],
      en: SERVICES_EN['vacuum-metallization'],
      de: SERVICES_DE['vacuum-metallization'],
    },
  },
  'plastic-metallization': {
    id: 'plastic-metallization',
    slugs: SERVICE_SLUGS['plastic-metallization'],
    locales: {
      pl: SERVICES_PL['plastic-metallization'],
      en: SERVICES_EN['plastic-metallization'],
      de: SERVICES_DE['plastic-metallization'],
    },
  },
  'plastic-painting': {
    id: 'plastic-painting',
    slugs: SERVICE_SLUGS['plastic-painting'],
    locales: {
      pl: SERVICES_PL['plastic-painting'],
      en: SERVICES_EN['plastic-painting'],
      de: SERVICES_DE['plastic-painting'],
    },
  },
  'glass-painting': {
    id: 'glass-painting',
    slugs: SERVICE_SLUGS['glass-painting'],
    locales: {
      pl: SERVICES_PL['glass-painting'],
      en: SERVICES_EN['glass-painting'],
      de: SERVICES_DE['glass-painting'],
    },
  },
  'spray-painting': {
    id: 'spray-painting',
    slugs: SERVICE_SLUGS['spray-painting'],
    locales: {
      pl: SERVICES_PL['spray-painting'],
      en: SERVICES_EN['spray-painting'],
      de: SERVICES_DE['spray-painting'],
    },
  },
}

export function getServiceContent(id: ServiceId, lang: Lang): ServiceLocaleContent {
  return SERVICES[id].locales[lang]
}

export function getAllServiceRoutes(): Array<{ id: ServiceId; lang: Lang; path: string }> {
  const routes: Array<{ id: ServiceId; lang: Lang; path: string }> = []
  for (const id of SERVICE_ORDER) {
    for (const lang of ['pl', 'en', 'de'] as Lang[]) {
      routes.push({ id, lang, path: SERVICE_SLUGS[id][lang] })
    }
  }
  return routes
}

/**
 * Resolves the exact counterpart URLs across PL/EN/DE for any route in the application
 * (used by LanguageSwitcher, applySeoHead, and scripts/prerender.js).
 */
export const STATIC_ROUTE_EQUIVALENTS: Array<Record<Lang, string>> = [
  { pl: '/', en: '/en', de: '/de' },
  ...SERVICE_ORDER.map((id) => SERVICE_SLUGS[id]),
  { pl: '/news', en: '/en/news', de: '/de/news' },
  { pl: '/news/biblioteka', en: '/en/news/library', de: '/de/news/bibliothek' },
  {
    pl: '/news/partnerstwo-z-wiodacym-producentem-lotniczym',
    en: '/en/news/how-does-metallization-affect-material-performance',
    de: '/de/news/wie-beeinflusst-metallisierung-die-materialleistung',
  },
  {
    pl: '/news/metalizacja-prozniowa-rewolucjonizuje-branze-beauty',
    en: '/en/news/vacuum-metallization-revolutionizes-beauty-industry',
    de: '/de/news/vakuummetallisierung-revolutioniert-die-kosmetikbranche',
  },
  {
    pl: '/news/regeneracja-odblysnikow-reflektorow-samochodowych',
    en: '/en/news/reflector-regeneration-and-headlight-polishing',
    de: '/de/news/scheinwerfer-reflektoren-regeneration-und-polieren',
  },
  { pl: '/gallery', en: '/en/gallery', de: '/de/gallery' },
  PRICING_SLUGS,
  LOCAL_WARSAW_SLUGS,
  ...COMPARISON_ORDER.map((id) => COMPARISON_SLUGS[id]),
  ...SUBSTRATE_ORDER.map((id) => SUBSTRATE_SLUGS[id]),
  { pl: '/polityka-prywatnosci', en: '/en/privacy-policy', de: '/de/datenschutz' },
  { pl: '/polityka-cookies', en: '/en/cookie-policy', de: '/de/cookie-richtlinie' },
  // Artykuły tylko po polsku: przełącznik EN/DE prowadzi do listy aktualności.
  // (hreflang dla tych stron emitowany jest tylko dla PL — patrz singleLanguage w seo.ts)
  ...BLOG_POST_SLUGS.map((slug) => ({ pl: slug, en: '/en/news', de: '/de/news' })),
]

export function resolveLanguageAlternates(pathname: string): Record<Lang, string> {
  const normalized = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
  for (const group of STATIC_ROUTE_EQUIVALENTS) {
    if (group.pl === normalized || group.en === normalized || group.de === normalized) {
      return group
    }
  }
  return { pl: '/', en: '/en', de: '/de' }
}
