import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, X, CaretLeft, CaretRight, Factory, Sparkle } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

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

const galleryImages = [
  { src: gallery01, alt: 'Złote elementy kosmetyczne', category: 'Złoto' },
  { src: gallery02, alt: 'Metalizacja chromowa', category: 'Chrom' },
  { src: gallery03, alt: 'Powłoki dekoracyjne', category: 'Dekoracyjne' },
  { src: gallery04, alt: 'Złote nakrętki premium', category: 'Złoto' },
  { src: gallery05, alt: 'Chromowane detale', category: 'Chrom' },
  { src: gallery06, alt: 'Rzeźba chromowana', category: 'Dekoracyjne' },
  { src: gallery07, alt: 'Złote opakowania', category: 'Złoto' },
  { src: gallery08, alt: 'Metalizacja próżniowa', category: 'Chrom' },
  { src: gallery09, alt: 'Elementy dekoracyjne', category: 'Dekoracyjne' },
  { src: gallery10, alt: 'Złote wykończenia', category: 'Złoto' },
  { src: gallery11, alt: 'Chromowane komponenty', category: 'Chrom' },
  { src: gallery12, alt: 'Złote elementy seryjne', category: 'Złoto' },
  { src: gallery13, alt: 'Powłoki lustrzane', category: 'Dekoracyjne' },
  { src: gallery14, alt: 'Złote detale', category: 'Złoto' },
  { src: gallery15, alt: 'Chromowane powierzchnie', category: 'Chrom' },
  { src: gallery16, alt: 'Metalizacja premium', category: 'Dekoracyjne' },
  { src: gallery17, alt: 'Złote akcesoria', category: 'Złoto' },
  { src: gallery18, alt: 'Chromowane elementy', category: 'Chrom' },
  { src: gallery19, alt: 'Wykończenia luksusowe', category: 'Dekoracyjne' },
  { src: gallery20, alt: 'Złote powłoki', category: 'Złoto' },
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

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState('Wszystkie')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

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
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-slate-400/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-2xl">
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-12 py-5">
          <Link to="/" className="group flex items-center gap-4" aria-label="Powrót na stronę główną">
            <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-black flex items-center justify-center shadow-lg shadow-amber-500/20 transition-all duration-500 group-hover:shadow-amber-500/40 group-hover:scale-105">
              <Factory className="w-6 h-6" weight="bold" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
            </div>
            <div className="leading-tight">
              <span className="block text-[10px] uppercase tracking-[0.4em] text-amber-400/80 font-medium">
                STANIAX
              </span>
              <span className="block text-xl font-black text-white tracking-tight">
                Galeria
              </span>
            </div>
          </Link>
          <Link
            to="/"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/30 text-white font-medium rounded-full transition-all duration-500 backdrop-blur-sm"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="hidden sm:inline">Strona główna</span>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-8">
              <Sparkle className="w-4 h-4 text-amber-400" weight="fill" />
              <span className="text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold">Nasze realizacje</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
              <span className="block">GALERIA</span>
              <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                REALIZACJI
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/50 max-w-2xl leading-relaxed font-light">
              Odkryj perfekcję metalizacji próżniowej. Każdy projekt to unikalne połączenie 
              precyzji inżynieryjnej i artystycznej wizji.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12 sticky top-[85px] z-40 bg-[#0a0a0a]/90 backdrop-blur-xl">
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
                    ? 'text-black'
                    : 'text-white/60 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20'
                )}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 rounded-full"
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
            className="mt-6 text-sm text-white/30"
          >
            Wyświetlanie <span className="text-amber-400 font-semibold">{filteredImages.length}</span> {filteredImages.length === 1 ? 'realizacji' : 'realizacji'}
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
                    alt={image.alt}
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
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-white/10 group-hover:ring-amber-400/30 transition-all duration-500" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-400 text-black text-xs font-bold rounded-full uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-black/30" />
                      {image.category}
                    </span>
                    <p className="mt-3 text-white/80 text-sm font-medium hidden sm:block">{image.alt}</p>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Sparkle className="w-4 h-4 text-amber-400" weight="fill" />
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
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-amber-500/5 rounded-full blur-[100px]" />
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
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl shadow-black/50"
              />
              
              {/* Image info bar */}
              <div className="absolute -bottom-16 left-0 right-0 flex items-center justify-center gap-4">
                <span className="px-4 py-2 bg-amber-400 text-black text-xs font-bold rounded-full uppercase tracking-wider">
                  {filteredImages[selectedImage].category}
                </span>
                <span className="text-white/40 text-sm">
                  {filteredImages[selectedImage].alt}
                </span>
              </div>
            </motion.div>

            {/* Counter & Progress */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6">
              <span className="text-white/40 text-sm font-mono">
                <span className="text-amber-400 font-bold">{String(selectedImage + 1).padStart(2, '0')}</span>
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
                        ? 'bg-amber-400 w-6' 
                        : 'bg-white/20 hover:bg-white/40'
                    )}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative border-t border-white/5 py-12 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Factory className="w-5 h-5 text-black" weight="bold" />
              </div>
              <div>
                <p className="text-sm text-white/30 font-medium">
                  © {new Date().getFullYear()} STANIAX Sp. z o.o.
                </p>
                <p className="text-xs text-white/20">Wszelkie prawa zastrzeżone</p>
              </div>
            </div>
            
            <Link
              to="/"
              className="group inline-flex items-center gap-3 text-white/50 hover:text-amber-400 transition-colors duration-300 font-medium"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Wróć do strony głównej
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default GalleryPage
