import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CaretDown,
  CheckCircle,
  Clock,
  EnvelopeSimple,
  MapPin,
  Phone,
  Sparkle,
} from '@phosphor-icons/react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import type { Lang } from '@/lib/translations'
import {
  SERVICES,
  type CaseStudyCard,
  type ServiceId,
  type ServiceLocaleContent,
} from '@/data/services'
import { getServiceClusterLinks } from '@/data/hub-links'
import { applySeoHead } from '@/lib/seo'
import { SiteHeader } from '@/components/SiteHeader'
import { BigFooter } from '@/components/BigFooter'
import { B2bChamberCalculator } from '@/components/B2bChamberCalculator'
import { NumberTicker } from '@/components/ui/NumberTicker'
import { ShimmerButton } from '@/components/ui/ShimmerButton'
import { BorderBeam } from '@/components/ui/BorderBeam'
import { MagicCard } from '@/components/ui/MagicCard'
import { BlurFade } from '@/components/ui/BlurFade'
import { Marquee } from '@/components/ui/Marquee'
import { LensImage } from '@/components/ui/LensImage'
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'

// Static asset imports
import reflectors1Img from '@/assets/odblysniki-nowe-1.jpeg'
import reflectors2Img from '@/assets/odblysniki-nowe-2.jpeg'
import automotiveBeforeImg from '@/assets/automotive-before.jpeg'
import automotiveAfterImg from '@/assets/automotive-after.jpeg'
import vacuumChamberImg from '@/assets/vacuum_metalization_chamber.jpg'
import vacuumPartImg from '@/assets/vacuum-metalization.jpg'
import packagingAfterImg from '@/assets/packaging-after.png'
import colorfulPackagingImg from '@/assets/colorful_packaging.png'
import plasticPaint1Img from '@/assets/lakierowanie-tworzyw-1.jpeg'
import plasticPaint2Img from '@/assets/lakierowanie-tworzyw-2.jpeg'
import plasticPaint3Img from '@/assets/lakierowanie-tworzyw-3.jpeg'
import glassPaint1Img from '@/assets/lakierowanie-szkla-1.jpeg'
import glassPaint2Img from '@/assets/lakierowanie-szkla-2.jpeg'
import glassPaint3Img from '@/assets/lakierowanie-szkla-3.jpeg'
import sprayPaint1Img from '@/assets/lakierowanie-natryskowe-1.jpeg'
import sprayPaint2Img from '@/assets/lakierowanie-natryskowe-2.jpeg'
import sprayPaint3Img from '@/assets/lakierowanie-natryskowe-3.jpeg'
import industrialAfterImg from '@/assets/industrial-after.jpeg'

const HERO_IMAGES: Record<ServiceLocaleContent['heroImageKey'], string> = {
  reflectorsHero: reflectors1Img,
  vacuumHero: vacuumChamberImg,
  plasticMetaHero: colorfulPackagingImg,
  plasticPaintHero: plasticPaint1Img,
  glassPaintHero: glassPaint1Img,
  sprayPaintHero: sprayPaint1Img,
}

const CASE_STUDY_IMAGES: Record<CaseStudyCard['imageKey'], string> = {
  reflectors1: reflectors1Img,
  reflectors2: reflectors2Img,
  automotiveAfter: automotiveAfterImg,
  vacuumChamber: vacuumChamberImg,
  vacuumPart: vacuumPartImg,
  packagingAfter: packagingAfterImg,
  colorfulPackaging: colorfulPackagingImg,
  plasticPaint1: plasticPaint1Img,
  plasticPaint2: plasticPaint2Img,
  plasticPaint3: plasticPaint3Img,
  glassPaint1: glassPaint1Img,
  glassPaint2: glassPaint2Img,
  glassPaint3: glassPaint3Img,
  sprayPaint1: sprayPaint1Img,
  sprayPaint2: sprayPaint2Img,
  sprayPaint3: sprayPaint3Img,
  industrialAfter: industrialAfterImg,
}

interface ServicePageProps {
  serviceId: ServiceId
  lang?: Lang
}

export function ServicePage({ serviceId, lang = 'pl' }: ServicePageProps) {
  const serviceDef = SERVICES[serviceId]
  const content = serviceDef.locales[lang]
  const currentPath = serviceDef.slugs[lang]
  const homePath = lang === 'pl' ? '/' : `/${lang}`
  const galleryPath = lang === 'pl' ? '/gallery' : `/${lang}/gallery`

  // Configurator state
  const [activeOptionId, setActiveOptionId] = useState<string>(
    content.showcase.options?.[0]?.id || ''
  )
  const [selectedRalCode, setSelectedRalCode] = useState<string>(
    content.showcase.ralColors?.[0]?.code || 'RAL 9005'
  )
  const [selectedFinishId, setSelectedFinishId] = useState<string>(
    content.showcase.finishOptions?.[0]?.id || 'gloss'
  )

  // FAQ state (first item open by default, all items remain in DOM)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  // Quote Form state
  const [projectType, setProjectType] = useState<string>(content.quoteSection.projectTypes[0] || '')
  const [selectedVariant, setSelectedVariant] = useState<string>('')
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    setActiveOptionId(content.showcase.options?.[0]?.id || '')
    setProjectType(content.quoteSection.projectTypes[0] || '')
    setSelectedVariant('')
  }, [serviceId, lang, content])

  // Apply SEO Head & JSON-LD Schema
  useEffect(() => {
    const homeLabel =
      lang === 'pl' ? 'Strona główna' : lang === 'de' ? 'Startseite' : 'Home'
    applySeoHead({
      lang,
      path: currentPath,
      title: content.metaTitle,
      description: content.metaDesc,
      alternates: serviceDef.slugs,
      breadcrumbs: [
        { name: homeLabel, path: homePath },
        { name: content.breadcrumbLabel, path: currentPath },
      ],
      faq: content.faqSection.items,
      serviceSchema: {
        name: content.h1,
        serviceType: content.schemaServiceType,
        description: content.metaDesc,
        priceRange: content.schemaPriceRange,
      },
    })
  }, [lang, currentPath, content, serviceDef, homePath])

  const handleSelectShowcaseVariant = (variantSummary: string) => {
    setSelectedVariant(variantSummary)
    if (typeof window !== 'undefined' && typeof (window as any).trackEvent === 'function') {
      ;(window as any).trackEvent('select_configurator_option', {
        service_id: serviceId,
        lang,
        selected_variant: variantSummary,
      })
    }
    const quoteEl = document.getElementById('wycena')
    if (quoteEl) {
      quoteEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!firstName.trim() || !email.trim() || !message.trim()) {
      toast.error(
        lang === 'pl'
          ? 'Proszę uzupełnić imię, e-mail oraz opis zapytania.'
          : lang === 'de'
            ? 'Bitte füllen Sie Name, E-Mail und Projektbeschreibung aus.'
            : 'Please fill in your name, email, and project description.'
      )
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceName: content.h1,
          selectedVariant: selectedVariant || undefined,
          projectType,
          firstName,
          lastName: '',
          email,
          phone,
          message,
        }),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      if (typeof window !== 'undefined' && typeof (window as any).trackEvent === 'function') {
        ;(window as any).trackEvent('generate_lead', {
          currency: lang === 'pl' ? 'PLN' : 'EUR',
          value: lang === 'pl' ? 300 : 75,
          lead_source: 'service_page_form',
          service_id: serviceId,
          lang,
          project_type: projectType,
          selected_variant: selectedVariant || 'standard',
        })
        ;(window as any).trackEvent('submit_quote_form', {
          service_id: serviceId,
          lang,
          project_type: projectType,
          selected_variant: selectedVariant || 'standard',
        })
      }

      toast.success(
        lang === 'pl'
          ? 'Dziękujemy! Twoje zapytanie zostało wysłane. Odpowiemy w ciągu 24h.'
          : lang === 'de'
            ? 'Vielen Dank! Ihre Anfrage wurde gesendet. Wir antworten innerhalb von 24h.'
            : 'Thank you! Your inquiry has been sent. We will reply within 24h.'
      )
      setFirstName('')
      setEmail('')
      setPhone('')
      setMessage('')
    } catch {
      toast.error(
        lang === 'pl'
          ? 'Nie udało się wysłać formularza. Napisz bezpośrednio na metalizacja@staniax.pl lub zadzwoń +48 882 488 844.'
          : lang === 'de'
            ? 'Senden fehlgeschlagen. Bitte schreiben Sie direkt an metalizacja@staniax.pl.'
            : 'Failed to send form. Please email metalizacja@staniax.pl or call +48 882 488 844.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const activeShowcaseOption =
    content.showcase.options?.find((o) => o.id === activeOptionId) ||
    content.showcase.options?.[0]

  const activeRal =
    content.showcase.ralColors?.find((c) => c.code === selectedRalCode) ||
    content.showcase.ralColors?.[0]
  const activeFinish =
    content.showcase.finishOptions?.find((f) => f.id === selectedFinishId) ||
    content.showcase.finishOptions?.[0]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader lang={lang} ctaTargetId="wycena" />

      <main className="pt-20">
        {/* 1. Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="border-b border-slate-200/80 bg-white/70 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-3">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-600">
              <li>
                <Link to={homePath} className="hover:text-blue-700 transition-colors">
                  {lang === 'pl' ? 'Strona główna' : lang === 'de' ? 'Startseite' : 'Home'}
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-400">
                /
              </li>
              <li className="text-slate-900 font-semibold" aria-current="page">
                {content.breadcrumbLabel}
              </li>
            </ol>
          </div>
        </nav>

        {/* 2. Hero Section (Static LCP image with fetchPriority="high", zero autoplay video) */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/80 py-12 lg:py-20 border-b border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-mono font-semibold text-blue-800">
                  <Sparkle weight="fill" className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                  <span>{content.heroBadge}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.12]">
                  {content.h1}
                </h1>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
                  {content.lead}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <ShimmerButton
                    href="#wycena"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('wycena')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="justify-center"
                  >
                    <span>{content.ctaPrimaryLabel}</span>
                  </ShimmerButton>

                  <a
                    href="#zakres"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('zakres')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-xs sm:text-sm font-bold text-slate-800 hover:border-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {content.ctaSecondaryLabel}
                  </a>
                </div>

                {/* Direct NAP Trust Bar */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-3 text-xs font-mono text-slate-600 border-t border-slate-200/80">
                  <a
                    href="tel:+48882488844"
                    className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-blue-700"
                  >
                    <Phone weight="fill" className="h-4 w-4 text-blue-600" />
                    <span>+48 882 488 844</span>
                  </a>
                  <a
                    href="mailto:metalizacja@staniax.pl"
                    className="inline-flex items-center gap-1.5 hover:text-blue-700"
                  >
                    <EnvelopeSimple weight="fill" className="h-4 w-4 text-blue-600" />
                    <span>metalizacja@staniax.pl</span>
                  </a>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin weight="fill" className="h-4 w-4 text-blue-600" />
                    <span>Józefów k. Warszawy (ul. Wyszyńskiego 116A)</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-2xl aspect-[4/3]">
                  <img
                    src={HERO_IMAGES[content.heroImageKey]}
                    alt={content.heroImageAlt}
                    width={800}
                    height={600}
                    // @ts-expect-error fetchpriority is valid HTML attribute
                    fetchpriority="high"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/15 bg-slate-950/75 px-4 py-3 text-xs font-mono text-white backdrop-blur-md">
                    <span>STANIAX Sp. z o.o. · PVD & Coating</span>
                    <span className="text-blue-300 font-bold">ISO 2409 Class 5B</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Service-Specific Metrics Bar (NumberTicker) */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
              {content.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm"
                >
                  <div className="text-3xl sm:text-4xl font-black text-blue-700 font-mono">
                    <NumberTicker
                      value={metric.value}
                      decimalPlaces={metric.decimalPlaces || 0}
                      prefix={metric.prefix || ''}
                      suffix={metric.suffix || ''}
                    />
                  </div>
                  <p className="mt-1.5 text-sm font-bold uppercase tracking-wider text-slate-900">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Scope & Technical / Pricing Table Section (#zakres) */}
        <section id="zakres" className="py-16 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
            <div className="max-w-3xl space-y-4">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-blue-700">
                {lang === 'pl'
                  ? 'Specyfikacja usługi i możliwości'
                  : lang === 'de'
                    ? 'Leistungsumfang & Spezifikation'
                    : 'Service Scope & Specifications'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
                {content.scopeSection.h2}
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {content.scopeSection.intro}
              </p>
            </div>

            {/* BorderBeam Highlight Card */}
            <div className="relative rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 lg:p-10 shadow-sm overflow-hidden">
              <BorderBeam size={240} duration={12} />
              <div className="relative z-10 space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                    {content.scopeSection.cardTitle}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {content.scopeSection.cardSubtitle}
                  </p>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.scopeSection.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 text-sm text-slate-800 shadow-sm"
                    >
                      <CheckCircle
                        weight="fill"
                        className="h-5 w-5 text-blue-600 shrink-0 mt-0.5"
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Information Gain HTML Table (Pricing or Technical Matrix) */}
            <div className="space-y-3">
              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full text-left border-collapse text-sm min-w-[640px]">
                  <caption className="px-6 py-4 text-left text-xs font-mono font-bold uppercase tracking-wider text-slate-600 bg-slate-50 border-b border-slate-200">
                    {content.scopeSection.table.caption}
                  </caption>
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-100/80 text-slate-900">
                      {content.scopeSection.table.headers.map((header, idx) => (
                        <th key={idx} className="px-6 py-3.5 font-bold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {content.scopeSection.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-blue-50/30 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={cn(
                              'px-6 py-4 align-top leading-relaxed',
                              cIdx === 0
                                ? 'font-bold text-slate-950'
                                : cIdx === row.length - 1
                                  ? 'font-mono font-semibold text-blue-700'
                                  : 'text-slate-700'
                            )}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-600 italic px-1">
                {content.scopeSection.table.footnote}
              </p>
            </div>
          </div>
        </section>

        {/* 5. Deep Editorial / Technical Knowledge Sections (Unique Information Gain) */}
        <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
            {content.editorialSections.map((sec, idx) => (
              <BlurFade key={idx} delay={0.05 * idx}>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight border-b border-slate-200 pb-4">
                    {sec.h2}
                  </h2>

                  <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {sec.subSections && sec.subSections.length > 0 && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                      {sec.subSections.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 space-y-3"
                        >
                          <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                            {sub.h3}
                          </h3>
                          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                            {sub.body}
                          </p>
                          {sub.bullets && sub.bullets.length > 0 && (
                            <ul className="space-y-2 pt-2">
                              {sub.bullets.map((b, bIdx) => (
                                <li
                                  key={bIdx}
                                  className="flex items-start gap-2.5 text-sm text-slate-800"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        {/* 6. Interactive Showcase / Configurator (All 6 Service Variants) */}
        <section id="konfigurator" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-blue-700">
                {lang === 'pl'
                  ? 'Interaktywny pokaz technologii'
                  : lang === 'de'
                    ? 'Interaktiver Technologie-Konfigurator'
                    : 'Interactive Technology Configurator'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
                {content.showcase.h2}
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {content.showcase.subtitle}
              </p>
            </div>

            {/* Variant A: Reflectors Before/After Slider */}
            {serviceId === 'reflectors' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <BeforeAfterSlider
                    beforeImage={automotiveBeforeImg}
                    afterImage={automotiveAfterImg}
                    beforeAlt={content.showcase.beforeAlt || 'Odbłyśnik przed regeneracją'}
                    afterAlt={content.showcase.afterAlt || 'Odbłyśnik po regeneracji PVD'}
                    beforeLabel={content.showcase.beforeLabel}
                    afterLabel={content.showcase.afterLabel}
                  />
                </div>
                <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-5">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-mono font-bold text-blue-800">
                    PVD AL 99,9% · 10⁻⁴ MBAR
                  </span>
                  <h3 className="text-xl font-bold text-slate-950">
                    {lang === 'pl'
                      ? 'Pełne odtworzenie lustra optycznego odbłyśnika'
                      : lang === 'de'
                        ? 'Vollständige Wiederherstellung des optischen Spiegels'
                        : 'Full Restoration of the Optical Reflector Mirror'}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {content.showcase.sliderSummary}
                  </p>
                  <ShimmerButton
                    onClick={() =>
                      handleSelectShowcaseVariant('Regeneracja odbłyśników PVD Al 99,9%')
                    }
                    className="w-full justify-center"
                  >
                    <span>{content.showcase.ctaLabel}</span>
                  </ShimmerButton>
                </div>
              </div>
            )}

            {/* Variant B: Multi-Option Interactive Configurator (Vacuum, Plastic Meta, Plastic Paint, Glass Paint) */}
            {serviceId !== 'reflectors' &&
              serviceId !== 'spray-painting' &&
              content.showcase.options && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Option Tabs */}
                  <div className="lg:col-span-5 space-y-2.5" role="tablist">
                    {content.showcase.options.map((opt) => {
                      const isSelected = opt.id === activeShowcaseOption?.id
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          role="tab"
                          aria-selected={isSelected}
                          onClick={() => {
                            setActiveOptionId(opt.id)
                            if (
                              typeof window !== 'undefined' &&
                              typeof (window as any).trackEvent === 'function'
                            ) {
                              ;(window as any).trackEvent('select_configurator_option', {
                                service_id: serviceId,
                                option_id: opt.id,
                                option_label: opt.label,
                              })
                            }
                          }}
                          className={cn(
                            'w-full text-left rounded-2xl border p-4 transition-all duration-200 flex items-center justify-between gap-3',
                            isSelected
                              ? 'border-blue-600 bg-blue-50/70 shadow-sm ring-1 ring-blue-600'
                              : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                          )}
                        >
                          <div>
                            <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-blue-700">
                              {opt.badge}
                            </span>
                            <span className="mt-0.5 block text-sm sm:text-base font-bold text-slate-950">
                              {opt.label}
                            </span>
                          </div>
                          <ArrowRight
                            weight="bold"
                            className={cn(
                              'h-4 w-4 shrink-0 transition-transform',
                              isSelected ? 'text-blue-700 translate-x-0.5' : 'text-slate-400'
                            )}
                          />
                        </button>
                      )
                    })}
                  </div>

                  {/* Active Option Preview Panel */}
                  {activeShowcaseOption && (
                    <div
                      role="tabpanel"
                      className="lg:col-span-7 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm space-y-6"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                        <div
                          className="h-24 w-full sm:w-36 rounded-2xl border border-slate-300 shadow-inner shrink-0 bg-checker-pattern relative overflow-hidden"
                          aria-hidden="true"
                        >
                          <div
                            className="absolute inset-0"
                            style={{ background: activeShowcaseOption.previewStyle }}
                          />
                        </div>
                        <div>
                          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-[11px] font-mono font-bold uppercase text-blue-800">
                            {activeShowcaseOption.badge}
                          </span>
                          <h3 className="mt-2 text-xl sm:text-2xl font-bold text-slate-950">
                            {activeShowcaseOption.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {activeShowcaseOption.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {activeShowcaseOption.specs.map((sp, i) => (
                          <div
                            key={i}
                            className="rounded-xl border border-slate-200 bg-white p-3.5"
                          >
                            <span className="block text-[11px] font-mono uppercase text-slate-500">
                              {sp.label}
                            </span>
                            <span className="mt-1 block text-xs sm:text-sm font-bold text-slate-900">
                              {sp.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <ShimmerButton
                        onClick={() => handleSelectShowcaseVariant(activeShowcaseOption.label)}
                        className="w-full sm:w-auto justify-center"
                      >
                        <span>{content.showcase.ctaLabel}</span>
                      </ShimmerButton>
                    </div>
                  )}
                </div>
              )}

            {/* Variant C: Spray Painting 21 RAL Colors + 4 Finishes Configurator */}
            {serviceId === 'spray-painting' &&
              content.showcase.ralColors &&
              content.showcase.finishOptions && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                    <div>
                      <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-3">
                        1. {lang === 'pl' ? 'Wybierz kolor z wzornika RAL Classic (21 popularnych odcieni)' : lang === 'de' ? 'RAL-Classic-Farbton wählen (21 beliebte Industriefarben)' : 'Select a RAL Classic shade (21 popular industrial colors)'}
                      </p>
                      <div className="grid grid-cols-3 sm:grid-cols-7 gap-2.5">
                        {content.showcase.ralColors.map((ral) => {
                          const isSelected = ral.code === selectedRalCode
                          return (
                            <button
                              key={ral.code}
                              type="button"
                              onClick={() => setSelectedRalCode(ral.code)}
                              aria-label={`${ral.code} — ${ral.name}`}
                              aria-pressed={isSelected}
                              className={cn(
                                'group flex flex-col items-center rounded-xl border p-2 transition-all',
                                isSelected
                                  ? 'border-blue-600 bg-white ring-2 ring-blue-600 shadow-sm scale-105'
                                  : 'border-slate-200 bg-white hover:border-slate-400'
                              )}
                            >
                              <span
                                className="h-8 w-full rounded-lg border border-black/10 shadow-inner"
                                style={{ backgroundColor: ral.hex }}
                              />
                              <span className="mt-1.5 text-[10px] font-mono font-bold text-slate-900">
                                {ral.code}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-3">
                        2. {lang === 'pl' ? 'Wybierz stopień połysku / strukturę powłoki' : lang === 'de' ? 'Glanzgrad / Oberflächenstruktur wählen' : 'Select surface gloss / texture level'}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {content.showcase.finishOptions.map((fin) => {
                          const isSelected = fin.id === selectedFinishId
                          return (
                            <button
                              key={fin.id}
                              type="button"
                              onClick={() => setSelectedFinishId(fin.id)}
                              aria-pressed={isSelected}
                              className={cn(
                                'rounded-xl border p-3.5 text-left transition-all',
                                isSelected
                                  ? 'border-blue-600 bg-blue-50/70 ring-1 ring-blue-600'
                                  : 'border-slate-200 bg-white hover:border-slate-300'
                              )}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-slate-950">
                                  {fin.label}
                                </span>
                                <span className="text-[11px] font-mono font-semibold text-blue-700">
                                  {fin.gloss}
                                </span>
                              </div>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Live RAL Preview Card */}
                  {activeRal && activeFinish && (
                    <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
                      <div
                        className="h-36 w-full rounded-2xl border border-slate-300 relative overflow-hidden shadow-inner flex items-end p-4"
                        style={{
                          backgroundColor: activeRal.hex,
                          backgroundImage:
                            activeFinish.id === 'gloss'
                              ? 'linear-gradient(135deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0) 48%, rgba(0,0,0,0.18) 100%)'
                              : activeFinish.id === 'satin'
                                ? 'linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(0,0,0,0.12) 100%)'
                                : activeFinish.id === 'structure'
                                  ? 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)'
                                  : 'none',
                          backgroundSize: activeFinish.id === 'structure' ? '6px 6px' : 'cover',
                        }}
                      >
                        <span className="rounded-xl bg-slate-950/80 px-3 py-1.5 text-xs font-mono font-bold text-white backdrop-blur-sm">
                          {activeRal.code} · {activeFinish.label}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold">
                          {activeRal.category} · {activeFinish.gloss}
                        </span>
                        <h3 className="text-xl font-bold text-slate-950">
                          {activeRal.code} — {activeRal.name}
                        </h3>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {activeFinish.desc}
                        </p>
                      </div>

                      <ShimmerButton
                        onClick={() =>
                          handleSelectShowcaseVariant(
                            `${activeRal.code} (${activeRal.name}) — ${activeFinish.label} [${activeFinish.gloss}]`
                          )
                        }
                        className="w-full justify-center"
                      >
                        <span>{content.showcase.ctaLabel}</span>
                      </ShimmerButton>
                    </div>
                  )}
                </div>
              )}
          </div>
        </section>

        {/* 7. 4-Step Technological Process Section (MagicCard) */}
        <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-blue-700">
                {lang === 'pl'
                  ? 'Reżim technologiczny STANIAX'
                  : lang === 'de'
                    ? 'Prozesssicherheit in 4 Stufen'
                    : '4-Stage Technological Workflow'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
                {content.processSection.h2}
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {content.processSection.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.processSection.steps.map((step) => (
                <MagicCard key={step.num} className="h-full">
                  <div className="flex flex-col justify-between h-full space-y-4">
                    <div className="space-y-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-mono font-black text-white">
                        {step.num}
                      </span>
                      <h3 className="text-lg font-bold text-slate-950 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed">{step.desc}</p>
                    </div>
                    <div className="pt-3 border-t border-slate-100">
                      <span className="inline-block text-xs font-mono font-semibold text-blue-700">
                        {step.param}
                      </span>
                    </div>
                  </div>
                </MagicCard>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Applications Marquee & B2B Cards Section */}
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-blue-700">
                {lang === 'pl'
                  ? 'Zastosowania branżowe i kooperacja B2B'
                  : lang === 'de'
                    ? 'Branchen & B2B-Kooperation'
                    : 'Industry Applications & B2B Cooperation'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
                {content.marqueeSection.h2}
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {content.marqueeSection.subtitle}
              </p>
            </div>

            <div className="space-y-2 py-2">
              <Marquee pauseOnHover>
                {content.marqueeSection.row1.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-mono font-semibold text-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover>
                {content.marqueeSection.row2.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/60 px-4 py-2 text-xs font-mono font-semibold text-blue-900"
                  >
                    {tag}
                  </span>
                ))}
              </Marquee>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
              {content.marqueeSection.b2bCards.map((card, idx) => (
                <MagicCard key={idx} className="h-full">
                  <div className="flex flex-col justify-between h-full space-y-4">
                    <div className="space-y-2.5">
                      <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-widest text-blue-700">
                        {card.badge}
                      </span>
                      <h3 className="text-xl font-bold text-slate-950">{card.h3}</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">{card.body}</p>
                    </div>
                    <p className="pt-3 border-t border-slate-100 text-xs font-mono font-semibold text-slate-800">
                      {card.spec}
                    </p>
                  </div>
                </MagicCard>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Case Studies Section (LensImage) */}
        <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-3xl space-y-3">
                <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-blue-700">
                  {lang === 'pl'
                    ? 'Weryfikacja jakości powłok'
                    : lang === 'de'
                      ? 'Qualitätsnachweis am Bauteil'
                      : 'Surface Quality Verification'}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
                  {content.caseStudiesSection.h2}
                </h2>
                <p className="text-base text-slate-700 leading-relaxed">
                  {content.caseStudiesSection.subtitle}
                </p>
              </div>

              <Link
                to={galleryPath}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 hover:border-blue-600 hover:text-blue-700 transition-colors shrink-0"
              >
                <span>
                  {lang === 'pl'
                    ? 'Galeria realizacji'
                    : lang === 'de'
                      ? 'Referenzgalerie'
                      : 'Project gallery'}
                </span>
                <ArrowRight weight="bold" className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {content.caseStudiesSection.items.map((item, idx) => (
                <article
                  key={idx}
                  className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  <LensImage
                    src={CASE_STUDY_IMAGES[item.imageKey]}
                    alt={item.alt}
                    className="aspect-[4/3] w-full bg-slate-900"
                  />
                  <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                    <div className="space-y-2">
                      <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-widest text-blue-700">
                        {item.badge}
                      </span>
                      <h3 className="text-lg font-bold text-slate-950 leading-snug">
                        {item.h3}
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
                    </div>
                    <p className="pt-3 border-t border-slate-100 text-xs font-mono font-bold text-slate-900">
                      {item.param}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {serviceId === 'vacuum-metallization' && <B2bChamberCalculator lang={lang} />}

        {/* 10. FAQ Accordion Section (Always in DOM via CSS grid-rows transition) */}
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-12 space-y-10">
            <div className="space-y-3">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-blue-700">
                FAQ · STANIAX
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
                {content.faqSection.h2}
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {content.faqSection.subtitle}
              </p>
            </div>

            <div className="space-y-3">
              {content.faqSection.items.map((faq, idx) => {
                const isOpen = openFaqIndex === idx
                const panelId = `faq-panel-${serviceId}-${idx}`
                const btnId = `faq-btn-${serviceId}-${idx}`

                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 overflow-hidden transition-colors hover:border-slate-300"
                  >
                    <h3 className="m-0 text-base sm:text-lg font-bold text-slate-950">
                      <button
                        id={btnId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                      >
                        <span>{faq.q}</span>
                        <CaretDown
                          weight="bold"
                          className={cn(
                            'h-5 w-5 text-blue-600 shrink-0 transition-transform duration-200',
                            isOpen && 'rotate-180'
                          )}
                        />
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      className={cn(
                        'grid transition-all duration-200 ease-in-out',
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-80'
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-200/60">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 11. Quote Form & Local NAP Section (#wycena) */}
        <section
          id="wycena"
          className="py-16 lg:py-24 bg-slate-100 border-b border-slate-200 scroll-mt-20"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Direct Contact & Shipping Address */}
              <div className="lg:col-span-5 space-y-6">
                <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-blue-700">
                  {lang === 'pl'
                    ? 'Bezpłatna wycena w 24h'
                    : lang === 'de'
                      ? 'Kostenloses Angebot in 24h'
                      : 'Free Quote Within 24h'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  {content.quoteSection.h2}
                </h2>
                <p className="text-base text-slate-700 leading-relaxed">
                  {content.quoteSection.intro}
                </p>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 space-y-5 shadow-sm">
                  <div className="flex items-start gap-3.5">
                    <MapPin weight="fill" className="h-5 w-5 text-blue-600 shrink-0 mt-1" />
                    <div className="text-sm">
                      <p className="font-bold text-slate-950">
                        {lang === 'pl'
                          ? 'Zakład produkcyjny i adres do wysyłki części:'
                          : lang === 'de'
                            ? 'Produktionswerk & Lieferadresse für Teile:'
                            : 'Production Plant & Shipping Address:'}
                      </p>
                      <p className="text-slate-700 mt-0.5">
                        STANIAX Sp. z o.o. — ul. kard. Stefana Wyszyńskiego 116A, 05-420 Józefów k. Warszawy
                      </p>
                      <a
                        href="https://share.google/N7ybGPMOEDI3ZE31X"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-1 text-xs font-mono font-bold text-blue-700 hover:underline"
                      >
                        {lang === 'pl'
                          ? 'Wyznacz trasę do zakładu w Józefowie →'
                          : lang === 'de'
                            ? 'Route zum Werk Józefów berechnen →'
                            : 'Get directions to Józefów plant →'}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
                    <Phone weight="fill" className="h-5 w-5 text-blue-600 shrink-0 mt-1" />
                    <div className="text-sm">
                      <p className="font-bold text-slate-950">
                        {lang === 'pl'
                          ? 'Konsultacja z technologiem:'
                          : lang === 'de'
                            ? 'Direktkontakt Technologe:'
                            : 'Direct Technologist Line:'}
                      </p>
                      <a
                        href="tel:+48882488844"
                        className="text-base font-mono font-bold text-blue-700 hover:underline"
                      >
                        +48 882 488 844
                      </a>
                      <p className="text-xs text-slate-500 mt-0.5">
                        <Clock className="inline h-3.5 w-3.5 mr-1" />
                        Pon. – Pt.: 07:00 – 17:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
                    <EnvelopeSimple weight="fill" className="h-5 w-5 text-blue-600 shrink-0 mt-1" />
                    <div className="text-sm">
                      <p className="font-bold text-slate-950">E-mail (rysunki CAD / zdjęcia):</p>
                      <a
                        href="mailto:metalizacja@staniax.pl"
                        className="font-mono font-semibold text-blue-700 hover:underline block"
                      >
                        metalizacja@staniax.pl
                      </a>
                      <a
                        href="mailto:office@staniax.pl"
                        className="font-mono text-xs text-slate-600 hover:underline block mt-0.5"
                      >
                        office@staniax.pl
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Quote Form */}
              <div className="lg:col-span-7">
                <form
                  onSubmit={handleFormSubmit}
                  className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-md space-y-5"
                >
                  {selectedVariant && (
                    <div className="flex items-center justify-between gap-3 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-xs font-mono text-blue-900">
                      <span>
                        <strong>
                          {lang === 'pl'
                            ? 'Wybrany wariant z konfiguratora:'
                            : lang === 'de'
                              ? 'Gewählte Variante:'
                              : 'Selected configurator option:'}
                        </strong>{' '}
                        {selectedVariant}
                      </span>
                      <button
                        type="button"
                        onClick={() => setSelectedVariant('')}
                        className="text-blue-700 underline hover:text-blue-900 shrink-0"
                      >
                        {lang === 'pl' ? 'Zmień' : lang === 'de' ? 'Ändern' : 'Clear'}
                      </button>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="quote-project-type"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      {lang === 'pl'
                        ? 'Zakres zapytania *'
                        : lang === 'de'
                          ? 'Art der Anfrage *'
                          : 'Project Scope *'}
                    </label>
                    <select
                      id="quote-project-type"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    >
                      {content.quoteSection.projectTypes.map((pt, i) => (
                        <option key={i} value={pt}>
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="quote-name"
                        className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        {lang === 'pl'
                          ? 'Imię i nazwisko / Firma *'
                          : lang === 'de'
                            ? 'Name / Firma *'
                            : 'Name / Company *'}
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder={
                          lang === 'pl'
                            ? 'np. Jan Kowalski / Zakład Produkcyjny'
                            : 'e.g. John Smith / Acme GmbH'
                        }
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="quote-phone"
                        className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        {lang === 'pl'
                          ? 'Telefon kontaktowy'
                          : lang === 'de'
                            ? 'Telefonnummer'
                            : 'Phone Number'}
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+48 000 000 000"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-email"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      E-mail *
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="kontakt@firma.pl"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-message"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      {lang === 'pl'
                        ? 'Opis detali (materiał, wymiary, ilość sztuk, oczekiwany efekt) *'
                        : lang === 'de'
                          ? 'Projektbeschreibung (Werkstoff, Maße, Stückzahl, Oberfläche) *'
                          : 'Part Details (material, dimensions, quantity, desired finish) *'}
                    </label>
                    <textarea
                      id="quote-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        lang === 'pl'
                          ? 'Opisz swój projekt lub podaj model reflektorów / parametry detali do wyceny...'
                          : lang === 'de'
                            ? 'Beschreiben Sie Ihr Bauteil oder Scheinwerfermodell...'
                            : 'Describe your components or headlamp model for quotation...'
                      }
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  <ShimmerButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full justify-center py-4"
                  >
                    <span>
                      {isSubmitting
                        ? lang === 'pl'
                          ? 'Wysyłanie zapytania...'
                          : lang === 'de'
                            ? 'Wird gesendet...'
                            : 'Sending inquiry...'
                        : content.quoteSection.submitLabel}
                    </span>
                    <ArrowRight weight="bold" className="h-4 w-4" />
                  </ShimmerButton>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* 12. See Also / Internal Silo Linking Section (Non-colliding descriptive anchors) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              {content.seeAlsoSection.h2}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.seeAlsoSection.links.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition-all hover:border-blue-600 hover:bg-blue-50/30 hover:shadow-md"
                >
                  <div className="space-y-2.5">
                    <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-widest text-blue-700">
                      {item.badge}
                    </span>
                    <h3 className="text-lg font-bold text-slate-950 group-hover:text-blue-700 transition-colors">
                      {item.anchorText}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-700">
                    <span>
                      {lang === 'pl'
                        ? 'Przejdź do strony'
                        : lang === 'de'
                          ? 'Zur Seite'
                          : 'View page'}
                    </span>
                    <ArrowRight
                      weight="bold"
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>

            {(() => {
              const cluster = getServiceClusterLinks(serviceId, lang)
              return (
                <div className="pt-8 border-t border-slate-200 space-y-4">
                  <h3 className="text-lg font-bold text-slate-900">{cluster.heading}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {cluster.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 hover:border-blue-600 hover:bg-blue-50/40 hover:text-blue-700 transition-colors"
                      >
                        <div className="min-w-0">
                          <span className="block font-bold">{item.title}</span>
                          <span className="block text-[11px] font-mono text-slate-500 truncate">
                            {item.meta}
                          </span>
                        </div>
                        <ArrowRight
                          weight="bold"
                          className="h-4 w-4 text-slate-400 group-hover:text-blue-600 shrink-0"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })()}
          </div>
        </section>
      </main>

      <BigFooter lang={lang} />
    </div>
  )
}

export default ServicePage
