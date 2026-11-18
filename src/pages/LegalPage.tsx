import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { Lang } from "@/lib/translations";
import { applySeoHead } from "@/lib/seo";
import { SiteHeader } from '@/components/SiteHeader'
import { BigFooter } from '@/components/BigFooter'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { LEGAL_DATA } from '@/data/legal'

interface LegalPageProps {
  type: 'privacy' | 'cookies'
  lang?: Lang
}

export function LegalPage({ type, lang = 'pl' }: LegalPageProps) {
  const group = LEGAL_DATA[type]
  const text = group.locales[lang]
  const currentPath = group.alternates[lang]
  const homePath = lang === 'pl' ? '/' : `/${lang}`

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    applySeoHead({
      lang,
      path: currentPath,
      title: text.title,
      description: text.desc,
      noindex: true,
      alternates: group.alternates,
      breadcrumbs: [
        {
          name: lang === 'pl' ? 'Strona główna' : lang === 'de' ? 'Startseite' : 'Home',
          path: homePath,
        },
        { name: text.h1, path: currentPath },
      ],
    })
  }, [lang, currentPath, text, group, homePath])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader lang={lang} />
      <main className="pt-20 pb-20">
        <Breadcrumbs
          items={[
            {
              name: lang === 'pl' ? 'Strona główna' : lang === 'de' ? 'Startseite' : 'Home',
              path: homePath,
            },
            { name: text.h1 },
          ]}
          className="mb-8"
        />
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-12 space-y-8">
          <div className="space-y-4">
            <Link
              to={homePath}
              className="inline-block text-xs font-mono font-bold uppercase tracking-wider text-blue-700 hover:underline"
            >
              ←{" "}
              {lang === "pl"
                ? "Powrót na stronę główną"
                : lang === "de"
                  ? "Zurück zur Startseite"
                  : "Back to home page"}
            </Link>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              {text.h1}
            </h1>
            <p className="text-base text-slate-700 leading-relaxed">
              {text.lead}
            </p>
          </div>

          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
            {text.sections.map((sec, idx) => (
              <section key={idx} className="space-y-2">
                <h2 className="text-xl font-bold text-slate-950">{sec.h2}</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {sec.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <BigFooter lang={lang} />
    </div>
  );
}

export default LegalPage;
