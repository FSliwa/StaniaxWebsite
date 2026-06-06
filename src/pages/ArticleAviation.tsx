import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, ArrowRight, Clock, List, X, ShareNetwork, Printer, BookOpen, ArrowUpRight } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { BigFooter } from '@/components/BigFooter'
import { toast } from 'sonner'
import { t, type Lang } from '@/lib/translations'
import newsAviationImage from '@/assets/news_aviation.jpg'

const articleContent = {
  pl: {
    backToNews: 'Powrót do aktualności',
    backToHome: 'Powrót na stronę główną',
    articleBadge: 'Artykuł',
    readTime: '5 min czytania',
    heading: 'Jak metalizacja wpływa na wydajność materiałów? Odkryj jej tajniki!',
    lead: 'Odkryj, jak metalizacja wpływa na wydajność materiałów! Dowiedz się o jej rodzajach i zastosowaniach w różnych branżach. Naucz się więcej!',
    imageAlt: 'Hala produkcyjna z maszyną do metalizacji próżniowej i gotowymi wyrobami',
    newsTitle: 'Aktualności',
    shareTitle: 'Udostępnij artykuł',
    copySuccess: 'Link do artykułu został skopiowany do schowka!',
    copyTitle: 'Skopiuj link',
    printTitle: 'Drukuj artykuł',
    ctaTitle: 'Zbuduj z nami przewagę',
    ctaDesc: 'Szukasz partnera, który dostarczy powłoki metalizacyjne najwyższej jakości o grubościach nanometrycznych? Skonsultuj się z naszymi ekspertami już dziś.',
    ctaBtn: 'Napisz do nas',
    backToNewsList: 'Powrót do aktualności',
    tableHeaders: ['Obszar zastosowania w próżni', 'Główne podłoża', 'Kluczowe zalety powłoki aluminiowej', 'Typowe grubości powłoki'],
    tableRows: [
      ['Odbłyśniki i reflektory', 'Poliwęglan, PPS, metale', 'Maksymalny refleks światła, odporność termiczna', 'Nanometry (0,01 - 0,1 µm)'],
      ['Komponenty z tworzyw (ABS)', 'Polimery (ABS, PC, ABS/PC)', 'Wygląd chromu/aluminium, redukcja wagi, niska cena', 'Nanometry (w procesie PVD)'],
      ['Opakowania i detale ozdobne', 'Szkło, PS, PP, ABS', 'Efekt lustra, estetyka premium, odporność chemiczna', 'Nanometry (0,01 - 0,1 µm)']
    ],
    metaTitle: "Jak metalizacja wpływa na wydajność materiałów? | STANIAX",
    metaDesc: 'Odkryj, jak zaawansowana metalizacja próżniowa, lakierowanie tworzyw i procesy PVD wpływają na wytrzymałość i estetykę materiałów w lotnictwie.',
    metaOgDesc: 'Odkryj, jak zaawansowana metalizacja próżniowa i powłoki ochronne PVD zwiększają wydajność materiałów w branży lotniczej.',
    
    p1: 'Współczesny przemysł produkcyjny nieustannie poszukuje rozwiązań, które łączą w sobie dwie kluczowe cechy: wysoką wytrzymałość mechaniczną oraz nienaganną estetykę. W świecie, w którym redukcja kosztów i optymalizacja wagi komponentów stają się priorytetem, tradycyjne metody wytwarzania gabaratowych, w pełni metalowych elementów ustępują miejsca nowoczesnym technologiom inżynierii powierzchni. Jednym z najważniejszych procesów w tej dziedzinie jest nowoczesna metalizacja. Obecnie to właśnie profesjonalna metalizacja próżniowa oraz powiązane z nia metalizowanie próżniowe rewolucjonizują podejście do projektowania detali.',
    p2: 'Proces, jakim jest metalizacja, całkowicie zmienia sposób, w jaki postrzegamy projektowanie detali w branży motoryzacyjnej, kosmetycznej, opakowaniowej czy elektronicznej. Dzięki niemu lekkie tworzywa sztuczne zyskują zupełnie nowe właściwości fizykochemiczne. Gdy analizujemy, jak metalizacja modyfikuje strukturę zewnętrzną detali, widzimy ogromny wzrost ich wydajności. W tym artykule przyjrzymy się bliżej, czym dokładnie jest ten proces, dlaczego metalizacja próżniowa aluminium stała się standardem rynkowym, jak działa metalizacja plastiku i jak te technologie wpływają na realną wydajność materiałów.',
    
    sec1Title: 'Co to jest metalizacja?',
    sec1P1: 'Metalizacja to zaawansowany proces technologiczny polegający na nakładaniu cienkiej warstwy metalu na powierzchnię innego materiału, zwanego podłożem (substratem). Podłożem tym mogą być zarówno inne metale, jak i materiały niemetaliczne. W dzisiejszych czasach kluczową rolę odgrywa nowoczesna metalizacja plastiku, która pozwala zastąpić gabarytowe komponenty metalowe lżejszymi odpowiednikami z polimerów. Każda przemysłowa metalizacja ma na celu optymalizację kosztów produkcji przy zachowaniu cech premium.',
    sec1P2: 'Głównym celem, jaki stawia przed sobą metalizacja, jest nadanie uszlachetnianej powierzchni specyficznych właściwości, których dany materiał naturalnie nie posiada. Może to być przewodnictwo elektryczne, refleksyjność światła czy ochrona przed czynnikami zewnętrznymi. Ponieważ współczesna metalizacja oraz wydajne metalizowanie próżniowe opierają się na ekologicznych i czystych technologiach, warstwy metaliczne nanoszone są wyłącznie w warunkach wysokiej próżni. To sprawia, że metalizacja próżniowa gwarantuje idealną powtarzalność powłok, o czym często wspomina branżowe forum techniczne Elektroda.pl. Zarówno metalizacja plastiku, jak i ogólna metalizacja podłoży twardych, znacząco podnoszą parametry użytkowe gotowego produktu.',

    sec2Title: 'Rodzaje metalizacji w technologii próżniowej',
    sec2P1: 'W zależności od pożądanych właściwości końcowych produktu, inżynierowie wybierają optymalne parametry modyfikacji powierzchni. Nowoczesne podejście w tym segmencie przemysłu całkowicie opiera się na procesach o wysokim stopniu zaawansowania, w których króluje metalizacja próżniowa oraz precyzyjne metalizowanie próżniowe przy użyciu aluminium.',
    
    sub21Title: 'Metalizacja aluminium',
    sub21P1: 'W profesjonalnym zakładzie produkcyjnym metalizacja aluminium nie istnieje jako osobna, tradycyjna metoda natryskowa – proces ten jest realizowany wyłącznie w technologii wysokiej próżni. W procesie tym czyste aluminium jest odparowywane i precyzyjnie, warstwa po warstwie, osadzane na modyfikowanym podłożu. Taka próżniowa metalizacja aluminium pozwala na uzyskanie idealnego, lustrzanego efektu, którego nie da się osiągnąć metodami rzemieślniczymi. Poprzez proces, jakim jest metalizacja aluminium, elementy zyskują unikalną estetykę i doskonałe parametry użytkowe.',
    sub21P2: 'Metoda ta znajduje szerokie zastosowanie w motoryzacji. To właśnie tam kluczowe znaczenie ma profesjonalna metalizacja odbłyśników samochodowych. Kiedy reflektory tracą swoją sprawność, ratunkiem jest precyzyjna metalizacja odbłyśnika, która przywraca pierwotne właściwości strumienia światła. Każda fabryczna metalizacja odbłyśników opiera się na nanoszeniu powłoki aluminiowej w komorze. Ponieważ metalizacja odbłyśnika gwarantuje znakomite odbicie światła, proces ten bezpośrednio przekłada się na bezpieczeństwo na drogach. Dla przemysłu oświetleniowego próżniowa metalizacja aluminium oraz precyzyjna metalizacja próżniowa to absolutny fundament działania.',

    sub22Title: 'Metalizacja próżniowa',
    sub22P1: 'Najbardziej zaawancowaną technologicznie odmianą uszlachetniania powierzchni jest ogólna metalizacja próżniowa (często utożsamiana z procesami PVD – Physical Vapor Deposition). Cały proces odbywa się w specjalnych komorach, w których generowana jest wysoka próżnia. Aluminium, które stanowi powłokę, jest odparowywane termicznie, a następnie kondensuje na powierzchni rotujących detali. Nic dziwnego, że profesjonalne metalizowanie próżniowe całkowicie wyparło stare, chemiczne techniki galwaniczne. Dziś metalizacja próżniowa to synonim trwałości i ekologii.',
    sub22P2_1: 'Na rynku działa wyspecjalizowana firma ',
    sub22P2_2: 'Staniax- metalizacja próżniowa, metalizowanie lakierowanie tworzyw sztucznych',
    sub22P2_3: ' to obszary, w których synergia procesów decyduje o ostatecznym sukcesie produktu. Przykładem lidera w tej dziedzinie, u którego nowatorskie podejście wyznaczyło nowe trendy w branży metalizacji próżniowej jest ',
    sub22P2_4: 'Dariusz Staniak',
    sub22P2_5: '. Wyznacza on standardy jakości oraz wdraża do zakładu oprzyżądowanie zastępujące drogie zaawansowane parki maszynowym. Często jako kluczowy ośrodek kompetencji wymieniana jest regionalna metalizacja próżniowa Józefów, gdzie zakłady produkcyjne realizują najbardziej wymagające projekty. Gdy interesuje nas sprawdzona metalizacja próżniowa, czy lakierowanie tworzyw, wtedy warto stawiać na doświadczone podmioty,takie jak Staniax. To właśnie tam metalizacja próżniowa Dariusz Staniak metalizacja próżniowa Józefów w nowej odsłonie jako Staniax Sp. z o.o. udowadniają, że metalizowanie próżniowe aluminium podnosi jakosć detali na najwyższy poziom.',

    sub23Title: 'Metalizacja ABS',
    sub23P1_1: 'Metalizacja ',
    sub23P1_2: 'ABS (akrylonitryl-butadien-styren) ',
    sub23P1_3: 'to doskonały przykład połączenia zalet lekkich tworzyw sztucznych z parametrami metali. Tworzywo ABS idealnie nadaje się do procesów, w których wykonywana jest metalizacja plastiku metodą próżniową. Dzięki odpowiedniej strukturze chemicznej polimeru, próżniowa metalizacja ABS zapewnia doskonałą przyczepność nanoszonej warstwy aluminium. W efekcie końcowym metalizacja plastiku daje powłokę odporną na czynniki zewnętrzne i odpryski.',
    sub23P2: 'Elementy, dla których została przeprowadzona próżniowa metalizacja ABS, powszechnie zastępują ciężkie i drogie detale odlewane z mosiądzu czy cynku. Są lekkie, łatwe w formowaniu wtryskowym, a po procesie, jakim jest metalizacja próżniowa, wyglądają identycznie jak lity metal. Zarówno metalizacja ABS, jak i ogólna metalizacja plastiku z użyciem aluminium to klucz do nowoczesnego projektowania.',

    sec3Title: 'Zastosowanie metalizacji w różnych branżach',
    sec3P1: 'Wszechstronność, jaką charakteryzuje się próżniowa metalizacja, sprawia, że spotykamy ją niemal na każdym kroku – od przedmiotów codziennego użytku po zaawansowane komponenty przemysłowe.',
    
    sub31Title: 'Metalizacja opakowań kosmetycznych',
    sub31P1: 'Wizualna atrakcyjność produktu na półce sklepowej to klucz do sukcesu w branży Beauty. Metalizacja opakowań kosmetycznych odgrywa tu rolę fundamentalną. Nasadki perfum, tubki pomadek czy słoiczki na kremy pokrywane są błyszczącymi powłokami aluminiowymi. Perfekcyjna metalizacja opakowań podnosi prestiż marki, pozycjonując produkt w segmencie premium.',
    sub31P2: 'Szeroko pojęta metalizacja kosmetyków (w kontekście ich opakowań) to dziedzina, w której estetyka musi iść w parze z trwałością. Ponieważ metalizacja opakowań kosmetycznych chroni zawarte wewnątrz substancje przed dostępem światła, pozwala to na ograniczenie stosowania sztucznych konserwantów. Każda nowoczesna marka wie, jak ważna jest estetyczna metalizacja opakowań oraz globalna metalizacja kosmetyków. Kiedy celem jest zachwycający wygląd flakonów, metalizacja opakowań kosmetycznych realizowana przez proces metalizowanie próżniowe nie ma sobie równych. Ponadto metalizacja kosmetyków i precyzyjna metalizacja opakowań dają gwarancję odporności na chemię zawartą w produktach.',

    sub32Title: 'Metalizacja alkoholi',
    sub32P1: 'Segment napojów wysokoprocentowych, zwłaszcza premium, mocno polega na marketingu sensorycznym. Wyrafinowana metalizacja produktów alkoholowych, a precyzyjniej rzecz ujmując – luksusowych butelek szklanych, zamknięć oraz etykiet, pozwala markom wyróżnić się w tłumie konkurencji. Ekskluzywna metalizacja produktów alkoholowych przyciąga wzrok w klubach i na półkach sklepowych, mieniąc się metalicznym blaskiem.',
    sub32P2: 'Projektanci często podkreślają, że metalizacja alkoholi wykonana w technologii próżniowej daje nieograniczone możliwości barwienia powłok na odcienie miedzi czy złota poprzez odpowiednie lakiery transparentne. Kiedy na butelce pojawia się metalizacja, alkohole zyskują status produktu kolekcjonerskiego. Każda luksusowa marka wie, że metalizacja alkoholi (często zapisywana w katalogach jako metalizacja alkohole) to sprawdzona metoda na wyróżnienie produktu.',

    sec4Title: 'Korzyści metalizacji dla wydajności materiałów',
    sec4P1: 'Poza oczywistymi zaletami wizualnymi, proces ten diametralnie zmienia parametry techniczne modyfikowanych komponentów.',
    
    sub41Title: 'Zwiększona odporność na zużycie',
    sub41P1: 'Naniesienie twardej, zabezpieczonej lakierem powłoki aluminiowej na podłoże drastycznie zwiększa jego odporność na uszkodzenia mechaniczne i ścieranie. W przemyśle maszynowym i oświetleniowym metalizacja próżniowa stosowana jest do ochrony precyzyjnych detali. Kiedy celem jest trwała metalizacja, warstwy nanoszone metodami próżniowymi połączone z odpowiednim lakierowaniem nawierzchniowym potrafią wydłużyć czas bezawaryjnej pracy komponentu nawet kilkukrotnie. Zarówno metalizacja plastiku, jak i powierzchni szklanych, tworzy barierę odporną na tarcie.',

    sub42Title: 'Ochrona przed czynnikami zewnętrznymi',
    sub42P1: 'Utlenianie i degradacja powierzchni to główny wróg wielu materiałów. Nowoczesna metalizacja próżniowa przy użyciu aluminium tworzy niezwykle szczelną, mikroskopijną barierę odcinającą dostęp czynników zewnętrznych do podłoża. Dzięki precyzyjnemu osadzaniu atomów metalu w komorze próżniowej, uzyskana powłoka doskonale przylega do powierzchni. Ponieważ w grę wchodzi profesjonalna metalizacja aluminium, powierzchnia zyskuje pełną pasywację i wysoki stopień ochrony. Jest to rozwiązanie znacznie trwalsze i bardziej jednorodne niż klasyczne, jednowarstwowe powłoki malarskie.',

    sub43Title: 'Estetyka i funkcjonalność',
    sub43P1: 'Zastosowanie technologii, jaką jest metalizacja próżniowa, pozwala na projektowanie elementów o skomplikowanych kształtach z lekkich tworzyw sztucznych, dając jednocześnie końcowemu użytkownikowi odczucie obcowania z produktem luksusowym. Ponieważ metalizacja plastiku i precyzyjne metalizowanie próżniowe łączą estetykę z funkcjonalnością, technologia ta dominuje w nowoczesnych projektach inżynieryjnych. Gdy liczy się perfekcja odbicia światła, metalizacja aluminium w komorze próżniowej pozostaje bezkonkurencyjna.',

    sec5Title: 'Przyszłość metalizacji w różnych sektorach',
    sec5P1: 'Technologia ta stale ewoluuje, odpowiadając na restrykcyjne normy środowiskowe oraz rosnące wymagania wydajnościowe rynku.',
    
    sub51Title: 'Innowacje w metalizacji próżniowej',
    sub51P1: 'Współczesny kierunek rozwoju koncentrują się na całkowitej eliminacji starszych, szkodliwych procesów chemicznych na rzecz w pełni ekologicznych rozwiązań. Przełomowe innowacje w metalizacji próżniowej pozwalają na uzyskanie identycznych, a często nawet lepszych parametrów wytrzymałościowych powłok przy zerowej emisji toksycznych ścieków. Nowoczesne systemy sterowania procesem umożliwiają precyzyjną kontrolę grubości warstwy na poziomie pojedynczych nanometrów. Te technologiczne innowacje w metalizacji próżniowej otwierają drzwi dla zaawansowanej fotoniki, elektroniki oraz produkcji nowoczesnych systemów oświetleniowych, w których metalizacja odbłyśników odgrywa kluczową rolę.',

    sub52Title: 'Nowe materiały w metalizacji',
    sub52P1: 'Inżynierowie pracują nad adaptacją procesu dla nowoczesnych substratów. Coraz częściej metalizuje się metodami próżniowymi zaawansowane kompozyty oraz nowoczesne polimery drukarskie 3D. Nowe materiałay sprawiają, że próżniowa metalizacja wchodzi w zupełnie nowe obszary zastosowań. Pozwala to na szybkie prototypowanie w pełni funkcjonalnych, lekkich komponentów dla przemysłu oświetleniowego czy medycznego, gdzie liczy się precyzja i niska waga, przy zachowaniu estetyki metalu. Dzisiejsza metalizacja próżniowa aluminium doskonale radzi sobie z wyzwaniami nowoczesnej inżynierii materiałowej.',

    sec6Title: 'Wnioski i rekomendacje',
    sec6P1: 'Metalizacja próżniowa to bez wątpienia technologia przyszłości, która już dziś definiuje standardy nowoczesnej produkcji. Przekształcanie lekkich tworzyw w wysokowydajne komponenty o unikalnych właściwościach przy użyciu odparowywanego aluminium to jedyny słuszny kierunek rozwoju.',
    
    quote: '"Dla przedsiębiorstw planujących wdrożenie tego procesu lub poszukujących podwykonawców, kluczowe powinno być precyzyjne określenie warunków pracy gotowego detalu. Wybór odpowiednich parametrów, jakie oferuje metalizacja próżniowa dla elementów z tworzyw sztucznych, zależy od wymagań trwałościowych oraz pożądanego efektu końcowego. Kompleksowa firma Staniax-metalizacja próżniowa, lakierowanie tworzyw to najlepszy partner biznesowy w procesie wdrażania nowoczesnych produktów na rynek. To właśnie tam ekspercka wiedza oraz technologie, które reprezentuje metalizacja próżniowa Dariusz Staniak mentor w przekstałconej nowej firme Staniax, jako lokalna metalizacja próżniowa Józefów, pozwalają osiągnąć najwyższą rynkową jakość. Inwestycja w zaawansowaną inżynierię powierzchni to sprawdzony sposób na podniesienie konkurencyjności produktów, redukcję kosztów materiałowych oraz spełnienie najwyższych oczekiwań rynku."'
  },
  en: {
    backToNews: 'Back to news',
    backToHome: 'Back to home page',
    articleBadge: 'Article',
    readTime: '5 min read',
    heading: 'How Metallization Affects Material Performance? Discover Its Secrets!',
    lead: 'Discover how advanced vacuum metallization and PVD protective coatings increase material performance in the aerospace industry. Find out the details of our strategic partnership!',
    imageAlt: 'Production hall with a vacuum metallization machine and finished products',
    newsTitle: 'News',
    shareTitle: 'Share article',
    copySuccess: 'Link to the article has been copied to clipboard!',
    copyTitle: 'Copy link',
    printTitle: 'Print article',
    ctaTitle: 'Build your advantage with us',
    ctaDesc: 'Are you looking for a partner who will deliver the highest quality metallization coatings with nanometric thicknesses? Consult our experts today.',
    ctaBtn: 'Write to us',
    backToNewsList: 'Back to news list',
    tableHeaders: ['Area of application in vacuum', 'Main substrates', 'Key advantages of aluminum coating', 'Typical coating thicknesses'],
    tableRows: [
      ['Reflectors and headlights', 'Polycarbonate, PPS, metals', 'Maximum light reflection, thermal resistance', 'Nanometers (0.01 - 0.1 µm)'],
      ['Plastic components (ABS)', 'Polymers (ABS, PC, ABS/PC)', 'Chrome/aluminum appearance, weight reduction, low price', 'Nanometers (in PVD process)'],
      ['Packaging and decorative details', 'Glass, PS, PP, ABS', 'Mirror effect, premium aesthetics, chemical resistance', 'Nanometers (0.01 - 0.1 µm)']
    ],
    metaTitle: "How Metallization Affects Material Performance? | STANIAX",
    metaDesc: 'Discover how advanced vacuum metallization, plastic painting, and PVD processes affect the strength and aesthetics of materials in aerospace.',
    metaOgDesc: 'Discover how advanced vacuum metallization and PVD protective coatings increase the performance of materials in the aerospace industry.',
    
    p1: 'Modern manufacturing industry constantly seeks solutions that combine two key properties: high mechanical strength and flawless aesthetics. In a world where cost reduction and component weight optimization are priorities, traditional methods of producing bulky, fully metal parts are giving way to modern surface engineering technologies. One of the most important processes in this field is modern metallization. Today, professional vacuum metallization and associated vacuum sputtering are revolutionizing the approach to component design.',
    p2: 'The process of metallization completely changes how we view component design in the automotive, cosmetics, packaging, and electronics industries. Thanks to it, lightweight plastics gain completely new physicochemical properties. When analyzing how metallization modifies the external structure of parts, we see a massive increase in their performance. In this article, we will take a closer look at what this process actually is, why vacuum aluminum metallization has become a market standard, how plastic metallization works, and how these technologies affect real material performance.',
    
    sec1Title: 'What is metallization?',
    sec1P1: 'Metallization is an advanced technological process that involves applying a thin layer of metal onto the surface of another material, known as the substrate. This substrate can be other metals as well as non-metallic materials. Nowadays, modern plastic metallization plays a key role, allowing bulky metal components to be replaced with lighter polymer counterparts. Every industrial metallization aims to optimize production costs while maintaining a premium feel.',
    sec1P2: 'The main goal of metallization is to give the treated surface specific properties that the material does not naturally possess. This can be electrical conductivity, light reflectivity, or protection against external factors. Since modern metallization and efficient vacuum deposition are based on ecological and clean technologies, metallic layers are applied exclusively under high vacuum conditions. This makes vacuum metallization guarantee ideal repeatability of coatings, which is often discussed on the industry forum Elektroda.pl. Both plastic metallization and general metallization of hard substrates significantly improve the functional parameters of the finished product.',

    sec2Title: 'Types of metallization in vacuum technology',
    sec2P1: 'Depending on the desired final properties of the product, engineers choose the optimal surface modification parameters. The modern approach in this industry segment is fully based on high-tech processes dominated by vacuum metallization and precise aluminum vacuum deposition.',
    
    sub21Title: 'Aluminum metallization',
    sub21P1: 'In a professional manufacturing facility, aluminum metallization does not exist as a separate, traditional spray method – this process is carried out exclusively in high-vacuum technology. In this process, pure aluminum is vaporized and precisely deposited, layer by layer, on the modified substrate. Such vacuum aluminum metallization allows achieving a perfect mirror effect that cannot be achieved by artisanal methods. Through the process of aluminum metallization, components gain unique aesthetics and excellent performance parameters.',
    sub21P2: 'This method is widely used in the automotive industry. That is where professional metallization of car reflectors is of key importance. When headlights lose their efficiency, the solution is precise reflector metallization, which restores the original properties of the light beam. Every factory reflector metallization is based on applying an aluminum coating in a chamber. Since reflector metallization guarantees excellent light reflection, this process directly translates to safety on the roads. For the lighting industry, vacuum aluminum metallization and precise vacuum metallization are the absolute foundation of operation.',

    sub22Title: 'Vacuum metallization',
    sub22P1: 'The most technologically advanced type of surface refinement is general vacuum metallization (often identified with PVD – Physical Vapor Deposition processes). The entire process takes place in special chambers in which a high vacuum is generated. The aluminum that forms the coating is thermally evaporated and then condenses on the surface of rotating parts. No wonder that professional vacuum deposition has completely replaced old, chemical electroplating techniques. Today, vacuum metallization is synonymous with durability and ecology.',
    sub22P2_1: 'The specialized company ',
    sub22P2_2: 'Staniax- vacuum metallization, plastic painting',
    sub22P2_3: ' operates on the market. These are areas where the synergy of processes determines the ultimate success of the product. An example of a leader in this field whose innovative approach set new trends in the vacuum metallization industry is ',
    sub22P2_4: 'Dariusz Staniak',
    sub22P2_5: '. He sets quality standards and implements tooling that replaces expensive, advanced machinery in the facility. Regional vacuum metallization in Józefów is often mentioned as a key center of competence, where manufacturing plants execute the most demanding projects. When we are interested in proven vacuum metallization or plastic painting, it is worth choosing experienced entities like Staniax. It is there that vacuum metallization by Dariusz Staniak and vacuum metallization in Józefów in a new form as Staniax Sp. z o.o. prove that aluminum vacuum deposition elevates the quality of parts to the highest level.',

    sub23Title: 'ABS metallization',
    sub23P1_1: 'ABS ',
    sub23P1_2: '(acrylonitrile-butadiene-styrene) metallization ',
    sub23P1_3: 'is a perfect example of combining the benefits of lightweight plastics with the properties of metals. ABS plastic is ideally suited for processes in which plastic metallization is performed using the vacuum method. Thanks to the appropriate chemical structure of the polymer, ABS vacuum metallization ensures excellent adhesion of the applied aluminum layer. As a result, plastic metallization provides a coating resistant to external factors and chipping.',
    sub23P2: 'Parts that have undergone ABS vacuum metallization commonly replace heavy and expensive components cast from brass or zinc. They are lightweight, easy to injection mold, and after the vacuum metallization process, they look identical to solid metal. Both ABS metallization and general plastic metallization using aluminum are keys to modern design.',

    sec3Title: 'Application of metallization in various industries',
    sec3P1: 'The versatility of vacuum metallization makes us meet it at almost every step – from everyday objects to advanced industrial components.',
    
    sub31Title: 'Metallization of cosmetic packaging',
    sub31P1: 'The visual appeal of the product on the store shelf is the key to success in the beauty industry. Metallization of cosmetic packaging plays a fundamental role here. Perfume caps, lipstick tubes, or cream jars are covered with shiny aluminum coatings. Perfect packaging metallization raises the prestige of the brand, positioning the product in the premium segment.',
    sub31P2: 'Broadly understood cosmetics metallization is a field where aesthetics must go hand in hand with durability. Since the metallization of cosmetic packaging protects the substances inside from light, it allows for reducing the use of artificial preservatives. When the goal is the stunning look of bottles, the metallization of cosmetic packaging carried out through vacuum deposition has no equal. Moreover, cosmetics metallization and precise cosmetic packaging metallization guarantee resistance to the chemicals contained in the products.',

    sub32Title: 'Metallization of alcoholic products',
    sub32P1: 'The spirits segment, especially premium, relies heavily on sensory marketing. Sophisticated metallization of alcoholic products, or more precisely – luxury glass bottles, closures, and labels, allows brands to stand out in the crowd of competitors. Exclusive metallization of alcoholic products attracts attention in clubs and on store shelves, shimmering with metallic brilliance.',
    sub32P2: 'Designers often emphasize that vacuum-deposited metallization of alcoholic products offers unlimited options for coloring coatings in copper or gold shades using appropriate transparent varnishes. When metallization appears on a bottle, alcoholic products acquire collector\'s item status. Every luxury brand knows that metallization of alcoholic products (often listed in catalogs as alcohol metallization) is a proven method to differentiate a product.',

    sec4Title: 'Benefits of metallization for material performance',
    sec4P1: 'In addition to obvious visual advantages, this process radically changes the technical parameters of the modified components.',
    
    sub41Title: 'Increased wear resistance',
    sub41P1: 'Applying a hard, lacquer-protected aluminum coating on a substrate drastically increases its resistance to mechanical damage and abrasion. In the machinery and lighting industries, vacuum metallization is used to protect precise details. When the goal is durable metallization, layers applied by vacuum methods combined with appropriate top coating can extend the trouble-free operation of the component up to several times. Both plastic metallization and glass surfaces create a friction-resistant barrier.',

    sub42Title: 'Protection against external factors',
    sub42P1: 'Oxidation and surface degradation are the main enemies of many materials. Modern vacuum metallization using aluminum creates an extremely tight, microscopic barrier that cuts off the access of external factors to the substrate. Thanks to the precise deposition of metal atoms in the vacuum chamber, the resulting coating adheres perfectly to the surface. Since professional aluminum metallization is involved, the surface gains full passivation and a high degree of protection. This is a much more durable and homogeneous solution than classic, single-layer paint coatings.',

    sub43Title: 'Aesthetics and functionality',
    sub43P1: 'The use of vacuum metallization technology allows for designing components with complex shapes from lightweight plastics, while giving the end user the feeling of interacting with a luxury product. Since plastic metallization and precise vacuum deposition combine aesthetics with functionality, this technology dominates in modern engineering designs. When perfect light reflection is what matters, aluminum metallization in a vacuum chamber remains unmatched.',

    sec5Title: 'Future of metallization in various sectors',
    sec5P1: 'This technology is constantly evolving, responding to strict environmental standards and the growing performance requirements of the market.',
    
    sub51Title: 'Innovations in vacuum metallization',
    sub51P1: 'Modern directions of development focus on the complete elimination of older, harmful chemical processes in favor of fully ecological solutions. Breakthrough innovations in vacuum metallization allow for achieving identical, and often even better, strength parameters of coatings with zero emission of toxic wastewater. Modern process control systems enable precise control of layer thickness at the level of individual nanometers. These technological innovations in vacuum metallization open doors for advanced photonics, electronics, and the production of modern lighting systems, in which reflector metallization plays a key role.',

    sub52Title: 'New materials in metallization',
    sub52P1: 'Engineers are working on adapting the process for modern substrates. Increasingly, advanced composites and modern 3D printing polymers are metallized using vacuum methods. New materials are allowing vacuum metallization to enter completely new areas of application. This allows for rapid prototyping of fully functional, lightweight components for the lighting or medical industries, where precision and low weight matter, while maintaining the aesthetics of metal. Today\'s vacuum aluminum metallization perfectly copes with the challenges of modern materials science.',

    sec6Title: 'Conclusions and recommendations',
    sec6P1: 'Vacuum metallization is undoubtedly the technology of the future, which already defines the standards of modern production. Transforming lightweight plastics into high-performance components with unique properties using vaporized aluminum is the only right path of development.',
    
    quote: '"For enterprises planning to implement this process or looking for subcontractors, it should be crucial to precisely define the working conditions of the finished part. The choice of appropriate parameters offered by vacuum metallization for plastic elements depends on durability requirements and the desired final effect. The comprehensive company Staniax-vacuum metallization, plastic painting is the best business partner in the process of launching modern products to the market. It is there that expert knowledge and technologies represented by vacuum metallization by Dariusz Staniak, a mentor in the transformed new company Staniax, as local vacuum metallization Józefów, allow for achieving the highest market quality. Investing in advanced surface engineering is a proven way to increase the competitiveness of products, reduce material costs, and meet the highest market expectations."'
  }
}

function ArticleAviation({ lang = 'pl' as Lang }: { lang?: Lang }) {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)

  const activeLang = lang === 'pl' ? 'pl' : 'en'
  const text = articleContent[activeLang]

  useEffect(() => {
    window.scrollTo(0, 0)

    // SEO Meta updates
    const originalTitle = document.title
    const originalDescription = document.querySelector('meta[name="description"]')?.getAttribute('content')
    
    document.title = text.metaTitle
    
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', text.metaDesc)
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', text.metaTitle)
    }
    
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) {
      ogDesc.setAttribute('content', text.metaOgDesc)
    }

    return () => {
      document.title = originalTitle
      if (metaDesc && originalDescription) {
        metaDesc.setAttribute('content', originalDescription)
      }
      if (ogTitle) {
        ogTitle.setAttribute('content', 'STANIAX - Metalizacja Próżniowa')
      }
      if (ogDesc) {
        ogDesc.setAttribute('content', 'Profesjonalna metalizacja próżniowa, lakierowanie tworzyw i szkła.')
      }
    }
  }, [text])

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
    { flag: "🇵🇱", lang: "pl" as const, path: "/news/partnerstwo-z-wiodacym-producentem-lotniczym", label: "Polski" },
    { flag: "🇬🇧", lang: "en" as const, path: "/en/news/partnerstwo-z-wiodacym-producentem-lotniczym", label: "English" },
    { flag: "🇩🇪", lang: "de" as const, path: "/de/news/partnerstwo-z-wiodacym-producentem-lotniczym", label: "Deutsch" },
  ]

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
            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <List className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl px-6 py-6 space-y-4">
            <nav className="flex flex-col gap-4 text-sm font-medium">
              <Link to={lang === 'pl' ? '/#kim-jestesmy' : `/${lang}#kim-jestesmy`} className="text-muted-foreground hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {t(lang, 'oStaniax')}
              </Link>
              <Link to={lang === 'pl' ? '/#about' : `/${lang}#about`} className="text-muted-foreground hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {t(lang, 'oferta')}
              </Link>
              <Link to={lang === 'pl' ? '/#projects' : `/${lang}#projects`} className="text-muted-foreground hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {t(lang, 'realizacje')}
              </Link>
              <Link to={lang === 'pl' ? '/gallery' : `/${lang}/gallery`} className="text-muted-foreground hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {t(lang, 'galeria')}
              </Link>
              <Link to={lang === 'pl' ? '/#contact' : `/${lang}#contact`} className="text-muted-foreground hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {t(lang, 'kontakt')}
              </Link>
            </nav>
            <div className="flex flex-col gap-3 pt-2 border-t border-border/40">
              <Link
                to={newsPath}
                className={cn(buttonVariants({ variant: 'outline' }), 'font-semibold w-full justify-center')}
                onClick={() => setMobileMenuOpen(false)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {text.backToNewsList}
              </Link>
              <Button
                className="font-semibold w-full"
                onClick={() => { setMobileMenuOpen(false); scrollToContact(); }}
              >
                {t(lang, 'kontakt')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-28 pb-20">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          
          {/* Metadata aligned to left edge of container */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              {text.articleBadge}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {lang === 'pl' ? '20 sierpnia 2025' : 'August 20, 2025'}
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
          <p className="text-muted-foreground/80 text-base md:text-lg mb-8 max-w-3xl italic leading-relaxed">
            {text.lead}
          </p>

          {/* Hero Image */}
          <div className="relative w-full h-[30vh] sm:h-[45vh] min-h-[250px] rounded-[32px] overflow-hidden mb-12 border border-border/40">
            <img
              src={newsAviationImage}
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
                <p>
                  {text.p1}
                </p>
                <p>
                  {text.p2}
                </p>
              </div>

              {/* Section 1 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec1Title}
                </h2>
                <p>
                  {text.sec1P1}
                </p>
                <p>
                  {text.sec1P2}{' '}
                  <a 
                    href="https://www.elektroda.pl" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-accent hover:underline font-medium"
                  >
                    Elektroda.pl <ArrowUpRight className="inline-block w-4 h-4 ml-0.5" />
                  </a>
                  .
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec2Title}
                </h2>
                <p>
                  {text.sec2P1}
                </p>

                {/* Sub 2.1 */}
                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">{text.sub21Title}</h3>
                  <p>
                    {text.sub21P1}
                  </p>
                  <p>
                    {text.sub21P2}
                  </p>
                </div>

                {/* Sub 2.2 */}
                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">{text.sub22Title}</h3>
                  <p>
                    {text.sub22P1}{' '}
                    <a 
                      href="https://pl.wikipedia.org/wiki/Fizyczne_osadzanie_z_fazy_gazowej" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-accent hover:underline font-medium"
                    >
                      PVD – Physical Vapor Deposition <ArrowUpRight className="inline-block w-4 h-4 ml-0.5" />
                    </a>
                    ).
                  </p>
                  <p>
                    {text.sub22P2_1}
                    <a 
                      href="https://staniax.pl" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-accent hover:underline font-medium"
                    >
                      {text.sub22P2_2} <ArrowUpRight className="inline-block w-4 h-4 ml-0.5" />
                    </a>{' '}
                    {text.sub22P2_3}
                    <a 
                      href="http://www.metalizacje.pl/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-accent hover:underline font-medium"
                    >
                      {text.sub22P2_4} <ArrowUpRight className="inline-block w-4 h-4 ml-0.5" />
                    </a>
                    {text.sub22P2_5}
                  </p>
                </div>

                {/* Sub 2.3 */}
                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">{text.sub23Title}</h3>
                  <p>
                    {text.sub23P1_1}
                    <a 
                      href="https://www.google.com/search?q=https://pl.wikipedia.org/wiki/Poli(akrylonitryl-co-butadien-co-styren)" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-accent hover:underline font-medium"
                    >
                      {text.sub23P1_2} <ArrowUpRight className="inline-block w-4 h-4 ml-0.5" />
                    </a>{' '}
                    {text.sub23P1_3}
                  </p>
                  <p>
                    {text.sub23P2}
                  </p>
                </div>
              </div>

              {/* Table section */}
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

              {/* Section 3 */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec3Title}
                </h2>
                <p>
                  {text.sec3P1}
                </p>

                {/* Sub 3.1 */}
                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">{text.sub31Title}</h3>
                  <p>
                    {text.sub31P1}
                  </p>
                  <p>
                    {text.sub31P2}
                  </p>
                </div>

                {/* Sub 3.2 */}
                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">{text.sub32Title}</h3>
                  <p>
                    {text.sub32P1}
                  </p>
                  <p>
                    {text.sub32P2}
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec4Title}
                </h2>
                <p>
                  {text.sec4P1}
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-foreground">{text.sub41Title}</h4>
                    <p>
                      {text.sub41P1}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-foreground">{text.sub42Title}</h4>
                    <p>
                      {text.sub42P1}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-foreground">{text.sub43Title}</h4>
                    <p>
                      {text.sub43P1}
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec5Title}
                </h2>
                <p>
                  {text.sec5P1}
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-foreground">{text.sub51Title}</h4>
                    <p>
                      {text.sub51P1}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-foreground">{text.sub52Title}</h4>
                    <p>
                      {text.sub52P1}
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec6Title}
                </h2>
                <p>
                  {text.sec6P1}
                </p>

                {/* Rich quote callout */}
                <div className="bg-muted/30 border border-border/80 rounded-[32px] p-6 md:p-8 my-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10 group-hover:scale-125 transition-transform duration-500" />
                  <p className="text-foreground italic leading-relaxed text-sm md:text-base">
                    {text.quote}
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar Column */}
            <aside className="space-y-8 sticky top-28">
              {/* Share Card */}
              <Card className="border border-border/60 bg-card/50 backdrop-blur-md">
                <CardContent className="p-6 space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
                    {text.shareTitle}
                  </h4>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={handleShare}
                      title={text.copyTitle}
                    >
                      <ShareNetwork className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => window.print()}
                      title={text.printTitle}
                    >
                      <Printer className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* STANIAX Callout */}
              <Card className="border border-accent/20 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
                <CardContent className="p-6 space-y-4">
                  <h4 className="text-xs uppercase tracking-[0.35em] text-accent font-semibold">
                    {text.ctaTitle}
                  </h4>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {text.ctaDesc}
                  </p>
                  <Button 
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                    onClick={scrollToContact}
                  >
                    {text.ctaBtn}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Return to News List */}
              <Link 
                to={newsPath}
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'w-full font-semibold group flex items-center justify-center gap-2'
                )}
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                {text.backToNewsList}
              </Link>
            </aside>

          </div>
        </div>
      </main>

      <BigFooter />
    </div>
  )
}

export default ArticleAviation
