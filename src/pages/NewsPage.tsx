import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, ArrowRight, Clock, List, X } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { BigFooter } from '@/components/BigFooter'
import { t, type Lang } from '@/lib/translations'
import vacuumMetalizationChamber from '@/assets/vacuum_metalization_chamber.jpg'
import newsAviationImage from '@/assets/news_aviation.jpg'
import colorfulPackagingImage from '@/assets/colorful_packaging.png'

const newsItemsPl = [
  {
    title: 'Nowoczesna metalizacja próżniowa i regeneracja odbłyśników w Józefowie',
    date: '25 maja 2026',
    category: 'Inwestycje',
    excerpt: 'W warszawskim centrum STANIAX uruchomiona została nowoczesna linia technologiczna. Naszą specjalnością jest precyzyjna metalizacja próżniowa oraz metalizacja natryskowa elementów z tworzyw i metali. W ofercie firmy, którą prowadzi Dariusz Staniak (metalizacja próżniowa Dariusz Staniak), znajduje się m.in. profesjonalna metalizacja odbłyśnika oraz metalizacja odbłyśników samochodowych. Wdrażamy także zaawansowane usługi takie jak metalizacja plastiku i ogólne metalizowanie próżniowe. Nowy punkt usługowy – metalizacja próżniowa Józefów – gwarantuje najwyższą jakość powłok lustrzanych i znacznie krótszy czas realizacji zamówień.',
    image: vacuumMetalizationChamber,
    path: '#'
  },
  {
    title: 'Jak metalizacja wpływa na wydajność materiałów? Odkryj jej tajniki!',
    date: '4 czerwca 2026',
    category: 'Artykuł',
    excerpt: 'Odkryj, jak zaawansowana metalizacja próżniowa i powłoki ochronne PVD zwiększają wydajność materiałów w branży lotniczej. Poznaj szczegóły strategicznego partnerstwa!',
    image: newsAviationImage,
    path: '/news/partnerstwo-z-wiodacym-producentem-lotniczym'
  },
  {
    title: 'Metalizacja próżniowa rewolucjonizuje branżę beauty',
    date: '11 czerwca 2026',
    category: 'Artykuł',
    excerpt: 'Branża kosmetyczna przechodzi prawdziwą rewolucję opakowaniową. Poznaj zalety metalizacji próżniowej i lakierowania tworzyw w segmencie beauty.',
    image: colorfulPackagingImage,
    path: '/news/metalizacja-prozniowa-rewolucjonizuje-branze-beauty'
  },
  {
    title: 'Nagroda Innowacyjności Przemysłowej 2025',
    date: '5 czerwca 2025',
    category: 'Nagrody',
    excerpt: 'STANIAX został uhonorowany prestiżową Nagrodą Innowacyjności Przemysłowej za wkład w rozwój ekologicznych rozwiązań metalizacyjnych.',
    image: 'https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?w=1200&h=800&fit=crop&crop=center',
    path: '#'
  },
  {
    title: 'Szkolenia dla Zespołu Inżynieryjnego',
    date: '18 maja 2025',
    category: 'Rozwój',
    excerpt: 'Nasz zespół ukończył zaawansowane szkolenia z zakresu nowych technologii powłokowych i kontroli jakości, zwiększając kompetencje techniczne firmy.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&crop=center',
    path: '#'
  }
]

const newsItemsEn = [
  {
    title: 'Modern Vacuum Metallization and Reflector Regeneration in Józefów',
    date: 'May 25, 2026',
    category: 'Investments',
    excerpt: 'A modern technological line has been launched at the Warsaw center of STANIAX. Our specialty is precise vacuum metallization and spray coating of plastic and metal parts. The company\'s offer, run by Dariusz Staniak (vacuum metallization Dariusz Staniak), includes professional reflector metallization and automotive reflector metallization. We also implement advanced services such as plastic metallization and general vacuum metallization. The new service point — vacuum metallization Józefów — guarantees the highest quality of mirror coatings and significantly shorter order execution times.',
    image: vacuumMetalizationChamber,
    path: '#'
  },
  {
    title: 'How Metallization Affects Material Performance? Discover Its Secrets!',
    date: 'June 4, 2026',
    category: 'Article',
    excerpt: 'Discover how advanced vacuum metallization and PVD protective coatings increase material performance in the aerospace industry. Find out the details of our strategic partnership!',
    image: newsAviationImage,
    path: '/news/how-does-metallization-affect-material-performance'
  },
  {
    title: 'Vacuum Metallization Revolutionizes the Beauty Industry',
    date: 'June 11, 2026',
    category: 'Article',
    excerpt: 'The cosmetics packaging market is undergoing a real revolution. Discover the benefits of vacuum metallization and plastic painting in the beauty segment.',
    image: colorfulPackagingImage,
    path: '/news/vacuum-metallization-revolutionizes-beauty-industry'
  },
  {
    title: 'Expansion of the Quality Control Department',
    date: 'March 15, 2025',
    category: 'Quality',
    excerpt: 'Investment in state-of-the-art measuring equipment and expansion of the research engineering team to ensure 100% repeatability of parameters.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop&crop=center',
    path: '#'
  },
  {
    title: 'Industrial Innovation Award 2025',
    date: 'June 5, 2025',
    category: 'Awards',
    excerpt: 'STANIAX has been honored with the prestigious Industrial Innovation Award for its contribution to the development of ecological metallization solutions.',
    image: 'https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?w=1200&h=800&fit=crop&crop=center',
    path: '#'
  },
  {
    title: 'Training for the Engineering Team',
    date: 'May 18, 2025',
    category: 'Development',
    excerpt: 'Our team completed advanced training in new coating technologies and quality control, increasing the company\'s technical competencies.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&crop=center',
    path: '#'
  }
]

const content = {
  pl: {
    newsTitle: 'Aktualności',
    newsCenter: 'Centrum wiadomości STANIAX',
    newsDesc: 'Najświeższe wiadomości o naszych inwestycjach, partnerstwach, wyróżnieniach i innowacjach, które wyznaczają kierunek metalizacji próżniowej w Polsce.',
    featuredNews: 'Wyróżniona informacja',
    readMore: 'Czytaj więcej',
    fullArticle: 'Pełna treść',
    otherNews: 'Archiwalne wiadomości',
    moreUpdates: 'Więcej aktualizacji STANIAX',
    backToTop: 'Powrót na górę',
    newsletterTitle: 'Newsletter STANIAX',
    newsletterHeading: 'Zostań pierwszą osobą, która dowie się o naszych projektach',
    newsletterDesc: 'Dołącz do grona naszych partnerów i otrzymuj informacje o premierach technologicznych, webinarach i raportach z realizacji.',
    contactTeam: 'Skontaktuj się z zespołem',
    visitUs: 'Odwiedź naszą siedzibę',
    backToHome: 'Wróć do strony głównej',
    latestNews: 'Najnowsze informacje',
  },
  en: {
    newsTitle: 'News',
    newsCenter: 'STANIAX News Center',
    newsDesc: 'The latest news about our investments, partnerships, awards, and innovations that set the direction for vacuum metallization.',
    featuredNews: 'Featured News',
    readMore: 'Read more',
    fullArticle: 'Full article',
    otherNews: 'Archived updates',
    moreUpdates: 'More STANIAX updates',
    backToTop: 'Back to top',
    newsletterTitle: 'STANIAX Newsletter',
    newsletterHeading: 'Be the first to know about our projects',
    newsletterDesc: 'Join our partners and receive information about technological launches, webinars, and case studies.',
    contactTeam: 'Contact the team',
    visitUs: 'Visit our headquarters',
    backToHome: 'Back to home page',
    latestNews: 'Latest updates',
  }
}

function NewsPage({ lang = 'pl' as Lang }: { lang?: Lang }) {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const activeLang = lang === 'pl' ? 'pl' : 'en'
  const text = content[activeLang]
  const newsItems = lang === 'pl' ? newsItemsPl : newsItemsEn

  const featuredArticle = newsItems[0]
  const secondaryArticles = newsItems.slice(1, 4)
  const moreArticles = newsItems.slice(4)

  useEffect(() => {
    window.scrollTo(0, 0)

    // Dynamic SEO Metadata updates
    const originalTitle = document.title
    const originalDescription = document.querySelector('meta[name="description"]')?.getAttribute('content')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const originalOgTitle = ogTitle?.getAttribute('content')
    const ogDesc = document.querySelector('meta[property="og:description"]')
    const originalOgDesc = ogDesc?.getAttribute('content')
    
    const pageTitle = lang === 'pl' 
      ? 'Baza Wiedzy i Aktualności - Metalizacja Próżniowa | STANIAX' 
      : 'Knowledge Base & News - Vacuum Metallization | STANIAX'
    const pageDesc = lang === 'pl'
      ? 'Aktualności, poradniki i artykuły eksperckie na temat metalizacji próżniowej oraz lakierowania. Baza wiedzy o uszlachetnianiu powierzchni.'
      : 'News, guides, and expert articles about vacuum metallization and lacquering. Knowledge base on surface refinement.'

    document.title = pageTitle

    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', pageDesc)
    }

    if (ogTitle) {
      ogTitle.setAttribute('content', pageTitle)
    }

    if (ogDesc) {
      ogDesc.setAttribute('content', pageDesc)
    }

    // Canonical link update
    let canonical = document.querySelector('link[rel="canonical"]')
    let createdCanonical = false
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
      createdCanonical = true
    }
    const originalCanonical = canonical.getAttribute('href')
    const canonicalUrl = `https://www.staniax.pl${lang === 'pl' ? '' : '/' + lang}/news`
    canonical.setAttribute('href', canonicalUrl)

    return () => {
      document.title = originalTitle
      if (metaDesc && originalDescription) {
        metaDesc.setAttribute('content', originalDescription)
      }
      if (ogTitle && originalOgTitle) {
        ogTitle.setAttribute('content', originalOgTitle)
      }
      if (ogDesc && originalOgDesc) {
        ogDesc.setAttribute('content', originalOgDesc)
      }
      if (canonical) {
        if (originalCanonical) {
          canonical.setAttribute('href', originalCanonical)
        } else if (createdCanonical) {
          document.head.removeChild(canonical)
        }
      }
    }
  }, [lang])

  const homePath = lang === 'pl' ? '/' : `/${lang}`

  const getArticlePath = (basePath: string) => {
    if (basePath === '#') return '#'
    if (lang === 'pl') return basePath
    return `/${lang}${basePath}`
  }

  const languageLinks = [
    { flag: "🇵🇱", lang: "pl" as const, path: "/news", label: "Polski" },
    { flag: "🇬🇧", lang: "en" as const, path: "/en/news", label: "English" },
    { flag: "🇩🇪", lang: "de" as const, path: "/de/news", label: "Deutsch" },
  ]
  
  const scrollToContact = () => {
    navigate(homePath)
    setTimeout(() => {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        const lenis = (window as any).lenis
        if (lenis) {
          lenis.scrollTo(contactSection, {
            offset: -80,
            duration: 1.5,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          })
        } else {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
          <Link to={homePath} className="group flex items-center gap-3 text-left" aria-label={text.backToHome}>
            <div className="leading-tight">
              <span className="block text-xs uppercase tracking-[0.5em] text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                STANIAX
              </span>
              <span className="block text-lg font-black">
                {text.newsTitle}
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-3 sm:gap-6">
            <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium">
              <Link to={lang === 'pl' ? '/#kim-jestesmy' : `/${lang}#kim-jestesmy`} className="text-muted-foreground hover:text-accent transition-colors">
                {t(lang, 'oStaniax')}
              </Link>
              <Link to={lang === 'pl' ? '/#about' : `/${lang}#about`} className="text-muted-foreground hover:text-accent transition-colors">
                {t(lang, 'oferta')}
              </Link>
              <Link to={lang === 'pl' ? '/#projects' : `/${lang}#projects`} className="text-muted-foreground hover:text-accent transition-colors">
                {t(lang, 'realizacje')}
              </Link>
              <Link to={lang === 'pl' ? '/gallery' : `/${lang}/gallery`} className="text-muted-foreground hover:text-accent transition-colors">
                {t(lang, 'galeria')}
              </Link>
              <Link to={lang === 'pl' ? '/#contact' : `/${lang}#contact`} className="text-muted-foreground hover:text-accent transition-colors">
                {t(lang, 'kontakt')}
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              {languageLinks.map((l) => (
                <Link
                  key={l.lang}
                  to={l.path}
                  aria-label={l.label}
                  className={cn(
                    'text-lg sm:text-xl rounded-full transition-all duration-300 hover:scale-125 cursor-pointer select-none inline-block relative',
                    lang === l.lang ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-90'
                  )}
                >
                  {l.flag}
                </Link>
              ))}
            </div>
            <Button
              className="font-semibold text-xs sm:text-sm px-3 sm:px-4"
              onClick={scrollToContact}
            >
              {t(lang, 'kontakt')}
              <ArrowRight className="ml-1 sm:ml-2 h-4 w-4" />
            </Button>
            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <List className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl px-6 py-6 space-y-4">
            <nav className="flex flex-col gap-4 text-sm font-medium">
              <Link to={lang === 'pl' ? '/#kim-jestesmy' : `/${lang}#kim-jestesmy`} className="text-muted-foreground hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {t(lang, 'oStaniax')}
              </Link>
              <Link to={lang === 'pl' ? '/#about' : `/${lang}#about`} className="text-muted-foreground hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {t(lang, 'oferta')}
              </Link>
              <Link to={lang === 'pl' ? '/#projects' : `/${lang}#projects`} className="text-muted-foreground hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {t(lang, 'realizacje')}
              </Link>
              <Link to={lang === 'pl' ? '/gallery' : `/${lang}/gallery`} className="text-muted-foreground hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {t(lang, 'galeria')}
              </Link>
              <Link to={lang === 'pl' ? '/#contact' : `/${lang}#contact`} className="text-muted-foreground hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {t(lang, 'kontakt')}
              </Link>
            </nav>
            <div className="flex flex-col gap-3 pt-2 border-t border-border/40">
              <Link
                to={homePath}
                className={cn(buttonVariants({ variant: 'outline' }), 'font-semibold w-full justify-center')}
                onClick={() => setMobileMenuOpen(false)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {text.backToHome}
              </Link>
              <Button
                className="font-semibold w-full"
                onClick={() => { setMobileMenuOpen(false); scrollToContact(); }}
              >
                {t(lang, 'kontakt')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-28">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background/95 to-background" aria-hidden />
          <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
                  {text.latestNews}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                  {text.newsCenter}
                </h1>
                <p className="text-lg text-muted-foreground font-medium max-w-xl">
                  {text.newsDesc}
                </p>
              </div>
              <Card className="border border-border/60 bg-card/80 backdrop-blur-xl">
                <CardHeader className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">{text.featuredNews}</p>
                  <CardTitle className="text-2xl font-black leading-tight">
                    {featuredArticle.path && featuredArticle.path !== '#' ? (
                      <Link to={getArticlePath(featuredArticle.path)} className="hover:text-accent transition-colors">
                        {featuredArticle.title}
                      </Link>
                    ) : (
                      featuredArticle.title
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground/90">
                    {featuredArticle.excerpt}
                  </p>
                  {featuredArticle.path && featuredArticle.path !== '#' ? (
                    <Link 
                      to={getArticlePath(featuredArticle.path)} 
                      className="inline-flex items-center gap-2 text-sm text-accent hover:underline font-semibold"
                    >
                      {text.readMore}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <Button variant="link" className="px-0 text-accent font-semibold">
                      {text.readMore}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 border-y border-border/60">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr]">
              <Card className="overflow-hidden border-0 shadow-2xl h-full flex flex-col">
                <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full lg:flex-1 min-h-[480px] lg:min-h-0 flex flex-col justify-end p-8">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" aria-hidden />
                  <div className="relative z-10 space-y-4 text-white">
                    <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em]">
                      {featuredArticle.category}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black leading-tight max-w-2xl">
                      {featuredArticle.path && featuredArticle.path !== '#' ? (
                        <Link to={getArticlePath(featuredArticle.path)} className="hover:text-accent/80 transition-colors">
                          {featuredArticle.title}
                        </Link>
                      ) : (
                        featuredArticle.title
                      )}
                    </h2>
                    <p className="text-sm text-white/80 max-w-2xl">
                      {featuredArticle.excerpt}
                    </p>
                    {featuredArticle.path && featuredArticle.path !== '#' ? (
                      <Link 
                        to={getArticlePath(featuredArticle.path)} 
                        className={cn(buttonVariants(), "bg-white text-slate-950 hover:bg-white/90 w-fit font-semibold")}
                      >
                        {text.fullArticle}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    ) : (
                      <Button className="bg-white text-slate-950 hover:bg-white/90 w-fit">
                        {text.fullArticle}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>

              <div className="space-y-6">
                {secondaryArticles.map((article) => (
                  <Card key={article.title} className="group border border-border/60 bg-card/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                    <CardContent className="flex gap-6 p-6">
                      <div className="relative h-24 w-24 overflow-hidden rounded-xl">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                          <span>{article.category}</span>
                          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" aria-hidden />
                          <span className="flex items-center gap-2">
                            <Clock className="h-3.5 w-3.5" />
                            {article.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold leading-tight text-foreground group-hover:text-accent">
                          {article.path && article.path !== '#' ? (
                            <Link to={getArticlePath(article.path)}>{article.title}</Link>
                          ) : (
                            article.title
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {article.excerpt}
                        </p>
                        {article.path && article.path !== '#' ? (
                          <Link 
                            to={getArticlePath(article.path)} 
                            className="inline-flex items-center gap-2 text-sm text-accent hover:underline font-semibold"
                          >
                            {text.readMore}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        ) : (
                          <Button variant="link" className="px-0 h-auto text-accent font-semibold">
                            {text.readMore}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between gap-4 mb-10">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">{text.otherNews}</p>
                <h2 className="text-3xl lg:text-4xl font-black">{text.moreUpdates}</h2>
              </div>
              <Button variant="outline" className="font-semibold" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                {text.backToTop}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {moreArticles.map((article) => (
                <Card key={article.title} className="h-full border border-border/60 bg-card">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-2 uppercase tracking-[0.35em]">
                        <Clock className="h-3.5 w-3.5" />
                        {article.date}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/40" aria-hidden />
                      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                        {article.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold leading-tight">
                      {article.path && article.path !== '#' ? (
                        <Link to={getArticlePath(article.path)} className="hover:text-accent transition-colors">
                          {article.title}
                        </Link>
                      ) : (
                        article.title
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    {article.path && article.path !== '#' ? (
                      <Link 
                        to={getArticlePath(article.path)} 
                        className="inline-flex items-center gap-2 text-sm text-accent hover:underline font-semibold"
                      >
                        {text.readMore}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : (
                      <Button variant="link" className="px-0 h-auto text-accent font-semibold">
                        {text.readMore}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="rounded-[40px] border border-border/50 bg-muted/30 p-10 lg:p-14 flex flex-col xl:flex-row gap-10 items-start xl:items-center justify-between">
              <div className="space-y-5 max-w-2xl">
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">{text.newsletterTitle}</p>
                <h2 className="text-3xl lg:text-4xl font-black">{text.newsletterHeading}</h2>
                <p className="text-muted-foreground font-medium">
                  {text.newsletterDesc}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button
                  size="lg"
                  className="font-semibold"
                  onClick={scrollToContact}
                >
                  {text.contactTeam}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold"
                  onClick={() => {
                    window.open('https://maps.google.com/?q=Grzybowska+5A,+00-132+Warszawa', '_blank', 'noopener,noreferrer')
                  }}
                >
                  {text.visitUs}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BigFooter lang={lang} />
    </div>
  )
}

export default NewsPage
