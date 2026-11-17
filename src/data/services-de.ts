import type {
  ServiceId,
  ServiceLocaleContent,
  RalColorOption,
} from "./services-types";

export const RAL_CLASSIC_21_DE: RalColorOption[] = [
  {
    code: "RAL 9005",
    name: "Tiefschwarz (Jet Black)",
    hex: "#0E0E10",
    category: "Schwarz / Grau",
  },
  {
    code: "RAL 9016",
    name: "Verkehrsweiß (Traffic White)",
    hex: "#F1F0EA",
    category: "Weiß",
  },
  {
    code: "RAL 9006",
    name: "Weißaluminium",
    hex: "#A1A1A0",
    category: "Metallic",
  },
  {
    code: "RAL 9007",
    name: "Graualuminium",
    hex: "#878581",
    category: "Metallic",
  },
  {
    code: "RAL 7016",
    name: "Anthrazitgrau",
    hex: "#383E42",
    category: "Schwarz / Grau",
  },
  {
    code: "RAL 7021",
    name: "Schwarzgrau",
    hex: "#2F3234",
    category: "Schwarz / Grau",
  },
  {
    code: "RAL 7035",
    name: "Lichtgrau",
    hex: "#C5C7C4",
    category: "Schwarz / Grau",
  },
  {
    code: "RAL 7024",
    name: "Graphitgrau",
    hex: "#45494E",
    category: "Schwarz / Grau",
  },
  {
    code: "RAL 5002",
    name: "Ultramarinblau",
    hex: "#1E2D6E",
    category: "Blau",
  },
  { code: "RAL 5005", name: "Signalblau", hex: "#154889", category: "Blau" },
  { code: "RAL 5010", name: "Enzianblau", hex: "#13447C", category: "Blau" },
  { code: "RAL 5015", name: "Himmelblau", hex: "#2874B2", category: "Blau" },
  { code: "RAL 3000", name: "Feuerrot", hex: "#A72920", category: "Rot" },
  { code: "RAL 3020", name: "Verkehrsrot", hex: "#C1121C", category: "Rot" },
  {
    code: "RAL 2004",
    name: "Reinorange",
    hex: "#E25303",
    category: "Orange / Gelb",
  },
  {
    code: "RAL 1021",
    name: "Rapsgelb",
    hex: "#E6B800",
    category: "Orange / Gelb",
  },
  { code: "RAL 1036", name: "Perlgold", hex: "#8A6F3E", category: "Metallic" },
  {
    code: "RAL 8017",
    name: "Schokoladenbraun",
    hex: "#442F29",
    category: "Braun / Kupfer",
  },
  {
    code: "RAL 8029",
    name: "Perlkupfer",
    hex: "#7F4031",
    category: "Metallic",
  },
  { code: "RAL 6005", name: "Moosgrün", hex: "#114232", category: "Grün" },
  { code: "RAL 6018", name: "Gelbgrün", hex: "#57A639", category: "Grün" },
];

export const SERVICES_DE: Record<ServiceId, ServiceLocaleContent> = {
  reflectors: {
    navLabel: "Scheinwerfer-Reflektor Aufbereitung",
    shortSummary:
      "Scheinwerfer Reflektor neu bedampfen (PVD Aluminium ab 150 PLN / ca. 35 €), Streuscheiben polieren + UV-Schutzlack für Xenon, Bi-Xenon, LED & Oldtimer.",
        metaTitle: 'Scheinwerfer Reflektor neu bedampfen | STANIAX',
    metaDesc: 'Scheinwerfer Reflektor neu bedampfen (PVD ab 150 PLN / ca. 35 €) & Scheinwerfer Aufbereitung bei STANIAX. Versandservice für Deutschland, AT & PL.',
    breadcrumbLabel: "Scheinwerfer-Reflektor Aufbereitung",
    heroBadge:
      "Werk Józefów bei Warschau · Schneller EU-Kurierversand (DE / AT / PL)",
    h1: "Scheinwerfer Reflektor neu bedampfen & Scheinwerfer Aufbereitung",
    lead: "Wir stellen die werkseitige Lichtleistung von PKW-, Motorrad- und Oldtimer-Scheinwerfern wieder her. Beim Scheinwerfer Reflektor neu bedampfen (Reflektor neu beschichten) und der Scheinwerfer Aufbereitung im Werk STANIAX entfernen wir die verbrannte Altschicht chemisch, tragen einen bis 220°C hitzebeständigen Grundlack auf und bedampfen den Reflektor im Hochvakuum (PVD) mit 99,99% reinem Aluminium inklusive Silizium-Schutzschicht.",
    ctaPrimaryLabel: "Reflektor-Aufbereitung anfragen →",
    ctaSecondaryLabel: "Preisliste & Leistungsumfang ansehen ↓",
    heroImageKey: "reflectorsHero",
    heroImageAlt:
      "Im Hochvakuum neu bedampfte Scheinwerfer-Reflektoren mit 99,99% Aluminium-Spiegelschicht bei STANIAX",
    metrics: [
      {
        value: 150,
        suffix: " PLN",
        label: "Reflektor bedampfen ab",
        detail:
          "Ca. 35 € netto für die PVD-Vakuumbedampfung eines einzelnen ausgebauten Reflektors",
      },
      {
        value: 98,
        suffix: "%",
        label: "Lichtreflexion der Al-Schicht",
        detail:
          "Gerichteter Reflexionsgrad der im Hochvakuum aufgedampften 99,99% Aluminiumschicht",
      },
      {
        value: 3,
        suffix: " Tage",
        label: "Bearbeitungszeit im Werk",
        detail:
          "Standard-Durchlaufzeit für per Paketdienst eingesandte Scheinwerfer-Reflektoren",
      },
    ],
    scopeSection: {
      h2: "Leistungsumfang der Scheinwerfer Aufbereitung & Preisübersicht",
      intro:
        "Jede Scheinwerfer-Instandsetzung beginnt mit einer Prüfung der Projektor-Reflektorschale oder des Freiformreflektors, der Gehäusedichtigkeit sowie der Polycarbonat-Streuscheibe. Wir bearbeiten sowohl einzeln eingesandte Reflektoren als auch komplette H4/H7-, Xenon- (D1S/D2S/D3S), Bi-Xenon-, Kurvenlicht- (AFS) und Bi-LED-Scheinwerfer.",
      cardTitle: "Was umfasst das Reflektor neu bedampfen bei STANIAX?",
      cardSubtitle:
        "Industrielles PVD-Verfahren nach OEM-Standards für Hella, Valeo, Bosch, AL und Koito",
      highlights: [
        "Chemisches Entlacken der verbrannten, vergilbten oder oxidierten Aluminiumschicht ohne Veränderung der parabolischen Brennweite.",
        "Staubfreie Applikation eines hitzebeständigen Thermoplast-/Duroplast-Grundlacks (Base Coat) für Dauerbetriebstemperaturen bis 220°C.",
        "Hochvakuum-Bedampfung (10⁻⁴ mbar) mit 99,99% Reinstaluminium für einen optischen Hochglanzspiegel.",
        "Versiegelung mit einer organischen Silizium-Schutzschicht (Top Coat) gegen Oxidation, Feuchtigkeit und Anlaufen.",
        "Mehrstufiges Schleifen und Polieren matter Polycarbonat-Streuscheiben inklusive dauerhafter 2K/UV-Klarlackversiegelung.",
        "Fachgerechtes Öffnen und hermetisches Neuverkleben kompletter Scheinwerfer mit frischem Butyl- oder Hartkleber inkl. Dichtigkeitstest.",
        "Restaurierung von Stahl- und Messingreflektoren für Oldtimer, Youngtimer, Traktoren und klassische Motorräder.",
      ],
      table: {
        caption:
          "Richtpreise für Scheinwerfer Reflektor neu bedampfen & Scheinwerfer Aufbereitung (STANIAX)",
        headers: [
          "Leistungsvariante",
          "Technologischer Arbeitsumfang",
          "Bearbeitungszeit",
          "Richtpreis",
        ],
        rows: [
          [
            "Einzelnen Reflektor neu bedampfen (lose angeliefert)",
            "Chemisches Entschichten, 220°C Hochtemperatur-Grundierung, PVD-Aluminiumbedampfung 99,99%, Top-Coat-Schutz",
            "2-3 Werktage",
            "150 - 300 PLN / Stk. (ca. 35 - 70 €)",
          ],
          [
            "Komplette Aufbereitung eines Standard-Scheinwerfers (H7 / Xenon / Bi-Xenon)",
            "Öffnen des Gehäuses, Reflektor neu bedampfen, Linsenreinigung, Streuscheibe polieren + UV-Lack, Neuabdichtung",
            "3-5 Werktage",
            "350 - 700 PLN / Stk. (ca. 80 - 165 €)",
          ],
          [
            "Komplettrestaurierung Scheinwerfer-Paar (2 Stk.) + Elektronik / LED / Oldtimer",
            "Vollständige Überholung beider Lampen, PP/ABS-Halter schweißen, Vorschaltgeräte/LED oder Oldtimer-Entrostung",
            "4-7 Werktage",
            "1.500 - 5.000+ PLN / Paar",
          ],
        ],
        footnote:
          "Den genauen Preis bestätigen wir nach Begutachtung oder anhand von Fotos im Anfrageformular. Für KFZ-Werkstätten und Oldtimer-Restauratoren bieten wir B2B-Mengenrabatte.",
      },
    },
    editorialSections: [
      {
        h2: "Warum verlieren Scheinwerfer an Leuchtkraft und warum reicht bloßes Polieren nicht aus?",
        paragraphs: [
          "Viele Fahrzeughalter lassen matte Kunststoff-Streuscheiben polieren und stellen bei Nachtfahrten oder bei der HU/TÜV-Prüfung fest, dass das Abblendlicht weiterhin extrem schwach bleibt und keine saubere Hell-Dunkel-Grenze erzeugt. Bei über 80% aller Projektionsscheinwerfer (Xenon, Bi-Xenon und H7-Linsenscheinwerfer) liegt die Ursache im verbrannten Reflektor hinter der Glaslinse.",
          "Xenon-Brenner und Halogenlampen erzeugen direkt über dem Lichtbogen Temperaturen von 180 bis 220°C sowie starke UV-Strahlung. Nach 120.000 bis 180.000 km Laufleistung zersetzt sich die werkseitige, nur rund 80 Nanometer dünne Aluminiumschicht thermisch: Sie wird erst milchig-gelb, verliert ihre Reflexion und verbrennt schließlich bis auf den schwarzen BMC/PPS-Kunststoff oder das Trägerblech. Ein verbrannter Reflektor schluckt bis zu 70% des Lichtstroms.",
        ],
        subSections: [
          {
            h3: "Reflektor im Hochvakuum neu bedampfen vs. Chromspray aus der Dose",
            body: "Sogenanntes „Chromspray“ oder Chromfolie sind für optische Scheinwerferreflektoren aus drei physikalischen Gründen ungeeignet:",
            bullets: [
              "Während ein einfaches Scheinwerfer-Aufbereitungsset nur die äußere Streuscheibe poliert und Chromlack lediglich 45-55% Reflexion erreicht, nutzen professionelle Scheinwerfer-Aufbereiter unsere Werkslinie, während im PVD-Vakuum aufgedampftes 99,99% Aluminium >92% Spiegelreflexion bietet.",
              "Sprühdosenlacke gasen bereits ab 80-90°C aus und schlagen sich als milchiger Nebel dauerhaft auf der Innenseite von Linse und Streuscheibe nieder.",
              "Nur die PVD-Vakuummetallisierung erhält die nanometergenaue Oberflächengüte (Ra < 0,02 µm) für eine TÜV-konforme Hell-Dunkel-Grenze.",
            ],
          },
          {
            h3: "Streuscheiben-Aufbereitung mit dauerhaftem UV-Schutzlack",
            body: "Polycarbonat-Streuscheiben (PC) besitzen ab Werk einen harten UV-Schutzlack. Wird beim Polieren nur geschliffen, ohne neuen UV-Lack aufzutragen, vergilbt der ungeschützte Kunststoff innerhalb weniger Monate erneut. Bei STANIAX tragen wir nach dem Nassschliff eine widerstandsfähige UV-Klarlackschicht auf.",
          },
        ],
      },
      {
        h2: "Welche Reflektoren und Scheinwerfertypen beschichten wir neu?",
        paragraphs: [
          "Wir betreuen Privatkunden, KFZ-Meisterbetriebe, Licht-Nachrüster und Oldtimer-Werkstätten aus Deutschland, Österreich und ganz Polen per schnellem Paketversand.",
        ],
        subSections: [
          {
            h3: "Xenon-, Bi-Xenon-, H7- und Bi-LED-Projektorreflektoren (BMC, PPS, PEI, Magnesium, Stahl)",
            body: "Wir bedampfen Projektorschalen von Hella (E55, Evox-R, Intemo), Valeo, Bosch/AL, Koito und ZKW aus Duroplast (BMC), Hochtemperatur-Thermoplast (PPS, PEI Ultem), Magnesium-Druckguss und Stahlblech.",
          },
          {
            h3: "Oldtimer-, Youngtimer- und Motorrad-Reflektoren restaurieren",
            body: "Für klassische Fahrzeuge (Mercedes W123/W124/SL, BMW E24/E30/E34, Porsche 911, US-Classics), für die keine Originalteile mehr lieferbar sind, entrosten wir Stahl- oder Messingreflektoren, füllen Korrosionsnarben mit Epoxid-Grundierung und bedampfen sie neu mit reinem Aluminium.",
          },
        ],
      },
    ],
    showcase: {
      h2: "Interaktiver Vorher-Nachher-Vergleich: Reflektor neu bedampfen",
      subtitle:
        "Bewegen Sie den Schieberegler (mit Maus, Finger oder Pfeiltasten), um den verbrannten Reflektor mit dem im Hochvakuum neu bedampften Spiegel von STANIAX zu vergleichen.",
      ctaLabel: "Angebot für Ihre Scheinwerfer anfordern →",
      beforeLabel: "VORHER - Verbrannte Schicht",
      afterLabel: "NACHHER - PVD Aluminium 99,99%",
      beforeAlt:
        "Verbrannter und matter Scheinwerfer-Reflektor vor der Aufbereitung",
      afterAlt:
        "Scheinwerfer-Reflektor nach dem Neu-Bedampfen mit 99,99% Aluminium im Vakuum bei STANIAX",
      sliderSummary:
        "Nach dem Neu-Bedampfen im Vakuum steigt die Lichtausbeute auf der Straße um durchschnittlich 200-300% gegenüber einem verbrannten Reflektor.",
    },
    processSection: {
      h2: "Der 4-stufige Prozess beim Scheinwerfer Reflektor neu bedampfen",
      subtitle:
        "Industrielle PVD-Oberflächentechnik für Temperaturbeständigkeit bis 220°C und präzise Lichtverteilung.",
      steps: [
        {
          num: "01",
          title: "Demontage & chemisches Entlacken",
          desc: "Wir entfernen verbranntes Aluminium und alte Grundierung schonend im Chemie- und Ultraschallbad ohne mechanisches Schleifen der Parabelform.",
          param: "Ra < 0,02 µm Geometrieerhalt",
        },
        {
          num: "02",
          title: "Hochtemperatur-Grundierung (Base Coat 220°C)",
          desc: "In der Reinraumkabine applizieren wir einen ausgleichenden Thermolack für bis zu 220°C Dauerbelastung und härten ihn im Ofen aus.",
          param: "Hitzebeständig bis 220°C",
        },
        {
          num: "03",
          title: "PVD-Hochvakuumbedampfung mit 99,99% Aluminium",
          desc: "In der Hochvakuumkammer (10⁻⁴ mbar) wird reines Aluminium thermisch verdampft und schlägt sich als makelloser Spiegel auf den rotierenden Reflektoren nieder.",
          param: ">92% gerichtete Lichtreflexion",
        },
        {
          num: "04",
          title: "Top-Coat-Versiegelung & Dichtheitsprüfung",
          desc: "Wir schützen die Aluminiumschicht vor Oxidation, polieren und lackieren bei Komplettlampen die Streuscheibe mit UV-Schutz und testen die Dichtheit.",
          param: "12-24 Monate Haltbarkeitsgarantie",
        },
      ],
    },
    marqueeSection: {
      h2: "Unterstützte Scheinwerfersysteme, Projektoren & Hersteller",
      subtitle:
        "Bequemer Postversand für Einzelfahrzeuge und B2B-Serienbeschichtung für Werkstätten.",
      row1: [
        "Xenon D1S / D2S / D3S Projektorreflektoren",
        "Bi-Xenon Hella E55 / Evox / Intemo",
        "Valeo / Bosch / AL / Koito Linsenscheinwerfer",
        "H4 & H7 Freiform-Reflektoren",
        "Kurvenlicht AFS / Dynamic Light Module",
        "Oldtimer & Youngtimer Stahlreflektoren",
        "Motorrad-, Quad- & Boot-Scheinwerfer",
        "24V LKW-Scheinwerfer (DAF, Volvo, Scania, MAN)",
      ],
      row2: [
        "Streuscheiben polieren + UV-Schutzlack",
        "Instandsetzung verbrannter Lampenfassungen",
        "Neuabdichtung mit Butyl-Dichtmasse",
        "Verchromen von Zierblenden & Rahmen",
        "Ultraschallreinigung der Projektorlinsen",
        "Kunststoffschweißen von PP/ABS-Haltern",
        "Nebelscheinwerfer & Zusatzscheinwerfer bedampfen",
        "Industrie- & Arbeitsscheinwerfer beschichten",
      ],
      b2bCards: [
        {
          badge: "VERSANDSERVICE DEUTSCHLAND & EU",
          h3: "Schneller Rückversand für ausgebaute Reflektoren",
          body: "Senden Sie uns Ihre ausgebauten Reflektorschalen oder kompletten Scheinwerfer per DHL/DPD/UPS nach Józefów bei Warschau. Nach 2-4 Werktagen geht das Paket sicher verpackt zurück.",
          spec: "Werkadresse: ul. Wyszyńskiego 116A, 05-420 Józefów, Polen",
        },
        {
          badge: "FÜR KFZ-WERKSTÄTTEN (B2B)",
          h3: "Serien-Bedampfung für Scheinwerfer-Instandsetzer",
          body: "Für Betriebe im Bereich Scheinwerfer-Umbau und Reparatur bieten wir feste Kammerkapazitäten, reproduzierbare Spiegelqualität und B2B-Staffelpreise ab 5 Stück.",
          spec: "Netto-Innergemeinschaftliche Rechnung (0% USt. mit USt-IdNr.)",
        },
        {
          badge: "OLDTIMER-RESTAURIERUNG",
          h3: "Originalgetreue Aufarbeitung historischer Metallreflektoren",
          body: "Wir retten originale Bosch-, Hella-, Cibie- und Carello-Reflektoren durch Entrostung, Porenfüllung und PVD-Aluminiumbedampfung unter Erhalt der historischen Originalgläser.",
          spec: "Mehrstufiger Epoxid-Korrosionsschutz vor der PVD-Schicht",
        },
      ],
    },
    caseStudiesSection: {
      h2: "Referenzen: Scheinwerfer Reflektoren neu bedampft (Lupenansicht)",
      subtitle:
        "Fahren Sie mit der Maus über das Bild, um die Spiegelglätte unter der Lupe zu prüfen.",
      items: [
        {
          badge: "BI-XENON PROJEKTOREN",
          h3: "Serie von Hella- & Valeo-Projektorreflektoren nach 99,99% Al PVD",
          desc: "Vollständige Regenerierung verbrannter Magnesium- und BMC-Schalen mit >92% Spiegelreflexion im thermisch hochbelasteten Scheitelbereich.",
          param: "Lichtstromsteigerung am Messgerät: +260%",
          imageKey: "reflectors1",
          alt: "Im Vakuum neu bedampfte Bi-Xenon Scheinwerfer-Reflektoren bei STANIAX",
        },
        {
          badge: "MEHRKAMMER-SCHEINWERFER",
          h3: "Vakuummetallisierung von Hauptreflektoren & Zierrahmen",
          desc: "Hochglänzende Aluminiumbeschichtung auf komplexen PC/ABS- und Duroplast-Reflektoren ohne Orangenhaut.",
          param: "Al-Schichtdicke: 80-100 nm + Schutz-Top-Coat",
          imageKey: "reflectors2",
          alt: "Mehrkammer-Scheinwerferreflektoren mit spiegelnder Aluminiumschicht aus der Vakuumkammer",
        },
        {
          badge: "OLDTIMER & PREMIUM AUTOMOTIVE",
          h3: "Restaurierung von Stahlreflektoren und Chrom-Zierteilen",
          desc: "Beseitigung von Rostnarben, Aufbau mit Epoxid-Füller und anschließende Vakuumbedampfung für neuwertige Leuchtkraft.",
          param: "Salzsprühnebel- & Temperaturwechseltest bestanden",
          imageKey: "automotiveAfter",
          alt: "Restaurierter Oldtimer-Reflektor und KFZ-Zierteil nach der Vakuummetallisierung",
        },
      ],
    },
    faqSection: {
      h2: "Häufige Fragen zum Scheinwerfer Reflektor neu bedampfen (FAQ)",
      subtitle:
        "Antworten unserer Oberflächentechniker für Fahrzeughalter und Werkstätten.",
      items: [
        {
          q: "Was kostet es, einen Scheinwerfer Reflektor neu bedampfen zu lassen?",
          a: "Das reine Neu-Bedampfen eines ausgebaut angelieferten Reflektors kostet je nach Größe und Material zwischen 150 und 300 PLN (ca. 35-70 €) pro Stück. Eine Komplettaufbereitung des gesamten Scheinwerfers (Gehäuse öffnen, Reflektor bedampfen, Linse reinigen, Streuscheibe polieren + UV-Lack, neu abdichten) liegt meist bei 350-700 PLN (ca. 80-165 €) pro Scheinwerfer.",
        },
        {
          q: "Wie lange dauert die Aufbereitung inklusive Versand aus Deutschland oder Österreich?",
          a: "Die Bearbeitung loser Reflektoren in unserem Werk dauert nur 2-3 Werktage ab Paketeingang (bei kompletten Scheinwerfern 3-5 Werktage). Inklusive versichertem Hin- und Rückversand per DHL/DPD/UPS aus Deutschland oder Österreich erhalten Sie Ihre Teile in der Regel nach rund 6-9 Werktagen zurück.",
        },
        {
          q: "Lohnt sich die Aufbereitung von Original-Scheinwerfern gegenüber billigen Nachbauten?",
          a: "Ja, definitiv. Originale OEM-Scheinwerfer (Hella, Valeo, Bosch, AL) besitzen eine präzise berechnete Parabelgeometrie und hochwertige Gehäuse. Billige Zubehör-Scheinwerfer (Depo, TYC) liefern oft ein fleckiges Lichtbild, blenden den Gegenverkehr und brennen bereits nach kurzer Zeit wieder aus.",
        },
        {
          q: "Wie sollte ich ausgebaute Reflektoren für den Versand verpacken?",
          a: "Bitte berühren Sie die empfindliche Innenseite des Reflektors nicht mit den Fingern und wischen Sie sie nicht mit Reinigungsmitteln ab. Wickeln Sie jeden Reflektor in weiches, fusselfreies Papier und Luftpolsterfolie, legen Sie ihn mit mindestens 5 cm Polsterabstand in einen stabilen Karton und legen Sie Ihre Kontaktdaten samt Rücksendeadresse bei.",
        },
        {
          q: "Besteht der Scheinwerfer nach dem Neu-Bedampfen die TÜV- / HU-Hauptuntersuchung?",
          a: "Ja. Durch die PVD-Vakuumbedampfung werden >92% des ursprünglichen Reflexionsgrades und die exakte Hell-Dunkel-Grenze wiederhergestellt, sodass das Lichtbild alle Anforderungen bei der Hauptuntersuchung (TÜV/DEKRA) erfüllt.",
        },
        {
          q: "Wie lange hält die neue PVD-Aluminiumschicht im Scheinwerfer?",
          a: "Dank unseres bis 220°C temperaturbeständigen Grundlacks und der Silizium-Schutzschicht entspricht die Lebensdauer einem neuen Originalteil - in der Regel 5 bis 8 Jahre bzw. über 150.000 km bei Verwendung zugelassener Marken-Leuchtmittel (35W Xenon / 55W Halogen).",
        },
      ],
    },
    quoteSection: {
      h2: "Kostenloses Angebot für Scheinwerfer- & Reflektor-Aufbereitung anfordern",
      intro:
        "Nennen Sie uns Ihr Fahrzeugmodell, den Scheinwerfertyp (H7, Xenon, Bi-Xenon, LED, Oldtimer) und ob Sie lose Reflektoren oder komplette Lampen einsenden möchten. Wir antworten innerhalb von 24 Stunden.",
      projectTypes: [
        "Nur lose Reflektoren neu bedampfen (Postversand / Abgabe)",
        "Komplette Scheinwerfer-Aufbereitung (Reflektor + Streuscheibe + Abdichten)",
        "Streuscheiben polieren & mit UV-Schutzlack versiegeln",
        "Oldtimer- / Motorrad-Scheinwerfer restaurieren",
        "B2B-Werkstattkooperation (Serien-Reflektorbedampfung)",
      ],
      submitLabel: "Anfrage zur Reflektor-Aufbereitung senden",
    },
    seeAlsoSection: {
      h2: "Verwandte Leistungen & Fachartikel von STANIAX",
      links: [
        {
          path: "/de/vakuummetallisierung",
          anchorText:
            "PVD Vakuummetallisierung - Technologie & Kammerparameter",
          badge: "PVD-KERNTECHNOLOGIE",
          desc: "Erfahren Sie mehr über das physikalische Aufdampfen von Reinstaluminium im Hochvakuum.",
        },
        {
          path: "/de/kunststoff-verchromen",
          anchorText:
            "Kunststoff verchromen & Plastik-Metallisierung (ABS, PC, PP)",
          badge: "VERWANDTE LEISTUNG",
          desc: "Spiegelchrom, Gold und Satin auf Scheinwerferblenden, Kühlergrills und Emblemen.",
        },
        {
          path: "/de/news/scheinwerfer-reflektoren-regeneration-und-polieren",
          anchorText:
            "Ratgeber: Anzeichen verbrannter Reflektoren & Pflege nach der Aufbereitung",
          badge: "FACHARTIKEL",
          desc: "So erkennen Sie ausgebrannte Linsen und schützen Polycarbonat-Streuscheiben langfristig.",
        },
      ],
    },
    schemaServiceType:
      "Scheinwerfer Reflektor neu bedampfen und Scheinwerfer Aufbereitung",
    schemaPriceRange: "150 PLN - 5000 PLN",
  },

  "vacuum-metallization": {
    navLabel: "Vakuummetallisierung (PVD)",
    shortSummary:
      "Industrielle PVD Vakuummetallisierung & Metallisierung mit 99,99% Aluminium - Spiegelchrom, Gold, Kupfer sowie optische und EMI/RFI-Funktionsschichten.",
    metaTitle: "Vakuummetallisierung & PVD-Beschichtung Industrie | STANIAX",
    metaDesc:
      "Industrielle Vakuummetallisierung (PVD-Bedampfung & Metallisierung Kunststoff/Metall/Glas) bei STANIAX. 99,99% Al Spiegelchrom, Gold, Inox & EMI-Schutz.",
    breadcrumbLabel: "Vakuummetallisierung (PVD)",
    heroBadge:
      "PVD-Oberflächentechnik seit 1993 (Dariusz Staniak · STANIAX Sp. z o.o.)",
    h1: "Vakuummetallisierung & industrielle PVD-Beschichtung im Hochvakuum",
    lead: "Die Vakuummetallisierung (Physical Vapor Deposition - PVD-Vakuumbedampfung) ist ein hochpräzises Dünnschichtverfahren, bei dem im Hochvakuum eine nanometerdünne Metallschicht abgeschieden wird. Im Produktionswerk STANIAX in Józefów bei Warschau realisieren wir die Lohn-Metallisierung von Kunststoffen, Metallen, Glas und Keramik mit spiegelndem 99,99% Aluminium, Chrom-, Gold-, Kupfer- und technischen Reflexions- oder EMV-Schichten.",
    ctaPrimaryLabel: "Vakuummetallisierung anfragen →",
    ctaSecondaryLabel: "4-Schicht-Aufbau & Parameter prüfen ↓",
    heroImageKey: "vacuumHero",
    heroImageAlt:
      "PVD-Hochvakuumkammer und metallisierte Industriekomponenten im Werk STANIAX",
    metrics: [
      {
        value: 99.9,
        decimalPlaces: 1,
        suffix: "%",
        label: "Reinheit des Aluminiums",
        detail:
          "Thermisches Verdampfen von Reinstaluminium unter 10⁻⁴ mbar Hochvakuum",
      },
      {
        value: 80,
        suffix: " nm",
        label: "Dicke der Metallschicht",
        detail:
          "Nanometerdünne PVD-Schicht ohne Beeinträchtigung von Gewinden, Clips und Passungen",
      },
      {
        value: 1993,
        label: "Erfahrung in der PVD-Technik",
        detail:
          "Über 30 Jahre kontinuierliche Kompetenz unter Leitung von Dariusz Staniak",
      },
    ],
    scopeSection: {
      h2: "Leistungsspektrum der Vakuummetallisierung & Kammer-Spezifikationen",
      intro:
        "Im Gegensatz zur galvanischen Verchromung ist die Vakuummetallisierung ein trockenes, RoHS- und REACH-konformes Verfahren völlig frei von giftigem sechswertigem Chrom (Cr6+). Sie ermöglicht die Beschichtung sowohl leitfähiger Metalle als auch nichtleitender Werkstoffe (Polymere, Glas, Keramik, Verbundwerkstoffe) in höchster Serienkonstanz.",
      cardTitle: "Technologische Kapazitäten des Metallisierungswerks STANIAX",
      cardSubtitle:
        "Vollständige Prozesskette: Vorbehandlung, Base-Coat-Glättung, PVD-Hochvakuumbedampfung und Top-Coat-Farbgebung",
      highlights: [
        "Vakuumbedampfung mit 99,99% Reinstaluminium in Hochvakuumkammern mit planetarischer Chargenrotation für gleichmäßige 3D-Beschichtung.",
        "Komplettes Dreischichtsystem: Ausgleichender Grundlack (Base Coat) + PVD-Metallschicht (50-120 nm) + Schutzlack (Top Coat UV oder 2K-PUR).",
        "Einfärbung des Decklacks in jeden gewünschten Metallton: Spiegelchrom, 14K/18K/24K Gold, Roségold, Kupfer, Messing, Titan, Edelstahl-Inox und Schwarzchrom.",
        "Eigener Vorrichtungsbau (Satelliten, Warenträger und Maskierungen) für komplexe Bauteilgeometrien unserer B2B-Kunden.",
        "Funktionale Metallisierung: Technische Spiegel (>92% Reflexion), IR-Wärmeschutzschichten und leitfähige EMV/EMI-Abschirmung für Elektronikgehäuse.",
        "Qualitätssicherung jeder Charge: Gitterschnittprüfung nach ISO 2409, Glanzgradmessung (GU) sowie Abrieb- und Chemikalienbeständigkeitstests.",
      ],
      table: {
        caption:
          "Technische Parameter der PVD-Vakuummetallisierung bei STANIAX",
        headers: [
          "Prozessparameter",
          "STANIAX Industriestandard",
          "Bedeutung für das Bauteil",
          "Prüfmethode",
        ],
        rows: [
          [
            "Arbeitsdruck in der Vakuumkammer",
            "10⁻⁴ - 5×10⁻⁵ mbar (Hochvakuum)",
            "Keine Gaseinschlüsse, maximale Schichtdichte und optische Spiegelreinheit",
            "Digitale Hochvakuum-Messsonden in jedem Zyklus",
          ],
          [
            "Schichtdicke des PVD-Metalls (Al)",
            "50 - 120 Nanometer (0,05 - 0,12 µm)",
            "Keine Maßänderung an Präzisionsgewinden, Rastnasen oder engen Toleranzen",
            "Optische Transmissions- & Oberflächenwiderstandsmessung",
          ],
          [
            "Gesamtschichtdicke Lack (Base + Top)",
            "15 - 35 µm (je nach Substrat)",
            "Einebnung von Spritzguss-Mikrorauheiten (Ra < 0,02 µm) sowie UV- und Abriebschutz",
            "Ultraschall- / Wirbelstrom-Schichtdickenmessung",
          ],
          [
            "Haftfestigkeit des Gesamtsystems",
            "Gitterschnitt-Kennwert GT 0 / 5B",
            "Kein Abplatzen bei Temperaturwechsel, Biegung oder mechanischer Beanspruchung",
            "Gitterschnitttest nach DIN EN ISO 2409",
          ],
        ],
        footnote:
          "Wir fertigen Einzelmuster, Vorserien sowie Großserien-Lohnaufträge für Industriekunden aus Deutschland, Österreich, der Schweiz und Polen.",
      },
    },
    editorialSections: [
      {
        h2: "Funktionsprinzip der Vakuummetallisierung & Aufbau des 4-Schicht-Systems",
        paragraphs: [
          "Bei der thermischen PVD-Vakuummetallisierung wird hochreines Metall unter Hochvakuum verdampft. Nach dem Evakuieren der Kammer auf ca. 10⁻⁴ mbar wird 99,99%iges Aluminium auf Wolfram-Verdampfern schlagartig erhitzt. Da keine Luftmoleküle den Weg behindern, bewegen sich die Aluminiumatome geradlinig durch die Kammer und kondensieren gleichmäßig auf den kühleren Bauteilen, die auf einem Planetengestell rotieren.",
          "Da die aufgedampfte Metallschicht weniger als 0,1 Mikrometer dünn ist, bildet sie die Mikrotopografie des Untergrunds exakt ab. Um auf einem Spritzgussteil oder Druckgussteil einen tiefen, verzerrungsfreien Spiegelglanz zu erzielen, wird die Vakuumbedampfung mit präziser Lackiertechnik kombiniert.",
        ],
        subSections: [
          {
            h3: "Warum Base Coat und Top Coat für die Haltbarkeit entscheidend sind",
            body: "Das STANIAX-Beschichtungssystem besteht aus vier perfekt aufeinander abgestimmten Schichten:",
            bullets: [
              "Schicht 1 - Chemisch gereinigtes & entladenes Substrat: Entfettet und mit ionisierter Druckluft abgeblasen, um elektrostatische Staubanziehung zu verhindern.",
              "Schicht 2 - Glättender Base Coat (Grundlack): Füllt Fließlinien und Mikroriefen der Spritzgussform und erzeugt eine spiegelglatte Fläche (Ra < 0,02 µm).",
              "Schicht 3 - 99,99% Aluminium-PVD-Schicht: Sorgt für 100% metallischen Spiegelglanz, >92% Lichtreflexion oder elektrische Schirmwirkung.",
              "Schicht 4 - Schützender Top Coat (Decklack): Versiegelt das Aluminium gegen Abrieb, Handschweiß, Kosmetika, Alkohol und UV-Strahlung und ermöglicht die Farbgebung.",
            ],
          },
          {
            h3: "Vakuummetallisierung vs. Galvanik - Wirtschaftlichkeit und Materialfreiheit",
            body: "Die klassische galvanische Verchromung ist auf Metalle und spezielles Galvanik-ABS beschränkt und nutzt umweltschädliches Chromtrioxid. Die PVD-Vakuummetallisierung arbeitet komplett Cr6+-frei, senkt die Stückkosten in der Serienfertigung um 30-50% und beschichtet nahezu jeden technischen Kunststoff (PC, PMMA, PA, PP, PS, BMC/SMC), Glas und Metall.",
          },
        ],
      },
      {
        h2: "Industrielle Anwendungsbereiche der STANIAX Vakuummetallisierung",
        paragraphs: [
          "Dank der Verbindung aus über 30-jähriger technologischer Erfahrung von Dariusz Staniak und modernen Großkammeranlagen beliefern wir vier Kernbranchen in ganz Europa.",
        ],
        subSections: [
          {
            h3: "Lichttechnik, Optik & Automobilindustrie",
            body: "Fertigung und Aufbereitung von Scheinwerferreflektoren, Industriestrahlern, OP-Leuchten sowie Verchromung von Emblemen, Kühlergrills und Interieurleisten.",
          },
          {
            h3: "Kosmetikverpackungen (Beauty), Parfümerie, Hausgeräte & Elektronik",
            body: "Veredelung von Parfümkappen, Cremetiegeln, Lippenstifthülsen, Drehknöpfen für Hausgeräte/Audio, Pokalen sowie Möbelbeschlägen in Gold, Roségold, Chrom und Edelstahloptik.",
          },
        ],
      },
    ],
    showcase: {
      h2: "Interaktiver 4-Schicht-Querschnitt der PVD-Vakuummetallisierung",
      subtitle:
        "Klicken Sie auf die einzelnen Schichten, um Schichtdicken, Aufgaben und Prüfnormen im Detail zu sehen.",
      ctaLabel: "Angebot für diesen PVD-Schichtaufbau anfordern →",
      options: [
        {
          id: "substrate",
          label: "01. Substrat (Träger)",
          badge: "GRUNDWERKSTOFF",
          title:
            "Kunststoff (ABS, PC, PMMA, PP, PA), Metall, Glas oder Keramik",
          description:
            "Bauteil nach chemischer Entfettung, Flamm-/Plasmaaktivierung (bei unpolaren Polyolefinen wie PP/PE) und antistatischer Ionisationsreinigung.",
          specs: [
            {
              label: "Geeignete Werkstoffe",
              value: "ABS, PC, PC/ABS, PMMA, PS, PP, PA, ZnAl, Stahl, Glas",
            },
            {
              label: "Maximale Bauteilgröße",
              value: "Ø-1200-mm-Kammer (Bauteil bis Ø 1000 × 1200 mm)",
            },
            {
              label: "Oberflächenvorbereitung",
              value: "100% elektrostatische Neutralisierung",
            },
          ],
          previewStyle: "linear-gradient(135deg, #334155 0%, #475569 100%)",
        },
        {
          id: "basecoat",
          label: "02. Base Coat (Grundlack)",
          badge: "OPTISCHE GLÄTTUNG",
          title: "Haftvermittelnder & einebnender Grundlack (10-20 µm)",
          description:
            "Erzeugt einen spiegelglatten Film, der Werkzeugstrukturen ausgleicht. Ohne diesen Grundlack würde die dünne Metallschicht matt wirken.",
          specs: [
            { label: "Schichtdicke", value: "10 - 20 µm" },
            {
              label: "Rauheit nach Härtung",
              value: "Ra < 0,02 µm (optische Spiegelqualität)",
            },
            {
              label: "Aushärtung",
              value: "Thermisch im Umluftofen (60-180°C) oder UV-Tunnel",
            },
          ],
          previewStyle: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
        },
        {
          id: "aluminum-pvd",
          label: "03. Aluminium PVD 99,99%",
          badge: "HOCHVAKUUMKAMMER",
          title:
            "Im Hochvakuum aufgedampfte Reinstaluminiumschicht (50-120 nm)",
          description:
            "Bei 10⁻⁴ mbar abgeschiedene Metallschicht für perfekten Chromspiegelglanz, >92% Lichtreflexion und EMV-Abschirmung.",
          specs: [
            {
              label: "Metallschichtdicke",
              value: "50 - 120 nm (0,05 - 0,12 µm)",
            },
            {
              label: "Reinheitsgrad",
              value: "99,99% Reinstaluminium (Vakuumqualität)",
            },
            {
              label: "Reflexionsgrad VIS",
              value: ">92% im sichtbaren Lichtspektrum",
            },
          ],
          previewStyle:
            "linear-gradient(135deg, #e2e8f0 0%, #ffffff 45%, #94a3b8 100%)",
        },
        {
          id: "topcoat",
          label: "04. Top Coat & Farbgebung",
          badge: "SCHUTZ & FARBTON",
          title:
            "Schützender Decklack (Klar-Chrom oder eingefärbt in Gold/Kupfer/Titan)",
          description:
            "Schützt das empfindliche Aluminium vor Abrieb, Korrosion, Parfüwalkohol und UV-Licht. Transparente Metallkomplexfarbstoffe erzeugen Gold-, Kupfer- oder Schwarzchromtöne.",
          specs: [
            {
              label: "Schichtdicke Top Coat",
              value: "10 - 20 µm (2K-Polyurethan / Acryl / UV)",
            },
            {
              label: "Verfügbare Metalltöne",
              value: "Chrom, Gold 14K/24K, Roségold, Kupfer, Titan, Inox",
            },
            {
              label: "Glanzgrad",
              value: "Hochglanz (>90 GU), Gebürstet Satin oder Matt",
            },
          ],
          previewStyle:
            "linear-gradient(135deg, #f59e0b 0%, #fde68a 50%, #b45309 100%)",
        },
      ],
    },
    processSection: {
      h2: "Der industrielle Vakuummetallisierungs-Prozess in 4 Schritten",
      subtitle: "Reproduzierbare Prozessführung für Vorserien und Großserien.",
      steps: [
        {
          num: "01",
          title: "Bestückung auf Warenträgern & Ionisationswäsche",
          desc: "Montage auf maßgefertigten Planetensatelliten ohne Abschattungseffekte, chemische Entfettung und Abblasen mit ionisierter Reinluft.",
          param: "Staubfreie Statik-Neutralisierung",
        },
        {
          num: "02",
          title: "Applikation & Vernetzung des Base Coats",
          desc: "Auftrag des werkstoffspezifischen Grundlacks und Aushärtung im Umluftofen oder UV-Tunnel zur Erzeugung der Spiegelbasis.",
          param: "Zwischenschichthaftung GT 0 / 5B",
        },
        {
          num: "03",
          title: "PVD-Aluminiumbedampfung im Hochvakuum",
          desc: "In der Vakuumkammer wird bei 10⁻⁴ mbar Reinstaluminium thermisch verdampft und rundum (360°) auf den rotierenden Bauteilen abgeschieden.",
          param: "Homogene 3D-Nanometerschicht",
        },
        {
          num: "04",
          title: "Top-Coat-Lackierung, Farbgebung & Endkontrolle",
          desc: "Auftrag des klaren oder eingefärbten Schutzlacks (Gold, Kupfer, Inox), Aushärtung und Gitterschnitt- sowie Glanzgradprüfung vor dem Verpacken.",
          param: "Chargen-Prüfprotokoll nach ISO",
        },
      ],
    },
    marqueeSection: {
      h2: "Branchen & Bauteile für die PVD-Vakuummetallisierung",
      subtitle:
        "Von hochreflektierenden Optikbauteilen bis hin zu exklusiven Kosmetikverpackungen.",
      row1: [
        "Kosmetikverpackungen & Parfümverschlüsse",
        "LED-Reflektoren & Architekturbeleuchtung",
        "Kühlergrills, Embleme & KFZ-Zierleisten",
        "Drehregler & Blenden für Hausgeräte / Audio",
        "Möbelgriffe, Rosetten & Zierprofile",
        "Sportpokale, Trophäen & Medaillen",
        "Devotionalien, Grablichter & Sakralkunst",
        "EMV-abgeschirmte Elektronikgehäuse",
      ],
      row2: [
        "Spiegelchrom PVD-Oberfläche",
        "14K / 18K / 24K Gold & Roségold",
        "Edelstahl-Optik (Inox) & Satin-Nickel",
        "Schwarzchrom (Dark Chrome / Gunmetal)",
        "Antikkupfer & Dekor-Messing",
        "Selektive Metallisierung mit Maskierung",
        "Halbtransparente Spiegelschichten (Spionagespiegel)",
        "Eigener Vorrichtungs- & Satellitenbau",
      ],
      b2bCards: [
        {
          badge: "SPRITZGIESSEREIEN & OEM",
          h3: "Verlängerte Werkbank für Kunststoff-Spritzgießwerke",
          body: "Wir übernehmen roh gespritzte Kunststoffteile direkt aus Ihrer Fertigung und liefern fertig metallisierte, geprüfte und konfektionierte Bauteile zurück.",
          spec: "Kapazität von Kleinserien bis zu mehreren Tausend Teilen/Tag",
        },
        {
          badge: "PROTOTYPEN & 3D-DRUCK",
          h3: "Bemusterung von SLA/SLS-Prototypen & Farbmustern",
          body: "Schnelle technologische Bemusterung in Chrom, Gold, Satin oder Gunmetal für Produktdesigner und Entwicklungsabteilungen vor dem Serienwerkzeugbau.",
          spec: "Express-Bemusterung in 48-72 Stunden",
        },
        {
          badge: "OPTIK & LICHTTECHNIK",
          h3: "Technische Spiegel mit >92% Reflexionsgrad",
          body: "Beschichtung von Hallenstrahlern, Lichtrastern und medizinischen Leuchten mit temperaturstabilen Grundlacken bis 220°C.",
          spec: "Kein Ausgasen unter Dauerwärmebelastung",
        },
      ],
    },
    caseStudiesSection: {
      h2: "Referenzprojekte Vakuummetallisierung (Mit Lupe vergrößern)",
      subtitle:
        "Bewegen Sie den Mauszeiger über die Bilder, um die Schichtqualität im Detail zu prüfen.",
      items: [
        {
          badge: "PVD-KAMMERTECHNOLOGIE",
          h3: "Seriencharge technischer Bauteile in der Hochvakuumkammer",
          desc: "Gleichmäßige 3D-Bedampfung komplexer Geometrien auf eigens im Haus STANIAX konstruierten Planetenträgern.",
          param: "Erstausbeute (First-Pass-Yield): >99,2%",
          imageKey: "vacuumChamber",
          alt: "Innenansicht der PVD-Vakuummetallisierungskammer im Werk STANIAX Józefów",
        },
        {
          badge: "BEAUTY & LUXUSVERPACKUNGEN",
          h3: "Großserien-Metallisierung von Kosmetikkappen in Gold & Chrom",
          desc: "Vakuumbedampfung von PP- und ABS-Verschlüssen mit parfüm- und alkoholbeständigem UV-Top-Coat.",
          param: "100% Beständigkeit im Ethanol- & Abriebtest",
          imageKey: "packagingAfter",
          alt: "Im Vakuum metallisierte Kosmetikkappen und Verpackungen in Gold und Chrom",
        },
        {
          badge: "MASCHINENBAU & LICHTTECHNIK",
          h3: "Reflektierende & dekorative PVD-Schichten auf Funktionsteilen",
          desc: "Kombination aus haftstarkem Primer, Reinstaluminiumspiegel und 2K-Polyurethan-Schutzlack.",
          param: "Gitterschnitt-Haftung: 5B / GT 0 (ISO 2409)",
          imageKey: "vacuumPart",
          alt: "Industrie- und Beleuchtungsbauteile nach der PVD-Vakuummetallisierung bei STANIAX",
        },
      ],
    },
    faqSection: {
      h2: "Häufige Fragen zur PVD-Vakuummetallisierung (FAQ)",
      subtitle:
        "Antworten für Konstrukteure, Einkäufer und Verpackungstechnologen.",
      items: [
        {
          q: "Worin unterscheidet sich die PVD-Vakuummetallisierung vom galvanischen Verchromen?",
          a: "Bei der PVD-Vakuummetallisierung wird 99,99%iges Aluminium im Hochvakuum auf einen glättenden Grundlack aufgedampft und mit einem Schutzlack versiegelt. Im Gegensatz zur Galvanik kommt das Verfahren komplett ohne giftiges Chrom(VI) und Säurebäder aus, beschichtet fast alle Kunststoffe (nicht nur Galvanik-ABS), Glas und Metalle und ermöglicht Farbtöne wie Gold, Roségold, Kupfer oder Schwarzchrom bei 30-50% niedrigeren Stückkosten.",
        },
        {
          q: "Welche Werkstoffe können im Vakuum metallisiert werden?",
          a: "Wir beschichten Thermoplaste (ABS, PC, PC/ABS, PMMA, PS, SAN, PA sowie nach Flammaktivierung auch PP und PE), Duroplaste und Komposite (BMC, SMC, Epoxidharze, SLA-3D-Druckharze), Metalle (Stahl, Aluminium, ZnAl-Druckguss, Messing) sowie Verpackungsglas und Keramik.",
        },
        {
          q: "Verändert die Vakuummetallisierung die Bauteilmaße oder setzt sie Gewinde zu?",
          a: "Die aufgedampfte Aluminiumschicht selbst ist nur 50-120 Nanometer (0,05-0,12 µm) dünn und maßlich völlig vernachlässigbar. Das gesamte Lacksystem (Base Coat + Top Coat) trägt 15-35 µm auf. Eng tolerierte Passflächen oder Gewinde decken wir vorab präzise ab.",
        },
        {
          q: "Wie hoch ist die Mindestbestellmenge (MOQ) und wie lang ist die Lieferzeit?",
          a: "Wir haben keine starre Mindestmenge - wir kalkulieren sowohl Einzelprototypen und Musterreihen als auch Großserien in Hunderttausender-Stückzahlen. Die reguläre Durchlaufzeit beträgt 5-10 Werktage (Muster 2-4 Werktage).",
        },
        {
          q: "Ist die metallisierte Oberfläche abriebfest, UV-stabil und witterungsbeständig?",
          a: "Ja. Die mechanische und chemische Beständigkeit wird über den Top Coat gesteuert. Je nach Anforderung setzen wir hochharte UV-Lacke (Bleistifthärte 2H-4H für Kosmetik) oder elastische, UV-stabilisierte 2K-Polyurethan-Klarlacke in Automobilqualität ein.",
        },
        {
          q: "Worauf muss die Spritzgießerei bei Teilen für die Vakuummetallisierung achten?",
          a: "Die Teile müssen zwingend ohne silikonhaltige Formtrennmittel gespritzt werden. Silikonöl wandert in die Kunststoffoberfläche und führt beim Lackieren zu Benetzungsstörungen (Kratern). Zudem sollten die Teile staubfrei in PE-Beuteln oder Gefachen verpackt werden.",
        },
      ],
    },
    quoteSection: {
      h2: "Angebot für PVD-Vakuummetallisierung & Bemusterung anfordern",
      intro:
        "Teilen Sie uns das Substratmaterial, die Bauteilabmessungen, den gewünschten Effekt (Spiegelchrom, Gold, Satin, technischer Reflektor) und die geplante Stückzahl mit.",
      projectTypes: [
        "Serien-Vakuummetallisierung PVD (B2B-Fertigung)",
        "Technologische Bemusterung / Farbmustererstellung",
        "Technische Metallisierung (Lichtreflektoren / EMV-Schirmung)",
        "Kosmetikverpackungen metallisieren (Chrom / Gold / Roségold)",
        "Technische Beratung zu Werkstoffauswahl & Vorrichtungsbau",
      ],
      submitLabel: "Anfrage zur Vakuummetallisierung senden",
    },
    seeAlsoSection: {
      h2: "Weitere spezialisierte Beschichtungsleistungen von STANIAX",
      links: [
        {
          path: "/de/kunststoff-verchromen",
          anchorText:
            "Kunststoff verchromen & Plastik-Metallisierung (ABS, PC, PP)",
          badge: "KUNSTSTOFF-SPEZIALISIERUNG",
          desc: "Kompatibilitätstabelle und Oberflächeneffekte für Spritzgussteile aus Kunststoff.",
        },
        {
          path: "/de/kunststofflackierung",
          anchorText:
            "Industrielle Kunststofflackierung - Piano Black, Soft-Touch & RAL",
          badge: "ERGÄNZENDE LEISTUNG",
          desc: "Nasslackierung von Kunststoffgehäusen und Dekorteilen ohne Metallschicht.",
        },
        {
          path: "/de/news/wie-beeinflusst-metallisierung-die-materialleistung",
          anchorText:
            "Fachartikel: Wie Vakuummetallisierung die Materialleistung steigert",
          badge: "INGENIEURWISSEN",
          desc: "Erfahren Sie, wie PVD-Schichten schwere Metallgussteile durch leichte Polymere ersetzen.",
        },
      ],
    },
    schemaServiceType:
      "Industrielle PVD-Vakuummetallisierung und Dünnschichtbeschichtung",
  },

  "plastic-metallization": {
    navLabel: "Kunststoff verchromen",
    shortSummary:
      "Kunststoff verchromen & Plastik metallisieren im Hochvakuum (ABS, PC, PP, PMMA, PA) - Spiegelchrom, 24K Gold, gebürstetes Inox und Schwarzchrom.",
    metaTitle: "Kunststoff verchromen & Plastik Metallisierung | STANIAX",
    metaDesc:
      "Kunststoff verchromen (Plastik verchromen & Kunststoffmetallisierung) bei STANIAX. Spiegelchrom, Gold, Roségold & Satin auf ABS, PC, PP, PMMA & 3D-Druck.",
    breadcrumbLabel: "Kunststoff verchromen & Metallisierung",
    heroBadge:
      "Umweltfreundliche Alternative zur ABS-Galvanik · 0% Cr6+ · Alle Polymere",
    h1: "Kunststoff verchromen - Vakuummetallisierung von Spritzgussteilen & Plastik",
    lead: "Das Kunststoff verchromen (auch als Plastik verchromen oder Kunststoffmetallisierung bezeichnet) verleiht leichten Spritzgussteilen und 3D-Druck-Bauteilen die exakte Optik von massivem, poliertem Metall. Im Werk STANIAX bei Warschau beschichten wir Bauteile aus ABS, PC, PC/ABS, PMMA, PS, PA sowie Polyolefinen (PP/PE) mit Spiegelchrom, 24K Gold, Roségold, Kupfer und satiniertem Edelstahl (Inox) - ganz ohne die giftigen Säurebäder der klassischen Galvanik.",
    ctaPrimaryLabel: "Kunststoff-Verchromung anfragen →",
    ctaSecondaryLabel: "Kunststoff-Kompatibilitätstabelle prüfen ↓",
    heroImageKey: "plasticMetaHero",
    heroImageAlt:
      "Verchromte und vergoldete Kunststoffbauteile nach der Vakuummetallisierung bei STANIAX",
    metrics: [
      {
        value: 65,
        suffix: "%",
        label: "Gewichtsersparnis vs. ZnAl-Guss",
        detail:
          "Ersatz schwerer Zinkdruckguss- oder Messingteile durch leichte PVD-beschichtete Kunststoffe",
      },
      {
        value: 12,
        suffix: "+",
        label: "Metallische Farbvarianten",
        detail:
          "Spiegelchrom, 14K-24K Gold, Roségold, Kupfer, Messing, Titan, Gunmetal & Satin-Nickel",
      },
      {
        value: 100,
        suffix: "%",
        label: "Frei von Chrom(VI) (RoHS/REACH)",
        detail:
          "Vollständig umweltkonformes Verfahren für Kosmetik, Elektronik und Automobilbau",
      },
    ],
    scopeSection: {
      h2: "Welche Kunststoffe lassen sich verchromen und wie bereiten wir sie vor?",
      intro:
        "Beim klassischen galvanischen Verchromen kann fast ausschließlich teures Galvanik-ABS in Chromschwefelsäure geätzt werden. Durch das Kunststoff verchromen im PVD-Vakuumverfahren bei STANIAX entfällt diese Einschränkung: Mithilfe physikalisch-chemischer Aktivierung und abgestimmter Haftprimer erzielen wir höchste Schichthaftung (GT 0 / 5B) auf nahezu allen technischen und dekorativen Polymeren.",
      cardTitle: "Leistungsumfang beim Kunststoff verchromen in unserem Werk",
      cardSubtitle:
        "Von der Flammaktivierung unpolarer Polyolefine (PP/PE) bis zur farbigen UV-Decklackierung",
      highlights: [
        "Vakuumverchromen von Spritzgussteilen aus ABS, SAN, PS, PC, PC/ABS-Blends, PMMA (Acrylglas), PA (glasfaserverstärktes Polyamid) und PET.",
        "Metallisierung schwer haftender Kunststoffe wie PP (Polypropylen) und PE nach Flamm-/Plasmaaktivierung und CPO-Haftvermittlerauftrag.",
        "Vergolden, Verkupfern und Bronzieren von Kunststoffen durch präzise Einfärbung des schützenden Decklacks (Top Coat).",
        "Design-Oberflächen: Gebürstetes Aluminium / Matt-Nickel (Satin), abgedunkeltes Schwarzchrom (Dark Chrome) und durchleuchtbare Schichten für LED-Backlight.",
        "Verchromen von 3D-Druck-Bauteilen (SLA, DLP, SLS, MJF) und Polyurethan-Vakuumgussteilen nach Füllerauftrag und Feinschliff.",
        "Geprüfte Beständigkeit gegen Kosmetika, Parfümalkohol, Handschweiß, Reinigungsmittel und UV-Strahlung.",
      ],
      table: {
        caption:
          "Kompatibilitätsmatrix der Kunststoffe für die PVD-Verchromung bei STANIAX",
        headers: [
          "Kunststoff (Polymer)",
          "Oberflächenenergie & Eigenschaften",
          "Vorbehandlung & Base-Coat-System",
          "Typische Industrieanwendungen",
        ],
        rows: [
          [
            "ABS / SAN / ASA",
            "Mittlere Oberflächenenergie (38-42 mN/m), sehr gute Benetzbarkeit",
            "Antistatische Wäsche + Acryl-Polyurethan- oder UV-Base-Coat",
            "KFZ-Embleme, Lüftungsdüsen, Hausgeräteblenden, Kosmetikdosen, Pokale",
          ],
          [
            "PC (Polycarbonat) & PC/ABS",
            "Hohe Schlagzähigkeit, empfindlich gegen aggressive Lösemittel (ESC)",
            "Spannungsarmer Base Coat zum Schutz vor Spannungsrissbildung",
            "Scheinwerferblenden, Reflektoren, Elektronikabdeckungen, Tasten",
          ],
          [
            "PP (Polypropylen) & PE",
            "Niedrige Oberflächenenergie (<30 mN/m), unpolares Polyolefin",
            "Flamm-/Plasmaaktivierung + CPO-Haftpromoter + elastischer Base Coat",
            "Parfümkappen, Cremetiegel-Deckel, Flaschenverschlüsse, Grablichter",
          ],
          [
            "PA6 / PA66 (Polyamid + GF) & BMC/PPS",
            "Hygroskopisch (PA) und hochtemperaturbeständig",
            "Tempern (Ausgasen) vorab + duroplastischer Epoxid-Acryl-Grundlack",
            "Bauteile im Motorraum, Projektorgehäuse, technische Griffe",
          ],
        ],
        footnote:
          "Sie sind unsicher, aus welchem Kunststoff Ihr Bauteil besteht? Senden Sie uns Musterteile - unser Labor führt Haftungstests durch und empfiehlt den optimalen Aufbau.",
      },
    },
    editorialSections: [
      {
        h2: "Warum das Verchromen von Kunststoff im Vakuum die Galvanik ablöst",
        paragraphs: [
          "Strenge EU-REACH-Vorgaben gegen sechswertiges Chrom sowie der Trend zum Leichtbau haben die PVD-Kunststoffmetallisierung zum Industriestandard gemacht. Ein Kunststoff-Spritzgussteil mit nanometerdünner Aluminium-Spiegelschicht und hochfestem Klarlack ist optisch nicht von galvanischem Chrom zu unterscheiden, wiegt jedoch 60-70% weniger als ein Zinkdruckguss- (ZnAl) oder Messingbauteil.",
          "Für Hersteller von Kosmetikverpackungen, Sanitärarmaturen, Leuchten, Möbelbeschlägen und Automobilteilen bietet dies doppelte Vorteile: geringere Werkzeug- und Rohstoffkosten (Einsatz von günstigem PP oder Standard-ABS) sowie eine unbegrenzte Farbpalette von 24K Gold bis Schwarzchrom.",
        ],
        subSections: [
          {
            h3: "Wie wir Spritzgussfehler vor der Hochglanz-Verchromung ausgleichen",
            body: "Eine Hochglanz-Chromschicht wirkt wie ein Vergrößerungsglas für jeden Spritzgussfehler (Bindenähte, Einfallstellen, Schlieren oder Eigenspannungen). Bei STANIAX optimieren wir den Lackaufbau gezielt:",
            bullets: [
              "Steuerung der Base-Coat-Schichtdicke (12-25 µm) zum Einebnen feiner Werkzeugstrukturen ohne Kantenflucht.",
              "Entspannungstempern (Annealing) von PC- und PMMA-Teilen vor dem Lackieren zur Vermeidung von Spannungsrissen.",
              "Ionisationsabblasung unmittelbar vor der Lackierkabine gegen elektrostatische Staubeinschlüsse.",
            ],
          },
          {
            h3: "Einzelteil-Verchromung von KFZ-Kunststoffteilen & Oldtimer-Restaurierung",
            body: "Neben der B2B-Serienfertigung verchromen wir auch einzelne Kunststoffteile für PKW, Oldtimer und Motorräder neu: Kühlergrills, Embleme, Zierleisten, Spiegelkappen und Tachorahmen.",
          },
        ],
      },
      {
        h2: "Farbvielfalt auf Kunststoff: Von Spiegelchrom bis Satin-Edelstahl",
        paragraphs: [
          "Durch das Einfärben des schützenden Top Coats mit lichtechten Metallkomplexfarbstoffen fertigen wir aus nur einem Spritzgusswerkzeug komplette Produktlinien (z. B. Basislinie in Spiegelchrom, Premiumlinie in 24K Gold und Sonderedition in Roségold oder Dark Chrome).",
        ],
        subSections: [
          {
            h3: "Hochglanz-Chrom vs. Anti-Fingerprint Satin-Inox",
            body: "Durch Mattierungsmittel im Decklack erzeugen wir die Optik von gebürstetem Aluminium, Titan oder Edelstahl (Inox), auf der Fingerabdrücke kaum sichtbar sind - ideal für Kaffeemaschinen, Audiogeräte, Betätigungsplatten und Fahrzeuginnenräume.",
          },
        ],
      },
    ],
    showcase: {
      h2: "Interaktiver Oberflächen-Konfigurator: Kunststoff verchromen & vergolden",
      subtitle:
        "Wählen Sie eine der 3 beliebtesten PVD-Oberflächen auf Kunststoff, um Glanzgrad, Härte und Einsatzgebiete zu vergleichen.",
      ctaLabel: "Diesen Effekt für Ihre Kunststoffteile anfragen →",
      options: [
        {
          id: "mirror-chrome",
          label: "Spiegelchrom (Mirror Chrome)",
          badge: "MEISTGEWÄHLTER EFFEKT",
          title: "Klassisches Hochglanz-Spiegelchrom auf ABS, PC & PP",
          description:
            "Makellose silberne Spiegelschicht (>92% Reflexion) als Ersatz für galvanisches Chrom auf KFZ-Emblemen, Leuchtenblenden, Drückerplatten und Verschlüssen.",
          specs: [
            {
              label: "Glanzgrad (60°)",
              value: "92 - 98 GU (voller optischer Spiegel)",
            },
            {
              label: "Farbcharakter",
              value: "Kühles Silberchrom / Reinstaluminium",
            },
            {
              label: "Bleistifthärte Top Coat",
              value: "2H - 4H (im UV-härtenden System)",
            },
          ],
          previewStyle:
            "linear-gradient(135deg, #cbd5e1 0%, #ffffff 48%, #64748b 100%)",
        },
        {
          id: "luxury-gold",
          label: "24K Gold & Roségold",
          badge: "BEAUTY & LUXUS-VERPACKUNG",
          title:
            "Champagnergold, 24K Gelbgold, Roségold & Kupfer auf Kunststoff",
          description:
            "Erzielt durch präzise eingefärbten Schutzlack über dem PVD-Aluminiumspiegel. Verleiht leichten Kunststoffkappen die Wertigkeit massiver Edelmetalle.",
          specs: [
            {
              label: "Verfügbare Töne",
              value: "14K / 18K / 24K Gold, Champagner, Roségold, Kupfer",
            },
            {
              label: "Chemische Beständigkeit",
              value: "Resistent gegen Ethanol, Parfüm & Kosmetiköle",
            },
            {
              label: "Farbkonstanz in Serie",
              value: "Kontrolliert auf ΔE < 1,0 zwischen den Chargen",
            },
          ],
          previewStyle:
            "linear-gradient(135deg, #d97706 0%, #fef08a 48%, #92400e 100%)",
        },
        {
          id: "satin-dark-chrome",
          label: "Satin-Inox & Schwarzchrom",
          badge: "HAUSGERÄTE & AUTOMOTIVE",
          title:
            "Satin-Nickel, Titan & getöntes Schwarzchrom (Dark Chrome / Gunmetal)",
          description:
            "Dezente technische Metalloptik mit Anti-Fingerprint-Eigenschaft für moderne Hausgeräte, Audio-Komponenten, Sanitärbeschläge und KFZ-Tuning.",
          specs: [
            {
              label: "Glanzgrad (60°)",
              value: "15 - 45 GU (Satin) bzw. 85 GU (Dark Chrome)",
            },
            {
              label: "Alltagstauglichkeit",
              value: "Reduzierte Sichtbarkeit von Fingerabdrücken",
            },
            {
              label: "Abriebschutz",
              value: "Hochfester 2K-Polyurethan-Schutzlack",
            },
          ],
          previewStyle:
            "linear-gradient(135deg, #1e293b 0%, #64748b 50%, #0f172a 100%)",
        },
      ],
    },
    processSection: {
      h2: "Ablauf der Kunststoff-Verchromung in 4 Prozessschritten",
      subtitle:
        "Schont dünnwandige Spritzgussteile durch niedrige Prozesstemperaturen.",
      steps: [
        {
          num: "01",
          title: "Werkstoffprüfung, Entfettung & Aktivierung",
          desc: "Entfernung von Trennmittelresten sowie Flamm-/Plasmaaktivierung und CPO-Primern bei unpolaren Kunststoffen wie PP und PE.",
          param: "Oberflächenspannung >40 mN/m",
        },
        {
          num: "02",
          title: "Spannungsarmer Base-Coat-Auftrag",
          desc: "Applikation eines lösemittelabgestimmten Grundlacks, der spiegelglatt verläuft, ohne Spannungsrisse in PC oder PMMA auszulösen.",
          param: "Spiegelglanz ohne Polieraufwand",
        },
        {
          num: "03",
          title: "Kaltes PVD-Aluminium-Aufdampfen im Vakuum",
          desc: "In der Hochvakuumkammer scheiden wir 99,99% Aluminium ab, wobei die Bauteiltemperatur weit unter der Wärmeformbeständigkeit (HDT) bleibt.",
          param: "Kein Verzug dünner Wandstärken",
        },
        {
          num: "04",
          title: "Top-Coat-Farbgebung & Haftungsprüfung",
          desc: "Versiegelung mit klarem oder farbigem Decklack (Gold, Kupfer, Schwarzchrom) und anschließender Gitterschnittprüfung nach ISO 2409.",
          param: "3M-Klebeband- & ISO 2409 5B Test",
        },
      ],
    },
    marqueeSection: {
      h2: "Kunststoffbauteile, die wir regelmäßig verchromen und metallisieren",
      subtitle:
        "Zuverlässiger Partner für Verpackungshersteller, Automobilzulieferer, Möbelindustrie und Werbetechnik.",
      row1: [
        "Kosmetikdeckel & Parfümkappen (PP / ABS)",
        "Lippenstifthülsen, Mascarakappen & Puderdosen",
        "Kühlergrills, KFZ-Embleme & Zierleisten",
        "Drehknöpfe für Waschmaschinen, Herde & Audio",
        "Möbelgriffe, Möbelfüße & Zierprofile",
        "WC-Betätigungsplatten & Sanitärrosetten",
        "3D-Figuren, Pokale, Trophäen & POS-Displays",
        "Grablichtdeckel & Sakralartikel (PS / PP)",
      ],
      row2: [
        "ABS & PC/ABS verchromen",
        "Polypropylen (PP) mit Flammaktivierung metallisieren",
        "Acrylglas (PMMA) & Polystyrol (PS) beschichten",
        "Polyamid (PA6 / PA66) im Vakuum verchromen",
        "3D-Druck (SLA / SLS) verchromen & vergolden",
        "24K Gold & Roségold auf Plastik",
        "Schwarzchrom & Satin-Inox auf Kunststoff",
        "Lasergravierbare Tag-/Nacht-Design-Schichten",
      ],
      b2bCards: [
        {
          badge: "BEAUTY & KOSMETIKVERPACKUNGEN",
          h3: "Großserien-Metallisierung von Verschlüssen und Tiegeln",
          body: "Wir garantieren höchste Farbtonkonstanz über Millionen von Schraubkappen, Zerstäuberringen und Cremetiegeln in Gold, Roségold und Chrom.",
          spec: "Beständig gegen Parfümöle, Ethanol & Transportabrieb",
        },
        {
          badge: "AUTOMOTIVE & OLDTIMER",
          h3: "Neuverchromung & Dark-Chrome-Veredelung von Plastikteilen",
          body: "Wir erneuern abblätternde Chromschichten auf Kühlergrills und Zierleisten aus ABS/PC oder veredeln sie in modernem Schwarzchrom.",
          spec: "Einzelanfertigung und Kleinserien möglich",
        },
        {
          badge: "MÖBEL & SANITÄRTECHNIK",
          h3: "Leichte Alternative zu Zinkdruckguss & Messing",
          body: "Ersetzen Sie teure polierte Metallgussteile durch kostengünstige Kunststoffspritzgussteile mit abriebfester PVD-Chrom- oder Edelstahloptik.",
          spec: "Senkung der Bauteilkosten um 35-50%",
        },
      ],
    },
    caseStudiesSection: {
      h2: "Referenzen Kunststoff-Verchromung (Mit Lupe untersuchen)",
      subtitle:
        "Prüfen Sie Spiegeltiefe und Farbbrillanz auf Polymerbauteilen mit der interaktiven Lupe.",
      items: [
        {
          badge: "KOSMETIK & PARFÜMERIE",
          h3: "Verpackungsserie aus ABS & PP in Gold, Violett & Spiegelchrom",
          desc: "Hochglänzender UV-Base-Coat kombiniert mit eingefärbten Top Coats ermöglichte sechs brillante Metallictöne aus einem einzigen Spritzgusswerkzeug.",
          param: "Spiegelglanz: >95 GU (Messwinkel 60°)",
          imageKey: "colorfulPackaging",
          alt: "Farbige im Vakuum metallisierte Kosmetikverpackungen aus Kunststoff in Gold, Rosa und Chrom",
        },
        {
          badge: "VERSCHLÜSSE & ZERSTÄUBER",
          h3: "Serien-Vakuummetallisierung von Polypropylen-Kappen (PP)",
          desc: "Nach Flammaktivierung des Polypropylens wurde volle Haftfestigkeit (5B) der Gold- und Silberschicht bis an die Gewindekanten erreicht.",
          param: "Serienlos: 50.000+ Stück in identischer Qualität",
          imageKey: "packagingAfter",
          alt: "Goldene und silberne Kunststoffkappen nach der Vakuummetallisierung bei STANIAX",
        },
        {
          badge: "AUTOMOBILBAU & TECHNIK",
          h3: "Vakuumverchromung eines KFZ-Bauteils aus PC/ABS",
          desc: "OEM-Chromoptik geschützt durch einen 2K-Polyurethan-Klarlack mit hoher Beständigkeit gegen Streusalz und UV-Licht.",
          param: "Temperaturbeständigkeit: -30°C bis +110°C",
          imageKey: "automotiveAfter",
          alt: "Verchromtes KFZ-Kunststoffbauteil nach dem PVD-Verfahren bei STANIAX",
        },
      ],
    },
    faqSection: {
      h2: "Häufige Fragen zum Kunststoff verchromen (FAQ)",
      subtitle:
        "Technische Antworten zu Kunststoffarten, Formtrennmitteln, 3D-Druck und Haltbarkeit.",
      items: [
        {
          q: "Kann man jeden Kunststoff verchromen (z. B. auch Polypropylen PP oder Polycarbonat PC)?",
          a: "Ja. Durch die PVD-Vakuummetallisierung in Kombination mit polymerspezifischen Haftprimern beschichten wir ABS, PC, PC/ABS, PMMA, PS, SAN, PA sowie schwer haftende Polyolefine wie PP und PE (nach Flammaktivierung und CPO-Primer). Lediglich reines PTFE (Teflon) und unbehandeltes POM sind ungeeignet.",
        },
        {
          q: "Was kostet das Verchromen von Kunststoffteilen?",
          a: "In der B2B-Serienfertigung richtet sich der Stückpreis nach der Bauteilgröße (Bestückungsdichte auf der Vakuumtrommel), dem Kunststofftyp und dem Top-Coat-System - bei kleinen Verschlusskappen liegt er im Bereich weniger Cent bis Euro. Bei Einzelteilen (z. B. Kühlergrill oder Oldtimer-Blenden) beginnt die individuelle Kalkulation ab ca. 150-250 PLN (35-60 €).",
        },
        {
          q: "Blättert die Chromschicht auf Plastik ab oder nutzt sie sich beim Anfassen ab?",
          a: "Nein. Eine fachgerecht ausgeführte Vakuummetallisierung mit Base Coat und vernetztem 2K-PUR- oder UV-Top-Coat erreicht die höchste Gitterschnitt-Haftungsklasse GT 0 / 5B nach ISO 2409. Sie blättert nicht ab, läuft durch Handschweiß nicht an und ist im Alltag abriebfest.",
        },
        {
          q: "Können Sie auch 3D-gedruckte Teile (SLA, SLS, FDM) verchromen?",
          a: "Ja, wir verchromen und vergolden regelmäßig 3D-Druck-Prototypen, Messemodelle und Pokale. SLA/DLP-Harzdrucke lassen sich direkt nach dem Grundlack verspiegeln; pulverbasiertes SLS/MJF und FDM-Drucke werden vorab gefüllert und feingeschliffen, um die Druckstufen zu glätten.",
        },
        {
          q: "Warum dürfen beim Spritzgießen keine silikonhaltigen Trennmittel verwendet werden?",
          a: "Silikonöle diffundieren in die Kunststoffoberfläche und lassen sich auch durch Waschen kaum entfernen. Beim Lackieren stößt das Silikon den Grundlack ab und erzeugt Krater („Fischaugen“), die nach dem Verspiegeln stark sichtbar sind. Bitte verwenden Sie ausschließlich silikonfreie bzw. überlackierbare Trennmittel.",
        },
        {
          q: "Sind neben Silberchrom auch Gold, Kupfer oder gebürsteter Edelstahl auf Kunststoff möglich?",
          a: "Ja. Nach dem Aufdampfen der Aluminiumschicht im Vakuum färben wir den Schutzlack mit transparenten Farbstoffen ein. So entstehen 14K/18K/24K Gold, Roségold, Kupfer, Messing, Schwarzchrom oder - mit Mattierungszusätzen - gebürstetes Satin-Nickel und Edelstahloptik (Inox).",
        },
      ],
    },
    quoteSection: {
      h2: "Angebot für Kunststoff-Verchromung & Metallisierung anfordern",
      intro:
        "Nennen Sie uns den Kunststofftyp (z. B. ABS, PC, PP), die Abmessungen, den gewünschten Metallfarbton und die Stückzahl. Wir erstellen kurzfristig ein Angebot inkl. Musteroption.",
      projectTypes: [
        "Serien-Kunststoffmetallisierung (Spritzgießerei / OEM)",
        "Kosmetikverpackungen verchromen / vergolden (Kappen, Tiegel)",
        "KFZ- / Motorrad-Kunststoffteile verchromen",
        "3D-Druck & Prototypen verchromen / vergolden",
        "Haftungsproben & Farbmuster auf Kundenmaterial",
      ],
      submitLabel: "Anfrage zum Kunststoff verchromen senden",
    },
    seeAlsoSection: {
      h2: "Verwandte Leistungen rund um Kunststoff & Oberflächentechnik",
      links: [
        {
          path: "/de/kunststofflackierung",
          anchorText:
            "Industrielle Kunststofflackierung - Piano Black, Soft-Touch & RAL",
          badge: "KUNSTSTOFFLACKIERUNG",
          desc: "Deckende, matte, strukturierte und haptische Soft-Touch-Lackierungen auf Spritzgussteilen.",
        },
        {
          path: "/de/vakuummetallisierung",
          anchorText:
            "PVD Vakuummetallisierung - Kammertechnik & 4-Schicht-Physik",
          badge: "PVD-TECHNOLOGIE",
          desc: "Technische Details zur Hochvakuumbedampfung und funktionellen Schichten.",
        },
        {
          path: "/de/news/vakuummetallisierung-revolutioniert-die-kosmetikbranche",
          anchorText:
            "Artikel: Wie Kunststoffmetallisierung die Kosmetikverpackung verändert",
          badge: "BRANCHENBERICHT",
          desc: "Erfahren Sie, wie führende Kosmetikmarken PVD-Oberflächen für Lippenstifte und Flakons nutzen.",
        },
      ],
    },
    schemaServiceType:
      "Kunststoff verchromen und Vakuummetallisierung von Polymeren",
  },

  "plastic-painting": {
    navLabel: "Kunststofflackierung",
    shortSummary:
      "Industrielle Kunststofflackierung (ABS, PC, PP, PA, PMMA) - Piano Black Hochglanz, Soft-Touch, Tiefmatt, Struktur und alle RAL/NCS-Farbtöne.",
    metaTitle: "Kunststofflackierung Industrie - Soft-Touch & RAL | STANIAX",
    metaDesc:
      "Industrielle Kunststofflackierung bei STANIAX (Polen/EU). Spritzgussteile aus ABS, PC, PP & PA lackieren: Piano Black, Soft-Touch, Matt, Struktur & RAL/NCS.",
    breadcrumbLabel: "Industrielle Kunststofflackierung",
    heroBadge:
      "2K-Polyurethan-, Acryl-, Soft-Touch- & UV-Lacksysteme · Haftklasse 5B (ISO 2409)",
    h1: "Industrielle Kunststofflackierung & Beschichtung von Spritzgussteilen",
    lead: "Die professionelle Kunststofflackierung verleiht rohen Spritzgussteilen einen homogenen Farbton, eine edle Haptik sowie hohe Beständigkeit gegen Kratzer, UV-Strahlung und Chemikalien. In der Industrielackiererei STANIAX in Józefów bei Warschau lackieren wir Bauteile aus ABS, PC, PP, PA, PS und PMMA - von tiefglänzendem Piano Black über samtigen Soft-Touch-Lack bis hin zu Feinstruktur- und Metallic-Oberflächen.",
    ctaPrimaryLabel: "Kunststofflackierung anfragen →",
    ctaSecondaryLabel: "5 Lacksysteme für Kunststoffe vergleichen ↓",
    heroImageKey: "plasticPaintHero",
    heroImageAlt:
      "Industriell lackierte Kunststoffbauteile in Hochglanz und Matt im Werk STANIAX",
    metrics: [
      {
        value: 5,
        label: "Spezialisierte Lacksysteme",
        detail:
          "Piano Black Hochglanz, Tiefmatt, Haptik Soft-Touch, Struktur & Metallic/Perleffekt",
      },
      {
        value: 90,
        prefix: ">",
        suffix: " GU",
        label: "Glanzgrad Piano Black",
        detail:
          "Spiegeltiefe 2K-Polyurethan- und UV-Klarlacke gemessen im 60°-Winkel",
      },
      {
        value: 5,
        suffix: "B",
        label: "Haftfestigkeit nach ISO 2409",
        detail:
          "Höchste Gitterschnitt-Haftungsklasse auf technischen Polymeren und aktivierten Polyolefinen",
      },
    ],
    scopeSection: {
      h2: "Leistungsumfang der Kunststofflackierung & Lacksysteme",
      intro:
        "Rohe Spritzgussteile weisen direkt aus der Maschine häufig Glanzunterschiede, sichtbare Bindenähte oder Glasfaserabzeichnungen auf, und das Einfärben unterschiedlicher Kunststoffe im Granulat führt nie zu einem exakt identischen Farbton. Die industrielle Kunststofflackierung bei STANIAX hebt Ihre Bauteile auf Class-A-Niveau und sichert absolute Farbgleichheit über alle Komponenten einer Baugruppe.",
      cardTitle: "Kapazitäten unserer Lackiererei für Kunststoffteile",
      cardSubtitle:
        "Exakte Abstimmung der Lackchemie auf Bauteilflexibilität, Lösemittelempfindlichkeit und Abriebanforderungen",
      highlights: [
        "Lackierung nach kompletter RAL-Classic-, RAL-Design-, NCS- und Pantone-Palette sowie individuelle Farbtonrezeptierung nach Kundenmuster.",
        "Piano-Black- & Hochglanz-Oberflächen (>90 GU) für Automobil-Mittelkonsolen, Audio-/TV-Blenden und Luxusverpackungen.",
        "Elastische Soft-Touch-Beschichtungen (samtig-gummierte Haptik) mit hoher Hydrolyse- und Abriebbeständigkeit für Medizingeräte, Elektronik und Kosmetik.",
        "Fein- und Grobstrukturlacke zum Kaschieren von Einfallstellen, Bindenähten und Werkzeugspuren auf großen Technikgehäusen.",
        "Lasergravierbare Tag-/Nacht-Lackierungen (Laser Etching) für hinterleuchtete Schalter und Bedienfelder.",
        "Präzises Maskieren mittels Schablonen, Silikonstopfen und Stanzklebebändern zum Schutz von Rastnasen, Gewinden und Kontaktflächen.",
      ],
      table: {
        caption:
          "Vergleich der 5 wichtigsten Systeme der Kunststofflackierung bei STANIAX",
        headers: [
          "Lacksystem",
          "Glanzgrad (60°)",
          "Wichtigste Gebrauchseigenschaften",
          "Typische B2B-Anwendungen",
        ],
        rows: [
          [
            "Piano Black / Hochglanz 2K & UV",
            "90 - 96 GU (Spiegelglanz)",
            "Hohe Oberflächenhärte (2H-3H), enorme Farbtiefe, Mikrokratz- und Chemikalienfestigkeit",
            "KFZ-Interieurleisten, Audio-/TV-Fronten, edle Kosmetiktiegel und Verschlüsse",
          ],
          [
            "Tiefmatt (Deep Matte) & Seidenmatt",
            "3 - 10 GU (Matt) / 20 - 35 GU (Satin)",
            "Reflexionsfrei, moderne technische Optik, unempfindlich gegen Fingerabdrücke",
            "Leuchtengehäuse, Kamera-/Sensorabdeckungen, Unterhaltungselektronik, Möbelteile",
          ],
          [
            "Soft-Touch (Haptischer PUR-Lack)",
            "2 - 5 GU (samtig ultramatt)",
            "Warmer, rutschfester Griff, Geräusch- und Vibrationsdämpfung, hohe Elastizität",
            "Medizinische Handstücke, Powerbanks, Kosmetikkappen, Gerätegriffe",
          ],
          [
            "Strukturlack (Fein- / Grobstruktur)",
            "5 - 15 GU (gekörnte Struktur)",
            "Deckt Einfallstellen, Bindenähte und Glasfasern ohne aufwendiges Spachteln ab",
            "Maschinengehäuse, Messgeräte, Kassensysteme und Zahlungsterminals",
          ],
        ],
        footnote:
          "Lösemittelgemisch und Trocknungstemperatur (40-80°C) werden exakt auf das jeweilige Polymer abgestimmt, um Verzug und Spannungsrisse (ESC) auszuschließen.",
      },
    },
    editorialSections: [
      {
        h2: "Warum die Kunststofflackierung spezielles chemisches Know-how erfordert",
        paragraphs: [
          "Das Lackieren von Kunststoffen unterscheidet sich grundlegend von der Metalllackierung. Polymere sind elektrische Isolatoren (ziehen Staub elektrostatisch an), besitzen eine niedrige Wärmeformbeständigkeit, stark variierende Oberflächenenergien (von unpolarem PP/PE bis zu polarem ABS/PA) und reagieren empfindlich auf scharfe Lösemittel. Ein falsch eingestellter Verdünner erzeugt auf Polycarbonat (PC) oder PMMA binnen Minuten Spannungsrisse, während Lack auf unbehandeltem Polypropylen (PP) ohne Haftvermittler sofort abblättert.",
          "Bei STANIAX beginnt jedes Projekt mit der Bestimmung des Kunststoffs und der Auswahl des passenden Haftpromoters (Adhesion Promoter), der eine chemische Brücke zum Substrat schlägt, ohne die Schlagzähigkeit zu beeinträchtigen.",
        ],
        subSections: [
          {
            h3: "Farbgleichheit bei Multimaterial-Baugruppen (ABS + PP + Aluminium)",
            body: "Moderne Hausgeräte, Leuchten oder Elektronikprodukte bestehen oft aus mehreren Bauteilen unterschiedlicher Werkstoffe. Eine Einfärbung im Kunststoffgranulat führt immer zu sichtbaren Farbunterschieden (Metamerie). Durch das Lackieren aller Sichtteile mit demselben Decklacksystem bei STANIAX erzielen wir 100% identische Farbe und Mattierung über das gesamte Produkt.",
            bullets: [
              "Farbtonkontrolle nach RAL, NCS, Pantone und physischen Kunden-Grenzmustern.",
              "1-, 2- und 3-Schicht-Aufbauten (Haftprimer + Farb-/Metallicbasis + 2K-/UV-Klarlack).",
              "Konstante Schichtdicke auch bei komplexen 3D-Gehäusen und Lüftungsschlitzen.",
            ],
          },
          {
            h3: "Antistatische Vorbehandlung & schonende Niedertemperaturtrocknung",
            body: "Vor der Lackierkabine werden alle Formteile entfettet und mit ionisierter Druckluft abgeblasen. Die Neutralisierung der statischen Aufladung verhindert Staubeinschlüsse und ermöglicht makellose Piano-Black-Oberflächen.",
          },
        ],
      },
      {
        h2: "Funktionelle Beschichtung: UV-Schutz & Restaurierung klebriger Soft-Touch-Teile",
        paragraphs: [
          "Ungeschütztes ABS oder Polystyrol vergilbt und versprödet unter Sonnenlicht schnell. Unsere 2K-Polyurethan- und Acryllacke mit UV-Absorbern schützen Außenbauteile dauerhaft vor Photodegradation. Zudem entfernen wir gealterte, klebrig gewordene Werks-Soft-Touch-Schichten von KFZ-Innenraumteilen und beschichten sie neu mit hydrolysebeständigem 2K-Soft-Touch oder Piano Black.",
        ],
      },
    ],
    showcase: {
      h2: "Interaktiver Konfigurator: 5 Oberflächensysteme der Kunststofflackierung",
      subtitle:
        "Wählen Sie ein Lacksystem aus, um Glanzgrad, Härte und empfohlene Kunststoffe zu prüfen.",
      ctaLabel: "Angebot für diese Kunststoffoberfläche anfordern →",
      options: [
        {
          id: "piano-black",
          label: "Piano Black (Hochglanz)",
          badge: ">92 GU HIGH GLOSS",
          title: "Spiegeltiefer Hochglanz Piano Black / High Gloss 2K & UV",
          description:
            "Glasglatte Hochglanzoberfläche auf 2K-Polyurethan- oder UV-Basis für Automobil-Interieurleisten, Audiofronten und Luxusverpackungen.",
          specs: [
            { label: "Glanzgrad (60°)", value: "90 - 96 GU" },
            { label: "Bleistifthärte", value: "2H - 3H (mikrokratzfest)" },
            {
              label: "Geeignete Substrate",
              value: "ABS, PC/ABS, PMMA, PS, Komposite",
            },
          ],
          previewStyle:
            "linear-gradient(135deg, #090d16 0%, #334155 48%, #020617 100%)",
        },
        {
          id: "soft-touch",
          label: "Soft-Touch (Samt-/Gummihaptik)",
          badge: "PREMIUM-HAPTIK",
          title:
            "Samtig-elastische Soft-Touch-Beschichtung mit Anti-Rutsch-Griff",
          description:
            "Zweikomponentiges Polyurethansystem mit warmer, lederähnlicher Haptik und komplett reflexionsfreier Optik.",
          specs: [
            {
              label: "Glanzgrad (60°)",
              value: "2 - 5 GU (reflexionsfreies Ultramatt)",
            },
            { label: "Haptik", value: "Samtweicher, ergonomischer Griff" },
            {
              label: "Beständigkeit",
              value: "Resistent gegen Handschweiß, Kosmetika & Hydrolyse",
            },
          ],
          previewStyle: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
        },
        {
          id: "deep-matte",
          label: "Tiefmatt & Seidenmatt RAL/NCS",
          badge: "ALLE RAL / NCS FARBEN",
          title: "Homogenes Matt oder Seidenmatt in voller RAL- & NCS-Palette",
          description:
            "Moderne Industrie- und Architekturoberfläche, unempfindlich gegen Fingerabdrücke und Reinigungsmittel.",
          specs: [
            {
              label: "Glanzgrad (60°)",
              value: "5 - 12 GU (Matt) / 20 - 35 GU (Satin)",
            },
            {
              label: "Farbtonwahl",
              value: "Kompletter RAL-, NCS-, Pantone-Fächer oder Kundenmuster",
            },
            {
              label: "UV-Stabilität",
              value: "Integrierte UV-Filter gegen Vergilben und Ausbleichen",
            },
          ],
          previewStyle: "linear-gradient(135deg, #475569 0%, #64748b 100%)",
        },
        {
          id: "metallic-pearl",
          label: "Metallic / Perleffekt / Eloxal-Optik",
          badge: "SPEZIALEFFEKTE",
          title: "2-Schicht-Metalliclacke (Silber, Graphit, Gold) & Perleffekt",
          description:
            "Feine Aluminium- oder Perlglanzpigmente unter glänzendem oder mattem 2K-Klarlack verleihen Kunststoffgehäusen die Optik von eloxiertem Aluminium.",
          specs: [
            {
              label: "Schichtaufbau",
              value: "Metallic-/Perleffekt-Basis + 2K-Klarlack",
            },
            {
              label: "Pigmentkörnung",
              value: "Fein (Eloxal-Look) oder brillant-funkelnd",
            },
            {
              label: "Mechanische Festigkeit",
              value: "Automobilstandard mit hoher Abriebfestigkeit",
            },
          ],
          previewStyle:
            "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 50%, #1e3a8a 100%)",
        },
        {
          id: "structural-texture",
          label: "Industrie-Feinstruktur",
          badge: "KASCHIERT SPRITZGUSSFEHLER",
          title: "Strukturlack (Fein- oder Mittelkorn) für technische Gehäuse",
          description:
            "Optimal für großflächige Spritzguss- und Tiefziehteile mit Einfallstellen oder Fließlinien. Deckt Oberflächenfehler ohne Spachtelarbeit ab.",
          specs: [
            {
              label: "Oberflächenstruktur",
              value: "Reproduzierbare Fein- oder Mittelstruktur",
            },
            {
              label: "Trockenschichtdicke",
              value: "30 - 60 µm (hohes Deckvermögen)",
            },
            {
              label: "Stoßfestigkeit",
              value:
                "Sehr unempfindlich gegen Kratzer und Montagebeanspruchung",
            },
          ],
          previewStyle:
            "linear-gradient(135deg, #334155 0%, #1e293b 50%, #0f172a 100%)",
        },
      ],
    },
    processSection: {
      h2: "Der 4-stufige Ablauf der industriellen Kunststofflackierung",
      subtitle:
        "Kontrollierte Sauberkeit und bauteilgerechte Trocknungstemperaturen.",
      steps: [
        {
          num: "01",
          title: "Chemische Reinigung, Maskierung & Entelektrisierung",
          desc: "Entfernung von Trennmittelspuren, Abdecken von Rastnasen/Kontakten und Neutralisierung statischer Ladungen mittels Ionisationsluft.",
          param: "Staubfreie Ionisationsvorbereitung",
        },
        {
          num: "02",
          title: "Auftrag von Haftvermittler / Kunststoffprimer",
          desc: "Bei PP, PE, PA und Blends applizieren wir einen abgestimmten Haftpromoter für eine dauerhafte chemische Verankerung.",
          param: "Haftklasse 5B nach ISO 2409",
        },
        {
          num: "03",
          title: "Spritzapplikation von Basislack & Top Coat",
          desc: "In der Lackierkabine tragen wir den RAL/NCS-Farbton sowie den Decklack (Piano Black, Matt, Soft-Touch oder Struktur) auf.",
          param: "Kontrollierte Schichtdicke 20-45 µm",
        },
        {
          num: "04",
          title: "Niedertemperatur- / UV-Härtung & Qualitätsprüfung",
          desc: "Aushärtung bei bauteilfreundlichen 50-70°C oder im UV-Tunnel, gefolgt von Glanzgrad-, Farbmetrik- (ΔE) und Gitterschnittprüfung.",
          param: "100% Sichtkontrolle der Charge",
        },
      ],
    },
    marqueeSection: {
      h2: "Anwendungsbereiche der Kunststofflackierung in der Industrie",
      subtitle:
        "Beschichtung für Elektronik-, Leuchten-, Automobil-, Kosmetik- und Medizintechnikhersteller.",
      row1: [
        "Gehäuse für Elektronik- & Medizingeräte",
        "Frontblenden & Drehknöpfe für Hausgeräte / Audio",
        "Soft-Touch- & Matt-Kosmetikverpackungen",
        "Piano-Black-Interieurleisten im Automobilbau",
        "Architektur- und LED-Leuchtengehäuse",
        "Helme, Schutzbrillen & Sportartikelkomponenten",
        "Möbelgriffe, Lichtschalter & Schalterrahmen",
        "POS-Displays, Designmodelle & Werbemittel",
      ],
      row2: [
        "ABS, SAN & ASA lackieren",
        "Polycarbonat (PC) & PC/ABS beschichten",
        "Flammaktiviertes Polypropylen (PP) lackieren",
        "Glasfaserverstärktes Polyamid (PA6 / PA66 + GF)",
        "PMMA (Acrylglas) & Polystyrol (PS) lackieren",
        "Hydrolysebeständiger Soft-Touch-PUR-Lack",
        "Lasergravierbare Tag-/Nacht-Schalterlackierung",
        "Präzisionsmaskierung von Gewinden & Kontakten",
      ],
      b2bCards: [
        {
          badge: "ELEKTRONIK & GERÄTEBAU",
          h3: "Gehäuselackierung inklusive technischer Maskierung",
          body: "Wir lackieren Messgeräte-, Steuerungs- und Terminalgehäuse in Matt, Struktur oder Soft-Touch bei freibleibenden Steckverbindern und Rastnasen.",
          spec: "Kombinierbar mit innenseitiger EMV-Abschirmung",
        },
        {
          badge: "KOSMETIK & LUXUSVERPACKUNGEN",
          h3: "Soft-Touch- & Piano-Black-Veredelung für Tiegel und Kappen",
          body: "Verleihen Sie Kunststofftiegeln, Puderdosen und Verschlüssen eine samtige Soft-Touch-Haptik oder tiefschwarzen Spiegelglanz mit Parfümbeständigkeit.",
          spec: "Farbabmusterung nach Pantone, RAL und NCS",
        },
        {
          badge: "FAHRZEUGINNENRAUM",
          h3: "Soft-Touch-Restaurierung & Piano-Black-Dekore",
          body: "Wir entfernen klebrig gewordene Altbeschichtungen von Schaltern und Konsolen und tragen abriebfeste neue 2K-Soft-Touch- oder Mattlacke auf.",
          spec: "Beständig gegen Handcremes und Abrieb",
        },
      ],
    },
    caseStudiesSection: {
      h2: "Referenzen Kunststofflackierung (Mit Lupe prüfen)",
      subtitle:
        "Fahren Sie mit der Maus über die Bilder, um Lackverlauf und Kantenqualität zu begutachten.",
      items: [
        {
          badge: "SONDERFARBTÖNE & HOCHGLANZ",
          h3: "Serie komplexer ABS/PC-Spritzgussteile in Hochglanz",
          desc: "Makelloser Lackverlauf auf dreidimensional geformten Kunststoffteilen ohne Läufer oder Staubeinschlüsse.",
          param: "Glanzgrad: 94 GU · Haftung 5B",
          imageKey: "plasticPaint1",
          alt: "Hochglanzlackierte Kunststoffbauteile im Werk STANIAX",
        },
        {
          badge: "B2B-SERIENFERTIGUNG",
          h3: "Reproduzierbare Lackierung technischer & dekorativer Formteile",
          desc: "Maßgefertigte Lackieraufnahmen sichern identische Schichtdicken und Farbtöne über die gesamte Serie.",
          param: "Farbabweichung zwischen Chargen: ΔE < 0,8",
          imageKey: "plasticPaint2",
          alt: "Industrielle Serienlackierung von Kunststoffteilen auf Warenträgern bei STANIAX",
        },
        {
          badge: "UV-SCHUTZLACKIERUNG",
          h3: "UV-stabilisierter Decklack auf Polycarbonat- & ABS-Komponenten",
          desc: "Dauerhafter Schutz vor Vergilbung und Witterungseinflüssen für außenliegende Kunststoffteile.",
          param: "Geprüft im UV- und Feuchtekammertest",
          imageKey: "plasticPaint3",
          alt: "Fertige Kunststoffkomponenten mit UV-Schutzlackierung bei STANIAX",
        },
      ],
    },
    faqSection: {
      h2: "Häufige Fragen zur Kunststofflackierung (FAQ)",
      subtitle:
        "Antworten zu Elastizität, Soft-Touch-Haltbarkeit, Farbnachstellung und Glasfaser-Polyamid.",
      items: [
        {
          q: "Reißt oder platzt der Lack ab, wenn sich ein flexibles Kunststoffteil bei der Montage biegt?",
          a: "Nein. Für elastische Kunststoffe (wie PP, TPE oder dünnwandige ABS-Schnappverbindungen) setzen wir elastifizierte 2K-Polyurethansysteme in Verbindung mit spezifischen Haftvermittlern ein, sodass die Lackschicht die Biegung problemlos mitmacht.",
        },
        {
          q: "Was ist ein Soft-Touch-Lack und wird er nach einigen Jahren wieder klebrig?",
          a: "Soft-Touch ist ein spezieller 2K-Polyurethanlack, der nach der Vernetzung eine samtig-matte, leicht nachgiebige Oberfläche ähnlich weichem Leder oder Gummi bildet. Die modernen, hydrolysebeständigen Systeme bei STANIAX lösen sich nicht auf, werden nicht klebrig und widerstehen Handschweiß sowie Alkohol.",
        },
        {
          q: "Können Sie Farbtöne nach RAL, NCS, Pantone oder einem angelieferten Musterteil anmischen?",
          a: "Ja. Wir lackieren das gesamte RAL-Classic-, RAL-Design- und NCS-Spektrum und rezeptieren Sonderfarben nach Pantone oder einem physischen Referenzbauteil des Kunden in Hochglanz, Seidenmatt, Tiefmatt oder Struktur.",
        },
        {
          q: "Arbeiten Sie auch klebrige Soft-Touch-Schalter und Blenden aus Autos wieder auf?",
          a: "Ja. Wir entschichten gealterte, klebrige Gummierungen von Schaltern, Türgriffen, Lenkradspangen und Mittelkonsolen schonend und lackieren sie neu mit langlebigem 2K-Soft-Touch, Seidenmatt oder Piano Black.",
        },
        {
          q: "Welche Mindestmengen gelten bei der industriellen Kunststofflackierung?",
          a: "Wir bearbeiten sowohl Einzelstücke und Design-Prototypen als auch laufende Großserien für Spritzgießereien und OEMs. Die Rüstkosten für Kleinmengen weisen wir im Angebot transparent aus.",
        },
        {
          q: "Können auch glasfaserverstärkte Kunststoffe wie PA6 + GF30 lackiert werden?",
          a: "Ja. Glasfaserverstärkte Polyamide (PA+GF) sind hygroskopisch und zeigen vorstehende Mikrofasern. Wir tempern die Teile vorab zum Ausgasen der Feuchtigkeit, isolieren die Fasern mit einem füllenden Primer und tragen anschließend einen glatten oder strukturierten Decklack auf.",
        },
      ],
    },
    quoteSection: {
      h2: "Angebot für industrielle Kunststofflackierung anfordern",
      intro:
        "Geben Sie die Kunststoffart, Bauteilmaße, den gewünschten Farbton (RAL/NCS/Pantone/Muster) und die Oberfläche (Piano Black, Matt, Soft-Touch, Struktur) an. Sie erhalten innerhalb von 24h eine Kalkulation.",
      projectTypes: [
        "Serienlackierung von Kunststoff-Spritzgussteilen (B2B)",
        "Soft-Touch- / Piano-Black-Lackierung (Verpackung, Elektronik)",
        "Strukturlackierung von Technik- & Medizingehäusen",
        "Restaurierung von KFZ-Innenraumteilen (Soft-Touch / Piano Black)",
        "Farbmustererstellung & Haftungsproben auf Kundenmaterial",
      ],
      submitLabel: "Anfrage zur Kunststofflackierung senden",
    },
    seeAlsoSection: {
      h2: "Passende weitere Oberflächentechnologien bei STANIAX",
      links: [
        {
          path: "/de/kunststoff-verchromen",
          anchorText:
            "Kunststoff verchromen & vergolden im PVD-Vakuumverfahren",
          badge: "CHROM & GOLD AUF PLASTIK",
          desc: "Kombinieren Sie Lackierung mit Vakuumbedampfung für echte Spiegelmetall-Optik.",
        },
        {
          path: "/de/spritzlackierung",
          anchorText:
            "Industrielle Spritzlackierung (Spritzlackieren im B2B-Serienauftrag) (RAL / NCS auf Metall, Guss & Komposit)",
          badge: "INDUSTRIELACKIEREREI",
          desc: "Nasslackierung für Aluminium, Stahl, Druckguss und Multimaterial-Baugruppen.",
        },
        {
          path: "/de/glas-und-keramiklackierung",
          anchorText:
            "Glaslackierung & Keramikbeschichtung (Ombre, Frost, Flakons)",
          badge: "GLAS & VERPACKUNG",
          desc: "Dekorative und UV-schützende Einbrennlackierungen auf Flakons, Flaschen und Gläsern.",
        },
      ],
    },
    schemaServiceType:
      "Industrielle Kunststofflackierung und Beschichtung von Spritzgussteilen",
  },

  "glass-painting": {
    navLabel: "Glas- & Keramiklackierung",
    shortSummary:
      "Dekorative und industrielle Glaslackierung: Parfümflakons, Spirituosenflaschen, Kosmetiktiegel, Ombre-Farbverläufe, Frost-Effekt und Keramikbeschichtung.",
    metaTitle: "Glaslackierung, Flakons, Flaschen & Keramik | STANIAX",
    metaDesc:
      "Industrielle Glaslackierung (Parfümflakons, Flaschen, Tiegel) und Keramiklackierung bei STANIAX. Ombre-Verlauf, Frost-Mattierung, Pantone/RAL & PVD-Gold.",
    breadcrumbLabel: "Glas- & Keramiklackierung",
    heroBadge:
      "Thermische Einbrennhärtung bis 180°C + UV · Alkohol- & Abfülllinienfest",
    h1: "Glaslackierung & Keramikbeschichtung für Flakons, Flaschen und Tiegel",
    lead: "Die spezialisierte Glas- und Keramiklackierung bei STANIAX verwandelt standardisiertes Klarglas - Parfümflakons, Spirituosenflaschen, Kosmetiktiegel, Leuchtengläser und Kerzengefäße - in unverwechselbare Markenverpackungen. Wir realisieren deckende RAL-/Pantone-Lackierungen, transparente Einfärbungen, fließende Ombre-Farbverläufe, säurefreie Mattierungen (Frost-Effekt), Soft-Touch-Glas sowie spiegelnde PVD-Metallisierungen.",
    ctaPrimaryLabel: "Glas- & Keramiklackierung anfragen →",
    ctaSecondaryLabel: "Dekorative Glaseffekte entdecken ↓",
    heroImageKey: "glassPaintHero",
    heroImageAlt:
      "Lackierte Glasflakons und Kosmetikflaschen mit Ombre-Farbverlauf und Metallisierung bei STANIAX",
    metrics: [
      {
        value: 180,
        suffix: " °C",
        label: "Thermische Einbrennhärtung",
        detail:
          "Ofenhärtung silanmodifizierter Glaslacke für kovalente Haftung auf glattem Silikatglas",
      },
      {
        value: 360,
        suffix: "°",
        label: "Rotationslackierung am Spindelband",
        detail:
          "Gleichmäßige Schichtdicke und ansatzfreie Ombre-Verläufe rund um den gesamten Flakon",
      },
      {
        value: 100,
        suffix: "%",
        label: "Parfüm- & Alkoholbeständigkeit",
        detail:
          "Widersteht hochprozentigem Ethanol, Duftölen und dem Abrieb auf Abfüllanlagen",
      },
    ],
    scopeSection: {
      h2: "Leistungsumfang der Glaslackierung für Verpackung, Licht & Keramik",
      intro:
        "Glas und glasierte Keramik sind porenfreie Silikatoberflächen, auf denen herkömmliche Lacke bei Feuchtigkeit oder Alkoholkontakt schnell ablösen. Bei STANIAX setzen wir wasser- und lösemittelbasierte, mit Organosilanen modifizierte Lacksysteme ein, die im Umluftofen bis 180°C oder im UV-Tunnel vernetzt werden.",
      cardTitle:
        "Was beschichten wir in der Glas- & Keramikabteilung von STANIAX?",
      cardSubtitle:
        "Lösungen für Kosmetikhersteller, Parfümerien, Spirituosenmarken, Kerzenmanufakturen und Leuchtenbauer",
      highlights: [
        "Parfümflakons & Kosmetiktiegel: Transparente Glasfärbung (jeder Pantone-/RAL-Ton), deckender Hochglanz/Mattlack, Perleffekt und samtiger Soft-Touch.",
        "Premium-Getränkeflaschen (Wodka, Gin, Likör, Sekt): Vollflächige Decklackierung, Spiegelgold/-silber/-kupfer (PVD), Ombre-Verläufe und klare Sichtfenster.",
        "Gefrostetes Glas (Frost / Satin-Glas) durch abriebfeste Mattlackierung ganz ohne umweltbelastendes Flusssäureätzen.",
        "Leuchtengläser, Lampenschirme, Laborglas sowie Dekorglas (Vasen, Kerzengläser, Weihnachtskugeln, Grablichter).",
        "Gebrauchs-, Werbe- und Industriekeramik: Tassen, Fliesen, Keramiktöpfe, Porzellan und Steinzeug in Metallic-, Matt- oder Glanzoptik.",
        "Druckvorbereitete Oberflächenspannung: Unsere Glaslacke sind optimal für nachfolgenden Heißfolienprägedruck (Hot-Stamping), Siebdruck und Tampondruck geeignet.",
      ],
      table: {
        caption:
          "Spezifikation der Glas- und Keramik-Oberflächeneffekte bei STANIAX",
        headers: [
          "Oberflächeneffekt auf Glas",
          "Lichtdurchlässigkeit",
          "Technologische Charakteristik",
          "Typische B2B-Einsatzgebiete",
        ],
        rows: [
          [
            "Transparentlackierung & Ombre-Verlauf",
            "50 - 90% (glasklare Tönung)",
            "Schleierfreie Farbstoffsysteme; fließender Übergang von Vollton zu klarem Glas",
            "Parfümflakons, Cremetiegel, Leuchtenschirme, Duftkerzengläser",
          ],
          [
            "Eisglas-Effekt (Frost / Mattierung)",
            "30 - 60% (gestreutes Licht)",
            "Seidig-matte, lichtstreuende Schicht, unempfindlich gegen Fingerabdrücke",
            "Wodka- & Ginflaschen, Pipettenflaschen, LED-Diffusorgläser",
          ],
          [
            "Decklackierung (Glanz / Matt / Soft-Touch)",
            "0 - 5% (voller UV-Lichtschutz)",
            "Blockiert UV- und Tageslicht zum Schutz lichtempfindlicher Wirkstoffe (Retinol, Vitamin C)",
            "Dermokosmetik-Tiegel & Serumflaschen, Limited-Edition-Spirituosen",
          ],
          [
            "Glas-Metallisierung (Gold / Chrom / Kupfer)",
            "0% (Vollspiegel) oder 40% (Halbspiegel)",
            "Kombination aus PVD-Hochvakuumbedampfung und eingebranntem Schutzlack auf Glas",
            "Luxus-Spirituosen, Nischenparfüms, Kerzengefäße, Zierkeramik",
          ],
        ],
        footnote:
          "Auf Wunsch maskieren wir Flaschenmündungen/Gewinde (Neck Masking) und Flaschenböden präzise für reibungsloses Aufcrimpen von Zerstäubern.",
      },
    },
    editorialSections: [
      {
        h2: "Warum Kosmetik- und Getränkemarken Glaslackierung statt Hütteneinfärbung wählen",
        paragraphs: [
          "In der Glashütte durchgefärbtes Glas erfordert enorme Mindestabnahmemengen (oft über 200.000 Flaschen pro Schmelzwanne) und bietet nur wenige Standardfarben (Braunglas, Grünglas, Kobaltblau). Durch die industrielle Glaslackierung bei STANIAX können Sie sofort verfügbare Standard-Klarglasflakons oder -tiegel bereits ab wenigen Hundert oder Tausend Stück in Ihrer exakten Markenfarbe nach Pantone oder RAL veredeln.",
          "Zudem ermöglicht die Oberflächenlackierung Effekte, die in der Glasschmelze physikalisch unmöglich sind: mehrfarbige Ombre-Farbverläufe, Perlmuttschimmer, warme Soft-Touch-Haptik auf Glas oder spiegelnde PVD-Goldschichten.",
        ],
        subSections: [
          {
            h3: "Alkoholbeständigkeit & Abriebfestigkeit auf Hochleistungs-Abfülllinien",
            body: "Parfümflakons und Spirituosenflaschen müssen beim Abfüllen und im Gebrauch konzentriertem Ethylalkohol (80-96%), ätherischen Duftölen, Eiswasser sowie dem Aneinanderreiben auf Förderbändern standhalten. STANIAX sichert dies durch:",
            bullets: [
              "Silan-Haftvermittler, die kovalente chemische Si-O-Si-Bindungen mit der Glasoberfläche eingehen.",
              "Thermisches Einbrennen bei 150-180°C oder UV-Vernetzung für maximale Bleistifthärte und Lösemittelresistenz.",
              "Präzises Abdecken des Mündungsrings (FEA 15/18/20 und Schraubgewinde), damit Zerstäuberpumpen absolut dicht schließen.",
            ],
          },
          {
            h3: "UV-Schutz für Naturkosmetik & Kompatibilität mit Siebdruck / Heißfolienprägung",
            body: "Eine deckende Lackierung schützt lichtempfindliche Kosmetikrezepturen zuverlässig vor UV-Strahlung. Gleichzeitig stellen wir unsere Lackrezepturen silikonfrei ein, sodass Druckereien direkt auf dem lackierten Flakon abriebfesten UV-Siebdruck oder Heißfolienprägung (Hot-Stamping) aufbringen können.",
          },
        ],
      },
      {
        h2: "Lackierung und Metallisierung von Keramik, Porzellan & Kerzengefäßen",
        paragraphs: [
          "Neben Verpackungsglas lackieren und metallisieren wir Keramikgefäße für Duftkerzen, Porzellanbecher, Übertöpfe und technische Keramik - mit porenfüllenden Grundierungen auf Biskuitkeramik und Silanaktivierung auf glasierten Oberflächen.",
        ],
      },
    ],
    showcase: {
      h2: "Interaktive Vorschau: 3 Veredelungseffekte für Glasflakons & Flaschen",
      subtitle:
        "Wählen Sie eine Glasoberfläche, um Lichtdurchlässigkeit, Einbrenntemperatur und Individualisierungsoptionen zu prüfen.",
      ctaLabel: "Angebot für diesen Glaseffekt anfordern →",
      options: [
        {
          id: "glass-ombre",
          label: "Ombre-Verlauf & Transparent",
          badge: "PARFÜMERIE & SKINCARE",
          title:
            "Ein- oder mehrfarbiger Ombre-Farbverlauf & transparente Tönung",
          description:
            "Fließender Farbverlauf vom intensiv gefärbten Flaschenboden bis zum kristallklaren Glas, sodass der Füllstand im Flakon sichtbar bleibt.",
          specs: [
            {
              label: "Lichtdurchlässigkeit",
              value: "Stufenlos von 10% bis 90% über die Flakonhöhe",
            },
            {
              label: "Alkoholbeständigkeit",
              value: "Voll beständig gegen 96% Ethanol & Parfümöle",
            },
            {
              label: "Weiterverarbeitung",
              value: "Bereit für Siebdruck, Tampondruck & Hot-Stamping",
            },
          ],
          previewStyle:
            "linear-gradient(180deg, rgba(30,58,138,0.95) 0%, rgba(59,130,246,0.55) 55%, rgba(226,232,240,0.2) 100%)",
        },
        {
          id: "glass-frost",
          label: "Frost-Mattierung & Soft-Touch",
          badge: "SPIRITUOSEN & KOSMETIK",
          title:
            "Säurefreier Eisglas-Effekt (Frost) & samtiger Soft-Touch auf Glas",
          description:
            "Edle, lichtstreuende Satin-Mattierung ohne gefährliche Säureätzung. Verfügbar als klassischer Naturfrost oder eingefärbt in Pastell- und Dunkeltönen.",
          specs: [
            {
              label: "Glanzgrad (60°)",
              value: "4 - 12 GU (seidenmatt mit Anti-Fingerprint-Effekt)",
            },
            {
              label: "Vernetzung",
              value: "Thermisches Einbrennen bei 150-180°C",
            },
            {
              label: "Nachhaltigkeit",
              value: "100% kompatibel mit dem Altglas-Recyclingstrom",
            },
          ],
          previewStyle:
            "linear-gradient(135deg, #cbd5e1 0%, #f1f5f9 50%, #94a3b8 100%)",
        },
        {
          id: "glass-metallic",
          label: "Vollton-Decklack & Spiegelgold/Chrom",
          badge: "PREMIUM LIMITED EDITIONS",
          title:
            "Decklackierung Piano Black / Pantone & PVD-Glasmetallisierung",
          description:
            "Vollständige Beschichtung in tiefem Deckfarbton oder im Hochvakuum mit spiegelndem Gold, Silber und Kupfer. Bietet bis zu 100% UV-Schutz.",
          specs: [
            {
              label: "UV-Lichtblockade",
              value: "Bis zu 100% Schutz für lichtempfindliche Rezepturen",
            },
            {
              label: "Technische Maskierung",
              value: "Saubere Gewindemündung (FEA / GPI) und Boden",
            },
            {
              label: "Spezialeffekt",
              value: "Halbtransparenter Spionagespiegel für Kerzengläser",
            },
          ],
          previewStyle:
            "linear-gradient(135deg, #b45309 0%, #fde047 50%, #78350f 100%)",
        },
      ],
    },
    processSection: {
      h2: "4 Prozessschritte der industriellen Glas- & Keramiklackierung",
      subtitle:
        "Ausgelegt auf kovalente Glashaftung und optische Reinheit in jeder Charge.",
      steps: [
        {
          num: "01",
          title: "Thermisch-chemische Wäsche & Flammaktivierung",
          desc: "Entfernung der Hüttengleitbeschichtung (Cold-End-Coating), Staub und Fett sowie anschließende Flammaktivierung der Silikatoberfläche.",
          param: "Restlose Entfernung von Hüttenwachsen",
        },
        {
          num: "02",
          title: "Mündungsmaskierung (Neck Masking) & Silan-Primer",
          desc: "Abdecken der Gewinde und Crimpbereiche mit Präzisionskappen und Auftrag des Organosilan-Haftvermittlers.",
          param: "Kovalente Si-O-Si-Bindung",
        },
        {
          num: "03",
          title: "Rotationsspritzen (Decklack / Ombre / Frost / PVD)",
          desc: "Auf rotierenden Spindeln applizieren wir Decklacke, Ombre-Verläufe, Frostlacke oder PVD-Metallisierungen mit exakter Schichtdickensteuerung.",
          param: "Nahtloser 360°-Farbverlauf",
        },
        {
          num: "04",
          title: "Einbrennen im Ofen (bis 180°C) & Alkoholtest",
          desc: "Thermische Aushärtung, Gitterschnitt- und 96%-Ethanol-Prüfung sowie sicheres Verpacken in Karton-Gefache.",
          param: "Abfülllinienfeste Oberfläche",
        },
      ],
    },
    marqueeSection: {
      h2: "Glas- und Keramikartikel, die wir im Werk STANIAX veredeln",
      subtitle:
        "Von exklusiven Kleinserien für Nischenmarken bis zur laufenden Großserien-Lohnbeschichtung.",
      row1: [
        "Parfümflakons (15 ml - 200 ml)",
        "Kosmetiktiegel für Cremes & Duftkerzen",
        "Spirituosen- & Weinflaschen (0,5 l / 0,7 l / 1,0 l / Magnum)",
        "Pipettenflaschen (Dropper Bottles) für Seren",
        "Leuchtengläser & Architektur-Lampenschirme",
        "Keramikgefäße für Sojawachskerzen",
        "Dekorvasen, Windlichter & Glas-Grablichter",
        "Keramikbecher & Werbeporzellan",
      ],
      row2: [
        "Ein- & mehrfarbige Ombre-Farbverläufe",
        "Säurefreies Glas-Frosten (Satin-Eisglas)",
        "Transparente Pantone- & RAL-Glaslackierung",
        "Haptische Soft-Touch-Lacke auf Flakons",
        "Vakuumvergoldung & Verchromung von Flaschen",
        "FEA-Mündungsmaskierung & Füllstand-Sichtfenster",
        "Siebdruck- & Heißfolienpräge-kompatibel",
        "Transportsichere Verpackung in Karton-Gefachen",
      ],
      b2bCards: [
        {
          badge: "PARFÜMERIE & KOSMETIKMARKEN",
          h3: "Individuelle Flakons & Tiegel schon ab kleinen Serien",
          body: "Umgehen Sie Mindestmengen von 200.000 Stück in der Glashütte. Liefern Sie Standard-Klarglas an - wir veredeln es in Ihrem Wunsch-Pantone, Ombre, Frost oder 24K Gold.",
          spec: "Vorserien-Bemusterung (Sampling) in 3-5 Werktagen",
        },
        {
          badge: "SPIRITUOSEN- & GETRÄNKEINDUSTRIE",
          h3: "Flaschenveredelung für Sondereditionen & Premium-Marken",
          body: "Wir lackieren und metallisieren Wodka-, Gin-, Likör- und Sektflaschen mit geprüfter Eiswasserfestigkeit (Ice-Bucket-Test) und Abriebschutz.",
          spec: "Freibleibende Sichtfenster und Etikettenfelder möglich",
        },
        {
          badge: "KERZEN, LEUCHTEN & KERAMIK",
          h3: "Hitzebeständige Beschichtungen für Kerzen- & Lampengläser",
          body: "Unsere bis 180°C eingebrannten Lacke vergilben nicht und entwickeln keine Gerüche bei Erwärmung durch Kerzenflammen oder LED-Module.",
          spec: "Auch als halbtransparenter Innenspiegel realisierbar",
        },
      ],
    },
    caseStudiesSection: {
      h2: "Referenzen Glas- & Keramiklackierung (Mit Lupe begutachten)",
      subtitle:
        "Prüfen Sie die Brillanz der Farbverläufe und die saubere Mündungsmaskierung unter der Lupe.",
      items: [
        {
          badge: "PARFÜMFLAKONS & SERUMFLASCHEN",
          h3: "Dekorative Lackierung & Metallisierung von Kosmetikglas",
          desc: "Kombination aus deckenden, metallischen und transparenten Lacken mit exakt maskierten FEA-Hälsen für Zerstäuber und Pipetten.",
          param: "96%-Ethanol-Wisch- & Tauchtest bestanden",
          imageKey: "glassPaint1",
          alt: "Lackierte Glasflakons und Kosmetikfläschchen im Werk STANIAX",
        },
        {
          badge: "OMBRE-VERLÄUFE & TRANSPARENTLACK",
          h3: "Fließende Farbverläufe auf konturierten Glasverpackungen",
          desc: "Thermisch eingebrannter organischer Glaslack mit kristallklarer Farbtiefe ohne Schleier oder Orangenhaut.",
          param: "Haftung nach Wasserlagerung: 5B (ISO 2409)",
          imageKey: "glassPaint2",
          alt: "Glasverpackungen mit Ombre-Farbverlauf und transparenter Lackierung bei STANIAX",
        },
        {
          badge: "B2B-SERIENFERTIGUNG FÜR PREMIUMMARKEN",
          h3: "Hochglanz- und Satin-Oberflächen auf Verpackungsglas",
          desc: "Reproduzierbare Serienlackierung mit Farbprüfung unter D65-Normlicht und Verpackung in Zellkartonagen.",
          param: "100% geeignet für Heißfolienprägung & Siebdruck",
          imageKey: "glassPaint3",
          alt: "Serie lackierter Glasflaschen und Kosmetiktiegel bereit zur Abfüllung",
        },
      ],
    },
    faqSection: {
      h2: "Häufige Fragen zur Glas- und Keramiklackierung (FAQ)",
      subtitle:
        "Antworten für Verpackungseinkäufer, Markeninhaber, Glashändler und Druckereien.",
      items: [
        {
          q: "Ist der Lack auf Parfümflakons beständig gegen auslaufenden Alkohol und Duftöle?",
          a: "Ja. Für Parfümerieglas verwenden wir silanmodifizierte Einbrenn- und UV-Lacksysteme, die bei bis zu 180°C vernetzt werden. Nach vollständiger Aushärtung erweicht oder verfärbt sich die Schicht selbst bei direktem Kontakt mit 96%igem Ethanol oder Parfümöl nicht.",
        },
        {
          q: "Kann auf den bei STANIAX lackierten Flaschen anschließend Siebdruck oder Heißfolienprägung aufgebracht werden?",
          a: "Ja. Unsere Glaslacke sind speziell auf nachfolgende Veredelungen (UV- und 2K-Siebdruck, Tampondruck, Hot-Stamping sowie Selbstklebeetiketten) abgestimmt. Teilen Sie uns die geplante Bedruckung bei der Anfrage mit, damit wir ein silikonfreies System mit optimaler Oberflächenspannung wählen.",
        },
        {
          q: "Warum müssen fabrikneue Flaschen aus der Glashütte vor dem Lackieren speziell gewaschen werden?",
          a: "Glashütten versehen die Außenseite neuer Flaschen mit einer unsichtbaren Gleitschicht (Cold-End-Coating, z. B. Polyethylenwachs), damit die Flaschen auf den Förderbändern nicht verkratzen. Diese Wachsschicht verhindert jede Lackhaftung. Bei STANIAX entfernen wir sie thermisch-chemisch und aktivieren das Glas vor dem Lackieren.",
        },
        {
          q: "Wie hoch ist die Mindestbestellmenge (MOQ) bei der Glaslackierung?",
          a: "Wir realisieren sowohl kleine Pilot- und Sondereditionen (ab wenigen Hundert Stück) als auch Großserien von mehreren Zehntausend Flakons. Vor Serienstart erstellen wir Freigabemuster auf Ihrem Originalglas.",
        },
        {
          q: "Können Sie das Flaschengewinde abdecken oder ein freies Sichtfenster lassen?",
          a: "Ja. Durch unsere Standard-Mündungsmaskierung (Neck Masking) bleiben Schraubgewinde und FEA-Crimpringe komplett lackfrei und maßhaltig. Ebenso maskieren wir Flaschenböden oder vertikale Füllstand-Sichtfenster.",
        },
        {
          q: "Eignen sich Ihre Lacke auch für Duftkerzengläser, die im Betrieb heiß werden?",
          a: "Ja. Für Kerzengläser und Keramikgefäße setzen wir bis 180°C eingebrannte Thermolacke ein, die sich beim Abbrennen der Kerze weder verfärben noch Gerüche abgeben.",
        },
      ],
    },
    quoteSection: {
      h2: "Kostenloses Angebot für Glas- & Keramiklackierung anfordern",
      intro:
        "Nennen Sie uns die Art des Gefäßes (Parfümflakon, Tiegel, Flasche, Keramik), Volumen/Maße, den gewünschten Effekt (Ombre, Frost, Decklack RAL/Pantone, Metallic) und die Stückzahl.",
      projectTypes: [
        "Parfümflakons & Kosmetiktiegel lackieren",
        "Spirituosen- & Getränkeflaschen lackieren / metallisieren",
        "Kerzenglas, Leuchtenglas & Grablichter beschichten",
        "Keramik & Porzellan lackieren / metallisieren",
        "Mustererstellung (Sampling) auf Kundenglas",
      ],
      submitLabel: "Anfrage zur Glaslackierung senden",
    },
    seeAlsoSection: {
      h2: "Ergänzende Verpackungstechnologien bei STANIAX",
      links: [
        {
          path: "/de/kunststoff-verchromen",
          anchorText:
            "Kunststoff verchromen & vergolden für Parfümkappen und Deckel",
          badge: "KAPPEN & VERSCHLÜSSE",
          desc: "Kombinieren Sie Ihren lackierten Glasflakon mit einer passend vergoldeten oder verchromten PP/ABS-Kappe.",
        },
        {
          path: "/de/vakuummetallisierung",
          anchorText:
            "PVD Vakuummetallisierung auf Glas & Keramik für Spiegeleffekte",
          badge: "SPIEGELGLAS PVD",
          desc: "Erfahren Sie mehr über das Aufdampfen von Reinstaluminium auf Flaschen und Glasteile.",
        },
        {
          path: "/de/news/vakuummetallisierung-revolutioniert-die-kosmetikbranche",
          anchorText:
            "Artikel: Trends bei der Veredelung von Kosmetik- und Parfümverpackungen",
          badge: "BRANCHENWISSEN",
          desc: "Wie führende Kosmetikmarken Glaslackierung und PVD-Metallisierung kombinieren.",
        },
      ],
    },
    schemaServiceType:
      "Industrielle und dekorative Glaslackierung und Keramikbeschichtung",
  },

  "spray-painting": {
    navLabel: "Spritzlackierung",
    shortSummary:
      "Industrielle Spritzlackierung & Industrielackierung (2K-PUR, Epoxid, Acryl) in allen RAL- und NCS-Farben auf Metall, Druckguss, Kunststoff und Komposit.",
    metaTitle: "Spritzlackierung & Industrielackierung RAL/NCS | STANIAX",
    metaDesc:
      "Industrielle Spritzlackierung (Nasslackierung) und Industrielackierung bei STANIAX. Metalle, Alu-/ZnAl-Druckguss, Kunststoffe & Komposite in RAL und NCS.",
    breadcrumbLabel: "Spritzlackierung & Industrielackierung",
    heroBadge:
      "Industrielle Nasslackiererei · 213 RAL-Classic-Töne + NCS · Metall & Kunststoff",
    h1: "Industrielle Spritzlackierung & Nasslackierung in RAL und NCS",
    lead: "Die Industrielackiererei STANIAX in Józefów bei Warschau bietet präzise Spritzlackierung (Nasslackierung) für Metallbauteile, Aluminium- und Zinkdruckguss (ZnAl), Faserverbundwerkstoffe, technische Kunststoffe sowie MDF. Im Gegensatz zur Hochtemperatur-Pulverbeschichtung ermöglicht unsere Nasslackiertechnik die Beschichtung hitzeempfindlicher Baugruppen, liefert glatte Class-A-Oberflächen ohne Orangenhaut und garantiert 100% identische RAL-, NCS- oder Pantone-Farbtöne auf Metall- und Kunststoffteilen.",
    ctaPrimaryLabel: "Spritzlackierung anfragen →",
    ctaSecondaryLabel: "Interaktiven RAL- & Glanzgrad-Konfigurator öffnen ↓",
    heroImageKey: "sprayPaintHero",
    heroImageAlt:
      "Industrielle Spritzlackierung technischer Bauteile in der Lackierkabine von STANIAX",
    metrics: [
      {
        value: 213,
        label: "RAL-Classic-Standardfarben",
        detail:
          "Plus 1.950 NCS-Farbtöne, Pantone-Abmusterung und individuelle Farbrezeptierung",
      },
      {
        value: 1200,
        suffix: " mm",
        label: "Maximale Bauteillänge",
        detail:
          "Lackierung von millimetergroßen Präzisionsteilen bis zu 1,2 m langen Gehäusen und Profilen",
      },
      {
        value: 48,
        suffix: " h",
        label: "Express-Modus für Prototypen",
        detail:
          "Schnelle Farbwechsel in der Kabine für Vorserien, Muster und eilige B2B-Aufträge",
      },
    ],
    scopeSection: {
      h2: "Kapazitäten unserer Industrielackiererei - Werkstoffe & Lacksysteme",
      intro:
        "Die industrielle Nass-Spritzlackierung ist überall dort unverzichtbar, wo eine Pulverbeschichtung wegen der 200°C Einbrenntemperatur, der dicken Schichtstärke an feinen Gewinden oder fehlender Effekte wie Piano Black, Echt-Metallic oder Soft-Touch ausscheidet.",
      cardTitle: "Leistungsumfang der Spritzlackierung bei STANIAX",
      cardSubtitle:
        "Mehrschichtige Korrosionsschutz- und Dekorlackierungen für Maschinenbau, Elektronik, Lichttechnik, Wehrtechnik und POS",
      highlights: [
        "Lackierung von Eisen- und Nichteisenmetallen: Stahl, Edelstahl, verzinkter Stahl, Aluminium, ZnAl-Druckguss und Messing (mit 2K-Epoxid- und Reaktiv-Wash-Primern).",
        "Lackierung von Verbundwerkstoffen (GFK, CFK Carbon, Epoxidharz), MDF sowie technischen Spritzguss-Kunststoffen.",
        "Einsatz industrieller Zweikomponentensysteme (2K): Polyurethan (PUR), Epoxid (EP), Acryl, Wasserlacke sowie UV-härtende Systeme.",
        "Vier Glanz- und Strukturgrade für jeden RAL-/NCS-Farbton: Hochglanz (>85 GU), Seidenmatt / Satin (25-45 GU), Tiefmatt (<10 GU) und Industrie-Feinstruktur.",
        "Präzises technisches Maskieren nach CAD-Zeichnung: Schutz von Gewindebohrungen, EMV-Erdungsflächen, Lagersitzen und Klebezonen.",
        "Dokumentierte Qualitätsprüfung: Trockenschichtdickenmessung (DFT nach ISO 2808), Gitterschnitttest (ISO 2409) sowie Glanz- und Farbtonkontrolle.",
      ],
      table: {
        caption:
          "Technischer Vergleich: Nass-Spritzlackierung (STANIAX) vs. Pulverbeschichtung",
        headers: [
          "Technisches Kriterium",
          "Nass-Spritzlackierung (STANIAX)",
          "Klassische Pulverbeschichtung",
          "B2B-Mehrwert für Ihr Produkt",
        ],
        rows: [
          [
            "Einbrenn- / Trocknungstemperatur",
            "20 - 80°C (Kunststoff, Komposit, Baugruppen) bzw. bis 160°C (Metall/Glas)",
            "180 - 200°C (nur hitzebeständige Metalle)",
            "Lackierung von Kunststoffen, GFK, geklebten Baugruppen und porösem ZnAl-Guss ohne Ausgasungsblasen",
          ],
          [
            "Schichtdicke (DFT) & Detailtreue",
            "15 - 45 µm (dünne, konturenscharfe Schicht)",
            "60 - 120 µm (dicke Schicht rundet Kanten ab)",
            "Erhalt scharfer Kanten, feiner Gravuren, Passungen und Gewinde ohne Lackanhäufung",
          ],
          [
            "Oberflächenglätte & Haptik",
            "Class-A-Verlauf (Piano Black, brillante Metallics, samtiger Soft-Touch)",
            "Sichtbare „Orangenhaut“-Struktur",
            "Optik auf Automobil- und Premium-Elektronikniveau",
          ],
          [
            "Farbtonflexibilität & Multimaterial",
            "Jeder RAL-, NCS-, Pantone- oder Musterfarbton ab 1 Liter anmischbar",
            "Begrenzt auf verfügbare Pulverkartons",
            "100% identischer Farbton auf Stahl-, Aluminium- und Kunststoffteilen desselben Geräts",
          ],
        ],
        footnote:
          "Wir übernehmen sowohl Einzelserien im Lohnauftrag als auch die laufende Serienbelieferung für Maschinen-, Leuchten- und Elektronikhersteller.",
      },
    },
    editorialSections: [
      {
        h2: "Wann ist die industrielle Spritzlackierung (Nasslack) besser als Pulverbeschichten?",
        paragraphs: [
          "Konstrukteure und Einkäufer entscheiden sich vor allem in zwei Fällen bewusst für die Nass-Spritzlackierung bei STANIAX: Erstens bei Gehäusen aus Zinkdruckguss (ZnAl) oder Aluminiumdruckguss mit Mikroporen. Im 200°C heißen Pulverofen dehnt sich eingeschlossene Luft im Gussteil aus und erzeugt Blasen und Krater („Ausgasen“). Bei unserer 2K-PUR-Nasslackierung härtet der Lack bei schonenden 60-80°C blasenfrei aus.",
          "Zweitens bei Geräten und Leuchten, die aus Aluminiumprofilen, Stahlblechen und ABS/PC-Kunststoffabdeckungen bestehen und im montierten Zustand exakt denselben NCS- oder RAL-Farbton und Glanzgrad aufweisen müssen.",
        ],
        subSections: [
          {
            h3: "2K-Korrosionsschutz- & Haftprimer für Aluminium, Edelstahl und ZnAl-Guss",
            body: "Nichteisenmetalle und Edelstahl bilden passive Oxidschichten, auf denen Standardlacke nicht haften. Unser Vorbehandlungsprozess umfasst:",
            bullets: [
              "Mehrstufige chemische Entfettung und mechanisches Anschleifen/Strahlen zur Oberflächenaktivierung.",
              "Zweikomponentige Epoxidgrundierungen (2K-EP) und Reaktivprimer (Wash Primer) für Korrosionsschutzklassen C2-C4 und Haftwert 5B.",
              "Spritzfüller-Ausgleich von Gussporen und Schleifspuren auf Aluguss und GFK-Laminaten vor dem Decklackauftrag.",
            ],
          },
          {
            h3: "Wirtschaftliche Kleinserien & schnelle Farbwechsel nach RAL / NCS / Pantone",
            body: "Da wir Flüssiglacke im eigenen Mischraum litergenau auftragsbezogen anmischen, lackieren wir auch Kleinserien von 10 oder 50 Bauteilen in individuellen NCS-Architekturfarben oder Firmen-Pantone-Tönen wirtschaftlich und kurzfristig.",
          },
        ],
      },
      {
        h2: "Qualitätskontrolle, CAD-Maskierung & sichere B2B-Verpackung",
        paragraphs: [
          "Jede gefertigte Serie durchläuft eine Schichtdickenmessung (DFT), Glanzgradprüfung und Sichtkontrolle der A-Sichtflächen. Die fertigen Bauteile werden in PE-Schaumfolie, Luftpolsterfolie oder kundenspezifischen Mehrwegbehältern verpackt.",
        ],
      },
    ],
    showcase: {
      h2: "Interaktiver Konfigurator: 21 RAL-Classic-Farben + 4 Oberflächenglanzgrade",
      subtitle:
        "Wählen Sie einen RAL-Farbton und den gewünschten Glanz- oder Strukturgrad aus, um die Vorschau zu prüfen und Ihre Auswahl direkt in das Anfrageformular zu übernehmen.",
      ctaLabel: "Gewählten RAL-Farbton & Glanzgrad ins Formular übernehmen →",
      ralColors: RAL_CLASSIC_21_DE,
      finishOptions: [
        {
          id: "gloss",
          label: "Hochglanz (High Gloss)",
          gloss: "85 - 95 GU",
          desc: "Tiefe Spiegelbrillanz und leicht zu reinigende Oberfläche für Dekorteile und Premium-Gehäuse.",
        },
        {
          id: "satin",
          label: "Seidenmatt / Satin",
          gloss: "25 - 45 GU",
          desc: "Universellste Industrieoberfläche: verbindet hohe Kratzfestigkeit mit edlem Seidenglanz.",
        },
        {
          id: "matte",
          label: "Tiefmatt (Deep Matte)",
          gloss: "4 - 10 GU",
          desc: "Moderne, komplett reflexionsfreie Oberfläche für Architektur, Lichttechnik und Elektronik.",
        },
        {
          id: "structure",
          label: "Feinstruktur (Fine Texture)",
          gloss: "8 - 15 GU",
          desc: "Feinkörnige Struktur, die Bearbeitungsspuren, Schweißnähte und Gussporen zuverlässig kaschiert.",
        },
      ],
    },
    processSection: {
      h2: "Der 4-stufige Prozess der industriellen Spritzlackierung",
      subtitle:
        "Von der chemisch-mechanischen Untergrundvorbereitung bis zur dokumentierten Endkontrolle.",
      steps: [
        {
          num: "01",
          title: "Entfetten, Anschleifen & CAD-Maskierung",
          desc: "Entfernung von Bearbeitungsölen, Aktivierung des Untergrunds und Abdecken von Gewinden, EMV-Kontaktflächen und Passsitzen mit Silikonstopfen.",
          param: "Maskierung nach 2D-/CAD-Zeichnung",
        },
        {
          num: "02",
          title: "Korrosionsschutz- / Haftgrundierung (2K-EP / Wash Primer)",
          desc: "Applikation von 2K-Epoxidgrundierung, Reaktivprimer oder Füller passend zu Stahl, Aluminium, ZnAl-Guss, Komposit oder Kunststoff.",
          param: "Korrosionsschutz & Haftung 5B",
        },
        {
          num: "03",
          title: "Decklack-Spritzapplikation (RAL / NCS / Spezialeffekt)",
          desc: "In der Überdruck-Lackierkabine tragen wir 2K-Polyurethan- oder Acryllacke im gewählten Farbton, Glanzgrad oder als Strukturlack auf.",
          param: "Homogene Schichtdicke 25-60 µm DFT",
        },
        {
          num: "04",
          title: "Ofentrocknung, Demaskierung & DFT-Messprotokoll",
          desc: "Temperaturgesteuerte Aushärtung, sauberes Entfernen der Maskierungen und Schichtdicken- sowie Haftungsprüfung vor dem Versand.",
          param: "Prüfprotokoll der Trockenschichtdicke",
        },
      ],
    },
    marqueeSection: {
      h2: "Bauteile & Werkstoffe in der Spritzlackiererei STANIAX",
      subtitle:
        "Industrielle Lohnlackierung für Fertigungsbetriebe aus Polen, Deutschland und Österreich.",
      row1: [
        "Aluminium- & Zinkdruckgussteile (ZnAl)",
        "Elektronikgehäuse, Schaltschränke & Steuerungen",
        "Architektur- & Industrieleuchten",
        "Maschinenverkleidungen, Schutzhauben & Griffe",
        "Edelstahl-, Stahl- & Messingkomponenten",
        "GFK-Glasfaserlaminate & CFK-Carbonbauteile",
        "3D-Leuchtbuchstaben, Werbepylone & POS-Aufsteller",
        "Möbelfronten & Beschläge aus MDF, Metall & Kunststoff",
      ],
      row2: [
        "Komplette RAL-Classic- & RAL-Design-Palette",
        "NCS-Architekturfarben & Pantone-Abmusterung",
        "2K-Polyurethan- & 2K-Epoxid-Flüssiglacke",
        "Feinstruktur- & Hammerschlag-Industrielacke",
        "Soft-Touch-Beschichtung auf Metall & Kunststoff",
        "Metallic-, Perleffekt- & Eloxal-Lackierungen",
        "Maskierung von Gewinden & EMV-Erdungsflächen",
        "Express-Prototypenlackierung in 48h",
      ],
      b2bCards: [
        {
          badge: "MASCHINENBAU & ELEKTRONIK",
          h3: "Blasenfreie Lackierung von Al-/ZnAl-Guss & Präzisionsgehäusen",
          body: "Wir lackieren Druckgussgehäuse, Kühlkörper und Deckel bei niedrigen Einbrenntemperaturen ohne Ausgasungsblasen - inklusive Gewinde- und Dichtflächenmaskierung.",
          spec: "Fertigung streng nach 2D-/3D-Kundenzeichnung",
        },
        {
          badge: "LICHTTECHNIK & ARCHITEKTUR",
          h3: "Wunschfarbtöne nach RAL / NCS schon ab kleinen Losgrößen",
          body: "Individualisieren Sie Leuchtengehäuse und Profile in Tiefmatt, Satin, Messingoptik oder Architekten-NCS-Tönen ohne hohe Pulver-Mindestmengen.",
          spec: "Identischer Farbton auf Alu- und Kunststoffbauteilen",
        },
        {
          badge: "WERBETECHNIK, POS & DESIGN",
          h3: "Class-A-Oberflächen auf GFK, MDF & 3D-Modellen",
          body: "Wir füllern, schleifen und lackieren Messemodelle, 3D-Buchstaben, Verkaufsdisplays und Objektmöbel in Spiegelglanz oder Samtmatt.",
          spec: "Kabinenkapazität für Bauteile bis 1200 mm Länge",
        },
      ],
    },
    caseStudiesSection: {
      h2: "Referenzen Spritzlackierung (Oberfläche unter der Lupe prüfen)",
      subtitle:
        "Begutachten Sie Lackverlauf und Strukturqualität auf Metall- und Verbundbauteilen.",
      items: [
        {
          badge: "INDUSTRIEGEHÄUSE",
          h3: "2K-PUR-Spritzlackierung von technischen Druckgussgehäusen",
          desc: "Mehrschichtiger Epoxid-Polyurethan-Aufbau auf Metallguss mit präziser Abdeckung aller Gewindedom- und Flanschflächen.",
          param: "Gesamtschichtdicke DFT: 55 µm · Haftung 5B",
          imageKey: "sprayPaint1",
          alt: "Industrielle Spritzlackierung technischer Gehäuse und Gussteile bei STANIAX",
        },
        {
          badge: "DEKOR- & LEUCHTENTEILE",
          h3: "Hochglanz- und Metallic-Lackierung in Sonderfarbtönen",
          desc: "Metallic-Basislack versiegelt mit 2K-High-Solid-Klarlack für höchste optische Tiefe ohne Orangenhaut.",
          param: "Glanzgrad (60°): >92 GU",
          imageKey: "sprayPaint2",
          alt: "Bauteile nach der Hochglanz- und Metallic-Spritzlackierung bei STANIAX",
        },
        {
          badge: "SERIENFERTIGUNG AM GEHÄNGE",
          h3: "Serien-Spritzlackierung komplexer 3D-Bauteilgeometrien",
          desc: "Gleichmäßige Beschichtung schwer zugänglicher Rippen und Kanten auf drehbaren Spezialaufnahmen.",
          param: "100% RAL-/NCS-Farbtonkonstanz in der Serie",
          imageKey: "sprayPaint3",
          alt: "Serienmäßige industrielle Spritzlackierung im Werk STANIAX Józefów",
        },
      ],
    },
    faqSection: {
      h2: "Häufige Fragen zur industriellen Spritzlackierung (FAQ)",
      subtitle:
        "Antworten für Konstrukteure, Fertigungsleiter und technische Einkäufer.",
      items: [
        {
          q: "Worin liegt der Vorteil der Nass-Spritzlackierung gegenüber der Pulverbeschichtung?",
          a: "Die Nass-Spritzlackierung trocknet bei niedrigen Temperaturen (20-80°C). Dadurch lassen sich auch Kunststoffe, GFK/CFK-Komposite, MDF, geklebte Baugruppen sowie poröse ZnAl-/Alu-Druckgussteile beschichten, die im 200°C-Pulverofen schmelzen oder ausgasen würden. Zudem erzeugt Nasslack dünnere Schichten (15-45 µm), hält feine Gewinde frei und ermöglicht echtes Piano Black sowie Soft-Touch-Oberflächen.",
        },
        {
          q: "Welche Werkstoffe lackieren Sie in Ihrer Spritzlackiererei?",
          a: "Wir beschichten Stahl, verzinkten Stahl, Edelstahl, Aluminium, Zinkdruckguss (ZnAl), Messing, Kupfer, technische Kunststoffe (ABS, PC, PP, PA, PMMA, PS), Glasfaser- und Carbon-Komposite, PU-/Epoxidharze, Glas, Keramik und MDF.",
        },
        {
          q: "Übernehmen Sie auch das Abdecken (Maskieren) von Gewinden und EMV-Kontaktflächen?",
          a: "Ja. Anhand Ihrer 2D-/CAD-Zeichnungen setzen wir Silikonstopfen, Konuskappen, Hochtemperaturbänder und gestanzte Masken ein, damit Gewinde, Passbohrungen und EMV-Masseflächen absolut lackfrei bleiben.",
        },
        {
          q: "Können Sie auch Kleinserien in einem speziellen NCS- oder Pantone-Farbton lackieren?",
          a: "Ja. In unserer eigenen Farbmischanlage rezeptieren wir jeden Farbton nach RAL Classic, RAL Design, NCS, Pantone oder nach Ihrem physischen Musterbauteil bereits ab 1 Liter Lackmenge.",
        },
        {
          q: "Wie groß dürfen die Bauteile für die Spritzlackierkabine maximal sein?",
          a: "Wir lackieren sowohl millimetergroße Kleinteile auf Spezialgestellen als auch Gehäuse, Profile und Schweißbaugruppen bis zu einer Länge von 1200 mm.",
        },
        {
          q: "Wie lang ist die Lieferzeit bei Lohnlackieraufträgen?",
          a: "Die reguläre Durchlaufzeit für Serienaufträge liegt bei 4-8 Werktagen. Für eilige Prototypen, Messemodelle oder Engpässe bieten wir nach Absprache einen 48-72h-Express-Service an.",
        },
      ],
    },
    quoteSection: {
      h2: "Angebot für industrielle Spritzlackierung (RAL / NCS) anfordern",
      intro:
        "Teilen Sie uns Werkstoff, Abmessungen, RAL-/NCS-Farbnummer, Glanzgrad (Hochglanz, Seidenmatt, Tiefmatt, Struktur) und Stückzahl mit. Ein oben im Konfigurator gewählter RAL-Ton wird automatisch übernommen.",
      projectTypes: [
        "Spritzlackierung von Metall & Druckguss (Al, ZnAl, Stahl)",
        "Gehäuse- & Bauteillackierung inkl. CAD-Maskierung",
        "Lackierung von GFK/CFK-Kompositen, MDF & 3D-Modellen",
        "Multimaterial-Baugruppen (Metall + Kunststoff im selben Farbton)",
        "Express-Prototypenlackierung / Farbabmusterung",
      ],
      submitLabel: "Anfrage an die Industrielackiererei senden",
    },
    seeAlsoSection: {
      h2: "Weitere Lackier- und PVD-Technologien von STANIAX",
      links: [
        {
          path: "/de/kunststofflackierung",
          anchorText:
            "Industrielle Kunststofflackierung - Soft-Touch & Piano Black",
          badge: "KUNSTSTOFFLACKIERUNG",
          desc: "Spezialisierte Lacksysteme für Spritzgussteile aus ABS, PC, PP und PA.",
        },
        {
          path: "/de/glas-und-keramiklackierung",
          anchorText:
            "Glaslackierung & Keramikbeschichtung - Ombre, Frost & Flakons",
          badge: "GLAS & KERAMIK",
          desc: "Thermisch eingebrannte Dekor- und Schutzlacke auf Glas und Keramik.",
        },
        {
          path: "/de/vakuummetallisierung",
          anchorText:
            "PVD Vakuummetallisierung - Spiegelchrom- & Goldbeschichtungen",
          badge: "PVD-METALLISIERUNG",
          desc: "Kombinieren Sie Spritzlackierung mit Hochvakuumbedampfung für echte Spiegelmetall-Effekte.",
        },
      ],
    },
    schemaServiceType:
      "Industrielle Spritzlackierung und Nasslackierung nach RAL und NCS",
  },
};
