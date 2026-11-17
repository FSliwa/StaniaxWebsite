import type { Lang } from '@/lib/translations'
import type { EngineeringSection, RelatedLinkItem } from './comparisons'

export const PRICING_SLUGS: Record<Lang, string> = {
  pl: '/cennik-regeneracji-reflektorow',
  en: '/en/headlight-restoration-pricing',
  de: '/de/scheinwerfer-aufbereitung-preise',
}

export const LOCAL_WARSAW_SLUGS: Record<Lang, string> = {
  pl: '/regeneracja-reflektorow/warszawa-jozefow',
  en: '/en/headlight-restoration/warsaw-jozefow',
  de: '/de/scheinwerfer-aufbereitung/warschau-jozefow',
}

export interface PricingTier {
  id: string
  serviceType: string
  scope: string
  turnaround: string
  unitPriceMin: number
  unitPriceMax: number
  currencySymbol: string
  priceLabel: string
  warranty: string
}

export interface CalculatorPreset {
  id: 'h7-parabola' | 'xenon-projector' | 'biled-frame' | 'classic-steel' | 'truck-heavy'
  label: string
  baseReflectorPrice: number
  lensUvAddonPrice: number
  dismantlingAddonPrice: number
  currency: string
  note: string
}

export interface PricingLocalePage {
  metaTitle: string
  metaDesc: string
  badge: string
  h1: string
  subtitle: string
  directAnswerQuestion: string
  directAnswer: string
  calcTitle: string
  calcIntro: string
  calcQtyLabel: string
  calcLensAddonLabel: string
  calcDismantlingAddonLabel: string
  calcTotalLabel: string
  calcCtaLabel: string
  presets: CalculatorPreset[]
  tiersTitle: string
  tiers: PricingTier[]
  sections: EngineeringSection[]
  faq: Array<{ q: string; a: string }>
  relatedLinks: RelatedLinkItem[]
  breadLabel: string
}

export interface LocalHubLocalePage {
  metaTitle: string
  metaDesc: string
  badge: string
  h1: string
  subtitle: string
  directAnswerQuestion: string
  directAnswer: string
  plantCardTitle: string
  plantAddress: string
  plantHours: string
  plantDirections: string
  plantRegNote: string
  phone: string
  email: string
  serviceRadiusTable: Array<{ zone: string; distanceTime: string; dropoffMode: string }>
  sections: EngineeringSection[]
  faq: Array<{ q: string; a: string }>
  relatedLinks: RelatedLinkItem[]
  breadLabel: string
}

export const HEADLIGHT_PRICING_PAGE: Record<Lang, PricingLocalePage> = {
  pl: {
    metaTitle: 'Cennik regeneracji reflektorów i odbłyśników | STANIAX',
    metaDesc:
      'Cennik regeneracji odbłyśników i lamp w STANIAX od 150 zł/szt.: metalizacja PVD H7/Bi-Xenon, polerowanie + lakier UV, rabaty B2B i wysyłka kurierska.',
    badge: 'Przejrzysty cennik 2026',
    h1: 'Cennik regeneracji reflektorów i odbłyśników PVD',
    subtitle:
      'Bezpośrednie stawki zakładu metalizacji STANIAX dla kierowców indywidualnych, oldtimerów i warsztatów partnerskich z całej Polski oraz UE.',
    directAnswerQuestion: 'Ile kosztuje regeneracja odbłyśnika i pełnego reflektora samochodowego metodą PVD?',
    directAnswer:
      'Regeneracja pojedynczego wymontowanego odbłyśnika metodą metalizacji próżniowej PVD w STANIAX kosztuje od 150 do 250 zł netto/brutto w zależności od rozmiaru i stanu podłoża (komplet 2 szt. od 300 zł). Wyjęcie lampy z pojazdu i rozklejenie obudowy wykonuje zazwyczaj wyspecjalizowany warsztat samochodowy, a STANIAX realizuje metalizację i powłoki ochronne dostarczonych odbłyśników (łączny koszt rynkowy pełnej regeneracji to zwykle 350-700 zł za lampę).',
    calcTitle: 'Kalkulator orientacyjnego kosztu regeneracji',
    calcIntro:
      'Dobierz typ odbłyśnika, liczbę sztuk oraz opcjonalne lakierowanie klosza poliwęglanowego warstwą UV, aby oszacować budżet przed wysyłką.',
    calcQtyLabel: 'Liczba lamp / odbłyśników',
    calcLensAddonLabel: 'Opcja: Polerowanie + lakier ochronny UV na klosz',
    calcDismantlingAddonLabel: 'Orientacyjnie: Demontaż i rozklejenie obudowy w zewnętrznym warsztacie (poza STANIAX)',
    calcTotalLabel: 'Szacowany koszt całkowity',
    calcCtaLabel: 'Zamów wycenę ze zdjęciem lampy',
    presets: [
      {
        id: 'h7-parabola',
        label: 'Odbłyśnik soczewkowy H7 / H1 / H4 (wymontowany)',
        baseReflectorPrice: 150,
        lensUvAddonPrice: 150,
        dismantlingAddonPrice: 180,
        currency: 'zł',
        note: 'Najczęstsza regeneracja: soczewka H7 (Audi, VW, BMW, Opel, Ford).',
      },
      {
        id: 'xenon-projector',
        label: 'Odbłyśnik Bi-Xenon / Xenon D1S, D2S, D3S (Hella/Valeo/AL)',
        baseReflectorPrice: 180,
        lensUvAddonPrice: 150,
        dismantlingAddonPrice: 200,
        currency: 'zł',
        note: 'Podkład wysokotemperaturowy + napylana próżniowo powłoka Al z ochroną UV.',
      },
      {
        id: 'biled-frame',
        label: 'Maskownica / odbłyśnik dużych lamp Bi-LED lub dzielonych',
        baseReflectorPrice: 220,
        lensUvAddonPrice: 160,
        dismantlingAddonPrice: 250,
        currency: 'zł',
        note: 'Wymaga większego rozstawu w komorze PVD lub selektywnego maskowania.',
      },
      {
        id: 'classic-steel',
        label: 'Reflektor stalowy / mosiężny Classic & Oldtimer / Motocykl',
        baseReflectorPrice: 210,
        lensUvAddonPrice: 120,
        dismantlingAddonPrice: 150,
        currency: 'zł',
        note: 'Dodatkowe usunięcie korozji i sealing antykorozyjny blachy przed PVD.',
      },
      {
        id: 'truck-heavy',
        label: 'Lampy 24V TIR / Autobus / Maszyny (Volvo FH, Scania, MAN)',
        baseReflectorPrice: 200,
        lensUvAddonPrice: 170,
        dismantlingAddonPrice: 220,
        currency: 'zł',
        note: 'Zniżki wolumenowe B2B od 6 szt. dla flot transportowych i serwisów.',
      },
    ],
    tiersTitle: 'Tabela stawek i wariantów realizacji w STANIAX',
    tiers: [
      {
        id: 'bare-projector',
        serviceType: 'Sam odbłyśnik soczewkowy (dostarczony luzem)',
        scope: 'Czyszczenie, przygotowanie powierzchni, podkład HT, napylanie Al + powłoka UV',
        turnaround: '5-7 dni roboczych',
        unitPriceMin: 150,
        unitPriceMax: 200,
        currencySymbol: 'zł',
        priceLabel: '150 - 200 zł / szt.',
        warranty: '3-5 lat trwałości',
      },
      {
        id: 'parabola-large',
        serviceType: 'Duży odbłyśnik paraboliczny / podwójny / motocyklowy',
        scope: 'Wypełnienie ubytków termicznych, wieloetapowe lakierowanie + PVD',
        turnaround: '5-7 dni roboczych',
        unitPriceMin: 180,
        unitPriceMax: 260,
        currencySymbol: 'zł',
        priceLabel: '180 - 260 zł / szt.',
        warranty: '3-5 lat trwałości',
      },
      {
        id: 'steel-oldtimer',
        serviceType: 'Odbłyśnik metalowy zabytkowy (z czyszczeniem rdzy)',
        scope: 'Usuwanie korozji, grunt epoksydowy antykorozyjny, PVD lustrzane >92%',
        turnaround: '5-7 dni roboczych',
        unitPriceMin: 200,
        unitPriceMax: 300,
        currencySymbol: 'zł',
        priceLabel: '200 - 300 zł / szt.',
        warranty: '3-5 lat trwałości',
      },
      {
        id: 'uv-lens-coat',
        serviceType: 'Lakierowanie zewnętrznego klosza poliwęglanowego (UV)',
        scope: 'Usunięcie starego hard-coatu + natrysk UV (polerowanie reflektorów cena / polerowanie lamp cena z warstwą ochronną)',
        turnaround: '5-7 dni roboczych',
        unitPriceMin: 150,
        unitPriceMax: 220,
        currencySymbol: 'zł',
        priceLabel: '150 - 220 zł / klosz',
        warranty: '3-5 lat trwałości',
      },
      {
        id: 'b2b-fleet',
        serviceType: 'Pakiety warsztatowe B2B (≥ 10 odbłyśników w partii)',
        scope: 'Zbiorcza karuzela PVD dla serwisów autolampowych z Polski i UE',
        turnaround: '2-3 dni (tryb ekspres)',
        unitPriceMin: 150,
        unitPriceMax: 250,
        currencySymbol: 'zł',
        priceLabel: 'Wycena indywidualna B2B',
        warranty: '3-5 lat trwałości',
      },
    ],
    sections: [
      {
        heading: 'Od czego zależy końcowa cena regeneracji odbłyśnika w STANIAX?',
        paragraphs: [
          'W zapytaniach kierowców takich jak regeneracja odbłyśników cena oraz regeneracja reflektorów cena kluczowy jest sposób dostarczenia części: najtańszą i najszybszą formą zlecenia - wybieraną przez 80% mechaników - jest wysłanie samych wymontowanych odbłyśników (np. po wyjęciu soczewki od tyłu reflektora w Audi A4 B6/B7, BMW E39/E46, Passacie B6 czy Mercedesie W211). Wtedy całkowity koszt za parę odbłyśników wynosi zazwyczaj 300-400 zł zamiast 2000-5000 zł za nowe lampy.',
          'Jeżeli reflektor wymaga wyjęcia z pojazdu i rozklejenia obudowy, czynności te wykonuje wyspecjalizowany warsztat samochodowy, natomiast STANIAX odpowiada za przemysłową metalizację próżniową i powłoki ochronne dostarczonych odbłyśników oraz detali lamp (całościowa usługa warsztat + metalizacja mieści się zazwyczaj w 350-700 zł).',
        ],
        bullets: [
          'Bezpłatna weryfikacja stanu przed procesem - gdy tworzywo jest przepalone na wylot, informujemy przed kosztami',
          'Brak ukrytych dopłat za pakowanie zwrotne w piankę antystatyczną',
          'Stałe cenniki hurtowe dla warsztatów specjalizujących się w autolampach oraz flot ciężarowych',
        ],
      },
      {
        heading: 'Jak zapakować same odbłyśniki lub reflektory do wysyłki do Józefowa?',
        paragraphs: [
          'Każdy wymontowany odbłyśnik z kruchym gwintem regulacji owiń osobno folią bąbelkową i włóż do sztywnego kartonu z opisem telefonu kontaktowego. Przesyłki kurierskie kieruj bezpośrednio na nasz zakład produkcyjny w Józefowie pod Warszawą (ul. kard. Stefana Wyszyńskiego 116A).',
        ],
      },
    ],
    faq: [
      {
        q: 'Czy podana cena 150 zł dotyczy jednego odbłyśnika czy kompletu dwóch lamp?',
        a: 'Kwota 150-200 zł dotyczy jednej sztuki pojedynczego odbłyśnika soczewkowego dostarczonego luzem. Komplet dwóch odbłyśników kosztuje standardowo 300-400 zł.',
      },
      {
        q: 'Czy mogę dostarczyć wymontowane odbłyśniki osobiście bez wcześniejszego umawiania?',
        a: 'Tak, zapraszamy od poniedziałku do piątku w godz. 07:00-17:00 do zakładu STANIAX w Józefowie przy ul. Wyszyńskiego 116A lub kurierem z całej Polski.',
      },
      {
        q: 'Jaką trwałość ma zregenerowany odbłyśnik i czy wystawiacie fakturę VAT?',
        a: 'Na każde zlecenie wystawiamy paragon lub fakturę VAT oraz protokół kontroli jakości, a trwałość powłoki PVD z zabezpieczeniem UV wynosi 3-5 lat (do 5 lat eksploatacji).',
      },
      {
        q: 'Jakie zniżki obowiązują dla warsztatów samochodowych wysyłających po kilka kompletów tygodniowo?',
        a: 'Dla stałych partnerów serwisowych przygotowujemy indywidualną stawkę kontraktową kalkulowaną indywidualnie przy zbiorczym załadunku komory PVD.',
      },
    ],
    relatedLinks: [
      { label: 'Warszawa & Józefów - dojazd i punkt przyjęć', path: '/regeneracja-reflektorow/warszawa-jozefow' },
      { label: 'Porównanie: Regeneracja odbłyśnika vs zamiennik', path: '/porownanie/regeneracja-odblysnikow-vs-nowy-zamiennik' },
      { label: 'Porównanie: Polerowanie klosza vs PVD', path: '/porownanie/polerowanie-kloszy-vs-regeneracja-wnetrza-pvd' },
      { label: 'Usługa: Regeneracja odbłyśników i reflektorów', path: '/regeneracja-reflektorow' },
    ],
    breadLabel: 'Cennik reflektorów',
  },
  en: {
    metaTitle: 'Headlight Reflector Restoration Pricing | STANIAX',
    metaDesc:
      'Transparent PVD headlight reflector re-silvering prices from ~€35/bowl at STANIAX: H7/Bi-Xenon projector bowls, UV lens clearcoat & EU B2B workshop tiers.',
    badge: '2026 Rate Card & Estimator',
    h1: 'Headlight & Reflector Restoration Pricing (PVD)',
    subtitle:
      'Factory-direct rates from STANIAX Józefów plant for dismantled OEM projector bowls, vintage metal reflectors, and EU B2B headlamp workshops.',
    directAnswerQuestion: 'How much does vacuum PVD headlight reflector restoration cost?',
    directAnswer:
      'Industrial PVD vacuum re-aluminizing of a single dismantled headlight reflector bowl at STANIAX ranges from €35 to €65 (~150-260 PLN) per unit (€70-€120 per pair) depending on cup size and heat pitting. Headlamp removal and housing unsealing are typically handled by a specialized automotive workshop (total market restoration ~350-700 PLN), while STANIAX coats supplied reflectors and UV lenses.',
    calcTitle: 'Interactive Restoration Cost Estimator',
    calcIntro:
      'Select your reflector construction, quantity, and optional polycarbonate UV lens sealing to estimate your project cost.',
    calcQtyLabel: 'Number of reflectors / lamps',
    calcLensAddonLabel: 'Optional: Outer polycarbonate lens polishing + UV clearcoat',
    calcDismantlingAddonLabel: 'Reference estimate: Housing opening & resealing at external workshop (outside STANIAX)',
    calcTotalLabel: 'Estimated total cost',
    calcCtaLabel: 'Request exact quote with photo',
    presets: [
      {
        id: 'h7-parabola',
        label: 'Dismantled H7 / H1 Projector Reflector Bowl',
        baseReflectorPrice: 38,
        lensUvAddonPrice: 35,
        dismantlingAddonPrice: 45,
        currency: '€',
        note: 'Compact projector bowls (Audi A4, BMW, VW Passat, Ford).',
      },
      {
        id: 'xenon-projector',
        label: 'Bi-Xenon / Xenon D1S-D3S Bowl (Hella / Valeo / AL)',
        baseReflectorPrice: 45,
        lensUvAddonPrice: 35,
        dismantlingAddonPrice: 50,
        currency: '€',
        note: 'High-temp primer + vacuum PVD aluminum + protective UV coat.',
      },
      {
        id: 'biled-frame',
        label: 'Large Parabola / Bi-LED Housing & Shroud',
        baseReflectorPrice: 55,
        lensUvAddonPrice: 40,
        dismantlingAddonPrice: 60,
        currency: '€',
        note: 'Requires larger planetary spacing inside our high-vacuum PVD chamber.',
      },
      {
        id: 'classic-steel',
        label: 'Vintage Steel / Brass Classic & Motorcycle Reflector',
        baseReflectorPrice: 52,
        lensUvAddonPrice: 30,
        dismantlingAddonPrice: 35,
        currency: '€',
        note: 'Includes rust removal and anti-corrosion primer barrier.',
      },
      {
        id: 'truck-heavy',
        label: '24V Commercial Truck / Bus Unit (Volvo / Scania / MAN)',
        baseReflectorPrice: 49,
        lensUvAddonPrice: 42,
        dismantlingAddonPrice: 55,
        currency: '€',
        note: 'EU fleet volume discounts available starting at 6+ units.',
      },
    ],
    tiersTitle: 'PVD Reflector Re-Silvering Rate Matrix',
    tiers: [
      {
        id: 'bare-projector',
        serviceType: 'Compact Projector Bowl (shipped bare/dismantled)',
        scope: 'Chemical strip, HT primer leveling, aluminum PVD + UV protective coat',
        turnaround: '5-7 business days',
        unitPriceMin: 35,
        unitPriceMax: 48,
        currencySymbol: '€',
        priceLabel: '€35 - €48 / unit',
        warranty: '3-5 years durability',
      },
      {
        id: 'parabola-large',
        serviceType: 'Large Parabolic / Twin / Motorcycle Reflector',
        scope: 'Pit filling, HT basecoat smoothing + >92% vacuum aluminum',
        turnaround: '5-7 working days',
        unitPriceMin: 45,
        unitPriceMax: 65,
        currencySymbol: '€',
        priceLabel: '€45 - €65 / unit',
        warranty: '3-5 years durability',
      },
      {
        id: 'steel-oldtimer',
        serviceType: 'Classic Car Metal Reflector (rust-remediated)',
        scope: 'De-rusting, epoxy corrosion seal, bright mirror PVD + protective coat',
        turnaround: '5-7 working days',
        unitPriceMin: 48,
        unitPriceMax: 72,
        currencySymbol: '€',
        priceLabel: '€48 - €72 / unit',
        warranty: '3-5 years durability',
      },
      {
        id: 'uv-lens-coat',
        serviceType: 'Outer Polycarbonate Lens Refinishing + UV Clearcoat',
        scope: 'Remove oxidized coat + spray crosslinked UV shield',
        turnaround: '5-7 business days',
        unitPriceMin: 35,
        unitPriceMax: 52,
        currencySymbol: '€',
        priceLabel: '€35 - €52 / lens',
        warranty: '3-5 years durability',
      },
      {
        id: 'b2b-fleet',
        serviceType: 'Workshop Partner B2B Batch (10+ reflectors/shipment)',
        scope: 'Dedicated EU workshop PVD carousel priority slots',
        turnaround: '2-3 days (express)',
        unitPriceMin: 35,
        unitPriceMax: 58,
        currencySymbol: '€',
        priceLabel: 'Custom B2B batch quote',
        warranty: '3-5 years durability',
      },
    ],
    sections: [
      {
        heading: 'How to Keep Restoration Costs Minimum via Dismantled Reflector Shipping',
        paragraphs: [
          'Sending dismantled projector bowls directly to our Józefów plant eliminates housing disassembly fees and cuts parcel volume cleanly. Most European BMW, Audi, VW, and Mercedes projectors unbolt directly via rear access caps without separating the glued front lens.',
          'Before executing work, technicians inspect burned spots on the dome: if plastic warped cleanly through structurally, we advise upfront free of charge rather than plating compromised geometry.',
        ],
        bullets: [
          'Factory B2B VAT invoice & traceable courier return across Europe',
          'Individual antistatic foam sleeves protecting fragile mirror surfaces',
          'Custom B2B batch pricing for automotive workshops and lamp rebuilders',
        ],
      },
      {
        heading: 'Packaging Guidelines for EU Courier Shipments',
        paragraphs: [
          'Wrap every loose reflector bowl individually with protective bubble foam inside a double-walled carton addressed exclusively to our production site: STANIAX Sp. z o.o., ul. kard. Stefana Wyszyńskiego 116A, 05-420 Józefów, Poland.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do listed rates cover one bowl or a pair?',
        a: 'Per-unit pricing covers one individual reflector bowl (~€35-€65); a matching left/right pair is double that rate minus optional B2B workshop tiers.',
      },
      {
        q: 'How fast is EU turnaround via DHL/DPD courier?',
        a: 'Plant processing averages 5-7 working days, plus standard 2-3 day cross-border courier return.',
      },
      {
        q: 'Does pricing include VAT / EU intracommunity reverse-charge billing?',
        a: 'B2B workshops registered for EU VAT receive zero-VAT intracommunity invoices upon valid NIP/VAT verification.',
      },
      {
        q: 'How long does PVD headlight reflector restoration last?',
        a: 'Industrial PVD aluminum restoration with protective UV coating provides 3-5 years (up to 5 years) of optical adhesion and mirror durability.',
      },
    ],
    relatedLinks: [
      { label: 'Local Service Hub: Warsaw & Józefów', path: '/en/headlight-restoration/warsaw-jozefow' },
      { label: 'Compare: OEM Reflector vs Aftermarket', path: '/en/compare/reflector-restoration-vs-aftermarket-headlight' },
      { label: 'Compare: Lens Polishing vs PVD', path: '/en/compare/lens-polishing-vs-internal-pvd-restoration' },
      { label: 'Service: Reflector Restoration', path: '/en/headlight-reflector-restoration' },
    ],
    breadLabel: 'Restoration Pricing',
  },
  de: {
    metaTitle: 'Preise: Reflektor neu bedampfen & Aufbereitung | STANIAX',
    metaDesc:
      'Transparente Preise für PVD-Reflektorbedampfung ab ca. 35 €/Stück bei STANIAX: H7/Bi-Xenon, UV-Frontscheibenschutz, B2B-Werkstattrabatte & Paketversand.',
    badge: 'Preisliste & Rechner 2026',
    h1: 'Preise für Scheinwerfer-Aufbereitung & Reflektor-Bedampfung',
    subtitle:
      'Direkte Werkspreise ab Werk Józefów für ausgebaute Kfz-Reflektoren, Oldtimer-Stahlspiegel sowie B2B-Sammelsendungen aus Deutschland und Österreich.',
    directAnswerQuestion: 'Was kostet es, einen Scheinwerfer-Reflektor im Vakuum neu bedampfen zu lassen?',
    directAnswer:
      'Das industrielle Neu-Bedampfen eines einzelnen ausgebauten Scheinwerfer-Reflektors per PVD kostet bei STANIAX je nach Größe und Einbrandzustand ab ca. 35 bis 65 € pro Stück (Paarpreis ca. 70-120 €). Der Ausbau und das Öffnen verklebter Gehäuse erfolgen in der Regel durch eine Kfz-Fachwerkstatt, während STANIAX die angelieferten Reflektoren und Streuscheiben beschichtet.',
    calcTitle: 'Interaktiver Kostenrechner für Reflektoren',
    calcIntro:
      'Wählen Sie Bauart, Stückzahl und gewünschte Zusatzleistungen wie UV-Frontscheibenversiegelung.',
    calcQtyLabel: 'Anzahl Reflektoren / Scheinwerfer',
    calcLensAddonLabel: 'Optional: Streuscheibe schleifen + UV-Klarlack auftragen',
    calcDismantlingAddonLabel: 'Richtwert: Gehäuseöffnung & Abdichtung in externer Fachwerkstatt (außerhalb STANIAX)',
    calcTotalLabel: 'Geschätzter Gesamtpreis',
    calcCtaLabel: 'Verbindliches Angebot mit Foto anfordern',
    presets: [
      {
        id: 'h7-parabola',
        label: 'Projektor-Reflektor H7 / H1 (ausgebaut angeliefert)',
        baseReflectorPrice: 38,
        lensUvAddonPrice: 35,
        dismantlingAddonPrice: 45,
        currency: '€',
        note: 'Gängige Linsentöpfe bei Audi, VW, BMW, Opel oder Ford.',
      },
      {
        id: 'xenon-projector',
        label: 'Bi-Xenon / Xenon D1S-D3S Reflektor (Hella / Valeo)',
        baseReflectorPrice: 45,
        lensUvAddonPrice: 35,
        dismantlingAddonPrice: 50,
        currency: '€',
        note: 'Hitzeschutzprimer + Vakuum-Aluminium + UV-Schutzschicht.',
      },
      {
        id: 'biled-frame',
        label: 'Großer Parabol- / Bi-LED-Reflektor & Blenden',
        baseReflectorPrice: 55,
        lensUvAddonPrice: 40,
        dismantlingAddonPrice: 60,
        currency: '€',
        note: 'Größerer Kammerplatzbedarf oder Teilmaskierung im Werk.',
      },
      {
        id: 'classic-steel',
        label: 'Oldtimer / Motorrad Stahl- oder Messingreflektor',
        baseReflectorPrice: 52,
        lensUvAddonPrice: 30,
        dismantlingAddonPrice: 35,
        currency: '€',
        note: 'Inklusive schonender Rostentfernung und Epoxid-Grundaufbau.',
      },
      {
        id: 'truck-heavy',
        label: '24V Lkw / Bus / Agrar (Volvo FH, Scania, MAN)',
        baseReflectorPrice: 49,
        lensUvAddonPrice: 42,
        dismantlingAddonPrice: 55,
        currency: '€',
        note: 'Fuhrpark- und B2B-Werkstattrabatte ab 6 Stück pro Sendung.',
      },
    ],
    tiersTitle: 'Preisübersicht nach Bearbeitungsstufe',
    tiers: [
      {
        id: 'bare-projector',
        serviceType: 'Kompakter Linsenreflektor (ausgebaut zugesendet)',
        scope: 'Entlackung, HT-Grundlack, PVD-Aluminium + UV-Schutzschicht',
        turnaround: '5-7 Werktage',
        unitPriceMin: 35,
        unitPriceMax: 48,
        currencySymbol: '€',
        priceLabel: '35 - 48 € / Stück',
        warranty: '3-5 Jahre Haltbarkeit',
      },
      {
        id: 'parabola-large',
        serviceType: 'Großparabol- / Doppelkammer- / Motorradreflektor',
        scope: 'Kraterausgleich, mehrstufige Egalisierung + >92 % Vakuumspiegel',
        turnaround: '5-7 Werktage',
        unitPriceMin: 45,
        unitPriceMax: 65,
        currencySymbol: '€',
        priceLabel: '45 - 65 € / Stück',
        warranty: '3-5 Jahre Haltbarkeit',
      },
      {
        id: 'steel-oldtimer',
        serviceType: 'Klassiker-Metallreflektor (inkl. Entrostung)',
        scope: 'Korrosionsentfernung, Schutzprimer, hochreflektierendes PVD',
        turnaround: '5-7 Werktage',
        unitPriceMin: 48,
        unitPriceMax: 72,
        currencySymbol: '€',
        priceLabel: '48 - 72 € / Stück',
        warranty: '3-5 Jahre Haltbarkeit',
      },
      {
        id: 'uv-lens-coat',
        serviceType: 'Frontscheiben-Sanierung Polycarbonat + UV-Lack',
        scope: 'Abschleifen der Verwitterung + vernetzter UV-Schutzlack (Scheinwerfer polieren Kosten inkl. Hardcoat)',
        turnaround: '5-7 Werktage',
        unitPriceMin: 35,
        unitPriceMax: 52,
        currencySymbol: '€',
        priceLabel: '35 - 52 € / Scheibe',
        warranty: '3-5 Jahre Haltbarkeit',
      },
      {
        id: 'b2b-fleet',
        serviceType: 'Werkstatt-Sammelpaket B2B (≥ 10 Reflektoren)',
        scope: 'Priorisierte PVD-Kammerbelegung für Kfz-Partnerbetriebe',
        turnaround: '2-3 Werktage (Express)',
        unitPriceMin: 35,
        unitPriceMax: 58,
        currencySymbol: '€',
        priceLabel: 'Individuelles B2B-Angebot',
        warranty: '3-5 Jahre Haltbarkeit',
      },
    ],
    sections: [
      {
        heading: 'So senken Werkstätten und Privatkunden die Aufbereitungskosten maximal',
        paragraphs: [
          'Rund 80 % unserer Kunden senden lediglich die ausgebauten Projektoren im stabilen Paket nach Józefów. So entfallen Kosten und Risiken für das Öffnen hart verklebter Scheinwerfergehäuse, während beide Achsen bereits für ca. 75-95 € wieder Neuwagen-Lichtstärke erreichen.',
          'Vor Arbeitsbeginn prüfen Techniker jede Brennkammer: Bei durchgeschmortem Kunststoff informieren wir umgehend vorab, ohne unnötige Kosten auszulösen.',
        ],
        bullets: [
          'EU-Innergemeinschaftliche Netto-Rechnung (USt-IdNr.) für Gewerbebetriebe möglich',
          'Kratzfreie Einzelverpackung in Schaumtaschen beim Rückversand',
          'Attraktive Werkstattrabatte ab 10 Teilen pro Sammelpaket',
        ],
      },
      {
        heading: 'Versandadresse für Pakete aus DACH',
        paragraphs: [
          'Adressieren Sie alle Pakete direkt an das Produktionswerk: STANIAX Sp. z o.o., ul. kard. Stefana Wyszyńskiego 116A, 05-420 Józefów, Polen (mit Kontakt-E-Mail und Telefonnummer im Karton).',
          'Für Kfz-Meisterbetriebe, Karosseriebauer und Flottenbetreiber aus Deutschland und Österreich erstellen wir vorab verbindliche Staffelangebote inklusive Qualitätskontrollprotokoll und 3-5 Jahren Schichthaltbarkeit.',
        ],
      },
    ],
    faq: [
      {
        q: 'Gilt der Preis pro Einzelreflektor oder pro Fahrzeugpaar?',
        a: 'Die Beträge ab 35-48 € gelten je Einzelreflektor; ein Satz aus linkem und rechtem Reflektor liegt bei rund 70-96 € zuzüglich Rückversand.',
      },
      {
        q: 'Wie lange dauert die Gesamtabwicklung ab Deutschland?',
        a: 'Die Bearbeitung im Werk dauert 5-7 Werktage, der DHL-/DPD-Versand je Richtung meist 2 Werktage.',
      },
      {
        q: 'Können deutsche Werkstätten steuerfrei innergemeinschaftlich abrechnen?',
        a: 'Ja, bei Angabe einer gültigen deutschen oder österreichischen USt-IdNr. (VAT ID) erfolgt die Fakturierung netto.',
      },
      {
        q: 'Welche Garantie gewährt STANIAX auf die Neuverspiegelung?',
        a: 'Die PVD-Beschichtung mit UV-Schutzlack erreicht im regulären Fahrbetrieb eine Haltbarkeit von 3 bis 5 Jahren.',
      },
    ],
    relatedLinks: [
      { label: 'Standort: Warschau & Józefów', path: '/de/scheinwerfer-aufbereitung/warschau-jozefow' },
      { label: 'Vergleich: Reflektor vs. Nachbau', path: '/de/vergleich/reflektor-aufbereitung-vs-nachbau' },
      { label: 'Vergleich: Polieren vs. PVD', path: '/de/vergleich/streuscheibe-polieren-vs-pvd-innensanierung' },
      { label: 'Leistung: Reflektor neu bedampfen', path: '/de/scheinwerfer-reflektor-aufbereitung' },
    ],
    breadLabel: 'Aufbereitung Preise',
  },
}

export const LOCAL_WARSAW_PAGE: Record<Lang, LocalHubLocalePage> = {
  pl: {
    metaTitle: 'Regeneracja reflektorów Warszawa i Józefów | STANIAX',
    metaDesc:
      'Regeneracja odbłyśników Warszawa - Józefów (20 min trasą S2/Wał Miedzeszyński). Przyjęcia osobiste pn-pt 07:00-17:00 przy ul. Wyszyńskiego 116A oraz kurier.',
    badge: 'Punkt przyjęć Mazowieckie & S2',
    h1: 'Regeneracja reflektorów i odbłyśników - Warszawa, Józefów i Otwock',
    subtitle:
      'Bezpośrednie przyjęcie w zakładzie metalizacji próżniowej STANIAX w Józefowie pod Warszawą oraz szybki serwis dla warsztatów ze stolicy i Mazowsza.',
    directAnswerQuestion: 'Gdzie w Warszawie i okolicach oddać odbłyśniki do bezpośredniej metalizacji PVD?',
    directAnswer:
      'Zakład produkcyjny STANIAX działa w Józefowie pod Warszawą przy ul. kard. Stefana Wyszyńskiego 116A (ok. 20 minut z centrum Warszawy Wałem Miedzeszyńskim lub Południową Obwodnicą S2). Przyjmujemy wyjęte odbłyśniki i klosze osobiście od poniedziałku do piątku w godz. 07:00-17:00 oraz kurierem bez pośredników.',
    plantCardTitle: 'Zakład Produkcyjny STANIAX - Punkt Przyjęć Warszawa/Józefów',
    plantAddress: 'ul. kard. Stefana Wyszyńskiego 116A, 05-420 Józefów',
    plantHours: 'Poniedziałek - Piątek: 07:00 - 17:00',
    plantDirections: 'Dojazd: Trasa S2 (węzeł Wał Miedzeszyński / Lubelska S17) lub DW801, 4 km od południowej granicy Warszawy (Wawer).',
    plantRegNote:
      'Uwaga logistyczna: Biuro rejestrowe spółki znajduje się przy ul. Grzybowskiej 5A w Warszawie (wyłącznie korespondencja formalna) - wszystkie lampy, odbłyśniki i serie produkcyjne przyjmujemy i odsyłamy w zakładzie w Józefowie.',
    phone: '+48 882 488 844',
    email: 'metalizacja@staniax.pl',
    serviceRadiusTable: [
      {
        zone: 'Warszawa Wawer / Otwock / Józefów / Karczew',
        distanceTime: '5-15 minut dojazdu do zakładu',
        dropoffMode: 'Dowóz osobisty w godz. 07:00-17:00 · odbiór z pierwszej partii',
      },
      {
        zone: 'Warszawa Centrum / Mokotów / Ursynów / Wilanów (S2)',
        distanceTime: '18-25 minut Południową Obwodnicą S2 i Wałem Miedzeszyńskim',
        dropoffMode: 'Osobiste dostarczenie wyjętych odbłyśników lub kurier lokalny',
      },
      {
        zone: 'Piaseczno / Konstancin-Jeziorna / Praga / Targówek / Marki',
        distanceTime: '20-35 minut S2 lub Trasą Toruńską S8/S17',
        dropoffMode: 'Osobisty odbiór B2B lub paczkomat/kurier na ul. Wyszyńskiego 116A',
      },
      {
        zone: 'Cała Polska & Floty (Radom, Lublin, Łódź, Kraków, Poznań)',
        distanceTime: 'Dostawa kurierem 24h w obie strony',
        dropoffMode: 'Bezpośredni cykl PVD bez marży warsztatów-pośredników',
      },
    ],
    sections: [
      {
        heading: 'Dlaczego warszawskie serwisy i kierowcy dostarczają odbłyśniki bezpośrednio do STANIAX?',
        paragraphs: [
          'Frazy takie jak metalizacja próżniowa Warszawa, regeneracja lamp Warszawa czy regeneracja reflektorów Otwock prowadzą bezpośrednio do naszej hali pod Warszawą, ponieważ większość studiów detailingu w stolicy nie posiada własnych komór próżniowych - po zdemontowaniu reflektora wysyła same odbłyśniki do wyspecjalizowanej metalizerni przemysłowej i dolicza własną marżę pośrednika.',
          'Dostarczając wyjęte odbłyśniki (soczewki H7, Bi-Xenon, czasze motocyklowe lub lampy klasyków) bezpośrednio pod adres naszego zakładu w Józefowie przy ul. Wyszyńskiego 116A, omijasz pośredników i masz bezpośredni kontakt z technologami obsługującymi linie PVD od 1993 roku.',
        ],
        bullets: [
          'Oszczędność czasu - przywóz osobisty rano 07:00-17:00 przyspiesza kwalifikację w komorze PVD',
          'Wygodny dojazd bez korków centrum dzięki zjazdowi z obwodnicy S2 (Wał Miedzeszyński)',
          'Możliwość obejrzenia na miejscu próbników powłok PVD, lakierów UV oraz efektów chromu i złota',
        ],
      },
      {
        heading: 'Współpraca B2B z warsztatami z Warszawy, Mazowsza i powiatu otwockiego',
        paragraphs: [
          'Dla serwisów samochodowych, zakładów blacharsko-lakierniczych i specjalistów od retrofitów oświetlenia z aglomeracji warszawskiej prowadzimy obsługę cykliczną partii tygodniowych. Zamiast przetrzymywać klienta po 10 dni roboczych, odbłyśniki wracają z Józefowa standardowo w 5-7 dni roboczych (w trybie ekspresowym dla stałych serii 2-3 dni) z fabrycznym lustrem PVD i trwałością do 5 lat.',
        ],
      },
    ],
    faq: [
      {
        q: 'Czy w Józefowie demontujecie reflektory bezpośrednio z samochodu na parkingu?',
        a: 'Jako przemysłowa metalizernia przyjmujemy wymontowane odbłyśniki i elementy lamp dostarczone osobiście lub kurierem. Wyjęcie lampy z pojazdu oraz rozklejenie obudowy wykonuje wyspecjalizowany warsztat samochodowy.',
      },
      {
        q: 'Gdzie dokładnie zawieźć części - na ul. Grzybowską w Warszawie czy do Józefowa?',
        a: 'Wyłącznie do zakładu produkcyjnego w Józefowie przy ul. kard. Stefana Wyszyńskiego 116A (05-420). Adres przy ul. Grzybowskiej 5A to wyłącznie siedziba rejestrowa spółki.',
      },
      {
        q: 'Czy zakład działa w soboty albo po godzinie 17:00?',
        a: 'Standardowe przyjęcia i wydania trwają od poniedziałku do piątku w godz. 07:00-17:00. W pilnych sprawach flota lub warsztat może uzgodnić odbiór telefonicznie pod +48 882 488 844.',
      },
      {
        q: 'Ile trwa napylenie odbłyśnika przy osobistym przywiezieniu z Warszawy?',
        a: 'Standardowy cykl przygotowania podłoża, podkładu HT i metalizacji próżniowej (zarówno pojedyncza regeneracja lampy samochodowej, jak i komplet obu stron) zajmuje 5-7 dni roboczych.',
      },
    ],
    relatedLinks: [
      { label: 'Cennik regeneracji reflektorów', path: '/cennik-regeneracji-reflektorow' },
      { label: 'Usługa: Regeneracja odbłyśników', path: '/regeneracja-reflektorow' },
      { label: 'Porównanie: Regeneracja vs zamiennik', path: '/porownanie/regeneracja-odblysnikow-vs-nowy-zamiennik' },
      { label: 'Galeria realizacji reflektorowych', path: '/gallery' },
    ],
    breadLabel: 'Warszawa & Józefów',
  },
  en: {
    metaTitle: 'Headlight Restoration Warsaw & Józefów | STANIAX',
    metaDesc:
      'Direct vacuum PVD headlight reflector restoration near Warsaw in Józefów (20 min via S2). Drop-off Mon-Fri 07:00-17:00 at ul. Wyszyńskiego 116A + courier.',
    badge: 'Warsaw Metro Plant Drop-Off',
    h1: 'Headlight & Reflector Restoration - Warsaw & Józefów Plant',
    subtitle:
      'Direct workshop drop-off and B2B turnaround at our vacuum metallization plant 20 minutes southeast of central Warsaw.',
    directAnswerQuestion: 'Where can Warsaw drivers and repair shops deliver reflector bowls directly for PVD?',
    directAnswer:
      'Deliver dismantled projector bowls and housings directly to STANIAX production plant in Józefów (ul. kard. Stefana Wyszyńskiego 116A, 05-420 Józefów), just 20 minutes from central Warsaw via S2 Southern Bypass and Wał Miedzeszyński. Drop-offs run Mon-Fri 07:00-17:00, eliminating middleman markups.',
    plantCardTitle: 'STANIAX Production Plant - Warsaw / Józefów',
    plantAddress: 'ul. kard. Stefana Wyszyńskiego 116A, 05-420 Józefów',
    plantHours: 'Monday - Friday: 07:00 - 17:00 CET',
    plantDirections: 'Access: 20 min from Warsaw center via S2 Bypass / Wał Miedzeszyński (DW801), 4 km south of Wawer.',
    plantRegNote:
      'Logistics note: Registered office (ul. Grzybowska 5A, Warsaw) handles legal correspondence only - always deliver and ship parts directly to our Józefów plant.',
    phone: '+48 882 488 844',
    email: 'metalizacja@staniax.pl',
    serviceRadiusTable: [
      { zone: 'Józefów / Otwock / Warsaw Wawer', distanceTime: '5-15 min drive', dropoffMode: 'Direct counter drop-off Mon-Fri 07:00-17:00' },
      { zone: 'Warsaw Center / Mokotów / Ursynów / Wilanów', distanceTime: '18-25 min via S2', dropoffMode: 'Personal delivery or same-day metro courier' },
      { zone: 'Piaseczno / Praga / Marki / Warsaw West', distanceTime: '20-35 min via S2/S8', dropoffMode: 'Direct drop-off or tracked domestic courier' },
      { zone: 'Nationwide Poland & European Union', distanceTime: '24-72 h parcel transit', dropoffMode: 'Insured return courier from plant floor' },
    ],
    sections: [
      {
        heading: 'Direct Plant Access Without Detailing Intermediary Markups',
        paragraphs: [
          'Most city detailing bays send dismounted reflector bowls out to industrial vacuum plants while marking up turnaround time and retail cost. Bringing bare projectors directly to Józefów connects drivers and Mazovia workshops straight to the source running industrial chambers since 1993.',
        ],
        bullets: [
          'Direct technical assessment of plastic cup heat distortion at intake',
          'Reliable 5-7 business day PVD cycle directly in our industrial high-vacuum chambers',
          'Sample boards on display covering chrome, gold, and UV lens hard coats',
        ],
      },
      {
        heading: 'Fleet & Collision-Shop Logistics for Warsaw Businesses',
        paragraphs: [
          'Regional body shops, leasing fleets, and classic car restorers schedule recurring Tuesday/Thursday drop-offs in Józefów, cutting customer vehicle bay downtime by half.',
          'Every incoming reflector bowl and headlamp housing is logged at reception with thermal substrate verification, ensuring transparent B2B turnaround and 3-5 year PVD coating durability backed by quality inspection.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do you unbolt bumpers on-site at the Józefów facility?',
        a: 'Our plant specializes in industrial coating and vacuum deposition of removed lamps and loose bowls; please have bumpers/lamps removed at your mechanic prior to arrival.',
      },
      {
        q: 'Which address receives deliveries in Warsaw area?',
        a: 'Always use the plant address: ul. kard. Stefana Wyszyńskiego 116A, 05-420 Józefów - not our downtown Grzybowska billing office.',
      },
      {
        q: 'What are Warsaw/Józefów drop-off hours?',
        a: 'Plant reception operates Monday through Friday from 07:00 to 17:00; call +48 882 488 844 for urgent commercial fleet handoffs.',
      },
      {
        q: 'How long is standard PVD completion from intake?',
        a: 'Typical turnaround for projector bowls is 5-7 working days.',
      },
    ],
    relatedLinks: [
      { label: 'Pricing: Headlight Restoration Rates', path: '/en/headlight-restoration-pricing' },
      { label: 'Service: Reflector Restoration', path: '/en/headlight-reflector-restoration' },
      { label: 'Compare: OEM vs Aftermarket', path: '/en/compare/reflector-restoration-vs-aftermarket-headlight' },
      { label: 'Gallery: 115+ Completed Projects', path: '/en/gallery' },
    ],
    breadLabel: 'Warsaw & Józefów Hub',
  },
  de: {
    metaTitle: 'Scheinwerfer Aufbereitung Warschau & Józefów | STANIAX',
    metaDesc:
      'Direktanlieferung im PVD-Werk STANIAX nahe Warschau in Józefów (20 Min über S2): Mo-Fr 07:00-17:00 Uhr, ul. Wyszyńskiego 116A & europaweiter Versand.',
    badge: 'Werkstandort Raum Warschau',
    h1: 'Scheinwerfer-Aufbereitung & PVD-Werk - Warschau / Józefów',
    subtitle:
      'Persönliche Annahme für Betriebe aus Warschau/Masowien sowie zentraler Logistikeingang für DHL/DPD-Pakete aus Deutschland und Österreich.',
    directAnswerQuestion: 'Wo befindet sich das STANIAX-Vakuumwerk für persönliche Abgabe und Paketversand?',
    directAnswer:
      'Das Produktionswerk von STANIAX liegt verkehrsgünstig in Józefów bei Warschau (ul. kard. Stefana Wyszyńskiego 116A, 05-420 Józefów), ca. 20 Minuten vom Warschauer Zentrum über den Südring S2. Warenannahme ist montags bis freitags von 07:00 bis 17:00 Uhr direkt ab Werk ohne Zwischenhändler.',
    plantCardTitle: 'Produktionswerk STANIAX - Warschau / Józefów',
    plantAddress: 'ul. kard. Stefana Wyszyńskiego 116A, 05-420 Józefów, Polen',
    plantHours: 'Montag - Freitag: 07:00 - 17:00 Uhr',
    plantDirections: 'Anfahrt: Über Warschauer Südring S2 (Ausfahrt Wał Miedzeszyński / S17), 4 km südlich von Warschau-Wawer.',
    plantRegNote:
      'Logistikhinweis: Der Firmensitz in Warschau (ul. Grzybowska 5A) dient nur als Rechtsadresse - alle Bauteile und Reflektoren bitte direkt ans Werk Józefów senden.',
    phone: '+48 882 488 844',
    email: 'metalizacja@staniax.pl',
    serviceRadiusTable: [
      { zone: 'Józefów / Otwock / Warschau-Wawer', distanceTime: '5-15 Min. Fahrzeit', dropoffMode: 'Direktabgabe Mo-Fr 07:00-17:00 Uhr' },
      { zone: 'Warschau Zentrum / Mokotów / Ursynów (S2)', distanceTime: '18-25 Min. über S2', dropoffMode: 'Persönliche Anlieferung oder Stadtkurier' },
      { zone: 'Ganz Polen (Krakau, Breslau, Posen, Danzig)', distanceTime: '24 Std. Kurierlaufzeit', dropoffMode: 'Direkter Rückversand ab Vakuumwerk' },
      { zone: 'Deutschland, Österreich & DACH-Region', distanceTime: '48-72 Std. DHL/DPD', dropoffMode: 'Versicherter Hin- und Rückversand für Werkstätten & Privat' },
    ],
    sections: [
      {
        heading: 'Direktzugang zum Vakuumbeschichter seit 1993',
        paragraphs: [
          'Viele Kfz-Aufbereiter besitzen keine eigenen Großvakuumanlagen und versenden ausgebaute Teile weiter an Industriebetriebe. Durch Direkteinsendung nach Józefów sparen Werkstätten aus Warschau ebenso wie deutsche Betriebe Vermittlungsaufschläge und erhalten geprüfte >92 % Lichtreflexion in 5-7 Werktagen.',
        ],
        bullets: [
          'Unmittelbare Prüfung auf Verzug oder Brandschäden bei Wareneingang',
          'Spezialverpackung in antistatischen Schaumhüllen für unbeschädigten Rückweg',
          'Möglichkeit von Sammelpaletten und Rahmenverträgen für deutsche Händler',
        ],
      },
      {
        heading: 'B2B-Logistik für DACH-Partnerbetriebe',
        paragraphs: [
          'Oldtimer-Restauratoren, Karosseriebetriebe und Lkw-Werkstätten aus Deutschland nutzen unsere zentrale EU-Anbindung an S2/A2 für planbare wöchentliche Serienrückläufe.',
          'Gegenüber kostspieligen Neuanschaffungen beim Vertragshändler senkt die direkte Werkskooperation in Józefów die Instandsetzungskosten pro Fahrzeugachse um über 60 Prozent bei identischer HU/TÜV-Lichtverteilung. Auf Wunsch koordinieren wir feste Abholtage mit Ihren Werkstattleitern sowie innergemeinschaftliche Sammelrechnungen für deutsche, österreichische und schweizerische Flottenpartner.',
          'Jede eingehende Sendung erhält im Wareneingang eine eindeutige Chargennummer, mit der sämtliche Prozessschritte vom chemischen Entschichten über die Hochtemperatur-Grundierung bis zur 99,99-%-Aluminiumbedampfung und UV-Schutzschicht lückenlos dokumentiert werden. So lassen sich selbst Mischsendungen aus H7-Parabolreflektoren, Bi-Xenon-Linsenhaltern und Oldtimer-Stahlschalen fehlerfrei zuordnen und termingerecht an Partner in ganz Europa zurücksenden.',
        ],
      },
    ],
    faq: [
      {
        q: 'Wird vor Ort in Józefów direkt am Fahrzeug demontiert?',
        a: 'Nein, als Industrielackiererei und PVD-Werk bearbeiten wir bereits ausgebaute Reflektoren und Scheinwerferbauteile aus Abgabe oder Paketversand.',
      },
      {
        q: 'An welche der beiden STANIAX-Adressen muss mein Paket?',
        a: 'Ausschließlich an das Werk: ul. kard. Stefana Wyszyńskiego 116A, 05-420 Józefów - nicht an die Verwaltungsadresse in Warschau.',
      },
      {
        q: 'Wie sind die Öffnungszeiten für Selbstanlieferer?',
        a: 'Montag bis Freitag durchgehend von 07:00 bis 17:00 Uhr direkt an der Warenannahme unseres Produktionswerks in Józefów.',
      },
      {
        q: 'Wie lange bleibt ein Reflektor im Werk?',
        a: 'Regelbearbeitungszeit im Werk beträgt 5-7 Werktage ab Eingang.',
      },
    ],
    relatedLinks: [
      { label: 'Preise: Reflektor-Bedampfung', path: '/de/scheinwerfer-aufbereitung-preise' },
      { label: 'Leistung: Reflektor neu bedampfen', path: '/de/scheinwerfer-reflektor-aufbereitung' },
      { label: 'Vergleich: Reflektor vs. Nachbau', path: '/de/vergleich/reflektor-aufbereitung-vs-nachbau' },
      { label: 'Projektgalerie ansehen', path: '/de/gallery' },
    ],
    breadLabel: 'Standort Warschau & Józefów',
  },
}
