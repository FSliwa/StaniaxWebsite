// Plik przygotowany na podstawie: Staniax_Chrom_szesciowartosciowy_metalizacja_1.docx
// Format zgodny z scripts/docx-to-article.mjs. Możesz go edytować ręcznie.
import type { BlogArticle } from './types'

const article: BlogArticle = {
  "slug": "/news/chrom-szesciowartosciowy-metalizacja-prozniowa-alternatywa",
  "lang": "pl",
  "heading": "Chrom sześciowartościowy – czy metalizacja próżniowa to alternatywa?",
  "metaTitle": "Chrom sześciowartościowy a metalizacja próżniowa | STANIAX",
  "metaDescription": "Chrom sześciowartościowy pod lupą REACH. Sprawdź, kiedy metalizacja próżniowa to realna i ekologiczna alternatywa dla chromowania detali.",
  "lead": "Chrom sześciowartościowy od lat należy do najściślej regulowanych substancji w europejskiej galwanice, a zapowiadane ograniczenie w ramach REACH sprawia, że producenci coraz częściej szukają rozwiązań na zapas. Dla dekoracyjnych detali z tworzyw sztucznych realną alternatywą bywa metalizacja próżniowa, czyli naparowanie cienkiej warstwy aluminium w komorze próżniowej, bez kąpieli zawierających związki Cr(VI). Nie jest to jednak automatyczna zamiana złej technologii na dobrą, bo ekologia procesów wykończeniowych zależy także od lakierów, energii i sposobu zagospodarowania odpadów.",
  "category": "Artykuł ekspercki",
  "displayDate": "20 listopada 2026",
  "excerpt": "Chrom sześciowartościowy pod presją REACH, RoHS i ELV. Sprawdzamy, kiedy metalizacja próżniowa realnie zastąpi chromowanie detali z tworzyw.",
  "homeSummary": "Status ograniczenia Cr(VI) w REACH i uczciwe porównanie metalizacji próżniowej z chromowaniem pod kątem środowiska.",
  "ctaLabel": "Czytaj artykuł",
  "datePublished": "2026-11-20",
  "dateModified": "2026-11-20",
  "readTime": "17 min czytania",
  "image": "vacuumChamber",
  "imageAlt": "Komora próżniowa do metalizacji detali bez chromu sześciowartościowego w zakładzie STANIAX",
  "serviceId": "vacuum-metallization",
  "blocks": [
    {
      "type": "p",
      "text": "W tym tekście porządkujemy wiedzę o przepisach: od autoryzacji w REACH, przez propozycję ograniczenia przygotowaną przez ECHA, po dyrektywy dotyczące pracowników, elektroniki i pojazdów. Pokazujemy też uczciwie, gdzie metalizacja może zastąpić chrom dekoracyjny, a gdzie nie ma takiej możliwości. Porównanie samego wyglądu i kosztów obu technologii celowo ograniczamy do minimum, bo to osobny temat."
    },
    {
      "type": "h2",
      "id": "najwazniejsze-informacje-w-skrocie",
      "text": "Najważniejsze informacje w skrócie"
    },
    {
      "type": "p",
      "text": "Poniższa tabela zbiera kluczowe fakty, do których wracamy w dalszej części artykułu. Wszystkie daty i wartości pochodzą ze źródeł wymienionych na końcu tekstu."
    },
    {
      "type": "table",
      "headers": [
        "Zasada",
        "Szczegóły"
      ],
      "rows": [
        [
          "Toksyczność",
          "Związki Cr(VI) są klasyfikowane jako rakotwórcze kategorii 1A lub 1B, a część z nich także jako mutagenne i uczulające."
        ],
        [
          "Autoryzacja w REACH",
          "Trójtlenek chromu, kwasy chromowe, dichromiany i chromiany znajdują się w załączniku XIV, więc ich stosowanie wymaga zezwolenia."
        ],
        [
          "Planowane ograniczenie",
          "ECHA przedstawiła propozycję ograniczenia w 2025 roku, a komitety RAC i SEAC kończą prace nad opiniami."
        ],
        [
          "Ochrona pracowników",
          "Dyrektywa 2004/37/WE ustala dla związków Cr(VI) wartość dopuszczalną 0,005 mg/m³ (8 godzin) od 17 stycznia 2025 roku."
        ],
        [
          "Wyroby",
          "RoHS ogranicza Cr(VI) w sprzęcie elektrycznym do 0,1% wagowo w materiale jednorodnym, a ELV zakazuje go w pojazdach z wyjątkami."
        ],
        [
          "Chrom trójwartościowy",
          "Kąpiele Cr(III) eliminują Cr(VI) z warstwy końcowej, ale pozostają procesem galwanicznym z mokrymi kąpielami i ściekami."
        ],
        [
          "Metalizacja próżniowa",
          "To proces suchy w próżni, oparty na aluminium, bez kąpieli z Cr(VI), który wymaga jednak lakierów i energii."
        ],
        [
          "Granice zastosowania",
          "Metalizacja zastępuje głównie chrom dekoracyjny na tworzywach, a nie chrom twardy na wałach, tłoczyskach czy formach."
        ]
      ]
    },
    {
      "type": "h2",
      "id": "czym-jest-chrom-szesciowartosciowy-i-dlaczego-budzi-obawy",
      "text": "Czym jest chrom sześciowartościowy i dlaczego budzi obawy?"
    },
    {
      "type": "p",
      "text": "Chrom występuje w przyrodzie i w przemyśle na różnych stopniach utlenienia. Z punktu widzenia zdrowia najważniejsza jest różnica między chromem metalicznym, trójwartościowym Cr(III) i sześciowartościowym Cr(VI). To właśnie ta ostatnia forma odpowiada za większość ograniczeń prawnych w galwanice."
    },
    {
      "type": "h3",
      "text": "Skąd Cr(VI) w procesach powierzchniowych"
    },
    {
      "type": "p",
      "text": "W klasycznym chromowaniu dekoracyjnym i technicznym źródłem chromu jest kąpiel na bazie trójtlenku chromu, czyli w praktyce kwasu chromowego. Związki Cr(VI) stosuje się też w powłokach konwersyjnych, pasywacji, podkładach antykorozyjnych oraz w trawieniu tworzyw przed galwanizacją. Przy chromowaniu tworzyw sztucznych, na przykład ABS, powierzchnię tradycyjnie trawi się mieszaniną zawierającą kwas chromowy, aby metal mógł się do niej związać."
    },
    {
      "type": "p",
      "text": "Warto od razu wyjaśnić częste nieporozumienie. Gotowa, błyszcząca warstwa chromu na detalu to chrom metaliczny, a nie Cr(VI). Problem dotyczy przede wszystkim procesu: kąpieli, mgły nad wannami, ścieków i pozostałości po obróbce wstępnej lub pasywacji."
    },
    {
      "type": "h3",
      "text": "Profil zagrożeń według ECHA"
    },
    {
      "type": "p",
      "text": "Raport przygotowany dla Europejskiej Agencji Chemikaliów (ECHA) stwierdza, że Cr(VI) powoduje nowotwory płuc u ludzi i zwierząt przy narażeniu inhalacyjnym. Ten sam dokument wskazuje, że analizowane związki Cr(VI) są sklasyfikowane jako rakotwórcze kategorii 1A lub 1B według rozporządzenia CLP, a trójtlenek chromu – w kategorii 1A. Zgłoszenia w bazie klasyfikacji ECHA dla kwasu chromowego obejmują ponadto działanie mutagenne, działanie uczulające na skórę i drogi oddechowe, działanie żrące oraz toksyczność dla organizmów wodnych."
    },
    {
      "type": "p",
      "text": "Dla zakładu galwanicznego obecność chromu sześciowartościowego oznacza konieczność kontroli narażenia, odciągów, środków ochrony indywidualnej i monitoringu powietrza. Dla środowiska kluczowe są ścieki, które przed odprowadzeniem trzeba poddać redukcji i neutralizacji. Chrom sześciowartościowy jest więc problemem całego łańcucha, a nie tylko pojedynczego stanowiska pracy."
    },
    {
      "type": "h2",
      "id": "jak-reach-reguluje-stosowanie-chromu-szesciowartosciowego",
      "text": "Jak REACH reguluje stosowanie chromu sześciowartościowego?"
    },
    {
      "type": "p",
      "text": "Podstawą jest [rozporządzenie REACH (WE) nr 1907/2006](https://eur-lex.europa.eu/eli/reg/2006/1907/oj), które przewiduje dwa główne narzędzia kontroli substancji: autoryzację i ograniczenia. Związki chromu sześciowartościowego trafiły na listę substancji podlegających autoryzacji w 2013 roku. Od tego czasu ich stosowanie po dacie ostatecznej wymaga indywidualnego zezwolenia Komisji Europejskiej."
    },
    {
      "type": "h3",
      "text": "Które związki są w załączniku XIV"
    },
    {
      "type": "p",
      "text": "Załącznik XIV obejmuje m.in. trójtlenek chromu, kwasy wytwarzane z trójtlenku chromu i ich oligomery, dichromian sodu, dichromian potasu, dichromian amonu oraz chromian sodu. Dla tej grupy data ostateczna przypadła na 21 września 2017 roku. Kolejne chromiany, takie jak chromian strontu czy tris(chromian) dichromu, mają datę ostateczną 22 stycznia 2019 roku."
    },
    {
      "type": "h3",
      "text": "Dlaczego system autoryzacji okazał się niewydolny"
    },
    {
      "type": "p",
      "text": "Związki Cr(VI) zdominowały procedury autoryzacyjne. Według zestawienia opartego na danych ECHA na dzień 18 września 2023 roku aż 273 z 518 zastosowań substancji SVHC objętych raportami autoryzacyjnymi dotyczyło właśnie Cr(VI), czyli 53%. Do tego doszedł wyrok TSUE w sprawie C-144/21, który częściowo unieważnił jedną z decyzji autoryzacyjnych obejmującą ponad tysiąc zakładów w UE."
    },
    {
      "type": "p",
      "text": "W efekcie Komisja Europejska 27 września 2023 roku zleciła ECHA przygotowanie dossier ograniczenia. Docelowo ograniczenie ma zastąpić dotychczasowy system zezwoleń dla tych substancji, a związki Cr(VI) mają zostać usunięte z załącznika XIV."
    },
    {
      "type": "h2",
      "id": "na-jakim-etapie-jest-ograniczenie-substancji-cr-vi-w-ue",
      "text": "Na jakim etapie jest ograniczenie substancji Cr(VI) w UE?"
    },
    {
      "type": "p",
      "text": "Propozycja ograniczenia to najważniejsza zmiana regulacyjna dla branży wykończeń powierzchni od czasu wpisania chromianów do załącznika XIV. Dla działów zakupów i R&D ważne jest nie tylko to, co obejmie, lecz także kiedy realnie zacznie obowiązywać."
    },
    {
      "type": "h3",
      "text": "Co obejmuje propozycja ECHA"
    },
    {
      "type": "p",
      "text": "ECHA ogłosiła propozycję pod koniec kwietnia 2025 roku i poddała ją sześciomiesięcznym konsultacjom publicznym, które rozpoczęły się 18 czerwca 2025 roku. Projekt zakłada zakaz stosowania wymienionych substancji Cr(VI), chyba że służą jako półprodukt albo narażenie pracowników i emisje do środowiska pozostają poniżej ustalonych progów. Dla trójtlenku chromu w mieszaninach przewidziano próg stężenia 0,01% wagowo."
    },
    {
      "type": "p",
      "text": "Propozycja dzieli zastosowania na sześć grup:"
    },
    {
      "type": "ul",
      "items": [
        "formulacja mieszanin,",
        "galwanizacja na podłożach z tworzyw sztucznych,",
        "galwanizacja na podłożach metalowych,",
        "stosowanie podkładów i innych zawiesin,",
        "pozostałe procesy obróbki powierzchni,",
        "dodatki funkcjonalne i środki pomocnicze w przetwórstwie."
      ]
    },
    {
      "type": "p",
      "text": "ECHA opisała trzy warianty wartości granicznych o rosnącej surowości i nie rekomendowała najbardziej restrykcyjnego ze względu na koszty niewspółmierne do korzyści. Proponowany okres przejściowy wynosi 18 miesięcy od wejścia przepisów w życie. Druga grupa na liście, czyli galwanizacja tworzyw, dotyczy bezpośrednio chromowanych detali dekoracyjnych z plastiku."
    },
    {
      "type": "h3",
      "text": "Harmonogram i aktualny status prac"
    },
    {
      "type": "p",
      "text": "Prace komitetów naukowych ECHA przedłużyły się z powodu dużej liczby uwag od stron trzecich. Termin opinii Komitetu ds. Oceny Ryzyka (RAC) przesunięto z marca na czerwiec 2026 roku. Komitet ds. Analiz Społeczno-Ekonomicznych (SEAC) przyjął projekt opinii 11 czerwca 2026 roku, a konsultacje tego projektu trwały od 17 czerwca do 17 sierpnia 2026 roku."
    },
    {
      "type": "p",
      "text": "Według dostępnych publicznie informacji ostateczna opinia SEAC ma zostać przyjęta na posiedzeniu SEAC-73, a opinie komitetów oczekiwane są do końca 2026 roku. Następnie dossier trafi do Komisji Europejskiej, która przygotuje projekt rozporządzenia. Szacunki branżowe wskazują na przyjęcie przepisów w okresie od końca 2027 do końca 2028 roku."
    },
    {
      "type": "h3",
      "text": "Co to oznacza w praktyce"
    },
    {
      "type": "p",
      "text": "Na listopad 2026 roku ograniczenie nie zostało jeszcze przyjęte i nadal obowiązuje system autoryzacji. Ostateczne wartości graniczne dla pracowników i emisji nie są przesądzone, a SEAC analizował warianty mieszczące się mniej więcej w przedziale od 0,1 do 5 µg Cr(VI)/m³. Firmy, które dziś projektują detale na kilka lat produkcji, powinny brać pod uwagę zarówno zaostrzenie wymagań wobec galwanizerni, jak i możliwy wzrost kosztów oraz zmiany w łańcuchu dostaw."
    },
    {
      "type": "h2",
      "id": "jakie-inne-przepisy-dotycza-cr-vi-w-miejscu-pracy-i-w-produktach",
      "text": "Jakie inne przepisy dotyczą Cr(VI) w miejscu pracy i w produktach?"
    },
    {
      "type": "p",
      "text": "REACH to nie jedyny akt, który wpływa na wykorzystanie Cr(VI). Równolegle działają przepisy chroniące pracowników oraz akty dotyczące konkretnych grup wyrobów."
    },
    {
      "type": "h3",
      "text": "Ochrona pracowników"
    },
    {
      "type": "p",
      "text": "[Dyrektywa 2004/37/WE](https://eur-lex.europa.eu/eli/dir/2004/37/oj) w sprawie ochrony pracowników przed czynnikami rakotwórczymi lub mutagenami, zmieniona [dyrektywą (UE) 2017/2398](https://eur-lex.europa.eu/eli/dir/2017/2398/oj), ustaliła wiążącą wartość dopuszczalną dla rakotwórczych związków Cr(VI). Od 17 stycznia 2025 roku wynosi ona 0,005 mg/m³ w odniesieniu do 8-godzinnego okresu. Wcześniej obowiązywały wartości przejściowe: 0,010 mg/m³ ogólnie oraz 0,025 mg/m³ dla spawania, cięcia plazmowego i podobnych procesów."
    },
    {
      "type": "h3",
      "text": "Elektronika i pojazdy"
    },
    {
      "type": "p",
      "text": "[Dyrektywa RoHS 2011/65/UE](https://eur-lex.europa.eu/eli/dir/2011/65/oj) w załączniku II ogranicza chrom sześciowartościowy w sprzęcie elektrycznym i elektronicznym do 0,1% wagowo w materiale jednorodnym. Dotyczy to na przykład obudów i elementów sprzętu AGD. Z kolei [dyrektywa 2000/53/WE o pojazdach wycofanych z eksploatacji (ELV)](https://eur-lex.europa.eu/eli/dir/2000/53/oj) w art. 4 ust. 2 lit. a wymaga, aby materiały i części pojazdów wprowadzanych do obrotu po 1 lipca 2003 roku nie zawierały m.in. Cr(VI), poza wyjątkami z załącznika II."
    },
    {
      "type": "p",
      "text": "Wyjątki z załącznika II dyrektywy ELV dla powłok antykorozyjnych obejmują jedynie części zamienne do pojazdów wprowadzonych do obrotu przed 1 lipca 2007 roku, a dla połączeń śrubowych podwozia – przed 1 lipca 2008 roku. Dla Cr(VI) przyjęto tolerancję do 0,1% wagowo w materiale jednorodnym."
    },
    {
      "type": "h3",
      "text": "Przepisy dotyczące Cr(VI) w jednym miejscu"
    },
    {
      "type": "table",
      "headers": [
        "Akt prawny",
        "Co reguluje w zakresie Cr(VI)",
        "Status (listopad 2026)"
      ],
      "rows": [
        [
          "REACH, załącznik XIV",
          "Autoryzacja trójtlenku chromu, kwasów chromowych, dichromianów i chromianów",
          "Obowiązuje; daty ostateczne 2017 i 2019 (ECHA, Apeiron)"
        ],
        [
          "REACH, propozycja ograniczenia",
          "Zakaz stosowania poza półproduktami lub przy narażeniu i emisjach poniżej progów",
          "W toku; projekt opinii SEAC z czerwca 2026, decyzja Komisji później (ADCR, Ekotox)"
        ],
        [
          "Dyrektywa 2004/37/WE ze zm. 2017/2398",
          "Wartość dopuszczalna dla pracowników 0,005 mg/m³ (8 godzin)",
          "Obowiązuje od 17 stycznia 2025 (OEIL, tekst dyrektywy)"
        ],
        [
          "Dyrektywa RoHS 2011/65/UE",
          "Maks. 0,1% wagowo w materiale jednorodnym sprzętu elektrycznego",
          "Obowiązuje (załącznik II)"
        ],
        [
          "Dyrektywa ELV 2000/53/WE",
          "Zakaz w materiałach i częściach pojazdów z wyjątkami z załącznika II",
          "Obowiązuje; wyjątki dla powłok antykorozyjnych tylko dla starszych części zamiennych"
        ]
      ]
    },
    {
      "type": "h2",
      "id": "czy-chrom-trojwartosciowy-zastapi-chrom-szesciowartosciowy-w-galwanice",
      "text": "Czy chrom trójwartościowy zastąpi chrom sześciowartościowy w galwanice?"
    },
    {
      "type": "p",
      "text": "Najbardziej oczywistą odpowiedzią galwanizerni na presję regulacyjną jest przejście na kąpiele oparte na Cr(III). Taka zmiana usuwa chrom sześciowartościowy z etapu nakładania warstwy końcowej i znacząco poprawia warunki pracy przy wannach."
    },
    {
      "type": "h3",
      "text": "Co daje przejście na Cr(III)"
    },
    {
      "type": "p",
      "text": "Chromowanie trójwartościowe pozwala zachować technologię galwaniczną, istniejące linie i część know-how. Dla producentów, którzy potrzebują klasycznej, grubszej warstwy metalu na detalu, bywa to najkrótsza droga do zgodności z przyszłym ograniczeniem."
    },
    {
      "type": "h3",
      "text": "O czym trzeba pamiętać"
    },
    {
      "type": "p",
      "text": "Cr(III) nie zmienia charakteru procesu: nadal są to mokre kąpiele, płukanie, ścieki i wielowarstwowy układ, zwykle z niklem pod warstwą chromu. W chromowaniu tworzyw sztucznych pozostaje też pytanie o obróbkę wstępną, bo tradycyjne trawienie ABS opiera się na kwasie chromowym. Pytając dostawcę o technologię bez Cr(VI), warto więc ustalić, czy bezchromowa jest tylko warstwa końcowa, czy cały proces."
    },
    {
      "type": "p",
      "text": "Odcień powłoki z kąpieli trójwartościowych może różnić się od klasycznego chromu, co ma znaczenie przy dopasowaniu do istniejących części. To jednak kwestia wizualna, którą przy wyborze technologii najlepiej sprawdzić na próbkach."
    },
    {
      "type": "h2",
      "id": "czy-metalizacja-prozniowa-to-realna-alternatywa-dla-chromowania",
      "text": "Czy metalizacja próżniowa to realna alternatywa dla chromowania?"
    },
    {
      "type": "p",
      "text": "Dla dużej grupy detali dekoracyjnych z tworzyw sztucznych odpowiedź brzmi: tak, pod warunkiem że wymagania eksploatacyjne mieszczą się w możliwościach powłoki lakierowo-metalicznej. Metalizacja próżniowa nie jest kolejną odmianą galwaniki, lecz zupełnie innym procesem, w którym chrom nie jest potrzebny na żadnym etapie. Jako alternatywa dla chromu sześciowartościowego sprawdza się więc tam, gdzie liczy się przede wszystkim efekt dekoracyjny."
    },
    {
      "type": "h3",
      "text": "Jak wygląda proces"
    },
    {
      "type": "p",
      "text": "Detal po przygotowaniu powierzchni otrzymuje lakier podkładowy, który wygładza tworzywo i tworzy bazę pod metal. Następnie w komorze wysokiej próżni naparowuje się cienką warstwę aluminium, w STANIAX o czystości 99,99% Al. Całość zabezpiecza lakier nawierzchniowy, który chroni metal i może nadać mu kolor, dzięki czemu uzyskuje się efekt chromu, złota, miedzi, satyny czy czarnego chromu."
    },
    {
      "type": "p",
      "text": "Szczegóły technologii opisuje strona usługi [metalizacja próżniowa w STANIAX](/metalizacja-prozniowa), a różnice między naparowaniem a rozpylaniem magnetronowym omawia artykuł o [powłokach PVD i sputteringu](/news/powloka-pvd-sputtering-roznice). Kwestie budżetowe omawiamy w [porównaniu metalizacji próżniowej z galwanizacją](/porownanie/metalizacja-prozniowa-vs-galwanizacja)."
    },
    {
      "type": "h3",
      "text": "Porównanie trzech technologii pod kątem środowiska i BHP"
    },
    {
      "type": "table",
      "headers": [
        "Aspekt",
        "Chromowanie z Cr(VI)",
        "Chromowanie z Cr(III)",
        "Metalizacja próżniowa"
      ],
      "rows": [
        [
          "Cr(VI) w procesie",
          "Tak, w kąpieli chromowej i często w trawieniu tworzyw",
          "Nie w kąpieli końcowej; trawienie tworzyw do sprawdzenia",
          "Nie na żadnym etapie"
        ],
        [
          "Charakter procesu",
          "Mokry, galwaniczny",
          "Mokry, galwaniczny",
          "Suchy, w próżni, plus lakierowanie natryskowe"
        ],
        [
          "Ścieki",
          "Ścieki z chromem wymagające redukcji i neutralizacji",
          "Ścieki z metalami, w tym z niklem",
          "Brak ścieków galwanicznych; odpady lakiernicze i filtry"
        ],
        [
          "Narażenie pracowników",
          "Mgła nad wannami, ścisły monitoring Cr(VI)",
          "Niższe ryzyko, ale nadal chemia galwaniczna",
          "Pary lakierów i LZO w lakierni, praca przy instalacji próżniowej"
        ],
        [
          "Status regulacyjny",
          "Autoryzacja, a w przyszłości ograniczenie REACH",
          "Poza zakresem ograniczenia Cr(VI)",
          "Poza zakresem ograniczenia Cr(VI); lakiery podlegają przepisom o LZO"
        ],
        [
          "Typowe podłoża",
          "Metale, tworzywa galwanizowalne (np. ABS)",
          "Metale, tworzywa galwanizowalne",
          "Szeroka gama tworzyw, w tym niegalwanizowalnych, po odpowiednim przygotowaniu"
        ]
      ]
    },
    {
      "type": "p",
      "text": "Warto podkreślić, że zakres podłoży jest dla wielu projektantów równie ważny jak kwestie środowiskowe. Galwanicznie pokrywa się głównie gatunki tworzyw przystosowane do tego procesu, natomiast w STANIAX metalizujemy m.in. ABS, PC, PC+ABS, PP, PMMA, PA i PET, a w ofercie wykończeń mamy też detale ze szkła i wydruki 3D."
    },
    {
      "type": "h3",
      "text": "Krótko o różnicach wizualnych"
    },
    {
      "type": "p",
      "text": "Powłoka z metalizacji daje lustrzany połysk zbliżony do chromu, ale jest znacznie cieńsza i ma inną budowę niż warstwa galwaniczna. Dokładne porównanie wyglądu, trwałości i kosztu obu metod na tworzywach to temat na osobny materiał. Tutaj skupiamy się na tym, co zmienia się pod względem regulacji i wpływu na środowisko."
    },
    {
      "type": "h2",
      "id": "ekologia-w-praktyce-co-metalizacja-prozniowa-zmienia-w-procesie-a-czego-nie",
      "text": "Ekologia w praktyce – co metalizacja próżniowa zmienia w procesie, a czego nie?"
    },
    {
      "type": "p",
      "text": "Ekologia w branży wykończeniowej często sprowadza się do haseł. Tymczasem rzetelna ocena wymaga rozdzielenia tego, co technologia naprawdę eliminuje, od obszarów, w których wpływ na środowisko nadal istnieje i trzeba nim zarządzać."
    },
    {
      "type": "h3",
      "text": "Co realnie znika z procesu"
    },
    {
      "type": "p",
      "text": "Przy metalizacji próżniowej nie używa się kąpieli z kwasem chromowym ani chromu w jakiejkolwiek formie. Znikają więc mgła chromowa nad wannami, ścieki zawierające Cr(VI) i konieczność kontroli narażenia pracowników związanego z chromem sześciowartościowym. Nie ma też kąpieli niklowych, które w galwanice dekoracyjnej zwykle towarzyszą chromowaniu."
    },
    {
      "type": "p",
      "text": "Metal w komorze nanosi się w postaci warstwy o grubości rzędu nanometrów, więc zużycie aluminium na pojedynczy detal jest niewielkie. W porównaniu z galwaniką ilość metalu w gotowym wyrobie jest znacznie mniejsza, co ma znaczenie przy późniejszym przetwarzaniu odpadów."
    },
    {
      "type": "h3",
      "text": "Lakiery i lotne związki organiczne"
    },
    {
      "type": "p",
      "text": "Metalizacja próżniowa nie istnieje bez lakierowania, a lakiery to druga strona bilansu środowiskowego. Lakiery rozpuszczalnikowe emitują lotne związki organiczne (LZO), dlatego coraz większe znaczenie mają systemy utwardzane promieniami UV oraz, w części zastosowań w branży, lakiery wodne. W STANIAX stosujemy m.in. systemy 2K poliuretanowe, akrylowe, Soft-Touch i UV, dobierane do podłoża i wymagań detalu."
    },
    {
      "type": "p",
      "text": "Dobór lakieru to zawsze kompromis między odpornością chemiczną, przyczepnością, wyglądem i emisjami. O tym, jak przygotować tworzywo i dobrać system powłokowy, piszemy szerzej w artykule o [lakierowaniu tworzyw sztucznych](/news/lakierowanie-tworzyw-sztucznych)."
    },
    {
      "type": "h3",
      "text": "Energia i praca komory próżniowej"
    },
    {
      "type": "p",
      "text": "Uzyskanie wysokiej próżni wymaga pomp i zasilania, a utwardzanie lakierów – ciepła lub promieniowania UV. Uczciwe porównanie zużycia energii z galwaniką wymagałoby analizy cyklu życia konkretnego wyrobu, bo zależy od wielkości wsadu, czasu cyklu i sposobu suszenia. Dlatego nie podajemy tu liczb, których nie da się rzetelnie uogólnić."
    },
    {
      "type": "p",
      "text": "W praktyce na efektywność energetyczną najbardziej wpływa pełne wykorzystanie wsadu w komorze i dobre zaplanowanie partii. To argument za tym, by zamówienia seryjne konsultować z wyprzedzeniem, a nie traktować każdego detalu osobno."
    },
    {
      "type": "h3",
      "text": "Odpady i recykling detali"
    },
    {
      "type": "p",
      "text": "Cienka warstwa aluminium i lakieru pozostaje na tworzywie, więc metalizowany detal nie jest czystym surowcem do recyklingu. Branża pracuje nad powłokami, które w mniejszym stopniu utrudniają odzysk tworzyw, ale nie należy obiecywać, że każdy metalizowany element da się przetworzyć bez ograniczeń. Lżejsze elementy z metalizowanego tworzywa zamiast litego metalu mogą natomiast zmniejszać masę wyrobu, co przekłada się na transport."
    },
    {
      "type": "p",
      "text": "Odpady z lakierni, takie jak filtry kabin, pozostałości lakierów i opakowania, trzeba przekazywać do uprawnionych odbiorców. Metalizacja próżniowa ogranicza więc wybrane obciążenia środowiska, ale nie sprawia, że proces staje się w pełni bezemisyjny."
    },
    {
      "type": "h2",
      "id": "gdzie-metalizacja-prozniowa-zastapi-chrom-a-gdzie-nie-ma-takiej-mozliwosci",
      "text": "Gdzie metalizacja próżniowa zastąpi chrom, a gdzie nie ma takiej możliwości?"
    },
    {
      "type": "p",
      "text": "Kluczowe rozróżnienie dotyczy funkcji powłoki. Chrom dekoracyjny ma przede wszystkim wyglądać i chronić estetykę detalu, natomiast chrom twardy, czyli techniczny, ma zapewnić odporność na ścieranie, obciążenia i korozję w trudnych warunkach. Metalizacja z aluminium i lakieru jest alternatywą dla pierwszej grupy, a nie dla drugiej."
    },
    {
      "type": "table",
      "headers": [
        "Zastosowanie",
        "Czy metalizacja może zastąpić chrom?",
        "Uwagi"
      ],
      "rows": [
        [
          "Wnętrza samochodów: listwy, ramki, emblematy, przyciski",
          "Tak, w wielu przypadkach",
          "Wymagane testy odporności na ścieranie, środki czyszczące i UV"
        ],
        [
          "Odbłyśniki reflektorów i lamp",
          "Tak, aluminium jest tu standardem",
          "Liczy się refleksyjność i odporność termiczna"
        ],
        [
          "Opakowania kosmetyczne i perfumeryjne",
          "Tak",
          "Dobór lakieru nawierzchniowego do kontaktu z kosmetykami"
        ],
        [
          "Panele, pokrętła i dekory w AGD",
          "Tak, po weryfikacji",
          "Sprawdzenie zgodności całego wyrobu z RoHS"
        ],
        [
          "Oprawy i elementy oświetleniowe",
          "Tak",
          "Uwzględnienie temperatury pracy źródła światła"
        ],
        [
          "Elementy zewnętrzne pojazdów",
          "Warunkowo",
          "Sól drogowa, kamienie i myjnie wymagają odrębnych testów"
        ],
        [
          "Armatura sanitarna",
          "Zwykle nie",
          "Ciągły kontakt z wodą i chemią wymaga innych rozwiązań"
        ],
        [
          "Chrom twardy na wałach, tłoczyskach i formach",
          "Nie",
          "Inny obszar techniczny: grube warstwy odporne na ścieranie i obciążenia"
        ]
      ]
    },
    {
      "type": "h3",
      "text": "Branże, w których zmiana jest najprostsza"
    },
    {
      "type": "p",
      "text": "Najwięcej projektów przechodzi z chromowania na metalizację w motoryzacji, zwłaszcza we wnętrzach pojazdów i w oświetleniu. O regeneracji odbłyśników piszemy w [poradniku o regeneracji odbłyśników reflektorów samochodowych](/news/regeneracja-odblysnikow-reflektorow-samochodowych). Podobnie jest w branży kosmetycznej, gdzie lustrzane zamknięcia, atomizery i obudowy szminek od dawna powstają w technologii próżniowej, co opisujemy w tekście o tym, jak [metalizacja próżniowa zmienia branżę beauty](/news/metalizacja-prozniowa-rewolucjonizuje-branze-beauty)."
    },
    {
      "type": "h3",
      "text": "Gdzie zachować ostrożność"
    },
    {
      "type": "p",
      "text": "Na zewnątrz pojazdu i w urządzeniach narażonych na intensywne ścieranie trzeba podejść do zmiany technologii z większą ostrożnością. Powłoka próżniowa jest cienka, więc jej trwałość w dużej mierze zależy od lakieru nawierzchniowego i warunków pracy. Jeśli specyfikacja klienta przewiduje testy korozyjne lub mechaniczne przewidziane dla chromu galwanicznego, trzeba je powtórzyć dla nowej powłoki."
    },
    {
      "type": "h2",
      "id": "jak-bezpiecznie-przeprowadzic-zmiane-technologii-wykonczenia",
      "text": "Jak bezpiecznie przeprowadzić zmianę technologii wykończenia?"
    },
    {
      "type": "p",
      "text": "Przejście z chromowania na metalizację to decyzja techniczna, zakupowa i regulacyjna jednocześnie. Poniższa lista pomaga uporządkować pracę działów zakupów, jakości i R&D."
    },
    {
      "type": "table",
      "headers": [
        "Krok",
        "Co sprawdzić",
        "Kto zwykle odpowiada"
      ],
      "rows": [
        [
          "1. Funkcja powłoki",
          "Czy wymagany jest efekt dekoracyjny, czy techniczna odporność na ścieranie i obciążenia",
          "R&D, konstrukcja"
        ],
        [
          "2. Ekspozycja na Cr(VI)",
          "Czy obecny proces wykorzystuje Cr(VI) w kąpieli, trawieniu lub pasywacji",
          "Zakupy, jakość"
        ],
        [
          "3. Status regulacyjny dostawcy",
          "Czy galwanizernia ma autoryzację i plan na okres po wejściu ograniczenia",
          "Zakupy, dział zgodności"
        ],
        [
          "4. Materiał detalu",
          "Czy tworzywo nadaje się do metalizacji i jakiego przygotowania wymaga",
          "R&D, dostawca powłok"
        ],
        [
          "5. Wymagania eksploatacyjne",
          "Testy ścierania, chemii, UV, temperatury i wilgoci według specyfikacji klienta",
          "Jakość"
        ],
        [
          "6. Próbki i prototypy",
          "Ocena wyglądu, przyczepności i grubości powłoki na rzeczywistych detalach",
          "R&D, jakość"
        ],
        [
          "7. Dokumentacja",
          "Protokoły kontroli, deklaracje zgodności z RoHS lub ELV, karty lakierów",
          "Jakość, zakupy"
        ],
        [
          "8. Logistyka i koszty",
          "Czas realizacji, wielkość partii, transport i całkowity koszt detalu",
          "Zakupy, planowanie"
        ]
      ]
    },
    {
      "type": "p",
      "text": "W STANIAX do każdego zamówienia dołączamy protokół kontroli jakości z pomiarem grubości powłoki i przyczepności, w tym badaniem metodą siatki nacięć według ISO 2409. Prototypy możemy przygotować w trybie ekspresowym, co ułatwia porównanie próbek przed decyzją o zmianie technologii. Jeśli chcesz omówić konkretny detal, [skontaktuj się z nami](/#contact)."
    },
    {
      "type": "h3",
      "text": "Typowe błędy przy zmianie technologii"
    },
    {
      "type": "p",
      "text": "Najczęstszym błędem jest przeniesienie specyfikacji chromu galwanicznego jeden do jednego, bez analizy, które wymagania są naprawdę potrzebne. Drugim jest pominięcie lakieru w ocenie środowiskowej, co prowadzi do zbyt optymistycznych deklaracji. Trzecim – brak testów na rzeczywistych detalach, a nie tylko na płytkach próbnych."
    },
    {
      "type": "h2",
      "id": "ekologiczna-alternatywa-dla-chromu-szesciowartosciowego-bez-greenwashingu",
      "text": "Ekologiczna alternatywa dla chromu sześciowartościowego – bez greenwashingu"
    },
    {
      "type": "p",
      "text": "Chrom sześciowartościowy pozostaje pod coraz silniejszą presją regulacyjną: obowiązuje autoryzacja w REACH, zaostrzona wartość dopuszczalna dla pracowników, ograniczenia w RoHS i ELV, a w przygotowaniu jest ograniczenie, które obejmie m.in. galwanizację tworzyw. Na listopad 2026 roku ostateczny kształt tego ograniczenia nie jest jeszcze przesądzony, ale kierunek zmian jest jasny."
    },
    {
      "type": "p",
      "text": "Dla dekoracyjnych detali z tworzyw sztucznych metalizacja próżniowa jest dojrzałą alternatywą, w której chrom nie występuje na żadnym etapie procesu. Jednocześnie wymaga lakierów, energii i odpowiedzialnego zarządzania odpadami, dlatego jej przewagę warto opisywać rzeczowo, a nie hasłem o pełnej ekologiczności. Tam, gdzie potrzebny jest chrom twardy, zmiana technologii wymaga zupełnie innych rozwiązań."
    }
  ],
  "faqTitle": "Co jeszcze warto wiedzieć o chromie i metalizacji?",
  "faq": [
    {
      "q": "Czy gotowa powłoka chromowa zawiera chrom sześciowartościowy?",
      "a": "Błyszcząca warstwa chromu na detalu to chrom metaliczny. Ryzyko związane z Cr(VI) dotyczy głównie procesu, czyli kąpieli, ścieków i ewentualnych pozostałości po pasywacji, dlatego przepisy skupiają się na zakładach i stosowaniu substancji."
    },
    {
      "q": "Z jakich materiałów korzysta metalizacja próżniowa?",
      "a": "Podstawą jest aluminium naparowywane w próżni oraz lakiery podkładowe i nawierzchniowe. W procesie nie stosuje się związków chromu, a efekt chromu, złota czy miedzi wynika z połączenia warstwy aluminium z odpowiednim lakierem."
    },
    {
      "q": "Kiedy zacznie obowiązywać ograniczenie Cr(VI) w REACH?",
      "a": "Na listopad 2026 roku ograniczenie nie zostało przyjęte. Komitety ECHA kończą opinie, a szacunki branżowe wskazują na przyjęcie rozporządzenia przez Komisję między końcem 2027 a końcem 2028 roku, z proponowanym 18-miesięcznym okresem przejściowym."
    },
    {
      "q": "Czy chromowanie z Cr(III) jest neutralne dla środowiska?",
      "a": "Nie. Eliminuje Cr(VI) z kąpieli końcowej, ale pozostaje procesem galwanicznym z mokrymi kąpielami, ściekami i zwykle warstwą niklu. To krok w dobrą stronę, a nie proces bez wpływu na środowisko."
    },
    {
      "q": "Czy metalizacja próżniowa jest ekologiczna?",
      "a": "W porównaniu z chromowaniem z Cr(VI) tak, w istotnym zakresie: z procesu znikają kąpiele z chromem sześciowartościowym, ścieki galwaniczne i szlamy z metalami ciężkimi. Nie jest to jednak proces bezemisyjny, bo wymaga lakierów (w tym zawierających LZO, choć systemy UV i wodne ograniczają emisje), energii do pracy komory próżniowej oraz przekazywania odpadów lakierniczych uprawnionym odbiorcom. Najuczciwiej mówić więc o rozwiązaniu bardziej przyjaznym środowisku, a nie o w pełni ekologicznym."
    },
    {
      "q": "Co z recyklingiem metalizowanych detali z tworzyw?",
      "a": "Warstwa aluminium i lakieru pozostaje na tworzywie, co może utrudniać odzysk materiału. Przy projektowaniu nowych detali warto uwzględnić zasady recyklingu już na etapie wyboru tworzywa i systemu lakierowego."
    },
    {
      "q": "W jakich warunkach metalizacja sprawdzi się na zewnątrz pojazdu?",
      "a": "Tylko po pozytywnych testach odporności na sól, wilgoć, UV i uszkodzenia mechaniczne. Duże znaczenie ma lakier nawierzchniowy oraz to, czy element jest narażony na uderzenia kamieni i mycie ciśnieniowe."
    },
    {
      "q": "Ile kosztuje przejście z chromowania na metalizację?",
      "a": "Koszt zależy od geometrii detalu, wielkości serii, rodzaju tworzywa i wymaganych testów. Czynniki kosztowe obu technologii zestawiamy w [porównaniu metalizacji próżniowej z galwanizacją](/porownanie/metalizacja-prozniowa-vs-galwanizacja), a wycenę konkretnego detalu przygotujemy po [kontakcie z nami](/#contact)."
    },
    {
      "q": "Jak sprawdzić, czy dostawca nie stosuje chromu sześciowartościowego?",
      "a": "Warto poprosić o opis całego procesu, w tym obróbki wstępnej i pasywacji, oraz o informację o ewentualnych autoryzacjach REACH. Przy wyrobach elektrycznych i motoryzacyjnych pomocne są deklaracje zgodności z RoHS i ELV."
    },
    {
      "q": "Dlaczego metalizacja nie zastąpi chromu twardego na tłoczyskach?",
      "a": "Chrom twardy to gruba warstwa techniczna, projektowana pod ścieranie, tarcie i obciążenia mechaniczne. Nanometryczna warstwa aluminium pod lakierem pełni zupełnie inną funkcję, dlatego w tym obszarze potrzebne są inne technologie."
    }
  ],
  "sources": [
    {
      "label": "ECHA, Final Report for Hexavalent Chromium (2013)",
      "url": "https://www.echa.europa.eu/documents/10162/17233/carcinogenicity_dose_response_cr_vi_report_en.pdf/7158ab67-0801-4307-bf5b-30c75c15518e"
    },
    {
      "label": "ECHA, baza klasyfikacji i oznakowania – kwas chromowy",
      "url": "https://echa.europa.eu/fr/information-on-chemicals/cl-inventory-database/-/discli/substance/external/100.028.910"
    },
    {
      "label": "Parlament Europejski (OEIL), streszczenie dyrektywy (UE) 2017/2398",
      "url": "https://oeil.europarl.europa.eu/oeil/en/document-summary?id=1517613"
    },
    {
      "label": "Dyrektywa (UE) 2017/2398, załącznik – wartości dopuszczalne",
      "url": "https://legislation.gov.uk/eudr/2017/2398/annex/paragraph/1?view=plain"
    },
    {
      "label": "Dyrektywa 2011/65/UE (RoHS), załącznik II",
      "url": "https://legislation.gov.uk/eudr/2011/65/annex/II/2019-07-22"
    },
    {
      "label": "Dyrektywa 2000/53/WE (ELV), art. 4",
      "url": "https://www.legislation.gov.uk/eudr/2000/53/article/4/data.htm"
    },
    {
      "label": "Dyrektywa 2000/53/WE (ELV), załącznik II",
      "url": "https://www.legislation.gov.uk/eudr/2000/53/annex/II"
    },
    {
      "label": "EUR-Lex, dyrektywa Komisji (UE) 2016/774 zmieniająca załącznik II do dyrektywy ELV",
      "url": "https://eur-lex.europa.eu/eli/dir/2016/774/oj/eng"
    },
    {
      "label": "Sagentia, ECHA publishes its proposals for the restriction of chromium VI substances",
      "url": "https://sagentia.com/advisories/echa-publishes-its-proposals-for-the-restriction-of-chromium-vi-substances/"
    },
    {
      "label": "Eurofins, Chemicals Monthly Bulletin, kwiecień 2026",
      "url": "https://www.eurofins.com/consumer-product-testing/media-centre/news/chemicals-monthly-bulletin-april-2026/"
    },
    {
      "label": "ADCR Consortium, ECHA launches CrVI consultation on draft SEAC opinion",
      "url": "https://www.adcr-consortium.eu/echa-launches-crvi-consultation-on-draft-seac-opinion"
    },
    {
      "label": "TEAM mastery, SEAC Agrees Draft Opinion on Chromium(VI) Restriction Proposal",
      "url": "https://team-mastery.eu/seac-agrees-draft-opinion-on-chromiumvi-restriction-proposal/"
    },
    {
      "label": "Ekotox, Chromium(VI) compounds: planned regulation, extended authorisations and timeline",
      "url": "https://ekotox.eu/chromiumvi-compounds-planned-regulation-extended-authorisations-and-timeline/"
    },
    {
      "label": "Apeiron-Team, REACH Restriction of chromium (VI) substances",
      "url": "https://apeiron-team.eu/stories/reach-restriction-proposal-for-crvi-substances/"
    },
    {
      "label": "Certivo, REACH Hexavalent Chromium Restriction",
      "url": "https://www.certivo.com/blog-details/reach-hexavalent-chromium-restriction-what-manufacturers-must-know-before-the-2026-deadline"
    }
  ],
  "related": [
    {
      "label": "Metalizacja próżniowa vs galwanizacja – porównanie technologii",
      "url": "/porownanie/metalizacja-prozniowa-vs-galwanizacja"
    },
    {
      "label": "Lakierowanie tworzyw sztucznych",
      "url": "/news/lakierowanie-tworzyw-sztucznych"
    },
    {
      "label": "Powłoka PVD – naparowanie a sputtering",
      "url": "/news/powloka-pvd-sputtering-roznice"
    },
    {
      "label": "Regeneracja odbłyśników reflektorów samochodowych",
      "url": "/news/regeneracja-odblysnikow-reflektorow-samochodowych"
    },
    {
      "label": "Metalizacja próżniowa rewolucjonizuje branżę beauty",
      "url": "/news/metalizacja-prozniowa-rewolucjonizuje-branze-beauty"
    }
  ],
  "closingCta": "Jeśli planujesz odejście od chromowania z udziałem Cr(VI) w swoich detalach, przygotujemy próbki i pomożemy ocenić, czy metalizacja spełni wymagania Twojego produktu. Zapraszamy do [kontaktu z zakładem STANIAX](/#contact) oraz do zapoznania się z ofertą [lakierowania tworzyw](/lakierowanie-tworzyw-sztucznych)."
}

export default article
