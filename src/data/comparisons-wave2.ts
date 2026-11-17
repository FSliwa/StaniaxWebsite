import type { Lang } from '@/lib/translations'
import type { ComparisonLocalePage } from './comparisons'

export type Wave2ComparisonId =
  | 'pvd-vs-powder-coating'
  | 'pvd-vs-hydrographics'
  | 'pvd-vs-biled-retrofit'
  | 'uv-hardcoat-vs-acetone-vapor'

export const WAVE2_COMPARISON_SLUGS: Record<Wave2ComparisonId, Record<Lang, string>> = {
  'pvd-vs-powder-coating': {
    pl: '/porownanie/metalizacja-prozniowa-vs-malowanie-proszkowe',
    en: '/en/compare/vacuum-metallization-vs-powder-coating',
    de: '/de/vergleich/vakuummetallisierung-vs-pulverbeschichtung',
  },
  'pvd-vs-hydrographics': {
    pl: '/porownanie/metalizacja-prozniowa-vs-hydrografika',
    en: '/en/compare/vacuum-metallization-vs-hydrographics',
    de: '/de/vergleich/vakuummetallisierung-vs-wassertransferdruck',
  },
  'pvd-vs-biled-retrofit': {
    pl: '/porownanie/regeneracja-odblysnikow-pvd-vs-przerobka-bi-led',
    en: '/en/compare/oem-reflector-pvd-vs-biled-retrofit',
    de: '/de/vergleich/reflektor-pvd-vs-biled-umbau',
  },
  'uv-hardcoat-vs-acetone-vapor': {
    pl: '/porownanie/lakierowanie-uv-kloszy-vs-czajniczek-acetonowy',
    en: '/en/compare/uv-lens-hardcoat-vs-acetone-vapor-cup',
    de: '/de/vergleich/uv-scheinwerferlack-vs-aceton-bedampfung',
  },
}

export const COMPARISONS_WAVE2: Record<Wave2ComparisonId, Record<Lang, ComparisonLocalePage>> = {
  'pvd-vs-powder-coating': {
    pl: {
      metaTitle: 'Metalizacja próżniowa vs malowanie proszkowe | STANIAX',
      metaDesc:
        'Porównanie PVD i malowania proszkowego „chrom”: refleksyjność >92% vs ~55%, temperatura wygrzewania 60°C vs 180-200°C oraz obróbka tworzyw ABS, PC i metali.',
      badge: 'Porównanie powłok: PVD vs Proszek',
      h1: 'Metalizacja próżniowa PVD vs malowanie proszkowe w efekcie chromu',
      subtitle:
        'Analiza techniczna napylania aluminium 99,99% w wysokiej próżni w porównaniu z lakierami proszkowymi imitującymi chrom na metalach i polimerach.',
      sideALabel: 'Powłoka PVD w próżni (STANIAX)',
      sideBLabel: 'Malowanie proszkowe „efekt chrom”',
      directAnswerQuestion: 'Czym różni się metalizacja próżniowa PVD od malowania proszkowego w kolorze chromu?',
      directAnswer:
        'Malowanie proszkowe wymaga pieca 180-200 °C (co topi tworzywa ABS, PC i PP) oraz daje jedynie metaliczny srebrny półpołysk o odbiciu ok. 50-60% ze skórką pomarańczy. Metalizacja próżniowa PVD w STANIAX osadza czyste aluminium 99,99% poniżej 70 °C, zapewniając lustro optyczne >92% bez zaokrąglania ostrych krawędzi i gwintów.',
      verdictTitle: 'Werdykt technologiczny B2B',
      verdictSummary:
        'Wybierz malowanie proszkowe do grubowarstwowej ochrony antykorozyjnej stalowych ogrodzeń i felg. Wybierz metalizację próżniową PVD w STANIAX wszędzie tam, gdzie liczy się prawdziwe lustro chromu lub złota, obróbka tworzyw sztucznych, szkła lub odbłyśników oświetleniowych.',
      comparisonRows: [
        { parameter: 'Efekt wizualny i odbicie światła', optionA: 'Prawdziwe lustro >92% (Al 99,99%)', optionB: 'Srebrny metalik ~50-60%, widoczne ziarno' },
        { parameter: 'Temperatura procesu', optionA: '45-75 °C (bezpieczna dla ABS, PC, PP, PA)', optionB: '180-200 °C w piecu (wyłącznie metale)' },
        { parameter: 'Grubość układu powłokowego', optionA: '20-35 µm łącznie (zachowuje gwinty i pasowania)', optionB: '80-150 µm (zalewa drobne detale i zatrzaski)' },
        { parameter: 'Zastosowanie w optyce i lampach', optionA: 'Tak - standard OEM reflektorów i opraw LED', optionB: 'Nie - rozprasza wiązkę i przegrzewa czaszę' },
        { parameter: 'Gładkość powierzchni (Ra)', optionA: 'Klasa optyczna A bez skórki pomarańczy', optionB: 'Charakterystyczna struktura proszkowa' },
      ],
      sections: [
        {
          heading: 'Dlaczego proszkowy „chrom” nigdy nie daje głębi lustra PVD?',
          paragraphs: [
            'Lakiery proszkowe sprzedawane jako „chrom” zawierają płatki aluminium zatopione w grubej żywicy poliestrowej lub epoksydowej. Po wypaleniu w 190 °C i nałożeniu bezbarwnego topcoatu płatki ulegają częściowej dezorientacji, przez co powierzchnia przypomina polerowane srebro lub jasny szary metalik, a nie lustro.',
            'W komorach wysokiej próżni STANIAX napylanie aluminium odbywa się w fazie gazowej przy ciśnieniu 10⁻⁴ mbar na idealnie wypoziomowany podkład UV. Warstwa metalu o grubości 80-120 nm tworzy ciągłą taflę zwierciadlaną, którą można zabarwić na chrom, 24-karatowe złoto, miedź lub tytan z wysoką powtarzalnością odcienia.',
          ],
          bullets: [
            'Możliwość powlekania detali z ABS, PC, polipropylenu, poliamidu, szkła oraz odlewów ZnAl i stali',
            'Brak ryzyka gazowania porowatych odlewów aluminiowych w temperaturze 200 °C',
            'Pełna przyczepność klasy Gt 0 wg normy ISO 2409 potwierdzana testem siatki nacięć',
          ],
        },
        {
          heading: 'Kiedy łączyć podkład proszkowy z metalizacją próżniową na stali i ZnAl?',
          paragraphs: [
            'W przypadku zabytkowych stalowych odbłyśników, korpusów lamp motocyklowych lub porowatych odlewów ciśnieniowych ZnAl po piaskowaniu doskonałe rezultaty daje proces hybrydowy: wypełnienie wżerów podkładem epoksydowym, nałożenie gładkiej bazy lakierniczej oraz finalne napylanie próżniowe PVD z bezbarwnym lakierem ochronnym UV lub 2K.',
          ],
        },
      ],
      whenChooseATitle: 'Wybierz powłokę PVD w STANIAX, gdy:',
      whenChooseA: [
        'Oczekujesz stuprocentowego lustra chromu, złota lub czarnego chromu bez widocznego ziarna.',
        'Detal jest wykonany z tworzywa sztucznego, kompozytu, żywicy 3D lub szkła.',
        'Regenerujesz odbłyśnik reflektora samochodowego lub oprawę oświetleniową LED.',
      ],
      whenChooseBTitle: 'Wybierz malowanie proszkowe, gdy:',
      whenChooseB: [
        'Malujesz stalowe konstrukcje zewnętrzne, bramy, ramy lub felgi narażone na uderzenia kamieni.',
        'Wystarczy Ci satynowy kolor srebrny RAL 9006/9007 bez efektu lustrzanego.',
      ],
      faq: [
        {
          q: 'Czy malowanie proszkowe chromem nadaje się do odbłyśników reflektorów?',
          a: 'Nie. Farba proszkowa rozprasza światło zamiast je skupiać, osiągając ok. 55% odbicia zamiast wymaganych >92% w technologii PVD.',
        },
        {
          q: 'Czy można malować proszkowo tworzywa ABS lub poliwęglan?',
          a: 'Nie, piec polimeryzacyjny 180-200 °C powoduje stopienie i deformację wyprasek z ABS (HDT ~90 °C) i PC.',
        },
        {
          q: 'Czy powłoka PVD jest odporna na warunki atmosferyczne?',
          a: 'Tak, po zabezpieczeniu lakierem nawierzchniowym 2K PU lub UV z filtrami UV powłoka PVD zachowuje połysk w zastosowaniach zewnętrznych.',
        },
        {
          q: 'Jaki jest czas realizacji serii PVD względem lakierni proszkowej?',
          a: 'Serie przemysłowe B2B realizujemy w 5-10 dni roboczych (prototypy 2-3 dni), a odbłyśniki samochodowe w 5-7 dni roboczych w zakładzie w Józefowie.',
        },
      ],
      relatedLinks: [
        { label: 'Usługa: Metalizacja próżniowa PVD', path: '/metalizacja-prozniowa' },
        { label: 'Porównanie: PVD vs Galwanizacja', path: '/porownanie/metalizacja-prozniowa-vs-galwanizacja' },
        { label: 'Matryca: Powlekanie tworzywa ABS', path: '/rozwiazania/powlekanie-tworzywa-abs' },
        { label: 'Cennik regeneracji reflektorów', path: '/cennik-regeneracji-reflektorow' },
      ],
      breadLabel: 'PVD vs Malowanie proszkowe',
    },
    en: {
      metaTitle: 'PVD Metallization vs Chrome Powder Coating | STANIAX',
      metaDesc:
        'Engineering comparison of PVD vacuum metallization vs chrome-effect powder coating: >92% mirror reflectance vs ~55%, 60°C polymer safety vs 190°C curing.',
      badge: 'Surface Comparison: PVD vs Powder',
      h1: 'PVD Vacuum Metallization vs Chrome-Effect Powder Coating',
      subtitle:
        'Technical comparison of 99.99% aluminum high-vacuum deposition against metallic powder coatings across plastics, glass, and cast metals.',
      sideALabel: 'PVD Vacuum Metallization (STANIAX)',
      sideBLabel: 'Chrome-Effect Powder Coating',
      directAnswerQuestion: 'How does PVD vacuum metallization differ from chrome-effect powder coating?',
      directAnswer:
        'Chrome-effect powder coating requires 180-200 °C oven curing - melting ABS, PC, and PP plastics - and yields only a ~55% semi-reflective metallic silver with orange-peel texture. STANIAX PVD vacuum metallization deposits 99.99% pure aluminum below 70 °C, delivering >92% true mirror reflectance and crisp thread tolerances.',
      verdictTitle: 'B2B Engineering Verdict',
      verdictSummary:
        'Use powder coating for heavy structural corrosion protection on steel frames and wheels. Specify STANIAX PVD vacuum metallization whenever true mirror chrome/gold optics, polymer or glass compatibility, or >92% lighting reflectance is required.',
      comparisonRows: [
        { parameter: 'Optical Reflectance & Finish', optionA: '>92% true mirror specular chrome/gold', optionB: '~50-60% metallic silver with visible flake' },
        { parameter: 'Process Curing Temperature', optionA: '45-75 °C (safe for ABS, PC, PP, PA, glass)', optionB: '180-200 °C oven (metals only)' },
        { parameter: 'Total Film Build', optionA: '20-35 µm (preserves fine threads & snap-fits)', optionB: '80-150 µm (bridges sharp edges & tolerances)' },
        { parameter: 'Headlamp & LED Optics Use', optionA: 'Yes - OEM standard for reflectors', optionB: 'No - scatters beam pattern' },
        { parameter: 'Surface Smoothness', optionA: 'Class-A optical mirror leveling', optionB: 'Characteristic powder orange-peel' },
      ],
      sections: [
        {
          heading: 'Why Chrome Powder Cannot Match Vapor-Deposited Aluminum',
          paragraphs: [
            'So-called chrome powders suspend leafing aluminum pigments inside a thick polyester or epoxy resin matrix. Once baked at 190 °C and sealed under clear powder, pigment leafing shifts, dulling the surface into bright silver rather than an image-forming mirror.',
            'Inside STANIAX industrial high-vacuum chambers (10⁻⁴ mbar), 99.99% aluminum condenses atom-by-atom onto a flow-leveled UV basecoat. The resulting 80-120 nm metallic film achieves >92% specular reflectance and can be tinted to chrome, 24k gold, rose gold, or smoked titanium with high batch-to-batch color consistency.',
          ],
          bullets: [
            'Compatible with injection-molded ABS, PC, PP, PA66, glass flacons, and ZnAl/aluminum castings',
            'Eliminates high-temperature outgassing blisters common when baking porous die-castings at 200 °C',
            'Validated Class 0 cross-cut adhesion per ISO 2409 across every planetary rack batch',
          ],
        },
        {
          heading: 'Hybrid Anticorrosion Base + PVD Mirror for Classic Steel & Castings',
          paragraphs: [
            'For corroded vintage steel headlamp bowls and sandblasted ZnAl housings, STANIAX applies an epoxy anticorrosion seal followed by a high-leveling thermal primer, high-vacuum PVD aluminum, and UV or 2K polyurethane protection - combining rust immunity with optical brilliance.',
          ],
        },
      ],
      whenChooseATitle: 'Choose STANIAX PVD when:',
      whenChooseA: [
        'True distortion-free mirror chrome, gold, or tinted metallic aesthetics are mandatory.',
        'Parts are molded in ABS, polycarbonate, polypropylene, nylon, 3D-printed resin, or glass.',
        'Restoring automotive headlight reflectors or manufacturing industrial LED luminaires.',
      ],
      whenChooseBTitle: 'Choose Powder Coating when:',
      whenChooseB: [
        'Coating heavy outdoor steel gates, chassis brackets, or alloy wheels.',
        'A satin metallic silver appearance without mirror reflection is acceptable.',
      ],
      faq: [
        {
          q: 'Can chrome powder coating be used inside headlight reflectors?',
          a: 'No. Powder coatings scatter light (~55% diffuse reflection) and fail headlamp cutoff inspections, whereas PVD aluminum restores >92% directional reflectance.',
        },
        {
          q: 'Can ABS or polycarbonate parts be powder coated?',
          a: 'No, 180-200 °C powder curing ovens deform thermoplastics well above their heat deflection temperature.',
        },
        {
          q: 'Does PVD vacuum metallization resist outdoor UV exposure?',
          a: 'Yes, when sealed with our automotive-grade 2K polyurethane or UV-inhibited clearcoats.',
        },
        {
          q: 'What is the typical B2B turnaround at STANIAX?',
          a: '5-10 business days for serial industrial batches (2-3 days express prototypes) and 5-7 business days for automotive reflectors at our Józefów facility.',
        },
      ],
      relatedLinks: [
        { label: 'Service: PVD Vacuum Metallization', path: '/en/vacuum-metallisation' },
        { label: 'Compare: PVD vs Electroplating', path: '/en/compare/vacuum-metallization-vs-electroplating' },
        { label: 'Substrate: ABS Plastic Coating', path: '/en/solutions/abs-plastic-coating-pvd' },
        { label: 'Headlight Restoration Pricing', path: '/en/headlight-restoration-pricing' },
      ],
      breadLabel: 'PVD vs Powder Coating',
    },
    de: {
      metaTitle: 'Vakuummetallisierung vs. Pulverbeschichtung | STANIAX',
      metaDesc:
        'Technischer Vergleich PVD-Vakuummetallisierung vs. Chrom-Pulverbeschichtung: >92 % Spiegelreflexion statt ~55 %, <70 °C für Kunststoffe statt 190 °C Einbrennen.',
      badge: 'Verfahrensvergleich: PVD vs. Pulver',
      h1: 'PVD-Vakuummetallisierung vs. Chrom-Effekt-Pulverbeschichtung',
      subtitle:
        'Ingenieurvergleich zwischen 99,99-%-Aluminiumbedampfung im Hochvakuum und Effekt-Pulverlacken auf Kunststoffen, Glas und Metallguss.',
      sideALabel: 'PVD-Vakuummetallisierung (STANIAX)',
      sideBLabel: 'Chrom-Effekt-Pulverbeschichtung',
      directAnswerQuestion: 'Worin unterscheidet sich PVD-Vakuummetallisierung von einer Chrom-Pulverbeschichtung?',
      directAnswer:
        'Pulverbeschichtungen benötigen 180-200 °C Einbrenntemperatur (wodurch ABS, PC und PP schmelzen) und erzeugen nur ein silbergraues Metallic-Finish mit ca. 55 % Reflexion und Orangenhaut. Die PVD-Vakuummetallisierung bei STANIAX scheidet 99,99 % Reinaluminium unter 70 °C ab und liefert >92 % echten Spiegelglanz bei voller Maßhaltigkeit.',
      verdictTitle: 'Technisches B2B-Fazit',
      verdictSummary:
        'Nutzen Sie Pulverlacke für dickschichtigen Korrosionsschutz auf Stahlrahmen und Felgen. Wählen Sie die STANIAX PVD-Vakuummetallisierung für echte Chrom-/Goldspiegel, Kunststoffverchromung, Glasflakons sowie Scheinwerfer- und LED-Reflektoren.',
      comparisonRows: [
        { parameter: 'Spiegelglanz & Reflexionsgrad', optionA: '>92 % gerichteter Echtspiegel (Al 99,99 %)', optionB: '~50-60 % Silbermetallic mit Pigmentkorn' },
        { parameter: 'Prozesstemperatur', optionA: '45-75 °C (ideal für ABS, PC, PP, PA & Glas)', optionB: '180-200 °C Einbrennofen (nur Metalle)' },
        { parameter: 'Gesamtschichtdicke', optionA: '20-35 µm (Gewinde & Rastnasen bleiben frei)', optionB: '80-150 µm (rundet Kanten & Passungen ab)' },
        { parameter: 'Scheinwerfer- & Lichtoptik', optionA: 'Ja - OEM-Standard zum Reflektor bedampfen', optionB: 'Nein - streut den Lichtkegel unzulässig' },
        { parameter: 'Oberflächenverlauf', optionA: 'Optisch glatte Klasse-A-Oberfläche', optionB: 'Typische Pulverlack-Struktur' },
      ],
      sections: [
        {
          heading: 'Warum Chrom-Pulverlacke keinen echten PVD-Spiegel erreichen',
          paragraphs: [
            'Sogenannte Chrom-Effektpulver bestehen aus Aluminiumplättchen in einer dicken Polyester- oder Epoxidharzmatrix. Beim Einbrennen bei 190 °C und anschließendem Überpulvern mit Klarlack kippen die Pigmente leicht ab, sodass optisch nur ein helles Felgensilber statt eines klaren Spiegels entsteht.',
            'In den industriellen Hochvakuumkammern von STANIAX kondensiert 99,99-prozentiges Aluminium bei 10⁻⁴ mbar auf einem glatt verlaufenden UV-Primer. Die nanometrische Metallschicht erzeugt über 92 Prozent gerichtete Reflexion und lässt sich präzise in Chrom, Gold, Kupfer oder Rauchchrom mit hoher Chargenkonstanz einfärben.',
            'Zudem vermeidet das Niedertemperatur-Verfahren Ausgasungsblasen auf porösem Aluminium- und Zinkdruckguss (ZnAl), die im 200-°C-Pulverofen regelmäßig zu Ausschuss führen. Jedes Fertigungslos wird im Werk Józefów nach DIN EN ISO 2409 (Gitterschnitt Gt 0) geprüft und sicher für den EU-Versand verpackt.',
          ],
          bullets: [
            'Verchromung von Kunststoffteilen (ABS, PC, PP, PA66), Glasflakons und Metallguss',
            'Keine Maßabweichungen an Feingewinden, Dichtlippen und Steckverbindern',
            'Reproduzierbare Serienqualität für Automotive-, Kosmetik- und Leuchtenhersteller',
          ],
        },
        {
          heading: 'Wann ein Hybridaufbau auf Oldtimer-Stahlreflektoren sinnvoll ist',
          paragraphs: [
            'Bei angerosteten Stahlreflektoren klassischer Fahrzeuge kombinieren wir Entrostung und korrosionsschützende Epoxid-Grundierung mit einem hochglatten Hitzeschutzprimer sowie anschließender PVD-Aluminiumbedampfung und UV-Schutzversiegelung - für langlebige HU/TÜV-Lichtwerte.',
          ],
        },
      ],
      whenChooseATitle: 'PVD bei STANIAX wählen, wenn:',
      whenChooseA: [
        'Ein verzerrungsfreier Chrom-, Gold- oder Schwarzchrom-Spiegel gefordert ist.',
        'Kunststoffspritzgussteile, 3D-Drucke oder Glasflakons veredelt werden sollen.',
        'Scheinwerferreflektoren oder LED-Industrieleuchten neu bedampft werden müssen.',
      ],
      whenChooseBTitle: 'Pulverbeschichtung wählen, wenn:',
      whenChooseB: [
        'Schwere Stahlkonstruktionen, Zäune oder Fahrwerksteile mechanisch geschützt werden.',
        'Ein seidenglänzender Silberton (ähnlich RAL 9006) optisch ausreicht.',
      ],
      faq: [
        {
          q: 'Eignet sich Chrom-Pulverlack zum Scheinwerfer Reflektor bedampfen?',
          a: 'Nein. Pulverlack streut das Licht diffus (~55 % Reflexion) und führt zum Durchfallen bei der Hauptuntersuchung, während PVD über 92 % Spiegelreflexion liefert.',
        },
        {
          q: 'Können ABS- oder Polycarbonat-Gehäuse pulverbeschichtet werden?',
          a: 'Nein, die Einbrenntemperatur von 180-200 °C zerstört thermoplastische Spritzgussteile sofort.',
        },
        {
          q: 'Ist die PVD-Schicht mit Schutzlack witterungsbeständig?',
          a: 'Ja, versiegelt mit unseren UV-stabilen 2K-PUR- oder UV-Decklacken hält die Oberfläche auch im Außenbereich dauerhaft stand.',
        },
        {
          q: 'Wie schnell liefert STANIAX Serienlose nach Deutschland?',
          a: 'Industrieserien fertigen wir in 5-10 Werktagen (Prototypen 2-3 Tage), Scheinwerferreflektoren in 5-7 Werktagen ab Eingang in Józefów.',
        },
      ],
      relatedLinks: [
        { label: 'Leistung: Vakuummetallisierung', path: '/de/vakuummetallisierung' },
        { label: 'Vergleich: PVD vs. Galvanik', path: '/de/vergleich/vakuummetallisierung-vs-galvanik' },
        { label: 'Material: ABS-Kunststoff verchromen', path: '/de/loesungen/abs-kunststoff-beschichtung' },
        { label: 'Preise: Reflektor-Aufbereitung', path: '/de/scheinwerfer-aufbereitung-preise' },
      ],
      breadLabel: 'PVD vs. Pulverbeschichtung',
    },
  },

  'pvd-vs-hydrographics': {
    pl: {
      metaTitle: 'Metalizacja próżniowa PVD vs hydrografika chrom | STANIAX',
      metaDesc:
        'Porównanie metalizacji próżniowej PVD i hydrografiki (transferu wodnego): czystość lustra >92% bez zniekształceń folii PVA, powtarzalność serii B2B i trwałość.',
      badge: 'Porównanie: PVD vs Hydrografika',
      h1: 'Metalizacja próżniowa PVD vs hydrografika w efekcie chromu i metalu',
      subtitle:
        'Dlaczego przemysł motoryzacyjny, oświetleniowy i kosmetyczny stosuje próżniowe napylanie aluminium zamiast transferu wodnego.',
      sideALabel: 'Metalizacja próżniowa PVD (STANIAX)',
      sideBLabel: 'Hydrografika (Water Transfer Printing)',
      directAnswerQuestion: 'Czy hydrografika może zastąpić metalizację próżniową PVD w efekcie chromu?',
      directAnswer:
        'Nie. Hydrografika przenosi z powierzchni wody drukowaną folię PVA z wzorem (np. karbon, drewno), ale nie potrafi wytworzyć ciągłej warstwy czystego metalu - tzw. folie lustrzane rozciągają się na krzywiznach i dają przydymiony połysk ~45-55%. Metalizacja próżniowa PVD osadza prawdziwe aluminium 99,99% (>92% odbicia) powtarzalnie na tysiącach detali.',
      verdictTitle: 'Werdykt technologiczny',
      verdictSummary:
        'Hydrografika sprawdza się wyłącznie przy jednostkowym tuningu wzorami karbonu lub kamuflażu. Do uzyskania metalicznego lustra chromu, złota, satyny OEM oraz seryjnej produkcji B2B jedynym standardem przemysłowym jest powłoka PVD.',
      comparisonRows: [
        { parameter: 'Fizyczna natura warstwy', optionA: 'Czysty metal Al 99,99% napylony w próżni', optionB: 'Rozpuszczalna folia PVA z tuszem drukarskim' },
        { parameter: 'Efekt lustra (chrom / złoto)', optionA: '>92% odbicia zwierciadlanego bez dystorsji', optionB: 'Brak prawdziwego lustra; rozciąganie na rogach' },
        { parameter: 'Wydajność seryjna B2B', optionA: 'Setki/tysiące sztuk na cykl komory próżniowej', optionB: 'Ręczne zanurzanie pojedynczych elementów' },
        { parameter: 'Powtarzalność koloru między partiami', optionA: 'Wysoka powtarzalność koloru i połysku serii', optionB: 'Zależna od kąta zanurzenia i temperatury wody' },
        { parameter: 'Odporność termiczna w reflektorze', optionA: 'Do 220 °C z podkładem wysokotemperaturowym', optionB: 'Folia żółknie i odspaja się powyżej 80 °C' },
      ],
      sections: [
        {
          heading: 'Fizyka metalu kontra druk transferowy na wodzie',
          paragraphs: [
            'Wyszukiwane w sieci hasło „hydrografika chrom” często prowadzi do nieporozumień: folia hydrograficzna służy do nanoszenia wielobarwnych grafik (imitacja włókna węglowego, słojów drewna, marmuru), natomiast atrament drukarski nie posiada swobodnych elektronów odpowiedzialnych za metaliczne odbicie światła.',
            'W zakładzie STANIAX powłoka PVD powstaje przez odparowanie czystego aluminium w próżni 10⁻⁴ mbar na obracających się satelitach planetarnych. Każde zagłębienie, krawędź i kopuła otrzymuje jednorodną warstwę metalu bez zniekształceń geometrycznych ani szwów łączenia folii.',
          ],
          bullets: [
            'Możliwość uzyskania chromu lustrzanego, satynowego szczotkowanego aluminium, złota i miedzi',
            'Zgodność z liniami pakującymi perfumy i kosmetyki (odporność na 96% etanol)',
            'Niski koszt jednostkowy przy seriach od kilkuset do ponad 100 000 sztuk',
          ],
        },
        {
          heading: 'Alternatywa dla detali tuningowych i wnętrz samochodowych',
          paragraphs: [
            'Dla listew kokpitu, emblematów, obudów lusterek i detali motocyklowych z ABS lub PC/ABS oferujemy zarówno pełne chromowanie PVD (w tym modny dark chrome / przydymiony grafit), jak i lakierowanie Piano Black >92 GU oraz powłoki Soft-Touch o fabrycznej trwałości.',
          ],
        },
      ],
      whenChooseATitle: 'Wybierz metalizację PVD, gdy:',
      whenChooseA: [
        'Potrzebujesz jednolitego chromu, złota, tytanu lub odbłyśnika optycznego.',
        'Zlecasz produkcję seryjną opakowań, elektroniki lub detali automotive.',
        'Wymagasz udokumentowanej przyczepności ISO 2409 Gt 0 i odporności chemicznej.',
      ],
      whenChooseBTitle: 'Wybierz hydrografikę, gdy:',
      whenChooseB: [
        'Chcesz nanieść wzór tekstury (karbon, camo, drewno) na pojedynczy detal hobbystyczny.',
      ],
      faq: [
        {
          q: 'Czy istnieje folia do hydrografiki dająca 100% efekt lustrzanego chromu?',
          a: 'Nie. Folie PVA nie przewodzą ani nie odbijają światła jak czysty metal; prawdziwy efekt chromu na plastiku daje wyłącznie PVD lub galwanizacja.',
        },
        {
          q: 'Czy można położyć PVD na elemencie wcześniej pokrytym hydrografiką?',
          a: 'Wymaga to najpierw całkowitego usunięcia starej powłoki do surowego tworzywa i nałożenia dedykowanego podkładu UV.',
        },
        {
          q: 'Czy w PVD można uzyskać przyciemniany „czarny chrom” (shadow line)?',
          a: 'Tak, barwiąc lakier nawierzchniowy transparentnymi pigmentami uzyskujemy głęboki grafitowy lub czarny chrom o lustrzanym połysku.',
        },
        {
          q: 'Ile sztuk mieści jeden wsad komory PVD w STANIAX?',
          a: 'W zależności od wymiaru od ok. 30 dużych obudów do blisko 1000 drobnych nakrętek w jednym cyklu komory wysokiej próżni.',
        },
      ],
      relatedLinks: [
        { label: 'Usługa: Metalizacja tworzyw sztucznych', path: '/metalizacja-tworzyw-sztucznych' },
        { label: 'Porównanie: PVD vs Chrom natryskowy', path: '/porownanie/metalizacja-prozniowa-vs-chromowanie-natryskowe' },
        { label: 'Matryca: Powlekanie tworzywa ABS', path: '/rozwiazania/powlekanie-tworzywa-abs' },
        { label: 'Galeria 115+ realizacji PVD', path: '/gallery' },
      ],
      breadLabel: 'PVD vs Hydrografika',
    },
    en: {
      metaTitle: 'PVD Vacuum Metallization vs Hydrographics Chrome | STANIAX',
      metaDesc:
        'Engineering comparison of PVD vacuum metallization vs water transfer printing (hydrographics): >92% real aluminum mirror vs printed PVA film, B2B repeatability.',
      badge: 'Comparison: PVD vs Hydrographics',
      h1: 'PVD Vacuum Metallization vs Hydrographics (Water Transfer Printing)',
      subtitle:
        'Why automotive, lighting, and luxury packaging OEMs specify vacuum-deposited aluminum rather than water-transfer films for metallic finishes.',
      sideALabel: 'PVD Vacuum Metallization (STANIAX)',
      sideBLabel: 'Hydrographics (Water Transfer)',
      directAnswerQuestion: 'Can hydrographics achieve the same chrome mirror finish as PVD vacuum metallization?',
      directAnswer:
        'No. Hydrographics floats a printed polyvinyl alcohol (PVA) ink film on water to apply patterns like carbon fiber or woodgrain, but ink cannot replicate continuous metallic electron reflection - yielding muted ~45% sheen and corner stretching. STANIAX PVD deposits 99.99% pure aluminum in high vacuum for >92% distortion-free mirror chrome.',
      verdictTitle: 'Engineering Verdict',
      verdictSummary:
        'Reserve hydrographics for one-off decorative patterns (camo, woodgrain, carbon weave). Specify STANIAX PVD vacuum metallization for authentic chrome, gold, smoked titanium, optical reflectors, and repeatable B2B production runs.',
      comparisonRows: [
        { parameter: 'Physical Coating Layer', optionA: '99.99% pure vapor-deposited aluminum metal', optionB: 'Dissolved PVA film with printed graphic inks' },
        { parameter: 'Mirror Specular Clarity', optionA: '>92% true mirror without curvature distortion', optionB: 'No true mirror; pattern stretches on deep draws' },
        { parameter: 'Production Throughput', optionA: 'High-density rotary chamber cycles (hundreds of parts)', optionB: 'Manual piece-by-piece water dipping' },
        { parameter: 'Batch-to-Batch Consistency', optionA: 'High batch-to-batch color and gloss consistency', optionB: 'Varies with dip angle and water temperature' },
        { parameter: 'Thermal Stability', optionA: 'Up to 220 °C with high-temp reflector primer', optionB: 'Degrades above 80 °C; unsuitable for optics' },
      ],
      sections: [
        {
          heading: 'Continuous Vapor-Deposited Metal vs Printed Graphic Inks',
          paragraphs: [
            'Designers searching for chrome hydrographics quickly discover that water-transfer printing relies on organic inks that lack free metallic electrons. Even specialty metallic transfer films appear pewter-gray when placed beside OEM automotive trim.',
            'Inside STANIAX high-vacuum chambers (10⁻⁴ mbar), planetary rotation coats complex 3D undercuts evenly with pure aluminum atoms, followed by UV or 2K polyurethane clearcoats tinted to bright chrome, 24k gold, champagne, or dark gunmetal.',
          ],
          bullets: [
            'Zero film seams, air bubbles, or water-rinse residue inside screw threads',
            'Passes 96% ethanol perfumery tests and ISO 2409 Class 0 cross-hatch adhesion',
            'Economical unit cost from 200-piece pilot runs to 100,000+ packaging closures',
          ],
        },
        {
          heading: 'Automotive Interior Trim & Smoked Dark-Chrome Options',
          paragraphs: [
            'For interior bezels, emblems, and mirror caps molded in ABS or PC/ABS, STANIAX combines PVD dark-chrome tints with Piano Black (>92 GU) and tactile soft-touch spray coatings under one roof near Warsaw.',
          ],
        },
      ],
      whenChooseATitle: 'Choose STANIAX PVD when:',
      whenChooseA: [
        'True mirror chrome, gold, satin aluminum, or smoked chrome is required.',
        'Scaling B2B packaging, lighting, or appliance component batches.',
        'Parts require verified thermal, UV, and alcohol chemical resistance.',
      ],
      whenChooseBTitle: 'Choose Hydrographics when:',
      whenChooseB: [
        'Applying multi-color graphic textures (carbon weave, wood, camouflage) on custom parts.',
      ],
      faq: [
        {
          q: 'Is there any hydrographic film that produces real mirror chrome?',
          a: 'No. Printed PVA inks cannot form a continuous metallic mirror; real plastic chrome requires PVD vacuum metallization or electroplating.',
        },
        {
          q: 'Can PVD achieve tinted dark chrome or brushed titanium looks?',
          a: 'Yes, precision dye-tinted UV/2K topcoats over PVD aluminum produce repeatable dark chrome, bronze, champagne, and rose gold.',
        },
        {
          q: 'Can parts previously dipped in hydrographics be recoated with PVD?',
          a: 'Only after full stripping down to clean virgin substrate and application of a compatible UV leveling basecoat.',
        },
        {
          q: 'How many closures fit into a single STANIAX vacuum cycle?',
          a: 'Approximately 600-1,000 small cosmetic caps per high-vacuum planetary cycle.',
        },
      ],
      relatedLinks: [
        { label: 'Service: Plastic Chrome Plating PVD', path: '/en/plastic-chrome-plating' },
        { label: 'Compare: PVD vs Spray Chrome', path: '/en/compare/vacuum-metallization-vs-spray-chrome' },
        { label: 'Substrate: ABS Plastic Coating', path: '/en/solutions/abs-plastic-coating-pvd' },
        { label: 'Production Gallery (115+ Photos)', path: '/en/gallery' },
      ],
      breadLabel: 'PVD vs Hydrographics',
    },
    de: {
      metaTitle: 'Vakuummetallisierung vs. Wassertransferdruck | STANIAX',
      metaDesc:
        'PVD-Vakuummetallisierung vs. Wassertransferdruck (Hydrografik): >92 % echter Aluminiumspiegel statt PVA-Druckfolie, hohe Serienkonstanz & ISO 2409.',
      badge: 'Vergleich: PVD vs. Hydrografik',
      h1: 'PVD-Vakuummetallisierung vs. Wassertransferdruck (Hydrografik)',
      subtitle:
        'Warum Automobilzulieferer, Leuchtenhersteller und Kosmetikmarken auf Hochvakuum-Aluminium statt Wassertransferfolien setzen.',
      sideALabel: 'PVD-Vakuummetallisierung (STANIAX)',
      sideBLabel: 'Wassertransferdruck (Hydrografik)',
      directAnswerQuestion: 'Kann Wassertransferdruck (Hydrografik) echten PVD-Chromspiegel auf Kunststoff ersetzen?',
      directAnswer:
        'Nein. Beim Wassertransferdruck schwimmt eine bedruckte PVA-Folie (z. B. Carbon- oder Holzdekor) auf dem Wasserbad; Druckfarben erzeugen jedoch keinen metallischen Spiegel, sondern dehnen sich an Kanten und liefern maximal ~45 % grauen Glanz. STANIAX bedampft 99,99 % Reinaluminium im Hochvakuum für >92 % verzerrungsfreien Echtchrom.',
      verdictTitle: 'Technisches Fazit',
      verdictSummary:
        'Wassertransferdruck eignet sich für Einzelstücke mit Carbon- oder Tarnmuster. Für echte Chrom-, Gold- und Titan-Spiegeloberflächen, Reflektoren sowie wirtschaftliche B2B-Serien ist die PVD-Vakuummetallisierung alternativlos.',
      comparisonRows: [
        { parameter: 'Schichtaufbau', optionA: '99,99 % Reinaluminium aus der Gasphase', optionB: 'Aufgelöste PVA-Trägerfolie mit Druckfarbe' },
        { parameter: 'Spiegelbild & Reflexion', optionA: '>92 % scharfer Echtspiegel ohne Verzug', optionB: 'Kein echter Spiegel; Folienverzug an Radien' },
        { parameter: 'Serienkapazität B2B', optionA: 'Hohe Packungsdichte je Hochvakuum-Kammerzyklus', optionB: 'Manuelles Einzeltauchen im Wasserbecken' },
        { parameter: 'Farbkonstanz (Charge zu Charge)', optionA: 'Hohe Farb- und Glanzgradkonstanz je Charge', optionB: 'Schwankt mit Eintauchwinkel & Wassertemperatur' },
        { parameter: 'Hitzefestigkeit im Scheinwerfer', optionA: 'Bis 220 °C mit Hitzeschutzprimer', optionB: 'Vergilbt und reißt oberhalb von 80 °C' },
      ],
      sections: [
        {
          heading: 'Physikalischer Metallspiegel gegen bedruckte Transferfolie',
          paragraphs: [
            'Unter dem Suchbegriff „Hydrografik Chrom“ suchen viele Anwender nach einer einfachen Methode zum Kunststoff verchromen. Da Drucktinten jedoch keine geschlossene Metallgitterstruktur bilden, wirkt jede Transferfolie im direkten Vergleich wie grauer Felgenlack.',
            'Im STANIAX-Werk in Józefów rotieren die Bauteile auf Planetengestellen im Hochvakuum (10⁻⁴ mbar). Das verdampfte Aluminium legt sich gleichmäßig um dreidimensionale Konturen, ohne Nähte, Wasserflecken oder verstopfte Feingewinde zu hinterlassen.',
            'Anschließend versiegeln UV-härtende oder zweikomponentige Decklacke die Metallschicht abriebfest nach DIN EN ISO 2409 (Gt 0) - wahlweise in Hochglanz-Chrom, 24-Karat-Gold, Roségold oder edlem Dark Chrome für Interieurleisten und Premium-Flakons.',
          ],
          bullets: [
            'Beständig gegen 96 % Parfümethanol, Handschweiß und Innenraumreiniger',
            'Wirtschaftliche Stückkosten in Klein- und Großserien durch Drehgestelle',
            'Kombinierbar mit Klavierlack (>92 GU) und Soft-Touch-Lackierung im selben Werk',
          ],
        },
        {
          heading: 'Wann welche Oberflächentechnik im Fahrzeug- und Produktdesign überzeugt',
          paragraphs: [
            'Während Hydrografik reine Musterdekore abdeckt, erfüllt die PVD-Vakuummetallisierung sämtliche optischen und mechanischen Lastenhefte europäischer OEM-Serienprojekte bei regulären Lieferzeiten von 5-10 Werktagen (Prototypen 2-3 Tage).',
            'Speziell bei komplex geformten Zierblenden, Marken-Emblemen, Spiegelkappen und Lüftungsdüsen aus ABS oder PC/ABS garantiert die Gasphasenabscheidung kantenscharfe Konturen ohne Folienverzug. Zudem lassen sich Teilbereiche per Präzisionsmaskierung selektiv verspiegeln oder mit matten Kontrastflächen kombinieren.',
          ],
        },
      ],
      whenChooseATitle: 'PVD-Metallisierung wählen, wenn:',
      whenChooseA: [
        'Makelloser Chrom-, Gold- oder Rauchchrom-Spiegel auf Kunststoff oder Glas gewünscht ist.',
        'Reproduzierbare B2B-Serien mit dokumentierter Haftfestigkeit gefertigt werden.',
        'Optische Reflektoren oder temperaturbelastete Leuchtenteile beschichtet werden.',
      ],
      whenChooseBTitle: 'Wassertransferdruck wählen, wenn:',
      whenChooseB: [
        'Einzelteile im Tuningbereich ein Carbon-, Wurzelholz- oder Camouflage-Muster erhalten sollen.',
      ],
      faq: [
        {
          q: 'Gibt es Wassertransferfolien mit echtem Chromspiegel?',
          a: 'Nein, Transferfolien erreichen physikalisch keinen reinen Metallspiegel; echter Chromglanz auf Kunststoff entsteht nur per PVD oder Galvanik.',
        },
        {
          q: 'Ist abgedunkeltes „Shadow-Chrom“ per PVD möglich?',
          a: 'Ja, durch lasierend eingefärbte UV-/2K-Decklacke über dem Aluminiumspiegel fertigen wir reproduzierbares Rauchchrom, Titan und Bronze.',
        },
        {
          q: 'Können bereits mit Hydrografik beschichtete Teile neu bedampft werden?',
          a: 'Erst nach vollständigem Entschichten bis auf den sauberen Rohkunststoff und Auftrag unseres UV-Glättprimers.',
        },
        {
          q: 'Wie viele Teile passen in eine Kammerladung bei STANIAX?',
          a: 'Je nach Bauteilgeometrie zwischen rund 30 Großteilen und bis zu 900 Kosmetikkappen pro Hochvakuum-Kammerzyklus.',
        },
      ],
      relatedLinks: [
        { label: 'Leistung: Kunststoff verchromen', path: '/de/kunststoff-verchromen' },
        { label: 'Vergleich: PVD vs. Spritzchrom', path: '/de/vergleich/vakuummetallisierung-vs-spritzchrom' },
        { label: 'Material: ABS-Beschichtung', path: '/de/loesungen/abs-kunststoff-beschichtung' },
        { label: 'Referenzgalerie (115+ Bilder)', path: '/de/gallery' },
      ],
      breadLabel: 'PVD vs. Wassertransferdruck',
    },
  },

  'pvd-vs-biled-retrofit': {
    pl: {
      metaTitle: 'Regeneracja odbłyśników PVD vs soczewki Bi-LED | STANIAX',
      metaDesc:
        'Regeneracja fabrycznego odbłyśnika PVD w STANIAX (od 150 zł/szt.) vs modernizacja lamp na soczewki Bi-LED w warsztacie: koszty, optyka, przepisy i trwałość.',
      badge: 'Porównanie: Regeneracja PVD vs Modernizacja Bi-LED',
      h1: 'Regeneracja odbłyśników PVD vs modernizacja reflektorów na soczewki Bi-LED',
      subtitle:
        'Porównanie techniczne i kosztowe przywrócenia fabrycznego lustra odbłyśnika H7 / Bi-Xenon metodą PVD z kompleksowym montażem projektorów Bi-LED w wyspecjalizowanym warsztacie.',
      sideALabel: 'Regeneracja odbłyśnika PVD (STANIAX)',
      sideBLabel: 'Modernizacja na soczewki Bi-LED (warsztat)',
      directAnswerQuestion: 'Kiedy wybrać regenerację fabrycznego odbłyśnika PVD, a kiedy montaż soczewek Bi-LED?',
      directAnswer:
        'Regeneracja oryginalnego odbłyśnika metodą PVD w STANIAX (od 150-250 zł/szt. dostarczonego odbłyśnika, realizacja 5-7 dni roboczych) przywraca fabryczne parametry odbicia światła przy 100% zachowaniu oryginalnej konstrukcji, homologacji ECE i systemów skrętnych AFS. Montaż soczewek Bi-LED (1500-3500 zł w wyspecjalizowanym warsztacie) to kierunek modernizacji starszych lamp halogenowych, wymagający prawidłowego ustawienia linii odcięcia i dopasowania do przepisów.',
      verdictTitle: 'Rekomendacja techniczna i budżetowa dla kierowców oraz warsztatów',
      verdictSummary:
        'Jeśli reflektor posiada fabryczną soczewkę Xenon/Bi-Xenon/H7 lub zależy Ci na pełnej zgodności z fabryczną homologacją w ułamku ceny nowej lampy, metalizacja próżniowa odbłyśnika jest rozwiązaniem optymalnym. Przy kompleksowym tuningu starszych lamp w wyspecjalizowanym warsztacie STANIAX wspiera także lakierowanie dekoracyjne ramek i wnętrz reflektorów.',
      comparisonRows: [
        { parameter: 'Zgodność z fabryczną homologacją lampy', optionA: '100% zachowana oryginalna konstrukcja i oznaczenia ECE', optionB: 'Wymaga prawidłowego ustawienia linii odcięcia i dopasowania do przepisów' },
        { parameter: 'Koszt usługi (komplet lewa + prawa strona)', optionA: 'od 300 - 600 zł za parę dostarczonych odbłyśników (700-1400 zł z usługą warsztatu)', optionB: '1 500 - 3 500 zł za kompleksową modernizację w warsztacie' },
        { parameter: 'Charakterystyka wiązki światła', optionA: 'Powrót do fabrycznego snopa światła i pełnego zasięgu OEM', optionB: 'Skupiony snop LED, równomierne pobocze i niższy pobór energii' },
        { parameter: 'Kompatybilność z CANBUS i skrętnym AFS', optionA: '100% Plug & Play z fabrycznymi przetwornicami i silniczkami', optionB: 'Wymaga adaptacji mocowań i elektroniki przez specjalistyczny serwis' },
        { parameter: 'Serwisowalność w kolejnych latach', optionA: 'Łatwa wymiana standardowej żarówki H7 lub żarnika D1S/D2S/D3S', optionB: 'Zintegrowany moduł LED serwisowany przez warsztat oświetleniowy' },
      ],
      sections: [
        {
          heading: 'Dlaczego sprawne reflektory Xenon i H7 po regeneracji PVD odzyskują pełną moc?',
          paragraphs: [
            'W wielu autach wrażenie słabych świateł nie wynika z przestarzałej konstrukcji lampy, lecz z wypalenia warstwy aluminium na odbłyśniku nad żarnikiem. Próżniowe napylenie nowej warstwy aluminium z powłoką ochronną UV w komorze STANIAX przywraca fabryczną sprawność w 5-7 dni roboczych bez ingerencji w instalację elektryczną.',
            'Z kolei w starszych modelach z reflektorami halogenowymi kierowcy decydujący się na tuning oświetlenia powierzają wyspecjalizowanym warsztatom montaż soczewek Bi-LED lub Bi-Xenon, a elementy dekoracyjne i ramki przekazują do lakierni przemysłowej STANIAX.',
          ],
          bullets: [
            'Zachowana ostra granica światłocienia na stacji kontroli pojazdów',
            'Regeneracja zarówno odbłyśników H7/Xenon, jak i zwierciadeł z fabrycznych lamp LED',
            'Trwałość powłoki do 5 lat (standardowo 3-5 lat eksploatacji)',
          ],
        },
        {
          heading: 'Współpraca STANIAX z warsztatami modernizującymi i regenerującymi oświetlenie',
          paragraphs: [
            'Wyjęcie lampy z samochodu, rozklejenie obudowy czy montaż projektorów wykonuje wyspecjalizowany warsztat samochodowy, natomiast STANIAX realizuje przemysłową metalizację próżniową i natryskową odbłyśników oraz dekoracyjne lakierowanie maskownic i elementów wewnętrznych lamp.',
          ],
        },
      ],
      whenChooseATitle: 'Wybierz regenerację odbłyśnika PVD w STANIAX, gdy:',
      whenChooseA: [
        'Chcesz zachować 100% oryginalną konstrukcję i fabryczną homologację reflektora ECE.',
        'Szukasz ekonomicznej naprawy (od 150 zł/szt. dostarczonego odbłyśnika) o trwałości do 5 lat.',
        'Zależy Ci na bezbłędnym działaniu fabrycznych systemów skrętnych AFS i poziomowania.',
      ],
      whenChooseBTitle: 'Modernizację na soczewki Bi-LED w wyspecjalizowanym warsztacie rozważ, gdy:',
      whenChooseB: [
        'Modernizujesz starsze reflektory halogenowe w specjalistycznym serwisie, który prawidłowo ustawi linię odcięcia i zadba o zgodność z przepisami.',
        'Łączysz przebudowę oświetlenia z tuningiem wizualnym wnętrza lampy (np. lakierowaniem ramek i maskownic).',
      ],
      faq: [
        {
          q: 'Na co zwrócić uwagę przy wyborze między regeneracją PVD a montażem Bi-LED?',
          a: 'Regeneracja PVD odtwarza fabryczną warstwę odbijającą bez zmiany źródła światła, dzięki czemu zachowuje pełną homologację. Montaż soczewek Bi-LED poprawia skupienie światła w starszych autach, ale wymaga powierzenia prac wyspecjalizowanemu warsztatowi i dopasowania do przepisów, by nie oślepiać innych kierowców.',
        },
        {
          q: 'Czy zregenerowany w STANIAX odbłyśnik Bi-Xenon odzyskuje fabryczny blask?',
          a: 'Tak, próżniowe napylenie aluminium z warstwą ochronną UV przywraca lustrzany połysk porównywalny z fabrycznym oryginałem.',
        },
        {
          q: 'Czy STANIAX lakieruje również ramki i wnętrza tuningowanych lamp?',
          a: 'Tak, jako lakiernia przemysłowa wykonujemy trwałe lakierowanie dekoracyjne wewnętrznych ramek i elementów reflektorów dla warsztatów i klientów.',
        },
        {
          q: 'Ile trwa regeneracja wymontowanych odbłyśników wysłanych do Józefowa?',
          a: 'Standardowy czas realizacji dla odbłyśników nadesłanych kurierem na ul. kard. Stefana Wyszyńskiego 116A w Józefowie wynosi 5-7 dni roboczych.',
        },
      ],
      relatedLinks: [
        { label: 'Cennik i kalkulator regeneracji', path: '/cennik-regeneracji-reflektorow' },
        { label: 'Rozwiązanie: Soczewki Bi-Xenon i LED', path: '/rozwiazania/regeneracja-soczewek-bi-xenon-i-lamp-led' },
        { label: 'Poradnik: Regeneracja i modernizacja lamp', path: '/news/regeneracja-odblysnikow-reflektorow-samochodowych' },
        { label: 'Lokalizacja: Warszawa i Józefów', path: '/regeneracja-reflektorow/warszawa-jozefow' },
      ],
      breadLabel: 'PVD OEM vs Soczewki Bi-LED',
    },
    en: {
      metaTitle: 'OEM Reflector PVD Restoration vs Bi-LED Lenses | STANIAX',
      metaDesc:
        'Compare OEM headlight reflector PVD restoration at STANIAX vs workshop Bi-LED projector modernization: beam output, ECE compliance, cost, and durability.',
      badge: 'Headlight Comparison: OEM PVD vs Bi-LED',
      h1: 'OEM Headlight Reflector PVD Restoration vs Bi-LED Projector Modernization',
      subtitle:
        'Technical and financial comparison between restoring factory H7/Bi-Xenon reflector bowls via vacuum PVD and commissioning a specialized workshop Bi-LED upgrade.',
      sideALabel: 'OEM Reflector PVD Restoration (STANIAX)',
      sideBLabel: 'Workshop Bi-LED Lens Modernization',
      directAnswerQuestion: 'When should you restore OEM reflector bowls with PVD versus upgrading to Bi-LED lenses?',
      directAnswer:
        'Restoring your original OEM reflector bowl via vacuum aluminum PVD at STANIAX (from ~€35/150 PLN per supplied bowl, 5-7 business days) recovers factory beam output while keeping 100% original ECE homologation and AFS electronics. Mounting Bi-LED lenses at a specialized workshop (€400-€900) is a popular modernization path for older halogen headlamps that requires accurate cutoff alignment and regulatory verification.',
      verdictTitle: 'Technical & Financial Recommendation',
      verdictSummary:
        'When your vehicle already features quality Hella, Valeo, Bosch, or Koito optics, PVD reflector restoration delivers factory road visibility at a fraction of conversion cost. For custom headlamp tuning projects, STANIAX also supports workshops with industrial decorative painting of internal bezels and frames.',
      comparisonRows: [
        { parameter: 'Factory ECE Type-Approval', optionA: '100% original lamp design and markings preserved', optionB: 'Requires accurate cutoff alignment and regulatory checks' },
        { parameter: 'Typical Pair Cost (Left + Right)', optionA: '€75 - €140 for supplied bowls (~€170-€330 incl. workshop)', optionB: '€400 - €900 for full specialist workshop conversion' },
        { parameter: 'Beam Characteristics', optionA: 'Restores factory OEM parabola distribution and range', optionB: 'Focused LED beam, wide road-edge light, low power draw' },
        { parameter: 'Adaptive AFS & CANBUS Electronics', optionA: '100% plug-and-play with original ballasts and motors', optionB: 'Requires custom bracket mounting and CANBUS adaptation' },
        { parameter: 'Long-Term Serviceability', optionA: 'Uses standard replaceable D1S/D2S/H7 bulbs', optionB: 'Integrated LED projector serviced by lighting specialist' },
      ],
      sections: [
        {
          heading: 'Why Factory Xenon and H7 Projectors Regain Full Output After PVD',
          paragraphs: [
            'In most 8-to-12-year-old vehicles, weak low beams stem from oxidized aluminum directly above the bulb rather than outdated projector design. Evaporating fresh aluminum with a UV protective coating in STANIAX vacuum chambers restores factory performance in 5-7 business days without cutting OEM frames.',
            'Conversely, owners of older halogen models seeking lighting modernization often entrust specialized workshops with Bi-LED or Bi-Xenon projector installation, while relying on STANIAX for industrial painting of internal trims and bezels.',
          ],
          bullets: [
            'Crisp low-beam cutoff step on MOT/TÜV alignment testers',
            'Supports H7, Xenon, classic metal bowls, and factory OEM LED reflectors',
            '3-5 years (up to 5 years) of durable thermal and moisture resistance',
          ],
        },
        {
          heading: 'B2B Cooperation With Automotive Lighting Workshops',
          paragraphs: [
            'Headlamp removal from the car, housing unsealing, and projector retrofitting are performed by specialized automotive workshops, while STANIAX handles vacuum and spray metallization of reflectors plus decorative coating of internal headlamp trims.',
          ],
        },
      ],
      whenChooseATitle: 'Choose OEM PVD Restoration at STANIAX when:',
      whenChooseA: [
        'You want to preserve 100% factory ECE type-approval and original OEM optics.',
        'You want maximum night-visibility recovery at minimal cost (from ~€35/bowl).',
        'Your vehicle uses dynamic cornering AFS motors and OEM ballasts.',
      ],
      whenChooseBTitle: 'Consider Workshop Bi-LED Modernization when:',
      whenChooseB: [
        'Upgrading older halogen headlamps at a specialized workshop with proper cutoff alignment and regulatory compliance checks.',
        'Combining lighting modernization with custom decorative painting of internal bezels and shrouds.',
      ],
      faq: [
        {
          q: 'What is the key difference between PVD restoration and Bi-LED modernization?',
          a: 'PVD restoration renews the original reflective coating without altering the certified light source. Bi-LED installation modernizes older lamps with higher brightness and lower energy draw, provided a specialist workshop aligns the cutoff properly and respects road regulations.',
        },
        {
          q: 'How bright is a PVD-restored Bi-Xenon bowl?',
          a: 'Vacuum aluminum metallization restores mirror reflection comparable to a brand-new factory reflector.',
        },
        {
          q: 'Does STANIAX also paint internal headlamp bezels for custom builds?',
          a: 'Yes, as an industrial paint shop we apply durable decorative coatings to internal frames, shrouds, and trim rings.',
        },
        {
          q: 'What is the turnaround for shipped projector bowls?',
          a: '5-7 business days at our Józefów facility near Warsaw plus insured courier transit.',
        },
      ],
      relatedLinks: [
        { label: 'Headlight Restoration Pricing', path: '/en/headlight-restoration-pricing' },
        { label: 'Solution: Bi-Xenon & LED Projectors', path: '/en/solutions/bixenon-projector-and-led-reflector-restoration' },
        { label: 'Guide: Reflector & Lamp Modernization', path: '/en/news/reflector-regeneration-and-headlight-polishing' },
        { label: 'Warsaw & Józefów Plant Hub', path: '/en/headlight-restoration/warsaw-jozefow' },
      ],
      breadLabel: 'OEM PVD vs Bi-LED Lenses',
    },
    de: {
      metaTitle: 'Reflektor PVD bedampfen vs. Bi-LED-Linsen | STANIAX',
      metaDesc:
        'Original-Reflektor PVD neu bedampfen bei STANIAX (ab ca. 35 €) vs. Bi-LED-Modernisierung in der Fachwerkstatt: Lichtausbeute, Vorschriften & Kosten.',
      badge: 'Scheinwerfer-Vergleich: OEM PVD vs. Bi-LED',
      h1: 'Original-Reflektor PVD bedampfen vs. Modernisierung auf Bi-LED-Linsen',
      subtitle:
        'Technischer und wirtschaftlicher Vergleich zwischen werkseitiger PVD-Neuverspiegelung und fachgerechter Bi-LED-Modernisierung durch spezialisierte Werkstätten.',
      sideALabel: 'OEM-Reflektor PVD bedampfen (STANIAX)',
      sideBLabel: 'Bi-LED-Modernisierung (Fachwerkstatt)',
      directAnswerQuestion: 'Wann lohnt sich das PVD-Bedampfen des Originalreflektors und wann eine Bi-LED-Modernisierung?',
      directAnswer:
        'Das PVD-Bedampfen des angelieferten Originalreflektors bei STANIAX (ab ca. 35-60 €/Stück, 5-7 Werktage im Werk) stellt die werkseitige Reflexionsleistung unter 100 % Erhalt der Original-Bauartgenehmigung und AFS-Kurvenlichttechnik wieder her. Die Montage von Bi-LED-Linsen in einer spezialisierten Fachwerkstatt (450-1.000 €) ist eine beliebte Modernisierung älterer Halogenscheinwerfer, die eine exakte Einstellung der Hell-Dunkel-Grenze und Beachtung der Zulassungsvorschriften erfordert.',
      verdictTitle: 'Technisches & wirtschaftliches Fazit',
      verdictSummary:
        'Bei vorhandenen Hella-, Valeo- oder Bosch-Projektoren liefert die PVD-Neuverspiegelung des Originalreflektors volle Leuchtkraft zum Bruchteil eines Komplettumbaus. Für Scheinwerfer-Tuning-Projekte übernimmt STANIAX zudem die industrielle Dekorlackierung von Innenblenden und Rahmen.',
      comparisonRows: [
        { parameter: 'Original-Bauartgenehmigung & Prüfzeichen', optionA: '100 % Erhalt der unveränderten Serienkonstruktion', optionB: 'Erfordert exakte Hell-Dunkel-Grenze und Prüfung der Vorschriften' },
        { parameter: 'Kosten für beide Fahrzeugseiten', optionA: 'Ca. 75 - 140 € für angelieferte Reflektoren (ca. 170-330 € inkl. Werkstatt)', optionB: '450 - 1.000 € für kompletten Fachwerkstatt-Umbau' },
        { parameter: 'Lichtcharakteristik', optionA: 'Werkstreue Lichtverteilung und volle Serienreichweite', optionB: 'Fokussierter LED-Lichtkegel und geringer Energieverbrauch' },
        { parameter: 'Kurvenlicht (AFS) & Bordelektronik', optionA: '100 % Plug-and-Play mit Original-Steuergeräten', optionB: 'Mechanische & elektronische Anpassung durch Fachbetrieb nötig' },
        { parameter: 'Wartungsfreundlichkeit', optionA: 'Standard-Leuchtmittel D1S/D2S/H7 jederzeit wechselbar', optionB: 'Integriertes LED-Modul wird über Fachbetrieb gewartet' },
      ],
      sections: [
        {
          heading: 'Warum Bi-Xenon- und H7-Scheinwerfer nach PVD wieder wie ab Werk leuchten',
          paragraphs: [
            'Dass Scheinwerfer nach einigen Betriebsjahren schwach wirken, liegt fast immer an der thermisch gealterten Aluminiumschicht über dem Brenner. STANIAX trägt im Vakuum hitzefesten Grundlack, reines Aluminium und UV-Schutzlack auf - binnen 5-7 Werktagen erreicht der Reflektor wieder Werksparameter.',
            'Bei älteren Halogenscheinwerfern nutzen viele Fahrzeughalter die Gelegenheit zur Beleuchtungsmodernisierung mit Bi-LED- oder Bi-Xenon-Linsen in spezialisierten Fachwerkstätten, während STANIAX als Industrielackiererei Innenblenden und Zierrahmen veredelt.',
          ],
          bullets: [
            'Saubere Hell-Dunkel-Grenze am Einstellgerät ohne Blendung des Gegenverkehrs',
            'Geeignet für H7-, Xenon-, Oldtimer- sowie werkseitige OEM-LED-Reflektoren',
            '3 bis 5 Jahre Haltbarkeit im regulären Scheinwerferbetrieb',
          ],
        },
        {
          heading: 'Arbeitsteilung zwischen Kfz-Fachwerkstatt und PVD-Werk STANIAX',
          paragraphs: [
            'Ausbau der Scheinwerfer, Öffnen der Gehäuse und Linsenmontage erfolgen durch spezialisierte Kfz-Werkstätten, während STANIAX die industrielle Vakuum- und Spritzmetallisierung der Reflektoren sowie die Lackierung von Rahmenteilen ausführt.',
          ],
        },
      ],
      whenChooseATitle: 'Originalreflektor bei STANIAX bedampfen lassen, wenn:',
      whenChooseA: [
        'Die originale ECE-Bauartgenehmigung und Serienoptik zu 100 % erhalten bleiben sollen.',
        'Dynamisches Kurvenlicht (AFS) und Original-Vorschaltgeräte unverändert weiterlaufen sollen.',
        'Maximale Lichtausbeute zum Bruchteil eines Umbaus oder Neukaufs gewünscht ist.',
      ],
      whenChooseBTitle: 'Bi-LED-Modernisierung in einer Fachwerkstatt erwägen, wenn:',
      whenChooseB: [
        'Ältere Halogenscheinwerfer durch einen Fachbetrieb modernisiert werden, der Hell-Dunkel-Grenze und Vorschriften fachgerecht berücksichtigt.',
        'Gleichzeitig ein optisches Scheinwerfer-Tuning (z. B. Lackierung des Scheinwerferinnenraums) geplant ist.',
      ],
      faq: [
        {
          q: 'Worin liegt der Hauptunterschied zwischen PVD-Aufbereitung und Bi-LED-Umbau?',
          a: 'Die PVD-Regeneration erneuert lediglich die Spiegelschicht des Originalbauteils unter vollem Erhalt der Bauartgenehmigung. Ein Bi-LED-Einbau modernisiert ältere Scheinwerfer spürbar, gehört aber in die Hände spezialisierter Fachwerkstätten mit korrekter Einstellung der Hell-Dunkel-Grenze und Beachtung der Vorschriften.',
        },
        {
          q: 'Wie hell leuchtet ein neu bedampfter Bi-Xenon-Reflektor?',
          a: 'Der Spiegeleffekt nach der Vakuummetallisierung ist mit der Werksausführung vergleichbar und stellt die volle Leuchtweite wieder her.',
        },
        {
          q: 'Lackiert STANIAX auch Scheinwerferblenden und Rahmen?',
          a: 'Ja, als Industrielackiererei beschichten wir Innenblenden, Zierringe und Gehäuseteile in Wunschfarben und Spezialeffekten.',
        },
        {
          q: 'Wie lange dauert die Bearbeitung eingesandter Reflektoren im Werk?',
          a: 'Die reguläre Durchlaufzeit in unserem Werk in Józefów beträgt 5-7 Werktage zuzüglich Paketversand.',
        },
      ],
      relatedLinks: [
        { label: 'Preise & Rechner: Aufbereitung', path: '/de/scheinwerfer-aufbereitung-preise' },
        { label: 'Lösung: Bi-Xenon & LED-Reflektoren', path: '/de/loesungen/bi-xenon-linsen-und-led-scheinwerfer-bedampfen' },
        { label: 'Ratgeber: Regeneration & Modernisierung', path: '/de/news/scheinwerfer-reflektoren-regeneration-und-polieren' },
        { label: 'Werkstandort Warschau & Józefów', path: '/de/scheinwerfer-aufbereitung/warschau-jozefow' },
      ],
      breadLabel: 'OEM-PVD vs. Bi-LED-Linsen',
    },
  },

  'uv-hardcoat-vs-acetone-vapor': {
    pl: {
      metaTitle: 'Lakierowanie UV kloszy vs czajniczek acetonowy | STANIAX',
      metaDesc:
        'Lakierowanie UV poliwęglanowych kloszy reflektorów w STANIAX vs „czajniczek” z oparami acetonu DIY: trwałość 5+ lat, brak mikropęknięć PC i pełna ochrona UV.',
      badge: 'Porównanie renowacji kloszy PC',
      h1: 'Przemysłowe lakierowanie UV kloszy reflektorów vs „czajniczek” acetonowy',
      subtitle:
        'Analiza materiałoznawcza wpływu oparów acetonu na poliwęglan (PC) w zestawieniu z fabrycznym twardym lakierem utwardzanym promieniami UV.',
      sideALabel: 'Lakier twardy UV / 2K w STANIAX',
      sideBLabel: '„Czajniczek” z oparami acetonu (DIY)',
      directAnswerQuestion: 'Dlaczego lakierowanie UV kloszy reflektorów jest trwalsze niż metoda „czajniczka” z acetonem?',
      directAnswer:
        '„Czajniczek” rozpuszcza wierzchnią warstwę nagiego poliwęglanu (PC) gorącymi oparami acetonu lub chlorku metylenu - nie nakłada żadnego filtra UV i wywołuje naprężenia prowadzące do siatki mikropęknięć (crazing) już po 3-6 miesiącach. Przemysłowe lakierowanie UV w STANIAX odbudowuje usieciowaną powłokę ochronną o trwałości powyżej 5 lat.',
      verdictTitle: 'Werdykt inżynierii polimerów (PC)',
      verdictSummary:
        'Nigdy nie traktuj drogich kloszy Bi-Xenon ani Matrix LED oparami acetonu - wywołane mikropęknięcia skrośne są nieodwracalne i zmuszają do wymiany klosza. Wybierz szlif gradacyjny i bezpyłowy twardy lakier UV.',
      comparisonRows: [
        { parameter: 'Ochrona przed promieniowaniem słonecznym UV', optionA: 'Pełny bloker UV w usieciowanej żywicy (5+ lat)', optionB: '0% ochrony UV - goły poliwęglan żółknie w pół roku' },
        { parameter: 'Ryzyko pęknięć naprężeniowych (Solvent Crazing)', optionA: 'Zerowe - dedykowane systemy bezketonowe do PC', optionB: 'Bardzo wysokie - nieodwracalna pajęczynka pęknięć' },
        { parameter: 'Odporność na chemię myjni i piasek drogowy', optionA: 'Twarda powłoka odporna na ścieranie i zasady', optionB: 'Rozmiękczona warstwa łatwo matowieje pod szczotkami' },
        { parameter: 'Możliwość ponownej korekty w przyszłości', optionA: 'Pełna - szlifujesz wyłącznie warstwę lakieru', optionB: 'Często brak - pęknięcia wchodzą w głąb tworzywa' },
        { parameter: 'Wpływ na jasność wypalonej soczewki wewnątrz', optionA: 'Łączymy z metalizacją PVD odbłyśnika (>92%)', optionB: 'Zerowy - naprawia wyłącznie zewnętrzny plastik' },
      ],
      sections: [
        {
          heading: 'Co opary acetonu robią z łańcuchami polimerowymi poliwęglanu?',
          paragraphs: [
            'Poliwęglan optyczny (PC), z którego produkowane są wszystkie współczesne klosze lamp samochodowych, jest skrajnie wrażliwy na rozpuszczalniki ketonowe i chlorowane. Kontakt rozgrzanych oparów ze strefą naprężeń wtryskowych (szczególnie na zagięciach klosza) powoduje gwałtowne pękanie wiązań i powstawanie wewnętrznych srebrzystych rys.',
            'W lakierni bezpyłowej STANIAX w Józefowie zniszczona fabryczna warstwa jest najpierw całkowicie odcinana gradacyjnym szlifowaniem wodnym, odtłuszczana antystatycznie bez agresywnych ketonów, a następnie pokrywana twardym lakierem UV (lub 2K HS z absorberami UV), który odtwarza fabryczną barierę producenta lampy.',
          ],
          bullets: [
            'Krystaliczna przejrzystość optyczna bez efektu falowania soczewki',
            'Jednoczesna możliwość regeneracji wypalonego odbłyśnika PVD w jednym zleceniu',
            'Trwałość powłoki ochronnej 3-5 lat bez żółknięcia i łuszczenia',
          ],
        },
        {
          heading: 'Kompleksowe podejście: zewnętrzny klosz UV + wewnętrzny odbłyśnik PVD',
          paragraphs: [
            'Przy przebiegach powyżej 150 tys. km zmatowiały klosz niemal zawsze idzie w parze z wypalonym odbłyśnikiem wewnątrz lampy. Połączenie obu procesów w STANIAX przywraca 100% fabrycznego zasięgu reflektorów.',
          ],
        },
      ],
      whenChooseATitle: 'Wybierz lakierowanie UV w STANIAX, gdy:',
      whenChooseA: [
        'Zależy Ci na wieloletniej przejrzystości klosza bez żółknięcia po pierwszej zimie i lecie.',
        'Posiadasz kosztowne reflektory Bi-Xenon, Full LED lub adaptacyjne Matrix.',
        'Chcesz uniknąć ryzyka popękania poliwęglanu od agresywnych oparów.',
      ],
      whenChooseBTitle: 'Dlaczego warsztaty rezygnują z „czajniczków”:',
      whenChooseB: [
        'Pozorny połysk utrzymuje się krótko i generuje kosztowne reklamacje klientów z powodu mikropęknięć.',
      ],
      faq: [
        {
          q: 'Czy da się uratować klosz popękany po wcześniejszym „czajniczku” acetonowym?',
          a: 'Jeśli mikropęknięcia weszły głęboko w strukturę poliwęglanu, szlifowanie ich nie usunie; płytkie zmatowienia po acetonie potrafimy zeszlifować i zabezpieczyć lakierem UV.',
        },
        {
          q: 'Ile kosztuje lakierowanie klosza powłoką UV w STANIAX?',
          a: 'Renowacja klosza poliwęglanowego z twardym lakierem UV kosztuje orientacyjnie 150-220 zł za sztukę (szczegóły w cenniku).',
        },
        {
          q: 'Czy folia PPF wystarcza zamiast lakieru UV po szlifowaniu?',
          a: 'Twardy lakier UV tworzy chemicznie związaną skorupę optyczną; opcjonalnie na utwardzony lakier UV można dodatkowo zaaplikować folię PPF przeciw kamieniom.',
        },
        {
          q: 'Czy polerowanie kloszy naprawi słabe światła mijania w nocy?',
          a: 'Jeśli klosz jest już przejrzysty, a światła nadal słabe, przyczyną jest wypalony odbłyśnik wewnątrz - wymagający metalizacji próżniowej PVD.',
        },
      ],
      relatedLinks: [
        { label: 'Porównanie: Polerowanie vs PVD wnętrza', path: '/porownanie/polerowanie-kloszy-vs-regeneracja-wnetrza-pvd' },
        { label: 'Matryca: Metalizacja i lakierowanie PC', path: '/rozwiazania/metalizacja-poliweglanu-pc' },
        { label: 'Cennik regeneracji reflektorów', path: '/cennik-regeneracji-reflektorow' },
        { label: 'Usługa: Regeneracja reflektorów', path: '/regeneracja-reflektorow' },
      ],
      breadLabel: 'Lakier UV vs Czajniczek',
    },
    en: {
      metaTitle: 'UV Headlamp Hardcoat vs Acetone Vapor Cup DIY | STANIAX',
      metaDesc:
        'Polymer engineering comparison of industrial UV headlamp hardcoating vs DIY acetone vapor cups: 5+ year UV blocking vs polycarbonate solvent crazing & cracking.',
      badge: 'Polycarbonate Lens Comparison',
      h1: 'Industrial UV Headlamp Lens Hardcoat vs DIY Acetone Vapor Cup',
      subtitle:
        'Materials-science breakdown of why solvent vapor cups trigger irreversible polycarbonate stress cracking compared to crosslinked UV clearcoats.',
      sideALabel: 'Industrial UV Hardcoat (STANIAX)',
      sideBLabel: 'Acetone / Solvent Vapor Cup (DIY)',
      directAnswerQuestion: 'Why is industrial UV hardcoating far superior to acetone vapor headlight restoration cups?',
      directAnswer:
        'Acetone and methylene chloride vapor cups melt the outer skin of bare polycarbonate (PC) without adding any UV absorbers - triggering internal stress micro-cracks (solvent crazing) and rapid re-yellowing within 3-6 months. STANIAX applies a solvent-safe, crosslinked UV hardcoat that restores 5+ year solar and abrasion protection.',
      verdictTitle: 'Polymer Engineering Verdict',
      verdictSummary:
        'Never expose expensive Bi-Xenon or Matrix LED polycarbonate lenses to ketone vapors - deep crazing cracks cannot be sanded out. Choose graded wet-sanding followed by booth-applied UV hardcoat.',
      comparisonRows: [
        { parameter: 'Solar UV Radiation Blocking', optionA: 'High-density UV absorbers (5+ year clarity)', optionB: 'Zero UV blockers - yellows again within months' },
        { parameter: 'Solvent Stress-Cracking Risk', optionA: 'Zero - PC-compatible primerless/barrier chemistry', optionB: 'Severe - irreversible internal spiderweb cracks' },
        { parameter: 'Car-Wash & Grit Abrasion Resistance', optionA: 'Crosslinked hard-shell scratch resistance', optionB: 'Softened polymer surface mars easily' },
        { parameter: 'Future Refinishability', optionA: 'Safe - only the clearcoat is sanded later', optionB: 'Often ruined by full-thickness crazing' },
        { parameter: 'Internal Projector Output Recovery', optionA: 'Combined with >92% PVD bowl restoration', optionB: 'None - treats outer plastic skin only' },
      ],
      sections: [
        {
          heading: 'How Ketone Vapors Attack Molded Polycarbonate Chains',
          paragraphs: [
            'Optical polycarbonate lenses retain frozen-in injection-molding stresses along sharp styling radii. When heated acetone vapor contacts sanded PC, solvent molecules penetrate polymer chains and release stress instantaneously as thousands of microscopic internal fractures.',
            'In STANIAX dust-controlled spray booths in Józefów, oxidized factory hardcoat is fully removed by progressive wet abrasion, cleaned with anti-static non-ketonewash, and sealed under an optical UV-cured or 2K HS clearcoat engineered specifically for automotive polycarbonate.',
          ],
          bullets: [
            'Distortion-free optical clarity meeting MOT / TÜV / ECE beam scatter standards',
            'Option to combine exterior UV lens coating with internal PVD reflector resilvering',
            '3-5 year durability against peeling, hazing, and UV yellowing',
          ],
        },
        {
          heading: 'Complete Headlamp Renewal Under One Roof',
          paragraphs: [
            'High-mileage headlamps usually suffer from both weathered outer lenses and burnt internal PVD bowls; addressing both simultaneously restores true factory night-driving range.',
          ],
        },
      ],
      whenChooseATitle: 'Choose STANIAX UV Hardcoat when:',
      whenChooseA: [
        'Protecting high-value Bi-Xenon, Adaptive AFS, or Matrix LED headlamps.',
        'Requiring multi-year UV durability rather than a temporary pre-sale shine.',
        'Preventing catastrophic solvent crazing on polycarbonate lenses.',
      ],
      whenChooseBTitle: 'Why Professional Shops Avoid Vapor Cups:',
      whenChooseB: [
        'Short-lived gloss followed by spiderweb cracking creates costly customer warranty claims.',
      ],
      faq: [
        {
          q: 'Can polycarbonate spiderweb cracks from an acetone cup be sanded out?',
          a: 'Deep solvent crazing penetrates into the structural lens wall and cannot be polished out; shallow surface haze can often be stripped and UV-coated.',
        },
        {
          q: 'How much does industrial UV lens coating cost at STANIAX?',
          a: 'Approximately €35-€52 per lens, with bundle savings when combined with internal PVD reflector restoration.',
        },
        {
          q: 'Can PPF film be applied over your cured UV hardcoat?',
          a: 'Yes, once fully cured, our crosslinked UV clearcoat provides an ideal high-bond surface for stone-chip PPF film.',
        },
        {
          q: 'Why are my headlights still dim after clearing the outer lens?',
          a: 'Because the internal projector reflector bowl behind the lens has burnt its aluminum mirror and requires PVD vacuum recoating.',
        },
      ],
      relatedLinks: [
        { label: 'Compare: Lens Polishing vs Internal PVD', path: '/en/compare/lens-polishing-vs-internal-pvd-restoration' },
        { label: 'Substrate: Polycarbonate PC Metallization', path: '/en/solutions/polycarbonate-pc-metallization' },
        { label: 'Headlight Restoration Pricing', path: '/en/headlight-restoration-pricing' },
        { label: 'Service: Reflector Restoration', path: '/en/headlight-reflector-restoration' },
      ],
      breadLabel: 'UV Hardcoat vs Acetone Cup',
    },
    de: {
      metaTitle: 'UV-Scheinwerferlack vs. Aceton-Bedampfung | STANIAX',
      metaDesc:
        'Werkstoffvergleich industrieller UV-Scheinwerfer-Hartlack vs. Aceton-Bedampfungsbecher (DIY): 5+ Jahre UV-Schutz statt Spannungsrisse im Polycarbonat (PC).',
      badge: 'Vergleich: Streuscheiben-Sanierung PC',
      h1: 'Industrieller UV-Scheinwerferlack vs. Aceton-Bedampfungsbecher („Teekanne“)',
      subtitle:
        'Kunststofftechnische Analyse, warum Aceton-Dämpfe Spannungsrisse in Polycarbonat auslösen und vernetzte UV-Hartlacke jahrelang schützen.',
      sideALabel: 'Industrieller UV-Hartlack (STANIAX)',
      sideBLabel: 'Aceton-Dampfbecher / „Teekanne“ (DIY)',
      directAnswerQuestion: 'Warum ist industrieller UV-Klarlack auf Scheinwerfern besser als der Aceton-Bedampfungsbecher?',
      directAnswer:
        'Sogenannte Aceton-Bedampfungsbecher lösen lediglich die oberste Schicht des nackten Polycarbonats (PC) chemisch an - sie hinterlassen keinerlei UV-Schutzfilter und provozieren irreversible Spannungsrisse (Crazing) binnen 3-6 Monaten. Die industrielle UV-Hartlackierung bei STANIAX baut eine vernetzte Schutzschicht mit über 5 Jahren Witterungsbeständigkeit auf.',
      verdictTitle: 'Werkstofftechnisches Urteil für Polycarbonat',
      verdictSummary:
        'Setzen Sie hochwertige Bi-Xenon- oder Matrix-LED-Streuscheiben niemals heißen Keton- oder Acetondämpfen aus - durchgehende Spannungsrisse zerstören die Scheibe dauerhaft. Fachgerecht ist nur Stufenschliff plus UV-Hartlack.',
      comparisonRows: [
        { parameter: 'UV-Strahlungsschutz gegen Vergilbung', optionA: 'Hochwirksame UV-Absorber für >5 Jahre Klarheit', optionB: '0 % UV-Schutz - vergilbt nach wenigen Monaten erneut' },
        { parameter: 'Spannungsriss-Risiko (Solvent Crazing)', optionA: 'Null - PC-verträgliche Industrielacksysteme', optionB: 'Extrem hoch - feines Rissnetz tief im Kunststoff' },
        { parameter: 'Waschstraßen- & Steinschlagfestigkeit', optionA: 'Hochvernetzte kratzfeste Hardcoat-Oberfläche', optionB: 'Angelöste Weichschicht verkratzt sehr schnell' },
        { parameter: 'Spätere Nachbearbeitbarkeit', optionA: 'Problemlos in der Lackschicht möglich', optionB: 'Bei Tiefenrissen meist Totalschaden der Scheibe' },
        { parameter: 'Behebung dunkler Reflektoren innen', optionA: 'Kombinierbar mit >92 % PVD-Reflektorbedampfung', optionB: 'Keine Wirkung auf verbrannte Innenspiegel' },
      ],
      sections: [
        {
          heading: 'Wie heiße Acetondämpfe Polycarbonat-Molekülketten sprengen',
          paragraphs: [
            'Optisches Polycarbonat besitzt aus dem Spritzguss eingefrorene Eigenspannungen, besonders im Bereich starker Wölbungen. Treffen erhitzte Aceton- oder Methylenchlorid-Dämpfe auf das angeschliffene Material, dringen Lösemittelmoleküle schlagartig ein und lösen tausende silbrig glitzernde Mikrorisse aus.',
            'In den staubfreien Kabinen von STANIAX in Józefów wird der verwitterte Altlack stufenweise nass ausgeschliffen, antistatisch ohne scharfe Ketone gereinigt und mit einem optisch klaren UV-Hartlack versiegelt. Dadurch erhält die Frontscheibe ihren werkseitigen UV- und Abriebschutz vollständig zurück.',
            'Für Kfz-Werkstätten und Aufbereiter bedeutet dieses Verfahren maximale Reklamationssicherheit sowie eine saubere Lichtbrechung ohne Schlieren am Scheinwerfereinstellgerät.',
          ],
          bullets: [
            'Kristallklare Optik ohne Verzerrung der Hell-Dunkel-Grenze',
            'Ideale Kombination mit dem PVD-Bedampfen matter Innenreflektoren',
            '3 bis 5 Jahre Haltbarkeit gegen Abblättern und erneutes Vergilben',
          ],
        },
        {
          heading: 'Innen- und Außensanierung in einem Arbeitsgang',
          paragraphs: [
            'Bei Laufleistungen ab 150.000 km sind meist sowohl die äußere Streuscheibe als auch der innere Projektorreflektor gealtert; im Werk Józefów setzen wir beide Komponenten abgestimmt instand.',
          ],
        },
      ],
      whenChooseATitle: 'UV-Hartlackierung bei STANIAX wählen, wenn:',
      whenChooseA: [
        'Teure Bi-Xenon-, Kurvenlicht- oder LED-Scheinwerfer langfristig gerettet werden sollen.',
        'Dauerhafte UV- und Waschstraßenfestigkeit statt kurzzeitigem Verkaufoglanz zählt.',
        'Jedes Risiko von Spannungsrissen im Polycarbonat ausgeschlossen werden muss.',
      ],
      whenChooseBTitle: 'Warum Fachbetriebe Aceton-Becher meiden:',
      whenChooseB: [
        'Hohe Ausfallquote durch Mikrorisse und rasches Nachgilben im ersten Sommer.',
      ],
      faq: [
        {
          q: 'Lassen sich Spannungsrisse nach einer Aceton-Behandlung wieder ausschleifen?',
          a: 'Tiefe Spannungsrisse durchziehen die gesamte Wandstärke des Polycarbonats und sind irreparabel; oberflächliche Mattierungen können wir oft ausschleifen und UV-lackieren.',
        },
        {
          q: 'Was kostet die professionelle UV-Scheibenlackierung bei STANIAX?',
          a: 'Richtpreis ca. 35-52 € je Frontscheibe laut unserer aktuellen Preistabelle.',
        },
        {
          q: 'Warum bleibt das Abblendlicht trotz klarer Scheibe schwach?',
          a: 'Dann ist die innere Aluminiumschicht des Reflektors über dem Brenner verbrannt und muss im Vakuum neu bedampft werden.',
        },
        {
          q: 'Wie lange hält der industrielle UV-Schutzlack im Alltag?',
          a: 'Bei normaler Fahrzeugpflege schützt die vernetzte Hardcoat-Schicht über fünf Jahre zuverlässig vor UV-Vergilbung.',
        },
      ],
      relatedLinks: [
        { label: 'Vergleich: Polieren vs. PVD innen', path: '/de/vergleich/streuscheibe-polieren-vs-pvd-innensanierung' },
        { label: 'Material: Polycarbonat PC & PEI', path: '/de/loesungen/polycarbonat-pc-metallisierung' },
        { label: 'Preise: Scheinwerfer Aufbereitung', path: '/de/scheinwerfer-aufbereitung-preise' },
        { label: 'Leistung: Reflektor neu bedampfen', path: '/de/scheinwerfer-reflektor-aufbereitung' },
      ],
      breadLabel: 'UV-Hartlack vs. Aceton-Dampf',
    },
  },
}
