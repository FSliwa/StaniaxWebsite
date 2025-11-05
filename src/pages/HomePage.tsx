import { useState, useEffect, useRef, useMemo, type CSSProperties, type ReactNode } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CookieBanner } from '@/components/CookieBanner'
import { AnimatedSection } from '@/components/AnimatedSection'
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
  Users
} from '@phosphor-icons/react'
import heroVideo from '@/assets/Prompt_Generowania_Wideo_z_Efektami.mp4'
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

import whyChooseImg1 from '@/assets/Dlaczego Staniax V1.png'
import whyChooseImg2 from '@/assets/Dlaczego Staniax V2.png'
import whyChooseImg3 from '@/assets/Dlaczego Staniax V3.png'

const fallbackAnimationSrc = heroVideo
const statsSplineUrl =
  import.meta.env.VITE_STATS_SPLINE_URL ?? 'https://prod.spline.design/f8rjqRArLakUTPCP/scene.splinecode'
const newsSplineUrl =
  import.meta.env.VITE_NEWS_SPLINE_SCENE_URL ?? 'https://prod.spline.design/iK5Y6hn8ReGNIQ1J/scene.splinecode'
const virtualStudioFallbackSplineUrl =
  import.meta.env.VITE_VIRTUAL_STUDIO_SPLINE_URL ??
  'https://prod.spline.design/xk-PvTQqtoScZ5Zq/scene.splinecode'
const virtualStudioEmbedUrl =
  import.meta.env.VITE_VIRTUAL_STUDIO_SPLINE_EMBED_URL ?? 'undefined'

type NavItem =
  | { id: string; label: string; type: 'section' }
  | { id: string; label: string; type: 'route'; path: string }

const navItems: NavItem[] = [
  { id: 'about', label: 'O STANIAX', type: 'section' },
  { id: 'services', label: 'Oferta', type: 'section' },
  { id: 'custom-section', label: 'Specjalnie dla Ciebie', type: 'section' },
  { id: 'projects', label: 'Realizacje', type: 'section' },
  { id: 'news-showcase', label: 'Nowości', type: 'section' },
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
    id: 'prototypy',
    title: 'Rozwój Prototypów',
    description:
      'Szybkie prototypowanie z zaawansowanymi rozwiązaniami powłokowymi dla faz rozwoju i testowania produktu.',
    icon: <Gear className="w-16 h-16 text-white/80 icon-welding-effect" />,
    image: serviceImg1,
    alt: 'Technik przygotowuje prototyp do napylania metalu',
    tagline: 'Szybkie wdrożenia R&D'
  },
  {
    id: 'powloki',
    title: 'Powłoki Przemysłowe',
    description: 'Trwałe powłoki metaliczne dla komponentów wymagających najwyższej ochrony i wydajności.',
    icon: <Shield className="w-16 h-16 text-white/80 icon-welding-effect" />,
    image: serviceImg2,
    alt: 'Operator kontroluje proces nanoszenia powłoki na stalowy element',
    tagline: 'Ochrona krytycznych części'
  },
  {
    id: 'precyzja',
    title: 'Wykończenia Precyzyjne',
    description: 'Wysoko precyzyjne obróbki powierzchni dla komponentów z dokładnymi specyfikacjami.',
    icon: <Target className="w-16 h-16 text-white/80 icon-welding-effect" />,
    image: serviceImg3,
    alt: 'Precyzyjna obróbka elementu metalowego na stanowisku CNC',
    tagline: 'Dokładność do mikrona'
  },
  {
    id: 'dedykowane',
    title: 'Rozwiązania Na Miarę',
    description: 'Usługi metalizacyjne dostosowane do specyficznych wymagań branżowych.',
    icon: <Wrench className="w-16 h-16 text-white/80 icon-welding-effect" />,
    image: serviceImg1,
    alt: 'Inżynier dopasowuje parametry napylania do wymagań klienta',
    tagline: 'Zespoły projektowe 360°'
  }
]

const projectsData: ProjectItem[] = [
  {
    id: 'automotive',
    title: 'Komponenty Motoryzacyjne',
    icon: <Gear className="w-16 h-16 mx-auto mb-2 opacity-90 icon-welding-effect" />,
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop&crop=center',
    description: 'Zaawansowane powłoki ochronne dla przemysłu motoryzacyjnego',
    details: 'Specjalistyczne metalizacja części silnikowych, układów hamulcowych i elementów karoserii. Powłoki odporne na korozję i wysokie temperatury.',
    category: 'Motoryzacja',
    year: '2024'
  },
  { 
    id: 'aerospace',
    title: 'Części Lotnicze', 
    icon: <Shield className="w-16 h-16 mx-auto mb-2 opacity-90 icon-welding-effect" />, 
    image: projectImgAerospace,
    description: 'Precyzyjne powłoki dla krytycznych komponentów lotniczych',
    details: 'Metalizacja elementów silników odrzutowych, struktur nośnych i systemów hydraulicznych zgodnie z normami aerospace.',
    category: 'Lotnictwo',
    year: '2024'
  },
  { 
    id: 'precision-tools', 
    title: 'Narzędzia Precyzyjne', 
    icon: <Target className="w-16 h-16 mx-auto mb-2 opacity-90 icon-welding-effect" />, 
    image: projectImgAutomotive,
    description: 'Powłoki zwiększające trwałość narzędzi precyzyjnych',
    details: 'Specjalne powłoki twardościowe dla narzędzi skrawających, matryc i form wtryskowych. Zwiększenie żywotności o 300%.',
    category: 'Narzędzia',
    year: '2024'
  },
  { 
    id: 'industrial', 
    title: 'Urządzenia Przemysłowe', 
    icon: <Wrench className="w-16 h-16 mx-auto mb-2 opacity-90 icon-welding-effect" />, 
    image: projectImgIndustrial,
    description: 'Ochrona przed korozją dla maszyn przemysłowych',
    details: 'Kompleksowa metalizacja linii produkcyjnych, robotów przemysłowych i urządzeń technologicznych.',
    category: 'Przemysł',
    year: '2024'
  },
  { 
    id: 'production-tools', 
    title: 'Narzędzia Produkcyjne', 
    icon: <Factory className="w-16 h-16 mx-auto mb-2 opacity-90 icon-welding-effect" />, 
    image: serviceImg2,
    description: 'Powłoki funkcjonalne dla narzędzi produkcyjnych',
    details: 'Metalizacja narzędzi do obróbki plastycznej, urządzeń formujących i elementów automatyki przemysłowej.',
    category: 'Produkcja',
    year: '2024'
  },
  { 
    id: 'prototypes', 
    title: 'Projekty Prototypów', 
    icon: <Trophy className="w-16 h-16 mx-auto mb-2 opacity-90 icon-welding-effect" />, 
    image: projectImgPrototype,
    description: 'Szybkie prototypowanie z zaawansowanymi powłokami',
    details: 'Ekspresowa metalizacja prototypów dla R&D, testowanie nowych rozwiązań powłokowych i weryfikacja parametrów.',
    category: 'R&D',
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
  testimonial: {
    quote: string
    author: string
    role: string
    avatar: string
  }
  badge: string
}

const caseStudiesData: CaseStudy[] = [
  {
    id: 'automotive-excellence',
    title: 'Rewolucja Przemysłowa',
    subtitle: 'Przełomowa metalizacja komponentów silnikowych',
    imageBefore: automotiveAfter,
    imageAfter: automotiveBefore,
    metrics: [
      { value: '3 msc', label: 'Realizacja' },
      { value: '50K+', label: 'Elementy' },
      { value: 'ISO 9001', label: 'Certyfikat' }
    ],
    testimonial: {
      quote: 'Współpraca z STANIAX przyniosła rewolucyjne rezultaty. Trwałość naszych komponentów wzrosła o 250%, a koszty produkcji spadły o 30%.',
      author: 'Jan Kowalski',
      role: 'Prezes, TechMotors',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    badge: '+250% Trwałość'
  },
  {
    id: 'aerospace-innovation',
    title: 'Innowacje Lotnicze',
    subtitle: 'Precyzyjne powłoki dla komponentów lotniczych',
    imageBefore: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop',
    imageAfter: projectImgAerospace,
    metrics: [
      { value: '6 msc', label: 'Projekt' },
      { value: '99.9%', label: 'Precyzja' },
      { value: 'AS9100', label: 'Standard' }
    ],
    testimonial: {
      quote: 'STANIAX spełnił najwyższe standardy aerospace. Ich metalizacja zwiększyła żywotność elementów turbinowych o 180% przy zachowaniu norm AS9100.',
      author: 'Anna Nowak',
      role: 'Główny Inżynier, AeroTech',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    badge: '+180% Żywotność'
  },
  {
    id: 'industrial-revolution',
    title: 'Doskonałość Motoryzacyjna',
    subtitle: 'Kompleksowa ochrona linii produkcyjnej',
    imageBefore: industrialBefore,
    imageAfter: industrialAfter,
    metrics: [
      { value: '12 msc', label: 'Wdrożenie' },
      { value: '200+', label: 'Maszyny' },
      { value: '0', label: 'Awarie' }
    ],
    testimonial: {
      quote: 'Dzięki metalizacji całej linii produkcyjnej przez STANIAX, eliminujemy 95% awarii związanych z korozją i zużyciem. ROI osiągnęliśmy w 8 miesięcy.',
      author: 'Piotr Wiśniewski',
      role: 'Dyrektor Operacyjny, IndustryPro',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    },
    badge: '95% Redukcja Awarii'
  }
]

// BRAND SHOWCASE DATA - Trusted Companies & Certifications
const brandShowcaseData = [
  { name: 'ISO 9001:2015', logo: 'ISO' },
  { name: 'Motoryzacja', logo: 'AUTO' },
  { name: 'Lotnictwo', logo: 'AERO' },
  { name: 'Medycyna', logo: 'MED' },
  { name: 'Certyfikat CE', logo: 'CE' },
  { name: 'Przemysł 4.0', logo: 'IND' },
  { name: 'Eko Technologie', logo: 'ECO' },
  { name: 'Jakość Przede Wszystkim', logo: 'QA' }
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
    id: 'pvd',
    method: 'Powłoki PVD',
    temperature: '200-500°C',
    thickness: '0.1-10 μm',
    applications: 'Narzędzia skrawające, komponenty precyzyjne',
    advantages: [
      'Bardzo twarde powłoki',
      'Doskonała przyczepność',
      'Niska temperatura procesu',
      'Przyjazne środowisku'
    ],
    materials: 'TiN, TiAlN, CrN, DLC'
  },
  {
    id: 'cvd',
    method: 'Technologia CVD',
    temperature: '800-1050°C',
    thickness: '5-20 μm',
    applications: 'Narzędzia do obróbki metali, części silników',
    advantages: [
      'Grubsze powłoki',
      'Równomierna grubość',
      'Wysoka twardość',
      'Dobra adhezja'
    ],
    materials: 'TiC, TiN, Al₂O₃'
  },
  {
    id: 'plasma',
    method: 'Natrysk Plazmowy',
    temperature: '100-300°C',
    thickness: '50-500 μm',
    applications: 'Komponenty lotnicze, turbiny, maszyny',
    advantages: [
      'Grube warstwy ochronne',
      'Odporność termiczna',
      'Naprawa elementów',
      'Szeroki zakres materiałów'
    ],
    materials: 'Ceramika, metale, węgliki'
  },
  {
    id: 'galwanizacja',
    method: 'Galwanizacja',
    temperature: '20-80°C',
    thickness: '5-100 μm',
    applications: 'Elektronika, automotive, dekoracje',
    advantages: [
      'Ochrona przed korozją',
      'Walory estetyczne',
      'Niski koszt',
      'Łatwa kontrola grubości'
    ],
    materials: 'Ni, Cr, Zn, Cu, Au'
  }
]

const aboutTilesData: AboutTileConfig[] = [
  {
    id: 'tile-lab',
    image: 'https://images.unsplash.com/photo-1581092916376-0239b9349155?w=400&h=400&fit=crop&crop=center',
    alt: 'Naukowiec w laboratorium badawczym',
    drift: -3,
    overlay: <Flask className="w-12 h-12 text-white/80" />,
    overlayDelay: 0.15
  },
  {
    id: 'tile-shield',
    image: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=400&h=400&fit=crop&crop=center',
    alt: 'Kontrola jakości metalowej powierzchni',
    drift: 3,
    overlay: <Shield className="w-12 h-12 text-white/80" />,
    overlayDelay: 0.1
  },
  {
    id: 'tile-factory',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1000&h=600&fit=crop&crop=center',
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

function HomePage() {
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
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
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
  const heroVideos = useMemo(() => [heroVideo, liquidMetalVideo, vinylTransformationVideo], [])
  const heroVideoRefs = useRef<(HTMLVideoElement | null)[]>([])
  
  // MICRO-INTERACTIONS STATE
  const [cursorTrail, setCursorTrail] = useState<Array<{x: number, y: number, id: number}>>([])
  
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
  const sectionIds = ['top', 'metrics', 'services', 'custom-section', 'about', 'projects', 'contact']
  
  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutMosaicRef,
    offset: ['start 90%', 'end 15%']
  })
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

  // Custom cursor effect (desktop only)
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    
    if (!isDesktop || prefersReducedMotion) {
      window.removeEventListener('resize', checkDesktop)
      return
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('resize', checkDesktop)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isDesktop, prefersReducedMotion])

  // Cursor Trail Effect (Vibor.it micro-interaction)
  useEffect(() => {
    if (!isDesktop || prefersReducedMotion) return
    
    let trailId = 0
    
    const handleMouseMove = (e: MouseEvent) => {
      setCursorTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: trailId++ }]
        // Keep only last 8 trail positions
        return newTrail.slice(-8)
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isDesktop, prefersReducedMotion])

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

    ;(async () => {
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
    const sectionIds = ['top', ...navItems.filter((item) => item.type === 'section').map((item) => item.id)]

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

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning.current) {
        e.preventDefault()
        return
      }

      const scrollDown = e.deltaY > 0
      const scrollUp = e.deltaY < 0

      if (activeSection === 0 && scrollDown) {
        e.preventDefault()
        isTransitioning.current = true
        setActiveSection(1)
        setTimeout(() => { isTransitioning.current = false }, 1000)
      } else if (activeSection === 1 && scrollUp && window.scrollY === 0) {
        e.preventDefault()
        isTransitioning.current = true
        setActiveSection(0)
        setTimeout(() => { isTransitioning.current = false }, 1000)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [activeSection])

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
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

  // Hero effects
  const heroScaleValue = Math.min(1.05 + scrollY * 0.0006, 1.25)
  const heroParallaxY = scrollY * 0.3 // Subtle parallax movement
  
  // Mouse follow effect for hero title  
  const [heroMousePosition, setHeroMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const heroSection = document.getElementById('top')
    if (!heroSection) return
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroSection.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      setHeroMousePosition({ x: x * 20, y: y * 20 })
    }
    
    heroSection.addEventListener('mousemove', handleMouseMove)
    return () => heroSection.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
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
    <div className="min-h-screen bg-background">
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* STICKY SIDE NAVIGATION - Minimalist Dots */}
      {isDesktop && !prefersReducedMotion && (
        <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40" aria-label="Section Navigation">
          <div className="flex flex-col gap-4">
            {sectionIds.map((sectionId, index) => {
              const labels = ['Start', 'Metryki', 'Usługi', 'O Nas', 'O Firmie', 'Projekty', 'Kontakt']
              const isActive = activeSectionIndex === index
              
              return (
                <div key={sectionId} className="group relative">
                  <button
                    onClick={() => scrollToSection(sectionId)}
                    className={cn(
                      'w-3 h-3 rounded-full transition-all duration-300',
                      isActive
                        ? 'bg-blue-700 scale-150 animate-pulse'
                        : 'bg-gray-400 hover:bg-blue-500 hover:scale-125'
                    )}
                    aria-label={`Go to ${labels[index]}`}
                  />
                  
                  {/* Label on hover */}
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-slate-900 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider pointer-events-none">
                    {labels[index]}
                  </span>
                </div>
              )
            })}
          </div>
          
          {/* Section Counter */}
          <div className="mt-6 text-center">
            <span className="text-xs font-bold text-gray-500">
              {String(activeSectionIndex + 1).padStart(2, '0')} / {String(sectionIds.length).padStart(2, '0')}
            </span>
          </div>
        </nav>
      )}

      {/* Custom Cursor (Desktop only) */}
      {isDesktop && !prefersReducedMotion && (
        <>
          <div 
            className="cursor-dot" 
            style={{ 
              left: `${cursorPosition.x}px`, 
              top: `${cursorPosition.y}px`,
              transform: 'translate(-50%, -50%)'
            }}
            aria-hidden="true"
          />
          <div 
            className="cursor-outline" 
            style={{ 
              left: `${cursorPosition.x}px`, 
              top: `${cursorPosition.y}px`,
              transform: 'translate(-50%, -50%)'
            }}
            aria-hidden="true"
          />
          
          {/* Cursor Trail - Vibor.it micro-interaction */}
          {cursorTrail.map((pos, index) => (
            <div
              key={pos.id}
              className="cursor-trail"
              style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                opacity: (index + 1) / cursorTrail.length * 0.6,
                transform: `translate(-50%, -50%) scale(${(index + 1) / cursorTrail.length})`,
              }}
              aria-hidden="true"
            />
          ))}
        </>
      )}

      <Toaster position="top-right" richColors />

      <header
        className={cn(
          'fixed top-0 w-full transition-all duration-500',
          isMenuOpen ? 'z-[60]' : 'z-50',
          scrollY > 32
            ? 'bg-background/85 backdrop-blur-xl border-b border-border/50 shadow-[0_15px_60px_rgba(15,23,42,0.18)]'
            : 'bg-transparent border-transparent'
        )}
      >
        <div
          className={cn(
            'container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 sm:py-5 transition-colors duration-300',
            isMenuOpen 
              ? 'text-foreground' 
              : isDarkHeaderContext 
                ? 'text-white' 
                : 'text-foreground'
          )}
        >
          <button
            onClick={() => scrollToSection('top')}
            className="group flex items-center gap-2 sm:gap-3 text-left"
            aria-label="Przewiń na górę"
          >
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
              <Factory className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="leading-tight hidden sm:block">
              <span
                className={cn(
                  'block text-xs uppercase tracking-[0.5em] transition-colors duration-300',
                  isMenuOpen 
                    ? 'text-muted-foreground' 
                    : isDarkHeaderContext 
                      ? 'text-white/70' 
                      : 'text-muted-foreground'
                )}
              >
                STANIAX
              </span>
              <span
                className={cn(
                  'block text-base sm:text-lg font-black transition-colors duration-300',
                  isMenuOpen 
                    ? 'text-foreground' 
                    : isDarkHeaderContext 
                      ? 'text-white' 
                      : 'text-foreground'
                )}
              >
                Studio Metalizacji
              </span>
            </div>
          </button>
          <div className="flex items-center gap-5">
            <Button
              onClick={() => scrollToSection('contact')}
              className={cn(
                'hidden sm:inline-flex border bg-transparent transition-all duration-300',
                isMenuOpen
                  ? 'border-foreground/15 text-foreground hover:bg-foreground hover:text-background'
                  : isDarkHeaderContext
                    ? 'border-white/40 text-white hover:bg-white hover:text-foreground'
                    : 'border-foreground/15 text-foreground hover:bg-foreground hover:text-background'
              )}
            >
              Wyceń Projekt
            </Button>
            <button
              className={cn(
                'relative h-10 w-10 sm:h-12 sm:w-12 rounded-full border backdrop-blur-md flex items-center justify-center transition-all duration-300',
                isMenuOpen
                  ? 'border-foreground/30 bg-background text-foreground'
                  : isDarkHeaderContext
                    ? 'border-white/30 bg-white/10 text-white hover:border-white/60'
                    : 'border-foreground/20 bg-background/70 text-foreground hover:border-foreground/40'
              )}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Przełącz nawigację"
              aria-expanded={isMenuOpen}
            >
              <span
                className={cn(
                  'absolute h-0.5 w-5 sm:w-6 rounded-full bg-current transition-all duration-300',
                  isMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'
                )}
              />
              <span
                className={cn(
                  'absolute h-0.5 w-3 sm:w-4 rounded-full bg-current transition-all duration-300',
                  isMenuOpen ? 'w-5 sm:w-6 translate-y-0 -rotate-45' : 'translate-y-1.5'
                )}
              />
            </button>
          </div>
        </div>

        {/* Backdrop */}
        <div
          className={cn(
            'fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300',
            isMenuOpen ? 'pointer-events-auto opacity-100 z-[55]' : 'pointer-events-none opacity-0 z-[-1]'
          )}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden={!isMenuOpen}
        />
        
        {/* Side Menu */}
        <div
          className={cn(
            'fixed inset-y-0 right-0 w-full max-w-md transform transition-transform duration-500 ease-in-out z-[60]',
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
              
              <div className="pt-6 border-t border-white/10">
                <Button
                  onClick={() => {
                    scrollToSection('contact')
                    setIsMenuOpen(false)
                  }}
                  className={cn('w-full border bg-transparent transition-all duration-300', menuButtonClass)}
                >
                  Porozmawiajmy
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
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
                  <button onClick={() => { scrollToSection('custom-section'); setIsMenuOpen(false); }} className="transition-colors duration-200 hover:text-accent">Studio</button>
                  <button onClick={() => { scrollToSection('projects'); setIsMenuOpen(false); }} className="transition-colors duration-200 hover:text-accent">Projekty</button>
                  <button onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }} className="transition-colors duration-200 hover:text-accent">O nas</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative w-full">
          <section id="top" data-theme="dark" className="relative w-full bg-white overflow-hidden min-h-screen">
            {/* Video Background Carousel - Full Width */}
            <div className="absolute inset-0 w-full h-full">
              {heroVideos.map((video, index) => (
                <video
                  key={index}
                  ref={(el) => (heroVideoRefs.current[index] = el)}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
                    activeHeroVideo === index ? "opacity-100" : "opacity-0"
                  )}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={video} type="video/mp4" />
                </video>
              ))}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            </div>

            {/* Video Carousel Indicators */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {heroVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveHeroVideo(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeHeroVideo === index
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/75"
                  )}
                  aria-label={`Przejdź do wideo ${index + 1}`}
                />
              ))}
            </div>

            {/* Heading - Top Right Corner */}
            <div className="absolute top-24 right-6 lg:top-32 lg:right-16 xl:right-24 z-10 max-w-xl lg:max-w-2xl pr-4 lg:pr-8">
              <h1 
                className="text-[3rem] sm:text-[4.5rem] lg:text-[6rem] xl:text-[8rem] font-black leading-[0.85] tracking-tighter group cursor-default text-right"
                style={{
                  transform: `perspective(1000px) rotateX(${heroMousePosition.y * 0.05}deg) rotateY(${heroMousePosition.x * 0.05}deg)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <span className="block bg-gradient-to-r from-white via-gray-100 to-white animated-gradient bg-clip-text text-transparent transition-all duration-700 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  POWŁOKI
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 animated-gradient bg-clip-text text-transparent transition-all duration-700 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  PRZYSZŁOŚCI
                </span>
              </h1>
            </div>

            {/* Floating Badge - Bottom Center */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 floating-badge">
              <div className="bg-blue-700 text-white px-6 py-3 rounded-full shadow-2xl border-2 border-white/20 backdrop-blur-sm">
                <span className="text-sm font-bold uppercase tracking-wider">✨ Darmowa Konsultacja</span>
              </div>
            </div>
          </section>

          {/* Sekcja Liczb/Metryk - Trust Indicators z Stagger Reveal */}
          <section ref={metricsRef} id="metrics" data-theme="light" className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
            {/* Background Decorations */}
            <div className="bg-decoration bg-decoration-blue float-animation" style={{ width: '300px', height: '300px', top: '10%', left: '5%' }} />
            <div className="bg-decoration bg-decoration-orange float-animation" style={{ width: '250px', height: '250px', bottom: '15%', right: '10%', animationDelay: '2s' }} />
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              {/* Grid 1x4 metryk z Stagger Animation */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Metryka 1 */}
                <div className={`text-center group ${metricsVisible ? 'metric-stagger' : 'opacity-0'}`}>
                  <div className="relative text-7xl lg:text-8xl font-black text-blue-700 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600 number-glow">
                    <CountUp end={15} suffix="+" shouldStart={metricsVisible} />
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-600 font-semibold">
                    LAT DOŚWIADCZENIA
                  </p>
                </div>

                {/* Metryka 2 */}
                <div className={`text-center group ${metricsVisible ? 'metric-stagger' : 'opacity-0'}`}>
                  <div className="relative text-7xl lg:text-8xl font-black text-blue-700 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600 number-glow">
                    <CountUp end={500} suffix="+" shouldStart={metricsVisible} />
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-600 font-semibold">
                    ZREALIZOWANYCH PROJEKTÓW
                  </p>
                </div>

                {/* Metryka 3 */}
                <div className={`text-center group ${metricsVisible ? 'metric-stagger' : 'opacity-0'}`}>
                  <div className="relative text-7xl lg:text-8xl font-black text-blue-700 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600 number-glow">
                    24H
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-600 font-semibold">
                    CZAS REAKCJI
                  </p>
                </div>

                {/* Metryka 4 */}
                <div className={`text-center group ${metricsVisible ? 'metric-stagger' : 'opacity-0'}`}>
                  <div className="relative text-7xl lg:text-8xl font-black text-blue-700 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600 number-glow">
                    ISO
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-600 font-semibold">
                    9001:2015 CERTYFIKAT
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="services" data-theme="light" className="relative py-20 lg:py-32 bg-white overflow-hidden">
            {/* Background Decorations */}
            <div className="bg-decoration bg-decoration-blue float-animation" style={{ width: '400px', height: '400px', top: '5%', right: '0%' }} />
            <div className="bg-decoration bg-decoration-orange float-animation" style={{ width: '350px', height: '350px', bottom: '10%', left: '0%', animationDelay: '3s' }} />
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              {/* Nagłówek sekcji - wyrównany do prawej jak Vibor.it */}
              <div className="text-right mb-20 max-w-7xl ml-auto section-reveal">
                <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-6 font-semibold">NASZE USŁUGI</p>
                <h2 className="text-8xl lg:text-9xl xl:text-[10rem] font-black uppercase mb-6 text-gray-400 tracking-tighter leading-none">
                  NASZE USŁUGI
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl ml-auto font-normal leading-relaxed">
                  Kompleksowe rozwiązania metalizacyjne dla różnorodnych zastosowań przemysłowych
                </p>
              </div>

              {/* Grid 2x2 usług - układ po skosie */}
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
                {servicesData.map((service, index) => {
                  // Układ po skosie: lewe kafelki niżej, prawe wyżej
                  // Lewy: index 0 (+80px), index 2 (+160px)
                  // Prawy: index 1 (0px), index 3 (+80px)
                  const isLeftColumn = index % 2 === 0
                  const rowNumber = Math.floor(index / 2)
                  const translateY = isLeftColumn 
                    ? (rowNumber + 1) * 80  // Lewe: 80px, 160px
                    : rowNumber * 80  // Prawe: 0px, 80px
                  
                  return (
                    <div
                      key={service.id}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 group hover:shadow-2xl stagger-item"
                      style={{
                        transform: `translateY(${translateY}px)`,
                        animationDelay: `${index * 0.1}s`
                      }}
                      onMouseEnter={(e) => {
                        const current = e.currentTarget as HTMLElement
                        current.style.transform = `translateY(${translateY}px) perspective(1000px) rotateX(3deg) rotateY(-3deg) scale(1.02)`
                      }}
                      onMouseLeave={(e) => {
                        const current = e.currentTarget as HTMLElement
                        current.style.transform = `translateY(${translateY}px)`
                      }}
                    >
                    {/* Obrazek */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 group-hover:from-black/70" />
                      <div className="absolute bottom-4 left-4 text-7xl font-black text-white/30 transition-all duration-300 group-hover:text-white/40 group-hover:scale-105">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    
                    {/* Treść */}
                    <div className="p-8">
                      {/* Tytuł */}
                      <h3 className="text-2xl font-bold uppercase mb-3 text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                        {service.title}
                      </h3>
                      
                      {/* Tagline */}
                      <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-4 transition-all duration-300 group-hover:tracking-[0.3em]">
                        {service.tagline}
                      </p>
                      
                      {/* Opis */}
                      <p className="text-gray-600 leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  )
                })}
              </div>
            </div>
          </section>

      {/* INTERACTIVE TECH SPECS TABLE */}
      <section data-theme="light" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-6 font-semibold">PORÓWNANIE TECHNOLOGII</p>
              <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black uppercase mb-8 tracking-tighter text-gray-400">
                PORÓWNAJ<br />TECHNOLOGIE
              </h2>
            </div>

            {/* Filters & Compare Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedFilter('all')}
                  className={cn(
                    'px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm transition-all',
                    selectedFilter === 'all'
                      ? 'bg-blue-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  )}
                >
                  Wszystkie
                </button>
                {techSpecsData.map((spec) => (
                  <button
                    key={spec.id}
                    onClick={() => setSelectedFilter(spec.id)}
                    className={cn(
                      'px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm transition-all',
                      selectedFilter === spec.id
                        ? 'bg-blue-700 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    )}
                  >
                    {spec.method.split(' ')[0]}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => {
                  setCompareMode(!compareMode)
                  setSelectedForCompare([])
                }}
                className={cn(
                  'px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm transition-all',
                  compareMode
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                {compareMode ? '✓ Compare Mode' : 'Compare Mode'}
              </button>
            </div>

            {/* Table */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <tr>
                    {compareMode && <th className="p-4 text-left text-xs uppercase tracking-wider text-gray-600 font-bold">Select</th>}
                    <th className="p-4 text-left text-xs uppercase tracking-wider text-gray-600 font-bold">Metoda</th>
                    <th className="p-4 text-left text-xs uppercase tracking-wider text-gray-600 font-bold">Temperatura</th>
                    <th className="p-4 text-left text-xs uppercase tracking-wider text-gray-600 font-bold">Grubość</th>
                    <th className="p-4 text-left text-xs uppercase tracking-wider text-gray-600 font-bold">Zastosowanie</th>
                    <th className="p-4 text-center text-xs uppercase tracking-wider text-gray-600 font-bold">Szczegóły</th>
                  </tr>
                </thead>
                <tbody>
                  {techSpecsData
                    .filter((spec) => selectedFilter === 'all' || selectedFilter === spec.id)
                    .map((spec) => (
                      <>
                        <tr
                          key={spec.id}
                          className={cn(
                            'border-t border-gray-200 hover:bg-blue-50 transition-colors cursor-pointer',
                            selectedForCompare.includes(spec.id) && 'bg-blue-100'
                          )}
                          onClick={() => setExpandedRow(expandedRow === spec.id ? null : spec.id)}
                        >
                          {compareMode && (
                            <td className="p-4">
                              <input
                                type="checkbox"
                                checked={selectedForCompare.includes(spec.id)}
                                onChange={(e) => {
                                  e.stopPropagation()
                                  if (selectedForCompare.includes(spec.id)) {
                                    setSelectedForCompare(selectedForCompare.filter((id) => id !== spec.id))
                                  } else if (selectedForCompare.length < 2) {
                                    setSelectedForCompare([...selectedForCompare, spec.id])
                                  }
                                }}
                                className="w-5 h-5"
                                disabled={!selectedForCompare.includes(spec.id) && selectedForCompare.length >= 2}
                              />
                            </td>
                          )}
                          <td className="p-4 font-bold text-gray-900">{spec.method}</td>
                          <td className="p-4 text-gray-700">{spec.temperature}</td>
                          <td className="p-4 text-gray-700">{spec.thickness}</td>
                          <td className="p-4 text-gray-700 text-sm">{spec.applications}</td>
                          <td className="p-4 text-center">
                            <button className="text-blue-700 hover:text-blue-900 font-bold">
                              {expandedRow === spec.id ? '▲' : '▼'}
                            </button>
                          </td>
                        </tr>
                        {expandedRow === spec.id && (
                          <tr className="bg-gray-50 border-t border-gray-200">
                            <td colSpan={compareMode ? 6 : 5} className="p-6">
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-3">Zalety:</h4>
                                  <ul className="space-y-2">
                                    {spec.advantages.map((advantage, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                        <span className="text-blue-700 font-bold">✓</span>
                                        {advantage}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-3">Materiały:</h4>
                                  <p className="text-sm text-gray-700">{spec.materials}</p>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </>
                    ))}
                </tbody>
              </table>
            </div>

            {/* Compare Results */}
            {compareMode && selectedForCompare.length === 2 && (
              <div className="mt-8 p-8 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-700 rounded-2xl">
                <h3 className="text-2xl font-black uppercase mb-6 text-blue-900">Porównanie</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {selectedForCompare.map((id) => {
                    const spec = techSpecsData.find((s) => s.id === id)
                    if (!spec) return null
                    return (
                      <div key={id} className="space-y-4">
                        <h4 className="text-xl font-bold text-gray-900">{spec.method}</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Temperatura:</strong> {spec.temperature}</p>
                          <p><strong>Grubość:</strong> {spec.thickness}</p>
                          <p><strong>Materiały:</strong> {spec.materials}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sekcja Dlaczego STANIAX - Premium Video Background (Vibor.it Style) */}
      <section
        id="custom-section"
        data-theme="dark"
        className="relative py-20 lg:py-32 overflow-hidden"
      >
        {/* Video Background with Overlay */}
        <div className="absolute inset-0" aria-hidden="true">
          {!prefersReducedMotion ? (
            <video
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transform: `scale(${Math.min(1.0 + scrollY * 0.0002, 1.1)})` }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={whyChooseVideo} type="video/mp4" />
            </video>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          )}
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/85 to-slate-950/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Nagłówek sekcji - wyrównany do lewej jak Vibor.it */}
          <div className="text-left mb-20 max-w-7xl mr-auto section-reveal">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60 mb-6 font-semibold">DLACZEGO MY</p>
            <h2 className="text-7xl lg:text-8xl xl:text-9xl font-black uppercase mb-6 tracking-tighter leading-none text-gray-400">
              STANIAX
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mr-auto font-normal leading-relaxed">
              Dlaczego warto wybrać nas jako partnera do metalizacji przemysłowej
            </p>
          </div>

          {/* Trzy kolumny z ikonami - wzór Vibor.it */}
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Kolumna 1: Wsparcie Techniczne */}
            <div className="text-center space-y-4 group stagger-item hover-lift">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-white/30">
                  <Users className="w-8 h-8 text-blue-400 icon-pulse" />
                </div>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider text-white transition-colors duration-300 group-hover:text-blue-400">
                WSPARCIE TECHNICZNE
              </h3>
              <p className="text-white/70 leading-relaxed font-normal">
                Towarzyszymy klientowi w wyborze odpowiedniego rozwiązania dla jego potrzeb, oferując również techniczny serwis posprzedażny.
              </p>
            </div>

            {/* Kolumna 2: Jakość Produktów */}
            <div className="text-center space-y-4 group stagger-item hover-lift">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-white/30">
                  <Shield className="w-8 h-8 text-blue-400 icon-pulse" />
                </div>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider text-white transition-colors duration-300 group-hover:text-blue-400">
                JAKOŚĆ PRODUKTÓW
              </h3>
              <p className="text-white/70 leading-relaxed font-normal">
                Innowacyjne pomysły i szczególna uwaga na wpływ środowiskowy produkcji przemysłowej to misja STANIAX.
              </p>
            </div>

            {/* Kolumna 3: Personalizacja */}
            <div className="text-center space-y-4 group stagger-item hover-lift">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-white/30">
                  <Wrench className="w-8 h-8 text-blue-400 icon-pulse" />
                </div>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider text-white transition-colors duration-300 group-hover:text-blue-400">
                PERSONALIZACJA
              </h3>
              <p className="text-white/70 leading-relaxed font-normal">
                Towarzyszymy klientowi podczas konfiguracji produktu, aby zidentyfikować najlepsze ustawienia wydajności.
              </p>
            </div>
          </div>

          {/* Paragraf ISO - na dole */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-sm text-white/70 leading-relaxed font-normal">
              STANIAX POSIADA SYSTEM ZARZĄDZANIA JAKOŚCIĄ <span className="font-bold text-white">CERTYFIKOWANY ISO 9001:2015</span> I WSZYSTKIE PRODUKTY SĄ PROJEKTOWANE ZGODNIE Z EUROPEJSKIMI REGULACJAMI TECHNICZNYMI, ABY ZAPEWNIĆ NAJWYŻSZE STANDARDY JAKOŚCI.
            </p>
          </div>

          {/* Micro-CTA */}
          <div className="mt-8 text-center">
            <p className="text-sm text-white/70 font-normal">
              POTRZEBUJESZ POMOCY? {' '}
              <button 
                onClick={() => scrollToSection('contact')} 
                className="font-bold text-blue-400 hover:text-blue-300 hover:underline transition-all"
              >
                SKONTAKTUJ SIĘ Z NAMI
              </button>
            </p>
          </div>
        </div>
      </section>

        <section id="about" data-theme="light" className="relative py-20 lg:py-32 bg-white overflow-hidden">
          {/* Background Decorations */}
          <div className="bg-decoration bg-decoration-blue float-animation" style={{ width: '350px', height: '350px', top: '8%', right: '5%' }} />
          <div className="bg-decoration bg-decoration-orange float-animation" style={{ width: '300px', height: '300px', bottom: '12%', left: '3%', animationDelay: '2.5s' }} />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            {/* Nagłówek sekcji - wyrównany do prawej jak Vibor.it */}
            <div className="text-right mb-20 section-reveal">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-6 font-semibold">O NAS</p>
              <div className="bg-gray-100 py-16 px-12 lg:px-24 -mx-6 lg:-mx-12 rounded-t-2xl pb-32">
                <h2 className="text-7xl lg:text-8xl xl:text-9xl font-black uppercase mb-6 tracking-tighter leading-none text-gray-400">
                  TWORZYMY DOSKONAŁOŚĆ<br />W METALIZACJI
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl ml-auto font-normal mt-6 leading-relaxed">
                  15 lat doświadczenia w zaawansowanych technologiach metalizacyjnych
                </p>
              </div>
            </div>

            {/* Grid 2x2 kart - układ po skosie - w szarym tle */}
            <div className="bg-gray-100 -mx-6 lg:-mx-12 px-6 lg:px-12 pt-8 pb-20 -mt-32">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
              {/* Karta 1: Kim Jesteśmy - Prawy górny (0px) */}
              <div 
                className="bg-white border border-gray-200 rounded-lg p-10 transition-all duration-300 group hover:shadow-2xl stagger-item"
                style={{
                  transform: 'translateY(0px)',
                  animationDelay: '0s'
                }}
                onMouseEnter={(e) => {
                  const current = e.currentTarget as HTMLElement
                  current.style.transform = `translateY(0px) perspective(1000px) rotateX(2deg) rotateY(-2deg) scale(1.02)`
                }}
                onMouseLeave={(e) => {
                  const current = e.currentTarget as HTMLElement
                  current.style.transform = `translateY(0px)`
                }}
              >
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-700 group-hover:rotate-6">
                  <Factory className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-6 text-gray-900 tracking-wide">
                  KIM JESTEŚMY
                </h3>
                <p className="text-gray-600 leading-relaxed font-normal text-base">
                  <span className="font-bold text-gray-900">STANIAX Sp. z o.o.</span> to warszawska spółka technologiczna z siedzibą przy ul. Grzybowskiej 5A, specjalizująca się w zaawansowanych rozwiązaniach metalizacyjnych dla przemysłu. Łączymy ponad 15-letnie doświadczenie w inżynierii powierzchni z nowoczesnymi technologiami.
                </p>
              </div>

              {/* Karta 2: Technologie - Lewy górny (80px) */}
              <div 
                className="bg-white border border-gray-200 rounded-xl p-12 lg:p-14 transition-all duration-500 group hover:shadow-2xl hover:border-blue-200 stagger-item"
                style={{
                  transform: 'translateY(80px)',
                  animationDelay: '0.1s'
                }}
                onMouseEnter={(e) => {
                  const current = e.currentTarget as HTMLElement
                  current.style.transform = `translateY(80px) perspective(1000px) rotateX(2deg) rotateY(-2deg) scale(1.02)`
                }}
                onMouseLeave={(e) => {
                  const current = e.currentTarget as HTMLElement
                  current.style.transform = `translateY(80px)`
                }}
              >
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-700 group-hover:rotate-6">
                  <Wrench className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-6 text-gray-900 tracking-wide">
                  TECHNOLOGIE
                </h3>
                <p className="text-gray-600 leading-relaxed font-normal text-base">
                  Oferujemy szeroki zakres metod: <span className="font-semibold text-gray-800">PVD, CVD, natrysk plazmowy</span> oraz <span className="font-semibold text-gray-800">galwanizację przemysłową</span>. Pracujemy z materiałami takimi jak tytan, chrom, nikiel, wolfram oraz ceramika techniczna.
                </p>
              </div>

              {/* Karta 3: Branże - Prawy dolny (80px) */}
              <div 
                className="bg-white border border-gray-200 rounded-xl p-12 lg:p-14 transition-all duration-500 group hover:shadow-2xl hover:border-blue-200 stagger-item"
                style={{
                  transform: 'translateY(80px)',
                  animationDelay: '0.2s'
                }}
                onMouseEnter={(e) => {
                  const current = e.currentTarget as HTMLElement
                  current.style.transform = `translateY(80px) perspective(1000px) rotateX(2deg) rotateY(-2deg) scale(1.02)`
                }}
                onMouseLeave={(e) => {
                  const current = e.currentTarget as HTMLElement
                  current.style.transform = `translateY(80px)`
                }}
              >
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-700 group-hover:rotate-6">
                  <Users className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-6 text-gray-900 tracking-wide">
                  BRANŻE
                </h3>
                <p className="text-gray-600 leading-relaxed font-normal text-base">
                  Realizujemy projekty dla <span className="font-semibold text-gray-800">przemysłu lotniczego, motoryzacyjnego, medycznego, energetycznego</span> oraz <span className="font-semibold text-gray-800">sektora narzędziowego</span>. Nasze powłoki zwiększają odporność na zużycie, korozję i wysokie temperatury.
                </p>
              </div>

              {/* Karta 4: Jakość - Lewy dolny (160px) */}
              <div 
                className="bg-white border border-gray-200 rounded-xl p-12 lg:p-14 transition-all duration-500 group hover:shadow-2xl hover:border-blue-200 stagger-item"
                style={{
                  transform: 'translateY(160px)',
                  animationDelay: '0.3s'
                }}
                onMouseEnter={(e) => {
                  const current = e.currentTarget as HTMLElement
                  current.style.transform = `translateY(160px) perspective(1000px) rotateX(2deg) rotateY(-2deg) scale(1.02)`
                }}
                onMouseLeave={(e) => {
                  const current = e.currentTarget as HTMLElement
                  current.style.transform = `translateY(160px)`
                }}
              >
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-700 group-hover:rotate-6">
                  <Trophy className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-6 text-gray-900 tracking-wide">
                  JAKOŚĆ
                </h3>
                <div className="space-y-4 text-base text-gray-600 leading-relaxed font-normal">
                  <p><span className="font-bold text-gray-900">✓ ISO 9001:2015</span> - Certyfikowane zarządzanie jakością</p>
                  <p><span className="font-bold text-gray-900">✓ Kontrole środowiskowe</span> - Nowoczesne technologie oczyszczania</p>
                  <p><span className="font-bold text-gray-900">✓ Wsparcie 24/7</span> - Elastyczne planowanie i dostępność</p>
                </div>
              </div>
            </div>
            </div>

            {/* Cytat misji - poniżej siatki - w szarym tle */}
            <div className="bg-gray-100 -mx-6 lg:-mx-12 px-6 lg:px-12 pt-8 pb-12 -mt-8">
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-600 italic border-l-4 border-blue-700 pl-8 leading-relaxed font-normal">
                  "Nasza misja to nie tylko nanoszenie powłok, ale budowanie długoterminowych partnerstw opartych na innowacjach, jakości i zaufaniu. Każdy projekt traktujemy indywidualnie, oferując pełne wsparcie techniczne od etapu projektowania po serwis posprzedażny."
                </p>
              </div>

              {/* CTA - wyśrodkowany - w szarym tle */}
              <div className="text-center mt-12">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold uppercase tracking-wider transition-all duration-300 px-12 py-5 rounded-lg hover:shadow-2xl hover:scale-[1.02]"
                >
                  Skontaktuj się z nami
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES CAROUSEL - Vibor.it Style */}
        <section ref={projectsSectionRef} id="projects" data-theme="light" className="py-20 lg:py-32 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="text-left mb-20 max-w-7xl section-reveal">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-6 font-semibold">STUDIA PRZYPADKÓW</p>
              <h2 className="text-7xl lg:text-8xl xl:text-9xl font-black uppercase mb-8 tracking-tighter leading-none text-gray-400">
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
                      <div className="relative group">
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
                      </div>

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
                          {caseStudy.metrics.map((metric, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-3xl lg:text-4xl font-black text-blue-700 mb-2">
                                {metric.value}
                              </div>
                              <p className="text-xs uppercase tracking-wider text-gray-600 font-semibold">
                                {metric.label}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Testimonial */}
                        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8">
                          <blockquote className="space-y-4">
                            <p className="text-gray-700 leading-relaxed italic">
                              "{caseStudy.testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                              <img
                                src={caseStudy.testimonial.avatar}
                                alt={caseStudy.testimonial.author}
                                className="w-12 h-12 rounded-full object-cover border-2 border-blue-700"
                              />
                              <div>
                                <cite className="not-italic font-bold text-gray-900 block">
                                  — {caseStudy.testimonial.author}
                                </cite>
                                <span className="text-sm text-gray-600">
                                  {caseStudy.testimonial.role}
                                </span>
                              </div>
                            </div>
                          </blockquote>
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
                  className="w-12 h-12 rounded-full bg-gray-200 hover:bg-blue-700 text-gray-700 hover:text-white transition-all duration-300 flex items-center justify-center font-bold"
                  aria-label="Previous slide"
                >
                  ←
                </button>

                {/* Dots */}
                <div className="flex gap-3">
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
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => {
                    setActiveSlide((prev) => (prev + 1) % caseStudiesData.length)
                    setIsAutoPlaying(false)
                  }}
                  className="w-12 h-12 rounded-full bg-gray-200 hover:bg-blue-700 text-gray-700 hover:text-white transition-all duration-300 flex items-center justify-center font-bold"
                  aria-label="Next slide"
                >
                  →
                </button>
              </div>
            </div>

            {/* CTA - Traditional Grid Below Carousel */}
            <div className="text-center mt-20">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-6 font-semibold">Zobacz więcej</p>
              <Button
                onClick={() => navigate('/news')}
                className="magnetic-button px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
              >
                Wszystkie Projekty
                <ArrowRight className="w-5 h-5 ml-2 inline-block" />
              </Button>
            </div>
          </div>
        </section>

        <section
          id="news-showcase"
          data-theme="dark"
          className="relative isolate overflow-hidden py-24 lg:py-32"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/80 to-slate-950/95" aria-hidden />

          <div className="relative z-10 container mx-auto px-6 lg:px-12">
            <div className="mx-auto max-w-5xl text-white">
              <div className="space-y-10">
                <div className="w-full space-y-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.5em]">
                    Nowości STANIAX
                  </span>
                  <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-end md:justify-between md:text-left pb-5">
                    <div className="flex flex-col items-center gap-4 md:items-start">
                      <span className="text-[3.5rem] font-black uppercase leading-[0.85] tracking-[-0.03em] sm:text-[4.5rem] lg:text-[6rem] text-gray-400">
                        ZOBACZ
                      </span>
                    </div>
                    <span className="hidden h-24 w-px bg-white/25 md:block" aria-hidden />
                    <div className="flex flex-col items-center gap-3 md:items-start">
                      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.85em] text-white/60">
                        NASZE
                      </span>
                      <span className="text-[2.75rem] font-black uppercase leading-[0.9] tracking-[-0.01em] sm:text-[3.25rem] lg:text-[4rem] text-gray-400">
                        NOWOŚCI
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  ref={newsAnimationRef}
                  className="w-full min-h-[calc(65vh-290px)] lg:min-h-[calc(78vh-290px)] relative"
                  aria-hidden
                >
                  {shouldRenderNewsSpline ? (
                    <spline-viewer
                      key={newsSplineKey}
                      url={newsSplineUrl}
                      className="block h-full w-full"
                      style={{ transform: `scale(${newsScaleValue})` }}
                    />
                  ) : shouldRenderNewsVideoFallback ? (
                    <video
                      className="block h-full w-full object-cover rounded-2xl"
                      style={{ transform: `scale(${newsScaleValue})` }}
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={fallbackAnimationSrc} type="video/mp4" />
                    </video>
                  ) : shouldRenderNewsReducedMotionNotice ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="max-w-md rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-center text-white shadow-2xl backdrop-blur">
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Animacja wyłączona</p>
                        <p className="mt-3 text-lg font-medium text-white/85">
                          Efekty ruchu są obecnie wyłączone. Aby zobaczyć animację nowości STANIAX, włącz animacje w ustawieniach urządzenia.
                        </p>
                      </div>
                    </div>
                  ) : null}
                  
                  <div className="absolute bottom-[20px] left-0 right-0 flex justify-center">
                    <Button
                      onClick={() => navigate('/news')}
                      variant="outline"
                      className="border-white/60 bg-white/15 backdrop-blur-sm hover:bg-white/30 text-white font-bold uppercase tracking-[0.25em] transition-all duration-300"
                    >
                      Pobierz Biuletyn
                      <ArrowRight className="h-5 w-5 ml-2 inline-block" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" data-theme="light" className="py-20 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-8 font-semibold text-center">KONTAKT</p>
              
              <div className="mb-12 text-center">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.85] tracking-tighter mb-6 text-gray-400">
                  SKONTAKTUJ SIĘ<br />Z NAMI
                </h2>
                <p className="text-lg text-gray-600 font-normal max-w-xl mx-auto leading-relaxed">
                  Wypełnij formularz, a my skontaktujemy się z Tobą w ciągu 24 godzin
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-12">
                <div className="flex justify-between mb-4">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={cn(
                        'flex items-center gap-2',
                        formStep >= step ? 'text-blue-700' : 'text-gray-400'
                      )}
                    >
                      <div className={cn(
                        'w-10 h-10 rounded-full flex items-center justify-center font-bold',
                        formStep >= step ? 'bg-blue-700 text-white' : 'bg-gray-200'
                      )}>
                        {step}
                      </div>
                      <span className="hidden sm:inline text-sm font-semibold">
                        {step === 1 && 'Projekt'}
                        {step === 2 && 'Technologia'}
                        {step === 3 && 'Kontakt'}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-700 transition-all duration-500"
                    style={{ width: `${(formStep / 3) * 100}%` }}
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
                          onClick={() => setSmartFormData({ ...smartFormData, projectType: type })}
                          className={cn(
                            'p-6 border-2 rounded-xl font-bold uppercase tracking-wider transition-all hover:scale-105',
                            smartFormData.projectType === type
                              ? 'border-blue-700 bg-blue-50 text-blue-900'
                              : 'border-gray-200 hover:border-blue-300'
                          )}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {formStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">Wybierz technologię</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {['PVD', 'CVD', 'Natrysk Plazmowy', 'Galwanizacja'].map((tech) => (
                        <button
                          key={tech}
                          onClick={() => setSmartFormData({ ...smartFormData, technology: tech })}
                          className={cn(
                            'p-6 border-2 rounded-xl font-bold uppercase tracking-wider transition-all hover:scale-105',
                            smartFormData.technology === tech
                              ? 'border-blue-700 bg-blue-50 text-blue-900'
                              : 'border-gray-200 hover:border-blue-300'
                          )}
                        >
                          {tech}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {formStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">Twoje dane kontaktowe</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        placeholder="Imię *"
                        value={smartFormData.firstName}
                        onChange={(e) => setSmartFormData({ ...smartFormData, firstName: e.target.value })}
                        className="border-2"
                      />
                      <Input
                        placeholder="Nazwisko *"
                        value={smartFormData.lastName}
                        onChange={(e) => setSmartFormData({ ...smartFormData, lastName: e.target.value })}
                        className="border-2"
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="Email *"
                      value={smartFormData.email}
                      onChange={(e) => setSmartFormData({ ...smartFormData, email: e.target.value })}
                      className="border-2"
                    />
                    <Input
                      placeholder="Telefon"
                      value={smartFormData.phone}
                      onChange={(e) => setSmartFormData({ ...smartFormData, phone: e.target.value })}
                      className="border-2"
                    />
                    <Textarea
                      placeholder="Wiadomość *"
                      value={smartFormData.message}
                      onChange={(e) => setSmartFormData({ ...smartFormData, message: e.target.value })}
                      className="border-2 min-h-32"
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
                    {formStep < 3 ? (
                      <Button
                        onClick={() => setFormStep(formStep + 1)}
                        className="bg-blue-700 hover:bg-blue-800 font-bold"
                        disabled={
                          (formStep === 1 && !smartFormData.projectType) ||
                          (formStep === 2 && !smartFormData.technology)
                        }
                      >
                        Dalej →
                      </Button>
                    ) : (
                      <Button
                        onClick={() => {
                          triggerConfetti()
                          toast.success('Wiadomość wysłana!')
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
                        Wyślij 🚀
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="flex flex-col sm:flex-row gap-6 mt-12">
                <button
                  onClick={() => window.open('mailto:kontakt@staniax.pl', '_blank')}
                  className="group px-8 py-4 bg-gray-900 text-white font-bold uppercase tracking-wider hover:bg-gray-800 transition-all duration-300 rounded-lg hover:shadow-2xl hover:scale-[1.02] magnetic-button"
                >
                  kontakt@staniax.pl
                </button>
                <button
                  onClick={() => window.open('https://maps.google.com/?q=Grzybowska+5A,+00-132+Warszawa', '_blank')}
                  className="group px-8 py-4 border-2 border-gray-300 text-gray-900 font-bold uppercase tracking-wider hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 rounded-lg hover:shadow-2xl hover:scale-[1.02] magnetic-button"
                >
                  Grzybowska 5A, Warszawa
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Toaster position="top-right" richColors />
      <CookieBanner />

      <footer className="bg-slate-950 text-white">
        <div className="container mx-auto px-6 lg:px-12 py-12">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Kolumna 1: Logo i opis */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-lg">
                  <Factory className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-black uppercase">STANIAX</p>
                </div>
              </div>
              <p className="text-sm text-white/70 font-normal max-w-xs">
                Specjalizujemy się w zaawansowanych powłokach metalicznych dla branż przemysłowych i high-tech.
              </p>
            </div>

            {/* Kolumna 2: Szybka nawigacja + Certifications */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.5em] text-white/60 font-bold">Nawigacja</p>
              <ul className="space-y-3 text-white/80 text-sm font-normal">
                <li><button onClick={() => scrollToSection('services')} className="link-underline hover:text-white transition-colors">Oferta</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="link-underline hover:text-white transition-colors">Realizacje</button></li>
                <li><button onClick={() => scrollToSection('about')} className="link-underline hover:text-white transition-colors">O nas</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="link-underline hover:text-white transition-colors">Kontakt</button></li>
              </ul>
              
              <div className="pt-4">
                <p className="text-xs uppercase tracking-[0.5em] text-white/60 font-bold mb-3">Certyfikaty</p>
                <ul className="space-y-2 text-white/80 text-sm font-normal">
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-400" />
                    ISO 9001:2015
                  </li>
                  <li className="text-white/60 text-xs">Polityka Prywatności (wkrótce)</li>
                  <li className="text-white/60 text-xs">Regulamin (wkrótce)</li>
                </ul>
              </div>
            </div>

            {/* Kolumna 3: Dane kontaktowe */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.5em] text-white/60 font-bold">Kontakt</p>
              <div className="space-y-3 text-white/80 text-sm font-normal">
                <p className="font-bold text-white">STANIAX Sp. z o.o.</p>
                <p className="leading-relaxed">
                  Grzybowska 5A<br />
                  00-132 Warszawa<br />
                  Polska
                </p>
                <div className="leading-relaxed space-y-1">
                  <p>NIP: 5253052509</p>
                  <p>KRS: 0001182026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6">
          <div className="container mx-auto px-6 lg:px-12 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs uppercase tracking-[0.4em] text-white/50">
            <span>© {new Date().getFullYear()} STANIAX Sp. z o.o. Wszelkie prawa zastrzeżone.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
// Force reload wto, 4 lis 2025, 23:36:53 CET
