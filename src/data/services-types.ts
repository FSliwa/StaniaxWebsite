import type { Lang } from "@/lib/translations";

export type ServiceId =
  | "reflectors"
  | "vacuum-metallization"
  | "plastic-metallization"
  | "plastic-painting"
  | "glass-painting"
  | "spray-painting";

export interface ServiceMetric {
  value: number;
  decimalPlaces?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  detail: string;
}

export interface ServiceTable {
  caption: string;
  headers: string[];
  rows: string[][];
  footnote: string;
}

export interface EditorialSubSection {
  h3: string;
  body: string;
  bullets?: string[];
}

export interface EditorialSection {
  h2: string;
  paragraphs: string[];
  subSections?: EditorialSubSection[];
}

export interface ShowcaseOption {
  id: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  specs: Array<{ label: string; value: string }>;
  previewStyle?: string;
  colorHex?: string;
}

export interface RalColorOption {
  code: string;
  name: string;
  hex: string;
  category: string;
}

export interface ServiceShowcaseConfig {
  h2: string;
  subtitle: string;
  ctaLabel: string;
  options?: ShowcaseOption[];
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt?: string;
  afterAlt?: string;
  sliderSummary?: string;
  ralColors?: RalColorOption[];
  finishOptions?: Array<{
    id: string;
    label: string;
    gloss: string;
    desc: string;
  }>;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  param: string;
}

export interface B2bCard {
  badge: string;
  h3: string;
  body: string;
  spec: string;
}

export interface CaseStudyCard {
  badge: string;
  h3: string;
  desc: string;
  param: string;
  imageKey:
    | "reflectors1"
    | "reflectors2"
    | "automotiveAfter"
    | "vacuumChamber"
    | "vacuumPart"
    | "packagingAfter"
    | "colorfulPackaging"
    | "plasticPaint1"
    | "plasticPaint2"
    | "plasticPaint3"
    | "glassPaint1"
    | "glassPaint2"
    | "glassPaint3"
    | "sprayPaint1"
    | "sprayPaint2"
    | "sprayPaint3"
    | "industrialAfter";
  alt: string;
}

export interface ServiceFaqItem {
  q: string;
  a: string;
}

export interface RelatedLinkItem {
  path: string;
  anchorText: string;
  badge: string;
  desc: string;
}

export interface ServiceLocaleContent {
  navLabel: string;
  shortSummary: string;
  metaTitle: string;
  metaDesc: string;
  breadcrumbLabel: string;
  heroBadge: string;
  h1: string;
  lead: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
  heroImageKey:
    | "reflectorsHero"
    | "vacuumHero"
    | "plasticMetaHero"
    | "plasticPaintHero"
    | "glassPaintHero"
    | "sprayPaintHero";
  heroImageAlt: string;
  metrics: [ServiceMetric, ServiceMetric, ServiceMetric];
  scopeSection: {
    h2: string;
    intro: string;
    cardTitle: string;
    cardSubtitle: string;
    highlights: string[];
    table: ServiceTable;
  };
  editorialSections: EditorialSection[];
  showcase: ServiceShowcaseConfig;
  processSection: {
    h2: string;
    subtitle: string;
    steps: [ProcessStep, ProcessStep, ProcessStep, ProcessStep];
  };
  marqueeSection: {
    h2: string;
    subtitle: string;
    row1: string[];
    row2: string[];
    b2bCards: [B2bCard, B2bCard, B2bCard];
  };
  caseStudiesSection: {
    h2: string;
    subtitle: string;
    items: [CaseStudyCard, CaseStudyCard, CaseStudyCard];
  };
  faqSection: {
    h2: string;
    subtitle: string;
    items: ServiceFaqItem[];
  };
  quoteSection: {
    h2: string;
    intro: string;
    projectTypes: string[];
    submitLabel: string;
  };
  seeAlsoSection: {
    h2: string;
    links: [RelatedLinkItem, RelatedLinkItem, RelatedLinkItem];
  };
    schemaServiceType: string
  schemaPriceRange?: string
  schemaPriceCurrency?: string
}

export interface ServiceDefinition {
  id: ServiceId;
  slugs: Record<Lang, string>;
  locales: Record<Lang, ServiceLocaleContent>;
}
