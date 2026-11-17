import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, EnvelopeSimple, Phone, Sparkle } from '@phosphor-icons/react'
import type { Lang } from '@/lib/translations'
import type { EngineeringSection, RelatedLinkItem } from '@/data/comparisons'

const CHROME_COPY: Record<
  Lang,
  {
    geoBadge: string
    faqHeading: string
    relatedHeading: string
    ctaTitle: string
    ctaPhoneLabel: string
    ctaFormLabel: string
  }
> = {
  pl: {
    geoBadge: 'Synteza inżynieryjna',
    faqHeading: 'Najczęstsze pytania techniczne',
    relatedHeading: 'Powiązane usługi i specyfikacje',
    ctaTitle: 'Skonsultuj dobór technologii z technologiem STANIAX',
    ctaPhoneLabel: 'Zadzwoń',
    ctaFormLabel: 'Formularz wyceny',
  },
  en: {
    geoBadge: 'Engineering Quick Answer',
    faqHeading: 'Technical FAQ',
    relatedHeading: 'Related Services & Specifications',
    ctaTitle: 'Discuss specifications directly with STANIAX engineers',
    ctaPhoneLabel: 'Call plant',
    ctaFormLabel: 'Request B2B quote',
  },
  de: {
    geoBadge: 'Technische Kurzantwort',
    faqHeading: 'Häufige Fachfragen (FAQ)',
    relatedHeading: 'Weiterführende Leistungen & Daten',
    ctaTitle: 'Verfahren direkt mit den STANIAX-Ingenieuren abstimmen',
    ctaPhoneLabel: 'Werk anrufen',
    ctaFormLabel: 'Angebot anfordern',
  },
}

export function GeoDirectAnswerBox({
  lang,
  question,
  answer,
}: {
  lang: Lang
  question: string
  answer: string
}) {
  const copy = CHROME_COPY[lang]
  return (
    <section
      aria-label={copy.geoBadge}
      data-geo-answer="true"
      className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/90 via-white to-slate-50 p-6 sm:p-8 shadow-sm"
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
        <Sparkle className="h-3.5 w-3.5" weight="fill" aria-hidden="true" />
        <span>{copy.geoBadge}</span>
      </div>
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-3">
        {question}
      </h2>
      <p className="text-base sm:text-lg leading-relaxed text-slate-800">{answer}</p>
    </section>
  )
}

export function TechnicalSectionList({ sections }: { sections: EngineeringSection[] }) {
  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <section
          key={section.heading}
          className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            {section.heading}
          </h2>
          {section.paragraphs.map((paragraph, pIdx) => (
            <p key={pIdx} className="leading-relaxed text-slate-700">
              {paragraph}
            </p>
          ))}
          {section.bullets && section.bullets.length > 0 && (
            <ul className="space-y-2.5 pt-2">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-slate-800">
                  <CheckCircle
                    className="h-5 w-5 text-blue-600 shrink-0 mt-0.5"
                    weight="fill"
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  )
}

export function PageFaqSection({
  lang,
  faq,
}: {
  lang: Lang
  faq: Array<{ q: string; a: string }>
}) {
  const copy = CHROME_COPY[lang]
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-6">
        {copy.faqHeading}
      </h2>
      <div className="space-y-4">
        {faq.map((item) => (
          <div
            key={item.q}
            className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5"
          >
            <h3 className="font-bold text-slate-900 mb-2">{item.q}</h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function RelatedClusterLinks({
  lang,
  links,
}: {
  lang: Lang
  links: RelatedLinkItem[]
}) {
  const copy = CHROME_COPY[lang]
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mb-4">
        {copy.relatedHeading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-800 hover:border-blue-400 hover:bg-blue-50/70 hover:text-blue-800 transition-colors"
          >
            <span>{item.label}</span>
            <ArrowRight
              className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0"
              weight="bold"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

export function BofuContactCta({
  lang,
  contextLabel,
}: {
  lang: Lang
  contextLabel?: string
}) {
  const copy = CHROME_COPY[lang]
  const homeContact = lang === 'pl' ? '/#contact' : `/${lang}#contact`
  const titleText = contextLabel ? `${contextLabel}: ${copy.ctaTitle}` : copy.ctaTitle
  return (
    <section
      id="wycena"
      className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
    >
      <div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
          {titleText}
        </h2>
        <p className="text-sm font-mono text-slate-300">
          STANIAX · Józefów 05-420
        </p>
      </div>
      <div className="flex flex-wrap gap-3 shrink-0">
        <a
          href="tel:+48882488844"
          className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-bold hover:bg-slate-100 transition-colors"
        >
          <Phone className="h-4 w-4" weight="fill" aria-hidden="true" />
          <span>{copy.ctaPhoneLabel}: +48 882 488 844</span>
        </a>
        <a
          href="mailto:metalizacja@staniax.pl"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 text-white px-5 py-3 text-sm font-bold hover:bg-white/20 transition-colors"
        >
          <EnvelopeSimple className="h-4 w-4" weight="bold" aria-hidden="true" />
          <span>metalizacja@staniax.pl</span>
        </a>
        <Link
          to={homeContact}
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-5 py-3 text-sm font-bold hover:bg-blue-500 transition-colors"
        >
          <span>{copy.ctaFormLabel}</span>
          <ArrowRight className="h-4 w-4" weight="bold" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
