import type {
  ServiceId,
  ServiceLocaleContent,
  RalColorOption,
} from "./services-types";

export const RAL_CLASSIC_21: RalColorOption[] = [
  {
    code: "RAL 9005",
    name: "Głęboka czerń (Jet Black)",
    hex: "#0E0E10",
    category: "Czerń / Szarość",
  },
  {
    code: "RAL 9016",
    name: "Biel drogowa (Traffic White)",
    hex: "#F1F0EA",
    category: "Biel",
  },
  {
    code: "RAL 9006",
    name: "Białe aluminium (White Aluminium)",
    hex: "#A1A1A0",
    category: "Metalik",
  },
  {
    code: "RAL 9007",
    name: "Szare aluminium (Grey Aluminium)",
    hex: "#878581",
    category: "Metalik",
  },
  {
    code: "RAL 7016",
    name: "Szary antracytowy (Anthracite Grey)",
    hex: "#383E42",
    category: "Czerń / Szarość",
  },
  {
    code: "RAL 7021",
    name: "Czarno-szary (Black Grey)",
    hex: "#2F3234",
    category: "Czerń / Szarość",
  },
  {
    code: "RAL 7035",
    name: "Jasnoszary przemysłowy (Light Grey)",
    hex: "#C5C7C4",
    category: "Czerń / Szarość",
  },
  {
    code: "RAL 7024",
    name: "Szary grafitowy (Graphite Grey)",
    hex: "#45494E",
    category: "Czerń / Szarość",
  },
  {
    code: "RAL 5002",
    name: "Błękit ultramarynowy (Ultramarine)",
    hex: "#1E2D6E",
    category: "Błękit",
  },
  {
    code: "RAL 5005",
    name: "Błękit sygnałowy (Signal Blue)",
    hex: "#154889",
    category: "Błękit",
  },
  {
    code: "RAL 5010",
    name: "Błękit gencjanowy (Gentian Blue)",
    hex: "#13447C",
    category: "Błękit",
  },
    { code: 'RAL 5015', name: 'Błękit niebieski (Sky Blue)', hex: '#2874B2', category: 'Błękit' },
  {
    code: "RAL 3000",
    name: "Czerwień ognista (Flame Red)",
    hex: "#A72920",
    category: "Czerwień",
  },
  {
    code: "RAL 3020",
    name: "Czerwień drogowa (Traffic Red)",
    hex: "#C1121C",
    category: "Czerwień",
  },
  {
    code: "RAL 2004",
    name: "Pomarańcz czysty (Pure Orange)",
    hex: "#E25303",
    category: "Pomarańcz / Żółć",
  },
  {
    code: "RAL 1021",
    name: "Żółty rzepakowy (Rape Yellow)",
    hex: "#E6B800",
    category: "Pomarańcz / Żółć",
  },
  {
    code: "RAL 1036",
    name: "Złoto perłowe (Pearl Gold)",
    hex: "#8A6F3E",
    category: "Metalik",
  },
  {
    code: "RAL 8017",
    name: "Brąz czekoladowy (Chocolate Brown)",
    hex: "#442F29",
    category: "Brąz / Miedź",
  },
  {
    code: "RAL 8029",
    name: "Miedź perłowa (Pearl Copper)",
    hex: "#7F4031",
    category: "Metalik",
  },
  {
    code: "RAL 6005",
    name: "Zieleń mchu (Moss Green)",
    hex: "#114232",
    category: "Zieleń",
  },
  {
    code: "RAL 6018",
    name: "Zieleń żółtawa (Yellow Green)",
    hex: "#57A639",
    category: "Zieleń",
  },
];

export const SERVICES_PL: Record<ServiceId, ServiceLocaleContent> = {
  reflectors: {
    navLabel: "Regeneracja reflektorów",
    shortSummary:
      "Napylanie próżniowe odbłyśników (od 150 zł), polerowanie kloszy z powłoką UV oraz naprawa lamp Xenon, Bi-Xenon, LED i klasyków.",
    metaTitle: "Regeneracja Reflektorów i Odbłyśników od 150 zł | STANIAX",
    metaDesc:
      "Regeneracja reflektorów i lamp samochodowych w Józefowie k. Warszawy i wysyłkowo. Metalizacja próżniowa odbłyśników od 150 zł, polerowanie kloszy + UV.",
    breadcrumbLabel: "Regeneracja reflektorów i odbłyśników",
    heroBadge: "Józefów k. Warszawy + wysyłka kurierska 24/48h w całej Polsce",
    h1: "Regeneracja reflektorów i odbłyśników samochodowych metodą próżniową",
    lead: "Przywracamy fabryczną sprawność świetlną reflektorom samochodowym, motocyklowym oraz zabytkowym. Nasza regeneracja reflektorów i regeneracja lamp samochodowych w zakładzie STANIAX w Józefowie pod Warszawą polega na usunięciu wypalonej powłoki, nałożeniu lakieru podkładowego wysokotemperaturowego i próżniowym napyleniu czystego aluminium (99,9% Al) z warstwą ochronną krzemoorganiczną.",
    ctaPrimaryLabel: "Wyceń regenerację reflektorów →",
    ctaSecondaryLabel: "Sprawdź cennik i zakres naprawy ↓",
    heroImageKey: "reflectorsHero",
    heroImageAlt:
      "Zregenerowane odbłyśniki reflektorów samochodowych z lustrzaną powłoką aluminium PVD w zakładzie STANIAX",
    metrics: [
      {
        value: 150,
        suffix: " zł",
        label: "Regeneracja odbłyśnika od",
        detail:
          "Cena netto za metalizację próżniową pojedynczego zdemontowanego odbłyśnika",
      },
      {
        value: 98,
        suffix: "%",
        label: "Odbicie światła powłoki Al",
        detail:
          "Współczynnik refleksji zwierciadlanej napylonego aluminium w próżni PVD",
      },
      {
        value: 3,
        suffix: " dni",
        label: "Czas realizacji wysyłkowej",
        detail:
          "Standardowy czas metalizacji odbłyśników nadesłanych kurierem lub do Paczkomatu",
      },
    ],
    scopeSection: {
      h2: "Zakres regeneracji lamp samochodowych i cennik usług",
      intro:
        "Każda naprawa lamp samochodowych rozpoczyna się od diagnostyki stanu powierzchni odbłyśnika soczewki lub reflektora swobodnego (FF), szczelności obudowy oraz przejrzystości klosza poliwęglanowego. Realizujemy zarówno metalizację samych dostarczonych odbłyśników, jak i kompleksową regenerację całych reflektorów H4/H7, Xenon D1S/D2S/D3S, Bi-Xenon, skrętnych AFS oraz modułów Bi-LED.",
      cardTitle: "Co obejmuje profesjonalna regeneracja reflektorów w STANIAX?",
      cardSubtitle:
        "Pełny proces technologiczny zgodny z reżimem fabrycznym producentów oświetlenia Hella, Valeo, Bosch, Koito i AL",
      highlights: [
        "Chemiczne usunięcie starej, zmatowiałej lub wypalonej warstwy aluminium i utlenionego podkładu bez naruszania geometrii czaszy.",
        "Aplikacja termoutwardzalnego lakieru podkładowego (Base Coat) odpornego na temperatury pracy żarników ksenonowych do 220°C.",
        "Metalizacja próżniowa PVD czystym aluminium 99,9% w komorze wysokiej próżni (10⁻⁴ mbar) dająca efekt lustra optycznego.",
        "Zabezpieczenie powierzchni warstwą ochronną (Top Coat / polimeryzacja plazmowa) chroniącą przed utlenianiem i wilgocią.",
        "Wieloetapowe polerowanie reflektorów i kloszy poliwęglanowych (PC) wraz z aplikacją trwałego lakieru lub powłoki kwarcowej UV.",
        "Rozklejanie i ponowne hermetyczne sklejanie lamp na nowym szczeliwie butylowym lub kleju twardym z testem ciśnieniowym szczelności.",
        "Regeneracja i metalizacja odbłyśników do aut zabytkowych (klasyków, youngtimerów), motocykli, ciągników siodłowych i maszyn rolniczych.",
      ],
      table: {
        caption:
          "Orientacyjny cennik regeneracji reflektorów i odbłyśników samochodowych (STANIAX Józefów / wysyłkowo)",
        headers: [
          "Wariant usługi",
          "Zakres prac technologicznych",
          "Czas realizacji",
          "Cena orientacyjna",
        ],
        rows: [
          [
            "Metalizacja samego odbłyśnika (dostarczonego luzem)",
            "Zmycie starej powłoki, podkład wysokotemperaturowy, napylanie próżniowe Al 99,9%, zabezpieczenie antykorozyjne",
            "2–3 dni robocze",
            "150 – 300 zł / szt.",
          ],
          [
            "Kompleksowa regeneracja reflektora standardowego (H7 / Xenon / Bi-Xenon)",
            "Rozklejenie lampy, regeneracja odbłyśnika soczewki, czyszczenie wnętrza i soczewki, polerowanie klosza + powłoka UV, hermetyzacja",
            "3–5 dni roboczych",
            "350 – 700 zł / szt.",
          ],
          [
            "Kompleksowa renowacja kpl. lamp (2 szt.) + elektronika / LED / klasyki",
            "Pełna odbudowa pary reflektorów, spawanie uchwytów PP/ABS, naprawa przetwornic/modułów LED lub renowacja stalowych luster aut zabytkowych",
            "4–7 dni roboczych",
            "1 500 – 5 000+ zł / kpl.",
          ],
        ],
        footnote:
          "Dokładną wycenę potwierdzamy po oględzinach lub na podstawie zdjęć przesłanych w formularzu. Dla warsztatów samochodowych i serwisów oświetlenia oferujemy stałe rabaty B2B.",
      },
    },
    editorialSections: [
      {
        h2: "Dlaczego reflektory tracą jasność, a samo polerowanie lamp nie wystarcza?",
        paragraphs: [
          "Kierowcy zgłaszający się na polerowanie reflektorów często zauważają, że mimo idealnie przejrzystego klosza światła mijania nadal świecą słabo i mają rozmyty światłocień na stacji kontroli pojazdów. Przyczyną w ponad 80% przypadków jest wypalenie odbłyśnika ukrytego za soczewką projekcyjną (w lampach Xenon, Bi-Xenon oraz H7 soczewkowych) lub utlenienie lustra głównego w reflektorach refleksyjnych.",
          "Żarnik ksenonowy lub żarówka halogenowa generuje w górnej części komory odbłyśnika temperaturę przekraczającą 180–220°C oraz intensywne promieniowanie UV. Po przebiegu 120 000 – 180 000 km fabryczna warstwa aluminium o grubości kilkudziesięciu nanometrów ulega degradacji termicznej: najpierw żółknie i matowieje, a następnie wypala się do czarnego tworzywa BMC/PPS lub odsłania stalową blachę. W takim stanie odbłyśnik pochłania światło zamiast kierować je przez soczewkę na drogę, przez co natężenie oświetlenia spada nawet o 70%.",
        ],
        subSections: [
          {
            h3: "Metalizacja próżniowa odbłyśników a domowe „chromowanie w sprayu”",
            body: "Na rynku wtórnym można spotkać farby określane jako „chrom w sprayu” lub oklejanie odbłyśników folią lustrzaną. Takie metody nie sprawdzają się w układach optycznych reflektorów samochodowych z trzech powodów inżynieryjnych:",
            bullets: [
              "Współczynnik odbicia kierunkowego farby chromowej wynosi zaledwie 45–55%, podczas gdy napylone próżniowo aluminium 99,9% osiąga 96–98% refleksji zwierciadlanej.",
              "Farby aerozolowe gazują i miękną już przy 80–90°C, co powoduje zadymienie wnętrza lampy i osadzanie tłustego nalotu na wewnętrznej stronie klosza oraz soczewki.",
              "Tylko próżniowa metalizacja odbłyśników (PVD) daje nanometryczną gładkość (Ra < 0,02 µm) niezbędną do uzyskania ostrej linii odcięcia światłocienia wymaganej podczas przeglądu technicznego.",
            ],
          },
          {
            h3: "Polerowanie reflektorów z zabezpieczeniem lakierem UV vs krótkotrwały wosk",
            body: "Zewnętrzny klosz reflektora wykonany z poliwęglanu (PC) jest fabrycznie pokryty twardym lakierem poliuretanowym lub polisiloksanowym z filtrem UV. Zwykłe przepolerowanie pastą ścierną bez odtworzenia warstwy ochronnej powoduje, że odkryty poliwęglan żółknie ponownie już po 3–6 miesiącach. W STANIAX po gradacyjnym szlifowaniu wodnym usuwamy całą zdegradowaną warstwę i nakładamy nową powłokę lakierniczą UV odporną na chemię myjni bezdotykowych oraz uderzenia drobinek piasku.",
          },
        ],
      },
      {
        h2: "Jakie rodzaje lamp i odbłyśników regenerujemy w zakładzie STANIAX?",
        paragraphs: [
          "Obsługujemy zarówno klientów indywidualnych szukających trwałej alternatywy dla drogich nowych lamp ASO lub niskiej jakości zamienników TYC/Depo, jak i warsztaty elektromechaniczne, studia auto-detailingu oraz kolekcjonerów motoryzacji zabytkowej z całej Polski i Niemiec.",
        ],
        subSections: [
          {
            h3: "Odbłyśniki soczewkowe Xenon, Bi-Xenon, H7 oraz Bi-LED ( tworzywa BMC, PPS, PEI, metal)",
            body: "Regenerujemy czasze projektorów Hella (E55, Evox-R, Intemo), Valeo, Bosch/AL, Koito oraz ZKW wykonane ze stopów magnezu, aluminium, stali tłoczonej oraz wysokotemperaturowych kompozytów duroplastycznych (BMC) i termoplastycznych (PPS, Ultem PEI). Dobór podkładu dopasowujemy do rozszerzalności cieplnej podłoża, dzięki czemu powłoka nie pęka przy gwałtownych zmianach temperatury zimą.",
          },
          {
            h3: "Reflektory do samochodów zabytkowych, klasyków i motocykli",
            body: "W pojazdach zabytkowych (Mercedes W123/W124/SL, BMW E24/E30/E34, Porsche 911, klasyki amerykańskie i polskie FSO/FSM) oryginalne stalowe lub mosiężne odbłyśniki ze szkłem ryflowanym są często niedostępne w sprzedaży. Przeprowadzamy odrdzewianie, miedziowanie lub wypełnianie wżerów korozyjnych wielowarstwowym podkładem epoksydowo-akrylowym, a następnie metalizację próżniową przywracającą fabryczny blask bez utraty oryginalnych sygnatur na szkle.",
          },
        ],
      },
    ],
    showcase: {
      h2: "Porównaj efekt PRZED i PO regeneracji odbłyśnika w próżni",
      subtitle:
        "Przesuń suwak (myszką, palcem lub strzałkami klawiatury), aby zobaczyć różnicę między wypalonym, zmatowiałym odbłyśnikiem a czaszą po napyleniu próżniowym aluminium 99,9% w STANIAX.",
      ctaLabel: "Zamów wycenę regeneracji swoich reflektorów →",
      beforeLabel: "PRZED — Wypalona powłoka",
      afterLabel: "PO — Metalizacja próżniowa Al 99,9%",
      beforeAlt:
        "Wypalony i zmatowiały odbłyśnik reflektora samochodowego przed regeneracją",
      afterAlt:
        "Odbłyśnik reflektora samochodowego po metalizacji próżniowej aluminium w STANIAX z lustrzanym połyskiem",
      sliderSummary:
        "Po metalizacji próżniowej strumień świetlny na drodze wzrasta średnio o 200–300% względem wypalonego odbłyśnika, przywracając pełny zasięg świateł mijania i drogowych.",
    },
    processSection: {
      h2: "Jak przebiega regeneracja odbłyśników i reflektorów krok po kroku?",
      subtitle:
        "Stosujemy 4-etapowy przemysłowy reżim technologiczny eliminujący ryzyko łuszczenia powłoki pod wpływem temperatury żarnika.",
      steps: [
        {
          num: "01",
          title: "Demontaż i chemiczne odlakierowanie",
          desc: "Bezpiecznie zmywamy starą, przepaloną warstwę aluminium oraz zdegradowany lakier podkładowy w kąpieli chemicznej i myjce ultradźwiękowej bez szlifowania deformującego ogniskową zwierciadła.",
          param: "Ra < 0,02 µm zachowania geometrii",
        },
        {
          num: "02",
          title: "Lakier podkładowy wysokotemperaturowy (Base Coat)",
          desc: "W komorze bezpyłowej aplikujemy specjalny lakier wyrównujący odporny na temperaturę ciągłą do 220°C i wygrzewamy detal w piecu, uzyskując idealnie szklistą bazę pod metal.",
          param: "Odporność termiczna do 220°C",
        },
        {
          num: "03",
          title: "Napylanie próżniowe czystego aluminium PVD",
          desc: "W komorze wysokiej próżni (10⁻⁴ mbar) odparowujemy termicznie aluminium o czystości 99,9%, które kondensuje na rotujących odbłyśnikach w postaci jednorodnego lustra optycznego.",
          param: "Refleksja światła 96–98%",
        },
        {
          num: "04",
          title: "Warstwa ochronna Top Coat i kontrola ogniskowej",
          desc: "Zabezpieczamy napylone aluminium powłoką krzemoorganiczną chroniącą przed wilgocią i utlenianiem, a przy całych lampach polerujemy klosz, nakładamy filtr UV i testujemy szczelność.",
          param: "12–24 m-ce gwarancji trwałości",
        },
      ],
    },
    marqueeSection: {
      h2: "Obsługiwane typy reflektorów, projektorów i marek oświetlenia",
      subtitle:
        "Realizujemy pojedyncze zlecenia wysyłkowe dla kierowców oraz stałe serie dla warsztatów oświetlenia samochodowego.",
      row1: [
        "Odbłyśniki Xenon D1S / D2S / D3S",
        "Projektory Bi-Xenon Hella E55 / Evox",
        "Soczewki Valeo / Bosch / AL / Koito",
        "Reflektory H4 i H7 swobodne (FF)",
        "Moduły skrętne AFS / Dynamic Light",
        "Lampy aut zabytkowych i klasyków",
        "Reflektory motocyklowe i quadów",
        "Oświetlenie ciężarowe TIR 24V (DAF, Volvo, Scania)",
      ],
      row2: [
        "Polerowanie kloszy PC + lakier UV",
        "Naprawa wypalonych gniazd żarówek",
        "Hermetyzacja na nowym kleju butylowym",
        "Metalizacja ramek i dekorów wnętrza lampy",
        "Czyszczenie soczewek projekcyjnych",
        "Spawanie uchwytów reflektorów PP / ABS",
        "Regeneracja odbłyśników przeciwmgielnych",
        "Szperacze przemysłowe i reflektory robocze",
      ],
      b2bCards: [
        {
          badge: "DLA KIEROWCÓW INDYWIDUALNYCH",
          h3: "Regeneracja wysyłkowa w całej Polsce (Paczkomat / Kurier)",
          body: "Wyślij do nas same wymontowane odbłyśniki lub kompletne reflektory. Po wykonaniu metalizacji próżniowej odsyłamy bezpiecznie zapakowane części w ciągu 2–4 dni roboczych.",
          spec: "Odbiór osobisty: Józefów k. Warszawy (ul. Wyszyńskiego 116A)",
        },
        {
          badge: "DLA WARSZTATÓW I SERWISÓW LAMP",
          h3: "Stała współpraca B2B na metalizację odbłyśników",
          body: "Dla firm zajmujących się przeróbką i naprawą reflektorów oferujemy priorytetowe wsady komory próżniowej, powtarzalną jakość lustra i cennik hurtowy od 5 sztuk w partii.",
          spec: "Faktura VAT 23% · Krótkie terminy 24–48h dla partnerów",
        },
        {
          badge: "RENOWACJA KLASYKÓW I MOTOCYKLI",
          h3: "Odbudowa stalowych i mosiężnych luster zabytkowych",
          body: "Przywracamy blask oryginalnym reflektorom Bosch, Hella, Cibie, Carello i Zelmot. Usuwamy korozję i odtwarzamy powłokę lustrzaną z zachowaniem historycznej oryginalności części.",
          spec: "Pełne przygotowanie podłoża antykorozyjnego przed PVD",
        },
      ],
    },
    caseStudiesSection: {
      h2: "Przykładowe realizacje regeneracji odbłyśników (najedź lupą, aby zbadać lustro)",
      subtitle:
        "Sprawdź gładkość powłoki aluminiowej i brak skaz optycznych na zregenerowanych odbłyśnikach.",
      items: [
        {
          badge: "BI-XENON / SOCZEWKI",
          h3: "Seria odbłyśników soczewkowych Hella i Valeo po napyleniu Al 99,9%",
          desc: "Kompleksowa regeneracja wypalonych czasz magnezowych i kompozytowych BMC z odtworzeniem 98% refleksji zwierciadlanej w górnej strefie nad żarnikiem.",
          param: "Wzrost natężenia światła: +260% (pomiar luksomierzem)",
          imageKey: "reflectors1",
          alt: "Zregenerowane odbłyśniki soczewkowe Bi-Xenon po metalizacji próżniowej w STANIAX",
        },
        {
          badge: "REFLEKTORY WIELOKOMOROWE",
          h3: "Metalizacja próżniowa odbłyśników głównych i ramek dekoracyjnych",
          desc: "Odtworzenie powłoki lustrzanej na wielopłaszczyznowych odbłyśnikach z tworzywa PC/ABS i termoutwardzalnych kompozytów bez efektu skórki pomarańczy.",
          param: "Grubość warstwy Al: 80–100 nm + zabezpieczenie Top Coat",
          imageKey: "reflectors2",
          alt: "Wielokomorowe odbłyśniki samochodowe pokryte lustrzaną warstwą aluminium w komorze próżniowej",
        },
        {
          badge: "KLASYKI I MOTORYZACJA PREMIUM",
          h3: "Renowacja stalowych odbłyśników i detali chromowanych klasyka",
          desc: "Usunięcie wżerów korozyjnych, wypełnienie podkładem epoksydowym i próżniowe napylenie aluminium przywracające fabryczny wygląd reflektora sprzed 40 lat.",
          param: "Test komory solnej i szoku termicznego: wynik pozytywny",
          imageKey: "automotiveAfter",
          alt: "Odnowiony odbłyśnik i detal motoryzacyjny po procesie metalizacji próżniowej",
        },
      ],
    },
    faqSection: {
      h2: "Najczęstsze pytania o regenerację reflektorów i odbłyśników (FAQ)",
      subtitle:
        "Konkretne odpowiedzi technologów STANIAX na pytania kierowców i warsztatów.",
      items: [
        {
          q: "Ile kosztuje regeneracja odbłyśników, a ile kompleksowa regeneracja całych reflektorów?",
          a: "Metalizacja próżniowa samego dostarczonego (wymontowanego z lampy) odbłyśnika kosztuje od 150 do 300 zł za sztukę w zależności od jego wielkości i materiału (tworzywo BMC/PPS lub metal). Kompleksowa regeneracja całego reflektora (rozklejenie lampy, metalizacja odbłyśnika, czyszczenie soczewki, polerowanie klosza z powłoką UV i ponowne sklejenie) wynosi zazwyczaj 350–700 zł za sztukę, a przy zaawansowanych lampach skrętnych LED/Xenon lub renowacji kompletu z elektroniką 1 500–5 000+ zł za parę.",
        },
        {
          q: "Jak długo trwa regeneracja reflektorów i czy realizujecie usługę wysyłkowo?",
          a: "Tak, obsługujemy klientów z całej Polski i UE wysyłkowo. Regeneracja samych odbłyśników trwa 2–3 dni robocze od momentu doręczenia paczki do naszego zakładu w Józefowie (ul. Wyszyńskiego 116A). Kompleksowa regeneracja całych lamp trwa średnio 3–5 dni roboczych. Części odsyłamy kurierem lub do Paczkomatu InPost w bezpiecznych opakowaniach wielowarstwowych.",
        },
        {
          q: "Czy lepiej zregenerować oryginalny reflektor OEM, czy kupić nowy zamiennik?",
          a: "Regeneracja oryginalnego reflektora (Hella, Valeo, Bosch, AL, Koito) jest rozwiązaniem znacznie trwalszym i bezpieczniejszym niż zakup taniego zamiennika. Zamienniki mają często nieprecyzyjną geometrię odbłyśnika, cieńsze tworzywo i słabe odprowadzanie ciepła, przez co wypalają się po roku i mają problemy z ustawieniem światła na przeglądzie. Zregenerowany oryginał zachowuje fabryczną homologację i optykę, a kosztuje ułamek ceny nowej lampy z ASO.",
        },
        {
          q: "Jak zabezpieczyć odbłyśniki przed wysyłką kurierem do STANIAX?",
          a: "Nie należy dotykać wewnętrznej powierzchni lustra palcami ani czyścić jej rozpuszczalnikami czy szmatką. Każdy odbłyśnik warto owinąć miękkim papierem bezpyłowym lub folią bąbelkową, umieścić w sztywnym kartonie z minimum 5 cm wolnej przestrzeni wypełnionej zgniecionym papierem lub pianką i dołączyć kartkę z imieniem, numerem telefonu oraz adresem zwrotnym.",
        },
        {
          q: "Czy po regeneracji reflektor przejdzie przegląd na stacji kontroli pojazdów?",
          a: "Tak. Próżniowa metalizacja odbłyśnika odtwarza 96–98% fabrycznego współczynnika odbicia kierunkowego oraz idealnie ostrą granicę światła i cienia (cut-off line). Dzięki temu strumień świetlny spełnia wymagania diagnostyczne na stacji kontroli pojazdów i nie oślepia kierowców jadących z naprzeciwka.",
        },
        {
          q: "Na jak długo wystarcza zregenerowany odbłyśnik i polerowany klosz?",
          a: "Trwałość odbłyśnika po metalizacji próżniowej z podkładem wysokotemperaturowym odpowiada żywotności fabrycznie nowej części (zwykle 5–8 lat lub 150 000 km przebiegu, pod warunkiem stosowania markowych żarówek/żarników o standardowej mocy 35W/55W). Klosz zabezpieczony twardym lakierem UV zachowuje przejrzystość przez wiele lat eksploatacji.",
        },
      ],
    },
    quoteSection: {
      h2: "Bezpłatna wycena regeneracji reflektorów i odbłyśników",
      intro:
        "Opisz model samochodu, typ reflektorów (H7, Xenon, Bi-Xenon, LED, klasyk) oraz wskaż, czy chcesz wysłać same odbłyśniki, czy kompletne lampy. Odpowiadamy w ciągu 24 godzin w dni robocze.",
      projectTypes: [
        "Metalizacja samych odbłyśników (wysyłkowo / osobiście)",
        "Kompleksowa regeneracja reflektorów (odbłyśniki + klosze + klejenie)",
        "Polerowanie reflektorów i zabezpieczenie powłoką UV",
        "Renowacja reflektorów do auta zabytkowego / motocykla",
        "Stała współpraca B2B (warsztat / serwis oświetlenia)",
      ],
      submitLabel: "Wyślij zapytanie o wycenę regeneracji",
    },
    seeAlsoSection: {
      h2: "Powiązane technologie i poradniki STANIAX",
      links: [
        {
          path: "/metalizacja-prozniowa",
          anchorText: "Metalizacja próżniowa PVD — technologia i możliwości",
          badge: "USŁUGA GŁÓWNA PVD",
          desc: "Poznaj fizykę napylania próżniowego aluminium i parametry naszych komór próżniowych.",
        },
        {
          path: "/metalizacja-tworzyw-sztucznych",
          anchorText: "Metalizacja tworzyw sztucznych i chromowanie plastiku",
          badge: "USŁUGA POWIĄZANA",
          desc: "Efekt chromu, złota i satyny na ramkach reflektorów, grillach, emblematach i detalach ABS/PC.",
        },
        {
          path: "/news/regeneracja-odblysnikow-reflektorow-samochodowych",
          anchorText:
            "Poradnik kierowcy: objawy wypalonego odbłyśnika i konserwacja lamp",
          badge: "ARTYKUŁ EKSPERCKI",
          desc: "Sprawdź, jak samodzielnie rozpoznać wypalenie soczewki i jak dbać o reflektory po renowacji.",
        },
      ],
    },
    schemaServiceType:
      "Regeneracja reflektorów i metalizacja próżniowa odbłyśników samochodowych",
    schemaPriceRange: "150 PLN - 5000 PLN",
  },

  "vacuum-metallization": {
    navLabel: "Metalizacja próżniowa",
    shortSummary:
      "Przemysłowe napylanie próżniowe PVD aluminium (99,9% Al) nadające lustrzany efekt chromu, złota, miedzi i powłok technicznych EMI/RFI.",
    metaTitle: "Metalizacja Próżniowa PVD — Usługi Przemysłowe | STANIAX",
    metaDesc:
      "Usługowa metalizacja próżniowa PVD w STANIAX (Józefów k. Warszawy). Powłoki lustrzane Al 99,9%, chrom, złoto, inox dla przemysłu, oświetlenia i opakowań.",
    breadcrumbLabel: "Metalizacja próżniowa PVD",
    heroBadge:
      "Technologia PVD rozwijana od 1993 r. (Dariusz Staniak · STANIAX Sp. z o.o.)",
    h1: "Metalizacja próżniowa PVD — przemysłowe napylanie powłok metalicznych",
    lead: "Metalizacja próżniowa (Physical Vapor Deposition — PVD) to zaawansowany proces fizycznego osadzania nanometrycznej warstwy metalu w wysokiej próżni. W zakładzie produkcyjnym STANIAX w Józefowie pod Warszawą wykonujemy usługowe metalizowanie próżniowe detali z tworzyw sztucznych, metali, szkła i ceramiki, uzyskując idealnie gładki efekt lustrzanego chromu, złota, miedzi oraz powłoki techniczne o wysokiej refleksyjności świetlnej.",
    ctaPrimaryLabel: "Wyceń metalizację próżniową →",
    ctaSecondaryLabel: "Poznaj układ warstw i parametry PVD ↓",
    heroImageKey: "vacuumHero",
    heroImageAlt:
      "Komora próżniowa PVD i detale przemysłowe po procesie metalizacji próżniowej w zakładzie STANIAX",
    metrics: [
      {
        value: 99.9,
        decimalPlaces: 1,
        suffix: "%",
        label: "Czystość odparowywanego Al",
        detail:
          "Drut aluminiowy wysokiej czystości odparowywany termicznie w próżni 10⁻⁴ mbar",
      },
      {
        value: 80,
        suffix: " nm",
        label: "Grubość warstwy metalicznej",
        detail:
          "Nanometryczna powłoka PVD odwzorowująca najdrobniejsze detale i gwinty bez zmiany wymiarów",
      },
      {
        value: 1993,
        suffix: " r.",
        label: "Ciągłość technologii PVD",
        detail:
          "Ponad 30 lat doświadczenia zespołu Dariusza Staniaka w metalizacji próżniowej na Mazowszu",
      },
    ],
    scopeSection: {
      h2: "Zakres usług metalizacji próżniowej i parametry komory PVD",
      intro:
        "W przeciwieństwie do galwanizacji elektrolitycznej, metalizacja próżniowa jest procesem suchym, ekologicznym i wolnym od toksycznych związków chromu sześciowartościowego (Cr6+). Pozwala pokrywać zarówno podłoża przewodzące, jak i dielektryczne (polimery, szkło, ceramikę, kompozyty), zachowując pełną powtarzalność koloru i połysku w partiach od kilkudziesięciu do setek tysięcy sztuk.",
      cardTitle:
        "Możliwości technologiczne zakładu metalizacji próżniowej STANIAX",
      cardSubtitle:
        "Kompleksowa linia przygotowania powierzchni, lakierowania podkładowego, napylania próżniowego i barwienia Top Coat",
      highlights: [
        "Napylanie próżniowe czystego aluminium (99,9% Al) w komorach wysokiej próżni z planetarnym systemem rotacji wsadu zapewniającym równomierne pokrycie 3D.",
        "Pełny układ trójwarstwowy: Lakier podkładowy (Base Coat) + Warstwa metaliczna PVD (50–120 nm) + Lakier nawierzchniowy (Top Coat UV lub 2K).",
        "Barwienie lakieru nawierzchniowego na dowolny odcień metaliczny: lustrzany chrom, złoto 14K/18K/24K, różowe złoto (rose gold), miedź, mosiądz, tytan, inox oraz czarny chrom.",
        "Własna produkcja i adaptacja specjalistycznego oprzyrządowania (satelitów, uchwytów i masek) pod nietypowe kształty detali klienta.",
        "Metalizacja funkcjonalna: zwierciadła optyczne i oświetleniowe, ekrany odbijające promieniowanie cieplne IR oraz powłoki ekranujące EMI/RFI na obudowach elektroniki.",
        "Kontrola jakości każdej partii: test przyczepności siatką nacięć wg ISO 2409, pomiar połysku (GU) i kontrola odporności chemicznej/ścieralności.",
      ],
      table: {
        caption:
          "Specyfikacja techniczna procesu metalizacji próżniowej PVD w STANIAX",
        headers: [
          "Parametr procesu",
          "Wartość / Standard w STANIAX",
          "Znaczenie dla wyrobu gotowego",
          "Metoda weryfikacji",
        ],
        rows: [
          [
            "Ciśnienie robocze w komorze",
            "10⁻⁴ – 5×10⁻⁵ mbar (wysoka próżnia)",
            "Brak wtrąceń gazowych, maksymalna gęstość i czystość lustra metalicznego",
            "Próżniomierze próżni wysokiej w każdym cyklu",
          ],
          [
            "Grubość warstwy metalu (Al)",
            "50 – 120 nanometrów (0,05 – 0,12 µm)",
            "Brak wpływu na tolerancje montażowe, zatrzaski i gwinty precyzyjnych detali",
            "Kontrola transmisji optycznej i rezystancji powierzchniowej",
          ],
          [
            "Grubość układu lakierniczego (Base + Top)",
            "15 – 35 µm (zależnie od podłoża i przeznaczenia)",
            "Wygładzenie mikronierówności wtrysku (Ra < 0,02 µm) oraz odporność na ścieranie i UV",
            "Pomiar grubościomierzem ultradźwiękowym / indukcyjnym",
          ],
          [
            "Przyczepność powłoki wielowarstwowej",
            "Klasa 0 / 5B (najwyższa przyczepność)",
            "Brak odspajania powłoki przy zginaniu, uderzeniach i szokach termicznych",
            "Test siatki nacięć (Cross-Cut) wg normy PN-EN ISO 2409",
          ],
        ],
        footnote:
          "Przyjmujemy zlecenia jednostkowe (prototypy, wzorce), serie średnie oraz stałe kontrakty wielkoseryjne dla przemysłu z całej Polski i Europy.",
      },
    },
    editorialSections: [
      {
        h2: "Na czym polega fizyka metalizacji próżniowej i budowa powłoki 4-warstwowej?",
        paragraphs: [
          "W ujęciu inżynierii powierzchni metalizacja próżniowa metodą odparowania termicznego (Thermal Evaporation PVD) wykorzystuje zjawisko przejścia metalu w stan pary w warunkach głębokiej próżni. Po odpompowaniu powietrza z komory do ciśnienia rzędu 10⁻⁴ mbar czyste aluminium umieszczone na wolframowych elementach grzejnych zostaje błyskawicznie odparowane. Ponieważ w komorze nie ma cząsteczek powietrza, atomy aluminium poruszają się po liniach prostych i kondensują na chłodniejszych detalach obracających się na planetarnym bębnie wsadowym.",
          "Sama warstwa napylonego metalu ma grubość poniżej 0,1 mikrometra — dlatego idealnie odwzorowuje topografię podłoża, na którym spoczywa. Aby uzyskać głębokie, bezbłędne lustro na wyprasce wtryskowej lub odlewie, kluczowe jest połączenie procesu próżniowego z zaawansowaną technologią lakierniczą.",
        ],
        subSections: [
          {
            h3: "Dlaczego lakier podkładowy (Base Coat) i nawierzchniowy (Top Coat) decydują o trwałości?",
            body: "Kompletny system metalizacji próżniowej STANIAX składa się z czterech współpracujących warstw inżynieryjnych:",
            bullets: [
              "Warstwa 1 — Podłoże przygotowane chemicznie i antystatycznie: odtłuszczone w izopropanolu/kąpieli wodnej i zjonizowane powietrzem w celu usunięcia ładunków elektrostatycznych przyciągających kurz.",
              "Warstwa 2 — Lakier podkładowy (Base Coat): wypełnia linie płynięcia tworzywa, pory i mikro-rysy formy wtryskowej, tworząc szklistą powierzchnię o napięciu powierzchniowym zoptymalizowanym pod adhezję aluminium.",
              "Warstwa 3 — Aluminium PVD (99,9%): nadaje 100% metaliczny blask, nieprzezroczystość świetlną oraz właściwości refleksyjne lub ekranujące.",
              "Warstwa 4 — Lakier nawierzchniowy (Top Coat): zamyka mikropory aluminium, chroni przed ścieraniem, potem dłoni, alkoholami i promieniowaniem UV oraz pozwala barwić powłokę pigmentami transparentnymi.",
            ],
          },
          {
            h3: "Metalizacja próżniowa PVD a chromowanie galwaniczne — porównanie dla przemysłu",
            body: "Tradycyjne chromowanie galwaniczne jest ograniczone głównie do metali oraz wąskiej grupy tworzyw (ABS do galwanizacji) wytrawianych w agresywnych kąpielach kwasu chromowego i soli palladu. Metalizacja próżniowa eliminuje toksyczne kąpiele, jest średnio o 30–50% tańsza w produkcji seryjnej i pozwala metalizować znacznie szerszą gamę materiałów: PC, PMMA, PA, PP, PS, kompozyty BMC/SMC, szkło oraz ceramikę.",
          },
        ],
      },
      {
        h2: "Zastosowania przemysłowe metalizacji próżniowej — od optyki po opakowania",
        paragraphs: [
          "Dzięki połączeniu doświadczenia założycielskiego Dariusza Staniaka (działającego w branży metalizacji próżniowej w Józefowie od 1993 roku) z nowoczesnym parkiem komorowym STANIAX Sp. z o.o., obsługujemy cztery główne sektory przemysłowe.",
        ],
        subSections: [
          {
            h3: "Przemysł oświetleniowy, optyczny i motoryzacyjny",
            body: "Produkujemy i regenerujemy zwierciadła reflektorów, rastry opraw przemysłowych LED, odbłyśniki lamp operacyjnych i drogowych oraz listwy i emblematy samochodowe wymagające odporności na warunki atmosferyczne i temperaturę.",
          },
          {
            h3: "Opakowania kosmetyczne (Beauty), perfumeria, elektronika i AGD",
            body: "Napylamy powłoki w odcieniach złota, srebra, różowego złota i grafitu na zamknięcia perfum, słoiczki kremów, oprawki szminek, pokrętła sprzętu AGD/audio, trofea sportowe, dewocjonalia oraz akcesoria meblowe.",
          },
        ],
      },
    ],
    showcase: {
      h2: "Interaktywny przekrój 4 warstw powłoki metalizacji próżniowej PVD",
      subtitle:
        "Kliknij wybraną warstwę technologiczną, aby sprawdzić jej parametry fizykochemiczne, grubość oraz funkcję w układzie STANIAX.",
      ctaLabel: "Zamów wycenę dla wybranego układu powłoki →",
      options: [
        {
          id: "substrate",
          label: "01. Podłoże (Substrat)",
          badge: "WARSTWA BAZOWA",
          title:
            "Tworzywo sztuczne (ABS, PC, PMMA, PP, PA), metal, szkło lub ceramika",
          description:
            "Detal po procesie odtłuszczania chemicznego, aktywacji powierzchni (płomieniowej/plazmowej dla poliolefin PP/PE) oraz zdmuchiwania zjonizowanym powietrzem antystatycznym.",
          specs: [
            {
              label: "Kompatybilne materiały",
              value: "ABS, PC, PC/ABS, PMMA, PS, PP, PA, ZnAl, stal, szkło",
            },
            {
              label: "Maksymalny wymiar wsadu",
              value: "Do Ø 1000 mm / długość do 1200 mm",
            },
            {
              label: "Czystość powierzchni",
              value: "Neutralizacja ładunków elektrostatycznych 100%",
            },
          ],
          previewStyle: "linear-gradient(135deg, #334155 0%, #475569 100%)",
        },
        {
          id: "basecoat",
          label: "02. Lakier Base Coat",
          badge: "WYGŁADZANIE OPTYCZNE",
          title:
            "Lakier podkładowy wyrównujący i zwiększający adhezję (10–20 µm)",
          description:
            "Tworzy idealnie gładką, szklistą błonę niwelującą strukturę formy wtryskowej. Bez tej warstwy napylony metal byłby matowy i odwzorowywałby mikrorysy podłoża.",
          specs: [
            { label: "Grubość warstwy", value: "10 – 20 µm" },
            {
              label: "Chropowatość po utwardzeniu",
              value: "Ra < 0,02 µm (lustro optyczne)",
            },
            {
              label: "Utwardzanie",
              value: "Termiczne w piecu (60–180°C) lub radiacyjne UV",
            },
          ],
          previewStyle: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
        },
        {
          id: "aluminum-pvd",
          label: "03. Aluminium PVD 99,9%",
          badge: "KOMORA WYSOKIEJ PRÓŻNI",
          title: "Próżniowo napylona warstwa czystego aluminium (50–120 nm)",
          description:
            "Osadzana w próżni 10⁻⁴ mbar warstwa metalu odpowiedzialna za lustrzany połysk, refleksyjność świetlną (98%) oraz przewodnictwo ekranujące EMI/RFI.",
          specs: [
            {
              label: "Grubość warstwy metalu",
              value: "50 – 120 nm (0,05 – 0,12 µm)",
            },
            {
              label: "Czystość metalu",
              value: "Aluminium 99,9% (gatunek próżniowy)",
            },
            {
              label: "Współczynnik odbicia",
              value: "96 – 98% w paśmie widzialnym VIS",
            },
          ],
          previewStyle:
            "linear-gradient(135deg, #e2e8f0 0%, #ffffff 45%, #94a3b8 100%)",
        },
        {
          id: "topcoat",
          label: "04. Lakier Top Coat + Kolor",
          badge: "OCHRONA I BARWIENIE",
          title:
            "Lakier nawierzchniowy ochronny (bezbarwny chrom lub barwiony złoto/miedź/tytan)",
          description:
            "Zabezpiecza delikatną warstwę aluminium przed ścieraniem, korozją, alkoholami i promieniowaniem UV. Dodatek transparentnych barwników nadaje efekt złota, miedzi lub czarnego chromu.",
          specs: [
            {
              label: "Grubość warstwy ochronnej",
              value: "10 – 20 µm (2K poliuretan / akryl / UV)",
            },
            {
              label: "Dostępne efekty barwne",
              value: "Chrom, Złoto 14K/24K, Rose Gold, Miedź, Tytan, Inox",
            },
            {
              label: "Stopień połysku",
              value: "Wysoki połysk (>90 GU), Satyna lub Mat",
            },
          ],
          previewStyle:
            "linear-gradient(135deg, #f59e0b 0%, #fde68a 50%, #b45309 100%)",
        },
      ],
    },
    processSection: {
      h2: "Proces przemysłowej metalizacji próżniowej w 4 krokach",
      subtitle:
        "Każda partia produkcyjna przechodzi rygorystyczny proces przygotowania i kontroli międzyoperacyjnej.",
      steps: [
        {
          num: "01",
          title: "Montaż na oprzyrządowaniu i mycie jonizacyjne",
          desc: "Dobieramy dedykowane uchwyty (satelity) eliminujące cienie napylania, odtłuszczamy detale i odmuchujemy je zjonizowanym powietrzem w strefie czystej.",
          param: "Eliminacja wtrąceń pyłowych",
        },
        {
          num: "02",
          title: "Aplikacja i wygrzewanie lakieru Base Coat",
          desc: "Nakładamy lakier podkładowy dopasowany chemicznie do rodzaju tworzywa lub metalu, a następnie polimeryzujemy powłokę w piecu grzewczym lub tunelu UV.",
          param: "Adhezja międzywarstwowa 5B",
        },
        {
          num: "03",
          title: "Metalizacja w komorze wysokiej próżni PVD",
          desc: "Wsad trafia do komory próżniowej, gdzie po osiągnięciu próżni 10⁻⁴ mbar następuje termiczne odparowanie aluminium na obracające się planetarnie detale.",
          param: "Jednorodność powłoki 360°",
        },
        {
          num: "04",
          title: "Lakierowanie Top Coat, barwienie i kontrola jakości",
          desc: "Nakładamy lakier nawierzchniowy bezbarwny lub koloryzujący (złoto, miedź, inox), utwardzamy powłokę i wykonujemy testy przyczepności przed pakowaniem.",
          param: "Protokół kontroli jakości partii",
        },
      ],
    },
    marqueeSection: {
      h2: "Branże i komponenty obsługiwane w procesie metalizacji próżniowej",
      subtitle:
        "Od precyzyjnych elementów optycznych po wielkoseryjne opakowania kosmetyczne i detale wykończeniowe.",
      row1: [
        "Opakowania kosmetyczne i zakrętki perfum",
        "Odbłyśniki oświetleniowe LED i architektoniczne",
        "Emblematy, logotypy i listwy automotive",
        "Pokrętła i panele sprzętu AGD / RTV",
        "Akcesoria meblowe, uchwyty i rozety",
        "Trofea sportowe, puchary i medale",
        "Dewocjonalia, znicze i elementy sakralne",
        "Obudowy elektroniczne z ekranowaniem EMI",
      ],
      row2: [
        "Efekt lustrzanego chromu PVD",
        "Złoto 14K / 18K / 24K i Rose Gold",
        "Stal szczotkowana Inox i Satynowy Nikiel",
        "Czarny chrom (Dark Chrome / Gunmetal)",
        "Miedź antyczna i mosiądz dekoracyjny",
        "Metalizacja selektywna z maskowaniem",
        "Powłoki półprzepuszczalne ( lustro weneckie )",
        "Własna budowa oprzyrządowania wsadowego",
      ],
      b2bCards: [
        {
          badge: "WTRYSKOWNIE I PRODUCENCI OEM",
          h3: "Uszlachetnianie wyprasek bezpośrednio z wtryskowni",
          body: "Współpracujemy z wtryskowniami tworzyw sztucznych jako zewnętrzny dział wykończenia powierzchni. Odbieramy surowe wypraski i odsyłamy gotowe, spakowane detale metalizowane.",
          spec: "Zdolność przerobowa: od partii próbnych po tysiące sztuk dziennie",
        },
        {
          badge: "PROTOTYPOWANIE I DRUK 3D",
          h3: "Metalizacja prototypów SLA/SLS i krótkich serii wdrożeniowych",
          body: "Wykonujemy próby technologiczne oraz wzorce kolorystyczne (chrom, złoto, satyna) dla projektantów wzornictwa przemysłowego i działów R&D przed uruchomieniem produkcji wielkoseryjnej.",
          spec: "Szybkie próby wzorców w 48–72h",
        },
        {
          badge: "OPTYKA I OŚWIETLENIE PRZEMYSŁOWE",
          h3: "Zwierciadła techniczne o refleksji 98%",
          body: "Metalizujemy rastry, reflektory halowe, szperacze i elementy aparatury medycznej wymagające najwyższej czystości optycznej i odporności na podwyższoną temperaturę pracy.",
          spec: "Podkłady wysokotemperaturowe do 220°C",
        },
      ],
    },
    caseStudiesSection: {
      h2: "Zrealizowane projekty metalizacji próżniowej (najedź lupą, aby powiększyć)",
      subtitle:
        "Przykłady wdrożeń przemysłowych zrealizowanych w komorach próżniowych STANIAX.",
      items: [
        {
          badge: "TECHNOLOGIA KOMOROWA PVD",
          h3: "Wsad produkcyjny detali technicznych w komorze wysokiej próżni",
          desc: "Równomierne napylanie złożonych geometrycznie komponentów na dedykowanym oprzyrządowaniu planetarnym zaprojektowanym w zakładzie STANIAX.",
          param:
            "Powtarzalność partii: >99,2% detali zgodnych w pierwszym przebiegu",
          imageKey: "vacuumChamber",
          alt: "Wnętrze komory do metalizacji próżniowej PVD w zakładzie STANIAX Józefów",
        },
        {
          badge: "OPAKOWANIA PREMIUM & BEAUTY",
          h3: "Metalizacja próżniowa nakrętek i atomizerów w kolorach złota i chromu",
          desc: "Wielkoseryjne metalizowanie zamknięć kosmetycznych z PP i ABS z lakierem nawierzchniowym odpornym na perfumy i olejki eteryczne.",
          param: "Odporność na test alkoholowy i ścieranie: pełna zgodność",
          imageKey: "packagingAfter",
          alt: "Metalizowane próżniowo nakrętki i opakowania kosmetyczne o lustrzanym połysku złota i srebra",
        },
        {
          badge: "KOMPONENTY MASZYNOWE I OŚWIETLENIOWE",
          h3: "Powłoki refleksyjne i dekoracyjne na detalach technicznych",
          desc: "Połączenie wysokiej przyczepności podkładu technicznego z lustrzaną warstwą aluminium zabezpieczoną bezbarwnym lakierem poliuretanowym.",
          param: "Klasa przyczepności: 5B (ISO 2409)",
          imageKey: "vacuumPart",
          alt: "Detale przemysłowe i oświetleniowe po procesie metalizacji próżniowej w STANIAX",
        },
      ],
    },
    faqSection: {
      h2: "Najczęstsze pytania o metalizację próżniową PVD (FAQ)",
      subtitle:
        "Odpowiedzi na pytania inżynierów, technologów i działów zakupów B2B.",
      items: [
        {
          q: "Czym różni się metalizacja próżniowa PVD od tradycyjnego chromowania galwanicznego?",
          a: "Metalizacja próżniowa PVD to proces fizycznego osadzania par metalu (aluminium 99,9%) w komorze wysokiej próżni w połączeniu z lakierowaniem podkładowym i nawierzchniowym. W przeciwieństwie do galwanizacji nie używa toksycznego chromu sześciowartościowego (Cr6+) ani kąpieli kwasowych, pozwala pokrywać niemal każde tworzywo sztuczne (nie tylko specjalny ABS galwaniczny), szkło i metale, a przy tym zapewnia łatwe barwienie na odcienie złota, miedzi, różowego złota czy czarnego chromu przy niższym koszcie jednostkowym.",
        },
        {
          q: "Jakie materiały można poddać procesowi metalizacji próżniowej?",
          a: "W zakładzie STANIAX metalizujemy tworzywa termoplastyczne (ABS, PC, PC/ABS, PMMA, PS, SAN, PA, a po aktywacji również PP i PE), tworzywa duroplastyczne i kompozyty (BMC, SMC, laminaty epoksydowo-szklane, żywice SLA), metale (stal, aluminium, stopy ZnAl, mosiądz) oraz szkło i ceramikę techniczną.",
        },
        {
          q: "Czy metalizacja próżniowa zmienia wymiary detalu lub blokuje gwinty i zatrzaski?",
          a: "Sama warstwa aluminium napylana w próżni ma grubość zaledwie 50–120 nanometrów (0,05–0,12 µm), więc jest całkowicie pomijalna wymiarowo. Całkowita grubość układu z lakierem podkładowym i nawierzchniowym wynosi 15–35 µm. Jeśli detal posiada bardzo ciasne pasowania lub gwinty, stosujemy maskowanie stref montażowych na etapie mocowania na oprzyrządowaniu.",
        },
        {
          q: "Jaka jest minimalna wielkość zamówienia (MOQ) i czas realizacji?",
          a: "Nie narzucamy sztywnego zaporowego MOQ — wyceniamy zarówno pojedyncze detale i serie prototypowe (od kilku sztuk), jak i zamówienia wielkoseryjne liczone w dziesiątkach tysięcy elementów. Standardowy czas realizacji partii produkcyjnych wynosi 5–10 dni roboczych, a prób i prototypów 2–4 dni robocze.",
        },
        {
          q: "Czy powłoka metalizowana próżniowo jest odporna na ścieranie, UV i warunki zewnętrzne?",
          a: "Tak, za odporność eksploatacyjną odpowiada odpowiednio dobrany lakier nawierzchniowy (Top Coat). W zależności od specyfikacji klienta stosujemy lakiery utwardzane promieniami UV o wysokiej twardości ołówkowej (dla opakowań kosmetycznych) lub elastyczne dwuskładnikowe lakiery poliuretanowe i akrylowe z filtrami UV (dla branży motoryzacyjnej i zastosowań zewnętrznych).",
        },
        {
          q: "Jak przygotować detale z wtryskowni przed wysyłką do metalizacji próżniowej?",
          a: "Kluczowe znaczenie ma wykonywanie wtrysku bez użycia silikonowych środków rozdzielających (lub wyłącznie na środkach deklarowanych jako lakierowalne / silikon-free). Silikon wbudowuje się w strukturę powierzchni tworzywa i powoduje tzw. kraterowanie lakieru. Wypraski powinny być pakowane w czyste worki polietylenowe lub przekładki bezpyłowe chroniące przed porysowaniem w transporcie.",
        },
      ],
    },
    quoteSection: {
      h2: "Zapytaj o wycenę metalizacji próżniowej PVD i próby technologiczne",
      intro:
        "Prześlij informację o materiale podłoża, wymiarach detalu, oczekiwanym efekcie (chrom, złoto, satyna, odbłyśnik techniczny) oraz planowanym wolumenie. Przygotujemy kalkulację i zaproponujemy wykonanie partii próbnej.",
      projectTypes: [
        "Metalizacja próżniowa PVD — seria produkcyjna B2B",
        "Wykonanie prób technologicznych / wzorców kolorystycznych",
        "Metalizacja techniczna (odbłyśniki oświetleniowe / ekranowanie EMI)",
        "Metalizacja opakowań kosmetycznych (chrom / złoto / rose gold)",
        "Konsultacja technologiczna doboru tworzywa i oprzyrządowania",
      ],
      submitLabel: "Wyślij zapytanie o wycenę metalizacji PVD",
    },
    seeAlsoSection: {
      h2: "Zobacz wyspecjalizowane usługi z zakresu metalizacji i lakierowania",
      links: [
        {
          path: "/metalizacja-tworzyw-sztucznych",
          anchorText:
            "Metalizacja tworzyw sztucznych i chromowanie plastiku (ABS, PC, PP)",
          badge: "SPECJALIZACJA POLIMEROWA",
          desc: "Szczegółowe parametry metalizacji wyprasek wtryskowych i dekoracyjnych efektów chromu na plastiku.",
        },
        {
          path: "/lakierowanie-tworzyw-sztucznych",
          anchorText:
            "Lakierowanie tworzyw sztucznych — Piano Black, Soft-Touch i RAL",
          badge: "USŁUGA KOMPLEMENTARNA",
          desc: "Przemysłowe lakierowanie detali plastikowych bez metalizacji lub w układach hybrydowych.",
        },
        {
          path: "/news/partnerstwo-z-wiodacym-producentem-lotniczym",
          anchorText:
            "Artykuł: Jak metalizacja próżniowa wpływa na wydajność materiałów?",
          badge: "BAZA WIEDZY INŻYNIERYJNEJ",
          desc: "Analiza wytrzymałości, pasywacji i zastępowania odlewów metalowych lekkimi polimerami.",
        },
      ],
    },
    schemaServiceType:
      "Usługowa metalizacja próżniowa PVD detali przemysłowych",
  },

  "plastic-metallization": {
    navLabel: "Metalizacja tworzyw sztucznych",
    shortSummary:
      "Chromowanie plastiku i metalizacja próżniowa wyprasek z ABS, PC, PP, PMMA i PA — efekt chromu, złota, satyny i czarnego chromu.",
        metaTitle: 'Metalizacja Tworzyw i Chromowanie Plastiku | STANIAX',
    metaDesc:
      "Profesjonalna metalizacja tworzyw sztucznych (metalizacja plastiku i chromowanie plastiku) w STANIAX. Lustrzany chrom, złoto i satyna na ABS, PC, PP, PMMA.",
    breadcrumbLabel: "Metalizacja tworzyw sztucznych (chromowanie plastiku)",
    heroBadge:
      "Ekologiczna alternatywa dla galwanizacji ABS · 0% Cr6+ · Dowolny polimer",
    h1: "Metalizacja tworzyw sztucznych — próżniowe chromowanie plastiku",
    lead: "Metalizacja tworzyw sztucznych (określana potocznie jako chromowanie plastiku lub metalizacja plastiku) pozwala nadać lekkim wypraskom wtryskowym oraz elementom drukowanym 3D perfekcyjny wygląd litego metalu. W zakładzie STANIAX nakładamy powłoki lustrzanego chromu, złota, miedzi oraz satynowego inoxu na detale z ABS, PC, PC/ABS, PMMA, PS, PA oraz poliolefin (PP/PE) bez ograniczeń klasycznej galwanizacji.",
    ctaPrimaryLabel: "Wyceń metalizację tworzyw sztucznych →",
    ctaSecondaryLabel: "Sprawdź tabelę kompatybilności tworzyw ↓",
    heroImageKey: "plasticMetaHero",
    heroImageAlt:
      "Detale z tworzyw sztucznych po metalizacji próżniowej w kolorach lustrzanego chromu, złota i różowego złota",
    metrics: [
      {
        value: 65,
        suffix: "%",
        label: "Redukcja masy vs odlew ZnAl",
        detail:
          "Zastąpienie ciężkich odlewów cynkowo-aluminiowych lub mosiężnych lekką wypraską z powłoką PVD",
      },
      {
        value: 12,
        suffix: "+",
        label: "Wariantów barwnych metalu",
        detail:
          "Chrom, złoto 14K–24K, rose gold, miedź, mosiądz, tytan, gunmetal i satynowy nikiel",
      },
      {
        value: 100,
        suffix: "%",
        label: "Wolne od chromu Cr6+ (RoHS)",
        detail:
          "Proces całkowicie zgodny z dyrektywami RoHS i REACH dla opakowań, elektroniki i automotive",
      },
    ],
    scopeSection: {
      h2: "Jakie tworzywa sztuczne metalizujemy i jak dobieramy technologię?",
      intro:
        "W klasycznej galwanizacji chemicznej można chromować niemal wyłącznie drogie gatunki tworzywa ABS/PC-ABS przez przeznaczony do trawienia w kwasie chromowym. Próżniowa metalizacja tworzyw sztucznych w STANIAX zdejmuje to ograniczenie: dzięki dedykowanym gruntom adhezyjnym i aktywacji fizykochemicznej uzyskujemy pełną przyczepność powłoki metalicznej na większości polimerów konstrukcyjnych i opakowaniowych.",
      cardTitle: "Zakres usług metalizacji i chromowania plastiku w STANIAX",
      cardSubtitle:
        "Od przygotowania niskoenergetycznych poliolefin po dekoracyjne barwienie Top Coat UV",
      highlights: [
        "Chromowanie próżniowe wyprasek wtryskowych z ABS, SAN, PS, PC, mieszanek PC/ABS, PMMA (akrylu), PA (poliamidu z włóknem szklanym) oraz PET.",
        "Metalizacja trudnosklejalnych tworzyw niskoenergetycznych PP (polipropylenu) i PE po aktywacji płomieniowej oraz gruntowaniu promotorami adhezji (CPO).",
        "Złocenie, miedziowanie i patynowanie tworzyw sztucznych poprzez precyzyjne dozowanie barwników kompleksowych w lakierze nawierzchniowym.",
        "Efekty specjalne: satyna (szczotkowane aluminium / matowy nikiel), przydymiony czarny chrom (Dark Chrome) oraz powłoki półprzepuszczalne pod podświetlenie LED.",
        "Metalizacja wydruków 3D (SLA, DLP, SLS, MJF) i modeli odlewanych z żywic poliuretanowych po szpachlowaniu i wygładzaniu podkładowym.",
        "Odporność na kosmetyki, alkohole etylowe, pot dłoni, detergenty i promieniowanie UV potwierdzana testami na życzenie klienta.",
      ],
      table: {
        caption:
          "Matryca kompatybilności tworzyw sztucznych w procesie metalizacji próżniowej STANIAX",
        headers: [
          "Tworzywo (Polimer)",
          "Energia powierzchniowa / Specyfika",
          "Wymagany system przygotowania i Base Coat",
          "Typowe zastosowania przemysłowe",
        ],
        rows: [
          [
            "ABS / SAN / ASA",
            "Średnia energia (38–42 mN/m), doskonała zwilżalność",
            "Mycie antystatyczne + lakier podkładowy akrylowo-poliuretanowy lub UV",
            "Emblematy, kratki nawiewów, obudowy AGD, oprawki kosmetyczne, trofea",
          ],
          [
            "PC (Poliwęglan) i PC/ABS",
            "Wysoka udarność, wrażliwość na agresywne rozpuszczalniki (ESC)",
            "Niskonaprężeniowy Base Coat zapobiegający mikropęknięciom naprężeniowym",
            "Odbłyśniki, ramki reflektorów, osłony elektroniki, klosze i przyciski",
          ],
          [
            "PP (Polipropylen) i PE",
            "Niska energia powierzchniowa (<30 mN/m), tworzywo niepolarne",
            "Aktywacja płomieniowa/plazmowa + promotor adhezji CPO + elastyczny Base Coat",
            "Nakrętki perfum i słoiczków kosmetycznych, zamknięcia butelek, znicze",
          ],
          [
            "PA6 / PA66 (Poliamid, w tym z GF) i BMC/PPS",
            "Wysoka higroskopijność (PA) i odporność termiczna",
            "Wygrzewanie odgazowujące przed procesem + podkład epoksydowo-termoutwardzalny",
            "Komponenty techniczne pod maską silnika, korpusy projektorów, uchwyty",
          ],
        ],
        footnote:
          "Nie jesteś pewien, z jakiego tworzywa wykonany jest Twój detal? Prześlij nam próbkę — nasi technolodzy dobiorą właściwy układ podkładowy i wykonają próbę przyczepności.",
      },
    },
    editorialSections: [
      {
        h2: "Chromowanie plastiku w próżni — dlaczego wypiera galwanizację i ciężkie metale?",
        paragraphs: [
          "Hasło „chromowanie plastiku” jeszcze dekadę temu kojarzyło się wyłącznie z kąpielami galwanicznymi. Dziś ze względu na unijne regulacje REACH (ograniczające stosowanie trójtlenku chromu) oraz nacisk na redukcję masy wyrobów, ciężar rynku przeniósł się na próżniową metalizację tworzyw sztucznych PVD. Wypraska z tworzywa sztucznego pokryta nanometryczną warstwą aluminium i twardym lakierem bezbarwnym jest wizualnie nieodróżnialna od detalu chromowanego galwanicznie, a waży o 60–70% mniej od odlewu znalowego (ZnAl) czy mosiężnego.",
          "Dla producentów opakowań kosmetycznych, armatury sanitarnej, oświetlenia czy akcesoriów meblowych oznacza to podwójną korzyść: niższy koszt wtrysku (możliwość stosowania tańszych granulatów PP lub PS zamiast drogiego ABS galwanicznego) oraz pełną swobodę kreowania kolorów, których tradycyjna galwanizacja w ogóle nie potrafi uzyskać.",
        ],
        subSections: [
          {
            h3: "Jak zapobiegamy wadom wtryskowym widocznym po metalizacji plastiku?",
            body: "Powłoka lustrzana działa jak szkło powiększające dla każdego błędu z procesu wtrysku: linii łączenia strumieni (weld lines), zapadnięć skurczowych (sink marks), smug wilgoci czy naprężeń wewnętrznych. W STANIAX wspieramy klientów już na etapie prób formy wtryskowej:",
            bullets: [
              "Dobieramy grubość i rozlewność lakieru podkładowego (od 12 do 25 µm), aby zamaskować drobną chropowatość gniazda formy bez zalewania ostrych krawędzi.",
              "Stosujemy wygrzewanie relaksacyjne (annealing) detali z PC i PMMA przed lakierowaniem, co eliminuje zjawisko pękania naprężeniowego (crazing) po kontakcie z rozpuszczalnikami.",
              "Kontrolujemy czystość jonizacyjną detalu tuż przed wejściem do kabiny lakierniczej, ponieważ naelektryzowany plastik silnie przyciąga włókna z otoczenia.",
            ],
          },
          {
            h3: "Metalizacja pojedynczych detali z plastiku (renowacja chromów samochodowych)",
            body: "Oprócz produkcji seryjnej dla przemysłu realizujemy renowację plastikowych elementów dekoracyjnych z samochodów osobowych, zabytkowych i motocykli: emblematów, atrap chłodnicy (grilli), listew ozdobnych, obudów lusterek oraz ramek zegarów. Usuwamy starą, łuszczącą się powłokę, naprawiamy drobne ubytki tworzywa i nakładamy nowe lustrzane wykończenie chromowe lub satynowe.",
          },
        ],
      },
      {
        h2: "Paleta wykończeń metalicznych na tworzywach sztucznych w STANIAX",
        paragraphs: [
          "Dzięki barwieniu warstwy Top Coat transparentnymi pigmentami metalokompleksowymi o wysokiej światłotrwałości, na tym samym detalu z tworzywa możemy wyprodukować całą rodzinę wariantów kolorystycznych (np. linia podstawowa w srebrnym chromie, linia premium w złocie 24K i edycja limitowana w odcieniu Rose Gold lub Dark Chrome).",
        ],
        subSections: [
          {
            h3: "Lustrzany połysk (High Gloss Mirror) vs Satynowy Mat (Brushed / Satin Metal)",
            body: "Dodając środki matujące do lakieru nawierzchniowego lub modyfikując mikrostrukturę podkładu, uzyskujemy efekt chłodnego, satynowego aluminium, tytanu lub stali nierdzewnej (Inox), na którym nie pozostają odciski palców — rozwiązanie szczególnie cenione w panelach AGD, przyciskach spłuczek i wnętrzach samochodowych.",
          },
        ],
      },
    ],
    showcase: {
      h2: "Przełącznik efektów metalizacji na tworzywach sztucznych",
      subtitle:
        "Wybierz jedno z 3 najpopularniejszych wykończeń PVD na plastiku, aby porównać parametry optyczne, odporność i typowe zastosowania.",
      ctaLabel: "Wyceń ten efekt na swoich detalach z tworzywa →",
      options: [
        {
          id: "mirror-chrome",
          label: "Lustrzany Chrom (Mirror Chrome)",
          badge: "NAJCZĘŚCIEJ WYBIERANY",
          title: "Klasyczny lustrzany chrom PVD na ABS, PC i PP",
          description:
            "Idealnie gładka, srebrzysta powłoka o refleksji >95% zastępująca chrom galwaniczny. Stosowana w emblematach motoryzacyjnych, oprawach oświetleniowych, przyciskach i zamknięciach opakowań.",
          specs: [
            {
              label: "Stopień połysku (60°)",
              value: "92 – 98 GU (efekt pełnego lustra)",
            },
            {
              label: "Odcień barwny",
              value: "Chłodny srebrny chrom / czyste aluminium",
            },
            {
              label: "Twardość ołówkowa Top Coat",
              value: "2H – 4H (w układzie utwardzanym UV)",
            },
          ],
          previewStyle:
            "linear-gradient(135deg, #cbd5e1 0%, #ffffff 48%, #64748b 100%)",
        },
        {
          id: "luxury-gold",
          label: "Złoto 24K & Rose Gold",
          badge: "SEGMENT BEAUTY & LUXURY",
          title:
            "Złoto szampańskie, żółte 24K, Rose Gold i miedź na opakowaniach",
          description:
            "Uzyskiwane przez nałożenie barwionego lakieru Top Coat na lustrzaną warstwę aluminium PVD. Zapewnia głębię szlachetnego kruszcu przy zachowaniu niskiej masy tworzywa.",
          specs: [
            {
              label: "Dostępne odcienie",
              value: "Złoto 14K / 18K / 24K, Szampan, Rose Gold, Miedź",
            },
            {
              label: "Odporność chemiczna",
              value: "Odporność na etanol, perfumy i olejki kosmetyczne",
            },
            {
              label: "Powtarzalność koloru",
              value: "Kontrola wzorca ΔE < 1,0 między partiami",
            },
          ],
          previewStyle:
            "linear-gradient(135deg, #d97706 0%, #fef08a 48%, #92400e 100%)",
        },
        {
          id: "satin-dark-chrome",
          label: "Satyna Inox & Czarny Chrom",
          badge: "NOWOCZESNY DESIGN / AGD",
          title:
            "Satynowy nikiel, tytan oraz przydymiony Dark Chrome (Gunmetal)",
          description:
            "Stonowane, techniczne wykończenie metaliczne z właściwościami anti-fingerprint. Rozchwytywane w nowoczesnym sprzęcie audio, ekspresach do kawy, armaturze i tuningu aut.",
          specs: [
            {
              label: "Stopień połysku (60°)",
              value: "15 – 45 GU (satyna) lub 85 GU (Dark Chrome)",
            },
            {
              label: "Właściwości użytkowe",
              value: "Ograniczona widoczność odcisków palców",
            },
            {
              label: "Odporność na ścieranie",
              value: "Lakier 2K poliuretanowy o podwyższonej odporności",
            },
          ],
          previewStyle:
            "linear-gradient(135deg, #1e293b 0%, #64748b 50%, #0f172a 100%)",
        },
      ],
    },
    processSection: {
      h2: "Etapy metalizacji tworzyw sztucznych w zakładzie STANIAX",
      subtitle:
        "Proces zoptymalizowany pod kątem niskiej temperatury obróbki, bezpiecznej dla delikatnych wyprasek cienkościennych.",
      steps: [
        {
          num: "01",
          title: "Weryfikacja tworzywa, odtłuszczanie i aktywacja",
          desc: "Usuwamy pozostałości antystatyków i środków z wtrysku, a dla polipropylenu (PP) i polietylenu (PE) wykonujemy aktywację powierzchni i gruntowanie adhezyjne.",
          param: "Napięcie powierzchniowe >40 mN/m",
        },
        {
          num: "02",
          title: "Natrysk lakieru podkładowego (Base Coat)",
          desc: "Nakładamy lakier wygładzający o niskiej agresywności rozpuszczalnikowej, który nie wywołuje spękań naprężeniowych w poliwęglanie (PC) ani PMMA.",
          param: "Gładkość lustrzana bez polerowania",
        },
        {
          num: "03",
          title: "Zimne napylanie aluminium w próżni PVD",
          desc: "W komorze próżniowej osadzamy warstwę aluminium 99,9% bez przegrzewania wypraski (temperatura detalu nie przekracza progu odkształcenia HDT tworzywa).",
          param: "Zero deformacji cienkich ścianek",
        },
        {
          num: "04",
          title: "Barwienie i utwardzanie lakieru Top Coat",
          desc: "Zabezpieczamy metalizowany plastik lakierem bezbarwnym lub barwionym na kolor złota/miedzi/tytanu, nadając docelową twardość i połysk.",
          param: "Test taśmy 3M i siatki nacięć ISO 2409",
        },
      ],
    },
    marqueeSection: {
      h2: "Detale z tworzyw sztucznych, które najczęściej metalizujemy",
      subtitle:
        "Wspieramy producentów opakowań, branżę motoryzacyjną, meblarską, zabawkarską i reklamową POS.",
      row1: [
        "Nakrętki słoiczków i butelek kosmetycznych (PP / ABS)",
        "Oprawki szminek, tuszy do rzęs i kompaktów",
        "Atrapy chłodnicy (grille) i emblematy samochodowe",
        "Pokrętła pralek, piekarników i sprzętu audio",
        "Uchwyty meblowe, nóżki i listwy wykończeniowe",
        "Przyciski spłuczek łazienkowych i rozety",
        "Figurki, trofea, puchary i gadżety reklamowe 3D",
        "Znicze, kapliczki i galanteria nagrobna z PS/PP",
      ],
      row2: [
        "Chromowanie ABS i PC/ABS",
        "Metalizacja polipropylenu (PP) z aktywacją",
        "Metalizacja akrylu (PMMA) i polistyrenu (PS)",
        "Metalizacja poliamidu (PA6 / PA66)",
        "Metalizacja wydruków 3D SLA / SLS",
        "Złocenie próżniowe tworzyw sztucznych",
        "Czarny chrom i satyna na plastiku",
        "Powłoki pod podświetlenie laserowe (Laser Etching)",
      ],
      b2bCards: [
        {
          badge: "BRANŻA BEAUTY & PACKAGING",
          h3: "Wielkoseryjna metalizacja zamknięć kosmetycznych",
          body: "Zapewniamy idealną powtarzalność odcieni złota, srebra i rose gold między kolejnymi dostawami nakrętek, kołnierzy atomizerów oraz słoiczków dla marek kosmetycznych.",
          spec: "Odporność na testy perfumeryjne i ścieranie w transporcie",
        },
        {
          badge: "AUTOMOTIVE & TUNING",
          h3: "Chromowanie i dechroming (Dark Chrome) detali plastikowych",
          body: "Odnawiamy fabryczne chromy na elementach z ABS/PC lub zmieniamy ich wykończenie na przydymiony czarny chrom i satynę z pełną odpornością na warunki drogowe.",
          spec: "Możliwość realizacji od 1 sztuki lub kompletu listew",
        },
        {
          badge: "MEBLARSTWO I ARMATURA",
          h3: "Lekkie zamienniki odlewów znalowych i mosiężnych",
          body: "Pomagamy producentom uchwytów, przycisków spłuczek i opraw oświetleniowych zastąpić drogie w obróbce odlewy metalowe wypraskami pokrytymi trwałą powłoką PVD.",
          spec: "Redukcja kosztu jednostkowego detalu o 35–50%",
        },
      ],
    },
    caseStudiesSection: {
      h2: "Przykłady metalizacji tworzyw sztucznych (sprawdź detale pod lupą)",
      subtitle:
        "Najedź kursorem na zdjęcie, aby ocenić głębię lustra i nasycenie kolorów na wypraskach polimerowych.",
      items: [
        {
          badge: "KOSMETYKI & PERFUMERIA",
          h3: "Kolekcja opakowań z ABS i PP w wykończeniu złota, fioletu i chromu",
          desc: "Zastosowanie wysoko-połyskowego podkładu UV oraz barwionych lakierów Top Coat pozwoliło uzyskać lustrzaną głębię w 6 odcieniach kolorystycznych na jednej formie wtryskowej.",
          param: "Połysk zwierciadlany: >95 GU (kąt 60°)",
          imageKey: "colorfulPackaging",
          alt: "Kolorowe metalizowane opakowania kosmetyczne z tworzyw sztucznych w odcieniach złota, różu i chromu",
        },
        {
          badge: "ZAMKNIĘCIA I ATOMIZERY",
          h3: "Seryjna metalizacja próżniowa nakrętek polipropylenowych (PP)",
          desc: "Po aktywacji powierzchniowej polipropylenu osiągnięto pełną przyczepność powłoki złotej i srebrnej bez odprysków na krawędziach gwintu.",
          param: "Partia produkcyjna: 50 000+ szt. z pełną powtarzalnością",
          imageKey: "packagingAfter",
          alt: "Złote i srebrne nakrętki z tworzywa sztucznego po procesie metalizacji próżniowej w STANIAX",
        },
        {
          badge: "MOTORYZACJA I DETALE TECHNICZNE",
          h3: "Chromowanie próżniowe komponentu motoryzacyjnego z PC/ABS",
          desc: "Odtworzenie fabrycznej powłoki chromowej z zabezpieczeniem dwuskładnikowym lakierem poliuretanowym odpornym na sól drogową i promieniowanie UV.",
          param: "Odporność korozyjna i termiczna: -30°C do +110°C",
          imageKey: "automotiveAfter",
          alt: "Element motoryzacyjny z tworzywa sztucznego pokryty lustrzanym chromem próżniowym",
        },
      ],
    },
    faqSection: {
      h2: "Najczęstsze pytania o metalizację tworzyw sztucznych i chromowanie plastiku",
      subtitle:
        "Wyjaśniamy kwestie techniczne związane z doborem tworzywa, przygotowaniem form i trwałością powłoki.",
      items: [
        {
          q: "Czy można chromować każdy rodzaj plastiku (np. polipropylen PP lub poliwęglan PC)?",
          a: "Tak, dzięki technologii metalizacji próżniowej PVD łączonej z dedykowanymi systemami lakierów podkładowych chromujemy niemal wszystkie tworzywa konstrukcyjne i opakowaniowe: ABS, PC, PC/ABS, PMMA, PS, SAN, PA oraz tworzywa trudnosklejalne takie jak PP i PE (po aktywacji płomieniowej i zastosowaniu promotora adhezji). Jedyne tworzywa niewskazane do trwałego powlekania to czysty teflon (PTFE) i polioksymetylen (POM) ze względu na ekstremalnie niską przyczepność.",
        },
        {
          q: "Ile kosztuje chromowanie plastiku / metalizacja tworzyw sztucznych?",
          a: "W produkcji seryjnej koszt jednostkowy zależy od gabarytu detalu (ile sztuk mieści się na jednym bębnie wsadowym komory próżniowej), rodzaju tworzywa i wybranego lakieru nawierzchniowego — przy małych detalach opakowaniowych są to kwoty od kilkudziesięciu groszy do kilku złotych za sztukę. Przy pojedynczych detalach motoryzacyjnych (np. renowacja grilla, listew czy emblematów) wycena jest indywidualna i zaczyna się od ok. 150–250 zł.",
        },
        {
          q: "Czy powłoka chromowana na plastiku nie odpryskuje i nie ściera się od dotyku?",
          a: "Prawidłowo wykonana metalizacja próżniowa z lakierem podkładowym i utwardzanym lakierem nawierzchniowym (Top Coat 2K lub UV) osiąga najwyższą klasę przyczepności 0/5B wg normy ISO 2409. Powłoka nie łuszczy się, nie ciemnieje od potu dłoni i jest odporna na codzienne użytkowanie oraz mycie.",
        },
        {
          q: "Czy wykonujecie metalizację wydruków 3D (żywic SLA, SLS, FDM)?",
          a: "Tak, metalizujemy prototypy, modele wystawowe i statuetki z druku 3D. Najlepszy efekt lustra bezpośrednio po lakierowaniu podkładowym dają wydruki żywiczne SLA/DLP/PolyJet. Wydruki proszkowe SLS/MJF oraz filamentowe FDM wymagają wcześniejszego wygładzenia (szpachlowania natryskowego i szlifowania), aby ukryć warstwy druku przed nałożeniem lustrzanego chromu.",
        },
        {
          q: "Dlaczego na wtryskowni nie wolno używać silikonowych rozdzielaczy do form?",
          a: "Oleje silikonowe migrują w głąb wierzchniej warstwy tworzywa sztucznego i nie dają się całkowicie usunąć nawet podczas mycia rozpuszczalnikowego. Podczas nakładania lakieru podkładowego silikon odpycha lakier, tworząc tzw. kratery i oczka (rybie oka), które po napyleniu aluminium stają się bardzo widoczne. Do detali przeznaczonych do metalizacji należy stosować wyłącznie środki rozdzielające bezsilikonowe.",
        },
        {
          q: "Czy można uzyskać na plastiku kolor złota, miedzi lub szczotkowanej stali?",
          a: "Tak. Po napyleniu srebrzystej warstwy aluminium w komorze próżniowej nakładamy lakier nawierzchniowy barwiony transparentnymi pigmentami. Pozwala to uzyskać dowolny odcień złota (14K, 18K, 24K, szampan, rose gold), miedzi, mosiądzu, brązu, przydymionego czarnego chromu, a przy zastosowaniu lakierów satynowych — efekt matowego niklu lub stali inox.",
        },
      ],
    },
    quoteSection: {
      h2: "Zamów wycenę metalizacji tworzyw sztucznych lub chromowania detali",
      intro:
        "Podaj symbol tworzywa (np. ABS, PC, PP), wymiary elementu, oczekiwany kolor wykończenia oraz liczbę sztuk. Chętnie wykonamy bezpłatną ocenę technologiczną Twojego projektu.",
      projectTypes: [
        "Seryjna metalizacja tworzyw sztucznych (wtryskownia / producent B2B)",
        "Metalizacja opakowań kosmetycznych (nakrętki, słoiczki, flakony)",
        "Chromowanie detali samochodowych / motocyklowych z plastiku",
        "Metalizacja prototypów i wydruków 3D (chrom / złoto)",
        "Próby przyczepności i wzorniki kolorystyczne na tworzywie klienta",
      ],
      submitLabel: "Wyślij zapytanie o metalizację tworzywa",
    },
    seeAlsoSection: {
      h2: "Sprawdź również pokrewne usługi i artykuły",
      links: [
        {
          path: "/lakierowanie-tworzyw-sztucznych",
          anchorText:
            "Lakierowanie tworzyw sztucznych — kolory RAL/NCS, mat i Soft-Touch",
          badge: "USŁUGA LAKIERNICZA",
          desc: "Zobacz pełną ofertę lakierowania natryskowego wyprasek plastikowych bez warstwy metalu.",
        },
        {
          path: "/metalizacja-prozniowa",
          anchorText:
            "Metalizacja próżniowa PVD — opis technologii i parametrów komory",
          badge: "TECHNOLOGIA PVD",
          desc: "Dowiedz się więcej o fizyce osadzania aluminium w wysokiej próżni.",
        },
        {
          path: "/news/metalizacja-prozniowa-rewolucjonizuje-branze-beauty",
          anchorText:
            "Artykuł: Jak metalizacja plastiku rewolucjonizuje opakowania w branży Beauty",
          badge: "CASE STUDY BRANŻY BEAUTY",
          desc: "Przeczytaj o trendach w wykańczaniu szminek, kompaktów i zamknięć perfum.",
        },
      ],
    },
    schemaServiceType:
      "Metalizacja próżniowa tworzyw sztucznych i chromowanie plastiku",
  },

  "plastic-painting": {
    navLabel: "Lakierowanie tworzyw sztucznych",
    shortSummary:
      "Przemysłowe lakierowanie plastiku (ABS, PC, PP, PA, PMMA) — wykończenia Piano Black, Soft-Touch, głęboki mat, metalik i pełna paleta RAL/NCS.",
    metaTitle: "Lakierowanie Tworzyw Sztucznych i Plastiku | STANIAX",
    metaDesc:
      "Usługowe lakierowanie tworzyw sztucznych i elementów plastikowych w STANIAX (Józefów k. Warszawy). Piano Black, Soft-Touch, mat, metalik, kolory RAL i NCS.",
    breadcrumbLabel: "Lakierowanie tworzyw sztucznych i plastiku",
    heroBadge:
      "Systemy 2K poliuretanowe, akrylowe, Soft-Touch i UV · Klasa adhezji 5B",
    h1: "Lakierowanie tworzyw sztucznych i elementów plastikowych",
    lead: "Profesjonalne lakierowanie tworzyw sztucznych (lakierowanie plastiku) nadaje surowym wypraskom wtryskowym jednolity kolor, szlachetną fakturę w dotyku oraz odporność na zarysowania, promieniowanie UV i agresywną chemię. W lakierni przemysłowej STANIAX w Józefowie pod Warszawą malujemy detale z ABS, PC, PP, PA, PS i PMMA w wykończeniach od głębokiego połysku Piano Black, przez aksamitny Soft-Touch, po powłoki strukturalne i metaliczne.",
    ctaPrimaryLabel: "Wyceń lakierowanie tworzyw sztucznych →",
    ctaSecondaryLabel: "Zobacz 5 systemów wykończeń na plastiku ↓",
    heroImageKey: "plasticPaintHero",
    heroImageAlt:
      "Elementy z tworzyw sztucznych po przemysłowym lakierowaniu natryskowym w połysku i macie w zakładzie STANIAX",
    metrics: [
      {
        value: 5,
        label: "Systemów wykończeń powierzchni",
        detail:
          "Wysoki połysk (Piano Black), Głęboki Mat, Soft-Touch, Struktura i Metalik/Perła",
      },
      {
        value: 90,
        prefix: ">",
        suffix: " GU",
        label: "Połysk lakierów Piano Black",
        detail:
          "Lustrzana głębia lakierów dwuskładnikowych 2K PUR i UV mierzona pod kątem 60°",
      },
      {
        value: 5,
        suffix: "B",
        label: "Przyczepność wg ISO 2409",
        detail:
          "Najwyższa klasa adhezji powłoki lakierniczej do podłoża polimerowego w teście siatki nacięć",
      },
    ],
    scopeSection: {
      h2: "Zakres usług lakierowania plastiku i systemy powłokowe",
      intro:
        "Surowa wypraska bezpośrednio z wtryskarki często posiada różnice w połysku, widoczne linie łączenia strumieni tworzywa lub zmatowienia, a wiele technicznych granulatów (np. z domieszką talku lub włókna szklanego) nie pozwala uzyskać estetycznej powierzchni w masie. Lakierowanie tworzyw sztucznych w STANIAX rozwiązuje ten problem, podnosząc wyrób do standardu premium przy zachowaniu ścisłej powtarzalności barwnej między różnymi komponentami tego samego produktu.",
      cardTitle: "Możliwości naszej lakierni tworzyw sztucznych",
      cardSubtitle:
        "Dobór chemii lakierniczej pod kątem elastyczności, odporności na ścieranie i temperatury pracy detalu",
      highlights: [
        "Lakierowanie wyprasek w pełnej palecie wzorników RAL Classic, RAL Design, NCS oraz dorabianie lakierów wg indywidualnego wzorca klienta i numerów Pantone.",
        "Wykończenia Piano Black (wysoki połysk >90 GU) stosowane w konsolach automotive, frontach audio/RTV i ekskluzywnych opakowaniach.",
        "Powłoki elastyczne Soft-Touch (efekt aksamitnej, gumowanej skóry w dotyku) odporne na hydrolizę i ścieranie dla uchwytów, elektroniki użytkowej i kosmetyków.",
        "Lakiery strukturalne (drobna i gruba struktura) maskujące wady wtryskowe, rysy form i zapadnięcia skurczowe na dużych obudowach technicznych.",
        "Lakierowanie pod podświetlenie i grawerowanie laserowe (Day & Night Design / Laser Etching) dla przycisków samochodowych i paneli sterowniczych.",
        "Własne systemy maskowania (szablony, zatyczki silikonowe, taśmy precyzyjne) pozwalające lakierować wybrane strefy detalu z zachowaniem czystych pól stykowych.",
      ],
      table: {
        caption:
          "Porównanie 5 głównych systemów lakierowania tworzyw sztucznych w STANIAX",
        headers: [
          "System lakierniczy",
          "Poziom połysku (60°)",
          "Kluczowe właściwości użytkowe",
          "Główne zastosowania",
        ],
        rows: [
          [
            "Piano Black / High Gloss 2K & UV",
            "90 – 96 GU (lustrzany połysk)",
            "Wysoka twardość powierzchniowa (do 3H), głębia koloru, odporność na mikro-zarysowania i chemię",
            "Dekory wnętrz aut, obudowy sprzętu audio, flakony i zamknięcia premium",
          ],
          [
            "Głęboki Mat (Deep Matte) i Satyna",
            "3 – 10 GU (mat) / 20 – 35 GU (satyna)",
            "Brak refleksów świetlnych, nowoczesny wygląd techniczny, ograniczona widoczność odcisków palców",
            "Oprawy oświetleniowe, osłony kamer i czujników, elektronika użytkowa, meble",
          ],
          [
            "Soft-Touch (powłoka haptyczna PUR)",
            "2 – 5 GU (ultramatt aksamitny)",
            "Przyjemny, ciepły chwyt antypoślizgowy, tłumienie drgań i dźwięku, wysoka elastyczność",
            "Rączki urządzeń medycznych, obudowy powerbanków, nakrętki kosmetyczne, uchwyty",
          ],
          [
            "Lakier Strukturalny (Fine / Coarse Texture)",
            "5 – 15 GU (faktura ziarnista)",
            "Skuteczne krycie wad odlewniczych i wtryskowych (sink marks, weld lines) bez szpachlowania",
            "Obudowy maszyn, aparatury pomiarowej, kas fiskalnych i terminali płatniczych",
          ],
        ],
        footnote:
          "Dla każdego zlecenia dobieramy odpowiedni rozcieńczalnik i temperaturę suszenia (40–80°C), aby wykluczyć odkształcenie termiczne i pękanie naprężeniowe wyprasek.",
      },
    },
    editorialSections: [
      {
        h2: "Dlaczego lakierowanie tworzyw sztucznych wymaga specjalistycznej wiedzy chemicznej?",
        paragraphs: [
          "Malowanie plastiku diametralnie różni się od lakierowania stali czy aluminium. Tworzywa sztuczne są izolatorami elektrycznymi (silnie przyciągają kurz), mają niską przewodność cieplną, zróżnicowane napięcie powierzchniowe (od bardzo niskiego w PP/PE po średnie w ABS/PC) oraz są wrażliwe na agresywne rozpuszczalniki organiczne. Zastosowanie niewłaściwego lakieru na poliwęglanie (PC) lub PMMA powoduje już po kilku minutach siatkę mikropęknięć naprężeniowych (Environmental Stress Cracking), natomiast na polipropylenie (PP) bez aktywacji farba schodzi płatami przy pierwszym dotknięciu.",
          "W STANIAX każdy projekt rozpoczynamy od identyfikacji polimeru i doboru dedykowanego gruntu adhezyjnego (Adhesion Promoter) lub podkładu reaktywnego, który tworzy wiązania fizykochemiczne z podłożem bez naruszania jego wytrzymałości udarowej.",
        ],
        subSections: [
          {
            h3: "Spójność kolorystyczna detali z różnych tworzyw (ABS + PP + metal)",
            body: "Urządzenia elektroniczne, sprzęt AGD czy opakowania często składają się z kilku elementów wykonanych z różnych materiałów (np. korpus z ABS, elastyczna klapka z PP i metalowa ramka). Barwienie ich w masie granulatu zawsze daje widoczną różnicę odcienia (metameryzm). Lakierowanie wszystkich części jednym systemem nawierzchniowym w STANIAX gwarantuje 100% identyczny kolor i stopień połysku na całym wyrobie.",
            bullets: [
              "Kontrola barwy w oparciu o wzorce wzornikowe RAL, NCS i wzorce referencyjne klienta.",
              "Możliwość lakierowania jedno-, dwu- i trójwarstwowego (podkład adhezyjny + baza kolorystyczna/metaliczna + lakier bezbarwny 2K/UV).",
              "Pełna powtarzalność grubości powłoki i struktury na detalach o skomplikowanej geometrii 3D.",
            ],
          },
          {
            h3: "Przygotowanie antystatyczne i odtłuszczanie wyprasek przed malowaniem",
            body: "Przed wejściem do kabiny lakierniczej detale przechodzą mycie w dobranych alkoholach izopropylowych lub kąpielach wodnych z detergentami przemysłowymi, a następnie zdmuchiwanie zjonizowanym sprężonym powietrzem. Neutralizacja ładunku elektrostatycznego na powierzchni plastiku zapobiega osiadaniu drobinek pyłu i pozwala na idealne rozlanie lakieru typu Piano Black.",
          },
        ],
      },
      {
        h2: "Lakierowanie funkcjonalne: EMI/RFI, odporność UV i powłoki pod grawer laserowy",
        paragraphs: [
          "Poza funkcją dekoracyjną lakierowanie elementów plastikowych pełni w nowoczesnym przemyśle kluczowe zadania ochronne i inżynieryjne.",
        ],
        subSections: [
          {
            h3: "Ochrona polimerów przed żółknięciem UV i degradacją atmosferyczną",
            body: "Tworzywa takie jak ABS czy polistyren pod wpływem promieniowania słonecznego szybko ulegają fotodegradacji — żółkną, kredują i stają się kruche. Pokrycie wypraski dwuskładnikowym lakierem poliuretanowym lub akrylowym z absorberami UV zabezpiecza detal na wieloletnią eksploatację zewnętrzną (motoryzacja, elementy elewacyjne, oświetlenie uliczne).",
          },
        ],
      },
    ],
    showcase: {
      h2: "Interaktywny konfigurator 5 wykończeń lakierniczych na tworzywach",
      subtitle:
        "Kliknij interesujące Cię wykończenie, aby sprawdzić jego parametry połysku, twardości i odporności chemicznej.",
      ctaLabel: "Zamów wycenę lakierowania w tym wykończeniu →",
      options: [
        {
          id: "piano-black",
          label: "Piano Black (Wysoki Połysk)",
          badge: ">92 GU HIGH GLOSS",
          title: "Lustrzany wysoki połysk Piano Black / High Gloss 2K & UV",
          description:
            "Głęboka, szklista powłoka o maksymalnym połysku, utwardzana dwuskładnikowo (2K PUR) lub radiacyjnie (UV). Stosowana w panelach motoryzacyjnych, frontach audio i opakowaniach luksusowych.",
          specs: [
            { label: "Połysk pod kątem 60°", value: "90 – 96 GU" },
            {
              label: "Twardość ołówkowa",
              value: "2H – 3H (odporność na mikro-rysy)",
            },
            {
              label: "Podłoża docelowe",
              value: "ABS, PC/ABS, PMMA, PS, kompozyty",
            },
          ],
          previewStyle:
            "linear-gradient(135deg, #090d16 0%, #334155 48%, #020617 100%)",
        },
        {
          id: "soft-touch",
          label: "Soft-Touch (Efekt Gumy/Aksamitu)",
          badge: "HAPTYKA PREMIUM",
          title:
            "Aksamitna, elastyczna powłoka Soft-Touch o właściwościach antypoślizgowych",
          description:
            "Dwuskładnikowy system poliuretanowy dający wrażenie ciepłej, miękkiej skóry lub satynowego kauczuku w dotyku. Całkowicie eliminuje odblaski świetlne.",
          specs: [
            {
              label: "Połysk pod kątem 60°",
              value: "2 – 5 GU (głęboki, bezrefleksyjny mat)",
            },
            {
              label: "Właściwości haptyczne",
              value: "Efekt aksamitny / antypoślizgowy chwyt",
            },
            {
              label: "Odporność użytkowa",
              value: "Odporność na pot dłoni, kosmetyki i ścieranie",
            },
          ],
          previewStyle: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
        },
        {
          id: "deep-matte",
          label: "Głęboki Mat & Satyna RAL/NCS",
          badge: "DOWOLNY KOLOR RAL / NCS",
          title: "Jednorodny mat lub satyna w pełnej palecie RAL i NCS",
          description:
            "Nowoczesne wykończenie architektoniczne i przemysłowe. Nie przyciąga odcisków palców, zapewnia wysoką odporność na zarysowania i środki czyszczące.",
          specs: [
            {
              label: "Połysk pod kątem 60°",
              value: "5 – 12 GU (mat) / 20 – 35 GU (satyna)",
            },
            {
              label: "Dobór koloru",
              value: "Pełny wzornik RAL, NCS, Pantone lub wzorzec klienta",
            },
            {
              label: "Stabilność UV",
              value: "Filtry UV chroniące przed żółknięciem i blaknięciem",
            },
          ],
          previewStyle: "linear-gradient(135deg, #475569 0%, #64748b 100%)",
        },
        {
          id: "metallic-pearl",
          label: "Metalik / Perła / Kameleon",
          badge: "EFEKTY SPECJALNE",
          title:
            "Lakiery metaliczne (srebro, grafit, złoto) i perłowe w układzie 2-warstwowym",
          description:
            "Baza z ziarnem aluminiowym lub miką perłową pokryta bezbarwnym lakierem 2K w połysku lub macie. Nadaje obudowom plastikowym wygląd anodowanego aluminium.",
          specs: [
            {
              label: "Układ technologiczny",
              value: "Baza metaliczna/perłowa + Clear Coat 2K",
            },
            {
              label: "Uziarnienie pigmentu",
              value: "Drobne (efekt anodowany) lub grube (iskrzące)",
            },
            {
              label: "Odporność mechaniczna",
              value: "Standard automotive (wysoka odporność na ścieranie)",
            },
          ],
          previewStyle:
            "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 50%, #1e3a8a 100%)",
        },
        {
          id: "structural-texture",
          label: "Struktura Przemysłowa",
          badge: "MASKOWANIE WAD WTRYSKU",
          title:
            "Powłoka strukturalna (drobny lub gruby „piasek”) na obudowy techniczne",
          description:
            "Idealne rozwiązanie dla dużych wyprasek technicznych i odlewów, na których występują zapadnięcia skurczowe lub ślady po obróbce. Ukrywa niedoskonałości bez kosztownego szpachlowania.",
          specs: [
            {
              label: "Faktura powierzchni",
              value: "Drobnoziarnista lub średnioziarnista powtarzalna",
            },
            {
              label: "Grubość powłoki",
              value: "30 – 60 µm (wysoka zdolność krycia podłoża)",
            },
            {
              label: "Twardość i udarność",
              value: "Bardzo wysoka odporność na uderzenia i zarysowania",
            },
          ],
          previewStyle:
            "linear-gradient(135deg, #334155 0%, #1e293b 50%, #0f172a 100%)",
        },
      ],
    },
    processSection: {
      h2: "Jak przebiega przemysłowe lakierowanie tworzyw sztucznych?",
      subtitle:
        "Każdy etap prowadzony jest z kontrolą czystości antystatycznej i temperatury bezpiecznej dla geometrii wypraski.",
      steps: [
        {
          num: "01",
          title: "Mycie chemiczne i neutralizacja elektrostatyczna",
          desc: "Usuwamy zanieczyszczenia poprodukcyjne oraz ładunki elektrostatyczne z powierzchni tworzywa, a strefy niepodlegające malowaniu zabezpieczamy precyzyjnymi maskami.",
          param: "Zjonizowane powietrze bezpyłowe",
        },
        {
          num: "02",
          title: "Aplikacja promotora adhezji / podkładu na tworzywo",
          desc: "Dla PP, PE, PA i trudnych mieszanek nakładamy dedykowany grunt adhezyjny gwarantujący chemiczne związanie warstwy nawierzchniowej z polimerem.",
          param: "Przyczepność 5B wg ISO 2409",
        },
        {
          num: "03",
          title: "Natrysk lakieru bazowego i nawierzchniowego (Top Coat)",
          desc: "W kabinie lakierniczej aplikujemy bazę kolorystyczną RAL/NCS oraz lakier bezbarwny (wysoki połysk, mat, Soft-Touch lub strukturę) o ściśle kontrolowanej lepkości.",
          param: "Kontrola grubości 20–45 µm",
        },
        {
          num: "04",
          title: "Utwardzanie niskotemperaturowe / UV i kontrola jakości",
          desc: "Wygrzewamy powłokę w temperaturze 50–70°C bezpiecznej dla wypraski lub utwardzamy w tunelu UV, po czym weryfikujemy połysk (GU), odcień i przyczepność.",
          param: "100% kontroli wizualnej partii",
        },
      ],
    },
    marqueeSection: {
      h2: "Zastosowania lakierowania tworzyw sztucznych w przemyśle",
      subtitle:
        "Malujemy elementy dla branży elektronicznej, oświetleniowej, motoryzacyjnej, kosmetycznej i medycznej.",
      row1: [
        "Obudowy urządzeń elektronicznych i medycznych",
        "Fronty i pokrętła sprzętu AGD oraz audio",
        "Opakowania kosmetyczne Soft-Touch i matowe",
        "Dekory wnętrz samochodowych Piano Black",
        "Oprawy oświetleniowe LED i osłony architektoniczne",
        "Elementy kasków, gogli i sprzętu sportowego",
        "Uchwyty meblowe, włączniki i ramki gniazdek",
        "Gadżety reklamowe, statuetki i ekspozytory POS",
      ],
      row2: [
        "Lakierowanie ABS, SAN i ASA",
        "Lakierowanie poliwęglanu (PC) i PC/ABS",
        "Lakierowanie polipropylenu (PP) z aktywacją",
        "Lakierowanie poliamidu (PA6 / PA66 + GF)",
        "Lakierowanie PMMA (pleksi) i PS",
        "Powłoki gumowane Soft-Touch PUR",
        "Lakierowanie pod grawer laserowy (Day/Night)",
        "Maskowanie selektywne gwintów i styków",
      ],
      b2bCards: [
        {
          badge: "ELEKTRONIKA I APARATURA",
          h3: "Lakierowanie obudów technicznych z maskowaniem stref montażowych",
          body: "Malujemy obudowy urządzeń pomiarowych, sterowników i terminali w wykończeniu matowym, strukturalnym lub Soft-Touch z zachowaniem czystych gniazd i zatrzasków.",
          spec: "Możliwość łączenia z ekranowaniem przewodzącym wewnątrz obudowy",
        },
        {
          badge: "KOSMETYKI I DOBRA LUKSUSOWE",
          h3: "Opakowania w wykończeniu Soft-Touch i Piano Black",
          body: "Nadajemy słoiczkom, zakrętkom i kasetkom kosmetycznym aksamitny chwyt Soft-Touch lub lustrzaną czerń odporną na alkohole i olejki zawarte w kosmetykach.",
          spec: "Dobór kolorów wg Pantone, RAL i NCS",
        },
        {
          badge: "MOTORYZACJA I WNĘTRZA",
          h3: "Renowacja i produkcja dekorów Piano Black oraz Soft-Touch",
          body: "Usuwamy starą, lepiącą się powłokę gumowaną z przycisków i konsol samochodowych lub lakierujemy nowe serie detali wnętrza z odpornością na ścieranie i UV.",
          spec: "Wysoka odporność na testy ścieralności i kremy do rąk",
        },
      ],
    },
    caseStudiesSection: {
      h2: "Przykłady lakierowania detali z tworzyw sztucznych (sprawdź pod lupą)",
      subtitle:
        "Najedź kursorem na wybraną realizację, aby zobaczyć jakość rozlania lakieru i krawędzi.",
      items: [
        {
          badge: "KOLORYSTYKA SPECJALNA & METALIK",
          h3: "Seria detali z tworzyw sztucznych lakierowanych w wysokim połysku",
          desc: "Idealnie gładkie pokrycie skomplikowanych geometrycznie wyprasek z ABS/PC bez zacieków i wtrąceń pyłowych.",
          param: "Połysk powłoki: 94 GU · Przyczepność 5B",
          imageKey: "plasticPaint1",
          alt: "Lakierowane detale z tworzyw sztucznych o wysokim połysku w zakładzie STANIAX",
        },
        {
          badge: "SERIE PRODUKCYJNE B2B",
          h3: "Powtarzalne lakierowanie elementów technicznych i dekoracyjnych",
          desc: "Zastosowanie dedykowanego oprzyrządowania lakierniczego zapewniającego identyczną grubość warstwy na każdym detalu w partii.",
          param: "Odchyłka barwna między partiami: ΔE < 0,8",
          imageKey: "plasticPaint2",
          alt: "Seria przemysłowa elementów plastikowych podczas procesu lakierowania w STANIAX",
        },
        {
          badge: "POWŁOKI FUNKCJONALNE I OCHRONNE",
          h3: "Wykończenie ochronne UV na komponentach z poliwęglanu i ABS",
          desc: "Zabezpieczenie wyprasek pracujących w trudnych warunkach środowiskowych przed żółknięciem i zarysowaniem.",
          param: "Test komory UV i wilgotnościowej: pełna odporność",
          imageKey: "plasticPaint3",
          alt: "Gotowe komponenty z tworzyw sztucznych pokryte lakierem ochronnym w STANIAX",
        },
      ],
    },
    faqSection: {
      h2: "Najczęstsze pytania o lakierowanie tworzyw sztucznych i plastiku (FAQ)",
      subtitle:
        "Odpowiedzi na pytania technologiczne dotyczące trwałości, kolorów i przygotowania wyprasek.",
      items: [
        {
          q: "Czy lakier na plastiku nie będzie odpryskiwał przy zginaniu elementu?",
          a: "Nie, pod warunkiem zastosowania właściwego promotora adhezji oraz uelastycznionego lakieru dwuskładnikowego (2K PUR). Dla elastycznych tworzyw (takich jak PP, TPE czy cienkościenny ABS) dobieramy żywice o wysokiej elastyczności wydłużenia, dzięki czemu powłoka pracuje razem z podłożem i nie pęka przy montażu na zatrzaski.",
        },
        {
          q: "Czym jest powłoka Soft-Touch i jak zachowuje się w codziennym użytkowaniu?",
          a: "Soft-Touch to specjalny, dwuskładnikowy lakier poliuretanowy, który po utwardzeniu tworzy matową, aksamitną i lekko sprężystą powierzchnię przypominającą w dotyku miękką skórę lub satynowy kauczuk. Nowoczesne systemy Soft-Touch stosowane w STANIAX są odporne na hydrolizę (nie zaczynają się lepić po latach), pot dłoni, alkohol oraz ścieranie.",
        },
        {
          q: "Czy możecie dobrać kolor lakieru pod dostarczony wzorzec lub numer RAL / NCS / Pantone?",
          a: "Tak. Lakierujemy w pełnej palecie RAL Classic, RAL Design i NCS, a także recepturujemy lakiery pod fizyczny wzorzec dostarczony przez klienta (np. inny element obudowy) oraz kolory Pantone w wykończeniu połyskowym, satynowym lub matowym.",
        },
        {
          q: "Czy usuwacie starą, zniszczoną gumę (Soft-Touch) z plastików samochodowych?",
          a: "Tak, realizujemy renowację plastików wnętrza samochodów (przyciski, konsole, rączki drzwi, kratki nawiewów), w których fabryczna powłoka uległa degradacji i stała się lepka. Bezpiecznie usuwamy starą warstwę i nakładamy nowy, trwały lakier Soft-Touch, satynowy mat lub Piano Black.",
        },
        {
          q: "Jakie są minimalne ilości zamówienia przy lakierowaniu tworzyw sztucznych?",
          a: "Obsługujemy zarówno zlecenia jednostkowe i serie prototypowe (od kilku sztuk), jak i regularną produkcję wielkoseryjną dla wtryskowni i producentów OEM. Koszt uruchomienia koloru przy krótkiej serii jest kalkulowany przejrzyście na etapie wyceny.",
        },
        {
          q: "Czy lakierujecie tworzywa wzmocnione włóknem szklanym (np. PA6 + GF30)?",
          a: "Tak. Tworzywa poliamidowe wzmocnione włóknem szklanym (PA+GF) mają szorstką powierzchnię z wystającymi mikrowłóknami i są higroskopijne. Stosujemy dla nich wstępne wygrzewanie odgazowujące, podkład wypełniający (filler) izolujący włókna oraz warstwę nawierzchniową w wykończeniu gładkim lub strukturalnym.",
        },
      ],
    },
    quoteSection: {
      h2: "Wyceń lakierowanie tworzyw sztucznych i elementów plastikowych",
      intro:
        "Podaj rodzaj tworzywa, wymiary detalu, wybrany kolor (RAL/NCS/wzorzec) oraz wykończenie (Piano Black, mat, Soft-Touch, struktura). Odpowiadamy z konkretną kalkulacją w ciągu 24h.",
      projectTypes: [
        "Seryjne lakierowanie wyprasek z tworzyw sztucznych (B2B)",
        "Lakierowanie Soft-Touch / Piano Black (opakowania, elektronika)",
        "Lakierowanie strukturalne obudów technicznych i medycznych",
        "Renowacja plastików wnętrza samochodu (Soft-Touch / Piano Black)",
        "Wykonanie prób kolorystycznych i adhezyjnych na tworzywie",
      ],
      submitLabel: "Wyślij zapytanie o lakierowanie tworzywa",
    },
    seeAlsoSection: {
      h2: "Poznaj powiązane usługi wykańczania powierzchni w STANIAX",
      links: [
        {
          path: "/metalizacja-tworzyw-sztucznych",
          anchorText:
            "Metalizacja tworzyw sztucznych — chromowanie i złocenie plastiku",
          badge: "EFEKT CHROMU I ZŁOTA",
          desc: "Połącz lakierowanie z napylaniem próżniowym aluminium, aby uzyskać lustrzany metal na plastiku.",
        },
        {
          path: "/lakierowanie-natryskowe",
          anchorText:
            "Lakierowanie natryskowe i przemysłowe (RAL, NCS, metale i kompozyty)",
          badge: "LAKIERNIA PRZEMYSŁOWA",
          desc: "Sprawdź ofertę malowania natryskowego metali, odlewów i dużych serii przemysłowych.",
        },
        {
          path: "/lakierowanie-szkla-i-ceramiki",
          anchorText: "Lakierowanie szkła, flakonów perfum, butelek i ceramiki",
          badge: "SZKŁO & PACKAGING",
          desc: "Dekoracyjne lakierowanie opakowań szklanych w przejściach tonalnych (ombre), szronieniu i kryciu.",
        },
      ],
    },
    schemaServiceType:
      "Przemysłowe lakierowanie tworzyw sztucznych i elementów plastikowych",
  },

  "glass-painting": {
    navLabel: "Lakierowanie szkła i ceramiki",
    shortSummary:
      "Dekoracyjne i przemysłowe lakierowanie szkła: flakonów perfum, butelek alkoholowych, słoiczków kosmetycznych, zniczy oraz ceramiki.",
        metaTitle: 'Lakierowanie Szkła, Flakonów i Butelek B2B | STANIAX',
    metaDesc: 'Przemysłowe lakierowanie szkła (flakonów perfum, butelek, słoiczków, kloszy) w STANIAX. Ombre, mrożenie (frost), metalik, pełne krycie RAL/Pantone i ceramika.',
    breadcrumbLabel: 'Lakierowanie szkła, flakonów i ceramiki',
    heroBadge: 'Utwardzanie termiczne do 180°C + UV · Odporność na alkohole i pasteryzację',
    h1: 'Lakierowanie szkła, flakonów i butelek — produkcja B2B',
    lead: "Specjalistyczne lakierowanie szkła i ceramiki w zakładzie STANIAX pozwala przekształcić standardowe bezbarwne opakowania szklane — flakony perfum, butelki na alkohole premium, słoiczki kosmetyczne, szkło oświetleniowe oraz znicze — w unikalne wyroby o wysokiej wartości rynkowej. Realizujemy lakierowanie kryjące, transparentne, gradientowe (ombre), szronione (efekt mrożonego szkła frost) oraz metalizowane.",
    ctaPrimaryLabel: "Wyceń lakierowanie szkła i flakonów →",
    ctaSecondaryLabel: "Sprawdź efekty dekoracyjne na szkle ↓",
    heroImageKey: "glassPaintHero",
    heroImageAlt:
      "Lakierowane flakony szklane i butelki kosmetyczne z efektem przejścia tonalnego ombre i metalizacji w STANIAX",
    metrics: [
      {
        value: 180,
        suffix: " °C",
        label: "Utwardzanie termiczne na szkle",
        detail:
          "Wypalanie lakierów termo-reaktywnych i silanowych gwarantujące przyczepność do gładkiego szkła",
      },
      {
        value: 360,
        suffix: "°",
        label: "Obrotowy natrysk flakonów",
        detail:
          "Równomierna grubość powłoki i płynne przejścia tonalne (ombre) na całym obwodzie butelki",
      },
      {
        value: 100,
        suffix: "%",
        label: "Odporność na alkohol (perfumy)",
        detail:
          "Powłoki odporne na stężony etanol, olejki zapachowe i ścieranie na liniach rozlewniczych",
      },
    ],
    scopeSection: {
      h2: "Zakres lakierowania szkła opakowaniowego, technicznego i ceramiki",
      intro:
        "Szkło i szkliwiona ceramika to podłoża nieporowate o gładkiej strukturze krzemianowej, na których standardowe farby nie wykazują trwałej przyczepności, szczególnie w kontakcie z wilgocią lub alkoholem etylowym. W STANIAX stosujemy wodorozcieńczalne i rozpuszczalnikowe lakiery organiczne modyfikowane silanami (promotorami adhezji do grup OH szkła), utwardzane w piecach konwekcyjnych lub tunelach UV.",
      cardTitle: "Co lakierujemy w dziale szkła i ceramiki STANIAX?",
      cardSubtitle:
        "Rozwiązania dla producentów kosmetyków, rozlewni perfum, branży spirytusowej, oświetleniowej i dekoracyjnej",
      highlights: [
        "Flakony perfumeryjne i słoiczki kosmetyczne: lakierowanie transparentne (barwienie szkła w dowolnym kolorze Pantone/RAL), kryjące, perłowe oraz Soft-Touch.",
        "Butelki na alkohole premium (wódki, giny, likiery, wina musujące): pełne krycie, efekt lustrzanego złota/srebra/miedzi, cieniowanie ombre oraz okienka rewizyjne.",
        "Efekt mrożonego szkła (Frost / Satin Glass) uzyskiwany metodą bezpiecznego lakierowania matującego bez agresywnego trawienia kwasem fluorowodorowym.",
        "Szkło oświetleniowe, klosze lamp, żyrandole, szkło laboratoryjne i dekoracyjne (wazony, świeczniki, bombki, znicze szklane).",
        "Ceramika użytkowa, reklamowa i techniczna: kubki, kafle, osłonki ceramiczne, porcelana i kamionka w wykończeniach metalicznych, matowych i połyskowych.",
        "Przygotowanie powierzchni pod dalsze zdobienie: nasze powłoki są w pełni kompatybilne z późniejszym hot-stampingiem (złoceniem na gorąco), sitodrukiem i tampodrukiem.",
      ],
      table: {
        caption:
          "Specyfikacja efektów lakierowania szkła i ceramiki w zakładzie STANIAX",
        headers: [
          "Efekt wykończenia na szkle",
          "Przepuszczalność światła",
          "Charakterystyka technologiczna",
          "Typowe zastosowanie B2B",
        ],
        rows: [
          [
            "Lakierowanie transparentne i Ombre (Gradient)",
            "50 – 90% (przejrzyste barwienie)",
            "Barwniki rozpuszczalne w żywicy o zerowym zmętnieniu; płynne przejście z koloru do bezbarwnego szkła",
            "Flakony perfum, słoiczki kremów, klosze oświetleniowe, świeczniki",
          ],
          [
            "Efekt mrożonego szkła (Frost / Szronienie)",
            "30 – 60% (światło rozproszone)",
            "Jedwabista w dotyku powłoka rozpraszająca światło, odporna na tłuste odciski palców",
            "Butelki wódek i ginów, flakony kosmetyczne, klosze lamp LED",
          ],
          [
            "Pełne krycie (Opaque Gloss / Matte / Soft-Touch)",
            "0 – 5% (ochrona zawartości przed UV)",
            "Całkowita blokada promieniowania światła chroniąca światłoczułe formuły kosmetyczne (retinol, wit. C)",
            "Słoiczki i butelki dermokosmetyków, butelki alkoholowe edycji limitowanych",
          ],
          [
            "Metalizacja szkła (Złoto / Srebro / Miedź / Kameleon)",
            "0% (lustro pełne) lub 40% (półprzepuszczalne)",
            "Połączenie napylania próżniowego PVD z termoutwardzalnym lakierem ochronnym na szkle",
            "Ekskluzywne alkohole, perfumy niszowe, znicze premium, ceramika ozdobna",
          ],
        ],
        footnote:
          "Na życzenie wykonujemy maskowanie gwintu szyjki butelki (neck masking) oraz dna, aby zapewnić bezproblemowe zakręcanie atomizerów i stabilny transport na taśmie rozlewniczej.",
      },
    },
    editorialSections: [
      {
        h2: "Dlaczego marki kosmetyczne i alkoholowe wybierają lakierowanie szkła zamiast szkła barwionego w masie?",
        paragraphs: [
          "Zakup szkła barwionego w masie w hucie szkła wiąże się z ogromnymi minimami produkcyjnymi (często rzędu kilkuset tysięcy butelek na jeden wytop w wannie szklarskiej) oraz ograniczoną paletą kilku podstawowych kolorów (bursztyn, zieleń, kobalt). Przemysłowe lakierowanie szkła w STANIAX pozwala wykorzystać dostępny od ręki, standardowy bezbarwny flakon lub słoiczek i nadać mu dowolny, unikalny kolor marki już od partii kilkuset lub kilku tysięcy sztuk.",
          "Co więcej, lakierowanie powierzchniowe otwiera dostęp do efektów, których nie da się uzyskać w hucie szkła: dwukolorowych przejść tonalnych (ombre), powłok perłowych, miękkiego w dotyku wykończenia Soft-Touch na szkle czy selektywnego metalizowania próżniowego.",
        ],
        subSections: [
          {
            h3: "Odporność lakierowanego szkła na perfumy, alkohole i ścieranie na liniach rozlewniczych",
            body: "Największym wyzwaniem przy lakierowaniu flakonów perfumeryjnych i butelek alkoholowych jest kontakt powłoki ze stężonym alkoholem etylowym (80–96%) oraz olejkami zapachowymi podczas nalewania i użytkowania, a także tarcie butelek o siebie na transporterach. W STANIAX rozwiązujemy ten problem poprzez:",
            bullets: [
              "Stosowanie silanowych promotorów przyczepności tworzących trwałe wiązania kowalencyjne Si-O-Si z powierzchnią szkła.",
              "Wygrzewanie (wypalanie) polakierowanego szkła w temperaturze 150–180°C lub sieciowanie promieniami UV, co zapewnia pełną odporność chemiczną i twardość ołówkową powłoki.",
              "Precyzyjne maskowanie szyjki i pierścienia zaciskowego (neck finish FEA 15/18/20), dzięki czemu lakier nie dostaje się pod kołnierz pompki atomizera.",
            ],
          },
          {
            h3: "Ochrona kosmetyków światłoczułych i kompatybilność z sitodrukiem / hot-stampingiem",
            body: "Kryjące lakierowanie słoiczków i butelek z bezbarwnego szkła (np. w kolorze głębokiej czerni, bieli lub kobaltu z filtrem UV) skutecznie blokuje promieniowanie słoneczne degradujące składniki aktywne kosmetyków naturalnych. Jednocześnie nasze systemy lakiernicze są zoptymalizowane pod kątem napięcia powierzchniowego, aby drukarnie mogły bezpośrednio na polakierowanym flakonie wykonać trwały nadruk sitodrukowy lub złocenie hot-stamping.",
          },
        ],
      },
      {
        h2: "Lakierowanie i metalizacja ceramiki użytkowej, reklamowej oraz technicznej",
        paragraphs: [
          "Oprócz opakowań szklanych lakierujemy i metalizujemy wyroby ceramiczne, porcelanowe oraz kamionkowe: od świec zapachowych w naczyniach ceramicznych, przez osłonki doniczek i figurki dekoracyjne, po izolatory i detale techniczne.",
        ],
        subSections: [
          {
            h3: "Przygotowanie podłoży szkliwionych i biskwitowych",
            body: "Dla ceramiki nieszkliwionej (porowatej) stosujemy podkłady uszczelniające pory i zapobiegające „wpijaniu” lakieru nawierzchniowego, natomiast dla gładkiej ceramiki szkliwionej — proces aktywacji silanowej identyczny jak dla szkła flakonowego.",
          },
        ],
      },
    ],
    showcase: {
      h2: "Interaktywny podgląd 3 efektów lakierowania flakonów i butelek szklanych",
      subtitle:
        "Wybierz wariant wykończenia szkła, aby poznać jego przepuszczalność światła, temperaturę utwardzania i możliwości personalizacji.",
      ctaLabel: "Zamów wycenę tego efektu na swoich opakowaniach szklanych →",
      options: [
        {
          id: "glass-ombre",
          label: "Gradient Ombre & Transparent",
          badge: "PERFUMERIA & KOSMETYKI",
          title:
            "Przejście tonalne Ombre (jedno- lub dwukolorowe) i barwienie transparentne",
          description:
            "Płynne cieniowanie koloru od nasyconego dna lub ramion butelki do krystalicznie przejrzystego szkła, pozwalające wyeksponować poziom płynu wewnątrz flakonu.",
          specs: [
            {
              label: "Przepuszczalność światła",
              value: "Regulowana od 10% do 90% wzdłuż wysokości flakonu",
            },
            {
              label: "Odporność na alkohol",
              value: "Pełna odporność na etanol i kompozycje zapachowe",
            },
            {
              label: "Dalsze zdobienie",
              value: "Gotowe pod sitodruk, tampodruk i hot-stamping",
            },
          ],
          previewStyle:
            "linear-gradient(180deg, rgba(30,58,138,0.95) 0%, rgba(59,130,246,0.55) 55%, rgba(226,232,240,0.2) 100%)",
        },
        {
          id: "glass-frost",
          label: "Szronienie (Frost) & Soft-Touch",
          badge: "ALKOHOLE & SKINCARE",
          title:
            "Efekt mrożonego szkła (Frost) oraz aksamitna powłoka Soft-Touch na szkle",
          description:
            "Szlachetny, satynowy mat rozpraszający światło bez konieczności trawienia kwasowego. Dostępny w wersji naturalnego szronu lub barwionej w dowolnym odcieniu pastelowym i ciemnym.",
          specs: [
            {
              label: "Stopień połysku (60°)",
              value: "4 – 12 GU (jedwabisty mat bez smug i odcisków palców)",
            },
            {
              label: "Utwardzanie powłoki",
              value: "Termiczne w piecu (150–180°C)",
            },
            {
              label: "Ekologia procesu",
              value: "100% zgodności z recyklingiem stłuczki szklanej",
            },
          ],
          previewStyle:
            "linear-gradient(135deg, #cbd5e1 0%, #f1f5f9 50%, #94a3b8 100%)",
        },
        {
          id: "glass-metallic",
          label: "Pełne Krycie & Lustrzane Złoto/Chrom",
          badge: "EDYCJE LIMITOWANE PREMIUM",
          title:
            "Lakierowanie kryjące Piano Black / Pantone oraz metalizacja próżniowa szkła",
          description:
            "Całkowite pokrycie butelki lub słoiczka głębokim kolorem kryjącym lub próżniową warstwą lustrzanego złota, srebra i miedzi. Chroni zawartość przed światłem UV.",
          specs: [
            {
              label: "Blokada promieniowania UV",
              value: "Do 100% ochrony światłoczułych formuł kosmetycznych",
            },
            {
              label: "Maskowanie techniczne",
              value: "Czysty gwint szyjki (FEA / GPI) i dno butelki",
            },
            {
              label: "Efekty specjalne",
              value: "Lustro weneckie (półprzepuszczalne) pod podświetlenie",
            },
          ],
          previewStyle:
            "linear-gradient(135deg, #b45309 0%, #fde047 50%, #78350f 100%)",
        },
      ],
    },
    processSection: {
      h2: "4 etapy przemysłowego lakierowania szkła i ceramiki w STANIAX",
      subtitle:
        "Zapewniamy wysoką przyczepność i czystość optyczną na każdej sztuce w partii.",
      steps: [
        {
          num: "01",
          title: "Mycie termiczno-chemiczne i aktywacja płomieniowa",
          desc: "Usuwamy ze szkła powłoki poformowe (tzw. cold-end coating z huty), kurz i tłuszcz, a następnie aktywujemy powierzchnię przed natryskiem.",
          param: "Usunięcie wosków hutniczych",
        },
        {
          num: "02",
          title: "Maskowanie szyjek (Neck Masking) i gruntowanie silanowe",
          desc: "Zabezpieczamy gwinty i strefy zacisku atomizerów precyzyjnymi osłonami, po czym aplikujemy promotor adhezji wiążący lakier ze szkłem.",
          param: "Wiązanie chemiczne Si-O-Si",
        },
        {
          num: "03",
          title: "Obrotowy natrysk lakieru (Krycie / Ombre / Frost / PVD)",
          desc: "Na obracających się wrzecionach nakładamy powłokę kryjącą, cieniowaną (ombre), szronioną lub metalizowaną próżniowo z pełną kontrolą grubości.",
          param: "Powtarzalny gradient 360°",
        },
        {
          num: "04",
          title: "Wypalanie w piecu (do 180°C) i testy odporności",
          desc: "Utwardzamy powłokę termicznie lub UV, przeprowadzamy test siatki nacięć, test odporności na alkohol oraz pakujemy flakony w koszyki komórkowe.",
          param: "Odporność na linie rozlewnicze",
        },
      ],
    },
    marqueeSection: {
      h2: "Asortyment wyrobów szklanych i ceramicznych lakierowanych w STANIAX",
      subtitle:
        "Obsługujemy zarówno krótkie serie wdrożeniowe i niszowe marki, jak i duże zamówienia kontraktowe.",
      row1: [
        "Flakony perfumeryjne (15 ml – 200 ml)",
        "Słoiczki kosmetyczne na kremy i świece",
        "Butelki alkoholowe (0,5 l / 0,7 l / 1,0 l / Magnum)",
        "Buteleczki z kroplomierzem (Dropper Bottles) na serum",
        "Klosze lamp i szkło oświetleniowe architektoniczne",
        "Naczynia ceramiczne na świece sojowe",
        "Znicze szklane, lampiony i wazony dekoracyjne",
        "Kubki ceramiczne i porcelana reklamowa",
      ],
      row2: [
        "Cieniowanie Ombre jedno- i wielobarwne",
        "Szronienie szkła (Frost) bez kwasu",
        "Lakierowanie transparentne Pantone / RAL",
        "Powłoki Soft-Touch na flakonach i słoiczkach",
        "Złocenie i chromowanie próżniowe butelek",
        "Maskowanie gwintów FEA i okienek poziomu płynu",
        "Lakiery kompatybilne z sitodrukiem i hot-stampingiem",
        "Bezpieczne pakowanie w przekładki kartonowe",
      ],
      b2bCards: [
        {
          badge: "PERFUMERIA I KOSMETYKI",
          h3: "Personalizacja flakonów i słoiczków już od krótkich serii",
          body: "Nie musisz zamawiać 200 000 butelek w hucie szkła. Dostarcz do nas standardowe bezbarwne szkło, a stworzymy dla Twojej marki unikalne wykończenie ombre, matowe lub złote.",
          spec: "Wzorce przedprodukcyjne (sampling) w ciągu 3–5 dni",
        },
        {
          badge: "BRANŻA SPIRYTUSOWA I NAPOJE",
          h3: "Dekoracja butelek edycji specjalnych i kolekcjonerskich",
          body: "Lakierujemy i metalizujemy butelki na wódki rzemieślnicze, giny, likiery i wina. Zapewniamy odporność powłoki na wodę lodową (Ice Bucket Test) i ścieranie w transporcie.",
          spec: "Możliwość pozostawienia niepolakierowanego okienka na etykietę",
        },
        {
          badge: "ŚWIECE, OŚWIETLENIE I CERAMIKA",
          h3: "Powłoki termoodporne na szkło świecowe i klosze lamp",
          body: "Stosujemy systemy lakiernicze wygrzewane w wysokiej temperaturze, które nie żółkną i nie wydzielają zapachu podczas nagrzewania szkła przez płomień świecy lub źródło LED.",
          spec: "Pełna odporność termiczna do 180°C",
        },
      ],
    },
    caseStudiesSection: {
      h2: "Przykłady lakierowania szkła i ceramiki (zbadaj powierzchnię pod lupą)",
      subtitle:
        "Najedź kursorem na zdjęcie, aby przyjrzeć się płynności przejść tonalnych i gładkości lakieru na szkle.",
      items: [
        {
          badge: "FLAKONY I BUTELECZKI KOSMETYCZNE",
          h3: "Lakierowanie dekoracyjne i metalizacja opakowań szklanych",
          desc: "Zestawienie powłok kryjących, metalicznych oraz transparentnych z zachowaniem czystych szyjek gwintowanych pod atomizery i pipety.",
          param: "Test odporności na 96% etanol: wynik pozytywny",
          imageKey: "glassPaint1",
          alt: "Lakierowane flakony szklane i buteleczki kosmetyczne w zakładzie STANIAX",
        },
        {
          badge: "SZKŁO UŻYTKOWE I DEKORACYJNE",
          h3: "Efekty przejść tonalnych (ombre) i barwienia transparentnego",
          desc: "Równomierne napylenie lakieru organicznego utwardzanego termicznie w piecu na szkle o zróżnicowanym przekroju.",
          param: "Przyczepność na szkle po teście wodnym: 5B (ISO 2409)",
          imageKey: "glassPaint2",
          alt: "Szklane opakowania po procesie lakierowania gradientowego ombre i barwienia w STANIAX",
        },
        {
          badge: "SERIE B2B DLA MAREK PREMIUM",
          h3: "Wykończenie połyskowe i satynowe na szkle opakowaniowym",
          desc: "Powtarzalna produkcja seryjna z kontrolą odcienia w świetle dziennym D65 i bezpiecznym pakowaniem w kratownice.",
          param: "Kompatybilność z hot-stampingiem i sitodrukiem: 100%",
          imageKey: "glassPaint3",
          alt: "Seria polakierowanych butelek i słoiczków szklanych gotowych do konfekcjonowania",
        },
      ],
    },
    faqSection: {
      h2: "Najczęstsze pytania o lakierowanie szkła, butelek i ceramiki (FAQ)",
      subtitle:
        "Odpowiedzi na pytania producentów kosmetyków, rozlewni, hut szkła i agencji brandingowych.",
      items: [
        {
          q: "Czy lakier na flakonach perfum jest odporny na zalanie alkoholem i olejkami zapachowymi?",
          a: "Tak. Do flakonów perfumeryjnych stosujemy termoutwardzalne i chemoutwardzalne systemy lakiernicze z dodatkiem silanowych promotorów adhezji, wypalane w piecu w temperaturze do 180°C lub sieciowane UV. Po pełnym utwardzeniu powłoka nie mięknie, nie odbarwia się i nie odspaja w kontakcie ze stężonym etanolem ani kompozycjami zapachowymi.",
        },
        {
          q: "Czy na polakierowanej w STANIAX butelce można wykonać sitodruk lub złocenie hot-stamping?",
          a: "Tak, nasze lakiery na szkło są w pełni dostosowane do dalszych procesów zdobienia w drukarniach (sitodruk farbami UV i dwuskładnikowymi, tampodruk, hot-stamping oraz etykietowanie samoprzylepne). Na etapie zamówienia warto poinformować nas o planowanym zdobieniu, abyśmy dobrali system bez dodatków silikonowych obniżających zwilżalność farby drukarskiej.",
        },
        {
          q: "Dlaczego niektóre nowe butelki z huty wymagają specjalnego mycia przed lakierowaniem?",
          a: "Huty szkła nakładają na zewnętrzną ściankę gorących butelek tzw. powłoki poślizgowe (hot-end i cold-end coating, np. na bazie polietylenu lub kwasu oleinowego), aby butelki nie rysowały się na taśmach w hucie. Taka warstwa drastycznie obniża przyczepność lakieru. W STANIAX usuwamy ją termiczno-chemicznie i aktywujemy szkło płomieniowo przed malowaniem.",
        },
        {
          q: "Jaka jest minimalna ilość flakonów lub słoiczków do lakierowania (MOQ)?",
          a: "Realizujemy zarówno krótkie serie wdrożeniowe i limitowane (od kilkuset sztuk), jak i zamówienia wielkoseryjne liczone w dziesiątkach tysięcy opakowań. Przed uruchomieniem głównej partii wykonujemy wzorce kolorystyczne do akceptacji na szkle klienta.",
        },
        {
          q: "Czy możecie zamaskować gwint szyjki flakonu lub zostawić przezroczyste okienko?",
          a: "Tak. Standardowo stosujemy osłony maskujące szyjkę (neck masking), dzięki czemu gwint lub kołnierz FEA pod atomizer pozostaje czysty i trzyma wymiary tolerancyjne. Wykonujemy również maskowanie dna oraz okienek rewizyjnych pozwalających kontrolować poziom płynu.",
        },
        {
          q: "Czy polakierowane szkło nadaje się do kontaktu ze świecami (wysoka temperatura)?",
          a: "Tak, do szkła świecowego oraz ceramicznych naczyń na świece dobieramy lakiery termoodporne wygrzewane w temperaturze do 180°C, które są bezpieczne podczas spalania świecy i nie ulegają odbarwieniu pod wpływem ciepła płomienia.",
        },
      ],
    },
    quoteSection: {
      h2: "Bezpłatna wycena lakierowania szkła, flakonów i ceramiki",
      intro:
        "Podaj typ opakowania (flakon, słoiczek, butelka, ceramika), pojemność/wymiary, pożądany efekt (ombre, frost, krycie RAL/Pantone, metalik) oraz wielkość partii. Przygotujemy kalkulację i harmonogram prób.",
      projectTypes: [
        "Lakierowanie flakonów perfum i słoiczków kosmetycznych",
        "Lakierowanie i metalizacja butelek alkoholowych",
        "Lakierowanie szkła świecowego, oświetleniowego lub zniczy",
        "Lakierowanie i metalizacja ceramiki / porcelany",
        "Wykonanie próbnych wzorców (sampling) na szkle klienta",
      ],
      submitLabel: "Wyślij zapytanie o lakierowanie szkła",
    },
    seeAlsoSection: {
      h2: "Zobacz komplementarne technologie dla branży opakowań",
      links: [
        {
          path: "/metalizacja-tworzyw-sztucznych",
          anchorText:
            "Metalizacja tworzyw sztucznych — złote i chromowane nakrętki do flakonów",
          badge: "ZAMKNIĘCIA I KORECZKI",
          desc: "Skompletuj polakierowany flakon szklany z idealnie dopasowaną metalizowaną nakrętką z PP lub ABS.",
        },
        {
          path: "/metalizacja-prozniowa",
          anchorText:
            "Metalizacja próżniowa PVD szkła i ceramiki na efekt lustra",
          badge: "LUSTRZANE SZKŁO PVD",
          desc: "Poznaj technologię próżniowego osadzania aluminium na butelkach i detalach szklanych.",
        },
        {
          path: "/news/metalizacja-prozniowa-rewolucjonizuje-branze-beauty",
          anchorText:
            "Artykuł: Trendy w wykańczaniu opakowań kosmetycznych i perfumeryjnych",
          badge: "RAPORT BRANŻOWY",
          desc: "Dowiedz się, jak wiodące marki łączą lakierowanie szkła z metalizacją próżniową.",
        },
      ],
    },
    schemaServiceType:
      "Przemysłowe i dekoracyjne lakierowanie szkła, flakonów, butelek i ceramiki",
  },

  "spray-painting": {
    navLabel: "Lakierowanie natryskowe",
    shortSummary:
      "Usługowa lakiernia przemysłowa (mokro na mokro / 2K PUR / epoksyd / akryl) w pełnej palecie RAL i NCS na metalu, tworzywach, szkle i kompozytach.",
        metaTitle: 'Lakiernia i Lakierowanie Przemysłowe RAL | STANIAX',
    metaDesc: 'Lakierowanie natryskowe i lakiernia przemysłowa STANIAX (Józefów k. Warszawy). Malowanie na mokro metali, odlewów, tworzyw i kompozytów w palecie RAL i NCS.',
    breadcrumbLabel: 'Lakierowanie natryskowe i przemysłowe',
    heroBadge: 'Lakiernia przemysłowa na mokro · 213 kolorów RAL Classic + NCS · Metale i tworzywa',
    h1: 'Lakiernia przemysłowa i lakierowanie natryskowe RAL / NCS',
    lead: "Lakiernia przemysłowa STANIAX w Józefowie pod Warszawą świadczy kompleksowe usługi lakierowania natryskowego (malowania na mokro) komponentów metalowych, odlewów aluminiowych i znalowych, laminatów kompozytowych, tworzyw sztucznych oraz drewna/MDF. W przeciwieństwie do malowania proszkowego nasza technologia natrysku hydrodynamicznego i pneumatycznego pozwala lakierować materiały wrażliwe na wysoką temperaturę, uzyskiwać gładkość klasy automotive (A-Class Surface) oraz łączyć na jednym wyrobie detale z różnych surowców w identycznym odcieniu RAL, NCS lub Pantone.",
    ctaPrimaryLabel: "Wyceń lakierowanie natryskowe →",
    ctaSecondaryLabel: "Otwórz interaktywny wzornik RAL i wykończeń ↓",
    heroImageKey: "sprayPaintHero",
    heroImageAlt:
      "Przemysłowe lakierowanie natryskowe komponentów technicznych w kabinie lakierniczej STANIAX",
    metrics: [
      {
        value: 213,
        label: "Kolorów wzornika RAL Classic",
        detail:
          "Plus pełna paleta NCS (1950 odcieni), Pantone oraz recepturowanie wg wzorca klienta",
      },
      {
        value: 1200,
        suffix: " mm",
        label: "Maksymalny gabaryt detalu",
        detail:
          "Malowanie zarówno drobnych detali precyzyjnych, jak i obudów oraz konstrukcji do 1,2 m",
      },
      {
        value: 48,
        suffix: " h",
        label: "Tryb ekspresowy dla prototypów",
        detail:
          "Szybkie przezbrajanie kabin lakierniczych pod krótkie serie wdrożeniowe i pilne zlecenia B2B",
      },
    ],
    scopeSection: {
      h2: "Możliwości lakierni przemysłowej STANIAX — podłoża i systemy malarskie",
      intro:
        "Malowanie na mokro metodą natryskową jest niezastąpione wszędzie tam, gdzie malowanie proszkowe nie może zostać zastosowane ze względu na temperaturę polimeryzacji (180–200°C), efekt „skórki pomarańczy”, grubą warstwę zacierającą drobne gwinty lub brak możliwości uzyskania cienkich, metalicznych i miękkich powłok Soft-Touch.",
      cardTitle: "Zakres usług lakierowania natryskowego w STANIAX",
      cardSubtitle:
        "Wielowarstwowe układy antykorozyjne i dekoracyjne dla przemysłu maszynowego, elektronicznego, zbrojeniowego, reklamowego i meblarskiego",
      highlights: [
        "Lakierowanie metali żelaznych i nieżelaznych: stali czarnej, stali nierdzewnej i ocynkowanej, aluminium, odlewów ciśnieniowych ZnAl i mosiądzu (z podkładami epoksydowymi i wytrawiającymi Wash Primer).",
        "Lakierowanie kompozytów (laminatów poliestrowo-szklanych LPS, włókna węglowego Carbon, żywic epoksydowych), MDF oraz wyprasek z tworzyw sztucznych.",
        "Stosowanie przemysłowych systemów dwuskładnikowych (2K): poliuretanowych (PUR), epoksydowych (EP), akrylowych, alkidowych oraz lakierów wodorozcieńczalnych i utwardzanych UV.",
        "Cztery stopnie połysku i faktury dla każdego koloru RAL/NCS: Wysoki Połysk (>85 GU), Półmat / Satyna (25–45 GU), Głęboki Mat (<10 GU) oraz Drobna Struktura przemysłowa.",
        "Precyzyjne maskowanie techniczne przed lakierowaniem: zabezpieczanie otworów gwintowanych, powierzchni uziemienia (EMC), gniazd łożysk i stref klejenia.",
        "Pełna kontrola parametrów powłoki: pomiar grubości warstwy suchej (DFT wg ISO 2808), test przyczepności siatką nacięć (ISO 2409) oraz kontrola połysku i odcienia.",
      ],
      table: {
        caption:
          "Porównanie lakierowania natryskowego na mokro (STANIAX) z malowaniem proszkowym",
        headers: [
          "Kryterium techniczne",
          "Lakierowanie natryskowe na mokro (STANIAX)",
          "Tradycyjne malowanie proszkowe",
          "Korzyść dla klienta B2B",
        ],
        rows: [
          [
            "Temperatura utwardzania",
            "20 – 80°C (tworzywa, kompozyty, elektronika) lub do 160°C (szkło/metal)",
            "180 – 200°C (wyłącznie metale odporne termicznie)",
            "Możliwość malowania plastiku, laminatów, klejonych zespołów i odlewów ZnAl bez gazowania",
          ],
          [
            "Grubość powłoki (DFT) i detale",
            "15 – 45 µm (cienka, precyzyjna warstwa)",
            "60 – 120 µm (gruba powłoka zaokrąglająca krawędzie)",
            "Zachowanie ostrych krawędzi, drobnych grawerów, pasowań i gwintów bez narostów farby",
          ],
          [
            "Gładkość i estetyka powierzchni",
            "Klasa A (idealna rozlewność Piano Black, prawdziwy metalik, Soft-Touch)",
            "Widoczna struktura „skórki pomarańczy” (orange peel)",
            "Wygląd klasy automotive i elektroniki konsumenckiej premium",
          ],
          [
            "Dobór koloru i spójność materiałowa",
            "Dowolny kolor RAL, NCS, Pantone, dorabianie z próbki już od 1 litra",
            "Ograniczenie do dostępnych kartonów proszku u dostawców",
            "Identyczny odcień na elementach stalowych, aluminiowych i plastikowych w jednym urządzeniu",
          ],
        ],
        footnote:
          "Realizujemy zarówno zlecenia kooperacyjne na pojedyncze serie konstrukcyjne, jak i stałą obsługę lakierniczą dla producentów maszyn, oświetlenia i elektroniki.",
      },
    },
    editorialSections: [
      {
        h2: "Kiedy lakierowanie natryskowe na mokro jest lepszym wyborem niż lakiernia proszkowa?",
        paragraphs: [
          "Inżynierowie produktu i działy zakupów często stają przed wyborem technologii wykończenia obudów, paneli czołowych, radiatorów aluminiowych czy armatury. Choć malowanie proszkowe sprawdza się na prostych konstrukcjach stalowych, lakierowanie natryskowe na mokro w lakierni przemysłowej STANIAX jest niezastąpione w czterech sytuacjach produkcyjnych:",
          "Po pierwsze — gdy detal jest wykonany z odlewu znalowego (ZnAl) lub ciśnieniowego odlewu aluminiowego z mikroporowatością, który w piecu proszkowym w temperaturze 200°C „gazuje”, tworząc pęcherze i kratery na powierzchni. W lakierowaniu na mokro utwardzamy powłokę 2K PUR w temperaturze 60°C, uzyskując gładką powierzchnię bez wad odlewniczych. Po drugie — gdy urządzenie składa się z części metalowych i plastikowych, które po zmontowaniu muszą mieć identyczny odcień i stopień matowości.",
        ],
        subSections: [
          {
            h3: "Systemy lakiernicze 2K na aluminium, stal nierdzewną i odlewy ZnAl",
            body: "Metale nieżelazne i stal kwasoodporna posiadają pasywną warstwę tlenkową utrudniającą przyczepność zwykłych farb. W naszym procesie technologicznym stosujemy:",
            bullets: [
              "Odtłuszczanie wieloetapowe i obróbkę strumieniowo-ścierną lub włókninami scotti dla rozwinięcia powierzchni właściwej metalu.",
              "Podkłady epoksydowe dwuskładnikowe (2K EP) oraz grunty reaktywne (Wash Primer) zapewniające ochronę antykorozyjną w klasach C2–C4 i przyczepność 5B.",
              "Szpachlowanie natryskowe i wyrównywanie porów na odlewach aluminiowych, żeliwnych oraz laminatach kompozytowych przed nałożeniem bazy kolorystycznej.",
            ],
          },
          {
            h3: "Elastyczność partii produkcyjnych i szybka zmiana koloru RAL / NCS",
            body: "W dużej lakierni proszkowej przezbrojenie kabiny na nietypowy kolor dla 20 czy 50 detali jest nieopłacalne. W lakierni natryskowej STANIAX mieszamy dokładną ilość lakieru pod dane zlecenie, dzięki czemu równie sprawnie realizujemy krótkie serie prototypowe i informacyjne, jak i wielotysięczne partie produkcyjne na bębnach i zawieszkach.",
          },
        ],
      },
      {
        h2: "Kontrola jakości i pakowanie lakierowanych komponentów B2B",
        paragraphs: [
          "Każde zlecenie w lakierni przemysłowej STANIAX przechodzi kontrolę międzyoperacyjną i końcową: weryfikujemy grubość suchej warstwy (DFT), jednorodność połysku oraz brak wtrąceń na powierzchniach widocznych (strefa A). Gotowe elementy pakujemy w piankę polietylenową, folię bąbelkową lub dedykowane opakowania zwrotne klienta.",
        ],
      },
    ],
    showcase: {
      h2: "Interaktywny konfigurator: 21 kolorów RAL Classic + 4 wykończenia powłoki",
      subtitle:
        "Wybierz kolor z palety RAL oraz stopień połysku/struktury, aby sprawdzić podgląd powłoki i przekazać gotową konfigurację bezpośrednio do formularza wyceny.",
      ctaLabel: "Przekaż wybrany kolor RAL i wykończenie do wyceny →",
      ralColors: RAL_CLASSIC_21,
      finishOptions: [
        {
          id: "gloss",
          label: "Wysoki Połysk (High Gloss)",
          gloss: "85 – 95 GU",
          desc: "Lustrzana głębia koloru i łatwość zmywania zabrudzeń. Standard dla detali dekoracyjnych i obudów premium.",
        },
        {
          id: "satin",
          label: "Półmat / Satyna (Satin)",
          gloss: "25 – 45 GU",
          desc: "Najbardziej uniwersalne wykończenie przemysłowe łączące wysoką odporność na zarysowania z eleganckim półpołyskiem.",
        },
        {
          id: "matte",
          label: "Głęboki Mat (Deep Matte)",
          gloss: "4 – 10 GU",
          desc: "Nowoczesna, całkowicie bezrefleksyjna powierzchnia architektoniczna i techniczna.",
        },
        {
          id: "structure",
          label: "Drobna Struktura (Fine Texture)",
          gloss: "8 – 15 GU",
          desc: "Ziarnista faktura maskująca ślady obróbki mechanicznej, spawy, pory odlewów i rysy eksploatacyjne.",
        },
      ],
    },
    processSection: {
      h2: "Proces lakierowania natryskowego w 4 etapach technologicznych",
      subtitle:
        "Od przygotowania chemiczno-mechanicznego podłoża po utwardzenie w komorze grzewczej.",
      steps: [
        {
          num: "01",
          title: "Odtłuszczanie, matowienie i maskowanie otworów/gwintów",
          desc: "Czyścimy detale z olejów obróbczych, rozwijamy powierzchnię podłoża i zabezpieczamy gwinty, styki uziemienia oraz płaszczyzny pasowane zatyczkami silikonowymi.",
          param: "Maskowanie wg rysunku CAD/2D",
        },
        {
          num: "02",
          title:
            "Aplikacja podkładu antykorozyjnego / adhezyjnego (2K EP / Primer)",
          desc: "Nakładamy podkład epoksydowy, reaktywny lub wypełniający dopasowany do stali, aluminium, odlewu ZnAl, kompozytu lub tworzywa sztucznego.",
          param: "Izolacja korozyjna i adhezja 5B",
        },
        {
          num: "03",
          title: "Natrysk nawierzchniowy RAL / NCS / Efekt specjalny",
          desc: "W bezpyłowej kabinie lakierniczej aplikujemy lakier nawierzchniowy 2K poliuretanowy lub akrylowy w zadanym kolorze i stopniu połysku.",
          param: "Równomierna warstwa DFT 25–60 µm",
        },
        {
          num: "04",
          title: "Suszenie w piecu, demaskowanie i pomiar kontroli jakości",
          desc: "Utwardzamy powłokę w kontrolowanej temperaturze, zdejmujemy maskowania bez naruszenia krawędzi lakieru i wykonujemy pomiary kontrolne przed wysyłką.",
          param: "Protokół pomiaru grubości powłoki",
        },
      ],
    },
    marqueeSection: {
      h2: "Komponenty i materiały malowane w lakierni natryskowej STANIAX",
      subtitle:
        "Kompleksowa kooperacja przemysłowa dla firm produkcyjnych z Mazowsza i całej Polski.",
      row1: [
        "Odlewy ciśnieniowe aluminiowe i znalowe (ZnAl)",
        "Obudowy urządzeń elektronicznych, szaf i sterowników",
        "Oprawy oświetleniowe architektoniczne i przemysłowe",
        "Elementy maszyn, osłony, uchwyty i korpusy",
        "Detale ze stali nierdzewnej, czarnej i mosiądzu",
        "Laminaty poliestrowo-szklane (LPS) i kompozyty Carbon",
        "Litery przestrzenne 3D, kasetony i ekspozytory POS",
        "Fronty i akcesoria meblowe z MDF, metalu i tworzywa",
      ],
      row2: [
        "Pełna paleta RAL Classic i RAL Design",
        "Kolory architektoniczne NCS i Pantone",
        "Lakiery dwuskładnikowe 2K poliuretanowe i epoksydowe",
        "Wykończenia strukturalne i młotkowe",
        "Powłoki Soft-Touch na metalu i tworzywach",
        "Lakiery metaliczne, perłowe i anodowane",
        "Maskowanie gwintów i stref stykowych EMC",
        "Lakierowanie krótkich serii i prototypów 48h",
      ],
      b2bCards: [
        {
          badge: "PRZEMYSŁ MASZYNOWY I ELEKTRONIKA",
          h3: "Malowanie odlewów Al/ZnAl i obudów precyzyjnych",
          body: "Lakierujemy korpusy, radiatory i pokrywy z odlewów ciśnieniowych bez ryzyka gazowania w piecu, z pełnym maskowaniem gwintów i powierzchni pod uszczelki.",
          spec: "Praca na dokumentacji technicznej 2D/3D klienta",
        },
        {
          badge: "ARCHITEKTURA I OŚWIETLENIE",
          h3: "Dowolny kolor RAL / NCS już od krótkiej serii opraw",
          body: "Pomagamy producentom oświetlenia i wyposażenia wnętrz personalizować oprawy pod konkretny projekt architekta w wykończeniu głębokiego matu, satyny, złota lub miedzi.",
          spec: "Spójny kolor na elementach aluminiowych i plastikowych",
        },
        {
          badge: "REKLAMA, POS I WZORNICTWO",
          h3: "Wykończenia klasy A-Surface na laminatach, MDF i druku 3D",
          body: "Szpachlujemy, gruntujemy i lakierujemy na wysoki połysk lub mat makiety targowe, litery przestrzenne, stojaki ekspozycyjne i meble komercyjne.",
          spec: "Wymiary elementów do 1200 mm w komorze natryskowej",
        },
      ],
    },
    caseStudiesSection: {
      h2: "Realizacje lakierni natryskowej STANIAX (najedź lupą, aby zbadać strukturę)",
      subtitle:
        "Zobacz jakość powierzchni lakierowanych na mokro na detalach metalowych i kompozytowych.",
      items: [
        {
          badge: "KOMPONENTY PRZEMYSŁOWE",
          h3: "Lakierowanie natryskowe 2K PUR obudów i korpusów technicznych",
          desc: "Wielowarstwowy układ epoksydowo-poliuretanowy na odlewach metalowych z precyzyjnym maskowaniem otworów montażowych.",
          param: "Grubość układu DFT: 55 µm · Przyczepność 5B",
          imageKey: "sprayPaint1",
          alt: "Przemysłowe lakierowanie natryskowe korpusów i detali technicznych w STANIAX",
        },
        {
          badge: "DETALE DEKORACYJNE I OŚWIETLENIOWE",
          h3: "Wykończenie metaliczne i wysoko-połyskowe w palecie specjalnej",
          desc: "Aplikacja lakieru bazowego metalicznego oraz bezbarwnego lakieru 2K dająca głębię klasy automotive bez skórki pomarańczy.",
          param: "Połysk powierzchni: >92 GU (kąt 60°)",
          imageKey: "sprayPaint2",
          alt: "Detale po lakierowaniu natryskowym w wysokim połysku i kolorach metalicznych w STANIAX",
        },
        {
          badge: "SERIE PRODUKCYJNE NA ZAWIESZKACH",
          h3: "Seryjne malowanie natryskowe elementów o złożonej geometrii 3D",
          desc: "Równomierne pokrycie trudno dostępnych zakamarków i krawędzi na dedykowanych stojakach obrotowych.",
          param: "100% powtarzalności koloru RAL/NCS w partii",
          imageKey: "sprayPaint3",
          alt: "Seryjne lakierowanie natryskowe elementów przemysłowych w lakierni STANIAX Józefów",
        },
      ],
    },
    faqSection: {
      h2: "Najczęstsze pytania o lakierowanie natryskowe i przemysłowe (FAQ)",
      subtitle:
        "Odpowiedzi na pytania konstruktorów, technologów i zleceniodawców B2B.",
      items: [
        {
          q: "Czym różni się lakierowanie natryskowe (na mokro) od malowania proszkowego?",
          a: "Lakierowanie natryskowe na mokro pozwala malować detale w niskiej temperaturze suszenia (20–80°C), dzięki czemu można pokrywać tworzywa sztuczne, kompozyty, MDF, klejone podzespoły oraz porowate odlewy ZnAl/Al, które w piecu proszkowym (200°C) uległyby zniszczeniu lub gazowaniu. Ponadto lakierowanie na mokro daje znacznie cieńszą warstwę (15–45 µm), nie zalewa drobnych gwintów, umożliwia uzyskanie idealnego lustra Piano Black oraz miękkiej powłoki Soft-Touch.",
        },
        {
          q: "Jakie materiały przyjmujecie do lakierowania natryskowego?",
          a: "Malujemy stal czarną, stal ocynkowaną, stal nierdzewną (kwasoodporną), aluminium, odlewy ciśnieniowe znalowe (ZnAl), mosiądz, miedź, tworzywa sztuczne (ABS, PC, PP, PA, PMMA, PS), laminaty poliestrowo-szklane i węglowe (Carbon), żywice poliuretanowe/epoksydowe, szkło, ceramikę oraz MDF.",
        },
        {
          q: "Czy wykonujecie maskowanie gwintów i powierzchni stykowych przed malowaniem?",
          a: "Tak. Na podstawie rysunku technicznego 2D/CAD klienta dobieramy zatyczki silikonowe, korki stożkowe, taśmy wysokotemperaturowe oraz wycinane maski ochronne, aby gwinty, otwory pasowane pod łożyska i płaszczyzny uziemienia EMC pozostały całkowicie wolne od farby.",
        },
        {
          q: "Czy możecie pomalować krótką serię w nietypowym kolorze NCS lub Pantone?",
          a: "Tak. Posiadamy własną mieszalnię i współpracujemy z dostawcami przemysłowych systemów lakierniczych, dzięki czemu dorabiamy dowolny odcień z wzorników RAL Classic, RAL Design, NCS, Pantone lub na podstawie dostarczonego detalu wzorcowego już od pojedynczych sztuk i krótkich serii.",
        },
        {
          q: "Jakie są maksymalne wymiary elementów malowanych w kabinie STANIAX?",
          a: "W naszych kabinach lakierniczych malujemy zarówno drobne elementy precyzyjne o wymiarach kilku milimetrów (mocowane na dedykowanych stelażach), jak i gabarytowe obudowy, profile oraz konstrukcje o długości do 1200 mm.",
        },
        {
          q: "Jaki jest czas realizacji zlecenia w lakierni przemysłowej?",
          a: "Standardowy czas realizacji dla partii produkcyjnych wynosi 4–8 dni roboczych. Dla pilnych projektów wdrożeniowych, prototypów i uzupełnień stanów magazynowych oferujemy tryb ekspresowy 48–72h po wcześniejszym uzgodnieniu z technologiem.",
        },
      ],
    },
    quoteSection: {
      h2: "Wyceń lakierowanie natryskowe i przemysłowe w STANIAX",
      intro:
        "Prześlij informację o materiale detalu, wymiarach, kolorze RAL/NCS, stopniu połysku (połysk, satyna, mat, struktura) oraz liczbie sztuk. Jeśli w konfiguratorze powyżej wybrałeś kolor RAL, został on już automatycznie wpisany do formularza.",
      projectTypes: [
        "Lakierowanie natryskowe metali i odlewów (Al, ZnAl, stal)",
        "Lakierowanie przemysłowe obudów i komponentów z maskowaniem",
        "Lakierowanie kompozytów, laminatów, MDF i modeli 3D",
        "Lakierowanie mieszanych zestawów (metal + tworzywo w jednym kolorze)",
        "Krótka seria prototypowa / dobór koloru wg wzorca",
      ],
      submitLabel: "Wyślij zapytanie do lakierni przemysłowej",
    },
    seeAlsoSection: {
      h2: "Sprawdź pozostałe technologie lakiernicze i próżniowe STANIAX",
      links: [
        {
          path: "/lakierowanie-tworzyw-sztucznych",
          anchorText:
            "Lakierowanie tworzyw sztucznych — systemy Soft-Touch i Piano Black",
          badge: "SPECJALIZACJA TWORZYWA",
          desc: "Szczegółowa specyfikacja lakierowania wyprasek wtryskowych z ABS, PC, PP i PA.",
        },
        {
          path: "/lakierowanie-szkla-i-ceramiki",
          anchorText:
            "Lakierowanie szkła i ceramiki — flakony, butelki, klosze i ombre",
          badge: "SZKŁO I CERAMIKA",
          desc: "Termoutwardzalne powłoki dekoracyjne i ochronne na podłożach szklanych i ceramicznych.",
        },
        {
          path: "/metalizacja-prozniowa",
          anchorText:
            "Metalizacja próżniowa PVD — lustrzane powłoki aluminiowe i chromowe",
          badge: "METALIZACJA PRÓŻNIOWA",
          desc: "Połącz lakierowanie natryskowe z napylaniem próżniowym, aby uzyskać efekt chromu i złota.",
        },
      ],
    },
    schemaServiceType:
      "Lakierowanie natryskowe i usługi lakierni przemysłowej RAL / NCS",
  },
};
