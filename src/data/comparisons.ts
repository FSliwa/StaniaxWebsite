import type { Lang } from '@/lib/translations'
import {
  COMPARISONS_WAVE2,
  WAVE2_COMPARISON_SLUGS,
  type Wave2ComparisonId,
} from './comparisons-wave2'

export type ComparisonId =
  | 'pvd-vs-galvanic'
  | 'pvd-vs-spray-chrome'
  | 'reflector-vs-aftermarket'
  | 'polishing-vs-internal-pvd'
  | Wave2ComparisonId

export const COMPARISON_ORDER: ComparisonId[] = [
  'pvd-vs-galvanic',
  'pvd-vs-spray-chrome',
  'pvd-vs-powder-coating',
  'pvd-vs-hydrographics',
  'reflector-vs-aftermarket',
  'polishing-vs-internal-pvd',
  'pvd-vs-biled-retrofit',
  'uv-hardcoat-vs-acetone-vapor',
]

export const COMPARISON_SLUGS: Record<ComparisonId, Record<Lang, string>> = {
  'pvd-vs-galvanic': {
    pl: '/porownanie/metalizacja-prozniowa-vs-galwanizacja',
    en: '/en/compare/vacuum-metallization-vs-electroplating',
    de: '/de/vergleich/vakuummetallisierung-vs-galvanik',
  },
  'pvd-vs-spray-chrome': {
    pl: '/porownanie/metalizacja-prozniowa-vs-chromowanie-natryskowe',
    en: '/en/compare/vacuum-metallization-vs-spray-chrome',
    de: '/de/vergleich/vakuummetallisierung-vs-spritzchrom',
  },
  'reflector-vs-aftermarket': {
    pl: '/porownanie/regeneracja-odblysnikow-vs-nowy-zamiennik',
    en: '/en/compare/reflector-restoration-vs-aftermarket-headlight',
    de: '/de/vergleich/reflektor-aufbereitung-vs-nachbau',
  },
  'polishing-vs-internal-pvd': {
    pl: '/porownanie/polerowanie-kloszy-vs-regeneracja-wnetrza-pvd',
    en: '/en/compare/lens-polishing-vs-internal-pvd-restoration',
    de: '/de/vergleich/streuscheibe-polieren-vs-pvd-innensanierung',
  },
  ...WAVE2_COMPARISON_SLUGS,
}

export interface ComparisonRow {
  parameter: string
  optionA: string
  optionB: string
}

export interface EngineeringSection {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export interface RelatedLinkItem {
  label: string
  path: string
}

export interface ComparisonLocalePage {
  metaTitle: string
  metaDesc: string
  badge: string
  h1: string
  subtitle: string
  sideALabel: string
  sideBLabel: string
  directAnswerQuestion: string
  directAnswer: string
  verdictTitle: string
  verdictSummary: string
  comparisonRows: ComparisonRow[]
  sections: EngineeringSection[]
  whenChooseATitle: string
  whenChooseA: string[]
  whenChooseBTitle: string
  whenChooseB: string[]
  faq: Array<{ q: string; a: string }>
  relatedLinks: RelatedLinkItem[]
  breadLabel: string
}

export const COMPARISONS: Record<ComparisonId, Record<Lang, ComparisonLocalePage>> = {
  'pvd-vs-galvanic': {
    pl: {
      metaTitle: 'Metalizacja próżniowa vs galwanizacja | STANIAX',
      metaDesc:
        'Porównanie inżynieryjne PVD i galwanizacji plastiku: grubość warstw 50-150 nm, zgodność REACH, obróbka ABS/PP/szkła oraz koszty serii B2B w STANIAX.',
      badge: 'Porównanie technologii B2B',
      h1: 'Metalizacja próżniowa PVD vs galwanizacja tworzyw sztucznych',
      subtitle:
        'Analiza techniczna i ekonomiczna dwóch przemysłowych metod nadawania metalicznej powłoki na plastikach i kompozytach.',
      sideALabel: 'Metalizacja próżniowa PVD (STANIAX)',
      sideBLabel: 'Galwanizacja kąpielowa (Cr6+ / Cr3+)',
      directAnswerQuestion: 'Kiedy wybrać metalizację próżniową PVD zamiast galwanizacji plastiku?',
      directAnswer:
        'Metalizacja próżniowa PVD nakłada w wysokiej próżni warstwę aluminium 50-150 nm zabezpieczoną lakierem UV (15-25 µm), bez toksycznych kąpieli chromowych i bez wymogu przewodności podłoża. Galwanizacja sprawdza się przy grubych powłokach na czystym ABS narażonych na ekstremalne ścieranie mechaniczne, lecz generuje wyższe koszty jednostkowe i ograniczenia REACH.',
      verdictTitle: 'Werdykt technologiczny do produkcji seryjnej',
      verdictSummary:
        'Dla 85% detali z ABS, PC, PP, PA oraz szkła kosmetycznego (nakrętki, flakony, odbłyśniki, listwy wnętrza) proces PVD z podkładem i topcoatem UV oferuje o 30-50% niższy koszt jednostkowy, pełną zgodność z normami REACH/RoHS i dowolną kolorystykę od chromu po złoto i odcienie smoke.',
      comparisonRows: [
        {
          parameter: 'Mechanizm nanoszenia',
          optionA: 'Parowanie termiczne Al w próżni 10⁻⁴ mbar + utwardzanie lakierów bazowego i UV',
          optionB: 'Trawienie kwasem chromowo-siarkowym, aktywacja palladem i elektroliza Ni/Cu/Cr',
        },
        {
          parameter: 'Obsługiwane materiały',
          optionA: 'ABS, PC, PP (plazma), PA6, PMMA, PS, PET, szkło, ceramika, ZNAL',
          optionB: 'Praktycznie wyłącznie specjalne gatunki ABS i ABS/PC (galwanizowalne)',
        },
        {
          parameter: 'Grubość powłoki całkowitej',
          optionA: '15-30 µm (podkład + 0,05-0,15 µm Al + lakier ochronny UV/PU)',
          optionB: '20-45 µm warstw metalicznych (miedź + nikiel + chrom)',
        },
        {
          parameter: 'Wpływ na wymiary i gwinty',
          optionA: 'Brak zatykania drobnych gwintów i zatrzasków kosmetycznych',
          optionB: 'Ryzyko narostu na krawędziach i zmian tolerancji pasowania',
        },
        {
          parameter: 'Ekologia i normy UE',
          optionA: 'Proces suchy, bez ścieków ciężkich, zero Cr(VI), zgodność REACH 100%',
          optionB: 'Wymagane oczyszczalnie ścieków metalonośnych i rygor Cr(VI)',
        },
        {
          parameter: 'Paleta kolorystyczna',
          optionA: 'Srebro lustro, złoto, miedź, rose gold, grafit, półprzezroczysty smoke',
          optionB: 'Głównie chrom jasny, satyna lub ciemny chrom niklowy',
        },
        {
          parameter: 'Czas realizacji serii B2B',
          optionA: '5-10 dni roboczych w komorach wysokiej próżni (prototypy 2-3 dni)',
          optionB: '10-21 dni roboczych w zautomatyzowanych liniach wannowych',
        },
      ],
      sections: [
        {
          heading: 'Fizyka przyczepności: dlaczego galwanizacja nie chwyta polipropylenu ani szkła?',
          paragraphs: [
            'Klasyczna galwanizacja tworzyw sztucznych (potocznie galwanizacja plastiku) opiera się na chemicznym wytrawianiu fazy butadienowej w kopolimerze ABS w gorącej mieszaninie kwasu siarkowego i trójtlenku chromu. W tworzywie powstają mikrojamki kotwiczące warstwę chemicznie redukowanego niklu, na którym dopiero narasta miedź i chrom galwaniczny.',
            'Polipropylen (PP), poliamid (PA), poliwęglan (PC) czy opakowania szklane nie zawierają faz podatnych na takie trawienie. W zakładzie STANIAX barierę adhezji rozwiązuje aktywacja plazmowa lub płomieniowa oraz dopasowany system bazowych lakierów primerowych przed załadunkiem do komory próżniowej.',
          ],
          bullets: [
            'Klasa adhezji 0 wg normy siatki nacięć ISO 2409 na ABS, PC i PP po primerze',
            'Brak naprężeń wewnętrznych powodujących kruchość cienkościennych nakrętek',
            'Ochrona topcoatem UV przed alkoholem 96% w flakonach perfumeryjnych',
          ],
        },
        {
          heading: 'Koszt jednostkowy i podatność konstrukcyjna w małych oraz średnich seriach',
          paragraphs: [
            'Linie galwaniczne projektuje się pod wielomilionowe nakłady detali samochodowych o stałej geometrii, ponieważ utrzymanie i regeneracja wanien chemicznych wymaga ciągłego obrotu. Przy partiach od 500 do 100 000 sztuk (np. podzespoły AGD, obudowy sensorów, serie limitowane beauty) narzut na przyrządowanie galwaniczne bywa nieopłacalny.',
            'W technologii PVD w Józefowie stosujemy obrotowe zawieszki planetarne w przemysłowych komorach wysokiej próżni. Pozwala to ekonomicznie powlekać zarówno próbki prototypowe do akceptacji jakościowej, jak i cykliczne partie kontraktowe bez ryzyka pękania powłoki na zatrzaskach montażowych.',
          ],
        },
        {
          heading: 'Kiedy galwanizacja zachowuje przewagę inżynieryjną?',
          paragraphs: [
            'Jeśli komponent stanowi zewnętrzną klamkę pojazdu użytkowego, reling lub emblemat poddawany codziennym uderzeniom kamieni, myjniom zasadowym pH > 12 i tarciu metalowym, gruba dwudziestomikrometrowa bariera miedzi i niklu pod chromem wykazuje wyższą twardość powierzchniową niż lakierowany system PVD.',
            'Z kolei wszędzie tam, gdzie liczy się współczynnik odbicia światła powyżej 92% (reflektory optyczne), selektywne maskowanie detali, redukcja masy lub lakierowanie opakowań beauty, metalizacja próżniowa wygrywa zarówno parametrami optycznymi, jak i bilansem kosztowym.',
          ],
        },
      ],
      whenChooseATitle: 'Wybierz PVD w STANIAX, gdy:',
      whenChooseA: [
        'Produkujesz opakowania kosmetyczne, nakrętki, flakony szklane lub optykę świetlną.',
        'Detal jest wykonany z PP, PC, PA, PMMA lub cienkościennego ABS wrażliwego na odkształcenia.',
        'Wymagasz koloru złotego, miedzianego, satyny lub dymionego chromu oraz pełnego REACH.',
      ],
      whenChooseBTitle: 'Rozważ galwanizację, gdy:',
      whenChooseB: [
        'Część jest wykonana ze standardowego ABS-u galwanicznego o dużej sztywności.',
        'Element wymaga odporności na ekstremalne uderzenia żwiru na zewnątrz nadwozia.',
        'Zamawiasz niezmienną geometrię w wolumenie setek tysięcy sztuk rocznie.',
      ],
      faq: [
        {
          q: 'Czy chrom próżniowy PVD łuszczy się tak jak tańsze zamienniki natryskowe?',
          a: 'Nie. Prawidłowo utwardzony system trójwarstwowy (primer wyrównujący + aluminium 99,99% + topcoat UV) osiąga klasę adhezji 0 wg ISO 2409 i przechodzi testy potu, wilgoci oraz cykli termicznych.',
        },
        {
          q: 'Czy w PVD można uzyskać kolor ciemnego chromu lub 24k złota na plastiku?',
          a: 'Tak. Barwnik wprowadza się do wierzchniej warstwy lakieru ochronnego UV po procesie naparowania aluminium, co daje wysoką powtarzalność barwy i połysku między kolejnymi partiami.',
        },
        {
          q: 'Jaka jest minimalna partia B2B do metalizacji próżniowej w STANIAX?',
          a: 'Wykonujemy zarówno walidacje próbek prototypowych przed startem formy wtryskowej, jak i regularne dostawy seryjne B2B od kilkuset do kilkudziesięciu tysięcy sztuk miesięcznie.',
        },
        {
          q: 'Czym różni się chromowanie plastiku metodą galwaniczną od próżniowej?',
          a: 'Galwanizacja osadza metale z wodnych roztworów elektrolitów tylko na trawionym ABS, natomiast metalizacja próżniowa osadza pary aluminium na niemal dowolnym polimerze lub szkle bez kąpieli kwasowych.',
        },
      ],
      relatedLinks: [
        { label: 'Usługa: Metalizacja próżniowa B2B', path: '/metalizacja-prozniowa' },
        { label: 'Usługa: Chromowanie plastiku PVD', path: '/metalizacja-tworzyw-sztucznych' },
        { label: 'Matryca materiałowa: Powlekanie ABS', path: '/rozwiazania/powlekanie-tworzywa-abs' },
        { label: 'Porównanie: PVD vs chromowanie natryskowe', path: '/porownanie/metalizacja-prozniowa-vs-chromowanie-natryskowe' },
      ],
      breadLabel: 'PVD vs Galwanizacja',
    },
    en: {
      metaTitle: 'Vacuum Metallization vs Electroplating | STANIAX',
      metaDesc:
        'Engineering comparison of PVD vacuum metallization vs electroplating on plastics: layer thickness, REACH compliance, ABS/PP substrates, and B2B unit costs.',
      badge: 'B2B Technology Comparison',
      h1: 'Vacuum Metallization PVD vs Plastic Electroplating',
      subtitle:
        'Technical and cost-efficiency breakdown of industrial vacuum aluminum deposition versus multi-bath chemical chrome plating on polymers.',
      sideALabel: 'Vacuum Metallization PVD (STANIAX)',
      sideBLabel: 'Wet Bath Electroplating (Cr6+ / Cr3+)',
      directAnswerQuestion: 'When should B2B manufacturers choose PVD vacuum metallization over electroplating?',
      directAnswer:
        'PVD vacuum metallization deposits a 50-150 nm pure aluminum layer sealed with a 15-25 µm UV clearcoat inside a vacuum chamber, requiring zero heavy-metal baths or conductive substrates. Electroplating suits rigid plating-grade ABS under severe mechanical abrasion, while PVD supports PP, PC, PA, glass, REACH compliance, and lower short-run tooling costs.',
      verdictTitle: 'Engineering Verdict for Series Manufacturing',
      verdictSummary:
        'For roughly 85% of cosmetic closures, glass bottles, optical reflectors, and interior trim made from ABS, PC, PP, or PA, UV-sealed PVD reduces unit cost by 30-50% while eliminating Cr(VI) waste streams and enabling gold, rose-gold, or smoked finishes.',
      comparisonRows: [
        {
          parameter: 'Deposition Physics',
          optionA: 'Thermal aluminum evaporation at 10⁻⁴ mbar + UV-cured basecoat and topcoat',
          optionB: 'Chromic acid etching, palladium activation, and Cu/Ni/Cr electrolytic baths',
        },
        {
          parameter: 'Compatible Substrates',
          optionA: 'ABS, PC, plasma-treated PP, PA6, PMMA, PS, PET, glass, ceramics, ZnAl',
          optionB: 'Essentially restricted to plating-grade ABS and ABS/PC blends',
        },
        {
          parameter: 'Total Coating Thickness',
          optionA: '15-30 µm (leveling primer + 0.05-0.15 µm Al + UV/2K PU topcoat)',
          optionB: '20-45 µm solid copper-nickel-chromium metallic build-up',
        },
        {
          parameter: 'Thread & Tolerance Impact',
          optionA: 'Preserves fine cosmetic cap threads and snap-fit tolerances',
          optionB: 'Edge build-up can affect tight mechanical tolerances',
        },
        {
          parameter: 'EU Environmental Compliance',
          optionA: 'Dry vacuum process, zero Cr(VI), 100% REACH & RoHS compliant',
          optionB: 'Strict wastewater treatment and hexavalent/trivalent chromium permitting',
        },
        {
          parameter: 'Color Versatility',
          optionA: 'Mirror chrome, gold, copper, bronze, smoked black, matte brushed aluminum',
          optionB: 'Predominantly bright, satin, or dark nickel-chromium shades',
        },
        {
          parameter: 'Lead Time (B2B Batches)',
          optionA: '5-10 business days in planetary high-vacuum chambers (2-3 days express)',
          optionB: '10-21 working days across automated chemical rack lines',
        },
      ],
      sections: [
        {
          heading: 'Why Chemical Bath Electroplating Fails on Polypropylene, Polyamide, and Glass',
          paragraphs: [
            'Conventional plastic electroplating (electroplating plastic in acid baths) depends on dissolving butadiene rubber domains embedded within ABS polymer chains using hot chromic-sulfuric acid. Those microscopic cavities mechanically lock in electroless nickel before electrolytic copper and chrome layers grow.',
            'Polymers like PP, PA6, polycarbonate, or soda-lime glass lack etchable rubber phases. At STANIAX, atmospheric plasma activation paired with custom adhesion primers creates covalent bonding across diverse industrial substrates inside a single clean workflow.',
          ],
          bullets: [
            'Cross-hatch adhesion Class 0 per ISO 2409 validated across ABS, PC, and glass',
            'Zero hydrogen embrittlement or acid crazing on thin-walled cosmetic closures',
            '96% ethanol and essential-oil resistance certified by UV topcoat crosslinking',
          ],
        },
        {
          heading: 'Unit Economics for Mid-Volume and High-SKU Production Runs',
          paragraphs: [
            'Rack-based electroplating lines amortize high chemical maintenance overheads only when running massive homogeneous batches. Changing colors or small batch fixtures becomes cost-prohibitive.',
            'Planetary jigging inside STANIAX industrial high-vacuum chambers allows rapid batch turnarounds from prototype tooling approvals up to tens of thousands of production units per month with flexible tinting directly in the UV topcoat.',
          ],
        },
        {
          heading: 'Where Electroplating Still Makes Engineering Sense',
          paragraphs: [
            'Heavy-duty exterior truck emblems, wheel center caps exposed to gravel impact, or bathroom valves subjected to continuous boiling-water abrasion benefit from the 30-40 µm metallic ductility of electroplated copper-nickel-chromium stacks.',
            'Conversely, whenever >92% light reflectance, lightweight cosmetic packaging, custom gold/copper tones, or non-ABS engineering resins are specified, industrial PVD metallization delivers superior ROI and compliance.',
          ],
        },
      ],
      whenChooseATitle: 'Choose PVD Vacuum Metallization when:',
      whenChooseA: [
        'Your components use PC, PP, PA, glass, ceramics, or thin-walled ABS closures.',
        'You need gold, rose gold, tinted chrome, or >92% optical mirror reflectance.',
        'Strict EU REACH sustainability and 3-7 day B2B lead times matter.',
      ],
      whenChooseBTitle: 'Consider Electroplating when:',
      whenChooseB: [
        'Parts are molded specifically in thick plating-grade ABS resin.',
        'Surfaces endure continuous exterior gravel impacts or caustic wheel cleaners.',
        'Annual volumes justify dedicated high-throughput chemical racks.',
      ],
      faq: [
        {
          q: 'Is vacuum metallization cheaper than chrome plating plastic parts?',
          a: 'For small-to-medium series and multi-color SKUs, UV-sealed PVD is typically 30-50% more cost-effective because it avoids multi-stage precious-metal palladium baths and wastewater treatment fees.',
        },
        {
          q: 'How durable is UV-lacquered PVD on automotive interior or cosmetic caps?',
          a: 'A crosslinked 15-25 µm UV polyurethane topcoat achieves ISO 2409 Class 0 adhesion, passes sweat/alcohol wipe testing, and resists UV yellowing outdoors or under retail lighting.',
        },
        {
          q: 'Can you metallize selectively on plastic housings?',
          a: 'Yes. Custom silicon or steel masking fixtures shield designated zones so specific bosses, optical windows, or welding surfaces stay bare polymer.',
        },
        {
          q: 'Do you support EU prototyping before series molding?',
          a: 'Yes, STANIAX validates sample runs from 3D-printed SLA/SLS prototypes and first-off injection shots before committing serial planetary racks.',
        },
      ],
      relatedLinks: [
        { label: 'Service: PVD Vacuum Metallization', path: '/en/vacuum-metallisation' },
        { label: 'Service: Plastic Chrome Plating', path: '/en/plastic-chrome-plating' },
        { label: 'Substrate Matrix: ABS Coating', path: '/en/solutions/abs-plastic-coating-pvd' },
        { label: 'Compare: PVD vs Spray Chrome', path: '/en/compare/vacuum-metallization-vs-spray-chrome' },
      ],
      breadLabel: 'PVD vs Electroplating',
    },
    de: {
      metaTitle: 'Vakuummetallisierung vs. Galvanik | STANIAX',
      metaDesc:
        'Technischer Vergleich PVD-Vakuummetallisierung vs. Kunststoff-Galvanik: Schichtdicke, REACH-Konformität, ABS/PP/Glas-Eignung und Serienkosten bei STANIAX.',
      badge: 'B2B-Technologievergleich',
      h1: 'Vakuummetallisierung PVD vs. Kunststoff-Galvanik',
      subtitle:
        'Ingenieurvergleich zwischen trockenem PVD-Aufdampfen mit UV-Schutzlack und klassischer nasschemischer Verchromung.',
      sideALabel: 'Vakuummetallisierung PVD (STANIAX)',
      sideBLabel: 'Nasschemische Galvanik (Cr6+ / Cr3+)',
      directAnswerQuestion: 'Wann ist die PVD-Vakuummetallisierung der Galvanik wirtschaftlich und technisch überlegen?',
      directAnswer:
        'Bei der Vakuummetallisierung wird im Hochvakuum eine 50-150 nm starke Aluminiumschicht aufgedampft und mit 15-25 µm UV-Schutzlack versiegelt - völlig frei von Chrombädern und leitfähigen Kunststoffen. Sie eignet sich für ABS, PC, PP, PA sowie Glas, erfüllt REACH vollständig und senkt Serienkosten gegenüber Galvanik um 30-50 %.',
      verdictTitle: 'Technisches Fazit für Industriekunden',
      verdictSummary:
        'Für rund 85 % aller Kosmetikverschlüsse, Glasflakons, Scheinwerferreflektoren und Innenraumblenden ist das UV-versiegelte PVD-Verfahren wirtschaftlicher, umweltkonform und farblich flexibel (Chrom, Gold, Kupfer, Smoke).',
      comparisonRows: [
        {
          parameter: 'Beschichtungsprinzip',
          optionA: 'Thermisches Verdampfen von Reinaluminium bei 10⁻⁴ mbar + UV-Lackaufbau',
          optionB: 'Chromschwefelsäure-Beizen, Palladium-Aktivierung und Cu/Ni/Cr-Elektrolyse',
        },
        {
          parameter: 'Geeignete Werkstoffe',
          optionA: 'ABS, PC, PP (Plasmavorbehandlung), PA6, PMMA, PS, PET, Glas, Keramik',
          optionB: 'Nahezu ausschließlich spezielle Galvanik-Typen von ABS und ABS/PC',
        },
        {
          parameter: 'Gesamtschichtdicke',
          optionA: '15-30 µm (Grundlack + 0,05-0,15 µm Al + UV-/2K-PUR-Decklack)',
          optionB: '20-45 µm metallischer Schichtaufbau aus Kupfer, Nickel und Chrom',
        },
        {
          parameter: 'Maßhaltigkeit an Gewinden',
          optionA: 'Kein Verkleben feiner Kosmetikgewinde und Schnapphaken',
          optionB: 'Kantenaufbau kann enge Passungen beeinträchtigen',
        },
        {
          parameter: 'REACH & Umweltauflagen',
          optionA: 'Trockenprozess ohne Schwermetallabwasser, 100 % REACH-konform',
          optionB: 'Aufwendige Abwasseraufbereitung und Chrom(VI)-Regulatorik',
        },
        {
          parameter: 'Farbauswahl',
          optionA: 'Spiegelchrom, Gold, Roségold, Kupfer, Graphit, rauchige Lasur',
          optionB: 'Überwiegend Glanzchrom, Satinchrom oder dunkler Nickelton',
        },
        {
          parameter: 'Durchlaufzeit B2B-Serien',
          optionA: '5-10 Werktage in Hochvakuumkammern (Express-Muster 2-3 Tage)',
          optionB: '10-21 Werktage in Durchlauf-Galvanikstraßen',
        },
      ],
      sections: [
        {
          heading: 'Haftungsphysik auf PP, Polyamid, Polycarbonat und Glasflakons',
          paragraphs: [
            'Die klassische Kunststoffgalvanik beruht auf dem chemischen Herauslösen der Butadienphase aus ABS mittels Chromschwefelsäure, um mechanische Verankerungspunkte für chemisches Nickel zu schaffen. Nicht-ABS-Kunststoffe wie Polypropylen, Polyamid oder Glas besitzen diese Struktur nicht.',
            'Im STANIAX-Werk in Józefów bei Warschau schließen wir diese Lücke durch Atmosphärendruck-Plasma, Flammvorbehandlung und angepasste Haftprimer - so erreichen wir auf sämtlichen Industriesubstraten Gitterschnittkennwert 0 nach ISO 2409.',
          ],
          bullets: [
            'Keine Spannungsrisskorrosion an dünnwandigen Spritzgussteilen',
            '96-%-Ethanolbeständigkeit des UV-Decklacks für Parfümflakons',
            'Hohe Farb- und Glanzgradkonstanz bei Gold- und Chromserien',
          ],
        },
        {
          heading: 'Wirtschaftlichkeit bei Klein-, Mittel- und Variantenserien',
          paragraphs: [
            'Galvanikbäder verlangen hohe Mindestdurchsätze und teure Gestellanpassungen pro Teilgeometrie. Bei Losgrößen von einigen Hundert bis 100 000 Stück pro Jahr verursachen Rüstkosten oft unrentable Stückpreise.',
            'Planetenaufnahmen in industriellen Hochvakuumkammern ermöglichen bei STANIAX wirtschaftliche Abmusterungen ebenso wie termingerechte Just-in-Time-Serienlieferungen nach Deutschland, Österreich und in die Schweiz.',
          ],
        },
        {
          heading: 'Wann bleibt die Galvanik im Vorteil?',
          paragraphs: [
            'Bei stark beanspruchten Außenanbauteilen wie Nutzfahrzeug-Emblemen unter Steinschlag oder Sanitärarmaturen unter Dauerkontakt mit Scheuermitteln bietet eine 35 µm dicke Nickel-Chrom-Metallschicht eine höhere mechanische Abriebhärte.',
            'Für optische Reflektoren (>92 % Reflexion), Gewichtseinsparung im Innenraum und dekorative Verpackungen punktet hingegen die UV-versiegelte PVD-Metallisierung eindeutig.',
          ],
        },
      ],
      whenChooseATitle: 'PVD bei STANIAX wählen, wenn:',
      whenChooseA: [
        'Bauteile aus PC, PP, PA, Glas oder dünnwandigem ABS bestehen.',
        'Gold-, Kupfer-, Rauchchrom-Töne oder >92 % Lichtreflexion gefragt sind.',
        'REACH-Konformität ohne Chrom(VI) und 3-7 Tage Lieferzeit wichtig sind.',
      ],
      whenChooseBTitle: 'Galvanik erwägen, wenn:',
      whenChooseB: [
        'Starke Außenbelastung durch Steinschlag oder Metallabrieb vorliegt.',
        'Ausschließlich galvanisierbares ABS mit dicken Wandstärken eingesetzt wird.',
        'Millionenstückzahlen ohne Farbwechsel gefertigt werden.',
      ],
      faq: [
        {
          q: 'Ist PVD-Vakuummetallisierung für Kunststoff günstiger als Verchromen im Tauchbad?',
          a: 'In mittleren Losgrößen und bei Varianten in Gold oder Chrom senkt PVD die Stückkosten meist um 30-50 %, da keine Palladium-Bäder oder Abwassergebühren anfallen.',
        },
        {
          q: 'Hält PVD auf Polypropylen und Polyamid dauerhaft?',
          a: 'Ja, nach Plasmaaktivierung und speziellem Haftprimer erreicht der 3-Schicht-PVD-Aufbau die beste Haftungsnote Gt 0 nach ISO 2409.',
        },
        {
          q: 'Wie schnell liefert STANIAX Serienaufträge nach Deutschland?',
          a: 'Die Produktionszeit beträgt 5-10 Werktage (Express-Muster 2-3 Werktage); der palettierte Rückversand in den DACH-Raum dauert je nach Region weitere 2-3 Werktage.',
        },
        {
          q: 'Können Musterteile vor der Serienfreigabe bemustert werden?',
          a: 'Ja, wir metallisieren Einzelmuster aus dem Erstmusterwerkzeug inklusive Prüfprotokoll zur Schichthaftung und Farbabweichung.',
        },
      ],
      relatedLinks: [
        { label: 'Leistung: Vakuummetallisierung B2B', path: '/de/vakuummetallisierung' },
        { label: 'Leistung: Kunststoff verchromen', path: '/de/kunststoff-verchromen' },
        { label: 'Materialmatrix: ABS beschichten', path: '/de/loesungen/abs-kunststoff-beschichtung' },
        { label: 'Vergleich: PVD vs. Spritzchrom', path: '/de/vergleich/vakuummetallisierung-vs-spritzchrom' },
      ],
      breadLabel: 'PVD vs. Galvanik',
    },
  },

  'pvd-vs-spray-chrome': {
    pl: {
      metaTitle: 'Metalizacja PVD vs chromowanie natryskowe | STANIAX',
      metaDesc:
        'PVD vs chromowanie natryskowe (srebrzenie chemiczne): brak żółknięcia AgNO3, odporność termiczna do 220 °C, twardość lakieru UV oraz koszty serii przemysłowych.',
      badge: 'Analiza jakości powłok',
      h1: 'Metalizacja próżniowa PVD vs chromowanie natryskowe',
      subtitle:
        'Dlaczego przemysł automotive i beauty zastępuje ręczne srebrzenie chemiczne stabilnym procesem próżniowego naparowania aluminium z lakierem UV.',
      sideALabel: 'Metalizacja próżniowa PVD (Aluminium 99,99%)',
      sideBLabel: 'Chromowanie natryskowe (Srebrzenie AgNO3)',
      directAnswerQuestion: 'Czym różni się metalizacja próżniowa PVD od chromowania natryskowego?',
      directAnswer:
        'Metalizacja próżniowa PVD osadza czyste aluminium (99,99%) w próżni i utrwala je sieciowanym lakierem UV, co wyklucza żółknięcie warstwy metalicznej i znosi temperatury do 220 °C na odbłyśnikach. Chromowanie natryskowe opiera się na redukcji soli srebra (AgNO3) w atmosferze otwartej - jest podatne na utlenianie, żółknięcie UV i niską powtarzalność w produkcji seryjnej.',
      verdictTitle: 'Wnioski technologiczne dla B2B i motoryzacji',
      verdictSummary:
        'Chromowanie natryskowe bywa rozwiązaniem doraźnym dla dużych detali dekoracyjnych (np. felg pokazowych lub rzeźb), których nie można włożyć do komory. Dla reflektorów, kosmetyków i seryjnych elementów przemysłowych PVD zapewnia wielokrotnie wyższą stabilność barwy, odporność termiczną i 2-3× niższy koszt w serii.',
      comparisonRows: [
        {
          parameter: 'Metal tworzący lustro',
          optionA: 'Aluminium wysokiej czystości 99,99% (stabilne, nieżółknące)',
          optionB: 'Srebro metaliczne wytrącane z azotanu srebra AgNO3',
        },
        {
          parameter: 'Skłonność do żółknięcia',
          optionA: 'Brak - Al w połączeniu z lakierem UV stabilizowanym HALS nie ciemnieje',
          optionB: 'Wysoka wrażliwość Ag na związki siarki, promieniowanie UV i zarysowania',
        },
        {
          parameter: 'Odporność termiczna',
          optionA: 'Do 200-220 °C (z odpowiednim podkładem krzemoorganicznym)',
          optionB: 'Zazwyczaj 80-110 °C - warstwa lakieru 2K puchnie przy temperaturze ksenonu',
        },
        {
          parameter: 'Jednorodność krawędzi i wgłębień',
          optionA: 'Równomierna warstwa 50-150 nm na planetarnych karuzelach obrotowych',
          optionB: 'Ryzyko zacieków, szarych cieni przy kątach prostych i plam solnych',
        },
        {
          parameter: 'Kontrola jakości i odpad',
          optionA: 'Zamknięty cykl próżniowy o lustrzanym połysku i wysokiej powtarzalności',
          optionB: 'Wysoka zależność od operatora i wilgotności powietrza (duży odsetek poprawek)',
        },
        {
          parameter: 'Ekonomia produkcji',
          optionA: 'Niski koszt jednostkowy przy partiach od 50 do 100 000 szt./mies.',
          optionB: 'Drogie odczynniki srebra oraz wysoka pracochłonność płukania wodą DI',
        },
      ],
      sections: [
        {
          heading: 'Dlaczego srebrzenie natryskowe nie nadaje się na odbłyśniki reflektorów?',
          paragraphs: [
            'Wewnątrz reflektora H7 lub soczewki Bi-Xenon temperatura przy ognisku żarówki przekracza 150 °C, a emisja UV oraz wilgoć kondensacyjna atakują powłokę lustrzaną od pierwszej godziny pracy.',
            'Natryskowe srebrzenie chemiczne polega na oprysku detalu roztworem azotanu srebra i reduktora, a następnie zabezpieczeniu go klasycznym lakierem samochodowym. W takich warunkach lakier nie wytrzymuje promieniowania cieplnego palnika i matowieje lub odspaja się płatami. Dlatego w STANIAX każdy odbłyśnik przechodzi proces próżniowego naparowania aluminium 99,99% na podkładzie wysokotemperaturowym.',
          ],
          bullets: [
            'Brak żółknięcia srebra i brak rozpuszczania warstwy pod wpływem ciepła lampy',
            'Współczynnik odbicia kierunkowego przekraczający 92%',
            'Trwałe zabezpieczenie napylonego metalu bezbarwną warstwą ochronną UV',
          ],
        },
        {
          heading: 'Koszty jednostkowe i czystość linii w sektorze beauty oraz AGD',
          paragraphs: [
            'Producenci flakonów, pompek i nasadek perfumeryjnych wymagają identycznego blasku na pięćdziesięciu tysiącach sztuk z rzędu. Ręczne płukanie wodą demineralizowaną i dwuskładnikowy natrysk soli srebra generują zacieki solne w mikrorowkach oraz nieprzewidywalny rozrzut kolorystyczny.',
            'Zautomatyzowane przygotowanie powierzchni wraz z lakierowaniem bazowym i komorową metalizacją próżniową w Józefowie minimalizuje brakowość poniżej 1% i gwarantuje powtarzalną fakturę lustra w całym wolumenie.',
          ],
        },
        {
          heading: 'Kiedy ma zastosowanie chromowanie natryskowe?',
          paragraphs: [
            'Jedynym racjonalnym obszarem dla srebrzenia natryskowego pozostają gabaryty wykraczające poza gabaryty komór próżniowych, np. jednoczęściowe zderzaki tuningowe, rzeźby wystawiennicze lub wielkoformatowe elementy architektoniczne o pojedynczym nakładzie.',
            'Wszystkie komponenty mieszczące się w naszych komorach wysokiej próżni - od detali samochodowych po kapsle i obudowy elektroniki - zyskują na trwałości oraz cenie dzięki metalizacji PVD.',
          ],
        },
      ],
      whenChooseATitle: 'Wybierz metalizację PVD, gdy:',
      whenChooseA: [
        'Metalizujesz odbłyśniki reflektorów, kapsle kosmetyczne lub podzespoły AGD/automotive.',
        'Wymagasz braku żółknięcia, stałej temperatury pracy i odporności na alkohol/UV.',
        'Zależy Ci na niskiej cenie jednostkowej i powtarzalności w produkcji seryjnej.',
      ],
      whenChooseBTitle: 'Rozważ natrysk srebra tylko, gdy:',
      whenChooseB: [
        'Element ma skrajnie duży gabaryt przekraczający wymiar komory próżniowej (np. cały zderzak).',
        'Jest to pojedyncza sztuka ekspozycyjna bez obciążeń termicznych.',
        'Tolerujesz manualną zmienność odcienia przy krawędziach.',
      ],
      faq: [
        {
          q: 'Czy metalizacja PVD daje takie samo lustro jak chrom natryskowy?',
          a: 'Lustro z czystego aluminium PVD osiąga ponad 92% odbicia przy idealnym wypoziomowaniu lakierem bazowym UV i nie posiada żółtawego zabarwienia typowego dla starzejącego się srebra.',
        },
        {
          q: 'Jaka jest maksymalna wielkość detalu do komory PVD w STANIAX?',
          a: 'Dobieramy oprzyrządowanie komory indywidualnie pod geometrię detalu - zapraszamy do przesłania rysunku STEP/DXF lub wymiarów gabarytowych.',
        },
        {
          q: 'Dlaczego niektóre warsztaty malują odbłyśniki chromem w sprayu zamiast PVD?',
          a: 'Lakiery „efekt chromu” w aerozolu zawierają jedynie drobny pył metaliczny w żywicy i dają ok. 40-55% rozproszonego odbicia, przez co światło drogowe traci skupienie i nie przechodzi przeglądu.',
        },
        {
          q: 'Czy PVD wymaga zabezpieczenia dodatkowym lakierem wierzchnim?',
          a: 'Na detalach dekoracyjnych (kapsle, plastiki, szkło) zawsze nakładamy twardy lakier UV lub 2K PU; natomiast na optyce wewnętrznej reflektorów stosujemy cienkowarstwowe zabezpieczenie ochronne dobrane tak, aby nie tłumić odbicia światła.',
        },
      ],
      relatedLinks: [
        { label: 'Usługa: Metalizacja próżniowa PVD', path: '/metalizacja-prozniowa' },
        { label: 'Usługa: Regeneracja odbłyśników', path: '/regeneracja-reflektorow' },
        { label: 'Usługa: Lakierowanie natryskowe B2B', path: '/lakierowanie-natryskowe' },
        { label: 'Poradnik: Jak metalizacja zmienia właściwości', path: '/news/partnerstwo-z-wiodacym-producentem-lotniczym' },
      ],
      breadLabel: 'PVD vs Chrom natryskowy',
    },
    en: {
      metaTitle: 'PVD Vacuum Metallization vs Spray Chrome | STANIAX',
      metaDesc:
        'Vacuum metallization PVD vs spray-on chemical chrome (AgNO3): zero yellowing, 220°C thermal durability for reflectors, and scalable B2B batch repeatability.',
      badge: 'Surface Durability Audit',
      h1: 'Vacuum Metallization PVD vs Spray-On Chrome',
      subtitle:
        'Why industrial buyers and headlamp rebuilders choose high-vacuum aluminum PVD over reactive silver-nitrate spray chrome.',
      sideALabel: 'PVD Vacuum Metallization (99.99% Al)',
      sideBLabel: 'Spray Chrome (Chemical Silver AgNO3)',
      directAnswerQuestion: 'What is the main difference between PVD vacuum metallization and spray-on chrome?',
      directAnswer:
        'Vacuum metallization deposits 99.99% pure aluminum inside a sealed 10⁻⁴ mbar vacuum chamber with thermal stability up to 220 °C and zero yellowing. Spray-on chrome reduces silver nitrate (AgNO3) in open air over 2K primer, making it prone to UV yellowing, sulfide tarnishing, thermal blistering inside lamps, and high unit labor cost.',
      verdictTitle: 'Industrial & Optical Engineering Verdict',
      verdictSummary:
        'Spray silver remains relevant only for oversized one-off props exceeding 1.2 meters. For reflectors, cosmetic closures, and B2B plastic parts, vacuum metallization delivers superior thermal resistance, <1% scrap rates, and 2-3× lower serial cost.',
      comparisonRows: [
        {
          parameter: 'Reflective Metal Layer',
          optionA: '99.99% pure evaporated aluminum (bright white spectrum, non-tarnishing)',
          optionB: 'Chemically precipitated silver from AgNO3 wet solutions',
        },
        {
          parameter: 'UV & Tarnish Resistance',
          optionA: 'Color-stable with HALS-stabilized UV clearcoats and high repeatability',
          optionB: 'High tendency toward yellow tinting and silver-sulfide darkening',
        },
        {
          parameter: 'Operating Temperature Limit',
          optionA: '200-220 °C with high-temp silicone/epoxy reflector basecoats',
          optionB: 'Typically softens or yellows above 90-110 °C',
        },
        {
          parameter: 'Uniformity in Deep Recesses',
          optionA: 'Uniform planetary rotation inside industrial high-vacuum chamber',
          optionB: 'Prone to runs, DI-water stains, and shadowed corners',
        },
        {
          parameter: 'Serial Repeatability',
          optionA: 'Automated cycle parameters with >92% directional light reflectance',
          optionB: 'Operator- and humidity-dependent manual spraying',
        },
        {
          parameter: 'Serial Unit Cost',
          optionA: 'Low unit cost across batches from 50 to 100,000+ pcs',
          optionB: 'High silver chemistry & multi-stage manual rinsing expense',
        },
      ],
      sections: [
        {
          heading: 'Why Spray-On Chrome Fails Inside Xenon and H7 Headlamp Projectors',
          paragraphs: [
            'Projector bowls around H7 halogen or D1S/D3S HID burners routinely reach 150-190 °C alongside intense internal UV exposure. Thick organic 2K automotive clearcoats used in spray-silver systems outgas and yellow rapidly under projector heat.',
            'At STANIAX, headlight reflectors undergo thermal stripper cleaning, specialized high-temp primer curing, and direct aluminum vacuum deposition capped with a thin protective topcoat - restoring >92% light reflection with zero optical distortion.',
          ],
          bullets: [
            'No yellow amber shift or clearcoat peeling under continuous bulb heat',
            'Direct light reflection >92% verified on rebuilt OEM projectors',
            '3-5 year coating durability backed by industrial quality control',
          ],
        },
        {
          heading: 'Batch Consistency for Cosmetic Packaging & Consumer Electronics',
          paragraphs: [
            'Perfume caps and automotive dashboard bezels require batch-to-batch uniformity under supermarket and showroom LEDs. Wet spray-chrome introduces micro-pinholes from trapped moisture and visible silver clouding on sharp edges.',
            'UV-cured vacuum metallization encapsulates the aluminum film instantly after chamber cycle completion, yielding glass-like gloss (>92 GU) and clean cosmetic finishes free of watermarks.',
          ],
        },
      ],
      whenChooseATitle: 'Choose PVD Vacuum Metallization when:',
      whenChooseA: [
        'Parts operate under heat (headlight reflectors, lighting luminaires) or UV.',
        'You manufacture series of 50 to 100,000+ closures, bezels, or bottles.',
        'Consistent mirror reflectance and predictable B2B pricing are critical.',
      ],
      whenChooseBTitle: 'Spray chrome is only practical when:',
      whenChooseB: [
        'An oversized architectural display or full bumper exceeds vacuum chamber dimensions.',
        'The part is strictly decorative indoors with zero heat load.',
        'Only a single prototype prop needs temporary silver sheen.',
      ],
      faq: [
        {
          q: 'Is vacuum metallized aluminum brighter than spray chrome?',
          a: 'Yes, vacuum-deposited 99.99% aluminum reflects across the full visible spectrum neutrally above 92% without the warm yellow undertone characteristic of silver coatings.',
        },
        {
          q: 'Why does chrome spray paint from a can fail on reflectors?',
          a: 'Aerosol chrome paints suspend metallic flakes in resin, scattering light instead of focusing it (~45% reflectance vs >92% in true PVD vacuum deposition).',
        },
        {
          q: 'What is STANIAX maximum chamber size?',
          a: 'Our industrial rotary chambers accommodate everything from small closures to automotive trims and luminaire reflectors - send us part dimensions for fixture verification.',
        },
        {
          q: 'Can spray-chromed parts that turned yellow be stripped and re-coated with PVD?',
          a: 'On metal or heat-resistant plastic reflectors we can typically strip failed aftermarket paint, re-prime, and apply authentic vacuum aluminum metallization.',
        },
      ],
      relatedLinks: [
        { label: 'Service: PVD Vacuum Metallization', path: '/en/vacuum-metallisation' },
        { label: 'Service: Reflector Restoration', path: '/en/headlight-reflector-restoration' },
        { label: 'Service: Industrial Spray Painting', path: '/en/spray-painting' },
        { label: 'Pricing: Headlight Restoration Cost', path: '/en/headlight-restoration-pricing' },
      ],
      breadLabel: 'PVD vs Spray Chrome',
    },
    de: {
      metaTitle: 'PVD-Metallisierung vs. Spritzchrom | STANIAX',
      metaDesc:
        'Vakuummetallisierung PVD vs. chemisches Spritzchrom (AgNO3): kein Vergilben, bis 220 °C hitzefest für Reflektoren und reproduzierbare B2B-Serienqualität.',
      badge: 'Qualitäts- & Kostenvergleich',
      h1: 'PVD-Metallisierung im Hochvakuum vs. Spritzchrom-Verfahren',
      subtitle:
        'Warum Serienhersteller und Scheinwerferbetriebe echtes Vakuum-Aluminium PVD dem nasschemischen Silbernitrat-Spritzlack vorziehen.',
      sideALabel: 'Vakuummetallisierung PVD (99,99 % Al)',
      sideBLabel: 'Spritzchrom (Silbernitrat AgNO3)',
      directAnswerQuestion: 'Warum ist PVD-Vakuummetallisierung haltbarer als chemisches Spritzchrom?',
      directAnswer:
        'Bei der PVD-Vakuummetallisierung wird Reinaluminium (99,99 %) bei 10⁻⁴ mbar aufgedampft - thermisch belastbar bis 220 °C und vergilbungsfrei unter UV-Schutzlack. Spritzchrom nutzt nasschemisches Silbernitrat (AgNO3), das unter UV-Strahlung, Wärme oder Schwefelkontakt schnell vergilbt und in Serien hohe Ausschussquoten verursacht.',
      verdictTitle: 'Technisches Urteil für B2B & Kfz-Optik',
      verdictSummary:
        'Spritzchrom taugt primär für übergroße Messeobjekte über 1,2 Meter. Für Scheinwerferreflektoren, Flakonverschlüsse und Kunststoffblenden liefert PVD reproduzierbaren Spiegelglanz (>92 %) und 2-3× geringere Serienkosten.',
      comparisonRows: [
        {
          parameter: 'Reflektierendes Metall',
          optionA: 'Aufgedampftes Reinaluminium 99,99 % (farbneutral, stabil)',
          optionB: 'Nasschemisch reduziertes Silber aus Silbernitrat (AgNO3)',
        },
        {
          parameter: 'Vergilbungsneigung',
          optionA: 'Keine - UV-stabilisierter Decklack verhindert Verfärbungen',
          optionB: 'Hoch - Silberoxid- und Sulfidbildung unter Licht & Wärme',
        },
        {
          parameter: 'Temperaturbeständigkeit',
          optionA: 'Bis 200-220 °C auf Reflektor-Spezialprimern',
          optionB: 'Meist auf 80-110 °C begrenzt, Klarlack neigt zur Blasenbildung',
        },
        {
          parameter: 'Reproduzierbarkeit',
          optionA: 'Geregelte Hochvakuumprozesse mit hoher Chargenkonstanz',
          optionB: 'Stark abhängig von Luftfeuchtigkeit und Handführung',
        },
        {
          parameter: 'Stückkosten in Serie',
          optionA: 'Wirtschaftlich ab 50 bis über 100 000 Stück pro Monat',
          optionB: 'Hoher Chemie- und Spülwasseraufwand je Einzelteil',
        },
      ],
      sections: [
        {
          heading: 'Warum Spritzchrom im Xenon- oder H7-Scheinwerfer versagt',
          paragraphs: [
            'Im Brennraum moderner Projektorlinsen herrschen dauerhaft Temperaturen über 150 °C. Zweikomponenten-Klarlacke eines Spritzchrom-Aufbaus beginnen unter dieser thermischen Last zu vergilben und beeinträchtigen die Hell-Dunkel-Grenze.',
            'Bei STANIAX wird der Reflektor entlackt, mit hitzebeständigem Spezialprimer egalisiert, im Hochvakuum mit 99,99 % Aluminium bedampft und abschließend mit einer dünnen Schutzschicht versiegelt - für dauerhafte >92 % Lichtreflexion.',
          ],
          bullets: [
            'Kein Ausgasen und kein Anlaufen der Streuscheibe von innen',
            'Konstante Bündelung des Lichtkegels nach HU/TÜV-Vorgaben',
            '3 bis 5 Jahre Haltbarkeit der PVD-Neuverspiegelung',
          ],
        },
        {
          heading: 'Prozesssicherheit für Verpackungen und Sichtblenden',
          paragraphs: [
            'Kappen und Flakons der Kosmetikindustrie verlangen null Läufer in Feingewinden und reproduzierbaren Glanz (>92 GU). Im Vakuumprozess schließen UV-Lacke die Aluminiumschicht staubfrei und wischfest ab - ganz ohne DI-Wasserflecken.',
            'Da die Bedampfung im geschlossenen Hochvakuum von 10⁻⁴ mbar erfolgt, entstehen keinerlei chemische Silberniederschläge in Hinterschneidungen oder Rastnasen. Jede Charge durchläuft im Werk Józefów die Gitterschnittprüfung nach ISO 2409 (Klasse Gt 0) sowie die strenge Referenzmusterkontrolle für Gold-, Kupfer- und Rauchchrom-Nuancen.',
          ],
        },
      ],
      whenChooseATitle: 'PVD wählen, wenn:',
      whenChooseA: [
        'Reflektoren, Leuchten oder hitzebelastete Kunststoffteile beschichtet werden.',
        'Konstante Serienqualität ohne Vergilben und mit kurzen Taktzeiten zählt.',
        'Bauteile für die Aufnahme auf rotierenden Vakuumgestellen ausgelegt sind.',
      ],
      whenChooseBTitle: 'Spritzchrom nur erwägen, wenn:',
      whenChooseB: [
        'Übergroße Großskulpturen das Volumen einer Vakuumkammer überschreiten.',
        'Es sich um kalte Innenraum-Einzelstücke ohne Langzeitanforderung handelt.',
      ],
      faq: [
        {
          q: 'Warum reicht Chrom-Effektspray für Scheinwerferreflektoren nicht aus?',
          a: 'Sprühlacke enthalten in Bindemittel eingebettete Metallpigmente und erreichen nur ca. 45 % diffuse Reflexion statt >92 % spiegelnder PVD-Aluminiumreflexion.',
        },
        {
          q: 'Welche Maximalmaße fasst Ihre Vakuumkammer in Józefów?',
          a: 'Unsere Hochvakuumanlagen verarbeiten sowohl kompakte Kleinteile auf Drehgestellen als auch größere Gehäuse und Reflektoren - senden Sie uns Ihre Bauteilmaße.',
        },
        {
          q: 'Können verbrannte oder fehlversuchte Reflektoren gerettet werden?',
          a: 'Sofern die Kunststoff- oder Metallschale thermisch nicht durchgeschmolzen ist, entfernen wir Altlacke und tragen einen frischen PVD-Aufbau auf.',
        },
        {
          q: 'Wie erfolgt die UV-Versiegelung auf Dekor-Kunststoffen?',
          a: 'Unmittelbar nach dem Bedampfen applizieren wir einen hochvernetzten UV-Klarlack mit ISO 2409 Gitterschnitt Gt 0.',
        },
      ],
      relatedLinks: [
        { label: 'Leistung: Vakuummetallisierung', path: '/de/vakuummetallisierung' },
        { label: 'Leistung: Reflektor neu bedampfen', path: '/de/scheinwerfer-reflektor-aufbereitung' },
        { label: 'Leistung: Spritzlackierung B2B', path: '/de/spritzlackierung' },
        { label: 'Preise: Scheinwerfer Aufbereitung', path: '/de/scheinwerfer-aufbereitung-preise' },
      ],
      breadLabel: 'PVD vs. Spritzchrom',
    },
  },

  'reflector-vs-aftermarket': {
    pl: {
      metaTitle: 'Regeneracja odbłyśnika vs nowy zamiennik | STANIAX',
      metaDesc:
        'Wypalony odbłyśnik Bi-Xenon/H7: regeneracja próżniowa PVD od 150 zł w STANIAX kontra tani zamiennik Depo/TYC. Porównanie luxów, homologacji ECE i oszczędności.',
      badge: 'Poradnik decyzyjny kierowcy i warsztatu',
      h1: 'Regeneracja odbłyśnika PVD vs zakup nowego zamiennika lampy',
      subtitle:
        'Dlaczego oryginalna lampa Hella, Valeo lub Bosch po metalizacji próżniowej w STANIAX świeci lepiej i kosztuje ułamek ceny zamiennika.',
      sideALabel: 'Regeneracja OEM w PVD (STANIAX od 150 zł)',
      sideBLabel: 'Nowy tani zamiennik (TYC / Depo / no-name)',
      directAnswerQuestion: 'Czy lepiej zregenerować oryginalny odbłyśnik metodą PVD czy kupić tani zamiennik lampy?',
      directAnswer:
        'Regeneracja oryginalnego odbłyśnika OEM metodą PVD w STANIAX (koszt od 150-250 zł/szt.) przywraca fabryczne >92% odbicia światła przy zachowaniu oryginalnej geometrii wiązki i homologacji ECE. Tanie zamienniki reflektorów (700-1800 zł/szt.) mają miękką optykę o gorszej linii światłocienia, słabsze silniczki poziomowania i często parują w pierwszym sezonie.',
      verdictTitle: 'Werdykt optyczny i finansowy (oszczędność 60-80%)',
      verdictSummary:
        'Zachowanie oryginalnej obudowy Hella, Valeo, Koito lub AL (Automotive Lighting) po profesjonalnej metalizacji odbłyśnika przewyższa jakością rozkładu światła budżetowe zamienniki oraz eliminuje problemy z adaptacyjnym skrętem AFS i kontrolką błędów na desce.',
      comparisonRows: [
        {
          parameter: 'Koszt całkowity na jedną lampę',
          optionA: 'od 150-250 zł (dostarczony odbłyśnik w STANIAX); ok. 350-700 zł pełna naprawa z warsztatem',
          optionB: '600-1 800 zł zamiennik lub 3 500-9 000 zł nowy reflektor ASO',
        },
        {
          parameter: 'Precyzja geometrii soczewki i odcięcia',
          optionA: 'Oryginalna forma OEM zaprojektowana na ławach fotometrycznych producenta',
          optionB: 'Często zniekształcony profil paraboli - rozmyte pobocze i olśnienie',
        },
        {
          parameter: 'Współczynnik odbicia światła',
          optionA: 'Wysoki współczynnik odbicia po próżniowym napyleniu Al z warstwą ochronną UV',
          optionB: 'Zależny od partii (75-85%), cienka warstwa w tanich kopiach',
        },
        {
          parameter: 'Zgodność z AFS, przetwornicami i komputerem',
          optionA: '100% plug & play - zachowujesz własne sterowniki i moduły LED/Xenon',
          optionB: 'Częsty brak modułów, błędy doświetlania zakrętów lub luźne gniazda',
        },
        {
          parameter: 'Szczelność klosza i odporność na parowanie',
          optionA: 'Zachowanie fabrycznej obudowy OEM po ponownym uszczelnieniu w warsztacie',
          optionB: 'Cienkie uszczelki odlewane niskim kosztem, częsta kondensacja pary',
        },
        {
          parameter: 'Dostępność do aut zabytkowych (Youngtimer)',
          optionA: 'Możliwość odnowienia rzadkich odbłyśników stalowych i BMC bez zamiennika',
          optionB: 'Brak zamienników lub wyłącznie zniszczone używane lampy z allegro/eBay',
        },
      ],
      sections: [
        {
          heading: 'Pułapka taniego zamiennika: oszczędność tylko pozornie mniejsza od ASO',
          paragraphs: [
            'Gdy na przeglądzie diagnostycznym wychodzi wypalony odbłyśnik w Audi A4, BMW E60, Volvo XC90 lub Mercedesie klasy E, wielu kierowców staje przed wyborem między drogą lampą w ASO a nowym zamiennikiem z internetu.',
            'Problem polega na tym, że zamiennik wykorzystuje tańsze tworzywo klosza bez wielowarstwowego twardego powleczenia (hard-coat), co powoduje zmatowienie po 18-24 miesiącach. Wewnątrz często brakuje odpowiedniego odprowadzenia ciepła, a silniczki regulacji wysokości potrafią się zacierać.',
          ],
          bullets: [
            'Zachowana oryginalna naklejka homologacyjna ECE bez ryzyka na stacji SKP',
            'Brak różnicy odcienia czy szczelin błotnika między lewą a prawą lampą',
            'Odzysk nawet +250% ilości światła na drodze względem wypalonego ksenonu',
          ],
        },
        {
          heading: 'Co z lampami używanymi z demontażu?',
          paragraphs: [
            'Zakup używanego reflektora z rynku wtórnego obarczony jest ukrytą wadą: po 8-12 latach eksploatacji niemal każdy odbłyśnik z soczewką H7 lub Bi-Xenon jest już w 50-80% zmatowiały nad ogniskiem żarówki. Kupując „igłę z anglii lub allegro”, kierowca nierzadko płaci 800 zł za identycznie wypalony element albo za lampę z angielskim profilem asymetrii świecącą w lewo.',
            'Regeneracja oryginalnych odbłyśników w zakładzie STANIAX metodą próżniową rozwiązuje problem u źródła i zapewnia trwałość efektu do 5 lat (3-5 lat eksploatacji).',
          ],
        },
        {
          heading: 'Oldtimery i reflektory motocyklowe bez części zamiennych',
          paragraphs: [
            'W samochodach klasycznych, motocyklach oraz maszynach rolniczych i ciężarowych 24V (Volvo FH, Scania, MAN) metalowe lub termoutwardzalne czasze ulegają korozji przez mikronieszczelności. W Józefowie odnawiamy odbłyśniki z blachy stalowej, mosiądzu oraz BMC/UP, przywracając fabryczny snop światła bez przeróbek instalacji.',
          ],
        },
      ],
      whenChooseATitle: 'Wybierz regenerację OEM w STANIAX, gdy:',
      whenChooseA: [
        'Twoje oryginalne klosze i obudowy nie są mechanicznie rozbite po kolizji.',
        'Samochód ma ksenon skrętny AFS, Bi-LED lub rzadkie lampy bez dobrych zamienników.',
        'Chcesz odzyskać fabryczne światło >92% przy koszcie 150-250 zł za odbłyśnik.',
      ],
      whenChooseBTitle: 'Rozważ nowy zamiennik / ASO tylko, gdy:',
      whenChooseB: [
        'Obudowa reflektora uległa całkowitemu połamaniu w wypadku i nie ma zaczepów.',
        'Klosz poliwęglanowy ma głębokie pęknięcia strukturalne na wylot.',
        'Szkoda rozliczana jest bezgotówkowo z polisy AC/OC w ASO.',
      ],
      faq: [
        {
          q: 'Czy policja albo stacja diagnostyczna akceptuje regenerowany odbłyśnik?',
          a: 'Tak, ponieważ przywracamy fabryczną powłokę odbijającą dokładnie na oryginalnym, homologowanym reflektorze bez zmiany konstrukcji źródła światła czy wiązki.',
        },
        {
          q: 'Jak długo trwa regeneracja z wysyłką kurierską do STANIAX?',
          a: 'Proces regeneracji w naszym zakładzie w Józefowie zajmuje standardowo 5-7 dni roboczych dla zleceń indywidualnych i warsztatowych z całej Polski.',
        },
        {
          q: 'Czy regenerujecie odbłyśniki również przy zachowaniu klosza w całości?',
          a: 'W STANIAX wykonujemy metalizację i powłoki na dostarczonych odbłyśnikach (od 150 zł/szt.), natomiast wyjęcie lampy z auta i rozklejenie obudowy realizuje wyspecjalizowany warsztat samochodowy.',
        },
        {
          q: 'Czy odbłyśnik po metalizacji próżniowej wytrzyma mocne żarówki H7 i D1S?',
          a: 'Tak. Stosujemy podkład o wysokiej stabilności cieplnej i czystą warstwę Al 99,99%, odporną na obciążenie termiczne palników ksenonowych oraz halogenów 55W.',
        },
      ],
      relatedLinks: [
        { label: 'Cennik regeneracji reflektorów', path: '/cennik-regeneracji-reflektorow' },
        { label: 'Usługa: Regeneracja odbłyśników', path: '/regeneracja-reflektorow' },
        { label: 'Warszawa & Józefów - obsługa lokalna', path: '/regeneracja-reflektorow/warszawa-jozefow' },
        { label: 'Poradnik: Regeneracja vs polerowanie', path: '/news/regeneracja-odblysnikow-reflektorow-samochodowych' },
      ],
      breadLabel: 'Odbłyśnik PVD vs Zamiennik',
    },
    en: {
      metaTitle: 'Reflector PVD Restoration vs Aftermarket | STANIAX',
      metaDesc:
        'Burnt Bi-Xenon or H7 projector bowl: PVD vacuum re-aluminizing at STANIAX vs aftermarket Depo/TYC headlights. Compare lux output, ECE legality, and savings.',
      badge: 'Driver & Workshop Guide',
      h1: 'OEM Reflector PVD Restoration vs Buying Aftermarket Headlights',
      subtitle:
        'Why re-aluminizing original Hella, Valeo, Koito, or Bosch optics outperforms low-cost replacement lamps in beam geometry and lifespan.',
      sideALabel: 'OEM PVD Re-Silvering (STANIAX)',
      sideBLabel: 'Low-Cost Aftermarket Unit (TYC / Depo)',
      directAnswerQuestion: 'Should you restore burnt OEM headlight reflectors via PVD or buy aftermarket lamps?',
      directAnswer:
        'PVD vacuum re-aluminizing of your original OEM reflector restores >92% directional light reflectance while retaining factory ECE beam precision and adaptive AFS actuators at 60-80% below replacement cost. Budget aftermarket lamps frequently exhibit uneven cutoff patterns, rapid outer-lens hazing, and early condensation.',
      verdictTitle: 'Optical & Financial Verdict',
      verdictSummary:
        'Keeping genuine OEM housings with freshly metallized reflectors and sealed electronics guarantees clean MOT/inspection cutoffs, exact body panel fitment, and 3-5 year PVD coating durability.',
      comparisonRows: [
        {
          parameter: 'Cost per Headlight',
          optionA: 'From ~€35-€60 per dismantled reflector bowl; full unit restoration ~€85-€140',
          optionB: '€160-€450 budget copy or €800-€2,000+ genuine dealer lamp',
        },
        {
          parameter: 'Photometric Beam Geometry',
          optionA: 'Preserves genuine OEM parabola tolerances and crisp cutoff step',
          optionB: 'Molding tolerances often cause scatter and patchy road illumination',
        },
        {
          parameter: 'Reflective Coating Quality',
          optionA: 'High-vacuum PVD aluminum + protective UV barrier',
          optionB: 'Thinner vapor coats without long-term thermal top stabilization',
        },
        {
          parameter: 'AFS / Matrix Coding & Modules',
          optionA: '100% plug & play with original ballasts and leveling steppers',
          optionB: 'Frequently shipped bare; requires delicate module swaps',
        },
        {
          parameter: 'Classic / Oldtimer Availability',
          optionA: 'Fully restorable steel, brass, and BMC classic bowls',
          optionB: 'Discontinued or limited to equally oxidized salvage units',
        },
      ],
      sections: [
        {
          heading: 'Why Cheap Replacement Units Cost More Over Two Winters',
          paragraphs: [
            'When projector bowls behind H7 or D2S/D1S burners turn smoky-brown, drivers look for quick replacement assemblies online. Unfortunately, aftermarket polycarbonate covers frequently skip thick UV hard-coats, yellowing rapidly after two seasons of road salt.',
            'Moreover, salvaging used lamps from junkyards almost guarantees acquiring bowls already degraded by 60-80% heat wear inside. Re-aluminizing your original OEM reflectors resets photometric output to factory-new levels.',
          ],
          bullets: [
            'Zero dashboard CAN-bus errors or AFS cornering faults',
            'Up to +250% usable lux return on dark wet asphalt',
            'Fast courier workflow across Poland and the European Union',
          ],
        },
        {
          heading: 'Steel & Classic Car Reflector Salvage',
          paragraphs: [
            'For pre-1990 youngtimers, vintage motorcycles, and commercial 24V rigs, OEM parts no longer exist at dealers. Our Józefów plant chemically strips corrosion from stamped steel or BMC bowls, seals micropores with thermal basecoat, and deposits bright PVD aluminum.',
          ],
        },
      ],
      whenChooseATitle: 'Restore Original Reflectors when:',
      whenChooseA: [
        'Original OEM housings and mounting tabs are structurally intact.',
        'The car runs Bi-Xenon AFS or rare vintage lamps.',
        'You demand >92% light return at 60-80% lower cost than new lamps.',
      ],
      whenChooseBTitle: 'Replace the assembly only when:',
      whenChooseB: [
        'Crash damage shattered the housing, lens, and mounting brackets.',
        'Internal wiring insulation has melted beyond safe repair.',
      ],
      faq: [
        {
          q: 'Is vacuum-metallized OEM restoration street-legal?',
          a: 'Yes. Restoring the factory aluminum reflective coating on an untouched ECE-approved OEM bowl keeps beam compliance 100% legal.',
        },
        {
          q: 'How fast can European workshops receive returned bowls?',
          a: 'Standard production turnaround in Józefów is 5-7 business days, plus 2-3 days DPD/DHL courier transit across the EU.',
        },
        {
          q: 'Do you handle dismantled reflectors shipped directly?',
          a: 'Yes, shipping bare dismantled reflector bowls is the fastest and lowest-cost service tier for mechanics and enthusiasts.',
        },
        {
          q: 'Will heat from 55W halogens or HID damage the new layer?',
          a: 'No. Our thermal reflector primer system and 99.99% aluminum film withstand projector burner temperatures up to 220 °C.',
        },
      ],
      relatedLinks: [
        { label: 'Headlight Restoration Pricing', path: '/en/headlight-restoration-pricing' },
        { label: 'Service: Reflector Restoration', path: '/en/headlight-reflector-restoration' },
        { label: 'Local Hub: Warsaw & Józefów', path: '/en/headlight-restoration/warsaw-jozefow' },
        { label: 'Guide: Reflector & Lens Restoration', path: '/en/news/reflector-regeneration-and-headlight-polishing' },
      ],
      breadLabel: 'Reflector vs Aftermarket',
    },
    de: {
      metaTitle: 'Reflektor neu bedampfen vs. Nachbau | STANIAX',
      metaDesc:
        'Verbrannter Bi-Xenon/H7-Reflektor: OEM-Neuverspiegelung per PVD bei STANIAX vs. billiger Nachbau-Scheinwerfer (Depo/TYC). Lichtwert, TÜV und Ersparnis.',
      badge: 'Kfz- & Werkstattvergleich',
      h1: 'OEM-Reflektor neu bedampfen vs. Nachbau-Scheinwerfer kaufen',
      subtitle:
        'Warum originale Hella-, Valeo- oder Bosch-Reflektoren nach industrieller PVD-Vakuumbeschichtung besser leuchten als preiswerte Nachbauten.',
      sideALabel: 'OEM-Reflektor PVD bedampfen (STANIAX)',
      sideBLabel: 'Günstiger Nachbau (TYC / Depo)',
      directAnswerQuestion: 'Lohnt es sich, Original-Reflektoren neu zu bedampfen statt Nachbau-Scheinwerfer zu kaufen?',
      directAnswer:
        'Das Neu-Bedampfen des Original-Reflektors per PVD stellt über 92 % Lichtreflexion samt exakter ECE-Hell-Dunkel-Grenze und voller Kurvenlicht-Funktion (AFS) wieder her - bei 60-80 % Ersparnis gegenüber Neuteilen. Günstige Nachbauten zeigen häufig Streulicht, fehlende Steuergeräte und vergilbende Scheiben.',
      verdictTitle: 'Technisches Fazit für TÜV/HU & Budget',
      verdictSummary:
        'Wer das originale Marken-Gehäuse bewahrt und den Reflektor im Vakuum neu verspiegelt, erhält werkstreue Straßenausleuchtung, perfekte Spaltmaße und 3-5 Jahre Haltbarkeit.',
      comparisonRows: [
        {
          parameter: 'Kosten pro Scheinwerfer',
          optionA: 'Ab ca. 35-60 € pro losem Reflektor; Komplettsanierung ~85-140 €',
          optionB: '160-450 € Nachbau oder 800-2.000 €+ beim Vertragshändler',
        },
        {
          parameter: 'Lichtverteilung & Hell-Dunkel-Grenze',
          optionA: 'Originale OEM-Parabelgeometrie mit scharfem HU/TÜV-Knick',
          optionB: 'Oft unruhiges Lichtbild und dunkle Zonen am Fahrbahnrand',
        },
        {
          parameter: 'Beschichtungshaltbarkeit',
          optionA: 'PVD-Vakuumaluminium + hitzefeste UV-Schutzschicht',
          optionB: 'Oft dünne Aufdampfschichten ohne robuste Schutzversiegelung',
        },
        {
          parameter: 'Elektronik & Kurvenlicht (AFS)',
          optionA: '100 % Plug-and-Play mit eigenen Vorschaltgeräten',
          optionB: 'Häufig Umbaurisiken, Fehlermeldungen oder Stellmotorschäden',
        },
        {
          parameter: 'Oldtimer & Youngtimer',
          optionA: 'Aufbereitung seltener Stahl-, Messing- und BMC-Reflektoren',
          optionB: 'Meist entfallen ohne Alternative am Ersatzteilmarkt',
        },
      ],
      sections: [
        {
          heading: 'Warum Gebrauchtteile und Billigkopien oft enttäuschen',
          paragraphs: [
            'Gebrauchte Scheinwerfer aus Verwertungen weisen nach acht bis zwölf Jahren meist dieselbe Mattierung oberhalb des Brennpunkts auf. Nachbau-Scheinwerfer wiederum sparen häufig an UV-Hardcoat-Schichten der Frontscheibe und an langlebigen Dichtungsmassen.',
            'Die gezielte PVD-Bedampfung des Originalreflektors behebt den Lichtverlust an der optischen Wurzel und spart werkseitig Hunderte Euro pro Fahrzeugachse.',
          ],
          bullets: [
            'Volle ECE-Zulassung durch Erhalt des Originalbauteils',
            'Bis zu +250 % mehr Nutzlicht auf dunklen Landstraßen',
            'Bequemer DHL-/DPD-Paketversand aus Deutschland und Österreich',
          ],
        },
        {
          heading: 'Rettung seltener Klassiker- und Lkw-Reflektoren',
          paragraphs: [
            'Für Oldtimer, klassische Motorräder oder 24V-Nutzfahrzeuge entfernen wir Rostansätze von Stahlreflektoren, versiegeln Poren mit temperaturstabilem Grundlack und bedampfen neu auf Werksglanz.',
            'Insbesondere bei nicht mehr lieferbaren Hella-, Bosch-, Cibie- oder Carello-Scheinwerfern bewahrt die PVD-Neuverspiegelung im Werk Józefów den historischen Wert des Fahrzeugs, ohne Kompromisse bei der nächtlichen Reichweite des Abblend- und Fernlichts einzugehen. Jede Parabolschale wird vor dem Rückversand optisch auf homogene Schichtdicke und saubere Brennpunktgeometrie geprüft.',
          ],
        },
      ],
      whenChooseATitle: 'Originalreflektor bedampfen lassen, wenn:',
      whenChooseA: [
        'Gehäuse und Halterungen unfallfrei sind.',
        'Bi-Xenon, Kurvenlicht oder Oldtimer-Raritäten erhalten werden sollen.',
        'Über 92 % Reflexion zum Bruchteil des Neupreises gefordert sind.',
      ],
      whenChooseBTitle: 'Komplettaustausch nur nötig, wenn:',
      whenChooseB: [
        'Das Gehäuse nach einem Unfall zertrümmert wurde.',
        'Tiefe Risse durch die Polycarbonat-Frontscheibe gehen.',
      ],
      faq: [
        {
          q: 'Besteht der neu bedampfte Originalreflektor die HU/TÜV-Prüfung?',
          a: 'Ja, die originale Bauartgenehmigung bleibt unverändert erhalten und das Lichtmessgerät zeigt wieder eine klare Hell-Dunkel-Grenze.',
        },
        {
          q: 'Wie läuft der Postversand aus Deutschland nach Józefów ab?',
          a: 'Senden Sie gut gepolsterte ausgebaute Reflektoren per DHL/DPD an unser Werk; nach 5-7 Werktagen Produktion treten sie den versicherten Rückweg an.',
        },
        {
          q: 'Hält die Beschichtung 55W-Halogen und Xenon-Hitze aus?',
          a: 'Ja, der verwendete Hitzeschutzprimer und 99,99 % Reinaluminium sind auf Brennertemperaturen bis 220 °C ausgelegt.',
        },
        {
          q: 'Können verchromte Reflektoren von innen sauber bleiben?',
          a: 'Ja, die transparente Schutzschicht bewahrt die aufgedampfte Spiegelfläche dauerhaft vor Feuchtigkeit, Oxidation und Kondensatflecken im Gehäuse.',
        },
      ],
      relatedLinks: [
        { label: 'Preise: Scheinwerfer Aufbereitung', path: '/de/scheinwerfer-aufbereitung-preise' },
        { label: 'Leistung: Reflektor neu bedampfen', path: '/de/scheinwerfer-reflektor-aufbereitung' },
        { label: 'Standort: Warschau & Józefów', path: '/de/scheinwerfer-aufbereitung/warschau-jozefow' },
        { label: 'Ratgeber: Reflektoren & Polieren', path: '/de/news/scheinwerfer-reflektoren-regeneration-und-polieren' },
      ],
      breadLabel: 'Reflektor vs. Nachbau',
    },
  },

  'polishing-vs-internal-pvd': {
    pl: {
      metaTitle: 'Polerowanie kloszy vs regeneracja PVD | STANIAX',
      metaDesc:
        'Dlaczego polerowanie klosza bez regeneracji odbłyśnika PVD nie poprawia światła? Porównanie efektu, cen, trwałości lakieru UV i pomiaru luxów.',
      badge: 'Diagnostyka oświetlenia',
      h1: 'Polerowanie kloszy vs wewnętrzna regeneracja odbłyśnika PVD',
      subtitle:
        'Wyjaśnienie różnicy między zewnętrznym odświeżeniem poliwęglanu a faktyczną odbudową lustra wewnątrz soczewki i paraboli.',
      sideALabel: 'Regeneracja odbłyśnika PVD (wnętrze)',
      sideBLabel: 'Polerowanie klosza (zewnętrzna warstwa PC)',
      directAnswerQuestion: 'Czy samo polerowanie kloszy wystarczy, gdy światła słabo świecą w nocy?',
      directAnswer:
        'Nie - samo polerowanie zewnętrznego klosza usuwa jedynie utlenienie i mikrorysy na poliwęglanie (odzysk 10-25% transmisji światła), natomiast nie naprawia wypalonego odbłyśnika za soczewką, który odpowiada za ponad 75% strumienia na asfalt. Dopiero połączenie metalizacji PVD odbłyśnika (>92% odbicia) z zabezpieczeniem UV klosza przywraca 100% fabrycznej widoczności.',
      verdictTitle: 'Diagnoza optyczna: klosz vs wnętrze lampy',
      verdictSummary:
        'Gdy lampa z zewnątrz jest względnie przejrzysta, lecz snop światła na mokrej drodze niemal znika, winny jest w 90% zmatowiony odbłyśnik za soczewką H7 lub Bi-Xenon. W takim przypadku nawet idealne spolerowanie i polakierowanie klosza nie zwiększy zasięgu świateł mijania.',
      comparisonRows: [
        {
          parameter: 'Miejsce problemu w reflektorze',
          optionA: 'Wewnętrzna czasza / projektor soczewkowy nad żarówką (wypalenie termiczne)',
          optionB: 'Zewnętrzny klosz z poliwęglanu (żółknięcie od UV i piaskowania)',
        },
        {
          parameter: 'Udział w utracie jasności na drodze',
          optionA: 'Odpowiada za 65-85% straty natężenia oświetlenia (lux)',
          optionB: 'Odpowiada za 15-35% straty + efekt rozproszenia i olśnienia',
        },
        {
          parameter: 'Technologia trwałej naprawy',
          optionA: 'Próżniowe napylanie aluminium PVD + warstwa ochronna UV',
          optionB: 'Szlifowanie gradacyjne + twardy lakier UV lub natrysk poliuretanu',
        },
        {
          parameter: 'Ryzyko błędu „samodzielnego”',
          optionA: 'Aerozole i folie aluminiowe w domu niszczą geometrię i odpadają po tygodniu',
          optionB: 'Polerowanie pastą bez lakieru UV wraca żółtym nalotem w 3-6 miesięcy',
        },
        {
          parameter: 'Orientacyjny koszt usługi',
          optionA: '150-250 zł za regenerację samego odbłyśnika PVD',
          optionB: '150-300 zł za polerowanie z trwałym zabezpieczeniem klosza UV',
        },
      ],
      sections: [
        {
          heading: 'Dlaczego klosz bywa czysty, a lampa nie świeci w deszczu?',
          paragraphs: [
            'W reflektorach soczewkowych (Bi-Xenon, H7 projektor) ciepło palnika lub żarówki skupia się w zamkniętej, małej komorze za soczewką. Po 120-180 tys. km pierwotna warstwa aluminium paruje lub łuszczy się w górnej części czaszy, zostawiając matowy brązowy plastik.',
            'Z zewnątrz kierowca widzi jedynie małą szklaną kulkę soczewki i ładny klosz, więc zleca tanie polerowanie na myjni. Po odebraniu auta okazuje się, że reflektor wygląda estetycznie, ale w nocy przed maską nadal panuje ciemność - światło nie ma się od czego odbić przed przejściem przez soczewkę.',
          ],
          bullets: [
            'Test w 30 sekund: podnieś klapę i zajrzyj przez otwór wymiany żarówki lub zobacz mleczny nalot soczewki',
            'Wypalony odbłyśnik zmniejsza zasięg mijania z 65 m do poniżej 20 m',
            'Sama metalizacja PVD odbłyśnika + czyszczenie soczewki daje radykalny skok luxów',
          ],
        },
        {
          heading: 'Polerowanie pastą vs lakierowanie kloszy po zdjęciu fabrycznego hard-coatu',
          paragraphs: [
            'Każdy nowy klosz poliwęglanowy jest fabrycznie pokryty twardą warstwą przeciw UV. Podczas agresywnego szlifowania papierami wodnymi i pastą polerską ten filtr zostaje bezpowrotnie zdarty.',
            'Pozostawienie gołego poliwęglanu jedynie nawoskowanego skutkuje szybkim ponownym zażółceniem pod wpływem słońca. W profesjonalnej regeneracji zewnętrznej w STANIAX stosuje się natryskowe lakierowanie bezbarwnym systemem UV o wysokiej odporności na ścieranie i chemię z myjni.',
          ],
        },
      ],
      whenChooseATitle: 'Potrzebujesz regeneracji PVD odbłyśnika, gdy:',
      whenChooseA: [
        'Światła słabo oświetlają asfalt mimo przejrzystego klosza z przodu.',
        'Soczewka wygląda w środku jak zaparowana od kurzu lub ma mleczną poświatę.',
        'Auto zbliża się do przebiegu 150 000+ km na ksenonie D1S/D2S/D3S lub projektorze H7.',
      ],
      whenChooseBTitle: 'Wystarczy odnowienie zewnętrznego klosza z UV, gdy:',
      whenChooseB: [
        'Poliwęglan na zewnątrz jest żółty, zmatowiały i szorstki w dotyku od słońca.',
        'Po wyjęciu żarówki wnętrze odbłyśnika nadal posiada idealne, jasne lustro bez przypaleń.',
        'Zabezpieczasz klosz lakierem UV na kolejne lata eksploatacji.',
      ],
      faq: [
        {
          q: 'Czy tzw. czajniczek do regeneracji lamp zastąpi metalizację PVD?',
          a: 'Nie. Czajniczek („aceton parowy”) wygładza wyłącznie zewnętrzną powierzchnię zmatowiałego klosza z poliwęglanu, nie dociera do wnętrza odbłyśnika i nie zastępuje twardego lakieru UV.',
        },
        {
          q: 'Ile kosztuje kompleksowa regeneracja: odbłyśnik PVD + lakierowanie klosza UV?',
          a: 'Metalizacja dostarczonego odbłyśnika w STANIAX zaczyna się od 150 zł/szt., natomiast pełna regeneracja z demontażem i rozklejeniem w warsztacie to rynkowo ok. 350-700 zł za lampę.',
        },
        {
          q: 'Czy po regeneracji odbłyśnika trzeba ustawiać światła na stacji diagnostycznej?',
          a: 'Zawsze po demontażu i ponownym montażu reflektorów na aucie należy skorygować wysokość wiązki na stacji SKP.',
        },
        {
          q: 'Czy STANIAX wykonuje także lakierowanie ochronne samych kloszy w Józefowie?',
          a: 'Tak, dla klientów lokalnych z Warszawy, Józefowa i Otwocka oraz partii warsztatowych zabezpieczamy zregenerowane poliwęglanowe klosze przemysłowym lakierem UV.',
        },
      ],
      relatedLinks: [
        { label: 'Cennik i kalkulator reflektorów', path: '/cennik-regeneracji-reflektorow' },
        { label: 'Usługa: Regeneracja odbłyśników', path: '/regeneracja-reflektorow' },
        { label: 'Usługa: Lakierowanie tworzyw (UV/2K)', path: '/lakierowanie-tworzyw-sztucznych' },
        { label: 'Warszawa & Józefów: dojazd i wysyłka', path: '/regeneracja-reflektorow/warszawa-jozefow' },
      ],
      breadLabel: 'Polerowanie kloszy vs PVD',
    },
    en: {
      metaTitle: 'Headlight Polishing vs Internal PVD | STANIAX',
      metaDesc:
        'Why polishing outer headlight lenses alone fails to fix dim night beams. Compare outer polycarbonate polishing + UV coat vs internal PVD reflector re-silvering.',
      badge: 'Beam Diagnostics',
      h1: 'Outer Lens Polishing vs Internal PVD Reflector Restoration',
      subtitle:
        'Understanding the photometric difference between restoring yellowed outer polycarbonate lenses and re-aluminizing burnt projector reflectors.',
      sideALabel: 'Internal Reflector PVD Re-Aluminizing',
      sideBLabel: 'Outer Polycarbonate Lens Polishing',
      directAnswerQuestion: 'Is polishing outer headlight lenses enough to restore weak night visibility?',
      directAnswer:
        'No - outer lens polishing removes surface oxidation for only a 15-35% clarity improvement, whereas over 75% of serious nighttime light loss stems from burnt internal projector reflectors. Only restoring >92% reflector mirror output via PVD aluminum vacuum deposition plus UV outer-lens protection recovers full OEM beam reach.',
      verdictTitle: 'Optical Diagnostic Summary',
      verdictSummary:
        'When your headlights look relatively clear on the outside yet leave dark blind spots on wet asphalt, 9 times out of 10 the internal projector bowl has peeled or hazed above the bulb.',
      comparisonRows: [
        {
          parameter: 'Failure Location',
          optionA: 'Internal projector cup or parabola burned by bulb/HID heat',
          optionB: 'Outer polycarbonate cover oxidized by solar UV & road grit',
        },
        {
          parameter: 'Impact on Lux Output',
          optionA: 'Causes 65-85% of total road lux loss',
          optionB: 'Causes 15-35% loss plus scattered glare toward oncoming cars',
        },
        {
          parameter: 'Proper Repair Method',
          optionA: 'High-vacuum aluminum PVD deposition + protective UV coat',
          optionB: 'Precision sanding followed by crosslinked UV-cured protective clearcoat',
        },
        {
          parameter: 'Why DIY Kits Underdeliver',
          optionA: 'Chrome rattle-can spray yields ~45% diffuse gray reflectance',
          optionB: 'Bare wax after polishing re-yellows within 3-6 months outdoors',
        },
      ],
      sections: [
        {
          heading: 'Why Polished Lenses Still Fail MOT Light Meters',
          paragraphs: [
            'Projector headlights trap high thermal wattage directly over a tight aluminum-coated cavity. Around 80,000-120,000 miles on H7 or D1S/D3S xenon lamps, the thin vapor coat vaporizes off the upper bowl dome, turning it dull brown.',
            'Detailing shops often polish the outside cover flawlessly while leaving the dead reflector untouched. Because light never bounces cleanly from behind the bulb toward the projector lens, road throw shrinks below safe braking distance.',
          ],
          bullets: [
            'Quick workshop check: inspect behind the bulb socket or examine the projector glass cloudiness',
            'PVD re-silvering restores >92% reflectance across the original optical curvature',
            'Add UV lens hard-coating so the outer shell resists yellowing for years',
          ],
        },
        {
          heading: 'Why UV Clearcoating Matters After Sanding Polycarbonate',
          paragraphs: [
            'Sanding off hazy factory hard-coats strips UV stabilizers cleanly away from raw polycarbonate. Unless sealed by true automotive or industrial UV-cured coating, the plastic turns yellow again within months. STANIAX applies genuine UV-crosslinked clearcoat for lasting clarity.',
          ],
        },
      ],
      whenChooseATitle: 'Prioritize Internal PVD Restoration when:',
      whenChooseA: [
        'Low beams feel dim at night despite clean-looking outer lenses.',
        'Projector glass looks milky or inspection equipment flags low lux output.',
        'The car runs xenon/H7 projectors with 120,000+ km mileage.',
      ],
      whenChooseBTitle: 'Outer UV Lens Restoration alone suffices when:',
      whenChooseB: [
        'External yellowing is severe while internal reflector mirrors remain shiny.',
        'Preventive UV hard-coat renewal is performed after minor sand abrasion.',
      ],
      faq: [
        {
          q: 'Do steam vapor kits replace UV hard-coating on lenses?',
          a: 'Vapor-acetone kits temporarily reflow outer surface polycarbonate without depositing durable UV absorbers or curing scratched internal reflectors.',
        },
        {
          q: 'Should I restore both the outer lens and internal reflector together?',
          a: 'If the car shows both outer haze and mileage >120,000 km on xenon/H7 bulbs, combining internal PVD re-aluminizing with external UV hard-coating prevents paying dismantling labor twice.',
        },
        {
          q: 'How do I check prices for dismantled reflectors vs full lamps?',
          a: 'See our interactive Headlight Restoration Pricing calculator for per-reflector PVD rates and EU shipping tiers.',
        },
        {
          q: 'Is headlight re-aiming required after installation?',
          a: 'Yes, always adjust vertical and horizontal beam alignment at a testing bay once reinstalled.',
        },
      ],
      relatedLinks: [
        { label: 'Headlight Restoration Pricing', path: '/en/headlight-restoration-pricing' },
        { label: 'Service: Reflector Restoration', path: '/en/headlight-reflector-restoration' },
        { label: 'Service: Plastic Parts Painting', path: '/en/plastic-parts-painting' },
        { label: 'Gallery: Before & After Lamps', path: '/en/gallery' },
      ],
      breadLabel: 'Polishing vs Internal PVD',
    },
    de: {
      metaTitle: 'Scheinwerfer polieren vs. PVD innen | STANIAX',
      metaDesc:
        'Warum Scheinwerfer-Polieren allein bei blindem Licht nicht reicht: Polycarbonat-Aufbereitung außen vs. Reflektor-PVD-Bedampfung innen im Vergleich.',
      badge: 'Lichttechnik-Analyse',
      h1: 'Streuscheibe polieren vs. Reflektor-Innensanierung per PVD',
      subtitle:
        'Technischer Vergleich zwischen äußerer Kunststoff-Politur mit UV-Lackierung und der Neuverspiegelung verbrannter Reflektoren.',
      sideALabel: 'PVD-Reflektorsanierung (Innenoptik)',
      sideBLabel: 'Streuscheiben-Politur + UV-Schutz (Außen)',
      directAnswerQuestion: 'Reicht Scheinwerfer polieren aus, wenn das Abblendlicht nachts zu dunkel ist?',
      directAnswer:
        'Nein - äußeres Polieren entfernt nur verwittertes Polycarbonat (ca. 15-35 % Lichtgewinn), behebt aber nicht den verbrannten Reflektor hinter der Linse, der bis zu 75 % des Lichtverlusts verursacht. Erst das Vakuum-Bedampfen des Reflektors (>92 % Reflexion) plus UV-Scheibenschutz stellt volle Werksleuchtkraft her.',
      verdictTitle: 'Optisches Fazit für die Werkstatt',
      verdictSummary:
        'Bleibt die Straße trotz glasklar polierter Frontscheibe dunkel, ist fast immer der innere Projektor-Reflektor oberhalb der H7- oder Xenon-Lampe abgebrannt.',
      comparisonRows: [
        {
          parameter: 'Schadensort im Scheinwerfer',
          optionA: 'Innerer Projektor- oder Parabolreflektor (thermischer Ausbrand)',
          optionB: 'Äußere Polycarbonat-Streuscheibe (UV-Vergilbung & Steinschlag)',
        },
        {
          parameter: 'Anteil am Lichtverlust',
          optionA: 'Verursacht 65-85 % des Reichweiten- und Lux-Verlusts',
          optionB: 'Verursacht 15-35 % Verlust sowie unangenehmes Streulicht',
        },
        {
          parameter: 'Fachgerechte Instandsetzung',
          optionA: 'PVD-Vakuumaluminium + Schutzschicht in der STANIAX-Kammer',
          optionB: 'Schliff + echter UV-härtender Schutzlack (keine bloße Politur)',
        },
        {
          parameter: 'Risiko bei DIY-Sets',
          optionA: 'Chromspray erreicht nur ~45 % graue Reflexion und löst sich',
          optionB: 'Unversiegelte Politur vergilbt binnen weniger Monate erneut',
        },
      ],
      sections: [
        {
          heading: 'Warum viele Autofahrer nach dem Polieren weiter blind fahren',
          paragraphs: [
            'In geschlossenen H7- oder Bi-Xenon-Linsenmodulen entstehen dicht über dem Brenner über 150 °C. Nach 120.000 bis 180.000 Kilometern dampft die dünne Originalschicht ab und lässt braunen Basiswerkstoff zurück.',
            'Aufbereitungsbetriebe polieren oft nur die sichtbare Frontscheibe, wodurch der Scheinwerfer optisch frisch wirkt, die Lichtausbeute aber weiterhin mangelhaft bleibt. Eine PVD-Neuverspiegelung im Vakuum behebt exakt diese Ursache.',
          ],
          bullets: [
            'Schnellcheck durch die Lampenöffnung zeigt matte Blasen über dem Brenner',
            'Bis zu dreifacher Lux-Zuwachs durch echte Al-99,99 %-Spiegelschicht',
            'Kombination mit UV-Schutzlack sichert die Frontscheibe langfristig',
          ],
        },
        {
          heading: 'Warum bloße Paste ohne UV-Klarlack nicht ausreicht',
          paragraphs: [
            'Beim Nassschleifen wird die werkseitige UV-Hartbeschichtung abgetragen. Ohne industrielle UV-Klarlack-Versiegelung oxidiert rohes Polycarbonat unter Sonneneinstrahlung rapide nach.',
            'Erst das Zusammenspiel aus innerer PVD-Aluminiumbedampfung (mit Schutz-Topcoat) und äußerer UV-Hardcoat-Lackierung stellt sowohl den Lichtstrom in Lumen als auch die Steinschlag- und Witterungsbeständigkeit moderner Projektionsscheinwerfer für viele Jahre wieder her. Werkstätten und Fahrzeughalter erhalten so volle Nachtsicht und bestehende HU-Werte ohne den Kauf teurer Originalersatzteile.',
          ],
        },
      ],
      whenChooseATitle: 'PVD-Innensanierung durchführen, wenn:',
      whenChooseA: [
        'Trotz klarer Frontscheibe kaum Licht auf nassem Asphalt ankommt.',
        'Xenon- oder H7-Linsen von innen milchig erscheinen.',
        'Der TÜV/HU eine zu geringe Beleuchtungsstärke bemängelt und der Reflektor sichtbar gealtert ist.',
      ],
      whenChooseBTitle: 'Außen-UV-Lackierung genügt, wenn:',
      whenChooseB: [
        'Die Scheibe stark vergilbt ist, der innere Spiegel aber makellos glänzt.',
      ],
      faq: [
        {
          q: 'Ersetzt eine Bedampfungs-Teekanne den professionellen UV-Lack?',
          a: 'Nein. Aceton-Bedampfen glättet nur kurzzeitig die äußere Oberfläche ohne UV-Blocker und erneuert keine inneren Reflektoren.',
        },
        {
          q: 'Was kostet das Neu-Bedampfen der Reflektoren im Vergleich zum Polieren?',
          a: 'Die reine Reflektor-Bedampfung beginnt bei ca. 35-60 € pro Stück; konkrete Pakete listet unsere Preistabelle.',
        },
        {
          q: 'Müssen Scheinwerfer nach dem Ausbau eingestellt werden?',
          a: 'Ja, nach jeder Montage am Fahrzeug ist eine Einstellung am Lichteinstellgerät erforderlich.',
        },
        {
          q: 'Bearbeitet STANIAX auch einzelne lose Reflektoren aus Werkstätten?',
          a: 'Ja, europaweite Kfz-Betriebe senden uns zerlegte Reflektorkörper gesammelt zur 2-4-tägigen PVD-Aufbereitung.',
        },
      ],
      relatedLinks: [
        { label: 'Preise: Scheinwerfer Aufbereitung', path: '/de/scheinwerfer-aufbereitung-preise' },
        { label: 'Leistung: Reflektor bedampfen', path: '/de/scheinwerfer-reflektor-aufbereitung' },
        { label: 'Leistung: Kunststofflackierung', path: '/de/kunststofflackierung' },
        { label: 'Projektgalerie ansehen', path: '/de/gallery' },
      ],
      breadLabel: 'Polieren vs. PVD innen',
    },
  },
  ...COMPARISONS_WAVE2,
}
