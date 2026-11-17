import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, ArrowRight, Clock } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { SiteHeader } from '@/components/SiteHeader'
import { BigFooter } from '@/components/BigFooter'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { type Lang } from '@/lib/translations'
import { applySeoHead } from '@/lib/seo'
import { resolveLanguageAlternates } from '@/data/services'
import { getHomeEngineeringHub } from '@/data/hub-links'
import { ARTICLE_LIBRARY_CONTENT as content } from '@/data/news'
import { newsItemsPl, newsItemsEn, newsItemsDe } from './NewsPage'

function ArticleLibraryPage({ lang = "pl" as Lang }: { lang?: Lang }) {
  const activeLang: Lang = lang === "en" ? "en" : lang === "de" ? "de" : "pl";
  const text = content[activeLang];
  const newsItems =
    activeLang === "pl"
      ? newsItemsPl
      : activeLang === "de"
        ? newsItemsDe
        : newsItemsEn;
    const homePath = activeLang === 'pl' ? '/' : `/${activeLang}`
  const newsPath = activeLang === 'pl' ? '/news' : `/${activeLang}/news`
  const canonicalPath =
    activeLang === 'pl' ? '/news/biblioteka' : activeLang === 'de' ? '/de/news/bibliothek' : '/en/news/library'

  const getArticlePath = (basePath: string) => {
    if (!basePath || basePath === '#') return newsPath
    if (activeLang === 'pl') return basePath
    if (basePath.startsWith(`/${activeLang}/`)) return basePath
    return `/${activeLang}${basePath}`
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    applySeoHead({
      title: text.metaTitle,
      description: text.desc,
      path: canonicalPath,
      lang: activeLang,
      alternates: resolveLanguageAlternates(canonicalPath),
      noindex: true,
      breadcrumbs: [
        {
          name: activeLang === 'pl' ? 'Strona główna' : activeLang === 'de' ? 'Startseite' : 'Home',
          path: homePath,
        },
        {
          name: activeLang === 'pl' ? 'Aktualności' : activeLang === 'de' ? 'Aktuelles' : 'News & Guides',
          path: newsPath,
        },
        { name: text.badge, path: canonicalPath },
      ],
    })
  }, [activeLang, canonicalPath, homePath, newsPath, text.badge, text.desc, text.metaTitle])

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader lang={activeLang} />

      <main className="pt-20 pb-20">
        <Breadcrumbs
          items={[
            {
              name: activeLang === 'pl' ? 'Strona główna' : activeLang === 'de' ? 'Startseite' : 'Home',
              path: homePath,
            },
            {
              name: activeLang === 'pl' ? 'Aktualności' : activeLang === 'de' ? 'Aktuelles' : 'News & Guides',
              path: newsPath,
            },
            { name: text.badge },
          ]}
        />
        <section className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="max-w-3xl space-y-6">
            <Link
              to={newsPath}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "font-semibold",
              )}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {text.backToNews}
            </Link>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
                {text.badge}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              {text.title}
            </h1>
            <p className="text-lg text-muted-foreground font-medium">
              {text.desc}
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {newsItems.map((article) => (
              <Card
                key={article.title}
                className="flex h-full flex-col overflow-hidden border border-border/60 bg-card"
              >
                                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    width={800}
                    height={600}
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
                    <Link to={getArticlePath(article.path)} className="transition-colors hover:text-accent">
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col space-y-4">
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
                  <Link
                    to={getArticlePath(article.path)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                  >
                    {article.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {(() => {
          const hub = getHomeEngineeringHub(activeLang)
          return (
            <section className="container mx-auto px-6 lg:px-12 pt-14 space-y-6">
              <div className="space-y-2 max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                  {hub.eyebrow}
                </p>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                  {hub.heading}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {hub.subheading}
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {hub.groups.map((group) => (
                  <Card key={group.title} className="border border-border/60 bg-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base font-bold">{group.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2.5">
                      {group.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center justify-between gap-2 rounded-lg border border-border/50 px-3 py-2 text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
                        >
                          <span className="truncate">{item.title}</span>
                          <ArrowRight className="h-4 w-4 shrink-0" />
                        </Link>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )
        })()}
      </main>

      <BigFooter lang={activeLang} />
    </div>
  );
}

export default ArticleLibraryPage;
