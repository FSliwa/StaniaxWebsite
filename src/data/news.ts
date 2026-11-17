export type NewsImageKey =
  | 'vacuumChamber'
  | 'newsAviation'
  | 'colorfulPackaging'
  | 'newReflectors'
  | 'externalUnsplash'

export interface NewsItemData {
  title: string
  date: string
  category: string
  excerpt: string
  homeSummary: string
  ctaLabel: string
  imageKey: NewsImageKey
  externalImageUrl?: string
  path: string
}

export const NEWS_ITEMS_BY_LANG: Record<'pl' | 'en' | 'de', NewsItemData[]> = {
  pl: [
    {
      title: 'Nowoczesna metalizacja próżniowa i regeneracja odbłyśników w Józefowie',
      date: '25 maja 2026',
      category: 'Inwestycje',
      excerpt:
        'W podwarszawskim zakładzie STANIAX w Józefowie uruchomiona została zmodernizowana linia technologiczna PVD i lakierowania natryskowego HVLP. Poznaj nasze możliwości w zakresie regeneracji odbłyśników samochodowych, metalizacji tworzyw sztucznych oraz lakierowania szkła.',
      homeSummary:
        'Zmodernizowana linia PVD i HVLP w Józefowie obsługuje serie kosmetyczne, tworzywa sztuczne, szkło oraz odbłyśniki reflektorów.',
      ctaLabel: 'Poznaj usługi metalizacji próżniowej PVD',
      imageKey: 'vacuumChamber',
      path: '/metalizacja-prozniowa',
    },
    {
      title: 'Jak działa regeneracja odbłyśników reflektorów? Poradnik techniczny kierowcy',
      date: '10 czerwca 2026',
      category: 'Poradnik techniczny',
      excerpt:
        'Kompendium techniczne: dlaczego odbłyśniki matowieją, jak przebiega napylanie aluminium PVD w próżni i kiedy regeneracja przewyższa zakup zamiennika.',
      homeSummary:
        'Dowiedz się, jak próżniowe napylanie aluminium 99,99% przywraca fabryczny strumień światła lamp Bi-Xenon, LED i H7.',
      ctaLabel: 'Czytaj poradnik o regeneracji odbłyśników',
      imageKey: 'newReflectors',
      path: '/news/regeneracja-odblysnikow-reflektorow-samochodowych',
    },
    {
      title: 'Jak metalizacja wpływa na wydajność materiałów? Odkryj jej tajniki!',
      date: '20 sierpnia 2025',
      category: 'Artykuł ekspercki',
      excerpt:
        'Odkryj, jak zaawansowana metalizacja próżniowa i powłoki ochronne PVD zwiększają wydajność materiałów w branży lotniczej i technicznej.',
      homeSummary:
        'Analiza techniczna wpływu cienkowarstwowych powłok PVD i lakierów ochronnych na odporność ścierną oraz masę detali.',
      ctaLabel: 'Czytaj analizę wydajności powłok PVD',
      imageKey: 'newsAviation',
      path: '/news/partnerstwo-z-wiodacym-producentem-lotniczym',
    },
    {
      title: 'Metalizacja próżniowa rewolucjonizuje branżę beauty',
      date: '20 sierpnia 2025',
      category: 'Artykuł ekspercki',
      excerpt:
        'Branża kosmetyczna przechodzi rewolucję opakowaniową. Poznaj zalety metalizacji próżniowej oraz lakierowania tworzyw i szkła w segmencie beauty.',
      homeSummary:
        'Zastosowanie chromu, złota PVD i powłok UV na zamknięciach, atomizerach i opakowaniach kosmetycznych z PP, ABS i szkła.',
      ctaLabel: 'Czytaj studium metalizacji w branży beauty',
      imageKey: 'colorfulPackaging',
      path: '/news/metalizacja-prozniowa-rewolucjonizuje-branze-beauty',
    },
    {
      title: 'Kontrola jakości przyczepności ISO 2409 i połysku GU w seriach B2B',
      date: '18 maja 2025',
      category: 'Jakość i Normy',
      excerpt:
        'Nasz zespół technologiczny wdrożył rozszerzone procedury kontroli siatki nacięć ISO 2409 oraz spektrofotometrii ΔE dla serii kosmetycznych i motoryzacyjnych.',
      homeSummary:
        'Badania adhezji metodą siatki nacięć klasy 5B, pomiar połysku GU oraz kontrola barwy ΔE przy lakierowaniu tworzyw.',
      ctaLabel: 'Sprawdź standardy lakierowania tworzyw B2B',
      imageKey: 'externalUnsplash',
      externalImageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop&crop=center',
      path: '/lakierowanie-tworzyw-sztucznych',
    },
  ],
  en: [
    {
      title: 'Modern Vacuum Metallisation and Headlight Reflector Restoration in Józefów',
      date: 'May 25, 2026',
      category: 'Investments',
      excerpt:
        'An upgraded PVD vacuum metallisation and HVLP spray-coating line has been commissioned at the STANIAX facility in Józefów near Warsaw. Explore our capabilities in automotive reflector restoration, plastic chrome plating, and glass coating.',
      homeSummary:
        'Expanded high-vacuum PVD and HVLP coating lines near Warsaw support high-volume plastic, glass, and automotive reflector production.',
      ctaLabel: 'Explore PVD vacuum metallisation services',
      imageKey: 'vacuumChamber',
      path: '/en/vacuum-metallisation',
    },
    {
      title: 'How Headlight Reflector Restoration Works — Technical Driver’s Guide',
      date: 'June 10, 2026',
      category: 'Technical Guide',
      excerpt:
        'Technical guide: why reflectors oxidize, how PVD aluminium vacuum deposition works, and when OEM restoration beats aftermarket replacements.',
      homeSummary:
        'Engineering breakdown of burnt reflector diagnostics, 99.99% aluminum vapor deposition, and OEM headlamp restoration vs aftermarket parts.',
      ctaLabel: 'Read the headlight reflector guide',
      imageKey: 'newReflectors',
      path: '/en/news/reflector-regeneration-and-headlight-polishing',
    },
    {
      title: 'How Metallization Affects Material Performance — Engineering Guide',
      date: 'August 20, 2025',
      category: 'Expert Article',
      excerpt:
        'Discover how advanced vacuum metallization and PVD protective coatings increase material performance in aerospace and technical applications.',
      homeSummary:
        'Technical overview of how thin-film vacuum deposition improves abrasion resistance, reflectivity, and component weight.',
      ctaLabel: 'Read material performance & PVD analysis',
      imageKey: 'newsAviation',
      path: '/en/news/how-does-metallization-affect-material-performance',
    },
    {
      title: 'Vacuum Metallization Revolutionizes the Beauty Packaging Industry',
      date: 'August 20, 2025',
      category: 'Expert Article',
      excerpt:
        'The cosmetics packaging market is undergoing a transformation. Discover the benefits of PVD vacuum metallization and UV coating in the beauty segment.',
      homeSummary:
        'How chrome, gold PVD finishes, and UV topcoats transform plastic caps, lipstick tubes, and glass cosmetic bottles.',
      ctaLabel: 'Read beauty packaging metallization study',
      imageKey: 'colorfulPackaging',
      path: '/en/news/vacuum-metallization-revolutionizes-beauty-industry',
    },
    {
      title: 'ISO 2409 Adhesion & Gloss Unit (GU) Quality Control in B2B Batches',
      date: 'May 18, 2025',
      category: 'Quality & Standards',
      excerpt:
        'Our engineering team expanded ISO 2409 cross-cut adhesion testing, 60-degree gloss unit (GU) verification, and ΔE < 0.8 spectrophotometry protocols for high-volume cosmetic flacons, ABS housings, and automotive headlamp reflector batches across all vacuum chambers.',
      homeSummary:
        'Cross-cut adhesion Class 5B validation, GU gloss repeatability, and color consistency for industrial plastic parts painting.',
      ctaLabel: 'Explore industrial plastic painting QA',
      imageKey: 'externalUnsplash',
      externalImageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop&crop=center',
      path: '/en/plastic-parts-painting',
    },
  ],
  de: [
    {
      title: 'Moderne Vakuummetallisierung und Reflektor-Aufbereitung in Józefów',
      date: '25. Mai 2026',
      category: 'Investitionen',
      excerpt:
        'Im STANIAX-Werk in Józefów bei Warschau wurde eine modernisierte PVD-Vakuummetallisierungs- und HVLP-Lackierlinie für Klein- und Großserien in Betrieb genommen. Entdecken Sie unsere Leistungen in der Scheinwerfer-Reflektor-Aufbereitung, Glasflakon-Lackierung und Kunststoffverchromung nach ISO 2409.',
      homeSummary:
        'Ausgebaute PVD-Hochvakuum- und HVLP-Lackierlinien bei Warschau für Kunststoffverchromung, Glasveredelung und Reflektoren.',
      ctaLabel: 'PVD-Vakuummetallisierung entdecken',
      imageKey: 'vacuumChamber',
      path: '/de/vakuummetallisierung',
    },
    {
      title: 'Wie funktioniert die Scheinwerfer-Reflektor-Aufbereitung? Technischer Ratgeber',
      date: '10. Juni 2026',
      category: 'Technischer Ratgeber',
      excerpt:
        'Technischer Leitfaden: Warum Reflektoren erblinden, wie PVD-Aluminiumbedampfung im Hochvakuum abläuft und wann sich die Aufbereitung lohnt.',
      homeSummary:
        'Ursachen von Leuchtkraftverlust, Ablauf der 99,99-%-Aluminiumbedampfung im Vakuum und Vergleich von OEM-Aufbereitung vs. Nachbau.',
      ctaLabel: 'Ratgeber Reflektor-Aufbereitung lesen',
      imageKey: 'newReflectors',
      path: '/de/news/scheinwerfer-reflektoren-regeneration-und-polieren',
    },
    {
      title: 'Wie beeinflusst Metallisierung die Materialleistung? Ingenieur-Leitfaden',
      date: '20. August 2025',
      category: 'Fachartikel',
      excerpt:
        'Erfahren Sie, wie fortschrittliche Vakuummetallisierung, Kunststofflackierung und PVD-Prozesse die Festigkeit und Ästhetik von Materialien beeinflussen.',
      homeSummary:
        'Wie nanoskalige PVD-Schichten auf Polymeren und Metallen Verschleißschutz, Reflexion und Leichtbau verbinden.',
      ctaLabel: 'Leitfaden zu PVD & Materialleistung lesen',
      imageKey: 'newsAviation',
      path: '/de/news/wie-beeinflusst-metallisierung-die-materialleistung',
    },
    {
      title: 'Vakuummetallisierung revolutioniert die Kosmetikbranche',
      date: '20. August 2025',
      category: 'Fachartikel',
      excerpt:
        'Erfahren Sie, wie PVD-Vakuummetallisierung und präzise UV-Kunststofflackierung Kosmetikverpackungen im Premium-Beauty-Segment revolutionieren.',
      homeSummary:
        'Gold-, Chrom- und Roségold-PVD-Beschichtungen mit UV-Decklack für Tiegel, Parfümkappen und Kosmetikverpackungen.',
      ctaLabel: 'Studie Kosmetik-Metallisierung lesen',
      imageKey: 'colorfulPackaging',
      path: '/de/news/vakuummetallisierung-revolutioniert-die-kosmetikbranche',
    },
    {
      title: 'ISO 2409 Gitterschnitt- und Glanzgradprüfung (GU) in B2B-Serien',
      date: '18. Mai 2025',
      category: 'Qualität & Normen',
      excerpt:
        'Unser Ingenieurteam hat erweiterte Prüfprotokolle nach ISO 2409 und ΔE-Spektralfotometrie für Kosmetik- und Automotive-Serien eingeführt.',
      homeSummary:
        'Gitterschnittprüfung Klasse 5B, GU-Glanzgradkontrolle und reproduzierbare RAL-/NCS-Serienlackierung auf Kunststoffteilen.',
      ctaLabel: 'Standards der Kunststofflackierung ansehen',
      imageKey: 'externalUnsplash',
      externalImageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop&crop=center',
      path: '/de/kunststofflackierung',
    },
  ],
}

export const NEWS_PAGE_CONTENT = {
  pl: {
    newsTitle: 'Aktualności',
    newsCenter: 'Centrum wiedzy i aktualności STANIAX',
    h1: 'Baza Wiedzy i Poradniki Techniczne — Metalizacja Próżniowa i Lakierowanie',
    pageTitle: 'Baza Wiedzy i Poradniki PVD | STANIAX',
    pageDesc:
      'Poradniki techniczne STANIAX: regeneracja odbłyśników reflektorów, metalizacja próżniowa PVD tworzyw oraz lakierowanie szkła i przemysłowe RAL/NCS.',
    newsDesc:
      'Poradniki inżynieryjne, analizy porównawcze powłok PVD, case studies z branży automotive i beauty oraz informacje o rozwoju parku maszynowego STANIAX w Józefowie.',
    featuredNews: 'Wyróżniona publikacja',
    readMore: 'Czytaj artykuł',
    fullArticle: 'Przejdź do pełnej treści',
    otherNews: 'Pozostałe publikacje',
    moreUpdates: 'Więcej artykułów i wdrożeń STANIAX',
    backToTop: 'Powrót na górę',
    newsletterTitle: 'Konsultacje techniczne STANIAX',
    newsletterHeading: 'Masz pytania o dobór powłoki PVD lub lakieru dla swojego detalu?',
    newsletterDesc:
      'Skonsultuj geometrię detalu, rodzaj tworzywa (ABS, PC, PA, PP, szkło) oraz wymagania normatywne bezpośrednio z technologiem.',
    contactTeam: 'Skontaktuj się z technologiem',
    visitUs: 'Zobacz lokalizację zakładu (Józefów)',
    latestNews: 'Baza wiedzy i artykuły',
    libraryLinkLabel: 'Otwórz pełną bibliotekę artykułów STANIAX',
    editorialGuide: {
      title: 'Standardy inżynieryjne STANIAX w procesach PVD i lakierowania B2B',
      intro:
        'Publikacje w bazie wiedzy STANIAX powstają bezpośrednio na podstawie doświadczeń naszego zakładu produkcyjnego w Józefowie pod Warszawą, gdzie od ponad 25 lat łączymy metalizację próżniową PVD aluminium 99,99% z zaawansowanym lakierowaniem natryskowym na mokro oraz utwardzaniem powłok promieniowaniem UV i termicznym. Każdy poradnik pomaga inżynierom produktu, działom zakupów B2B oraz warsztatom motoryzacyjnym podjąć świadomą decyzję technologiczną między chromowaniem próżniowym, galwanizacją a lakierowaniem wielowarstwowym.',
      standardsTitle: 'Kluczowe parametry procesowe i kryteria odbioru jakościowego',
      standards: [
        {
          label: 'Przygotowanie podłoża i aktywacja powierzchni',
          detail:
            'Tworzywa trudnozwilżalne (PP, PE, PA) wymagają kontrolowanej obróbki płomieniowej lub aktywacji plazmowej oraz dobranego podkładu adhezyjnego (Base Coat) wygładzającego mikrostrukturę wypraski przed wprowadzeniem do komory wysokiej próżni.',
        },
        {
          label: 'Kontrola przyczepności ISO 2409 i ASTM D3359',
          detail:
            'Każda seria próbna i produkcyjna weryfikowana jest testem siatki nacięć (oczekiwana klasa 0 / 5B), testem odporności na ścieranie, stężony etanol w branży perfumeryjnej oraz cyklami termiczno-wilgotnościowymi dla komponentów reflektorów samochodowych.',
        },
        {
          label: 'Dobór wykończenia pod konkretny sektor przemysłu',
          detail:
            'Dla branży beauty dobieramy transparentne lakiery nawierzchniowe (Top Coat UV) barwione na złoto, rose gold, chrom i odcienie metaliczne. Dla sektora automotive i oświetlenia priorytetem jest maksymalny współczynnik odbicia światła oraz stabilność termiczna odbłyśnika.',
        },
      ],
      closing:
        'Planujesz wdrożenie seryjne detali z tworzyw ABS, PC, PMMA, szkła lub odlewów metalowych? Przed zleceniem serii wykonujemy testy technologiczne na dostarczonych wzorcach, dobieramy parametry zawieszek rotacyjnych i potwierdzamy odcień w palecie RAL, NCS lub Pantone z tolerancją spektrofotometryczną ΔE.',
    },
  },
  en: {
    newsTitle: 'News & Guides',
    newsCenter: 'STANIAX Knowledge Base & News',
    h1: 'Knowledge Base & Technical Guides — Vacuum Metallization & Coating',
    pageTitle: 'PVD Metallization & Coating Guides | STANIAX',
    pageDesc:
      'Engineering guides and technical insights by STANIAX: headlight reflector restoration, PVD vacuum metallization of plastics, and industrial surface coating.',
    newsDesc:
      'Engineering guides, PVD coating comparisons, automotive and beauty case studies, and updates from the STANIAX facility in Józefów.',
    featuredNews: 'Featured Publication',
    readMore: 'Read article',
    fullArticle: 'Read full publication',
    otherNews: 'More publications',
    moreUpdates: 'More STANIAX articles and updates',
    backToTop: 'Back to top',
    newsletterTitle: 'STANIAX Technical Consulting',
    newsletterHeading: 'Need help selecting a PVD coating or paint system for your part?',
    newsletterDesc:
      'Consult part geometry, substrate type (ABS, PC, PA, PP, glass), and quality requirements directly with our process engineer.',
    contactTeam: 'Contact our engineer',
    visitUs: 'View plant location (Józefów)',
    latestNews: 'Knowledge Base & Articles',
    libraryLinkLabel: 'Browse full STANIAX article library',
    editorialGuide: {
      title: 'STANIAX Engineering Standards for PVD & Industrial Surface Coating',
      intro:
        'Every technical publication in our knowledge base draws directly on production runs at our manufacturing plant near Warsaw, where we combine 99.99% high-vacuum aluminum PVD deposition with wet HVLP spray painting, thermal baking, and UV-cured hard coats. Our guides help B2B OEM engineers, packaging buyers, and automotive specialists compare vacuum metallization against legacy electroplating and specify durable finishes.',
      standardsTitle: 'Process Engineering Checkpoints & B2B Quality Criteria',
      standards: [
        {
          label: 'Substrate Pretreatment & Surface Activation',
          detail:
            'Low-surface-energy polymers (PP, PE, PA) undergo flame or plasma activation followed by leveling UV Base Coat lacquers so the nanometer-scale aluminum mirror film achieves uniform gloss without orange-peel defects.',
        },
        {
          label: 'ISO 2409 Adhesion & Chemical Resistance Testing',
          detail:
            'Pilot and serial production batches are validated using ISO 2409 cross-cut adhesion tests (Class 0 / 5B target), cosmetic alcohol resistance protocols for perfume closures, and thermal aging stability for headlamp optics.',
        },
        {
          label: 'Sector-Specific Topcoat Systems',
          detail:
            'For beauty and spirits packaging we formulate tinted UV Top Coats in chrome, yellow gold, rose gold, amber, and metallic gradients. For technical illumination and OEM reflectors we maximize luminous reflectance and thermal endurance.',
        },
      ],
      closing:
        'Before scaling ABS, polycarbonate, glass, or die-cast parts into full serial production, our Józefów engineering lab performs pre-production sample trials, fixture optimization, and spectrophotometric color matching across RAL, NCS, and Pantone standards.',
    },
  },
  de: {
    newsTitle: 'Aktuelles & Ratgeber',
    newsCenter: 'STANIAX Wissensdatenbank & News',
    h1: 'Wissensdatenbank & Technische Ratgeber — Vakuummetallisierung & Lackierung',
    pageTitle: 'Wissensdatenbank: PVD & Lackierung | STANIAX',
    pageDesc:
      'Fachartikel und Ratgeber von STANIAX: Scheinwerfer-Reflektor-Aufbereitung, PVD-Vakuummetallisierung von Kunststoffen sowie Glas- und Industrielackierung.',
    newsDesc:
      'Ingenieur-Leitfäden, PVD-Beschichtungsvergleiche, Fallstudien aus Automotive und Kosmetik sowie Updates aus dem STANIAX-Werk in Józefów.',
    featuredNews: 'Hervorgehobene Publikation',
    readMore: 'Artikel lesen',
    fullArticle: 'Vollständigen Beitrag lesen',
    otherNews: 'Weitere Publikationen',
    moreUpdates: 'Weitere STANIAX-Fachartikel & Updates',
    backToTop: 'Nach oben',
    newsletterTitle: 'STANIAX Technische Beratung',
    newsletterHeading: 'Fragen zur Auswahl von PVD-Schicht oder Lacksystem für Ihr Bauteil?',
    newsletterDesc:
      'Besprechen Sie Bauteilgeometrie, Substrat (ABS, PC, PA, PP, Glas) und Qualitätsanforderungen direkt mit unserem Technologen.',
    contactTeam: 'Technologen kontaktieren',
    visitUs: 'Werkstandort ansehen (Józefów)',
    latestNews: 'Wissensdatenbank & Fachartikel',
    libraryLinkLabel: 'Vollständige STANIAX-Artikelbibliothek öffnen',
    editorialGuide: {
      title: 'STANIAX-Ingenieurstandards für PVD-Metallisierung & Industrielackierung',
      intro:
        'Alle Fachbeiträge unserer Wissensdatenbank basieren unmittelbar auf der Serienpraxis unseres Werks in Józefów bei Warschau. Seit über 25 Jahren verbinden wir hochreine 99,99-%-Aluminium-PVD-Vakuummetallisierung in Kammern bis Ø 1200 mm mit HVLP-Nasslackierung, thermischer Einbrenntechnik und UV-Schutzlacken. Unsere Praxisleitfäden unterstützen Konstrukteure, industrielle Einkäufer, Verpackungsentwickler und Kfz-Fachbetriebe dabei, die optimale Oberflächentechnologie zwischen Hochvakuumbedampfung, Kunststoffverchromung und Mehrschichtlackierung fundiert auszuwählen.',
      standardsTitle: 'Technische Prüfkriterien & Prozessparameter in der Serienfertigung',
      standards: [
        {
          label: 'Substratvorbehandlung & Oberflächenaktivierung von Polymeren',
          detail:
            'Schwer benetzbare Kunststoffe wie Polypropylen (PP), Polyethylen (PE) und Polyamid (PA) erhalten vor der Beschichtung eine definierte Beflammungs- oder Plasmaaktivierung sowie einen nivellierenden UV-Base-Coat. Dadurch gleicht der Grundlack Mikrostrukturen des Spritzgusses aus und bildet eine optisch glatte Basis für die nanometergenaue Bedampfung auf rotierenden Satellitenaufnahmen.',
        },
        {
          label: 'Gitterschnittprüfung ISO 2409 & Beständigkeitstests für Kosmetik und Kfz',
          detail:
            'Jede Vorserie und jedes Produktionslos prüfen wir systematisch auf Haftfestigkeit nach ISO 2409 sowie ASTM D3359 (Zielklasse 0 bzw. 5B). Darüber hinaus erfolgen Alkohol-, Parfümöl- und Schweißtests für Kosmetikverschlüsse sowie thermische Belastungstests bis über 130 °C für Scheinwerfer-Reflektoren im Automobil- und Nutzfahrzeugbereich.',
        },
        {
          label: 'Branchenspezifische Decklack- & PVD-Systeme (Chrom, Gold, RAL, NCS)',
          detail:
            'Für Parfüm-, Spirituosen- und Kosmetikverpackungen realisieren wir spiegelnden Chrom, 24K-Gold, Roségold, Rauchglas-Effekte und getönte UV-Top-Coats auf Kunststoff sowie Glasflakons. Im Bereich Automotive-Optik, Beleuchtungstechnik und Elektronik stehen hingegen maximaler Lichtreflexionsgrad, EMI-Schirmung und dauerhafte Witterungsbeständigkeit im Vordergrund.',
        },
        {
          label: 'Vorrichtungsbau, Bemusterung & Just-in-Time-Logistik aus Polen',
          detail:
            'Bereits vor dem Serienanlauf auf ABS, PC, PMMA, Glas oder Metalldruckguss fertigen unsere Technologen kundenspezifische Maskierungs- und Spannvorrichtungen, dokumentieren alle Schichtparameter und sichern gleichmäßige Zykluszeiten für mittelständische und großvolumige Lieferketten in Deutschland, Österreich und der gesamten Europäischen Union.',
        },
      ],
      closing:
        'Vor dem Serienanlauf erstellen unsere Verfahrenstechniker technische Erstbemusterungen an Ihren Originalteilen, optimieren die Trommel- und Satellitenbestückung für wirtschaftliche Stückkosten und stimmen Farbtöne nach RAL, NCS oder Pantone per ΔE-Spektralfotometer exakt und reproduzierbar ab.',
    },
  },
} as const

export const ARTICLE_LIBRARY_CONTENT = {
  pl: {
    badge: 'Pełne archiwum',
    title: 'Biblioteka artykułów i publikacji STANIAX',
    metaTitle: 'Biblioteka artykułów technicznych | STANIAX',
    desc: 'Archiwum artykułów technicznych STANIAX — poradniki o metalizacji próżniowej PVD, regeneracji odbłyśników i lakierowaniu przemysłowym w Józefowie.',
    backToNews: 'Wróć do bazy wiedzy',
    readMore: 'Czytaj publikację',
  },
  en: {
    badge: 'Full archive',
    title: 'STANIAX Article & Publication Library',
    metaTitle: 'Technical Article Library | STANIAX',
    desc: 'All STANIAX technical guides and articles in one place — resources on PVD vacuum metallization, headlight reflector restoration, and industrial coating.',
    backToNews: 'Back to knowledge base',
    readMore: 'Read publication',
  },
  de: {
    badge: 'Vollständiges Archiv',
    title: 'STANIAX Artikel- und Publikationsbibliothek',
    metaTitle: 'Technische Artikelbibliothek | STANIAX',
    desc: 'Alle technischen Ratgeber und Fachartikel von STANIAX an einem Ort — Leitfäden zu PVD-Vakuummetallisierung, Reflektor-Aufbereitung und Industrielackierung.',
    backToNews: 'Zurück zur Wissensdatenbank',
    readMore: 'Beitrag lesen',
  },
} as const
