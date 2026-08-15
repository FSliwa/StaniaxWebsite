import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, X, CaretLeft, CaretRight, Factory, Sparkle } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { BigFooter } from '@/components/BigFooter'
import { t, type Lang } from '@/lib/translations'

// Import all gallery images
import gallery01 from '@/assets/gallery/gallery-01.jpg'
import gallery02 from '@/assets/gallery/gallery-02.jpg'
import gallery03 from '@/assets/gallery/gallery-03.jpg'
import gallery04 from '@/assets/gallery/gallery-04.jpg'
import gallery05 from '@/assets/gallery/gallery-05.jpg'
import gallery06 from '@/assets/gallery/gallery-06.jpg'
import gallery07 from '@/assets/gallery/gallery-07.jpg'
import gallery08 from '@/assets/gallery/gallery-08.jpg'
import gallery09 from '@/assets/gallery/gallery-09.jpg'
import gallery10 from '@/assets/gallery/gallery-10.jpg'
import gallery11 from '@/assets/gallery/gallery-11.jpg'
import gallery12 from '@/assets/gallery/gallery-12.jpg'
import gallery13 from '@/assets/gallery/gallery-13.jpg'
import gallery14 from '@/assets/gallery/gallery-14.jpg'
import gallery15 from '@/assets/gallery/gallery-15.jpg'
import gallery16 from '@/assets/gallery/gallery-16.jpg'
import gallery17 from '@/assets/gallery/gallery-17.jpg'
import gallery18 from '@/assets/gallery/gallery-18.jpg'
import gallery19 from '@/assets/gallery/gallery-19.jpg'
import gallery20 from '@/assets/gallery/gallery-20.jpg'
import gallery21 from '@/assets/gallery/gallery-21.jpg'
import gallery22 from '@/assets/gallery/gallery-22.jpg'
import gallery23 from '@/assets/gallery/gallery-23.jpg'
import gallery24 from '@/assets/gallery/gallery-24.jpg'
import gallery25 from '@/assets/gallery/gallery-25.jpg'
import gallery26 from '@/assets/gallery/gallery-26.jpg'
import gallery27 from '@/assets/gallery/gallery-27.jpg'
import gallery28 from '@/assets/gallery/gallery-28.jpg'
import gallery29 from '@/assets/gallery/gallery-29.jpg'
import gallery30 from '@/assets/gallery/gallery-30.jpg'
import gallery31 from '@/assets/gallery/gallery-31.jpg'
import gallery32 from '@/assets/gallery/gallery-32.jpg'
import gallery33 from '@/assets/gallery/gallery-33.jpg'
import gallery34 from '@/assets/gallery/gallery-34.jpg'
import gallery35 from '@/assets/gallery/gallery-35.jpg'
import gallery36 from '@/assets/gallery/gallery-36.jpg'
import gallery37 from '@/assets/gallery/gallery-37.jpg'
import gallery38 from '@/assets/gallery/gallery-38.jpg'
import gallery39 from '@/assets/gallery/gallery-39.jpg'
import gallery40 from '@/assets/gallery/gallery-40.jpg'
import gallery41 from '@/assets/gallery/gallery-41.jpg'
import gallery42 from '@/assets/gallery/gallery-42.jpg'
import gallery43 from '@/assets/gallery/gallery-43.jpg'
import gallery44 from '@/assets/gallery/gallery-44.jpg'
import gallery45 from '@/assets/gallery/gallery-45.jpg'
import gallery46 from '@/assets/gallery/gallery-46.jpg'
import gallery47 from '@/assets/gallery/gallery-47.jpg'
import gallery48 from '@/assets/gallery/gallery-48.jpg'
import gallery49 from '@/assets/gallery/gallery-49.jpg'
import gallery50 from '@/assets/gallery/gallery-50.jpg'
import gallery51 from '@/assets/gallery/gallery-51.jpg'
import gallery52 from '@/assets/gallery/gallery-52.jpg'
import gallery53 from '@/assets/gallery/gallery-53.jpg'
import gallery54 from '@/assets/gallery/gallery-54.jpg'
import gallery55 from '@/assets/gallery/gallery-55.jpg'
import gallery56 from '@/assets/gallery/gallery-56.jpg'
import gallery57 from '@/assets/gallery/gallery-57.jpg'
import gallery58 from '@/assets/gallery/gallery-58.jpg'
import gallery59 from '@/assets/gallery/gallery-59.jpg'
import gallery60 from '@/assets/gallery/gallery-60.jpg'
import gallery61 from '@/assets/gallery/gallery-61.jpg'
import gallery62 from '@/assets/gallery/gallery-62.jpg'
import gallery63 from '@/assets/gallery/gallery-63.jpg'
import gallery64 from '@/assets/gallery/gallery-64.jpg'
import gallery65 from '@/assets/gallery/gallery-65.jpg'
import gallery66 from '@/assets/gallery/gallery-66.jpg'
import gallery67 from '@/assets/gallery/gallery-67.jpg'
import gallery68 from '@/assets/gallery/gallery-68.jpg'
import gallery69 from '@/assets/gallery/gallery-69.jpg'
import gallery70 from '@/assets/gallery/gallery-70.jpg'
import gallery71 from '@/assets/gallery/gallery-71.jpg'
import gallery72 from '@/assets/gallery/gallery-72.jpg'
import gallery73 from '@/assets/gallery/gallery-73.jpg'
import gallery74 from '@/assets/gallery/gallery-74.jpg'
import gallery75 from '@/assets/gallery/gallery-75.jpg'
import gallery76 from '@/assets/gallery/gallery-76.jpg'
import gallery77 from '@/assets/gallery/gallery-77.jpg'
import gallery78 from '@/assets/gallery/gallery-78.jpg'
import gallery79 from '@/assets/gallery/gallery-79.jpg'
import gallery80 from '@/assets/gallery/gallery-80.jpg'
import gallery81 from '@/assets/gallery/gallery-81.jpg'
import gallery82 from '@/assets/gallery/gallery-82.jpg'
import gallery83 from '@/assets/gallery/gallery-83.jpg'
import gallery84 from '@/assets/gallery/gallery-84.jpg'
import gallery85 from '@/assets/gallery/gallery-85.jpg'
import gallery86 from '@/assets/gallery/gallery-86.jpg'
import gallery87 from '@/assets/gallery/gallery-87.jpg'
import gallery88 from '@/assets/gallery/gallery-88.jpg'
import gallery89 from '@/assets/gallery/gallery-89.jpg'
import gallery90 from '@/assets/gallery/gallery-90.jpg'
import gallery91 from '@/assets/gallery/gallery-91.jpg'
import gallery92 from '@/assets/gallery/gallery-92.jpg'
import gallery93 from '@/assets/gallery/gallery-93.jpg'
import gallery94 from '@/assets/gallery/gallery-94.jpg'
import gallery95 from '@/assets/gallery/gallery-95.jpg'
import gallery96 from '@/assets/gallery/gallery-96.jpg'
import gallery97 from '@/assets/gallery/gallery-97.jpg'
import gallery98 from '@/assets/gallery/gallery-98.jpg'
import gallery99 from '@/assets/gallery/gallery-99.jpg'
import gallery100 from '@/assets/gallery/gallery-100.jpg'
import gallery101 from '@/assets/gallery/gallery-101.jpg'
import gallery102 from '@/assets/gallery/gallery-102.jpg'
import gallery103 from '@/assets/gallery/gallery-103.jpg'
import gallery104 from '@/assets/gallery/gallery-104.jpg'
import gallery105 from '@/assets/gallery/gallery-105.jpg'
import gallery106 from '@/assets/gallery/gallery-106.jpg'
import gallery107 from '@/assets/gallery/gallery-107.jpg'
import gallery108 from '@/assets/gallery/gallery-108.jpg'
import gallery109 from '@/assets/gallery/gallery-109.jpg'
import gallery110 from '@/assets/gallery/gallery-110.jpg'
import gallery111 from '@/assets/gallery/gallery-111.jpg'
import gallery112 from '@/assets/gallery/gallery-112.jpg'
import gallery113 from '@/assets/gallery/gallery-113.jpg'
import gallery114 from '@/assets/gallery/gallery-114.jpg'
import gallery115 from '@/assets/gallery/gallery-115.jpg'

// Opisy zdjęć, dla których nie napisano indywidualnego tekstu. Rotacja wariantów
// zastępuje wcześniejszy szablon "<Kategoria> - metalizacja realizacja <N>",
// który powtarzał tę samą frazę 95 razy w treści i w atrybutach alt.
const ALT_VARIANTS: Record<string, Record<Lang, string[]>> = {
  'Złoto': {
    pl: [
      'Złota powłoka lustrzana na detalu z tworzywa',
      'Element wykończony powłoką w kolorze złota',
      'Złote wykończenie komponentu po metalizacji próżniowej',
      'Detal ze złotą powłoką dekoracyjną',
      'Złocista powierzchnia po obróbce próżniowej',
      'Złota powłoka na elemencie serii produkcyjnej',
      'Ciepły złoty połysk na detalu z tworzywa',
      'Złote wykończenie opakowania kosmetycznego',
      'Element ze złotą powłoką o wysokim połysku',
      'Złota metalizacja drobnego komponentu',
      'Detal w odcieniu szampańskiego złota',
      'Złota powłoka na akcesorium dekoracyjnym'
    ],
    en: [
      'Gold mirror coating on a plastic component',
      'Part finished with a gold-toned coating',
      'Gold finish on a vacuum-metallized component',
      'Component with a decorative gold coating',
      'Golden surface after vacuum processing',
      'Gold coating on a production-series part',
      'Warm gold gloss on a plastic detail',
      'Gold finish on cosmetic packaging',
      'Part with a high-gloss gold coating',
      'Gold metallization of a small component',
      'Detail in a champagne gold shade',
      'Gold coating on a decorative accessory'
    ],
    de: [
      'Spiegelnde Goldschicht auf einem Kunststoffteil',
      'Goldfarben veredeltes Bauteil',
      'Goldfinish nach der Vakuummetallisierung',
      'Dekoratives Detail in Gold',
      'Goldene Oberfläche aus der Vakuumkammer',
      'Serienbauteil in Goldoptik',
      'Warmer Goldglanz auf einem Formteil',
      'Kosmetikverpackung mit Goldveredelung',
      'Hochglänzendes Gold auf einem Bauteil',
      'Goldmetallisiertes Kleinbauteil',
      'Farbton Champagnergold',
      'Zieraccessoire in Goldausführung'
    ]
  },
  'Chrom': {
    pl: [
      'Chromowa powłoka lustrzana na detalu',
      'Element z wykończeniem chromowym',
      'Srebrzysta powłoka po metalizacji próżniowej',
      'Detal z chromowym efektem lustra',
      'Chromowane wykończenie komponentu technicznego',
      'Powłoka chromowa o wysokim połysku',
      'Srebrny detal po obróbce w komorze próżniowej',
      'Chromowana listwa ozdobna',
      'Element z satynowym wykończeniem srebrnym',
      'Chromowa powierzchnia odbijająca światło',
      'Detal z tworzywa z powłoką chromową',
      'Chromowane wykończenie elementu seryjnego'
    ],
    en: [
      'Mirror-bright chrome on a moulded part',
      'Chrome-finished component',
      'Silver surface produced by vacuum metallization',
      'Mirror effect achieved in chrome',
      'Technical component finished in chrome',
      'High-gloss chrome detail',
      'Silver part after vacuum-chamber processing',
      'Chrome-plated decorative trim',
      'Satin silver surface treatment',
      'Reflective chrome surface',
      'Chrome-metallized plastic housing',
      'Series part with chrome finish'
    ],
    de: [
      'Verchromte Spiegelbeschichtung auf einem Bauteil',
      'Bauteil mit Chromfinish',
      'Silberne Beschichtung nach der Vakuummetallisierung',
      'Bauteil mit verchromtem Spiegeleffekt',
      'Chromfinish an einem technischen Bauteil',
      'Hochglänzende Chrombeschichtung',
      'Silbernes Detail nach Bearbeitung in der Vakuumkammer',
      'Verchromte Zierleiste',
      'Bauteil mit satiniertem Silberfinish',
      'Verchromte, lichtreflektierende Oberfläche',
      'Kunststoffteil mit Chrombeschichtung',
      'Chromfinish an einem Serienbauteil'
    ]
  },
  'Dekoracyjne': {
    pl: [
      'Dekoracyjna powłoka barwna na detalu',
      'Element z wielobarwnym wykończeniem',
      'Kolorowa powłoka dekoracyjna po metalizacji',
      'Detal z efektem barwnej powłoki',
      'Dekoracyjne wykończenie z przejściem kolorów',
      'Element z powłoką w odcieniach niebieskiego',
      'Barwna powłoka dekoracyjna na komponencie',
      'Detal z powłoką o efekcie tęczowym',
      'Dekoracyjna powierzchnia z połyskiem barwnym',
      'Element wykończony powłoką fioletową',
      'Kolorowe wykończenie detalu z tworzywa',
      'Dekoracyjna powłoka z metalicznym refleksem'
    ],
    en: [
      'Coloured decorative finish on a moulded part',
      'Multicoloured surface treatment',
      'Colour decoration applied after metallization',
      'Tinted metallic effect on a housing',
      'Decorative gradient across the surface',
      'Component tinted in shades of blue',
      'Vivid decorative colour layer',
      'Iridescent surface treatment',
      'Coloured sheen on a decorative element',
      'Violet-tinted metallic surface',
      'Colour-finished plastic detail',
      'Decorative layer with metallic reflection'
    ],
    de: [
      'Farbig dekoriertes Formteil',
      'Mehrfarbiges Oberflächenfinish',
      'Farbdekor nach der Metallisierung aufgebracht',
      'Getönter Metalliceffekt auf einem Gehäuse',
      'Dekorfinish mit Farbverlauf',
      'Bauteil in Blautönen veredelt',
      'Kräftige dekorative Farbschicht',
      'Schillernde Oberflächenveredelung',
      'Farbiger Glanz auf einem Zierelement',
      'Violett getönte Metalloberfläche',
      'Farbveredeltes Kunststoffdetail',
      'Dekorschicht mit metallischem Reflex'
    ]
  }
}

// Tłumaczenia opisów napisanych ręcznie dla pierwszych 20 zdjęć.
const ALT_TRANSLATIONS: Record<string, { en: string; de: string }> = {
  'Złote elementy kosmetyczne — metalizacja próżniowa': { en: 'Gold cosmetic components — vacuum metallization', de: 'Goldene Kosmetikbauteile — Vakuummetallisierung' },
  'Złote powłoki na opakowaniach perfumeryjnych': { en: 'Gold coatings on perfume packaging', de: 'Goldbeschichtungen auf Parfümverpackungen' },
  'Złote nakrętki premium — seria produkcyjna': { en: 'Premium gold caps — production series', de: 'Premium-Goldverschlüsse — Serienfertigung' },
  'Złota metalizacja detali dekoracyjnych': { en: 'Gold metallization of decorative parts', de: 'Goldmetallisierung dekorativer Teile' },
  'Złote wykończenie elementów seryjnych': { en: 'Gold finish on series components', de: 'Goldfinish an Serienbauteilen' },
  'Złota powłoka próżniowa na komponentach': { en: 'Gold vacuum coating on components', de: 'Goldene Vakuumbeschichtung auf Bauteilen' },
  'Złote akcesoria — metalizacja lustrzana': { en: 'Gold accessories — mirror metallization', de: 'Goldene Accessoires — Spiegelmetallisierung' },
  'Subtelne złote wykończenie powierzchni': { en: 'Subtle gold surface finish', de: 'Dezentes goldenes Oberflächenfinish' },
  'Chromowana rzeźba — powłoka lustrzana': { en: 'Chrome-plated sculpture — mirror coating', de: 'Verchromte Skulptur — Spiegelbeschichtung' },
  'Chromowane detale z głębokim połyskiem': { en: 'Chrome details with deep gloss', de: 'Verchromte Details mit tiefem Glanz' },
  'Chromowane komponenty przemysłowe': { en: 'Chrome-plated industrial components', de: 'Verchromte Industriebauteile' },
  'Srebrna metalizacja próżniowa elementów': { en: 'Silver vacuum metallization of parts', de: 'Silberne Vakuummetallisierung von Bauteilen' },
  'Chromowane wykończenie w wysokim połysku': { en: 'High-gloss chrome finish', de: 'Hochglänzendes Chromfinish' },
  'Chromowane osłony i listwy ozdobne': { en: 'Chrome covers and decorative trims', de: 'Verchromte Abdeckungen und Zierleisten' },
  'Chromowana powierzchnia — efekt lustra': { en: 'Chrome surface — mirror effect', de: 'Verchromte Oberfläche — Spiegeleffekt' },
  'Chromowane powłoki na częściach technicznych': { en: 'Chrome coatings on technical parts', de: 'Chrombeschichtungen auf technischen Teilen' },
  'Dekoracyjne powłoki kolorowe — fiolet i niebieski': { en: 'Decorative colour coatings — violet and blue', de: 'Dekorative Farbbeschichtungen — Violett und Blau' },
  'Wielobarwna metalizacja dekoracyjna': { en: 'Multicoloured decorative metallization', de: 'Mehrfarbige dekorative Metallisierung' },
  'Dekoracyjne wykończenie z akcentami kolorowymi': { en: 'Decorative finish with colour accents', de: 'Dekorfinish mit Farbakzenten' },
  'Dekoracyjna powłoka z efektem kolorystycznym': { en: 'Decorative coating with a colour effect', de: 'Dekorbeschichtung mit Farbeffekt' }
}

function altFor(image: { alt?: string; category: string }, index: number, lang: Lang): string {
  if (image.alt) {
    if (lang === 'pl') return image.alt
    return ALT_TRANSLATIONS[image.alt]?.[lang] ?? image.alt
  }
  const variants = ALT_VARIANTS[image.category]?.[lang] ?? ALT_VARIANTS['Złoto'][lang]
  return variants[index % variants.length]
}

const galleryImages: { src: string; alt?: string; category: string }[] = [
  // Złoto (8) — ciepłe, złotawe tony dominujące w centrum zdjęcia
  { src: gallery01, alt: 'Złote elementy kosmetyczne — metalizacja próżniowa', category: 'Złoto' },
  { src: gallery02, alt: 'Złote powłoki na opakowaniach perfumeryjnych', category: 'Złoto' },
  { src: gallery04, alt: 'Złote nakrętki premium — seria produkcyjna', category: 'Złoto' },
  { src: gallery05, alt: 'Złota metalizacja detali dekoracyjnych', category: 'Złoto' },
  { src: gallery12, alt: 'Złote wykończenie elementów seryjnych', category: 'Złoto' },
  { src: gallery16, alt: 'Złota powłoka próżniowa na komponentach', category: 'Złoto' },
  { src: gallery17, alt: 'Złote akcesoria — metalizacja lustrzana', category: 'Złoto' },
  { src: gallery18, alt: 'Subtelne złote wykończenie powierzchni', category: 'Złoto' },

  // Chrom (8) — zimne, srebrne/szare tony, achromatic
  { src: gallery06, alt: 'Chromowana rzeźba — powłoka lustrzana', category: 'Chrom' },
  { src: gallery07, alt: 'Chromowane detale z głębokim połyskiem', category: 'Chrom' },
  { src: gallery08, alt: 'Chromowane komponenty przemysłowe', category: 'Chrom' },
  { src: gallery09, alt: 'Srebrna metalizacja próżniowa elementów', category: 'Chrom' },
  { src: gallery10, alt: 'Chromowane wykończenie w wysokim połysku', category: 'Chrom' },
  { src: gallery11, alt: 'Chromowane osłony i listwy ozdobne', category: 'Chrom' },
  { src: gallery19, alt: 'Chromowana powierzchnia — efekt lustra', category: 'Chrom' },
  { src: gallery20, alt: 'Chromowane powłoki na częściach technicznych', category: 'Chrom' },

  // Dekoracyjne (4) — kolorowe, wielobarwne powłoki
  { src: gallery03, alt: 'Dekoracyjne powłoki kolorowe — fiolet i niebieski', category: 'Dekoracyjne' },
  { src: gallery13, alt: 'Wielobarwna metalizacja dekoracyjna', category: 'Dekoracyjne' },
  { src: gallery14, alt: 'Dekoracyjne wykończenie z akcentami kolorowymi', category: 'Dekoracyjne' },
  { src: gallery15, alt: 'Dekoracyjna powłoka z efektem kolorystycznym', category: 'Dekoracyjne' },
  { src: gallery21, category: 'Chrom' },
  { src: gallery22, category: 'Złoto' },
  { src: gallery23, category: 'Złoto' },
  { src: gallery24, category: 'Złoto' },
  { src: gallery25, category: 'Dekoracyjne' },
  { src: gallery26, category: 'Chrom' },
  { src: gallery27, category: 'Złoto' },
  { src: gallery28, category: 'Chrom' },
  { src: gallery29, category: 'Dekoracyjne' },
  { src: gallery30, category: 'Dekoracyjne' },
  { src: gallery31, category: 'Dekoracyjne' },
  { src: gallery32, category: 'Złoto' },
  { src: gallery33, category: 'Dekoracyjne' },
  { src: gallery34, category: 'Dekoracyjne' },
  { src: gallery35, category: 'Chrom' },
  { src: gallery36, category: 'Chrom' },
  { src: gallery37, category: 'Złoto' },
  { src: gallery38, category: 'Złoto' },
  { src: gallery39, category: 'Chrom' },
  { src: gallery40, category: 'Chrom' },
  { src: gallery41, category: 'Chrom' },
  { src: gallery42, category: 'Dekoracyjne' },
  { src: gallery43, category: 'Dekoracyjne' },
  { src: gallery44, category: 'Chrom' },
  { src: gallery45, category: 'Chrom' },
  { src: gallery46, category: 'Dekoracyjne' },
  { src: gallery47, category: 'Dekoracyjne' },
  { src: gallery48, category: 'Złoto' },
  { src: gallery49, category: 'Chrom' },
  { src: gallery50, category: 'Dekoracyjne' },
  { src: gallery51, category: 'Złoto' },
  { src: gallery52, category: 'Dekoracyjne' },
  { src: gallery53, category: 'Dekoracyjne' },
  { src: gallery54, category: 'Złoto' },
  { src: gallery55, category: 'Chrom' },
  { src: gallery56, category: 'Złoto' },
  { src: gallery57, category: 'Złoto' },
  { src: gallery58, category: 'Chrom' },
  { src: gallery59, category: 'Złoto' },
  { src: gallery60, category: 'Złoto' },
  { src: gallery61, category: 'Dekoracyjne' },
  { src: gallery62, category: 'Chrom' },
  { src: gallery63, category: 'Dekoracyjne' },
  { src: gallery64, category: 'Złoto' },
  { src: gallery65, category: 'Chrom' },
  { src: gallery66, category: 'Chrom' },
  { src: gallery67, category: 'Dekoracyjne' },
  { src: gallery68, category: 'Złoto' },
  { src: gallery69, category: 'Chrom' },
  { src: gallery70, category: 'Chrom' },
  { src: gallery71, category: 'Złoto' },
  { src: gallery72, category: 'Złoto' },
  { src: gallery73, category: 'Chrom' },
  { src: gallery74, category: 'Złoto' },
  { src: gallery75, category: 'Dekoracyjne' },
  { src: gallery76, category: 'Chrom' },
  { src: gallery77, category: 'Chrom' },
  { src: gallery78, category: 'Dekoracyjne' },
  { src: gallery79, category: 'Chrom' },
  { src: gallery80, category: 'Złoto' },
  { src: gallery81, category: 'Złoto' },
  { src: gallery82, category: 'Złoto' },
  { src: gallery83, category: 'Dekoracyjne' },
  { src: gallery84, category: 'Chrom' },
  { src: gallery85, category: 'Dekoracyjne' },
  { src: gallery86, category: 'Dekoracyjne' },
  { src: gallery87, category: 'Złoto' },
  { src: gallery88, category: 'Złoto' },
  { src: gallery89, category: 'Dekoracyjne' },
  { src: gallery90, category: 'Złoto' },
  { src: gallery91, category: 'Złoto' },
  { src: gallery92, category: 'Złoto' },
  { src: gallery93, category: 'Chrom' },
  { src: gallery94, category: 'Chrom' },
  { src: gallery95, category: 'Chrom' },
  { src: gallery96, category: 'Dekoracyjne' },
  { src: gallery97, category: 'Chrom' },
  { src: gallery98, category: 'Złoto' },
  { src: gallery99, category: 'Chrom' },
  { src: gallery100, category: 'Złoto' },
  { src: gallery101, category: 'Złoto' },
  { src: gallery102, category: 'Chrom' },
  { src: gallery103, category: 'Złoto' },
  { src: gallery104, category: 'Złoto' },
  { src: gallery105, category: 'Dekoracyjne' },
  { src: gallery106, category: 'Chrom' },
  { src: gallery107, category: 'Złoto' },
  { src: gallery108, category: 'Dekoracyjne' },
  { src: gallery109, category: 'Dekoracyjne' },
  { src: gallery110, category: 'Złoto' },
  { src: gallery111, category: 'Złoto' },
  { src: gallery112, category: 'Chrom' },
  { src: gallery113, category: 'Chrom' },
  { src: gallery114, category: 'Chrom' },
  { src: gallery115, category: 'Złoto' },
]

const categories = ['Wszystkie', 'Złoto', 'Chrom', 'Dekoracyjne']

// Masonry-like layout pattern for visual interest
const getGridSpan = (index: number) => {
  const pattern = [
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-2',
    'col-span-1 row-span-1',
    'col-span-2 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-2',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
  ]
  return pattern[index % pattern.length]
}

function GalleryPage({ lang = 'pl' as Lang }: { lang?: Lang }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState('Wszystkie')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    window.scrollTo(0, 0)

    // Dynamic SEO Metadata updates
    const originalTitle = document.title
    const originalDescription = document.querySelector('meta[name="description"]')?.getAttribute('content')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const originalOgTitle = ogTitle?.getAttribute('content')
    const ogDesc = document.querySelector('meta[property="og:description"]')
    const originalOgDesc = ogDesc?.getAttribute('content')
    
    // Must stay identical to SHELL_META['gallery'] in scripts/prerender.js —
    // otherwise the client overwrites the pre-rendered title Google indexed.
    const pageTitle = lang === 'pl'
      ? 'Galeria realizacji – metalizacja próżniowa | STANIAX'
      : lang === 'de'
      ? 'Projektgalerie – Vakuummetallisierung | STANIAX'
      : 'Project Gallery – Vacuum Metallization | STANIAX'
    const pageDesc = lang === 'pl'
      ? 'Galeria realizacji STANIAX: metalizacja próżniowa tworzyw sztucznych, powłoki lustrzane, lakierowanie szkła i detali oraz regeneracja odbłyśników.'
      : lang === 'de'
      ? 'STANIAX-Projektgalerie: Vakuummetallisierung von Kunststoffen, Spiegelbeschichtungen, Glas- und Detaillackierung sowie Reflektorregeneration.'
      : 'STANIAX project gallery: vacuum metallization of plastics, mirror coatings, glass and component painting, and reflector regeneration.'

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
    const canonicalUrl = `https://www.staniax.pl${lang === 'pl' ? '' : '/' + lang}/gallery`
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

  const filteredImages = activeCategory === 'Wszystkie'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = ''
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, filteredImages.length])

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gray-300/10 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-2xl">
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-12 py-5">
          <Link to="/" className="group flex items-center gap-3" aria-label="Powrót na stronę główną">
            <div className="leading-tight">
              <span className="block text-[10px] uppercase tracking-[0.4em] text-gray-500 font-medium">
                STANIAX
              </span>
              <span className="block text-xl font-black text-gray-900 tracking-tight">
                {lang === 'pl' ? 'Galeria' : lang === 'de' ? 'Galerie' : 'Gallery'}
              </span>
            </div>
          </Link>
          <Link
            to="/"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-100 hover:bg-gray-200 border border-gray-200 hover:border-blue-300 text-gray-900 font-medium rounded-full transition-all duration-500"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="hidden sm:inline">{lang === 'pl' ? 'Strona główna' : lang === 'de' ? 'Startseite' : 'Home page'}</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <Link
              to={lang === 'pl' ? '/news' : `/${lang}/news`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-8 transition-colors hover:bg-blue-200"
            >
              <Sparkle className="w-4 h-4 text-blue-600" weight="fill" />
              <span className="text-xs uppercase tracking-[0.3em] text-blue-700 font-semibold">{lang === 'pl' ? 'Nasze realizacje' : lang === 'de' ? 'Unsere Projekte' : 'Our projects'}</span>
            </Link>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 tracking-tighter mb-8 leading-[0.9]">
              <span className="block">{lang === 'pl' ? 'GALERIA ' : lang === 'de' ? 'GALERIE ' : 'PROJECTS '}</span>
              <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                {lang === 'pl' ? 'REALIZACJI' : lang === 'de' ? 'DER PROJEKTE' : 'GALLERY'}
              </span>
              <span className="mt-5 block text-xl font-semibold leading-snug tracking-tight text-gray-600 sm:text-2xl lg:text-3xl">
                {lang === 'pl'
                  ? 'Metalizacja próżniowa i lakierowanie tworzyw sztucznych'
                  : lang === 'de'
                    ? 'Vakuummetallisierung und Lackierung von Kunststoffen'
                    : 'Vacuum metallization and plastic coating'}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-500 max-w-2xl leading-relaxed font-light">
              <strong>{lang === 'pl' ? 'Galeria realizacji i projektów metalizacji' : lang === 'de' ? 'Galerie der Metallisierungsprojekte' : 'Gallery of Completed Projects and Metallization'}</strong> 
              {lang === 'pl' ? ' – odkryj perfekcję metalizacji próżniowej. Każdy projekt to unikalne połączenie precyzji inżynieryjnej i artystycznej wizji.' : 
               lang === 'de' ? ' – entdecken Sie die Perfektion der Vakuummetallisierung. Jedes Projekt ist eine einzigartige Kombination aus technischer Präzision und künstlerischer Vision.' :
               ' – discover the perfection of vacuum metallization. Each project is a unique combination of engineering precision and artistic vision.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12 sticky top-[85px] z-40 bg-gray-50/90 backdrop-blur-xl">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'relative px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-500 overflow-hidden',
                  activeCategory === category
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                )}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </motion.div>
          
          {/* Results count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-sm text-gray-400"
          >
            Wyświetlanie <span className="text-blue-700 font-semibold">{filteredImages.length}</span> realizacji
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid - Masonry Style */}
      <section className="pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[250px] lg:auto-rows-[300px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      duration: 0.5, 
                      delay: isLoaded ? index * 0.03 : 0,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className={cn(
                    'group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer',
                    getGridSpan(index)
                  )}
                  onClick={() => openLightbox(index)}
                >
                  {/* Image */}
                  <img
                    src={image.src}
                    alt={altFor(image, index, lang)}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                  
                  {/* Border glow */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-black/5 group-hover:ring-blue-400/30 transition-all duration-500" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-black/30" />
                      {image.category}
                    </span>
                    <p className="mt-3 text-white/80 text-sm font-medium hidden sm:block">{altFor(image, index, lang)}</p>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Sparkle className="w-4 h-4 text-blue-400" weight="fill" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/98 backdrop-blur-2xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Ambient glow from image */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-blue-500/5 rounded-full blur-[100px]" />
              </div>

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm group"
              aria-label="Zamknij"
            >
              <X className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/30 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm group"
              aria-label="Poprzednie zdjęcie"
            >
              <CaretLeft className="w-7 h-7 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/30 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm group"
              aria-label="Następne zdjęcie"
            >
              <CaretRight className="w-7 h-7 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>

            {/* Image Container */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              className="relative max-w-[90vw] max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImage].src}
                alt={altFor(filteredImages[selectedImage], selectedImage, lang)}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl shadow-black/50"
              />
              
              {/* Image info bar */}
              <div className="absolute -bottom-16 left-0 right-0 flex items-center justify-center gap-4">
                <span className="px-4 py-2 bg-blue-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  {filteredImages[selectedImage].category}
                </span>
                <span className="text-white/40 text-sm">
                  {altFor(filteredImages[selectedImage], selectedImage, lang)}
                </span>
              </div>
            </motion.div>

            {/* Counter & Progress */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6">
              <span className="text-white/40 text-sm font-mono">
                <span className="text-blue-400 font-bold">{String(selectedImage + 1).padStart(2, '0')}</span>
                <span className="mx-2">/</span>
                <span>{String(filteredImages.length).padStart(2, '0')}</span>
              </span>
              
              {/* Progress dots */}
              <div className="hidden sm:flex items-center gap-1.5">
                {filteredImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
                    className={cn(
                      'w-2 h-2 rounded-full transition-all duration-300',
                      selectedImage === index 
                        ? 'bg-blue-400 w-6' 
                        : 'bg-white/20 hover:bg-white/40'
                    )}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SEO Bottom Section for Text/Paragraphs and internal links */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 text-sm text-gray-500 space-y-4 max-w-4xl">
          <h2 className="text-lg font-semibold text-gray-900">
            {lang === 'pl' ? 'Nasze projekty i realizacje metalizacji próżniowej' :
             lang === 'de' ? 'Unsere Projekte und Vakuummetallisierungsarbeiten' : 
             'Our Projects and Vacuum Metallization Works'}
          </h2>
          <p>
            {lang === 'pl' ? 'W powyższej galerii prezentujemy wybrane realizacje z zakresu metalizacji próżniowej oraz malowania przemysłowego. Nasze powłoki lustrzane i dekoracyjne znajdują zastosowanie w różnorodnych projektach komercyjnych. Zobacz pełną ' : 
             lang === 'de' ? 'In der obigen Galerie präsentieren wir ausgewählte Projekte im Bereich der Vakuummetallisierung und industriellen Lackierung. Unsere Spiegel- und Dekorativbeschichtungen finden Anwendung in verschiedenen kommerziellen Projekten. Sehen Sie sich unser vollständiges ' :
             'In the gallery above, we present selected projects in the field of vacuum metallization and industrial painting. Our mirror and decorative coatings are used in various commercial projects. See our full '}
             <Link to={lang === 'pl' ? '/' : `/${lang}`} className="text-blue-600 hover:underline">{lang === 'pl' ? 'Ofertę na Stronie Głównej' : lang === 'de' ? 'Angebot auf der Startseite' : 'Offer on the Home Page'}</Link>
             {lang === 'pl' ? ', aby dowiedzieć się więcej o możliwościach technologicznych zakładu.' : 
              lang === 'de' ? ', um mehr über die technologischen Möglichkeiten des Werks zu erfahren.' :
              ', to learn more about the technological capabilities of the plant.'}
          </p>
          <p>
            {lang === 'pl' ? 'Każdy detal opuszczający nasz park maszynowy przechodzi rygorystyczne testy jakości. Odwiedź naszą sekcję ' : 
             lang === 'de' ? 'Jedes Detail, das unseren Maschinenpark verlässt, durchläuft strenge Qualitätstests. Besuchen Sie unseren Bereich ' :
             'Every detail leaving our machine park undergoes rigorous quality testing. Visit our section '}
             <Link to={lang === 'pl' ? '/news' : `/${lang}/news`} className="text-blue-600 hover:underline">{lang === 'pl' ? 'Aktualności' : lang === 'de' ? 'Aktuelles' : 'News'}</Link>
             {lang === 'pl' ? ', by przeczytać branżowe artykuły o procesach PVD i technologiach powłokowych.' : 
              lang === 'de' ? ', um Branchenartikel über PVD-Prozesse und Beschichtungstechnologien zu lesen.' :
              ', to read industry articles about PVD processes and coating technologies.'}
          </p>
        </div>
      </section>

      <BigFooter lang={lang} />
    </div>
  )
}

export default GalleryPage
