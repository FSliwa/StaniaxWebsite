import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowLeft, X, CaretLeft, CaretRight, Factory } from '@phosphor-icons/react'
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
  { src: gallery01, alt: 'Metalizacja próżniowa - projekt 1', category: 'Metalizacja' },
  { src: gallery02, alt: 'Metalizacja próżniowa - projekt 2', category: 'Metalizacja' },
  { src: gallery03, alt: 'Lakierowanie detali - projekt 3', category: 'Lakierowanie' },
  { src: gallery04, alt: 'Metalizacja próżniowa - projekt 4', category: 'Metalizacja' },
  { src: gallery05, alt: 'Odblaski w metalizacji - projekt 5', category: 'Odblaski' },
  { src: gallery06, alt: 'Metalizacja próżniowa - projekt 6', category: 'Metalizacja' },
  { src: gallery07, alt: 'Lakierowanie detali - projekt 7', category: 'Lakierowanie' },
  { src: gallery08, alt: 'Metalizacja próżniowa - projekt 8', category: 'Metalizacja' },
  { src: gallery09, alt: 'Odblaski w metalizacji - projekt 9', category: 'Odblaski' },
  { src: gallery10, alt: 'Metalizacja próżniowa - projekt 10', category: 'Metalizacja' },
  { src: gallery11, alt: 'Lakierowanie detali - projekt 11', category: 'Lakierowanie' },
  { src: gallery12, alt: 'Metalizacja próżniowa - projekt 12', category: 'Metalizacja' },
  { src: gallery13, alt: 'Odblaski w metalizacji - projekt 13', category: 'Odblaski' },
  { src: gallery14, alt: 'Metalizacja próżniowa - projekt 14', category: 'Metalizacja' },
  { src: gallery15, alt: 'Lakierowanie detali - projekt 15', category: 'Lakierowanie' },
  { src: gallery16, alt: 'Metalizacja próżniowa - projekt 16', category: 'Metalizacja' },
  { src: gallery17, alt: 'Odblaski w metalizacji - projekt 17', category: 'Odblaski' },
  { src: gallery18, alt: 'Metalizacja próżniowa - projekt 18', category: 'Metalizacja' },
  { src: gallery19, alt: 'Lakierowanie detali - projekt 19', category: 'Lakierowanie' },
  { src: gallery20, alt: 'Metalizacja próżniowa - projekt 20', category: 'Metalizacja' },
]

const categories = ['Wszystkie', 'Metalizacja', 'Lakierowanie', 'Odblaski']

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState('Wszystkie')

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
          <Link to="/" className="group flex items-center gap-3 text-left" aria-label="Powrót na stronę główną">
            <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
              <Factory className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <span className="block text-xs uppercase tracking-[0.5em] text-white/60 group-hover:text-white/80 transition-colors duration-200">
                STANIAX
              </span>
              <span className="block text-lg font-black text-white">
                Galeria
              </span>
            </div>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="h-4 w-4" />
            Wróć do strony głównej
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.5em] text-blue-400 mb-4 font-semibold">Nasze realizacje</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6">
              GALERIA
            </h1>
            <p className="text-lg text-white/60 max-w-xl">
              Odkryj nasze projekty metalizacji próżniowej i lakierowania. Każda realizacja to połączenie precyzji, innowacji i najwyższej jakości wykonania.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300',
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                      {image.category}
                    </span>
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
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Zamknij"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Poprzednie zdjęcie"
            >
              <CaretLeft className="w-8 h-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Następne zdjęcie"
            >
              <CaretRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
              {selectedImage + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50 font-medium">
              © {new Date().getFullYear()} STANIAX Sp. z o.o. Wszelkie prawa zastrzeżone.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors font-semibold hover:underline"
            >
              Wróć do strony głównej
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default GalleryPage

