import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Clock } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { SiteHeader } from '@/components/SiteHeader'
import { BigFooter } from '@/components/BigFooter'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { type Lang } from '@/lib/translations'
import { applySeoHead } from "@/lib/seo";
import { SERVICE_SLUGS, resolveLanguageAlternates } from "@/data/services";
import {
  NEWS_ITEMS_BY_LANG,
  NEWS_PAGE_CONTENT,
  type NewsImageKey,
} from "@/data/news";
import { NEWS_IMAGES } from '@/lib/newsImages'

const mapNewsItems = (lang: "pl" | "en" | "de") =>
  NEWS_ITEMS_BY_LANG[lang].map((item) => ({
    ...item,
    image:
      item.imageKey === "externalUnsplash"
        ? item.externalImageUrl!
        : NEWS_IMAGES[item.imageKey],
  }));

export const newsItemsPl = mapNewsItems("pl");
export const newsItemsEn = mapNewsItems("en");
export const newsItemsDe = mapNewsItems("de");

const content = NEWS_PAGE_CONTENT;

function NewsPage({ lang = "pl" as Lang }: { lang?: Lang }) {
  const navigate = useNavigate();

  const activeLang: Lang = lang === "pl" ? "pl" : lang === "de" ? "de" : "en";
  const text = content[activeLang];
  const newsItems =
    activeLang === "pl"
      ? newsItemsPl
      : activeLang === "de"
        ? newsItemsDe
        : newsItemsEn;

  const featuredArticle = newsItems[0];
  const secondaryArticles = newsItems.slice(1, 4);
  const moreArticles = newsItems.slice(4);

    const canonicalPath = activeLang === 'pl' ? '/news' : `/${activeLang}/news`
  const pageTitle = text.pageTitle
  const pageDesc = text.pageDesc

  useEffect(() => {
    window.scrollTo(0, 0);
    applySeoHead({
      title: pageTitle,
      description: pageDesc,
      path: canonicalPath,
      lang: activeLang,
      alternates: resolveLanguageAlternates(canonicalPath),
      breadcrumbs: [
        {
          name:
            activeLang === "pl"
              ? "Strona główna"
              : activeLang === "de"
                ? "Startseite"
                : "Home",
          path: activeLang === "pl" ? "/" : `/${activeLang}`,
        },
        {
          name: text.newsTitle,
          path: canonicalPath,
        },
      ],
    });
  }, [activeLang, canonicalPath, pageDesc, pageTitle, text.newsTitle]);

  const homePath = activeLang === "pl" ? "/" : `/${activeLang}`;

  const getArticlePath = (basePath: string) => {
    if (!basePath || basePath === "#") return canonicalPath;
    if (activeLang === "pl") return basePath;
    if (basePath.startsWith(`/${activeLang}/`)) return basePath;
    return `/${activeLang}${basePath}`;
  };

  const libraryPath =
    activeLang === "pl"
      ? "/news/biblioteka"
      : activeLang === "de"
        ? "/de/news/bibliothek"
        : "/en/news/library";

  const scrollToContact = () => {
    navigate(`${homePath}#contact`);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader lang={activeLang} />

      <main className="pt-20">
        <Breadcrumbs
          items={[
            {
              name: activeLang === 'pl' ? 'Strona główna' : activeLang === 'de' ? 'Startseite' : 'Home',
              path: homePath,
            },
            { name: text.newsTitle },
          ]}
        />
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background/95 to-background"
            aria-hidden
          />
          <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
                  {text.latestNews}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                  {activeLang === "pl"
                    ? "Baza Wiedzy i Poradniki Techniczne — Metalizacja Próżniowa i Lakierowanie"
                    : activeLang === "de"
                      ? "Wissensdatenbank & Technische Ratgeber — Vakuummetallisierung & Lackierung"
                      : "Knowledge Base & Technical Guides — Vacuum Metallization & Coating"}
                </h1>
                <p className="text-lg text-muted-foreground font-medium max-w-xl">
                  {text.newsDesc}
                </p>
                <Link
                  to={libraryPath}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "font-semibold w-fit",
                  )}
                >
                  {activeLang === "pl"
                    ? "Przeglądaj pełne archiwum artykułów"
                    : activeLang === "de"
                      ? "Vollständiges Artikelarchiv durchsuchen"
                      : "Browse full article archive"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <Card className="border border-border/60 bg-card/80 backdrop-blur-xl">
                <CardHeader className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                    {text.featuredNews}
                  </p>
                  <CardTitle className="text-2xl font-black leading-tight">
                    <Link
                      to={getArticlePath(featuredArticle.path)}
                      className="hover:text-accent transition-colors"
                    >
                      {featuredArticle.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <div className="text-sm text-muted-foreground/90">
                    {featuredArticle.excerpt}
                  </div>
                                    <Link
                    to={getArticlePath(featuredArticle.path)}
                    className="inline-flex items-center gap-2 text-sm text-accent hover:underline font-semibold"
                  >
                    {featuredArticle.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="biblioteka" className="py-12 lg:py-16 border-y border-border/60">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr]">
              <Card className="overflow-hidden border-0 shadow-2xl h-full flex flex-col">
                <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full lg:flex-1 min-h-[440px] lg:min-h-0 flex flex-col justify-end p-8">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    width={1200}
                    height={750}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent"
                    aria-hidden
                  />
                  <div className="relative z-10 space-y-4 text-white">
                    <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em]">
                      {featuredArticle.category}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black leading-tight max-w-2xl">
                      <Link
                        to={getArticlePath(featuredArticle.path)}
                        className="hover:text-accent/80 transition-colors"
                      >
                        {featuredArticle.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-white/80 max-w-2xl">
                      {featuredArticle.excerpt}
                    </p>
                    <Link
                      to={getArticlePath(featuredArticle.path)}
                      className={cn(
                        buttonVariants(),
                        "bg-white text-slate-950 hover:bg-white/90 w-fit font-semibold",
                      )}
                    >
                      {text.fullArticle}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Card>

              <div className="space-y-6">
                {secondaryArticles.map((article) => (
                  <Card
                    key={article.title}
                    className="group border border-border/60 bg-card/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
                  >
                    <CardContent className="flex gap-6 p-6">
                                            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                        <img
                          src={article.image}
                          alt={article.title}
                          width={96}
                          height={96}
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
                          <Link to={getArticlePath(article.path)}>{article.title}</Link>
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                        <Link
                          to={getArticlePath(article.path)}
                          className="inline-flex items-center gap-2 text-sm text-accent hover:underline font-semibold"
                        >
                          {article.ctaLabel}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
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
              <Button
                variant="outline"
                className="font-semibold"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
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
                      width={800}
                      height={600}
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
                      <Link to={getArticlePath(article.path)} className="hover:text-accent transition-colors">
                        {article.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">{article.excerpt}</p>
                    <Link
                      to={getArticlePath(article.path)}
                      className="inline-flex items-center gap-2 text-sm text-accent hover:underline font-semibold"
                    >
                      {article.ctaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="rounded-3xl border border-border/60 bg-card p-8 lg:p-12 space-y-6">
              <div className="space-y-3 max-w-4xl">
                <h2 className="text-2xl lg:text-3xl font-black text-foreground">{text.editorialGuide.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{text.editorialGuide.intro}</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground">{text.editorialGuide.standardsTitle}</h3>
                <div className="grid gap-5 md:grid-cols-3">
                  {text.editorialGuide.standards.map((std) => (
                    <div key={std.label} className="rounded-2xl border border-border/50 bg-background/60 p-5 space-y-2">
                      <h4 className="font-bold text-sm text-foreground">{std.label}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{std.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                {text.editorialGuide.closing}
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="rounded-[40px] border border-border/50 bg-muted/30 p-10 lg:p-14 flex flex-col xl:flex-row gap-10 items-start xl:items-center justify-between">
              <div className="space-y-5 max-w-2xl">
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  {text.newsletterTitle}
                </p>
                <h2 className="text-3xl lg:text-4xl font-black">
                  {text.newsletterHeading}
                </h2>
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
                <a
                  href="https://maps.google.com/?q=Metalizacja+Pr%C3%B3%C5%BCniowa+Staniax+Sp.z+o.o.,+Kardyna%C5%82a+Stefana+Wyszy%C5%84skiego+116a,+05-420+J%C3%B3zef%C3%B3w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "font-semibold",
                  )}
                >
                  {text.visitUs}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contextual Hub Links to all 6 Service Pages */}
        <section className="bg-background py-12 border-t border-border/40">
          <div className="container mx-auto px-6 lg:px-12 text-sm text-muted-foreground space-y-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-foreground">
              {activeLang === "pl"
                ? "Powiązane usługi technologiczne STANIAX w Józefowie"
                : activeLang === "de"
                  ? "Verbundene technologische Dienstleistungen von STANIAX in Józefów"
                  : "Related STANIAX Technological Services in Józefów"}
            </h2>
            <p>
              {activeLang === "pl"
                ? "Artykuły w bazie wiedzy STANIAX omawiają procesy realizowane codziennie w naszym zakładzie przy ul. Wyszyńskiego 116A w Józefowie. Sprawdź specyfikację poszczególnych usług: "
                : activeLang === "de"
                  ? "Die Fachartikel in der STANIAX-Wissensdatenbank erläutern Prozesse, die täglich in unserem Werk in Józefów durchgeführt werden. Entdecken Sie unsere Leistungen: "
                  : "The articles in the STANIAX knowledge base cover processes performed daily at our plant in Józefów. Explore the technical specifications of our services: "}
              <Link
                to={SERVICE_SLUGS.reflectors[activeLang]}
                className="text-accent hover:underline font-medium"
              >
                {activeLang === "pl"
                  ? "regeneracja odbłyśników i reflektorów samochodowych"
                  : activeLang === "de"
                    ? "Scheinwerfer-Reflektor-Aufbereitung"
                    : "headlight reflector restoration"}
              </Link>
              {", "}
              <Link
                to={SERVICE_SLUGS["vacuum-metallization"][activeLang]}
                className="text-accent hover:underline font-medium"
              >
                {activeLang === "pl"
                  ? "usługowa metalizacja próżniowa PVD"
                  : activeLang === "de"
                    ? "PVD-Vakuummetallisierung im Lohnauftrag"
                    : "contract PVD vacuum metallisation"}
              </Link>
              {", "}
              <Link
                to={SERVICE_SLUGS["plastic-metallization"][activeLang]}
                className="text-accent hover:underline font-medium"
              >
                {activeLang === "pl"
                  ? "metalizacja i chromowanie tworzyw sztucznych"
                  : activeLang === "de"
                    ? "Kunststoffverchromung und -metallisierung"
                    : "plastic chrome plating and metallisation"}
              </Link>
              {", "}
              <Link
                to={SERVICE_SLUGS["plastic-painting"][activeLang]}
                className="text-accent hover:underline font-medium"
              >
                {activeLang === "pl"
                  ? "lakierowanie przemysłowe tworzyw sztucznych"
                  : activeLang === "de"
                    ? "industrielle Kunststofflackierung"
                    : "industrial plastic parts painting"}
              </Link>
              {", "}
              <Link
                to={SERVICE_SLUGS["glass-painting"][activeLang]}
                className="text-accent hover:underline font-medium"
              >
                {activeLang === "pl"
                  ? "lakierowanie szkła opakowaniowego i ceramiki"
                  : activeLang === "de"
                    ? "Lackierung von Verpackungsglas und Keramik"
                    : "packaging glass and ceramic painting"}
              </Link>{" "}
              {activeLang === "pl"
                ? "oraz "
                : activeLang === "de"
                  ? "sowie "
                  : "and "}
              <Link
                to={SERVICE_SLUGS["spray-painting"][activeLang]}
                className="text-accent hover:underline font-medium"
              >
                {activeLang === "pl"
                  ? "lakierowanie natryskowe HVLP w pełnej palecie RAL"
                  : activeLang === "de"
                    ? "HVLP-Spritzlackierung in der gesamten RAL-Palette"
                    : "HVLP spray painting across the full RAL palette"}
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <BigFooter lang={activeLang} />
    </div>
  );
}

export default NewsPage;
