import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, CaretDown, List, Phone, X } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { t, type Lang } from '@/lib/translations'
import { SERVICE_ORDER, SERVICES } from '@/data/services'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ShimmerButton } from './ui/ShimmerButton'

interface SiteHeaderProps {
  lang?: Lang
  ctaTargetId?: string
  ctaLabel?: string
}

export function SiteHeader({
  lang = 'pl',
  ctaTargetId = 'wycena',
  ctaLabel,
}: SiteHeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  const homePath = lang === 'pl' ? '/' : `/${lang}`
  const galleryPath = lang === 'pl' ? '/gallery' : `/${lang}/gallery`
  const newsPath = lang === 'pl' ? '/news' : `/${lang}/news`

  const defaultCtaLabel =
    ctaLabel ||
    (lang === 'pl' ? 'Bezpłatna wycena' : lang === 'de' ? 'Angebot anfordern' : 'Request a quote')

  useEffect(() => {
    setDropdownOpen(false)
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false)
        setMobileMenuOpen(false)
      }
    }
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleQuoteScroll = (e: React.MouseEvent) => {
    const targetEl =
      document.getElementById(ctaTargetId) || document.getElementById('contact')
    if (targetEl) {
      e.preventDefault()
      setMobileMenuOpen(false)
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 py-3.5">
        {/* Brand Logo */}
        <Link
          to={homePath}
          className="group flex flex-col leading-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md"
        >
          <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
            STANIAX
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-600">
            {lang === 'pl'
              ? 'Metalizacja & Lakiernia'
              : lang === 'de'
                ? 'PVD & Industrielackiererei'
                : 'PVD & Industrial Coating'}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label={lang === 'pl' ? 'Nawigacja główna' : lang === 'de' ? 'Hauptnavigation' : 'Main navigation'}
          className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700"
        >
          <Link
            to={`${homePath}#kim-jestesmy`}
            className="hover:text-blue-700 transition-colors py-1"
          >
            {t(lang, 'oStaniax')}
          </Link>

          {/* Services Dropdown (Always in DOM for crawlers & keyboard accessibility) */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={() => setDropdownOpen((v) => !v)}
              className="inline-flex items-center gap-1.5 py-1 hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              <span>{t(lang, 'oferta')}</span>
              <CaretDown
                weight="bold"
                className={cn(
                  'h-3.5 w-3.5 transition-transform duration-200',
                  dropdownOpen && 'rotate-180 text-blue-600'
                )}
              />
            </button>

            <div
              className={cn(
                'absolute left-0 top-full pt-2 w-[340px] transition-all duration-200 z-50',
                dropdownOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                  : 'opacity-0 -translate-y-1 pointer-events-none invisible'
              )}
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-2.5 shadow-2xl shadow-slate-900/10">
                <p className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                  {lang === 'pl'
                    ? '6 wyspecjalizowanych usług STANIAX'
                    : lang === 'de'
                      ? '6 Fachleistungen von STANIAX'
                      : '6 Specialized STANIAX Services'}
                </p>
                <ul className="space-y-1">
                  {SERVICE_ORDER.map((id) => {
                    const svc = SERVICES[id]
                    const content = svc.locales[lang]
                    const href = svc.slugs[lang]
                    const isActive = location.pathname === href

                    return (
                      <li key={id}>
                        <Link
                          to={href}
                          className={cn(
                            'flex items-center justify-between rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold transition-colors',
                            isActive
                              ? 'bg-blue-50 text-blue-700'
                              : 'text-slate-800 hover:bg-slate-100 hover:text-blue-700'
                          )}
                        >
                          <span>{content.navLabel}</span>
                          <ArrowRight className="h-3.5 w-3.5 text-blue-600 shrink-0 ml-2" />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>

          <Link
            to={`${homePath}#projects`}
            className="hover:text-blue-700 transition-colors py-1"
          >
            {t(lang, 'realizacje')}
          </Link>
          <Link
            to={galleryPath}
            className={cn(
              'hover:text-blue-700 transition-colors py-1',
              location.pathname === galleryPath && 'text-blue-700 font-bold'
            )}
          >
            {t(lang, 'galeria')}
          </Link>
          <Link
            to={newsPath}
            className={cn(
              'hover:text-blue-700 transition-colors py-1',
              location.pathname.startsWith(newsPath) && 'text-blue-700 font-bold'
            )}
          >
            {t(lang, 'aktualnosci')}
          </Link>
          <a
            href="tel:+48882488844"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-slate-800 hover:text-blue-700 transition-colors"
          >
            <Phone weight="fill" className="h-3.5 w-3.5 text-blue-600" />
            <span>+48 882 488 844</span>
          </a>
        </nav>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <LanguageSwitcher />
          <ShimmerButton
            href={`#${ctaTargetId}`}
            onClick={handleQuoteScroll}
            className="hidden sm:inline-flex px-4 py-2.5 text-xs"
          >
            <span>{defaultCtaLabel}</span>
            <ArrowRight weight="bold" className="h-3.5 w-3.5" />
          </ShimmerButton>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Zamknij menu nawigacji' : 'Otwórz menu nawigacji'}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <List className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Always rendered in DOM via CSS grid transition for SEO & accessibility) */}
      <div
        className={cn(
          'lg:hidden grid transition-all duration-300 ease-in-out border-t border-slate-200/80 bg-white/98 backdrop-blur-xl',
          mobileMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        )}
      >
        <div className="overflow-hidden">
          <div className="container mx-auto px-6 py-5 space-y-5">
            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 mb-2">
                {t(lang, 'oferta')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {SERVICE_ORDER.map((id) => {
                  const svc = SERVICES[id]
                  const content = svc.locales[lang]
                  return (
                    <Link
                      key={id}
                      to={svc.slugs[lang]}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/70 px-3.5 py-2.5 text-xs font-bold text-slate-900 hover:border-blue-500 hover:bg-blue-50"
                    >
                      <span>{content.navLabel}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-blue-600" />
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-3 border-t border-slate-200 text-sm font-semibold text-slate-800">
              <Link to={`${homePath}#kim-jestesmy`} onClick={() => setMobileMenuOpen(false)}>
                {t(lang, 'oStaniax')}
              </Link>
              <Link to={`${homePath}#projects`} onClick={() => setMobileMenuOpen(false)}>
                {t(lang, 'realizacje')}
              </Link>
              <Link to={galleryPath} onClick={() => setMobileMenuOpen(false)}>
                {t(lang, 'galeria')}
              </Link>
              <Link to={newsPath} onClick={() => setMobileMenuOpen(false)}>
                {t(lang, 'aktualnosci')}
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="tel:+48882488844"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs font-mono font-bold text-slate-900"
              >
                <Phone weight="fill" className="h-4 w-4 text-blue-600" />
                <span>+48 882 488 844</span>
              </a>
              <ShimmerButton
                href={`#${ctaTargetId}`}
                onClick={handleQuoteScroll}
                className="w-full justify-center py-3 text-xs"
              >
                <span>{defaultCtaLabel}</span>
                <ArrowRight weight="bold" className="h-4 w-4" />
              </ShimmerButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
