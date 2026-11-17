import { useEffect } from 'react'
import { CheckCircle } from '@phosphor-icons/react'
import type { Lang } from '@/lib/translations'
import {
  SUBSTRATE_SLUGS,
  SUBSTRATES,
  type SubstrateId,
} from '@/data/substrates'
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
    hub: string
    specsHeading: string
    paramCol: string
    valCol: string
    appsHeading: string
  }
> = {
  pl: {
    home: 'Strona główna',
    hub: 'Baza technologii i materiałów',
    specsHeading: 'Parametry procesowe i normy powłoki',
    paramCol: 'Parametr',
    valCol: 'Specyfikacja STANIAX',
    appsHeading: 'Typowe zastosowania przemysłowe',
  },
  en: {
    home: 'Home',
    hub: 'Substrate Matrix',
    specsHeading: 'Process Parameters & Quality Standards',
    paramCol: 'Parameter',
    valCol: 'STANIAX Specification',
    appsHeading: 'Typical Industrial Applications',
  },
  de: {
    home: 'Startseite',
    hub: 'Materialmatrix & Lösungen',
    specsHeading: 'Prozessparameter & Qualitätsnormen',
    paramCol: 'Parameter',
    valCol: 'STANIAX-Spezifikation',
    appsHeading: 'Typische Industrieanwendungen',
  },
}

interface SubstrateMatrixPageProps {
  substrateId: SubstrateId
  lang: Lang
}

export function SubstrateMatrixPage({ substrateId, lang }: SubstrateMatrixPageProps) {
  const page = SUBSTRATES[substrateId][lang]
  const slugs = SUBSTRATE_SLUGS[substrateId]
  const labels = LABELS[lang]
  const homePath = lang === 'pl' ? '/' : `/${lang}`
  const libraryPath =
    lang === 'pl' ? '/news/biblioteka' : `/${lang}/news/${lang === 'de' ? 'bibliothek' : 'library'}`

  const breadcrumbs: BreadcrumbEntry[] = [
    { name: labels.home, path: homePath },
    { name: labels.hub, path: libraryPath },
    { name: page.breadLabel, path: slugs[lang] },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
    applySeoHead({
      lang,
      path: slugs[lang],
      title: page.metaTitle,
      description: page.metaDesc,
      alternates: {
        pl: slugs.pl,
        en: slugs.en,
        de: slugs.de,
        xDefault: slugs.pl,
      },
      breadcrumbs: [
        { name: labels.home, path: homePath },
        { name: labels.hub, path: libraryPath },
        { name: page.breadLabel, path: slugs[lang] },
      ],
      faq: page.faq,
      serviceSchema: {
        name: page.h1,
        serviceType: page.polymerCode,
        description: page.metaDesc,
      },
    })
  }, [substrateId, lang, page, slugs, labels, homePath, libraryPath])

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <SiteHeader lang={lang} />

      <main className="pt-28 pb-20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-10 space-y-10">
          <Breadcrumbs items={breadcrumbs} />

          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
                {page.badge}
              </span>
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-mono text-slate-700">
                {page.polymerCode}
              </span>
            </div>
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

          <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              {labels.specsHeading}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50">
                    <th scope="col" className="py-3 px-4 font-bold text-slate-900">
                      {labels.paramCol}
                    </th>
                    <th scope="col" className="py-3 px-4 font-bold text-blue-800">
                      {labels.valCol}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {page.specs.map((row) => (
                    <tr key={row.parameter}>
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        {row.parameter}
                      </td>
                      <td className="py-3 px-4 text-slate-700">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <TechnicalSectionList sections={page.sections} />

          <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              {labels.appsHeading}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-800">
              {page.applications.map((app) => (
                <li
                  key={app}
                  className="flex items-start gap-2.5 rounded-2xl border border-slate-200/80 bg-slate-50 p-4 text-sm sm:text-base"
                >
                  <CheckCircle
                    className="h-5 w-5 text-blue-600 shrink-0 mt-0.5"
                    weight="fill"
                    aria-hidden="true"
                  />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </section>

          <PageFaqSection lang={lang} faq={page.faq} />
          <RelatedClusterLinks lang={lang} links={page.relatedLinks} />
          <BofuContactCta lang={lang} contextLabel={page.breadLabel} />
        </div>
      </main>

      <BigFooter lang={lang} />
    </div>
  )
}
