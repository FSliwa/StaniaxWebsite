import type { Lang } from '@/lib/translations'
import type { EngineeringSection, RelatedLinkItem } from './comparisons'
import {
  SUBSTRATES_WAVE2,
  WAVE2_SUBSTRATE_SLUGS,
  type Wave2SubstrateId,
} from './substrates-wave2'

export type SubstrateId = 'abs' | 'pc' | 'pp' | 'pa' | 'glass' | Wave2SubstrateId

export const SUBSTRATE_ORDER: SubstrateId[] = [
  'abs',
  'pc',
  'pp',
  'pa',
  'glass',
  'xenon-led-lenses',
  'cosmetic-packaging',
  '3d-prints',
  'emi-esd',
]

export const SUBSTRATE_SLUGS: Record<SubstrateId, Record<Lang, string>> = {
  abs: {
    pl: '/rozwiazania/powlekanie-tworzywa-abs',
    en: '/en/solutions/abs-plastic-coating-pvd',
    de: '/de/loesungen/abs-kunststoff-beschichtung',
  },
  pc: {
    pl: '/rozwiazania/metalizacja-poliweglanu-pc',
    en: '/en/solutions/polycarbonate-pc-metallization',
    de: '/de/loesungen/polycarbonat-pc-metallisierung',
  },
  pp: {
    pl: '/rozwiazania/lakierowanie-polipropylenu-pp',
    en: '/en/solutions/polypropylene-pp-coating',
    de: '/de/loesungen/polypropylen-pp-lackierung',
  },
  pa: {
    pl: '/rozwiazania/powlekanie-poliamidu-pa',
    en: '/en/solutions/polyamide-nylon-coating',
    de: '/de/loesungen/polyamid-pa-beschichtung',
  },
  glass: {
    pl: '/rozwiazania/lakierowanie-i-metalizacja-szkla',
    en: '/en/solutions/glass-bottle-coating-pvd',
    de: '/de/loesungen/glasflakon-lackierung-pvd',
  },
  ...WAVE2_SUBSTRATE_SLUGS,
}

export interface SubstrateSpecRow {
  parameter: string
  value: string
}

export interface SubstrateLocalePage {
  metaTitle: string
  metaDesc: string
  badge: string
  polymerCode: string
  h1: string
  subtitle: string
  directAnswerQuestion: string
  directAnswer: string
  specs: SubstrateSpecRow[]
  sections: EngineeringSection[]
  applications: string[]
  faq: Array<{ q: string; a: string }>
  relatedLinks: RelatedLinkItem[]
  breadLabel: string
}

export const SUBSTRATES: Record<SubstrateId, Record<Lang, SubstrateLocalePage>> = {
  abs: {
    pl: {
      metaTitle: 'Metalizacja i lakierowanie tworzywa ABS PVD | STANIAX',
      metaDesc:
        'Przemysłowe powlekanie ABS i PC/ABS w STANIAX: metalizacja próżniowa chrom/złoto, lakierowanie UV/2K PU oraz adhezja ISO 2409 klasa 0 bez pękania zatrzasków.',
      badge: 'Matryca materiałów: ABS / PC+ABS',
      polymerCode: 'ABS / PC+ABS (ASTM D4673)',
      h1: 'Metalizacja próżniowa PVD i lakierowanie tworzywa ABS',
      subtitle:
        'Kompleksowa obróbka powierzchniowa dla elementów z ABS i blendów PC/ABS: wykończenia chrom, złoto, piano black i powłoki ochronne UV.',
      directAnswerQuestion: 'Jak uzyskuje się trwały efekt chromu lub lakieru klasy A na tworzywie ABS?',
      directAnswer:
        'Tworzywo ABS i mieszanki PC/ABS odgazowuje się i odtłuszcza antystatycznie, po czym nakłada podkład poziomujący UV eliminujący ślady formy wtryskowej, warstwę Al 99,99% (50–150 nm) w próżni 10⁻⁴ mbar oraz topcoat UV/2K PU (15–25 µm). Powłoka osiąga klasę przyczepności 0 wg ISO 2409 bez kruchości typowej dla galwanizacji.',
      specs: [
        { parameter: 'Obsługiwane gatunki', value: 'ABS standard, ABS wysokoudarowy, blendy PC/ABS, ASA' },
        { parameter: 'Temperatura odkształcenia HDT', value: '82–108 °C — suszenie lakierów w oknie poniżej 75 °C' },
        { parameter: 'Energia powierzchniowa przed primerem', value: '38–42 mN/m (jonizacja i mycie antystatyczne)' },
        { parameter: 'Dostępne stosy powłok', value: 'PVD chrom/złoto + UV, Piano Black 2K PU (>92 GU), Soft-Touch' },
        { parameter: 'Odporność i norma przyczepności', value: 'ISO 2409 Gt 0 · ΔE < 0,8 · test potu i detergentów' },
        { parameter: 'Średnica komór i czas serii', value: 'Komory do Ø 1200 mm · serie B2B w 3–7 dni roboczych' },
      ],
      sections: [
        {
          heading: 'Kontrola naprężeń własnych w wypraskach wtryskowych ABS',
          paragraphs: [
            'Kopolimer akrylonitrylo-butadieno-styrenowy jest najchętniej stosowanym polimerem technicznym w obudowach AGD, listwach kokpitów, opakowaniach beauty oraz maskownicach. Głównym błędem lakierni nieznających specyfiki ABS jest używanie zbyt agresywnych rozpuszczalników ketonowych na detalu wyjętym wprost z zimnej formy wtryskowej, co prowadzi do mikropęknięć stresowych (solvent crazing).',
            'W zakładzie STANIAX proces rozpoczyna się od doboru łagodnej chemii myjącej i kompensacji temperaturowej w tunelach wstępnych poniżej temperatury mięknienia Vicata. Nakładany natryskowo primer wyrównujący tworzy mikroskopijnie gładką bazę o niskiej chropowatości Ra < 0,05 µm, dzięki czemu naparowane później aluminium daje głębokie lustro optyczne.',
          ],
          bullets: [
            'Maskowanie zatrzasków i powierzchni zgrzewanych ultradźwiękowo na precyzyjnych przyrządach',
            'Ochrona przed zażółceniem pod oświetleniem sklepowym LED i słonecznym UV',
            'Alternatywa dla toksycznej galwanizacji na cienkościennych detalach bez zatykania gwintów',
          ],
        },
        {
          heading: 'Lakierowanie natryskowe Piano Black, Soft-Touch i barwienia PVD',
          paragraphs: [
            'Poza klasycznym efektem lustrzanego chromu i złota na nakrętkach kosmetycznych oraz elementach dekoracyjnych, detale z ABS lakierujemy w systemach 2K poliuretanowych o wysokim połysku Piano Black (>92 GU) lub głębokim macie poniżej 5 GU.',
            'Każda seria wyprasek przechodzi inspekcję na obecność pozostałości środków antyadhezyjnych (silikonowych) z wtryskowni, co gwarantuje powierzchnię wolną od tzw. rybich oczek i kraterów.',
          ],
        },
      ],
      applications: [
        'Nasadki perfum, nakrętki kremów, dozowniki i pierścienie beauty',
        'Kratki nawiewów, ramki wyświetlaczy i listwy ozdobne kokpitu automotive',
        'Obudowy elektroniki, ekspresów do kawy, słuchawek i paneli AGD',
        'Znaczki, emblematy i klamki wewnętrzne produkowane bez użycia Cr(VI)',
      ],
      faq: [
        {
          q: 'Czy wypraski ABS ze wtryskowni wymagają specjalnego przygotowania przed wysyłką do STANIAX?',
          a: 'Najważniejsze to unikać silikonowych rozdzielaczy w formie wtryskowej i pakować detale w antystatyczne przekładki bez zarysowań gładzi lustrzanej.',
        },
        {
          q: 'Jakie kolory oprócz srebrnego chromu uzyskujecie na ABS?',
          a: 'Wykonujemy m.in. złoto 24k, szampańskie złoto, rose gold, miedź, grafit/ciemny chrom, czerń lustrzaną oraz dowolne barwy RAL i Pantone w lakierze 2K.',
        },
        {
          q: 'Czy powłoka PVD na ABS nadaje się do elementów poddawanych testom potu i kremów?',
          a: 'Tak, nasze sieciowane lakiery UV przechodzą standardowe testy branży automotive oraz kosmetycznej na pot dłoni, tłuszcze, kremy i detergenty.',
        },
        {
          q: 'Czy pokrywacie również blendy PC/ABS?',
          a: 'Tak, blendy PC/ABS łączące odporność cieplną poliwęglanu ze sztywnością ABS doskonale przyjmują zarówno nasze powłoki PVD, jak i natryskowe lakiery 2K PU.',
        },
      ],
      relatedLinks: [
        { label: 'Porównanie: PVD vs galwanizacja ABS', path: '/porownanie/metalizacja-prozniowa-vs-galwanizacja' },
        { label: 'Usługa: Chromowanie plastiku', path: '/metalizacja-tworzyw-sztucznych' },
        { label: 'Usługa: Lakierowanie tworzyw sztucznych', path: '/lakierowanie-tworzyw-sztucznych' },
        { label: 'Galeria projektów ABS i beauty', path: '/gallery' },
      ],
      breadLabel: 'Tworzywo ABS',
    },
    en: {
      metaTitle: 'ABS Plastic PVD Metallization & Coating | STANIAX',
      metaDesc:
        'Industrial ABS & PC/ABS surface finishing at STANIAX: mirror chrome/gold PVD, Piano Black UV/2K PU spray coats, ISO 2409 Class 0 adhesion, REACH compliant.',
      badge: 'Substrate Matrix: ABS / PC+ABS',
      polymerCode: 'ABS / PC+ABS (ASTM D4673)',
      h1: 'PVD Vacuum Metallization & Coating of ABS Plastics',
      subtitle:
        'Engineered primer, mirror aluminum deposition, and UV/2K PU topcoat stacks for molding precision and series B2B repeatability on ABS resins.',
      directAnswerQuestion: 'How do you achieve mirror chrome or Class-A paint finishes on molded ABS parts?',
      directAnswer:
        'Molded ABS and PC/ABS parts undergo antistatic ionization cleaning and low-stress thermal conditioning below 75 °C, followed by a UV leveling basecoat, 50–150 nm pure 99.99% aluminum vacuum deposition at 10⁻⁴ mbar, and a 15–25 µm UV or 2K polyurethane clearcoat achieving ISO 2409 Class 0 adhesion.',
      specs: [
        { parameter: 'Resin Grades Supported', value: 'General purpose & high-impact ABS, PC/ABS, ASA' },
        { parameter: 'Heat Deflection Window', value: 'HDT 82–108 °C — thermal cure strictly capped <75 °C' },
        { parameter: 'Leveling & Roughness Target', value: 'UV basecoat smooths mold tool marks down to Ra < 0.05 µm' },
        { parameter: 'Available Stacks', value: 'Mirror chrome/gold PVD, Piano Black 2K PU (>92 GU), matte <5 GU' },
        { parameter: 'QA Standards', value: 'ISO 2409 Class 0 adhesion · ΔE < 0.8 color consistency' },
        { parameter: 'Capacity & Turnaround', value: 'Ø 1200 mm planetary vacuum chambers · 3–7 days B2B turnaround' },
      ],
      sections: [
        {
          heading: 'Preventing Solvent Crazing & Internal Stress Cracking in ABS Moldings',
          paragraphs: [
            'Acrylonitrile-butadiene-styrene dominates automotive cabin trim, consumer appliance bezels, and fragrance caps. Aggressive ketonic solvents or excessive flash-off heat on cold-molded ABS quickly induce stress cracking and clip breakage.',
            'STANIAX pairs gentle ionized surface cleaning with UV-leveling basecoats cured without overheating polymer walls. Selective masking fixtures keep ultrasonic welding bosses and snap hooks 100% uncoated to protect assembly geometry.',
          ],
          bullets: [
            'No Cr(VI) bath acids that swell edges or plug fine cosmetic threads',
            'Selective shielding for ultrasonic welds and structural fasteners',
            'Validated resistance against hand sweat, hand cream, and alcohol',
          ],
        },
        {
          heading: 'Custom Tints, Satin Metals, and High-Gloss Spray Systems on PC/ABS',
          paragraphs: [
            'Beyond silver mirror chrome, dyeing our protective UV topcoats produces gold, champagne, copper, bronze, or deep smoked black directly over aluminum vapor film at tight batch tolerances (ΔE < 0.8).',
            'Non-metallized zones and tactile bezels can be finished seamlessly in Piano Black (>92 GU) or soft-touch velvet 2K polyurethane spray coatings inside filtered clean booths.',
          ],
        },
      ],
      applications: [
        'Cosmetic closures, fragrance collars, lotion pumps, and luxury display frames',
        'Automotive cabin air vents, switchgear surrounds, and gauge bezels',
        'Coffee machine panels, wearable audio shells, and smart appliance housings',
        'Brand badges and decorative emblems compliant with EU REACH standards',
      ],
      faq: [
        {
          q: 'Should ABS parts stay free of silicone mold release before shipping to STANIAX?',
          a: 'Yes — please mold parts dry or using paintable release agents and pack with antistatic interleaves to prevent cratering and scratches.',
        },
        {
          q: 'Which custom metallic shades are possible on ABS plastics?',
          a: 'Bright mirror chrome, 24k gold, champagne gold, copper, rose gold, smoked graphite, plus opaque 2K RAL/Pantone finishes.',
        },
        {
          q: 'Can small-batch prototype ABS runs be coated before high-volume tooling?',
          a: 'Yes, we metallize initial trial cavities and SLA prototypes alongside serial contract batches.',
        },
        {
          q: 'How does PVD on ABS compare to hexavalent/trivalent electroplating?',
          a: 'PVD eliminates acidic waste streams, weighs slightly less, works across mixed non-plating ABS grades, and cuts short/mid-run fixture cost significantly.',
        },
      ],
      relatedLinks: [
        { label: 'Compare: PVD vs Electroplating', path: '/en/compare/vacuum-metallization-vs-electroplating' },
        { label: 'Service: Plastic Chrome Plating', path: '/en/plastic-chrome-plating' },
        { label: 'Service: Plastic Parts Painting', path: '/en/plastic-parts-painting' },
        { label: 'Gallery: 115+ PVD & Spray Projects', path: '/en/gallery' },
      ],
      breadLabel: 'ABS Plastics',
    },
    de: {
      metaTitle: 'ABS Kunststoff PVD-Metallisierung & Lackierung | STANIAX',
      metaDesc:
        'Industrielle ABS- und PC/ABS-Beschichtung bei STANIAX: Spiegelchrom/Gold PVD, Piano-Black UV/2K-PUR-Lackierung und ISO 2409 Gitterschnitt Gt 0 ohne Rissbildung.',
      badge: 'Materialmatrix: ABS / PC+ABS',
      polymerCode: 'ABS / PC+ABS (ASTM D4673)',
      h1: 'PVD-Vakuummetallisierung und Lackierung von ABS-Kunststoffen',
      subtitle:
        'Spannungsarme Vorbehandlung, PVD-Reinaluminium und UV-/2K-PUR-Systeme für Verkleidungsteile, Kosmetikverschlüsse und Geräteblenden.',
      directAnswerQuestion: 'Wie erzielt man auf ABS-Spritzgussteilen dauerhaften Chrom- oder Class-A-Lackglanz?',
      directAnswer:
        'ABS und PC/ABS werden antistatisch ionisiert, bei unter 75 °C mit einem nivellierenden UV-Grundlack versiegelt, im Vakuum (10⁻⁴ mbar) mit 50–150 nm Reinaluminium bedampft und mit 15–25 µm UV-/2K-PUR-Decklack geschützt. Ergebnis: Gitterschnitt Gt 0 nach ISO 2409 ohne Galvanik-Versprödung.',
      specs: [
        { parameter: 'Werkstoffvarianten', value: 'Standard-ABS, schlagzähes ABS, PC/ABS, ASA' },
        { parameter: 'Formbeständigkeit HDT', value: '82–108 °C — Trocknung konsequent unter 75 °C gesteuert' },
        { parameter: 'Oberflächennivellierung', value: 'UV-Primer glättet Werkzeugspuren bis Ra < 0,05 µm' },
        { parameter: 'Verfügbare Schichtaufbauten', value: 'Chrom/Gold PVD + UV, Piano Black 2K PUR (>92 GU), Matt <5 GU' },
        { parameter: 'Prüfnormen', value: 'ISO 2409 Gt 0 · ΔE < 0,8 · Schweiß-, Alkohol- und Kosmetiktest' },
        { parameter: 'Kapazität & Lieferzeit', value: 'Kammern bis Ø 1200 mm · Serienfertigung in 3–7 Werktagen' },
      ],
      sections: [
        {
          heading: 'Spannungsrissfreie Beschichtung von ABS-Spritzgussteilen',
          paragraphs: [
            'ABS und PC/ABS dominieren Innenraumblenden, Bedienfelder weißer Ware und edle Parfümverschlüsse. Aggressive Lösemittel führen auf spritzfrischen ABS-Teilen jedoch leicht zu Spannungsrissen und spröden Schnapphaken.',
            'Bei STANIAX entfallen Säurebäder vollständig: Sanfte Reinigung, Ionisierung, spannungsfreie UV-Grundlackierung und Vakuumbedampfung bewahren die mechanische Elastizität aller Rasthaken.',
          ],
          bullets: [
            'Gezielte Abdeckung von Ultraschall-Schweißkanten durch Silikonmasken',
            'Chrom-, Gold-, Kupfer- oder Rauchglastöne frei von Chrom(VI)',
            'Perfekte Maßhaltigkeit an feinen Innengewinden',
          ],
        },
        {
          heading: 'Kombination von PVD-Metalloptik und 2K-PUR-Sichtlackierung',
          paragraphs: [
            'Neben PVD-Spiegelschichten beschichten wir ABS-Komponenten in modernen Spritzkabinen mit Hochglanz-Piano-Black (>92 GU), Soft-Touch-Haptiklacken oder RAL/NCS-Serienfarbtönen mit minimaler Ausschussquote.',
            'Vor jedem Produktionsstart prüfen wir angelieferte ABS-Chargen auf Rückstände silikonhaltiger Formentrennmittel, um Benetzungsstörungen und Kraterbildung über gesamte B2B-Lieferlose sicher auszuschließen.',
          ],
        },
        {
          heading: 'Qualitätskontrolle & Werkzeugschutz für Serienzulieferer in Deutschland',
          paragraphs: [
            'Deutsche und europäische Automobilzulieferer sowie Kosmetikabfüller verlangen lückenlose Chargenrückverfolgbarkeit: Bei STANIAX wird jedes ABS-Planetenlos nach Gitterschnitt DIN EN ISO 2409, Spektralphotometer-Farbmessung und Klimawechselprüfung dokumentiert freigegeben.',
            'Maßgeschneiderte Aufnahmedorne und hitzebeständige Silikonstopfen schützen präzise Passbohrungen oder Schweißrippen während beider Beschichtungsstufen.',
            'Darüber hinaus testen wir Referenzmuster jeder Spritzgusscharge auf Temperaturwechsel zwischen -30 °C und +85 °C sowie auf Beständigkeit gegen Handschweiß, Kosmetikalkohole und Innenraumreiniger. So erhalten Tier-1- und Tier-2-Abnehmer langlebige Chrom-, Titan-, Gold- und Klavierlack-Oberflächen ohne Verzug an dünnwandigen Schnapphaken oder feinen Rastgeometrien im Serienbetrieb. Technische Zeichnungen im STEP- oder IGES-Format werten unsere Ingenieure binnen 24 Stunden für eine präzise Gestell- und Maskierungsauslegung aus.',
          ],
        },
      ],
      applications: [
        'Parfümkappen, Cremetiegel-Kappen, Flakonringe und Spenderteile',
        'Lüftungsdüsen, Mittelkonsolenrahmen und Interieurleisten Automotive',
        'Bedienblenden für Kaffeevollautomaten, Audiogehäuse und Haushaltsgeräte',
        'Markenembleme und Sichtteile nach EU-REACH-Verordnung',
      ],
      faq: [
        {
          q: 'Worauf muss das Spritzgusswerk bei ABS-Teilen achten?',
          a: 'Teile sollten möglichst ohne silikonhaltige Entformungshilfen gefertigt und staubfrei sowie kratzgeschützt verpackt geliefert werden.',
        },
        {
          q: 'Welche Farbtöne sind bei ABS-Vakuummetallisierung möglich?',
          a: 'Spiegelchrom, 24k-Gold, Champagnergold, Roségold, Kupfer, Dunkelchrom/Graphit sowie kundenspezifische Lasurtöne im UV-Topcoat.',
        },
        {
          q: 'Ist die Beschichtung beständig gegen Handcreme und Reiniger?',
          a: 'Ja, UV-vernetzte Decklacke erfüllen gängige Automobil- und Kosmetiknormen gegen Handfett, Ethanol und Milchreste.',
        },
        {
          q: 'Können auch Muster vor dem Serienanlauf getestet werden?',
          a: 'Selbstverständlich — wir fertigen Kleinmuster zur Freigabe inklusive Haftungs- und Farbprotokoll.',
        },
      ],
      relatedLinks: [
        { label: 'Vergleich: PVD vs. Galvanik', path: '/de/vergleich/vakuummetallisierung-vs-galvanik' },
        { label: 'Leistung: Kunststoff verchromen', path: '/de/kunststoff-verchromen' },
        { label: 'Leistung: Kunststofflackierung', path: '/de/kunststofflackierung' },
        { label: 'Projektgalerie ansehen', path: '/de/gallery' },
      ],
      breadLabel: 'Kunststoff ABS',
    },
  },

  pc: {
    pl: {
      metaTitle: 'Metalizacja poliwęglanu PC i Ultem PVD | STANIAX',
      metaDesc:
        'Metalizacja PVD poliwęglanu PC, BMC i Ultem PEI w STANIAX: odbłyśniki do 220 °C, bez odgazowania w próżni, odbicie >92% oraz twarde lakiery ochronne UV.',
      badge: 'Matryca materiałów: PC / PEI Ultem / BMC',
      polymerCode: 'PC / PEI Ultem / BMC',
      h1: 'Metalizacja poliwęglanu PC, Ultem PEI i tworzyw termoodpornych',
      subtitle:
        'Wysokopróżniowe naparowanie aluminium na optyce reflektorowej, kloszach, soczewkach i komponentach pracujących do 220 °C.',
      directAnswerQuestion: 'Jak metalizuje się poliwęglan (PC) i tworzywa wysokotemperaturowe Ultem PEI bez zaciemnień w próżni?',
      directAnswer:
        'Poliwęglan PC i polieteroimid Ultem PEI chłoną wilgoć, co powoduje mgłę i pęcherze przy szybkim obniżaniu ciśnienia w komorze. W STANIAX stosujemy kontrolowane dosuszanie, primer termostabilny do 220 °C oraz wysokopróżniową metalizację Al 99,99% z pasywacją SiOx — uzyskując odbicie kierunkowe powyżej 92% bez efektu tęczowania.',
      specs: [
        { parameter: 'Obsługiwane polimery optyczne/HT', value: 'Poliwęglan PC, PC-HT, Ultem PEI, PSU, PPS, termoutwardzalne BMC' },
        { parameter: 'Maksymalna stabilność powłoki', value: 'Do 135 °C (PC-HT) oraz 200–220 °C na podłożach PEI / BMC / metal' },
        { parameter: 'Współczynnik odbicia optyki', value: '>92% w pełnym widmie światła widzialnego (Al 99,99% + SiOx)' },
        { parameter: 'Ochrona zewnętrzna dla kloszy PC', value: 'Twardy lakier UV hamujący żółknięcie i ścieranie poliwęglanu' },
        { parameter: 'Kontrola odgazowania', value: 'Wstępne kondycjonowanie i dedykowana bariera podkładowa' },
      ],
      sections: [
        {
          heading: 'Higroskopijność poliwęglanu a stabilność lustra PVD w optyce i oświetleniu',
          paragraphs: [
            'Poliwęglan (PC) oraz wysokotemperaturowy poliwęglan PC-HT i PEI są standardem w produkcji opraw oświetleniowych LED, ramek wokół diod Matrix, odbłyśników halogenowych i lotniczych elementów osłonowych. Naturalną cechą PC jest wiązanie wilgoci z otoczenia oraz wydzielanie mikrogazów w wysokiej próżni.',
            'Bez precyzyjnej procedury dosuszania i dopasowanego podkładu barierowego naparowywane aluminium staje się mętne („spalenie próżniowe” lub mleczna poświata wokół punktów wtrysku). Nasze receptury opracowywane od 1993 roku całkowicie eliminują tę wadę nawet na skomplikowanych kasetonach świetlnych.',
          ],
          bullets: [
            'Powłoki o wysokiej czystości bez kraterów w strefie wlewu i żeber usztywniających',
            'Ochrona przeciwodblaskowa lub lustrzana (>92% Al) zgodnie ze specyfikacją oprawy',
            'Przejście przez testy szoku termicznego od -40 °C do +150 °C na elementach automotive',
          ],
        },
        {
          heading: 'Regeneracja oraz zabezpieczanie kloszy poliwęglanowych warstwą UV',
          paragraphs: [
            'Poliwęglan nie posiada wrodzonej odporności na promieniowanie ultrafioletowe i łatwo ulega rysowaniu mechanicznemu. W STANIAX wykonujemy zarówno lustrzaną metalizację wewnętrznych masek i odbłyśników z PC-HT/BMC, jak i przemysłowe lakierowanie bezbarwne kloszy oraz wizjerów twardym lakierem sieciowanym UV.',
          ],
        },
      ],
      applications: [
        'Odbłyśniki i maskownice lamp samochodowych LED, Bi-Xenon, Matrix oraz H7',
        'Komponenty lotnicze z Ultem PEI — zgodnie ze studium wdrożenia aerospace STANIAX',
        'Odbłyśniki przemysłowych opraw oświetleniowych LED, halogenowych i stadionowych',
        'Wizjery, klosze i pokrywy poliwęglanowe chronione twardym lakierem UV',
      ],
      faq: [
        {
          q: 'Czy metalizujecie części z Ultem PEI oraz PEEK dla przemysłu lub lotnictwa?',
          a: 'Tak, wysokotemperaturowe żywice PEI i PC-HT pokrywamy czystym aluminium próżniowym z zachowaniem parametrów odgazowania oraz stabilności cieplnej.',
        },
        {
          q: 'Jak unikacie zjawiska rozpuszczenia poliwęglanu przez lakier bazowy?',
          a: 'Stosujemy bezagresywne rozcieńczalniki i systemy UV o minimalnej zawartości wolnych rozpuszczalników, dopasowane specjalnie do wrażliwości chemicznej PC.',
        },
        {
          q: 'Czy można metalizować częściowo — zostawiając przezroczyste okienko świetlne na PC?',
          a: 'Tak, wykonujemy maskowanie selektywne krawędzi i soczewek przed załadunkiem do komory PVD.',
        },
        {
          q: 'Dlaczego używacie powłoki SiOx zamiast lakieru na odbłyśnikach ze strefą gorącą?',
          a: 'Nanometryczna warstwa SiOx nie ogranicza współczynnika odbicia (>92%) i w przeciwieństwie do grubego lakieru organicznego nie pęka przy temperaturach do 220 °C.',
        },
      ],
      relatedLinks: [
        { label: 'Studium lotnicze: Metalizacja materiałów technicznych', path: '/news/partnerstwo-z-wiodacym-producentem-lotniczym' },
        { label: 'Usługa: Regeneracja odbłyśników', path: '/regeneracja-reflektorow' },
        { label: 'Usługa: Metalizacja próżniowa', path: '/metalizacja-prozniowa' },
        { label: 'Porównanie: Polerowanie kloszy vs PVD', path: '/porownanie/polerowanie-kloszy-vs-regeneracja-wnetrza-pvd' },
      ],
      breadLabel: 'Poliwęglan PC / Ultem',
    },
    en: {
      metaTitle: 'Polycarbonate PC & Ultem PVD Metallization | STANIAX',
      metaDesc:
        'Vacuum metallization of polycarbonate (PC), PC-HT, BMC, and Ultem PEI at STANIAX: >92% optical reflectance up to 220°C, outgassing control & UV hard-coats.',
      badge: 'Substrate Matrix: PC / PEI Ultem / BMC',
      polymerCode: 'PC / PC-HT / Ultem PEI',
      h1: 'Vacuum Metallization & UV Coating of Polycarbonate (PC) & PEI',
      subtitle:
        'Outgassing-controlled aluminum PVD for automotive lighting optics, aerospace cabins, LED luminaires, and UV-protected lenses.',
      directAnswerQuestion: 'How is polycarbonate (PC) and Ultem PEI metallized without vacuum hazing or solvent crazing?',
      directAnswer:
        'Polycarbonate and high-temp Ultem PEI absorb ambient moisture that causes cloudy aluminum bloom inside a vacuum chamber. STANIAX performs pre-conditioning degassing, applies non-aggressive UV or high-temp barrier primers (up to 220 °C on PEI/BMC), deposits 99.99% aluminum (>92% reflectance), and seals optics with SiOx.',
      specs: [
        { parameter: 'High-Spec Resins', value: 'Optical PC, High-Temp PC-HT, Ultem PEI, PSU, thermoset BMC' },
        { parameter: 'Thermal Service Rating', value: 'Up to 135 °C (PC-HT) and 200–220 °C on PEI/BMC reflectors' },
        { parameter: 'Specular Light Return', value: '>92% reflectance with Al 99.99% + thin SiOx barrier' },
        { parameter: 'Clear Polycarbonate Shield', value: 'Industrial abrasion- & UV-resistant hard clearcoat' },
        { parameter: 'Chamber Control', value: 'Pre-bake moisture conditioning + antistatic ionization' },
      ],
      sections: [
        {
          heading: 'Moisture Desorption & Solvent Compatibility on Optical PC & Aerospace PEI',
          paragraphs: [
            'Polycarbonate and polyetherimide (Ultem) remain sensitive both to stress-cracking solvents and dissolved atmospheric water vapor during pump-down to 10⁻⁴ mbar. Uncontrolled runs yield iridescent rainbow bloom around injection gates.',
            'Drawing on 30+ years of optics metallization, STANIAX validates moisture pre-drying schedules and solvent-safe barrier basecoats engineered specifically for PC-HT, Matrix LED light bezels, and Ultem aerospace covers.',
          ],
          bullets: [
            'Clean optical gates without silvery burn around ribs and bosses',
            'Selective masking shields transparent light guides or sensor windows',
            'Validated -40 °C to +150 °C automotive thermal shock stability',
          ],
        },
        {
          heading: 'SiOx Protective Passivation vs Decorative UV Topcoats',
          paragraphs: [
            'Internal projector optics require bare-metal reflectance (>92%) coupled with corrosion shielding from headlamp condensation — achieved cleanly via sub-micron SiOx sealing. Exposed polycarbonate housings and lenses receive thicker UV-crosslinked clearcoats blocking road abrasion and yellowing.',
            'Our tooling department fabricates custom silicone shields so complex PC-HT headlamp bezels and light-guide frames receive razor-sharp transitions between high-reflection PVD zones and low-gloss black anti-glare surfaces in a single integrated production flow.',
          ],
        },
      ],
      applications: [
        'Bi-Xenon, Matrix LED, and commercial lighting reflector bowls & bezels',
        'Aerospace interior assemblies and Ultem PEI shrouds',
        'Architectural LED street and stadium aluminum-plastic optical cups',
        'UV hard-coated transparent polycarbonate lenses & instrument shields',
      ],
      faq: [
        {
          q: 'Do you metallize Ultem PEI parts for aerospace or medical instrumentation?',
          a: 'Yes — see our aerospace partnership case detailing vacuum metallization of PEI structural skins for weight reduction and shielding.',
        },
        {
          q: 'Why can conventional primers melt or craze polycarbonate?',
          a: 'Standard high-aromatic thinners attack amorphous PC polymer chains under residual injection stress; we use strictly PC-safe barrier chemistry.',
        },
        {
          q: 'Can transparent light pipes on a PC bezel stay crystal clear?',
          a: 'Yes, precision masking covers light windows during spray priming and aluminum deposition.',
        },
        {
          q: 'Can you coat thermoset BMC headlight reflectors as well?',
          a: 'Yes, BMC (Bulk Molding Compound) reflectors tolerate temperatures above 200 °C and are routinely re-metallized inside our plant.',
        },
      ],
      relatedLinks: [
        { label: 'Case Study: Aerospace Material Metallization', path: '/en/news/how-does-metallization-affect-material-performance' },
        { label: 'Service: Reflector Restoration', path: '/en/headlight-reflector-restoration' },
        { label: 'Service: PVD Vacuum Metallization', path: '/en/vacuum-metallisation' },
        { label: 'Compare: Lens Polishing vs PVD', path: '/en/compare/lens-polishing-vs-internal-pvd-restoration' },
      ],
      breadLabel: 'Polycarbonate PC / PEI',
    },
    de: {
      metaTitle: 'Polycarbonat PC & Ultem PVD-Metallisierung | STANIAX',
      metaDesc:
        'Vakuummetallisierung von Polycarbonat (PC), PC-HT, BMC und Ultem PEI bei STANIAX: >92 % Lichtreflexion bis 220 °C, Entgasungskontrolle und UV-Hartlack.',
      badge: 'Materialmatrix: PC / PEI Ultem / BMC',
      polymerCode: 'PC / PC-HT / Ultem PEI',
      h1: 'Vakuummetallisierung von Polycarbonat (PC), Ultem PEI und BMC',
      subtitle:
        'Kontrollierte Entgasung und Reinaluminium-PVD für Fahrzeugscheinwerfer, LED-Optik, Luftfahrtkomponenten und UV-Hartlacke.',
      directAnswerQuestion: 'Wie werden Polycarbonat (PC) und Ultem PEI ohne Ausgasungsschleier vakuummetallisiert?',
      directAnswer:
        'Da PC und Ultem PEI Feuchtigkeit aufnehmen, entstehen im Vakuum schnell Regenbogen- oder Milchschleier. STANIAX vortrocknet gezielt, appliziert spannungsfreie Sperrprimer (bis 220 °C auf PEI/BMC), bedampft 99,99 % Reinaluminium (>92 % Reflexion) und versiegelt optisch neutral per SiOx-Passivierung.',
      specs: [
        { parameter: 'Verarbeitete Werkstoffe', value: 'Optisches PC, PC-HT, Ultem PEI, PSU, Duroplast BMC' },
        { parameter: 'Temperaturbeständigkeit', value: 'Bis 135 °C (PC-HT) bzw. 200–220 °C auf PEI/BMC' },
        { parameter: 'Reflexionsgrad', value: '>92 % gerichtet durch Al 99,99 % + SiOx-Schutz' },
        { parameter: 'Frontscheibenschutz PC', value: 'Abrieb- und UV-stabiler Industrieklarlack gegen Vergilbung' },
        { parameter: 'Prozesssicherheit', value: 'Vortrocknungs-Temperung + Ionisierung gegen Ausgasen' },
      ],
      sections: [
        {
          heading: 'Feuchtekontrolle und Rissfreiheit bei PC- und Ultem-Optikteilen',
          paragraphs: [
            'Polycarbonat reagiert im Spritzguss empfindlich auf scharfe Lösemittel und Restfeuchte beim Evakuieren auf 10⁻⁴ mbar. Unangepasste Lacke führen sofort zu Spannungsrissen rund um Anspritzpunkte.',
            'Mit über drei Jahrzehnten Erfahrung stimmt STANIAX Vorwärmzyklen und milde Sperrgrundierungen präzise auf PC-HT-Blenden, Scheinwerferrahmen sowie Luftfahrtbauteile aus PEI ab.',
          ],
          bullets: [
            'Schlierenfreie Spiegelqualität bis in tiefe Reflektor-Geometrien',
            'Teilmaskierung transparenter Lichtleiterbereiche möglich',
            'Temperaturwechseltest -40 °C bis +150 °C im Automotive-Standard',
          ],
        },
        {
          heading: 'SiOx-Schutzschicht vs. UV-Klarlack auf Frontscheiben',
          paragraphs: [
            'Während Reflektor-Innenflächen durch ultradünne SiOx-Versiegelung maximale Reflexion behalten, schützt ein dickerer UV-Klarlack exponierte Polycarbonatscheiben dauerhaft vor UV-Strahlung und Waschstraßenabrieb.',
            'Auch komplexe Scheinwerfermasken aus PC-HT mit partiellen Chromeinsätzen realisieren wir mithilfe maßgefertigter Silikonschablonen sauber getrennt in mattschwarze Designzonen und hochglänzende Spiegelflächen.',
          ],
        },
        {
          heading: 'Hochvakuum-Prozessführung für optische LED- und Luftfahrtteile',
          paragraphs: [
            'Bei stark thermisch belasteten Bauteilen aus PEI Ultem oder duroplastischem BMC überwachen wir die Vakuumkammerkurve elektronisch auf Restdruck und Verdampfungsrate des 99,99 %-Reinaluminiums. Dadurch entsteht eine extrem dichte, korrosionsstabile Spiegelschicht ohne lokale Überhitzung am Spritzgusskörper.',
            'Anschließend wird direkt in derselben Prozesssequenz die plasmaunterstützte SiOx-Schutzschicht abgeschieden, welche die hochreflektierende Aluminiumoberfläche vor Kondenswasser, Schwefelverbindungen und Reinigungschemikalien schützt. So erreichen Scheinwerferreflektoren, Kollimatoren und optische Sensoren dauerhaft über 92 Prozent gerichtete Lichtreflexion ohne Mikrorisse oder Delamination im Dauerbetrieb. Jedes Bauteil wird vor dem Verpacken im Prüffeld unter gerichtetem Prüflightspektrum auf makellose Spiegelhomogenität, saubere Kantenabdeckung und Maßhaltigkeit an den Aufnahmepunkten kontrolliert. Für Serienabrufe stellen wir auf Wunsch komplette Erstmusterdokumentationen bereit.',
          ],
        },
      ],
      applications: [
        'Bi-Xenon-, LED-Matrix- und Halogenscheinwerfer-Reflektoren samt Sichtblenden',
        'Luftfahrt-Innenverkleidungen aus schwer entflammbarem Ultem PEI',
        'Optiken für Industrie-, Straßen- und Hallen-LED-Strahler',
        'UV-hartlackierte Polycarbonat-Abdeckungen und Instrumentengläser',
      ],
      faq: [
        {
          q: 'Beschichten Sie auch Ultem PEI oder BMC-Duroplastteile?',
          a: 'Ja, sowohl hitzefestes Duroplast-BMC (Reflektoren) als auch Luftfahrt-PEI gehören zu unseren Standard-Materialien im Werk Józefów.',
        },
        {
          q: 'Warum bilden manche Lacke auf Polycarbonat trübe Stellen?',
          a: 'Aggressive Ester/Ketone quellen PC an; unsere speziell formulierten Sperrprimer vermeiden Lösemittelangriff zuverlässig.',
        },
        {
          q: 'Können Lichtfenster innerhalb eines bedampften Rahmens klar bleiben?',
          a: 'Ja, über passgenaue Abdeckschablonen werden optische Austrittsfenster sauber ausgespart.',
        },
        {
          q: 'Schützt SiOx den Al-Spiegel dauerhaft vor Feuchte?',
          a: 'Ja, die anorganische Siliziumoxid-Schutzschicht blockt Feuchtigkeit und Abgase im Scheinwerfergehäuse ab, ohne die Lichtausbeute zu mindern.',
        },
      ],
      relatedLinks: [
        { label: 'Luftfahrt-Studie: Werkstoffmetallisierung', path: '/de/news/wie-beeinflusst-metallisierung-die-materialleistung' },
        { label: 'Leistung: Reflektor neu bedampfen', path: '/de/scheinwerfer-reflektor-aufbereitung' },
        { label: 'Leistung: Vakuummetallisierung', path: '/de/vakuummetallisierung' },
        { label: 'Vergleich: Polieren vs. PVD', path: '/de/vergleich/streuscheibe-polieren-vs-pvd-innensanierung' },
      ],
      breadLabel: 'Polycarbonat PC / PEI',
    },
  },

  pp: {
    pl: {
      metaTitle: 'Lakierowanie i metalizacja polipropylenu PP | STANIAX',
      metaDesc:
        'Skuteczne lakierowanie i PVD polipropylenu PP, PE oraz EPDM: aktywacja plazmowa lub płomieniowa, podkład adhezyjny i ISO 2409 klasa 0 bez łuszczenia powłoki.',
      badge: 'Matryca materiałów: PP / PE / EPDM',
      polymerCode: 'PP / PP+EPDM / HDPE',
      h1: 'Lakierowanie i metalizacja PVD polipropylenu (PP / PP+EPDM)',
      subtitle:
        'Przemysłowe przezwyciężanie niskiej energii powierzchniowej poliolefin — od nakrętek i elementów AGD po zderzaki oraz obudowy techniczne.',
      directAnswerQuestion: 'Jak uzyskać przyczepność powłoki klasy 0 ISO 2409 na polipropylenie (PP) i polietylenie (PE)?',
      directAnswer:
        'Surowy polipropylen (PP) ma energię powierzchniową ok. 29–31 mN/m, przez co farba i metal spływają lub odpadają płatami. W STANIAX podnosimy energię powierzchniową powyżej 44 mN/m metodą aktywacji płomieniowej lub plazmowej, nakładamy specjalny primer chlorowany/poliolefinowy, a następnie system 2K PU lub PVD z lakierem UV (ISO 2409 klasa 0).',
      specs: [
        { parameter: 'Energia przed aktywacją', value: 'Niska (niepolarna): ~29–31 mN/m — brak zwilżalności' },
        { parameter: 'Energia po aktywacji STANIAX', value: '≥44–48 mN/m (weryfikacja tuszami testowymi Dyne)' },
        { parameter: 'Metody przygotowania', value: 'Aktywacja płomieniowa 3D, plazma atmosferyczna, primer CPO' },
        { parameter: 'Odporność testowa', value: 'ISO 2409 Gt 0 · zginanie bez łuszczenia na cienkich zawiasach' },
        { parameter: 'Wykończenia końcowe', value: 'Mat satyna, głęboki połysk 2K, Soft-Touch, metalizacja PVD chrom/złoto' },
      ],
      sections: [
        {
          heading: 'Bariera polipropylenowa: dlaczego „zwykły” lakier nie trzyma się PP i PP+EPDM?',
          paragraphs: [
            'Polipropylen (PP), jego mieszanki elastomerowe PP+EPDM (np. zderzaki i listwy zewnętrzne) oraz polietylen PE należą do niepolarnych poliolefin. Ich łańcuchy węglowodorowe nie zawierają grup tlenowych zdolnych do wytworzenia wiązań chemicznych z tradycyjnymi żywicami akrylowymi lub poliuretanowymi.',
            'Bez precyzyjnego utlenienia warstwy wierzchniej powłoka zachowuje się jak naklejka na teflonie — przechodzi wzrokowo odbiór w lakierni, by po kilku tygodniach odprysnąć pod paznokciem lub myjką ciśnieniową.',
          ],
          bullets: [
            'Weryfikacja napięcia powierzchniowego tuszami kalibrowanymi przed lakierowaniem każdej partii',
            'Elastyczne primery PP+EPDM przenoszące odkształcenia detalu bez pękania siatki lakieru',
            'Możliwość ekonomicznego zastąpienia drogiego ABS tańszym polipropylenem przy zachowaniu wyglądu premium',
          ],
        },
        {
          heading: 'Zastosowanie PVD oraz lakierowania 2K na polipropylenie w beauty i przemyśle',
          paragraphs: [
            'Coraz więcej marek kosmetycznych i producentów AGD przechodzi na monomateriałowy polipropylen z powodu recyklingu i niższego kosztu granulatu. Dzięki aktywacji w STANIAX elementy z PP mogą uzyskać pełne lustro chromu PVD, elegancką satynę Soft-Touch albo jednolity kolor RAL/Pantone dopasowany do szklanego flakonu.',
          ],
        },
      ],
      applications: [
        'Monomateriałowe nakrętki, słoiczki i nasadki PP w branży kosmetycznej',
        'Elementy zewnętrzne automotive PP+EPDM (listwy, nakładki zderzaków, dyfuzory)',
        'Obudowy elektronarzędzi, zbiorniki i pokrywy techniczne AGD',
        'Detale medyczne oraz laboratoryjne z polipropylenu wymagające oznaczeń i lakierowania',
      ],
      faq: [
        {
          q: 'Czy polipropylen można metalizować próżniowo na lustrzany chrom i złoto?',
          a: 'Tak. Po aktywacji powierzchniowej (płomień/plazma) i nałożeniu podkładu adhezyjnego UV polipropylen zachowuje w komorze PVD jakość lustra identyczną z ABS.',
        },
        {
          q: 'Jak sprawdzacie skuteczność aktywacji przed lakierowaniem serii?',
          a: 'Każda partia kontrolowana jest testowymi atramentami napięcia powierzchniowego (>= 44 mN/m) oraz testem siatki nacięć ISO 2409 na próbce kontrolnej.',
        },
        {
          q: 'Czy lakier na zderzakowym PP+EPDM pęknie przy lekkim ugięciu elementu?',
          a: 'Nie — do mieszanek elastomerowych stosujemy plastyfikowane systemy 2K PUR o wysokiej elastyczności w ujemnych temperaturach.',
        },
        {
          q: 'Dlaczego przejście z ABS na PP z powłoką w STANIAX się opłaca?',
          a: 'Granulat PP jest znacznie tańszy od ABS galwanicznego i ułatwia certyfikowany monomateriałowy recykling opakowań zgodnie z przepisami UE PPWR.',
        },
      ],
      relatedLinks: [
        { label: 'Usługa: Lakierowanie tworzyw sztucznych', path: '/lakierowanie-tworzyw-sztucznych' },
        { label: 'Usługa: Lakierowanie natryskowe B2B', path: '/lakierowanie-natryskowe' },
        { label: 'Porównanie: PVD vs galwanizacja', path: '/porownanie/metalizacja-prozniowa-vs-galwanizacja' },
        { label: 'Branża beauty: Metalizacja opakowań', path: '/news/metalizacja-prozniowa-rewolucjonizuje-branze-beauty' },
      ],
      breadLabel: 'Polipropylen PP',
    },
    en: {
      metaTitle: 'Polypropylene PP Coating & PVD Metallizing | STANIAX',
      metaDesc:
        'Industrial painting and PVD metallizing of polypropylene PP, PP+EPDM, and HDPE at STANIAX: flame/plasma activation (>44 mN/m), CPO primer & ISO 2409 Class 0.',
      badge: 'Substrate Matrix: PP / PE / EPDM',
      polymerCode: 'PP / PP+EPDM / HDPE',
      h1: 'Industrial Coating & PVD Metallization of Polypropylene (PP)',
      subtitle:
        'Turning low-surface-energy polyolefins into durable coated Class-A housings, mono-material cosmetic closures, and flexible automotive trim.',
      directAnswerQuestion: 'How do you achieve permanent paint or PVD adhesion on polypropylene (PP)?',
      directAnswer:
        'Raw polypropylene exhibits low surface tension (~29–31 mN/m), causing conventional paints and metals to peel immediately. STANIAX raises surface energy above 44 mN/m via flame or atmospheric plasma treatment, applies a specialized polyolefin adhesion promoter (CPO primer), and cures elastic 2K PU or UV-PVD layers to ISO 2409 Class 0.',
      specs: [
        { parameter: 'Raw Polyolefin Tension', value: 'Non-polar 29–31 mN/m (poor wettability untreated)' },
        { parameter: 'Activated Surface Target', value: '≥44–48 mN/m (checked via Dyne inks before coating)' },
        { parameter: 'Activation Chemistry', value: '3D robotics flame oxidation, plasma + chlorinated primer' },
        { parameter: 'Flexibility & Peel Rating', value: 'ISO 2409 Class 0 · passes cold-flex cracking on PP+EPDM' },
        { parameter: 'Finish Options', value: 'Mirror PVD chrome/gold, 2K satin matte, Soft-Touch velvet' },
      ],
      sections: [
        {
          heading: 'Solving Polyolefin Low Surface Energy at Production Scale',
          paragraphs: [
            'Polypropylene and PP+EPDM blends carry chemically inert hydrocarbon backbones lacking polar oxygen sites. Without precision surface activation immediately before primer spraying, coatings behave like tape on waxed paper — failing cross-hatch adhesion and pressure-wash tests.',
            'At STANIAX, automated surface activation converts non-polar surface chains cleanly without warping thin mono-material closures, paired with Dyne-ink QC checks before any paint gun triggers.',
          ],
          bullets: [
            'Replaces heavy ABS resins with lower-cost recyclable PP under EU PPWR targets',
            'Elastomeric 2K PU systems flex with exterior automotive bumper trim without cracking',
            'Mirror chrome or gold PVD achievable directly over leveled PP basecoats',
          ],
        },
        {
          heading: 'Mono-Material Cosmetic Packaging & Automotive Bumper Components',
          paragraphs: [
            'European beauty brands migrating to 100% PP jars and caps still require luxury chrome collars or custom Pantone finishes matching glass flacons. Simultaneously, OEM exterior PP+EPDM diffusers demand scratch-resistant matte coatings that survive winter stone chips.',
            'Every production batch is verified via water-immersion and ISO 2409 cross-hatch tape testing to ensure zero edge peeling on living hinges, snap-fit closures, and flexible PP/EPDM automotive exterior trim.',
          ],
        },
      ],
      applications: [
        'Mono-material recyclable PP cosmetic closures, jars, and dispenser sleeves',
        'Automotive PP+EPDM bumper grilles, mirror caps, and exterior trim blades',
        'Garden equipment housings, power tool shells, and industrial appliance covers',
        'Fluid reservoirs and technical handles coated with color-matched 2K systems',
      ],
      faq: [
        {
          q: 'Can polypropylene be metallized to look indistinguishable from plated chrome?',
          a: 'Yes — following plasma/flame activation and UV leveling primer, vacuum-deposited aluminum reflects identically on PP and ABS.',
        },
        {
          q: 'How do you guarantee coating batch adhesion on PP?',
          a: 'Surface wettability is spot-checked using calibrated Dyne fluids (>=44 mN/m) prior to priming, followed by post-cure ISO 2409 cross-hatch tests.',
        },
        {
          q: 'Does 2K paint flex safely on soft PP+EPDM parts?',
          a: 'Yes, flexibilized polyurethane formulations preserve impact elasticity at sub-zero temperatures.',
        },
        {
          q: 'Why switch packaging from ABS to coated PP?',
          a: 'Lower raw polymer price and full mono-material recyclability under upcoming European packaging rules.',
        },
      ],
      relatedLinks: [
        { label: 'Service: Plastic Parts Painting', path: '/en/plastic-parts-painting' },
        { label: 'Service: Industrial Spray Painting', path: '/en/spray-painting' },
        { label: 'Compare: PVD vs Electroplating', path: '/en/compare/vacuum-metallization-vs-electroplating' },
        { label: 'Article: Beauty Packaging PVD', path: '/en/news/vacuum-metallization-revolutionizes-beauty-industry' },
      ],
      breadLabel: 'Polypropylene PP',
    },
    de: {
      metaTitle: 'Polypropylen PP Lackierung & PVD-Beschichtung | STANIAX',
      metaDesc:
        'Professionelle Beschichtung von Polypropylen (PP), PP+EPDM und PE bei STANIAX: Flamm-/Plasmavorbehandlung >44 mN/m, Haftprimer und ISO 2409 Gt 0.',
      badge: 'Materialmatrix: PP / PE / EPDM',
      polymerCode: 'PP / PP+EPDM / HDPE',
      h1: 'Lackierung und PVD-Metallisierung von Polypropylen (PP)',
      subtitle:
        'Prozesssichere Überwindung niedriger Oberflächenspannung — von Monomaterial-Kosmetikverschlüssen bis zu elastischen PP+EPDM-Anbauteilen.',
      directAnswerQuestion: 'Wie erreicht man dauerhafte Lack- oder PVD-Haftung (ISO 2409 Gt 0) auf Polypropylen (PP)?',
      directAnswer:
        'Unbehandeltes Polypropylen besitzt lediglich 29–31 mN/m Oberflächenspannung, sodass Lacke sofort abperlen. STANIAX aktiviert PP per Beflammung oder Plasma auf ≥44 mN/m, appliziert einen speziellen Polyolefin-Haftprimer (CPO) und lackiert elastische 2K-PUR- oder UV-PVD-Systeme mit Bestnote Gt 0 nach ISO 2409.',
      specs: [
        { parameter: 'Rohspannung PP / PE', value: 'Unpolar ~29–31 mN/m (ohne Vorbehandlung nicht lackierbar)' },
        { parameter: 'Zielspannung nach Aktivierung', value: '≥44–48 mN/m (Dyne-Testtinten-Prüfung)' },
        { parameter: 'Vorbehandlungsmethode', value: '3D-Beflammung, Atmosphärenplasma, CPO-Primer' },
        { parameter: 'Qualitätsnachweis', value: 'ISO 2409 Gt 0 · kälteelastisch auf PP+EPDM' },
        { parameter: 'Oberflächenoptionen', value: 'Spiegelchrom/Gold PVD, 2K-Satinmatt, Soft-Touch, RAL/NCS' },
      ],
      sections: [
        {
          heading: 'Warum Standardlacke auf unpolarem PP scheitern',
          paragraphs: [
            'Polypropylen und PP+EPDM-Blends bieten Lackbindemitteln von Natur aus keine polaren Andockstellen. Ohne gezielte Voroxidation innerhalb eines definierten Zeitfensters löst sich selbst teurer Autolack großflächig ab.',
            'Im STANIAX-Werk stellen gesteuerte Beflammungs- und Plasmaprozesse reproduzierbare Haftenergie ohne Verzug dünnwandiger Deckel sicher.',
          ],
          bullets: [
            'Kostensenkung durch Ersatz von teurem Galvanik-ABS durch recyclingfähiges PP',
            'Elastifizierte 2K-PUR-Systeme für schlagfeste Automotive-Stoßfängerblenden',
            'Brillante PVD-Chrom- und Goldoptik für EU-PPWR-konforme Monomaterial-Verpackungen',
          ],
        },
        {
          heading: 'Serienanwendungen für Verpackungsindustrie und Fahrzeugbau',
          paragraphs: [
            'Kosmetikmarken nutzen zunehmend reine PP-Tiegel mit edler Gold-/Chrom-PVD-Oberfläche für sortenreines Recycling. In der Fahrzeugzulieferung schützen kratzfeste 2K-Strukturlacke PP+EPDM-Zierleisten zuverlässig gegen Steinschlag und UV.',
            'Durch angepasste Aufheizkurven bleiben selbst dünnwandige Scharniere, Klappdeckel und Flaschenkapseln maßstabil und passgenau für automatisierte Abfüllanlagen.',
          ],
        },
        {
          heading: 'Reproduzierbare Taktfenster zwischen Flammaktivierung und Primerauftrag',
          paragraphs: [
            'Die durch Beflammung oder Plasma erzeugten polaren Oberflächengruppen verlieren nach mehreren Tagen Lagerung an Reaktivität. Bei STANIAX werden PP-Lose deshalb unmittelbar im verketteten Durchlauf nach der Aktivierung grundiert, um dauerhafte ISO 2409 Gitterschnittwerte von Gt 0 über das gesamte Serienvolumen sicherzustellen.',
            'Zur Absicherung jeder Serienlieferung prüfen unsere Techniker regelmäßig die Oberflächenspannung mittels Testtinten (≥ 44 mN/m) sowie die Gitterschnitthaftung nach Feucht-Wärme-Lagerung. Auf diese Weise lassen sich selbst recycelte Post-Consumer-Polypropylen-Compounds (rPP) prozesssicher mit Hochglanz-Chrom-PVD, Soft-Touch-Lacken oder abriebfesten 2K-Decklacken veredeln. Auch bei dünnwandigen Klappverschlüssen, Spenderköpfen und elastischen Fahrzeugblenden bleibt die volle Biegewechselfestigkeit ohne Rissbildung im Lackfilm über die gesamte Lebensdauer des Bauteils erhalten. Vor Serienfreigabe fertigen wir Musterlose auf Ihren Original-Spritzgusswerkzeugen an.',
          ],
        },
      ],
      applications: [
        'Monomaterial-PP-Verschlüsse, Cremetiegel und Spender für Beauty-Marken',
        'PP+EPDM-Stoßfängerleisten, Diffusoren und Außenspiegelkappen',
        'Werkzeuggehäuse, Abdeckungen und Behälter der Hausgeräteindustrie',
        'Medizintechnische und industrielle Kunststoffkomponenten in RAL/NCS',
      ],
      faq: [
        {
          q: 'Lässt sich Polypropylen genauso spiegelnd bedampfen wie ABS?',
          a: 'Ja, nach Plasma-/Flammaktivierung und UV-Grundierung erreicht Aluminium-PVD auf PP dieselbe Spiegelbrillanz wie auf ABS.',
        },
        {
          q: 'Wie wird die Aktivierung vor der Lackierung überwacht?',
          a: 'Jede Charge wird vor dem Primerauftrag mittels Prüftinten (≥44 mN/m) kontrolliert.',
        },
        {
          q: 'Reißt der Lack auf elastischen PP+EPDM-Teilen?',
          a: 'Nein, speziell weichmacherfreie elastische PUR-Systeme folgen Bauteilverformungen auch bei Frost.',
        },
        {
          q: 'Warum lohnt sich PP statt ABS für Verpackungsteile?',
          a: 'Deutlich geringere Materialkosten bei voller Eignung für Monomaterial-Recyclingströme.',
        },
      ],
      relatedLinks: [
        { label: 'Leistung: Kunststofflackierung', path: '/de/kunststofflackierung' },
        { label: 'Leistung: Spritzlackierung', path: '/de/spritzlackierung' },
        { label: 'Vergleich: PVD vs. Galvanik', path: '/de/vergleich/vakuummetallisierung-vs-galvanik' },
        { label: 'Studie: Kosmetikverpackungen PVD', path: '/de/news/vakuummetallisierung-revolutioniert-die-kosmetikbranche' },
      ],
      breadLabel: 'Polypropylen PP',
    },
  },

  pa: {
    pl: {
      metaTitle: 'Lakierowanie i PVD poliamidu PA6 / PA66 | STANIAX',
      metaDesc:
        'Lakierowanie i metalizacja poliamidu PA6/PA66 GF30 w STANIAX: wygrzewanie odgazowujące, krycie włókna szklanego, odporność na oleje, glikol i 150 °C.',
      badge: 'Matryca materiałów: PA6 / PA66 GF30',
      polymerCode: 'PA6 / PA66 + GF15–35%',
      h1: 'Lakierowanie przemysłowe i PVD poliamidu (PA6 / PA66 GF)',
      subtitle:
        'Krycie tekstury włókna szklanego, odporność chemiczna na oleje oraz powłoki techniczne do detali podmaskowych i maszyn.',
      directAnswerQuestion: 'Jak uniknąć pęcherzyków i widocznej struktury włókna przy lakierowaniu poliamidu PA6/PA66 GF?',
      directAnswer:
        'Poliamidy PA6 i PA66 z włóknem szklanym wchłaniają do 2–3% wilgoci, która uwalnia się w piecu i tworzy pęcherze („gazowanie”), a nierówny skurcz ujawnia fakturę włókien. STANIAX stosuje wstępne wygrzewanie w temperaturze 95–110 °C, wypełniające podkłady epoksydowe/2K oraz powłoki PU lub PVD odporne na oleje i 150 °C.',
      specs: [
        { parameter: 'Obsługiwane poliamidy', value: 'PA6, PA66, PA12 oraz kompozyty z włóknem szklanym GF15–GF35' },
        { parameter: 'Kondycjonowanie wstępne', value: 'Kontrolowane odwilżanie termiczne przed podkładem (brak gazowania)' },
        { parameter: 'Wyrównanie włókna GF', value: 'Wysokowypełniające podkłady 2K maskujące fakturę włókna szklanego' },
        { parameter: 'Odporność chemiczna i temp.', value: 'Oleje silnikowe, smary, glikol, paliwa · ciągła praca do 150 °C' },
        { parameter: 'Systemy powłok', value: '2K PU przemysłowy, podkłady antykorozyjne/ESD, metalizacja PVD' },
      ],
      sections: [
        {
          heading: 'Zarządzanie wilgocią i chropowatością w elementach PA66 z włóknem szklanym',
          paragraphs: [
            'Konstrukcyjne detale pod maską silnika, korpusy pomp, armatura kolektorowa czy klamki maszyn budowlanych odlewane są z poliamidu wzmacnianego 30% włóknem szklanym (PA66 GF30). Zyskują wysoką sztywność mechaniczną, jednak na powierzchni pojawia się szorstki rysunek wystających włókien, a wewnątrz wiąże się woda z powietrza.',
            'W natryskowej lakierni przemysłowej STANIAX łączymy kontrolowane odgazowanie termiczne z dwuskładnikowymi podkładami wysoko-wypełniającymi (high-build primer). Taka bariera zamyka pory powierzchniowe przed nałożeniem lakieru nawierzchniowego 2K PU lub metalizacji PVD.',
          ],
          bullets: [
            'Całkowita eliminacja kraterów w czasie sieciowania termicznego w komorach suszarniczych',
            'Odporność powłok nawierzchniowych na płyny eksploatacyjne, smary i solankę drogową',
            'Możliwość powlekania na czarno (antystatyczne/matowe) oraz w kolorach maszyn przemysłowych RAL',
          ],
        },
        {
          heading: 'Alternatywa dla aluminium odlewanego ciśnieniowo — lekkie zamienniki PA+PVD',
          paragraphs: [
            'Projektanci przemysłowi zastępują ciężkie korpusy aluminiowe wypraskami z PA6/PA66 GF, a następnie zlecają nam wykończenie metaliczne PVD lub ochronny natrysk 2K. Daje to redukcję masy o 40–55% bez kompromisu wizualnego czy ochronnego.',
          ],
        },
      ],
      applications: [
        'Pokrywy osprzętu silnika, obudowy czujników, wsporniki i kolektory PA66 GF30',
        'Korpusy elektronarzędzi, uchwyty maszyn przemysłowych i komponenty robotyki',
        'Klamki, okucia meblowe i armatura techniczna o wysokiej udarności',
        'Elementy elektroinstalacyjne i obudowy z wymogiem trwałego oznaczenia RAL',
      ],
      faq: [
        {
          q: 'Czy lakierujecie również druk 3D SLS / MJF z poliamidu PA12?',
          a: 'Tak. Porowate spieki PA12 z druku 3D przechodzą impregnację primerem wypełniającym, szlif międzyoperacyjny i lakierowanie na gładko lub metalizację PVD.',
        },
        {
          q: 'Dlaczego na PA66 pojawiają się czasem drobne kratery w zwykłych lakierniach?',
          a: 'Powoduje je para wodna uwalniająca się z poliamidu podczas wygrzewania lakieru — bez wstępnego wypalenia wilgoci powłoka się zapowietrza.',
        },
        {
          q: 'Czy powłoka na poliamidzie wytrzymuje kontakt z olejem i benzyną?',
          a: 'Tak. Przemysłowe lakiery poliuretanowe 2K PU oraz epoksydowe są w pełni odporne na węglowodory, oleje hydrauliczne i płyny chłodnicze.',
        },
        {
          q: 'Czy możliwa jest metalizacja PVD detali z poliamidu zbrojonego włóknem?',
          a: 'Tak, po zastosowaniu gładzącego lakieru bazowego komora próżniowa nakłada lustrzaną warstwę aluminium zabezpieczoną topcoatem UV.',
        },
      ],
      relatedLinks: [
        { label: 'Usługa: Lakierowanie przemysłowe natryskowe', path: '/lakierowanie-natryskowe' },
        { label: 'Usługa: Lakierowanie tworzyw sztucznych', path: '/lakierowanie-tworzyw-sztucznych' },
        { label: 'Usługa: Metalizacja tworzyw', path: '/metalizacja-tworzyw-sztucznych' },
        { label: 'Studium lotnicze: Właściwości materiałów po PVD', path: '/news/partnerstwo-z-wiodacym-producentem-lotniczym' },
      ],
      breadLabel: 'Poliamid PA6 / PA66',
    },
    en: {
      metaTitle: 'Polyamide PA6 / PA66 Coating & PVD Finishing | STANIAX',
      metaDesc:
        'Industrial PA6/PA66 GF30 nylon painting and PVD metallizing at STANIAX: pre-bake moisture control, glass-fiber leveling, oil/glycol resistance up to 150°C.',
      badge: 'Substrate Matrix: PA6 / PA66 GF30',
      polymerCode: 'PA6 / PA66 + GF15–35%',
      h1: 'Industrial Coating & Metallization of Polyamide (PA6 / PA66 GF)',
      subtitle:
        'Moisture degassing, high-build fiber smoothing, and chemical-resistant 2K PU or PVD finishes for structural nylon housings and automotive parts.',
      directAnswerQuestion: 'How do you prevent pinholing and visible glass fibers when coating glass-filled PA6/PA66?',
      directAnswer:
        'Polyamide resins absorb 2–3% ambient moisture that outgasses as micro-blisters during oven curing, while glass fibers create rough surface texture. STANIAX performs controlled pre-bake degassing at 95–110 °C, applies high-build filling 2K primers, and finishes with chemical-resistant 2K PU or UV-PVD layers.',
      specs: [
        { parameter: 'Grades Processed', value: 'Unfilled PA6/PA12 and 15–35% glass-filled PA66 GF30' },
        { parameter: 'Degassing Control', value: 'Pre-bake dehydration step preventing outgassing pinholes' },
        { parameter: 'Fiber Texture Leveling', value: 'High-build epoxy/PU primers mask exposed glass strands' },
        { parameter: 'Chemical & Heat Resistance', value: 'Engine oils, coolant glycol, road salt · continuous 150 °C' },
        { parameter: 'Finishing Systems', value: '2K industrial PU, RAL/NCS technical finishes, mirror PVD' },
      ],
      sections: [
        {
          heading: 'Preventing Outgassing & Eliminating Glass-Fiber Show-Through',
          paragraphs: [
            'Structural nylon reinforced with 30% glass fiber replaces die-cast aluminum across engine covers, pump manifolds, and industrial tools. However, raw PA66 GF30 traps water inside its polymer matrix and exhibits uneven fiber swirl lines that standard thin paints cannot hide.',
            'Our line pairs controlled dehydration baking with thick-film high-build barrier primers before topcoating in crisp satin/gloss 2K polyurethanes or vacuum metallization.',
          ],
          bullets: [
            'Eliminates crater blisters and dry pinholes on heated curing cycles',
            'Withstands oils, hydraulic fluids, fuels, and glycol splash',
            '40–55% component weight reduction vs painted ZnAl or cast aluminum',
          ],
        },
        {
          heading: 'Finishing PA12 Additive Manufacturing & Low-Volume Tooling',
          paragraphs: [
            'For functional prototypes and low-volume bridge production sintered in SLS/MJF PA12 nylon, STANIAX seals porous powder surfaces with multi-pass primer-sand cycles prior to 2K color or chrome PVD finishing.',
            'This multi-stage sealing protocol prevents capillary wicking of oils and cleaning fluids into 3D-printed housings while delivering uniform gloss, EMI/ESD surface shielding options, and Class 0 cross-cut adhesion across complex industrial geometries.',
          ],
        },
      ],
      applications: [
        'Under-hood engine covers, valve housings, and sensor enclosures in PA66 GF30',
        'Heavy power tool shells, robotics housings, and hydraulic handles',
        'High-impact industrial brackets replacing painted metal castings',
        'Functional PA12 3D-printed aerospace and OEM display housings',
      ],
      faq: [
        {
          q: 'Do you paint or metallize SLS/MJF 3D-printed PA12 nylon parts?',
          a: 'Yes — porous sintered PA12 parts receive sealing primers, mechanical leveling, and smooth 2K or PVD mirror coats.',
        },
        {
          q: 'Why do regular coatings bubble on nylon parts during baking?',
          a: 'Hygroscopic water trapped inside nylon boils out at oven cure temperatures unless pre-baked out beforehand.',
        },
        {
          q: 'Is 2K polyurethane over PA66 oil- and solvent-resistant?',
          a: 'Yes, crosslinked 2K industrial polyurethane topcoats resist oils, fuels, glycol, and cleaners.',
        },
        {
          q: 'Can PA66 parts match strict corporate machinery RAL codes?',
          a: 'Yes, we match custom RAL, NCS, and industrial equipment fleet color standards with spectrophotometric ΔE verification.',
        },
      ],
      relatedLinks: [
        { label: 'Service: Industrial Spray Painting', path: '/en/spray-painting' },
        { label: 'Service: Plastic Parts Painting', path: '/en/plastic-parts-painting' },
        { label: 'Service: Plastic Chrome Plating', path: '/en/plastic-chrome-plating' },
        { label: 'Case Study: Material Performance After PVD', path: '/en/news/how-does-metallization-affect-material-performance' },
      ],
      breadLabel: 'Polyamide PA6 / PA66',
    },
    de: {
      metaTitle: 'Polyamid PA6 / PA66 Lackierung & PVD | STANIAX',
      metaDesc:
        'Industrielle Beschichtung von Polyamid PA6/PA66 GF30 bei STANIAX: Entgasungs-Vortrocknung, Glasfaser-Glättung, Öl- & Glykolbeständigkeit bis 150 °C.',
      badge: 'Materialmatrix: PA6 / PA66 GF30',
      polymerCode: 'PA6 / PA66 + GF15–35 %',
      h1: 'Lackierung und PVD-Metallisierung von Polyamid (PA6 / PA66 GF)',
      subtitle:
        'Ausgasungsschutz, Porenfüller für glasfaserverstärkte Spritzgussteile und medienfeste 2K-PUR-Industrielacke.',
      directAnswerQuestion: 'Wie verhindert man Kocherblasen und sichtbare Glasfasern beim Lackieren von PA6/PA66?',
      directAnswer:
        'Polyamide nehmen 2–3 % Luftfeuchtigkeit auf, was im Einbrennofen Bläschen verursacht, während Glasfasern raue Oberflächen zeichnen. STANIAX trocknet PA6/PA66 gezielt bei 95–110 °C vor, füllt Poren mit High-Build-2K-Grundierungen und lackiert öl- und temperaturfeste 2K-PUR- oder PVD-Systeme bis 150 °C.',
      specs: [
        { parameter: 'Werkstoffe', value: 'Unverstärktes PA6/PA12 sowie glasfaserverstärktes PA66 GF15–35' },
        { parameter: 'Entgasung & Trocknung', value: 'Kontrollierte Vortemperung verhindert Ausgasungskrater' },
        { parameter: 'Füllgrundierung', value: 'Dickschicht-2K-Primer egalisiert Glasfaserstrukturen zuverlässig' },
        { parameter: 'Medienbeständigkeit', value: 'Motorenöl, Kraftstoffe, Glykol, Streusalz · Dauerlast bis 150 °C' },
        { parameter: 'Systemauswahl', value: 'Industrieller 2K-PUR-Decklack (RAL/NCS) oder PVD-Chrom/Gold' },
      ],
      sections: [
        {
          heading: 'Sichere Beschichtung glasfaserverstärkter Motorraum- und Maschinenteile',
          paragraphs: [
            'PA66 GF30 ersetzt heute vielfach Aluminiumdruckguss bei Motorabdeckungen, Werkzeuggehäusen und Pumpenhaltern. Ohne sorgfältige Entgasungstrocknung führt austretende Restfeuchte im Lackierofen jedoch zu Ausschuss durch Nadelstiche.',
            'Bei STANIAX glätten gefüllte 2K-Haftgrundierungen selbst ausgeprägte Faserfließlinien, bevor langlebige 2K-PUR-Lacke oder Metallisierungen folgen.',
          ],
          bullets: [
            'Keine Ausgasungskrater während des thermischen Einbrennens',
            'Vollständig medienbeständig gegen Öle, Fette und Frostschutzmittel',
            '40–55 % Gewichtsvorteil gegenüber beschichtetem Druckguss',
          ],
        },
        {
          heading: 'Veredelung von PA12-SLS/MJF-3D-Druckteilen',
          paragraphs: [
            'Poröse Lasersinter-Prototypen aus PA12 dichten wir mittels mehrstufiger Füller- und Schliffprozesse präzise ab — als ideale Vorstufe für Sichtlackierung oder Vakuummetallisierung.',
            'Dies verkürzt Markteinführungen für deutsche Sondermaschinenbauer, weil Kleinserien aus der additiven Fertigung bereits wie serienreife Spritzgussgehäuse auftreten.',
          ],
        },
        {
          heading: 'Prüfanforderungen für Maschinenbau und Nutzfahrzeuge',
          paragraphs: [
            'Lackierte Polyamidgehäuse im Außen- oder Motorbereich durchlaufen Haftfestigkeitstests nach Wasserlagerung, Hydraulikölkontakt und Steinschlag-Simulation. Unsere 2K-PUR-Systeme versiegeln glasfaserhaltige Schnittkanten zuverlässig vor Unterwanderung und Farbausbleichung.',
            'Für Baugruppen mit eingepressten Messingbuchsen, Gewindeeinsätzen oder Dichtflächen fertigen wir passgenaue Silikonmaskierungen an, damit sämtliche Funktionsmaße ohne nachträgliche mechanische Nacharbeit sofort montagebereit beim Kunden eintreffen. Auch für korrosionsgeschützte PA6-GF30-Schaltgehäuse und Lüfterräder erstellen wir dokumentierte Erstmusterprüfberichte nach DIN EN ISO 2409. Vor dem Lackierdurchlauf werden alle Polyamid-Rohteile in temperaturgeregelten Umluftkammern konditioniert, damit im späteren Einbrenn- oder Vakuumprozess keinerlei Mikroblasen an den Glasfaserbrücken auftreten und die Oberfläche dauerhaft glatt, schlagzäh sowie chemikalienbeständig bleibt. Ob einzelnes Prototypgehäuse aus dem 3D-Druck oder laufende Großserie mit mehreren Tausend Bauteilen pro Woche: Unser Werk in Józefów gewährleistet kurze Durchlaufzeiten von drei bis sieben Werktagen inklusive sicherer Europaletten-Verpackung für den Direktversand nach Deutschland, Österreich und in die Schweiz.',
          ],
        },
      ],
      applications: [
        'Motorraumabdeckungen, Ansaugmodule und Sensorgehäuse aus PA66 GF30',
        'Maschinengriffe, Robotergehäuse und schwere Werkzeugschalen',
        'Leichtbaukomponenten als Ersatz für pulverbeschichteten ZnAl-Guss',
        'Glatt beschichtete SLS/MJF-Funktionsbauteile aus PA12',
      ],
      faq: [
        {
          q: 'Lackieren Sie auch 3D-gedruckte PA12-Bauteile?',
          a: 'Ja, poröse PA12-Sinterteile werden gefüllt, egalisiert und wahlweise in RAL/NCS oder PVD veredelt.',
        },
        {
          q: 'Woher stammen Nadelstiche bei der Polyamidlackierung?',
          a: 'Hygroskopische Feuchtigkeit gast bei Ofentemperaturen aus dem Werkstoff aus, sofern keine Vortemperung erfolgt.',
        },
        {
          q: 'Ist der 2K-PUR-Aufbau gegen Öl und Diesel resistent?',
          a: 'Ja, vernetzte 2K-Industriepolyurethane widerstehen dauerhaft Ölen, Schmierstoffen und Reinigungsmitteln.',
        },
        {
          q: 'Sind Maschinen-Hausfarben nach RAL exakt darstellbar?',
          a: 'Ja, jede Serienlieferung wird per Spektralphotometer (ΔE < 0,8) geprüft.',
        },
      ],
      relatedLinks: [
        { label: 'Leistung: Spritzlackierung B2B', path: '/de/spritzlackierung' },
        { label: 'Leistung: Kunststofflackierung', path: '/de/kunststofflackierung' },
        { label: 'Leistung: Kunststoff verchromen', path: '/de/kunststoff-verchromen' },
        { label: 'Luftfahrt-Studie ansehen', path: '/de/news/wie-beeinflusst-metallisierung-die-materialleistung' },
      ],
      breadLabel: 'Polyamid PA6 / PA66',
    },
  },

  glass: {
    pl: {
      metaTitle: 'Lakierowanie i metalizacja szkła PVD | STANIAX',
      metaDesc:
        'Przemysłowe lakierowanie i metalizacja szkła (flakony perfum, butelki, słoiki beauty): powłoki silanowe odporne na alkohol 96%, mrożenie i gradienty ombre.',
      badge: 'Matryca materiałów: Szkło & Ceramika',
      polymerCode: 'Szkło sodowo-wapniowe / borokrzemowe',
      h1: 'Lakierowanie i metalizacja próżniowa szkła, flakonów oraz butelek',
      subtitle:
        'Powłoki krzemoorganiczne i próżniowe PVD na szkle bez użycia kwasu fluorowodorowego: pełne krycie, transparent, frosted, gradient i lustro chrom/złoto.',
      directAnswerQuestion: 'Jak uzyskuje się odporne na perfumy i zmywanie powłoki lakierowane lub metaliczne na szkle?',
      directAnswer:
        'Gładka, nieporowata powierzchnia szkła wymaga wstępnej modyfikacji silanowym promotorem adhezji lub aktywacją ogniową, a następnie nałożenia natryskowych lakierów wodnych/UV lub próżniowego naparowania aluminium 99,99% zabezpieczonego twardym topcoatem. Uzyskane wykończenie jest odporne na 96% alkohol perfumeryjny i przechodzi test siatki nacięć ISO 2409 klasa 0.',
      specs: [
        { parameter: 'Obsługiwane opakowania', value: 'Flakony perfum, słoiki kosmetyczne, butelki alkoholi premium, klosze' },
        { parameter: 'Promotor przyczepności', value: 'Silanowe primery krzemoorganiczne wiążące kowalencyjnie z SiO₂ szkła' },
        { parameter: 'Odporność chemiczna beauty', value: 'Test 96% etanolu, olejki zapachowe, test tarcia i zarysowań paznokciem' },
        { parameter: 'Efekty optyczne i dotykowe', value: 'Efekt mrożonego szkła bez kwasu HF, ombre, transparent, lustro PVD, Soft-Touch' },
        { parameter: 'Kontrola barwy', value: 'Pełna zgodność wzorników Pantone / RAL / NCS z tolerancją ΔE < 0,8' },
      ],
      sections: [
        {
          heading: 'Adhezja kowalencyjna do krzemionki i odporność na perfumy wysokoprocentowe',
          paragraphs: [
            'Flakon perfumeryjny lub butelka ekskluzywnego alkoholu ma bezpośredni i wielokrotny kontakt ze stężonym alkoholem etylowym, olejkami eterycznymi oraz transportem zbiorczym. Klasyczna farba meblowa czy samochodowa odpada od szkła po kontakcie z wodą lub pojedynczą kroplą perfum przy atomizerze.',
            'W STANIAX pracujemy na przemysłowych systemach dedykowanych wyłącznie dla hutniczego szkła opakowaniowego i technicznego. Promotory silanowe tworzą mostki chemiczne Si–O–C bezpośrednio z matrycą szkła, a sieciowanie UV lub wygrzewanie tworzy twardą powłokę przechodzącą restrykcyjne próby namaczania alkoholowego.',
          ],
          bullets: [
            'Ekologiczna alternatywa dla trawienia kwasem HF — satynowy efekt „szronienia / frosted” w dowolnym kolorze',
            'Półprzezroczyste barwienia dymione, rubinowe i bursztynowe pozwalające kontrolować poziom płynu',
            'Możliwość łączenia na jednej butelce metalizacji próżniowej lustra (PVD) z gradientem barwnym ombre',
          ],
        },
        {
          heading: 'Personalizacja seryjnych butelek bez kosztów nowych form hutniczych',
          paragraphs: [
            'Uruchomienie dedykowanej masy barwionego szkła w hucie wymaga zamówień przekraczających setki tysięcy sztuk jednej referencji. Przemysłowe lakierowanie oraz PVD na standardowym bezbarwnym szkle flintowym w STANIAX pozwala marce beauty lub spirytusowej wdrożyć edycje sezonowe, gradienty oraz eleganckie złocenia od kilku tysięcy sztuk w 3–7 dni.',
          ],
        },
      ],
      applications: [
        'Flakony perfumeryjne i słoiki kosmetyczne z efektem frosted, ombre oraz PVD złoto/chrom',
        'Butelki wysokoprocentowych alkoholi rzemieślniczych i limitowanych serii premium',
        'Słoiki świec zapachowych i dyfuzorów domowych z powłoką odporną na temperaturę wosku',
        'Dekoracyjne i techniczne elementy szklane oraz klosze lamp w branży wnętrzarskiej',
      ],
      faq: [
        {
          q: 'Czy lakier na flakonie wytrzyma rozlane perfumy z 80–96% zawartością alkoholu?',
          a: 'Tak. Każdy stosowany w STANIAX system do szkła perfumeryjnego jest testowany na odporność na czysty etanol, zapobiegając rozmiękaniu przy szyjce atomizera.',
        },
        {
          q: 'Czy efekt mrożonego szkła (frosted) robicie bez trawienia kwasem HF?',
          a: 'Tak, nakładamy natryskową powłokę matującą o drobnej teksturze szronu, bezpieczną dla środowiska i pozwalającą na barwienie mrożonego szkła na dowolny odcień Pantone.',
        },
        {
          q: 'Czy można metalizować próżniowo całe flakony szklane lub tylko ich dolną część?',
          a: 'Tak, realizujemy zarówno pełną metalizację lustrzaną 360° (np. złoto, srebro, rose gold), jak i płynne przejścia gradientowe lub maskowanie okienek pomiarowych.',
        },
        {
          q: 'Jaka jest minimalna seria butelek lub słoików przyjmowana do lakierowania?',
          a: 'Obsługujemy zarówno serie testowe oraz edycje limitowane od kilkuset sztuk po ciągłe zlecenia kontraktowe dla rozlewni z Polski i Europy.',
        },
      ],
      relatedLinks: [
        { label: 'Usługa: Lakierowanie szkła i ceramiki', path: '/lakierowanie-szkla-i-ceramiki' },
        { label: 'Artykuł: Metalizacja i lakierowanie w branży beauty', path: '/news/metalizacja-prozniowa-rewolucjonizuje-branze-beauty' },
        { label: 'Usługa: Metalizacja próżniowa PVD', path: '/metalizacja-prozniowa' },
        { label: 'Galeria realizacji szklanych i flakonów', path: '/gallery' },
      ],
      breadLabel: 'Szkło i butelki',
    },
    en: {
      metaTitle: 'Glass Bottle Painting & PVD Coating | STANIAX',
      metaDesc:
        'Spray coating & PVD metallizing of glass perfume flacons and spirits bottles at STANIAX: silane adhesion, 96% ethanol resistance, HF-free frost & ombre.',
      badge: 'Substrate Matrix: Glass & Ceramics',
      polymerCode: 'Soda-Lime & Borosilicate Glass',
      h1: 'Glass Bottle Spray Coating & PVD Vacuum Metallization',
      subtitle:
        'Silane-promoted waterborne, UV, and PVD finishes transforming clear flint stock glass into frosted, ombre, Pantone, or full-mirror packaging.',
      directAnswerQuestion: 'How do spray coatings and PVD metallization adhere permanently to smooth perfume glass?',
      directAnswer:
        'Smooth glass rejects regular paints unless bonded chemically. STANIAX prepares glass via silane organofunctional adhesion promoters and thermal/UV curing cycles compatible with 99.99% aluminum PVD and Pantone spray lacquers. Finishes pass ISO 2409 Class 0 cross-hatch tests and withstand 96% perfumery ethanol without softening.',
      specs: [
        { parameter: 'Container Formats', value: 'Perfume flacons, cosmetic jars, spirits bottles, candle vessels' },
        { parameter: 'Bonding Mechanism', value: 'Organosilane primers forming covalent Si–O–C glass linkages' },
        { parameter: 'Perfumery QA Standard', value: '96% ethanol, fragrance oils & transit rub resistance tested' },
        { parameter: 'Decorative Portfolio', value: 'HF-free frosted matte, translucent tints, gradient ombre, PVD mirror' },
        { parameter: 'Color Tolerance', value: 'Pantone / RAL / NCS spectrophotometric matching (ΔE < 0.8)' },
      ],
      sections: [
        {
          heading: 'Ethanol-Resistant Silane Chemistry for Fragrance & Spirits Packaging',
          paragraphs: [
            'Luxury perfume necks and spirits closures constantly contact high-proof ethanol, essential fragrance oils, and pallet-transit friction. Unmodified commercial paints absorb alcohol and blister along bottle shoulders.',
            'Using organosilane glass primers combined with UV or baked curing, STANIAX achieves dense chemical crosslinking across clear flint bottles without toxic hydrofluoric acid (HF) etching baths.',
          ],
          bullets: [
            'Eco-friendly frosted velvet etching finishes across unlimited custom hues',
            'Gradient two-tone ombre spraying from opaque black/gold down to clear base',
            'Selective masking windows showcasing natural beverage or serum levels',
          ],
        },
        {
          heading: 'Transforming Stock Glass Without Expensive Furnace Color Campaigns',
          paragraphs: [
            'Ordering custom furnace-colored glass runs often demands 100,000+ bottle MOQs. Coating off-the-shelf clear flint stock glass with STANIAX lets indie beauty brands and craft distilleries launch signature matte, chrome PVD, or ruby-lacquered SKUs at manageable batch quantities within 3–7 days.',
            'Each production lot undergoes spectrophotometric color verification (ΔE < 0.8), cross-hatch tape adhesion testing after water immersion, and carton-rub abrasion checks so luxury flacons arrive on high-speed filling lines free of scratches or collar-fit issues.',
          ],
        },
      ],
      applications: [
        'Perfume & Eau de Parfum glass flacons in frosted, gradient, and mirror gold PVD',
        'Craft spirits, vodka, gin, and collector decanter bottles',
        'Luxury skincare jars and heat-safe decorative candle glass vessels',
        'Architectural glass shades and ceramic hardware components',
      ],
      faq: [
        {
          q: 'Do coated perfume flacons resist 96% ethanol spills around the crimp neck?',
          a: 'Yes — every perfumery coating system undergoes 96% ethanol wipe and immersion testing prior to batch approval.',
        },
        {
          q: 'Can you achieve an acid-etched frosted glass look without hazardous HF acid?',
          a: 'Yes, our frosted matte spray lacquers replicate crisp satin glass feel sustainably and allow custom color tinting.',
        },
        {
          q: 'Can a single bottle combine gradient color and chrome/gold PVD?',
          a: 'Yes — vacuum metallized mirror or half-mirror fade combined with UV ombre tints creates high-shelf-impact packaging.',
        },
        {
          q: 'What order sizes are practical for European bottle coating at STANIAX?',
          a: 'We execute both pilot launches and seasonal runs starting from a few hundred pieces up to ongoing contract replenishment.',
        },
      ],
      relatedLinks: [
        { label: 'Service: Glass & Ceramic Painting', path: '/en/glass-and-ceramic-painting' },
        { label: 'Article: Beauty Packaging PVD', path: '/en/news/vacuum-metallization-revolutionizes-beauty-industry' },
        { label: 'Service: PVD Vacuum Metallization', path: '/en/vacuum-metallisation' },
        { label: 'Gallery: Bottle & Flacon Projects', path: '/en/gallery' },
      ],
      breadLabel: 'Glass & Bottles',
    },
    de: {
      metaTitle: 'Glasflakon Lackierung & PVD-Metallisierung | STANIAX',
      metaDesc:
        'Industrielle Glaslackierung & PVD-Veredelung von Flakons und Flaschen bei STANIAX: Silanprimer, 96 % Ethanolbeständigkeit, Satinierung ohne Flusssäure & Ombré.',
      badge: 'Materialmatrix: Glas & Keramik',
      polymerCode: 'Kalk-Natron- & Borosilikatglas',
      h1: 'Glaslackierung und PVD-Metallisierung für Flakons & Flaschen',
      subtitle:
        'Silan-vernetzte Lacksysteme und Vakuum-Aluminium für Kosmetikflakons, Spirituosenflaschen und Kerzengläser — von Satin-Frost bis Chrom-Spiegel.',
      directAnswerQuestion: 'Wie haften Industrielacke und PVD-Schichten dauerhaft und ethanolfest auf glattem Glas?',
      directAnswer:
        'Unporöses Verpackungsglas erfordert Silan-Haftvermittler für eine kovalente Anbindung an die SiO₂-Oberfläche. STANIAX veredelt Glasflakons mit wasserbasierten/UV-Lacksystemen oder 99,99 % PVD-Aluminium inklusive Schutzlack — geprüft auf ISO 2409 Gt 0 sowie 96 % Parfümethanol ohne Anquellen.',
      specs: [
        { parameter: 'Gebindearten', value: 'Parfümflakons, Cremetiegel, Spirituosenflaschen, Kerzengläser' },
        { parameter: 'Haftbrücke', value: 'Organosilan-Primer mit kovalenter Si–O–C-Bindung zum Glas' },
        { parameter: 'Chemikalienfestigkeit', value: '96 % Ethanol-, Parfümöl- und Kartonscheuer-Beständigkeit' },
        { parameter: 'Design-Effekte', value: 'Flusssäurefreie Satinierung (Frost), Ombré-Verlauf, Spiegel-PVD' },
        { parameter: 'Farbgenauigkeit', value: 'Pantone-, RAL- & NCS-Rezepte mit ΔE < 0,8' },
      ],
      sections: [
        {
          heading: 'Ethanolfeste Silan-Lackchemie für Parfümerie und Premium-Getränke',
          paragraphs: [
            'Am Flakonhals oder Flaschenausgießer greift hochprozentiger Alkohol ungeeignete Lacke innerhalb weniger Minuten an. Unsere Organosilan-Systeme vernetzen beim Aushärten dicht auf der Glasmatrix und überstehen strenge Parfümöle- und Ethanoltests der europäischen Beauty-Industrie.',
          ],
          bullets: [
            'Nachhaltige Frost-Mattierung ohne gefährliches Ätzen mit Flusssäure (HF)',
            'Zweifarbige Ombré-Farbverläufe mit freibleibendem Füllstandsfenster',
            'Wahlweise transparente Einfärbung (Amber, Rubin, Rauch) oder Voll-Chrom PVD',
          ],
        },
        {
          heading: 'Standardglas individuell veredeln ohne teure Hüttenmindestmengen',
          paragraphs: [
            'Eingefärbte Glasschmelzen ab Glashütte erfordern oft sechsstellige Stückzahlen. Durch industrielle Spritzlackierung und PVD auf neutralem Weißglas realisieren Marken bei STANIAX bereits ab mittelgroßen Auflagen exklusive Sondereditionen binnen 3–7 Werktagen.',
            'Auf Wunsch schützen spezielle Masken den Gewindehals präzise vor Lackeintrag, damit Krimppumpen und Verschlüsse sauber aufsetzen. Ebenso bereiten wir glatte Mantelflächen gezielt für nachfolgenden Siebdruck, Heißfolienprägung oder Etikettierung mit hoher Haftkraft vor.',
          ],
        },
        {
          heading: 'Logistik & Palettenhandling für europäische Abfüller',
          paragraphs: [
            'Glasflakons und schwere Spirituosenflaschen liefern Abfüller aus Polen, Deutschland und Österreich direkt auf Zwischenlagen nach Józefów. Nach der Einbrenn- bzw. UV-Vernetzung durchläuft jede Charge eine visuelle Lichtkontrolle auf Läufer, Staubeinschlüsse und exakte Spektralwerte ΔE < 0,8.',
            'Darüber hinaus unterziehen wir Rückstellmuster jeder Produktionscharge einem verschärften Immersionstest mit 96-prozentigem Parfümethanol, einem Kondenswassertest sowie einer Abriebprüfung für den automatisierten Karton- und Etikettierdurchlauf. Durch staubfreie Neuverpackung in Zellstoff-Gefachen oder thermoformierten Trays können die veredelten Flakons ohne Zwischenreinigung direkt in Ihre Abfülllinie eingespeist werden. Auf Wunsch realisieren unsere Lackierer mehrstufige Farbverläufe, transparente Edelstein-Lasuren, matte Soft-Feel-Haptiken oder kombinierte Gold- und Platin-PVD-Spiegelzonen mit gestochen scharfen Sichtfenstern für die Füllstandskontrolle. Für Markenhersteller und Lohnabfüller aus dem DACH-Raum bemustern wir Ihre Originalflakons kurzfristig in mehreren Farb- und Glanzabstufungen nach Pantone-, RAL- oder NCS-Vorgabe.',
          ],
        },
      ],
      applications: [
        'Parfümflakons und Kosmetiktiegel in Gold PVD, Chrom oder Matt-Frost',
        'Exklusive Gin-, Wodka- und Craft-Spirituosenflaschen',
        'Hitzebeständig lackierte Kerzengläser und Raumduft-Diffuser',
        'Design-Leuchtengläser und Architekturglas-Kleinteile',
      ],
      faq: [
        {
          q: 'Übersteht die Beschichtung Kontakt mit 96 %igem Alkohol?',
          a: 'Ja, alle Glaslacksysteme bei STANIAX sind speziell für Parfümerie-Ethanol und ätherische Öle zertifiziert.',
        },
        {
          q: 'Erzeugen Sie Frostglas-Optik umweltfreundlich ohne Säure?',
          a: 'Ja, per feinstkörniger Satin-Spritzlackierung ganz ohne Flusssäurebad — inklusive freier Pantone-Einfärbung.',
        },
        {
          q: 'Sind Kombinationen aus Ombré-Farbverlauf und Gold-PVD machbar?',
          a: 'Ja, wir fertigen mehrstufige Designs aus teilmetallisiertem Spiegel und farbigem Verlauf.',
        },
        {
          q: 'Ab welcher Stückzahl lohnt sich die Glasveredelung bei STANIAX?',
          a: 'Bereits ab Kleinserien von einigen Hundert Stück bis zu fortlaufenden EU-Serienabrufen.',
        },
      ],
      relatedLinks: [
        { label: 'Leistung: Glas- & Keramiklackierung', path: '/de/glas-und-keramiklackierung' },
        { label: 'Studie: Vakuummetallisierung Beauty', path: '/de/news/vakuummetallisierung-revolutioniert-die-kosmetikbranche' },
        { label: 'Leistung: Vakuummetallisierung', path: '/de/vakuummetallisierung' },
        { label: 'Projektgalerie ansehen', path: '/de/gallery' },
      ],
      breadLabel: 'Glas & Flakons',
    },
  },
  ...SUBSTRATES_WAVE2,
}
