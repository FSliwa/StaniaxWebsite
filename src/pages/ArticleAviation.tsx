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
import newsAviationImage from '@/assets/news_aviation.jpg'


import { AVIATION_ARTICLE as articleContent } from '@/data/articles'


function ArticleAviation({ lang = 'pl' as Lang }: { lang?: Lang }) {
  const navigate = useNavigate()
  const [readingProgress, setReadingProgress] = useState(0)

  const activeLang: Lang = lang === 'pl' ? 'pl' : lang === 'de' ? 'de' : 'en'
  const text = articleContent[activeLang]
  const vacuumMetalPath = SERVICE_SLUGS['vacuum-metallization'][activeLang]
  const plasticMetalPath = SERVICE_SLUGS['plastic-metallization'][activeLang]
  const renderTextWithLinks = renderArticleRichText

  const canonicalPath =
    activeLang === "pl"
      ? "/news/partnerstwo-z-wiodacym-producentem-lotniczym"
      : activeLang === "de"
        ? "/de/news/wie-beeinflusst-metallisierung-die-materialleistung"
        : "/en/news/how-does-metallization-affect-material-performance";

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
      articleSchema: {
        headline: text.heading,
        description: text.metaDesc,
        datePublished: "2025-08-20",
        dateModified: "2026-11-15",
        image: newsAviationImage,
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
    navigate(`${vacuumMetalPath}#wycena`);
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
      {/* Reading progress bar */}
      <div
        className="fixed top-0 left-0 z-[60] h-1 bg-accent transition-all duration-100 ease-out"
        style={{ width: `${readingProgress}%` }}
        aria-hidden="true"
      />

      <SiteHeader lang={activeLang} />

            <main className="pt-28 pb-20">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <Breadcrumbs variant="inline" className="mb-6" items={breadcrumbs} />
          {/* Metadata and Title wrapped in max-w-3xl for optimal typography alignment */}
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

            {/* Transactional Hub Link Callout */}
            <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50/90 p-5 text-slate-900 shadow-sm space-y-2">
              <p className="text-sm font-semibold">
                {activeLang === 'pl'
                  ? 'Szukasz wykonawcy przemysłowej metalizacji próżniowej PVD dla swojej firmy?'
                  : activeLang === 'de'
                    ? 'Suchen Sie einen Lohnbeschichter für industrielle PVD-Vakuummetallisierung?'
                    : 'Looking for an industrial PVD vacuum metallisation partner for your project?'}
              </p>
              <div className="flex flex-wrap gap-3 text-xs sm:text-sm font-bold">
                <Link to={vacuumMetalPath} className="text-blue-700 underline hover:text-blue-800">
                  {activeLang === 'pl'
                    ? '→ Usługowa Metalizacja Próżniowa PVD (komory wysokiej próżni)'
                    : activeLang === 'de'
                      ? '→ PVD-Vakuummetallisierung im Lohnauftrag (Hochvakuumkammern)'
                      : '→ Contract PVD Vacuum Metallisation (High-Vacuum Chambers)'}
                </Link>
                <Link to={plasticMetalPath} className="text-blue-700 underline hover:text-blue-800">
                  {activeLang === 'pl'
                    ? '→ Metalizacja Tworzyw Sztucznych (ABS, PC, PA)'
                    : activeLang === 'de'
                      ? '→ Kunststoffmetallisierung (ABS, PC, PA)'
                      : '→ Plastic Chrome Plating (ABS, PC, PA)'}
                </Link>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[30vh] sm:h-[45vh] min-h-[250px] rounded-[32px] overflow-hidden mb-12 border border-border/40">
            <img
              src={newsAviationImage}
              alt={text.imageAlt}
              width={1024}
              height={558}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </div>

          {/* Grid Content Layout */}
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] items-start">
            {/* Main Column */}
            <article className="space-y-8 text-muted-foreground leading-relaxed text-base md:text-lg">
              <div className="space-y-6">
                {text.introTitle && (
                  <h2 className="text-xl md:text-2xl font-black text-foreground pt-2">
                    {text.introTitle}
                  </h2>
                )}
                <p>{renderTextWithLinks(text.p1)}</p>
                <p>{renderTextWithLinks(text.p2)}</p>
              </div>

              {/* Section 1 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec1Title}
                </h2>
                <p>{renderTextWithLinks(text.sec1P1)}</p>
                <p>{renderTextWithLinks(text.sec1P2)}</p>
              </div>

              {/* Section 2 */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec2Title}
                </h2>
                <p>{renderTextWithLinks(text.sec2P1)}</p>

                {/* Sub 2.1 */}
                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">
                    {text.sub21Title}
                  </h3>
                  <p>{renderTextWithLinks(text.sub21P1)}</p>
                  <p>{renderTextWithLinks(text.sub21P2)}</p>
                </div>

                {/* Sub 2.2 */}
                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">
                    {text.sub22Title}
                  </h3>
                  <p>{renderTextWithLinks(text.sub22P1)}</p>
                  <p>{renderTextWithLinks(text.sub22P2)}</p>
                </div>

                {/* Sub 2.3 */}
                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">
                    {text.sub23Title}
                  </h3>
                  <p>{renderTextWithLinks(text.sub23P1)}</p>
                  <p>{renderTextWithLinks(text.sub23P2)}</p>
                </div>
              </div>

              {/* Table section */}
              {text.tableTitle && (
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 mt-8">
                  {text.tableTitle}
                </h3>
              )}
              <div className="my-8 overflow-x-auto rounded-2xl border border-border/80 bg-card/30 backdrop-blur-md">
                <table className="w-full text-left border-collapse text-sm min-w-[600px]">
                  <thead>
                    <tr className="border-b border-border/80 bg-muted/40">
                      {text.tableHeaders.map((headerText, idx) => (
                        <th key={idx} className="p-4 font-bold text-foreground">
                          {headerText}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {text.tableRows.map((row, rowIdx) => (
                      <tr
                        key={rowIdx}
                        className="hover:bg-muted/10 transition-colors"
                      >
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

              {/* Section 3 */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec3Title}
                </h2>
                <p>{renderTextWithLinks(text.sec3P1)}</p>

                {/* Sub 3.1 */}
                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">
                    {text.sub31Title}
                  </h3>
                  <p>{renderTextWithLinks(text.sub31P1)}</p>
                  <p>{renderTextWithLinks(text.sub31P2)}</p>
                </div>

                {/* Sub 3.2 */}
                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">
                    {text.sub32Title}
                  </h3>
                  <p>{renderTextWithLinks(text.sub32P1)}</p>
                  <p>{renderTextWithLinks(text.sub32P2)}</p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec4Title}
                </h2>
                <p>{renderTextWithLinks(text.sec4P1)}</p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {text.sub41Title}
                    </h3>
                    <p>{renderTextWithLinks(text.sub41P1)}</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {text.sub42Title}
                    </h3>
                    <p>{renderTextWithLinks(text.sub42P1)}</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {text.sub43Title}
                    </h3>
                    <p>{renderTextWithLinks(text.sub43P1)}</p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec5Title}
                </h2>
                <p>{renderTextWithLinks(text.sec5P1)}</p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {text.sub51Title}
                    </h3>
                    <p>{renderTextWithLinks(text.sub51P1)}</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {text.sub52Title}
                    </h3>
                    <p>{renderTextWithLinks(text.sub52P1)}</p>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec6Title}
                </h2>
                <p>{renderTextWithLinks(text.sec6P1)}</p>

                {/* Rich quote callout */}
                <div className="bg-muted/30 border border-border/80 rounded-[32px] p-6 md:p-8 my-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10 group-hover:scale-125 transition-transform duration-500" />
                  <div className="text-foreground italic leading-relaxed text-sm md:text-base">
                    {renderTextWithLinks(text.quote)}
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar Column */}
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
                  to={vacuumMetalPath}
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
                  className="flex items-center gap-3 w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors font-medium py-1"
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
                to={vacuumMetalPath}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "font-semibold",
                )}
              >
                {activeLang === "pl"
                  ? "Przejdź do usługi: Usługowa Metalizacja Próżniowa PVD"
                  : activeLang === "de"
                    ? "Zur Dienstleistung: PVD-Vakuummetallisierung im Lohnauftrag"
                    : "Go to Service: Contract PVD Vacuum Metallisation"}
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

export default ArticleAviation;
