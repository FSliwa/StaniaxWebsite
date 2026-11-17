import type { Lang } from "./translations";

export const SITE_ORIGIN = "https://www.staniax.pl";

export interface AlternateUrls {
  pl: string;
  en: string;
  de: string;
  xDefault?: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FaqSchemaItem {
  q: string;
  a: string;
}

export interface PageSeoConfig {
  lang: Lang;
  path: string;
  title: string;
  description: string;
  alternates: AlternateUrls;
  ogType?: "website" | "article";
  ogImage?: string;
  noindex?: boolean;
  /** Strona istnieje tylko w jednym języku (PL) - hreflang tylko dla pl + x-default. */
  singleLanguage?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  faq?: FaqSchemaItem[];
  serviceSchema?: {
    name: string;
    serviceType: string;
    description: string;
    areaServed?: string[];
    priceRange?: string;
    priceCurrency?: string;
  };
  articleSchema?: {
    headline: string;
    description: string;
    datePublished: string;
    dateModified: string;
    image: string;
  };
  includeHomeSchemas?: boolean;
}

export function normalizeUrl(path: string): string {
  if (!path || path === "/") return `${SITE_ORIGIN}/`;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${clean.replace(/\/+$/, "")}`;
}

const AUTHOR_JOB_TITLES: Record<Lang, string> = {
  pl: "Główny Technolog Metalizacji Próżniowej STANIAX",
  en: "Chief Vacuum Metallization Technologist at STANIAX",
  de: "Leitender Technologe für Vakuummetallisierung bei STANIAX",
};

export function buildOrganizationAndLocalBusinessGraph(lang: Lang = "pl") {
  return [
    {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      url: `${SITE_ORIGIN}/`,
      name: "STANIAX Sp. z o.o. - Metalizacja Próżniowa i Lakierowanie Przemysłowe",
      inLanguage: ["pl-PL", "en-US", "de-DE"],
      publisher: {
        "@id": `${SITE_ORIGIN}/#organization`,
      },
    },
    {
      "@type": ["Organization", "LocalBusiness", "AutoRepair"],
      "@id": `${SITE_ORIGIN}/#organization`,
      name: "STANIAX Sp. z o.o.",
      alternateName: "Zakład Metalizacji Próżniowej STANIAX - Dariusz Staniak",
      legalName: "STANIAX Spółka z ograniczoną odpowiedzialnością",
      taxID: "5253052509",
      vatID: "PL5253052509",
      identifier: [
        { "@type": "PropertyValue", name: "KRS", value: "0001182026" },
        { "@type": "PropertyValue", name: "NIP", value: "5253052509" },
        { "@type": "PropertyValue", name: "REGON", value: "542156053" },
      ],
      url: `${SITE_ORIGIN}/`,
      logo: `${SITE_ORIGIN}/staniax-logo.png`,
      image: `${SITE_ORIGIN}/staniax-logo.png`,
      telephone: "+48 882 488 844",
      email: "metalizacja@staniax.pl",
      foundingDate: "1993",
      founder: {
        "@type": "Person",
        name: "Dariusz Staniak",
        jobTitle: AUTHOR_JOB_TITLES[lang] || AUTHOR_JOB_TITLES.pl,
      },
      priceRange: "150 PLN - 5000 PLN",
      currenciesAccepted: "PLN, EUR",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. kard. Stefana Wyszyńskiego 116A",
        addressLocality: "Józefów",
        postalCode: "05-420",
        addressRegion: "Mazowieckie",
        addressCountry: "PL",
      },
      location: [
        {
          "@type": "Place",
          name: "Zakład Produkcyjny STANIAX - Józefów k. Warszawy",
          address: {
            "@type": "PostalAddress",
            streetAddress: "ul. kard. Stefana Wyszyńskiego 116A",
            addressLocality: "Józefów",
            postalCode: "05-420",
            addressRegion: "Mazowieckie",
            addressCountry: "PL",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 52.1336,
            longitude: 21.2367,
          },
        },
        {
          "@type": "Place",
          name: "Siedziba Rejestrowa STANIAX Sp. z o.o. - Warszawa",
          address: {
            "@type": "PostalAddress",
            streetAddress: "ul. Grzybowska 5A",
            addressLocality: "Warszawa",
            postalCode: "00-132",
            addressRegion: "Mazowieckie",
            addressCountry: "PL",
          },
        },
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 52.1336,
        longitude: 21.2367,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "17:00",
        },
      ],
      areaServed: [
        { "@type": "AdministrativeArea", name: "Mazowieckie" },
        { "@type": "City", name: "Warszawa" },
        { "@type": "City", name: "Józefów" },
        { "@type": "City", name: "Otwock" },
        { "@type": "Country", name: "Polska" },
        { "@type": "Country", name: "Deutschland" },
        { "@type": "Place", name: "European Union" },
      ],
      sameAs: [
        "https://maps.google.com/?q=Wyszy%C5%84skiego+116A+J%C3%B3zef%C3%B3w",
        "https://maps.google.com/?q=Grzybowska+5A+Warszawa",
        "https://share.google/N7ybGPMOEDI3ZE31X",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+48 882 488 844",
          email: "metalizacja@staniax.pl",
          contactType: "customer service",
          availableLanguage: ["Polish", "English", "German"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+48 882 488 844",
          email: "office@staniax.pl",
          contactType: "sales",
          availableLanguage: ["Polish", "English", "German"],
        },
      ],
    },
  ];
}

export function buildJsonLdGraph(config: PageSeoConfig) {
  const graph: Record<string, unknown>[] = [
    ...buildOrganizationAndLocalBusinessGraph(config.lang),
  ];
  const pageUrl = normalizeUrl(config.path);

  if (config.breadcrumbs && config.breadcrumbs.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: config.breadcrumbs.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: item.name,
        item: normalizeUrl(item.path),
      })),
    });
  }

  if (config.serviceSchema) {
    graph.push({
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: config.serviceSchema.name,
      serviceType: config.serviceSchema.serviceType,
      description: config.serviceSchema.description,
      url: pageUrl,
      provider: {
        "@id": `${SITE_ORIGIN}/#organization`,
      },
      areaServed: (
        config.serviceSchema.areaServed || [
          "Polska",
          "Warszawa",
          "Józefów",
          "Unia Europejska",
        ]
      ).map((area) => ({
        "@type": "Place",
        name: area,
      })),
      ...(config.serviceSchema.priceRange
        ? {
            offers: {
              "@type": "Offer",
              priceCurrency: config.serviceSchema.priceCurrency || "PLN",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: config.serviceSchema.priceCurrency || "PLN",
                description: config.serviceSchema.priceRange,
              },
            },
          }
        : {}),
    });
  }

  if (config.articleSchema) {
    graph.push({
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: config.articleSchema.headline,
      description: config.articleSchema.description,
      datePublished: config.articleSchema.datePublished,
      dateModified: config.articleSchema.dateModified,
      mainEntityOfPage: pageUrl,
      image: config.articleSchema.image.startsWith("http")
        ? config.articleSchema.image
        : `${SITE_ORIGIN}${config.articleSchema.image}`,
      author: {
        "@type": "Person",
        name: "Dariusz Staniak",
        jobTitle: AUTHOR_JOB_TITLES[config.lang] || AUTHOR_JOB_TITLES.pl,
        url: `${SITE_ORIGIN}/`,
      },
      publisher: {
        "@id": `${SITE_ORIGIN}/#organization`,
      },
    });
  }

  if (config.faq && config.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: config.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function applySeoHead(config: PageSeoConfig) {
  if (typeof document === "undefined") return;

  document.documentElement.lang = config.lang;
  document.title = config.title;

  const upsertMeta = (
    attr: "name" | "property",
    key: string,
    content: string,
  ) => {
    let el = document.head.querySelector(
      `meta[${attr}="${key}"]`,
    ) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  const canonicalHref = normalizeUrl(config.path);
  upsertMeta("name", "description", config.description);
  upsertMeta(
    "name",
    "robots",
    config.noindex
      ? "noindex, follow"
      : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  );
  upsertMeta("property", "og:title", config.title);
  upsertMeta("property", "og:description", config.description);
  upsertMeta("property", "og:type", config.ogType || "website");
  upsertMeta("property", "og:url", canonicalHref);
  upsertMeta(
    "property",
    "og:image",
    config.articleSchema?.image
      ? config.articleSchema.image.startsWith("http")
        ? config.articleSchema.image
        : `${SITE_ORIGIN}${config.articleSchema.image}`
      : `${SITE_ORIGIN}/staniax-logo.png`,
  );
  upsertMeta(
    "property",
    "og:locale",
    config.lang === "pl" ? "pl_PL" : config.lang === "de" ? "de_DE" : "en_US",
  );

  let canonicalLink = document.head.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement | null;
  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute("href", canonicalHref);

  // Remove old hreflang links and re-insert reciprocal pl, en, de, x-default for indexable pages
  document.head
    .querySelectorAll('link[rel="alternate"][hreflang]')
    .forEach((n) => n.remove());
  if (!config.noindex && !config.singleLanguage) {
    const hreflangs: Array<{ hreflang: string; href: string }> = [
      { hreflang: "pl", href: normalizeUrl(config.alternates.pl) },
      { hreflang: "en", href: normalizeUrl(config.alternates.en) },
      { hreflang: "de", href: normalizeUrl(config.alternates.de) },
      {
        hreflang: "x-default",
        href: normalizeUrl(config.alternates.xDefault || config.alternates.pl),
      },
    ];
    hreflangs.forEach(({ hreflang, href }) => {
      const link = document.createElement("link");
      link.setAttribute("rel", "alternate");
      link.setAttribute("hreflang", hreflang);
      link.setAttribute("href", href);
      document.head.appendChild(link);
    });
  }

  // Inject JSON-LD
  const scriptId = "staniax-seo-jsonld";
  let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement("script");
    scriptEl.id = scriptId;
    scriptEl.type = "application/ld+json";
    document.head.appendChild(scriptEl);
  }
  scriptEl.textContent = JSON.stringify(buildJsonLdGraph(config));

  const w = window as unknown as {
    __lastTrackedStaniaxPath?: string;
    trackEvent?: (name: string, params?: Record<string, unknown>) => void;
  };
  if (w.__lastTrackedStaniaxPath !== config.path) {
    w.__lastTrackedStaniaxPath = config.path;
    if (typeof w.trackEvent === "function") {
      w.trackEvent("page_view", {
        page_title: config.title,
        page_path: config.path,
        page_location: canonicalHref,
        language: config.lang,
      });
    }
  }
}
