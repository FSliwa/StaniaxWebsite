import { useState, useEffect, useRef, useMemo, type CSSProperties, type ReactNode } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence, type MotionValue } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { ScrambleText } from '@/components/ui/ScrambleText'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CookieBanner } from '@/components/CookieBanner'
import { AnimatedSection } from '@/components/AnimatedSection'
import { VideoGalleryTransition } from '@/components/VideoGalleryTransition'
import { WhyStaniaxContent } from '@/components/WhyStaniaxContent'




import { MagneticButton } from '@/components/ui/MagneticButton'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { TiltCard } from '@/components/ui/TiltCard'
import { SmoothScroll } from '@/components/SmoothScroll'

import { BigFooter } from '@/components/BigFooter'
import { toast, Toaster } from 'sonner'
import { cn } from '@/lib/utils'
import {
  Factory,
  ArrowRight,
  Phone,
  Trophy,
  Shield,
  Clock,
  MapPin,
  EnvelopeSimple,
  ArrowUpRight,
  Robot,
  Flask,
  Gear,
  Target,
  Wrench,
  Users,
  Question,
  CaretDown,
  CaretUp
} from '@phosphor-icons/react'
import liquidGoldHandVideo from '@/assets/liquid-gold-hand.mp4'
import toroidAnimationVideo from '@/assets/toroid-animation.mp4'
import liquidMetalVideo from '@/assets/metallic-transformation-video.mp4'
import vinylTransformationVideo from '@/assets/vinyl-transformation.mp4'
import whyChooseVideo from '@/assets/Generowanie_Wideo_Produktowego_Dłoń_i_Mikrofon.mp4'
import serviceImg1 from '@/assets/482dc07a-e7ec-4a67-a180-35c9f97aa5e3.JPG'
import serviceImg2 from '@/assets/4b131dc0-12bf-4aee-bca5-bee6a42b2e68.JPG'
import serviceImg3 from '@/assets/688dc033-2f1e-4b6e-94e4-728b7278993a.JPG'
import projectImgAutomotive from '@/assets/IMG_0990-2575648632.jpeg'
import projectImgAerospace from '@/assets/airplane-04-1600x900.jpg'
import projectImgIndustrial from '@/assets/roboty-fabryka-590199267.jpg'
import projectImgPrototype from '@/assets/budowa-prototypow-maszyn-800914852.webp'
import automotiveBefore from '@/assets/automotive-before.jpeg'
import automotiveAfter from '@/assets/automotive-after.jpeg'
import industrialBefore from '@/assets/industrial-before.jpeg'
import industrialAfter from '@/assets/industrial-after.jpeg'

import packagingBefore from '@/assets/packaging-before.png'
import packagingAfter from '@/assets/packaging-after.png'

import whyChooseImg1 from '@/assets/Dlaczego Staniax V1.png'
import whyChooseImg2 from '@/assets/Dlaczego Staniax V2.png'
import whyChooseImg3 from '@/assets/Dlaczego Staniax V3.png'

import spinningMachineImg from '@/assets/spinning_machine.jpeg'
import colorfulPackagingImg from '@/assets/colorful_packaging.png'
import threeReflectorsImg from '@/assets/three_reflectors_1765869273944.png'
import affiliatedCompaniesImg from '@/assets/affiliated-companies.jpeg'
import vacuumMetalizationImg from '@/assets/vacuum-metalization.jpg'

const fallbackAnimationSrc = liquidGoldHandVideo


const statsSplineUrl =
  import.meta.env.VITE_STATS_SPLINE_URL ?? 'https://prod.spline.design/f8rjqRArLakUTPCP/scene.splinecode'
const newsSplineUrl =
  import.meta.env.VITE_NEWS_SPLINE_SCENE_URL ?? 'https://prod.spline.design/iK5Y6hn8ReGNIQ1J/scene.splinecode'
const virtualStudioFallbackSplineUrl =
  import.meta.env.VITE_VIRTUAL_STUDIO_SPLINE_URL ??
  'https://prod.spline.design/xk-PvTQqtoScZ5Zq/scene.splinecode'
const virtualStudioEmbedUrl =
  import.meta.env.VITE_VIRTUAL_STUDIO_SPLINE_EMBED_URL ?? 'undefined'

const languages = [
  { text: "Metalizacja próżniowa", flag: "🇵🇱", lang: "pl" },
  { text: "Vacuum Metallization", flag: "🇬🇧", lang: "en" },
  { text: "Vakuummetallisierung", flag: "🇩🇪", lang: "de" },
  { text: "Métallisation sous vide", flag: "🇫🇷", lang: "fr" },
  { text: "Metallizzazione sotto vuoto", flag: "🇮🇹", lang: "it" },
  { text: "Vacuümmetallisatie", flag: "🇳🇱", lang: "nl" }
]

type HomePageProps = {
  lang?: 'pl' | 'en' | 'de'
}

function RotatingText({ className }: { className?: string }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % languages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-[1.5em] overflow-visible relative inline-flex items-center gap-2 py-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="flex items-center gap-2 absolute top-0 left-0 whitespace-nowrap"
        >
          <span className="text-xl sm:text-2xl lg:text-3xl shadow-sm rounded-full overflow-hidden flex-shrink-0 opacity-90" role="img" aria-label={`Flag for ${languages[index].lang}`}>
            {languages[index].flag}
          </span>
          <span className={cn("text-2xl sm:text-3xl lg:text-4xl font-medium uppercase tracking-tighter", className)}>
            {languages[index].text}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

type NavItem =
  | { id: string; label: string; type: 'section' }
  | { id: string; label: string; type: 'route'; path: string }

const languageLinks = [
  { flag: "🇵🇱", lang: "pl", path: "/", label: "Polski" },
  { flag: "🇬🇧", lang: "en", path: "/en", label: "English" },
  { flag: "🇩🇪", lang: "de", path: "/de", label: "Deutsch" },
]

const navItems: NavItem[] = [
  { id: 'kim-jestesmy', label: 'O STANIAX', type: 'section' },
  { id: 'about', label: 'Oferta', type: 'section' },
  { id: 'projects', label: 'Realizacje', type: 'section' },
  { id: 'gallery', label: 'Galeria', type: 'route', path: '/gallery' },
  { id: 'news', label: 'Aktualności', type: 'route', path: '/news' },
  { id: 'contact', label: 'Kontakt', type: 'section' }
]

type ServiceItem = {
  id: string
  title: string
  description: string
  icon: ReactNode
  image: string
  alt: string
  tagline: string
  details?: {
    features: string[]
    applications: string[]
    advantages: string[]
  }
}

type ProjectItem = {
  id: string
  title: string
  icon: ReactNode
  image: string
  description: string
  details: string
  category: string
  year: string
}

type AboutTileConfig = {
  id: string
  image: string
  alt: string
  drift: number
  overlay: ReactNode
  overlayDelay?: number
  colSpan?: number
}

const servicesData: ServiceItem[] = [
  {
    id: 'vacuum-metallization',
    title: 'Metalizacja Próżniowa',
    description:
      'Zaawansowana technologia napylania próżniowego nadająca efekt chromu, złota i innych metali na różnych podłożach. Ekologiczna alternatywa dla chromowania.',
    icon: <Gear className="w-16 h-16 text-white/80 icon-welding-effect" />,
    image: serviceImg1,
    alt: 'Proces metalizacji próżniowej',
    tagline: 'Perfekcyjne powłoki metaliczne',
    details: {
      features: ['Napylanie aluminium, chromu, złota', 'Grubość powłoki 0.05-0.5 μm', 'Wysoki połysk lustrzany', 'Proces przyjazny środowisku'],
      applications: ['Elementy dekoracyjne samochodów', 'Opakowania kosmetyków', 'Reflektory i odbłyśniki', 'Gadżety reklamowe'],
      advantages: ['Efekt chromu bez użycia chromu', 'Niska emisja CO2', 'Możliwość metalizacji skomplikowanych kształtów', 'Krótki czas realizacji']
    }
  },
  {
    id: 'plastic-painting',
    title: 'Lakierowanie Tworzyw',
    description: 'Precyzyjne lakierowanie detali z tworzyw sztucznych. Oferujemy pełną gamę kolorów i wykończeń, od matu po wysoki połysk, z gwarancją trwałości.',
    icon: <Shield className="w-16 h-16 text-white/80 icon-welding-effect" />,
    image: serviceImg2,
    alt: 'Lakierowanie elementów z tworzyw sztucznych',
    tagline: 'Estetyka i Ochrona',
    details: {
      features: ['Lakiery UV, wodne i rozpuszczalnikowe', 'Efekty specjalne: perłowe, metaliczne', 'Wykończenia mat, półmat, połysk', 'Lakierowanie wielowarstwowe'],
      applications: ['Obudowy elektroniki', 'Elementy AGD', 'Części motoryzacyjne', 'Opakowania premium'],
      advantages: ['Odporność na zarysowania', 'Trwałość kolorów', 'Ochrona przed UV', 'Możliwość naprawy lokalnej']
    }
  },
  {
    id: 'glass-painting',
    title: 'Lakierowanie Szkła',
    description: 'Specjalistyczne lakierowanie szkła i ceramiki. Tworzymy unikalne efekty dekoracyjne, w tym przejścia tonalne i powłoki transparentne.',
    icon: <Flask className="w-16 h-16 text-white/80 icon-welding-effect" />,
    image: serviceImg3,
    alt: 'Lakierowanie butelek szklanych',
    tagline: 'Dekoracja Premium',
    details: {
      features: ['Lakiery organiczne i nieorganiczne', 'Efekty frosted i satynowe', 'Gradienty kolorystyczne', 'Powłoki hydrofobowe'],
      applications: ['Butelki perfum i kosmetyków', 'Flakoniki farmaceutyczne', 'Szkło dekoracyjne', 'Opakowania alkoholi premium'],
      advantages: ['Wyjątkowa estetyka', 'Odporność na zmywanie', 'Możliwość personalizacji', 'Zgodność z normami kosmetycznymi']
    }
  },
  {
    id: 'reflectors',
    title: 'Odblaski w Metalizacji',
    description: 'Produkcja wysokiej jakości odbłyśników i reflektorów. Metalizacja zapewniająca maksymalny współczynnik odbicia światła dla branży oświetleniowej i motoryzacyjnej.',
    icon: <Target className="w-16 h-16 text-white/80 icon-welding-effect" />,
    image: serviceImg1,
    alt: 'Metalizowane odbłyśniki',
    tagline: 'Maksymalna Refleksja',
    details: {
      features: ['Współczynnik odbicia >95%', 'Powłoki aluminiowe i srebrne', 'Warstwa ochronna lakierem', 'Precyzja geometryczna'],
      applications: ['Reflektory samochodowe', 'Oprawy oświetleniowe LED', 'Lampy przemysłowe', 'Systemy optyczne'],
      advantages: ['Maksymalna wydajność świetlna', 'Długa żywotność', 'Odporność termiczna', 'Zgodność z normami ECE']
    }
  }
]

const projectsData: ProjectItem[] = [
  {
    id: 'cosmetics',
    title: 'Opakowania Kosmetyczne',
    icon: <Gear className="w-16 h-16 mx-auto mb-2 opacity-90" />,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=800&fit=crop&crop=center',
    description: 'Metalizacja próżniowa opakowań i nakrętek dla branży kosmetycznej',
    details: 'Nadanie efektu chromu, złota i lustrzanego połysku na elementach opakowań kosmetycznych. Trwałe i estetyczne wykończenie premium.',
    category: 'Kosmetyka',
    year: '2024'
  },
  {
    id: 'packaging',
    title: 'Opakowania Dekoracyjne',
    icon: <Shield className="w-16 h-16 mx-auto mb-2 opacity-90" />,
    image: projectImgAerospace,
    description: 'Lakierowanie i metalizacja elementów opakowań premium',
    details: 'Metalizacja próżniowa i lakierowanie opakowań z tworzyw sztucznych — nakrętki, butelki, zamknięcia. Efekty lustrzane, matowe i kolorowe.',
    category: 'Opakowania',
    year: '2024'
  },
  {
    id: 'decorations',
    title: 'Elementy Dekoracyjne',
    icon: <Target className="w-16 h-16 mx-auto mb-2 opacity-90" />,
    image: projectImgAutomotive,
    description: 'Metalizacja i lakierowanie elementów wystroju wnętrz',
    details: 'Efekty chromu, złota i srebra na detalach dekoracyjnych z tworzyw sztucznych. Realizacje dla branży wyposażenia wnętrz i oświetlenia.',
    category: 'Dekoracje',
    year: '2024'
  },
  {
    id: 'automotive',
    title: 'Detale Motoryzacyjne',
    icon: <Wrench className="w-16 h-16 mx-auto mb-2 opacity-90" />,
    image: projectImgIndustrial,
    description: 'Metalizacja elementów wykończeniowych pojazdów',
    details: 'Elementy wykończeniowe, listwy, emblematy i komponenty wnętrz pojazdów z efektem metalu. Odporność na warunki eksploatacji.',
    category: 'Motoryzacja',
    year: '2024'
  },
  {
    id: 'glass',
    title: 'Szkło i Ceramika',
    icon: <Factory className="w-16 h-16 mx-auto mb-2 opacity-90" />,
    image: serviceImg2,
    description: 'Lakierowanie szkła i ceramiki dla efektów dekoracyjnych',
    details: 'Lakierowanie butelek, flakonów i elementów ceramicznych. Efekty frosted, satynowe, kolorowe gradienty.',
    category: 'Szkło',
    year: '2024'
  },
  {
    id: 'reflectors',
    title: 'Odblaski i Reflektory',
    icon: <Trophy className="w-16 h-16 mx-auto mb-2 opacity-90" />,
    image: projectImgPrototype,
    description: 'Metalizacja próżniowa reflektorów i elementów odblaskowych',
    details: 'Wysokiej jakości powłoki odblaskowe na reflektorach, kloszach lamp i elementach oświetleniowych.',
    category: 'Odblaski',
    year: '2024'
  }
]

// CASE STUDIES DATA for Carousel
type CaseStudy = {
  id: string
  title: string
  subtitle: string
  imageBefore: string
  imageAfter: string
  metrics: Array<{ value: string; label: string }>
  badge: string
}

const caseStudiesData: CaseStudy[] = [
  {
    id: 'cosmetics-packaging',
    title: 'Opakowania Kosmetyczne',
    subtitle: 'Metalizacja próżniowa opakowań kosmetycznych — efekt złota, srebra i chromu na nakrętkach, butelkach i słoiczkach',
    imageBefore: automotiveAfter,
    imageAfter: automotiveBefore,
    metrics: [
      { value: '2 mln+', label: 'Sztuk/Rok' },
      { value: '100%', label: 'Powtarzalność' }
    ],
    badge: 'Efekt Premium'
  },
  {
    id: 'decorative-elements',
    title: 'Elementy Dekoracyjne',
    subtitle: 'Powłoki dekoracyjne na detalach meblowych, oświetleniowych i architektonicznych — trwały efekt lustrzany',
    imageBefore: packagingAfter,
    imageAfter: packagingBefore,
    metrics: [
      { value: '30+', label: 'Lat doświadczenia' },
      { value: '500+', label: 'Projektów' },
      { value: 'Premium', label: 'Jakość' }
    ],
    badge: 'Efekt Lustrzany'
  },
  {
    id: 'automotive-parts',
    title: 'Detale Motoryzacyjne',
    subtitle: 'Metalizacja próżniowa reflektorów, elementów wykończeniowych i komponentów motoryzacyjnych',
    imageBefore: industrialAfter,
    imageAfter: industrialBefore,
    metrics: [
      { value: '100%', label: 'Kontrola jakości' },
      { value: '10K+', label: 'Detali/msc' },
      { value: '0', label: 'Reklamacji' }
    ],
    badge: 'Najwyższa Jakość'
  }
]

// BRAND SHOWCASE DATA - Trusted Companies & Certifications
const brandShowcaseData = [
  { name: 'Kosmetyka', logo: 'KOSM' },
  { name: 'Opakowania', logo: 'OPAK' },
  { name: 'Motoryzacja', logo: 'MOTO' },
  { name: 'Oświetlenie', logo: 'OŚWT' },
  { name: 'Dekoracje', logo: 'DEKO' },
  { name: 'Szkło', logo: 'SZKŁ' },
  { name: 'Ceramika', logo: 'CERA' }
]

// TECH SPECS DATA - Interactive Comparison Table
type TechSpec = {
  id: string
  method: string
  temperature: string
  thickness: string
  applications: string
  advantages: string[]
  materials: string
}

const techSpecsData: TechSpec[] = [
  {
    id: 'metalizacja',
    method: 'Metalizacja Próżniowa',
    temperature: '200-500°C',
    thickness: '0.05-0.5 μm',
    applications: 'Nakrętki, opakowania, reflektory, elementy dekoracyjne',
    advantages: [
      'Efekt chromu i złota',
      'Ekologiczny proces',
      'Lustrzany połysk',
      'Wysoka powtarzalność'
    ],
    materials: 'Al, Cr, Au, Ag'
  },
  {
    id: 'lakierowanie-tworzyw',
    method: 'Lakierowanie Tworzyw',
    temperature: '20-80°C',
    thickness: '20-100 μm',
    applications: 'Opakowania kosmetyczne, elementy dekoracyjne, detale motoryzacyjne',
    advantages: [
      'Szeroka paleta kolorów',
      'Efekty specjalne',
      'Odporność na zarysowania',
      'Trwałość wykończenia'
    ],
    materials: 'Lakiery UV, wodne, rozpuszczalnikowe'
  },
  {
    id: 'lakierowanie-szkla',
    method: 'Lakierowanie Szkła',
    temperature: '150-200°C',
    thickness: '10-50 μm',
    applications: 'Butelki, flakony, elementy ceramiczne, szkło dekoracyjne',
    advantages: [
      'Efekty frosted i satynowe',
      'Gradienty kolorystyczne',
      'Odporność na zmywanie',
      'Zgodność z normami kosmetycznymi'
    ],
    materials: 'Lakiery organiczne, nieorganiczne'
  },
  {
    id: 'odblaski',
    method: 'Odblaski w Metalizacji',
    temperature: '200-400°C',
    thickness: '0.1-1 μm',
    applications: 'Reflektory, klosze lamp, elementy oświetleniowe',
    advantages: [
      'Współczynnik odbicia >95%',
      'Wysoka trwałość',
      'Odporność termiczna',
      'Precyzja geometryczna'
    ],
    materials: 'Al, Ag + warstwa ochronna'
  }
]

const aboutTilesData: AboutTileConfig[] = [
  {
    id: 'tile-lab',
    image: serviceImg1,
    alt: 'Naukowiec w laboratorium badawczym',
    drift: -3,
    overlay: <Flask className="w-12 h-12 text-white/80" />,
    overlayDelay: 0.15
  },
  {
    id: 'tile-shield',
    image: serviceImg2,
    alt: 'Kontrola jakości metalowej powierzchni',
    drift: 3,
    overlay: <Shield className="w-12 h-12 text-white/80" />,
    overlayDelay: 0.1
  },
  {
    id: 'tile-factory',
    image: serviceImg3,
    alt: 'Wnętrze hali produkcyjnej STANIAX',
    drift: 5,
    overlay: (
      <div className="text-center text-white">
        <Factory className="w-16 h-16 mx-auto mb-3 opacity-90" />
        <p className="text-sm font-bold uppercase tracking-widest">Nowoczesny Park Maszynowy</p>
      </div>
    ),
    colSpan: 3,
    overlayDelay: 0.25
  }
]

// FAQ DATA
type FAQItem = {
  id: string
  question: string
  answer: string
  category: 'process' | 'technology' | 'business'
}

const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Jak przygotować projekt do metalizacji?',
    answer: 'Przygotowanie projektu wymaga: 1) Dostarczenia rysunków technicznych lub modeli 3D, 2) Określenia wymagań dotyczących grubości powłoki i właściwości, 3) Wskazania obszarów krytycznych wymagających szczególnej ochrony, 4) Informacji o warunkach eksploatacji elementu.',
    category: 'process'
  },
  {
    id: 'faq-2',
    question: 'Jaką technologię metalizacji wybrać dla mojego projektu?',
    answer: 'Wybór zależy od zastosowania: dla opakowań kosmetycznych polecamy powłoki złote i chromowe zapewniające efekt premium, dla elementów motoryzacyjnych - metalizację aluminium o wysokiej odporności, dla detali dekoracyjnych - powłoki lustrzane i satynowe. Nasz zespół pomoże dobrać optymalne rozwiązanie.',
    category: 'technology'
  },
  {
    id: 'faq-3',
    question: 'Jaki jest minimalny czas realizacji zamówienia?',
    answer: 'Standardowy czas realizacji to 5-10 dni roboczych dla projektów produkcyjnych. Dla prototypów oferujemy tryb ekspresowy 2-3 dni. Dokładny czas zależy od złożoności projektu, ilości elementów i wybranej technologii.',
    category: 'business'
  },
  {
    id: 'faq-4',
    question: 'Czy metalizacja zwiększa trwałość elementów?',
    answer: 'Tak, metalizacja znacząco zwiększa trwałość - powłoki metaliczne podnoszą odporność na ścieranie o 200-400%, zabezpieczają przed korozją, zwiększają twardość powierzchni i mogą przedłużyć żywotność elementów nawet o 300%.',
    category: 'technology'
  },
  {
    id: 'faq-5',
    question: 'Jakie materiały mogą być metalizowane?',
    answer: 'Metalizować możemy większość materiałów inżynieryjnych: stale narzędziowe, stale nierdzewne, aluminium, miedź, tytan, ceramikę techniczną, a także wybrane tworzywa sztuczne po odpowiednim przygotowaniu powierzchni.',
    category: 'process'
  },
  {
    id: 'faq-6',
    question: 'Czy oferujecie certyfikaty jakości?',
    answer: 'Do każdego zamówienia dołączamy protokół kontroli jakości z pomiarami grubości powłoki, adhezji i innych parametrów. Dla branży lotniczej i medycznej oferujemy dodatkową dokumentację zgodną z wymaganiami sektorowymi.',
    category: 'business'
  }
]

type AboutTileMotionProps = {
  config: AboutTileConfig
  scrollProgress: MotionValue<number>
  prefersReducedMotion: boolean
}

function AboutTileMotion({ config, scrollProgress, prefersReducedMotion }: AboutTileMotionProps) {
  const translateY = useTransform(scrollProgress, [0, 1], [0, config.drift])

  if (prefersReducedMotion) {
    return (
      <IndustrialImage
        src={config.image}
        alt={config.alt}
        className={config.colSpan === 3 ? 'aspect-[3/2] col-span-3' : config.colSpan === 2 ? 'aspect-[2/1] col-span-2' : 'aspect-square'}
      >
        {config.overlay}
      </IndustrialImage>
    )
  }

  return (
    <motion.div
      className={config.colSpan === 3 ? 'col-span-3 aspect-[3/2]' : config.colSpan === 2 ? 'col-span-2 aspect-[2/1]' : 'aspect-square'}
      style={{ y: translateY, willChange: 'transform' }}
    >
      <IndustrialImage src={config.image} alt={config.alt} className="h-full w-full">
        <motion.div
          className="flex h-full items-center justify-center"
          initial={{ opacity: 0.35 }}
          whileInView={{ opacity: [0.4, 0.85, 0.4] }}
          transition={{ delay: config.overlayDelay ?? 0, duration: 4, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
          viewport={{ once: false, amount: 0.6 }}
          style={{ willChange: 'opacity' }}
        >
          {config.overlay}
        </motion.div>
      </IndustrialImage>
    </motion.div>
  )
}

type IndustrialImageProps = {
  src?: string
  alt: string
  className?: string
  children?: ReactNode
  variant?: 'image' | 'graphic'
  style?: CSSProperties
}

function IndustrialImage({ src, alt, className, children, variant = 'image', style }: IndustrialImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className ?? ''}`}>
      {variant === 'image' && src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="w-full h-full"
          style={style}
        />
      )}
      {children && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  )
}

type CountUpProps = {
  end: number
  duration?: number
  suffix?: string
  shouldStart: boolean
}

function CountUp({ end, duration = 2000, suffix = '', shouldStart }: CountUpProps) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!shouldStart || hasStarted) return

    setHasStarted(true)
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function (easeOutCubic)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [shouldStart, end, duration, hasStarted])

  return <span>{count}{suffix}</span>
}

function HomePage({ lang = 'pl' }: HomePageProps) {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState(0)
  const isTransitioning = useRef(false)
  const [headerTheme, setHeaderTheme] = useState<'light' | 'dark'>('dark')
  const hasNewsSpline = Boolean(newsSplineUrl && newsSplineUrl !== 'undefined')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [activeService, setActiveService] = useState<string>(servicesData[0]?.id ?? '')
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false)
  const projectsSectionRef = useRef<HTMLDivElement | null>(null)
  const projectCardsRef = useRef<HTMLDivElement[]>([])
  const [focusedProjectId, setFocusedProjectId] = useState<string | null>(null)
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const aboutMosaicRef = useRef<HTMLDivElement | null>(null)
  const newsAnimationRef = useRef<HTMLDivElement | null>(null)
  const [newsSplineKey, setNewsSplineKey] = useState(0)
  const prefersReducedMotion = useReducedMotion() ?? false
  const [splineStatus, setSplineStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle')
  const servicesSectionRef = useRef<HTMLDivElement | null>(null)



  // NEW: Animation states
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)
  const metricsRef = useRef<HTMLDivElement | null>(null)
  const [metricsVisible, setMetricsVisible] = useState(false)

  // Vibor.it Style: Wavy Line
  const [wavyLineVisible, setWavyLineVisible] = useState(false)
  const [wavyLinePath, setWavyLinePath] = useState('')
  const wavyLineContainerRef = useRef<HTMLDivElement | null>(null)

  // CASE STUDIES CAROUSEL STATE
  const [activeSlide, setActiveSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [beforeAfterSlider, setBeforeAfterSlider] = useState(50) // percentage for before/after slider

  // HERO VIDEO CAROUSEL STATE
  const [activeHeroVideo, setActiveHeroVideo] = useState(0)
  const heroVideos = useMemo(() => [liquidGoldHandVideo, toroidAnimationVideo, liquidMetalVideo, vinylTransformationVideo], [])
  const heroVideoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // MOBILE FLOATING CTA STATE
  const [showFloatingCTA, setShowFloatingCTA] = useState(false)

  // SCROLL TO TOP BUTTON STATE
  const [showScrollTop, setShowScrollTop] = useState(false)

  // FAQ ACCORDION STATE
  const [expandedFAQs, setExpandedFAQs] = useState<Set<string>>(new Set())

  // TECH SPECS TABLE STATE
  const [selectedFilter, setSelectedFilter] = useState<string>('all')
  const [compareMode, setCompareMode] = useState(false)
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([])
  const [expandedRow, setExpandedRow] = useState<string | null>(null)

  // SMART CONTACT FORM STATE
  const [formStep, setFormStep] = useState(1)
  const [smartFormData, setSmartFormData] = useState({
    projectType: '',
    technology: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    file: null as File | null
  })

  // STICKY SIDE NAVIGATION STATE
  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const sectionIds = ['top', 'metrics', 'about', 'projects', 'contact']

  const isSplineReady = splineStatus === 'ready'
  const shouldRenderNewsSpline = !prefersReducedMotion && hasNewsSpline && isSplineReady
  const shouldRenderNewsVideoFallback = !prefersReducedMotion && (!hasNewsSpline || splineStatus !== 'ready')
  const shouldRenderNewsReducedMotionNotice = prefersReducedMotion

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      // Calculate scroll progress for progress bar
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollableDistance = documentHeight - windowHeight
      const progress = (currentScrollY / scrollableDistance) * 100
      setScrollProgress(progress)

      // Show floating CTA on mobile after scrolling past hero section
      const heroSection = document.getElementById('top')
      if (heroSection && window.innerWidth < 640) { // sm breakpoint
        const heroBottom = heroSection.getBoundingClientRect().bottom
        setShowFloatingCTA(heroBottom < 100)
      } else {
        setShowFloatingCTA(false)
      }

      // Show scroll-to-top button after scrolling 300px
      setShowScrollTop(currentScrollY > 300)

      // Wavy Line Visibility (shows from metrics section onwards)
      const metricsSection = document.getElementById('metrics')
      if (metricsSection) {
        const metricsSectionTop = metricsSection.getBoundingClientRect().top
        setWavyLineVisible(metricsSectionTop <= windowHeight * 0.5)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return
    const body = document.body
    if (isMenuOpen) {
      body.classList.add('overflow-hidden')
    } else {
      body.classList.remove('overflow-hidden')
    }
    return () => body.classList.remove('overflow-hidden')
  }, [isMenuOpen])

  // Desktop detection
  useEffect(() => {
    if (typeof window === 'undefined') return

    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)

    return () => {
      window.removeEventListener('resize', checkDesktop)
    }
  }, [])

  // Auto-play carousel for case studies
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % caseStudiesData.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Auto-play carousel for hero videos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeroVideo((prev) => (prev + 1) % heroVideos.length)
    }, 7000) // Change video every 7 seconds

    return () => clearInterval(interval)
  }, [heroVideos.length])

  // Restart video from beginning when it becomes active
  useEffect(() => {
    const currentVideo = heroVideoRefs.current[activeHeroVideo]
    if (currentVideo) {
      currentVideo.currentTime = 0
      currentVideo.play().catch(() => {
        // Ignore autoplay errors
      })
    }
  }, [activeHeroVideo])

  // Sticky Side Navigation - Track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.4,
      rootMargin: '-20% 0px -20% 0px'
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionIds.indexOf(entry.target.id)
          if (index !== -1) {
            setActiveSectionIndex(index)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  // Intersection Observer for Metrics Section (Counter Animation)
  useEffect(() => {
    if (!metricsRef.current || prefersReducedMotion) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !metricsVisible) {
            setMetricsVisible(true)
          }
        })
      },
      {
        root: null,
        threshold: 0.3,
        rootMargin: '0px'
      }
    )

    observer.observe(metricsRef.current)

    return () => {
      observer.disconnect()
    }
  }, [metricsVisible, prefersReducedMotion])

  // Wavy Line Path Generation
  useEffect(() => {
    if (!wavyLineContainerRef.current || prefersReducedMotion) return

    const generateWavyPath = () => {
      const container = wavyLineContainerRef.current
      if (!container) return ''

      const height = container.offsetHeight
      const amplitude = 15 // Wave amplitude
      const frequency = 0.01 // Wave frequency

      let path = 'M 0 0'
      for (let y = 0; y <= height; y += 5) {
        const x = Math.sin(y * frequency) * amplitude
        path += ` L ${x} ${y}`
      }

      return path
    }

    const updatePath = () => {
      setWavyLinePath(generateWavyPath())
    }

    updatePath()
    window.addEventListener('resize', updatePath)

    return () => window.removeEventListener('resize', updatePath)
  }, [prefersReducedMotion])

  useEffect(() => {
    if (typeof window === 'undefined') return

    let isMounted = true
    const scriptId = 'spline-viewer-script'
    const markReady = () => {
      if (!isMounted) return
      setSplineStatus('ready')
    }
    const markError = () => {
      if (!isMounted) return
      setSplineStatus('error')
      toast.error('Nie udało się wczytać animacji 3D')
    }
    const waitForDefinition = () => {
      if (!('customElements' in window)) {
        markError()
        return
      }
      setSplineStatus((prev) => (prev === 'ready' ? prev : 'loading'))
      window.customElements
        .whenDefined('spline-viewer')
        .then(markReady)
        .catch(markError)
    }

    if ('customElements' in window && window.customElements.get('spline-viewer')) {
      markReady()
      return () => {
        isMounted = false
      }
    }

    let script = document.getElementById(scriptId) as HTMLScriptElement | null
    const handleScriptLoad = () => {
      if (!isMounted) return
      script?.setAttribute('data-loaded', 'true')
      waitForDefinition()
    }
    const handleScriptError = () => {
      if (!isMounted) return
      markError()
    }

    if (script) {
      if (script.dataset.loaded === 'true') {
        waitForDefinition()
      } else {
        setSplineStatus('loading')
        script.addEventListener('load', handleScriptLoad)
        script.addEventListener('error', handleScriptError)
      }
    } else {
      setSplineStatus('loading')
      script = document.createElement('script')
      script.id = scriptId
      script.type = 'module'
      script.src = 'https://unpkg.com/@splinetool/viewer@1.10.77/build/spline-viewer.js'
      script.addEventListener('load', handleScriptLoad)
      script.addEventListener('error', handleScriptError)
      document.head.appendChild(script)
    }

    return () => {
      isMounted = false
      script?.removeEventListener('load', handleScriptLoad)
      script?.removeEventListener('error', handleScriptError)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      projectCardsRef.current.forEach((card) => {
        if (card) {
          card.style.opacity = '1'
          card.style.transform = 'none'
        }
      })
      return
    }

    let ctx: gsap.Context | undefined
    let isMounted = true

      ; (async () => {
        const [{ gsap: gsapInstance }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')])
        if (!isMounted) return

        gsapInstance.registerPlugin(ScrollTrigger)

        ctx = gsapInstance.context(() => {
          const cards = projectCardsRef.current.filter((card): card is HTMLDivElement => Boolean(card))
          if (!cards.length) return

          gsapInstance.set(cards, { opacity: 0, y: 16, scale: 0.96 })
          gsapInstance.to(cards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: projectsSectionRef.current,
              start: 'top 75%',
              once: true
            }
          })
        }, projectsSectionRef)
      })()

    return () => {
      isMounted = false
      ctx?.revert()
    }
  }, [])

  useEffect(() => {
    const sectionIds = ['top', 'video-gallery', 'why-staniax', 'footer', ...navItems.filter((item) => item.type === 'section').map((item) => item.id)]

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting && entry.intersectionRatio > 0.1)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible && visible.target instanceof HTMLElement) {
          const theme = visible.target.dataset.theme === 'dark' ? 'dark' : 'light'
          setHeaderTheme((prev) => (prev === theme ? prev : theme))
        }
      },
      {
        root: null,
        threshold: [0.1, 0.2, 0.3, 0.5, 0.7],
        rootMargin: '-80px 0px -60% 0px'
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!newsAnimationRef.current || prefersReducedMotion) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Restart animacji Spline poprzez zmianę klucza (wymusza przeładowanie)
            setNewsSplineKey((prev) => prev + 1)
          }
        })
      },
      {
        root: null,
        threshold: 0.3,
        rootMargin: '0px'
      }
    )

    observer.observe(newsAnimationRef.current)

    return () => {
      observer.disconnect()
    }
  }, [prefersReducedMotion])

  useEffect(() => {
    if (typeof window === 'undefined' || !servicesSectionRef.current) return

    const section = servicesSectionRef.current
    const sparkleContainer = section.querySelector('#sparkle-container') as HTMLElement

    if (!sparkleContainer) return

    const handleMouseMove = (e: MouseEvent) => {
      // Generuj kilka iskier jednocześnie dla efektu spawania
      const sparkCount = Math.floor(Math.random() * 3) + 1

      for (let i = 0; i < sparkCount; i++) {
        if (Math.random() > 0.7) continue // Ogranicza gęstość

        const sparkle = document.createElement('div')

        // Losowy kolor iskry
        const colors = ['sparkle-white', 'sparkle-yellow', 'sparkle-orange']
        const colorClass = colors[Math.floor(Math.random() * colors.length)]
        sparkle.className = `sparkle ${colorClass}`

        // Większe iskry na początku
        const size = Math.random() * 4 + 1 // od 1px do 5px
        sparkle.style.width = `${size}px`
        sparkle.style.height = `${size}px`

        // Pozycja względem sekcji
        const rect = section.getBoundingClientRect()
        sparkle.style.left = `${e.clientX - rect.left + (Math.random() - 0.5) * 10}px`
        sparkle.style.top = `${e.clientY - rect.top + (Math.random() - 0.5) * 10}px`

        // Iskry lecą głównie w dół z lekkim rozrzutem na boki
        const dx = (Math.random() - 0.5) * 60 // Ruch na boki
        const dy = Math.random() * 80 + 40 // Głównie w dół (40-120px)
        sparkle.style.setProperty('--dx', `${dx}px`)
        sparkle.style.setProperty('--dy', `${dy}px`)

        sparkleContainer.appendChild(sparkle)

        sparkle.addEventListener('animationend', () => {
          sparkle.remove()
        })
      }
    }

    section.addEventListener('mousemove', handleMouseMove)

    return () => {
      section.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Removed conflicting wheel event listener to allow natural scrolling with Lenis

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      // Try to use Lenis if available for smooth scrolling
      const lenis = (window as any).lenis
      if (lenis) {
        lenis.scrollTo(section, {
          offset: -80, // Offset for header
          duration: 0.3,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        })
      } else {
        // Fallback to native smooth scroll
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  // Confetti animation
  const triggerConfetti = () => {
    const colors = ['#1d4ed8', '#3b82f6', '#60a5fa', '#93c5fd']
    const confettiCount = 50

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div')
      confetti.className = 'confetti'
      confetti.style.left = Math.random() * 100 + 'vw'
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
      confetti.style.animationDelay = Math.random() * 0.5 + 's'
      confetti.style.animationDuration = 2 + Math.random() * 2 + 's'
      document.body.appendChild(confetti)

      setTimeout(() => confetti.remove(), 4000)
    }
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast.error('Proszę wypełnić wszystkie wymagane pola')
      return
    }

    triggerConfetti()
    toast.success('Dziękujemy za wiadomość! Skontaktujemy się z Państwem wkrótce.')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const newsScaleValue = useMemo(() => {
    if (!newsAnimationRef.current) return 1

    const rect = newsAnimationRef.current.getBoundingClientRect()
    const elementTop = scrollY + rect.top
    const viewportHeight = window.innerHeight

    // Rozpocznij skalowanie gdy sekcja wchodzi w viewport
    const scrollStart = elementTop - viewportHeight
    const scrollProgress = Math.max(0, scrollY - scrollStart)

    return Math.min(1.0 + scrollProgress * 0.0003, 1.15)
  }, [scrollY])
  const isDarkHeaderContext = headerTheme === 'dark'

  // Menu classes - White text on dark background for better visibility
  const menuBackgroundClass = 'bg-slate-950/95 text-white'
  const menuMutedClass = 'text-white/70'
  const menuBorderClass = 'border-white/20'
  const menuButtonClass = 'border-white/20 text-white hover:bg-white hover:text-slate-950'
  const menuPrimaryTextClass = 'text-white'
  const menuIconClass = 'text-white/70'

  const handleNavClick = (item: NavItem) => {
    if (item.type === 'section') {
      scrollToSection(item.id)
    } else {
      navigate(item.path)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white selection:bg-blue-500/30">
        {/* Scroll Progress Bar */}
        <div
          className="scroll-progress"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        {/* STICKY SIDE NAVIGATION REMOVED */}

        {/* Progress Line "Laser" */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-[110] origin-left"
          style={{ scaleX: scrollProgress / 100 }}
        />

        <Toaster position="top-right" richColors />

        <header
          className={cn(
            'fixed top-0 w-full transition-all duration-500',
            isMenuOpen ? 'z-[100]' : 'z-50',
            scrollY > 32
              ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-[0_15px_60px_rgba(15,23,42,0.18)]'
              : 'bg-transparent border-transparent'
          )}
        >
          <div
            className={cn(
              'w-full flex items-center justify-between py-4 sm:py-5 transition-colors duration-300',
              'px-6 lg:px-24 xl:px-36',
              isMenuOpen
                ? 'text-foreground'
                : scrollY > 32
                  ? 'text-foreground'
                  : isDarkHeaderContext
                    ? 'text-white'
                    : 'text-foreground'
            )}
          >
            <button
              onClick={() => scrollToSection('top')}
              className="group flex flex-col items-start text-left"
              aria-label="Przewiń na górę"
            >
              <span
                className={cn(
                  'block text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter transition-colors duration-500',
                  isMenuOpen
                    ? 'text-slate-700'
                    : isDarkHeaderContext
                      ? 'text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]'
                      : scrollY > 32
                        ? 'text-blue-900/85'
                        : 'text-slate-700/90'
                )}
              >
                STANIAX
              </span>
              <div className="h-8 overflow-visible relative w-full flex items-center min-w-[220px] -mt-1">
                <div className="flex items-center gap-2">
                  {languageLinks.map((l) => (
                    <Link
                      key={l.lang}
                      to={l.path}
                      aria-label={l.label}
                      className={cn(
                        'text-xl sm:text-2xl rounded-full transition-all duration-300 hover:scale-125',
                        lang === l.lang ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-90'
                      )}
                    >
                      {l.flag}
                    </Link>
                  ))}
                </div>
              </div>
            </button>
            <div className="flex items-center gap-5">
                <Button
                onClick={() => scrollToSection('contact')}
                className={cn(
                  'hidden sm:inline-flex border-2 transition-all duration-500 text-base font-bold px-6 h-12',
                  isMenuOpen
                    ? 'border-foreground/15 text-foreground bg-transparent hover:bg-foreground hover:text-background'
                    : isDarkHeaderContext
                      ? 'border-white/40 text-white bg-transparent hover:bg-white hover:text-foreground'
                      : scrollY > 32
                        ? 'border-blue-900/30 text-blue-900/85 bg-transparent hover:bg-blue-900 hover:text-white'
                        : 'border-slate-900 text-slate-900 bg-white shadow-lg hover:bg-slate-900 hover:text-white'
                )}
              >
                Kontakt
              </Button>
              <button
                className={cn(
                  'relative h-11 w-11 sm:h-14 sm:w-14 rounded-full border-2 backdrop-blur-md flex items-center justify-center transition-all duration-500',
                  isMenuOpen
                    ? 'border-foreground/30 bg-background text-foreground'
                    : isDarkHeaderContext
                      ? 'border-white/30 bg-white/10 text-white hover:border-white/60'
                      : scrollY > 32
                        ? 'border-blue-900/20 bg-white/70 text-blue-900/85 hover:border-blue-900/40'
                        : 'border-slate-900 bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow-lg'
                )}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Przełącz nawigację"
                aria-expanded={isMenuOpen}
              >
                <span
                  className={cn(
                    'absolute h-0.5 w-6 sm:w-7 rounded-full bg-current transition-all duration-300',
                    isMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'
                  )}
                />
                <span
                  className={cn(
                    'absolute h-0.5 w-4 sm:w-5 rounded-full bg-current transition-all duration-300',
                    isMenuOpen ? 'w-6 sm:w-7 translate-y-0 -rotate-45' : 'translate-y-1.5'
                  )}
                />
              </button>
            </div>
          </div>
        </header>

        {/* Backdrop - OUTSIDE header */}
        <div
          className={cn(
            'fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300',
            isMenuOpen ? 'pointer-events-auto opacity-100 z-[110]' : 'pointer-events-none opacity-0 z-[-1]'
          )}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden={!isMenuOpen}
        />

        {/* Side Menu - Slide-in from Right - OUTSIDE header */}
        <div
          className={cn(
            'fixed inset-y-0 right-0 w-full max-w-md transform transition-transform duration-500 ease-in-out z-[120] overflow-y-auto',
            menuBackgroundClass,
            'backdrop-blur-2xl border-l border-white/10',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
          aria-hidden={!isMenuOpen}
        >
          <div className="flex h-full flex-col justify-between px-6 py-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className={cn('text-xs uppercase tracking-[0.6em]', menuMutedClass)}>Nawigacja</p>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Zamknij menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-8">
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={cn(
                      'group flex items-center w-full text-left py-3 px-4 rounded-lg transition-all duration-300 hover:bg-white/10',
                      menuPrimaryTextClass
                    )}
                  >
                    <span className="text-lg font-semibold leading-none tracking-tight transition-all duration-300 group-hover:text-accent">
                      {item.label}
                    </span>
                    <ArrowRight className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </nav>

              <div className="pt-6 border-t border-white/10" />
            </div>

            <div className="space-y-6">
              <div>
                <p className={cn('text-xs uppercase tracking-[0.6em]', menuMutedClass)}>Kontakt</p>
                <div className={cn('mt-3 space-y-1 text-sm font-medium', menuPrimaryTextClass)}>
                  <p>Grzybowska 5A</p>
                  <p>00-132 Warszawa</p>
                </div>
              </div>
              <div>
                <p className={cn('text-xs uppercase tracking-[0.6em]', menuMutedClass)}>Szybkie linki</p>
                <div className={cn('mt-3 flex flex-wrap gap-3 text-sm font-medium', menuMutedClass)}>
                  <button onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }} className="transition-colors duration-200 hover:text-accent">Studio</button>
                  <button onClick={() => { scrollToSection('projects'); setIsMenuOpen(false); }} className="transition-colors duration-200 hover:text-accent">Projekty</button>
                  <button onClick={() => { scrollToSection('kim-jestesmy'); setIsMenuOpen(false); }} className="transition-colors duration-200 hover:text-accent">O nas</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HERO & GALLERY SECTION (Seamless Transition) */}
        <section id="video-gallery" data-theme="light">
          <VideoGalleryTransition />
        </section>

        {/* FEATURE HIGHLIGHT (Parallax Reveal) */}
        <section id="why-staniax" data-theme="light">
          <WhyStaniaxContent />
        </section>










        {/* Sekcja Liczb/Metryk - Trust Indicators z Stagger Reveal */}
        {/* Sekcja Liczb/Metryk - Trust Indicators z Stagger Reveal */}
        <section ref={metricsRef} id="metrics" data-theme="light" className="relative py-20 lg:py-32 bg-white overflow-hidden">
          {/* Background Decorations */}
          <div className="bg-decoration bg-decoration-blue float-animation" style={{ width: '300px', height: '300px', top: '10%', left: '5%' }} />
          <div className="bg-decoration bg-decoration-orange float-animation" style={{ width: '250px', height: '250px', bottom: '15%', right: '10%', animationDelay: '2s' }} />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            {/* Grid 1x3 metryk z Stagger Animation */}
            {/* Grid 1x3 metryk z Stagger Animation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Metryka 1 */}
              <div className={`text-center group ${metricsVisible ? 'metric-stagger' : 'opacity-0'}`}>
                <div className="relative text-7xl lg:text-8xl font-black text-blue-700 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600 number-glow">
                  30+
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-600 font-semibold">
                  LAT DOŚWIADCZENIA
                </p>
              </div>

              {/* Metryka 2 */}
              <div className={`text-center group ${metricsVisible ? 'metric-stagger' : 'opacity-0'}`}>
                <div className="relative text-3xl lg:text-5xl font-black text-blue-700 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600 number-glow uppercase leading-tight">
                  METALIZACJA PRÓŻNIOWA
                </div>
              </div>

              {/* Metryka 3 */}
              <div className={`text-center group ${metricsVisible ? 'metric-stagger' : 'opacity-0'}`}>
                <div className="relative text-2xl lg:text-4xl font-black text-blue-700 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600 number-glow uppercase leading-tight">
                  LAKIEROWANIE DETALI Z TWORZYW SZTUCZNYCH
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* GALLERY SECTION (Video -> Grid Transition) */}



        {/* KIM JESTEŚMY SECTION */}
        <section id="kim-jestesmy" data-theme="light" className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px' }} aria-hidden="true" />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Content */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 text-blue-600 font-mono text-sm tracking-widest uppercase">
                  <span className="w-12 h-px bg-blue-600"></span>
                  O Nas
                </div>
                <h2 className="text-4xl lg:text-6xl font-black uppercase text-gray-900 tracking-tight leading-[0.95]">
                  Kim<br />Jesteśmy
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                  STANIAX to zespół pasjonatów technologii powłokowych z ponad 20-letnim doświadczeniem. Łączymy tradycję rzemiosła z najnowocześniejszymi rozwiązaniami, oferując kompleksowe usługi metalizacji i lakierowania dla wymagających klientów z całej Europy.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                  <div>
                    <div className="text-3xl lg:text-4xl font-black text-blue-700">20+</div>
                    <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Lat doświadczenia</div>
                  </div>
                  <div>
                    <div className="text-3xl lg:text-4xl font-black text-blue-700">2500+</div>
                    <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Projektów</div>
                  </div>
                  <div>
                    <div className="text-3xl lg:text-4xl font-black text-blue-700">24h</div>
                    <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Czas reakcji</div>
                  </div>
                </div>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: <Users className="w-5 h-5" />, text: 'Wykwalifikowany zespół' },
                    { icon: <Gear className="w-5 h-5" />, text: 'Nowoczesny park maszynowy' },
                    { icon: <Shield className="w-5 h-5" />, text: 'Gwarancja jakości' },
                    { icon: <Clock className="w-5 h-5" />, text: 'Terminowość dostaw' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-700">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                <MagneticButton 
                  onClick={() => scrollToSection('contact')}
                  className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors"
                >
                  Skontaktuj się z nami
                </MagneticButton>
              </div>

              {/* Right: Image */}
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={vacuumMetalizationImg}
                    alt="Zespół STANIAX - metalizacja próżniowa"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-[200px]">
                  <div className="text-4xl font-black text-blue-700 mb-1">24h</div>
                  <div className="text-sm text-gray-600 font-medium">Czas reakcji na zapytanie</div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="about" data-theme="light" className="relative py-20 lg:py-32 bg-gradient-to-tl from-white via-gray-50/50 to-white overflow-hidden">
          {/* Subtle Metallic Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(45deg, #94a3b8 25%, transparent 25%, transparent 75%, #94a3b8 75%, #94a3b8), linear-gradient(45deg, #94a3b8 25%, transparent 25%, transparent 75%, #94a3b8 75%, #94a3b8)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }} aria-hidden="true" />

          {/* Background Decorations */}
          {/* Removed images as per request */}

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            {/* Nagłówek sekcji - wyrównany do prawej jak Vibor.it */}
            <div className="text-right mb-20 section-reveal">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-6 font-semibold">OFERTA</p>
              <div className="bg-white py-16 px-12 lg:px-24 -mx-6 lg:-mx-12 rounded-t-2xl pb-32">
                <h2 className="text-5xl lg:text-7xl font-black uppercase mb-12 tracking-tighter leading-none text-blue-900">
                  NASZA OFERTA
                </h2>

                <div className="flex flex-col gap-6 text-left max-w-4xl ml-auto">
                  {[
                    { label: "METALIZACJA PRÓŻNIOWA", section: "vacuum-metallization", isRoute: false },
                    { label: "LAKIEROWANIE DETALI Z TWORZYW SZTUCZNYCH", section: "plastic-painting", isRoute: false },
                    { label: "LAKIEROWANIE DETALI ZE SZKŁA I CERAMIKI", section: "glass-painting", isRoute: false },
                    { label: "ODBLASKI W METALIZACJI", section: "reflectors", isRoute: false },
                    { label: "GALERIA", section: "/gallery", isRoute: true }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-baseline gap-6 group cursor-pointer"
                      onClick={() => item.isRoute ? navigate(item.section) : scrollToSection(item.section)}
                    >
                      <span className="text-xl font-mono text-blue-500 font-bold">0{index + 1}.</span>
                      <h3 className="text-2xl md:text-4xl font-bold text-gray-800 transition-colors uppercase relative overflow-hidden">
                        <span className="relative z-10 liquid-metal-text">{item.label}</span>
                        <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      </h3>
                      <ArrowRight className="w-6 h-6 text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  ))}
                </div>

                {/* DETAILED SERVICES SECTION */}
                <div className="mt-32 space-y-32">
                  {servicesData.map((service, index) => (
                    <div
                      key={service.id}
                      id={service.id}
                      className={cn(
                        "grid gap-12 items-stretch",
                        index % 2 === 0 ? "lg:grid-cols-[1fr_1.2fr]" : "lg:grid-cols-[1.2fr_1fr]"
                      )}
                    >
                      <div className={cn(
                        "flex flex-col justify-center space-y-6",
                        index % 2 !== 0 && "lg:order-2"
                      )}>
                        <div className="flex items-center gap-4 text-blue-600 font-mono text-sm tracking-widest uppercase">
                          <span className="w-12 h-px bg-blue-600"></span>
                          {service.tagline}
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-black uppercase text-gray-900 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                          {service.description}
                        </p>
                        <MagneticButton 
                          onClick={() => {
                            setSelectedService(service)
                            setIsServiceModalOpen(true)
                          }}
                          className="mt-8 px-8 py-3 bg-gray-900 text-white rounded-full font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors"
                        >
                          Szczegóły
                        </MagneticButton>
                      </div>
                      <div className={cn(
                        "w-full",
                        index % 2 !== 0 && "lg:order-1"
                      )}>
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                          <img
                            src={service.image}
                            alt={service.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                            <div className="text-white/20">
                              {service.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cytat misji - moved here */}
                <div className="mt-12 w-full ml-auto">
                  <p className="text-lg text-gray-600 italic border-l-4 border-r-4 border-blue-700 px-8 leading-relaxed font-normal text-center">
                    "Nasza misja to nie tylko nanoszenie powłok, ale budowanie długoterminowych partnerstw opartych na innowacjach, jakości i zaufaniu. Każdy projekt traktujemy indywidualnie, oferując pełne wsparcie techniczne od etapu projektowania po serwis posprzedażny."
                  </p>
                </div>
              </div>
            </div>





            {/* CTA after About section */}
            <div className="mt-16 text-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full shadow-2xl border-2 border-blue-400/30 transition-all duration-300 hover:scale-105"
              >
                <span className="text-base font-bold uppercase tracking-wider">
                  ✨ Bezpłatna Konsultacja
                </span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <p className="mt-4 text-sm text-gray-600">Skontaktuj się z nami i omów szczegóły Twojego projektu</p>
            </div>
          </div>
        </section>

        {/* CASE STUDIES CAROUSEL - Vibor.it Style */}
        <section ref={projectsSectionRef} id="projects" data-theme="light" className="py-20 lg:py-32 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="text-left mb-20 max-w-7xl section-reveal">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-6 font-semibold">STUDIA PRZYPADKÓW</p>
              <h2 className="text-7xl lg:text-8xl xl:text-9xl font-black uppercase mb-8 tracking-tighter leading-none text-blue-400">
                NASZE<br />REALIZACJE
              </h2>
              <p className="text-lg text-gray-600 font-normal max-w-2xl leading-relaxed">
                Odkryj historie sukcesów naszych klientów z branż motoryzacyjnej, lotniczej i przemysłowej
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative max-w-7xl mx-auto">
              {/* Carousel Slides */}
              <div className="relative overflow-hidden">
                {caseStudiesData.map((caseStudy, index) => (
                  <div
                    key={caseStudy.id}
                    className={cn(
                      'transition-all duration-700 ease-in-out',
                      activeSlide === index ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'
                    )}
                  >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Left: Before/After Image Comparison */}
                      <TiltCard className="relative group">
                        <div
                          className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-2xl cursor-ew-resize"
                          onClick={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect()
                            const newX = ((e.clientX - rect.left) / rect.width) * 100
                            setBeforeAfterSlider(Math.max(0, Math.min(100, newX)))
                          }}
                          onMouseMove={(e) => {
                            if (e.buttons === 1) { // Left mouse button is pressed
                              const rect = e.currentTarget.getBoundingClientRect()
                              const newX = ((e.clientX - rect.left) / rect.width) * 100
                              setBeforeAfterSlider(Math.max(0, Math.min(100, newX)))
                            }
                          }}
                          onTouchMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect()
                            const touch = e.touches[0]
                            const newX = ((touch.clientX - rect.left) / rect.width) * 100
                            setBeforeAfterSlider(Math.max(0, Math.min(100, newX)))
                          }}
                        >
                          {/* Before Image */}
                          <img
                            src={caseStudy.imageBefore}
                            alt={`${caseStudy.title} - Przed`}
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                          />

                          {/* After Image with Slider */}
                          <div
                            className="absolute inset-0 overflow-hidden pointer-events-none"
                            style={{ clipPath: `inset(0 ${100 - beforeAfterSlider}% 0 0)` }}
                          >
                            <img
                              src={caseStudy.imageAfter}
                              alt={`${caseStudy.title} - Po`}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>

                          {/* Slider Handle */}
                          <div
                            className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none"
                            style={{ left: `${beforeAfterSlider}%` }}
                          >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                              <div className="flex gap-1">
                                <div className="w-0.5 h-4 bg-gray-700"></div>
                                <div className="w-0.5 h-4 bg-gray-700"></div>
                              </div>
                            </div>
                          </div>

                          {/* Before/After Labels */}
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider pointer-events-none">
                            PRZED
                          </div>
                          <div className="absolute top-4 right-4 bg-blue-700 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider pointer-events-none">
                            PO
                          </div>
                        </div>

                      </TiltCard>

                      {/* Right: Content */}
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-4xl lg:text-5xl font-black text-gray-900 uppercase mb-3 tracking-tight">
                            {caseStudy.title}
                          </h3>
                          <p className="text-lg text-gray-600 font-normal leading-relaxed">
                            {caseStudy.subtitle}
                          </p>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-6">
                          {
                            caseStudy.metrics.map((metric, idx) => (
                              <div key={idx} className="text-center">
                                <div className="text-3xl lg:text-4xl font-black text-blue-700 mb-2 font-mono">
                                  {metric.value}
                                </div>
                                <p className="text-xs uppercase tracking-wider text-gray-600 font-semibold">
                                  {metric.label}
                                </p>
                              </div>
                            ))
                          }
                        </div>

                        {/* Performance Badge */}
                        <div className="inline-flex items-center gap-3 bg-blue-700 text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm">
                          <Trophy className="w-5 h-5" />
                          {caseStudy.badge}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-center gap-8 mt-12">
                <button
                  onClick={() => {
                    setActiveSlide((prev) => (prev - 1 + caseStudiesData.length) % caseStudiesData.length)
                    setIsAutoPlaying(false)
                  }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-200 hover:bg-blue-700 text-gray-700 hover:text-white transition-all duration-300 flex items-center justify-center font-bold text-2xl shadow-lg hover:shadow-xl hover:scale-110"
                  aria-label="Poprzedni projekt"
                >
                  ←
                </button>

                {/* Dots with numbers */}
                <div className="flex gap-3 items-center">
                  <span className="text-sm font-semibold text-gray-600 mr-2">
                    {activeSlide + 1} / {caseStudiesData.length}
                  </span>
                  {caseStudiesData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveSlide(index)
                        setIsAutoPlaying(false)
                      }}
                      className={cn(
                        'w-3 h-3 rounded-full transition-all duration-300',
                        activeSlide === index
                          ? 'bg-blue-700 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      )}
                      aria-label={`Przejdź do projektu ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => {
                    setActiveSlide((prev) => (prev + 1) % caseStudiesData.length)
                    setIsAutoPlaying(false)
                  }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-200 hover:bg-blue-700 text-gray-700 hover:text-white transition-all duration-300 flex items-center justify-center font-bold text-2xl shadow-lg hover:shadow-xl hover:scale-110"
                  aria-label="Następny projekt"
                >
                  →
                </button>
              </div>
            </div>

            {/* CTA - Traditional Grid Below Carousel */}
            <div className="text-center mt-20">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-6 font-semibold">Zobacz więcej</p>
              <MagneticButton
                onClick={() => navigate('/gallery')}
                className="px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] rounded-full flex items-center justify-center mx-auto"
              >
                Wszystkie Projekty
                <ArrowRight className="w-5 h-5 ml-2 inline-block" />
              </MagneticButton>
            </div>
          </div >
        </section >



        {/* FAQ SECTION */}
        <section id="faq" data-theme="light" className="py-20 lg:py-32 bg-gradient-to-br from-white via-blue-50/30 to-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-8 font-semibold text-center">FAQ</p>

              <div className="mb-12 text-center">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.85] tracking-tighter mb-6 text-blue-400">
                  NAJCZĘŚCIEJ<br />ZADAWANE PYTANIA
                </h2>
                <p className="text-lg text-gray-600 font-normal max-w-xl mx-auto leading-relaxed">
                  Odpowiedzi na pytania dotyczące technologii metalizacji
                </p>
              </div>

              <div className="space-y-4">
                {faqData.map((faq, index) => {
                  const isExpanded = expandedFAQs.has(faq.id)

                  return (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="group"
                    >
                      <button
                        onClick={() => {
                          setExpandedFAQs((prev) => {
                            const next = new Set(prev)
                            if (next.has(faq.id)) {
                              next.delete(faq.id)
                            } else {
                              next.add(faq.id)
                            }
                            return next
                          })
                        }}
                        className={cn(
                          'w-full text-left p-6 rounded-2xl transition-all duration-300',
                          'border-2 bg-white shadow-md hover:shadow-xl',
                          'focus-visible:ring-4 focus-visible:ring-blue-400/50',
                          isExpanded
                            ? 'border-blue-400 bg-blue-50/50'
                            : 'border-gray-200 hover:border-blue-300'
                        )}
                        aria-expanded={isExpanded}
                        aria-controls={`faq-answer-${faq.id}`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={cn(
                            'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300',
                            isExpanded
                              ? 'bg-blue-600 text-white scale-110 shadow-lg'
                              : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                          )}>
                            <Question className="w-5 h-5" weight="bold" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                              {faq.question}
                            </h3>
                            {!isExpanded && (
                              <p className="text-sm text-gray-500 line-clamp-1">
                                Kliknij, aby rozwinąć
                              </p>
                            )}
                          </div>

                          <div className={cn(
                            'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
                            isExpanded ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                          )}>
                            {isExpanded ? (
                              <CaretUp className="w-5 h-5" weight="bold" />
                            ) : (
                              <CaretDown className="w-5 h-5" weight="bold" />
                            )}
                          </div>
                        </div>

                        {isExpanded && (
                          <motion.div
                            id={`faq-answer-${faq.id}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pl-14"
                          >
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </button>
                    </motion.div>
                  )
                })}
              </div>

              {/* CTA to Contact */}
              <div className="text-center mt-16">
                <p className="text-gray-600 mb-6 text-lg font-medium">
                  Nie znalazłeś odpowiedzi na swoje pytanie?
                </p>
                <MagneticButton
                  onClick={() => {
                    const contactSection = document.getElementById('contact')
                    contactSection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-2xl hover:scale-105 rounded-full flex items-center justify-center mx-auto"
                >
                  Skontaktuj się z nami
                  <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </section >

        <section id="contact" data-theme="light" className="py-20 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-8 font-semibold text-center">KONTAKT I WYCENA</p>

              <div className="mb-12 text-center">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.85] tracking-tighter mb-6 text-blue-400">
                  SKONTAKTUJ SIĘ<br />I WYCEN PROJEKT
                </h2>
                <p className="text-lg text-gray-600 font-normal max-w-xl mx-auto leading-relaxed">
                  Wypełnij formularz, a my przygotujemy dopasowaną wycenę i skontaktujemy się z Tobą w ciągu 24 godzin.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-12">
                {/* Step indicator text */}
                <div className="text-center mb-4">
                  <p className="text-sm font-semibold text-gray-600">
                    Krok <span className="text-blue-700 text-lg">{formStep}</span> z 2
                  </p>
                </div>

                <div className="flex justify-center gap-8 mb-4">
                  {[1, 2].map((step) => (
                    <div
                      key={step}
                      className={cn(
                        'flex items-center gap-2',
                        formStep >= step ? 'text-blue-700' : 'text-gray-400'
                      )}
                    >
                      <div className={cn(
                        'w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300',
                        formStep >= step ? 'bg-blue-700 text-white scale-110 shadow-lg' : 'bg-gray-200'
                      )}>
                        {formStep > step ? '✓' : step}
                      </div>
                      <span className="hidden sm:inline text-sm font-semibold">
                        {step === 1 && 'Projekt'}
                        {step === 2 && 'Kontakt'}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-500 shadow-md"
                    style={{ width: `${(formStep / 2) * 100}%` }}
                  />
                </div>
              </div>

              {/* Form Steps */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                {formStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">Wybierz typ projektu</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {['Prototypy', 'Produkcja', 'Naprawa', 'Konsultacja'].map((type) => (
                        <button
                          key={type}
                          onClick={() => {
                            setSmartFormData((prev) => ({ ...prev, projectType: type }))
                            setFormStep(2)
                          }}
                          className={cn(
                            'p-6 border-2 rounded-xl font-bold uppercase tracking-wider transition-all hover:scale-105 min-h-[44px]',
                            smartFormData.projectType === type
                              ? 'border-blue-700 bg-blue-50 text-blue-900'
                              : 'border-gray-200 hover:border-blue-300'
                          )}
                          aria-label={`Wybierz ${type}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {formStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">Twoje dane kontaktowe</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        placeholder="Imię (np. Jan) *"
                        value={smartFormData.firstName}
                        onChange={(e) => setSmartFormData({ ...smartFormData, firstName: e.target.value })}
                        className="border-2 min-h-[44px]"
                        aria-label="Imię"
                        required
                      />
                      <Input
                        placeholder="Nazwisko (np. Kowalski) *"
                        value={smartFormData.lastName}
                        onChange={(e) => setSmartFormData({ ...smartFormData, lastName: e.target.value })}
                        className="border-2 min-h-[44px]"
                        aria-label="Nazwisko"
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="E-mail (np. jan.kowalski@firma.pl) *"
                      value={smartFormData.email}
                      onChange={(e) => setSmartFormData({ ...smartFormData, email: e.target.value })}
                      className="border-2 min-h-[44px]"
                      aria-label="Adres e-mail"
                      required
                    />
                    <Input
                      placeholder="Telefon (opcjonalnie, np. +48 123 456 789)"
                      value={smartFormData.phone}
                      onChange={(e) => setSmartFormData({ ...smartFormData, phone: e.target.value })}
                      className="border-2 min-h-[44px]"
                      aria-label="Numer telefonu"
                    />
                    <Textarea
                      placeholder="Opisz swój projekt - im więcej szczegółów, tym lepiej pomożemy *"
                      value={smartFormData.message}
                      onChange={(e) => setSmartFormData({ ...smartFormData, message: e.target.value })}
                      className="border-2 min-h-32"
                      aria-label="Opis projektu"
                      required
                    />
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {formStep > 1 && (
                    <Button
                      onClick={() => setFormStep(formStep - 1)}
                      variant="outline"
                      className="font-bold"
                    >
                      ← Wstecz
                    </Button>
                  )}
                  <div className="ml-auto">
                    {formStep < 2 ? (
                      <Button
                        onClick={() => setFormStep(formStep + 1)}
                        className="bg-blue-700 hover:bg-blue-800 font-bold"
                        disabled={formStep === 1 && !smartFormData.projectType}
                      >
                        Kontynuuj →
                      </Button>
                    ) : (
                      <Button
                        onClick={() => {
                          triggerConfetti()
                          toast.success('Dziękujemy! Odpowiemy w ciągu 24h')
                          setFormStep(1)
                          setSmartFormData({
                            projectType: '',
                            technology: '',
                            firstName: '',
                            lastName: '',
                            email: '',
                            phone: '',
                            message: '',
                            file: null
                          })
                        }}
                        className="bg-blue-700 hover:bg-blue-800 font-bold magnetic-button"
                        disabled={!smartFormData.firstName || !smartFormData.email || !smartFormData.message}
                      >
                        Wyślij zapytanie 🚀
                      </Button>
                    )}
                  </div>
                </div>
              </div>

            </div>

            {/* Map and Contact Details Section */}
            <div className="max-w-7xl mx-auto mt-20">
              <div className="mb-12 text-center">
                <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-4 font-semibold">ODWIEDŹ NAS</p>
                <h3 className="text-4xl sm:text-5xl font-black uppercase leading-tight tracking-tighter text-blue-400">
                  ODWIEDŹ NAS
                </h3>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Maps Container */}
                <div className="space-y-12">
                  {/* Map 1: Siedziba */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold uppercase tracking-wider text-gray-700">SIEDZIBA (BIURO)</h4>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200"
                    >
                      <iframe
                        src="https://maps.google.com/maps?q=ul.+Grzybowska+5A,+00-132+Warszawa&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lokalizacja siedziby STANIAX"
                        aria-label="Mapa Google pokazująca lokalizację siedziby STANIAX"
                      />
                    </motion.div>
                  </div>

                  {/* Map 2: Zakład Usługowy */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold uppercase tracking-wider text-gray-700">ZAKŁAD USŁUGOWY</h4>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="w-full h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200"
                    >
                      <iframe
                        src="https://maps.google.com/maps?q=ul.+Wyszyńskiego+116A,+05-420+Józefów&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lokalizacja zakładu usługowego STANIAX"
                        aria-label="Mapa Google pokazująca lokalizację zakładu usługowego STANIAX"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Contact Details */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Address 1: Siedziba */}
                  <div className="group">
                    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-white" weight="bold" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">SIEDZIBA</h3>
                        <p className="text-lg font-bold text-gray-900 leading-relaxed">
                          ul. Grzybowska 5A<br />
                          00-132 Warszawa
                        </p>
                        <a href="https://maps.google.com/?q=Grzybowska+5A+Warszawa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-semibold mt-2 inline-block">
                          (MAPA-NAWIGACJA)
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Address 2: Zakład Usługowy */}
                  <div className="group">
                    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Factory className="w-6 h-6 text-white" weight="bold" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">ZAKŁAD USŁUGOWY</h3>
                        <p className="text-lg font-bold text-gray-900 leading-relaxed">
                          ul. Wyszyńskiego 116A<br />
                          05-420 Józefów
                        </p>
                        <a href="https://maps.google.com/?q=Wyszynskiego+116A+Jozefow" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-semibold mt-2 inline-block">
                          (MAPA-NAWIGACJA)
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone & Hours */}
                  <div className="group">
                    <a
                      href="tel:+48882488844"
                      className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl group-hover:scale-[1.02]"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-6 h-6 text-white" weight="bold" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Telefon</h3>
                        <p className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                          +48 882 488 844
                        </p>
                        <div className="text-sm text-gray-600 mt-2 space-y-1">
                          <p><span className="font-semibold">Pon-Pt:</span> 7:00 - 17:00</p>
                          <p><span className="font-semibold">Sob-Nd:</span> Zamknięte</p>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Email */}
                  <div className="group">
                    <a
                      href="mailto:metalizacja@staniax.pl"
                      className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl group-hover:scale-[1.02]"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <EnvelopeSimple className="w-6 h-6 text-white" weight="bold" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Email</h3>
                        <p className="text-lg font-bold text-gray-900 break-all group-hover:text-blue-700 transition-colors">
                          metalizacja@staniax.pl
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Odpowiadamy w 24h
                        </p>
                      </div>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>


        {/* BIG TYPE FOOTER */}
        <section id="footer" data-theme="dark">
          <BigFooter />
        </section>

        <CookieBanner />


        {/* Mobile Floating CTA Button */}
        <button
          onClick={() => scrollToSection('contact')}
          className={cn(
            'fixed bottom-6 right-6 z-[80] sm:hidden transition-all duration-500 focus-visible:ring-4 focus-visible:ring-blue-400',
            showFloatingCTA
              ? 'translate-y-0 opacity-100 pointer-events-auto'
              : 'translate-y-20 opacity-0 pointer-events-none'
          )}
          aria-label="Kontakt"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 rounded-full shadow-2xl border-2 border-blue-400/30">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </button>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={cn(
            'fixed bottom-24 right-6 z-[80] hidden sm:flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-2xl border-2 border-blue-400/30 transition-all duration-500 focus-visible:ring-4 focus-visible:ring-blue-400',
            showScrollTop
              ? 'translate-y-0 opacity-100 pointer-events-auto scale-100'
              : 'translate-y-20 opacity-0 pointer-events-none scale-75'
          )}
          aria-label="Powrót do góry strony"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

        {/* Global Focus Styles */}
        <style>{`
        *:focus-visible {
          outline: 3px solid rgb(96 165 250) !important;
          outline-offset: 2px !important;
          border-radius: 4px !important;
        }
        
        button:focus-visible,
        a:focus-visible,
        input:focus-visible,
        textarea:focus-visible,
        select:focus-visible {
          outline: 3px solid rgb(96 165 250) !important;
          outline-offset: 2px !important;
        }
      `}</style>

      {/* Service Details Modal */}
      <AnimatePresence>
        {isServiceModalOpen && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsServiceModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Image */}
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img
                  src={selectedService.image}
                  alt={selectedService.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-center gap-3 text-blue-400 font-mono text-sm tracking-widest uppercase mb-2">
                    <span className="w-8 h-px bg-blue-400"></span>
                    {selectedService.tagline}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                    {selectedService.title}
                  </h2>
                </div>
                {/* Close Button */}
                <button
                  onClick={() => setIsServiceModalOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {selectedService.description}
                </p>

                {selectedService.details && (
                  <div className="grid sm:grid-cols-3 gap-6">
                    {/* Features */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                          <Gear className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 uppercase tracking-wide text-sm">Cechy</h3>
                      </div>
                      <ul className="space-y-2">
                        {selectedService.details.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center">
                          <Target className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 uppercase tracking-wide text-sm">Zastosowania</h3>
                      </div>
                      <ul className="space-y-2">
                        {selectedService.details.applications.map((app, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0" />
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Advantages */}
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center">
                          <Trophy className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 uppercase tracking-wide text-sm">Zalety</h3>
                      </div>
                      <ul className="space-y-2">
                        {selectedService.details.advantages.map((adv, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 flex-shrink-0" />
                            {adv}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      setIsServiceModalOpen(false)
                      scrollToSection('contact')
                    }}
                    className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider rounded-full transition-colors flex items-center justify-center gap-2"
                  >
                    Zapytaj o wycenę
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsServiceModalOpen(false)}
                    className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold uppercase tracking-wider rounded-full transition-colors"
                  >
                    Zamknij
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      </main >
    </SmoothScroll >
  )
}

export default HomePage
// Force reload wto, 4 lis 2025, 23:36:53 CET
