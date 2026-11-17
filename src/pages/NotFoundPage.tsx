import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import type { Lang } from '@/lib/translations'
import { SERVICE_ORDER, SERVICES } from '@/data/services'
import { applySeoHead } from '@/lib/seo'
import { SiteHeader } from '@/components/SiteHeader'
import { BigFooter } from '@/components/BigFooter'

export function NotFoundPage({ lang: propLang }: { lang?: Lang }) {
  const location = useLocation()
  const lang: Lang =
    propLang ||
    (location.pathname.startsWith('/en')
      ? 'en'
      : location.pathname.startsWith('/de')
        ? 'de'
        : 'pl')
  const homePath = lang === 'pl' ? '/' : `/${lang}`

  useEffect(() => {
    applySeoHead({
      lang,
      path: location.pathname,
      title:
        lang === 'pl'
          ? '404 — Nie znaleziono strony | STANIAX'
          : lang === 'de'
            ? '404 — Seite nicht gefunden | STANIAX'
            : '404 — Page Not Found | STANIAX',
      description:
        lang === 'pl'
          ? 'Strona o podanym adresie nie istnieje. Sprawdź ofertę usług metalizacji próżniowej, regeneracji reflektorów i lakierowania STANIAX.'
          : 'The requested page could not be found. Explore STANIAX vacuum metallization and coating services.',
      alternates: { pl: '/', en: '/en', de: '/de' },
      noindex: true,
    })
  }, [lang, location.pathname])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader lang={lang} />
      <main className="pt-32 pb-24">
        <div className="container mx-auto max-w-4xl px-6 text-center space-y-8">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-mono font-bold text-blue-800">
            HTTP 404
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            {lang === 'pl'
              ? 'Nie znaleziono szukanej podstrony'
              : lang === 'de'
                ? 'Die gesuchte Seite wurde nicht gefunden'
                : 'The requested page could not be found'}
          </h1>
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            {lang === 'pl'
              ? 'Wybierz jedną z naszych 6 głównych usług technologicznych poniżej lub przejdź na stronę główną STANIAX.'
              : lang === 'de'
                ? 'Wählen Sie unten eine unserer 6 Hauptleistungen oder kehren Sie zur Startseite zurück.'
                : 'Select one of our 6 core surface engineering services below or return to the home page.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left pt-4">
            {SERVICE_ORDER.map((id) => {
              const svc = SERVICES[id]
              const c = svc.locales[lang]
              return (
                <Link
                  key={id}
                  to={svc.slugs[lang]}
                  className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-600 hover:shadow-md transition-all flex items-center justify-between"
                >
                  <span className="text-sm font-bold text-slate-900">{c.navLabel}</span>
                  <ArrowRight className="h-4 w-4 text-blue-600 shrink-0" />
                </Link>
              )
            })}
          </div>

          <div className="pt-4">
            <Link
              to={homePath}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-blue-700 transition-colors"
            >
              <span>
                {lang === 'pl'
                  ? 'Wróć na stronę główną STANIAX'
                  : lang === 'de'
                    ? 'Zur Startseite'
                    : 'Return to STANIAX Home'}
              </span>
              <ArrowRight weight="bold" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <BigFooter lang={lang} />
    </div>
  )
}

export default NotFoundPage
