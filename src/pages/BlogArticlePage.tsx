import { useEffect, useMemo, useState, type MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Clock,
  ListBullets,
  Printer,
  ShareNetwork,
} from '@phosphor-icons/react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import { SiteHeader } from '@/components/SiteHeader'
import { BigFooter } from '@/components/BigFooter'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ArticleAuthorBox } from '@/components/ArticleAuthorBox'
import { renderArticleRichText } from '@/lib/articleRichText'
import { applySeoHead } from '@/lib/seo'
import { NEWS_IMAGES } from '@/lib/newsImages'
import { SERVICES, SERVICE_SLUGS, resolveLanguageAlternates } from '@/data/services'
import { getBlogPost, type ArticleBlock } from '@/data/blog-posts'
import NotFoundPage from './NotFoundPage'

const stripMarkdown = (s: string) =>
  s.replace(/\[([^\]]*)\]\((?:[^()]|\([^)]*\))*\)/g, '$1').replace(/\*\*/g, '').trim()

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2
          id={block.id}
          className="scroll-mt-28 text-2xl md:text-3xl font-black text-foreground pt-6 border-b border-border pb-2"
        >
          {block.text}
        </h2>
      )
    case 'h3':
      return <h3 className="text-xl font-bold text-foreground pt-2">{block.text}</h3>
    case 'p':
      return <p>{renderArticleRichText(block.text)}</p>
    case 'ul':
      return (
        <ul className="list-disc pl-6 space-y-2">
          {block.items.map((item, idx) => (
            <li key={idx}>{renderArticleRichText(item)}</li>
          ))}
        </ul>
      )
    case 'table':
      return (
        <div className="my-6 overflow-x-auto rounded-2xl border border-border/80 bg-card/30">
          <table className="w-full text-left border-collapse text-sm min-w-[560px]">
            <thead>
              <tr className="border-b border-border/80 bg-muted/40">
                {block.headers.map((h, idx) => (
                  <th key={idx} className="p-4 font-bold text-foreground align-top">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {block.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-muted/10 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className={cn('p-4 align-top', cIdx === 0 && 'font-medium text-foreground')}
                    >
                      {renderArticleRichText(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

export default function BlogArticlePage({ slug }: { slug: string }) {
  const article = getBlogPost(slug)
  const [readingProgress, setReadingProgress] = useState(0)

  const heroImage = article ? NEWS_IMAGES[article.image] : ''
  const servicePath = article?.serviceId ? SERVICE_SLUGS[article.serviceId].pl : null
  const serviceName = article?.serviceId ? SERVICES[article.serviceId].locales.pl.navLabel : null
  const toc = useMemo(
    () => (article ? article.blocks.filter((b): b is Extract<ArticleBlock, { type: 'h2' }> => b.type === 'h2') : []),
    [article],
  )

  const breadcrumbs = article
    ? [
        { name: 'Strona główna', path: '/' },
        { name: 'Aktualności', path: '/news' },
        { name: article.heading, path: article.slug },
      ]
    : []

  useEffect(() => {
    if (!article) return
    window.scrollTo(0, 0)
    applySeoHead({
      title: article.metaTitle,
      description: article.metaDescription,
      path: article.slug,
      lang: 'pl',
      alternates: resolveLanguageAlternates(article.slug),
      singleLanguage: true,
      ogType: 'article',
      breadcrumbs,
      faq: article.faq.map((f) => ({ q: stripMarkdown(f.q), a: stripMarkdown(f.a) })),
      articleSchema: {
        headline: article.heading,
        description: article.metaDescription,
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        image: heroImage,
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [article, heroImage])

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (total > 0) setReadingProgress((window.scrollY / total) * 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!article) return <NotFoundPage lang="pl" />

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: article.heading, url: window.location.href }).catch(() => {})
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast.success('Link skopiowany do schowka')
    }
  }

  const scrollToSection = (id: string) => (e: MouseEvent) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', `#${id}`)
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div
        className="fixed top-0 left-0 z-[60] h-1 bg-accent transition-all duration-100 ease-out"
        style={{ width: `${readingProgress}%` }}
        aria-hidden="true"
      />

      <SiteHeader lang="pl" />

      <main className="pt-28 pb-20">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <Breadcrumbs variant="inline" className="mb-6" items={breadcrumbs} />

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                {article.category}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.displayDate}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4">
              {article.heading}
            </h1>
            <p className="text-muted-foreground/80 text-base md:text-lg mb-6 leading-relaxed">
              {renderArticleRichText(article.lead)}
            </p>

            <ArticleAuthorBox
              lang="pl"
              datePublished={article.datePublished}
              dateModified={article.dateModified}
            />

            {servicePath && serviceName && (
              <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50/90 p-5 text-slate-900 shadow-sm">
                <p className="text-sm font-semibold">
                  Szukasz wyceny usługi?{' '}
                  <Link to={servicePath} className="text-blue-700 underline font-bold hover:text-blue-800">
                    Przejdź do strony usługi: {serviceName} →
                  </Link>
                </p>
              </div>
            )}
          </div>

          <div className="relative w-full h-[30vh] sm:h-[45vh] min-h-[250px] rounded-[32px] overflow-hidden mb-12 border border-border/40">
            <img
              src={heroImage}
              alt={article.imageAlt}
              width={1600}
              height={900}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_320px] items-start">
            <article className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg min-w-0">
              {article.blocks.map((block, idx) => (
                <Block key={idx} block={block} />
              ))}

              {article.faq.length > 0 && (
                <section className="space-y-6 pt-8 mt-8 border-t border-border/80">
                  <h2 id="faq" className="scroll-mt-28 text-2xl md:text-3xl font-black text-foreground">
                    {article.faqTitle || 'Najczęściej zadawane pytania'}
                  </h2>
                  <div className="space-y-6">
                    {article.faq.map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <h3 className="text-lg font-bold text-foreground">{item.q}</h3>
                        <p className="text-base pl-4 border-l border-accent/30">
                          {renderArticleRichText(item.a)}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {article.related.length > 0 && (
                <section className="pt-8 space-y-3">
                  <h2 className="text-xl font-black text-foreground">Powiązane artykuły</h2>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {article.related.map((link) => (
                      <li key={link.url}>
                        <Link
                          to={link.url}
                          className="flex h-full items-center justify-between gap-3 rounded-xl border border-border/60 px-4 py-3 text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="h-4 w-4 shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {article.sources.length > 0 && (
                <section className="pt-6 space-y-2">
                  <h2 className="text-base font-bold text-foreground">Źródła</h2>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    {article.sources.map((s) => (
                      <li key={s.url}>{renderArticleRichText(`[${s.label}](${s.url})`)}</li>
                    ))}
                  </ul>
                </section>
              )}
            </article>

            <aside className="space-y-8 lg:sticky lg:top-28">
              {toc.length > 0 && (
                <nav
                  aria-label="Spis treści"
                  className="rounded-[24px] border border-border/80 bg-card/30 p-6 hidden lg:block max-h-[50vh] overflow-y-auto"
                >
                  <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground mb-4">
                    <ListBullets className="w-4 h-4 text-accent" />
                    Spis treści
                  </p>
                  <ol className="space-y-2 text-sm">
                    {toc.map((h) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          onClick={scrollToSection(h.id)}
                          className="text-muted-foreground hover:text-accent transition-colors leading-snug block"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                    {article.faq.length > 0 && (
                      <li>
                        <a
                          href="#faq"
                          onClick={scrollToSection('faq')}
                          className="text-muted-foreground hover:text-accent transition-colors leading-snug block"
                        >
                          {article.faqTitle || 'Najczęściej zadawane pytania'}
                        </a>
                      </li>
                    )}
                  </ol>
                </nav>
              )}

              <div
                data-nosnippet="true"
                className="rounded-[24px] border border-border/80 bg-card/65 backdrop-blur p-6"
              >
                <p className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
                  Bezpłatna wycena
                </p>
                <p className="text-sm text-muted-foreground/90 mb-6 leading-relaxed">
                  Wyślij rysunek lub zdjęcie detalu - doradzimy technologię i przygotujemy wycenę.
                </p>
                <Link
                  to={servicePath || '/#contact'}
                  className={cn(buttonVariants({ variant: 'default' }), 'w-full font-semibold')}
                >
                  {serviceName ? `Usługa: ${serviceName}` : 'Zapytaj o wycenę'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-[24px] border border-border/80 bg-card/30 p-6 space-y-4">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-3 w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors font-medium py-1"
                >
                  <ShareNetwork className="w-5 h-5 text-accent" />
                  Udostępnij artykuł
                </button>
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-3 w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors font-medium py-1"
                >
                  <Printer className="w-5 h-5 text-accent" />
                  Drukuj artykuł
                </button>
              </div>
            </aside>
          </div>

          {article.closingCta && (
            <div className="bg-muted/30 border border-border/80 rounded-[32px] p-6 md:p-8 my-12">
              <p className="text-base md:text-lg text-foreground mb-6 leading-relaxed">
                {renderArticleRichText(article.closingCta)}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/#contact" className={cn(buttonVariants({ variant: 'default' }), 'font-semibold')}>
                  Wyślij zapytanie
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link to="/gallery" className={cn(buttonVariants({ variant: 'outline' }), 'font-semibold')}>
                  Zobacz realizacje STANIAX
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <BigFooter lang="pl" />
    </div>
  )
}
