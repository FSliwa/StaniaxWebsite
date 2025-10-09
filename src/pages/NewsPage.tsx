import { Link } from 'react-router-dom'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, ArrowRight, Clock, Factory } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

const newsItems = [
  {
  title: 'Nowa linia produkcyjna w Warszawie',
    date: '15 września 2025',
    category: 'Inwestycje',
  excerpt: 'Otwarcie nowoczesnej linii produkcyjnej w warszawskim centrum STANIAX zwiększa naszą wydajność o 40% i pozwala obsługiwać większe zamówienia w krótszych terminach.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop&crop=center'
  },
  {
    title: 'Certyfikat ISO 9001:2015 Odnowiony',
    date: '2 września 2025',
    category: 'Certyfikaty',
    excerpt: 'Z dumą ogłaszamy pomyślne odnowienie certyfikatu ISO 9001:2015, potwierdzającego najwyższe standardy jakości naszych usług.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&crop=center'
  },
  {
    title: 'Partnerstwo z Wiodącym Producentem Lotniczym',
    date: '20 sierpnia 2025',
    category: 'Współpraca',
    excerpt: 'Nawiązaliśmy strategiczne partnerstwo z jednym z największych producentów komponentów lotniczych w Europie, dostarczając powłoki ochronne dla krytycznych części.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=800&fit=crop&crop=center'
  },
  {
    title: 'Wprowadzenie Technologii Powłok Nanometrycznych',
    date: '10 lipca 2025',
    category: 'Innowacje',
    excerpt: 'Jako pierwsi w regionie wdrożyliśmy zaawansowaną technologię nanometrycznych powłok metalicznych, oferującą bezprecedensową ochronę i trwałość.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&h=800&fit=crop&crop=center'
  },
  {
    title: 'Nagroda Innowacyjności Przemysłowej 2025',
    date: '5 czerwca 2025',
    category: 'Nagrody',
    excerpt: 'STANIAX został uhonorowany prestiżową Nagrodą Innowacyjności Przemysłowej za wkład w rozwój ekologicznych rozwiązań metalizacyjnych.',
    image: 'https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?w=1200&h=800&fit=crop&crop=center'
  },
  {
    title: 'Szkolenia dla Zespołu Inżynieryjnego',
    date: '18 maja 2025',
    category: 'Rozwój',
    excerpt: 'Nasz zespół ukończył zaawansowane szkolenia z zakresu nowych technologii powłokowych i kontroli jakości, zwiększając kompetencje techniczne firmy.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&crop=center'
  }
]

function NewsPage() {
  const featuredArticle = newsItems[0]
  const secondaryArticles = newsItems.slice(1, 4)
  const moreArticles = newsItems.slice(4)

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
          <Link to="/" className="group flex items-center gap-3 text-left" aria-label="Powrót na stronę główną">
            <div className="h-10 w-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
              <Factory className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <span className="block text-xs uppercase tracking-[0.5em] text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                STANIAX
              </span>
              <span className="block text-lg font-black">
                Aktualności
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className={cn(buttonVariants({ variant: 'outline' }), 'font-semibold')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Wróć do strony głównej
            </Link>
            <Button
              className="font-semibold"
              onClick={() => {
                window.location.href = 'tel:+441234567890'
              }}
            >
              Skontaktuj się
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-28">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background/95 to-background" aria-hidden />
          <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
                  Najnowsze informacje
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                  Centrum wiadomości STANIAX
                </h1>
                <p className="text-lg text-muted-foreground font-medium max-w-xl">
                  Najświeższe wiadomości o naszych inwestycjach, partnerstwach, wyróżnieniach i innowacjach, które wyznaczają kierunek metalizacji przemysłowej w Szkocji.
                </p>
              </div>
              <Card className="border border-border/60 bg-card/80 backdrop-blur-xl">
                <CardHeader className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Wyróżniona informacja</p>
                  <CardTitle className="text-2xl font-black leading-tight">{featuredArticle.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground/90">
                    {featuredArticle.excerpt}
                  </p>
                  <Button variant="link" className="px-0 text-accent font-semibold">
                    Czytaj więcej
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 border-y border-border/60">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr]">
              <Card className="overflow-hidden border-0 shadow-2xl">
                <div className="relative aspect-[16/10]">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" aria-hidden />
                  <div className="absolute bottom-8 left-8 right-8 space-y-4 text-white">
                    <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em]">
                      {featuredArticle.category}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black leading-tight max-w-2xl">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-sm text-white/80 max-w-2xl">
                      {featuredArticle.excerpt}
                    </p>
                    <Button className="bg-white text-slate-950 hover:bg-white/90 w-fit">
                      Pełna treść
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>

              <div className="space-y-6">
                {secondaryArticles.map((article) => (
                  <Card key={article.title} className="group border border-border/60 bg-card/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                    <CardContent className="flex gap-6 p-6">
                      <div className="relative h-24 w-24 overflow-hidden rounded-xl">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                          <span>{article.category}</span>
                          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" aria-hidden />
                          <span className="flex items-center gap-2">
                            <Clock className="h-3.5 w-3.5" />
                            {article.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold leading-tight text-foreground group-hover:text-accent">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {article.excerpt}
                        </p>
                        <Button variant="link" className="px-0 h-auto text-accent font-semibold">
                          Czytaj więcej
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between gap-4 mb-10">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Archiwalne wiadomości</p>
                <h2 className="text-3xl lg:text-4xl font-black">Więcej aktualizacji STANIAX</h2>
              </div>
              <Button variant="outline" className="font-semibold" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Powrót na górę
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {moreArticles.map((article) => (
                <Card key={article.title} className="h-full border border-border/60 bg-card">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-2 uppercase tracking-[0.35em]">
                        <Clock className="h-3.5 w-3.5" />
                        {article.date}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/40" aria-hidden />
                      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                        {article.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold leading-tight">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    <Button variant="link" className="px-0 h-auto text-accent font-semibold">
                      Czytaj więcej
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="rounded-[40px] border border-border/50 bg-muted/30 p-10 lg:p-14 flex flex-col xl:flex-row gap-10 items-start xl:items-center justify-between">
              <div className="space-y-5 max-w-2xl">
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Newsletter STANIAX</p>
                <h2 className="text-3xl lg:text-4xl font-black">Zostań pierwszą osobą, która dowie się o naszych projektach</h2>
                <p className="text-muted-foreground font-medium">
                  Dołącz do grona naszych partnerów i otrzymuj informacje o premierach technologicznych, webinarach i raportach z realizacji.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button
                  size="lg"
                  className="font-semibold"
                  onClick={() => {
                    window.location.href = '/#contact'
                  }}
                >
                  Skontaktuj się z zespołem
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold"
                  onClick={() => {
                    window.open('https://maps.google.com/?q=Grzybowska+5A,+00-132+Warszawa', '_blank', 'noopener,noreferrer')
                  }}
                >
                  Odwiedź naszą siedzibę
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground font-medium">
              © {new Date().getFullYear()} STANIAX Sp. z o.o. Wszelkie prawa zastrzeżone.
            </p>
            <Link
              to="/"
              className={cn(buttonVariants({ variant: 'link' }), 'font-semibold px-0')}
            >
              Wróć do strony głównej
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default NewsPage
