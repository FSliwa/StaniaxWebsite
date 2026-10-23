import { useState, useEffect, type MouseEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowRight, Clock, ShareNetwork, Printer, BookOpen, ArrowUpRight } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { BigFooter } from '@/components/BigFooter'
import { toast } from 'sonner'
import { t, type Lang } from '@/lib/translations'
import heroImage from '@/assets/vacuum-metalization.jpg'
// Treść artykułu trzymana w osobnym pliku HTML – ten sam plik czyta scripts/prerender.js,
// więc Google i użytkownik widzą identyczny tekst.
import articleHtml from '@/content/metalizacja-prozniowa-cena.html?raw'

const SLUG = 'news/metalizacja-prozniowa-cena'

const text = {
  newsTitle: 'Aktualności',
  articleBadge: 'Poradnik',
  date: '23 października 2026',
  readTime: '17 min czytania',
  heading: 'Metalizacja próżniowa – cena, koszt usługi i czynniki wpływające na wycenę',
  lead: 'Ile kosztuje metalizacja próżniowa? Wyjaśniamy, od czego zależy cena: materiał, geometria, maskowanie, lakiery, wielkość serii i wymagania jakościowe – oraz jak przygotować zapytanie, żeby szybko dostać konkretną ofertę.',
  imageAlt: 'Seria nasadek z tworzywa po metalizacji próżniowej na zawieszce w zakładzie STANIAX',
  metaTitle: 'Metalizacja próżniowa – cena i czynniki wyceny | STANIAX',
  metaDesc: 'Ile kosztuje metalizacja próżniowa? Wyjaśniamy, od czego zależy cena: materiał, geometria, maskowanie, lakiery, wielkość serii i wymagania jakościowe. Sprawdź, jak uzyskać szybką wycenę STANIAX.',
  ctaTitle: 'Bezpłatna wycena',
  ctaDesc: 'Prześlij zdjęcie lub rysunek detalu, materiał, ilość i oczekiwany efekt – przygotujemy wycenę metalizacji dopasowaną do Twojego projektu.',
  ctaBtn: 'Zapytaj o wycenę',
  copyTitle: 'Skopiuj link',
  copySuccess: 'Link do artykułu został skopiowany do schowka!',
  printTitle: 'Drukuj artykuł',
  bottomHeader: 'Masz detal do metalizacji?',
  bottomText: 'Opisz go w formularzu – materiał, wymiary, ilość i oczekiwany efekt. Przygotujemy bezpłatną wycenę metalizacji próżniowej i doradzimy, jak obniżyć koszt jednostkowy przy serii.',
  bottomBtn: 'Wyślij zapytanie ofertowe',
  galleryBtn: 'Zobacz nasze realizacje',
}

function ArticleVacuumPrice({ lang = 'pl' as Lang }: { lang?: Lang }) {
  const navigate = useNavigate()
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)

    const originalTitle = document.title
    const metaDesc = document.querySelector('meta[name="description"]')
    const originalDescription = metaDesc?.getAttribute('content')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const originalOgTitle = ogTitle?.getAttribute('content')
    const ogDesc = document.querySelector('meta[property="og:description"]')
    const originalOgDesc = ogDesc?.getAttribute('content')

    document.title = text.metaTitle
    metaDesc?.setAttribute('content', text.metaDesc)
    ogTitle?.setAttribute('content', text.metaTitle)
    ogDesc?.setAttribute('content', text.metaDesc)

    let canonical = document.querySelector('link[rel="canonical"]')
    let createdCanonical = false
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
      createdCanonical = true
    }
    const originalCanonical = canonical.getAttribute('href')
    canonical.setAttribute('href', `https://www.staniax.pl/${SLUG}`)

    return () => {
      document.title = originalTitle
      if (metaDesc && originalDescription) metaDesc.setAttribute('content', originalDescription)
      if (ogTitle && originalOgTitle) ogTitle.setAttribute('content', originalOgTitle)
      if (ogDesc && originalOgDesc) ogDesc.setAttribute('content', originalOgDesc)
      if (originalCanonical) canonical?.setAttribute('href', originalCanonical)
      else if (createdCanonical && canonical) document.head.removeChild(canonical)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) setReadingProgress((window.scrollY / totalScroll) * 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToElement = (el: Element | null) => {
    if (!el) return
    const lenis = (window as any).lenis
    if (lenis) {
      lenis.scrollTo(el, { offset: -100, duration: 1.2 })
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const goToHomeSection = (id: string) => {
    navigate('/')
    setTimeout(() => scrollToElement(document.getElementById(id)), 300)
  }

  const scrollToContact = () => goToHomeSection('contact')

  // Linki w treści artykułu to zwykłe <a href>. Przechwytujemy je, żeby:
  // #kotwica -> płynne przewinięcie, /#sekcja -> strona główna + przewinięcie,
  // /podstrona -> nawigacja SPA bez przeładowania. Linki zewnętrzne działają normalnie.
  const handleArticleClick = (e: MouseEvent<HTMLDivElement>) => {
    const anchor = (e.target as HTMLElement).closest('a')
    if (!anchor || e.metaKey || e.ctrlKey || e.shiftKey || anchor.target === '_blank') return
    const href = anchor.getAttribute('href') || ''

    if (href.startsWith('#')) {
      e.preventDefault()
      scrollToElement(document.getElementById(decodeURIComponent(href.slice(1))))
    } else if (href.startsWith('/#')) {
      e.preventDefault()
      goToHomeSection(href.slice(2))
    } else if (href.startsWith('/')) {
      e.preventDefault()
      navigate(href)
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: text.heading, url: window.location.href }).catch(() => {})
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast.success(text.copySuccess)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div
        className="fixed top-0 left-0 z-[60] h-1 bg-accent transition-all duration-100 ease-out"
        style={{ width: `${readingProgress}%` }}
        aria-hidden="true"
      />

      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
          <Link to="/news" className="group flex items-center gap-3 text-left" aria-label="Powrót do aktualności">
            <div className="leading-tight">
              <span className="block text-xs uppercase tracking-[0.5em] text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                STANIAX
              </span>
              <span className="block text-lg font-black">{text.newsTitle}</span>
            </div>
          </Link>
          <div className="flex items-center gap-3 sm:gap-6">
            <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium">
              <Link to="/#kim-jestesmy" className="text-muted-foreground hover:text-accent transition-colors">{t(lang, 'oStaniax')}</Link>
              <Link to="/#about" className="text-muted-foreground hover:text-accent transition-colors">{t(lang, 'oferta')}</Link>
              <Link to="/#projects" className="text-muted-foreground hover:text-accent transition-colors">{t(lang, 'realizacje')}</Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-accent transition-colors">{t(lang, 'galeria')}</Link>
              <Link to="/#contact" className="text-muted-foreground hover:text-accent transition-colors">{t(lang, 'kontakt')}</Link>
            </nav>
            <Button className="font-semibold text-xs sm:text-sm px-3 sm:px-4" onClick={scrollToContact}>
              {t(lang, 'kontakt')}
              <ArrowRight className="ml-1 sm:ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-28 pb-20">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                {text.articleBadge}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {text.date}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                {text.readTime}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4">
              {text.heading}
            </h1>
            <p className="text-muted-foreground/80 text-base md:text-lg mb-8 italic leading-relaxed">
              {text.lead}
            </p>
          </div>

          <div className="relative w-full h-[30vh] sm:h-[45vh] min-h-[250px] rounded-[32px] overflow-hidden mb-12 border border-border/40">
            <img src={heroImage} alt={text.imageAlt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </div>

          <div className="grid gap-12 grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_320px] items-start">
            <article
              className="article-prose min-w-0"
              onClick={handleArticleClick}
              dangerouslySetInnerHTML={{ __html: articleHtml }}
            />

            <aside className="space-y-8 lg:sticky lg:top-28">
              <aside data-nosnippet="true" role="complementary" className="rounded-[24px] border border-border/80 bg-card/65 backdrop-blur p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl -z-10 group-hover:scale-125 transition-transform duration-500" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">{text.ctaTitle}</h4>
                <p className="text-sm text-muted-foreground/90 mb-6 leading-relaxed">{text.ctaDesc}</p>
                <Button className="w-full font-semibold group/btn" onClick={scrollToContact}>
                  {text.ctaBtn}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </aside>

              <div className="rounded-[24px] border border-border/80 bg-card/30 p-6 space-y-4">
                <button onClick={handleShare} className="flex items-center gap-3 w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors font-medium py-1">
                  <ShareNetwork className="w-5 h-5 text-accent" />
                  {text.copyTitle}
                </button>
                <button onClick={() => window.print()} className="flex items-center gap-3 w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors font-medium py-1">
                  <Printer className="w-5 h-5 text-accent" />
                  {text.printTitle}
                </button>
              </div>
            </aside>
          </div>

          <div className="bg-muted/30 border border-border/80 rounded-[32px] p-6 md:p-8 my-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10 group-hover:scale-125 transition-transform duration-500" />
            <h3 className="text-xl font-bold text-foreground mb-4">{text.bottomHeader}</h3>
            <p className="text-sm md:text-base mb-6 leading-relaxed text-muted-foreground">{text.bottomText}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="font-semibold" onClick={scrollToContact}>
                {text.bottomBtn}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Link to="/gallery" className={cn(buttonVariants({ variant: 'outline' }), 'font-semibold')}>
                {text.galleryBtn}
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <BigFooter lang={lang} />
    </div>
  )
}

export default ArticleVacuumPrice
