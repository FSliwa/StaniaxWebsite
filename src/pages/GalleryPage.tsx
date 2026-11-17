import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, CaretLeft, CaretRight, Sparkle } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { SiteHeader } from '@/components/SiteHeader'
import { BigFooter } from '@/components/BigFooter'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { type Lang } from '@/lib/translations'
import { applySeoHead } from "@/lib/seo";
import { SERVICE_SLUGS, resolveLanguageAlternates } from "@/data/services";

// Import all gallery images
import gallery01 from "@/assets/gallery/gallery-01.jpg";
import gallery02 from "@/assets/gallery/gallery-02.jpg";
import gallery03 from "@/assets/gallery/gallery-03.jpg";
import gallery04 from "@/assets/gallery/gallery-04.jpg";
import gallery05 from "@/assets/gallery/gallery-05.jpg";
import gallery06 from "@/assets/gallery/gallery-06.jpg";
import gallery07 from "@/assets/gallery/gallery-07.jpg";
import gallery08 from "@/assets/gallery/gallery-08.jpg";
import gallery09 from "@/assets/gallery/gallery-09.jpg";
import gallery10 from "@/assets/gallery/gallery-10.jpg";
import gallery11 from "@/assets/gallery/gallery-11.jpg";
import gallery12 from "@/assets/gallery/gallery-12.jpg";
import gallery13 from "@/assets/gallery/gallery-13.jpg";
import gallery14 from "@/assets/gallery/gallery-14.jpg";
import gallery15 from "@/assets/gallery/gallery-15.jpg";
import gallery16 from "@/assets/gallery/gallery-16.jpg";
import gallery17 from "@/assets/gallery/gallery-17.jpg";
import gallery18 from "@/assets/gallery/gallery-18.jpg";
import gallery19 from "@/assets/gallery/gallery-19.jpg";
import gallery20 from "@/assets/gallery/gallery-20.jpg";
import gallery21 from "@/assets/gallery/gallery-21.jpg";
import gallery22 from "@/assets/gallery/gallery-22.jpg";
import gallery23 from "@/assets/gallery/gallery-23.jpg";
import gallery24 from "@/assets/gallery/gallery-24.jpg";
import gallery25 from "@/assets/gallery/gallery-25.jpg";
import gallery26 from "@/assets/gallery/gallery-26.jpg";
import gallery27 from "@/assets/gallery/gallery-27.jpg";
import gallery28 from "@/assets/gallery/gallery-28.jpg";
import gallery29 from "@/assets/gallery/gallery-29.jpg";
import gallery30 from "@/assets/gallery/gallery-30.jpg";
import gallery31 from "@/assets/gallery/gallery-31.jpg";
import gallery32 from "@/assets/gallery/gallery-32.jpg";
import gallery33 from "@/assets/gallery/gallery-33.jpg";
import gallery34 from "@/assets/gallery/gallery-34.jpg";
import gallery35 from "@/assets/gallery/gallery-35.jpg";
import gallery36 from "@/assets/gallery/gallery-36.jpg";
import gallery37 from "@/assets/gallery/gallery-37.jpg";
import gallery38 from "@/assets/gallery/gallery-38.jpg";
import gallery39 from "@/assets/gallery/gallery-39.jpg";
import gallery40 from "@/assets/gallery/gallery-40.jpg";
import gallery41 from "@/assets/gallery/gallery-41.jpg";
import gallery42 from "@/assets/gallery/gallery-42.jpg";
import gallery43 from "@/assets/gallery/gallery-43.jpg";
import gallery44 from "@/assets/gallery/gallery-44.jpg";
import gallery45 from "@/assets/gallery/gallery-45.jpg";
import gallery46 from "@/assets/gallery/gallery-46.jpg";
import gallery47 from "@/assets/gallery/gallery-47.jpg";
import gallery48 from "@/assets/gallery/gallery-48.jpg";
import gallery49 from "@/assets/gallery/gallery-49.jpg";
import gallery50 from "@/assets/gallery/gallery-50.jpg";
import gallery51 from "@/assets/gallery/gallery-51.jpg";
import gallery52 from "@/assets/gallery/gallery-52.jpg";
import gallery53 from "@/assets/gallery/gallery-53.jpg";
import gallery54 from "@/assets/gallery/gallery-54.jpg";
import gallery55 from "@/assets/gallery/gallery-55.jpg";
import gallery56 from "@/assets/gallery/gallery-56.jpg";
import gallery57 from "@/assets/gallery/gallery-57.jpg";
import gallery58 from "@/assets/gallery/gallery-58.jpg";
import gallery59 from "@/assets/gallery/gallery-59.jpg";
import gallery60 from "@/assets/gallery/gallery-60.jpg";
import gallery61 from "@/assets/gallery/gallery-61.jpg";
import gallery62 from "@/assets/gallery/gallery-62.jpg";
import gallery63 from "@/assets/gallery/gallery-63.jpg";
import gallery64 from "@/assets/gallery/gallery-64.jpg";
import gallery65 from "@/assets/gallery/gallery-65.jpg";
import gallery66 from "@/assets/gallery/gallery-66.jpg";
import gallery67 from "@/assets/gallery/gallery-67.jpg";
import gallery68 from "@/assets/gallery/gallery-68.jpg";
import gallery69 from "@/assets/gallery/gallery-69.jpg";
import gallery70 from "@/assets/gallery/gallery-70.jpg";
import gallery71 from "@/assets/gallery/gallery-71.jpg";
import gallery72 from "@/assets/gallery/gallery-72.jpg";
import gallery73 from "@/assets/gallery/gallery-73.jpg";
import gallery74 from "@/assets/gallery/gallery-74.jpg";
import gallery75 from "@/assets/gallery/gallery-75.jpg";
import gallery76 from "@/assets/gallery/gallery-76.jpg";
import gallery77 from "@/assets/gallery/gallery-77.jpg";
import gallery78 from "@/assets/gallery/gallery-78.jpg";
import gallery79 from "@/assets/gallery/gallery-79.jpg";
import gallery80 from "@/assets/gallery/gallery-80.jpg";
import gallery81 from "@/assets/gallery/gallery-81.jpg";
import gallery82 from "@/assets/gallery/gallery-82.jpg";
import gallery83 from "@/assets/gallery/gallery-83.jpg";
import gallery84 from "@/assets/gallery/gallery-84.jpg";
import gallery85 from "@/assets/gallery/gallery-85.jpg";
import gallery86 from "@/assets/gallery/gallery-86.jpg";
import gallery87 from "@/assets/gallery/gallery-87.jpg";
import gallery88 from "@/assets/gallery/gallery-88.jpg";
import gallery89 from "@/assets/gallery/gallery-89.jpg";
import gallery90 from "@/assets/gallery/gallery-90.jpg";
import gallery91 from "@/assets/gallery/gallery-91.jpg";
import gallery92 from "@/assets/gallery/gallery-92.jpg";
import gallery93 from "@/assets/gallery/gallery-93.jpg";
import gallery94 from "@/assets/gallery/gallery-94.jpg";
import gallery95 from "@/assets/gallery/gallery-95.jpg";
import gallery96 from "@/assets/gallery/gallery-96.jpg";
import gallery97 from "@/assets/gallery/gallery-97.jpg";
import gallery98 from "@/assets/gallery/gallery-98.jpg";
import gallery99 from "@/assets/gallery/gallery-99.jpg";
import gallery100 from "@/assets/gallery/gallery-100.jpg";
import gallery101 from "@/assets/gallery/gallery-101.jpg";
import gallery102 from "@/assets/gallery/gallery-102.jpg";
import gallery103 from "@/assets/gallery/gallery-103.jpg";
import gallery104 from "@/assets/gallery/gallery-104.jpg";
import gallery105 from "@/assets/gallery/gallery-105.jpg";
import gallery106 from "@/assets/gallery/gallery-106.jpg";
import gallery107 from "@/assets/gallery/gallery-107.jpg";
import gallery108 from "@/assets/gallery/gallery-108.jpg";
import gallery109 from "@/assets/gallery/gallery-109.jpg";
import gallery110 from "@/assets/gallery/gallery-110.jpg";
import gallery111 from "@/assets/gallery/gallery-111.jpg";
import gallery112 from "@/assets/gallery/gallery-112.jpg";
import gallery113 from "@/assets/gallery/gallery-113.jpg";
import gallery114 from "@/assets/gallery/gallery-114.jpg";
import gallery115 from "@/assets/gallery/gallery-115.jpg";

const rawGalleryItems = [
  {
    src: gallery01,
    alt: "Złote elementy opakowań kosmetycznych po metalizacji próżniowej PVD",
    category: "Złoto",
  },
  {
    src: gallery02,
    alt: "Złote powłoki lustrzane na zamknięciach perfumeryjnych z tworzywa PP",
    category: "Złoto",
  },
  {
    src: gallery04,
    alt: "Złote nakrętki do słoików kremów premium - seria produkcyjna B2B",
    category: "Złoto",
  },
  {
    src: gallery05,
    alt: "Złota metalizacja próżniowa detali dekoracyjnych i galanteryjnych",
    category: "Złoto",
  },
  {
    src: gallery12,
    alt: "Złote wykończenie PVD elementów wtryskowych ABS w wysokim połysku",
    category: "Złoto",
  },
  {
    src: gallery16,
    alt: "Złota powłoka próżniowa z lakierem nawierzchniowym UV na komponentach",
    category: "Złoto",
  },
  {
    src: gallery17,
    alt: "Złote akcesoria meblowe i oświetleniowe - metalizacja lustrzana",
    category: "Złoto",
  },
  {
    src: gallery18,
    alt: "Szampańskie złoto PVD na detalach opakowań kosmetycznych",
    category: "Złoto",
  },
  {
    src: gallery06,
    alt: "Chromowana rzeźba dekoracyjna z żywicy - powłoka lustrzana PVD",
    category: "Chrom",
  },
  {
    src: gallery07,
    alt: "Chromowane detale techniczne z tworzywa ABS o głębokim połysku",
    category: "Chrom",
  },
  {
    src: gallery08,
    alt: "Chromowane komponenty przemysłowe po napylaniu aluminium 99,99%",
    category: "Chrom",
  },
  {
    src: gallery09,
    alt: "Srebrna metalizacja próżniowa elementów oświetleniowych i odbłyśników",
    category: "Chrom",
  },
  {
    src: gallery10,
    alt: "Chromowane wykończenie obudów elektronicznych w wysokim połysku",
    category: "Chrom",
  },
  {
    src: gallery11,
    alt: "Chromowane osłony i listwy ozdobne motoryzacyjne z tworzywa PC/ABS",
    category: "Chrom",
  },
  {
    src: gallery19,
    alt: "Lustrzana powierzchnia chromu próżniowego na elementach ekspozycyjnych",
    category: "Chrom",
  },
  {
    src: gallery20,
    alt: "Chromowane powłoki techniczne PVD na korpusach reflektorów",
    category: "Chrom",
  },
  {
    src: gallery03,
    alt: "Dekoracyjne powłoki metalizowane w odcieniach fioletu i kobaltu",
    category: "Dekoracyjne",
  },
  {
    src: gallery13,
    alt: "Wielobarwna metalizacja dekoracyjna flakonów i zamknięć beauty",
    category: "Dekoracyjne",
  },
  {
    src: gallery14,
    alt: "Dekoracyjne wykończenie lakiernicze z metalicznym gradientem",
    category: "Dekoracyjne",
  },
  {
    src: gallery15,
    alt: "Dekoracyjna powłoka PVD z transparentnym barwionym topcoatem UV",
    category: "Dekoracyjne",
  },
  {
    src: gallery21,
    alt: "Odbłyśnik reflektora samochodowego po próżniowym napyleniu aluminium PVD",
    category: "Chrom",
  },
  {
    src: gallery22,
    alt: "Złote zamknięcia atomizerów perfumeryjnych na zawieszce technologicznej",
    category: "Złoto",
  },
  {
    src: gallery23,
    alt: "Seryjna metalizacja w odcieniu żółtego złota 24K dla branży kosmetycznej",
    category: "Złoto",
  },
  {
    src: gallery24,
    alt: "Złote oprawy oświetleniowe po metalizacji próżniowej i lakierowaniu",
    category: "Złoto",
  },
  {
    src: gallery25,
    alt: "Metalizacja dekoracyjna w kolorze różowego złota (Rose Gold) na tworzywie",
    category: "Dekoracyjne",
  },
  {
    src: gallery26,
    alt: "Srebrny chrom PVD na detalach wtryskowych dla przemysłu AGD",
    category: "Chrom",
  },
  {
    src: gallery27,
    alt: "Złote pierścienie i kołnierze flakonów kosmetycznych po utwardzaniu UV",
    category: "Złoto",
  },
  {
    src: gallery28,
    alt: "Lustrzana regeneracja odbłyśnika soczewkowego Bi-Xenon w komorze PVD",
    category: "Chrom",
  },
  {
    src: gallery29,
    alt: "Miedziano-bursztynowe wykończenie dekoracyjne na szkle opakowaniowym",
    category: "Dekoracyjne",
  },
  {
    src: gallery30,
    alt: "Lakierowanie dekoracyjne z efektem anodowanego metalu na tworzywie ABS",
    category: "Dekoracyjne",
  },
  {
    src: gallery31,
    alt: "Czerwony metalik PVD na elementach dekoracyjnych i reklamowych POS",
    category: "Dekoracyjne",
  },
    { src: gallery32, alt: 'Złote korpusy opakowań kosmetycznych typu airless po metalizacji', category: 'Złoto' },
  {
    src: gallery33,
    alt: "Szafirowa powłoka lustrzana PVD na detalach z poliwęglanu",
    category: "Dekoracyjne",
  },
  {
    src: gallery34,
    alt: "Grafitowy ciemny chrom (Black Chrome) na elementach wyposażenia wnętrz",
    category: "Dekoracyjne",
  },
  {
    src: gallery35,
    alt: "Wkład lustrzany reflektora klasycznego youngtimera po metalizacji Al",
    category: "Chrom",
  },
  {
    src: gallery36,
    alt: "Chromowane pokrętła i przyciski sterujące do sprzętu audio i AGD",
    category: "Chrom",
  },
  {
    src: gallery37,
    alt: "Złota powłoka dekoracyjna na figurkach i trofeach okolicznościowych",
    category: "Złoto",
  },
  {
    src: gallery38,
    alt: "Ciepłe złoto szampańskie na zakrętkach słoików szklanych",
    category: "Złoto",
  },
  {
    src: gallery39,
    alt: "Odbłyśnik lampy motocyklowej po usunięciu korozji i napyleniu PVD",
    category: "Chrom",
  },
  {
    src: gallery40,
    alt: "Chromowane ramki i emblematy samochodowe z tworzywa ABS",
    category: "Chrom",
  },
  {
    src: gallery41,
    alt: "Srebrna powłoka refleksyjna na wielkogabarytowych kloszach przemysłowych",
    category: "Chrom",
  },
  {
    src: gallery42,
    alt: "Szmaragdowa powłoka dekoracyjna na butelkach i flakonach szklanych",
    category: "Dekoracyjne",
  },
  {
    src: gallery43,
    alt: "Lakierowanie gradientowe ombre na szkle perfumeryjnym",
    category: "Dekoracyjne",
  },
  {
    src: gallery44,
    alt: "Chromowanie próżniowe detali modelarskich i kolekcjonerskich",
    category: "Chrom",
  },
  {
    src: gallery45,
    alt: "Wysokorefleksyjne lustro PVD na odbłyśnikach oświetlenia scenicznego",
    category: "Chrom",
  },
  {
    src: gallery46,
    alt: "Fioletowy metalik na nakrętkach kosmetycznych z polipropylenu",
    category: "Dekoracyjne",
  },
  {
    src: gallery47,
    alt: "Tytanowo-grafitowe wykończenie PVD na obudowach urządzeń elektronicznych",
    category: "Dekoracyjne",
  },
  {
    src: gallery48,
    alt: "Złote detale wykończeniowe do stolarki i architektury wnętrz",
    category: "Złoto",
  },
  {
    src: gallery49,
    alt: "Srebrna metalizacja próżniowa uchwytów meblowych z tworzywa",
    category: "Chrom",
  },
  {
    src: gallery50,
    alt: "Miedziany połysk PVD na elementach dekoracyjnych oświetlenia",
    category: "Dekoracyjne",
  },
  {
    src: gallery51,
    alt: "Złote aplikatory i pipety kosmetyczne po lakierowaniu ochronnym UV",
    category: "Złoto",
  },
  {
    src: gallery52,
    alt: "Niebieski chrom dekoracyjny na elementach tuningowych i akcesoriach",
    category: "Dekoracyjne",
  },
  {
    src: gallery53,
    alt: "Wielokolorowa seria próbna zamknięć kosmetycznych dla marki własnej",
    category: "Dekoracyjne",
  },
  {
    src: gallery54,
    alt: "Złoty połysk lustrzany na detalach liturgicznych i renowacyjnych",
    category: "Złoto",
  },
  {
    src: gallery55,
    alt: "Zregenerowane odbłyśniki reflektorów ciężarowych 24V po procesie PVD",
    category: "Chrom",
  },
  {
    src: gallery56,
    alt: "Złote słoiki szklane lakierowane natryskowo na wysoki połysk",
    category: "Złoto",
  },
  {
    src: gallery57,
    alt: "Złote oprawki i pierścienie dekoracyjne z poliamidu PA",
    category: "Złoto",
  },
  {
    src: gallery58,
    alt: "Chromowane dysze i kratki nawiewów samochodowych po renowacji",
    category: "Chrom",
  },
  {
    src: gallery59,
    alt: "Złota seria opakowań do kosmetyków kolorowych (pomadki i tusze)",
    category: "Złoto",
  },
  {
    src: gallery60,
    alt: "Złote wykończenie świeczników i naczyń ceramicznych",
    category: "Złoto",
  },
  {
    src: gallery61,
    alt: "Rubinowa powłoka lakiernicza na flakonach ze szkła bezbarwnego",
    category: "Dekoracyjne",
  },
  {
    src: gallery62,
    alt: "Srebrne wykończenie PVD na detalach z laminatu i żywicy epoksydowej",
    category: "Chrom",
  },
  {
    src: gallery63,
    alt: "Satynowany brąz i miedź na obudowach sprzętu oświetleniowego",
    category: "Dekoracyjne",
  },
  {
    src: gallery64,
    alt: "Złote medale i odznaczenia na podkładzie z tworzywa sztucznego",
    category: "Złoto",
  },
  {
    src: gallery65,
    alt: "Lustrzane odbłyśniki świateł drogowych i przeciwmgielnych po PVD",
    category: "Chrom",
  },
  {
    src: gallery66,
    alt: "Chromowane kołpaki i osłony piast do pojazdów zabytkowych",
    category: "Chrom",
  },
  {
    src: gallery67,
    alt: "Perłowo-złoty i turkusowy lakier nawierzchniowy na detalach z ABS",
    category: "Dekoracyjne",
  },
  {
    src: gallery68,
    alt: "Złote flakony perfumeryjne z metalizowanym kołnierzem atomizerów",
    category: "Złoto",
  },
  {
    src: gallery69,
    alt: "Srebrna metalizacja próżniowa kloszy lamp wiszących Loft",
    category: "Chrom",
  },
  {
    src: gallery70,
    alt: "Chromowane elementy ekspozytorów reklamowych POS dla perfumerii",
    category: "Chrom",
  },
  {
    src: gallery71,
    alt: "Złote guziki i klamry galanteryjne metalizowane seryjnie",
    category: "Złoto",
  },
  {
    src: gallery72,
    alt: "Bursztynowe złoto PVD na detalach opakowań luksusowych",
    category: "Złoto",
  },
  {
    src: gallery73,
    alt: "Odbłyśniki reflektorów Bi-LED po napyleniu warstwy aluminium 99,99%",
    category: "Chrom",
  },
  {
    src: gallery74,
    alt: "Złote wykończenie głowic i uchwytów akcesoriów łazienkowych",
    category: "Złoto",
  },
  {
    src: gallery75,
    alt: "Metalizowany fiolet i róż na limitowanej serii opakowań beauty",
    category: "Dekoracyjne",
  },
  {
    src: gallery76,
    alt: "Srebrny chrom PVD na elementach z druku 3D (SLA / SLS) po szlifowaniu",
    category: "Chrom",
  },
  {
    src: gallery77,
    alt: "Chromowane korpusy lusterek i osłon motocyklowych",
    category: "Chrom",
  },
  {
    src: gallery78,
    alt: "Czarny połysk Piano Black i grafitowy chrom na listwach ozdobnych",
    category: "Dekoracyjne",
  },
  {
    src: gallery79,
    alt: "Seryjna metalizacja próżniowa drobnych detali technicznych na bębnie",
    category: "Chrom",
  },
  {
    src: gallery80,
    alt: "Złote nakrętki z tworzywa SAN z zabezpieczeniem przeciwścieralnym UV",
    category: "Złoto",
  },
  {
    src: gallery81,
    alt: "Złote elementy dekoracyjne do produkcji zniczy i lampionów premium",
    category: "Złoto",
  },
  {
    src: gallery82,
    alt: "Złoto różowe (Rose Gold) na słoikach kosmetycznych ze szkła mrożonego",
    category: "Złoto",
  },
  {
    src: gallery83,
    alt: "Lakierowanie strukturalne i metaliczne detali przemysłowych w RAL",
    category: "Dekoracyjne",
  },
  {
    src: gallery84,
    alt: "Chromowane odbłyśniki lamp roboczych dla maszyn rolniczych i budowlanych",
    category: "Chrom",
  },
  {
    src: gallery85,
    alt: "Kobaltowa metalizacja próżniowa butelek i opakowań prezentowych",
    category: "Dekoracyjne",
  },
  {
    src: gallery86,
    alt: "Matowe powłoki Soft-Touch zestawione z lustrzanym chromem PVD",
    category: "Dekoracyjne",
  },
  {
    src: gallery87,
    alt: "Złote wykończenie ram luster i sztukaterii z poliuretanu",
    category: "Złoto",
  },
  {
    src: gallery88,
    alt: "Złote detale karniszy i systemów osłon okiennych",
    category: "Złoto",
  },
  {
    src: gallery89,
    alt: "Holograficzno-metaliczny efekt lakierniczy na obudowach z PC",
    category: "Dekoracyjne",
  },
  {
    src: gallery90,
    alt: "Złote zamknięcia dyskowe (disc-top) do butelek szamponów i balsamów",
    category: "Złoto",
  },
  {
    src: gallery91,
    alt: "Złota metalizacja próżniowa detali z mosiądzu i znalu (ZnAl)",
    category: "Złoto",
  },
  {
    src: gallery92,
    alt: "Złote kielichy i podstawy lamp stołowych po procesie PVD",
    category: "Złoto",
  },
  {
    src: gallery93,
    alt: "Srebrne odbłyśniki symetryczne i asymetryczne do opraw ulicznych",
    category: "Chrom",
  },
  {
    src: gallery94,
    alt: "Chromowane elementy atrapy chłodnicy (grilla) po renowacji PVD",
    category: "Chrom",
  },
  {
    src: gallery95,
    alt: "Lustrzany chrom na prototypach obudów z żywicy fotoutwardzalnej",
    category: "Chrom",
  },
  {
    src: gallery96,
    alt: "Zieleń butelkowa i złoto na szklanych pojemnikach świec zapachowych",
    category: "Dekoracyjne",
  },
  {
    src: gallery97,
    alt: "Chromowane uchwyty i relingi do zabudowy kuchennej i meblowej",
    category: "Chrom",
  },
  {
    src: gallery98,
    alt: "Złote dozowniki mydła i pompki kosmetyczne z tworzywa PP",
    category: "Złoto",
  },
  {
    src: gallery99,
    alt: "Srebrna powłoka ekranująca EMI/RFI we wnętrzu obudowy pomiarowej",
    category: "Chrom",
  },
  {
    src: gallery100,
    alt: "Złote litery przestrzenne 3D i logotypy dla oznakowania biurowego",
    category: "Złoto",
  },
  {
    src: gallery101,
    alt: "Złote kapsle i nasadki ozdobne dla branży spirytusowej premium",
    category: "Złoto",
  },
  {
    src: gallery102,
    alt: "Chromowane klosze szklane z częściowym maskowaniem świetlnym",
    category: "Chrom",
  },
  {
    src: gallery103,
    alt: "Antyczne złoto z przecierką dekoracyjną na detalach meblowych",
    category: "Złoto",
  },
  {
    src: gallery104,
    alt: "Złote oprawy sufitowe typu oczko LED po metalizacji próżniowej",
    category: "Złoto",
  },
  {
    src: gallery105,
    alt: "Metalizowany granat i srebro na komponentach sprzętu sportowego",
    category: "Dekoracyjne",
  },
  {
    src: gallery106,
    alt: "Wkład reflektora amerykańskiego klasyka po kompleksowej metalizacji",
    category: "Chrom",
  },
  {
    src: gallery107,
    alt: "Złote wykończenie PVD na szklanych flakonach z grubym dnem",
    category: "Złoto",
  },
  {
    src: gallery108,
    alt: "Perłowy lakier bezbarwny UV na kolorowych wypraskach wtryskowych",
    category: "Dekoracyjne",
  },
  {
    src: gallery109,
    alt: "Metalizacja dekoracyjna w kolorze tytanu na akcesoriach GSM",
    category: "Dekoracyjne",
  },
  {
    src: gallery110,
    alt: "Złote detale wykończeniowe jachtów i kamperów odporne na wilgoć",
    category: "Złoto",
  },
  {
    src: gallery111,
    alt: "Złote nakrętki kosmetyczne w transporcie międzyoperacyjnym w Józefowie",
    category: "Złoto",
  },
  {
    src: gallery112,
    alt: "Kontrola połysku lustrzanego na serii chromowanych detali ABS",
    category: "Chrom",
  },
  {
    src: gallery113,
    alt: "Srebrne odbłyśniki samochodowe gotowe do wysyłki kurierskiej",
    category: "Chrom",
  },
  {
    src: gallery114,
    alt: "Chromowane elementy techniczne po teście przyczepności ISO 2409",
    category: "Chrom",
  },
  {
    src: gallery115,
    alt: "Złota seria produkcyjna opakowań kosmetycznych w zakładzie STANIAX",
    category: "Złoto",
  },
];

const categories = ['Wszystkie', 'Złoto', 'Chrom', 'Dekoracyjne'] as const

const CATEGORY_LABELS: Record<Lang, Record<string, string>> = {
  pl: { Wszystkie: 'Wszystkie', Złoto: 'Złoto', Chrom: 'Chrom', Dekoracyjne: 'Dekoracyjne' },
  en: { Wszystkie: 'All', Złoto: 'Gold PVD', Chrom: 'Chrome Mirror', Dekoracyjne: 'Decorative Finishes' },
  de: { Wszystkie: 'Alle', Złoto: 'Gold-PVD', Chrom: 'Spiegelchrom', Dekoracyjne: 'Dekorative Lackierung' },
}

const getLocalizedAlt = (item: { alt: string; category: string }, idx: number, lang: Lang): string => {
  if (lang === 'pl') return item.alt
  const lower = item.alt.toLowerCase()
  if (lang === 'de') {
    const subject =
      lower.includes('reflektor') || lower.includes('odbłyśnik') || lower.includes('lamp')
        ? 'Kfz-Scheinwerferreflektor nach PVD-Vakuumbedampfung'
        : lower.includes('szkł') || lower.includes('flakon') || lower.includes('butel') || lower.includes('słoik')
          ? 'Parfümflakon & Glasveredelung durch Industrielackierung'
          : 'Kosmetik- & Industriebauteil nach Vakuummetallisierung'
    return `${CATEGORY_LABELS.de[item.category] || item.category}: ${subject} - Referenz #${idx + 1}`
  }
  const subject =
    lower.includes('reflektor') || lower.includes('odbłyśnik') || lower.includes('lamp')
      ? 'automotive headlight reflector after PVD vacuum metallization'
      : lower.includes('szkł') || lower.includes('flakon') || lower.includes('butel') || lower.includes('słoik')
        ? 'perfume flacon & glass bottle after industrial coating'
        : 'cosmetic packaging & industrial part after PVD vacuum coating'
  return `${CATEGORY_LABELS.en[item.category] || item.category}: ${subject} - Project #${idx + 1}`
}

const getGridSpan = (index: number) => {
  const pattern = [
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];
  return pattern[index % pattern.length];
};

function GalleryPage({ lang = "pl" as Lang }: { lang?: Lang }) {
  const activeLang: Lang = lang === "en" ? "en" : lang === "de" ? "de" : "pl";
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("Wszystkie");
  const [isLoaded, setIsLoaded] = useState(false);

    const homePath = activeLang === 'pl' ? '/' : `/${activeLang}`
  const canonicalPath = activeLang === 'pl' ? '/gallery' : `/${activeLang}/gallery`
  const pageTitle =
    activeLang === 'pl'
      ? 'Galeria Realizacji: Metalizacja PVD i Lakierowanie | STANIAX'
      : activeLang === 'de'
        ? 'Projektgalerie: PVD-Metallisierung & Lackierung | STANIAX'
        : 'Project Gallery: PVD Metallization & Coating | STANIAX'
  const pageDesc =
    activeLang === 'pl'
      ? 'Zobacz ponad 115 zdjęć realizacji STANIAX: regeneracja odbłyśników reflektorów, metalizacja próżniowa PVD opakowań beauty oraz lakierowanie szkła i tworzyw.'
      : activeLang === 'de'
        ? 'Über 115 Referenzfotos aus dem STANIAX-Werk in Józefów: Scheinwerfer-Reflektor-Aufbereitung, PVD-Vakuummetallisierung in Gold/Chrom sowie Glaslackierung.'
        : 'Browse 115+ photos of STANIAX projects: headlight reflector restoration, gold and chrome PVD vacuum metallization for cosmetics, and industrial glass coating.'

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
    applySeoHead({
      title: pageTitle,
      description: pageDesc,
      path: canonicalPath,
      lang: activeLang,
      alternates: resolveLanguageAlternates(canonicalPath),
      breadcrumbs: [
        {
          name:
            activeLang === "pl"
              ? "Strona główna"
              : activeLang === "de"
                ? "Startseite"
                : "Home",
          path: activeLang === "pl" ? "/" : `/${activeLang}`,
        },
        {
          name:
            activeLang === "pl"
              ? "Galeria realizacji"
              : activeLang === "de"
                ? "Projektgalerie"
                : "Project Gallery",
          path: canonicalPath,
        },
      ],
    });
  }, [activeLang, canonicalPath, pageDesc, pageTitle]);

  const filteredImages =
    activeCategory === "Wszystkie"
      ? rawGalleryItems
      : rawGalleryItems.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + filteredImages.length) % filteredImages.length,
      );
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages.length]);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gray-300/10 rounded-full blur-[120px]" />
      </div>

      <SiteHeader lang={activeLang} />

      <main className="pt-20">
        <Breadcrumbs
          items={[
            {
              name: activeLang === 'pl' ? 'Strona główna' : activeLang === 'de' ? 'Startseite' : 'Home',
              path: homePath,
            },
            {
              name: activeLang === 'pl' ? 'Galeria realizacji' : activeLang === 'de' ? 'Projektgalerie' : 'Project Gallery',
            },
          ]}
        />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
              <Sparkle className="w-4 h-4 text-blue-600" weight="fill" />
              <span className="text-xs uppercase tracking-[0.3em] text-blue-700 font-semibold">
                {activeLang === "pl"
                  ? "Portfolio 115+ realizacji"
                  : activeLang === "de"
                    ? "Portfolio mit 115+ Projekten"
                    : "Portfolio of 115+ Projects"}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tighter mb-6 leading-[0.95]">
              <span className="block">
                {activeLang === "pl"
                  ? "GALERIA REALIZACJI "
                  : activeLang === "de"
                    ? "PROJEKTGALERIE "
                    : "PROJECT GALLERY "}
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                {activeLang === "pl"
                  ? "METALIZACJI PVD I LAKIEROWANIA"
                  : activeLang === "de"
                    ? "PVD-METALLISIERUNG & LACKIERUNG"
                    : "PVD METALLIZATION & COATING"}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
              {activeLang === "pl"
                ? "Dokumentacja fotograficzna detali wykonanych w zakładzie STANIAX w Józefowie - od zregenerowanych odbłyśników reflektorów samochodowych po wielkoseryjne opakowania kosmetyczne, szkło perfumeryjne i komponenty techniczne."
                : activeLang === "de"
                  ? "Fotodokumentation von Bauteilen aus dem STANIAX-Werk in Józefów - von aufbereiteten Scheinwerferreflektoren über Kosmetikverpackungen bis hin zu Parfümglas und technischen Bauteilen."
                  : "Photographic documentation of parts finished at the STANIAX plant in Józefów - from restored automotive headlight reflectors to high-volume cosmetic packaging, perfumery glass, and technical components."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-10 sticky top-[68px] z-30 bg-gray-50/90 backdrop-blur-xl py-4">
        <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'relative px-6 py-2.5 rounded-full font-semibold text-sm tracking-wide transition-all',
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-100 border border-gray-200',
                )}
              >
                {CATEGORY_LABELS[activeLang][category] || category}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            {activeLang === "pl"
              ? "Wyświetlanie"
              : activeLang === "de"
                ? "Anzeige von"
                : "Showing"}{" "}
            <span className="text-blue-700 font-semibold">
              {filteredImages.length}
            </span>{" "}
            {activeLang === "pl"
              ? "udokumentowanych realizacji"
              : activeLang === "de"
                ? "Projekten"
                : "documented projects"}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[250px] lg:auto-rows-[300px]"
          >
            <AnimatePresence mode="popLayout">
                            {filteredImages.map((image, index) => {
                const localizedAlt = getLocalizedAlt(image, index, activeLang)
                const localizedCat = CATEGORY_LABELS[activeLang][image.category] || image.category
                return (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.4,
                      delay: isLoaded ? Math.min(index * 0.015, 0.3) : 0,
                    },
                  }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  className={cn('group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer', getGridSpan(index))}
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={localizedAlt}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                      {localizedCat}
                    </span>
                    <p className="mt-2 text-white/90 text-xs sm:text-sm font-medium line-clamp-2">{localizedAlt}</p>
                  </div>
                </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
              aria-label="Zamknij podgląd"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
              aria-label="Poprzednie zdjęcie"
            >
              <CaretLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
              aria-label="Następne zdjęcie"
            >
              <CaretRight className="w-6 h-6" />
            </button>
                        <div className="relative max-w-[90vw] max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <img
                src={filteredImages[selectedImage].src}
                alt={getLocalizedAlt(filteredImages[selectedImage], selectedImage, activeLang)}
                width={1200}
                height={900}
                className="max-w-full max-h-[78vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-center">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase">
                  {CATEGORY_LABELS[activeLang][filteredImages[selectedImage].category] || filteredImages[selectedImage].category}
                </span>
                <span className="text-white/80 text-sm">
                  {getLocalizedAlt(filteredImages[selectedImage], selectedImage, activeLang)}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SEO & Internal Links Section with Proper H2 */}
      <section className="bg-white py-14 border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-12 text-sm text-gray-600 space-y-4 max-w-4xl">
          <h2 className="text-xl font-bold text-gray-900">
            {activeLang === "pl"
              ? "Technologie stojące za realizacjami w galerii STANIAX"
              : activeLang === "de"
                ? "Technologien hinter den Projekten in der STANIAX-Galerie"
                : "Technologies Behind the Projects in the STANIAX Gallery"}
          </h2>
          <p>
            {activeLang === "pl"
              ? "Prezentowane powyżej zdjęcia pochodzą bezpośrednio z linii produkcyjnej STANIAX w Józefowie k. Warszawy. Każde wykończenie lustrzane, złote i dekoracyjne powstaje w wieloetapowym procesie obejmującym przygotowanie chemiczne i jonowe, aplikację podkładu, napylanie próżniowe PVD oraz zabezpieczenie lakierem nawierzchniowym UV lub 2K. Sprawdź szczegóły poszczególnych technologii: "
              : activeLang === "de"
                ? "Die oben gezeigten Aufnahmen stammen direkt aus der Produktionslinie von STANIAX in Józefów bei Warschau. Jede Spiegel-, Gold- und Dekorbeschichtung entsteht in einem mehrstufigen Prozess. Entdecken Sie unsere einzelnen Dienstleistungen: "
                : "The photographs shown above come directly from the STANIAX production line in Józefów near Warsaw. Every mirror, gold, and decorative finish is produced in a multi-stage process. Explore the specifications of our individual services: "}
            <Link
              to={SERVICE_SLUGS.reflectors[activeLang]}
              className="text-blue-600 font-semibold hover:underline"
            >
              {activeLang === "pl"
                ? "regeneracja odbłyśników i reflektorów samochodowych"
                : activeLang === "de"
                  ? "Scheinwerfer-Reflektor-Aufbereitung"
                  : "headlight reflector restoration"}
            </Link>
            {", "}
            <Link
              to={SERVICE_SLUGS["vacuum-metallization"][activeLang]}
              className="text-blue-600 font-semibold hover:underline"
            >
              {activeLang === "pl"
                ? "usługowa metalizacja próżniowa PVD"
                : activeLang === "de"
                  ? "PVD-Vakuummetallisierung im Lohnauftrag"
                  : "contract PVD vacuum metallisation"}
            </Link>
            {", "}
            <Link
              to={SERVICE_SLUGS["plastic-metallization"][activeLang]}
              className="text-blue-600 font-semibold hover:underline"
            >
              {activeLang === "pl"
                ? "metalizacja i chromowanie tworzyw sztucznych"
                : activeLang === "de"
                  ? "Kunststoffverchromung und -metallisierung"
                  : "plastic chrome plating and metallisation"}
            </Link>
            {", "}
            <Link
              to={SERVICE_SLUGS["plastic-painting"][activeLang]}
              className="text-blue-600 font-semibold hover:underline"
            >
              {activeLang === "pl"
                ? "lakierowanie tworzyw sztucznych (ABS, PC, PA, PP)"
                : activeLang === "de"
                  ? "Kunststofflackierung (ABS, PC, PA, PP)"
                  : "plastic parts painting (ABS, PC, PA, PP)"}
            </Link>
            {", "}
            <Link
              to={SERVICE_SLUGS["glass-painting"][activeLang]}
              className="text-blue-600 font-semibold hover:underline"
            >
              {activeLang === "pl"
                ? "lakierowanie szkła i ceramiki"
                : activeLang === "de"
                  ? "Glas- und Keramiklackierung"
                  : "glass and ceramic painting"}
            </Link>{" "}
            {activeLang === "pl"
              ? "oraz "
              : activeLang === "de"
                ? "sowie "
                : "and "}
            <Link
              to={SERVICE_SLUGS["spray-painting"][activeLang]}
              className="text-blue-600 font-semibold hover:underline"
            >
              {activeLang === "pl"
                ? "lakierowanie natryskowe HVLP w palecie RAL"
                : activeLang === "de"
                  ? "HVLP-Spritzlackierung in der RAL-Palette"
                  : "HVLP spray painting in the RAL palette"}
            </Link>
            .
          </p>
          <p>
            {activeLang === "pl"
              ? "Każda partia produkcyjna przechodzi w zakładzie STANIAX kontrolę przyczepności metodą siatki nacięć wg ISO 2409 (klasa Gt 0), weryfikację powtarzalności barwy ΔE < 0,8 oraz odbiór wizualny pod oświetleniem inspekcyjnym. Na życzenie działów R&D i zakupów przygotowujemy wzorce referencyjne na powierzonych wypraskach z ABS, PC, PP, PA lub flakonach szklanych."
              : activeLang === "de"
                ? "Jedes Produktionslos durchläuft im STANIAX-Werk eine Gitterschnittprüfung nach DIN EN ISO 2409 (Gt 0), eine Farbtonkontrolle ΔE < 0,8 sowie eine optische Endprüfung unter Prüflightspektrum. Für Einkaufs- und F&E-Abteilungen bemustern wir vorab Originalbauteile aus ABS, PC, PP, PA oder Verpackungsglas."
                : "Every production batch at STANIAX undergoes ISO 2409 cross-cut adhesion verification (Class Gt 0), spectrophotometric ΔE < 0.8 color consistency checks, and optical inspection prior to dispatch. We produce pre-series approval samples directly on client-supplied ABS, PC, PP, PA moldings or glass flacons."}
          </p>
        </div>
      </section>
      </main>

      <BigFooter lang={activeLang} />
    </div>
  );
}

export default GalleryPage;
