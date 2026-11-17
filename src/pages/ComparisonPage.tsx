import { useEffect } from 'react'
import { CheckCircle } from '@phosphor-icons/react'
import type { Lang } from '@/lib/translations'
import {
  COMPARISON_SLUGS,
  COMPARISONS,
  type ComparisonId,
} from '@/data/comparisons'
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
  { home: string; compareHub: string; paramCol: string; tableHeading: string }
> = {
  pl: {
    home: 'Strona główna',
    compareHub: 'Baza wiedzy i porównania',
    paramCol: 'Parametr techniczny',
    tableHeading: 'Zestawienie parametrów technologicznych',
  },
  en: {
    home: 'Home',
    compareHub: 'Engineering Library',
    paramCol: 'Technical Parameter',
    tableHeading: 'Quantitative Comparison Matrix',
  },
  de: {
    home: 'Startseite',
    compareHub: 'Fachbibliothek & Vergleiche',
    paramCol: 'Technischer Parameter',
    tableHeading: 'Direkter Technologievergleich',
  },
}

interface ComparisonPageProps {
  comparisonId: ComparisonId
  lang: Lang
}

export function ComparisonPage({ comparisonId, lang }: ComparisonPageProps) {
  const page = COMPARISONS[comparisonId][lang]
  const slugs = COMPARISON_SLUGS[comparisonId]
  const labels = LABELS[lang]
  const homePath = lang === 'pl' ? '/' : `/${lang}`
  const libraryPath =
    lang === 'pl' ? '/news/biblioteka' : `/${lang}/news/${lang === 'de' ? 'bibliothek' : 'library'}`

  const breadcrumbs: BreadcrumbEntry[] = [
    { name: labels.home, path: homePath },
    { name: labels.compareHub, path: libraryPath },
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
      ogType: 'article',
      breadcrumbs: [
        { name: labels.home, path: homePath },
        { name: labels.compareHub, path: libraryPath },
        { name: page.breadLabel, path: slugs[lang] },
      ],
      faq: page.faq,
      serviceSchema: {
        name: page.h1,
        serviceType: page.badge,
        description: page.metaDesc,
      },
    })
  }, [comparisonId, lang, page, slugs, labels, homePath, libraryPath])

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

          {/* Quantitative Comparison Table */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              {labels.tableHeading}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50">
                    <th scope="col" className="py-3.5 px-4 font-bold text-slate-900">
                      {labels.paramCol}
                    </th>
                    <th scope="col" className="py-3.5 px-4 font-bold text-blue-800">
                      {page.sideALabel}
                    </th>
                    <th scope="col" className="py-3.5 px-4 font-bold text-slate-700">
                      {page.sideBLabel}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {page.comparisonRows.map((row) => (
                    <tr key={row.parameter} className="hover:bg-slate-50/70">
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        {row.parameter}
                      </td>
                      <td className="py-3.5 px-4 text-slate-800">{row.optionA}</td>
                      <td className="py-3.5 px-4 text-slate-600">{row.optionB}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rounded-2xl bg-slate-900 text-white p-5 mt-4">
              <p className="text-xs font-mono uppercase tracking-wider text-blue-300 mb-1">
                {page.verdictTitle}
              </p>
              <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
                {page.verdictSummary}
              </p>
            </div>
          </section>

          <TechnicalSectionList sections={page.sections} />

          {/* Decision Matrix Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-blue-200 bg-white p-6 shadow-sm space-y-3">
              <h2 className="text-lg font-bold text-blue-900">{page.whenChooseATitle}</h2>
              <ul className="space-y-2.5 text-sm sm:text-base text-slate-800">
                {page.whenChooseA.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle
                      className="h-5 w-5 text-blue-600 shrink-0 mt-0.5"
                      weight="fill"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
              <h2 className="text-lg font-bold text-slate-900">{page.whenChooseBTitle}</h2>
              <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
                {page.whenChooseB.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle
                      className="h-5 w-5 text-slate-400 shrink-0 mt-0.5"
                      weight="regular"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
