import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import * as esbuild from "esbuild";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const publicDir = path.join(rootDir, "public");
const indexPath = path.join(distDir, "index.html");

if (!fs.existsSync(indexPath)) {
  console.error("Error: dist/index.html not found. Run vite build first.");
  process.exit(1);
}

const LASTMOD = "2026-11-15";

const HERO_IMAGE_PREFIXES = {
  reflectorsHero: "odblysniki-nowe-1",
  vacuumHero: "vacuum_metalization_chamber",
  plasticMetaHero: "colorful_packaging",
  plasticPaintHero: "lakierowanie-tworzyw-1",
  glassPaintHero: "lakierowanie-szkla-1",
  sprayPaintHero: "lakierowanie-natryskowe-1",
};

const CASE_STUDY_IMAGE_PREFIXES = {
  reflectors1: "odblysniki-nowe-1",
  reflectors2: "odblysniki-nowe-2",
  automotiveAfter: "automotive-after",
  vacuumChamber: "vacuum_metalization_chamber",
  vacuumPart: "vacuum-metalization",
  packagingAfter: "packaging-after",
  colorfulPackaging: "colorful_packaging",
  plasticPaint1: "lakierowanie-tworzyw-1",
  plasticPaint2: "lakierowanie-tworzyw-2",
  plasticPaint3: "lakierowanie-tworzyw-3",
  glassPaint1: "lakierowanie-szkla-1",
  glassPaint2: "lakierowanie-szkla-2",
  glassPaint3: "lakierowanie-szkla-3",
  sprayPaint1: "lakierowanie-natryskowe-1",
  sprayPaint2: "lakierowanie-natryskowe-2",
  sprayPaint3: "lakierowanie-natryskowe-3",
  industrialAfter: "industrial-after",
};

const NEWS_IMAGE_PREFIXES = {
  vacuumChamber: "vacuum_metalization_chamber",
  newsAviation: "news_aviation",
  colorfulPackaging: "colorful_packaging",
  newReflectors: "odblysniki-nowe-1",
  plasticPainting: "lakierowanie-tworzyw-1",
  vacuumPart: "vacuum-metalization",
};

async function loadBridgeData() {
  const bridgeEntry = path.join(__dirname, "prerender-bridge.ts");
  const tmpOut = path.join(__dirname, ".prerender-bridge.bundle.mjs");
  try {
    await esbuild.build({
      entryPoints: [bridgeEntry],
      bundle: true,
      platform: "node",
      format: "esm",
      outfile: tmpOut,
      logLevel: "silent",
    });
    return await import(`${pathToFileURL(tmpOut).href}?t=${Date.now()}`);
  } finally {
    if (fs.existsSync(tmpOut)) {
      fs.unlinkSync(tmpOut);
    }
  }
}

function createAssetResolver(assetsDir) {
  const assetFiles = fs.existsSync(assetsDir) ? fs.readdirSync(assetsDir) : [];
  const mediaRegex = /\.(jpe?g|png|webp|mp4|svg)$/i;

  return function resolveAsset(prefix) {
    const match = assetFiles.find(
      (file) => file.startsWith(`${prefix}-`) && mediaRegex.test(file),
    );
    if (!match) {
      throw new Error(
        `Missing bundled media asset in dist/assets for prefix "${prefix}"`,
      );
    }
    return `/assets/${match}`;
  };
}

function readImageDimensionsFromFile(filePath) {
  try {
    const buf = fs.readFileSync(filePath);
    if (
      buf.length >= 24 &&
      buf[0] === 0x89 &&
      buf[1] === 0x50 &&
      buf[2] === 0x4e &&
      buf[3] === 0x47
    ) {
      return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
    }
    if (
      buf.length >= 30 &&
      buf.toString("ascii", 0, 4) === "RIFF" &&
      buf.toString("ascii", 8, 12) === "WEBP"
    ) {
      const chunk = buf.toString("ascii", 12, 16);
      if (chunk === "VP8X" && buf.length >= 30) {
        return {
          width: 1 + buf.readUIntLE(24, 3),
          height: 1 + buf.readUIntLE(27, 3),
        };
      }
      if (chunk === "VP8 " && buf.length >= 30) {
        return {
          width: buf.readUInt16LE(26) & 0x3fff,
          height: buf.readUInt16LE(28) & 0x3fff,
        };
      }
      if (chunk === "VP8L" && buf.length >= 25) {
        const bits = buf.readUInt32LE(21);
        return {
          width: (bits & 0x3fff) + 1,
          height: ((bits >> 14) & 0x3fff) + 1,
        };
      }
    }
    if (buf.length >= 4 && buf[0] === 0xff && buf[1] === 0xd8) {
      let offset = 2;
      while (offset + 4 < buf.length) {
        if (buf[offset] !== 0xff) {
          offset++;
          continue;
        }
        while (offset < buf.length && buf[offset] === 0xff) offset++;
        if (offset >= buf.length) break;
        const marker = buf[offset++];
        if (marker === 0xd8 || marker === 0xd9 || (marker >= 0xd0 && marker <= 0xd7)) {
          continue;
        }
        if (offset + 2 > buf.length) break;
        const segLen = buf.readUInt16BE(offset);
        if (
          (marker >= 0xc0 && marker <= 0xc3) ||
          (marker >= 0xc5 && marker <= 0xc7) ||
          (marker >= 0xc9 && marker <= 0xcb) ||
          (marker >= 0xcd && marker <= 0xcf)
        ) {
          if (offset + 7 <= buf.length) {
            return {
              width: buf.readUInt16BE(offset + 3),
              height: buf.readUInt16BE(offset + 5),
            };
          }
        }
        offset += segLen;
      }
    }
  } catch {
    // Fallback below if binary header cannot be decoded
  }
  return null;
}

const imageDimCache = new Map();

function imgSizeAttrs(imgUrl) {
  if (!imgUrl) return "";
  if (imageDimCache.has(imgUrl)) {
    const cached = imageDimCache.get(imgUrl);
    return `width="${cached.width}" height="${cached.height}"`;
  }
  let dims = null;
  if (imgUrl.startsWith("/assets/")) {
    const candidate = path.join(distDir, imgUrl.replace(/^\/+/, ""));
    if (fs.existsSync(candidate)) {
      dims = readImageDimensionsFromFile(candidate);
    }
  }
  if (!dims) {
    dims = { width: 1200, height: 800 };
  }
  imageDimCache.set(imgUrl, dims);
  return `width="${dims.width}" height="${dims.height}"`;
}

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function tokenizeMarkdownLinks(input) {
  const tokens = [];
  let i = 0;
  let textStart = 0;

  while (i < input.length) {
    if (input[i] === "[") {
      const closeBracket = input.indexOf("]", i + 1);
      if (closeBracket !== -1 && input[closeBracket + 1] === "(") {
        let depth = 1;
        let j = closeBracket + 2;
        while (j < input.length && depth > 0) {
          if (input[j] === "(") depth++;
          else if (input[j] === ")") depth--;
          j++;
        }
        if (depth === 0) {
          if (i > textStart) {
            tokens.push({ type: "text", content: input.slice(textStart, i) });
          }
          tokens.push({
            type: "link",
            content: input.slice(i + 1, closeBracket),
            url: input.slice(closeBracket + 2, j - 1),
          });
          i = j;
          textStart = i;
          continue;
        }
      }
    }
    i++;
  }

  if (textStart < input.length) {
    tokens.push({ type: "text", content: input.slice(textStart) });
  }
  return tokens;
}

function stripMarkdown(str) {
  const raw = String(str ?? "");
  const plain = tokenizeMarkdownLinks(raw)
    .map((tok) => tok.content)
    .join("");
  return plain.replace(/\*\*([^*]+)\*\*/g, "$1").trim();
}

function renderInlineMarkdown(str, { linkResolver } = {}) {
  const text = String(str ?? "");
  if (!text) return "";

  const renderBoldOnly = (segment) => {
    const parts = [];
    const boldRe = /\*\*([^*]+)\*\*/g;
    let last = 0;
    let m;
    while ((m = boldRe.exec(segment)) !== null) {
      if (m.index > last) {
        parts.push(escapeHtml(segment.slice(last, m.index)));
      }
      parts.push(
        `<strong class="font-bold text-slate-900">${escapeHtml(m[1])}</strong>`,
      );
      last = boldRe.lastIndex;
    }
    if (last < segment.length) {
      parts.push(escapeHtml(segment.slice(last)));
    }
    return parts.join("");
  };

  const out = [];
  for (const tok of tokenizeMarkdownLinks(text)) {
    if (tok.type === "text") {
      out.push(renderBoldOnly(tok.content));
      continue;
    }
    const label = tok.content;
    const rawUrl = tok.url;
    const resolved = linkResolver
      ? linkResolver(label, rawUrl)
      : { href: rawUrl, external: /^https?:\/\//i.test(rawUrl) };
    if (resolved.external) {
      out.push(
        `<a href="${escapeHtml(resolved.href)}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-700">${escapeHtml(label)}</a>`,
      );
    } else {
      out.push(
        `<a href="${escapeHtml(resolved.href)}" class="text-blue-600 underline hover:text-blue-700">${escapeHtml(label)}</a>`,
      );
    }
  }
  return out.join("");
}

function renderBodyBlocks(text, options = {}) {
  const raw = String(text ?? "");
  if (!raw.trim()) return "";

  const lines = raw.split("\n");
  const blocks = [];
  let bulletItems = [];
  let numberedItems = [];

  const flushBullets = () => {
    if (bulletItems.length === 0) return;
    blocks.push(
      `<ul class="list-disc pl-6 space-y-2 text-slate-700">${bulletItems
        .map((item) => `<li>${renderInlineMarkdown(item, options)}</li>`)
        .join("")}</ul>`,
    );
    bulletItems = [];
  };

  const flushNumbered = () => {
    if (numberedItems.length === 0) return;
    blocks.push(
      `<ol class="list-decimal pl-6 space-y-2 text-slate-700">${numberedItems
        .map((item) => `<li>${renderInlineMarkdown(item, options)}</li>`)
        .join("")}</ol>`,
    );
    numberedItems = [];
  };

  for (const rawLine of lines) {
    const trimmed = rawLine.trim();
    if (!trimmed) {
      flushBullets();
      flushNumbered();
      continue;
    }
    if (trimmed.startsWith("- ")) {
      flushNumbered();
      bulletItems.push(trimmed.slice(2));
    } else if (/^\d+\.\s/.test(trimmed)) {
      flushBullets();
      numberedItems.push(trimmed.replace(/^\d+\.\s+/, ""));
    } else {
      flushBullets();
      flushNumbered();
      blocks.push(
        `<p class="leading-relaxed text-slate-700">${renderInlineMarkdown(trimmed, options)}</p>`,
      );
    }
  }
  flushBullets();
  flushNumbered();
  return blocks.join("\n");
}

function renderBreadcrumbsHtml(items) {
  if (!items || items.length === 0) return "";
  const listItems = items
    .map((item, idx) => {
      const isLast = idx === items.length - 1;
      const sep = idx > 0 ? '<span aria-hidden="true" class="text-slate-400">/</span>' : "";
      const node =
        isLast || !item.path
          ? `<span class="text-slate-900 font-semibold" aria-current="page">${escapeHtml(item.name)}</span>`
          : `<a href="${escapeHtml(item.path)}" class="hover:text-blue-700 underline">${escapeHtml(item.name)}</a>`;
      return `<li class="inline-flex items-center gap-2">${sep}${node}</li>`;
    })
    .join(" ");
  return `<nav aria-label="Breadcrumb" class="container mx-auto max-w-6xl px-6 pt-6 text-xs font-mono text-slate-600"><ol class="flex flex-wrap items-center gap-2">${listItems}</ol></nav>`;
}

const AUTHOR_BOX_COPY = {
  pl: {
    authorRole: "Główny Technolog Metalizacji Próżniowej PVD · STANIAX Sp. z o.o.",
    authorBio:
      "Ponad 25 lat praktyki w metalizacji próżniowej PVD i testach przyczepności ISO 2409.",
    publishedLabel: "Opublikowano",
    updatedLabel: "Aktualizacja",
  },
  en: {
    authorRole: "Chief PVD Vacuum Metallization Technologist · STANIAX Sp. z o.o.",
    authorBio:
      "25+ years of expertise in PVD aluminum vapor deposition and ISO 2409 adhesion testing.",
    publishedLabel: "Published",
    updatedLabel: "Updated",
  },
  de: {
    authorRole: "Leitender Technologe für PVD-Vakuummetallisierung · STANIAX Sp. z o.o.",
    authorBio:
      "Über 25 Jahre Praxiserfahrung in PVD-Aluminiumbedampfung und Haftprüfung ISO 2409.",
    publishedLabel: "Veröffentlicht",
    updatedLabel: "Aktualisiert",
  },
};

function renderArticleAuthorBoxHtml(lang, datePublished, dateModified) {
  const copy = AUTHOR_BOX_COPY[lang] || AUTHOR_BOX_COPY.pl;
  return `
    <div class="rounded-2xl border border-slate-200 bg-slate-50/90 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div class="space-y-1">
        <p class="text-sm font-bold text-slate-950">Dariusz Staniak</p>
        <p class="text-xs font-semibold text-blue-700">${escapeHtml(copy.authorRole)}</p>
        <p class="text-xs text-slate-600 leading-relaxed">${escapeHtml(copy.authorBio)}</p>
      </div>
      <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-600 sm:text-right shrink-0 border-t sm:border-t-0 sm:border-l border-slate-200 pt-2 sm:pt-0 sm:pl-4">
        <span>${escapeHtml(copy.publishedLabel)}: <time datetime="${escapeHtml(datePublished)}">${escapeHtml(datePublished)}</time></span>
        <span class="font-semibold text-slate-900">${escapeHtml(copy.updatedLabel)}: <time datetime="${escapeHtml(dateModified)}">${escapeHtml(dateModified)}</time></span>
      </div>
    </div>`;
}

const GALLERY_CATEGORY_LABELS = {
  pl: { Wszystkie: "Wszystkie", Złoto: "Złoto", Chrom: "Chrom", Dekoracyjne: "Dekoracyjne" },
  en: { Wszystkie: "All", Złoto: "Gold PVD", Chrom: "Chrome Mirror", Dekoracyjne: "Decorative Finishes" },
  de: { Wszystkie: "Alle", Złoto: "Gold-PVD", Chrom: "Spiegelchrom", Dekoracyjne: "Dekorative Lackierung" },
};

function localizeGalleryAlt(item, idx, lang) {
  if (lang === "pl") return item.alt;
  const lower = item.alt.toLowerCase();
  const catLabel = GALLERY_CATEGORY_LABELS[lang][item.category] || item.category;
  if (lang === "de") {
    const subject =
      lower.includes("reflektor") || lower.includes("odbłyśnik") || lower.includes("lamp")
        ? "Kfz-Scheinwerferreflektor nach PVD-Vakuumbedampfung"
        : lower.includes("szkł") || lower.includes("flakon") || lower.includes("butel") || lower.includes("słoik")
          ? "Parfümflakon & Glasveredelung durch Industrielackierung"
          : "Kosmetik- & Industriebauteil nach Vakuummetallisierung";
    return `${catLabel}: ${subject} — Referenz #${idx + 1}`;
  }
  const subject =
    lower.includes("reflektor") || lower.includes("odbłyśnik") || lower.includes("lamp")
      ? "automotive headlight reflector after PVD vacuum metallization"
      : lower.includes("szkł") || lower.includes("flakon") || lower.includes("butel") || lower.includes("słoik")
        ? "perfume flacon & glass bottle after industrial coating"
        : "cosmetic packaging & industrial part after PVD vacuum coating";
  return `${catLabel}: ${subject} — Project #${idx + 1}`;
}

function extractGalleryItems(resolveAsset) {
  const gallerySourcePath = path.join(
    rootDir,
    "src",
    "pages",
    "GalleryPage.tsx",
  );
  const src = fs.readFileSync(gallerySourcePath, "utf-8");
  const itemRe =
    /\{\s*src:\s*gallery(\d+),\s*alt:\s*['"]([^'"]+)['"],\s*category:\s*['"]([^'"]+)['"],?\s*\}/g;
  const items = [];
  let m;
  while ((m = itemRe.exec(src)) !== null) {
    const nn = m[1].padStart(2, "0");
    items.push({
      src: resolveAsset(`gallery-${nn}`),
      alt: m[2],
      category: m[3],
    });
  }
  if (items.length === 0) {
    throw new Error(
      "Failed to parse rawGalleryItems from src/pages/GalleryPage.tsx",
    );
  }
  return items;
}

function getLayoutLabels(lang) {
  if (lang === "en") {
    return {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      news: "Knowledge Base",
      contact: "Contact & Quote",
      langSwitch: "Language",
      footerServicesTitle: "Surface Engineering Services",
      footerCompanyTitle: "Knowledge & Legal",
      footerPlantTitle: "Production Plant & HQ",
      footerPlantPrefix: "Production Plant:",
      footerHqPrefix: "Registered Office:",
      footerCountrySuffix: ", Poland",
      contactPlantLine:
        "STANIAX Sp. z o.o. · ul. kard. Stefana Wyszyńskiego 116A, 05-420 Józefów, Poland",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
      allRights: "© 2026 STANIAX Sp. z o.o. All rights reserved.",
      backToTop: "Get Technical Quote",
      tableCaptionSuffix: "technical specification table",
      processLabel: "Technological Process",
      benefitsLabel: "B2B Advantages",
      caseStudiesLabel: "Industrial Case Studies",
      showcasePreviewLabel: "Available Finishes & Reference Comparison",
      relatedLabel: "See Related Services",
      serviceLinks: {
        privacy: "/en/privacy-policy",
        cookies: "/en/cookie-policy",
        gallery: "/en/gallery",
        news: "/en/news",
        home: "/en",
      },
    };
  }
  if (lang === "de") {
    return {
      home: "Startseite",
      services: "Leistungen",
      gallery: "Galerie",
      news: "Wissensdatenbank",
      contact: "Kontakt & Anfrage",
      langSwitch: "Sprache",
      footerServicesTitle: "Oberflächentechnik & Leistungen",
      footerCompanyTitle: "Wissen & Rechtliches",
      footerPlantTitle: "Produktionswerk & Sitz",
      footerPlantPrefix: "Produktionswerk:",
      footerHqPrefix: "Firmensitz:",
      footerCountrySuffix: ", Polen",
      contactPlantLine:
        "STANIAX Sp. z o.o. · ul. kard. Stefana Wyszyńskiego 116A, 05-420 Józefów, Polen",
      privacy: "Datenschutzerklärung",
      cookies: "Cookie-Richtlinie",
      allRights: "© 2026 STANIAX Sp. z o.o. Alle Rechte vorbehalten.",
      backToTop: "Angebot anfordern",
      tableCaptionSuffix: "technische Spezifikation",
      processLabel: "Technologieprozess",
      benefitsLabel: "B2B-Vorteile",
      caseStudiesLabel: "Praxisbeispiele & Projekte",
      showcasePreviewLabel: "Verfügbare Ausführungen & Vergleich",
      relatedLabel: "Verwandte Leistungen",
      serviceLinks: {
        privacy: "/de/datenschutz",
        cookies: "/de/cookie-richtlinie",
        gallery: "/de/gallery",
        news: "/de/news",
        home: "/de",
      },
    };
  }
  return {
    home: "Strona główna",
    services: "Oferta usług",
    gallery: "Galeria realizacji",
    news: "Baza wiedzy",
    contact: "Kontakt i wycena",
    langSwitch: "Język",
    footerServicesTitle: "Usługi technologiczne STANIAX",
    footerCompanyTitle: "Wiedza i dokumenty",
    footerPlantTitle: "Zakład produkcyjny i siedziba",
    footerPlantPrefix: "Zakład produkcyjny:",
    footerHqPrefix: "Siedziba rejestrowa:",
    footerCountrySuffix: "",
    contactPlantLine:
      "STANIAX Sp. z o.o. · ul. kard. Stefana Wyszyńskiego 116A, 05-420 Józefów",
    privacy: "Polityka prywatności",
    cookies: "Polityka cookies",
    allRights: "© 2026 STANIAX Sp. z o.o. Wszelkie prawa zastrzeżone.",
    backToTop: "Poproś o wycenę B2B",
    tableCaptionSuffix: "specyfikacja techniczna",
    processLabel: "Proces technologiczny",
    benefitsLabel: "Przewagi B2B",
    caseStudiesLabel: "Realizacje przemysłowe",
    showcasePreviewLabel: "Warianty wykończeń i porównanie",
    relatedLabel: "Powiązane usługi i wiedza",
    serviceLinks: {
      privacy: "/polityka-prywatnosci",
      cookies: "/polityka-cookies",
      gallery: "/gallery",
      news: "/news",
      home: "/",
    },
  };
}

function renderSiteChrome({ lang, currentPath, alternates, bridge, bodyHtml }) {
  const { SERVICE_ORDER, SERVICE_SLUGS, SERVICES } = bridge;
  const labels = getLayoutLabels(lang);
  const contactHref = `${labels.serviceLinks.home}#contact`;

  const serviceNavLinks = SERVICE_ORDER.map(
    (id) =>
      `<a href="${escapeHtml(SERVICE_SLUGS[id][lang])}" class="text-sm font-medium text-slate-700 hover:text-blue-700">${escapeHtml(
        SERVICES[id].locales[lang].navLabel,
      )}</a>`,
  ).join("\n            ");

  const footerServiceLinks = SERVICE_ORDER.map(
    (id) =>
      `<li><a href="${escapeHtml(SERVICE_SLUGS[id][lang])}" class="text-slate-300 hover:text-white underline-offset-4 hover:underline">${escapeHtml(
        SERVICES[id].locales[lang].navLabel,
      )}</a></li>`,
  ).join("\n            ");

  const langSwitcherLinks = ["pl", "en", "de"]
    .map((l) => {
      const target =
        (alternates && alternates[l]) || (l === "pl" ? "/" : `/${l}`);
      const activeClass =
        l === lang
          ? "font-bold text-blue-700 underline"
          : "text-slate-600 hover:text-slate-900";
      return `<a href="${escapeHtml(target)}" hreflang="${l}" class="text-xs uppercase ${activeClass}">${l.toUpperCase()}</a>`;
    })
    .join(" · ");

  return `
<div class="min-h-screen bg-white text-slate-900 font-sans">
  <header class="border-b border-slate-200 bg-white/95 sticky top-0 z-50">
    <div class="container mx-auto max-w-6xl px-6 py-4 flex flex-wrap items-center justify-between gap-4">
      <a href="${escapeHtml(labels.serviceLinks.home)}" class="font-black tracking-tight text-xl text-slate-950">STANIAX Sp. z o.o.</a>
      <nav aria-label="Primary navigation" class="flex flex-wrap items-center gap-4">
        <a href="${escapeHtml(labels.serviceLinks.home)}" class="text-sm font-medium text-slate-700 hover:text-blue-700">${escapeHtml(labels.home)}</a>
        ${serviceNavLinks}
        <a href="${escapeHtml(labels.serviceLinks.gallery)}" class="text-sm font-medium text-slate-700 hover:text-blue-700">${escapeHtml(labels.gallery)}</a>
        <a href="${escapeHtml(labels.serviceLinks.news)}" class="text-sm font-medium text-slate-700 hover:text-blue-700">${escapeHtml(labels.news)}</a>
        <a href="${escapeHtml(contactHref)}" class="text-sm font-semibold text-blue-700 hover:text-blue-800">${escapeHtml(labels.contact)}</a>
      </nav>
      <div class="text-xs text-slate-500" aria-label="${escapeHtml(labels.langSwitch)}">${langSwitcherLinks}</div>
    </div>
  </header>

  <main id="main-content">
    ${bodyHtml}
  </main>

  <footer class="bg-slate-950 text-slate-200 border-t border-slate-800 mt-16 py-12">
    <div class="container mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-3">
      <div class="space-y-3">
        <p class="text-xs uppercase tracking-widest text-blue-400 font-bold">${escapeHtml(labels.footerPlantTitle)}</p>
        <p class="font-bold text-white">STANIAX Sp. z o.o.</p>
        <p class="text-sm text-slate-300">${escapeHtml(labels.footerPlantPrefix)} ul. kard. Stefana Wyszyńskiego 116A, 05-420 Józefów${escapeHtml(labels.footerCountrySuffix)}</p>
        <p class="text-sm text-slate-300">${escapeHtml(labels.footerHqPrefix)} ul. Grzybowska 5A, 00-132 Warszawa${escapeHtml(labels.footerCountrySuffix)}</p>
        <p class="text-sm text-slate-300">Tel.: <a href="tel:+48882488844" class="text-blue-400 underline">+48 882 488 844</a> (pn.–pt. 07:00–17:00)</p>
        <p class="text-sm text-slate-300">E-mail: <a href="mailto:metalizacja@staniax.pl" class="text-blue-400 underline">metalizacja@staniax.pl</a> · <a href="mailto:office@staniax.pl" class="text-blue-400 underline">office@staniax.pl</a></p>
        <p class="text-xs text-slate-400">KRS: 0001182026 · NIP: 5253052509 · REGON: 542156053 · Kapitał zakładowy: 150 000,00 zł</p>
      </div>
      <div class="space-y-3">
        <p class="text-xs uppercase tracking-widest text-blue-400 font-bold">${escapeHtml(labels.footerServicesTitle)}</p>
        <ul class="space-y-2 text-sm">
          ${footerServiceLinks}
        </ul>
      </div>
      <div class="space-y-3">
        <p class="text-xs uppercase tracking-widest text-blue-400 font-bold">${escapeHtml(labels.footerCompanyTitle)}</p>
        <ul class="space-y-2 text-sm">
          <li><a href="${escapeHtml(labels.serviceLinks.gallery)}" class="text-slate-300 hover:text-white underline-offset-4 hover:underline">${escapeHtml(labels.gallery)}</a></li>
          <li><a href="${escapeHtml(labels.serviceLinks.news)}" class="text-slate-300 hover:text-white underline-offset-4 hover:underline">${escapeHtml(labels.news)}</a></li>
          <li><a href="${escapeHtml(labels.serviceLinks.privacy)}" class="text-slate-300 hover:text-white underline-offset-4 hover:underline">${escapeHtml(labels.privacy)}</a></li>
          <li><a href="${escapeHtml(labels.serviceLinks.cookies)}" class="text-slate-300 hover:text-white underline-offset-4 hover:underline">${escapeHtml(labels.cookies)}</a></li>
        </ul>
        <p class="text-xs text-slate-400 pt-2">${escapeHtml(labels.allRights)} · URL: ${escapeHtml(currentPath)}</p>
      </div>
    </div>
  </footer>
</div>`;
}

function renderHomePage(lang, bridge, resolveAsset) {
  const {
    SERVICE_ORDER,
    SERVICE_SLUGS,
    SERVICES,
    NEWS_ITEMS_BY_LANG,
    translations,
  } = bridge;
  const tr = translations[lang];
  const labels = getLayoutLabels(lang);
  const heroImageUrl = resolveAsset("vacuum_metalization_chamber");

  const serviceCardsHtml = SERVICE_ORDER.map((id, idx) => {
    const svc = SERVICES[id].locales[lang];
    const slug = SERVICE_SLUGS[id][lang];
    const imgUrl = resolveAsset(HERO_IMAGE_PREFIXES[svc.heroImageKey]);
    return `
      <article class="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-sm">
        <img src="${escapeHtml(imgUrl)}" alt="${escapeHtml(svc.heroImageAlt)}" ${imgSizeAttrs(imgUrl)} class="w-full h-48 object-cover rounded-xl" loading="lazy" />
        <p class="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">0${idx + 1}. ${escapeHtml(svc.heroBadge)}</p>
        <h3 class="text-xl font-bold text-slate-950">
          <a href="${escapeHtml(slug)}" class="hover:text-blue-700">${escapeHtml(svc.navLabel)}</a>
        </h3>
        <p class="text-sm text-slate-600 leading-relaxed">${escapeHtml(svc.shortSummary)}</p>
        <p><a href="${escapeHtml(slug)}" class="text-sm font-bold text-blue-700 underline">${escapeHtml(svc.navLabel)} →</a></p>
      </article>`;
  }).join("\n");

  const newsCardsHtml = NEWS_ITEMS_BY_LANG[lang]
    .map((item) => {
      const imgSrc =
        item.imageKey === "externalUnsplash"
          ? item.externalImageUrl || heroImageUrl
          : resolveAsset(NEWS_IMAGE_PREFIXES[item.imageKey]);
      return `
      <article class="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3">
        <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(item.title)}" ${imgSizeAttrs(imgSrc)} class="w-full h-40 object-cover rounded-xl" loading="lazy" />
        <p class="text-xs uppercase font-bold text-blue-700">${escapeHtml(item.category)} · ${escapeHtml(item.date)}</p>
        <h3 class="text-lg font-bold text-slate-950"><a href="${escapeHtml(item.path)}" class="hover:text-blue-700">${escapeHtml(item.title)}</a></h3>
        <p class="text-sm text-slate-600">${escapeHtml(item.homeSummary || item.excerpt)}</p>
        <p><a href="${escapeHtml(item.path)}" class="text-sm font-bold text-blue-700 underline">${escapeHtml(item.ctaLabel)}</a></p>
      </article>`;
    })
    .join("\n");

  const faqHtml = [1, 2, 3, 4, 5, 6]
    .map((i) => {
      const q = tr[`faq${i}q`];
      const a = tr[`faq${i}a`];
      if (!q || !a) return "";
      return `
      <div class="rounded-2xl border border-slate-200 bg-white p-6 space-y-2">
        <h3 class="text-lg font-bold text-slate-950">${escapeHtml(q)}</h3>
        <p class="text-sm text-slate-700 leading-relaxed">${escapeHtml(a)}</p>
      </div>`;
    })
    .join("\n");

  const bodyHtml = `
  <section class="container mx-auto max-w-6xl px-6 py-12 space-y-8">
    <div class="grid gap-8 lg:grid-cols-2 items-center">
      <div class="space-y-4">
        <p class="text-xs uppercase tracking-[0.3em] text-blue-700 font-bold">${escapeHtml(tr.bentoSubtitle || "STANIAX Sp. z o.o.")}</p>
        <h1 class="text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">${escapeHtml(tr.bentoTitle)}</h1>
        <p class="text-lg text-slate-700 leading-relaxed">${escapeHtml(tr.bentoDesc)}</p>
        <div class="flex flex-wrap gap-4 pt-2">
          <a href="${escapeHtml(SERVICE_SLUGS.reflectors[lang])}" class="inline-block rounded-lg bg-blue-700 text-white px-5 py-3 text-sm font-bold">${escapeHtml(SERVICES.reflectors.locales[lang].navLabel)}</a>
          <a href="${escapeHtml(SERVICE_SLUGS["vacuum-metallization"][lang])}" class="inline-block rounded-lg border border-slate-300 text-slate-900 px-5 py-3 text-sm font-bold">${escapeHtml(SERVICES["vacuum-metallization"].locales[lang].navLabel)}</a>
        </div>
      </div>
      <div>
        <img src="${escapeHtml(heroImageUrl)}" alt="${escapeHtml(tr.bentoTitle)}" ${imgSizeAttrs(heroImageUrl)} class="w-full h-80 object-cover rounded-2xl border border-slate-200" />
      </div>
    </div>
  </section>

  <section id="kim-jestesmy" class="bg-slate-50 border-y border-slate-200 py-12">
    <div class="container mx-auto max-w-6xl px-6 space-y-4">
      <p class="text-xs uppercase tracking-widest text-blue-700 font-bold">${escapeHtml(tr.oNas || "STANIAX")}</p>
      <h2 class="text-3xl font-black text-slate-950">${escapeHtml((tr.kimJestesmy || "STANIAX").replace(/\n/g, " "))}</h2>
      <p class="text-slate-700 leading-relaxed">${escapeHtml(tr.kimJestesmyText1)}</p>
      <p class="text-slate-700 leading-relaxed">${escapeHtml(tr.kimJestesmyText2)}</p>
    </div>
  </section>

  <section id="about" class="container mx-auto max-w-6xl px-6 py-12 space-y-8">
    <h2 class="text-3xl font-black text-slate-950">${escapeHtml(tr.naszaOferta)}</h2>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      ${serviceCardsHtml}
    </div>
  </section>

  <section class="bg-slate-50 border-y border-slate-200 py-12">
    <div class="container mx-auto max-w-6xl px-6 space-y-6">
      <h2 class="text-3xl font-black text-slate-950">${escapeHtml(`${tr.bazaWiedzyHeading || ""} ${tr.bazaWiedzyHeadingSub || ""}`.trim())}</h2>
      <p class="text-slate-700 leading-relaxed">${escapeHtml(tr.bazaWiedzyLead)}</p>
      <div class="grid gap-6 md:grid-cols-2">
        <div class="rounded-xl bg-white p-6 border border-slate-200 space-y-2">
          <h3 class="text-lg font-bold text-slate-950">${escapeHtml(tr.bazaWiedzyTechTitle)}</h3>
          <p class="text-sm text-slate-700">${escapeHtml(tr.bazaWiedzyTechDesc)}</p>
        </div>
        <div class="rounded-xl bg-white p-6 border border-slate-200 space-y-2">
          <h3 class="text-lg font-bold text-slate-950">${escapeHtml(tr.bazaWiedzyWhyTitle)}</h3>
          <p class="text-sm text-slate-700">${escapeHtml(tr.bazaWiedzyWhyDesc)}</p>
          <p><a href="${escapeHtml(labels.serviceLinks.gallery)}" class="text-sm font-bold text-blue-700 underline">${escapeHtml(tr.bazaWiedzyWhyLink)}</a></p>
        </div>
        <div class="rounded-xl bg-white p-6 border border-slate-200 space-y-2">
          <h3 class="text-lg font-bold text-slate-950">${escapeHtml(tr.bazaWiedzyLocTitle)}</h3>
          <p class="text-sm text-slate-700">${escapeHtml(tr.bazaWiedzyLocDesc)}</p>
          <p><a href="${escapeHtml(labels.serviceLinks.news)}" class="text-sm font-bold text-blue-700 underline">${escapeHtml(tr.bazaWiedzyLocLink)}</a></p>
        </div>
        <div class="rounded-xl bg-white p-6 border border-slate-200 space-y-2">
          <h3 class="text-lg font-bold text-slate-950">${escapeHtml(tr.bazaWiedzyAppTitle)}</h3>
          <p class="text-sm text-slate-700">${escapeHtml(tr.bazaWiedzyAppDesc)}</p>
        </div>
      </div>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-4">
        ${newsCardsHtml}
      </div>
    </div>
  </section>

  <section id="faq" class="container mx-auto max-w-6xl px-6 py-12 space-y-6">
    <h2 class="text-3xl font-black text-slate-950">${escapeHtml((tr.faqTitle || "FAQ").replace(/\n/g, " "))}</h2>
    <div class="grid gap-4 md:grid-cols-2">
      ${faqHtml}
    </div>
  </section>

  <section id="contact" class="container mx-auto max-w-6xl px-6 pb-12 space-y-4">
    <h2 class="text-2xl font-black text-slate-950">${escapeHtml(labels.contact)}</h2>
    <p class="text-slate-700">${escapeHtml(labels.contactPlantLine)}</p>
  </section>

  ${renderEngineeringHubHtml(bridge.getHomeEngineeringHub(lang))}`;

  const faqSchemaItems = [1, 2, 3, 4, 5, 6]
    .map((i) => ({ q: tr[`faq${i}q`], a: tr[`faq${i}a`] }))
    .filter((f) => Boolean(f.q && f.a));

  const seoConfig = {
    lang,
    path: lang === "pl" ? "/" : `/${lang}`,
    title: tr.metaTitle,
    description: tr.metaDesc,
    alternates: { pl: "/", en: "/en", de: "/de", xDefault: "/" },
    faq: faqSchemaItems,
  };

  return { seoConfig, bodyHtml };
}

function getGeoChromeCopy(lang) {
  if (lang === "en") {
    return {
      geoBadge: "Engineering Quick Answer",
      faqHeading: "Technical FAQ",
      relatedHeading: "Related Services & Specifications",
      ctaTitle: "Discuss specifications directly with STANIAX engineers",
      ctaPhoneLabel: "Call plant",
      ctaFormLabel: "Request B2B quote",
      compareHub: "Engineering Library",
      paramCol: "Technical Parameter",
      tableHeading: "Quantitative Comparison Matrix",
      subHub: "Substrate Matrix",
      specsHeading: "Process Parameters & Quality Standards",
      specParamCol: "Parameter",
      valCol: "STANIAX Specification",
      appsHeading: "Typical Industrial Applications",
      reflectorService: "Reflector Restoration",
      colVariant: "Service Tier",
      colScope: "Process Scope",
      colTime: "Turnaround",
      colPrice: "Estimated Rate",
      colWarranty: "Warranty",
      radiusHeading: "Drop-Off Zones & Courier Coverage",
      colZone: "District / Region",
      colDist: "Travel / Transit Time",
      colMode: "Delivery Mode",
    };
  }
  if (lang === "de") {
    return {
      geoBadge: "Technische Kurzantwort",
      faqHeading: "Häufige Fachfragen (FAQ)",
      relatedHeading: "Weiterführende Leistungen & Daten",
      ctaTitle: "Verfahren direkt mit den STANIAX-Ingenieuren abstimmen",
      ctaPhoneLabel: "Werk anrufen",
      ctaFormLabel: "Angebot anfordern",
      compareHub: "Fachbibliothek & Vergleiche",
      paramCol: "Technischer Parameter",
      tableHeading: "Direkter Technologievergleich",
      subHub: "Materialmatrix & Lösungen",
      specsHeading: "Prozessparameter & Qualitätsnormen",
      specParamCol: "Parameter",
      valCol: "STANIAX-Spezifikation",
      appsHeading: "Typische Industrieanwendungen",
      reflectorService: "Reflektor neu bedampfen",
      colVariant: "Leistungsstufe",
      colScope: "Bearbeitungsumfang",
      colTime: "Durchlaufzeit",
      colPrice: "Richtpreis",
      colWarranty: "Garantie",
      radiusHeading: "Einzugsgebiet & Paketlogistik",
      colZone: "Stadtteil / Region",
      colDist: "Fahrzeit / Laufzeit",
      colMode: "Anlieferungsweg",
    };
  }
  return {
    geoBadge: "Synteza inżynieryjna",
    faqHeading: "Najczęstsze pytania techniczne",
    relatedHeading: "Powiązane usługi i specyfikacje",
    ctaTitle: "Skonsultuj dobór technologii z technologiem STANIAX",
    ctaPhoneLabel: "Zadzwoń",
    ctaFormLabel: "Formularz wyceny",
    compareHub: "Baza wiedzy i porównania",
    paramCol: "Parametr techniczny",
    tableHeading: "Zestawienie parametrów technologicznych",
    subHub: "Baza technologii i materiałów",
    specsHeading: "Parametry procesowe i normy powłoki",
    specParamCol: "Parametr",
    valCol: "Specyfikacja STANIAX",
    appsHeading: "Typowe zastosowania przemysłowe",
    reflectorService: "Regeneracja odbłyśników",
    colVariant: "Wariant usługi",
    colScope: "Zakres technologiczny",
    colTime: "Czas realizacji",
    colPrice: "Cena orientacyjna",
    colWarranty: "Gwarancja",
    radiusHeading: "Strefy dojazdu i wysyłki (Warszawa, Mazowsze, Polska)",
    colZone: "Dzielnica / Region",
    colDist: "Dojazd / Tranzyt",
    colMode: "Tryb realizacji STANIAX",
  };
}

function renderEngineeringHubHtml(hub) {
  const colsHtml = hub.groups
    .map(
      (group) => `
      <div class="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
        <h3 class="text-base font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">${escapeHtml(group.title)}</h3>
        <ul class="space-y-2.5">
          ${group.items
            .map(
              (item) => `
          <li>
            <a href="${escapeHtml(item.path)}" class="flex items-start justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3.5 py-2.5 hover:border-blue-500">
              <div class="min-w-0">
                <span class="block text-sm font-bold text-slate-900">${escapeHtml(item.title)}</span>
                <span class="block text-xs font-mono text-slate-500">${escapeHtml(item.meta)}</span>
              </div>
              <span class="text-blue-700 font-bold" aria-hidden="true">→</span>
            </a>
          </li>`,
            )
            .join("")}
        </ul>
      </div>`,
    )
    .join("\n");

  return `
  <section id="engineering-hub" class="bg-slate-50 border-t border-slate-200 py-12">
    <div class="container mx-auto max-w-6xl px-6 space-y-6">
      <div class="space-y-2 max-w-3xl">
        <p class="text-xs font-mono font-bold uppercase tracking-widest text-blue-700">${escapeHtml(hub.eyebrow)}</p>
        <h2 class="text-2xl sm:text-3xl font-black text-slate-950">${escapeHtml(hub.heading)}</h2>
        <p class="text-slate-700 leading-relaxed">${escapeHtml(hub.subheading)}</p>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        ${colsHtml}
      </div>
    </div>
  </section>`;
}

function renderServiceClusterHtml(cluster) {
  const itemsHtml = cluster.items
    .map(
      (item) => `
      <a href="${escapeHtml(item.path)}" class="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 hover:border-blue-600 hover:text-blue-700">
        <div class="min-w-0">
          <span class="block font-bold">${escapeHtml(item.title)}</span>
          <span class="block text-xs font-mono text-slate-500">${escapeHtml(item.meta)}</span>
        </div>
        <span aria-hidden="true">→</span>
      </a>`,
    )
    .join("\n");

  return `
    <div class="pt-6 border-t border-slate-200 space-y-4">
      <h3 class="text-lg font-bold text-slate-900">${escapeHtml(cluster.heading)}</h3>
      <div class="grid gap-3 md:grid-cols-3">
        ${itemsHtml}
      </div>
    </div>`;
}

function renderGeoDirectAnswerHtml(lang, question, answer) {
  const copy = getGeoChromeCopy(lang);
  return `
  <section aria-label="${escapeHtml(copy.geoBadge)}" data-geo-answer="true" class="rounded-3xl border border-blue-200 bg-blue-50/70 p-6 sm:p-8 space-y-3">
    <span class="inline-flex rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">${escapeHtml(copy.geoBadge)}</span>
    <h2 class="text-xl sm:text-2xl font-bold text-slate-900">${escapeHtml(question)}</h2>
    <p class="text-base sm:text-lg leading-relaxed text-slate-800">${escapeHtml(answer)}</p>
  </section>`;
}

function renderTechnicalSectionsHtml(sections) {
  return sections
    .map(
      (section) => `
  <section class="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
    <h2 class="text-xl sm:text-2xl font-bold text-slate-900">${escapeHtml(section.heading)}</h2>
    ${section.paragraphs.map((p) => `<p class="leading-relaxed text-slate-700">${escapeHtml(p)}</p>`).join("\n    ")}
    ${
      section.bullets && section.bullets.length
        ? `<ul class="space-y-2 pt-2">${section.bullets
            .map((b) => `<li class="text-slate-800">• ${escapeHtml(b)}</li>`)
            .join("\n      ")}</ul>`
        : ""
    }
  </section>`,
    )
    .join("\n");
}

function renderPageFaqHtml(lang, faq) {
  const copy = getGeoChromeCopy(lang);
  return `
  <section class="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
    <h2 class="text-xl sm:text-2xl font-bold text-slate-900">${escapeHtml(copy.faqHeading)}</h2>
    <div class="space-y-4">
      ${faq
        .map(
          (item) => `
      <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-2">
        <h3 class="font-bold text-slate-900">${escapeHtml(item.q)}</h3>
        <p class="text-sm sm:text-base leading-relaxed text-slate-700">${escapeHtml(item.a)}</p>
      </div>`,
        )
        .join("\n")}
    </div>
  </section>`;
}

function renderRelatedClusterHtml(lang, links) {
  const copy = getGeoChromeCopy(lang);
  return `
  <section class="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
    <h2 class="text-lg sm:text-xl font-bold text-slate-900">${escapeHtml(copy.relatedHeading)}</h2>
    <div class="grid gap-3 md:grid-cols-2">
      ${links
        .map(
          (item) => `
      <a href="${escapeHtml(item.path)}" class="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 hover:border-blue-500">
        <span>${escapeHtml(item.label)}</span>
        <span aria-hidden="true">→</span>
      </a>`,
        )
        .join("\n")}
    </div>
  </section>`;
}

function renderBofuCtaHtml(lang, contextLabel) {
  const copy = getGeoChromeCopy(lang);
  const homeContact = lang === "pl" ? "/#contact" : `/${lang}#contact`;
  const titleText = contextLabel ? `${contextLabel}: ${copy.ctaTitle}` : copy.ctaTitle;
  return `
  <section id="wycena" class="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    <div>
      <h2 class="text-xl sm:text-2xl font-bold text-white mb-2">${escapeHtml(titleText)}</h2>
      <p class="text-sm font-mono text-slate-300">STANIAX · Józefów 05-420</p>
    </div>
    <div class="flex flex-wrap gap-3">
      <a href="tel:+48882488844" class="rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-bold">${escapeHtml(copy.ctaPhoneLabel)}: +48 882 488 844</a>
      <a href="mailto:metalizacja@staniax.pl" class="rounded-full border border-white/30 bg-white/10 text-white px-5 py-3 text-sm font-bold">metalizacja@staniax.pl</a>
      <a href="${escapeHtml(homeContact)}" class="rounded-full bg-blue-600 text-white px-5 py-3 text-sm font-bold">${escapeHtml(copy.ctaFormLabel)} →</a>
    </div>
  </section>`;
}

function renderComparisonPage(comparisonId, lang, bridge) {
  const { COMPARISONS, COMPARISON_SLUGS, STATIC_ROUTE_EQUIVALENTS } = bridge;
  const page = COMPARISONS[comparisonId][lang];
  const slugs = COMPARISON_SLUGS[comparisonId];
  const copy = getGeoChromeCopy(lang);
  const labels = getLayoutLabels(lang);
  const libGroup = STATIC_ROUTE_EQUIVALENTS.find(
    (g) => g.pl === "/news/biblioteka",
  );
  const libraryPath = (libGroup && libGroup[lang]) || "/news/biblioteka";
  const currentPath = slugs[lang];

  const rowsHtml = page.comparisonRows
    .map(
      (row) => `
        <tr>
          <td class="py-3 px-4 font-semibold text-slate-900">${escapeHtml(row.parameter)}</td>
          <td class="py-3 px-4 text-slate-800">${escapeHtml(row.optionA)}</td>
          <td class="py-3 px-4 text-slate-600">${escapeHtml(row.optionB)}</td>
        </tr>`,
    )
    .join("\n");

  const bodyHtml = `
  ${renderBreadcrumbsHtml([
    { name: labels.home, path: labels.serviceLinks.home },
    { name: copy.compareHub, path: libraryPath },
    { name: page.breadLabel, path: currentPath },
  ])}

  <div class="container mx-auto max-w-5xl px-6 py-10 space-y-10">
    <header class="space-y-4">
      <span class="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">${escapeHtml(page.badge)}</span>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">${escapeHtml(page.h1)}</h1>
      <p class="text-lg text-slate-700 leading-relaxed">${escapeHtml(page.subtitle)}</p>
    </header>

    ${renderGeoDirectAnswerHtml(lang, page.directAnswerQuestion, page.directAnswer)}

    <section class="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-slate-900">${escapeHtml(copy.tableHeading)}</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-sm sm:text-base">
          <thead>
            <tr class="border-b-2 border-slate-200 bg-slate-50">
              <th scope="col" class="py-3 px-4 font-bold text-slate-900">${escapeHtml(copy.paramCol)}</th>
              <th scope="col" class="py-3 px-4 font-bold text-blue-800">${escapeHtml(page.sideALabel)}</th>
              <th scope="col" class="py-3 px-4 font-bold text-slate-700">${escapeHtml(page.sideBLabel)}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            ${rowsHtml}
          </tbody>
        </table>
      </div>
      <div class="rounded-2xl bg-slate-900 text-white p-5">
        <p class="text-xs font-mono uppercase tracking-wider text-blue-300 mb-1">${escapeHtml(page.verdictTitle)}</p>
        <p class="text-sm sm:text-base text-slate-100 leading-relaxed">${escapeHtml(page.verdictSummary)}</p>
      </div>
    </section>

    ${renderTechnicalSectionsHtml(page.sections)}

    <section class="grid gap-6 md:grid-cols-2">
      <div class="rounded-3xl border border-blue-200 bg-white p-6 space-y-3">
        <h2 class="text-lg font-bold text-blue-900">${escapeHtml(page.whenChooseATitle)}</h2>
        <ul class="space-y-2 text-slate-800">${page.whenChooseA
          .map((item) => `<li>• ${escapeHtml(item)}</li>`)
          .join("\n")}</ul>
      </div>
      <div class="rounded-3xl border border-slate-200 bg-white p-6 space-y-3">
        <h2 class="text-lg font-bold text-slate-900">${escapeHtml(page.whenChooseBTitle)}</h2>
        <ul class="space-y-2 text-slate-700">${page.whenChooseB
          .map((item) => `<li>• ${escapeHtml(item)}</li>`)
          .join("\n")}</ul>
      </div>
    </section>

    ${renderPageFaqHtml(lang, page.faq)}
    ${renderRelatedClusterHtml(lang, page.relatedLinks)}
    ${renderBofuCtaHtml(lang, page.breadLabel)}
  </div>`;

  const seoConfig = {
    lang,
    path: currentPath,
    title: page.metaTitle,
    description: page.metaDesc,
    alternates: { pl: slugs.pl, en: slugs.en, de: slugs.de, xDefault: slugs.pl },
    ogType: "article",
    breadcrumbs: [
      { name: labels.home, path: labels.serviceLinks.home },
      { name: copy.compareHub, path: libraryPath },
      { name: page.breadLabel, path: currentPath },
    ],
    faq: page.faq,
    serviceSchema: {
      name: page.h1,
      serviceType: page.badge,
      description: page.metaDesc,
    },
  };

  return { seoConfig, bodyHtml };
}

function renderSubstrateMatrixPage(substrateId, lang, bridge) {
  const { SUBSTRATES, SUBSTRATE_SLUGS, STATIC_ROUTE_EQUIVALENTS } = bridge;
  const page = SUBSTRATES[substrateId][lang];
  const slugs = SUBSTRATE_SLUGS[substrateId];
  const copy = getGeoChromeCopy(lang);
  const labels = getLayoutLabels(lang);
  const libGroup = STATIC_ROUTE_EQUIVALENTS.find(
    (g) => g.pl === "/news/biblioteka",
  );
  const libraryPath = (libGroup && libGroup[lang]) || "/news/biblioteka";
  const currentPath = slugs[lang];

  const rowsHtml = page.specs
    .map(
      (row) => `
        <tr>
          <td class="py-3 px-4 font-semibold text-slate-900">${escapeHtml(row.parameter)}</td>
          <td class="py-3 px-4 text-slate-700">${escapeHtml(row.value)}</td>
        </tr>`,
    )
    .join("\n");

  const bodyHtml = `
  ${renderBreadcrumbsHtml([
    { name: labels.home, path: labels.serviceLinks.home },
    { name: copy.subHub, path: libraryPath },
    { name: page.breadLabel, path: currentPath },
  ])}

  <div class="container mx-auto max-w-5xl px-6 py-10 space-y-10">
    <header class="space-y-4">
      <div class="flex flex-wrap items-center gap-3">
        <span class="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">${escapeHtml(page.badge)}</span>
        <span class="inline-flex rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-mono text-slate-700">${escapeHtml(page.polymerCode)}</span>
      </div>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">${escapeHtml(page.h1)}</h1>
      <p class="text-lg text-slate-700 leading-relaxed">${escapeHtml(page.subtitle)}</p>
    </header>

    ${renderGeoDirectAnswerHtml(lang, page.directAnswerQuestion, page.directAnswer)}

    <section class="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-slate-900">${escapeHtml(copy.specsHeading)}</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-sm sm:text-base">
          <thead>
            <tr class="border-b-2 border-slate-200 bg-slate-50">
              <th scope="col" class="py-3 px-4 font-bold text-slate-900">${escapeHtml(copy.specParamCol)}</th>
              <th scope="col" class="py-3 px-4 font-bold text-blue-800">${escapeHtml(copy.valCol)}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    </section>

    ${renderTechnicalSectionsHtml(page.sections)}

    <section class="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-slate-900">${escapeHtml(copy.appsHeading)}</h2>
      <ul class="grid gap-3 md:grid-cols-2 text-slate-800">
        ${page.applications
          .map(
            (app) =>
              `<li class="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm sm:text-base">• ${escapeHtml(app)}</li>`,
          )
          .join("\n")}
      </ul>
    </section>

    ${renderPageFaqHtml(lang, page.faq)}
    ${renderRelatedClusterHtml(lang, page.relatedLinks)}
    ${renderBofuCtaHtml(lang, page.breadLabel)}
  </div>`;

  const seoConfig = {
    lang,
    path: currentPath,
    title: page.metaTitle,
    description: page.metaDesc,
    alternates: { pl: slugs.pl, en: slugs.en, de: slugs.de, xDefault: slugs.pl },
    breadcrumbs: [
      { name: labels.home, path: labels.serviceLinks.home },
      { name: copy.subHub, path: libraryPath },
      { name: page.breadLabel, path: currentPath },
    ],
    faq: page.faq,
    serviceSchema: {
      name: page.h1,
      serviceType: page.polymerCode,
      description: page.metaDesc,
    },
  };

  return { seoConfig, bodyHtml };
}

function renderHeadlightPricingPage(lang, bridge) {
  const { HEADLIGHT_PRICING_PAGE, PRICING_SLUGS, SERVICE_SLUGS } = bridge;
  const page = HEADLIGHT_PRICING_PAGE[lang];
  const copy = getGeoChromeCopy(lang);
  const labels = getLayoutLabels(lang);
  const servicePath = SERVICE_SLUGS.reflectors[lang];
  const currentPath = PRICING_SLUGS[lang];

  const presetsHtml = page.presets
    .map(
      (p) => `
      <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-1">
        <div class="flex items-center justify-between gap-2">
          <span class="font-semibold text-slate-900">${escapeHtml(p.label)}</span>
          <span class="font-mono font-bold text-blue-700">${escapeHtml(`${p.baseReflectorPrice} ${p.currency}`)}</span>
        </div>
        <p class="text-xs text-slate-600">${escapeHtml(p.note)}</p>
      </div>`,
    )
    .join("\n");

  const tiersHtml = page.tiers
    .map(
      (tier) => `
        <tr>
          <td class="py-3.5 px-4 font-semibold text-slate-900">${escapeHtml(tier.serviceType)}</td>
          <td class="py-3.5 px-4 text-slate-700">${escapeHtml(tier.scope)}</td>
          <td class="py-3.5 px-4 font-mono text-slate-700">${escapeHtml(tier.turnaround)}</td>
          <td class="py-3.5 px-4 font-mono font-bold text-blue-700">${escapeHtml(tier.priceLabel)}</td>
          <td class="py-3.5 px-4 text-slate-700">${escapeHtml(tier.warranty)}</td>
        </tr>`,
    )
    .join("\n");

  const bodyHtml = `
  ${renderBreadcrumbsHtml([
    { name: labels.home, path: labels.serviceLinks.home },
    { name: copy.reflectorService, path: servicePath },
    { name: page.breadLabel, path: currentPath },
  ])}

  <div class="container mx-auto max-w-5xl px-6 py-10 space-y-10">
    <header class="space-y-4">
      <span class="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">${escapeHtml(page.badge)}</span>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">${escapeHtml(page.h1)}</h1>
      <p class="text-lg text-slate-700 leading-relaxed">${escapeHtml(page.subtitle)}</p>
    </header>

    ${renderGeoDirectAnswerHtml(lang, page.directAnswerQuestion, page.directAnswer)}

    <section class="rounded-3xl border border-blue-200 bg-white p-6 sm:p-8 space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-slate-900">${escapeHtml(page.calcTitle)}</h2>
      <p class="text-sm sm:text-base text-slate-600">${escapeHtml(page.calcIntro)}</p>
      <div class="grid gap-3 md:grid-cols-2">
        ${presetsHtml}
      </div>
    </section>

    <section class="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-slate-900">${escapeHtml(page.tiersTitle)}</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-sm sm:text-base">
          <thead>
            <tr class="border-b-2 border-slate-200 bg-slate-50">
              <th scope="col" class="py-3 px-4 font-bold text-slate-900">${escapeHtml(copy.colVariant)}</th>
              <th scope="col" class="py-3 px-4 font-bold text-slate-900">${escapeHtml(copy.colScope)}</th>
              <th scope="col" class="py-3 px-4 font-bold text-slate-900">${escapeHtml(copy.colTime)}</th>
              <th scope="col" class="py-3 px-4 font-bold text-blue-800">${escapeHtml(copy.colPrice)}</th>
              <th scope="col" class="py-3 px-4 font-bold text-slate-900">${escapeHtml(copy.colWarranty)}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            ${tiersHtml}
          </tbody>
        </table>
      </div>
    </section>

    ${renderTechnicalSectionsHtml(page.sections)}
    ${renderPageFaqHtml(lang, page.faq)}
    ${renderRelatedClusterHtml(lang, page.relatedLinks)}
    ${renderBofuCtaHtml(lang, page.breadLabel)}
  </div>`;

  const seoConfig = {
    lang,
    path: currentPath,
    title: page.metaTitle,
    description: page.metaDesc,
    alternates: {
      pl: PRICING_SLUGS.pl,
      en: PRICING_SLUGS.en,
      de: PRICING_SLUGS.de,
      xDefault: PRICING_SLUGS.pl,
    },
    breadcrumbs: [
      { name: labels.home, path: labels.serviceLinks.home },
      { name: copy.reflectorService, path: servicePath },
      { name: page.breadLabel, path: currentPath },
    ],
    faq: page.faq,
    serviceSchema: {
      name: page.h1,
      serviceType: page.badge,
      description: page.metaDesc,
      priceRange: lang === "pl" ? "150 - 550 PLN" : "35 - 140 EUR",
      priceCurrency: lang === "pl" ? "PLN" : "EUR",
    },
  };

  return { seoConfig, bodyHtml };
}

function renderLocalWarsawPage(lang, bridge) {
  const { LOCAL_WARSAW_PAGE, LOCAL_WARSAW_SLUGS, SERVICE_SLUGS } = bridge;
  const page = LOCAL_WARSAW_PAGE[lang];
  const copy = getGeoChromeCopy(lang);
  const labels = getLayoutLabels(lang);
  const servicePath = SERVICE_SLUGS.reflectors[lang];
  const currentPath = LOCAL_WARSAW_SLUGS[lang];

  const radiusHtml = page.serviceRadiusTable
    .map(
      (row) => `
        <tr>
          <td class="py-3.5 px-4 font-semibold text-slate-900">${escapeHtml(row.zone)}</td>
          <td class="py-3.5 px-4 text-slate-700">${escapeHtml(row.distanceTime)}</td>
          <td class="py-3.5 px-4 text-slate-700">${escapeHtml(row.dropoffMode)}</td>
        </tr>`,
    )
    .join("\n");

  const bodyHtml = `
  ${renderBreadcrumbsHtml([
    { name: labels.home, path: labels.serviceLinks.home },
    { name: copy.reflectorService, path: servicePath },
    { name: page.breadLabel, path: currentPath },
  ])}

  <div class="container mx-auto max-w-5xl px-6 py-10 space-y-10">
    <header class="space-y-4">
      <span class="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">${escapeHtml(page.badge)}</span>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">${escapeHtml(page.h1)}</h1>
      <p class="text-lg text-slate-700 leading-relaxed">${escapeHtml(page.subtitle)}</p>
    </header>

    ${renderGeoDirectAnswerHtml(lang, page.directAnswerQuestion, page.directAnswer)}

    <section class="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-5">
      <h2 class="text-xl sm:text-2xl font-bold text-slate-900">${escapeHtml(page.plantCardTitle)}</h2>
      <div class="grid gap-4 md:grid-cols-3 text-sm sm:text-base">
        <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 font-semibold text-slate-900">${escapeHtml(page.plantAddress)}</div>
        <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 font-semibold text-slate-900">${escapeHtml(page.plantHours)}</div>
        <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 font-mono font-bold text-blue-700"><a href="tel:+48882488844">${escapeHtml(page.phone)}</a></div>
      </div>
      <p class="text-sm sm:text-base text-slate-700">${escapeHtml(page.plantDirections)}</p>
      <p class="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">${escapeHtml(page.plantRegNote)}</p>
    </section>

    <section class="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-slate-900">${escapeHtml(copy.radiusHeading)}</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-sm sm:text-base">
          <thead>
            <tr class="border-b-2 border-slate-200 bg-slate-50">
              <th scope="col" class="py-3 px-4 font-bold text-slate-900">${escapeHtml(copy.colZone)}</th>
              <th scope="col" class="py-3 px-4 font-bold text-slate-900">${escapeHtml(copy.colDist)}</th>
              <th scope="col" class="py-3 px-4 font-bold text-blue-800">${escapeHtml(copy.colMode)}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            ${radiusHtml}
          </tbody>
        </table>
      </div>
    </section>

    ${renderTechnicalSectionsHtml(page.sections)}
    ${renderPageFaqHtml(lang, page.faq)}
    ${renderRelatedClusterHtml(lang, page.relatedLinks)}
    ${renderBofuCtaHtml(lang, page.breadLabel)}
  </div>`;

  const seoConfig = {
    lang,
    path: currentPath,
    title: page.metaTitle,
    description: page.metaDesc,
    alternates: {
      pl: LOCAL_WARSAW_SLUGS.pl,
      en: LOCAL_WARSAW_SLUGS.en,
      de: LOCAL_WARSAW_SLUGS.de,
      xDefault: LOCAL_WARSAW_SLUGS.pl,
    },
    breadcrumbs: [
      { name: labels.home, path: labels.serviceLinks.home },
      { name: copy.reflectorService, path: servicePath },
      { name: page.breadLabel, path: currentPath },
    ],
    faq: page.faq,
    serviceSchema: {
      name: page.h1,
      serviceType: page.badge,
      description: page.metaDesc,
      areaServed: [
        "Warszawa",
        "Józefów",
        "Otwock",
        "Wawer",
        "Piaseczno",
        "Mazowieckie",
        "Polska",
      ],
    },
  };

  return { seoConfig, bodyHtml };
}

function renderServicePage(serviceId, lang, bridge, resolveAsset) {
  const { SERVICES, SERVICE_SLUGS } = bridge;
  const def = SERVICES[serviceId];
  const c = def.locales[lang];
  const currentPath = SERVICE_SLUGS[serviceId][lang];
  const labels = getLayoutLabels(lang);
  const heroImg = resolveAsset(HERO_IMAGE_PREFIXES[c.heroImageKey]);

  const metricsHtml = c.metrics
    .map(
      (m) => `
      <div class="rounded-xl border border-slate-200 bg-white p-5">
        <p class="text-3xl font-black text-blue-700">${escapeHtml(m.value)}${escapeHtml(m.suffix || "")}</p>
        <p class="text-sm font-bold text-slate-950 mt-1">${escapeHtml(m.label)}</p>
        ${m.sub ? `<p class="text-xs text-slate-600 mt-1">${escapeHtml(m.sub)}</p>` : ""}
      </div>`,
    )
    .join("\n");

  const scopeTableHeaders = c.scopeSection.table.headers
    .map(
      (h) =>
        `<th class="p-3 font-bold text-slate-950 border-b border-slate-200">${escapeHtml(h)}</th>`,
    )
    .join("");
  const scopeTableRows = c.scopeSection.table.rows
    .map(
      (row) =>
        `<tr class="border-b border-slate-100">${row
          .map(
            (cell) =>
              `<td class="p-3 text-sm text-slate-700">${escapeHtml(cell)}</td>`,
          )
          .join("")}</tr>`,
    )
    .join("\n");

  const editorialHtml = c.editorialSections
    .map((sec) => {
      const paras = sec.paragraphs
        .map(
          (p) =>
            `<p class="leading-relaxed text-slate-700">${renderInlineMarkdown(p)}</p>`,
        )
        .join("\n");
      const subs = (sec.subSections || [])
        .map((sub) => {
          const bullets =
            sub.bullets && sub.bullets.length > 0
              ? `<ul class="list-disc pl-6 space-y-1 text-slate-700">${sub.bullets
                  .map((b) => `<li>${renderInlineMarkdown(b)}</li>`)
                  .join("")}</ul>`
              : "";
          return `
          <div class="pl-4 border-l-2 border-blue-500 space-y-2">
            <h3 class="text-xl font-bold text-slate-950">${escapeHtml(sub.h3)}</h3>
            <p class="leading-relaxed text-slate-700">${renderInlineMarkdown(sub.body)}</p>
            ${bullets}
          </div>`;
        })
        .join("\n");
      return `
      <article class="space-y-4">
        <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(sec.h2)}</h2>
        ${paras}
        ${subs}
      </article>`;
    })
    .join("\n");

  const showcaseItemsHtml = [
    ...(c.showcase.options || []).map(
      (opt) =>
        `<div class="rounded-xl border border-slate-200 p-4 space-y-1">
          <h3 class="text-base font-bold text-slate-950">${escapeHtml(opt.label)} (${escapeHtml(opt.badge)})</h3>
          <p class="text-sm text-slate-600">${escapeHtml(opt.desc)}</p>
          <p class="text-xs font-mono text-blue-700">${escapeHtml(opt.spec)}</p>
        </div>`,
    ),
    ...(c.showcase.ralColors || []).map(
      (ral) =>
        `<div class="rounded-xl border border-slate-200 p-4 space-y-1">
          <h3 class="text-base font-bold text-slate-950">${escapeHtml(ral.code)} — ${escapeHtml(ral.name)}</h3>
          <p class="text-sm text-slate-600">${escapeHtml(ral.application)}</p>
        </div>`,
    ),
    ...(c.showcase.finishOptions || []).map(
      (fin) =>
        `<div class="rounded-xl border border-slate-200 p-4 space-y-1">
          <h3 class="text-base font-bold text-slate-950">${escapeHtml(fin.label)} (${escapeHtml(fin.gloss)})</h3>
          <p class="text-sm text-slate-600">${escapeHtml(fin.desc)}</p>
        </div>`,
    ),
  ].join("\n");

  const processStepsHtml = c.processSection.steps
    .map(
      (step) => `
      <div class="rounded-xl border border-slate-200 bg-white p-5 space-y-2">
        <span class="text-xs font-mono font-bold text-blue-700">${escapeHtml(step.num)}</span>
        <h3 class="text-lg font-bold text-slate-950">${escapeHtml(step.title)}</h3>
        <p class="text-sm text-slate-700">${escapeHtml(step.desc)}</p>
        <p class="text-xs font-mono text-slate-500">${escapeHtml(step.param)}</p>
      </div>`,
    )
    .join("\n");

  const b2bCardsHtml = c.marqueeSection.b2bCards
    .map(
      (card) => `
      <div class="rounded-xl border border-slate-200 bg-white p-5 space-y-2">
        <p class="text-xs uppercase font-bold text-blue-700">${escapeHtml(card.badge)}</p>
        <h3 class="text-lg font-bold text-slate-950">${escapeHtml(card.h3)}</h3>
        <p class="text-sm text-slate-700">${escapeHtml(card.body)}</p>
        <p class="text-xs font-mono text-slate-500">${escapeHtml(card.spec)}</p>
      </div>`,
    )
    .join("\n");

  const caseStudiesHtml = c.caseStudiesSection.items
    .map((cs) => {
      const csImg = resolveAsset(CASE_STUDY_IMAGE_PREFIXES[cs.imageKey]);
      return `
      <article class="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
        <img src="${escapeHtml(csImg)}" alt="${escapeHtml(cs.alt)}" ${imgSizeAttrs(csImg)} class="w-full h-48 object-cover rounded-xl" loading="lazy" />
        <p class="text-xs font-bold uppercase text-blue-700">${escapeHtml(cs.badge)}</p>
        <h3 class="text-lg font-bold text-slate-950">${escapeHtml(cs.h3)}</h3>
        <p class="text-sm text-slate-700">${escapeHtml(cs.desc)}</p>
        <p class="text-xs font-mono text-slate-500">${escapeHtml(cs.param)}</p>
      </article>`;
    })
    .join("\n");

  const faqHtml = c.faqSection.items
    .map(
      (item) => `
      <div class="rounded-xl border border-slate-200 bg-white p-5 space-y-2">
        <h3 class="text-base font-bold text-slate-950">${escapeHtml(item.q)}</h3>
        <p class="text-sm text-slate-700 leading-relaxed">${escapeHtml(item.a)}</p>
      </div>`,
    )
    .join("\n");

  const seeAlsoHtml = c.seeAlsoSection.links
    .map(
      (lnk) => `
      <a href="${escapeHtml(lnk.path)}" class="block rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-500 space-y-1">
        <p class="text-xs font-bold uppercase text-blue-700">${escapeHtml(lnk.badge)}</p>
        <h3 class="text-base font-bold text-slate-950">${escapeHtml(lnk.anchorText)}</h3>
        <p class="text-sm text-slate-600">${escapeHtml(lnk.desc)}</p>
      </a>`,
    )
    .join("\n");

  const bodyHtml = `
  ${renderBreadcrumbsHtml([
    { name: labels.home, path: labels.serviceLinks.home },
    { name: c.breadcrumbLabel, path: currentPath },
  ])}

  <section class="container mx-auto max-w-6xl px-6 py-10 space-y-8">
    <div class="grid gap-8 lg:grid-cols-2 items-center">
      <div class="space-y-4">
        <p class="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">${escapeHtml(c.heroBadge)}</p>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">${escapeHtml(c.h1)}</h1>
        <p class="text-base sm:text-lg text-slate-700 leading-relaxed">${escapeHtml(c.lead)}</p>
        <div class="flex flex-wrap gap-3 pt-2">
          <a href="#wycena" class="inline-block rounded-lg bg-blue-700 text-white px-5 py-3 text-sm font-bold">${escapeHtml(c.ctaPrimaryLabel)}</a>
          <a href="#zakres" class="inline-block rounded-lg border border-slate-300 text-slate-900 px-5 py-3 text-sm font-bold">${escapeHtml(c.ctaSecondaryLabel)}</a>
        </div>
      </div>
      <div>
        <img src="${escapeHtml(heroImg)}" alt="${escapeHtml(c.heroImageAlt)}" ${imgSizeAttrs(heroImg)} class="w-full h-80 object-cover rounded-2xl border border-slate-200" />
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      ${metricsHtml}
    </div>
  </section>

  <section id="zakres" class="bg-slate-50 border-y border-slate-200 py-12">
    <div class="container mx-auto max-w-6xl px-6 space-y-6">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(c.scopeSection.h2)}</h2>
      <p class="text-slate-700 leading-relaxed">${escapeHtml(c.scopeSection.intro)}</p>
      <div class="rounded-2xl bg-white border border-slate-200 p-6 space-y-3">
        <h3 class="text-lg font-bold text-slate-950">${escapeHtml(c.scopeSection.cardTitle)}</h3>
        <p class="text-sm text-slate-600">${escapeHtml(c.scopeSection.cardSubtitle)}</p>
        <ul class="grid gap-2 md:grid-cols-2 list-disc pl-5 text-sm text-slate-700">
          ${c.scopeSection.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("\n          ")}
        </ul>
      </div>
      <div class="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table class="w-full text-left border-collapse">
          <caption class="sr-only">${escapeHtml(c.scopeSection.table.caption)} — ${escapeHtml(labels.tableCaptionSuffix)}</caption>
          <thead class="bg-slate-100">
            <tr>${scopeTableHeaders}</tr>
          </thead>
          <tbody>
            ${scopeTableRows}
          </tbody>
        </table>
      </div>
      ${c.scopeSection.table.footnote ? `<p class="text-xs text-slate-500">${escapeHtml(c.scopeSection.table.footnote)}</p>` : ""}
    </div>
  </section>

  <section class="container mx-auto max-w-6xl px-6 py-12 space-y-10">
    ${editorialHtml}
  </section>

  <section class="bg-slate-50 border-y border-slate-200 py-12">
    <div class="container mx-auto max-w-6xl px-6 space-y-6">
      <p class="text-xs uppercase font-bold tracking-widest text-blue-700">${escapeHtml(labels.showcasePreviewLabel)}</p>
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(c.showcase.h2)}</h2>
      <p class="text-slate-700">${escapeHtml(c.showcase.subtitle)}</p>
      ${c.showcase.sliderSummary ? `<p class="text-sm font-medium text-slate-800">${escapeHtml(c.showcase.sliderSummary)}</p>` : ""}
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        ${showcaseItemsHtml}
      </div>
    </div>
  </section>

  <section class="container mx-auto max-w-6xl px-6 py-12 space-y-6">
    <p class="text-xs uppercase font-bold tracking-widest text-blue-700">${escapeHtml(labels.processLabel)}</p>
    <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(c.processSection.h2)}</h2>
    <p class="text-slate-700">${escapeHtml(c.processSection.subtitle)}</p>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      ${processStepsHtml}
    </div>
  </section>

  <section class="bg-slate-50 border-y border-slate-200 py-12">
    <div class="container mx-auto max-w-6xl px-6 space-y-6">
      <p class="text-xs uppercase font-bold tracking-widest text-blue-700">${escapeHtml(labels.benefitsLabel)}</p>
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(c.marqueeSection.h2)}</h2>
      <p class="text-slate-700">${escapeHtml(c.marqueeSection.subtitle)}</p>
      <p class="text-xs text-slate-500">${escapeHtml([...c.marqueeSection.row1, ...c.marqueeSection.row2].join(" · "))}</p>
      <div class="grid gap-4 md:grid-cols-2">
        ${b2bCardsHtml}
      </div>
    </div>
  </section>

  <section class="container mx-auto max-w-6xl px-6 py-12 space-y-6">
    <p class="text-xs uppercase font-bold tracking-widest text-blue-700">${escapeHtml(labels.caseStudiesLabel)}</p>
    <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(c.caseStudiesSection.h2)}</h2>
    <p class="text-slate-700">${escapeHtml(c.caseStudiesSection.subtitle)}</p>
    <div class="grid gap-6 md:grid-cols-3">
      ${caseStudiesHtml}
    </div>
  </section>

  ${
    serviceId === "vacuum-metallization"
      ? `<section id="kalkulator-pvd" class="container mx-auto max-w-6xl px-6 py-10 space-y-4">
    <h2 class="text-2xl font-black text-slate-950">${escapeHtml(
      lang === "pl"
        ? "Kalkulator wsadu komory próżniowej Ø 1200 mm i doboru powłoki PVD"
        : lang === "de"
          ? "PVD-Kammerrechner Ø 1200 mm für B2B-Serien"
          : "Ø 1200 mm PVD Chamber Batch & Primer Stack Calculator",
    )}</h2>
    <p class="text-slate-700">${escapeHtml(
      lang === "pl"
        ? "Orientacyjna pojemność wsadu planetarnego Ø 1200 mm: małe detale (20–65 mm, np. nakrętki kosmetyczne) ~900 szt./cykl; średnie detale (80–240 mm, np. odbłyśniki i flakony) ~140 szt./cykl; duże korpusy i klosze (250–550 mm) ~28 szt./cykl. Dobór powłoki PVD i napylanie aluminium 99,99% pod ABS, PC, PP, PA, szkło oraz druk 3D SLS."
        : lang === "de"
          ? "Richtkapazität der Ø-1200-mm-Planetenkammer: Kleinteile (20–65 mm) ca. 900 Stk./Zyklus; mittelgroße Bauteile (80–240 mm) ca. 140 Stk./Zyklus; Großgehäuse (250–550 mm) ca. 28 Stk./Zyklus — abgestimmt auf ABS, PC, PP, PA, Glas und PA12-3D-Druck."
          : "Typical Ø 1200 mm planetary rack capacity: small closures (20–65 mm) ~900 pcs/cycle; medium bezels & reflectors (80–240 mm) ~140 pcs/cycle; large housings (250–550 mm) ~28 pcs/cycle across ABS, PC, PP, PA, glass, and SLS 3D prints.",
    )}</p>
  </section>`
      : ""
  }

  <section class="bg-slate-50 border-y border-slate-200 py-12">
    <div class="container mx-auto max-w-6xl px-6 space-y-6">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(c.faqSection.h2)}</h2>
      <p class="text-slate-700">${escapeHtml(c.faqSection.subtitle)}</p>
      <div class="grid gap-4 md:grid-cols-2">
        ${faqHtml}
      </div>
    </div>
  </section>

  <section id="wycena" class="container mx-auto max-w-6xl px-6 py-12 space-y-4">
    <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(c.quoteSection.h2)}</h2>
    <p class="text-slate-700 leading-relaxed">${escapeHtml(c.quoteSection.intro)}</p>
    <p class="text-sm text-slate-600">${escapeHtml(c.quoteSection.projectTypes.join(" · "))}</p>
    <p class="text-sm font-semibold text-blue-700">${escapeHtml(labels.contactPlantLine)}</p>
  </section>

  <section class="container mx-auto max-w-6xl px-6 pb-8 space-y-6">
    <h2 class="text-2xl font-black text-slate-950">${escapeHtml(c.seeAlsoSection.h2)}</h2>
    <div class="grid gap-4 md:grid-cols-3">
      ${seeAlsoHtml}
    </div>
    ${renderServiceClusterHtml(bridge.getServiceClusterLinks(serviceId, lang))}
  </section>`;

  const seoConfig = {
    lang,
    path: currentPath,
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: def.slugs,
    breadcrumbs: [
      { name: labels.home, path: labels.serviceLinks.home },
      { name: c.breadcrumbLabel, path: currentPath },
    ],
    faq: c.faqSection.items.map((item) => ({
      q: stripMarkdown(item.q),
      a: stripMarkdown(item.a),
    })),
    serviceSchema: {
      name: c.navLabel,
      serviceType: c.schemaServiceType,
      description: c.metaDesc,
      priceRange: c.schemaPriceRange,
      priceCurrency: c.schemaPriceCurrency,
    },
  };

  return { seoConfig, bodyHtml };
}

function renderNewsHubPage(lang, bridge, resolveAsset) {
  const {
    NEWS_ITEMS_BY_LANG,
    NEWS_PAGE_CONTENT,
    STATIC_ROUTE_EQUIVALENTS,
    resolveLanguageAlternates,
  } = bridge;
  const t = NEWS_PAGE_CONTENT[lang];
  const items = NEWS_ITEMS_BY_LANG[lang];
  const labels = getLayoutLabels(lang);
  const currentPath = labels.serviceLinks.news;
  const libGroup = STATIC_ROUTE_EQUIVALENTS.find(
    (g) => g.pl === "/news/biblioteka",
  );
  const libraryPath = (libGroup && libGroup[lang]) || "/news/biblioteka";
  const featured = items[0];
  const others = items.slice(1);

  const resolveItemImg = (item) =>
    item.imageKey === "externalUnsplash"
      ? item.externalImageUrl
      : resolveAsset(NEWS_IMAGE_PREFIXES[item.imageKey]);

  const featuredImg = resolveItemImg(featured);

  const bodyHtml = `
  ${renderBreadcrumbsHtml([
    { name: labels.home, path: labels.serviceLinks.home },
    { name: t.newsTitle, path: currentPath },
  ])}

  <section class="container mx-auto max-w-6xl px-6 py-12 space-y-6">
    <p class="text-xs font-bold uppercase tracking-widest text-blue-700">${escapeHtml(t.newsCenter)}</p>
    <h1 class="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">${escapeHtml(t.h1)}</h1>
    <p class="text-lg text-slate-700 max-w-3xl leading-relaxed">${escapeHtml(t.newsDesc)}</p>
    <p><a href="${escapeHtml(libraryPath)}" class="inline-block rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 hover:bg-blue-100">${escapeHtml(t.libraryLinkLabel)} →</a></p>
  </section>

  <section class="container mx-auto max-w-6xl px-6 pb-10 space-y-4">
    <h2 class="text-2xl font-black text-slate-950">${escapeHtml(t.featuredNews)}</h2>
    <article class="rounded-2xl border border-slate-200 bg-slate-50 p-6 grid gap-6 md:grid-cols-2 items-center">
      <img src="${escapeHtml(featuredImg)}" alt="${escapeHtml(featured.title)}" ${imgSizeAttrs(featuredImg)} class="w-full h-64 object-cover rounded-xl" />
      <div class="space-y-3">
        <p class="text-xs font-bold uppercase text-blue-700">${escapeHtml(featured.category)} · ${escapeHtml(featured.date)}</p>
        <h3 class="text-2xl font-bold text-slate-950"><a href="${escapeHtml(featured.path)}" class="hover:text-blue-700">${escapeHtml(featured.title)}</a></h3>
        <p class="text-sm text-slate-700 leading-relaxed">${escapeHtml(featured.excerpt)}</p>
        <p><a href="${escapeHtml(featured.path)}" class="text-sm font-bold text-blue-700 underline">${escapeHtml(featured.ctaLabel || t.fullArticle)} →</a></p>
      </div>
    </article>
  </section>

  <section class="container mx-auto max-w-6xl px-6 py-8 space-y-6">
    <h2 class="text-2xl font-black text-slate-950">${escapeHtml(t.otherNews)}</h2>
    <div class="grid gap-6 md:grid-cols-2">
      ${others
        .map((item) => {
          const itemImg = resolveItemImg(item);
          return `
      <article class="rounded-2xl border border-slate-200 bg-white p-6 space-y-3">
        <img src="${escapeHtml(itemImg)}" alt="${escapeHtml(item.title)}" ${imgSizeAttrs(itemImg)} class="w-full h-48 object-cover rounded-xl" loading="lazy" />
        <p class="text-xs font-bold uppercase text-blue-700">${escapeHtml(item.category)} · ${escapeHtml(item.date)}</p>
        <h3 class="text-xl font-bold text-slate-950"><a href="${escapeHtml(item.path)}" class="hover:text-blue-700">${escapeHtml(item.title)}</a></h3>
        <p class="text-sm text-slate-700 leading-relaxed">${escapeHtml(item.excerpt)}</p>
        <p><a href="${escapeHtml(item.path)}" class="text-sm font-bold text-blue-700 underline">${escapeHtml(item.ctaLabel || t.readMore)} →</a></p>
      </article>`;
        })
        .join("\n      ")}
    </div>
  </section>

  <section class="container mx-auto max-w-6xl px-6 pb-10">
    <div class="rounded-2xl border border-slate-200 bg-white p-8 space-y-6">
      <div class="space-y-3 max-w-4xl">
        <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.editorialGuide.title)}</h2>
        <p class="text-slate-700 leading-relaxed">${escapeHtml(t.editorialGuide.intro)}</p>
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-slate-950">${escapeHtml(t.editorialGuide.standardsTitle)}</h3>
        <div class="grid gap-5 md:grid-cols-3">
          ${t.editorialGuide.standards
            .map(
              (std) => `
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-2">
            <h4 class="text-sm font-bold text-slate-950">${escapeHtml(std.label)}</h4>
            <p class="text-sm text-slate-700 leading-relaxed">${escapeHtml(std.detail)}</p>
          </div>`,
            )
            .join("\n          ")}
        </div>
      </div>
      <p class="text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-4">${escapeHtml(t.editorialGuide.closing)}</p>
    </div>
  </section>

  <section class="container mx-auto max-w-6xl px-6 py-10 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
    <h2 class="text-2xl font-black text-slate-950">${escapeHtml(t.newsletterHeading)}</h2>
    <p class="text-slate-700">${escapeHtml(t.newsletterDesc)}</p>
    <p><a href="${escapeHtml(labels.serviceLinks.home)}#contact" class="text-sm font-bold text-blue-700 underline">${escapeHtml(t.contactTeam)}</a></p>
  </section>`;

  const seoConfig = {
    lang,
    path: currentPath,
    title: t.pageTitle,
    description: t.pageDesc,
    alternates: resolveLanguageAlternates(currentPath),
    breadcrumbs: [
      { name: labels.home, path: labels.serviceLinks.home },
      { name: t.newsTitle, path: currentPath },
    ],
  };

  return { seoConfig, bodyHtml };
}

function renderLibraryPage(lang, currentPath, bridge, resolveAsset) {
  const {
    ARTICLE_LIBRARY_CONTENT,
    NEWS_ITEMS_BY_LANG,
    NEWS_PAGE_CONTENT,
    resolveLanguageAlternates,
  } = bridge;
  const t = ARTICLE_LIBRARY_CONTENT[lang];
  const newsT = NEWS_PAGE_CONTENT[lang];
  const items = NEWS_ITEMS_BY_LANG[lang];
  const labels = getLayoutLabels(lang);

  const bodyHtml = `
  ${renderBreadcrumbsHtml([
    { name: labels.home, path: labels.serviceLinks.home },
    { name: newsT.newsTitle, path: labels.serviceLinks.news },
    { name: t.title, path: currentPath },
  ])}

  <section class="container mx-auto max-w-6xl px-6 py-12 space-y-4">
    <p class="text-xs font-bold uppercase tracking-widest text-blue-700">${escapeHtml(t.badge)}</p>
    <h1 class="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">${escapeHtml(t.title)}</h1>
    <p><a href="${escapeHtml(labels.serviceLinks.news)}" class="text-sm font-bold text-blue-700 underline">← ${escapeHtml(t.backToNews)}</a></p>
  </section>

  <section class="container mx-auto max-w-6xl px-6 pb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    ${items
      .map((item) => {
        const imgSrc =
          item.imageKey === "externalUnsplash"
            ? item.externalImageUrl
            : resolveAsset(NEWS_IMAGE_PREFIXES[item.imageKey]);
        return `
    <article class="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
      <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(item.title)}" ${imgSizeAttrs(imgSrc)} class="w-full h-44 object-cover rounded-xl" loading="lazy" />
      <p class="text-xs font-bold uppercase text-blue-700">${escapeHtml(item.category)} · ${escapeHtml(item.date)}</p>
      <h2 class="text-lg font-bold text-slate-950"><a href="${escapeHtml(item.path)}" class="hover:text-blue-700">${escapeHtml(item.title)}</a></h2>
      <p class="text-sm text-slate-700">${escapeHtml(item.excerpt)}</p>
      <p><a href="${escapeHtml(item.path)}" class="text-sm font-bold text-blue-700 underline">${escapeHtml(item.ctaLabel || t.readMore)} →</a></p>
    </article>`;
      })
      .join("\n    ")}
  </section>

  ${renderEngineeringHubHtml(bridge.getHomeEngineeringHub(lang))}`;

  const seoConfig = {
    lang,
    path: currentPath,
    title: t.metaTitle,
    description: t.desc,
    noindex: true,
    alternates: resolveLanguageAlternates(currentPath),
    breadcrumbs: [
      { name: labels.home, path: labels.serviceLinks.home },
      { name: newsT.newsTitle, path: labels.serviceLinks.news },
      { name: t.title, path: currentPath },
    ],
  };

  return { seoConfig, bodyHtml };
}

function createArticleLinkResolver(lang, bridge) {
  const { SERVICE_SLUGS } = bridge;
  const vacuumMetalPath = SERVICE_SLUGS["vacuum-metallization"][lang];
  const plasticMetalPath = SERVICE_SLUGS["plastic-metallization"][lang];
  const plasticPaintPath = SERVICE_SLUGS["plastic-painting"][lang];
  const reflectorsPath = SERVICE_SLUGS.reflectors[lang];

  return function resolveLink(label, rawUrl) {
    let url = String(rawUrl || "").trim();
    const lowerLabel = String(label || "").toLowerCase();

    if (url.includes("google.com/search?q=")) {
      url = url.replace(/https?:\/\/(?:www\.)?google\.com\/search\?q=/i, "");
    }

    if (url.includes("staniax.pl")) {
      try {
        const parsed = new URL(url);
        url = `${parsed.pathname}${parsed.hash}`;
      } catch {
        // leave url as-is
      }
    }

    if (url.startsWith("/")) {
      if (url === "/#about") {
        if (
          lowerLabel.includes("reflector") ||
          lowerLabel.includes("odbłyśnik") ||
          lowerLabel.includes("reflektor")
        ) {
          return { href: reflectorsPath, external: false };
        }
        if (
          lowerLabel.includes("paint") ||
          lowerLabel.includes("lakier") ||
          lowerLabel.includes("lackier")
        ) {
          return { href: plasticPaintPath, external: false };
        }
        if (
          lowerLabel.includes("plastic") ||
          lowerLabel.includes("plastik") ||
          lowerLabel.includes("kunststoff")
        ) {
          return { href: plasticMetalPath, external: false };
        }
        return { href: vacuumMetalPath, external: false };
      }
      if (url.includes("#kim-jestesmy")) {
        return {
          href: `${lang === "pl" ? "/" : `/${lang}`}#kim-jestesmy`,
          external: false,
        };
      }
      if (url.includes("#contact")) {
        return {
          href: `${lang === "pl" ? "/" : `/${lang}`}#contact`,
          external: false,
        };
      }
      return { href: url, external: false };
    }

    return { href: url, external: /^https?:\/\//i.test(url) };
  };
}

function renderArticleTable(text) {
  if (!text.tableHeaders || !text.tableRows) return "";
  return `
  <div class="space-y-3 my-6">
    ${text.tableTitle ? `<h3 class="text-xl font-bold text-slate-950">${escapeHtml(text.tableTitle)}</h3>` : ""}
    <div class="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
      <table class="w-full text-left border-collapse text-sm">
        <thead class="bg-slate-100">
          <tr>${text.tableHeaders.map((h) => `<th class="p-3 font-bold text-slate-950 border-b border-slate-200">${escapeHtml(h)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${text.tableRows
            .map(
              (row) =>
                `<tr class="border-b border-slate-100">${row
                  .map(
                    (cell) =>
                      `<td class="p-3 text-slate-700">${escapeHtml(cell)}</td>`,
                  )
                  .join("")}</tr>`,
            )
            .join("\n          ")}
        </tbody>
      </table>
    </div>
  </div>`;
}

function renderArticleAviation(lang, currentPath, bridge, resolveAsset) {
  const { AVIATION_ARTICLE, resolveLanguageAlternates } = bridge;
  const t = AVIATION_ARTICLE[lang];
  const labels = getLayoutLabels(lang);
  const heroImg = resolveAsset("news_aviation");
  const linkResolver = createArticleLinkResolver(lang, bridge);
  const opts = { linkResolver };
  const breadcrumbs = [
    { name: labels.home, path: labels.serviceLinks.home },
    { name: t.newsTitle, path: labels.serviceLinks.news },
    { name: t.heading, path: currentPath },
  ];

  const bodyHtml = `
  ${renderBreadcrumbsHtml(breadcrumbs)}
  <article class="container mx-auto max-w-4xl px-6 py-10 space-y-8">
    <header class="space-y-4">
      <p class="text-xs font-bold uppercase tracking-widest text-blue-700">${escapeHtml(t.articleBadge)} · 2025-08-20 · ${escapeHtml(t.readTime)}</p>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">${escapeHtml(t.heading)}</h1>
      <p class="text-lg text-slate-700 leading-relaxed">${escapeHtml(t.lead)}</p>
      ${renderArticleAuthorBoxHtml(lang, "2025-08-20", LASTMOD)}
      <img src="${escapeHtml(heroImg)}" alt="${escapeHtml(t.imageAlt)}" ${imgSizeAttrs(heroImg)} class="w-full h-80 object-cover rounded-2xl border border-slate-200" />
    </header>

    <section class="space-y-4">
      ${t.introTitle ? `<h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.introTitle)}</h2>` : ""}
      ${renderBodyBlocks(t.p1, opts)}
      ${renderBodyBlocks(t.p2, opts)}
      ${renderArticleTable(t)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.sec1Title)}</h2>
      ${renderBodyBlocks(t.sec1P1, opts)}
      ${renderBodyBlocks(t.sec1P2, opts)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.sec2Title)}</h2>
      ${renderBodyBlocks(t.sec2P1, opts)}
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub21Title)}</h3>
      ${renderBodyBlocks(t.sub21P1, opts)}
      ${renderBodyBlocks(t.sub21P2, opts)}
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub22Title)}</h3>
      ${renderBodyBlocks(t.sub22P1, opts)}
      ${renderBodyBlocks(t.sub22P2, opts)}
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub23Title)}</h3>
      ${renderBodyBlocks(t.sub23P1, opts)}
      ${renderBodyBlocks(t.sub23P2, opts)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.sec3Title)}</h2>
      ${renderBodyBlocks(t.sec3P1, opts)}
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub31Title)}</h3>
      ${renderBodyBlocks(t.sub31P1, opts)}
      ${renderBodyBlocks(t.sub31P2, opts)}
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub32Title)}</h3>
      ${renderBodyBlocks(t.sub32P1, opts)}
      ${renderBodyBlocks(t.sub32P2, opts)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.sec4Title)}</h2>
      ${renderBodyBlocks(t.sec4P1, opts)}
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub41Title)}</h3>
      ${renderBodyBlocks(t.sub41P1, opts)}
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub42Title)}</h3>
      ${renderBodyBlocks(t.sub42P1, opts)}
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub43Title)}</h3>
      ${renderBodyBlocks(t.sub43P1, opts)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.sec5Title)}</h2>
      ${renderBodyBlocks(t.sec5P1, opts)}
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub51Title)}</h3>
      ${renderBodyBlocks(t.sub51P1, opts)}
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub52Title)}</h3>
      ${renderBodyBlocks(t.sub52P1, opts)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.sec6Title)}</h2>
      ${renderBodyBlocks(t.sec6P1, opts)}
      <blockquote class="border-l-4 border-blue-600 pl-4 italic text-slate-700">${renderInlineMarkdown(t.quote, opts)}</blockquote>
    </section>

    <section class="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3">
      <h2 class="text-2xl font-black text-slate-950">${escapeHtml(t.ctaHeader)}</h2>
      ${renderBodyBlocks(t.ctaText, opts)}
      <h3 class="text-lg font-bold text-slate-950">${escapeHtml(t.ctaWhyTitle)}</h3>
      <ul class="list-disc pl-6 space-y-1 text-slate-700">
        <li>${renderInlineMarkdown(t.ctaWhy1, opts)}</li>
        <li>${renderInlineMarkdown(t.ctaWhy2, opts)}</li>
        <li>${renderInlineMarkdown(t.ctaWhy3, opts)}</li>
      </ul>
      <p class="font-bold text-slate-900">${escapeHtml(t.ctaSubhead)}</p>
      <p><a href="${escapeHtml(labels.serviceLinks.home)}#contact" class="text-sm font-bold text-blue-700 underline">${escapeHtml(t.ctaBtn)}</a></p>
    </section>
  </article>`;

  const seoConfig = {
    lang,
    path: currentPath,
    title: t.metaTitle,
    description: t.metaDesc,
    ogType: "article",
    alternates: resolveLanguageAlternates(currentPath),
    breadcrumbs: [
      { name: labels.home, path: labels.serviceLinks.home },
      { name: t.newsTitle, path: labels.serviceLinks.news },
      { name: t.heading, path: currentPath },
    ],
    articleSchema: {
      headline: t.heading,
      description: t.metaDesc,
      datePublished: "2025-08-20",
      dateModified: LASTMOD,
      image: heroImg,
    },
  };

  return { seoConfig, bodyHtml };
}

function renderArticleBeauty(lang, currentPath, bridge, resolveAsset) {
  const { BEAUTY_ARTICLE, resolveLanguageAlternates } = bridge;
  const t = BEAUTY_ARTICLE[lang];
  const labels = getLayoutLabels(lang);
  const heroImg = resolveAsset("colorful_packaging");
  const linkResolver = createArticleLinkResolver(lang, bridge);
  const opts = { linkResolver };
  const breadcrumbs = [
    { name: labels.home, path: labels.serviceLinks.home },
    { name: t.newsTitle, path: labels.serviceLinks.news },
    { name: t.heading, path: currentPath },
  ];

  const qaList = [1, 2, 3, 4, 5].map((i) => ({ q: t[`q${i}`], a: t[`a${i}`] }));

  const bodyHtml = `
  ${renderBreadcrumbsHtml(breadcrumbs)}
  <article class="container mx-auto max-w-4xl px-6 py-10 space-y-8">
    <header class="space-y-4">
      <p class="text-xs font-bold uppercase tracking-widest text-blue-700">${escapeHtml(t.articleBadge)} · 2025-08-20 · ${escapeHtml(t.readTime)}</p>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">${escapeHtml(t.heading)}</h1>
      <p class="text-lg text-slate-700 leading-relaxed">${escapeHtml(t.lead)}</p>
      ${renderArticleAuthorBoxHtml(lang, "2025-08-20", LASTMOD)}
      <img src="${escapeHtml(heroImg)}" alt="${escapeHtml(t.imageAlt)}" ${imgSizeAttrs(heroImg)} class="w-full h-80 object-cover rounded-2xl border border-slate-200" />
    </header>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.introTitle)}</h2>
      ${renderBodyBlocks(t.p1, opts)}
      ${renderBodyBlocks(t.p2, opts)}
      ${renderArticleTable(t)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.sec1Title)}</h2>
      ${renderBodyBlocks(t.sec1P1, opts)}
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sec1SubTitle)}</h3>
      ${renderBodyBlocks(t.sec1P2, opts)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.sec2Title)}</h2>
      ${renderBodyBlocks(t.sec2P1, opts)}
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub21Title)}</h3>
      ${renderBodyBlocks(t.sub21P1, opts)}
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub22Title)}</h3>
      ${renderBodyBlocks(t.sub22P1, opts)}
      <ul class="list-disc pl-6 space-y-1 text-slate-700">
        <li>${renderInlineMarkdown(t.sub22Bullet1, opts)}</li>
        <li>${renderInlineMarkdown(t.sub22Bullet2, opts)}</li>
      </ul>
      ${renderBodyBlocks(t.sub22P2, opts)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.sec3Title)}</h2>
      ${renderBodyBlocks(t.sec3P1, opts)}
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub31Title)}</h3>
      ${renderBodyBlocks(t.sub31P1, opts)}
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub32Title)}</h3>
      ${renderBodyBlocks(t.sub32P1, opts)}
      <ul class="list-disc pl-6 space-y-1 text-slate-700">
        <li>${renderInlineMarkdown(t.sub32Bullet1, opts)}</li>
        <li>${renderInlineMarkdown(t.sub32Bullet2, opts)}</li>
        <li>${renderInlineMarkdown(t.sub32Bullet3, opts)}</li>
      </ul>
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub33Title)}</h3>
      ${renderBodyBlocks(t.sub33P1, opts)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.sec4Title)}</h2>
      ${renderBodyBlocks(t.sec4P1, opts)}
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub41Title)}</h3>
      ${renderBodyBlocks(t.sub41P1, opts)}
      <ul class="list-disc pl-6 space-y-1 text-slate-700">
        <li>${renderInlineMarkdown(t.sub41Bullet1, opts)}</li>
        <li>${renderInlineMarkdown(t.sub41Bullet2, opts)}</li>
        <li>${renderInlineMarkdown(t.sub41Bullet3, opts)}</li>
      </ul>
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub42Title)}</h3>
      ${renderBodyBlocks(t.sub42P1, opts)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.sec5Title)}</h2>
      ${renderBodyBlocks(t.sec5P1, opts)}
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub51Title)}</h3>
      ${renderBodyBlocks(t.sub51P1, opts)}
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub52Title)}</h3>
      ${renderBodyBlocks(t.sub52P1, opts)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.qaTitle)}</h2>
      ${qaList
        .map(
          (qa) => `
      <div class="rounded-xl border border-slate-200 p-5 space-y-2">
        <h3 class="text-lg font-bold text-slate-950">${renderInlineMarkdown(qa.q, opts)}</h3>
        ${renderBodyBlocks(qa.a, opts)}
      </div>`,
        )
        .join("\n      ")}
    </section>

    <section class="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3">
      <h2 class="text-2xl font-black text-slate-950">${escapeHtml(t.ctaHeader)}</h2>
      ${renderBodyBlocks(t.ctaText, opts)}
      <h3 class="text-lg font-bold text-slate-950">${escapeHtml(t.ctaWhyTitle)}</h3>
      <ul class="list-disc pl-6 space-y-1 text-slate-700">
        <li>${renderInlineMarkdown(t.ctaWhy1, opts)}</li>
        <li>${renderInlineMarkdown(t.ctaWhy2, opts)}</li>
        <li>${renderInlineMarkdown(t.ctaWhy3, opts)}</li>
      </ul>
      <p class="font-bold text-slate-900">${escapeHtml(t.ctaSubhead)}</p>
      <p><a href="${escapeHtml(labels.serviceLinks.home)}#contact" class="text-sm font-bold text-blue-700 underline">${escapeHtml(t.ctaBtn)}</a></p>
    </section>
  </article>`;

  const seoConfig = {
    lang,
    path: currentPath,
    title: t.metaTitle,
    description: t.metaDesc,
    ogType: "article",
    alternates: resolveLanguageAlternates(currentPath),
    breadcrumbs: [
      { name: labels.home, path: labels.serviceLinks.home },
      { name: t.newsTitle, path: labels.serviceLinks.news },
      { name: t.heading, path: currentPath },
    ],
    faq: qaList.map((f) => ({ q: stripMarkdown(f.q), a: stripMarkdown(f.a) })),
    articleSchema: {
      headline: t.heading,
      description: t.metaDesc,
      datePublished: "2025-08-20",
      dateModified: LASTMOD,
      image: heroImg,
    },
  };

  return { seoConfig, bodyHtml };
}

function renderArticleReflectors(lang, currentPath, bridge, resolveAsset) {
  const { REFLECTORS_ARTICLE, SERVICE_SLUGS, resolveLanguageAlternates } =
    bridge;
  const t = REFLECTORS_ARTICLE[lang];
  const labels = getLayoutLabels(lang);
  const heroImg = resolveAsset("odblysniki-nowe-1");
  const reflectorServicePath = SERVICE_SLUGS.reflectors[lang];
  const linkResolver = createArticleLinkResolver(lang, bridge);
  const opts = { linkResolver };
  const breadcrumbs = [
    { name: labels.home, path: labels.serviceLinks.home },
    { name: t.newsTitle, path: labels.serviceLinks.news },
    { name: t.heading, path: currentPath },
  ];

  const bodyHtml = `
  ${renderBreadcrumbsHtml(breadcrumbs)}
  <article class="container mx-auto max-w-4xl px-6 py-10 space-y-8">
    <header class="space-y-4">
      <p class="text-xs font-bold uppercase tracking-widest text-blue-700">${escapeHtml(t.articleBadge)} · 2026-06-10 · ${escapeHtml(t.readTime)}</p>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">${escapeHtml(t.heading)}</h1>
      <p class="text-lg text-slate-700 leading-relaxed">${escapeHtml(t.lead)}</p>
      ${renderArticleAuthorBoxHtml(lang, "2026-06-10", LASTMOD)}
      <div class="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-semibold text-slate-900">
        <a href="${escapeHtml(reflectorServicePath)}" class="text-blue-700 underline font-bold">${escapeHtml(t.ctaBtn)} →</a>
      </div>
      <img src="${escapeHtml(heroImg)}" alt="${escapeHtml(t.imageAlt)}" ${imgSizeAttrs(heroImg)} class="w-full h-80 object-cover rounded-2xl border border-slate-200" />
    </header>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.introTitle)}</h2>
      ${renderBodyBlocks(t.introP1, opts)}
      ${renderBodyBlocks(t.introP2, opts)}
      ${renderBodyBlocks(t.introP3, opts)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.sec1Title)}</h2>
      ${renderBodyBlocks(t.sec1P1, opts)}
      ${renderBodyBlocks(t.sec1P2, opts)}
      ${renderBodyBlocks(t.sec1P3, opts)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.sec2Title)}</h2>
      ${renderBodyBlocks(t.sec2P1, opts)}
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub21Title)}</h3>
      ${renderBodyBlocks(t.sub21P1, opts)}
      <h3 class="text-xl font-bold text-slate-950">${escapeHtml(t.sub22Title)}</h3>
      ${renderBodyBlocks(t.sub22P1, opts)}
      ${renderBodyBlocks(t.sub22P2, opts)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.sec3Title)}</h2>
      ${renderBodyBlocks(t.sec3P1, opts)}
      ${renderBodyBlocks(t.sec3P2, opts)}
      ${renderBodyBlocks(t.sec3P3, opts)}
      ${renderBodyBlocks(t.sec3P4, opts)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.sec4Title)}</h2>
      ${renderBodyBlocks(t.sec4P1, opts)}
      ${renderBodyBlocks(t.sec4P2, opts)}
      ${renderBodyBlocks(t.sec4P3, opts)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.sec5Title)}</h2>
      ${renderBodyBlocks(t.sec5P1, opts)}
      ${renderBodyBlocks(t.sec5P2, opts)}
      ${renderBodyBlocks(t.sec5P3, opts)}
      ${renderArticleTable(t)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.sec6Title)}</h2>
      ${renderBodyBlocks(t.sec6P1, opts)}
      ${renderBodyBlocks(t.sec6P2, opts)}
      ${renderBodyBlocks(t.sec6P3, opts)}
      ${renderBodyBlocks(t.sec6P4, opts)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.sec7Title)}</h2>
      ${renderBodyBlocks(t.sec7P1, opts)}
      ${renderBodyBlocks(t.sec7P2, opts)}
      ${renderBodyBlocks(t.sec7P3, opts)}
      ${renderBodyBlocks(t.sec7P4, opts)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.sec8Title)}</h2>
      ${renderBodyBlocks(t.sec8P1, opts)}
      ${renderBodyBlocks(t.sec8P2, opts)}
      ${renderBodyBlocks(t.sec8P3, opts)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.sec9Title)}</h2>
      ${renderBodyBlocks(t.sec9P1, opts)}
      ${renderBodyBlocks(t.sec9P2, opts)}
      ${renderBodyBlocks(t.sec9P3, opts)}
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(t.faqTitle)}</h2>
      ${t.faqItems
        .map(
          (f) => `
      <div class="rounded-xl border border-slate-200 p-5 space-y-2">
        <h3 class="text-lg font-bold text-slate-950">${escapeHtml(f.q)}</h3>
        <p class="text-sm text-slate-700 leading-relaxed">${escapeHtml(f.a)}</p>
      </div>`,
        )
        .join("\n      ")}
    </section>

    <section class="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3">
      <h2 class="text-2xl font-black text-slate-950">${escapeHtml(t.ctaHeader)}</h2>
      ${renderBodyBlocks(t.ctaText, opts)}
      <h3 class="text-lg font-bold text-slate-950">${escapeHtml(t.ctaWhyTitle)}</h3>
      <ul class="list-disc pl-6 space-y-1 text-slate-700">
        <li>${renderInlineMarkdown(t.ctaWhy1, opts)}</li>
        <li>${renderInlineMarkdown(t.ctaWhy2, opts)}</li>
        <li>${renderInlineMarkdown(t.ctaWhy3, opts)}</li>
      </ul>
      <p class="font-bold text-slate-900">${escapeHtml(t.ctaSubhead)}</p>
      <p><a href="${escapeHtml(reflectorServicePath)}" class="text-sm font-bold text-blue-700 underline">${escapeHtml(t.ctaBtn)} →</a></p>
    </section>
  </article>`;

  const seoConfig = {
    lang,
    path: currentPath,
    title: t.metaTitle,
    description: t.metaDesc,
    ogType: "article",
    alternates: resolveLanguageAlternates(currentPath),
    breadcrumbs: [
      { name: labels.home, path: labels.serviceLinks.home },
      { name: t.newsTitle, path: labels.serviceLinks.news },
      { name: t.heading, path: currentPath },
    ],
    faq: t.faqItems.map((f) => ({
      q: stripMarkdown(f.q),
      a: stripMarkdown(f.a),
    })),
    articleSchema: {
      headline: t.heading,
      description: t.metaDesc,
      datePublished: "2026-06-10",
      dateModified: LASTMOD,
      image: heroImg,
    },
  };

  return { seoConfig, bodyHtml };
}

/* Artykuły z src/data/blog-posts (generowane ze .docx przez scripts/docx-to-article.mjs) */
function renderBlogArticle(post, bridge, resolveAsset) {
  const { SERVICE_SLUGS, SERVICES, resolveLanguageAlternates } = bridge;
  const labels = getLayoutLabels("pl");
  const heroImg = resolveAsset(NEWS_IMAGE_PREFIXES[post.image]);
  const linkResolver = createArticleLinkResolver("pl", bridge);
  const opts = { linkResolver };
  const md = (t) => renderInlineMarkdown(t, opts);
  const servicePath = post.serviceId ? SERVICE_SLUGS[post.serviceId].pl : null;
  const serviceName = post.serviceId
    ? SERVICES[post.serviceId].locales.pl.navLabel
    : null;
  const breadcrumbs = [
    { name: labels.home, path: labels.serviceLinks.home },
    { name: "Aktualności", path: labels.serviceLinks.news },
    { name: post.heading, path: post.slug },
  ];

  const renderBlock = (b) => {
    switch (b.type) {
      case "h2":
        return `<h2 id="${escapeHtml(b.id)}" class="text-2xl lg:text-3xl font-black text-slate-950 pt-4">${escapeHtml(b.text)}</h2>`;
      case "h3":
        return `<h3 class="text-xl font-bold text-slate-950">${escapeHtml(b.text)}</h3>`;
      case "p":
        return `<p class="leading-relaxed text-slate-700">${md(b.text)}</p>`;
      case "ul":
        return `<ul class="list-disc pl-6 space-y-2 text-slate-700">${b.items.map((i) => `<li>${md(i)}</li>`).join("")}</ul>`;
      case "table":
        return `
    <div class="overflow-x-auto rounded-2xl border border-slate-200 bg-white my-4">
      <table class="w-full text-left border-collapse text-sm">
        <thead class="bg-slate-100"><tr>${b.headers.map((h) => `<th class="p-3 font-bold text-slate-950 border-b border-slate-200">${escapeHtml(h)}</th>`).join("")}</tr></thead>
        <tbody>${b.rows.map((row) => `<tr class="border-b border-slate-100">${row.map((c) => `<td class="p-3 text-slate-700">${md(c)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>`;
      default:
        return "";
    }
  };

  const toc = post.blocks.filter((b) => b.type === "h2");

  const bodyHtml = `
  ${renderBreadcrumbsHtml(breadcrumbs)}
  <article class="container mx-auto max-w-4xl px-6 py-10 space-y-6">
    <header class="space-y-4">
      <p class="text-xs font-bold uppercase tracking-widest text-blue-700">${escapeHtml(post.category)} · ${escapeHtml(post.datePublished)} · ${escapeHtml(post.readTime)}</p>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">${escapeHtml(post.heading)}</h1>
      <p class="text-lg text-slate-700 leading-relaxed">${md(post.lead)}</p>
      ${renderArticleAuthorBoxHtml("pl", post.datePublished, post.dateModified)}
      ${
        servicePath
          ? `<div class="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-semibold text-slate-900">Szukasz wyceny usługi? <a href="${escapeHtml(servicePath)}" class="text-blue-700 underline font-bold">Przejdź do strony usługi: ${escapeHtml(serviceName)} →</a></div>`
          : ""
      }
      <img src="${escapeHtml(heroImg)}" alt="${escapeHtml(post.imageAlt)}" ${imgSizeAttrs(heroImg)} class="w-full h-80 object-cover rounded-2xl border border-slate-200" />
    </header>

    ${
      toc.length
        ? `<nav aria-label="Spis treści" class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p class="text-sm font-bold uppercase tracking-wider text-slate-950 mb-3">Spis treści</p>
      <ol class="list-decimal pl-6 space-y-1 text-sm">${toc.map((h) => `<li><a href="#${escapeHtml(h.id)}" class="text-blue-700 hover:underline">${escapeHtml(h.text)}</a></li>`).join("")}${post.faq.length ? `<li><a href="#faq" class="text-blue-700 hover:underline">${escapeHtml(post.faqTitle || "Najczęściej zadawane pytania")}</a></li>` : ""}</ol>
    </nav>`
        : ""
    }

    ${post.blocks.map(renderBlock).join("\n    ")}

    ${
      post.faq.length
        ? `<section class="space-y-4">
      <h2 id="faq" class="text-2xl lg:text-3xl font-black text-slate-950">${escapeHtml(post.faqTitle || "Najczęściej zadawane pytania")}</h2>
      ${post.faq
        .map(
          (f) => `
      <div class="rounded-xl border border-slate-200 p-5 space-y-2">
        <h3 class="text-lg font-bold text-slate-950">${escapeHtml(f.q)}</h3>
        <p class="text-sm text-slate-700 leading-relaxed">${md(f.a)}</p>
      </div>`,
        )
        .join("")}
    </section>`
        : ""
    }

    ${
      post.related.length
        ? `<section class="space-y-2">
      <h2 class="text-xl font-black text-slate-950">Powiązane artykuły</h2>
      <ul class="list-disc pl-6 space-y-1">${post.related.map((r) => `<li><a href="${escapeHtml(r.url)}" class="text-blue-700 underline">${escapeHtml(r.label)}</a></li>`).join("")}</ul>
    </section>`
        : ""
    }

    ${
      post.sources.length
        ? `<section class="space-y-2">
      <h2 class="text-base font-bold text-slate-950">Źródła</h2>
      <ul class="list-disc pl-6 space-y-1 text-sm">${post.sources.map((r) => `<li>${md(`[${r.label}](${r.url})`)}</li>`).join("")}</ul>
    </section>`
        : ""
    }

    ${
      post.closingCta
        ? `<section class="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3">
      <p class="text-slate-900 leading-relaxed">${md(post.closingCta)}</p>
      <p><a href="/#contact" class="text-sm font-bold text-blue-700 underline">Wyślij zapytanie →</a></p>
    </section>`
        : ""
    }
  </article>`;

  const seoConfig = {
    lang: "pl",
    path: post.slug,
    title: post.metaTitle,
    description: post.metaDescription,
    ogType: "article",
    alternates: resolveLanguageAlternates(post.slug),
    singleLanguage: true,
    breadcrumbs,
    faq: post.faq.map((f) => ({ q: stripMarkdown(f.q), a: stripMarkdown(f.a) })),
    articleSchema: {
      headline: post.heading,
      description: post.metaDescription,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      image: heroImg,
    },
  };

  return { seoConfig, bodyHtml };
}

function renderGalleryPage(lang, currentPath, bridge, galleryItems) {
  const { SERVICE_SLUGS, resolveLanguageAlternates } = bridge;
  const labels = getLayoutLabels(lang);
  const catLabels = GALLERY_CATEGORY_LABELS[lang] || GALLERY_CATEGORY_LABELS.pl;

  const meta =
    lang === "pl"
      ? {
          title: "Galeria Realizacji: Metalizacja PVD i Lakierowanie | STANIAX",
          desc: "Zobacz ponad 115 zdjęć realizacji STANIAX: regeneracja odbłyśników reflektorów, metalizacja próżniowa PVD opakowań beauty oraz lakierowanie szkła i tworzyw.",
          badge: "Portfolio 115+ realizacji",
          h1: "GALERIA REALIZACJI METALIZACJI PVD I LAKIEROWANIA",
          subH2: "Realizacje PVD w odcieniach Złota, Chromu i Dekoracyjnych",
          breadName: "Galeria realizacji",
          servicesHeading: "Technologie stojące za realizacjami w galerii STANIAX",
          servicesLead:
            "Prezentowane powyżej zdjęcia pochodzą bezpośrednio z linii produkcyjnej STANIAX w Józefowie k. Warszawy. Każde wykończenie lustrzane, złote i dekoracyjne powstaje w wieloetapowym procesie obejmującym przygotowanie chemiczne i jonowe, aplikację podkładu, napylanie próżniowe PVD oraz zabezpieczenie lakierem nawierzchniowym UV lub 2K. Sprawdź szczegóły poszczególnych technologii:",
          linkLabels: {
            reflectors: "regeneracja odbłyśników i reflektorów samochodowych",
            vacuum: "usługowa metalizacja próżniowa PVD",
            plasticMeta: "metalizacja i chromowanie tworzyw sztucznych",
            plasticPaint: "lakierowanie tworzyw sztucznych (ABS, PC, PA, PP)",
            glassPaint: "lakierowanie szkła i ceramiki",
            sprayPaint: "lakierowanie natryskowe HVLP w palecie RAL",
            conjunction: "oraz",
          },
        }
      : lang === "de"
        ? {
            title: "Projektgalerie: PVD-Metallisierung & Lackierung | STANIAX",
            desc: "Über 115 Referenzfotos aus dem STANIAX-Werk in Józefów: Scheinwerfer-Reflektor-Aufbereitung, PVD-Vakuummetallisierung in Gold/Chrom sowie Glaslackierung.",
            badge: "Portfolio mit 115+ Projekten",
            h1: "PROJEKTGALERIE PVD-METALLISIERUNG & LACKIERUNG",
            subH2: "PVD-Referenzen in Gold, Chrom und Dekor-Farben",
            breadName: "Projektgalerie",
            servicesHeading: "Technologien hinter den Projekten in der STANIAX-Galerie",
            servicesLead:
              "Die oben gezeigten Aufnahmen stammen direkt aus der Produktionslinie von STANIAX in Józefów bei Warschau. Jede Spiegel-, Gold- und Dekorbeschichtung entsteht in einem mehrstufigen Prozess. Entdecken Sie unsere einzelnen Dienstleistungen:",
            linkLabels: {
              reflectors: "Scheinwerfer-Reflektor-Aufbereitung",
              vacuum: "PVD-Vakuummetallisierung im Lohnauftrag",
              plasticMeta: "Kunststoffverchromung und -metallisierung",
              plasticPaint: "Kunststofflackierung (ABS, PC, PA, PP)",
              glassPaint: "Glas- und Keramiklackierung",
              sprayPaint: "HVLP-Spritzlackierung in der RAL-Palette",
              conjunction: "sowie",
            },
          }
        : {
            title: "Project Gallery: PVD Metallization & Coating | STANIAX",
            desc: "Browse 115+ photos of STANIAX projects: headlight reflector restoration, gold and chrome PVD vacuum metallization for cosmetics, and industrial glass coating.",
            badge: "Portfolio of 115+ Projects",
            h1: "PROJECT GALLERY PVD METALLIZATION & COATING",
            subH2: "PVD Finishes in Gold, Chrome & Decorative Coating Series",
            breadName: "Project Gallery",
            servicesHeading: "Technologies Behind the Projects in the STANIAX Gallery",
            servicesLead:
              "The photographs shown above come directly from the STANIAX production line in Józefów near Warsaw. Every mirror, gold, and decorative finish is produced in a multi-stage process. Explore the specifications of our individual services:",
            linkLabels: {
              reflectors: "headlight reflector restoration",
              vacuum: "contract PVD vacuum metallisation",
              plasticMeta: "plastic chrome plating and metallisation",
              plasticPaint: "plastic parts painting (ABS, PC, PA, PP)",
              glassPaint: "glass and ceramic painting",
              sprayPaint: "HVLP spray painting in the RAL palette",
              conjunction: "and",
            },
          };

  const breadcrumbs = [
    { name: labels.home, path: labels.serviceLinks.home },
    { name: meta.breadName, path: currentPath },
  ];

  const categoryBadges = Object.values(catLabels)
    .map(
      (label) =>
        `<span class="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">${escapeHtml(label)}</span>`,
    )
    .join(" ");

  const galleryGrid = galleryItems
    .map((item, idx) => {
      const altText = localizeGalleryAlt(item, idx, lang);
      return `
      <figure class="rounded-xl border border-slate-200 bg-white overflow-hidden">
        <img src="${escapeHtml(item.src)}" alt="${escapeHtml(altText)}" ${imgSizeAttrs(item.src)} class="w-full h-48 object-cover" loading="lazy" />
        <figcaption class="p-3 text-xs text-slate-600">${escapeHtml(altText)}</figcaption>
      </figure>`;
    })
    .join("\n      ");

  const bodyHtml = `
  ${renderBreadcrumbsHtml(breadcrumbs)}
  <section class="container mx-auto max-w-6xl px-6 py-12 space-y-4">
    <p class="text-xs font-bold uppercase tracking-widest text-blue-700">${escapeHtml(meta.badge)}</p>
    <h1 class="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">${escapeHtml(meta.h1)}</h1>
    <p class="text-base text-slate-700 max-w-3xl">${escapeHtml(meta.desc)}</p>
    <div class="flex flex-wrap gap-2 pt-2">${categoryBadges}</div>
  </section>

  <section class="container mx-auto max-w-6xl px-6 pb-12 space-y-6">
    <h2 class="text-2xl font-black text-slate-950">${escapeHtml(meta.subH2)}</h2>
    <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      ${galleryGrid}
    </div>
  </section>

  <section class="bg-slate-50 border-y border-slate-200 py-12">
    <div class="container mx-auto max-w-4xl px-6 space-y-4 text-sm text-slate-700">
      <h2 class="text-xl font-bold text-slate-950">${escapeHtml(meta.servicesHeading)}</h2>
      <p class="leading-relaxed">${escapeHtml(meta.servicesLead)}
        <a href="${escapeHtml(SERVICE_SLUGS.reflectors[lang])}" class="text-blue-700 font-semibold underline">${escapeHtml(meta.linkLabels.reflectors)}</a>,
        <a href="${escapeHtml(SERVICE_SLUGS["vacuum-metallization"][lang])}" class="text-blue-700 font-semibold underline">${escapeHtml(meta.linkLabels.vacuum)}</a>,
        <a href="${escapeHtml(SERVICE_SLUGS["plastic-metallization"][lang])}" class="text-blue-700 font-semibold underline">${escapeHtml(meta.linkLabels.plasticMeta)}</a>,
        <a href="${escapeHtml(SERVICE_SLUGS["plastic-painting"][lang])}" class="text-blue-700 font-semibold underline">${escapeHtml(meta.linkLabels.plasticPaint)}</a>,
        <a href="${escapeHtml(SERVICE_SLUGS["glass-painting"][lang])}" class="text-blue-700 font-semibold underline">${escapeHtml(meta.linkLabels.glassPaint)}</a> ${escapeHtml(meta.linkLabels.conjunction)}
        <a href="${escapeHtml(SERVICE_SLUGS["spray-painting"][lang])}" class="text-blue-700 font-semibold underline">${escapeHtml(meta.linkLabels.sprayPaint)}</a>.
      </p>
      <p class="leading-relaxed">${escapeHtml(
        lang === "pl"
          ? "Każda seria produkcyjna przechodzi w zakładzie STANIAX weryfikację przyczepności siatką nacięć wg ISO 2409 (klasa Gt 0), kontrolę powtarzalności odcienia ΔE < 0,8 oraz odbiór jakościowy pod światłem inspekcyjnym przed wysyłką kurierską lub paletową."
          : lang === "de"
            ? "Jedes Serienlos durchläuft im STANIAX-Werk eine Gitterschnittprüfung nach DIN EN ISO 2409 (Gt 0), eine Farbtonkontrolle ΔE < 0,8 sowie eine dokumentierte Sichtprüfung vor dem Paletten- oder Paketversand."
            : "Every production batch at STANIAX undergoes ISO 2409 cross-cut adhesion testing (Class Gt 0), ΔE < 0.8 color repeatability control, and final inspection prior to EU parcel or pallet dispatch.",
      )}</p>
      <p class="leading-relaxed">${escapeHtml(
        lang === "pl"
          ? "Przed uruchomieniem produkcji wielkoseryjnej wykonujemy próbki wzorcowe na powierzonych detalach z ABS, PC, PP, PA, metalu lub szkła — prześlij zapytanie ze zdjęciem lub modelem 3D na metalizacja@staniax.pl."
          : lang === "de"
            ? "Vor Serienfreigabe erstellen wir verbindliche Grenzmuster direkt auf Ihren Originalteilen aus ABS, PC, PP, PA, Metallguss oder Verpackungsglas — senden Sie Ihre Anfrage an metalizacja@staniax.pl."
            : "Prior to serial release, we prepare reference approval samples on your actual ABS, PC, PP, PA, metal, or glass components — send photos or STEP files to metalizacja@staniax.pl.",
      )}</p>
    </div>
  </section>`;

  const seoConfig = {
    lang,
    path: currentPath,
    title: meta.title,
    description: meta.desc,
    alternates: resolveLanguageAlternates(currentPath),
    breadcrumbs,
  };

  return { seoConfig, bodyHtml };
}

function renderLegalPage(docType, lang, currentPath, bridge) {
  const { LEGAL_DATA } = bridge;
  const doc = LEGAL_DATA[docType];
  const content = doc.locales[lang];
  const labels = getLayoutLabels(lang);
  const breadcrumbs = [
    { name: labels.home, path: labels.serviceLinks.home },
    { name: content.h1, path: currentPath },
  ];

  const bodyHtml = `
  ${renderBreadcrumbsHtml(breadcrumbs)}
  <section class="container mx-auto max-w-4xl px-6 py-10 space-y-6">
    <p><a href="${escapeHtml(labels.serviceLinks.home)}" class="text-sm font-bold text-blue-700 underline">← ${escapeHtml(labels.home)}</a></p>
    <h1 class="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">${escapeHtml(content.h1)}</h1>
    <p class="text-slate-700 leading-relaxed">${escapeHtml(content.lead)}</p>
    <div class="space-y-6 pt-4">
      ${content.sections
        .map(
          (sec) => `
      <div class="rounded-2xl border border-slate-200 bg-white p-6 space-y-2">
        <h2 class="text-lg font-bold text-slate-950">${escapeHtml(sec.h2)}</h2>
        <p class="text-sm text-slate-700 leading-relaxed">${escapeHtml(sec.body)}</p>
      </div>`,
        )
        .join("\n      ")}
    </div>
  </section>`;

  const seoConfig = {
    lang,
    path: currentPath,
    title: content.title,
    description: content.desc,
    noindex: true,
    alternates: doc.alternates,
    breadcrumbs,
  };

  return { seoConfig, bodyHtml };
}

function renderNotFoundPage(bridge) {
  const { SERVICE_ORDER, SERVICE_SLUGS, SERVICES } = bridge;
  const bodyHtml = `
  <section class="container mx-auto max-w-4xl px-6 py-16 text-center space-y-6">
    <p class="inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-mono font-bold text-blue-800">HTTP 404</p>
    <h1 class="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">Nie znaleziono szukanej podstrony (404)</h1>
    <p class="text-base text-slate-600 max-w-xl mx-auto">Wybierz jedną z naszych 6 głównych usług technologicznych poniżej lub przejdź na stronę główną STANIAX.</p>
    <div>
      <a href="/" class="inline-block rounded-xl bg-blue-700 text-white px-6 py-3 text-sm font-bold">Wróć na stronę główną</a>
    </div>
    <h2 class="text-2xl font-black text-slate-950 pt-6">Główne usługi STANIAX Sp. z o.o.</h2>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-left">
      ${SERVICE_ORDER.map(
        (id) => `
      <a href="${escapeHtml(SERVICE_SLUGS[id].pl)}" class="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-500 space-y-1">
        <h3 class="text-base font-bold text-slate-950">${escapeHtml(SERVICES[id].locales.pl.navLabel)}</h3>
        <p class="text-xs text-slate-600">${escapeHtml(SERVICES[id].locales.pl.shortSummary)}</p>
      </a>`,
      ).join("\n      ")}
    </div>
  </section>`;

  return {
    title: "404 — Nie znaleziono strony | STANIAX",
    description:
      "Strona o podanym adresie nie istnieje. Sprawdź ofertę usług metalizacji próżniowej, regeneracji reflektorów i lakierowania STANIAX.",
    bodyHtml,
  };
}

function injectHtmlDocument(
  baseHtml,
  { lang, seoConfig, custom404Meta, renderedBody, bridge },
) {
  const { buildJsonLdGraph, normalizeUrl, SITE_ORIGIN } = bridge;
  let html = baseHtml;

  html = html.replace(/<html\b[^>]*>/i, `<html lang="${escapeHtml(lang)}">`);
  html = html.replace(/<title>[\s\S]*?<\/title>\s*/gi, "");
  html = html.replace(
    /<meta\s+(?:name|property)="(?:description|robots|og:[^"]+|twitter:[^"]+)"[^>]*>\s*/gi,
    "",
  );
  html = html.replace(/<link\s+rel="(?:canonical|alternate)"[^>]*>\s*/gi, "");
  html = html.replace(
    /<script\s+id="staniax-seo-jsonld"[^>]*>[\s\S]*?<\/script>\s*/gi,
    "",
  );

  const headTags = [];
  if (custom404Meta) {
    headTags.push(`<title>${escapeHtml(custom404Meta.title)}</title>`);
    headTags.push(
      `<meta name="description" content="${escapeHtml(custom404Meta.description)}" />`,
    );
    headTags.push(`<meta name="robots" content="noindex, nofollow" />`);
    headTags.push(
      `<meta property="og:image" content="${escapeHtml(`${SITE_ORIGIN}/staniax-logo.png`)}" />`,
    );
  } else {
    const canonicalUrl = normalizeUrl(seoConfig.path);
    const ogType = seoConfig.ogType || "website";
    const robotsContent = seoConfig.noindex
      ? "noindex, follow"
      : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
    const ogLocale =
      lang === "pl" ? "pl_PL" : lang === "de" ? "de_DE" : "en_US";
    const jsonLdObj = buildJsonLdGraph(seoConfig);
    const safeJsonLd = JSON.stringify(jsonLdObj).replace(
      /<\/script>/gi,
      "<\\/script>",
    );

    headTags.push(`<title>${escapeHtml(seoConfig.title)}</title>`);
    headTags.push(
      `<meta name="description" content="${escapeHtml(seoConfig.description)}" />`,
    );
    headTags.push(`<meta name="robots" content="${robotsContent}" />`);
    headTags.push(
      `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    );

    if (!seoConfig.noindex && !seoConfig.singleLanguage && seoConfig.alternates) {
      const xDefPath =
        seoConfig.alternates.xDefault || seoConfig.alternates.pl || "/";
      headTags.push(
        `<link rel="alternate" hreflang="pl" href="${escapeHtml(normalizeUrl(seoConfig.alternates.pl))}" />`,
      );
      headTags.push(
        `<link rel="alternate" hreflang="en" href="${escapeHtml(normalizeUrl(seoConfig.alternates.en))}" />`,
      );
      headTags.push(
        `<link rel="alternate" hreflang="de" href="${escapeHtml(normalizeUrl(seoConfig.alternates.de))}" />`,
      );
      headTags.push(
        `<link rel="alternate" hreflang="x-default" href="${escapeHtml(normalizeUrl(xDefPath))}" />`,
      );
    }

    headTags.push(
      `<meta property="og:type" content="${escapeHtml(ogType)}" />`,
    );
    headTags.push(
      `<meta property="og:title" content="${escapeHtml(seoConfig.title)}" />`,
    );
    headTags.push(
      `<meta property="og:description" content="${escapeHtml(seoConfig.description)}" />`,
    );
    headTags.push(
      `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    );
    headTags.push(
      `<meta property="og:site_name" content="STANIAX Sp. z o.o." />`,
    );
    headTags.push(
      `<meta property="og:locale" content="${escapeHtml(ogLocale)}" />`,
    );
    if (seoConfig.articleSchema && seoConfig.articleSchema.image) {
      const imgAbs = seoConfig.articleSchema.image.startsWith("http")
        ? seoConfig.articleSchema.image
        : `${SITE_ORIGIN}${seoConfig.articleSchema.image}`;
      headTags.push(
        `<meta property="og:image" content="${escapeHtml(imgAbs)}" />`,
      );
    } else {
      headTags.push(
        `<meta property="og:image" content="${SITE_ORIGIN}/staniax-logo.png" />`,
      );
    }
    headTags.push(`<meta name="twitter:card" content="summary_large_image" />`);
    headTags.push(
      `<meta name="twitter:title" content="${escapeHtml(seoConfig.title)}" />`,
    );
    headTags.push(
      `<meta name="twitter:description" content="${escapeHtml(seoConfig.description)}" />`,
    );
    headTags.push(
      `<script id="staniax-seo-jsonld" type="application/ld+json">${safeJsonLd}</script>`,
    );
  }

  html = html.replace("</head>", `  ${headTags.join("\n  ")}\n</head>`);
  html = html.replace(
    /<div id="root">[\s\S]*<\/div>(\s*<\/body>)/i,
    `<div id="root">${renderedBody}</div>$1`,
  );
  return html;
}

function writeRouteHtml(routePath, htmlContent) {
  const clean = routePath.replace(/^\/+/, "").replace(/\/+$/, "");
  const outFile = clean
    ? path.join(distDir, clean, "index.html")
    : path.join(distDir, "index.html");
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, htmlContent, "utf-8");
}

function buildUrlSetXml(entries, bridge) {
  const { normalizeUrl } = bridge;
  const urlsXml = entries
    .map(({ path: p, priority, changefreq, alternates, lastmod, singleLanguage }) => {
      const xDef = alternates.xDefault || alternates.pl || "/";
      const hreflangXml = singleLanguage
        ? ""
        : `
    <xhtml:link rel="alternate" hreflang="pl" href="${escapeHtml(normalizeUrl(alternates.pl))}" />
    <xhtml:link rel="alternate" hreflang="en" href="${escapeHtml(normalizeUrl(alternates.en))}" />
    <xhtml:link rel="alternate" hreflang="de" href="${escapeHtml(normalizeUrl(alternates.de))}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeHtml(normalizeUrl(xDef))}" />`;
      return `  <url>
    <loc>${escapeHtml(normalizeUrl(p))}</loc>
    <lastmod>${lastmod || LASTMOD}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${hreflangXml}
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlsXml}
</urlset>
`;
}

function generateSitemaps(bridge) {
  const {
    SERVICE_ORDER,
    SERVICE_SLUGS,
    COMPARISON_ORDER,
    COMPARISON_SLUGS,
    SUBSTRATE_ORDER,
    SUBSTRATE_SLUGS,
    PRICING_SLUGS,
    LOCAL_WARSAW_SLUGS,
    STATIC_ROUTE_EQUIVALENTS,
    SITE_ORIGIN,
  } = bridge;

  const homeGroup = STATIC_ROUTE_EQUIVALENTS[0];
  const galleryGroup = STATIC_ROUTE_EQUIVALENTS.find(
    (g) => g.pl === "/gallery",
  );

  const pagesEntries = [
    ...["pl", "en", "de"].map((l) => ({
      path: homeGroup[l],
      priority: "1.0",
      changefreq: "weekly",
      alternates: homeGroup,
    })),
    ...["pl", "en", "de"].map((l) => ({
      path: galleryGroup[l],
      priority: "0.8",
      changefreq: "monthly",
      alternates: galleryGroup,
    })),
  ];

  const serviceEntries = [];
  for (const id of SERVICE_ORDER) {
    const group = SERVICE_SLUGS[id];
    for (const l of ["pl", "en", "de"]) {
      serviceEntries.push({
        path: group[l],
        priority: "0.9",
        changefreq: "monthly",
        alternates: group,
      });
    }
  }

  const newsGroup = STATIC_ROUTE_EQUIVALENTS.find((g) => g.pl === "/news");
  const aviationGroup = STATIC_ROUTE_EQUIVALENTS.find(
    (g) => g.pl === "/news/partnerstwo-z-wiodacym-producentem-lotniczym",
  );
  const beautyGroup = STATIC_ROUTE_EQUIVALENTS.find(
    (g) => g.pl === "/news/metalizacja-prozniowa-rewolucjonizuje-branze-beauty",
  );
  const reflectorsGroup = STATIC_ROUTE_EQUIVALENTS.find(
    (g) => g.pl === "/news/regeneracja-odblysnikow-reflektorow-samochodowych",
  );

  const newsEntries = [
    ...["pl", "en", "de"].map((l) => ({
      path: newsGroup[l],
      priority: "0.8",
      changefreq: "weekly",
      alternates: newsGroup,
    })),
    ...["pl", "en", "de"].map((l) => ({
      path: aviationGroup[l],
      priority: "0.7",
      changefreq: "monthly",
      alternates: aviationGroup,
    })),
    ...["pl", "en", "de"].map((l) => ({
      path: beautyGroup[l],
      priority: "0.7",
      changefreq: "monthly",
      alternates: beautyGroup,
    })),
    ...["pl", "en", "de"].map((l) => ({
      path: reflectorsGroup[l],
      priority: "0.7",
      changefreq: "monthly",
      alternates: reflectorsGroup,
    })),
    // Artykuły z src/data/blog-posts (tylko PL)
    ...bridge.BLOG_POSTS.map((post) => ({
      path: post.slug,
      priority: "0.7",
      changefreq: "monthly",
      alternates: { pl: post.slug, en: post.slug, de: post.slug },
      singleLanguage: true,
      lastmod: post.dateModified,
    })),
  ];

  const solutionsEntries = [];
  for (const id of COMPARISON_ORDER) {
    const group = COMPARISON_SLUGS[id];
    for (const l of ["pl", "en", "de"]) {
      solutionsEntries.push({
        path: group[l],
        priority: "0.85",
        changefreq: "monthly",
        alternates: group,
      });
    }
  }
  for (const id of SUBSTRATE_ORDER) {
    const group = SUBSTRATE_SLUGS[id];
    for (const l of ["pl", "en", "de"]) {
      solutionsEntries.push({
        path: group[l],
        priority: "0.85",
        changefreq: "monthly",
        alternates: group,
      });
    }
  }
  for (const l of ["pl", "en", "de"]) {
    solutionsEntries.push({
      path: PRICING_SLUGS[l],
      priority: "0.9",
      changefreq: "monthly",
      alternates: PRICING_SLUGS,
    });
  }
  for (const l of ["pl", "en", "de"]) {
    solutionsEntries.push({
      path: LOCAL_WARSAW_SLUGS[l],
      priority: "0.9",
      changefreq: "monthly",
      alternates: LOCAL_WARSAW_SLUGS,
    });
  }

  const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_ORIGIN}/sitemap-pages.xml</loc>
    <lastmod>${LASTMOD}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE_ORIGIN}/sitemap-services.xml</loc>
    <lastmod>${LASTMOD}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE_ORIGIN}/sitemap-news.xml</loc>
    <lastmod>${LASTMOD}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE_ORIGIN}/sitemap-solutions.xml</loc>
    <lastmod>${LASTMOD}</lastmod>
  </sitemap>
</sitemapindex>
`;

  const filesToWrite = {
    "sitemap.xml": sitemapIndexXml,
    "sitemap-pages.xml": buildUrlSetXml(pagesEntries, bridge),
    "sitemap-services.xml": buildUrlSetXml(serviceEntries, bridge),
    "sitemap-news.xml": buildUrlSetXml(newsEntries, bridge),
    "sitemap-solutions.xml": buildUrlSetXml(solutionsEntries, bridge),
  };

  for (const [name, xml] of Object.entries(filesToWrite)) {
    fs.writeFileSync(path.join(publicDir, name), xml, "utf-8");
    fs.writeFileSync(path.join(distDir, name), xml, "utf-8");
  }

  return {
    pagesCount: pagesEntries.length,
    servicesCount: serviceEntries.length,
    newsCount: newsEntries.length,
    solutionsCount: solutionsEntries.length,
  };
}

async function run() {
  const baseHtml = fs.readFileSync(indexPath, "utf-8");
  const bridge = await loadBridgeData();
  const resolveAsset = createAssetResolver(path.join(distDir, "assets"));
  const galleryItems = extractGalleryItems(resolveAsset);
  const {
    SERVICE_ORDER,
    SERVICE_SLUGS,
    COMPARISON_ORDER,
    COMPARISON_SLUGS,
    SUBSTRATE_ORDER,
    SUBSTRATE_SLUGS,
    PRICING_SLUGS,
    LOCAL_WARSAW_SLUGS,
    STATIC_ROUTE_EQUIVALENTS,
  } = bridge;

  const routes = [];

  for (const lang of ["pl", "en", "de"]) {
    const p = lang === "pl" ? "/" : `/${lang}`;
    const { seoConfig, bodyHtml } = renderHomePage(lang, bridge, resolveAsset);
    routes.push({ path: p, lang, seoConfig, bodyHtml });
  }

  for (const id of SERVICE_ORDER) {
    for (const lang of ["pl", "en", "de"]) {
      const p = SERVICE_SLUGS[id][lang];
      const { seoConfig, bodyHtml } = renderServicePage(
        id,
        lang,
        bridge,
        resolveAsset,
      );
      routes.push({ path: p, lang, seoConfig, bodyHtml });
    }
  }

  for (const lang of ["pl", "en", "de"]) {
    const p = lang === "pl" ? "/news" : `/${lang}/news`;
    const { seoConfig, bodyHtml } = renderNewsHubPage(
      lang,
      bridge,
      resolveAsset,
    );
    routes.push({ path: p, lang, seoConfig, bodyHtml });
  }

  const libGroup = STATIC_ROUTE_EQUIVALENTS.find(
    (g) => g.pl === "/news/biblioteka",
  );
  for (const lang of ["pl", "en", "de"]) {
    const p = libGroup[lang];
    const { seoConfig, bodyHtml } = renderLibraryPage(
      lang,
      p,
      bridge,
      resolveAsset,
    );
    routes.push({ path: p, lang, seoConfig, bodyHtml });
  }

  const aviationGroup = STATIC_ROUTE_EQUIVALENTS.find(
    (g) => g.pl === "/news/partnerstwo-z-wiodacym-producentem-lotniczym",
  );
  for (const lang of ["pl", "en", "de"]) {
    const p = aviationGroup[lang];
    const { seoConfig, bodyHtml } = renderArticleAviation(
      lang,
      p,
      bridge,
      resolveAsset,
    );
    routes.push({ path: p, lang, seoConfig, bodyHtml });
  }

  const beautyGroup = STATIC_ROUTE_EQUIVALENTS.find(
    (g) => g.pl === "/news/metalizacja-prozniowa-rewolucjonizuje-branze-beauty",
  );
  for (const lang of ["pl", "en", "de"]) {
    const p = beautyGroup[lang];
    const { seoConfig, bodyHtml } = renderArticleBeauty(
      lang,
      p,
      bridge,
      resolveAsset,
    );
    routes.push({ path: p, lang, seoConfig, bodyHtml });
  }

  const reflectorsGroup = STATIC_ROUTE_EQUIVALENTS.find(
    (g) => g.pl === "/news/regeneracja-odblysnikow-reflektorow-samochodowych",
  );
  for (const lang of ["pl", "en", "de"]) {
    const p = reflectorsGroup[lang];
    const { seoConfig, bodyHtml } = renderArticleReflectors(
      lang,
      p,
      bridge,
      resolveAsset,
    );
    routes.push({ path: p, lang, seoConfig, bodyHtml });
  }

  for (const post of bridge.BLOG_POSTS) {
    const { seoConfig, bodyHtml } = renderBlogArticle(post, bridge, resolveAsset);
    routes.push({ path: post.slug, lang: "pl", seoConfig, bodyHtml });
  }

  for (const lang of ["pl", "en", "de"]) {
    const p = lang === "pl" ? "/gallery" : `/${lang}/gallery`;
    const { seoConfig, bodyHtml } = renderGalleryPage(
      lang,
      p,
      bridge,
      galleryItems,
    );
    routes.push({ path: p, lang, seoConfig, bodyHtml });
  }

  for (const id of COMPARISON_ORDER) {
    for (const lang of ["pl", "en", "de"]) {
      const p = COMPARISON_SLUGS[id][lang];
      const { seoConfig, bodyHtml } = renderComparisonPage(id, lang, bridge);
      routes.push({ path: p, lang, seoConfig, bodyHtml });
    }
  }

  for (const id of SUBSTRATE_ORDER) {
    for (const lang of ["pl", "en", "de"]) {
      const p = SUBSTRATE_SLUGS[id][lang];
      const { seoConfig, bodyHtml } = renderSubstrateMatrixPage(id, lang, bridge);
      routes.push({ path: p, lang, seoConfig, bodyHtml });
    }
  }

  for (const lang of ["pl", "en", "de"]) {
    const p = PRICING_SLUGS[lang];
    const { seoConfig, bodyHtml } = renderHeadlightPricingPage(lang, bridge);
    routes.push({ path: p, lang, seoConfig, bodyHtml });
  }

  for (const lang of ["pl", "en", "de"]) {
    const p = LOCAL_WARSAW_SLUGS[lang];
    const { seoConfig, bodyHtml } = renderLocalWarsawPage(lang, bridge);
    routes.push({ path: p, lang, seoConfig, bodyHtml });
  }

  for (const docType of ["privacy", "cookies"]) {
    const group = bridge.LEGAL_DATA[docType].alternates;
    for (const lang of ["pl", "en", "de"]) {
      const p = group[lang];
      const { seoConfig, bodyHtml } = renderLegalPage(docType, lang, p, bridge);
      routes.push({ path: p, lang, seoConfig, bodyHtml });
    }
  }

  for (const route of routes) {
    const chromeHtml = renderSiteChrome({
      lang: route.lang,
      currentPath: route.path,
      alternates: route.seoConfig.alternates,
      bridge,
      bodyHtml: route.bodyHtml,
    });
    const doc = injectHtmlDocument(baseHtml, {
      lang: route.lang,
      seoConfig: route.seoConfig,
      renderedBody: chromeHtml,
      bridge,
    });
    writeRouteHtml(route.path, doc);
  }

  const notFound = renderNotFoundPage(bridge);
  const notFoundChrome = renderSiteChrome({
    lang: "pl",
    currentPath: "/404",
    alternates: { pl: "/", en: "/en", de: "/de" },
    bridge,
    bodyHtml: notFound.bodyHtml,
  });
  const notFoundDoc = injectHtmlDocument(baseHtml, {
    lang: "pl",
    custom404Meta: { title: notFound.title, description: notFound.description },
    renderedBody: notFoundChrome,
    bridge,
  });
  fs.writeFileSync(path.join(distDir, "404.html"), notFoundDoc, "utf-8");

  const sitemapStats = generateSitemaps(bridge);
  console.log(
    `[prerender] Generated ${routes.length} routes + 404.html | Gallery items: ${galleryItems.length} | Sitemaps: ${
      sitemapStats.pagesCount +
      sitemapStats.servicesCount +
      sitemapStats.newsCount +
      sitemapStats.solutionsCount
    } URLs (pages=${sitemapStats.pagesCount}, services=${sitemapStats.servicesCount}, news=${sitemapStats.newsCount}, solutions=${sitemapStats.solutionsCount})`,
  );
}

run().catch((err) => {
  console.error("[prerender] Fatal error:", err);
  process.exit(1);
});
