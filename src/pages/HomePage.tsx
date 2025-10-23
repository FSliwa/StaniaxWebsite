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
import heroVideo from '@/assets/Generowanie_Wideo_Smukła_Dłoń_Peace.mp4'
import whyChooseVideo from '@/assets/Generowanie_Wideo_Produktowego_Dłoń_i_Mikrofon.mp4'
import serviceImg1 from '@/assets/482dc07a-e7ec-4a67-a180-35c9f97aa5e3.JPG'
import serviceImg2 from '@/assets/4b131dc0-12bf-4aee-bca5-bee6a42b2e68.JPG'
import serviceImg3 from '@/assets/688dc033-2f1e-4b6e-94e4-728b7278993a.JPG'
import projectImgAutomotive from '@/assets/IMG_0990-2575648632.jpeg'
import projectImgAerospace from '@/assets/airplane-04-1600x900.jpg'
import projectImgIndustrial from '@/assets/roboty-fabryka-590199267.jpg'
import projectImgPrototype from '@/assets/budowa-prototypow-maszyn-800914852.webp'

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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast.error('Proszę wypełnić wszystkie wymagane pola')
      return
    }

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

  const heroScaleValue = Math.min(1.05 + scrollY * 0.0006, 1.25)
  
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

      {/* Wavy Line - Vibor.it Style Signature Element */}
      {isDesktop && !prefersReducedMotion && (
        <div 
          ref={wavyLineContainerRef}
          className={`wavy-line-container ${wavyLineVisible ? 'visible' : ''}`}
          aria-hidden="true"
        >
          <svg width="100%" height="100%">
            <path 
              d={wavyLinePath}
              className="wavy-line-path"
            />
            {/* Animated dots on the line */}
            <circle r="4" className="wavy-dot">
              <animateMotion
                dur="8s"
                repeatCount="indefinite"
                path={wavyLinePath}
              />
            </circle>
            <circle r="3" className="wavy-dot">
              <animateMotion
                dur="8s"
                repeatCount="indefinite"
                begin="2.6s"
                path={wavyLinePath}
              />
            </circle>
            <circle r="3" className="wavy-dot">
              <animateMotion
                dur="8s"
                repeatCount="indefinite"
                begin="5.2s"
                path={wavyLinePath}
              />
            </circle>
          </svg>
        </div>
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
                Metal Coating Studio
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
            'fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300',
            isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          )}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden={!isMenuOpen}
        />
        
        {/* Side Menu */}
        <div
          className={cn(
            'fixed inset-y-0 right-0 z-50 w-full max-w-md transform transition-transform duration-500 ease-in-out',
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
          <section id="top" data-theme="dark" className="relative min-h-[600px] max-h-[85vh] lg:h-screen w-full flex flex-col justify-end overflow-hidden">
            <div className="absolute inset-0" aria-hidden>
              <video
                className="absolute inset-0 w-full h-full object-cover"
                style={{ transform: `scale(${heroScaleValue})` }}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={heroVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-br from-background/92 via-background/75 to-background/88" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/45 to-transparent" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 pb-16 lg:pb-24">
              <div className="max-w-5xl space-y-10">
                <div className="space-y-8">
                  <h1 className="text-7xl lg:text-9xl xl:text-[10rem] font-black leading-none tracking-tight text-white">
                    <span className="block">Przemysłowe</span>
                    <span className="block">Powłoki</span>
                    <span className="block text-accent">Na Miarę Przyszłości</span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-white/80 font-medium max-w-3xl leading-relaxed">
                    Projektujemy i nanosimy powłoki metaliczne, które zwiększają wydajność, chronią komponenty i podkreślają Twoją technologiczną przewagę konkurencyjną.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => scrollToSection('projects')}
                    className="ripple-effect liquid-metal-button magnetic-button text-white font-semibold border-0 transition-all duration-300"
                  >
                    Zobacz Nasze Prace
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="ripple-effect magnetic-button font-semibold backdrop-blur-sm bg-white/10 hover:bg-white/20 border-white/30 hover:border-white/50 text-white transition-all duration-300"
                    onClick={() => scrollToSection('contact')}
                  >
                    <Phone className="w-5 h-5 mr-2 icon-pulse" />
                    Skontaktuj się z nami
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Sekcja Liczb/Metryk - Trust Indicators */}
          <section ref={metricsRef} id="metrics" data-theme="light" className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
            {/* Background Decorations */}
            <div className="bg-decoration bg-decoration-blue float-animation" style={{ width: '300px', height: '300px', top: '10%', left: '5%' }} />
            <div className="bg-decoration bg-decoration-orange float-animation" style={{ width: '250px', height: '250px', bottom: '15%', right: '10%', animationDelay: '2s' }} />
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              {/* Nagłówek sekcji - wyrównany do lewej jak Vibor.it */}
              <div className="text-left mb-16 max-w-7xl mr-auto section-reveal">
                <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-4 font-semibold">OUR ACHIEVEMENTS</p>
                <h2 className="text-8xl lg:text-9xl font-black uppercase mb-4 text-gray-900 tracking-tighter leading-none">
                  W LICZBACH
                </h2>
                <p className="text-base text-gray-600 max-w-2xl mr-auto font-normal">
                  Sprawdzone doświadczenie i dziesiątki zadowolonych klientów w branży przemysłowej
                </p>
              </div>

              {/* Grid 1x4 metryk - prosty układ poziomy */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Metryka 1 */}
                <div className="text-center group">
                  <div className="text-5xl lg:text-6xl font-black text-blue-700 mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600 number-glow">
                    <CountUp end={15} suffix="+" shouldStart={metricsVisible} />
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-600 font-semibold">
                    LAT DOŚWIADCZENIA
                  </p>
                </div>

                {/* Metryka 2 */}
                <div className="text-center group">
                  <div className="text-5xl lg:text-6xl font-black text-blue-700 mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600 number-glow">
                    <CountUp end={500} suffix="+" shouldStart={metricsVisible} />
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-600 font-semibold">
                    ZREALIZOWANYCH PROJEKTÓW
                  </p>
                </div>

                {/* Metryka 3 */}
                <div className="text-center group">
                  <div className="text-5xl lg:text-6xl font-black text-blue-700 mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600 number-glow">
                    24H
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-600 font-semibold">
                    CZAS REAKCJI
                  </p>
                </div>

                {/* Metryka 4 */}
                <div className="text-center group">
                  <div className="text-5xl lg:text-6xl font-black text-blue-700 mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600 number-glow">
                    ISO
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-600 font-semibold">
                    9001:2015 CERTYFIKAT
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="services" data-theme="light" className="relative py-24 bg-white overflow-hidden">
            {/* Background Decorations */}
            <div className="bg-decoration bg-decoration-blue float-animation" style={{ width: '400px', height: '400px', top: '5%', right: '0%' }} />
            <div className="bg-decoration bg-decoration-orange float-animation" style={{ width: '350px', height: '350px', bottom: '10%', left: '0%', animationDelay: '3s' }} />
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              {/* Nagłówek sekcji - wyrównany do prawej jak Vibor.it */}
              <div className="text-right mb-16 max-w-7xl ml-auto section-reveal">
                <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-4 font-semibold">OUR SERVICES</p>
                <h2 className="text-8xl lg:text-9xl font-black uppercase mb-4 text-gray-900 tracking-tighter leading-none">
                  NASZE USŁUGI
                </h2>
                <p className="text-base text-gray-600 max-w-2xl ml-auto font-normal">
                  Kompleksowe rozwiązania metalizacyjne dla różnorodnych zastosowań przemysłowych
                </p>
              </div>

              {/* Grid 2x2 usług - układ po skosie */}
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
      </div>

      {/* Sekcja Dlaczego STANIAX - Premium Video Background (Vibor.it Style) */}
      <section
        id="custom-section"
        data-theme="dark"
        className="relative py-24 overflow-hidden"
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
          <div className="text-left mb-16 max-w-7xl mr-auto section-reveal">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60 mb-4 font-semibold">WHY CHOOSE</p>
            <h2 className="text-8xl lg:text-9xl font-black uppercase mb-4 text-white tracking-tighter leading-none">
              STANIAX
            </h2>
            <p className="text-base text-white/80 max-w-2xl mr-auto font-normal">
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

        <section id="about" data-theme="light" className="relative py-24 bg-white overflow-hidden">
          {/* Background Decorations */}
          <div className="bg-decoration bg-decoration-blue float-animation" style={{ width: '350px', height: '350px', top: '8%', right: '5%' }} />
          <div className="bg-decoration bg-decoration-orange float-animation" style={{ width: '300px', height: '300px', bottom: '12%', left: '3%', animationDelay: '2.5s' }} />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            {/* Nagłówek sekcji - wyrównany do prawej jak Vibor.it */}
            <div className="text-right mb-16 max-w-7xl ml-auto section-reveal">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-4 font-semibold">ABOUT US</p>
              <h2 className="text-8xl lg:text-9xl font-black uppercase mb-4 text-gray-900 tracking-tighter leading-none">
                TWORZYMY DOSKONAŁOŚĆ<br />W METALIZACJI
              </h2>
              <p className="text-base text-gray-600 max-w-2xl ml-auto font-normal">
                15 lat doświadczenia w zaawansowanych technologiach metalizacyjnych
              </p>
            </div>

            {/* Grid 2x2 kart - układ po skosie */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700">
                  <Factory className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-gray-900 tracking-wide">
                  KIM JESTEŚMY
                </h3>
                <p className="text-gray-600 leading-relaxed font-normal">
                  <span className="font-bold text-gray-900">STANIAX Sp. z o.o.</span> to warszawska spółka technologiczna z siedzibą przy ul. Grzybowskiej 5A, specjalizująca się w zaawansowanych rozwiązaniach metalizacyjnych dla przemysłu. Łączymy ponad 15-letnie doświadczenie w inżynierii powierzchni z nowoczesnymi technologiami.
                </p>
              </div>

              {/* Karta 2: Technologie - Lewy górny (80px) */}
              <div 
                className="bg-white border border-gray-200 rounded-lg p-10 transition-all duration-300 group hover:shadow-2xl stagger-item"
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
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700">
                  <Wrench className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-gray-900 tracking-wide">
                  TECHNOLOGIE
                </h3>
                <p className="text-gray-600 leading-relaxed font-normal">
                  Oferujemy szeroki zakres metod: <span className="font-semibold text-gray-800">PVD, CVD, natrysk plazmowy</span> oraz <span className="font-semibold text-gray-800">galwanizację przemysłową</span>. Pracujemy z materiałami takimi jak tytan, chrom, nikiel, wolfram oraz ceramika techniczna.
                </p>
              </div>

              {/* Karta 3: Branże - Prawy dolny (80px) */}
              <div 
                className="bg-white border border-gray-200 rounded-lg p-10 transition-all duration-300 group hover:shadow-2xl stagger-item"
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
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700">
                  <Users className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-gray-900 tracking-wide">
                  BRANŻE
                </h3>
                <p className="text-gray-600 leading-relaxed font-normal">
                  Realizujemy projekty dla <span className="font-semibold text-gray-800">przemysłu lotniczego, motoryzacyjnego, medycznego, energetycznego</span> oraz <span className="font-semibold text-gray-800">sektora narzędziowego</span>. Nasze powłoki zwiększają odporność na zużycie, korozję i wysokie temperatury.
                </p>
              </div>

              {/* Karta 4: Jakość - Lewy dolny (160px) */}
              <div 
                className="bg-white border border-gray-200 rounded-lg p-10 transition-all duration-300 group hover:shadow-2xl stagger-item"
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
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700">
                  <Trophy className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-gray-900 tracking-wide">
                  JAKOŚĆ
                </h3>
                <div className="space-y-3 text-sm text-gray-600 leading-relaxed font-normal">
                  <p><span className="font-bold text-gray-900">✓ ISO 9001:2015</span> - Certyfikowane zarządzanie jakością</p>
                  <p><span className="font-bold text-gray-900">✓ Kontrole środowiskowe</span> - Nowoczesne technologie oczyszczania</p>
                  <p><span className="font-bold text-gray-900">✓ Wsparcie 24/7</span> - Elastyczne planowanie i dostępność</p>
                </div>
              </div>
            </div>

            {/* Cytat misji - poniżej siatki */}
            <div className="max-w-4xl mx-auto mt-20">
              <p className="text-base text-gray-600 italic border-l-4 border-blue-700 pl-6 leading-relaxed font-normal">
                "Nasza misja to nie tylko nanoszenie powłok, ale budowanie długoterminowych partnerstw opartych na innowacjach, jakości i zaufaniu. Każdy projekt traktujemy indywidualnie, oferując pełne wsparcie techniczne od etapu projektowania po serwis posprzedażny."
              </p>
            </div>

            {/* CTA - wyśrodkowany */}
            <div className="text-center mt-12">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-10 py-4 bg-blue-700 text-white font-bold uppercase tracking-wider hover:bg-blue-800 transition-all duration-300 rounded-md hover:shadow-lg"
              >
                Skontaktuj się z nami
              </button>
            </div>
          </div>
        </section>

        <section ref={projectsSectionRef} id="projects" data-theme="light" className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-4">OUR WORK</p>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 uppercase mb-6">
                NAJNOWSZE PROJEKTY
              </h2>
              <p className="text-gray-600 font-medium max-w-2xl mx-auto">
                Odkryj nasze najnowsze projekty metalizacyjne w różnych branżach, prezentujące precyzję i jakość.
              </p>
            </div>

            {/* Simple Grid - No tooltips, no complex hover */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-200 bg-gray-100 card-tilt hover-lift cursor-pointer stagger-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IndustrialImage
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                  >
                    <div className="relative z-10 text-center text-white transition-all duration-300 group-hover:scale-105">
                      <div className="icon-pulse">{project.icon}</div>
                      <p className="font-bold text-lg tracking-wide uppercase mt-2">{project.title}</p>
                      <p className="text-xs uppercase tracking-wider opacity-80 mt-1 transition-opacity duration-300 group-hover:opacity-100">{project.category} • {project.year}</p>
                    </div>
                  </IndustrialImage>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => navigate('/news')}
                className="ripple-effect magnetic-button px-8 py-3 bg-blue-700 text-white font-bold uppercase tracking-wider hover:bg-blue-800 transition-colors"
              >
                Zobacz Wszystkie Projekty
              </button>
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
                      <span className="text-[3.5rem] font-black uppercase leading-[0.85] tracking-[-0.03em] sm:text-[4.5rem] lg:text-[6rem]">
                        ZOBACZ
                      </span>
                    </div>
                    <span className="hidden h-24 w-px bg-white/25 md:block" aria-hidden />
                    <div className="flex flex-col items-center gap-3 md:items-start">
                      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.85em] text-white/60">
                        NASZE
                      </span>
                      <span className="text-[2.75rem] font-black uppercase leading-[0.9] tracking-[-0.01em] sm:text-[3.25rem] lg:text-[4rem]">
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
                      size="lg"
                      variant="outline"
                      className="px-8 py-6 font-semibold uppercase tracking-[0.25em] text-white border-white/60 bg-white/15 backdrop-blur-sm shadow-lg transition-colors hover:bg-white hover:text-slate-950"
                      onClick={() => navigate('/news')}
                    >
                      <span className="flex items-center gap-3">
                        Pobierz Biuletyn
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" data-theme="light" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Vibor.it style layout - left aligned giant text */}
            <div className="max-w-7xl mx-auto">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-4 font-semibold">GET IN TOUCH</p>
              
              {/* Giant headline like Vibor.it */}
              <div className="mb-16">
                <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-900 uppercase leading-[0.9] tracking-tighter mb-8">
                  GOTOWY NA<br />
                  ROZPOCZĘCIE<br />
                  PROJEKTU?
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 font-normal max-w-2xl">
                  Skontaktuj się z naszym zespołem w celu konsultacji i wyceny.
                </p>
              </div>

              {/* Informacje kontaktowe w prostym układzie */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">Adres</h3>
                  <p className="text-sm text-gray-600 font-normal">
                    Grzybowska 5A<br />
                    00-132 Warszawa<br />
                    Polska
                  </p>
                  <a
                    href="https://maps.google.com/?q=Grzybowska+5A,+00-132+Warszawa"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline mt-2 inline-block"
                  >
                    Zobacz na mapie
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <EnvelopeSimple className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">Dane Rejestrowe</h3>
                  <div className="text-sm text-gray-600 font-normal space-y-1">
                    <p>KRS: 0001182026</p>
                    <p>NIP: 5253052509</p>
                    <p>REGON: 542156053</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">Kontakt</h3>
                  <p className="text-sm text-gray-600 font-normal">
                    Formularz kontaktowy dostępny wkrótce
                  </p>
                </div>
              </div>

              {/* Duży CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => window.open('mailto:kontakt@staniax.pl', '_blank')}
                  className="ripple-effect magnetic-button hover-lift px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase tracking-wider transition-all duration-300 rounded-md text-lg"
                >
                  Napisz Do Nas
                  <ArrowRight className="w-5 h-5 ml-2 inline-block transition-transform duration-300 hover:translate-x-1" />
                </button>
                <button
                  onClick={() => window.open('https://maps.google.com/?q=Grzybowska+5A,+00-132+Warszawa', '_blank')}
                  className="ripple-effect magnetic-button hover-lift px-10 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold uppercase tracking-wider transition-all duration-300 rounded-md text-lg"
                >
                  Odwiedź Nas
                </button>
              </div>

              {/* Dodatkowe info */}
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mt-12 font-semibold">
                Potrzebujesz pomocy? Skontaktuj się z nami już dziś
              </p>
            </div>
          </div>
        </section>

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
