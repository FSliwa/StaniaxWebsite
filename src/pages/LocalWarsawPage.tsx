import { useEffect } from 'react'
import { Clock, MapPin, Phone } from '@phosphor-icons/react'
import type { Lang } from '@/lib/translations'
import { LOCAL_WARSAW_PAGE, LOCAL_WARSAW_SLUGS } from '@/data/specialty-pages'
import { applySeoHead } from '@/lib/seo'
import { SiteHeader } from '@/components/SiteHeader'
import { BigFooter } from '@/components/BigFooter'
import { Breadcrumbs, type BreadcrumbEntry } from '@/components/Breadcrumbs'
import {
  BofuContactCta,
  GeoDirectAnswerBox,
  PageFaqSection,
  RelatedClusterLinks,
  TechnicalSectionList,
} from '@/components/GeoPageChrome'

const LABELS: Record<
  Lang,
  {
    home: string
    service: string
    radiusHeading: string
    colZone: string
    colDist: string
    colMode: string
  }
> = {
  pl: {
    home: 'Strona główna',
    service: 'Regeneracja odbłyśników',
    radiusHeading: 'Strefy dojazdu i wysyłki (Warszawa, Mazowsze, Polska)',
    colZone: 'Dzielnica / Region',
    colDist: 'Dojazd / Tranzyt',
    colMode: 'Tryb realizacji STANIAX',
  },
  en: {
    home: 'Home',
    service: 'Reflector Restoration',
    radiusHeading: 'Drop-Off Zones & Courier Coverage',
    colZone: 'District / Region',
    colDist: 'Travel / Transit Time',
    colMode: 'Delivery Mode',
  },
  de: {
    home: 'Startseite',
    service: 'Reflektor neu bedampfen',
    radiusHeading: 'Einzugsgebiet & Paketlogistik',
    colZone: 'Stadtteil / Region',
    colDist: 'Fahrzeit / Laufzeit',
    colMode: 'Anlieferungsweg',
  },
}

export function LocalWarsawPage({ lang }: { lang: Lang }) {
  const page = LOCAL_WARSAW_PAGE[lang]
  const labels = LABELS[lang]
  const homePath = lang === 'pl' ? '/' : `/${lang}`
  const servicePath =
    lang === 'pl'
      ? '/regeneracja-reflektorow'
      : lang === 'de'
        ? '/de/scheinwerfer-reflektor-aufbereitung'
        : '/en/headlight-reflector-restoration'

  const breadcrumbs: BreadcrumbEntry[] = [
    { name: labels.home, path: homePath },
    { name: labels.service, path: servicePath },
    { name: page.breadLabel, path: LOCAL_WARSAW_SLUGS[lang] },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
    applySeoHead({
      lang,
      path: LOCAL_WARSAW_SLUGS[lang],
      title: page.metaTitle,
      description: page.metaDesc,
      alternates: {
        pl: LOCAL_WARSAW_SLUGS.pl,
        en: LOCAL_WARSAW_SLUGS.en,
        de: LOCAL_WARSAW_SLUGS.de,
        xDefault: LOCAL_WARSAW_SLUGS.pl,
      },
      breadcrumbs: [
        { name: labels.home, path: homePath },
        { name: labels.service, path: servicePath },
        { name: page.breadLabel, path: LOCAL_WARSAW_SLUGS[lang] },
      ],
      faq: page.faq,
      serviceSchema: {
        name: page.h1,
        serviceType: page.badge,
        description: page.metaDesc,
        areaServed: ['Warszawa', 'Józefów', 'Otwock', 'Wawer', 'Piaseczno', 'Mazowieckie', 'Polska'],
      },
    })
  }, [lang, page, labels, homePath, servicePath])

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <SiteHeader lang={lang} />

      <main className="pt-28 pb-20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-10 space-y-10">
          <Breadcrumbs items={breadcrumbs} />

          <header className="space-y-4">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
              {page.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              {page.h1}
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed">{page.subtitle}</p>
          </header>

          <GeoDirectAnswerBox
            lang={lang}
            question={page.directAnswerQuestion}
            answer={page.directAnswer}
          />

          {/* Plant NAP & Hours Card */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              {page.plantCardTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" weight="fill" aria-hidden="true" />
                <span className="font-semibold text-slate-900">{page.plantAddress}</span>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" weight="fill" aria-hidden="true" />
                <span className="font-semibold text-slate-900">{page.plantHours}</span>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" weight="fill" aria-hidden="true" />
                <a href="tel:+48882488844" className="font-mono font-bold text-blue-700 hover:underline">
                  {page.phone}
                </a>
              </div>
            </div>
            <p className="text-sm sm:text-base text-slate-700">{page.plantDirections}</p>
            <p className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-sm text-amber-950">
              {page.plantRegNote}
            </p>
          </section>

          {/* Service Radius Table */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              {labels.radiusHeading}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50">
                    <th scope="col" className="py-3 px-4 font-bold text-slate-900">
                      {labels.colZone}
                    </th>
                    <th scope="col" className="py-3 px-4 font-bold text-slate-900">
                      {labels.colDist}
                    </th>
                    <th scope="col" className="py-3 px-4 font-bold text-blue-800">
                      {labels.colMode}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {page.serviceRadiusTable.map((row) => (
                    <tr key={row.zone}>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">{row.zone}</td>
                      <td className="py-3.5 px-4 text-slate-700">{row.distanceTime}</td>
                      <td className="py-3.5 px-4 text-slate-700">{row.dropoffMode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <TechnicalSectionList sections={page.sections} />
          <PageFaqSection lang={lang} faq={page.faq} />
          <RelatedClusterLinks lang={lang} links={page.relatedLinks} />
          <BofuContactCta lang={lang} contextLabel={page.breadLabel} />
        </div>
      </main>

      <BigFooter lang={lang} />
    </div>
  )
}
