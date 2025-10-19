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
import heroVideo from '@/assets/Generowanie_Wideo_Powłoki_Metalicznej.mp4'
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
}

function CountUp({ end, duration = 2000, suffix = '' }: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  return <span>{count}{suffix}</span>
}

function HomePage() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState(0) // 0 for hero, 1 for services
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
  
  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutMosaicRef,
    offset: ['start 90%', 'end 15%']
  })
  const isSplineReady = splineStatus === 'ready'
  const shouldRenderNewsSpline = !prefersReducedMotion && hasNewsSpline && isSplineReady
  const shouldRenderNewsVideoFallback = !prefersReducedMotion && (!hasNewsSpline || splineStatus !== 'ready')
  const shouldRenderNewsReducedMotionNotice = prefersReducedMotion

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
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
          <section id="top" data-theme="dark" className="relative h-screen w-full flex flex-col justify-end overflow-hidden">
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
              <div className="max-w-4xl space-y-8">
                {/* Element nad hero - kreska i napisy */}
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.6em] text-white/70">
                  <span className="flex items-center gap-2">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30">
                      <Factory className="h-5 w-5" />
                    </span>
                    Eksperci metalizacji w Polsce
                  </span>
                  <span className="hidden sm:block h-px flex-1 bg-white/20" />
                  <span className="hidden sm:block">Od 2025</span>
                </div>

                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight text-white">
                    <span className="block">Przemysłowe</span>
                    <span className="block">Powłoki</span>
                    <span className="block text-accent">Na Miarę Przyszłości</span>
                  </h1>
                  <p className="text-lg lg:text-xl text-white/80 font-medium max-w-2xl">
                    Projektujemy i nanosimy powłoki metaliczne, które zwiększają wydajność, chronią komponenty i podkreślają Twoją technologiczną przewagę konkurencyjną.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => scrollToSection('projects')}
                    className="liquid-metal-button text-white font-semibold border-0"
                  >
                    Zobacz Nasze Prace
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-semibold backdrop-blur-sm bg-white/10 hover:bg-white/20 border-white/30 hover:border-white/50 text-white transition-all duration-300"
                    onClick={() => scrollToSection('contact')}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Skontaktuj się z nami
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section id="services" data-theme="light" className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              {/* Nagłówek sekcji */}
              <div className="text-center mb-16">
                <h2 className="text-5xl lg:text-6xl font-black uppercase mb-4 text-gray-900">
                  NASZE USŁUGI
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Kompleksowe rozwiązania metalizacyjne dla różnorodnych zastosowań przemysłowych
                </p>
              </div>

              {/* Grid 2x2 usług - wzór Vibor.it */}
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {servicesData.map((service, index) => (
                  <div
                    key={service.id}
                    className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 group"
                  >
                    {/* Numer */}
                    <div className="text-7xl font-black text-gray-100 mb-4 group-hover:text-blue-50 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Tytuł */}
                    <h3 className="text-2xl font-bold uppercase mb-3 text-gray-900">
                      {service.title}
                    </h3>
                    
                    {/* Tagline */}
                    <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-4">
                      {service.tagline}
                    </p>
                    
                    {/* Opis */}
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
      </div>

      {/* Sekcja Dlaczego STANIAX - wzorowana na Vibor.it */}
      <AnimatedSection
        id="custom-section"
        data-theme="light"
        className="relative py-24 bg-gray-50"
      >
        <div className="container mx-auto px-6 lg:px-12">
          {/* Nagłówek sekcji */}
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-4">WHY CHOOSE</p>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 uppercase">
              STANIAX
            </h2>
          </div>

          {/* Trzy kolumny z ikonami - wzór Vibor.it */}
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Kolumna 1: Wsparcie Techniczne */}
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider text-gray-900">
                WSPARCIE TECHNICZNE
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Towarzyszymy klientowi w wyborze odpowiedniego rozwiązania dla jego potrzeb, oferując również techniczny serwis posprzedażny.
              </p>
            </div>

            {/* Kolumna 2: Jakość Produktów */}
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider text-gray-900">
                JAKOŚĆ PRODUKTÓW
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Innowacyjne pomysły i szczególna uwaga na wpływ środowiskowy produkcji przemysłowej to misja STANIAX.
              </p>
            </div>

            {/* Kolumna 3: Personalizacja */}
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Wrench className="w-8 h-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider text-gray-900">
                PERSONALIZACJA
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Towarzyszymy klientowi podczas konfiguracji produktu, aby zidentyfikować najlepsze ustawienia wydajności.
              </p>
            </div>
          </div>

          {/* Paragraf ISO - na dole */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-sm text-gray-600 leading-relaxed">
              STANIAX POSIADA SYSTEM ZARZĄDZANIA JAKOŚCIĄ <span className="font-bold text-gray-900">CERTYFIKOWANY ISO 9001:2015</span> I WSZYSTKIE PRODUKTY SĄ PROJEKTOWANE ZGODNIE Z EUROPEJSKIMI REGULACJAMI TECHNICZNYMI, ABY ZAPEWNIĆ NAJWYŻSZE STANDARDY JAKOŚCI.
            </p>
          </div>

          {/* Micro-CTA */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              POTRZEBUJESZ POMOCY? {' '}
              <button 
                onClick={() => scrollToSection('contact')} 
                className="font-bold text-blue-700 hover:text-blue-800 hover:underline transition-all"
              >
                SKONTAKTUJ SIĘ Z NAMI
              </button>
            </p>
          </div>
        </div>
      </AnimatedSection>

        <AnimatedSection id="about" data-theme="light" className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <div ref={aboutMosaicRef} className="grid grid-cols-3 gap-4">
                  {aboutTilesData.map((tile) => (
                    <AboutTileMotion
                      key={tile.id}
                      config={tile}
                      scrollProgress={aboutScrollProgress}
                      prefersReducedMotion={prefersReducedMotion}
                    />
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-4">ABOUT US</p>
                <h2 className="text-5xl lg:text-6xl font-black text-gray-900 uppercase mb-6 leading-tight">
                  TWORZYMY DOSKONAŁOŚĆ W METALIZACJI
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  STANIAX Sp. z o.o. to warszawska spółka technologiczna z siedzibą przy ul. Grzybowskiej 5A. Łączymy ekspertów z wieloletnim doświadczeniem w inżynierii powierzchni, aby projektować i wdrażać powłoki metaliczne zgodne z wymaganiami branż przemysłowych i high-tech.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-blue-700" />
                    <span className="text-gray-900 font-medium">Certyfikowane Zarządzanie Jakością ISO 9001:2015</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-blue-700" />
                    <span className="text-gray-900 font-medium">Zaawansowane Kontrole Środowiskowe</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-700" />
                    <span className="text-gray-900 font-medium">Szybkie Terminy Realizacji</span>
                  </div>
                </div>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-blue-700 text-white font-bold uppercase tracking-wider hover:bg-blue-800 transition-colors"
                >
                  Dowiedz Się Więcej O Nas
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection ref={projectsSectionRef} id="projects" data-theme="light" className="py-24 bg-white">
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
              {projectsData.map((project) => (
                <div
                  key={project.id}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-200 bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <IndustrialImage
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                  >
                    <div className="relative z-10 text-center text-white">
                      {project.icon}
                      <p className="font-bold text-lg tracking-wide uppercase mt-2">{project.title}</p>
                      <p className="text-xs uppercase tracking-wider opacity-80 mt-1">{project.category} • {project.year}</p>
                    </div>
                  </IndustrialImage>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => navigate('/news')}
                className="px-8 py-3 bg-blue-700 text-white font-bold uppercase tracking-wider hover:bg-blue-800 transition-colors"
              >
                Zobacz Wszystkie Projekty
              </button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
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
        </AnimatedSection>

        <AnimatedSection id="contact" data-theme="light" className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <h2 className="text-4xl lg:text-6xl font-black mb-6">
                  Gotowy Na Rozpoczęcie
                  <span className="block text-accent">Projektu?</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 font-medium">
                  Skontaktuj się z naszym zespołem w celu konsultacji i wyceny.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Siedziba i korespondencja</h3>
                      <p className="text-muted-foreground font-medium">
                        Grzybowska 5A<br />
                        00-132 Warszawa<br />
                        Polska
                      </p>
                      <a
                        href="https://maps.google.com/?q=Grzybowska+5A,+00-132+Warszawa"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-accent hover:text-accent/90 transition-colors"
                      >
                        Zobacz dojazd na mapie
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <EnvelopeSimple className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Dane rejestrowe</h3>
                      <div className="text-muted-foreground font-medium space-y-1">
                        <p>KRS: 0001182026</p>
                        <p>NIP: 5253052509</p>
                        <p>REGON: 542156053</p>
                        <p>Kapitał zakładowy: 150 000 PLN (nieopłacony)</p>
                        <p>Główne PKD: 25.11.Z</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Preferowany kontakt</h3>
                      <p className="text-muted-foreground font-medium">
                        Numer telefonu zostanie udostępniony po uruchomieniu centrali. Do tego czasu prosimy o kontakt
                        za pośrednictwem formularza lub wizytę w naszej siedzibie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Wyślij nam wiadomość</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          placeholder="Imię"
                          className="font-medium"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                        <Input
                          placeholder="Nazwisko"
                          className="font-medium"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                      <Input
                        placeholder="Adres E-mail"
                        type="email"
                        className="font-medium"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                      <Input
                        placeholder="Numer Telefonu"
                        type="tel"
                        className="font-medium"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                      <Textarea
                        placeholder="Opowiedz nam o wymaganiach swojego projektu..."
                        className="min-h-[120px] font-medium"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                      />
                      <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 font-semibold">
                        Wyślij Wiadomość
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </AnimatedSection>

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
              <p className="text-sm text-white/70 font-medium max-w-xs">
                Specjalizujemy się w zaawansowanych powłokach metalicznych dla branż przemysłowych i high-tech.
              </p>
            </div>

            {/* Kolumna 2: Szybka nawigacja */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.5em] text-white/60 font-bold">Nawigacja</p>
              <ul className="space-y-3 text-white/80 text-sm">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Oferta</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors">Realizacje</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">O nas</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Kontakt</button></li>
              </ul>
            </div>

            {/* Kolumna 3: Dane kontaktowe */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.5em] text-white/60 font-bold">Kontakt</p>
              <div className="space-y-3 text-white/80 text-sm">
                <p className="font-bold text-white">STANIAX Sp. z o.o.</p>
                <p className="leading-relaxed">
                  Grzybowska 5A<br />
                  00-132 Warszawa<br />
                  Polska
                </p>
                <div className="leading-relaxed space-y-1">
                  <p>NIP: 5253052509</p>
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
