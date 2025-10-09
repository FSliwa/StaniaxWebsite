import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { toast, Toaster } from 'sonner'
import { 
  Factory, 
  Shield, 
  Clock, 
  Trophy, 
  Phone, 
  EnvelopeSimple, 
  MapPin,
  ArrowRight,
  Gear,
  Wrench,
  Target,
  List
} from '@phosphor-icons/react'
import arcSprayingImage from '@/assets/images/natrysk-lukowy.jpeg'

// Placeholder image component matching Maveric's industrial aesthetic
function PlaceholderImage({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={`bg-gradient-to-br from-accent/20 via-accent/10 to-primary/10 rounded-2xl flex items-center justify-center ${className}`}>
      {children}
    </div>
  )
}

// Real industrial image component
function IndustrialImage({ src, alt, className, children }: { src: string; alt: string; className?: string; children?: React.ReactNode }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {children && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  )
}

function CountUp({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-right" richColors />
      {/* Header - matching Maveric's clean navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <div className="text-2xl font-black text-foreground">
            STANIAX
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-foreground/70 hover:text-accent transition-colors font-medium">O nas</a>
            <a href="#services" className="text-foreground/70 hover:text-accent transition-colors font-medium">Usługi</a>
            <a href="#projects" className="text-foreground/70 hover:text-accent transition-colors font-medium">Projekty</a>
            <a href="#contact" className="text-foreground/70 hover:text-accent transition-colors font-medium">Kontakt</a>
            <Button 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 font-semibold"
            >
              Wycena
            </Button>
          </nav>
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <List className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero Section - Large text layout like Maveric with animated background */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden">
        {/* Animated Industrial Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translateX(${scrollY * 0.3}px)`,
          }}
        >
          {/* Industrial skyline pattern */}
          <div className="absolute inset-0">
            <svg 
              className="w-full h-full object-cover" 
              viewBox="0 0 1920 800" 
              fill="none"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Factory buildings silhouette moving right */}
              <g fill="var(--accent)" opacity="0.6">
                {/* Main factory building */}
                <rect x="100" y="400" width="200" height="300" rx="8" />
                <rect x="120" y="350" width="60" height="50" rx="4" />
                <rect x="220" y="380" width="60" height="20" rx="4" />
                
                {/* Smokestacks */}
                <rect x="140" y="200" width="20" height="200" rx="10" />
                <rect x="240" y="180" width="15" height="220" rx="7" />
                
                {/* Additional buildings */}
                <rect x="350" y="450" width="150" height="250" rx="6" />
                <rect x="550" y="420" width="180" height="280" rx="8" />
                <rect x="780" y="380" width="120" height="320" rx="6" />
                
                {/* Industrial structures */}
                <polygon points="950,500 1050,500 1000,350" opacity="0.8" />
                <rect x="1100" y="440" width="160" height="260" rx="8" />
                <rect x="1120" y="390" width="40" height="50" rx="4" />
                
                {/* Far buildings (smaller, more distant) */}
                <rect x="1300" y="500" width="100" height="200" rx="4" opacity="0.7" />
                <rect x="1450" y="480" width="80" height="220" rx="4" opacity="0.6" />
                <rect x="1580" y="520" width="90" height="180" rx="4" opacity="0.5" />
                <rect x="1720" y="460" width="120" height="240" rx="6" opacity="0.4" />
              </g>
              
              {/* Connecting infrastructure */}
              <g stroke="var(--accent)" strokeWidth="3" fill="none" opacity="0.4">
                <path d="M300,600 Q400,580 500,600 T700,590" />
                <path d="M700,590 Q800,585 900,595 T1100,600" />
                <path d="M1100,600 Q1200,605 1300,595 T1500,600" />
              </g>
              
              {/* Additional moving elements for parallax */}
              <g opacity="0.3">
                <circle cx="200" cy="300" r="8" fill="var(--accent)" />
                <circle cx="400" cy="320" r="6" fill="var(--accent)" />
                <circle cx="600" cy="290" r="10" fill="var(--accent)" />
                <circle cx="800" cy="310" r="7" fill="var(--accent)" />
                <circle cx="1000" cy="280" r="9" fill="var(--accent)" />
                <circle cx="1200" cy="300" r="5" fill="var(--accent)" />
                <circle cx="1400" cy="320" r="8" fill="var(--accent)" />
                <circle cx="1600" cy="290" r="6" fill="var(--accent)" />
              </g>
            </svg>
          </div>
        </div>

        {/* Secondary layer moving at different speed */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateX(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0">
            <svg 
              className="w-full h-full object-cover" 
              viewBox="0 0 1920 800" 
              fill="none"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Background industrial elements moving faster */}
              <g fill="var(--primary)" opacity="0.8">
                <rect x="50" y="520" width="80" height="180" rx="4" />
                <rect x="200" y="500" width="100" height="200" rx="6" />
                <rect x="380" y="480" width="90" height="220" rx="5" />
                <rect x="550" y="540" width="70" height="160" rx="4" />
                <rect x="700" y="510" width="110" height="190" rx="6" />
                <rect x="900" y="490" width="85" height="210" rx="5" />
                <rect x="1100" y="530" width="95" height="170" rx="4" />
                <rect x="1300" y="505" width="75" height="195" rx="4" />
                <rect x="1500" y="520" width="88" height="180" rx="5" />
                <rect x="1700" y="485" width="105" height="215" rx="6" />
              </g>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="space-y-6 lg:space-y-8">
                <h1 className="text-5xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight">
                  <span className="block text-foreground">Najwyższej</span>
                  <span className="block text-foreground">Jakości</span>
                  <span className="inline-flex items-center gap-4">
                    <span className="text-accent">Metalizacja</span>
                    <div className="w-16 h-16 lg:w-24 lg:h-24 bg-accent rounded-full flex items-center justify-center">
                      <Factory className="w-8 h-8 lg:w-12 lg:h-12 text-accent-foreground" />
                    </div>
                  </span>
                </h1>
                <div className="max-w-2xl">
                  <p className="text-lg lg:text-xl text-muted-foreground font-medium">
                    Zaawansowane technologie powłok dla rozwoju prototypów i zastosowań przemysłowych. 
                    Dostarczamy doskonałość od 1985 roku.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    onClick={scrollToProjects}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    Zobacz Nasze Prace
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="font-semibold"
                    onClick={() => window.location.href = 'tel:+441234567890'}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Zadzwoń Teraz
                  </Button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Arc Spraying Equipment Image */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={arcSprayingImage} 
                    alt="Natrysk łukowy - zaawansowane urządzenie do metalizacji" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-lg">
                  <p className="font-bold text-sm">Specjalizacja</p>
                  <p className="text-xs opacity-90">Natrysk Łukowy</p>
                </div>
                {/* Technical specs overlay */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-foreground">Aktywne</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Card grid layout with images */}
      <section id="services" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl lg:text-6xl font-black mb-6">
                Nasze
                <span className="block text-accent">Usługi</span>
              </h2>
              <p className="text-lg text-muted-foreground font-medium">
                Kompleksowe rozwiązania metalizacyjne dla różnorodnych zastosowań przemysłowych z precyzją i jakością.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card overflow-hidden">
                  <div className="aspect-[16/10] relative">
                    <IndustrialImage 
                      src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop&crop=center"
                      alt="Precyzyjny rozwój prototypów i proces powłokowy"
                      className="w-full h-full rounded-t-lg"
                    >
                      <Gear className="w-16 h-16 text-white/80" />
                    </IndustrialImage>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold">Rozwój Prototypów</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Szybkie prototypowanie z zaawansowanymi rozwiązaniami powłokowymi dla faz rozwoju i testowania produktu.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card overflow-hidden">
                  <div className="aspect-[16/10] relative">
                    <IndustrialImage 
                      src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&h=400&fit=crop&crop=center"
                      alt="Przemysłowe powłoki i proces obróbki powierzchni"
                      className="w-full h-full rounded-t-lg"
                    >
                      <Shield className="w-16 h-16 text-white/80" />
                    </IndustrialImage>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold">Powłoki Przemysłowe</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Trwałe powłoki metaliczne dla komponentów przemysłowych wymagających najwyższej ochrony i wydajności.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card overflow-hidden">
                  <div className="aspect-[16/10] relative">
                    <IndustrialImage 
                      src="https://images.unsplash.com/photo-1609199132922-0c3970858613?w=600&h=400&fit=crop&crop=center"
                      alt="Precyzyjne wykończenia i proces kontroli jakości"
                      className="w-full h-full rounded-t-lg"
                    >
                      <Target className="w-16 h-16 text-white/80" />
                    </IndustrialImage>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold">Wykończenia Precyzyjne</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Wysoko precyzyjne obróbki powierzchni dla komponentów wymagających dokładnych specyfikacji i jakości.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card overflow-hidden">
                  <div className="aspect-[16/10] relative">
                    <IndustrialImage 
                      src="https://images.unsplash.com/photo-1513828742074-1ca2ac6f2d6f?w=600&h=400&fit=crop&crop=center"
                      alt="Rozwiązania metalizacyjne na miarę i usługi inżynieryjne"
                      className="w-full h-full rounded-t-lg"
                    >
                      <Wrench className="w-16 h-16 text-white/80" />
                    </IndustrialImage>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold">Rozwiązania Na Miarę</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Usługi metalizacyjne dostosowane do specyficznych wymagań i wyzwań branżowych.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Large numbers display */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center lg:text-left">
              <div className="text-4xl lg:text-6xl font-black text-accent mb-2">
                <CountUp end={38} suffix="+" />
              </div>
              <h3 className="text-lg font-bold mb-1">Lat</h3>
              <p className="text-muted-foreground text-sm font-medium">Doświadczenia</p>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-4xl lg:text-6xl font-black text-accent mb-2">
                <CountUp end={2500} suffix="+" />
              </div>
              <h3 className="text-lg font-bold mb-1">Projektów</h3>
              <p className="text-muted-foreground text-sm font-medium">Zakończonych</p>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-4xl lg:text-6xl font-black text-accent mb-2">
                <CountUp end={150} suffix="+" />
              </div>
              <h3 className="text-lg font-bold mb-1">Klientów</h3>
              <p className="text-muted-foreground text-sm font-medium">Zadowolonych</p>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-4xl lg:text-6xl font-black text-accent mb-2">
                <CountUp end={99} suffix="%" />
              </div>
              <h3 className="text-lg font-bold mb-1">Jakości</h3>
              <p className="text-muted-foreground text-sm font-medium">Standardy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Image grid like Maveric */}
      <section id="projects" className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              Najnowsze
              <span className="block text-accent">Projekty</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
              Odkryj nasze najnowsze projekty metalizacyjne w różnych branżach, prezentujące precyzję i jakość.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IndustrialImage 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=450&fit=crop&crop=center"
              alt="Powłoki i wykończenia komponentów motoryzacyjnych"
              className="aspect-[4/3] group cursor-pointer overflow-hidden"
            >
              <div className="text-center text-white transform group-hover:scale-105 transition-transform duration-300">
                <Gear className="w-16 h-16 mx-auto mb-2 opacity-90" />
                <p className="font-bold text-lg">Komponenty Motoryzacyjne</p>
              </div>
            </IndustrialImage>
            
            <IndustrialImage 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=450&fit=crop&crop=center"
              alt="Precyzyjna metalizacja części lotniczych"
              className="aspect-[4/3] group cursor-pointer overflow-hidden"
            >
              <div className="text-center text-white transform group-hover:scale-105 transition-transform duration-300">
                <Shield className="w-16 h-16 mx-auto mb-2 opacity-90" />
                <p className="font-bold text-lg">Części Lotnicze</p>
              </div>
            </IndustrialImage>
            
            <IndustrialImage 
              src="https://images.unsplash.com/photo-1609199132922-0c3970858613?w=600&h=450&fit=crop&crop=center"
              alt="Powłoki narzędzi precyzyjnych i sprzętu"
              className="aspect-[4/3] group cursor-pointer overflow-hidden"
            >
              <div className="text-center text-white transform group-hover:scale-105 transition-transform duration-300">
                <Target className="w-16 h-16 mx-auto mb-2 opacity-90" />
                <p className="font-bold text-lg">Narzędzia Precyzyjne</p>
              </div>
            </IndustrialImage>
            
            <IndustrialImage 
              src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=450&fit=crop&crop=center"
              alt="Obróbka powierzchni urządzeń przemysłowych"
              className="aspect-[4/3] group cursor-pointer overflow-hidden"
            >
              <div className="text-center text-white transform group-hover:scale-105 transition-transform duration-300">
                <Wrench className="w-16 h-16 mx-auto mb-2 opacity-90" />
                <p className="font-bold text-lg">Urządzenia Przemysłowe</p>
              </div>
            </IndustrialImage>
            
            <IndustrialImage 
              src="https://images.unsplash.com/photo-1513828742074-1ca2ac6f2d6f?w=600&h=450&fit=crop&crop=center"
              alt="Powłoki narzędzi i maszyn produkcyjnych"
              className="aspect-[4/3] group cursor-pointer overflow-hidden"
            >
              <div className="text-center text-white transform group-hover:scale-105 transition-transform duration-300">
                <Factory className="w-16 h-16 mx-auto mb-2 opacity-90" />
                <p className="font-bold text-lg">Narzędzia Produkcyjne</p>
              </div>
            </IndustrialImage>
            
            <IndustrialImage 
              src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&h=450&fit=crop&crop=center"
              alt="Projekty prototypów i rozwiązania na miarę"
              className="aspect-[4/3] group cursor-pointer overflow-hidden"
            >
              <div className="text-center text-white transform group-hover:scale-105 transition-transform duration-300">
                <Trophy className="w-16 h-16 mx-auto mb-2 opacity-90" />
                <p className="font-bold text-lg">Projekty Prototypów</p>
              </div>
            </IndustrialImage>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="font-semibold">
              Zobacz Wszystkie Projekty
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - Split layout with multiple images */}
      <section id="about" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <IndustrialImage 
                  src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=400&fit=crop&crop=center"
                  alt="Precyzyjne maszyny i sprzęt"
                  className="aspect-square"
                >
                  <Gear className="w-12 h-12 text-white/80" />
                </IndustrialImage>
                <IndustrialImage 
                  src="https://images.unsplash.com/photo-1609199132922-0c3970858613?w=400&h=400&fit=crop&crop=center"
                  alt="Kontrola jakości i proces inspekcji"
                  className="aspect-square"
                >
                  <Shield className="w-12 h-12 text-white/80" />
                </IndustrialImage>
                <IndustrialImage 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop&crop=center"
                  alt="Hala produkcyjna i linia montażowa"
                  className="aspect-square col-span-2"
                >
                  <div className="text-center text-white">
                    <Factory className="w-16 h-16 mx-auto mb-2 opacity-90" />
                    <p className="text-sm font-bold">Hala Produkcyjna</p>
                  </div>
                </IndustrialImage>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-4xl lg:text-6xl font-black mb-6">
                Tworzymy Doskonałość w
                <span className="block text-accent">Metalizacji</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 font-medium">
                Od 1985 roku STANIAX jest liderem w technologii powłok przemysłowych. 
                Nasze zaangażowanie w precyzję, jakość i innowacje czyni nas zaufanym partnerem dla 
                wiodących producentów w różnych branżach.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-accent" />
                  <span className="text-foreground font-medium">Certyfikowane Zarządzanie Jakością ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="text-foreground font-medium">Zaawansowane Kontrole Środowiskowe</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="text-foreground font-medium">Szybkie Terminy Realizacji</span>
                </div>
              </div>
              <Button size="lg" className="bg-accent hover:bg-accent/90 font-semibold">
                Dowiedz Się Więcej O Nas
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-4xl lg:text-6xl font-black mb-6">
                Gotowy Na Rozpoczęcie
                <span className="block text-accent">Projektu?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 font-medium">
                Skontaktuj się z naszym zespołem w celu konsultacji i wyceny
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
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Preferowany kontakt</h3>
                    <p className="text-muted-foreground font-medium">
                      Do czasu uruchomienia centrali prosimy o korzystanie z formularza kontaktowego lub wizytę w biurze.
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
                    <div className="grid grid-cols-2 gap-4">
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
                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full bg-accent hover:bg-accent/90 font-semibold"
                    >
                      Wyślij Wiadomość
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-black mb-4 md:mb-0">
              STANIAX
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground font-medium">
                © {new Date().getFullYear()} STANIAX Sp. z o.o. Wszelkie prawa zastrzeżone.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App