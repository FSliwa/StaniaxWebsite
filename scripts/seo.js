// Shared SEO helpers used by the prerender step.
// Single source of truth for canonical URLs, hreflang alternates and JSON-LD.

export const SITE = 'https://www.staniax.pl'

// Every translated variant of a page lives in one group so that each generated
// file can point at its siblings with rel="alternate".
export const ROUTE_GROUPS = {
  home: { pl: '', en: 'en', de: 'de' },
  gallery: { pl: 'gallery', en: 'en/gallery', de: 'de/gallery' },
  news: { pl: 'news', en: 'en/news', de: 'de/news' },
  aviation: {
    pl: 'news/jak-metalizacja-wplywa-na-wydajnosc-materialow',
    en: 'en/news/how-does-metallization-affect-material-performance',
    de: 'de/news/wie-beeinflusst-metallisierung-die-materialleistung'
  },
  beauty: {
    pl: 'news/metalizacja-prozniowa-rewolucjonizuje-branze-beauty',
    en: 'en/news/vacuum-metallization-revolutionizes-beauty-industry',
    de: 'de/news/vakuummetallisierung-revolutioniert-die-kosmetikbranche'
  },
  reflectors: {
    pl: 'news/regeneracja-odblysnikow-reflektorow-samochodowych',
    en: 'en/news/reflector-regeneration-and-headlight-polishing',
    de: 'de/news/scheinwerfer-reflektoren-regeneration-und-polieren'
  },
  // Dokumenty prawne — slugi muszą odpowiadać LEGAL_SLUGS w src/lib/legal.ts
  privacy: { pl: 'polityka-prywatnosci', en: 'en/privacy-policy', de: 'de/datenschutzerklaerung' },
  cookies: { pl: 'polityka-cookies', en: 'en/cookie-policy', de: 'de/cookie-richtlinie' },
  terms: { pl: 'regulamin', en: 'en/terms', de: 'de/agb' }
}

/** Grupy tras, które są dokumentami prawnymi — niższy priorytet w sitemapie. */
export const LEGAL_GROUPS = ['privacy', 'cookies', 'terms']

export const url = (subPath) => (subPath ? `${SITE}/${subPath}` : `${SITE}/`)

// Resolves which group and language a generated file belongs to.
export function findRoute(subPath) {
  const normalized = subPath.replace(/^\/+|\/+$/g, '')
  for (const [group, langs] of Object.entries(ROUTE_GROUPS)) {
    for (const [lang, p] of Object.entries(langs)) {
      if (p === normalized) return { group, lang }
    }
  }
  return null
}

export function hreflangTags(group) {
  const langs = ROUTE_GROUPS[group]
  if (!langs) return ''
  const tags = Object.entries(langs).map(
    ([lang, p]) => `    <link rel="alternate" hreflang="${lang}" href="${url(p)}" />`
  )
  tags.push(`    <link rel="alternate" hreflang="x-default" href="${url(langs.pl)}" />`)
  return `\n${tags.join('\n')}\n`
}

const ldBlock = (data) =>
  `\n    <script type="application/ld+json">${JSON.stringify(data)}</script>\n`

const ORG_ID = `${SITE}/#organization`

export function organizationLd() {
  return ldBlock({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'STANIAX Sp. z o.o.',
    url: `${SITE}/`,
    // `logo` celowo pominięte: og-image.jpg to zdjęcie detalu, a nie logotyp.
    // Lepszy brak pola niż pole wskazujące na niewłaściwy zasób. Dodać, gdy
    // pojawi się plik logotypu.
    image: `${SITE}/og-image.jpg`,
    email: 'metalizacja@staniax.pl',
    telephone: '+48882488844',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kardynała Stefana Wyszyńskiego 116a',
      postalCode: '05-420',
      addressLocality: 'Józefów',
      addressCountry: 'PL'
    },
    // `founder` usunięte: treść serwisu określa Dariusza Staniaka jako mentora
    // i głównego technologa, a nie założyciela spółki. Przywrócić wyłącznie po
    // potwierdzeniu wpisu w KRS.
    areaServed: 'PL',
    knowsAbout: [
      'metalizacja próżniowa',
      'metalizacja tworzyw sztucznych',
      'regeneracja lamp samochodowych',
      'regeneracja odbłyśników',
      'metalizacja aluminium'
    ]
  })
}

export function webSiteLd() {
  return ldBlock({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    url: `${SITE}/`,
    name: 'STANIAX',
    inLanguage: 'pl-PL',
    publisher: { '@id': ORG_ID }
  })
}

export function breadcrumbLd(items) {
  return ldBlock({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url
    }))
  })
}

export function articleLd({ headline, description, image, canonical, lang, datePublished }) {
  return ldBlock({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: image ? [image.startsWith('http') ? image : `${SITE}${image}`] : undefined,
    inLanguage: lang,
    datePublished,
    dateModified: datePublished,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID }
  })
}
