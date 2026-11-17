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
        'Porównanie PVD i malowania proszkowego „chrom”: refleksyjność >92% vs ~55%, temperatura wygrzewania 60°C vs 180–200°C oraz obróbka tworzyw ABS, PC i metali.',
      badge: 'Porównanie powłok: PVD vs Proszek',
      h1: 'Metalizacja próżniowa PVD vs malowanie proszkowe w efekcie chromu',
      subtitle:
        'Analiza techniczna napylania aluminium 99,99% w wysokiej próżni w porównaniu z lakierami proszkowymi imitującymi chrom na metalach i polimerach.',
      sideALabel: 'Powłoka PVD w próżni (STANIAX)',
      sideBLabel: 'Malowanie proszkowe „efekt chrom”',
      directAnswerQuestion: 'Czym różni się metalizacja próżniowa PVD od malowania proszkowego w kolorze chromu?',
      directAnswer:
        'Malowanie proszkowe wymaga pieca 180–200 °C (co topi tworzywa ABS, PC i PP) oraz daje jedynie metaliczny srebrny półpołysk o odbiciu ok. 50–60% ze skórką pomarańczy. Metalizacja próżniowa PVD w STANIAX osadza czyste aluminium 99,99% poniżej 70 °C, zapewniając lustro optyczne >92% bez zaokrąglania ostrych krawędzi i gwintów.',
      verdictTitle: 'Werdykt technologiczny B2B',
      verdictSummary:
        'Wybierz malowanie proszkowe do grubowarstwowej ochrony antykorozyjnej stalowych ogrodzeń i felg. Wybierz metalizację próżniową PVD w STANIAX wszędzie tam, gdzie liczy się prawdziwe lustro chromu lub złota, obróbka tworzyw sztucznych, szkła lub odbłyśników oświetleniowych.',
      comparisonRows: [
        { parameter: 'Efekt wizualny i odbicie światła', optionA: 'Prawdziwe lustro >92% (Al 99,99%)', optionB: 'Srebrny metalik ~50–60%, widoczne ziarno' },
        { parameter: 'Temperatura procesu', optionA: '45–75 °C (bezpieczna dla ABS, PC, PP, PA)', optionB: '180–200 °C w piecu (wyłącznie metale)' },
        { parameter: 'Grubość układu powłokowego', optionA: '20–35 µm łącznie (zachowuje gwinty i pasowania)', optionB: '80–150 µm (zalewa drobne detale i zatrzaski)' },
        { parameter: 'Zastosowanie w optyce i lampach', optionA: 'Tak — standard OEM reflektorów i opraw LED', optionB: 'Nie — rozprasza wiązkę i przegrzewa czaszę' },
        { parameter: 'Gładkość powierzchni (Ra)', optionA: 'Klasa optyczna A bez skórki pomarańczy', optionB: 'Charakterystyczna struktura proszkowa' },
      ],
      sections: [
        {
          heading: 'Dlaczego proszkowy „chrom” nigdy nie daje głębi lustra PVD?',
          paragraphs: [
            'Lakiery proszkowe sprzedawane jako „chrom” zawierają płatki aluminium zatopione w grubej żywicy poliestrowej lub epoksydowej. Po wypaleniu w 190 °C i nałożeniu bezbarwnego topcoatu płatki ulegają częściowej dezorientacji, przez co powierzchnia przypomina polerowane srebro lub jasny szary metalik, a nie lustro.',
            'W komorach próżniowych STANIAX (Ø 1200 mm) napylanie aluminium odbywa się w fazie gazowej przy ciśnieniu 10⁻⁴ mbar na idealnie wypoziomowany podkład UV. Warstwa metalu o grubości 80–120 nm tworzy ciągłą taflę zwierciadlaną, którą można zabarwić na chrom, 24-karatowe złoto, miedź lub tytan z dokładnością ΔE < 0,8.',
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
            'W przypadku zabytkowych stalowych odbłyśników, korpusów lamp motocyklowych lub porowatych odlewów ciśnieniowych ZnAl po piaskowaniu doskonałe rezultaty daje proces hybrydowy: wypełnienie wżerów podkładem epoksydowym, nałożenie gładkiej bazy lakierniczej oraz finalne napylanie próżniowe PVD z bezbarwnym lakierem UV lub SiOx.',
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
          a: 'Nie, piec polimeryzacyjny 180–200 °C powoduje stopienie i deformację wyprasek z ABS (HDT ~90 °C) i PC.',
        },
        {
          q: 'Czy powłoka PVD jest odporna na warunki atmosferyczne?',
          a: 'Tak, po zabezpieczeniu lakierem nawierzchniowym 2K PU lub UV z filtrami UV powłoka PVD zachowuje połysk w zastosowaniach zewnętrznych.',
        },
        {
          q: 'Jaki jest czas realizacji serii PVD względem lakierni proszkowej?',
          a: 'Serie przemysłowe B2B realizujemy w 3–7 dni roboczych, a odbłyśniki samochodowe w 2–4 dni robocze w zakładzie w Józefowie.',
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
      metaTitle: 'PVD Vacuum Metallization vs Chrome Powder Coating | STANIAX',
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
        'Chrome-effect powder coating requires 180–200 °C oven curing—melting ABS, PC, and PP plastics—and yields only a ~55% semi-reflective metallic silver with orange-peel texture. STANIAX PVD vacuum metallization deposits 99.99% pure aluminum below 70 °C, delivering >92% true mirror reflectance and crisp thread tolerances.',
      verdictTitle: 'B2B Engineering Verdict',
      verdictSummary:
        'Use powder coating for heavy structural corrosion protection on steel frames and wheels. Specify STANIAX PVD vacuum metallization whenever true mirror chrome/gold optics, polymer or glass compatibility, or >92% lighting reflectance is required.',
      comparisonRows: [
        { parameter: 'Optical Reflectance & Finish', optionA: '>92% true mirror specular chrome/gold', optionB: '~50–60% metallic silver with visible flake' },
        { parameter: 'Process Curing Temperature', optionA: '45–75 °C (safe for ABS, PC, PP, PA, glass)', optionB: '180–200 °C oven (metals only)' },
        { parameter: 'Total Film Build', optionA: '20–35 µm (preserves fine threads & snap-fits)', optionB: '80–150 µm (bridges sharp edges & tolerances)' },
        { parameter: 'Headlamp & LED Optics Use', optionA: 'Yes — OEM standard for reflectors', optionB: 'No — scatters beam pattern' },
        { parameter: 'Surface Smoothness', optionA: 'Class-A optical mirror leveling', optionB: 'Characteristic powder orange-peel' },
      ],
      sections: [
        {
          heading: 'Why Chrome Powder Cannot Match Vapor-Deposited Aluminum',
          paragraphs: [
            'So-called chrome powders suspend leafing aluminum pigments inside a thick polyester or epoxy resin matrix. Once baked at 190 °C and sealed under clear powder, pigment leafing shifts, dulling the surface into bright silver rather than an image-forming mirror.',
            'Inside STANIAX Ø 1200 mm high-vacuum chambers (10⁻⁴ mbar), 99.99% aluminum condenses atom-by-atom onto a flow-leveled UV basecoat. The resulting 80–120 nm metallic film achieves >92% specular reflectance and can be tinted to chrome, 24k gold, rose gold, or smoked titanium within ΔE < 0.8.',
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
            'For corroded vintage steel headlamp bowls and sandblasted ZnAl housings, STANIAX applies an epoxy anticorrosion seal followed by a high-leveling thermal primer, high-vacuum PVD aluminum, and SiOx or 2K polyurethane protection—combining rust immunity with optical brilliance.',
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
          a: 'No, 180–200 °C powder curing ovens deform thermoplastics well above their heat deflection temperature.',
        },
        {
          q: 'Does PVD vacuum metallization resist outdoor UV exposure?',
          a: 'Yes, when sealed with our automotive-grade 2K polyurethane or UV-inhibited clearcoats.',
        },
        {
          q: 'What is the typical B2B turnaround at STANIAX?',
          a: '3–7 business days for serial industrial batches and 2–4 days for automotive reflectors at our Józefów facility.',
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
        'Pulverbeschichtungen benötigen 180–200 °C Einbrenntemperatur (wodurch ABS, PC und PP schmelzen) und erzeugen nur ein silbergraues Metallic-Finish mit ca. 55 % Reflexion und Orangenhaut. Die PVD-Vakuummetallisierung bei STANIAX scheidet 99,99 % Reinaluminium unter 70 °C ab und liefert >92 % echten Spiegelglanz bei voller Maßhaltigkeit.',
      verdictTitle: 'Technisches B2B-Fazit',
      verdictSummary:
        'Nutzen Sie Pulverlacke für dickschichtigen Korrosionsschutz auf Stahlrahmen und Felgen. Wählen Sie die STANIAX PVD-Vakuummetallisierung für echte Chrom-/Goldspiegel, Kunststoffverchromung, Glasflakons sowie Scheinwerfer- und LED-Reflektoren.',
      comparisonRows: [
        { parameter: 'Spiegelglanz & Reflexionsgrad', optionA: '>92 % gerichteter Echtspiegel (Al 99,99 %)', optionB: '~50–60 % Silbermetallic mit Pigmentkorn' },
        { parameter: 'Prozesstemperatur', optionA: '45–75 °C (ideal für ABS, PC, PP, PA & Glas)', optionB: '180–200 °C Einbrennofen (nur Metalle)' },
        { parameter: 'Gesamtschichtdicke', optionA: '20–35 µm (Gewinde & Rastnasen bleiben frei)', optionB: '80–150 µm (rundet Kanten & Passungen ab)' },
        { parameter: 'Scheinwerfer- & Lichtoptik', optionA: 'Ja — OEM-Standard zum Reflektor bedampfen', optionB: 'Nein — streut den Lichtkegel unzulässig' },
        { parameter: 'Oberflächenverlauf', optionA: 'Optisch glatte Klasse-A-Oberfläche', optionB: 'Typische Pulverlack-Struktur' },
      ],
      sections: [
        {
          heading: 'Warum Chrom-Pulverlacke keinen echten PVD-Spiegel erreichen',
          paragraphs: [
            'Sogenannte Chrom-Effektpulver bestehen aus Aluminiumplättchen in einer dicken Polyester- oder Epoxidharzmatrix. Beim Einbrennen bei 190 °C und anschließendem Überpulvern mit Klarlack kippen die Pigmente leicht ab, sodass optisch nur ein helles Felgensilber statt eines klaren Spiegels entsteht.',
            'In den Ø-1200-mm-Hochvakuumkammern von STANIAX kondensiert 99,99-prozentiges Aluminium bei 10⁻⁴ mbar auf einem glatt verlaufenden UV-Primer. Die nanometrische Metallschicht erzeugt über 92 Prozent gerichtete Reflexion und lässt sich präzise in Chrom, Gold, Kupfer oder Rauchchrom (ΔE < 0,8) einfärben.',
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
            'Bei angerosteten Stahlreflektoren klassischer Fahrzeuge kombinieren wir Entrostung und korrosionsschützende Epoxid-Grundierung mit einem hochglatten Hitzeschutzprimer sowie anschließender PVD-Aluminiumbedampfung und SiOx-Versiegelung — für langlebige HU/TÜV-Lichtwerte.',
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
          a: 'Nein, die Einbrenntemperatur von 180–200 °C zerstört thermoplastische Spritzgussteile sofort.',
        },
        {
          q: 'Ist die PVD-Schicht mit Schutzlack witterungsbeständig?',
          a: 'Ja, versiegelt mit unseren UV-stabilen 2K-PUR- oder UV-Decklacken hält die Oberfläche auch im Außenbereich dauerhaft stand.',
        },
        {
          q: 'Wie schnell liefert STANIAX Serienlose nach Deutschland?',
          a: 'Industrieserien fertigen wir in 3–7 Werktagen, Scheinwerferreflektoren in 2–4 Werktagen ab Eingang in Józefów.',
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
        'Nie. Hydrografika przenosi z powierzchni wody drukowaną folię PVA z wzorem (np. karbon, drewno), ale nie potrafi wytworzyć ciągłej warstwy czystego metalu — tzw. folie lustrzane rozciągają się na krzywiznach i dają przydymiony połysk ~45–55%. Metalizacja próżniowa PVD osadza prawdziwe aluminium 99,99% (>92% odbicia) powtarzalnie na tysiącach detali.',
      verdictTitle: 'Werdykt technologiczny',
      verdictSummary:
        'Hydrografika sprawdza się wyłącznie przy jednostkowym tuningu wzorami karbonu lub kamuflażu. Do uzyskania metalicznego lustra chromu, złota, satyny OEM oraz seryjnej produkcji B2B jedynym standardem przemysłowym jest powłoka PVD.',
      comparisonRows: [
        { parameter: 'Fizyczna natura warstwy', optionA: 'Czysty metal Al 99,99% napylony w próżni', optionB: 'Rozpuszczalna folia PVA z tuszem drukarskim' },
        { parameter: 'Efekt lustra (chrom / złoto)', optionA: '>92% odbicia zwierciadlanego bez dystorsji', optionB: 'Brak prawdziwego lustra; rozciąganie na rogach' },
        { parameter: 'Wydajność seryjna B2B', optionA: 'Setki/tysiące sztuk na cykl komory Ø 1200 mm', optionB: 'Ręczne zanurzanie pojedynczych elementów' },
        { parameter: 'Powtarzalność koloru między partiami', optionA: 'Kontrola spektrofotometryczna ΔE < 0,8', optionB: 'Zależna od kąta zanurzenia i temperatury wody' },
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
          a: 'W zależności od wymiaru od ok. 30 dużych obudów do blisko 1000 drobnych nakrętek w jednym cyklu komory Ø 1200 mm.',
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
        'No. Hydrographics floats a printed polyvinyl alcohol (PVA) ink film on water to apply patterns like carbon fiber or woodgrain, but ink cannot replicate continuous metallic electron reflection—yielding muted ~45% sheen and corner stretching. STANIAX PVD deposits 99.99% pure aluminum in high vacuum for >92% distortion-free mirror chrome.',
      verdictTitle: 'Engineering Verdict',
      verdictSummary:
        'Reserve hydrographics for one-off decorative patterns (camo, woodgrain, carbon weave). Specify STANIAX PVD vacuum metallization for authentic chrome, gold, smoked titanium, optical reflectors, and repeatable B2B production runs.',
      comparisonRows: [
        { parameter: 'Physical Coating Layer', optionA: '99.99% pure vapor-deposited aluminum metal', optionB: 'Dissolved PVA film with printed graphic inks' },
        { parameter: 'Mirror Specular Clarity', optionA: '>92% true mirror without curvature distortion', optionB: 'No true mirror; pattern stretches on deep draws' },
        { parameter: 'Production Throughput', optionA: 'Up to ~900 small parts per Ø 1200 mm cycle', optionB: 'Manual piece-by-piece water dipping' },
        { parameter: 'Batch-to-Batch Consistency', optionA: 'Spectrophotometric control ΔE < 0.8', optionB: 'Varies with dip angle and water temperature' },
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
          a: 'Approximately 600–1,000 small cosmetic caps per Ø 1200 mm planetary cycle.',
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
        'PVD-Vakuummetallisierung vs. Wassertransferdruck (Hydrografik): >92 % echter Aluminiumspiegel statt PVA-Druckfolie, Serienkonstanz ΔE < 0,8 & ISO 2409.',
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
        { parameter: 'Serienkapazität B2B', optionA: 'Bis ca. 900 Kleinteile je Ø-1200-mm-Zyklus', optionB: 'Manuelles Einzeltauchen im Wasserbecken' },
        { parameter: 'Farbkonstanz (Charge zu Charge)', optionA: 'Spektralphotometrisch geregelt ΔE < 0,8', optionB: 'Schwankt mit Eintauchwinkel & Wassertemperatur' },
        { parameter: 'Hitzefestigkeit im Scheinwerfer', optionA: 'Bis 220 °C mit Hitzeschutzprimer', optionB: 'Vergilbt und reißt oberhalb von 80 °C' },
      ],
      sections: [
        {
          heading: 'Physikalischer Metallspiegel gegen bedruckte Transferfolie',
          paragraphs: [
            'Unter dem Suchbegriff „Hydrografik Chrom“ suchen viele Anwender nach einer einfachen Methode zum Kunststoff verchromen. Da Drucktinten jedoch keine geschlossene Metallgitterstruktur bilden, wirkt jede Transferfolie im direkten Vergleich wie grauer Felgenlack.',
            'Im STANIAX-Werk in Józefów rotieren die Bauteile auf Planetengestellen im Hochvakuum (10⁻⁴ mbar). Das verdampfte Aluminium legt sich gleichmäßig um dreidimensionale Konturen, ohne Nähte, Wasserflecken oder verstopfte Feingewinde zu hinterlassen.',
            'Anschließend versiegeln UV-härtende oder zweikomponentige Decklacke die Metallschicht abriebfest nach DIN EN ISO 2409 (Gt 0) — wahlweise in Hochglanz-Chrom, 24-Karat-Gold, Roségold oder edlem Dark Chrome für Interieurleisten und Premium-Flakons.',
          ],
          bullets: [
            'Beständig gegen 96 % Parfümethanol, Handschweiß und Innenraumreiniger',
            'Niedrige Stückkosten in Klein- und Großserien dank Ø-1200-mm-Kammervolumen',
            'Kombinierbar mit Klavierlack (>92 GU) und Soft-Touch-Lackierung im selben Werk',
          ],
        },
        {
          heading: 'Wann welche Oberflächentechnik im Fahrzeug- und Produktdesign überzeugt',
          paragraphs: [
            'Während Hydrografik reine Musterdekore abdeckt, erfüllt die PVD-Vakuummetallisierung sämtliche optischen und mechanischen Lastenhefte europäischer OEM-Serienprojekte bei kurzen Lieferzeiten von 3–7 Werktagen.',
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
          a: 'Je nach Bauteilgeometrie zwischen rund 30 Großteilen und bis zu 900 Kosmetikkappen pro Ø-1200-mm-Zyklus.',
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
      metaTitle: 'Regeneracja odbłyśników PVD vs przeróbka Bi-LED | STANIAX',
      metaDesc:
        'Regeneracja odbłyśnika PVD w STANIAX (od 150 zł/szt.) vs przeróbka lamp na soczewki Bi-LED: homologacja ECE, przegląd SKP, polisa OC/AC i strumień >92%.',
      badge: 'Porównanie: Regeneracja OEM vs Bi-LED',
      h1: 'Regeneracja odbłyśników PVD vs przeróbka reflektorów na soczewki Bi-LED',
      subtitle:
        'Porównanie prawne, optyczne i kosztowe fabrycznej renowacji odbłyśnika H7 / Bi-Xenon z montażem niehomologowanych projektorów Bi-LED.',
      sideALabel: 'Regeneracja OEM PVD (STANIAX)',
      sideBLabel: 'Przeróbka / Retrofit na Bi-LED',
      directAnswerQuestion: 'Czy lepiej zregenerować fabryczny odbłyśnik PVD, czy przerobić lampy na soczewki Bi-LED?',
      directAnswer:
        'Regeneracja fabrycznego odbłyśnika metodą PVD w STANIAX (od 150–250 zł/szt.) przywraca >92% fabrycznego odbicia światła przy 100% zachowaniu homologacji drogowej ECE, sterowania AFS i ważności ubezpieczenia OC/AC. Przeróbka lampy H7/Xenon na niehomologowaną soczewkę Bi-LED kosztuje 1500–3500 zł i formalnie unieważnia homologację reflektora.',
      verdictTitle: 'Werdykt prawny i techniczny dla kierowców oraz flot',
      verdictSummary:
        'W pojazdach poruszających się po drogach publicznych UE regeneracja oryginalnego odbłyśnika PVD zwraca pełną moc świateł mijania bez ryzyka zatrzymania dowodu rejestracyjnego na SKP lub odmowy wypłaty odszkodowania po kolizji.',
      comparisonRows: [
        { parameter: 'Homologacja drogowa ECE i przegląd SKP', optionA: '100% zachowana fabryczna homologacja lampy', optionB: 'Utrata homologacji przy zmianie źródła światła' },
        { parameter: 'Koszt kompletu (lewa + prawa strona)', optionA: '300 – 600 zł za parę samych odbłyśników', optionB: '1 500 – 3 500 zł za przeróbkę reflektorów' },
        { parameter: 'Ochrona ubezpieczeniowa OC / AC', optionA: 'Pełna zgodność ze specyfikacją producenta OEM', optionB: 'Ryzyko regresu ubezpieczyciela po wypadku nocnym' },
        { parameter: 'Kompatybilność z CANBUS i skrętnym AFS', optionA: 'Plug & Play bez błędów na desce rozdzielczej', optionB: 'Wymaga adapterów, rezystorów i cięcia kosza' },
        { parameter: 'Serwisowalność po latach', optionA: 'Wymiana standardowego żarnika D1S/D2S/D3S lub H7', optionB: 'Awaria niewymiennego modułu = ponowne rozklejanie' },
      ],
      sections: [
        {
          heading: 'Dlaczego kierowcy mylnie obwiniają technologię Xenon lub H7 zamiast wypalonego odbłyśnika?',
          paragraphs: [
            'Sprawny fabryczny projektor Bi-Xenon (Hella E55, Intemo, Valeo, Bosch AL) z nowym odbłyśnikiem PVD oraz markowym żarnikiem generuje szeroką, równomierną wiązkę ponad 3200 lumenów. Wrażenie „świeczek zamiast świateł” wynika niemal zawsze z utlenienia i wypalenia górnej części czaszy odbłyśnika po 150 000 km.',
            'Zamiast wycinać fabryczne mocowania pod chińskie projektory Bi-LED, napylenie świeżego aluminium 99,99% z powłoką ochronną SiOx w komorze próżniowej STANIAX przywraca parametry salonowe w 2–4 dni robocze — za ułamek ceny przeróbki.',
          ],
          bullets: [
            'Idealna linia światłocienia na przyrządzie diagnostycznym SKP i niemieckim TÜV/HU',
            'Obsługa zarówno odbłyśników H7/Xenon, jak i fabrycznych matrycowych odbłyśników LED OEM',
            '24 miesiące pisemnej gwarancji na powłokę próżniową PVD w zakładzie Józefów',
          ],
        },
        {
          heading: 'Regeneracja oryginalnych reflektorów LED OEM bez wymiany całej lampy',
          paragraphs: [
            'Jeżeli samochód fabrycznie wyjechał z salonu z reflektorami LED i doszło do zmatowienia wewnętrznych zwierciadeł poliwęglanowych PC-HT, STANIAX regeneruje oryginalne czasze LED z zachowaniem fabrycznej homologacji.',
          ],
        },
      ],
      whenChooseATitle: 'Wybierz regenerację odbłyśnika PVD, gdy:',
      whenChooseA: [
        'Poruszasz się po drogach publicznych w Polsce i UE oraz cenisz pełną legalność ECE.',
        'Chcesz odzyskać do +250% więcej światła na mokrym asfalcie w budżecie 300–600 zł za parę.',
        'Zależy Ci na bezproblemowym działaniu systemów skrętnych AFS/Dynamic Xenon.',
      ],
      whenChooseBTitle: 'Przeróbka Bi-LED ma sens wyłącznie, gdy:',
      whenChooseB: [
        'Budujesz pojazd ściśle torowy, rajdowy lub przeprawowy off-road nieporuszający się po drogach publicznych.',
      ],
      faq: [
        {
          q: 'Czy policja lub diagnosta SKP może zatrzymać dowód za przeróbkę H7/Xenon na Bi-LED?',
          a: 'Tak. Zmiana rodzaju źródła światła niezgodna z oznaczeniem homologacyjnym na kloszu (np. HC/HR lub DC/DR) skutkuje wynikiem negatywnym badania technicznego.',
        },
        {
          q: 'Czy zregenerowany w STANIAX odbłyśnik Bi-Xenon świeci jak nowy oryginał?',
          a: 'Tak, warstwa aluminium 99,99% z barierą SiOx daje >92% refleksyjności kierunkowej — identycznie z nową częścią OEM.',
        },
        {
          q: 'Czy regenerujecie również odbłyśniki z fabrycznych lamp LED?',
          a: 'Tak, odnawiamy poliwęglanowe i metalowe zwierciadła fabrycznych modułów LED oraz Bi-LED.',
        },
        {
          q: 'Jak szybko mogę wysłać wymontowane soczewki do Józefowa?',
          a: 'Wystarczy spakować same odbłyśniki i wysłać kurierem na ul. kard. Stefana Wyszyńskiego 116A, 05-420 Józefów — odsyłamy w 2–4 dni robocze.',
        },
      ],
      relatedLinks: [
        { label: 'Cennik i kalkulator regeneracji', path: '/cennik-regeneracji-reflektorow' },
        { label: 'Rozwiązanie: Soczewki Bi-Xenon i LED', path: '/rozwiazania/regeneracja-soczewek-bi-xenon-i-lamp-led' },
        { label: 'Porównanie: Regeneracja vs Zamiennik', path: '/porownanie/regeneracja-odblysnikow-vs-nowy-zamiennik' },
        { label: 'Lokalizacja: Warszawa i Józefów', path: '/regeneracja-reflektorow/warszawa-jozefow' },
      ],
      breadLabel: 'PVD OEM vs Przeróbka Bi-LED',
    },
    en: {
      metaTitle: 'OEM Reflector PVD Restoration vs Bi-LED Retrofit | STANIAX',
      metaDesc:
        'Compare OEM headlight reflector PVD restoration vs aftermarket Bi-LED projector retrofits: ECE/TÜV road legality, insurance compliance, >92% output, and cost.',
      badge: 'Headlight Comparison: OEM PVD vs Bi-LED',
      h1: 'OEM Headlight Reflector PVD Restoration vs Bi-LED Projector Retrofit',
      subtitle:
        'Legal, photometric, and financial analysis of restoring factory H7/Bi-Xenon reflector bowls versus cutting housings for aftermarket Bi-LED projectors.',
      sideALabel: 'OEM Reflector PVD Restoration (STANIAX)',
      sideBLabel: 'Aftermarket Bi-LED Conversion',
      directAnswerQuestion: 'Should you restore burnt OEM reflector bowls with PVD or retrofit aftermarket Bi-LED projectors?',
      directAnswer:
        'Restoring the factory OEM reflector bowl via high-vacuum 99.99% aluminum PVD at STANIAX (€35–€65/unit) recovers >92% factory beam intensity while keeping 100% ECE type-approval, adaptive AFS cornering electronics, and motor insurance validity. Cutting halogen/xenon housings for uncertified Bi-LED modules voids ECE homologation on European public roads.',
      verdictTitle: 'Legal & Photometric Verdict',
      verdictSummary:
        'For any road-registered vehicle in the EU/UK, PVD restoration of the original Hella, Valeo, Bosch, or Koito bowl delivers new-car night visibility at ~20% of conversion cost with zero inspection or insurance liability.',
      comparisonRows: [
        { parameter: 'ECE Road Homologation & MOT/TÜV', optionA: '100% factory type-approval preserved', optionB: 'Voids lens light-source certification' },
        { parameter: 'Typical Pair Cost (Left + Right)', optionA: '€75 – €140 for loose reflector bowls', optionB: '€400 – €900 for full retrofit conversion' },
        { parameter: 'Insurance Coverage Compliance', optionA: 'Full OEM specification compliance', optionB: 'Risk of claim dispute after night collisions' },
        { parameter: 'Adaptive AFS & CANBUS Electronics', optionA: '100% plug-and-play factory fit', optionB: 'Requires bracket cutting & CANBUS resistors' },
        { parameter: 'Long-Term Serviceability', optionA: 'Uses standard replaceable D1S/D2S/H7 bulbs', optionB: 'Integrated LED chip failure requires re-splitting' },
      ],
      sections: [
        {
          heading: 'Why Factory Xenon Appears Dim Only Because the Bowl Oxidized',
          paragraphs: [
            'A healthy OEM Bi-Xenon projector (Hella E55, EvoX-R/Intemo, Valeo, AL Bosch) paired with a fresh D1S/D2S burner projects over 3,200 lumens across a wide, glare-free cutoff. Drivers assume Xenon is outdated only because the factory aluminum film above the arc tube burns brown after 8–10 years.',
            'Recoating those exact OEM bowls in STANIAX Ø 1200 mm vacuum chambers with high-temp primer, 99.99% aluminum, and SiOx passivation restores showroom lux readings in 2–4 working days without irreversibly modifying headlamp brackets.',
          ],
          bullets: [
            'Razor-sharp ECE R112 / R98 beam cutoff on workshop headlamp aligners',
            'Also restores factory-fitted OEM LED reflector cups molded in PC-HT',
            'Backed by a 24-month industrial PVD adhesion and reflectivity warranty',
          ],
        },
        {
          heading: 'Fast EU Courier Workflow for Workshops & Fleet Operators',
          paragraphs: [
            'Mechanics unbolt the two projector bowls from behind the headlamp frame where accessible and ship them in a compact parcel to Józefów, eliminating expensive bumper/headlamp lens splitting.',
          ],
        },
      ],
      whenChooseATitle: 'Choose OEM PVD Restoration when:',
      whenChooseA: [
        'Driving on public roads requiring legal MOT, TÜV, or SKP roadworthiness inspections.',
        'Preserving dynamic cornering AFS motors and OEM wiring harnesses.',
        'Seeking maximum lumen recovery per euro spent.',
      ],
      whenChooseBTitle: 'Consider Bi-LED Conversion only when:',
      whenChooseB: [
        'Building closed-circuit track, rally, or off-road competition vehicles.',
      ],
      faq: [
        {
          q: 'Does converting a halogen or xenon lamp to Bi-LED void EU road approval?',
          a: 'Yes. Changing the homologated light source category stamped on the headlamp housing invalidates ECE type approval.',
        },
        {
          q: 'How bright is a PVD-restored Bi-Xenon bowl compared to new?',
          a: 'Directional reflectance exceeds 92%, matching brand-new OEM Hella/Valeo optics.',
        },
        {
          q: 'Do you also recoat factory OEM LED reflector optics?',
          a: 'Yes, we metallize degraded factory PC-HT and die-cast OEM LED reflector sub-assemblies.',
        },
        {
          q: 'What is the turnaround for shipped projector bowls?',
          a: '2–4 business days inside our Józefów facility plus insured courier transit.',
        },
      ],
      relatedLinks: [
        { label: 'Headlight Restoration Pricing', path: '/en/headlight-restoration-pricing' },
        { label: 'Solution: Bi-Xenon & LED Projectors', path: '/en/solutions/bixenon-projector-and-led-reflector-restoration' },
        { label: 'Compare: OEM vs Aftermarket Lamp', path: '/en/compare/reflector-restoration-vs-aftermarket-headlight' },
        { label: 'Warsaw & Józefów Plant Hub', path: '/en/headlight-restoration/warsaw-jozefow' },
      ],
      breadLabel: 'OEM PVD vs Bi-LED Retrofit',
    },
    de: {
      metaTitle: 'Reflektor PVD bedampfen vs. Bi-LED-Umbau | STANIAX',
      metaDesc:
        'Original-Reflektor PVD neu bedampfen (ab ca. 35 €) vs. Bi-LED-Umbau: Erhalt der ECE-Bauartgenehmigung für HU/TÜV, AFS-Kurvenlicht & >92 % Lichtreflexion.',
      badge: 'Scheinwerfer-Vergleich: OEM PVD vs. Bi-LED',
      h1: 'Original-Reflektor PVD bedampfen vs. Umrüstung auf Bi-LED-Projektoren',
      subtitle:
        'Rechtlicher, lichttechnischer und wirtschaftlicher Vergleich zwischen werkseitiger PVD-Neuverspiegelung und nachträglichem Bi-LED-Umbau.',
      sideALabel: 'OEM-Reflektor PVD bedampfen (STANIAX)',
      sideBLabel: 'Nachträglicher Bi-LED-Umbau',
      directAnswerQuestion: 'Sollte man blinde Reflektoren PVD-bedampfen lassen oder auf Nachrüst-Bi-LED-Linsen umbauen?',
      directAnswer:
        'Das PVD-Bedampfen des Originalreflektors bei STANIAX (ab ca. 35–60 €/Stück) stellt >92 % Werksreflexion wieder her und erhält die ECE-Bauartgenehmigung, das AFS-Kurvenlicht sowie den vollen Versicherungsschutz für die HU/TÜV-Prüfung. Ein Umbau von H7- oder Xenon-Scheinwerfern auf ungeprüfte Bi-LED-Module führt im öffentlichen Straßenverkehr zum Erlöschen der Betriebserlaubnis.',
      verdictTitle: 'Rechtliches & technisches Urteil für DACH-Fahrzeuge',
      verdictSummary:
        'Für straßenzugelassene Pkw und Lkw in Deutschland, Österreich und Polen bietet die PVD-Neuverspiegelung des Originalreflektors volle Neuwagen-Leuchtkraft ohne HU-Beanstandung oder Regressrisiko bei Nachtunfällen.',
      comparisonRows: [
        { parameter: 'ECE-Zulassung & HU / TÜV / Pickerl', optionA: '100 % Erhalt der Original-Bauartgenehmigung', optionB: 'Erlöschen der Betriebserlaubnis des Scheinwerfers' },
        { parameter: 'Kosten für beide Fahrzeugseiten', optionA: 'Ca. 75 – 140 € für ausgebaute Reflektoren', optionB: '450 – 1.000 € für Komplettumbau' },
        { parameter: 'Kfz-Haftpflicht & Kaskoschutz', optionA: 'Uneingeschränkt serienkonform', optionB: 'Gefahr von Kürzungen bei Blendungsunfällen' },
        { parameter: 'Kurvenlicht (AFS) & Bordelektronik', optionA: '100 % Plug-and-Play ohne Fehlermeldung', optionB: 'Fräsarbeiten am Tragrahmen & Lastwiderstände nötig' },
        { parameter: 'Wartungsfreundlichkeit', optionA: 'Normale D1S/D2S/H7-Leuchtmittel wechselbar', optionB: 'Bei Platinendefekt erneutes Öffnen der Lampe' },
      ],
      sections: [
        {
          heading: 'Warum Bi-Xenon nur wegen verbrannter Spiegelschalen schwach wirkt',
          paragraphs: [
            'Ein intakter Hella-, Valeo- oder Bosch-AL-Xenonprojektor liefert mit frischem Brenner über 3.200 Lumen und eine gestochen scharfe Hell-Dunkel-Grenze. Dass Scheinwerfer nach acht bis zehn Jahren kaum noch die Fahrbahn ausleuchten, liegt fast immer am abgedampften Aluminium direkt über dem Lichtbogen.',
            'Wenn Sie Ihren Scheinwerfer Reflektor neu verspiegeln lassen, trägt STANIAX im Hochvakuum (10⁻⁴ mbar) hitzefesten Spezialprimer, 99,99 % Reinaluminium und eine schützende SiOx-Schicht auf. Binnen 2–4 Werktagen erreicht der Originalscheinwerfer wieder exakte Neuwagenwerte.',
            'Gerade bei strengen deutschen HU-/TÜV-Kontrollen prüfen Sachverständige gezielt die Kennzeichnung auf Gehäuse und Streuscheibe (DC/DR bzw. HC/HR). Mit dem neu bedampften Originalreflektor bleibt jedes Prüfzeichen 100 % gültig.',
          ],
          bullets: [
            'Kein Zerschneiden von Originalhalterungen oder Stellmotoren',
            'Auch für werkseitige OEM-LED-Reflektorschalen aus PC-HT geeignet',
            '24 Monate Garantie auf Schichthaftung und >92 % gerichtete Lichtreflexion',
          ],
        },
        {
          heading: 'Einfacher Paketversand aus Deutschland und Österreich nach Józefów',
          paragraphs: [
            'Bei vielen Modellen (z. B. Audi A6, BMW E60/E65, Passat, Avensis) lässt sich die Projektoreinheit rückseitig ohne Öffnen der Frontscheibe entnehmen und kostengünstig per DHL/DPD an unser Werk senden.',
          ],
        },
      ],
      whenChooseATitle: 'Originalreflektor bedampfen lassen, wenn:',
      whenChooseA: [
        'Das Fahrzeug regulär im öffentlichen Straßenverkehr (HU/TÜV) bewegt wird.',
        'Dynamisches Kurvenlicht (AFS) und Original-Steuergeräte fehlerfrei weiterlaufen sollen.',
        'Maximale Lichtausbeute zum Bruchteil eines Umbaus oder Neukaufs gewünscht ist.',
      ],
      whenChooseBTitle: 'Bi-LED-Umbau nur erwägen, wenn:',
      whenChooseB: [
        'Reine Motorsport-, Tracktool- oder Offroad-Fahrzeuge außerhalb der StVZO aufgebaut werden.',
      ],
      faq: [
        {
          q: 'Erlischt beim Einbau von Bi-LED-Linsen in Xenon-Scheinwerfer die Zulassung?',
          a: 'Ja, gemäß StVZO und ECE-Regelung erlischt die Bauartgenehmigung des Scheinwerfers bei Änderung der geprüften Lichtquelle.',
        },
        {
          q: 'Wie hell leuchtet ein neu verspiegelter Bi-Xenon-Reflektor?',
          a: 'Mit >92 % gerichteter Aluminiumreflexion entspricht die Beleuchtungsstärke in Lux wieder einem fabrikneuen Originalteil.',
        },
        {
          q: 'Können auch originale Werks-LED-Reflektoren neu bedampft werden?',
          a: 'Ja, wir beschichten ermüdete PC-HT- und Druckguss-Spiegelschalen aus serienmäßigen LED-Scheinwerfern.',
        },
        {
          q: 'Wie lange dauert das Scheinwerfer bedampfen inklusive Rückversand?',
          a: 'Die Werkslaufzeit in Józefów beträgt 2–4 Werktage zuzüglich 2 Tagen versichertem Paketlauf nach Deutschland.',
        },
      ],
      relatedLinks: [
        { label: 'Preise & Rechner: Aufbereitung', path: '/de/scheinwerfer-aufbereitung-preise' },
        { label: 'Lösung: Bi-Xenon & LED-Reflektoren', path: '/de/loesungen/bi-xenon-linsen-und-led-scheinwerfer-bedampfen' },
        { label: 'Vergleich: Reflektor vs. Nachbau', path: '/de/vergleich/reflektor-aufbereitung-vs-nachbau' },
        { label: 'Werkstandort Warschau & Józefów', path: '/de/scheinwerfer-aufbereitung/warschau-jozefow' },
      ],
      breadLabel: 'OEM-PVD vs. Bi-LED-Umbau',
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
        '„Czajniczek” rozpuszcza wierzchnią warstwę nagiego poliwęglanu (PC) gorącymi oparami acetonu lub chlorku metylenu — nie nakłada żadnego filtra UV i wywołuje naprężenia prowadzące do siatki mikropęknięć (crazing) już po 3–6 miesiącach. Przemysłowe lakierowanie UV w STANIAX odbudowuje usieciowaną powłokę ochronną o trwałości powyżej 5 lat.',
      verdictTitle: 'Werdykt inżynierii polimerów (PC)',
      verdictSummary:
        'Nigdy nie traktuj drogich kloszy Bi-Xenon ani Matrix LED oparami acetonu — wywołane mikropęknięcia skrośne są nieodwracalne i zmuszają do wymiany klosza. Wybierz szlif gradacyjny i bezpyłowy twardy lakier UV.',
      comparisonRows: [
        { parameter: 'Ochrona przed promieniowaniem słonecznym UV', optionA: 'Pełny bloker UV w usieciowanej żywicy (5+ lat)', optionB: '0% ochrony UV — goły poliwęglan żółknie w pół roku' },
        { parameter: 'Ryzyko pęknięć naprężeniowych (Solvent Crazing)', optionA: 'Zerowe — dedykowane systemy bezketonowe do PC', optionB: 'Bardzo wysokie — nieodwracalna pajęczynka pęknięć' },
        { parameter: 'Odporność na chemię myjni i piasek drogowy', optionA: 'Twarda powłoka odporna na ścieranie i zasady', optionB: 'Rozmiękczona warstwa łatwo matowieje pod szczotkami' },
        { parameter: 'Możliwość ponownej korekty w przyszłości', optionA: 'Pełna — szlifujesz wyłącznie warstwę lakieru', optionB: 'Często brak — pęknięcia wchodzą w głąb tworzywa' },
        { parameter: 'Wpływ na jasność wypalonej soczewki wewnątrz', optionA: 'Łączymy z metalizacją PVD odbłyśnika (>92%)', optionB: 'Zerowy — naprawia wyłącznie zewnętrzny plastik' },
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
            '24-miesięczna gwarancja na brak żółknięcia i łuszczenia warstwy ochronnej',
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
          a: 'Renowacja klosza poliwęglanowego z twardym lakierem UV kosztuje orientacyjnie 150–220 zł za sztukę (szczegóły w cenniku).',
        },
        {
          q: 'Czy folia PPF wystarcza zamiast lakieru UV po szlifowaniu?',
          a: 'Twardy lakier UV tworzy chemicznie związaną skorupę optyczną; opcjonalnie na utwardzony lakier UV można dodatkowo zaaplikować folię PPF przeciw kamieniom.',
        },
        {
          q: 'Czy polerowanie kloszy naprawi słabe światła mijania w nocy?',
          a: 'Jeśli klosz jest już przejrzysty, a światła nadal słabe, przyczyną jest wypalony odbłyśnik wewnątrz — wymagający metalizacji próżniowej PVD.',
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
        'Acetone and methylene chloride vapor cups melt the outer skin of bare polycarbonate (PC) without adding any UV absorbers—triggering internal stress micro-cracks (solvent crazing) and rapid re-yellowing within 3–6 months. STANIAX applies a solvent-safe, crosslinked UV hardcoat that restores 5+ year solar and abrasion protection.',
      verdictTitle: 'Polymer Engineering Verdict',
      verdictSummary:
        'Never expose expensive Bi-Xenon or Matrix LED polycarbonate lenses to ketone vapors—deep crazing cracks cannot be sanded out. Choose graded wet-sanding followed by booth-applied UV hardcoat.',
      comparisonRows: [
        { parameter: 'Solar UV Radiation Blocking', optionA: 'High-density UV absorbers (5+ year clarity)', optionB: 'Zero UV blockers — yellows again within months' },
        { parameter: 'Solvent Stress-Cracking Risk', optionA: 'Zero — PC-compatible primerless/barrier chemistry', optionB: 'Severe — irreversible internal spiderweb cracks' },
        { parameter: 'Car-Wash & Grit Abrasion Resistance', optionA: 'Crosslinked hard-shell scratch resistance', optionB: 'Softened polymer surface mars easily' },
        { parameter: 'Future Refinishability', optionA: 'Safe — only the clearcoat is sanded later', optionB: 'Often ruined by full-thickness crazing' },
        { parameter: 'Internal Projector Output Recovery', optionA: 'Combined with >92% PVD bowl restoration', optionB: 'None — treats outer plastic skin only' },
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
            '24-month warranty against peeling, hazing, and UV yellowing',
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
          a: 'Approximately €35–€52 per lens, with bundle savings when combined with internal PVD reflector restoration.',
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
        'Sogenannte Aceton-Bedampfungsbecher lösen lediglich die oberste Schicht des nackten Polycarbonats (PC) chemisch an — sie hinterlassen keinerlei UV-Schutzfilter und provozieren irreversible Spannungsrisse (Crazing) binnen 3–6 Monaten. Die industrielle UV-Hartlackierung bei STANIAX baut eine vernetzte Schutzschicht mit über 5 Jahren Witterungsbeständigkeit auf.',
      verdictTitle: 'Werkstofftechnisches Urteil für Polycarbonat',
      verdictSummary:
        'Setzen Sie hochwertige Bi-Xenon- oder Matrix-LED-Streuscheiben niemals heißen Keton- oder Acetondämpfen aus — durchgehende Spannungsrisse zerstören die Scheibe dauerhaft. Fachgerecht ist nur Stufenschliff plus UV-Hartlack.',
      comparisonRows: [
        { parameter: 'UV-Strahlungsschutz gegen Vergilbung', optionA: 'Hochwirksame UV-Absorber für >5 Jahre Klarheit', optionB: '0 % UV-Schutz — vergilbt nach wenigen Monaten erneut' },
        { parameter: 'Spannungsriss-Risiko (Solvent Crazing)', optionA: 'Null — PC-verträgliche Industrielacksysteme', optionB: 'Extrem hoch — feines Rissnetz tief im Kunststoff' },
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
            '24 Monate Gewährleistung gegen Abblättern und erneutes Vergilben',
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
          a: 'Richtpreis ca. 35–52 € je Frontscheibe laut unserer aktuellen Preistabelle.',
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
