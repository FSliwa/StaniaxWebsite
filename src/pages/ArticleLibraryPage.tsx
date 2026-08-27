import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, ArrowRight, Clock } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { BigFooter } from '@/components/BigFooter'
import { type Lang } from '@/lib/translations'
import { newsItemsPl, newsItemsEn, newsItemsDe } from './NewsPage'

const content = {
  pl: {
    header: 'Biblioteka',
    badge: 'Pełne archiwum',
    title: 'Biblioteka artykułów',
    metaTitle: 'Biblioteka artykułów | STANIAX',
    desc: 'Wszystkie artykuły i aktualności STANIAX w jednym miejscu — poradniki techniczne, nowości z branży metalizacji próżniowej i wiadomości z naszego zakładu.',
    backToNews: 'Wróć do aktualności',
    readMore: 'Czytaj więcej'
  },
  en: {
    header: 'Library',
    badge: 'Full archive',
    title: 'Article library',
    metaTitle: 'Article library | STANIAX',
    desc: 'All STANIAX articles and news in one place — technical guides, vacuum metallization industry updates and news from our plant.',
    backToNews: 'Back to news',
    readMore: 'Read more'
  },
  de: {
    header: 'Bibliothek',
    badge: 'Volles Archiv',
    title: 'Artikelbibliothek',
    metaTitle: 'Artikelbibliothek | STANIAX',
    desc: 'Alle STANIAX-Artikel und Neuigkeiten an einem Ort — technische Ratgeber, Updates aus der Vakuummetallisierung und Nachrichten aus unserem Werk.',
    backToNews: 'Zurück zu Aktuelles',
    readMore: 'Mehr lesen'
  }
}

function ArticleLibraryPage({ lang = 'pl' as Lang }: { lang?: Lang }) {
  const text = content[lang]
  const newsItems = lang === 'pl' ? newsItemsPl : lang === 'de' ? newsItemsDe : newsItemsEn
  const newsPath = lang === 'pl' ? '/news' : `/${lang}/news`

  // Toleruje wpisy zapisane ze slugiem juz zawierajacym prefiks jezyka
  // (czesc pozycji EN/DE ma go w danych, czesc nie).
  const getArticlePath = (basePath: string) => {
    if (basePath === '#') return '#'
    if (lang === 'pl') return basePath
    if (basePath.startsWith(`/${lang}/`)) return basePath
    return `/${lang}${basePath}`
  }

  useEffect(() => {
    const prev = document.title
    document.title = text.metaTitle
    return () => { document.title = prev }
  }, [text.metaTitle])

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
          <Link to={newsPath} className="group flex items-center gap-3 text-left" aria-label={text.backToNews}>
            <div className="leading-tight">
              <span className="block text-xs uppercase tracking-[0.5em] text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                STANIAX
              </span>
              <span className="block text-lg font-black">{text.header}</span>
            </div>
          </Link>
          <Link to={newsPath} className={cn(buttonVariants({ variant: 'outline' }), 'font-semibold')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {text.backToNews}
          </Link>
        </div>
      </header>

      <main className="pt-28 pb-20">
        <section className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
              {text.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">{text.title}</h1>
            <p className="text-lg text-muted-foreground font-medium">{text.desc}</p>
          </div>
        </section>

        <section className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {newsItems.map((article) => (
              <Card key={article.title} className="flex h-full flex-col overflow-hidden border border-border/60 bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">{article.category}</span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/40" aria-hidden />
                    <span className="inline-flex items-center gap-2 uppercase tracking-[0.35em]">
                      <Clock className="h-3.5 w-3.5" />
                      {article.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold leading-tight">
                    {article.path && article.path !== '#' ? (
                      <Link to={getArticlePath(article.path)} className="transition-colors hover:text-accent">
                        {article.title}
                      </Link>
                    ) : (
                      article.title
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col space-y-4">
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
                  {article.path && article.path !== '#' && (
                    <Link
                      to={getArticlePath(article.path)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                    >
                      {text.readMore}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <BigFooter lang={lang} />
    </div>
  )
}

export default ArticleLibraryPage
