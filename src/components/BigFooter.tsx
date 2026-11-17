import { MagneticButton } from '@/components/ui/MagneticButton'
import { ArrowUpRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { t, type Lang } from '@/lib/translations'
import { SERVICE_ORDER, SERVICES } from '@/data/services'

export function BigFooter({ lang = 'pl' as Lang }: { lang?: Lang }) {
  const currentYear = new Date().getFullYear()
  const homePath = lang === 'pl' ? '/' : `/${lang}`
  const galleryPath = lang === 'pl' ? '/gallery' : `/${lang}/gallery`
  const newsPath = lang === 'pl' ? '/news' : `/${lang}/news`
  const privacyPath =
    lang === 'pl'
      ? '/polityka-prywatnosci'
      : lang === 'de'
        ? '/de/datenschutz'
        : '/en/privacy-policy'
  const cookiesPath =
    lang === 'pl'
      ? '/polityka-cookies'
      : lang === 'de'
        ? '/de/cookie-richtlinie'
        : '/en/cookie-policy'

  const scrollToQuoteOrContact = () => {
    const el = document.getElementById('wycena') || document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.location.href = `${homePath}#contact`
    }
  }

  return (
    <footer className="bg-black text-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Section: Company Info & Stats */}
        <div className="mb-16 border-b border-white/10 pb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="max-w-2xl">
              <p className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                {t(lang, 'footerHeading')}
              </p>
              <p className="text-2xl md:text-3xl text-gray-400 mb-6">
                {t(lang, 'footerSubheading')}
              </p>
              <p className="text-lg font-medium text-blue-400 mb-8">
                {t(lang, 'footerSpecialist')}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <MagneticButton
                  onClick={scrollToQuoteOrContact}
                  className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  {t(lang, 'footerFreeConsultation')}
                </MagneticButton>
                <MagneticButton
                  onClick={scrollToQuoteOrContact}
                  className="border border-white text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  {t(lang, 'footerGetQuote')} <ArrowUpRight weight="bold" />
                </MagneticButton>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 text-center sm:text-left">
              <div>
                <span className="block text-4xl font-black text-white mb-1">25+</span>
                <span className="text-xs uppercase tracking-widest text-gray-300">
                  {t(lang, 'footerYearsExp')}
                </span>
              </div>
              <div>
                <span className="block text-4xl font-black text-white mb-1">2500+</span>
                <span className="text-xs uppercase tracking-widest text-gray-300">
                  {t(lang, 'footerProjectsDone')}
                </span>
              </div>
              <div>
                <span className="block text-4xl font-black text-white mb-1">24H</span>
                <span className="text-xs uppercase tracking-widest text-gray-300">
                  {t(lang, 'footerResponseTime')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: 6 Dedicated Service Links & NAP Contact */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 text-sm lg:text-base tracking-wider text-gray-300 font-mono">
            {/* Column 1: 6 Dedicated Services + Gallery + News */}
            <div className="space-y-8">
              <div>
                <p className="text-white font-bold mb-4 text-lg uppercase">
                  {t(lang, 'footerServicesTitle')}
                </p>
                <ul className="space-y-3">
                  {SERVICE_ORDER.map((id) => {
                    const svc = SERVICES[id]
                    const content = svc.locales[lang]
                    return (
                      <li key={id}>
                        <Link
                          to={svc.slugs[lang]}
                          className="hover:text-white transition-colors cursor-pointer"
                        >
                          {content.navLabel}
                        </Link>
                      </li>
                    )
                  })}
                  <li>
                    <Link
                      to={galleryPath}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      {lang === 'pl'
                        ? 'Galeria realizacji'
                        : lang === 'de'
                          ? 'Referenzgalerie'
                          : 'Project gallery'}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={newsPath}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      {t(lang, 'aktualnosci')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2: Addresses */}
            <div className="space-y-8">
              <div>
                <p className="text-white font-bold mb-4 text-lg uppercase">
                  {t(lang, 'footerAddressTitle')}
                </p>
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-semibold mb-1">{t(lang, 'footerFactory')}</p>
                    <p>POLSKA, JÓZEFÓW 05-420,</p>
                    <p>
                      UL. WYSZYŃSKIEGO 116A{' '}
                      <a
                        href="https://share.google/N7ybGPMOEDI3ZE31X"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 ml-1 text-xs"
                      >
                        (MAPA-NAWIGACJA JÓZEFÓW)
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">{t(lang, 'footerHQ')}</p>
                    <p>POLSKA, WARSZAWA 00-132,</p>
                    <p>
                      UL. GRZYBOWSKA 5A{' '}
                      <a
                        href="https://maps.google.com/?q=Grzybowska+5A+Warszawa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 ml-1 text-xs"
                      >
                        (MAPA-SIEDZIBA WARSZAWA)
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Contact & Hours */}
            <div className="space-y-8">
              <div>
                <p className="text-white font-bold mb-4 text-lg uppercase">
                  {t(lang, 'footerContactTitle')}
                </p>
                <p className="mb-2">
                  TEL:{' '}
                  <a
                    href="tel:+48882488844"
                    className="text-white hover:text-blue-400 transition-colors font-semibold"
                  >
                    +48 882 488 844
                  </a>
                </p>
                <p>
                  EMAIL:{' '}
                  <a
                    href="mailto:metalizacja@staniax.pl"
                    className="text-white hover:text-blue-400 transition-colors font-semibold"
                  >
                    metalizacja@staniax.pl
                  </a>
                </p>
                <p className="mt-1">
                  EMAIL:{' '}
                  <a
                    href="mailto:office@staniax.pl"
                    className="text-white hover:text-blue-400 transition-colors font-semibold"
                  >
                    office@staniax.pl
                  </a>
                </p>
              </div>

              <div>
                <p className="text-white font-bold mb-4 text-lg uppercase">
                  {t(lang, 'footerHoursTitle')}
                </p>
                <p className="mb-1">{t(lang, 'footerHoursWeekday')}</p>
                <p>{t(lang, 'footerHoursWeekend')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Big Type */}
        <div className="relative border-t border-white/10 pt-12">
          <motion.div
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15vw] leading-[0.8] font-black tracking-tighter text-center md:text-left mix-blend-difference select-none pointer-events-none"
          >
            STANIAX
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 text-xs font-mono text-gray-400 uppercase tracking-widest border-t border-white/5 pt-8">
            <p>&copy; {currentYear} STANIAX Sp.&nbsp;z&nbsp;o.o. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-6">
              <Link to={privacyPath} className="hover:text-white transition-colors">
                {lang === 'pl'
                  ? 'Polityka prywatności'
                  : lang === 'de'
                    ? 'Datenschutzerklärung'
                    : 'Privacy Policy'}
              </Link>
              <Link to={cookiesPath} className="hover:text-white transition-colors">
                {lang === 'pl'
                  ? 'Polityka cookies'
                  : lang === 'de'
                    ? 'Cookie-Richtlinie'
                    : 'Cookie Policy'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
