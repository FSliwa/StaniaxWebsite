import type { Lang } from '@/lib/translations'
import { SERVICES, SERVICE_SLUGS, type ServiceId } from './services'
import { COMPARISON_ORDER, COMPARISON_SLUGS, COMPARISONS } from './comparisons'
import { SUBSTRATE_ORDER, SUBSTRATE_SLUGS, SUBSTRATES } from './substrates'
import {
  HEADLIGHT_PRICING_PAGE,
  LOCAL_WARSAW_PAGE,
  LOCAL_WARSAW_SLUGS,
  PRICING_SLUGS,
} from './specialty-pages'

export interface HubLinkEntry {
  title: string
  meta: string
  path: string
}

export interface HomeEngineeringHub {
  eyebrow: string
  heading: string
  subheading: string
  groups: Array<{
    title: string
    items: HubLinkEntry[]
  }>
}

export interface ServiceClusterLinks {
  heading: string
  items: HubLinkEntry[]
}

const HUB_COPY: Record<
  Lang,
  {
    eyebrow: string
    heading: string
    subheading: string
    colCompare: string
    colSubstrate: string
    colPricingLocal: string
    galleryTitle: string
    galleryMeta: string
    libraryTitle: string
    libraryMeta: string
    serviceClusterHeading: string
  }
> = {
  pl: {
    eyebrow: 'Baza decyzji B2B i specyfikacje',
    heading: 'Porównania technologii, matryca tworzyw i cennik',
    subheading:
      'Dobór PVD, powłok lakierniczych UV/2K i wyceny regeneracji odbłyśników według materiału oraz norm.',
    colCompare: 'Porównania technologii (VS)',
    colSubstrate: 'Matryca materiałów i tworzyw',
    colPricingLocal: 'Cennik, lokalizacja i realizacje',
    galleryTitle: 'Galeria realizacji i próbek PVD',
    galleryMeta: '115+ zdjęć z produkcji',
    libraryTitle: 'Biblioteka poradników technicznych',
    libraryMeta: 'Lotnictwo · Beauty · Automotive',
    serviceClusterHeading: 'Specyfikacje materiałowe i porównania',
  },
  en: {
    eyebrow: 'B2B Engineering Matrix & Pricing',
    heading: 'Technology Comparisons, Substrate Matrix & Pricing',
    subheading:
      'Technical comparison of PVD vs galvanic/spray chrome, polymer surface preparation specs, and reflector pricing.',
    colCompare: 'Technology Comparisons (VS)',
    colSubstrate: 'Polymer & Glass Substrate Matrix',
    colPricingLocal: 'Pricing, Plant Logistics & Portfolio',
    galleryTitle: 'PVD Production & Coating Gallery',
    galleryMeta: '115+ factory references',
    libraryTitle: 'Engineering Knowledge Library',
    libraryMeta: 'Aerospace · Beauty · Automotive',
    serviceClusterHeading: 'Material Specifications & Comparisons',
  },
  de: {
    eyebrow: 'B2B-Entscheidungshilfe & Materialdaten',
    heading: 'Technologievergleiche, Materialmatrix & Richtpreise',
    subheading:
      'Ingenieurvergleiche PVD vs. Galvanik, Substrat-Spezifikationen für Kunststoffe und Glas sowie Preisübersicht.',
    colCompare: 'Technologievergleiche (VS)',
    colSubstrate: 'Substratmatrix: Kunststoffe & Glas',
    colPricingLocal: 'Preise, Werklogistik & Referenzen',
    galleryTitle: 'Galerie: PVD-Muster & Serienprojekte',
    galleryMeta: '115+ Produktionsbilder',
    libraryTitle: 'Technische Fachbibliothek',
    libraryMeta: 'Luftfahrt · Kosmetik · Automotive',
    serviceClusterHeading: 'Materialspezifikationen & Vergleiche',
  },
}

export function getHomeEngineeringHub(lang: Lang): HomeEngineeringHub {
  const c = HUB_COPY[lang]
  const galleryPath = lang === 'pl' ? '/gallery' : `/${lang}/gallery`
  const libraryPath =
    lang === 'pl'
      ? '/news/biblioteka'
      : lang === 'de'
        ? '/de/news/bibliothek'
        : '/en/news/library'

  return {
    eyebrow: c.eyebrow,
    heading: c.heading,
    subheading: c.subheading,
    groups: [
      {
        title: c.colCompare,
        items: COMPARISON_ORDER.map((id) => ({
          title: COMPARISONS[id][lang].breadLabel,
          meta: COMPARISONS[id][lang].badge,
          path: COMPARISON_SLUGS[id][lang],
        })),
      },
      {
        title: c.colSubstrate,
        items: SUBSTRATE_ORDER.map((id) => ({
          title: SUBSTRATES[id][lang].breadLabel,
          meta: SUBSTRATES[id][lang].polymerCode,
          path: SUBSTRATE_SLUGS[id][lang],
        })),
      },
      {
        title: c.colPricingLocal,
        items: [
          {
            title: HEADLIGHT_PRICING_PAGE[lang].breadLabel,
            meta: HEADLIGHT_PRICING_PAGE[lang].badge,
            path: PRICING_SLUGS[lang],
          },
          {
            title: LOCAL_WARSAW_PAGE[lang].breadLabel,
            meta: '05-420 Józefów / Warszawa',
            path: LOCAL_WARSAW_SLUGS[lang],
          },
          {
            title: SERVICES.reflectors.locales[lang].navLabel,
            meta: SERVICES.reflectors.locales[lang].heroBadge,
            path: SERVICE_SLUGS.reflectors[lang],
          },
          {
            title: SERVICES['spray-painting'].locales[lang].navLabel,
            meta: SERVICES['spray-painting'].locales[lang].heroBadge,
            path: SERVICE_SLUGS['spray-painting'][lang],
          },
          {
            title: c.galleryTitle,
            meta: c.galleryMeta,
            path: galleryPath,
          },
          {
            title: c.libraryTitle,
            meta: c.libraryMeta,
            path: libraryPath,
          },
        ],
      },
    ],
  }
}

export function getServiceClusterLinks(
  serviceId: ServiceId,
  lang: Lang,
): ServiceClusterLinks {
  const c = HUB_COPY[lang]

  const cmp = (id: (typeof COMPARISON_ORDER)[number]): HubLinkEntry => ({
    title: COMPARISONS[id][lang].breadLabel,
    meta: COMPARISONS[id][lang].badge,
    path: COMPARISON_SLUGS[id][lang],
  })

  const sub = (id: (typeof SUBSTRATE_ORDER)[number]): HubLinkEntry => ({
    title: SUBSTRATES[id][lang].breadLabel,
    meta: SUBSTRATES[id][lang].polymerCode,
    path: SUBSTRATE_SLUGS[id][lang],
  })

  const pricingEntry: HubLinkEntry = {
    title: HEADLIGHT_PRICING_PAGE[lang].breadLabel,
    meta: HEADLIGHT_PRICING_PAGE[lang].badge,
    path: PRICING_SLUGS[lang],
  }

  const localEntry: HubLinkEntry = {
    title: LOCAL_WARSAW_PAGE[lang].breadLabel,
    meta: LOCAL_WARSAW_PAGE[lang].badge,
    path: LOCAL_WARSAW_SLUGS[lang],
  }

  const map: Record<ServiceId, HubLinkEntry[]> = {
    reflectors: [
      pricingEntry,
      localEntry,
      sub('xenon-led-lenses'),
      cmp('reflector-vs-aftermarket'),
      cmp('pvd-vs-biled-retrofit'),
      cmp('uv-hardcoat-vs-acetone-vapor'),
    ],
    'vacuum-metallization': [
      cmp('pvd-vs-galvanic'),
      cmp('pvd-vs-powder-coating'),
      cmp('pvd-vs-hydrographics'),
      sub('3d-prints'),
      sub('emi-esd'),
      sub('abs'),
    ],
    'plastic-metallization': [
      sub('cosmetic-packaging'),
      cmp('pvd-vs-galvanic'),
      cmp('pvd-vs-hydrographics'),
      sub('abs'),
      sub('pp'),
      sub('3d-prints'),
    ],
    'plastic-painting': [
      sub('abs'),
      sub('pp'),
      sub('pa'),
      sub('emi-esd'),
      sub('3d-prints'),
      cmp('uv-hardcoat-vs-acetone-vapor'),
    ],
    'glass-painting': [
      sub('glass'),
      sub('cosmetic-packaging'),
      cmp('pvd-vs-spray-chrome'),
      cmp('pvd-vs-powder-coating'),
    ],
    'spray-painting': [
      sub('emi-esd'),
      sub('3d-prints'),
      cmp('pvd-vs-powder-coating'),
      cmp('pvd-vs-spray-chrome'),
      sub('pa'),
      sub('abs'),
    ],
  }

  return {
    heading: c.serviceClusterHeading,
    items: map[serviceId],
  }
}
