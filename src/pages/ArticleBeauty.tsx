import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, ArrowRight, Clock, List, X, ShareNetwork, Printer, BookOpen, ArrowUpRight } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { BigFooter } from '@/components/BigFooter'
import { toast } from 'sonner'
import { t, type Lang } from '@/lib/translations'
import colorfulPackagingImage from '@/assets/colorful_packaging.png'

const articleContent = {
  pl: {
    backToNews: 'Powrót do aktualności',
    backToHome: 'Powrót na stronę główną',
    articleBadge: 'Artykuł',
    readTime: '5 min czytania',
    heading: 'Metalizacja próżniowa rewolucjonizuje branżę beauty',
    lead: 'Jak nowoczesna metalizacja próżniowa oraz precyzyjne lakierowanie tworzyw i szkła rewolucjonizują rynek opakowań kosmetycznych w segmencie beauty?',
    imageAlt: 'Luksusowe, metalizowane opakowania kosmetyczne w różnych kolorach z lustrzanym połyskiem',
    newsTitle: 'Aktualności',
    shareTitle: 'Udostępnij artykuł',
    copySuccess: 'Link do artykułu został skopiowany do schowka!',
    copyTitle: 'Skopiuj link',
    printTitle: 'Drukuj artykuł',
    ctaTitle: 'Zbuduj z nami przewagę',
    ctaDesc: 'Szukasz partnera, który dostarczy powłoki metalizacyjne najwyższej jakości o grubościach nanometrycznych? Skonsultuj się z naszymi ekspertami już dziś.',
    ctaBtn: 'Napisz do nas',
    backToNewsList: 'Powrót do aktualności',
    tableHeaders: ['Zastosowanie w Beauty', 'Główne tworzywa', 'Kluczowe zalety powłoki', 'Uzyskiwany efekt'],
    tableRows: [
      ['Szminki i błyszczyki', 'ABS, PC, polimery', 'Lekkość konstrukcji, odporność na chemię kosmetyczną', 'Lustrzany chrom, złoto, rose gold'],
      ['Kompakty i palety cieni', 'ABS, PS, PMMA', 'Ekskluzywny wygląd, ochrona przed zarysowaniem', 'Wysoki połysk, matowa satyna, kolory'],
      ['Opakowania perfum (korki)', 'PP, ABS, metale', 'Precyzja skomplikowanych kształtów, niska waga', 'Złote, srebrne i kolorowe wykończenie']
    ],
    metaTitle: "Metalizacja próżniowa rewolucjonizuje branżę beauty | STANIAX",
    metaDesc: 'Dowiedz się, jak metalizacja próżniowa i precyzyjne lakierowanie tworzyw rewolucjonizują opakowania kosmetyczne w segmencie beauty.',
    metaOgDesc: 'Metalizacja próżniowa rewolucjonizuje branżę beauty. Dowiedz się, dlaczego czołowe marki kosmetyczne wybierają tę technologię.',
    
    introTitle: 'Wprowadzenie do metalizacji próżniowej',
    tableTitle: 'Porównanie zastosowań metalizacji w opakowaniach kosmetycznych',
    
    p1: 'Branża kosmetyczna to przestrzeń, w której liczy się nie tylko doskonały skład produktu, ale również jego opakowanie. Klienci coraz częściej kupują oczami, poszukując produktów premium, które zachwycają swoim wyglądem. W odpowiedzi na te potrzeby rynek opakowań kosmetycznych przechodzi prawdziwą rewolucję, a w jej centrum znajduje się [metalizacja próżniowa](/#about). W poniższym artykule przyjrzymy się, jak ta technologia zmienia oblicze współczesnych kosmetyków.',
    p2: 'Aby zrozumieć fenomen nowoczesnych opakowań, warto najpierw zgłębić technologię, która za nimi stoi. Odpowiednio dobrane procesy produkcyjne, takie jak precyzyjna metalizacja i staranne lakierowanie, pozwalają osiągnąć niesamowite efekty wizualne na materiałach, które z natury nie przypominają szlachetnych kruszców.',
    
    sec1Title: 'Co to jest metalizacja próżniowa?',
    sec1P1: 'Metalizacja próżniowa to zaawansowany proces technologiczny polegający na osadzaniu cienkiej warstwy metalu (najczęściej [aluminium](https://pl.wikipedia.org/wiki/Glin)) na powierzchni innego materiału w warunkach wysokiej próżni. W przeciwieństwie do procesów takich jak metalizacja natryskowa, która jest powszechnie stosowana w przemyśle ciężkim w celu ochrony antykorozyjnej dużych konstrukcji stalowych, technika próżniowa pozwala na uzyskanie idealnie gładkiej, lustrzanej powłoki o wysokich walorach estetycznych. Sama metalizacja w tym wydaniu jest niezwykle precyzyjna, dając efekt luksusowego złota, srebra czy miedzi bez konieczności używania tych drogich materiałów w całości.',
    sec1SubTitle: 'Historia i rozwój technologii',
    sec1P2: 'Choć nakładanie cienkich powłok metalicznych znane jest od dziesięcioleci, to początkowo proces ten był drogi i zarezerwowany dla przemysłu optycznego czy elektronicznego. Z biegiem lat technologia stawała się coraz bardziej dostępna. Obecnie metalizowanie próżniowe to standard w produkcji eleganckich opakowań. Rozwój maszyn oraz nowoczesnych lakierów sprawił, że proces ten stał się nie tylko szybszy, ale i znacznie bardziej przyjazny dla środowiska.',

    sec2Title: 'Zastosowanie metalizacji w kosmetykach',
    sec2P1: 'Opakowanie kosmetyku ma za zadanie chronić produkt i przyciągać wzrok. Technologie powlekania sprawiają, że lekkie materiały zyskują wygląd ciężkich, ekskluzywnych metali.',
    
    sub21Title: 'Metalizacja plastiku w opakowaniach',
    sub21P1: 'W branży Beauty najczęściej stosowana jest [metalizacja plastiku](/#about). Elementy takie jak zakrętki słoiczków z kremami, obudowy szminek czy atomizery, są produkowane z lekkich [polimerów](https://pl.wikipedia.org/wiki/Polimery), a następnie poddawane procesowi metalizacji. Dzięki temu opakowanie pozostaje lekkie i poręczne dla konsumenta, ale wizualnie prezentuje się jak produkt z najwyższej półki.',
    
    sub22Title: 'Lakierowanie plastiku a metalizacja',
    sub22P1: 'Aby powłoka metaliczna była trwała i błyszcząca, sam proces nakładania metalu to za mało. Kluczowe jest odpowiednie [lakierowanie plastiku](/#about) zarówno przed, jak i po nałożeniu warstwy metalu:',
    sub22Bullet1: '**Lakier podkładowy (Base coat):** Wygładza powierzchnię plastiku, tworząc idealną bazę pod warstwę aluminium.',
    sub22Bullet2: '**Lakier nawierzchniowy (Top coat):** Chroni cienką warstwę metalu przed ścieraniem i pozwala na nadanie dowolnego koloru.',
    sub22P2: 'Odpowiednie lakierowanie w połączeniu z próżniowym nakładaniem metalu pozwala na osiągnięcie nieograniczonej palety barw -- od klasycznego złota, przez różowe złoto (rose gold), aż po metaliczne fiolety i błękity.',

    sec3Title: 'Korzyści płynące z metalizacji próżniowej w branży Beauty',
    sec3P1: 'Zastosowanie tej technologii niesie za sobą szereg benefitów, które decydują o jej rosnącej popularności wśród największych marek kosmetycznych.',
    
    sub31Title: 'Estetyka i nowoczesny design',
    sub31P1: 'Głównym powodem, dla którego producenci decydują się na metalizowanie, jest niezrównana estetyka. Produkty zyskują lustrzany połysk, który w świadomości konsumentów nieodłącznie kojarzy się z luksusem i prestiżem. To pozwala markom na pozycjonowanie swoich produktów w segmencie premium.',
    
    sub32Title: 'Zwiększona trwałość produktów',
    sub32P1: 'Wysokiej jakości lakiery stosowane jako warstwa wierzchnia sprawiają, że metalizacja jest niezwykle odporna na:',
    sub32Bullet1: 'Zarysowania mechaniczne w kosmetyczce czy torebce.',
    sub32Bullet2: 'Działanie substancji chemicznych zawartych w samych kosmetykach (np. olejki, alkohol).',
    sub32Bullet3: 'Promieniowanie UV, co zapobiega blaknięciu opakowań.',

    sub33Title: 'Zrównoważony rozwój i ekologia',
    sub33P1: 'Mogłoby się wydawać, że procesy chemiczne nie idą w parze z ekologią. Jednak w porównaniu do litych elementów metalowych, metalizowane opakowania plastikowe są znacznie lżejsze, co zmniejsza [ślad węglowy](https://pl.wikipedia.org/wiki/%C5%9Alad_w%C4%99glowy) podczas transportu. Co więcej, nowoczesne zakłady usługowe stosują lakiery utwardzane [promieniami UV](https://pl.wikipedia.org/wiki/Promieniowanie_ultrafioletowe) (bez lotnych związków organicznych), co sprawia, że technologia staje się coraz bardziej "zielona".',

    sec4Title: 'Przykłady produktów z metalizacją próżniową',
    sec4P1: 'Technologia ta znalazła zastosowanie w niemal każdym segmencie rynku beauty. Polska również jest silnym graczem na mapie europejskiej produkcji -- na przykład zapytania o usługi takie jak [metalizacja próżniowa Józefów](/#contact) i zakład metalizacji STANIAX, czy inne lokalne ośrodki produkcyjne pokazują, że polskie firmy stanowią ważne zaplecze dla międzynarodowych marek.',
    
    sub41Title: 'Innowacyjne kosmetyki z metalizowaniem',
    sub41P1: 'Na półkach drogerii bez trudu znajdziemy produkty, które wykorzystują tę technologię:',
    sub41Bullet1: '**Szminki i błyszczyki:** Błyszczące, metaliczne oprawki to dziś standard u czołowych producentów makijażu.',
    sub41Bullet2: '**Kompakty i palety cieni:** Lustrzane wykończenie kasetek na pudry czy cienie przyciąga wzrok i nadaje produktowi ekskluzywny charakter.',
    sub41Bullet3: '**Opakowania perfumów, tubki z kremami i maskarami:** Nawet elastyczne opakowania mogą być pokryte elastycznymi, metalizowanymi foliami.',
    
    sub42Title: 'Zastosowanie w perfumerii',
    sub42P1: 'W świecie perfum opakowanie jest równie ważne co sam zapach. Flakony perfum są zazwyczaj wykonane ze szkła, jednak to ich nasadki, korki i atomizery stanowią o charakterze całości. Właśnie tutaj metalizacja plastiku sprawdza się najlepiej, pozwalając na tworzenie misternych, złotych lub srebrnych korków o skomplikowanych kształtach, które byłyby zbyt ciężkie lub zbyt drogie do wykonania z czystego metalu.',

    sec5Title: 'Podsumowanie i przyszłość metalizacji w branży Beauty',
    sec5P1: 'Jak pokazują obecne tendencje rynkowe, technologie uszlachetniania powierzchni będą nadal ewoluować.',
    
    sub51Title: 'Trendy i przewidywania',
    sub51P1: 'Przyszłość przyniesie prawdopodobnie jeszcze mocniejszy nacisk na rozwiązania proekologiczne. Branża dąży do stosowania powłok, które nie zakłócają procesu [recyklingu](https://pl.wikipedia.org/wiki/Recykling) plastiku. Będziemy również obserwować rozwój w kierunku efektów specjalnych: powłok holograficznych, kameleonowych (zmieniających kolor pod kątem) oraz matowych metali, które aktualnie zyskują ogromną popularność wśród minimalistycznych marek.',
    
    sub52Title: 'Wnioski',
    sub52P1: 'Metalizacja próżniowa bezpowrotnie zmieniła branżę Beauty. Zastępując tradycyjne metale, pozwoliła na masową produkcję ekskluzywnych wizualnie opakowań przy jednoczesnym zachowaniu lekkości i optymalizacji kosztów. Połączenie precyzyjnego osadzania powłok i zaawansowanego lakierowania to dziś klucz do serca (i portfela) konsumenta ceniącego design i wysoką jakość.',

    qaTitle: 'Często zadawane pytania (Q&A)',
    q1: 'Czym jest metalizacja próżniowa i czym różni się od metalizacji natryskowej?',
    a1: 'Metalizacja próżniowa to osadzanie bardzo cienkiej warstwy metalu (najczęściej aluminium) na powierzchni innego materiału w warunkach wysokiej próżni. Daje idealnie gładką, lustrzaną powłokę o wysokiej wartości estetycznej. Metalizacja natryskowa, stosowana głównie w przemyśle ciężkim, służy przede wszystkim ochronie antykorozyjnej i nie zapewnia tak perfekcyjnie gładkiego, „biżuteryjnego” wykończenia.',
    
    q2: 'Dlaczego w branży Beauty najczęściej metalizuje się plastik zamiast używać litego metalu?',
    a2: 'Elementy opakowań (np. zakrętki, obudowy szminek, atomizery) produkuje się z lekkich polimerów, a następnie metalizuje, by połączyć wygodę i niską masę z wyglądem premium (złoto, srebro, miedź). Taka konstrukcja obniża koszty, poprawia ergonomię i zmniejsza ślad węglowy transportu w porównaniu z cięższymi elementami metalowymi, a jednocześnie zachowuje luksusowy efekt wizualny.',
    
    q3: 'Jaką rolę pełni lakierowanie w procesie metalizacji i trwałości opakowań?',
    a3: 'Lakier podkładowy (base coat) wygładza powierzchnię plastiku i przygotowuje ją do równomiernego osadzania metalu. Lakier nawierzchniowy (top coat) zabezpiecza cienką warstwę metalu przed zarysowaniami, działaniem chemikaliów z kosmetyków oraz promieniowaniem UV, a także pozwala nadać dowolny kolor. To połączenie odpowiada zarówno za „efekt lustra”, jak i dużą odporność użytkową.',
    
    q4: 'Na ile metalizacja próżniowa jest przyjazna środowisku i co z recyklingiem?',
    a4: 'W porównaniu z litymi metalami lżejsze, metalizowane opakowania plastikowe ograniczają emisje podczas transportu. Dodatkowo nowoczesne lakiery utwardzane promieniami UV nie zawierają lotnych związków organicznych, co czyni proces „zielonym” w porównaniu z tradycyjnymi rozwiązaniami. Branża intensywnie pracuje też nad powłokami, które nie zakłócają recyklingu plastiku, aby jeszcze lepiej wpisać się w gospodarkę obiegu zamkniętego.',
    
    q5: 'Gdzie najczęściej wykorzystuje się tę technologię i jakie są przykłady produktów?',
    a5: 'W makijażu spotkamy ją w oprawkach szminek i błyszczyków oraz w kompaktach i paletach z lustrzanym wykończeniem. Sprawdza się także w perfumerii - przy nasadkach, korkach i atomizerach, gdzie umożliwia tworzenie efektownych, a zarazem lekkich form. Nawet elastyczne opakowania (np. tubki) mogą korzystać z elastycznych, metalizowanych folii. Polska jest istotnym zapleczem produkcyjnym w Europie, o czym świadczy rosnące zainteresowanie usługami metalizacji w lokalnych ośrodkach.',

    ctaHeader: 'Stwórz opakowania, które zachwycą Twoich klientów!',
    ctaText: 'Szukasz sprawdzonego i doświadczonego partnera, który zamieni Twoje wizje w luksusową rzeczywistość? W Zakładzie Metalizacji STANIAX łączymy zaawansowane technologie z pasją do perfekcji. Oferujemy najwyższej jakości metalizację próżniową oraz precyzyjne lakierowanie, które wyróżnią Twoje kosmetyki na tle konkurencji.',
    ctaWhyTitle: 'Dlaczego warto współpracować ze STANIAX?',
    ctaWhy1: '**Gwarancja jakości premium:** Zapewniamy idealnie gładkie, lustrzane powłoki o niezwykłej trwałości.',
    ctaWhy2: '**Nowoczesny park maszynowy:** Realizujemy zlecenia szybko, precyzyjnie i z myślą o środowisku.',
    ctaWhy3: '**Pełna personalizacja:** Osiągamy nieograniczoną paletę barw i efektów dopasowanych do tożsamości Twojej marki.',
    ctaSubhead: 'Podnieś prestiż swoich produktów i przyciągnij wzrok konsumentów!'
  },
  en: {
    backToNews: 'Back to news',
    backToHome: 'Back to home page',
    articleBadge: 'Article',
    readTime: '5 min read',
    heading: 'Vacuum Metallization Revolutionizes the Beauty Industry',
    lead: 'How modern vacuum metallization and precise plastic and glass painting are revolutionizing the cosmetics packaging market in the beauty segment?',
    imageAlt: 'Luxurious metallized cosmetic packaging in various colors with a mirror-like finish',
    newsTitle: 'News',
    shareTitle: 'Share article',
    copySuccess: 'Link to the article has been copied to clipboard!',
    copyTitle: 'Copy link',
    printTitle: 'Print article',
    ctaTitle: 'Build your advantage with us',
    ctaDesc: 'Are you looking for a partner who will deliver the highest quality metallization coatings with nanometric thicknesses? Consult our experts today.',
    ctaBtn: 'Write to us',
    backToNewsList: 'Back to news list',
    tableHeaders: ['Application in Beauty', 'Main Plastics', 'Key Coating Advantages', 'Achieved Effect'],
    tableRows: [
      ['Lipsticks & lip glosses', 'ABS, PC, polymers', 'Lightweight construction, resistance to cosmetic chemicals', 'Mirror chrome, gold, rose gold'],
      ['Compacts & eyeshadow palettes', 'ABS, PS, PMMA', 'Exclusive look, protection against scratches', 'High gloss, matte satin, colors'],
      ['Perfume packaging (caps)', 'PP, ABS, alloys', 'Precision of complex shapes, low weight', 'Gold, silver, and colored finishes']
    ],
    metaTitle: "Vacuum Metallization in Beauty Industry | STANIAX",
    metaDesc: 'Discover how vacuum metallization and precise plastic painting revolutionize cosmetic packaging in the beauty segment.',
    metaOgDesc: 'Vacuum metallization is revolutionizing the beauty industry. Learn why leading cosmetics brands choose this technology.',
    
    introTitle: 'Introduction to Vacuum Metallization',
    tableTitle: 'Comparison of metallization applications in cosmetic packaging',
    
    p1: 'The cosmetics industry is a space where not only the perfect composition of the product matters, but also its packaging. Customers increasingly buy with their eyes, looking for premium products that delight with their appearance. In response to these needs, the cosmetics packaging market is undergoing a real revolution, with [vacuum metallization](/#about) at its center. In this article, we examine how this technology, also known as **vacuum metalizing**, is changing the face of modern cosmetics.',
    p2: 'To understand the phenomenon of modern packaging, it is first worth exploring the technology behind it. Properly selected manufacturing processes, such as precise metallization inside a **metal vacuum** system and careful coating, allow for amazing visual effects on materials that do not naturally resemble precious metals.',
    
    sec1Title: 'What is vacuum metallization?',
    sec1P1: 'Vacuum metallization is an advanced technological process—often referred to as **vacuum metal deposition**—that involves depositing a thin layer of metal (typically [aluminum](https://pl.wikipedia.org/wiki/Glin)) on the surface of another material under high vacuum conditions. Unlike processes such as thermal spray metallization, which is commonly used in heavy industry for corrosion protection of large steel structures, the vacuum technique yields a perfectly smooth, mirror-like finish of high aesthetic value. The metallization itself in this version is extremely precise, providing the effect of luxurious gold, silver, or copper without the need to use these expensive materials in their entirety.',
    sec1SubTitle: 'History and development of the technology',
    sec1P2: 'Although the application of thin metallic coatings has been known for decades, it was initially expensive and reserved for the optical or electronic industries. Over the years, the technology has become increasingly accessible. Today, vacuum metallization is standard in the production of elegant packaging. The development of machinery and modern lacquers has made this process not only faster but also significantly more environmentally friendly.',

    sec2Title: 'Application of metallization in cosmetics',
    sec2P1: 'A cosmetic package is designed to protect the product and attract attention. Coating technologies ensure that lightweight materials gain the appearance of heavy, exclusive metals.',
    
    sub21Title: 'Metallization of plastic in packaging',
    sub21P1: 'In the beauty industry, the [metallization of plastic](/#about) is most commonly used. Elements such as cream jar caps, lipstick cases, or atomizers are manufactured from lightweight [polymers](https://pl.wikipedia.org/wiki/Polimery) and then subjected to the metallization process. As a result, the packaging remains light and handy for the consumer, but visually presents itself as a top-shelf product.',
    
    sub22Title: 'Plastic coating and metallization',
    sub22P1: 'To make the metallic coating durable and glossy, the metal deposition process alone is not enough. Proper [plastic painting](/#about) both before and after the metal layer is applied is crucial:',
    sub22Bullet1: '**Base coat:** Smoothes the plastic surface, creating the perfect base for the aluminum layer.',
    sub22Bullet2: '**Top coat:** Protects the thin metal layer from abrasion and allows for any color to be applied.',
    sub22P2: 'Appropriate lacquering combined with vacuum metallization makes it possible to achieve an unlimited palette of colors—from classic gold, through rose gold, to metallic purples and blues.',

    sec3Title: 'Benefits of vacuum metallization in the beauty industry',
    sec3P1: 'The use of this technology brings a number of benefits that determine its growing popularity among the largest cosmetic brands.',
    
    sub31Title: 'Aesthetics and modern design',
    sub31P1: 'The main reason manufacturers choose to metallize is the unmatched aesthetics. Products gain a mirror shine, which is associated with luxury and prestige in consumers\' minds. This allows brands to position their products in the premium segment.',
    
    sub32Title: 'Increased product durability',
    sub32P1: 'High-quality lacquers used as a top coat make the metallization extremely resistant to:',
    sub32Bullet1: 'Mechanical scratches in makeup bags or purses.',
    sub32Bullet2: 'The action of chemicals contained in the cosmetics themselves (e.g. oils, alcohol).',
    sub32Bullet3: 'UV radiation, which prevents the packaging from fading.',

    sub33Title: 'Sustainable development and ecology',
    sub33P1: 'It might seem that chemical processes do not go hand in hand with ecology. However, compared to solid metal elements, metallized plastic packaging is much lighter, which reduces the [carbon footprint](https://pl.wikipedia.org/wiki/%C5%9Alad_w%C4%99glowy) during transport. What\'s more, modern service facilities use lacquers cured by [UV rays](https://pl.wikipedia.org/wiki/Promieniowanie_ultrafioletowe) (free of volatile organic compounds), making the technology increasingly "green".',

    sec4Title: 'Examples of products with vacuum metallization',
    sec4P1: 'This technology has found application in almost every segment of the beauty market. Poland is also a strong player on the European production map—for example, inquiries about services such as [vacuum metallization Józefów](/#contact) and the STANIAX metallization plant, or other local production centers show that Polish companies represent an important base for international brands.',
    
    sub41Title: 'Innovative cosmetics with metallization',
    sub41P1: 'On drugstore shelves, we can easily find products that use this technology:',
    sub41Bullet1: '**Lipsticks and lip glosses:** Shiny, metallic cases are standard among leading makeup manufacturers today.',
    sub41Bullet2: '**Compacts and eyeshadow palettes:** The mirror finish of powder or eyeshadow cases catches the eye and gives the product an exclusive character.',
    sub41Bullet3: '**Perfume packaging, cream tubes, and mascaras:** Even flexible packaging can be covered with flexible, metallized films.',
    
    sub42Title: 'Application in perfumery',
    sub42P1: 'In the world of perfume, packaging is just as important as the scent itself. Perfume bottles are usually made of glass, but their caps, stoppers, and atomizers define the character of the whole. This is where plastic metallization works best, allowing for the creation of intricate gold or silver caps with complex shapes that would be too heavy or too expensive to make from pure metal.',

    sec5Title: 'Summary and future of metallization in the beauty industry',
    sec5P1: 'As current market trends show, surface refinement technologies will continue to evolve.',
    
    sub51Title: 'Trends and predictions',
    sub51P1: 'The future will likely bring an even stronger emphasis on eco-friendly solutions. The industry is aiming for coatings that do not interfere with the plastic [recycling](https://pl.wikipedia.org/wiki/Recykling) process. We will also see development toward special effects: holographic, chameleon (changing color depending on the angle), and matte metal coatings, which are currently gaining huge popularity among minimalist brands.',
    
    sub52Title: 'Conclusions',
    sub52P1: 'Vacuum metallization has irreversibly changed the beauty industry. Replacing traditional metals, it has allowed for the mass production of visually exclusive packaging while maintaining lightweight properties and optimizing costs. The combination of precise coating deposition and advanced lacquering is now the key to the heart (and wallet) of the consumer who values design and high quality.',

    qaTitle: 'Frequently Asked Questions (Q&A)',
    q1: 'What is vacuum metallization and how does it differ from thermal spray metallization?',
    a1: 'Vacuum metallization is the deposition of a very thin layer of metal (most commonly aluminum) on the surface of another material under high vacuum conditions. It results in a perfectly smooth, mirror-like coating of high aesthetic value. Unlike processes such as thermal spray metallization or **vacuum casting metal** (which is a molding method), this vacuum technique serves primarily for high-end decorative finishes and does not yield a rough surface.',
    
    q2: 'Why does the beauty industry most commonly metallize plastic instead of using solid metal?',
    a2: 'Packaging elements (such as caps, lipstick cases, atomizers) are produced from lightweight polymers and then metallized to combine convenience and low weight with a premium look (gold, silver, copper). This design lowers costs, improves ergonomics, and reduces the carbon footprint of transport compared to heavier metal elements, while maintaining the luxurious visual effect.',
    
    q3: 'What role does lacquering play in the metallization process and packaging durability?',
    a3: 'The base coat smoothes the plastic surface and prepares it for uniform metal deposition. The top coat protects the thin metal layer from scratches, chemicals in cosmetics, and UV radiation, and allows for any color to be applied. This combination is responsible for both the "mirror effect" and high operational durability.',
    
    q4: 'How environmentally friendly is vacuum metallization and what about recycling?',
    a4: 'Compared to solid metals, lighter metallized plastic packaging limits emissions during transport. In addition, modern UV-cured lacquers do not contain volatile organic compounds, making the process "green" compared to traditional solutions. The industry is also working intensively on coatings that do not disrupt plastic recycling to fit better into the circular economy.',
    
    q5: 'Where is this technology most commonly used and what are examples of products?',
    a5: 'In makeup, you will find it in lipstick and lip gloss cases, as well as compacts and palettes with a mirror finish. It is also used in perfumery - for caps, stoppers, and atomizers, where it enables the creation of striking yet lightweight shapes. Even flexible packaging (such as tubes) can utilize flexible, metallized films. Poland is an important production hub in Europe, as evidenced by growing interest in metallization services in local centers.',

    ctaHeader: 'Create packaging that will delight your customers!',
    ctaText: 'Are you looking for a proven and experienced partner to turn your visions into a luxurious reality? At STANIAX Metallization Plant, we combine advanced technologies with a passion for perfection. We offer the highest quality vacuum metallization and precise lacquering that will set your cosmetics apart from the competition.',
    ctaWhyTitle: 'Why partner with STANIAX?',
    ctaWhy1: '**Premium quality guarantee:** We provide perfectly smooth, mirror-like coatings of remarkable durability.',
    ctaWhy2: '**Modern machinery park:** We complete orders quickly, precisely, and with the environment in mind.',
    ctaWhy3: '**Full personalization:** We achieve an unlimited palette of colors and effects tailored to your brand identity.',
    ctaSubhead: 'Elevate the prestige of your products and catch the consumer\'s eye!'
  },
  de: {
    backToNews: 'Zurück zu Aktuelles',
    backToHome: 'Zurück zur Startseite',
    articleBadge: 'Artikel',
    readTime: '5 Min. Lesezeit',
    heading: 'Vakuummetallisierung revolutioniert die Kosmetikbranche',
    lead: 'Wie die PVD-Oberflächenveredelung und präzise Lackierung von Kunststoffen und Glas den Markt für Kosmetikverpackungen im Beauty-Segment revolutionieren?',
    imageAlt: 'Luxuriöse, metallisierte Kosmetikverpackungen in verschiedenen Farben mit Hochglanzeffekt',
    newsTitle: 'Aktuelles',
    shareTitle: 'Artikel teilen',
    copySuccess: 'Link zum Artikel wurde in die Zwischenablage kopiert!',
    copyTitle: 'Link kopieren',
    printTitle: 'Artikel drucken',
    ctaTitle: 'Bauen Sie mit uns Ihren Vorsprung aus',
    ctaDesc: 'Suchen Sie einen Partner, der Metallisierungsbeschichtungen höchster Qualität mit nanometrischen Dicken liefert? Konsultieren Sie noch heute unsere Experten.',
    ctaBtn: 'Schreiben Sie uns',
    backToNewsList: 'Zurück zur Übersicht',
    tableHeaders: ['Anwendung in Kosmetik', 'Hauptkunststoffe', 'Vorteile der Beschichtung', 'Erzielter Effekt'],
    tableRows: [
      ['Lippenstifte & Lipglosse', 'ABS, PC, Polymere', 'Leichtbauweise, Beständigkeit gegen Kosmetikchemikalien', 'Spiegelchrom, Gold, Roségold'],
      ['Kompaktpuder & Lidschattenpaletten', 'ABS, PS, PMMA', 'Exklusive Optik, Schutz vor Kratzern', 'Hochglanz, mattes Satin, Farben'],
      ['Parfümverpackungen (Kappen)', 'PP, ABS, Legierungen', 'Präzision komplexer Formen, geringes Gewicht', 'Gold, Silber und farbige Oberflächen']
    ],
    metaTitle: "Vakuummetallisierung in der Kosmetikbranche | STANIAX",
    metaDesc: 'Erfahren Sie, wie Vakuummetallisierung und präzise Kunststofflackierung die Kosmetikverpackungen im Beauty-Segment revolutionieren.',
    metaOgDesc: 'Die PVD-Veredelung revolutioniert die Kosmetikbranche. Erfahren Sie, warum führende Kosmetikmarken diese Technologie wählen.',
    
    introTitle: 'Einführung in die Vakuummetallisierung',
    tableTitle: 'Vergleich der Metallisierungsanwendungen in Kosmetikverpackungen',
    
    p1: 'Die Kosmetikbranche ist ein Bereich, in dem nicht nur die perfekte Zusammensetzung des Produkts zählt, sondern auch seine Verpackung. Kunden kaufen immer häufiger mit den Augen und suchen nach Premium-Produkten, die durch ihr Aussehen begeistern. Als Reaktion auf diese Bedürfnisse durchläuft der Markt für Kosmetikverpackungen eine echte Revolution, in deren Zentrum die [Vakuummetallisierung](/#about) steht. In diesem Artikel untersuchen wir, wie diese Technologie – auch bekannt als **PVD-Beschichtung** – das Gesicht moderner Kosmetika verändert.',
    p2: 'Um das Phänomen moderner Verpackungen zu verstehen, lohnt es sich zunächst, die Technologie dahinter zu erforschen. Richtig gewählte Herstellungsprozesse wie präzise Metallisierung in einem **Metallvakuum**-System und sorgfältige Beschichtung ermöglichen erstaunliche visuelle Effekte auf Materialien, die von Natur aus nicht an Edelmetalle erinnern.',
    
    sec1Title: 'Was ist Vakuummetallisierung?',
    sec1P1: 'Vakuummetallisierung ist ein fortschrittlicher technologischer Prozess – oft auch als **Vakuum-Metallbedampfung** bezeichnet –, bei dem unter Hochvakuumbedingungen eine dünne Metallschicht (typischerweise [Aluminium](https://pl.wikipedia.org/wiki/Glin)) auf der Oberfläche eines anderen Materials abgeschieden wird. Im Gegensatz zu Verfahren wie der thermischen Spritzmetallisierung, dem **Vakuumguss** (oder **Vakuumguss Metall**), liefert die Vakuumtechnik eine perfekt glatte, spiegelnde Oberfläche von hohem ästhetischem Wert. Die Metallisierung selbst ist in dieser Ausführung äußerst präzise und bietet den Zierteilen und Kappen das Aussehen von Gold, Silber oder Kupfer, ohne dass diese teuren Materialien in ihrer Gesamtheit verwendet werden müssen.',
    sec1SubTitle: 'Geschichte und Entwicklung der Technologie',
    sec1P2: 'Obwohl das Auftragen dünner metallischer Schichten seit Jahrzehnten bekannt ist, war es anfangs teuer und der Optik- oder Elektronikindustrie vorbehalten. Im Laufe der Jahre wurde die Technologie immer zugänglicher. Heute ist dieses Beschichtungsverfahren Standard bei der Herstellung eleganter Verpackungen. Die Entwicklung von Maschinen und modernen Lacken hat diesen Prozess nicht nur schneller, sondern auch deutlich umweltfreundlicher gemacht.',

    sec2Title: 'Anwendung der Metallisierung in Kosmetika',
    sec2P1: 'Eine Kosmetikverpackung soll das Produkt schützen und Aufmerksamkeit erregen. Beschichtungstechnologien sorgen dafür, dass leichte Materialien das Aussehen schwerer, exklusiver Metalle erhalten.',
    
    sub21Title: 'Kunststoffmetallisierung in Verpackungen',
    sub21P1: 'In der Beauty-Branche wird am häufigsten die [Kunststoffmetallisierung](/#about) eingesetzt. Elemente wie Kappen von Cremetiegeln, Lippenstiftgehäuse oder Zerstäuber werden aus leichten [Polymeren](https://pl.wikipedia.org/wiki/Polimery) hergestellt und anschließend dem Metallisierungsprozess unterzogen. Dadurch bleibt die Verpackung für den Verbraucher leicht und handlich, präsentiert sich visuell jedoch als Spitzenprodukt.',
    
    sub22Title: 'Kunststofflackierung und Metallisierung',
    sub22P1: 'Damit die metallische Beschichtung dauerhaft und glänzend ist, reicht der Metallabscheidungsprozess allein nicht aus. Eine fachgerechte [Kunststofflackierung](/#about) sowohl vor als auch nach dem Auftragen der Metallschicht ist entscheidend:',
    sub22Bullet1: '**Grundierung (Base coat):** Glättet die Kunststoffoberfläche und bildet die perfekte Basis für die Aluminiumschicht.',
    sub22Bullet2: '**Decklack (Top coat):** Schützt die dünne Metallschicht vor Abrieb und ermöglicht das Auftragen jeder beliebigen Farbe.',
    sub22P2: 'Eine entsprechende Lackierung in Kombination mit dieser Dünnschichttechnologie ermöglicht eine unbegrenzte Farbpalette – von klassischem Gold über Roségold bis hin zu metallischen Violett- und Blautönen.',

    sec3Title: 'Vorteile der PVD-Veredelung in der Kosmetikindustrie',
    sec3P1: 'Der Einsatz dieser Technologie bringt eine Reihe von Vorteilen mit sich, die ihre wachsende Beliebtheit bei den größten Kosmetikmarken bestimmen.',
    
    sub31Title: 'Ästhetik und modernes Design',
    sub31P1: 'Der Hauptgrund, warum sich Hersteller für das Metallisieren entscheiden, jest die unübertroffene Ästhetik. Die Produkte erhalten einen Spiegelglanz, der in den Köpfen der Verbraucher unweigerlich mit Luxus und Prestige assoziiert wird. Dies ermöglicht es Marken, ihre Produkte im Premiumsegment zu positionieren.',
    
    sub32Title: 'Erhöhte Produkthaltbarkeit',
    sub32P1: 'Hochwertige Lacke, die als Decklack verwendet werden, machen die Metallisierung extrem widerstandsfähig gegen:',
    sub32Bullet1: 'Mechanische Kratzer in Kosmetiktaschen oder Handtaschen.',
    sub32Bullet2: 'Die Einwirkung von in den Kosmetika selbst enthaltenen Chemikalien (z. B. Öle, Alkohol).',
    sub32Bullet3: 'UV-Strahlung, was das Verblassen der Verpackung verhindert.',

    sub33Title: 'Nachhaltige Entwicklung und Ökologie',
    sub33P1: 'Es könnte den Anschein haben, dass chemische Prozesse nicht mit Ökologie einhergehen. Im Vergleich zu massiven Metallelementen sind metallisierte Kunststoffverpackungen jedoch viel leichter, was den [CO2-Fußabdruck](https://pl.wikipedia.org/wiki/%C5%9Alad_w%C4%99glowy) beim Transport reduziert. Darüber hinaus verwenden moderne Dienstleistungsbetriebe Lacke, die durch [UV-Strahlen](https://pl.wikipedia.org/wiki/Promieniowanie_ultrafioletowe) ausgehärtet werden (frei von flüchtigen organischen Verbindungen), was die Technologie zunehmend "grüner" macht.',

    sec4Title: 'Beispiele für Produkte mit PVD-Finish',
    sec4P1: 'Diese Technologie hat in fast jedem Segment des Kosmetikmarktes Anwendung gefunden. Polen ist ebenfalls ein starker Akteur auf der europäischen Produktionskarte – beispielsweise zeigen Anfragen zu Dienstleistungen wie [Metallisierung Józefów](/#contact) und dem STANIAX-Metallisierungsbetrieb oder anderen lokalen Produktionszentren, dass polnische Unternehmen eine wichtige Basis für internationale Marken darstellen.',
    
    sub41Title: 'Innovative Kosmetika mit Metallisierung',
    sub41P1: 'In den Regalen der Drogerien finden wir leicht Produkte, die diese Technologie nutzen:',
    sub41Bullet1: '**Lippenstifte und Lipglosse:** Glänzende, metallische Hüllen sind heute Standard bei führenden Make-up-Herstellern.',
    sub41Bullet2: '**Kompaktpuder und Lidschattenpaletten:** Das spiegelnde Finish von Puder- oder Lidschattendosen zieht die Blicke auf sich und verleiht dem Produkt einen exklusiven Charakter.',
    sub41Bullet3: '**Parfümverpackungen, Cremetuben und Wimperntuschen:** Sogar flexible Verpackungen können mit flexiblen, metallisierten Folien überzogen werden.',
    
    sub42Title: 'Anwendung in der Parfümerie',
    sub42P1: 'In der Welt des Parfüms ist die Verpackung ebenso wichtig wie der Duft selbst. Parfümflakons bestehen meist aus Glas, aber ihre Kappen, Verschlüsse und Zerstäuber bestimmen den Charakter des Ganzen. Genau hier bewährt sich die Kunststoffmetallisierung am besten. Sie ermöglicht die Herstellung aufwendiger goldener oder silberner Kappen mit komplexen Formen, die zu schwer oder zu teuer wären, um sie aus reinem Metall herzustellen.',

    sec5Title: 'Zusammenfassung und Zukunft der Metallisierung in der Kosmetikindustrie',
    sec5P1: 'Wie aktuelle Markttrends zeigen, werden sich die Technologien zur Oberflächenveredelung weiter entwickeln.',
    
    sub51Title: 'Trends und Prognosen',
    sub51P1: 'Die Zukunft wird wahrscheinlich einen noch stärkeren Fokus auf umweltfreundliche Lösungen bringen. Die Branche strebt Beschichtungen an, die den [Recyclingprozess](https://pl.wikipedia.org/wiki/Recykling) von Kunststoffen nicht beeinträchtigen. Wir werden auch eine Entwicklung hin zu Spezialeffekten beobachten: holografische Beschichtungen, Chamäleon-Effekte (Farbwechsel je nach Blickwinkel) und matte Metallbeschichtungen, die derzeit bei minimalistischen Marken stark an Beliebtheit gewinnen.',
    
    sub52Title: 'Schlussfolgerungen',
    sub52P1: 'Dieses Veredelungsverfahren hat die Kosmetikindustrie unwiderruflich verändert. Durch den Ersatz traditioneller Metalle ermöglichte sie die Massenproduktion von optisch exklusiven Verpackungen bei gleichzeitiger Beibehaltung der Leichtigkeit und Kostenoptimierung. Die Kombination aus präziser Beschichtungsabscheidung und fortschrittlicher Lackierung ist heute der Schlüssel zum Herzen (und Geldbeutel) des Verbrauchers, der Wert auf Design und hohe Qualität legt.',

    qaTitle: 'Häufig gestellte Fragen (Q&A)',
    q1: 'Was ist Vakuummetallisierung und wie unterscheidet sie sich von der thermischen Spritzmetallisierung?',
    a1: 'Die Dünnschichtabscheidung im Vakuum ist die Abscheidung einer sehr dünnen Metallschicht (meist Aluminium) auf der Oberfläche eines anderen Materials unter Hochvakuumbedingungen. Sie führt zu einer perfekt glatten, spiegelnden Beschichtung von hohem ästhetischem Wert. Im Gegensatz zu Verfahren wie der thermischen Spritzmetallisierung, dem **Vakuumguss** oder **Vakuumguss Metall** (einer Gussmethode) dient diese Vakuumtechnik in erster Linie der hochwertigen dekorativen Veredelung und erzeugt keine raue Oberfläche.',
    
    q2: 'Warum metallisiert die Kosmetikindustrie am häufigsten Kunststoff, anstatt massives Metall zu verwenden?',
    a2: 'Verpackungselemente (wie Kappen, Lippenstiftgehäuse, Zerstäuber) werden aus leichten Polymeren hergestellt und anschließend metallisiert, um Komfort und geringes Gewicht mit einer Premium-Optik (Gold, Silber, Kupfer) zu verbinden. Im Vergleich zu massiven Metallteilen oder Elementen aus dem **Vakuumguss** (bzw. **Vakuumguss Metall**) senkt dieses Design die Kosten, verbessert die Ergonomie und reduziert den CO2-Fußabdruck beim Transport im Vergleich zu schwereren Metallelementen, während der luxuriöse visuelle Effekt erhalten bleibt.',
    
    q3: 'Welche Rolle spielt die Lackierung im Metallisierungsprozess und für die Haltbarkeit der Verpackung?',
    a3: 'Die Grundierung (base coat) glättet die Kunststoffoberfläche und bereitet sie auf eine gleichmäßige Metallabscheidung vor. Der Decklack (top coat) schützt die dünne Metallschicht vor Kratzern, Kosmetikchemikalien und UV-Strahlung und ermöglicht das Auftragen jeder beliebigen Farbe. Diese Kombination sorgt sowohl für den „Spiegeleffekt“ als auch für eine hohe Strapazierfähigkeit im Gebrauch.',
    
    q4: 'Wie umweltfreundlich ist die Vakuummetallisierung und wie steht es um das Recycling?',
    a4: 'Im Vergleich zu massiven Metallen reduzieren leichtere metallisierte Kunststoffverpackungen die Emissionen beim Transport. Zudem enthalten moderne UV-härtende Lacke keine flüchtigen organischen Verbindungen, was das Verfahren im Vergleich zu herkömmlichen Lösungen umweltschonend macht. Die Industrie arbeitet zudem intensiv an Beschichtungen, die das Kunststoff-Recycling nicht beeinträchtigen, um sich besser in die Kreislaufwirtschaft einzufügen.',
    
    q5: 'Wo wird diese Technologie am häufigsten eingesetzt und was sind Produktbeispiele?',
    a5: 'Im Make-up-Bereich findet man sie in Lippenstift- und Lipgloss-Gehäusen sowie in Kompaktpudern und Paletten mit Spiegelfinish. Sie wird auch in der Parfümerie eingesetzt – für Kappen, Verschlüsse und Zerstäuber, wo sie die Gestaltung auffälliger und zugleich leichter Formen ermöglicht. Sogar flexible Verpackungen (wie Tuben) können flexible metallisierte Folien nutzen. Polen ist ein wichtiges Produktionszentrum in Europa, wie das wachsende Interesse an Metallisierungsdienstleistungen in lokalen Zentren belegt.',

    ctaHeader: 'Erstellen Sie Verpackungen, die Ihre Kunden begeistern werden!',
    ctaText: 'Suchen Sie einen bewährten und erfahrenen Partner, um Ihre Visionen in eine luxuriöse Reality umzusetzen? Im STANIAX Metallisierungsbetrieb verbinden wir fortschrittliche Technologien mit Leidenschaft für Perfektion. Wir bieten diese professionelle Oberflächenveredelung und präzise Lackierung, mit denen sich Ihre Kosmetika von der Konkurrenz abheben.',
    ctaWhyTitle: 'Warum mit STANIAX zusammenarbeiten?',
    ctaWhy1: '**Premium-Qualitätsgarantie:** Wir sorgen für perfekt glatte, spiegelnde Beschichtungen von außergewöhnlicher Haltbarkeit.',
    ctaWhy2: '**Moderner Maschinenpark:** Wir führen Aufträge schnell, präzise und umweltschonend aus.',
    ctaWhy3: '**Volle Personalisierung:** Wir erzielen eine unbegrenzte Palette an Farben und Alterserscheinungen, die auf Ihre Markenidentität abgestimmt sind.',
    ctaSubhead: 'Steigern Sie das Prestige Ihrer Produkte und ziehen Sie die Blicke der Verbraucher auf sich!'
  }
}

function ArticleBeauty({ lang = 'pl' as Lang }: { lang?: Lang }) {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)

  const renderTextWithLinks = (textStr: string) => {
    if (!textStr) return null
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g
    const parts: (string | JSX.Element)[] = []
    let lastIndex = 0
    let match
    
    const renderBoldText = (str: string, baseKey: string | number) => {
      if (!str) return []
      const boldRegex = /\*\*([^*]+)\*\*/g
      const result: (string | JSX.Element)[] = []
      let lastIdx = 0
      let matchBold
      let keyCounter = 0
      
      while ((matchBold = boldRegex.exec(str)) !== null) {
        const boldText = matchBold[1]
        const idx = matchBold.index
        
        if (idx > lastIdx) {
          result.push(str.substring(lastIdx, idx))
        }
        result.push(<strong key={`${baseKey}-bold-${keyCounter++}`} className="font-bold text-foreground">{boldText}</strong>)
        lastIdx = boldRegex.lastIndex
      }
      
      if (lastIdx < str.length) {
        result.push(str.substring(lastIdx))
      }
      
      return result
    }
    
    while ((match = regex.exec(textStr)) !== null) {
      const label = match[1]
      const url = match[2]
      const index = match.index
      
      if (index > lastIndex) {
        parts.push(...renderBoldText(textStr.substring(lastIndex, index), index))
      }
      
      let isInternal = false
      let targetUrl = url
      
      if (url.includes('google.com/search?q=')) {
        const qMatch = url.match(/q=([^&]+)/)
        if (qMatch) {
          targetUrl = decodeURIComponent(qMatch[1])
        }
      }
      
      const cleanUrl = targetUrl.replace(/^https?:\/\/(www\.)?staniax\.pl/, '').replace(/\/$/, '')
      const prefix = lang === 'pl' ? '' : `/${lang}`
      
      if (cleanUrl === '' || cleanUrl === '/en' || cleanUrl === '/de') {
        targetUrl = prefix || '/'
        isInternal = true
      } else if (cleanUrl.includes('/metalizacja-prozniowa')) {
        targetUrl = `${prefix}/#vacuum-metallization`
        isInternal = true
      } else if (cleanUrl.includes('/metalizacja-odblysnikow')) {
        targetUrl = `${prefix}/#reflectors`
        isInternal = true
      } else if (cleanUrl.includes('/malowanie-tworzyw-sztucznych')) {
        targetUrl = `${prefix}/#plastic-painting`
        isInternal = true
      } else if (cleanUrl.includes('/o-nas')) {
        targetUrl = `${prefix}/#kim-jestesmy`
        isInternal = true
      } else if (cleanUrl.includes('/oferta')) {
        targetUrl = `${prefix}/#about`
        isInternal = true
      } else if (cleanUrl.includes('/kontakt')) {
        targetUrl = `${prefix}/#contact`
        isInternal = true
      } else if (cleanUrl.includes('/metalizacja-plastiku')) {
        targetUrl = `${prefix}/#about`
        isInternal = true
      } else if (cleanUrl.includes('/lakierowanie-plastiku')) {
        targetUrl = `${prefix}/#plastic-painting`
        isInternal = true
      }
      
      if (isInternal) {
        parts.push(
          <Link
            key={index}
            to={targetUrl}
            className="inline-flex items-center text-accent hover:underline font-medium"
          >
            {label}
          </Link>
        )
      } else {
        parts.push(
          <a
            key={index}
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
      
      lastIndex = regex.lastIndex
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
      ? 'news/metalizacja-prozniowa-rewolucjonizuje-branze-beauty' 
      : lang === 'de'
      ? 'de/news/vakuummetallisierung-revolutioniert-die-kosmetikbranche'
      : 'en/news/vacuum-metallization-revolutionizes-beauty-industry'
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
    { flag: "🇵🇱", lang: "pl" as const, path: "/news/metalizacja-prozniowa-rewolucjonizuje-branze-beauty", label: "Polski" },
    { flag: "🇬🇧", lang: "en" as const, path: "/en/news/vacuum-metallization-revolutionizes-beauty-industry", label: "English" },
    { flag: "🇩🇪", lang: "de" as const, path: "/de/news/vakuummetallisierung-revolutioniert-die-kosmetikbranche", label: "Deutsch" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
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
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <List className="w-6 h-6" />}
            </button>
          </div>
        </div>

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
          
          {/* Metadata and Title wrapped in max-w-3xl for optimal typography alignment */}
          <div className="max-w-3xl">
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
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4">
              {text.heading}
            </h1>
            <p className="text-muted-foreground/80 text-base md:text-lg mb-8 italic leading-relaxed">
              {text.lead}
            </p>
          </div>

          <div className="relative w-full h-[30vh] sm:h-[45vh] min-h-[250px] rounded-[32px] overflow-hidden mb-12 border border-border/40">
            <img 
              src={colorfulPackagingImage} 
              alt={text.imageAlt} 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_320px] items-start">
            
            <article className="space-y-8 text-muted-foreground leading-relaxed text-base md:text-lg">
              
              <div className="space-y-6">
                <p>{renderTextWithLinks(text.p1)}</p>
                
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.introTitle}
                </h2>
                <p>{renderTextWithLinks(text.p2)}</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec1Title}
                </h2>
                <p>{renderTextWithLinks(text.sec1P1)}</p>
                
                <h3 className="text-xl font-bold text-foreground pt-2">
                  {text.sec1SubTitle}
                </h3>
                <p>{renderTextWithLinks(text.sec1P2)}</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec2Title}
                </h2>
                <p>{renderTextWithLinks(text.sec2P1)}</p>

                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">{text.sub21Title}</h3>
                  <p>{renderTextWithLinks(text.sub21P1)}</p>
                </div>

                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">{text.sub22Title}</h3>
                  <p>{renderTextWithLinks(text.sub22P1)}</p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>{renderTextWithLinks(text.sub22Bullet1)}</li>
                    <li>{renderTextWithLinks(text.sub22Bullet2)}</li>
                  </ul>
                  <p className="mt-3">{renderTextWithLinks(text.sub22P2)}</p>
                </div>
              </div>

              <div className="my-8 overflow-x-auto rounded-2xl border border-border/80 bg-card/30 backdrop-blur-md">
                <table className="w-full text-left border-collapse text-sm min-w-[600px]">
                  <thead>
                    <tr className="border-b border-border/80 bg-muted/40">
                      {text.tableHeaders.map((header, i) => (
                        <th key={i} className="p-4 font-bold text-foreground">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {text.tableRows.map((row, i) => (
                      <tr key={i}>
                        <td className="p-4 font-medium text-foreground">{row[0]}</td>
                        <td className="p-4">{row[1]}</td>
                        <td className="p-4">{row[2]}</td>
                        <td className="p-4">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec3Title}
                </h2>
                <p>{renderTextWithLinks(text.sec3P1)}</p>

                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">{text.sub31Title}</h3>
                  <p>{renderTextWithLinks(text.sub31P1)}</p>
                </div>

                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">{text.sub32Title}</h3>
                  <p>{renderTextWithLinks(text.sub32P1)}</p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>{renderTextWithLinks(text.sub32Bullet1)}</li>
                    <li>{renderTextWithLinks(text.sub32Bullet2)}</li>
                    <li>{renderTextWithLinks(text.sub32Bullet3)}</li>
                  </ul>
                </div>

                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">{text.sub33Title}</h3>
                  <p>{renderTextWithLinks(text.sub33P1)}</p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec4Title}
                </h2>
                <p>{renderTextWithLinks(text.sec4P1)}</p>

                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">{text.sub41Title}</h3>
                  <p>{renderTextWithLinks(text.sub41P1)}</p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>{renderTextWithLinks(text.sub41Bullet1)}</li>
                    <li>{renderTextWithLinks(text.sub41Bullet2)}</li>
                    <li>{renderTextWithLinks(text.sub41Bullet3)}</li>
                  </ul>
                </div>

                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">{text.sub42Title}</h3>
                  <p>{renderTextWithLinks(text.sub42P1)}</p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.sec5Title}
                </h2>
                <p>{renderTextWithLinks(text.sec5P1)}</p>

                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">{text.sub51Title}</h3>
                  <p>{renderTextWithLinks(text.sub51P1)}</p>
                </div>

                <div className="space-y-3 pl-4 border-l-2 border-accent/35">
                  <h3 className="text-xl font-bold text-foreground">{text.sub52Title}</h3>
                  <p>{renderTextWithLinks(text.sub52P1)}</p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground pt-4 border-b border-border pb-2">
                  {text.qaTitle}
                </h2>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-bold text-foreground">{text.q1}</h4>
                    <p className="text-sm pl-4 border-l border-accent/30">{text.a1}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-foreground">{text.q2}</h4>
                    <p className="text-sm pl-4 border-l border-accent/30">{text.a2}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-foreground">{text.q3}</h4>
                    <p className="text-sm pl-4 border-l border-accent/30">{text.a3}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-foreground">{text.q4}</h4>
                    <p className="text-sm pl-4 border-l border-accent/30">{text.a4}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-foreground">{text.q5}</h4>
                    <p className="text-sm pl-4 border-l border-accent/30">{text.a5}</p>
                  </div>
                </div>
              </div>
            </article>

            <aside className="space-y-8 sticky top-28">
              
              <Card className="border border-border bg-card p-6">
                <CardContent className="p-0 space-y-4">
                  <h4 className="text-xs uppercase tracking-[0.35em] text-accent font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
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

          {/* Main article body CTA Callout Block */}
          <div className="bg-muted/30 border border-border/80 rounded-[32px] p-6 md:p-8 my-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10 group-hover:scale-125 transition-transform duration-500" />
            <h3 className="text-xl font-bold text-foreground mb-4">{text.ctaHeader}</h3>
            <p className="text-sm md:text-base mb-6 leading-relaxed">
              {renderTextWithLinks(text.ctaText)}
            </p>
            
            <h4 className="font-bold text-foreground mb-3 text-sm md:text-base">{text.ctaWhyTitle}</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base mb-6">
              <li>{renderTextWithLinks(text.ctaWhy1)}</li>
              <li>{renderTextWithLinks(text.ctaWhy2)}</li>
              <li>{renderTextWithLinks(text.ctaWhy3)}</li>
            </ul>
            
            <p className="font-semibold text-foreground mb-6 text-sm md:text-base">{text.ctaSubhead}</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to={lang === 'pl' ? '/#contact' : `/${lang}#contact`} 
                onClick={scrollToContact}
                className={cn(buttonVariants({ variant: 'default' }), "font-semibold")}
              >
                {lang === 'pl' ? 'Skontaktuj się z nami i poproś o darmową wycenę swojego projektu!' : 'Contact us and request a free quote for your project!'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                to={lang === 'pl' ? '/gallery' : `/${lang}/gallery`}
                className={cn(buttonVariants({ variant: 'outline' }), "font-semibold")}
              >
                {lang === 'pl' ? 'Poznaj wykonane projekty Zakładu Metalizacji STANIAX' : 'Discover completed projects of the STANIAX Metallization Plant'}
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <BigFooter lang={lang} />
    </div>
  )
}

export default ArticleBeauty
