import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Calculator } from '@phosphor-icons/react'
import type { Lang } from '@/lib/translations'
import {
  HEADLIGHT_PRICING_PAGE,
  PRICING_SLUGS,
  type CalculatorPreset,
} from '@/data/specialty-pages'
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

const TABLE_HEADERS: Record<
  Lang,
  {
    home: string
    service: string
    colVariant: string
    colScope: string
    colTime: string
    colPrice: string
    colWarranty: string
  }
> = {
  pl: {
    home: 'Strona główna',
    service: 'Regeneracja odbłyśników',
    colVariant: 'Wariant usługi',
    colScope: 'Zakres technologiczny',
    colTime: 'Czas realizacji',
    colPrice: 'Cena orientacyjna',
    colWarranty: 'Trwałość efektu',
  },
  en: {
    home: 'Home',
    service: 'Reflector Restoration',
    colVariant: 'Service Tier',
    colScope: 'Process Scope',
    colTime: 'Turnaround',
    colPrice: 'Estimated Rate',
    colWarranty: 'Durability',
  },
  de: {
    home: 'Startseite',
    service: 'Reflektor neu bedampfen',
    colVariant: 'Leistungsstufe',
    colScope: 'Bearbeitungsumfang',
    colTime: 'Durchlaufzeit',
    colPrice: 'Richtpreis',
    colWarranty: 'Haltbarkeit',
  },
}

export function HeadlightPricingPage({ lang }: { lang: Lang }) {
  const page = HEADLIGHT_PRICING_PAGE[lang]
  const hdr = TABLE_HEADERS[lang]
  const homePath = lang === 'pl' ? '/' : `/${lang}`
  const servicePath =
    lang === 'pl'
      ? '/regeneracja-reflektorow'
      : lang === 'de'
        ? '/de/scheinwerfer-reflektor-aufbereitung'
        : '/en/headlight-reflector-restoration'

  const [presetId, setPresetId] = useState<CalculatorPreset['id']>('h7-parabola')
  const [qty, setQty] = useState<number>(2)
  const [withLensUv, setWithLensUv] = useState<boolean>(false)
  const [withDismantle, setWithDismantle] = useState<boolean>(false)

  const selected = page.presets.find((p) => p.id === presetId) || page.presets[0]
  const perUnit =
    selected.baseReflectorPrice +
    (withLensUv ? selected.lensUvAddonPrice : 0) +
    (withDismantle ? selected.dismantlingAddonPrice : 0)
  const totalEstimate = perUnit * qty

  const breadcrumbs: BreadcrumbEntry[] = [
    { name: hdr.home, path: homePath },
    { name: hdr.service, path: servicePath },
    { name: page.breadLabel, path: PRICING_SLUGS[lang] },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
    applySeoHead({
      lang,
      path: PRICING_SLUGS[lang],
      title: page.metaTitle,
      description: page.metaDesc,
      alternates: {
        pl: PRICING_SLUGS.pl,
        en: PRICING_SLUGS.en,
        de: PRICING_SLUGS.de,
        xDefault: PRICING_SLUGS.pl,
      },
      breadcrumbs: [
        { name: hdr.home, path: homePath },
        { name: hdr.service, path: servicePath },
        { name: page.breadLabel, path: PRICING_SLUGS[lang] },
      ],
      faq: page.faq,
      serviceSchema: {
        name: page.h1,
        serviceType: page.badge,
        description: page.metaDesc,
        priceRange: lang === 'pl' ? '150 - 550 PLN' : '35 - 140 EUR',
        priceCurrency: lang === 'pl' ? 'PLN' : 'EUR',
      },
    })
  }, [lang, page, hdr, homePath, servicePath])

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

          {/* Interactive Calculator */}
          <section className="rounded-3xl border border-blue-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <Calculator className="h-7 w-7 text-blue-600" weight="duotone" aria-hidden="true" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                {page.calcTitle}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600">{page.calcIntro}</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2.5">
                {page.presets.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setPresetId(preset.id)}
                    className={`w-full text-left rounded-2xl border p-4 transition-colors cursor-pointer ${
                      preset.id === presetId
                        ? 'border-blue-600 bg-blue-50/70'
                        : 'border-slate-200 bg-slate-50/50 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-sm sm:text-base text-slate-900">
                        {preset.label}
                      </span>
                      <span className="font-mono font-bold text-blue-700 shrink-0">
                        {preset.baseReflectorPrice} {preset.currency}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">{preset.note}</p>
                  </button>
                ))}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      {page.calcQtyLabel}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 4, 6, 10].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setQty(val)}
                          className={`px-4 py-2 rounded-xl font-mono text-sm font-bold border transition-colors cursor-pointer ${
                            qty === val
                              ? 'bg-slate-900 text-white border-slate-900'
                              : 'bg-white text-slate-800 border-slate-300 hover:border-slate-400'
                          }`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={withLensUv}
                      onChange={(e) => setWithLensUv(e.target.checked)}
                      className="mt-1 h-4 w-4 accent-blue-600"
                    />
                    <span className="text-sm text-slate-800">
                      {page.calcLensAddonLabel} (+{selected.lensUvAddonPrice}{' '}
                      {selected.currency})
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={withDismantle}
                      onChange={(e) => setWithDismantle(e.target.checked)}
                      className="mt-1 h-4 w-4 accent-blue-600"
                    />
                    <span className="text-sm text-slate-800">
                      {page.calcDismantlingAddonLabel} (+{selected.dismantlingAddonPrice}{' '}
                      {selected.currency})
                    </span>
                  </label>
                </div>

                <div className="border-t border-slate-200 pt-5 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-semibold text-slate-700">
                      {page.calcTotalLabel}:
                    </span>
                    <span className="text-3xl font-black font-mono text-blue-700">
                      ~{totalEstimate} {selected.currency}
                    </span>
                  </div>
                  <Link
                    to={lang === 'pl' ? '/#contact' : `/${lang}#contact`}
                    onClick={() => {
                      if (typeof window !== 'undefined' && typeof (window as any).trackEvent === 'function') {
                        ;(window as any).trackEvent('calculate_quote', {
                          preset_id: selected.id,
                          quantity: qty,
                          with_lens_uv: withLensUv,
                          with_dismantle: withDismantle,
                          value: totalEstimate,
                          currency: lang === 'pl' ? 'PLN' : 'EUR',
                          language: lang,
                        })
                      }
                    }}
                    className="block w-full text-center rounded-full bg-blue-600 text-white px-6 py-3.5 text-sm font-bold hover:bg-blue-700 transition-colors"
                  >
                    {page.calcCtaLabel}
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Table */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              {page.tiersTitle}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50">
                    <th scope="col" className="py-3 px-4 font-bold text-slate-900">
                      {hdr.colVariant}
                    </th>
                    <th scope="col" className="py-3 px-4 font-bold text-slate-900">
                      {hdr.colScope}
                    </th>
                    <th scope="col" className="py-3 px-4 font-bold text-slate-900">
                      {hdr.colTime}
                    </th>
                    <th scope="col" className="py-3 px-4 font-bold text-blue-800">
                      {hdr.colPrice}
                    </th>
                    <th scope="col" className="py-3 px-4 font-bold text-slate-900">
                      {hdr.colWarranty}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {page.tiers.map((tier) => (
                    <tr key={tier.id}>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        {tier.serviceType}
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">{tier.scope}</td>
                      <td className="py-3.5 px-4 font-mono text-slate-700">{tier.turnaround}</td>
                      <td className="py-3.5 px-4 font-mono font-bold text-blue-700">
                        {tier.priceLabel}
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">{tier.warranty}</td>
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
