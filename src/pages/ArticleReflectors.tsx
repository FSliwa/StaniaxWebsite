import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, ArrowRight, Clock, List, X, ShareNetwork, Printer, BookOpen, ArrowUpRight } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { BigFooter } from '@/components/BigFooter'
import { toast } from 'sonner'
import { t, type Lang } from '@/lib/translations'
import newReflectorsImage from '@/assets/odblysniki-nowe-1.jpeg'

const articleContent = {
  pl: {
    backToNews: 'Powrót do aktualności',
    backToHome: 'Powrót na stronę główną',
    articleBadge: 'Artykuł',
    readTime: '6 min czytania',
    heading: 'Regeneracja odbłyśników i reflektorów samochodowych – poradnik kierowcy i oferta STANIAX',
    lead: 'Reflektory w każdym samochodzie pełnią podwójną rolę: zapewniają bezpieczeństwo jazdy i wpływają na estetykę pojazdu. Gdy tracą przejrzystość, widoczność na drodze spada drastycznie. W tym poradniku wyjaśniamy, kiedy i jak przeprowadzić regenerację, jakie metody przynoszą trwałe efekty, a także dlaczego STANIAX jest partnerem, po którego sięgają warsztaty i producenci lamp samochodowych w całej Polsce.',
    imageAlt: 'Zregenerowane odbłyśniki reflektorów samochodowych po metalizacji próżniowej PVD',
    newsTitle: 'Aktualności',
    shareTitle: 'Udostępnij artykuł',
    copySuccess: 'Link do artykułu został skopiowany do schowka!',
    copyTitle: 'Skopiuj link',
    printTitle: 'Drukuj artykuł',
    ctaTitle: 'Zbuduj z nami przewagę',
    ctaDesc: 'Szukasz partnera, który dostarczy powłoki metalizacyjne najwyższej jakości o grubościach nanometrycznych? Skonsultuj się z naszymi ekspertami już dziś.',
    ctaBtn: 'Napisz do nas',
    backToNewsList: 'Powrót do aktualności',
    tableTitle: 'Polerowanie klosza, regeneracja wnętrza czy wymiana lampy – co wybrać?',
    tableHeaders: ['Metoda', 'Koszt (za szt.)', 'Trwałość efektu', 'Zakres'],
    tableRows: [
      ['Polerowanie klosza', '150–300 zł', '1–2 sezony', 'tylko zewnętrzna powierzchnia'],
      ['Kompleksowa regeneracja', '350–700 zł', '3–5 lat', 'klosz + odbłyśnik + uszczelki'],
      ['Nowa lampa (OEM)', '1 500–5 000+ zł', 'fabryczna', 'cały komplet']
    ],
    metaTitle: "Regeneracja odbłyśników i reflektorów – metody i ceny | STANIAX",
    metaDesc: 'Regeneracja odbłyśników metodą PVD i polerowanie reflektorów. Ceny od 150 zł, trwałość do 5 lat. Sprawdź, kiedy regenerować, a kiedy wymienić.',
    metaOgDesc: 'Regeneracja odbłyśników metodą PVD i polerowanie reflektorów. Ceny od 150 zł, trwałość do 5 lat. Sprawdź, kiedy regenerować, a kiedy wymienić.',
    
    introTitle: 'Regeneracja odbłyśników i reflektorów – szybka odpowiedź na najczęstsze pytania',
    introP1: 'Jeśli zauważasz, że reflektory i odbłyśniki lamp przeciwmgielnych w Twoim aucie świecą słabiej niż kiedyś, mają żółtawy odcień lub dostałeś uwagę na przeglądzie technicznym – to sygnał, że pora na regenerację. Zmatowienie reflektorów może prowadzić do odmowy dopuszczenia pojazdu do ruchu, więc nie warto zwlekać. Polerowanie reflektorów poprawia ich wygląd i funkcjonalność, a regeneracja odbłyśników w reflektorach może zwiększyć ich wydajność nawet o 100%.',
    introP2: 'Regeneracja odbłyśników lamp samochodowych obejmuje kilka zakresów: polerowanie klosza – usunięcie zmatowień i mikrorys z zewnętrznej powierzchni; regenerację odbłyśników – odnowienie warstwy refleksyjnej wewnątrz lampy; oraz uszczelnienie i zabezpieczenie UV – ochrona przed ponownym matowieniem.',
    introP3: 'Poprawa widoczności jest odczuwalna od razu, a koszt zaczyna się od ok. 150–300 zł za polerowanie klosza; pełna regeneracja z metalizacją odbłyśnika to 350–700 zł – wciąż wielokrotnie mniej niż zakup nowych lamp, gdzie np. reflektory bi xenon potrafią kosztować kilka tysięcy złotych za sztukę. Regeneracja reflektorów przywraca im pełną sprawność za ułamek ceny. W STANIAX specjalizujemy się w regeneracji odbłyśników metodami przemysłowymi – [metalizacją próżniową PVD](/#about) i metalizacją natryskową – co daje trwalszy efekt niż amatorskie polerowanie w garażu.',
    
    sec1Title: 'Dlaczego reflektory ulegają zmatowieniu i tracą dawny blask?',
    sec1P1: 'Od końca lat 90. większość reflektorów wykonana jest z poliwęglanu, a nie ze szkła. Poliwęglan jest lekki i odporny na uderzenia, ale podatny na degradację – szczególnie pod wpływem promieni słonecznych. Fabryczna warstwa ochronna, o grubości zaledwie 15–25 mikrometrów, z czasem ulega degradacji, wystawiając tworzywo na bezpośredni kontakt z promieniowaniem UV.',
    sec1P2: 'Te czynniki prowadzą do stopniowego niszczenia klosza:\n- reflektory matowieją przez działanie promieni UV, które rozkładają strukturę poliwęglanu i tworzą chromofory – związki barwiące nadające żółty odcień,\n- kwaśne deszcze i sól drogowa uszkadzają lampy samochodowe, wżerając się w mikropęknięcia,\n- drobne kamyczki i piasek z drogi powodują mechaniczne zarysowania powierzchni,\n- warunki atmosferyczne i cykliczne zmiany temperatury przyspieszają utlenianie.',
    sec1P3: 'Zmatowienie reflektorów pogarsza widoczność podczas jazdy – badania AAA wykazały, że mocno zdegradowane klosze przepuszczają tylko 20–30% światła w porównaniu z nowymi. W nowoczesnych lampach bi xenon, bi led i Full LED zmatowienie klosza i utrata odbicia przez odbłyśnik szczególnie mocno obniżają parametry świecenia – a to prosta droga do negatywnego wyniku badania technicznego. Matowe reflektory pogarszają bezpieczeństwo Twoje i innych użytkowników ruchu, bo skracają realny zasięg snopa światła.',
    
    sec2Title: 'Regeneracja reflektorów – zakres prac i możliwe metody',
    sec2P1: 'Regeneracja reflektorów może oznaczać tylko polerowanie klosza albo kompleksową odnowę wnętrza lampy – warto jasno rozróżnić te dwa podejścia, bo ich skuteczność i cena są zupełnie różne.',
    sub21Title: 'Polerowanie reflektorów',
    sub21P1: 'Podstawowa usługa to polerowanie reflektorów: zewnętrzna odnowa klosza polegająca na usunięciu zmatowień, mikrorys i nałożeniu warstwy ochronnej UV. Zmatowiałe klosze są idealnym kandydatem do takiej renowacji – o ile wnętrze lampy jest w dobrym stanie.',
    sub22Title: 'Kompleksowa naprawa',
    sub22P1: 'Kompleksowa naprawa reflektorów samochodowych obejmuje: demontaż lampy z samochodu, rozklejenie obudowy, czyszczenie wnętrza, regenerację odbłyśników (metalizację próżniową), ewentualną wymianę uszczelek i ponowne sklejenie. Regeneracja odbłyśników podnosi jakość wiązki światła, przywracając parametry zbliżone do fabrycznych. Czas regeneracji reflektorów wynosi od 5 do 7 dni roboczych – w zależności od zakresu prac i technologii.',
    sub22P2: 'W STANIAX najczęściej pracujemy na samych odbłyśnikach dostarczonych przez warsztaty lub producentów, stosując metalizację próżniową PVD dla uzyskania efektu lustrzanego i długiej żywotności powłoki. Zakres regeneracji zależy od stanu lamp – płytkie zarysowania wymagają innego podejścia niż przepalone odbłyśniki czy lampy zalane wodą. Dlatego ich regeneracja zawsze powinna zaczynać się od oceny specjalisty.',

    sec3Title: 'Polerowanie lamp krok po kroku – jak przywrócić przejrzystość klosza',
    sec3P1: 'Polerowanie lamp to zadanie, które przy odpowiednim przygotowaniu wymaga staranności, ale jest wykonalne nawet w warunkach garażowych. Polerowanie reflektorów można wykonać w kilka godzin, a efekt bezpośrednio przekłada się na lepszą widoczność. Poniżej znajdziesz opis poszczególnych etapów.',
    sec3P2: '**Potrzebne narzędzia i materiały:**\n- taśma malarska do zabezpieczenia lakieru wokół lamp,\n- papiery ścierne wodne (gradacja 800, 1200, 2000, 3000) lub krążki ścierne,\n- polerka orbitalna lub wkrętarka z nasadką, gąbki polerskie,\n- pasta polerska do tworzyw (zestawy do renowacji zawierają papiery ścierne i pastę polerską),\n- środek odtłuszczający, lakier bezbarwny z filtrem UV.',
    sec3P3: '**Etapy polerowania:**\n1. **Przygotowanie lamp** – dokładne umycie klosza, odtłuszczanie powierzchni, zabezpieczenie lakieru wokół reflektora taśmą.\n2. **Szlifowanie na mokro** – użyj papieru ściernego o gradacji 800 do 3000, zaczynając od najgrubszego. Ruchy poziome i pionowe, by uniknąć kierunkowych rys. Kontroluj temperaturę – nie przegrzewaj poliwęglanu.\n3. **Polerowanie właściwe** – niska prędkość polerki, umiarkowany docisk, praca partiami. Polerowanie reflektorów zwiększa ich przezroczystość i jasność już na tym etapie.\n4. **Zabezpieczenie UV** – polerowanie reflektorów wymaga nałożenia nowej powłoki zabezpieczającej. Lakierowanie reflektorów tworzy nową, twardą powłokę ochronną, która zapobiega ponownemu matowieniu. Zabezpiecz reflektory powłoką UV po polerowaniu – bez tego efekt zniknie w ciągu kilku miesięcy.',
    sec3P4: 'Samo polerowanie z nałożeniem filtra UV kosztuje od 150 do 300 zł za lampę. Polerowanie poprawia widoczność na drodze o kilkanaście metrów – różnica jest zauważalna zwłaszcza nocą. Pamiętaj jednak, że polerowanie klosza bez demontażu lampy to rozwiązanie szybkie, ale nie zawsze wystarczające – jeśli odbłyśnik w środku jest wypalony lub skorodowany, samo czyszczenie zewnętrzne nie pomoże.',

    sec4Title: 'Przygotowanie lamp do kompleksowej regeneracji odbłyśników',
    sec4P1: 'Regeneracja odbłyśnika wymaga wyjęcia lampy z pojazdu i rozklejenia obudowy – to zazwyczaj wykonuje wyspecjalizowany warsztat, a STANIAX zajmuje się częścią powierzchniową odbłyśnika: metalizacją i powłokami.',
    sec4P2: '**Jak warsztat lub klient B2B powinien przygotować elementy do wysyłki:**\n- demontaż reflektorów z auta – przygotowanie lamp zaczyna się od ostrożnego wyjęcia kompletnych lamp,\n- rozklejenie obudowy i wyjęcie odbłyśników z wnętrza,\n- usunięcie resztek starego kleju i zanieczyszczeń,\n- zabezpieczenie delikatnych miejsc przed uszkodzeniami mechanicznymi (unikać kontaktu z ostrymi elementami).',
    sec4P3: 'Odbłyśniki nie powinny być wcześniej polerowane mechanicznie – uszkadza to ich geometrię i utrudnia poprawną metalizację próżniową. Powierzchnia odbłyśników jest przez STANIAX dodatkowo oczyszczana i przygotowywana: oczyszczenie z poprzedniej metalizacji wraz ze szlifowaniem powierzchni wewnętrznej, odtłuszczanie, nałożenie farby podkładowej, jeśli wymaga tego dany system. Wysyłka powinna wyglądać następująco: sztywne kartony, oddzielne zabezpieczenie każdego odbłyśnika folią bąbelkową, opis auta/modelu/rocznika – dzięki temu unikamy pomyłek. Wymiana reflektorów jest konieczna przy poważnych uszkodzeniach strukturalnych – ale to rzadkość; większość starych lamp da się skutecznie odnowić.',

    sec5Title: 'Profesjonalna regeneracja odbłyśników w STANIAX – metalizacja próżniowa i natryskowa',
    sec5P1: 'Odbłyśnik to serce reflektora – kształtuje snop światła i decyduje o jakości oświetlenia. Jego wypalenie powoduje drastyczny spadek skuteczności nawet przy nowych żarówkach czy modułach LED. Regeneracja reflektorów zwiększa ich żywotność i poprawia bezpieczeństwo, przywracając odpowiednią ilość odbijanego światła.',
    sec5P2: 'Metalizacja próżniowa (PVD) polega na odparowaniu aluminium w komorze próżniowej i nanoszeniu ultracienkiej, równomiernej warstwy na powierzchni odbłyśnika. Efekt lustrzany jest porównywalny z fabrycznym, a współczynnik odbicia sięga ponad 85%. Koszt regeneracji z metalizacją próżniową wynosi około 350–700 zł za sztukę – wciąż wielokrotnie mniej niż nowa lampa.',
    sec5P3: 'Metalizacja natryskowa stanowi alternatywę dla niektórych serii detali, gdy wymagana jest grubsza lub specyficzna powłoka. STANIAX stosuje przemysłowe systemy lakiernicze i powłoki ochronne UV, dzięki czemu regenerowane odbłyśniki są odporne na temperaturę pracy reflektora oraz wilgoć. Ta usługa jest kierowana głównie do warsztatów, lakierni i producentów komponentów oświetleniowych, ale pośrednio korzystają na niej kierowcy, których lampy odzyskują fabryczne parametry i atrakcyjny wygląd.',

    sec6Title: 'Modernizacja oświetlenia – montaż soczewek bi LED, bi xenon i tuning lamp',
    sec6P1: 'Regeneracja to nie tylko naprawa – to też okazja do modernizacji oświetlenia, szczególnie w starszych modelach z reflektorami halogenowymi. Zamiast po prostu przywracać dawny blask, można poprawić parametry światła.',
    sec6P2: 'Montaż soczewek bi led to coraz popularniejszy kierunek: soczewki bi led zapewniają lepiej skupiony snop światła, równomierne oświetlenie poboczy i niski pobór energii w porównaniu z klasycznymi żarówkami. Montaż soczewek Bi-LED podnosi jakość oświetlenia, a montaż projektorów LED zwiększa jasność oświetlenia o 100%. Tuning lamp zwiększa zasięg świateł w nocy – różnica jest odczuwalna zwłaszcza na drogach pozamiejskich.',
    sec6P3: 'Rozwiązania xenon i bi xenon pozostają nadal popularną alternatywą, choć rynek stopniowo przechodzi na technologię LED. Warto wiedzieć, że adaptacja lamp z UK wymaga przestawienia strumienia światła – to ważne przy imporcie samochodu z Wysp. Zamontowanie soczewek wymaga prawidłowego ustawienia linii odcięcia i dopasowania do przepisów, by nie oślepiać innych kierowców i innych użytkowników drogi. Dlatego montaż soczewek bi led należy powierzać wyspecjalizowanym warsztatom.',
    sec6P4: 'Inne formy tuningu lamp – malowanie wnętrza reflektora, montaż ringów LED, dodatki DRL – mogą nadać autu nowoczesny wygląd. STANIAX jako lakiernia przemysłowa zapewnia wysokiej jakości lakierowanie dekoracyjne elementów wewnętrznych i zewnętrznych, podobnie jak w przypadku szyb i ramek lamp.',

    sec7Title: 'Zabezpieczenie lamp po regeneracji – folia PPF, powłoki UV i lakierowanie',
    sec7P1: 'Sama renowacja to połowa sukcesu – trwałość efektu zależy od zabezpieczenia na kolejne lata.',
    sec7P2: 'Folia PPF to jedno z najskuteczniejszych zabezpieczeń kloszy reflektorów. Chroni reflektory przed uszkodzeniami zewnętrznymi – kamieniami, zarysowaniami i promieniowaniem UV. Profesjonalne oklejanie folią jest praktycznie niewidoczne, a trwałość sięga 5–10 lat.',
    sec7P3: 'Alternatywą są profesjonalne lakiery bezbarwne z filtrami UV, stosowane w lakierniach i przez STANIAX na elementach dekoracyjnych. Odnowione reflektory przekładają się na lepszą widoczność na drodze, a odpowiednie zabezpieczenie utrzymuje ten efekt. W zastosowaniach przemysłowych i dla producentów lamp STANIAX oferuje [powłoki ochronne UV](/#about) nakładane natryskowo, zapewniające wysoką odporność chemiczną i mechaniczną przy zachowaniu przejrzystości.',
    sec7P4: 'Po regeneracji nie zaniedbuj regularnego mycia lamp łagodnymi środkami i okresowej kontroli szczelności – woda wewnątrz reflektora szybko zniszczy nawet świeżo zregenerowane odbłyśniki. Unikaj agresywnych produktów chemicznych podczas szlifowania i czyszczenia, a auto parkuj w miarę możliwości w cieniu lub garażu.',

    sec8Title: 'Regeneracja reflektorów a bezpieczeństwo i opłacalność',
    sec8P1: 'Sprawne reflektory to dłuższa widoczność przed pojazdem, lepsze doświetlenie krawędzi jezdni i więcej czasu na reakcję w sytuacjach awaryjnych. Polerowanie poprawia widoczność na drodze, a kompleksowa regeneracja z metalizacją przywraca parametry bliskie fabrycznym – co bezpośrednio przekłada się na bezpieczeństwo jazdy wszystkich użytkowników drogi.',
    sec8P2: 'Aspekt ekonomiczny jest równie istotny: regeneracja reflektorów samochodowych (zwłaszcza z metalizacją odbłyśników) jest wielokrotnie tańsza niż zakup nowych lamp, a jednocześnie wydłuża ich żywotność o kolejne lata. Naprawa zamiast wymiany oznacza też mniejszą ilość odpadów – bardziej odpowiedzialne podejście do eksploatacji samochodu.',
    sec8P3: 'W przypadku flot firmowych – aut dostawczych i służbowych – regularna renowacja lamp znacząco obniża koszty serwisu. Zanim zdecydujesz się na kosztowną wymianę kompletnej lampy, skonsultuj się z profesjonalistami współpracującymi ze STANIAX.',

    sec9Title: 'STANIAX – partner B2B w regeneracji odbłyśników i obróbce powierzchni lamp',
    sec9P1: 'STANIAX to specjalista dla klientów biznesowych: producentów lamp, warsztatów samochodowych, lakierni i firm z branży automotive. Nasze główne kompetencje obejmują metalizację próżniową PVD odbłyśników i elementów dekoracyjnych, metalizację natryskową, lakierowanie tworzyw sztucznych, metali i szkła oraz nakładanie farb podkładowych i powłok ochronnych UV o długiej żywotności.',
    sec9P2: 'Kładziemy nacisk na efekty lustrzane, wysoką estetykę powierzchni, powtarzalność serii i trwałość powłok – szczególnie istotne dla producentów reflektorów, lusterek i elementów wnętrz samochodów. Nasze doświadczenie obejmuje realizacje dla branży automotive: odbłyśniki do reflektorów halogenowych i bi xenon, elementy dekoracyjne kokpitów, osłony i ramki lamp – zawsze zgodnie z wymaganiami jakościowymi na poziomie OEM.',
    sec9P3: 'Jeśli prowadzisz warsztat, lakiernię lub firmę produkującą komponenty oświetleniowe i szukasz partnera do regeneracji odbłyśników, wykończenia seryjnych lamp samochodowych lub projektów specjalnych związanych z metalizacją i lakierowaniem dekoracyjnym – [skontaktuj się z nami](/#contact). Wspólnie znajdziemy rozwiązanie dopasowane do Twoich potrzeb produkcyjnych.',

    faqTitle: 'Najczęstsze pytania o regenerację reflektorów (FAQ)',
    faqItems: [
      {
        q: 'Ile kosztuje regeneracja reflektorów?',
        a: 'Polerowanie klosza z nałożeniem powłoki UV to koszt 150–300 zł za lampę, a kompleksowa regeneracja z metalizacją odbłyśnika – 350–700 zł za sztukę. Dla porównania nowa lampa OEM kosztuje od 1 500 do ponad 5 000 zł.'
      },
      {
        q: 'Ile trwa regeneracja reflektorów?',
        a: 'Samo polerowanie klosza można wykonać w kilka godzin. Kompleksowa regeneracja z metalizacją odbłyśników trwa zwykle od 5 do 7 dni roboczych, w zależności od zakresu prac i technologii.'
      },
      {
        q: 'Czy zmatowione reflektory przejdą przegląd techniczny?',
        a: 'Mocno zdegradowane klosze przepuszczają tylko 20–30% światła, co grozi negatywnym wynikiem badania technicznego, a nawet odmową dopuszczenia pojazdu do ruchu. Regeneracja przywraca parametry świecenia i pozwala uniknąć problemów na przeglądzie.'
      }
    ]
  },
  en: {
    backToNews: 'Back to news',
    backToHome: 'Back to home page',
    articleBadge: 'Article',
    readTime: '6 min read',
    heading: 'Regeneration of Reflectors and Car Headlights – Driver\'s Guide and STANIAX Offer',
    lead: 'Headlights in every car serve a double role: they ensure driving safety and affect the vehicle\'s aesthetics. When they lose clarity, road visibility drops drastically. In this guide, we explain when and how to carry out regeneration, which methods bring durable effects, and why STANIAX is the partner chosen by workshops and manufacturers of car lamps all over Poland.',
    imageAlt: 'Restored car headlight reflectors after PVD vacuum metallization',
    newsTitle: 'News',
    shareTitle: 'Share article',
    copySuccess: 'Link copied to clipboard!',
    copyTitle: 'Copy link',
    printTitle: 'Print article',
    ctaTitle: 'Build your advantage with us',
    ctaDesc: 'Are you looking for a partner who will deliver the highest quality metallization coatings with nanometric thicknesses? Consult our experts today.',
    ctaBtn: 'Write to us',
    backToNewsList: 'Back to news list',
    tableTitle: 'Lens polishing, interior regeneration, or lamp replacement – what to choose?',
    tableHeaders: ['Method', 'Cost (per pc)', 'Durability of effect', 'Scope'],
    tableRows: [
      ['Lens polishing', '150–300 PLN', '1–2 seasons', 'only outer surface'],
      ['Comprehensive regeneration', '350–700 PLN', '3–5 years', 'lens + reflector + gaskets'],
      ['New lamp (OEM)', '1,500–5,000+ PLN', 'factory', 'complete assembly']
    ],
    metaTitle: "Reflector Regeneration and Headlight Polishing | STANIAX",
    metaDesc: 'Reflector regeneration using the PVD method and headlight polishing. Prices from 150 PLN, durability up to 5 years. Check when to restore and when to replace.',
    metaOgDesc: 'Reflector regeneration using the PVD method and headlight polishing. Prices from 150 PLN, durability up to 5 years. Check when to restore and when to replace.',
    
    introTitle: 'Reflector and headlight regeneration – quick answers to the most common questions',
    introP1: 'If you notice that the headlights and fog light reflectors in your car shine weaker than before, have a yellowish tint, or you received a remark during the technical inspection – it is a signal that it is time for regeneration. Clouding of headlights can lead to refusal of vehicle registration, so it is not worth waiting. Polishing headlights improves their appearance and functionality, and regenerating reflectors in headlights can increase their efficiency by up to 100%.',
    introP2: 'Car headlight reflector regeneration includes several scopes: lens polishing – removing cloudiness and micro-scratches from the outer surface; reflector regeneration – restoring the reflective layer inside the lamp; and sealing and UV protection – protecting against re-clouding.',
    introP3: 'Improvement in visibility is felt immediately, and the cost starts from about 150–300 PLN for lens polishing; full regeneration with reflector metallization is 350–700 PLN – still many times less than buying new lamps, where, for example, bi-xenon headlights can cost several thousand PLN each. Reflector regeneration restores full efficiency at a fraction of the price. At STANIAX, we specialize in reflector regeneration using industrial methods – vacuum PVD metallization and spray metallization – which yields a more durable effect than amateur polishing in a garage.',
    
    sec1Title: 'Why do headlights become cloudy and lose their former shine?',
    sec1P1: 'Since the late 1990s, most headlights have been made of polycarbonate, not glass. Polycarbonate is lightweight and impact-resistant, but susceptible to degradation – especially under the influence of sunlight. The factory protective layer, with a thickness of only 15–25 micrometers, degrades over time, exposing the plastic to direct UV radiation.',
    sec1P2: 'These factors lead to the gradual destruction of the lens:\n- headlights become cloudy due to UV rays, which break down the polycarbonate structure and create chromophores – coloring compounds that give a yellow tint,\n- acid rain and road salt damage car lamps, eating into micro-cracks,\n- small stones and road sand cause mechanical scratches on the surface,\n- weather conditions and cyclic temperature changes accelerate oxidation.',
    sec1P3: 'Headlight clouding degrades visibility while driving – AAA studies showed that heavily degraded lenses transmit only 20–30% of light compared to new ones. In modern bi-xenon, bi-led, and Full LED lamps, lens clouding and reflector reflectivity loss particularly lower the light output parameters – which is a direct route to a negative technical inspection result. Cloudy headlights compromise your safety and that of other road users because they shorten the actual range of the light beam.',
    
    sec2Title: 'Reflector regeneration – scope of work and possible methods',
    sec2P1: 'Reflector regeneration can mean just lens polishing or a comprehensive renewal of the lamp\'s interior – it is worth distinguishing between these two approaches because their effectiveness and price are completely different.',
    sub21Title: 'Headlight polishing',
    sub21P1: 'The basic service is headlight polishing: an external lens restoration consisting of removing cloudiness, micro-scratches, and applying a protective UV layer. Cloudy lenses are perfect candidates for such reno – as long as the lamp interior is in good condition.',
    sub22Title: 'Comprehensive repair',
    sub22P1: 'Comprehensive car headlight repair includes: dismantling the lamp from the car, unsealing the housing, cleaning the interior, reflector regeneration (vacuum metallization), optional gasket replacement, and resealing. Reflector regeneration improves the quality of the light beam, restoring parameters close to factory specifications. The headlight regeneration time is 5 to 7 business days – depending on the scope of work and technology.',
    sub22P2: 'At STANIAX, we usually work on the reflectors themselves supplied by workshops or manufacturers, using vacuum PVD metallization to obtain a mirror effect and long coating lifetime. The scope of regeneration depends on the condition of the lamps – shallow scratches require a different approach than burned reflectors or lamps flooded with water. Therefore, their regeneration should always begin with an expert assessment.',

    sec3Title: 'Step-by-step lamp polishing – how to restore lens clarity',
    sec3P1: 'Headlight polishing is a task that, with proper preparation, requires diligence but is doable even in garage conditions. Headlight polishing can be done in a few hours, and the effect directly translates to better visibility. Below you will find a description of the individual stages.',
    sec3P2: '**Needed tools and materials:**\n- masking tape to protect the paint around the lamps,\n- wet sandpaper (grades 800, 1200, 2000, 3000) or sanding discs,\n- orbital polisher or drill with adapter, polishing sponges,\n- polishing compound for plastics (restoration kits contain sandpaper and polishing paste),\n- degreasing agent, clear coat with UV filter.',
    sec3P3: '**Polishing steps:**\n1. **Preparation of lamps** – thorough cleaning of the lens, degreasing the surface, protecting the paint around the headlight with tape.\n2. **Wet sanding** – use 800 to 3000 grit sandpaper, starting with the coarsest. Horizontal and vertical movements to avoid directional scratches. Control temperature – do not overheat polycarbonate.\n3. **Actual polishing** – low polisher speed, moderate pressure, work in sections. Polishing headlights increases their transparency and brightness already at this stage.\n4. **UV protection** – polishing headlights requires applying a new protective coating. Headlight painting creates a new, hard protective layer that prevents re-clouding. Protect headlights with a UV coating after polishing – without it, the effect will disappear within a few months.',
    sec3P4: 'Polishing alone with a UV filter costs 150 to 300 PLN per lamp. Polishing improves road visibility by several meters – the difference is noticeable especially at night. Remember, however, that lens polishing without dismantling the lamp is a quick solution but not always sufficient – if the reflector inside is burned or corroded, simple external cleaning will not help.',

    sec4Title: 'Preparing lamps for comprehensive reflector regeneration',
    sec4P1: 'Reflector regeneration requires removing the lamp from the vehicle and unsealing the housing – this is usually done by a specialized workshop, while STANIAX handles the surface part of the reflector: metallization and coatings.',
    sec4P2: '**How B2B clients and workshops should prepare elements for shipping:**\n- dismantling headlights from the car – preparing lamps starts with carefully removing complete lamps,\n- unsealing the housing and removing the reflectors from the inside,\n- removing remains of old adhesive and dirt,\n- protecting delicate spots against mechanical damage (avoid contact with sharp objects).',
    sec4P3: 'Reflectors should not be mechanically polished beforehand – this damages their geometry and makes correct vacuum metallization difficult. The surface of the reflectors is additionally cleaned and prepared by STANIAX: removal of previous metallization along with sanding the inner surface, degreasing, and applying primer paint if required by the given system. Shipping should look like this: rigid cardboard boxes, individual protection of each reflector with bubble wrap, and descriptions of vehicle/model/year – thanks to this we avoid mistakes. Reflector replacement is necessary for severe structural damage – but this is rare; most old lamps can be effectively restored.',

    sec5Title: 'Professional reflector regeneration at STANIAX – vacuum and spray metallization',
    sec5P1: 'The reflector is the heart of the headlight – it shapes the beam of light and determines lighting quality. Its burnout causes a drastic drop in efficiency even with new light bulbs or LED modules. Reflector regeneration increases their lifetime and improves safety, restoring the proper amount of reflected light.',
    sec5P2: 'Vacuum metallization (PVD) consists in evaporating aluminum in a vacuum chamber and applying an ultra-thin, even layer to the reflector surface. The mirror effect is comparable to the factory finish, and the reflection coefficient reaches over 85%. The cost of regeneration with vacuum metallization is about 350–700 PLN per piece – still many times less than a new lamp.',
    sec5P3: 'Spray metallization is an alternative for some series of details when a thicker or specific coating is required. STANIAX uses industrial coating systems and UV protective coatings, making regenerated reflectors resistant to headlight operating temperatures and moisture. This service is aimed primarily at workshops, paint shops, and lighting component manufacturers, but drivers indirectly benefit from it as their lamps regain factory parameters and an attractive appearance.',

    sec6Title: 'Lighting modernization – mounting of bi-LED, bi-xenon lenses and lamp tuning',
    sec6P1: 'Regeneration is not just repair – it is also an opportunity to modernize the lighting, especially in older models with halogen headlights. Instead of just restoring the former shine, light parameters can be improved.',
    sec6P2: 'Mounting bi-led lenses is an increasingly popular direction: bi-led lenses provide a better-focused beam of light, even illumination of road edges, and low energy consumption compared to classic bulbs. Installing bi-LED lenses raises lighting quality, and mounting LED projectors increases light brightness by 100%. Lamp tuning increases headlight range at night – the difference is felt especially on out-of-town roads.',
    sec6P3: 'Xenon and bi-xenon solutions remain a popular alternative, although the market is gradually shifting to LED technology. It is worth knowing that adapting UK lamps requires changing the light beam direction – this is important when importing a car from the UK. Installing lenses requires correct alignment of the cutoff line and adaptation to regulations so as not to blind other drivers and other road users. Therefore, mounting bi-led lenses should be entrusted to specialized workshops.',
    sec6P4: 'Other forms of lamp tuning – painting the interior of the reflector, mounting LED rings, DRL additions – can give the car a modern look. STANIAX as an industrial paint shop provides high-quality decorative painting of internal and external elements, similar to window and lamp frame painting.',

    sec7Title: 'Protecting lamps after regeneration – PPF film, UV coatings and painting',
    sec7P1: 'Restoration alone is half the success – the durability of the effect depends on protection for the following years.',
    sec7P2: 'PPF film is one of the most effective protections for headlight lenses. It protects headlights against external damage – stones, scratches, and UV radiation. Professional wrapping with film is practically invisible, and the durability reaches 5–10 years.',
    sec7P3: 'An alternative is professional clear coats with UV filters, used in paint shops and by STANIAX on decorative elements. Restored headlights translate to better road visibility, and appropriate protection maintains this effect. In industrial applications and for lamp manufacturers, STANIAX offers [UV protective coatings](/#about) applied by spraying, providing high chemical and mechanical resistance while maintaining transparency.',
    sec7P4: 'After regeneration, do not neglect regular washing of the lamps with mild agents and periodic checks of sealing – water inside the headlight will quickly destroy even freshly regenerated reflectors. Avoid aggressive chemical products during sanding and cleaning, and park the car in the shade or garage if possible.',

    sec8Title: 'Reflector regeneration: safety and profitability',
    sec8P1: 'Working headlights mean longer visibility in front of the vehicle, better illumination of road edges, and more time to react in emergency situations. Polishing improves road visibility, and comprehensive regeneration with metallization restores parameters close to factory specifications – which directly translates to the driving safety of all road users.',
    sec8P2: 'The economic aspect is equally important: car reflector regeneration (especially with reflector metallization) is many times cheaper than buying new lamps, while extending their life for years to come. Repair instead of replacement also means less waste – a more responsible approach to car operation.',
    sec8P3: 'In the case of company fleets – delivery and service cars – regular lamp restoration significantly lowers maintenance costs. Before you decide on an expensive replacement of a complete lamp, consult with professionals cooperating with STANIAX.',

    sec9Title: 'STANIAX – B2B partner in reflector regeneration and lamp surface treatment',
    sec9P1: 'STANIAX is a specialist for business clients: lamp manufacturers, car workshops, paint shops, and automotive companies. Our core competencies include vacuum PVD metallization of reflectors and decorative elements, spray metallization, painting of plastics, metals, and glass, and application of primers and long-life UV protective coatings.',
    sec9P2: 'We focus on mirror effects, high surface aesthetics, series repeatability, and coating durability – particularly important for manufacturers of headlights, mirrors, and car interior elements. Our experience includes projects for the automotive industry: reflectors for halogen and bi-xenon headlights, decorative dashboard elements, covers and lamp frames – always in accordance with OEM-level quality requirements.',
    sec9P3: 'If you run a workshop, paint shop, or lighting component manufacturing company and are looking for a partner for reflector regeneration, finish of series car lamps, or special projects related to metallization and decorative painting – [contact us](/#contact). Together we will find a solution tailored to your production needs.',

    faqTitle: 'Frequently Asked Questions (FAQ)',
    faqItems: [
      {
        q: 'How much does headlight regeneration cost?',
        a: 'Polishing the lens with UV coating costs 150–300 PLN per lamp, and comprehensive regeneration with reflector metallization is 350–700 PLN per piece. For comparison, a new OEM lamp costs from 1,500 to over 5,000 PLN.'
      },
      {
        q: 'How long does headlight regeneration take?',
        a: 'Lens polishing alone can be done in a few hours. Comprehensive regeneration with reflector metallization usually takes 5 to 7 business days, depending on the scope of work and technology.'
      },
      {
        q: 'Will cloudy headlights pass a technical inspection?',
        a: 'Heavily degraded lenses transmit only 20–30% of light, which risks a negative technical inspection result, or even refusal to allow the vehicle to be driven. Regeneration restores lighting parameters and helps avoid problems during inspection.'
      }
    ]
  },
  de: {
    backToNews: 'Zurück zur Übersicht',
    backToHome: 'Zurück zur Startseite',
    articleBadge: 'Artikel',
    readTime: '6 Min. Lesezeit',
    heading: 'Regeneration von Scheinwerfern und Reflektoren – Ratgeber für Fahrer und STANIAX Angebot',
    lead: 'Scheinwerfer erfüllen in jedem Auto eine doppelte Rolle: Sie sorgen für Fahrsicherheit und beeinflussen die Ästhetik des Fahrzeugs. Wenn sie an Klarheit verlieren, sinkt die Sicht auf der Straße drastisch. In diesem Ratgeber erklären wir, wann und wie eine Regeneration durchgeführt werden sollte, welche Methoden dauerhafte Effekte erzielen und warum STANIAX der Partner ist, auf den Werkstätten und Scheinwerferhersteller in ganz Polen zurückgreifen.',
    imageAlt: 'Restaurierte Autoscheinwerfer-Reflektoren nach PVD-Vakuummetallisierung',
    newsTitle: 'Aktuelles',
    shareTitle: 'Artikel teilen',
    copySuccess: 'Link in die Zwischenablage kopiert!',
    copyTitle: 'Link kopieren',
    printTitle: 'Artikel drucken',
    ctaTitle: 'Bauen Sie mit uns Ihren Vorsprung aus',
    ctaDesc: 'Suchen Sie einen Partner, der Metallisierungsbeschichtungen höchster Qualität mit nanometrischen Dicken liefert? Konsultieren Sie noch heute unsere Experten.',
    ctaBtn: 'Schreiben Sie uns',
    backToNewsList: 'Zurück zur Übersicht',
    tableTitle: 'Polieren der Streuscheibe, Innenregeneration oder Scheinwerfertausch – was wählen?',
    tableHeaders: ['Methode', 'Kosten (pro Stk.)', 'Haltbarkeit des Effekts', 'Umfang'],
    tableRows: [
      ['Streuscheibe polieren', '150–300 PLN', '1–2 Saisons', 'nur äußere Oberfläche'],
      ['Umfassende Regeneration', '350–700 PLN', '3–5 Jahre', 'Streuscheibe + Reflektor + Dichtungen'],
      ['Neuer Scheinwerfer (OEM)', '1.500–5.000+ PLN', 'werkseitig', 'komplettes Set']
    ],
    metaTitle: "Reflektoren Regeneration und Scheinwerfer Polieren | STANIAX",
    metaDesc: 'Reflektoren Regeneration mit der PVD-Methode und Scheinwerfer Polieren. Preise ab 150 PLN, Haltbarkeit bis zu 5 Jahre. Wann regenerieren oder ersetzen.',
    metaOgDesc: 'Reflektoren Regeneration mit der PVD-Methode und Scheinwerfer Polieren. Preise ab 150 PLN, Haltbarkeit bis zu 5 Jahre. Wann regenerieren oder ersetzen.',
    
    introTitle: 'Regeneration von Scheinwerfern und Reflektoren – schnelle Antworten auf die häufigsten Fragen',
    introP1: 'Wenn Sie bemerken, dass die Scheinwerfer und Nebelscheinwerfer-Reflektoren in Ihrem Auto schwächer als gewöhnlich leuchten, einen gelblichen Ton haben oder Sie beim TÜV eine Anmerkung erhalten haben – dann ist es Zeit für eine Regeneration. Ein Erblinden der Scheinwerfer kann dazu führen, dass das Fahrzeug nicht mehr zugelassen wird, weshalb man nicht zögern sollte. Das Polieren der Scheinwerfer verbessert deren Aussehen und Funktion, und die Regeneration der Scheinwerferreflektoren kann deren Leistung um bis zu 100 % steigern.',
    introP2: 'Die Regeneration von Scheinwerfern umfasst mehrere Bereiche: das Polieren der Streuscheibe – die Entfernung von Trübungen und Mikrokratzern von der äußeren Oberfläche; die Reflektoren Regeneration – das Erneuern der reflektierenden Schicht im Inneren der Lampe; sowie das Abdichten und der UV-Schutz – zum Schutz vor erneutem Erblinden.',
    introP3: 'Die Verbesserung der Sicht ist sofort spürbar und die Kosten beginnen bei ca. 150–300 PLN für das Polieren der Streuscheibe; eine vollständige Regeneration mit Reflektormetallisierung kostet 350–700 PLN – immer noch ein Vielfaches weniger als der Kauf neuer Lampen, bei denen beispielsweise Bi-Xenon-Scheinwerfer mehrere tausend PLN pro Stück kosten können. Die Scheinwerfer-Regeneration stellt die volle Leistung zu einem Buchteil des Preises wieder her. Bei STANIAX spezialisieren wir uns auf die Reflektoren Regeneration mit industriellen Methoden – [Vakuummetallisierung PVD](/#about) und Spritzmetallisierung –, was eine dauerhaftere Wirkung hat als Amateurpolieren in der Garage.',
    
    sec1Title: 'Warum erblinden Scheinwerfer und verlieren ihren alten Glanz?',
    sec1P1: 'Seit Ende der 90er Jahre bestehen die meisten Scheinwerfer aus Polycarbonat statt aus Glas. Polycarbonat ist leicht und schlagfest, aber anfällig für Degradation – insbesondere unter Sonneneinstrahlung. Die werkseitige Schutzschicht mit einer Dicke von nur 15–25 Mikrometern baut sich mit der Zeit ab und setzt den Kunststoff direkter UV-Strahlung aus.',
    sec1P2: 'Diese Faktoren führen zur allmählichen Zerstörung der Streuscheibe:\n- Scheinwerfer erblinden durch UV-Strahlen, die die Polycarbonatstruktur abbauen und Chromophore bilden – färbende Verbindungen, die einen Gelbstich verursachen,\n- saurer Regen und Streusalz beschädigen Autoscheinwerfer, indem sie sich in Mikrorisse fressen,\n- feine Steinchen und Straßensand auf der Oberfläche,\n- Witterungseinflüsse und zyklische Temperaturwechsel beschleunigen die Oxidation.',
    sec1P3: 'Erblindete Scheinwerfer verschlechtern die Sicht beim Fahren – AAA-Studien zeigten, dass stark degradierte Streuscheiben im Vergleich zu neuen nur 20–30 % des Lichts durchlassen. Bei modernen Bi-Xenon-, Bi-LED- und Full-LED-Scheinwerfern senken Streuscheibentrübung und Reflektor-Reflexionsverlust die Lichtleistungsparameter besonders stark – was ein direkter Weg zu einer nicht bestandenen Hauptuntersuchung ist. Matte Scheinwerfer gefährden Ihre Sicherheit und die anderer Verkehrsteilnehmer, da sie die tatsächliche Reichweite des Lichtkegels verkürzen.',
    
    sec2Title: 'Scheinwerfer-Regeneration – Leistungsumfang und mögliche Methoden',
    sec2P1: 'Die Scheinwerfer-Regeneration kann nur das Polieren der Streuscheibe oder eine umfassende Erneuerung des Lampeninneren bedeuten – es lohnt sich, zwischen diesen beiden Ansätzen klar zu unterscheiden, da sich Wirksamkeit und Preis stark unterscheiden.',
    sub21Title: 'Scheinwerfer polieren',
    sub21P1: 'Der Basisservice is das Polieren der Scheinwerfer: Eine äußere Erneuerung der Streuscheibe, die die Entfernung von Trübungen, Mikrokratzern und das Auftragen einer UV-Schutzschicht umfasst. Matte Streuscheiben sind ideale Kandidaten für eine solche Renovierung – sofern das Lampeninnere in gutem Zustand ist.',
    sub22Title: 'Umfassende Reparatur',
    sub22P1: 'Die umfassende Scheinwerferreparatur umfasst: Demontage der Lampe aus dem Auto, Öffnen des Gehäuses, Reinigung des Innenraums, Reflektoren Regeneration (Vakuummetallisierung), eventuellen Dichtungsaustausch und erneutes Verkleben. Die Reflektoren Regeneration erhöht die Qualität des Lichtstrahls und stellt dem Werkzustand nahekommende Parameter wieder her. Die Dauer der Scheinwerfer-Regeneration beträgt 5 bis 7 Werktage – je nach Leistungsumfang und Technologie.',
    sub22P2: 'Bei STANIAX arbeiten wir meist an Reflektoren, die von Werkstätten oder Herstellern geliefert werden. Wir verwenden die Vakuum-PVD-Metallisierung für einen Spiegeleffekt und eine lange Haltbarkeit der Beschichtung. Der Umfang der Regeneration hängt vom Zustand der Lampen ab – flache Kratzer erfordern einen anderen Ansatz als verbrannte Reflektoren oder mit Wasser überflutete Lampen. Daher sollte die Regeneration immer mit einer fachmännischen Bewertung beginnen.',

    sec3Title: 'Scheinwerfer polieren Schritt für Schritt – so stellen Sie die Klarheit der Streuscheibe wieder her',
    sec3P1: 'Das Polieren von Scheinwerfern ist eine Aufgabe, die bei entsprechender Vorbereitung Sorgfalt erfordert, aber auch unter Garagenbedingungen machbar ist. Das Scheinwerferpolieren lässt sich in wenigen Stunden erledigen, und die Wirkung spiegelt sich direkt in einer besseren Sicht wider. Nachfolgend finden Sie eine Beschreibung der einzelnen Phasen.',
    sec3P2: '**Benötigte Werkzeuge und Materialien:**\n- Malerband zum Schutz des Lacks um die Lampen herum,\n- Nassschleifpapier (Körnung 800, 1200, 2000, 3000) oder Schleifscheiben,\n- Exzenterpolierer oder Akkuschrauber mit Aufsatz, Polierschwämme,\n- Polierpaste für Kunststoffe (Renovierungssets enthalten Schleifpapier und Polierpaste),\n- Entfettungsmittel, Klarlack mit UV-Filter.',
    sec3P3: '**Schritte zum Polieren:**\n1. **Vorbereitung der Lampen** – gründliche Reinigung der Streuscheibe, Entfetten der Oberfläche, Schutz des Lacks um den Scheinwerfer herum mit Klebeband.\n2. **Nassschleifen** – verwenden Sie Schleifpapier mit der Körnung 800 bis 3000, beginnend mit dem gröbsten. Horizontale und vertikale Bewegungen, um Richtungskratzer zu vermeiden. Kontrollieren Sie die Temperatur – Polycarbonat nicht überhitzen.\n3. **Eigentliches Polieren** – niedrige Polierergeschwindigkeit, mäßiger Druck, arbeiten in Abschnitten. Das Scheinwerferpolieren erhöht die Transparenz und Helligkeit bereits in dieser Phase.\n4. **UV-Schutz** – Scheinwerferpolieren erfordert das Auftragen einer neuen Schutzbeschichtung. Das Lackieren von Scheinwerfern erzeugt eine neue, harte Schutzschicht, die ein erneutes Erblinden verhindert. Schützen Sie die Scheinwerfer nach dem Polieren mit einer UV-Beschichtung – ohne diese verschwindet der Effekt innerhalb weniger Monate.',
    sec3P4: 'Das reine Polieren mit einem UV-Filter kostet 150 bis 300 PLN pro Lampe. Das Polieren verbessert die Sichtbarkeit auf der Straße um einige Meter – der Unterschied macht sich besonders nachts bemerkbar. Denken Sie jedoch daran, dass das Polieren der Streuscheibe ohne Demontage der Lampe eine schnelle Lösung, aber nicht immer ausreichend ist – wenn der Reflektor im Inneren verbrannt oder korrodiert ist, hilft eine einfache Außenreinigung nicht.',

    sec4Title: 'Lampenvorbereitung für die umfassende Reflektoren Regeneration',
    sec4P1: 'Die Reflektoren Regeneration erfordert den Ausbau der Lampe aus dem Fahrzeug und das Lösen des Gehäuses – dies wird normalerweise von einer Fachwerkstatt durchgeführt, während STANIAX den Oberflächenteil des Reflektors übernimmt: Metallisierung und Beschichtungen.',
    sec4P2: '**Wie B2B-Kunden und Werkstätten Elemente für den Versand vorbereiten sollten:**\n- Demontage der Scheinwerfer aus dem Auto – die Lampenvorbereitung beginnt mit dem vorsichtigen Ausbau der kompletten Scheinwerfer,\n- Öffnen des Gehäuses und Entnehmen der Reflektoren aus dem Inneren,\n- Entfernen von Resten des alten Klebers und Schmutz,\n- Schutz empfindlicher Stellen vor mechanischer Beschädigung (Kontakt mit scharfen Gegenständen vermeiden).',
    sec4P3: 'Reflektoren sollten vorher nicht mechanisch poliert werden – dies beschädigt ihre Geometrie und erschwert eine korrekte Vakuummetallisierung. Die Oberfläche der Reflektoren wird von STANIAX zusätzlich gereinigt und vorbereitet: Entfernung der vorherigen Metallisierung zusammen mit dem Schleifen der Innenfläche, Entfetten und Auftragen einer Grundierung, falls das jeweilige System dies erfordert. Der Versand sollte wie folgt aussehen: feste Kartons, einzelner Schutz jedes Reflektors mit Luftpolsterfolie, Beschreibung von Auto/Modell/Baujahr – so vermeiden wir Fehler. Ein Austausch der Scheinwerfer ist nur bei schwerwiegenden strukturellen Schäden erforderlich – was jedoch selten vorkommt; die meisten alten Lampen lassen sich erfolgreich erneuern.',

    sec5Title: 'Professionelle Reflektoren Regeneration bei STANIAX – Vakuum- und Spritzmetallisierung',
    sec5P1: 'Der Reflektor ist das Herzstück des Scheinwerfers – er formt den Lichtkegel und entscheidet über die Lichtqualität. Sein Ausbrennen führt zu einem drastischen Leistungsabfall, selbst bei neuen Glühbirnen oder LED-Modulen. Die Reflektoren Regeneration erhöht deren Lebensdauer und verbessert die Sicherheit, indem sie die richtige Menge an reflektiertem Licht wiederherstellt.',
    sec5P2: 'Die Vakuummetallisierung (PVD) besteht darin, Aluminium in einer Vakuumkammer zu verdampfen und eine ultradünne, gleichmäßige Schicht auf die Reflektoroberfläche aufzutragen. Der Spiegeleffekt ist mit der Werksausführung vergleichbar, und der Reflexionsgrad liegt bei über 85%. Die Kosten für die Regeneration mit Vakuummetallisierung betragen ca. 350–700 PLN pro Stück – immer noch um ein Vielfaches weniger als ein neuer Scheinwerfer.',
    sec5P3: 'Die Spritzmetallisierung stellt eine Alternative für bestimmte Serien von Details dar, wenn eine dickere oder spezifische Beschichtung erforderlich ist. STANIAX setzt industrielle Lacksysteme und UV-Schutzlacke ein, wodurch regenerierte Reflektoren unempfindlich gegen Scheinwerferbetriebstemperaturen und Feuchtigkeit sind. Diese Dienstleistung richtet sich in erster Linie an Werkstätten, Lackierereien und Hersteller von Beleuchtungskomponenten, aber Autofahrer profitieren indirekt davon, da ihre Scheinwerfer wieder Werksparameter und ein attraktives Aussehen erhalten.',

    sec6Title: 'Beleuchtungsmodernisierung – Montage von Bi-LED-, Bi-Xenon-Linsen und Scheinwerfer-Tuning',
    sec6P1: 'Die Regeneration ist nicht nur Reparatur – sie ist auch eine Gelegenheit, die Beleuchtung zu modernisieren, insbesondere bei älteren Modellen mit Halogenscheinwerfern. Anstatt nur den alten Glanz wiederherzustellen, können die Lichtparameter verbessert werden.',
    sec6P2: 'Die Montage von Bi-LED-Linsen wird immer beliebter: Bi-LED-Linsen sorgen für einen besser fokussierten Lichtkegel, eine gleichmäßige Ausleuchtung des Fahrbahnrandes und einen geringen Energieverbrauch im Vergleich zu klassischen Glühbirnen. Der Einbau von Bi-LED-Linsen erhöht die Lichtqualität, und die Montage von LED-Projektoren steigert die Helligkeit um 100%. Das Scheinwerfer-Tuning vergrößert die Leuchtweite bei Nacht – der Unterschied ist besonders auf Landstraßen spürbar.',
    sec6P3: 'Xenon- und Bi-Xenon-Lösungen bleiben eine beliebte Alternative, obwohl sich der Markt allmählich auf LED-Technik verlagert. Es ist gut zu wissen, dass die Anpassung von Scheinwerfern aus UK das Verstellen des Lichtstrahls erfordert – das ist wichtig beim Import eines Autos aus Großbritannien. Die Montage von Linsen erfordert eine korrekte Einstellung der Hell-Dunkel-Grenze und die Anpassung an die Vorschriften, um andere Autofahrer und andere Verkehrsteilnehmer nicht zu blenden. Daher sollte die Montage von Bi-LED-Linsen Fachwerkstätten anvertraut werden.',
    sec6P4: 'Andere Formen des Scheinwerfer-Tunings – Lackieren des Scheinwerferinnenraums, Montage von LED-Ringen, DRL-Ergänzungen – können dem Auto einen modernen Look verleihen. STANIAX als Industrielackiererei bietet hochwertiges dekoratives Lackieren von Innen- und Außenelementen, ähnlich wie bei Glas- und Scheinwerferrahmenlackierungen.',

    sec7Title: 'Schutz der Lampen nach der Regeneration – PPF-Folie, UV-Beschichtungen und Lackieren',
    sec7P1: 'Die reinen Renovierungskosten sind nur der halbe Erfolg – die Haltbarkeit des Effekts hängt vom Schutz für die kommenden Jahre ab.',
    sec7P2: 'PPF-Folie ist einer der wirksamsten Schutze für Scheinwerferstreuscheiben. Sie schützt die Scheinwerfer vor äußeren Schäden – Steinen, Kratzern und UV-Strahlung. Professionelles Folieren ist praktisch unsichtbar, und die Haltbarkeit beträgt 5–10 Jahre.',
    sec7P3: 'Eine Alternative sind professionelle Klarlacke mit UV-Filtern, die in Lackierereien und von STANIAX auf dekorativen Elementen verwendet werden. Erneuerte Scheinwerfer bedeuten eine bessere Sicht auf der Straße, und ein entsprechender Schutz erhält diesen Effekt. Für industrielle Anwendungen und Scheinwerferhersteller bietet STANIAX im Spritzverfahren aufgetragene UV-Schutzlacke an, die eine hohe chemische und mechanische Beständigkeit bei gleichzeitiger Transparenz bieten.',
    sec7P4: 'Vernachlässigen Sie nach der Regeneration nicht das regelmäßige Reinigen der Scheinwerfer mit milden Mitteln und die regelmäßige Dichtheitskontrolle – Wasser im Scheinwerfer zerstört auch frisch regenerierte Reflektoren schnell. Vermeiden Sie aggressive chemische Produkte beim Schleifen und Reinigen und parken Sie das Auto nach Möglichkeit im Schatten oder in einer Garage.',

    sec8Title: 'Scheinwerfer-Regeneration: Sicherheit und Rentabilität',
    sec8P1: 'Funktionstüchtige Scheinwerfer bedeuten eine größere Sichtweite vor dem Fahrzeug, eine bessere Ausleuchtung des Fahrbahnrandes und mehr Zeit zum Reagieren in Notsituationen. Das Polieren verbessert die Sicht auf der Straße, und eine umfassende Regeneration mit Metallisierung stellt Parameter nahe am Werkzustand wieder her – was sich direkt auf die Fahrsicherheit aller Verkehrsteilnehmer auswirkt.',
    sec8P2: 'Der wirtschaftliche Aspekt ist ebenso wichtig: Die Scheinwerfer-Regeneration (insbesondere mit Reflektoren Regeneration) ist um ein Vielfaches günstiger als der Kauf neuer Scheinwerfer und verlängert gleichzeitig deren Lebensdauer für die kommenden Jahre. Eine Reparatur statt eines Austauschs bedeutet auch weniger Abfall – ein verantwortungsvollerer Umgang mit dem Fahrzeugbetrieb.',
    sec8P3: 'Bei Firmenflotten – Liefer- und Dienstwagen – senkt eine regelmäßige Scheinwerferrenovierung die Wartungskosten erheblich. Bevor Sie sich für einen teuren Austausch eines kompletten Scheinwerfers entscheiden, wenden Sie sich an die mit STANIAX kooperierenden Fachleute.',

    sec9Title: 'STANIAX – B2B-Partner bei der Reflektoren Regeneration und Scheinwerfer-Oberflächenbehandlung',
    sec9P1: 'STANIAX ist ein Spezialist für Geschäftskunden: Scheinwerferhersteller, Kfz-Werkstätten, Lackierereien und Automotive-Unternehmen. Zu unseren Kernkompetenzen gehören die Vakuum-PVD-Metallisierung von Reflektoren und Dekorelementen, die Spritzmetallisierung, das Lackieren von Kunststoffen, Metallen und Glas sowie das Auftragen von Grundierungen und langlebigen UV-Schutzlacken.',
    sec9P2: 'Wir legen Wert auf Spiegeleffekte, hohe Oberflächenästhetik, Serienwiederholbarkeit und Haltbarkeit der Beschichtung – besonders wichtig für Hersteller von Scheinwerfern, Spiegeln und Autoinnenraumteilen. Unsere Erfahrung umfasst Projekte für die Automotive-Branche: Reflektoren für Halogen- und Bi-Xenon-Scheinwerfer, dekorative Cockpitelemente, Abdeckungen und Scheinwerferrahmen – immer in Übereinstimmung mit Qualitätsanforderungen auf OEM-Niveau.',
    sec9P3: 'Wenn Sie eine Werkstatt, eine Lackiererei oder einen Hersteller von Beleuchtungskomponenten betreiben und einen Partner für die Reflektoren Regeneration, die Veredelung von Serien-Autoscheinwerfern oder Spezialprojekte im Bereich Metallisierung und dekorativer Lackierung suchen – [kontaktieren Sie uns](/#contact). Gemeinsam finden wir eine auf Ihre Produktionsbedürfnisse zugeschnittene Lösung.',

    faqTitle: 'Häufig gestellte Fragen (FAQ)',
    faqItems: [
      {
        q: 'Wie viel kostet die Scheinwerfer-Regeneration?',
        a: 'Das Polieren der Streuscheibe mit UV-Beschichtung kostet 150–300 PLN pro Lampe, eine umfassende Regeneration mit Reflektormetallisierung 350–700 PLN pro Stück. Im Vergleich dazu kostet ein neuer OEM-Scheinwerfer ab 1.500 bis über 5.000 PLN.'
      },
      {
        q: 'Wie lange dauert die Scheinwerfer-Regeneration?',
        a: 'Das reine Polieren der Streuscheibe kann in wenigen Stunden erledigt werden. Eine umfassende Regeneration mit Reflektormetallisierung dauert in der Regel 5 bis 7 Werktage, je nach Arbeitsaufwand und Technologie.'
      },
      {
        q: 'Bestehen erblindete Scheinwerfer die Hauptuntersuchung?',
        a: 'Stark degradierte Streuscheiben lassen nur 20–30 % des Lichts durch, was zu einer nicht bestandenen Hauptuntersuchung oder sogar zum Entzug der Straßenzulassung führen kann. Die Regeneration stellt die Lichtwerte wieder her und vermeidet Probleme bei der HU.'
      }
    ]
  }
}

export default function ArticleReflectors({ lang = 'pl' as Lang }: { lang?: Lang }) {
  const navigate = useNavigate()
  const [readingProgress, setReadingProgress] = useState(0)

  // Markdown-like bold text rendering helper (supports **text**)
  const renderBoldText = (textStr: string, keyPrefix: any): any[] => {
    const parts = []
    const boldRegex = /\*\*(.*?)\*\*/g
    let lastIndex = 0
    let match

    while ((match = boldRegex.exec(textStr)) !== null) {
      const matchIndex = match.index
      if (matchIndex > lastIndex) {
        parts.push(textStr.substring(lastIndex, matchIndex))
      }
      parts.push(
        <strong key={`${keyPrefix}-bold-${matchIndex}`} className="font-bold text-foreground">
          {match[1]}
        </strong>
      )
      lastIndex = boldRegex.lastIndex
    }

    if (lastIndex < textStr.length) {
      parts.push(textStr.substring(lastIndex))
    }

    return parts.length > 0 ? parts : [textStr]
  }

  // Markdown-like parser helper (supports [label](url))
  const renderTextWithLinks = (textStr: string) => {
    if (!textStr) return ''
    const parts: any[] = []
    const linkRegex = /\[(.*?)\]\((.*?)\)/g
    let lastIndex = 0
    let match
    
    while ((match = linkRegex.exec(textStr)) !== null) {
      const matchIndex = match.index
      if (matchIndex > lastIndex) {
        parts.push(...renderBoldText(textStr.substring(lastIndex, matchIndex), lastIndex))
      }
      
      const label = match[1]
      const url = match[2]
      
      if (url.startsWith('/')) {
        parts.push(
          <Link
            key={`link-${matchIndex}`}
            to={url}
            className="text-accent hover:underline font-medium"
          >
            {label}
          </Link>
        )
      } else {
        parts.push(
          <a
            key={`link-${matchIndex}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:underline font-medium"
          >
            {label}
            <ArrowUpRight className="inline-block w-4 h-4 ml-0.5" />
          </a>
        )
      }
      
      lastIndex = linkRegex.lastIndex
    }
    
    if (lastIndex < textStr.length) {
      parts.push(...renderBoldText(textStr.substring(lastIndex), lastIndex))
    }
    
    return parts.length > 0 ? parts : textStr
  }

  const activeLang = lang === 'pl' ? 'pl' : lang === 'de' ? 'de' : 'en'
  const text = articleContent[activeLang]

  useEffect(() => {
    window.scrollTo(0, 0)

    // SEO Meta updates
    const originalTitle = document.title
    const originalDescription = document.querySelector('meta[name="description"]')?.getAttribute('content')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const originalOgTitle = ogTitle?.getAttribute('content')
    const ogDesc = document.querySelector('meta[property="og:description"]')
    const originalOgDesc = ogDesc?.getAttribute('content')
    
    document.title = text.metaTitle
    
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', text.metaDesc)
    }
    
    if (ogTitle) {
      ogTitle.setAttribute('content', text.metaTitle)
    }
    
    if (ogDesc) {
      ogDesc.setAttribute('content', text.metaOgDesc)
    }

    // Canonical link update
    let canonical = document.querySelector('link[rel="canonical"]')
    let createdCanonical = false
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
      createdCanonical = true
    }
    const originalCanonical = canonical.getAttribute('href')
    const subPath = lang === 'pl' 
      ? 'news/regeneracja-odblysnikow-reflektorow-samochodowych' 
      : lang === 'de'
      ? 'de/news/scheinwerfer-reflektoren-regeneration-und-polieren'
      : 'en/news/reflector-regeneration-and-headlight-polishing'
    canonical.setAttribute('href', `https://www.staniax.pl/${subPath}`)

    return () => {
      document.title = originalTitle
      if (metaDesc && originalDescription) {
        metaDesc.setAttribute('content', originalDescription)
      }
      if (ogTitle && originalOgTitle) {
        ogTitle.setAttribute('content', originalOgTitle)
      }
      if (ogDesc && originalOgDesc) {
        ogDesc.setAttribute('content', originalOgDesc)
      }
      if (canonical) {
        if (originalCanonical) {
          canonical.setAttribute('href', originalCanonical)
        } else if (createdCanonical) {
          document.head.removeChild(canonical)
        }
      }
    }
  }, [text, lang])

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100
        setReadingProgress(currentProgress)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const homePath = lang === 'pl' ? '/' : `/${lang}`
  const newsPath = lang === 'pl' ? '/news' : `/${lang}/news`

  const scrollToContact = () => {
    navigate(homePath)
    setTimeout(() => {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        const lenis = (window as any).lenis
        if (lenis) {
          lenis.scrollTo(contactSection, {
            offset: -80,
            duration: 1.5,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          })
        } else {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }, 300)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: text.heading,
        url: window.location.href
      }).catch(() => {})
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast.success(text.copySuccess)
    }
  }

  const languageLinks = [
    { flag: "🇵🇱", lang: "pl" as const, path: "/news/regeneracja-odblysnikow-reflektorow-samochodowych", label: "Polski" },
    { flag: "🇬🇧", lang: "en" as const, path: "/en/news/reflector-regeneration-and-headlight-polishing", label: "English" },
    { flag: "🇩🇪", lang: "de" as const, path: "/de/news/scheinwerfer-reflektoren-regeneration-und-polieren", label: "Deutsch" },
  ]

  // Parser helper specifically for formatting sections that can have lists
  const renderBodyParagraphs = (pText: string) => {
    if (!pText) return null
    if (pText.includes('\n-')) {
      const parts = pText.split('\n')
      const paragraphs: any[] = []
      let listItems: any[] = []
      
      parts.forEach((part, index) => {
        if (part.trim().startsWith('-')) {
          listItems.push(
            <li key={`li-${index}`} className="mb-2 text-muted-foreground">
              {renderTextWithLinks(part.replace('-', '').trim())}
            </li>
          )
        } else {
          if (listItems.length > 0) {
            paragraphs.push(<ul key={`ul-${index}`} className="list-disc pl-6 mb-6 space-y-1">{listItems}</ul>)
            listItems = []
          }
          if (part.trim().length > 0) {
            paragraphs.push(<p key={`p-${index}`} className="mb-6">{renderTextWithLinks(part)}</p>)
          }
        }
      })
      
      if (listItems.length > 0) {
        paragraphs.push(<ul key="ul-end" className="list-disc pl-6 mb-6 space-y-1">{listItems}</ul>)
      }
      
      return paragraphs
    }
    
    // Normal paragraph parsing
    return pText.split('\n\n').map((para, index) => (
      <p key={index} className="mb-6">{renderTextWithLinks(para)}</p>
    ))
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Reading progress bar */}
      <div 
        className="fixed top-0 left-0 z-[60] h-1 bg-accent transition-all duration-100 ease-out" 
        style={{ width: `${readingProgress}%` }}
        aria-hidden="true"
      />

      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
          <Link to={newsPath} className="group flex items-center gap-3 text-left" aria-label={text.backToNews}>
            <div className="leading-tight">
              <span className="block text-xs uppercase tracking-[0.5em] text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                STANIAX
              </span>
              <span className="block text-lg font-black">
                {text.newsTitle}
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-3 sm:gap-6">
            <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium">
              <Link to={lang === 'pl' ? '/#kim-jestesmy' : `/${lang}#kim-jestesmy`} className="text-muted-foreground hover:text-accent transition-colors">
                {t(lang, 'oStaniax')}
              </Link>
              <Link to={lang === 'pl' ? '/#about' : `/${lang}#about`} className="text-muted-foreground hover:text-accent transition-colors">
                {t(lang, 'oferta')}
              </Link>
              <Link to={lang === 'pl' ? '/#projects' : `/${lang}#projects`} className="text-muted-foreground hover:text-accent transition-colors">
                {t(lang, 'realizacje')}
              </Link>
              <Link to={lang === 'pl' ? '/gallery' : `/${lang}/gallery`} className="text-muted-foreground hover:text-accent transition-colors">
                {t(lang, 'galeria')}
              </Link>
              <Link to={lang === 'pl' ? '/#contact' : `/${lang}#contact`} className="text-muted-foreground hover:text-accent transition-colors">
                {t(lang, 'kontakt')}
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              {languageLinks.map((l) => (
                <Link
                  key={l.lang}
                  to={l.path}
                  aria-label={l.label}
                  className={cn(
                    'text-lg sm:text-xl rounded-full transition-all duration-300 hover:scale-125 cursor-pointer select-none inline-block relative',
                    lang === l.lang ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-90'
                  )}
                >
                  {l.flag}
                </Link>
              ))}
            </div>
            <Button
              className="font-semibold text-xs sm:text-sm px-3 sm:px-4"
              onClick={scrollToContact}
            >
              {t(lang, 'kontakt')}
              <ArrowRight className="ml-1 sm:ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-28 pb-20">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          
          {/* Metadata and Title wrapped in max-w-3xl for optimal typography alignment */}
          <div className="max-w-3xl">
            {/* Metadata aligned to left edge of container */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                {text.articleBadge}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {lang === 'pl' ? '10 czerwca 2026' : lang === 'de' ? '10. Juni 2026' : 'June 10, 2026'}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                {text.readTime}
              </span>
            </div>
            
            {/* Title and description on the exact same width as content, starting from left */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4">
              {text.heading}
            </h1>
            <p className="text-muted-foreground/80 text-base md:text-lg mb-8 italic leading-relaxed">
              {text.lead}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[30vh] sm:h-[45vh] min-h-[250px] rounded-[32px] overflow-hidden mb-12 border border-border/40">
            <img
              src={newReflectorsImage}
              alt={text.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </div>

          {/* Grid Content Layout */}
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] items-start">
            
            {/* Main Column */}
            <article className="space-y-8 text-muted-foreground leading-relaxed text-base md:text-lg">
              
              <div className="space-y-6">
                {text.introTitle && (
                  <h2 className="text-xl md:text-2xl font-black text-foreground pt-2">
                    {text.introTitle}
                  </h2>
                )}
                <div>
                  {renderBodyParagraphs(text.introP1)}
                </div>
                <div>
                  {renderBodyParagraphs(text.introP2)}
                </div>
                <div>
                  {renderBodyParagraphs(text.introP3)}
                </div>
              </div>

              {/* Section 1 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec1Title}
                </h2>
                <div>
                  {renderBodyParagraphs(text.sec1P1)}
                </div>
                <div>
                  {renderBodyParagraphs(text.sec1P2)}
                </div>
                <div>
                  {renderBodyParagraphs(text.sec1P3)}
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec2Title}
                </h2>
                <div>
                  {renderBodyParagraphs(text.sec2P1)}
                </div>

                {/* Sub 2.1 */}
                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">{text.sub21Title}</h3>
                  <div>
                    {renderBodyParagraphs(text.sub21P1)}
                  </div>
                </div>

                {/* Sub 2.2 */}
                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">{text.sub22Title}</h3>
                  <div>
                    {renderBodyParagraphs(text.sub22P1)}
                  </div>
                  <div>
                    {renderBodyParagraphs(text.sub22P2)}
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec3Title}
                </h2>
                <div>
                  {renderBodyParagraphs(text.sec3P1)}
                </div>
                <div>
                  {renderBodyParagraphs(text.sec3P2)}
                </div>
                <div>
                  {renderBodyParagraphs(text.sec3P3)}
                </div>
                <div>
                  {renderBodyParagraphs(text.sec3P4)}
                </div>
              </div>

              {/* Section 4 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec4Title}
                </h2>
                <div>
                  {renderBodyParagraphs(text.sec4P1)}
                </div>
                <div>
                  {renderBodyParagraphs(text.sec4P2)}
                </div>
                <div>
                  {renderBodyParagraphs(text.sec4P3)}
                </div>
              </div>

              {/* Section 5 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec5Title}
                </h2>
                <div>
                  {renderBodyParagraphs(text.sec5P1)}
                </div>
                <div>
                  {renderBodyParagraphs(text.sec5P2)}
                </div>
                <div>
                  {renderBodyParagraphs(text.sec5P3)}
                </div>
              </div>

              {/* Table section */}
              {text.tableTitle && (
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 mt-8">
                  {text.tableTitle}
                </h3>
              )}
              <div className="my-8 overflow-x-auto rounded-2xl border border-border/80 bg-card/30 backdrop-blur-md">
                <table className="w-full text-left border-collapse text-sm min-w-[600px]">
                  <thead>
                    <tr className="border-b border-border/80 bg-muted/40">
                      {text.tableHeaders.map((headerText, idx) => (
                        <th key={idx} className="p-4 font-bold text-foreground">{headerText}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {text.tableRows.map((row, rowIdx) => (
                      <tr key={rowIdx} className="hover:bg-muted/10 transition-colors">
                        <td className="p-4 font-medium text-foreground">{row[0]}</td>
                        <td className="p-4">{row[1]}</td>
                        <td className="p-4">{row[2]}</td>
                        <td className="p-4">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Section 6 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec6Title}
                </h2>
                <div>
                  {renderBodyParagraphs(text.sec6P1)}
                </div>
                <div>
                  {renderBodyParagraphs(text.sec6P2)}
                </div>
                <div>
                  {renderBodyParagraphs(text.sec6P3)}
                </div>
                <div>
                  {renderBodyParagraphs(text.sec6P4)}
                </div>
              </div>

              {/* Section 7 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec7Title}
                </h2>
                <div>
                  {renderBodyParagraphs(text.sec7P1)}
                </div>
                <div>
                  {renderBodyParagraphs(text.sec7P2)}
                </div>
                <div>
                  {renderBodyParagraphs(text.sec7P3)}
                </div>
                <div>
                  {renderBodyParagraphs(text.sec7P4)}
                </div>
              </div>

              {/* Section 8 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec8Title}
                </h2>
                <div>
                  {renderBodyParagraphs(text.sec8P1)}
                </div>
                <div>
                  {renderBodyParagraphs(text.sec8P2)}
                </div>
                <div>
                  {renderBodyParagraphs(text.sec8P3)}
                </div>
              </div>

              {/* Section 9 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec9Title}
                </h2>
                <div>
                  {renderBodyParagraphs(text.sec9P1)}
                </div>
                <div>
                  {renderBodyParagraphs(text.sec9P2)}
                </div>
                <div>
                  {renderBodyParagraphs(text.sec9P3)}
                </div>
              </div>

              {/* FAQ Section */}
              <div className="space-y-6 pt-6 border-t border-border/80">
                <h2 className="text-2xl md:text-3xl font-black text-foreground">
                  {text.faqTitle}
                </h2>
                <div className="space-y-6">
                  {text.faqItems.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground flex items-start gap-2">
                        <span className="text-accent">Q:</span>
                        {item.q}
                      </h3>
                      <p className="text-muted-foreground pl-6 border-l border-border/40">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </article>

            {/* Sidebar Sticky Panel */}
            <aside className="space-y-8 sticky top-28">
              
              {/* CTA Panel */}
              <div className="rounded-[24px] border border-border/80 bg-card/65 backdrop-blur p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl -z-10 group-hover:scale-125 transition-transform duration-500" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
                  {text.ctaTitle}
                </h4>
                <p className="text-sm text-muted-foreground/90 mb-6 leading-relaxed">
                  {text.ctaDesc}
                </p>
                <Button 
                  className="w-full font-semibold group/btn"
                  onClick={scrollToContact}
                >
                  {text.ctaBtn}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </div>

              {/* Actions Panel */}
              <div className="rounded-[24px] border border-border/80 bg-card/30 p-6 space-y-4">
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-3 w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors font-medium py-1"
                >
                  <ShareNetwork className="w-5 h-5 text-accent" />
                  {text.copyTitle}
                </button>
                <button 
                  onClick={() => window.print()}
                  className="flex items-center gap-3 w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors font-medium py-1"
                >
                  <Printer className="w-5 h-5 text-accent" />
                  {text.printTitle}
                </button>
              </div>

            </aside>
            
          </div>

        </div>
      </main>
      
      <BigFooter lang={lang} />
    </div>
  )
}
