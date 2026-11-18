import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import {
  ArrowRight,
  Clock,
  ShareNetwork,
  Printer,
  BookOpen,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { SiteHeader } from '@/components/SiteHeader'
import { BigFooter } from '@/components/BigFooter'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ArticleAuthorBox } from '@/components/ArticleAuthorBox'
import { renderArticleRichText } from '@/lib/articleRichText'
import { toast } from 'sonner'
import { type Lang } from '@/lib/translations'
import { applySeoHead } from '@/lib/seo'
import { SERVICE_SLUGS, resolveLanguageAlternates } from '@/data/services'
import colorfulPackagingImage from '@/assets/colorful_packaging.png'

import { BEAUTY_ARTICLE as articleContent } from '@/data/articles'

function ArticleBeauty({ lang = 'pl' as Lang }: { lang?: Lang }) {
  const navigate = useNavigate()
  const [readingProgress, setReadingProgress] = useState(0)

  const activeLang: Lang = lang === 'pl' ? 'pl' : lang === 'de' ? 'de' : 'en'
  const text = articleContent[activeLang]
  const plasticMetalPath = SERVICE_SLUGS['plastic-metallization'][activeLang]
  const plasticPaintPath = SERVICE_SLUGS['plastic-painting'][activeLang]
  const glassPaintPath = SERVICE_SLUGS['glass-painting'][activeLang]
  const renderTextWithLinks = renderArticleRichText

  const canonicalPath =
    activeLang === "pl"
      ? "/news/metalizacja-prozniowa-rewolucjonizuje-branze-beauty"
      : activeLang === "de"
        ? "/de/news/vakuummetallisierung-revolutioniert-die-kosmetikbranche"
        : "/en/news/vacuum-metallization-revolutionizes-beauty-industry";

    const breadcrumbs = [
    {
      name: activeLang === 'pl' ? 'Strona główna' : activeLang === 'de' ? 'Startseite' : 'Home',
      path: activeLang === 'pl' ? '/' : `/${activeLang}`,
    },
    {
      name: text.newsTitle,
      path: activeLang === 'pl' ? '/news' : `/${activeLang}/news`,
    },
    {
      name: text.heading,
      path: canonicalPath,
    },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
    applySeoHead({
      title: text.metaTitle,
      description: text.metaDesc,
      path: canonicalPath,
      lang: activeLang,
      alternates: resolveLanguageAlternates(canonicalPath),
      ogType: 'article',
      breadcrumbs,
      faq: [
        { q: text.q1, a: text.a1 },
        { q: text.q2, a: text.a2 },
        { q: text.q3, a: text.a3 },
        { q: text.q4, a: text.a4 },
        { q: text.q5, a: text.a5 },
      ],
      articleSchema: {
        headline: text.heading,
        description: text.metaDesc,
        datePublished: "2025-08-20",
        dateModified: "2026-11-15",
        image: colorfulPackagingImage,
      },
    });
  }, [activeLang, canonicalPath, text]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setReadingProgress(currentProgress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    navigate(`${plasticMetalPath}#wycena`);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: text.heading,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success(text.copySuccess);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div
        className="fixed top-0 left-0 z-[60] h-1 bg-accent transition-all duration-100 ease-out"
        style={{ width: `${readingProgress}%` }}
        aria-hidden="true"
      />

      <SiteHeader lang={activeLang} />

            <main className="pt-28 pb-20">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <Breadcrumbs variant="inline" className="mb-6" items={breadcrumbs} />
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                {text.articleBadge}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {activeLang === 'pl' ? '20 sierpnia 2025' : activeLang === 'de' ? '20. August 2025' : 'August 20, 2025'}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                {text.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4">
              {text.heading}
            </h1>
            <p className="text-muted-foreground/80 text-base md:text-lg mb-6 italic leading-relaxed">
              {text.lead}
            </p>

            <ArticleAuthorBox lang={activeLang} datePublished="2025-08-20" dateModified="2026-11-15" />

            {/* Transactional Hub Links Callout */}
            <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50/90 p-5 text-slate-900 shadow-sm space-y-2">
              <p className="text-sm font-semibold">
                {activeLang === 'pl'
                  ? 'Szukasz wykonawcy metalizacji opakowań kosmetycznych, nakrętek lub flakonów szklanych?'
                  : activeLang === 'de'
                    ? 'Suchen Sie einen Lohnbeschichter für Kosmetikverpackungen, Verschlüsse oder Parfümflakons?'
                    : 'Looking for a contract partner for cosmetic packaging metallisation, caps, or glass bottles?'}
              </p>
              <div className="flex flex-wrap gap-3 text-xs sm:text-sm font-bold">
                <Link to={plasticMetalPath} className="text-blue-700 underline hover:text-blue-800">
                  {activeLang === 'pl'
                    ? '→ Metalizacja i chromowanie tworzyw sztucznych'
                    : activeLang === 'de'
                      ? '→ Kunststoffverchromung & Metallisierung'
                      : '→ Plastic Chrome Plating & Metallisation'}
                </Link>
                <Link to={glassPaintPath} className="text-blue-700 underline hover:text-blue-800">
                  {activeLang === 'pl'
                    ? '→ Lakierowanie szkła i flakonów kosmetycznych'
                    : activeLang === 'de'
                      ? '→ Lackierung von Parfüm- & Verpackungsglas'
                      : '→ Cosmetic Glass & Bottle Painting'}
                </Link>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[30vh] sm:h-[45vh] min-h-[250px] rounded-[32px] overflow-hidden mb-12 border border-border/40">
            <img 
              src={colorfulPackagingImage} 
              alt={text.imageAlt} 
              width={1024}
              height={500}
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_320px] items-start">
            <article className="space-y-8 text-muted-foreground leading-relaxed text-base md:text-lg">
              <div className="space-y-6">
                <p>{renderTextWithLinks(text.p1)}</p>

                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.introTitle}
                </h2>
                <p>{renderTextWithLinks(text.p2)}</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec1Title}
                </h2>
                <p>{renderTextWithLinks(text.sec1P1)}</p>

                <h3 className="text-xl font-bold text-foreground pt-2">
                  {text.sec1SubTitle}
                </h3>
                <p>{renderTextWithLinks(text.sec1P2)}</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec2Title}
                </h2>
                <p>{renderTextWithLinks(text.sec2P1)}</p>

                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">
                    {text.sub21Title}
                  </h3>
                  <p>{renderTextWithLinks(text.sub21P1)}</p>
                </div>

                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">
                    {text.sub22Title}
                  </h3>
                  <p>{renderTextWithLinks(text.sub22P1)}</p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>{renderTextWithLinks(text.sub22Bullet1)}</li>
                    <li>{renderTextWithLinks(text.sub22Bullet2)}</li>
                  </ul>
                  <p className="mt-3">{renderTextWithLinks(text.sub22P2)}</p>
                </div>
              </div>

              <div className="my-8 overflow-x-auto rounded-2xl border border-border/80 bg-card/30 backdrop-blur-md">
                <table className="w-full text-left border-collapse text-sm min-w-[600px]">
                  <thead>
                    <tr className="border-b border-border/80 bg-muted/40">
                      {text.tableHeaders.map((header, i) => (
                        <th key={i} className="p-4 font-bold text-foreground">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {text.tableRows.map((row, i) => (
                      <tr key={i}>
                        <td className="p-4 font-medium text-foreground">
                          {row[0]}
                        </td>
                        <td className="p-4">{row[1]}</td>
                        <td className="p-4">{row[2]}</td>
                        <td className="p-4">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec3Title}
                </h2>
                <p>{renderTextWithLinks(text.sec3P1)}</p>

                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">
                    {text.sub31Title}
                  </h3>
                  <p>{renderTextWithLinks(text.sub31P1)}</p>
                </div>

                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">
                    {text.sub32Title}
                  </h3>
                  <p>{renderTextWithLinks(text.sub32P1)}</p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>{renderTextWithLinks(text.sub32Bullet1)}</li>
                    <li>{renderTextWithLinks(text.sub32Bullet2)}</li>
                    <li>{renderTextWithLinks(text.sub32Bullet3)}</li>
                  </ul>
                </div>

                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">
                    {text.sub33Title}
                  </h3>
                  <p>{renderTextWithLinks(text.sub33P1)}</p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec4Title}
                </h2>
                <p>{renderTextWithLinks(text.sec4P1)}</p>

                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">
                    {text.sub41Title}
                  </h3>
                  <p>{renderTextWithLinks(text.sub41P1)}</p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>{renderTextWithLinks(text.sub41Bullet1)}</li>
                    <li>{renderTextWithLinks(text.sub41Bullet2)}</li>
                    <li>{renderTextWithLinks(text.sub41Bullet3)}</li>
                  </ul>
                </div>

                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">
                    {text.sub42Title}
                  </h3>
                  <p>{renderTextWithLinks(text.sub42P1)}</p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec5Title}
                </h2>
                <p>{renderTextWithLinks(text.sec5P1)}</p>

                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">
                    {text.sub51Title}
                  </h3>
                  <p>{renderTextWithLinks(text.sub51P1)}</p>
                </div>

                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">
                    {text.sub52Title}
                  </h3>
                  <p>{renderTextWithLinks(text.sub52P1)}</p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.qaTitle}
                </h2>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {text.q1}
                    </h3>
                    <p className="text-sm pl-4 border-l border-accent/30">
                      {text.a1}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {text.q2}
                    </h3>
                    <p className="text-sm pl-4 border-l border-accent/30">
                      {text.a2}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {text.q3}
                    </h3>
                    <p className="text-sm pl-4 border-l border-accent/30">
                      {text.a3}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {text.q4}
                    </h3>
                    <p className="text-sm pl-4 border-l border-accent/30">
                      {text.a4}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {text.q5}
                    </h3>
                    <p className="text-sm pl-4 border-l border-accent/30">
                      {text.a5}
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <aside className="space-y-8 sticky top-28">
              {/* CTA Panel */}
              <aside
                data-nosnippet="true"
                role="complementary"
                className="rounded-[24px] border border-border/80 bg-card/65 backdrop-blur p-6 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl -z-10 group-hover:scale-125 transition-transform duration-500" />
                <p className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
                  {text.ctaTitle}
                </p>
                <p className="text-sm text-muted-foreground/90 mb-6 leading-relaxed">
                  {text.ctaDesc}
                </p>
                <Link
                  to={plasticMetalPath}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full font-semibold group/btn",
                  )}
                >
                  {text.ctaBtn}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </aside>

              {/* Actions Panel */}
              <div className="rounded-[24px] border border-border/80 bg-card/30 p-6 space-y-4">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-3 w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors font-medium py-1"
                >
                  <ShareNetwork className="w-5 h-5 text-accent" />
                  {text.copyTitle}
                </button>
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-3 w-full text-sm text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-1"
                >
                  <Printer className="w-5 h-5 text-accent" />
                  {text.printTitle}
                </button>
              </div>
            </aside>
          </div>

          {/* Main article body CTA Callout Block */}
          <div className="bg-muted/30 border border-border/80 rounded-[32px] p-6 md:p-8 my-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10 group-hover:scale-125 transition-transform duration-500" />
            <h2 className="text-xl font-bold text-foreground mb-4">
              {text.ctaHeader}
            </h2>
            <p className="text-sm md:text-base mb-6 leading-relaxed">
              {renderTextWithLinks(text.ctaText)}
            </p>

            <h3 className="font-bold text-foreground mb-3 text-sm md:text-base">
              {text.ctaWhyTitle}
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base mb-6">
              <li>{renderTextWithLinks(text.ctaWhy1)}</li>
              <li>{renderTextWithLinks(text.ctaWhy2)}</li>
              <li>{renderTextWithLinks(text.ctaWhy3)}</li>
            </ul>

            <p className="font-semibold text-foreground mb-6 text-sm md:text-base">
              {text.ctaSubhead}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={plasticMetalPath}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "font-semibold",
                )}
              >
                {activeLang === "pl"
                  ? "Przejdź do usługi: Metalizacja Tworzyw Sztucznych i Opakowań Beauty"
                  : activeLang === "de"
                    ? "Zur Dienstleistung: Kunststoffmetallisierung & Kosmetikverpackungen"
                    : "Go to Service: Plastic Chrome Plating & Beauty Packaging"}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to={activeLang === "pl" ? "/gallery" : `/${activeLang}/gallery`}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "font-semibold",
                )}
              >
                {activeLang === "pl"
                  ? "Poznaj wykonane projekty Zakładu Metalizacji STANIAX"
                  : activeLang === "de"
                    ? "Entdecken Sie realisierte Projekte von STANIAX"
                    : "Discover completed projects of the STANIAX Metallization Plant"}
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <BigFooter lang={activeLang} />
    </div>
  );
}

export default ArticleBeauty;
