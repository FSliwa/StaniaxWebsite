import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, buttonVariants } from "@/components/ui/button";
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
import { renderArticleRichText, renderArticleParagraphs } from '@/lib/articleRichText'
import { toast } from 'sonner'
import { type Lang } from '@/lib/translations'
import { applySeoHead } from '@/lib/seo'
import { SERVICE_SLUGS, resolveLanguageAlternates } from '@/data/services'
import newReflectorsImage from '@/assets/odblysniki-nowe-1.jpeg'

import { REFLECTORS_ARTICLE as articleContent } from '@/data/articles'

export default function ArticleReflectors({ lang = 'pl' as Lang }: { lang?: Lang }) {
  const navigate = useNavigate()
  const [readingProgress, setReadingProgress] = useState(0)

  const activeLang: Lang = lang === 'pl' ? 'pl' : lang === 'de' ? 'de' : 'en'
  const text = articleContent[activeLang]
  const reflectorServicePath = SERVICE_SLUGS.reflectors[activeLang]
  const renderTextWithLinks = renderArticleRichText
  const renderBodyParagraphs = renderArticleParagraphs

  const canonicalPath =
    activeLang === "pl"
      ? "/news/regeneracja-odblysnikow-reflektorow-samochodowych"
      : activeLang === "de"
        ? "/de/news/scheinwerfer-reflektoren-regeneration-und-polieren"
        : "/en/news/reflector-regeneration-and-headlight-polishing";

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
      faq: text.faqItems.map((f) => ({ q: f.q, a: f.a })),
      articleSchema: {
        headline: text.heading,
        description: text.metaDesc,
        datePublished: "2026-06-10",
        dateModified: "2026-11-15",
        image: newReflectorsImage,
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
    navigate(`${reflectorServicePath}#wycena`);
  };

    const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: text.heading,
        url: window.location.href
      }).catch(() => {})
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast.success(text.copySuccess)
    }
  }

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
                {activeLang === 'pl' ? '10 czerwca 2026' : activeLang === 'de' ? '10. Juni 2026' : 'June 10, 2026'}
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

            <ArticleAuthorBox lang={activeLang} datePublished="2026-06-10" dateModified="2026-11-15" />

            {/* De-cannibalization Callout linking directly to the Transactional Service Page */}
            <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50/90 p-5 text-slate-900 shadow-sm">
              <p className="text-sm font-semibold">
                {activeLang === 'pl'
                  ? 'Szukasz wyceny i cennika usługi regeneracji odbłyśników (od 100 zł netto/szt.)?'
                  : activeLang === 'de'
                    ? 'Suchen Sie Preise und Kalkulator für die Scheinwerfer-Reflektor-Aufbereitung (ab 100 PLN netto/Stk.)?'
                    : 'Looking for pricing and an online calculator for headlight reflector restoration (from 100 PLN net/pc)?'}{' '}
                <Link to={reflectorServicePath} className="text-blue-700 underline font-bold hover:text-blue-800">
                  {activeLang === 'pl'
                    ? 'Przejdź do strony usługi: Regeneracja Odbłyśników i Reflektorów PVD →'
                    : activeLang === 'de'
                      ? 'Zur Leistungsseite: Scheinwerfer-Reflektor-Aufbereitung PVD →'
                      : 'Go to service page: PVD Headlight Reflector Restoration →'}
                </Link>
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[30vh] sm:h-[45vh] min-h-[250px] rounded-[32px] overflow-hidden mb-12 border border-border/40">
            <img
              src={newReflectorsImage}
              alt={text.imageAlt}
              width={1600}
              height={878}
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
                <div>{renderBodyParagraphs(text.introP1)}</div>
                <div>{renderBodyParagraphs(text.introP2)}</div>
                <div>{renderBodyParagraphs(text.introP3)}</div>
              </div>

              {/* Section 1 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec1Title}
                </h2>
                <div>{renderBodyParagraphs(text.sec1P1)}</div>
                <div>{renderBodyParagraphs(text.sec1P2)}</div>
                <div>{renderBodyParagraphs(text.sec1P3)}</div>
              </div>

              {/* Section 2 */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec2Title}
                </h2>
                <div>{renderBodyParagraphs(text.sec2P1)}</div>

                {/* Sub 2.1 */}
                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">
                    {text.sub21Title}
                  </h3>
                  <div>{renderBodyParagraphs(text.sub21P1)}</div>
                </div>

                {/* Sub 2.2 */}
                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">
                    {text.sub22Title}
                  </h3>
                  <div>{renderBodyParagraphs(text.sub22P1)}</div>
                  <div>{renderBodyParagraphs(text.sub22P2)}</div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec3Title}
                </h2>
                <div>{renderBodyParagraphs(text.sec3P1)}</div>
                <div>{renderBodyParagraphs(text.sec3P2)}</div>
                <div>{renderBodyParagraphs(text.sec3P3)}</div>
                <div>{renderBodyParagraphs(text.sec3P4)}</div>
              </div>

              {/* Section 4 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec4Title}
                </h2>
                <div>{renderBodyParagraphs(text.sec4P1)}</div>
                <div>{renderBodyParagraphs(text.sec4P2)}</div>
                <div>{renderBodyParagraphs(text.sec4P3)}</div>
              </div>

              {/* Section 5 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec5Title}
                </h2>
                <div>{renderBodyParagraphs(text.sec5P1)}</div>
                <div>{renderBodyParagraphs(text.sec5P2)}</div>
                <div>{renderBodyParagraphs(text.sec5P3)}</div>
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

              {/* Section 6 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec6Title}
                </h2>
                <div>{renderBodyParagraphs(text.sec6P1)}</div>
                <div>{renderBodyParagraphs(text.sec6P2)}</div>
                <div>{renderBodyParagraphs(text.sec6P3)}</div>
                <div>{renderBodyParagraphs(text.sec6P4)}</div>
              </div>

              {/* Section 7 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec7Title}
                </h2>
                <div>{renderBodyParagraphs(text.sec7P1)}</div>
                <div>{renderBodyParagraphs(text.sec7P2)}</div>
                <div>{renderBodyParagraphs(text.sec7P3)}</div>
                <div>{renderBodyParagraphs(text.sec7P4)}</div>
              </div>

              {/* Section 8 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec8Title}
                </h2>
                <div>{renderBodyParagraphs(text.sec8P1)}</div>
                <div>{renderBodyParagraphs(text.sec8P2)}</div>
                <div>{renderBodyParagraphs(text.sec8P3)}</div>
              </div>

              {/* Section 9 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec9Title}
                </h2>
                <div>{renderBodyParagraphs(text.sec9P1)}</div>
                <div>{renderBodyParagraphs(text.sec9P2)}</div>
                <div>{renderBodyParagraphs(text.sec9P3)}</div>
              </div>

              {/* FAQ Section */}
              <div className="space-y-6 pt-6 border-t border-border/80">
                <h2 className="text-2xl md:text-3xl font-black text-foreground">
                  {text.faqTitle}
                </h2>
                <div className="space-y-6">
                  {text.faqItems.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground">
                        {item.q}
                      </h3>
                      <p className="text-sm pl-4 border-l border-accent/30">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar Sticky Panel */}
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
                  to={reflectorServicePath}
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
                to={reflectorServicePath}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "font-semibold",
                )}
              >
                {activeLang === "pl"
                  ? "Przejdź do usługi: Regeneracja Odbłyśników i Reflektorów PVD"
                  : activeLang === "de"
                    ? "Zur Dienstleistung: Scheinwerfer-Reflektor-Aufbereitung PVD"
                    : "Go to Service: PVD Headlight Reflector Restoration"}
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
