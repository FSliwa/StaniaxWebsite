# Propozycja poprawek strony STANIAX — dokumentacja szczegółowa

Dokument opisuje proponowane korekty z maksymalną szczegółowością: ścieżki plików, numery linii, fragmenty kodu, kroki implementacji i przypadki brzegowe.

---

## 1. KURSOR — UŻYCIE KURSORA SYSTEMOWEGO

### 1.1 Cel
Użytkownik ma widzieć natywny kursor systemu (Windows, macOS, Linux), a nie własny wizualny cursor.

### 1.2 Analiza obecnej implementacji

**Plik:** `src/components/ui/CustomCursor.tsx`

- **Linie 1–57:** Pełna treść komponentu
- **Linie 44–45:** Element `motion.div` z `fixed top-0 left-0 w-8 h-8`, `z-[9999]`, `mix-blend-difference`
- **Linie 13–40:** `useEffect` z `mousemove` i `mouseover` — śledzenie pozycji i stanu hover
- **Linie 50–51:** `animate={{ scale: isHovered ? 2.5 : 1 }}` — powiększanie nad linkami/buttonami
- **Linia 44:** `hidden md:block` — cursor widoczny tylko na desktopie (≥768px)

**Plik:** `src/App.tsx`

- **Linia 6:** `import { CustomCursor } from './components/ui/CustomCursor'`
- **Linia 12:** `<CustomCursor />` renderowany nad całym UI

### 1.3 Kroki implementacji

1. **Usunąć renderowanie CustomCursor**
   - Plik: `src/App.tsx`
   - Usunąć linię 6 (import)
   - Usunąć linię 12 (`<CustomCursor />`)
   - Zachować `ScrollProgress` i `Routes`

2. **Opcjonalnie: usunąć plik CustomCursor**
   - Plik: `src/components/ui/CustomCursor.tsx`
   - Można usunąć cały plik, jeśli nie jest importowany nigdzie indziej
   - Przed usunięciem: `grep -r "CustomCursor" src/` — upewnić się, że brak innych referencji

3. **Weryfikacja**
   - Sprawdzić, czy `cursor-hover` nie jest używany w innych komponentach
   - `grep -r "cursor-hover" src/` — jeśli są wyniki, usunąć tę klasę z elementów (CustomCursor jej szukał)

### 1.4 Przypadki brzegowe

- **Tablet/mobile:** CustomCursor był ukryty przez `hidden md:block` — na małych ekranach już nie był widoczny; po usunięciu nic się nie zmieni w tym zakresie.
- **Preferencja reduced-motion:** Custom cursor nie respektuje `prefers-reduced-motion` — usunięcie usuwa ten problem.
- **Overlay/pointer-events:** CustomCursor ma `pointer-events-none`, więc nie blokuje kliknięć — usunięcie nie zmienia zachowania klikalności.

---

## 2. OTWARCIE STRONY — UPROSZCZENIE ANIMACJI HERO

### 2.1 Cel
Usunąć lub znacznie złagodzić efekt „chaosu” przy scrollu (zoom, przybliżanie, oddalanie zakładek).

### 2.2 Analiza obecnej implementacji

**Plik:** `src/components/VideoGalleryTransition.tsx`

**Wysokość kontenera i sticky:**

- **Linia 90:** `h-[250vh]` — sekcja ma 2,5 wysokości viewportu, co wymaga intensywnego scrolla
- **Linia 91:** `sticky top-0 h-screen` — sticky viewport podczas scrollowania

**Transformacje scrollowe (linie 37–87):**

| Linia | Zmienna | Input scroll | Output | Efekt |
|-------|---------|--------------|--------|-------|
| 37 | `centerWidth` | [0, 0.15, 0.4] | ["100vw", "100vw", "100%"] | Szerokość głównego wideo od pełnego ekranu do rozmiaru kolumny |
| 42–43 | `centerHeight` | [0, 0.15, 0.4] | ["120vh", "120vh", "100%"] | Wysokość od 120vh do 100% — mocne przybliżenie/oddalenie |
| 43–44 | `centerTop`, `centerYCorrection` | [0, 0.15, 0.4] | Zmiana pozycji centrowania | Przesunięcie środka |
| 46 | `heroRadius` | [0, 0.15, 0.4] | ["0px", "0px", "32px"] | Zaokrąglenie rogów |
| 51–56 | `leftColOpacity`, `leftColEnterY`, `rightColOpacity`, `rightColEnterY` | [0.2–0.45] | [0,1], [200,0] | Pojawianie się bocznych kolumn |
| 60 | `sideColsScale` | [0.2, 0.45] | [0.8, 1] | Scale 0.8→1 dla bocznych kolumn — widoczne „zoomowanie” |
| 64 | `innerParallaxY` | [0, 1] | ["-15%", "15%"] | Ruch wewnętrzny w płytkach |
| 66–69 | `centerY`, `leftColY`, `rightColY` | [0, 1] | Różne wartości px | Parallax kolumn |
| 84–86 | `heroOpacity`, `heroScale` | [0, 0.2] | [1,0], [1, 0.9] | Fade-out i scale tekstu hero |

**Miejsca powodujące chaos:**

- `centerHeight`: skok z 120vh na 100% — silne wrażenie zoom/oddalenia
- `sideColsScale`: 0.8→1 — widoczne powiększanie bocznych elementów
- `leftColEnterY` / `rightColEnterY`: slide 200px→0 — gwałtowne wjazdy
- Kombinacja wielu transformacji w krótkim zakresie scrolla (0–0.45)

### 2.3 Opcje implementacji

**Opcja A — minimalna (zalecana jako pierwsza próba):**

1. **Wyłączyć scale bocznych kolumn**
   - Linia 118: `style={{ y: leftTotalY, opacity: leftColOpacity, scale: sideColsScale }}` → `scale: 1` (stała)
   - Linia 180: analogicznie dla prawej kolumny
   - Lub w definicji: `const sideColsScale = useTransform(scrollYProgress, [0.2, 0.45], [1, 1])` (bez skalowania)

2. **Złagodzić wejście bocznych kolumn**
   - Linie 52–56: zmienić `[200, 0]` na `[80, 0]` lub `[50, 0]`

3. **Uprościć wysokość środkowego wideo**
   - Linia 42: zmienić `["120vh", "120vh", "100%"]` na `["100vh", "100vh", "100%"]` (bez przekraczania viewportu)

**Opcja B — statyczny hero:**

1. Ustawić `h-[250vh]` na `h-screen` (linia 90)
2. Usunąć wszystkie `useTransform` powiązane ze scrollem
3. Wyświetlić gotowy bento grid od razu (bez animacji scroll-based)
4. Usunąć sticky wrapper lub uprościć do prostej sekcji

**Opcja C — krótsza animacja:**

1. Zmniejszyć `h-[250vh]` do `h-[150vh]` — krótsza strefa scrolla
2. Skompresować zakresy transformacji: np. [0, 0.1, 0.25] zamiast [0, 0.15, 0.4]

### 2.4 Konkretne edycje (Opcja A)

```
Plik: src/components/VideoGalleryTransition.tsx

Zmiana 1 — Linia 60:
PRZED: const sideColsScale = useTransform(scrollYProgress, [0.2, 0.45], [0.8, 1])
PO:    const sideColsScale = useTransform(scrollYProgress, [0.2, 0.45], [1, 1])

Zmiana 2 — Linia 43:
PRZED: const centerHeight = useTransform(scrollYProgress, [0, 0.15, 0.4], ["120vh", "120vh", "100%"])
PO:    const centerHeight = useTransform(scrollYProgress, [0, 0.15, 0.4], ["100vh", "100vh", "100%"])

Zmiana 3 — Linie 53, 56:
PRZED: const leftColEnterY = useTransform(scrollYProgress, [0.2, 0.4], [200, 0])
       const rightColEnterY = useTransform(scrollYProgress, [0.25, 0.45], [200, 0])
PO:    const leftColEnterY = useTransform(scrollYProgress, [0.2, 0.4], [60, 0])
       const rightColEnterY = useTransform(scrollYProgress, [0.25, 0.45], [60, 0])
```

### 2.5 Weryfikacja

- Przetestować na mobile, tablet, desktop
- Sprawdzić `prefers-reduced-motion` — w razie potrzeby całkowicie wyłączyć animacje scroll-based przy tej preferencji

---

## 3. WIĘCEJ PRODUKTÓW NA STRONIE

### 3.1 Cel
Zwiększyć liczbę produktów/usług do poziomu zbliżonego do pierwszej wersji strony.

### 3.2 Obecny stan

**Plik:** `src/pages/HomePage.tsx`

**servicesData** (linie 181–238):

- Metalizacja Próżniowa
- Lakierowanie Tworzyw
- Lakierowanie Szkła
- Odblaski w Metalizacji

Łącznie: **4 usługi**.

**projectsData** (linie 240–301):

- Komponenty Motoryzacyjne
- Komponenty Lotnicze
- Metalizacja Przemysłowa
- Budowa Prototypów

Łącznie: **4 projekty**.

**caseStudiesData** (linie 315–354): 3 case studies.

### 3.3 Propozycje rozszerzenia

**Usługi (servicesData):**

| Proponowana usługa      | Opis (szablon) | Obraz (placeholder) | id |
|-------------------------|----------------|---------------------|----|
| Opakowania kosmetyczne  | Metalizacja opakowań kosmetyków i perfum | serviceImg1 lub nowy | packaging |
| Elementy oświetleniowe  | Odbłyśniki i reflektory dla branży LED  | serviceImg1           | lighting |
| Gadżety reklamowe       | Metalizacja gadżetów promocyjnych        | serviceImg3           | promotional |
| Lakierowanie proszkowe  | Malowanie proszkowe metali              | serviceImg2           | powder-coating |

**Projekty (projectsData):**

Dodać 2–4 kolejne pozycje z realnymi zdjęciami z `src/assets/` lub Unsplash (podobnie jak obecnie).

### 3.4 Szczegóły implementacji

**Struktura ServiceItem (linie 144–156):**

```typescript
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
```

Każda nowa usługa musi mieć:

- unikalne `id` (np. `packaging`, `lighting`)
- `title`, `description`, `alt`, `tagline`
- `icon` — komponent Phosphor (np. `Package`, `Lightbulb`)
- `image` — import z assets
- `details` — tablice `features`, `applications`, `advantages` (min. 3–4 elementy każda)

Sekcje przewijania (`scrollToSection`) muszą obsługiwać nowe `id` (np. `#packaging`). Sprawdzić `handleNavClick` i mapowanie `navItems` → `section`.

### 3.5 Odnośniki w nawigacji

**navItems** (linie 134–142) — dodać nowe pozycje tylko jeśli mają dedykowane sekcje. Jeśli usługi są w sekcji „Oferta” jako karty, nie trzeba zmieniać `navItems`, wystarczy rozszerzyć `servicesData`.

**BigFooter** (linie 123–129) — lista usług jest na sztywno; przy dodaniu nowych usług trzeba zaktualizować punkty 01.–06. i ewentualne `scrollToSection`.

---

## 4. MENU WYCENY — AUTOMATYCZNE PRZEJŚCIE DO NASTĘPNEJ KARTY

### 4.1 Cel
Po wybraniu typu projektu (Prototypy, Produkcja, Naprawa, Konsultacja) użytkownik ma od razu przejść do karty z danymi kontaktowymi, bez konieczności klikania „Kontynuuj”.

### 4.2 Obecna implementacja

**Plik:** `src/pages/HomePage.tsx`

**State:**

- **Linia 707:** `const [formStep, setFormStep] = useState(1)`
- **Linia ~700:** `smartFormData` z `projectType`, `firstName`, `lastName`, `email`, `phone`, `message`

**Krok 1 (linie 2185–2207):**

```tsx
{formStep === 1 && (
  <div className="space-y-6">
    <h3 className="text-2xl font-bold text-gray-900">Wybierz typ projektu</h3>
    <div className="grid sm:grid-cols-2 gap-4">
      {['Prototypy', 'Produkcja', 'Naprawa', 'Konsultacja'].map((type) => (
        <button
          key={type}
          onClick={() => setSmartFormData({ ...smartFormData, projectType: type })}
          ...
        >
          {type}
        </button>
      ))}
    </div>
  </div>
)}
```

**Krok 2 (linie 2209–2256):** formularz z Imię, Nazwisko, E-mail, Telefon, Opis.

**Przycisk „Kontynuuj” (linie 2267–2276):** wymaga kliknięcia, aby przejść do kroku 2.

### 4.3 Implementacja

**Zmiana w onClick przycisku wyboru typu (linia 2191):**

```tsx
PRZED:
onClick={() => setSmartFormData({ ...smartFormData, projectType: type })}

PO:
onClick={() => {
  setSmartFormData((prev) => ({ ...prev, projectType: type }))
  setFormStep(2)
}}
```

Użycie `prev` w `setSmartFormData` minimalizuje race conditions. `setFormStep(2)` powoduje natychmiastowe pokazanie formularza kontaktowego.

### 4.4 Dodatkowe uwagi

1. **Przycisk „Wstecz”:** nadal ma sens — użytkownik może cofnąć się do wyboru typu projektu. Zachować.
2. **Zmiana wyboru z kroku 2:** jeśli użytkownik chce zmienić typ, musi kliknąć „← Wstecz”. Alternatywnie można dodać link „Zmień typ projektu” w kroku 2.
3. **Progress bar:** krok zmienia się automatycznie, wskaźnik „Krok 2 z 2” będzie poprawny.
4. **Sekwencja:** Wybór typu → od razu formularz → uzupełnienie danych → „Wyślij zapytanie”.

---

## 5. WYBÓR JĘZYKA — 3 FLAGI W NAGŁÓWKU

### 5.1 Cel
Dodać w headerze 3 flagi (PL, EN, DE) jako odnośniki do wersji w odpowiednich językach.

### 5.2 Wymagania

- Pozycja: prawa strona nagłówka (np. obok „Wyceń Projekt” i hamburgera)
- Widoczne na desktop i mobile (lub tylko desktop, jeśli brakuje miejsca)
- Flagi jako obrazy SVG lub emoji (np. 🇵🇱, 🇬🇧, 🇩🇪)
- Linki: `/` (PL), `/en` (EN), `/de` (DE)

### 5.3 Opcje techniczne

**Opcja A — Oddzielne strony dla języków**

- Trasy: `/`, `/en`, `/de`
- Osobne strony lub komponenty: `HomePagePL`, `HomePageEN`, `HomePageDE`
- Lub użycie systemu i18n (np. react-i18next) z przełączaniem locale w URL

**Opcja B — Placeholder (bez tłumaczeń)**

- Trasy: `/`, `/en`, `/de`
- Każda trasa renderuje tę samą treść, ale z parametrem `lang`
- W przyszłości można podmienić na tłumaczenia

### 5.4 Szczegóły implementacji (minimalna wersja)

**1. Routing — plik `src/App.tsx`:**

```tsx
<Routes>
  <Route path="/" element={<HomePage lang="pl" />} />
  <Route path="/en" element={<HomePage lang="en" />} />
  <Route path="/de" element={<HomePage lang="de" />} />
  <Route path="/news" element={<NewsPage />} />
  <Route path="/gallery" element={<GalleryPage />} />
</Routes>
```

(HomePage musiałby przyjmować prop `lang` — na początek można go ignorować.)

**2. Komponent LanguageSwitcher — nowy plik `src/components/LanguageSwitcher.tsx`:**

```tsx
import { Link, useLocation } from 'react-router-dom'

const languages = [
  { code: 'pl', label: 'Polski', flag: '🇵🇱', path: '/' },
  { code: 'en', label: 'English', flag: '🇬🇧', path: '/en' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', path: '/de' },
]

export function LanguageSwitcher() {
  const location = useLocation()
  return (
    <div className="flex items-center gap-2">
      {languages.map(({ code, flag, path }) => (
        <Link
          key={code}
          to={path}
          className={/* style dla aktywnego/nieaktywnego */}
          aria-label={`Przejdź do wersji ${code}`}
        >
          <span className="text-2xl" role="img">{flag}</span>
        </Link>
      ))}
    </div>
  )
}
```

**3. Miejsce w headerze — plik `src/pages/HomePage.tsx`:**

W `<header>` (ok. linia 1345), wewnątrz `<div className="flex items-center gap-5">`, przed przyciskiem „Wyceń Projekt”:

```tsx
<LanguageSwitcher />
<Button onClick={() => scrollToSection('contact')} ... >
  Wyceń Projekt
</Button>
```

### 5.5 Przypadki brzegowe

- **NewsPage, GalleryPage:** mogą pozostać po polsku lub w przyszłości mieć wersje językowe — na razie linki z flag prowadzą do strony głównej w odpowiednim języku.
- **Deep link:** np. `/en#contact` — router obsłuży `/en`, hash `#contact` można przekazać do scrollowania po załadowaniu.

---

## 6. KARTA „SPECJALNIE DLA CIEBIE”

### 6.1 Cel
Usunąć lub scalić z Ofertą, ponieważ obecne przekierowanie do Oferty jest mylące i zbędne.

### 6.2 Obecna implementacja

**Plik:** `src/pages/HomePage.tsx`

**navItems (linie 134–142):**

```tsx
const navItems: NavItem[] = [
  { id: 'kim-jestesmy', label: 'O STANIAX', type: 'section' },
  { id: 'about', label: 'Oferta', type: 'section' },
  { id: 'about', label: 'Specjalnie dla Ciebie', type: 'section' },  // <-- TEN ELEMENT
  { id: 'projects', label: 'Realizacje', type: 'section' },
  { id: 'gallery', label: 'Galeria', type: 'route', path: '/gallery' },
  { id: 'news', label: 'Aktualności', type: 'route', path: '/news' },
  { id: 'contact', label: 'Kontakt', type: 'section' }
]
```

„Specjalnie dla Ciebie” ma `id: 'about'` — tak samo jak „Oferta”. Kliknięcie w oba prowadzi do `scrollToSection('about')`, czyli tej samej sekcji.

### 6.3 Implementacja

**Krok 1:** Usunąć wiersz z `navItems`:

```tsx
{ id: 'about', label: 'Specjalnie dla Ciebie', type: 'section' },
```

**Krok 2:** Sprawdzić inne wystąpienia frazy „Specjalnie dla Ciebie”:

- `grep -rn "Specjalnie" src/`
- Usunąć lub zastąpić wszędzie tam, gdzie występuje.

**Efekt:** Menu ma jedną pozycję mniej, użytkownik nie trafia na duplikat Oferty.

---

## 7. GALERIA — SPÓJNA KOLORYSTYKA

### 7.1 Cel
Dopasować kolorystykę strony Galerii do reszty witryny (blue/slate), zamiast czarno-żółtej (amber).

### 7.2 Obecna kolorystyka GalleryPage

**Plik:** `src/pages/GalleryPage.tsx`

| Lokalizacja | Klasa/odniesienie | Aktualny kolor |
|-------------|-------------------|----------------|
| Tło strony | linia 116 | `bg-[#0a0a0a]` (czarny) |
| Gradient tła | linie 119–120 | `bg-amber-500/5`, `bg-slate-400/5` |
| Header border | linia 124 | `border-white/5` |
| Logo/akcent | linia 127 | `from-amber-400 via-amber-500 to-amber-600` |
| Badge „Nasze realizacje” | linia 162 | `bg-amber-400/10`, `border-amber-400/20`, `text-amber-400` |
| Tytuł gradient | linie 167–170 | `from-amber-300 via-amber-400 to-amber-500` |
| Przycisk kategorii aktywny | linia 209 | `bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400` |
| Liczba wyników | linia 224 | `text-amber-400` |
| Overlay karty | linia 279 | `ring-amber-400/30` |
| Badge kategorii na karcie | linia 281 | `bg-amber-400 text-black` |
| Ikona Sparkle | linia 294 | `text-amber-400` |
| Lightbox tło | linia 317 | `bg-amber-500/5` |
| Nawigacja lightbox | linia 328, 336 | `border-amber-400/30` |
| Pasek informacji | linia 354 | `bg-amber-400 text-black` |
| Counter | linia 364 | `text-amber-400` |
| Progress dots | linia 373 | `bg-amber-400` |
| Footer logo | linia 381 | `from-amber-400 to-amber-600` |

### 7.3 Paleta strony głównej (do dopasowania)

Z `src/index.css` i `tailwind.config.ts`:

- primary/akcent: blue-400, blue-600, blue-700
- tło: white, gray-50, slate
- tekst: gray-800, gray-900, slate-700

### 7.4 Mapowanie zamian (amber → blue/slate)

| Obecna klasa | Zamiana na |
|--------------|------------|
| `bg-[#0a0a0a]` | `bg-slate-950` lub `bg-[#0f172a]` (spójne z ciemnym theme) |
| `bg-amber-500/5` | `bg-blue-500/5` |
| `bg-slate-400/5` | `bg-slate-500/5` (bez zmian lub delikatna modyfikacja) |
| `from-amber-400 via-amber-500 to-amber-600` | `from-blue-500 via-blue-600 to-blue-700` |
| `bg-amber-400/10`, `border-amber-400/20`, `text-amber-400` | `bg-blue-400/10`, `border-blue-400/20`, `text-blue-400` |
| `from-amber-300 via-amber-400 to-amber-500` | `from-blue-400 via-blue-500 to-blue-600` |
| `from-amber-400 via-amber-500 to-amber-400` (przycisk) | `from-blue-500 via-blue-600 to-blue-500` |
| `text-amber-400` | `text-blue-400` |
| `ring-amber-400/30` | `ring-blue-400/30` |
| `bg-amber-400 text-black` | `bg-blue-500 text-white` (dla kontrastu) |
| `bg-amber-500/5` (lightbox) | `bg-blue-500/5` |
| `border-amber-400/30` | `border-blue-400/30` |

### 7.5 Alternatywa: jasna galeria

Jeśli strona główna jest przeważnie jasna, można rozważyć jasną galerię:

- Tło: `bg-white` lub `bg-slate-50`
- Tekst: `text-slate-800`, `text-slate-900`
- Akcenty: `text-blue-600`, `border-blue-500`
- Karty: `bg-white`, `border-slate-200`, `shadow`

To wymagałoby szerszej zmiany (np. jasny header), ale byłoby spójne z jasnymi sekcjami strony głównej.

---

## 8. GALERIA — POPRAWNE FILTROWANIE KATEGORII (ZŁOTO, CHROM)

### 8.1 Cel
Upewnić się, że wybór Złoto/Chrom pokazuje faktycznie zdjęcia odpowiednich kategorii, a nie losową mieszankę.

### 8.2 Obecna implementacja

**Plik:** `src/pages/GalleryPage.tsx`, linie 29–49:

```tsx
const galleryImages = [
  { src: gallery01, alt: 'Złote elementy kosmetyczne', category: 'Złoto' },
  { src: gallery02, alt: 'Metalizacja chromowa', category: 'Chrom' },
  ...
  { src: gallery20, alt: 'Złote powłoki', category: 'Złoto' },
]
```

**Filtrowanie (linie 79–81):**

```tsx
const filteredImages = activeCategory === 'Wszystkie'
  ? galleryImages
  : galleryImages.filter(img => img.category === activeCategory)
```

Logika jest poprawna; problem leży w przypisaniu `category` do zdjęć względem ich rzeczywistej treści.

### 8.3 Aktualne przypisania kategorii

| Zdjęcie | alt | category |
|---------|-----|----------|
| gallery-01 | Złote elementy kosmetyczne | Złoto |
| gallery-02 | Metalizacja chromowa | Chrom |
| gallery-03 | Powłoki dekoracyjne | Dekoracyjne |
| gallery-04 | Złote nakrętki premium | Złoto |
| ... | ... | ... |

Trzeba fizycznie sprawdzić pliki `gallery-01.jpg` … `gallery-20.jpg` i zweryfikować, czy:

- Złoto — rzeczywiście złote/srebrne/złotawe elementy
- Chrom — elementy chromowane/srebrne/polowane
- Dekoracyjne — inne powłoki, mieszane, dekoracyjne

### 8.4 Kroki naprawy

1. **Przejrzeć zdjęcia** w `src/assets/gallery/`
2. **Zaktualizować tablicę `galleryImages`** tak, aby `category` i `alt` zgadzały się z treścią zdjęć
3. Ewentualnie zmienić nazwy kategorii (np. „Chrom” → „Srebro/Chrom”) lub dodać nowe (np. „Aluminium”)
4. **Sprawdzić poprawność filtrowania** po zmianach: kliknąć Złoto, Chrom, Dekoracyjne i upewnić się, że wynik jest spójny wizualnie

---

## 9. USUNIĘCIE WSZYSTKICH ODNIESIEŃ DO ISO

### 9.1 Cel
Usunąć lub zastąpić treści sugerujące posiadanie certyfikatu ISO 9001, ponieważ firma go nie posiada.

### 9.2 Wyszukanie wystąpień

Wykonaj: `grep -rn "ISO\|9001\|certyfikat" src/ --include="*.tsx" --include="*.ts" -i`

### 9.3 Lokalizacje (ręczna lista)

**Plik: `src/pages/HomePage.tsx`**

| Linia (approx) | Kontekst | Akcja |
|----------------|----------|-------|
| 325 | `caseStudiesData` — metryka `{ value: 'ISO 9001', label: 'Certyfikat' }` | Usunąć tę metrykę lub zastąpić inną (np. „CE”, „Jakość”) |
| 359 | `brandShowcaseData` — `{ name: 'ISO 9001:2015', logo: 'ISO' }` | Usunąć ten element z tablicy |
| 512–514 | `faqData` — pytanie „Czy oferujecie certyfikaty jakości?” i odpowiedź o ISO 9001:2015 | Przepisać odpowiedź (np. „Do każdego zamówienia dołączamy protokół kontroli jakości…”) bez wzmianki o ISO |
| 1633 | Sekcja stats: `<div className="text-3xl...">ISO</div>` | Usunąć lub zastąpić inną statystyką (np. „CE”, „24h”, „50+”) |

**Plik: `src/pages/NewsPage.tsx`**

| Linia (approx) | Kontekst | Akcja |
|----------------|----------|-------|
| 16–19 | Wpis „Certyfikat ISO 9001:2015 Odnowiony” | Usunąć cały wpis z `newsItems` lub zastąpić inną aktualnością |

### 9.4 Szczegółowe edycje

**HomePage.tsx — caseStudiesData (linia ~325):**

```tsx
PRZED:
metrics: [
  { value: '3 msc', label: 'Realizacja' },
  { value: '50K+', label: 'Elementy' },
  { value: 'ISO 9001', label: 'Certyfikat' }
],

PO (opcja 1 - usunięcie):
metrics: [
  { value: '3 msc', label: 'Realizacja' },
  { value: '50K+', label: 'Elementy' }
],

PO (opcja 2 - zamiana):
metrics: [
  { value: '3 msc', label: 'Realizacja' },
  { value: '50K+', label: 'Elementy' },
  { value: 'CE', label: 'Certyfikat' }
],
```

**HomePage.tsx — brandShowcaseData (linia ~357):**

```tsx
PRZED:
const brandShowcaseData = [
  { name: 'ISO 9001:2015', logo: 'ISO' },
  { name: 'Motoryzacja', logo: 'AUTO' },
  ...

PO:
const brandShowcaseData = [
  { name: 'Motoryzacja', logo: 'AUTO' },
  ...
```

**HomePage.tsx — faqData (linie 508–515):**

```tsx
PRZED:
answer: 'Tak, posiadamy certyfikat ISO 9001:2015. Do każdego zamówienia dołączamy protokół kontroli jakości...'

PO:
answer: 'Do każdego zamówienia dołączamy protokół kontroli jakości z pomiarami grubości powłoki, adhezji i innych parametrów. Dla branży lotniczej i medycznej oferujemy dodatkową dokumentację zgodną z wymaganiami sektorowymi.'
```

(Usuwamy tylko fragment o ISO, resztę zostawiamy.)

**HomePage.tsx — stats (linia ~1633):**

```tsx
PRZED:
<div>
  <div className="text-3xl lg:text-4xl font-black text-blue-700">ISO</div>
  <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Certyfikaty</div>
</div>

PO (przykład - zamiana na inną statystykę):
<div>
  <div className="text-3xl lg:text-4xl font-black text-blue-700">CE</div>
  <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Zgodność</div>
</div>
```

Albo całkowite usunięcie tej kolumny i przesunięcie layoutu (np. grid `grid-cols-2`).

**NewsPage.tsx — newsItems (linie 15–22):**

Usunąć obiekt:

```tsx
{
  title: 'Certyfikat ISO 9001:2015 Odnowiony',
  date: '2 września 2025',
  category: 'Certyfikaty',
  excerpt: '...',
  image: '...'
}
```

---

## 10. AKTUALNOŚCI — LINK „SKONTAKTUJ SIĘ”

### 10.1 Cel
Przycisk „Skontaktuj się” ma prowadzić do formularza kontaktowego, a nie do numeru `+441234567890`.

### 10.2 Obecna implementacja

**Plik:** `src/pages/NewsPage.tsx`, linie 102–110:

```tsx
<Button
  className="font-semibold"
  onClick={() => {
    window.location.href = 'tel:+441234567890'
  }}
>
  Skontaktuj się
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>
```

Numer jest brytyjski i placeholder; nie ma linku do sekcji kontaktowej.

### 10.3 Implementacja

**Opcja A — Nawigacja do strony głównej + sekcja contact:**

```tsx
<Button
  className="font-semibold"
  onClick={() => {
    window.location.href = '/#contact'
  }}
>
  Skontaktuj się
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>
```

Po przejściu na `/#contact` trzeba zapewnić, że strona przewinie się do `#contact`. Może to wymagać `useEffect` w `HomePage`, który po załadowaniu sprawdza hash i przewija do sekcji.

**Opcja B — Użycie istniejącej funkcji scrollToContact (linie 57–74):**

```tsx
<Button
  className="font-semibold"
  onClick={scrollToContact}
>
  Skontaktuj się
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>
```

`scrollToContact` robi `navigate('/')` i po 100 ms przewija do `#contact` (z Lenis lub `scrollIntoView`). To spójne zachowanie — użyć tej opcji.

**Opcja C — Prawdziwy numer telefonu:**

Jeśli firma ma numer, można dodać drugi przycisk (np. ikona telefonu) z `tel:+48...` obok „Skontaktuj się” prowadzącego do formularza.

---

## 11. AKTUALNOŚCI — PEŁNY PASEK MENU NAWIGACJI

### 11.1 Cel
Na stronie Aktualności użytkownik ma widzieć pełne menu nawigacji (jak na stronie głównej), zamiast tylko „Wróć do strony głównej” i „Skontaktuj się”.

### 11.2 Obecny header NewsPage

**Plik:** `src/pages/NewsPage.tsx`, linie 79–114:

- Logo STANIAX (link do `/`)
- Przycisk „Wróć do strony głównej” (link do `/`)
- Przycisk „Skontaktuj się”

Brak: O STANIAX, Oferta, Realizacje, Galeria, Kontakt.

### 11.3 Propozycje implementacji

**Opcja A — Reużycie komponentu nawigacji z HomePage**

- Wydzielić z `HomePage` komponent `SiteHeader`/`MainNav`
- `SiteHeader` przyjmuje prop `currentPath` (np. `/news`) i wyświetla menu
- Na `/` — zwykłe sekcje + scroll
- Na `/news` — linki do sekcji prowadzą do `/#section-id`

**Opcja B — Stały pasek linków w headerze NewsPage**

Dodać w headerze (między logo a przyciskami) grupę linków:

```tsx
<nav className="hidden md:flex items-center gap-6">
  <Link to="/#kim-jestesmy">O STANIAX</Link>
  <Link to="/#about">Oferta</Link>
  <Link to="/#projects">Realizacje</Link>
  <Link to="/gallery">Galeria</Link>
  <Link to="/#contact">Kontakt</Link>
</nav>
```

**Opcja C — Menu hamburger jak na stronie głównej**

Skopiować logikę `isMenuOpen`, backdrop i slide menu z `HomePage` (linie 1463–1533) do `NewsPage` i wstawić te same `navItems` z linkami do `/#section` lub `/gallery`.

### 11.4 Zalecana struktura (Opcja B — minimalna)

W `NewsPage.tsx`, wewnątrz `<div className="flex items-center gap-3">`:

```tsx
<nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
  <Link to="/#kim-jestesmy" className="hover:text-accent transition-colors">O STANIAX</Link>
  <Link to="/#about" className="hover:text-accent transition-colors">Oferta</Link>
  <Link to="/#projects" className="hover:text-accent transition-colors">Realizacje</Link>
  <Link to="/gallery" className="hover:text-accent transition-colors">Galeria</Link>
  <Link to="/#contact" className="hover:text-accent transition-colors">Kontakt</Link>
</nav>
<Link to="/" className={cn(buttonVariants({ variant: 'outline' }), 'font-semibold')}>
  ...
</Link>
<Button ... onClick={scrollToContact}>
  Skontaktuj się
</Button>
```

Na mobile można dodać hamburger z tym samym zestawem linków.

---

## 12. KONTAKT VS. WYCEŃ

### 12.1 Cel
Ujednolicić percepcję: formularz jest zarówno do kontaktu, jak i wyceny. Przyciski „Kontakt” i „Wyceń” prowadzą do tej samej sekcji.

### 12.2 Obecny stan

- Sekcja `#contact` (HomePage, ok. linia 2130) zawiera formularz 2-krokowy (typ projektu + dane kontaktowe).
- Przycisk „Wyceń Projekt” (header, BigFooter) przewija do `#contact`.
- Linki „Kontakt” w menu też przewijają do `#contact`.

Nie trzeba zmieniać logiki — tylko upewnić się, że etykiety są jasne (np. „Skontaktuj się i wyceń” albo zostawić osobno „Kontakt” i „Wyceń” z tym samym celem).

### 12.3 Ewentualne usprawnienia

- Nagłówek sekcji: np. „Skontaktuj się i wyceń projekt” zamiast tylko „Skontaktuj się z nami”.
- Tooltip/aria-label: „Przewiń do formularza kontaktowego i wyceny”.

---

## 13. USUNIĘCIE CHAT BUBBLE „POROZMAWIAJ Z NAMI”

### 13.1 Cel
Usunąć zbędny przycisk czatu w lewym dolnym rogu.

### 13.2 Obecna implementacja

**Plik:** `src/pages/HomePage.tsx`, linie 2487–2506:

```tsx
<button
  onClick={() => {
    setIsChatOpen(!isChatOpen)
    if (!isChatOpen) {
      toast.info('Czat support będzie dostępny wkrótce! Na razie skontaktuj się z nami przez formularz.')
    }
  }}
  className="fixed bottom-6 left-6 z-[85] flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 ..."
  aria-label="Otwórz czat support"
>
  <ChatCircle className="w-8 h-8" weight="bold" />
  <span className="absolute top-0 left-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse" />
  <span className="absolute left-20 ...">
    Porozmawiaj z nami 💬
  </span>
</button>
```

### 13.3 Implementacja

1. **Usunąć cały blok** od `<button` do `</button>` (linie 2487–2506).
2. **Usunąć state** (jeśli jest): `setIsChatOpen` — `grep -n "isChatOpen" src/pages/HomePage.tsx` i usunąć `useState` oraz wszystkie użycia.
3. **Usunąć import** `ChatCircle` z `@phosphor-icons/react`, jeśli nie jest używany nigdzie indziej (`grep -r "ChatCircle" src/`).

### 13.4 Weryfikacja

- Brak elementu fixed w lewym dolnym rogu.
- Brak konfliktów z przyciskiem „Scroll to top” (prawy dolny róg) ani „Wyceń” (mobile, prawy dolny róg).

---

## PODSUMOWANIE KROKÓW (CHECKLIST)

| # | Zadanie | Plik(i) | Szac. czas |
|---|---------|---------|------------|
| 1 | Usunąć CustomCursor | App.tsx | 2 min |
| 2 | Uprościć animacje VideoGalleryTransition | VideoGalleryTransition.tsx | 15 min |
| 3 | Rozszerzyć servicesData i projectsData | HomePage.tsx | 45 min |
| 4 | Auto-przejście do kroku 2 po wyborze typu | HomePage.tsx | 5 min |
| 5 | Dodać LanguageSwitcher i routing /en, /de | App.tsx, nowy komponent | 60 min |
| 6 | Usunąć „Specjalnie dla Ciebie” z navItems | HomePage.tsx | 2 min |
| 7 | Zmienić kolory GalleryPage (amber→blue) | GalleryPage.tsx | 30 min |
| 8 | Zweryfikować i poprawić kategorie galerii | GalleryPage.tsx | 20 min |
| 9 | Usunąć ISO z 4 lokalizacji | HomePage.tsx, NewsPage.tsx | 15 min |
| 10 | Poprawić przycisk Skontaktuj się w NewsPage | NewsPage.tsx | 5 min |
| 11 | Dodać pasek menu do NewsPage | NewsPage.tsx | 20 min |
| 12 | (Opcjonalne) Ujednolicić etykiety Kontakt/Wyceń | HomePage.tsx | 5 min |
| 13 | Usunąć chat bubble „Porozmawiaj z nami” | HomePage.tsx | 5 min |

---

*Dokument wygenerowany na podstawie analizy kodu projektu StaniaxWebsite. Numery linii mogą nieznacznie się przesunąć po wcześniejszych edycjach.*
