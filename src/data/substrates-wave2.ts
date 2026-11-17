import type { Lang } from '@/lib/translations'
import type { SubstrateLocalePage } from './substrates'

export type Wave2SubstrateId =
  | 'xenon-led-lenses'
  | 'cosmetic-packaging'
  | '3d-prints'
  | 'emi-esd'

export const WAVE2_SUBSTRATE_SLUGS: Record<Wave2SubstrateId, Record<Lang, string>> = {
  'xenon-led-lenses': {
    pl: '/rozwiazania/regeneracja-soczewek-bi-xenon-i-lamp-led',
    en: '/en/solutions/bixenon-projector-and-led-reflector-restoration',
    de: '/de/loesungen/bi-xenon-linsen-und-led-scheinwerfer-bedampfen',
  },
  'cosmetic-packaging': {
    pl: '/rozwiazania/metalizacja-opakowan-kosmetycznych',
    en: '/en/solutions/cosmetic-packaging-vacuum-metallization',
    de: '/de/loesungen/kosmetikverpackungen-vakuummetallisierung',
  },
  '3d-prints': {
    pl: '/rozwiazania/metalizacja-wydrukow-3d-sls-sla',
    en: '/en/solutions/3d-print-metallization-sls-sla',
    de: '/de/loesungen/3d-druck-metallisierung-sls-sla',
  },
  'emi-esd': {
    pl: '/rozwiazania/powloki-ekranujace-emi-rfi-esd',
    en: '/en/solutions/emi-rfi-esd-shielding-coatings',
    de: '/de/loesungen/emi-rfi-esd-abschirmbeschichtung',
  },
}

export const SUBSTRATES_WAVE2: Record<Wave2SubstrateId, Record<Lang, SubstrateLocalePage>> = {
  'xenon-led-lenses': {
    pl: {
      metaTitle: 'Regeneracja soczewek Bi-Xenon i lamp LED PVD | STANIAX',
      metaDesc:
        'Regeneracja wypalonych odbłyśników i soczewek reflektorów Bi-Xenon, Xenon (Hella, Valeo, Koito) oraz lamp LED: Al 99,99% PVD >92%, od 150 zł/szt., 24 mies. gw.',
      badge: 'Optyka Automotive: Bi-Xenon / LED / H7',
      polymerCode: 'BMC / Magnez / Stal / PC-HT',
      h1: 'Regeneracja soczewek reflektorów Bi-Xenon, lamp ksenonowych i LED',
      subtitle:
        'Próżniowe napylanie aluminium 99,99% z pasywacją SiOx dla wypalonych odbłyśników projektorowych Hella, Valeo, Bosch AL, ZKW oraz Koito.',
      directAnswerQuestion: 'Jak przebiega regeneracja wypalonego odbłyśnika soczewki Bi-Xenon lub lampy LED?',
      directAnswer:
        'Wypalony odbłyśnik z duroplastu BMC, stopu magnezu, stali lub PC-HT przechodzi chemiczne usunięcie utlenionej warstwy, aplikację wysokotemperaturowego podkładu barierowego (do 220 °C), napylanie aluminium 99,99% w próżni 10⁻⁴ mbar oraz zabezpieczenie SiOx. Proces przywraca >92% fabrycznego odbicia światła w 2-4 dni robocze.',
      specs: [
        { parameter: 'Obsługiwane systemy projektorów', value: 'Hella E55 / Intemo, Valeo, Bosch AL, ZKW, Koito (Toyota/Lexus)' },
        { parameter: 'Materiały czaszy odbłyśnika', value: 'Duroplast BMC, odlew magnezowy/Al, tłoczona stal, poliwęglan PC-HT' },
        { parameter: 'Parametry optyczne po PVD', value: '>92% refleksyjności kierunkowej · ostra granica światłocienia ECE' },
        { parameter: 'Odporność cieplna nad żarnikiem', value: '200-220 °C w strefie łuku D1S / D2S / D3S / D4S oraz H7' },
        { parameter: 'Cena i gwarancja STANIAX', value: 'Od 150-260 zł/szt. (same odbłyśniki) · 24 miesiące gwarancji' },
      ],
      sections: [
        {
          heading: 'Diagnostyka wypalonego odbłyśnika: dlaczego wymiana żarników Xenon nie pomaga?',
          paragraphs: [
            'Kierowcy zlecający hasła „regeneracja lamp xenon” lub „wypalony odbłyśnik” często wcześniej kupują komplet drogich żarników D1S/D2S i ze zdziwieniem odkrywają, że światła mijania nadal nie oświetlają mokrej jezdni. Przyczyną jest degradacja lustrzanej warstwy w górnej części czaszy soczewki - dokładnie tam, gdzie skupia się największa temperatura łuku elektrycznego i promieniowanie UV.',
            'Szczególnie podatne na zmatowienie są fabryczne projektory Koito (Toyota Avensis T25/T27, Lexus IS/RX), Valeo (VW Passat B6, Audi A4/Q7), Hella E55 (Audi A6 C6, BMW E60/E65, Mercedes W211) oraz ZKW. Napylanie świeżego aluminium PVD w komorze STANIAX całkowicie eliminuje brązowy nalot i przywraca fabryczny zasięg wiązki.',
          ],
          bullets: [
            'Zachowanie 100% fabrycznej homologacji ECE oraz mechanizmów skrętnych AFS / Dynamic',
            'Czyszczenie optyczne szklanej soczewki z mlecznego osadu w cenie przeglądu modułu',
            'Bezpieczna wysyłka samych wymontowanych projektorów kurierem z całej Polski do Józefowa',
          ],
        },
        {
          heading: 'Regeneracja lamp LED i matrycowych zwierciadeł samochodowych',
          paragraphs: [
            'Skuteczna regeneracja lamp ledowych samochodowych (Full LED oraz Bi-LED) wynika z faktu, że strumień diod mocy odbija się od wielosekcyjnych zwierciadeł z wysokotemperaturowego poliwęglanu PC-HT. Przegrzanie radiatora lub nieszczelność odpowietrznika powoduje utlenienie warstwy aluminium - nasza linia PVD odtwarza lustro bez konieczności zakupu nowej lampy LED za 4000-9000 zł.',
          ],
        },
      ],
      applications: [
        'Soczewki Bi-Xenon D1S, D2S, D3S, D4S (Hella, Valeo, Bosch AL, Koito, ZKW)',
        'Odbłyśniki reflektorów LED i Bi-LED samochodów osobowych oraz dostawczych',
        'Soczewki halogenowe H7/HB3/HIR2 oraz reflektory motocyklowe',
        'Lampy robocze i drogowe 24V ciągników siodłowych TIR oraz autobusów',
      ],
      faq: [
        {
          q: 'Ile kosztuje regeneracja soczewek reflektorów Bi-Xenon w STANIAX?',
          a: 'Regeneracja samych wymontowanych odbłyśników soczewkowych kosztuje od 180 do 260 zł za sztukę (360-520 zł za komplet na oś).',
        },
        {
          q: 'Czy regenerujecie słynne wypalone odbłyśniki Toyota Avensis T25 / T27?',
          a: 'Tak, projektory Koito z modeli Toyota Avensis, Auris, RAV4 i Lexus należą do najczęściej regenerowanych przez nas podzespołów.',
        },
        {
          q: 'Czy mogę przysłać same wyjęte soczewki bez rozklejania kloszy?',
          a: 'Tak! W wielu lampach projektor odkręca się od tyłu obudowy - wysyłka samych czasz skraca czas usługi do 2-4 dni roboczych i obniża koszt.',
        },
        {
          q: 'Czy po regeneracji lampa przejdzie przegląd na Stacji Kontroli Pojazdów?',
          a: 'Tak, zachowujesz oryginalną homologację lampy i uzyskujesz wzorcową granicę światłocienia na przyrządzie diagnostycznym.',
        },
      ],
      relatedLinks: [
        { label: 'Cennik i kalkulator regeneracji', path: '/cennik-regeneracji-reflektorow' },
        { label: 'Porównanie: PVD OEM vs Przeróbka Bi-LED', path: '/porownanie/regeneracja-odblysnikow-pvd-vs-przerobka-bi-led' },
        { label: 'Lokalizacja: Warszawa i Józefów', path: '/regeneracja-reflektorow/warszawa-jozefow' },
        { label: 'Usługa: Regeneracja odbłyśników', path: '/regeneracja-reflektorow' },
      ],
      breadLabel: 'Soczewki Bi-Xenon i LED',
    },
    en: {
      metaTitle: 'Bi-Xenon Projector & LED Reflector Restoration | STANIAX',
      metaDesc:
        'High-vacuum PVD restoration for burnt Bi-Xenon projector bowls (Hella, Valeo, Bosch, Koito) and OEM LED reflectors: >92% 99.99% Al reflectance & 24-mo warranty.',
      badge: 'Automotive Optics: Bi-Xenon & LED',
      polymerCode: 'BMC / Magnesium / Steel / PC-HT',
      h1: 'Bi-Xenon Projector Bowl & OEM LED Headlight Reflector Restoration',
      subtitle:
        '99.99% pure aluminum high-vacuum PVD deposition and SiOx passivation for burnt Hella, Valeo, Bosch AL, ZKW, and Koito projector optics.',
      directAnswerQuestion: 'How are burnt Bi-Xenon projector bowls and OEM LED reflectors restored?',
      directAnswer:
        'Oxidized BMC thermoset, magnesium alloy, steel, or PC-HT projector bowls are chemically stripped without abrasive pitting, sealed with a 220 °C thermal barrier primer, vacuum-metallized with 99.99% aluminum at 10⁻⁴ mbar, and passivated with plasma SiOx - restoring >92% factory lux output in 2-4 business days.',
      specs: [
        { parameter: 'Projector Systems Serviced', value: 'Hella E55 / Intemo, Valeo, Bosch AL, ZKW, Koito (Toyota/Lexus)' },
        { parameter: 'Reflector Substrates', value: 'BMC thermoset, Mg/Al die-casting, stamped steel, optical PC-HT' },
        { parameter: 'Optical Output After PVD', value: '>92% specular reflectance · crisp ECE / MOT cutoff line' },
        { parameter: 'Arc-Zone Heat Resistance', value: '200-220 °C continuous above D1S / D2S / D3S / H7 bulbs' },
        { parameter: 'Rate & Warranty', value: 'From €45-€68 / bowl · 24-month industrial PVD warranty' },
      ],
      sections: [
        {
          heading: 'Why New Xenon Bulbs Cannot Fix a Burnt Projector Bowl',
          paragraphs: [
            'When D1S or D2S headlamps lose night range, replacing expensive xenon burners rarely solves the problem because the upper reflector crown directly above the arc has baked brown and lost its metallic mirror.',
            'STANIAX restores thousands of Hella, Valeo, ZKW, and Koito bowls (including Toyota Avensis T25/T27, Audi A6, BMW E60/E65, and Mercedes projectors) inside Ø 1200 mm industrial vacuum chambers, returning showroom road illumination without altering OEM electronics.',
          ],
          bullets: [
            'Preserves 100% ECE homologation and dynamic cornering AFS actuators',
            'Eliminates internal outgassing fog on glass projector lenses',
            'Fast EU parcel turnaround for loose projector bowls sent by workshops',
          ],
        },
        {
          heading: 'OEM Matrix & Full-LED Reflector Cup Metallization',
          paragraphs: [
            'Modern factory LED headlamps rely on multi-faceted PC-HT reflector cups that oxidize from moisture ingress or heatsink thermal spikes. Recoating the OEM cup saves €1,000-€2,500 over buying a complete replacement LED headlamp.',
          ],
        },
      ],
      applications: [
        'D1S, D2S, D3S, D4S Bi-Xenon projector bowls (Hella, Valeo, Bosch AL, Koito)',
        'Factory OEM Full-LED and Matrix-LED polycarbonate reflector arrays',
        'Halogen H7/HB3 projector cups and motorcycle headlamps',
        '24V heavy-duty commercial truck and coach projector modules',
      ],
      faq: [
        {
          q: 'How much does Bi-Xenon projector bowl PVD recoating cost?',
          a: 'Loose projector bowls start at €48-€72 per unit (€96-€140 per axle pair) with a 24-month warranty.',
        },
        {
          q: 'Do you restore burnt Toyota Avensis Koito projector reflectors?',
          a: 'Yes, Koito BMC/metal bowls from Toyota and Lexus models are among our most frequent weekly restorations.',
        },
        {
          q: 'Can workshops ship only the removed projector bowls?',
          a: 'Yes, shipping unbolted bowls avoids housing shipping bulk and completes in 2-4 working days at our Józefów plant.',
        },
        {
          q: 'Will restored bowls pass MOT / TÜV beam alignment checks?',
          a: 'Yes, original geometry and >92% specular reflectivity produce a factory-sharp beam cutoff.',
        },
      ],
      relatedLinks: [
        { label: 'Headlight Restoration Pricing', path: '/en/headlight-restoration-pricing' },
        { label: 'Compare: OEM PVD vs Bi-LED Retrofit', path: '/en/compare/oem-reflector-pvd-vs-biled-retrofit' },
        { label: 'Warsaw & Józefów Plant Hub', path: '/en/headlight-restoration/warsaw-jozefow' },
        { label: 'Service: Reflector Restoration', path: '/en/headlight-reflector-restoration' },
      ],
      breadLabel: 'Bi-Xenon & LED Projectors',
    },
    de: {
      metaTitle: 'Bi-Xenon Linsen & LED Scheinwerfer bedampfen | STANIAX',
      metaDesc:
        'Verbrannte Bi-Xenon-Reflektoren (Hella, Valeo, Bosch, Koito) & LED-Scheinwerfer neu bedampfen: >92 % Al-99,99-%-Spiegel, HU/TÜV-konform & 24 Monate Garantie.',
      badge: 'Kfz-Optik: Bi-Xenon / LED / H7',
      polymerCode: 'BMC / Magnesium / Stahl / PC-HT',
      h1: 'Bi-Xenon-Projektorlinsen und LED-Scheinwerfer-Reflektoren neu bedampfen',
      subtitle:
        'Industrielle 99,99-%-Aluminium-Vakuumbedampfung mit SiOx-Schutzschicht für blinde Hella-, Valeo-, Bosch-AL-, ZKW- und Koito-Reflektoren.',
      directAnswerQuestion: 'Wie lässt man verbrannte Bi-Xenon-Projektorreflektoren und LED-Spiegelschalen fachgerecht neu verspiegeln?',
      directAnswer:
        'Verbrannte Reflektorschalen aus BMC-Duroplast, Magnesiumguss, Stahl oder PC-HT werden bei STANIAX schonend entschichtet, mit einem bis 220 °C stabilen Hitzeschutzprimer geglättet, im Hochvakuum (10⁻⁴ mbar) mit 99,99 % Reinaluminium bedampft und per SiOx passiviert - für >92 % Werksreflexion binnen 2-4 Werktagen.',
      specs: [
        { parameter: 'Unterstützte Projektorsysteme', value: 'Hella E55 / Intemo, Valeo, Bosch AL, ZKW, Koito (Toyota/Lexus)' },
        { parameter: 'Reflektor-Grundwerkstoffe', value: 'Duroplast BMC, Mg-/Al-Druckguss, Tiefziehstahl, PC-HT' },
        { parameter: 'Lichtwerte nach PVD-Prozess', value: '>92 % gerichtete Spiegelreflexion · scharfe HU/TÜV-Hell-Dunkel-Grenze' },
        { parameter: 'Temperaturfestigkeit über Brenner', value: '200-220 °C dauerhaft für D1S / D2S / D3S / H7' },
        { parameter: 'Richtpreis & Garantie', value: 'Ca. 48-72 € je Projektor · 24 Monate Werksgarantie' },
      ],
      sections: [
        {
          heading: 'Scheinwerfer bedampfen statt teurem Komplettaustausch bei Xenon-Lichtverlust',
          paragraphs: [
            'Wenn Bi-Xenon-Scheinwerfer nachts kaum noch die Straße ausleuchten, bringt selbst ein neuer Marken-Xenonbrenner selten Besserung: Direkt über dem Lichtbogen ist die werkseitige Aluminiumschicht durch jahrelange Hitze mattbraun verbrannt.',
            'Indem Kfz-Werkstätten und Fahrzeughalter den originalen Reflektor neu verspiegeln lassen, bleibt die komplette Fahrzeugsensorik samt Kurvenlicht (AFS) unverändert erhalten. Besonders häufig bearbeiten wir Hella-E55-, Valeo-, ZKW- sowie Koito-Projektoren (u. a. Audi A6, BMW E60/E65, VW Passat, Toyota Avensis T25/T27).',
            'Vor der Rücksendung nach Deutschland oder Österreich wird jede Spiegelschale im Prüffeld unter gerichtetem Prüflightspektrum kontrolliert und einzeln in antistatischen Schaumhüllen verpackt.',
          ],
          bullets: [
            '100 % Erhalt der ECE-Bauartgenehmigung für die deutsche HU/TÜV-Prüfung',
            'Kein inneres Beschlagen der Glaslinse dank lösemittelfreier Vakuumpassivierung',
            'Attraktive B2B-Staffelpreise für Kfz-Betriebe und Scheinwerfer-Aufbereiter',
          ],
        },
        {
          heading: 'Instandsetzung matter Werks-LED-Reflektoren aus PC-HT',
          paragraphs: [
            'Auch bei modernen Voll-LED-Scheinwerfern erblinden hochbelastete PC-HT-Spiegelkassetten durch Kondensat oder Überhitzung. Unsere Niedertemperatur-PVD-Bedampfung rettet das Originalbauteil und erspart vierstellige Neuteilkosten.',
            'Weil das Hochtemperatur-Polycarbonat (PC-HT) moderner Matrix- und Voll-LED-Module empfindlich auf aggressive Beizchemie reagiert, setzt STANIAX auf ein substratschonendes Reinigungs- und UV-Primersystem unter 65 °C. So bleiben feinste optische Facetten, Rastnasen und Referenzpunkte für das Steuergerät hundertprozentig maßhaltig.',
            'Für freie Kfz-Meisterbetriebe, Oldtimer-Restauratoren, Speditionen und Flottenbetreiber aus Deutschland, Österreich und der Schweiz bieten wir transparente Festpreise je Spiegelschale sowie eine dokumentierte Endkontrolle jedes einzelnen Reflektors vor dem versicherten Rückversand.',
          ],
        },
      ],
      applications: [
        'Bi-Xenon-Projektorreflektoren D1S, D2S, D3S, D4S (Hella, Valeo, Bosch, Koito)',
        'Originale Voll-LED- und Matrix-LED-Spiegelschalen moderner Pkw',
        'Halogen-Projektionslinsen (H7, HB3, HIR2) und Motorradscheinwerfer',
        '24V-Fernverkehrs-Lkw- und Reisebus-Scheinwerfermodule',
      ],
      faq: [
        {
          q: 'Was kostet das Bi-Xenon Reflektor neu verspiegeln bei STANIAX?',
          a: 'Einzelne ausgebaute Projektorreflektoren liegen bei ca. 48-72 € pro Stück inklusive 24 Monaten Garantie.',
        },
        {
          q: 'Bearbeiten Sie auch verbrannte Toyota Avensis T25/T27 Koito-Reflektoren?',
          a: 'Ja, Koito-Projektoren aus Toyota- und Lexus-Modellen gehören zu unseren meistgefragten Serieninstandsetzungen.',
        },
        {
          q: 'Kann ich nur die ausgebauten Linsenhalter aus Deutschland einsenden?',
          a: 'Ja, der Versand der reinen Reflektorschalen spart Porto, vermeidet Gehäuseschäden und dauert im Werk nur 2-4 Werktage.',
        },
        {
          q: 'Besteht das Fahrzeug danach problemlos die Hauptuntersuchung (TÜV/DEKRA)?',
          a: 'Ja, da Originalgehäuse und Brennpunktgeometrie unverändert bleiben, liefert der Scheinwerfer wieder ein exaktes Prüfprotokoll.',
        },
      ],
      relatedLinks: [
        { label: 'Preise & Rechner: Aufbereitung', path: '/de/scheinwerfer-aufbereitung-preise' },
        { label: 'Vergleich: OEM-PVD vs. Bi-LED-Umbau', path: '/de/vergleich/reflektor-pvd-vs-biled-umbau' },
        { label: 'Werkstandort Warschau & Józefów', path: '/de/scheinwerfer-aufbereitung/warschau-jozefow' },
        { label: 'Leistung: Reflektor neu bedampfen', path: '/de/scheinwerfer-reflektor-aufbereitung' },
      ],
      breadLabel: 'Bi-Xenon & LED bedampfen',
    },
  },

  'cosmetic-packaging': {
    pl: {
      metaTitle: 'Metalizacja opakowań kosmetycznych PVD i UV | STANIAX',
      metaDesc:
        'Metalizacja opakowań kosmetycznych i perfumeryjnych w STANIAX: nakrętki PP/ABS, słoiczki, atomizery i flakony - złoto/chrom PVD, 96% etanol i ΔE < 0,8.',
      badge: 'Branża Beauty & Perfumeryjna B2B',
      polymerCode: 'PP / ABS / SAN / PETG / Szkło',
      h1: 'Metalizacja próżniowa i lakierowanie UV opakowań kosmetycznych',
      subtitle:
        'Luksusowe wykończenia chrom, 24k złoto, rose gold, satyna i ombre dla nakrętek, słoików pielęgnacyjnych oraz flakonów perfumeryjnych w seriach B2B.',
      directAnswerQuestion: 'Na czym polega przemysłowa metalizacja opakowań kosmetycznych w STANIAX?',
      directAnswer:
        'Metalizacja opakowań kosmetycznych w STANIAX obejmuje aktywację wyprasek z PP, ABS, SAN lub szkła, aplikację bezrozpuszczalnikowego podkładu UV, próżniowe napylanie aluminium 99,99% w komorach Ø 1200 mm oraz utwardzany promieniami UV lakier barwiący (złoto, chrom, rose gold). Powłoka spełnia normę ISO 2409 Gt 0 i wytrzymuje kontakt z 96% etanolem.',
      specs: [
        { parameter: 'Obsługiwane detale beauty', value: 'Nakrętki perfum, kołnierze atomizerów, słoiki kremów, tubki pomadek, flakony' },
        { parameter: 'Tworzywa i podłoża', value: 'Polipropylen PP (monomateriał), ABS, SAN, SMMA, PETG, szkło hutnicze' },
        { parameter: 'Efekty kolorystyczne', value: 'Lustrzany chrom, złoto 18k/24k, rose gold, szampan, soft-touch, ombre' },
        { parameter: 'Odporność chemiczna i ścierna', value: 'Test 96% etanolu perfumeryjnego, olejków eterycznych, tarcia w kartonikach' },
        { parameter: 'Wydajność i powtarzalność', value: 'Do ~900 nakrętek / cykl Ø 1200 mm · kontrola barwy ΔE < 0,8' },
      ],
      sections: [
        {
          heading: 'Spójność kolorystyczna nakrętki z tworzywa i szklanego flakonu na jednej półce',
          paragraphs: [
            'Największym wyzwaniem marek kosmetycznych jest utrzymanie identycznego odcienia złota lub różowego złota pomiędzy polipropylenową nasadką a szklanym korpusem słoika czy butelki. Ponieważ w zakładzie STANIAX realizujemy zarówno metalizację tworzyw sztucznych, jak i lakierowanie szkła pod jednym dachem, kalibrujemy receptury pigmentowe spektrofotometrem poniżej progu ΔE < 0,8.',
            'Zastosowanie lakierów utwardzanych promieniowaniem UV eliminuje emisję LZO i pozwala zachować nieskazitelną czystość gwintów wewnętrznych, dzięki czemu nasadki zamykają się na automatycznych liniach rozlewniczych z fabrycznym momentem dokręcania.',
          ],
          bullets: [
            'Pełna zgodność z europejskimi wymogami REACH i RoHS (zero sześciowartościowego chromu Cr6+)',
            'Możliwość metalizacji ekologicznych opakowań monomateriałowych z czystego PP i rPP',
            'Przygotowanie powierzchni pod późniejszy hot-stamping oraz tampondruk i sitodruk logo',
          ],
        },
        {
          heading: 'Elastyczne MOQ: od limitowanych kolekcji indie-beauty po setki tysięcy sztuk',
          paragraphs: [
            'Obsługujemy zarówno serie wdrożeniowe od kilkuset do kilku tysięcy sztuk przy premierach niszowych perfum, jak i stałe kontrakty wielkoseryjne dla polskich oraz europejskich przetwórców wtryskowych i rozlewni.',
          ],
        },
      ],
      applications: [
        'Nakrętki perfumeryjne, pierścienie atomizerów i nasadki z PP, ABS oraz Surlynu',
        'Słoiki do kremów premium, butelki airless oraz oprawki szminek i tuszów do rzęs',
        'Szklane flakony perfum i dyfuzorów zapachowych (złoto PVD, satyna bez kwasu HF, ombre)',
        'Opakowania suplementów diety, nutrikosmetyków i edycji prezentowych',
      ],
      faq: [
        {
          q: 'Czy powłoka PVD na nakrętce perfum nie ściera się od alkoholu?',
          a: 'Nie - stosujemy wysoko usieciowane lakiery nawierzchniowe UV i silanowe certyfikowane na odporność wobec 96% etanolu oraz kompozycji zapachowych.',
        },
        {
          q: 'Czy na metalizowanym wieczku można wykonać nadruk logo lub hot-stamping?',
          a: 'Tak, dobieramy napięcie powierzchniowe lakieru nawierzchniowego pod trwały sitodruk UV, tampondruk oraz tłoczenie folią na gorąco.',
        },
        {
          q: 'Czy realizujecie próbki referencyjne przed uruchomieniem całej partii?',
          a: 'Tak, wykonujemy wzorce kolorystyczne na powierzonych wypraskach i flakonach klienta do zatwierdzenia przed serią.',
        },
        {
          q: 'Jaki jest czas realizacji partii opakowań kosmetycznych?',
          a: 'Standardowo 3-7 dni roboczych w zależności od wielkości partii w naszym zakładzie w Józefowie k. Warszawy.',
        },
      ],
      relatedLinks: [
        { label: 'Artykuł: PVD w branży beauty', path: '/news/metalizacja-prozniowa-rewolucjonizuje-branze-beauty' },
        { label: 'Usługa: Metalizacja tworzyw sztucznych', path: '/metalizacja-tworzyw-sztucznych' },
        { label: 'Matryca: Lakierowanie polipropylenu PP', path: '/rozwiazania/lakierowanie-polipropylenu-pp' },
        { label: 'Matryca: Lakierowanie i PVD szkła', path: '/rozwiazania/lakierowanie-i-metalizacja-szkla' },
      ],
      breadLabel: 'Opakowania kosmetyczne PVD',
    },
    en: {
      metaTitle: 'Cosmetic Packaging Vacuum Metallization & UV | STANIAX',
      metaDesc:
        'B2B cosmetic packaging vacuum metallization & UV coating at STANIAX: PP/ABS caps, jars & glass flacons in gold/chrome PVD with 96% ethanol resistance.',
      badge: 'Beauty & Fragrance Packaging B2B',
      polymerCode: 'PP / ABS / SAN / PETG / Glass',
      h1: 'Cosmetic & Fragrance Packaging Vacuum Metallization (PVD & UV)',
      subtitle:
        'Mirror chrome, 24k gold, rose gold, soft-touch, and gradient finishes for plastic closures, skincare jars, and perfume flacons.',
      directAnswerQuestion: 'How does STANIAX metallize cosmetic and perfumery packaging for European brands?',
      directAnswer:
        'STANIAX activates molded PP, ABS, SAN, or flint glass packaging, applies VOC-free UV leveling basecoats, deposits 99.99% pure aluminum inside Ø 1200 mm planetary vacuum chambers, and seals parts with dye-tinted UV topcoats (gold, chrome, rose gold) - achieving ΔE < 0.8 color accuracy, ISO 2409 Gt 0 adhesion, and 96% ethanol resistance.',
      specs: [
        { parameter: 'Packaging Components', value: 'Perfume caps, crimp collars, skincare jars, airless pumps, mascara/lip tubes' },
        { parameter: 'Supported Substrates', value: 'Mono-material PP & rPP, ABS, SAN, PETG, soda-lime cosmetic glass' },
        { parameter: 'Luxury Finish Palette', value: 'Mirror chrome, 18k/24k gold, champagne, rose gold, satin frost, ombre' },
        { parameter: 'Chemical & Line Resistance', value: '96% perfumery ethanol, essential oils, Sebum, high-speed carton rub' },
        { parameter: 'Chamber Capacity & QA', value: '~900 closures / Ø 1200 mm cycle · spectrophotometric ΔE < 0.8' },
      ],
      sections: [
        {
          heading: 'Matching Plastic Caps and Glass Flacons Under One Roof',
          paragraphs: [
            'Luxury skincare and fragrance launches often fail visual QC when closures are metallized by one subcontractor and glass bottles coated by another. Operating both PVD plastic metallization and silane glass coating lines in Józefów allows STANIAX to match gold and rose-gold shades within ΔE < 0.8.',
            'Precision jigging shields internal closure threads from lacquer overspray, preserving exact capping torque on automated filling lines.',
          ],
          bullets: [
            '100% hexavalent-chromium-free (REACH & RoHS compliant) alternative to galvanic plating',
            'Supports recyclable mono-material polypropylene (PP) packaging sustainability targets',
            'Topcoats formulated to accept downstream UV screen printing and hot-foil stamping',
          ],
        },
        {
          heading: 'Scalable European Contract Coating from Pilot SKUs to High Volume',
          paragraphs: [
            'Whether finishing 1,000 collector flacons for a niche fragrance house or 100,000+ injection-molded jars per month, our central EU facility delivers documented batch quality within 3-7 business days.',
          ],
        },
      ],
      applications: [
        'Perfume closures, actuator collars, and cosmetic jar lids in PP and ABS',
        'Lipstick barrels, compact cases, and airless serum dispensers',
        'Glass Eau de Parfum flacons, dropper bottles, and scented candle vessels',
        'Premium nutraceutical and gift-edition rigid packaging',
      ],
      faq: [
        {
          q: 'Does the PVD gold or chrome coating resist 96% perfume alcohol?',
          a: 'Yes, our UV-crosslinked and silane-promoted topcoats are laboratory tested against 96% ethanol and fragrance oils.',
        },
        {
          q: 'Can metallized cosmetic caps be silk-screened or hot-stamped afterward?',
          a: 'Yes, we adjust topcoat surface tension so logos applied via UV screen printing or hot stamping bond cleanly.',
        },
        {
          q: 'Do you provide pre-production color approval samples?',
          a: 'Yes, we produce master color plaques and sample runs on your actual molded components prior to serial production.',
        },
        {
          q: 'What is your standard B2B lead time for beauty packaging?',
          a: '3-7 business days ex-works Józefów, Poland, with palletized EU export packing.',
        },
      ],
      relatedLinks: [
        { label: 'Article: PVD in the Beauty Industry', path: '/en/news/vacuum-metallization-revolutionizes-beauty-industry' },
        { label: 'Service: Plastic Chrome Plating', path: '/en/plastic-chrome-plating' },
        { label: 'Substrate: Polypropylene PP Coating', path: '/en/solutions/polypropylene-pp-coating' },
        { label: 'Substrate: Glass Bottle Coating PVD', path: '/en/solutions/glass-bottle-coating-pvd' },
      ],
      breadLabel: 'Cosmetic Packaging PVD',
    },
    de: {
      metaTitle: 'Kosmetikverpackungen Vakuummetallisierung PVD | STANIAX',
      metaDesc:
        'PVD-Vakuummetallisierung für Kosmetikverpackungen bei STANIAX: PP/ABS-Kappen, Tiegel & Glasflakons in Gold/Chrom, 96 % ethanolfest, ISO 2409 & ΔE < 0,8.',
      badge: 'Beauty- & Parfümverpackungen B2B',
      polymerCode: 'PP / ABS / SAN / PETG / Glas',
      h1: 'PVD-Vakuummetallisierung und UV-Lackierung für Kosmetikverpackungen',
      subtitle:
        'Spiegelchrom, 24-Karat-Gold, Roségold, Soft-Touch und Ombré-Verläufe für Verschlüsse, Cremetiegel und Parfümflakons im europäischen Lohnauftrag.',
      directAnswerQuestion: 'Wie veredelt STANIAX Kosmetikverpackungen aus Kunststoff und Glas im Industriemaßstab?',
      directAnswer:
        'STANIAX aktiviert Spritzgussteile aus PP, ABS oder SAN sowie Verpackungsglas, trägt lösemittelfreie UV-Glättprimer auf, bedampft 99,99 % Reinaluminium in Ø-1200-mm-Planetenkammern und versiegelt per UV-Decklack in Gold, Chrom oder Roségold - mit ΔE < 0,8 Farbgenauigkeit, ISO 2409 Gt 0 und 96 % Ethanolbeständigkeit.',
      specs: [
        { parameter: 'Veredelte Packmittel', value: 'Parfümkappen, Zerstäuberringe, Cremetiegel, Airless-Spender, Lippenstifthülsen' },
        { parameter: 'Verarbeitete Substrate', value: 'Monomaterial-PP & rPP, ABS, SAN, PETG sowie Weiß- und Opalglas' },
        { parameter: 'Oberflächendesigns', value: 'Hochglanz-Chrom, Gold, Champagner, Roségold, Satin-Frost, Ombré' },
        { parameter: 'Beständigkeiten', value: '96 % Parfümethanol, ätherische Öle, Kartonabrieb & Klimatest' },
        { parameter: 'Serienleistung & QS', value: 'Ca. 900 Verschlüsse / Ø-1200-mm-Zyklus · Spektralmessung ΔE < 0,8' },
      ],
      sections: [
        {
          heading: 'Exakte Farbharmonie zwischen Kunststoffkappe und Glasflakon aus einer Hand',
          paragraphs: [
            'Im Premium-Kosmetikregal fällt jede Farbabweichung zwischen metallisierter PP-Verschlusskappe und lackiertem Glastiegel sofort ins Auge. Da STANIAX sowohl Kunststoff-Vakuummetallisierung als auch industrielle Glaslackierung im selben Werk in Józefów betreibt, stimmen wir Gold-, Platin- und Roségold-Rezepturen spektralphotometrisch unter ΔE < 0,8 aufeinander ab.',
            'Präzise Aufnahmedorne halten Innengewinde und Dichtlippen vollkommen lackfrei, damit Ihre automatischen Verschließmaschinen ohne Drehmomentschwankungen arbeiten.',
            'Sämtliche Schichtsysteme sind vollständig frei von sechswertigem Chrom (REACH- und RoHS-konform) und ermöglichen das recyclingfreundliche Verchromen moderner Monomaterial-Verpackungen aus reinem Polypropylen.',
          ],
          bullets: [
            'Geeignet für anschließenden UV-Siebdruck, Tampondruck und Heißfolienprägung',
            'Staubfreie Rückverpackung in Trays oder Gefachen für direkte Abfülllinien-Zuführung',
            'Wirtschaftliche Losgrößen ab Sondereditionen von 500 Stück bis zur Millionenauflage',
          ],
        },
        {
          heading: 'Schnelle Bemusterung für DACH-Kosmetikmarken und Spritzgießer',
          paragraphs: [
            'Auf Ihren Original-Werkzeugmustern fertigen wir kurzfristig Freigabemuster in unterschiedlichen Glanz- und Goldabstufungen bei regulären Serienlaufzeiten von 3-7 Werktagen.',
            'Jede Produktionscharge durchläuft in unserem Prüflabor standardisierte Beständigkeitstests für die Kosmetikindustrie: Gitterschnittprüfung nach DIN EN ISO 2409, Alkohol-Reibtest mit 96-prozentigem Parfümethanol, Tesa-Abrissprüfung an scharfen Flakonkanten sowie Klimakammerzyklen bei erhöhter Luftfeuchtigkeit. Dadurch vermeiden Kosmetikhersteller und Lohnabfüller zuverlässig Transportschäden, Abrieb im Faltschachtelkarton oder Spannungsrisse an dickwandigen SAN- und PETG-Tiegeln.',
            'Neben vollflächigem Hochglanz-Chrom und Champagnergold realisieren wir halbtransparente Rauchglas-Lasuren zur optischen Füllstandskontrolle, samtige Soft-Touch-Haptiklacke für exklusive Hautpflegeserien sowie fließende Zweifarb-Ombré-Verläufe auf dickwandigen Parfümflaschen und Raumduft-Diffusoren. Jede Palette verlässt unser Werk in Józefów mit Chargenprotokoll und staubgeschützter Einzelteil-Trennung für höchste Linieneffizienz beim Abfüller.',
          ],
        },
      ],
      applications: [
        'Parfümverschlüsse, Kragenringe und Schraubkappen aus PP, ABS und Surlyn',
        'Doppelwandige Kosmetiktiegel, Airless-Flaschen und Mascara-/Lipgloss-Hülsen',
        'Glasflakons, Pipettenflaschen und Duftkerzengläser in Spiegel-PVD oder Satin-Frost',
        'Hochwertige Nahrungsergänzungs- und Geschenkverpackungen',
      ],
      faq: [
        {
          q: 'Ist die Gold- oder Chrom-PVD-Schicht beständig gegen 96 % Parfümalkohol?',
          a: 'Ja, unsere hochvernetzten UV- und Silan-Decklacke sind gezielt auf 96-prozentiges Parfümethanol und Duftöle ausgelegt.',
        },
        {
          q: 'Lassen sich die metallisierten Kappen anschließend bedrucken oder heißprägen?',
          a: 'Ja, wir stellen die Oberflächenenergie des Decklacks passend für UV-Siebdruck, Tampondruck oder Heißfolienprägung ein.',
        },
        {
          q: 'Erstellen Sie vorab Farbmuster auf unseren Originalteilen?',
          a: 'Selbstverständlich bemustern wir Ihre angelieferten Rohlinge zur verbindlichen Grenzmusterfreigabe.',
        },
        {
          q: 'Wie lang ist die Lieferzeit für Serienabrufe nach Deutschland?',
          a: 'In der Regel 3-7 Werktage ab Werk Józefów inklusive transportsicherer Palettenverpackung.',
        },
      ],
      relatedLinks: [
        { label: 'Fachartikel: Vakuummetallisierung Beauty', path: '/de/news/vakuummetallisierung-revolutioniert-die-kosmetikbranche' },
        { label: 'Leistung: Kunststoff verchromen', path: '/de/kunststoff-verchromen' },
        { label: 'Material: Polypropylen PP lackieren', path: '/de/loesungen/polypropylen-pp-lackierung' },
        { label: 'Material: Glasflakon Lackierung & PVD', path: '/de/loesungen/glasflakon-lackierung-pvd' },
      ],
      breadLabel: 'Kosmetikverpackungen PVD',
    },
  },

  '3d-prints': {
    pl: {
      metaTitle: 'Metalizacja i lakierowanie wydruków 3D SLS/SLA | STANIAX',
      metaDesc:
        'Przemysłowe wygładzanie, uszczelnianie porów i metalizacja próżniowa PVD wydruków 3D (SLS/MJF PA12, SLA, FDM) w STANIAX: efekt chromu, złota i lakier 2K RAL.',
      badge: 'Post-Processing Druku 3D: SLS / MJF / SLA',
      polymerCode: 'PA12 SLS/MJF · Żywice SLA/DLP · ASA/ABS',
      h1: 'Metalizacja próżniowa PVD i lakierowanie przemysłowe wydruków 3D',
      subtitle:
        'Przekształcamy surowe prototypy oraz krótkie serie z druku 3D (PA12 SLS/MJF, SLA, FDM) w detale o lustrzanej powierzchni chromu PVD lub lakieru klasy A.',
      directAnswerQuestion: 'Jak uzyskać idealnie gładki chrom PVD lub lakier Piano Black na porowatym wydruku 3D?',
      directAnswer:
        'Surowe wydruki proszkowe SLS/MJF (PA12) mają chropowatość Ra 6-12 µm, a żywice SLA wykazują schodkowanie warstw. W STANIAX uszczelniamy porowatość dwuskładnikowym podkładem wypełniającym, wyrównujemy powierzchnię podkładem UV do Ra < 0,05 µm i napylamy aluminium 99,99% PVD lub lakier 2K PU w niskiej temperaturze poniżej 65 °C.',
      specs: [
        { parameter: 'Obsługiwane technologie druku 3D', value: 'SLS i HP MJF (PA12 / PA11), SLA / DLP (żywice techniczne), FDM (ABS/ASA/PC)' },
        { parameter: 'Redukcja chropowatości powierzchni', value: 'Z surowego Ra 6-12 µm do gładkości lustrzanej pod PVD / Piano Black' },
        { parameter: 'Temperatura wygrzewania powłok', value: '45-65 °C - brak wypaczania cienkościennych geometrii żywicznych' },
        { parameter: 'Dostępne wykończenia', value: 'Chrom i złoto PVD, RAL/NCS mat strukturalny, Soft-Touch, Piano Black' },
        { parameter: 'Skala zleceń B2B', value: 'Od pojedynczych makiet targowych i prototypów po serie pomostowe 50-2000 szt.' },
      ],
      sections: [
        {
          heading: 'Od porowatego spieku proszkowego PA12 do wyglądu wypraski z formy wtryskowej',
          paragraphs: [
            'Druk 3D w technologiach HP Multi Jet Fusion i SLS pozwala ominąć koszt budowy formy wtryskowej przy seriach kilkuset obudów, jednak surowa szara i porowata powierzchnia chłonie brud, oleje i dyskwalifikuje detal w produktach konsumenckich czy medycznych.',
            'W zakładzie STANIAX opracowaliśmy wieloetapowy proces zamykania kapilar w poliamidzie PA12 przy użyciu elastycznych gruntów 2K oraz podkładów UV. Tak przygotowany element nie gazuje w komorze próżniowej 10⁻⁴ mbar i pozwala uzyskać bezbłędne lustro metalizacji próżniowej lub głęboki lakier nawierzchniowy.',
          ],
          bullets: [
            'Makiety opakowań perfum i butelek SLA/DLP nieodróżnialne od docelowej produkcji wielkoseryjnej',
            'Funkcjonalne prototypy odbłyśników i układów optycznych drukowane z żywic wysokotemperaturowych',
            'Maskowanie gniazd pod inserty gwintowane, uszczelki i złącza elektroniczne',
          ],
        },
        {
          heading: 'Szybkie serie pomostowe dla działów R&D, lotnictwa i wzornictwa przemysłowego',
          paragraphs: [
            'Wspieramy biura konstrukcyjne, studia projektowania opakowań oraz producentów urządzeń specjalistycznych krótkimi terminami realizacji 3-6 dni roboczych w Józefowie pod Warszawą.',
          ],
        },
      ],
      applications: [
        'Makiety targowe i wzorce fotograficzne opakowań kosmetycznych oraz flakonów SLA',
        'Obudowy urządzeń medycznych, robotyki i elektroniki drukowane w MJF / SLS PA12',
        'Prototypowe odbłyśniki LED i elementy wnętrz koncepcyjnych pojazdów automotive',
        'Statuetki, trofea, rekwizyty filmowe i detale architektoniczne z efektem złota/chromu PVD',
      ],
      faq: [
        {
          q: 'Która technologia druku 3D najlepiej nadaje się pod lustrzany chrom PVD?',
          a: 'Najmniejszego nakładu szlifowania wymagają wydruki żywiczne SLA/DLP; przy seriach użytkowych świetnie sprawdza się trwały poliamid SLS/MJF PA12 po naszym cyklu wypełniania porów.',
        },
        {
          q: 'Czy żywica SLA nie odkształci się podczas suszenia lakieru?',
          a: 'Stosujemy systemy UV oraz niskotemperaturowe 2K utwardzane poniżej 60 °C, całkowicie bezpieczne dla standardowych i inżynieryjnych żywic fotopolimerowych.',
        },
        {
          q: 'Czy można polakierować wydruki 3D na dowolny kolor RAL z drobną strukturą?',
          a: 'Tak - lakierowanie strukturalne 2K PU na PA12 maskuje warstwy druku już w dwóch przejściach bez kosztownego szlifowania ręcznego.',
        },
        {
          q: 'Czy przyjmujecie pojedyncze prototypy R&D?',
          a: 'Tak, wyceniamy zarówno pojedyncze modele pokazowe, jak i powtarzalne serie pomostowe drukowane w 3D.',
        },
      ],
      relatedLinks: [
        { label: 'Matryca: Powlekanie poliamidu PA', path: '/rozwiazania/powlekanie-poliamidu-pa' },
        { label: 'Usługa: Metalizacja próżniowa PVD', path: '/metalizacja-prozniowa' },
        { label: 'Usługa: Lakierowanie tworzyw B2B', path: '/lakierowanie-tworzyw-sztucznych' },
        { label: 'Artykuł: Wydajność materiałów i PVD', path: '/news/partnerstwo-z-wiodacym-producentem-lotniczym' },
      ],
      breadLabel: 'Wydruki 3D SLS / SLA',
    },
    en: {
      metaTitle: '3D Print Metallization (PVD) & Coating SLS/SLA | STANIAX',
      metaDesc:
        'Industrial PVD vacuum metallization and 2K/UV coating for 3D-printed parts (SLS/MJF PA12, SLA resins, ASA): pore sealing, mirror chrome/gold & RAL finishes.',
      badge: 'Additive Manufacturing Post-Processing',
      polymerCode: 'SLS/MJF PA12 · SLA/DLP Resins · FDM ABS/ASA',
      h1: 'PVD Vacuum Metallization & Industrial Coating for 3D-Printed Parts',
      subtitle:
        'Transforming raw SLS/MJF nylon and SLA photopolymer 3D prints into injection-mold-grade mirror chrome PVD, gold, or 2K RAL production components.',
      directAnswerQuestion: 'How do you achieve a mirror PVD chrome or Class-A gloss finish on porous 3D-printed parts?',
      directAnswer:
        'Raw SLS/MJF PA12 prints exhibit Ra 6-12 µm powder porosity while SLA prints show voxel layer lines. STANIAX seals capillary pores with catalyzed 2K high-build primers, levels the surface with UV basecoats below Ra 0.05 µm, and deposits 99.99% aluminum PVD below 65 °C without warping thin walls.',
      specs: [
        { parameter: 'Supported 3D Print Processes', value: 'SLS & HP MJF (PA12 / PA11), SLA / DLP photopolymers, industrial FDM (ASA/ABS/PC)' },
        { parameter: 'Surface Roughness Conversion', value: 'From raw Ra 6-12 µm sinter texture to optical mirror PVD or Piano Black' },
        { parameter: 'Thermal Curing Window', value: '45-65 °C low-temp cycle preventing resin distortion' },
        { parameter: 'Available Coating Systems', value: 'Mirror chrome/gold PVD, fine-texture 2K PU RAL/NCS, Soft-Touch' },
        { parameter: 'Batch Flexibility', value: 'Single R&D show prototypes through 2,000-piece bridge production runs' },
      ],
      sections: [
        {
          heading: 'Sealing SLS/MJF Porosity to Prevent High-Vacuum Outgassing',
          paragraphs: [
            'Placing an unsealed laser-sintered nylon part directly into a 10⁻⁴ mbar PVD chamber releases trapped air and moisture from powder interstices, ruining metallic reflection. Our multi-stage pore-sealing chemistry locks down PA12 capillaries and builds an injection-molded visual appearance.',
            'For high-resolution SLA/DLP packaging mockups and prototype automotive lighting reflectors, UV leveling primers create instant showroom mirror optics.',
          ],
          bullets: [
            'Photorealistic fragrance and spirits packaging mockups ahead of steel moldinvestment',
            'Functional prototype LED and automotive reflector optics on high-temp SLA resins',
            'Precision masking of brass heat-set inserts, O-ring grooves, and mating flanges',
          ],
        },
        {
          heading: 'Fast Bridge-Production Finishing for European R&D Teams',
          paragraphs: [
            'Hardware startups, aerospace engineers, and industrial design studios ship printed batches directly to Józefów for 3-6 business day finishing.',
          ],
        },
      ],
      applications: [
        'SLA cosmetic bottle & closure presentation mockups in 24k gold and chrome PVD',
        'Bridge-production medical, robotics, and electronics enclosures in MJF/SLS PA12',
        'Prototype automotive headlamps, bezels, and concept-car interior trim',
        'Custom awards, architectural scale models, and aerospace duct components',
      ],
      faq: [
        {
          q: 'Which 3D printing technology gives the best mirror chrome PVD finish?',
          a: 'SLA/DLP resins provide the smoothest starting substrate for optical chrome, while SLS/MJF PA12 offers superior mechanical durability once sealed with our 2K primer stack.',
        },
        {
          q: 'Will low-HDT SLA photopolymers warp during coating cure?',
          a: 'No, our UV curing and low-temperature (<60 °C) 2K schedules keep standard and engineering resins dimensionally stable.',
        },
        {
          q: 'What is the most cost-effective way to hide MJF/SLS layer texture?',
          a: 'Our fine-textured 2K polyurethane RAL/NCS finish seals PA12 and hides print orientation lines cleanly without intensive hand sanding.',
        },
        {
          q: 'Do you accept one-off R&D prototypes as well as serial batches?',
          a: 'Yes, we process both single show-model prototypes and recurring additive manufacturing batches.',
        },
      ],
      relatedLinks: [
        { label: 'Substrate: Polyamide Nylon Coating', path: '/en/solutions/polyamide-nylon-coating' },
        { label: 'Service: PVD Vacuum Metallization', path: '/en/vacuum-metallisation' },
        { label: 'Service: Plastic Parts Painting', path: '/en/plastic-parts-painting' },
        { label: 'Article: Metallization & Material Performance', path: '/en/news/how-does-metallization-affect-material-performance' },
      ],
      breadLabel: '3D Prints SLS / SLA PVD',
    },
    de: {
      metaTitle: '3D-Druck Metallisierung PVD & Lackierung SLS/SLA | STANIAX',
      metaDesc:
        'Industrielle PVD-Vakuummetallisierung & 2K-Lackierung für 3D-Druckteile (SLS/MJF PA12, SLA-Harz, ASA): Porenversiegelung, Echtchrom-Spiegel & RAL-Feinstruktur.',
      badge: 'Post-Processing für Additive Fertigung',
      polymerCode: 'PA12 SLS/MJF · SLA/DLP-Harze · FDM ABS/ASA',
      h1: 'PVD-Vakuummetallisierung und Industrielackierung für 3D-Druck-Bauteile',
      subtitle:
        'Porenversiegelung, Glättung und Hochvakuum-Verchromung für Prototypen und Kleinserien aus SLS/MJF-Polyamid sowie SLA-Photopolymeren.',
      directAnswerQuestion: 'Wie erzeugt man auf porösen 3D-Druckteilen einen makellosen PVD-Chromspiegel oder Klavierlack?',
      directAnswer:
        'Ungeschützte SLS-/MJF-Bauteile aus PA12 weisen eine Rauheit von Ra 6-12 µm auf und gasen im Vakuum aus. STANIAX versiegelt die Kapillarporen mit zweikomponentigen Füllprimern, glättet die Oberfläche per UV-Basis auf Ra < 0,05 µm und bedampft 99,99 % Reinaluminium schonend unter 65 °C ohne Verzug.',
      specs: [
        { parameter: 'Geeignete 3D-Druckverfahren', value: 'SLS & HP MJF (PA12 / PA11), SLA / DLP-Harze, Industrie-FDM (ASA/ABS/PC)' },
        { parameter: 'Oberflächenglättung', value: 'Von rauer Pulverstruktur (Ra 6-12 µm) zu Spritzguss-Spiegelglanz' },
        { parameter: 'Thermisches Prozessfenster', value: '45-65 °C Niedertemperaturtrocknung gegen Verzug bei SLA-Harzen' },
        { parameter: 'Verfügbare Beschichtungen', value: 'Chrom- & Gold-PVD, 2K-PUR-RAL/NCS-Feinstruktur, Soft-Touch, Klavierlack' },
        { parameter: 'Losgrößen', value: 'Einzelne Messeprototypen bis hin zu Bridge-Kleinserien von 2.000 Stück' },
      ],
      sections: [
        {
          heading: 'Vom offenporigen PA12-Lasersinterteil zur serienreifen Klasse-A-Oberfläche',
          paragraphs: [
            'Additive Fertigungsverfahren wie HP Multi Jet Fusion und selektives Lasersintern sparen teure Spritzgusswerkzeuge bei Kleinserien ein, doch die poröse Rohoberfläche nimmt Schmutz sowie Feuchtigkeit auf und verhindert direkte Vakuumbeschichtungen.',
            'Im STANIAX-Werk in Józefów schließt ein abgestimmtes 2K-Porenfüllsystem sämtliche Hohlräume gasdicht ab. Anschließend ermöglicht unser UV-Glättprimer einen verzerrungsfreien PVD-Aluminiumspiegel in Chrom, Gold oder Rauchchrom nach DIN EN ISO 2409 (Gt 0).',
            'Für hochauflösende SLA-Designmodelle von Parfümflakons, Leuchtenreflektoren oder Interieurblenden liefern wir fotorealistische Urmuster binnen weniger Werktage.',
          ],
          bullets: [
            'Seriennahe Design-Mockups für Kosmetikverpackungen vor Freigabe teurer Stahlformen',
            'Funktionsfähige Prototyp-Reflektoren mit >92 % gerichteter Lichtreflexion auf Hochtemperaturharzen',
            'Präzises Abdecken von Gewindeeinsätzen, Dichtnuten und Steckkontakten',
          ],
        },
        {
          heading: 'Wirtschaftliche 2K-Feinstrukturlackierung für den deutschen Maschinen- und Gerätebau',
          paragraphs: [
            'Wo kein Hochglanzspiegel gefragt ist, kaschiert unsere chemikalienfeste 2K-PUR-Feinstrukturlackierung in jedem RAL- oder NCS-Farbton die Schichtlinien von MJF-Gehäusen wirtschaftlich und abriebfest.',
            'Durch die geschlossene 2K-Deckschicht werden offenporige PA12- und PA11-Lasersinterteile dauerhaft gegen Desinfektionsmittel, Hydrauliköle, Kühlschmierstoffe und UV-Vergilbung abgedichtet. Das macht oberflächenveredelte 3D-Druckteile voll einsatzfähig für Laborgeräte, Bedienpanels, Greiferfinger in der Automation sowie sichtbare Fahrzeuginnenraum-Komponenten.',
            'Auf Wunsch kombinieren wir auf einem 3D-gedruckten Bauteil mehrere Funktionszonen: beispielsweise eine hochreflektierende PVD-Spiegelfläche im Lampeninneren und ein kratzfest mattschwarzes Außengehäuse inklusive abgedeckter Passsitze.',
          ],
        },
      ],
      applications: [
        'Messe- und Fotomuster für Flakons, Verschlüsse und Konsumgüter aus SLA-Harz',
        'Kleinseriengehäuse für Medizintechnik, Sensorik und Robotik aus PA12 MJF/SLS',
        'Prototypen für Scheinwerferoptiken, Zierleisten und Konzeptfahrzeuge',
        'Designobjekte, Trophäen und Architekturmodelle in Echtgold- oder Chromoptik',
      ],
      faq: [
        {
          q: 'Welches 3D-Druckverfahren eignet sich am besten zum Verchromen per PVD?',
          a: 'SLA-/DLP-Harze liefern mit minimalem Schleifaufwand sofortige Spiegeloptik; für mechanisch belastbare Serienteile empfehlen wir PA12 (SLS/MJF) mit unserer 2K-Porenversiegelung.',
        },
        {
          q: 'Verziehen sich dünnwandige SLA-Bauteile beim Trocknen?',
          a: 'Nein, durch UV-Härtung und Niedertemperaturzyklen unter 60 °C bleiben auch filigrane Photopolymere absolut maßhaltig.',
        },
        {
          q: 'Wie lassen sich Stufeneffekte bei Seriengehäusen günstig abdecken?',
          a: 'Eine matte 2K-PUR-Feinstrukturlackierung nach RAL/NCS egalisiert die Drucktextur ohne aufwendigen Handschliff.',
        },
        {
          q: 'Beschichtet STANIAX auch einzelne F&E-Prototypen aus Deutschland?',
          a: 'Ja, wir bearbeiten sowohl einzelne Vorserienmuster als auch laufende 3D-Druck-Abrufe in 3-6 Werktagen.',
        },
      ],
      relatedLinks: [
        { label: 'Material: Polyamid PA beschichten', path: '/de/loesungen/polyamid-pa-beschichtung' },
        { label: 'Leistung: Vakuummetallisierung', path: '/de/vakuummetallisierung' },
        { label: 'Leistung: Kunststofflackierung', path: '/de/kunststofflackierung' },
        { label: 'Fachartikel: Metallisierung & Werkstoffe', path: '/de/news/wie-beeinflusst-metallisierung-die-materialleistung' },
      ],
      breadLabel: '3D-Druck SLS / SLA PVD',
    },
  },

  'emi-esd': {
    pl: {
      metaTitle: 'Powłoki ekranujące EMI/RFI i ESD na tworzywach | STANIAX',
      metaDesc:
        'Techniczna metalizacja próżniowa aluminium oraz lakierowanie przewodzące ESD/EMI/RFI obudów elektronicznych i medycznych z ABS, PC i PA w zakładzie STANIAX.',
      badge: 'Elektronika & Przemysł: EMI / RFI / ESD',
      polymerCode: 'Przewodzące Al PVD + Lakiery ESD (ABS / PC / PA)',
      h1: 'Powłoki ekranujące EMI/RFI oraz lakierowanie antyelektrostatyczne ESD na tworzywach',
      subtitle:
        'Selektywna metalizacja próżniowa wnętrz obudów i lakierowanie rozpraszające ładunki elektrostatyczne dla elektroniki przemysłowej, aparatury medycznej i automotive.',
      directAnswerQuestion: 'Jak nadaje się właściwości ekranujące EMI/RFI i antyelektrostatyczne ESD obudowom z tworzyw sztucznych?',
      directAnswer:
        'Tworzywa ABS, PC i poliamid są naturalnymi izolatorami przepuszczającymi zakłócenia elektromagnetyczne. W STANIAX nanosimy na wewnętrzne ścianki obudów ciągłą warstwę aluminium 99,99% w próżni PVD lub natryskowe lakiery przewodzące i antyelektrostatyczne ESD (10⁵-10⁹ Ω/sq) z precyzyjnym maskowaniem stref izolacji i zewnętrznych powierzchni dekoracyjnych.',
      specs: [
        { parameter: 'Funkcje inżynieryjne powłoki', value: 'Tłumienie zakłóceń EMI/RFI · rozpraszanie ładunków ESD · odprowadzanie ciepła' },
        { parameter: 'Technologie aplikacyjne', value: 'Próżniowe napylanie Al w komorach Ø 1200 mm + natrysk przewodzący HVLP' },
        { parameter: 'Obsługiwane polimery obudów', value: 'PC/ABS uniepalniane (UL94 V-0), poliwęglan PC, PA6/PA66 GF, wydruki PA12' },
        { parameter: 'Maskowanie selektywne', value: 'Szablony silikonowe i trzpienie chroniące gwinty, okna wyświetlaczy i złącza' },
        { parameter: 'Przyczepność i kontrola jakości', value: 'ISO 2409 klasa Gt 0 · pomiar rezystancji powierzchniowej na partii referencyjnej' },
      ],
      sections: [
        {
          heading: 'Lekka obudowa polimerowa z ekranowaniem metalu bez kosztów odlewów aluminiowych',
          paragraphs: [
            'Konstruktorzy aparatury pomiarowej, sterowników przemysłowych, terminali płatniczych i urządzeń diagnostycznych często stają przed dylematem: ciężka obudowa z odlewu aluminiowego czy lekka wypraska z uniepalnianego PC/ABS wymagająca przejścia badań kompatybilności elektromagnetycznej EMC.',
            'Selektywne napylenie warstwy czystego aluminium po wewnętrznej stronie obudowy w komorze próżniowej STANIAX lub aplikacja przewodzących systemów lakierniczych tworzy klatkę Faradaya przy zachowaniu minimalnej masy detalu oraz pełnej swobody lakierowania zewnętrznej strony korpusu w kolorach RAL/NCS.',
          ],
          bullets: [
            'Brak kruchości i kąpieli kwasowych mogących uszkodzić wtopki mosiężne w wypraskach',
            'Powłoki ESD zapobiegające przeskokom iskry i osadzaniu pyłu w strefach czystych oraz EPA',
            'Jednoczesne lakierowanie zewnętrzne obudowy w systemie 2K PU (mat, struktura, Soft-Touch)',
          ],
        },
        {
          heading: 'Obsługa krótkich i średnich serii B2B dla producentów elektroniki w UE',
          paragraphs: [
            'W przeciwieństwie do gigantycznych linii nastawionych wyłącznie na miliony smartfonów, w zakładzie w Józefowie obsługujemy elastycznie serie od 50 do 20 000 obudów rocznie z krótkim czasem przezbrojenia przyrządów maskujących.',
          ],
        },
      ],
      applications: [
        'Obudowy aparatury medycznej, laboratoryjnej i analizatorów diagnostycznych (PC/ABS UL94)',
        'Korpusy czujników przemysłowych, radarów, sterowników PLC i terminali komunikacyjnych',
        'Osłony podzespołów elektroniki pokładowej automotive, dronów i systemów awioniki',
        'Pojemniki, tacki transportowe i uchwyty montażowe do stref chronionych EPA (ESD)',
      ],
      faq: [
        {
          q: 'Czy można zmetalizować wyłącznie wnętrze obudowy, a zewnątrz pomalować na matowy RAL?',
          a: 'Tak - wykonujemy dedykowane osłony maskujące, dzięki którym wnętrze zyskuje warstwę przewodzącą, a strona widoczna estetyczny lakier 2K PU.',
        },
        {
          q: 'Czy proces PVD nie deformuje obudów z uniepalnianego tworzywa PC/ABS V-0?',
          a: 'Nie, napylanie próżniowe przebiega w niskiej temperaturze bezpiecznej dla cienkościennych wyprasek z wtopkami gwintowanymi.',
        },
        {
          q: 'Czym różni się powłoka ekranująca EMI od powłoki antyelektrostatycznej ESD?',
          a: 'Ekranowanie EMI wymaga wysokiej przewodności odbijającej fale radiowe, natomiast powłoka ESD posiada kontrolowaną rezystancję rozpraszającą ładunki bez nagłego wyładowania.',
        },
        {
          q: 'Jak szybko wyceniacie projekt na podstawie modelu 3D obudowy?',
          a: 'Po przesłaniu pliku STEP/PDF i wymagań stref maskowania na metalizacja@staniax.pl przygotowujemy wycenę technologiczną w 24-48h.',
        },
      ],
      relatedLinks: [
        { label: 'Usługa: Lakierowanie natryskowe B2B', path: '/lakierowanie-natryskowe' },
        { label: 'Usługa: Metalizacja próżniowa PVD', path: '/metalizacja-prozniowa' },
        { label: 'Matryca: Powlekanie tworzywa ABS i PC/ABS', path: '/rozwiazania/powlekanie-tworzywa-abs' },
        { label: 'Matryca: Wydruki 3D SLS / SLA', path: '/rozwiazania/metalizacja-wydrukow-3d-sls-sla' },
      ],
      breadLabel: 'Powłoki EMI / RFI i ESD',
    },
    en: {
      metaTitle: 'EMI/RFI Shielding & ESD Antistatic Coatings | STANIAX',
      metaDesc:
        'Selective high-vacuum PVD aluminum metallization and conductive ESD/EMI/RFI spray coatings for PC/ABS, PC, and PA electronics & medical enclosures at STANIAX.',
      badge: 'Electronics & Medical: EMI / RFI / ESD',
      polymerCode: 'Conductive Al PVD & ESD Topcoats (PC/ABS · PA)',
      h1: 'EMI/RFI Shielding Metallization & ESD Antistatic Coatings on Plastics',
      subtitle:
        'Selective internal Faraday-cage vacuum metallization and static-dissipative spray coatings for medical, industrial, and aerospace enclosures.',
      directAnswerQuestion: 'How do you add EMI/RFI shielding and ESD dissipation to injection-molded plastic enclosures?',
      directAnswer:
        'Because ABS, polycarbonate, and nylon are electrical insulators transparent to RF interference, STANIAX selectively deposits continuous 99.99% aluminum films inside Ø 1200 mm PVD chambers or applies conductive/static-dissipative spray coatings (10⁵-10⁹ Ω/sq) while masking external cosmetic surfaces and isolation bosses.',
      specs: [
        { parameter: 'Functional Performance', value: 'EMI/RFI attenuation · controlled ESD static bleed · zero dust attraction' },
        { parameter: 'Deposition Technologies', value: 'High-vacuum planetary Al PVD + precision HVLP conductive spray' },
        { parameter: 'Enclosure Polymers', value: 'Flame-retardant PC/ABS (UL94 V-0), optical PC, PA66 GF, MJF PA12' },
        { parameter: 'Selective Masking', value: 'Custom silicone plugs/shields for brass inserts, displays & PCB standoffs' },
        { parameter: 'Adhesion & Verification', value: 'ISO 2409 Class 0 cross-cut · surface resistance lot checks' },
      ],
      sections: [
        {
          heading: 'Replacing Heavy Die-Cast Housings with Shielded Polymer Enclosures',
          paragraphs: [
            'Medical diagnostic instruments, industrial PLC controllers, and telecom sensors increasingly replace machined aluminum housings with lightweight UL94 V-0 PC/ABS moldings - provided internal surfaces pass EMC compliance.',
            'Selective vacuum aluminum deposition and conductive coatings at STANIAX establish reliable grounding continuity across enclosure halves while allowing the exterior shell to be finished in custom 2K polyurethane RAL/NCS textures under the same roof.',
          ],
          bullets: [
            'Dry vacuum process avoids acid etching baths that corrode molded-in brass inserts',
            'Static-dissipative ESD finishes protect EPA assembly trays and cleanroom equipment',
            'One-stop manufacturing: internal EMI shield + external 2K cosmetic topcoat in Józefów',
          ],
        },
        {
          heading: 'Agile Batch Sizes for European OEM Electronics Manufacturers',
          paragraphs: [
            'Unlike high-MOQ consumer-electronics lines, STANIAX supports agile B2B series from 50 to 20,000 housings per year with rapid masking fixture fabrication.',
          ],
        },
      ],
      applications: [
        'Medical diagnostic analyzers, patient monitors, and laboratory instrument shells',
        'Industrial IoT gateways, radar domes, ruggedized handhelds, and PLC housings',
        'Automotive ECU covers, UAV/drone avionics pods, and optical sensor housings',
        'ESD-safe assembly fixtures, component carriers, and cleanroom machine covers',
      ],
      faq: [
        {
          q: 'Can you metallize the inside of a housing for EMI while painting the outside in RAL matte?',
          a: 'Yes, custom masking fixtures isolate the interior conductive layer while our HVLP booths coat the exterior in durable 2K polyurethane.',
        },
        {
          q: 'Is flame-retardant UL94 V-0 PC/ABS safe in your PVD process?',
          a: 'Yes, low-temperature vacuum deposition preserves dimensional tolerances and brass threaded inserts without heat warp.',
        },
        {
          q: 'What is the difference between EMI shielding and ESD dissipative coatings?',
          a: 'EMI shielding uses highly conductive metal layers to attenuate RF waves, whereas ESD coatings provide controlled mid-range resistance to bleed static safely without sparking.',
        },
        {
          q: 'How fast can STANIAX quote from a 3D STEP file?',
          a: 'Send your STEP drawing and masking callouts to metalizacja@staniax.pl for an engineering quotation within 24-48 hours.',
        },
      ],
      relatedLinks: [
        { label: 'Service: Industrial Spray Painting B2B', path: '/en/spray-painting' },
        { label: 'Service: PVD Vacuum Metallization', path: '/en/vacuum-metallisation' },
        { label: 'Substrate: ABS & PC/ABS Coating', path: '/en/solutions/abs-plastic-coating-pvd' },
        { label: 'Solution: 3D Print Metallization', path: '/en/solutions/3d-print-metallization-sls-sla' },
      ],
      breadLabel: 'EMI / RFI & ESD Coatings',
    },
    de: {
      metaTitle: 'EMI/RFI-Abschirmung & ESD-Beschichtung | STANIAX',
      metaDesc:
        'Selektive PVD-Aluminium-Abschirmung (EMV/EMI/RFI) und ableitfähige ESD-Lackierung für Kunststoffgehäuse aus PC/ABS, PC und PA im Industriewerk STANIAX.',
      badge: 'Elektronik & Medizintechnik: EMV / ESD',
      polymerCode: 'Leitfähiges Al-PVD & ESD-Lacke (PC/ABS · PA)',
      h1: 'EMV-, EMI- & RFI-Abschirmung sowie ableitfähige ESD-Beschichtung auf Kunststoffen',
      subtitle:
        'Selektive Innenmetallisierung im Hochvakuum und elektrostatisch ableitende Industrielacke für Elektronik-, Medizin- und Messgerätegehäuse.',
      directAnswerQuestion: 'Wie erhalten Kunststoffgehäuse eine zuverlässige EMV-Abschirmung oder ESD-Ableitfähigkeit?',
      directAnswer:
        'Da ABS, Polycarbonat und Polyamid elektrisch isolieren, bringt STANIAX auf Gehäuseinnenseiten eine geschlossene 99,99-%-Aluminiumschicht im Ø-1200-mm-Hochvakuum oder leitfähige bzw. ESD-ableitende Lacksysteme (10⁵-10⁹ Ω/sq) auf - inklusive präziser Maskierung von Isolationsdom- und Außensichtflächen.',
      specs: [
        { parameter: 'Technische Schutzfunktion', value: 'EMV-/HF-Störstrahlungsdämpfung · kontrollierte ESD-Ladungsableitung' },
        { parameter: 'Applikationsverfahren', value: 'Selektive Planeten-Vakuummetallisierung + HVLP-Leitlackierung' },
        { parameter: 'Gehäusewerkstoffe', value: 'Flammschutz-PC/ABS (UL94 V-0), PC, PA6/PA66 GF sowie PA12-3D-Druck' },
        { parameter: 'Maskiertechnik', value: 'Maßgefertigte Silikonabdeckungen für Gewindebuchsen, Fenster & Dichtstege' },
        { parameter: 'Qualitätsprüfung', value: 'Gitterschnitt DIN EN ISO 2409 Gt 0 · Oberflächenwiderstandsprüfung je Los' },
      ],
      sections: [
        {
          heading: 'Leichte Kunststoffgehäuse EMV-gerecht ausrüsten statt schwerem Aluminiumdruckguss',
          paragraphs: [
            'Hersteller von Medizingeräten, Industriesteuerungen, Sensorik und Funkmodulen ersetzen schwere Metallgehäuse zunehmend durch flammgeschützte PC/ABS-Spritzgussteile. Damit diese Baugruppen die EMV-Prüfung bestehen, erzeugt eine innere PVD-Aluminiumschicht oder Leitlackierung einen wirksamen Faradayschen Käfig.',
            'Weil das trockene Vakuumverfahren bei STANIAX ohne aggressive Beizbäder auskommt, bleiben bereits eingepresste Messing-Gewindeeinsätze und empfindliche Schnappverbindungen vollkommen unversehrt.',
            'Parallel lackieren wir im selben Durchlauf die äußeren Sichtflächen Ihrer Gehäuse in abriebfesten 2K-PUR-Farbtönen nach RAL, NCS oder kundenspezifischer Feinstruktur - komplett montagefertig aus einer Hand.',
          ],
          bullets: [
            'Sichere Kontaktierung an Gehäusedichtkanten und Erdungspunkten',
            'Ableitfähige ESD-Oberflächen gegen Funkenüberschlag und Staubanziehung in EPA-Zonen',
            'Wirtschaftliche Vorrichtungskosten bereits für mittelgroße Industrieserien ab 50 Stück',
          ],
        },
        {
          heading: 'Schnelle technische Auslegung anhand Ihrer STEP-Zeichnung',
          paragraphs: [
            'Unser Ingenieurteam in Józefów konzipiert anhand Ihrer 3D-Daten binnen weniger Tage passgenaue Abschattungsmasken und liefert Klein- wie Großserien zuverlässig in den gesamten DACH-Raum.',
            'Bei zweiteiligen Elektronikgehäusen legen wir besonderes Augenmerk auf eine niederohmige Überlappungszone entlang von Nut-und-Feder-Stegen sowie rund um Metallgewindebuchsen, damit Ober- und Unterschale im verschraubten Zustand eine lückenlose Schirmhülle bilden. Kritische Kriechstrecken zu Hochspannungs- oder Antennenbereichen bleiben durch formstabile Silikonmasken scharfkantig isoliert.',
            'Jedes gefertigte Serienlos wird vor dem Versand stichprobenartig auf Schichthaftung nach DIN EN ISO 2409 sowie auf definierten Oberflächenwiderstand zwischen Messpunkten dokumentiert. Die Rücklieferung erfolgt einzelteilgeschützt in ESD-gerechten Verpackungseinheiten direkt an Ihr Montagewerk in Deutschland, Österreich oder Polen.',
          ],
        },
      ],
      applications: [
        'Gehäuse für Labordiagnostik, Patientenmonitore und bildgebende Medizintechnik',
        'Industrie-PCs, SPS-Steuerungen, Funkterminals und Messgerätegehäuse',
        'Kfz-Steuergeräteabdeckungen, Drohnenelektronik und optische Sensormodule',
        'ESD-Werkstückträger, Montageschalen und Abdeckungen für EPA-Fertigungslinien',
      ],
      faq: [
        {
          q: 'Können Gehäuse innen EMV-metallisiert und außen farbig nach RAL lackiert werden?',
          a: 'Ja, durch passgenaue Maskiervorrichtungen kombinieren wir innere Abschirmschichten und äußere 2K-Designlackierungen in einem abgestimmten Fertigungsauftrag.',
        },
        {
          q: 'Verträgt flammgeschütztes PC/ABS (UL94 V-0) die Vakuumbeschichtung?',
          a: 'Ja, unsere Niedertemperatur-Prozessführung schützt dünnwandige Gehäuse und eingepresste Metallbuchsen zuverlässig vor Verzug.',
        },
        {
          q: 'Worin liegt der Unterschied zwischen EMV-Schirmung und ESD-Lackierung?',
          a: 'EMV-Schichten reflektieren und dämpfen hochfrequente Wellen durch hohe Leitfähigkeit, während ESD-Lacke statische Aufladung kontrolliert und funkenfrei ableiten.',
        },
        {
          q: 'Wie schnell erhalten deutsche OEM-Kunden ein Angebot nach STEP-Daten?',
          a: 'Senden Sie Ihre 3D-Daten samt Maskierbereichen an metalizacja@staniax.pl - wir kalkulieren Ihr Angebot innerhalb von 24-48 Stunden.',
        },
      ],
      relatedLinks: [
        { label: 'Leistung: Industrielle Spritzlackierung', path: '/de/spritzlackierung' },
        { label: 'Leistung: Vakuummetallisierung', path: '/de/vakuummetallisierung' },
        { label: 'Material: ABS & PC/ABS beschichten', path: '/de/loesungen/abs-kunststoff-beschichtung' },
        { label: 'Lösung: 3D-Druck Metallisierung', path: '/de/loesungen/3d-druck-metallisierung-sls-sla' },
      ],
      breadLabel: 'EMV- & ESD-Beschichtung',
    },
  },
}
