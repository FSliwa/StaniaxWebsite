import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from '@phosphor-icons/react'
import { BigFooter } from '@/components/BigFooter'
import { LEGAL_DOCS, type LegalDocId } from '@/lib/legal'
import { type Lang } from '@/lib/translations'

type LegalPageProps = {
  doc: LegalDocId
  lang: Lang
}

export default function LegalPage({ doc, lang }: LegalPageProps) {
  const content = LEGAL_DOCS[doc][lang]
  const homePath = lang === 'pl' ? '/' : `/${lang}`

  // Tytuł i opis muszą pokrywać się z tym, co wstawia prerender, żeby crawler
  // i użytkownik widzieli to samo.
  useEffect(() => {
    const previousTitle = document.title
    document.title = content.metaTitle
    const meta = document.querySelector('meta[name="description"]')
    const previousDesc = meta?.getAttribute('content')
    meta?.setAttribute('content', content.metaDesc)
    return () => {
      document.title = previousTitle
      if (previousDesc) meta?.setAttribute('content', previousDesc)
    }
  }, [content])

  const backLabel = lang === 'pl' ? 'Strona główna' : lang === 'de' ? 'Startseite' : 'Home'
  const updatedLabel =
    lang === 'pl' ? 'Ostatnia aktualizacja' : lang === 'de' ? 'Zuletzt aktualisiert' : 'Last updated'

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-100">
        <div className="container mx-auto flex items-center justify-between px-6 py-5 lg:px-12">
          <Link to={homePath} className="text-lg font-black tracking-tight">
            STANIAX
          </Link>
          <Link
            to={homePath}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" weight="bold" />
            {backLabel}
          </Link>
        </div>
      </header>

      <main className="container mx-auto max-w-3xl px-6 py-14 lg:px-12 lg:py-20">
        <h1 className="text-4xl font-black tracking-tight lg:text-5xl">{content.title}</h1>
        <p className="mt-3 text-sm text-gray-500">
          {updatedLabel}: {content.updated}
        </p>
        <p className="mt-8 text-lg leading-relaxed text-gray-600">{content.intro}</p>

        <div className="mt-12 space-y-10">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold tracking-tight lg:text-2xl">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-relaxed text-gray-600">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                  {section.list.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>

      <BigFooter lang={lang} />
    </div>
  )
}
