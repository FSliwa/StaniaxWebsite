// Treść dokumentów prawnych.
//
// UWAGA: to szkielet przygotowany na podstawie tego, co faktycznie robi kod
// (formularz -> Resend, hosting -> Vercel, analityka -> Google po zgodzie).
// Fragmenty oznaczone TODO_PRAWNE wymagają uzupełnienia przez firmę i całość
// musi przejść weryfikację radcy prawnego przed publikacją.

import type { Lang } from './translations'

/** Widoczny w treści marker miejsc do uzupełnienia — nie da się go przeoczyć. */
export const TODO = (what: string) => `[DO UZUPEŁNIENIA: ${what}]`

export type LegalSection = {
  heading: string
  paragraphs?: string[]
  list?: string[]
}

export type LegalDoc = {
  slug: string
  title: string
  metaTitle: string
  metaDesc: string
  updated: string
  intro: string
  sections: LegalSection[]
}

export type LegalDocId = 'privacy' | 'cookies' | 'terms'

const COMPANY = {
  name: 'STANIAX Sp. z o.o.',
  seat: 'ul. Grzybowska 5A, 00-132 Warszawa',
  plant: 'ul. Kardynała Stefana Wyszyńskiego 116A, 05-420 Józefów',
  krs: '0001182026',
  nip: '5253052509',
  regon: '542156053',
  email: 'metalizacja@staniax.pl',
  phone: '+48 882 488 844'
}

export const LEGAL_SLUGS: Record<LegalDocId, Record<Lang, string>> = {
  privacy: { pl: 'polityka-prywatnosci', en: 'en/privacy-policy', de: 'de/datenschutzerklaerung' },
  cookies: { pl: 'polityka-cookies', en: 'en/cookie-policy', de: 'de/cookie-richtlinie' },
  terms: { pl: 'regulamin', en: 'en/terms', de: 'de/agb' }
}

const UPDATED = '2026-08-03'

// ---------------------------------------------------------------- POLSKI ----

const privacyPl: LegalDoc = {
  slug: LEGAL_SLUGS.privacy.pl,
  title: 'Polityka prywatności',
  metaTitle: 'Polityka prywatności | STANIAX',
  metaDesc:
    'Informacja o przetwarzaniu danych osobowych w serwisie staniax.pl: administrator, cele, podstawy prawne, odbiorcy danych i przysługujące prawa.',
  updated: UPDATED,
  intro:
    'Poniżej wyjaśniamy, kto przetwarza Twoje dane osobowe w związku z korzystaniem z serwisu staniax.pl, w jakim celu i na jakiej podstawie prawnej, a także jakie prawa Ci przysługują.',
  sections: [
    {
      heading: 'Administrator danych',
      paragraphs: [
        `Administratorem danych osobowych jest ${COMPANY.name} z siedzibą przy ${COMPANY.seat}, wpisana do rejestru przedsiębiorców Krajowego Rejestru Sądowego pod numerem KRS ${COMPANY.krs}, NIP ${COMPANY.nip}, REGON ${COMPANY.regon}.`,
        `Zakład produkcyjny: ${COMPANY.plant}.`,
        `Kontakt w sprawach danych osobowych: ${COMPANY.email}, tel. ${COMPANY.phone}.`,
        TODO('czy wyznaczono Inspektora Ochrony Danych — jeśli tak, podać dane kontaktowe')
      ]
    },
    {
      heading: 'Jakie dane zbieramy',
      paragraphs: ['Zakres danych zależy od tego, w jaki sposób korzystasz z serwisu.'],
      list: [
        'Formularz kontaktowy: imię, nazwisko, adres e-mail, numer telefonu (opcjonalnie), rodzaj projektu oraz treść wiadomości.',
        'Dane techniczne przeglądania: adres IP, typ przeglądarki i urządzenia, odwiedzone podstrony — wyłącznie jeśli wyrazisz zgodę na cookies analityczne.'
      ]
    },
    {
      heading: 'Cele i podstawy prawne przetwarzania',
      list: [
        'Odpowiedź na zapytanie z formularza kontaktowego oraz podjęcie działań przed zawarciem umowy — art. 6 ust. 1 lit. b RODO.',
        'Prowadzenie bieżącej korespondencji handlowej i obrona przed ewentualnymi roszczeniami — art. 6 ust. 1 lit. f RODO (nasz prawnie uzasadniony interes).',
        'Statystyka odwiedzin w Google Analytics — art. 6 ust. 1 lit. a RODO (Twoja zgoda). Bez zgody nie uruchamiamy tego narzędzia.',
        'Wypełnienie obowiązków wynikających z przepisów prawa, w tym podatkowych i rachunkowych — art. 6 ust. 1 lit. c RODO.'
      ]
    },
    {
      heading: 'Czy podanie danych jest obowiązkowe',
      paragraphs: [
        'Podanie danych w formularzu jest dobrowolne, ale niezbędne, abyśmy mogli odpowiedzieć na zapytanie. Bez imienia i adresu e-mail nie jesteśmy w stanie się z Tobą skontaktować.'
      ]
    },
    {
      heading: 'Odbiorcy danych',
      paragraphs: [
        'Twoje dane powierzamy podmiotom, które przetwarzają je wyłącznie na nasze polecenie i na podstawie umów powierzenia:'
      ],
      list: [
        'Resend (usługa wysyłki wiadomości e-mail z formularza kontaktowego),',
        'Vercel Inc. (hosting serwisu internetowego),',
        'Google Ireland Limited (Google Analytics — wyłącznie po wyrażeniu przez Ciebie zgody),',
        TODO('pozostali odbiorcy, np. dostawca poczty firmowej, biuro rachunkowe, kancelaria')
      ]
    },
    {
      heading: 'Przekazywanie danych poza Europejski Obszar Gospodarczy',
      paragraphs: [
        'Część naszych dostawców należy do grup kapitałowych z siedzibą poza EOG. W takich przypadkach przekazanie danych odbywa się na podstawie standardowych klauzul umownych zatwierdzonych przez Komisję Europejską lub decyzji stwierdzającej odpowiedni stopień ochrony.',
        TODO('potwierdzić konfigurację regionu danych w Resend i Vercel oraz wskazać konkretną podstawę transferu')
      ]
    },
    {
      heading: 'Okres przechowywania danych',
      list: [
        TODO('okres przechowywania korespondencji z formularza kontaktowego, np. 12 lub 24 miesiące od ostatniego kontaktu'),
        'Dane w Google Analytics: zgodnie z ustawieniem retencji w panelu usługi.',
        'Zgoda na cookies: do czasu jej wycofania lub zmiany wersji polityki.'
      ]
    },
    {
      heading: 'Twoje prawa',
      paragraphs: ['W związku z przetwarzaniem danych przysługuje Ci prawo do:'],
      list: [
        'dostępu do danych i otrzymania ich kopii,',
        'sprostowania nieprawidłowych danych,',
        'usunięcia danych,',
        'ograniczenia przetwarzania,',
        'przenoszenia danych,',
        'wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie,',
        'wycofania zgody w dowolnym momencie — bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem.'
      ]
    },
    {
      heading: 'Skarga do organu nadzorczego',
      paragraphs: [
        'Jeżeli uważasz, że przetwarzamy Twoje dane niezgodnie z prawem, możesz wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.'
      ]
    },
    {
      heading: 'Zautomatyzowane podejmowanie decyzji',
      paragraphs: ['Nie podejmujemy wobec Ciebie decyzji opartych wyłącznie na zautomatyzowanym przetwarzaniu, w tym profilowaniu.']
    }
  ]
}

const cookiesPl: LegalDoc = {
  slug: LEGAL_SLUGS.cookies.pl,
  title: 'Polityka cookies',
  metaTitle: 'Polityka cookies | STANIAX',
  metaDesc:
    'Jakich plików cookies używa serwis staniax.pl, które wymagają zgody i jak w każdej chwili zmienić lub wycofać swoją decyzję.',
  updated: UPDATED,
  intro:
    'Pliki cookies to niewielkie pliki tekstowe zapisywane na Twoim urządzeniu. Poniżej wyjaśniamy, z jakich korzystamy i jak zarządzać zgodą.',
  sections: [
    {
      heading: 'Cookies niezbędne',
      paragraphs: [
        'Zapewniają podstawowe działanie serwisu oraz zapamiętują Twoją decyzję dotyczącą cookies. Zapisujemy ją lokalnie w Twojej przeglądarce pod kluczem „staniax-consent”.',
        'Zgodnie z art. 398 ust. 3 Prawa komunikacji elektronicznej te pliki nie wymagają zgody, ponieważ są konieczne do świadczenia usługi, o którą prosisz.'
      ]
    },
    {
      heading: 'Cookies analityczne',
      paragraphs: [
        'Korzystamy z Google Analytics 4, aby wiedzieć, które podstrony są odwiedzane i skąd trafiają do nas użytkownicy. Narzędzie ustawia pliki o nazwach zaczynających się od „_ga”.',
        'Te pliki uruchamiamy wyłącznie po wyrażeniu przez Ciebie zgody. Do momentu jej udzielenia skrypt Google nie jest w ogóle pobierany, więc żadne żądanie do serwerów Google nie następuje.'
      ]
    },
    {
      heading: 'Czego nie robimy',
      list: [
        'Nie stosujemy cookies reklamowych ani marketingowych.',
        'Nie profilujemy użytkowników i nie tworzymy profili reklamowych.',
        'Nie traktujemy dalszego przeglądania serwisu jako wyrażenia zgody.'
      ]
    },
    {
      heading: 'Jak zmienić lub wycofać zgodę',
      paragraphs: [
        'W każdej chwili możesz zmienić decyzję, korzystając z linku „Ustawienia cookies” w stopce serwisu. Wycofanie zgody jest równie łatwe jak jej udzielenie i powoduje natychmiastowe usunięcie plików analitycznych.',
        'Możesz też samodzielnie usunąć cookies w ustawieniach przeglądarki, jednak samo ustawienie przeglądarki nie zastępuje zgody wyrażonej w naszym serwisie.'
      ]
    },
    {
      heading: 'Więcej informacji',
      paragraphs: [
        'Zasady przetwarzania danych osobowych, w tym danych zbieranych przez narzędzia analityczne, opisujemy szczegółowo w Polityce prywatności.'
      ]
    }
  ]
}

const termsPl: LegalDoc = {
  slug: LEGAL_SLUGS.terms.pl,
  title: 'Regulamin serwisu',
  metaTitle: 'Regulamin serwisu | STANIAX',
  metaDesc:
    'Zasady korzystania z serwisu staniax.pl: zakres usług świadczonych drogą elektroniczną, wymagania techniczne i tryb reklamacji.',
  updated: UPDATED,
  intro:
    'Regulamin określa zasady korzystania z serwisu internetowego staniax.pl oraz usług świadczonych drogą elektroniczną, zgodnie z art. 8 ustawy o świadczeniu usług drogą elektroniczną.',
  sections: [
    {
      heading: 'Usługodawca',
      paragraphs: [
        `Usługodawcą jest ${COMPANY.name} z siedzibą przy ${COMPANY.seat}, KRS ${COMPANY.krs}, NIP ${COMPANY.nip}, REGON ${COMPANY.regon}.`,
        `Kontakt: ${COMPANY.email}, tel. ${COMPANY.phone}.`
      ]
    },
    {
      heading: 'Rodzaje i zakres usług',
      list: [
        'Udostępnianie treści informacyjnych o ofercie, technologiach i realizacjach — bezpłatnie, bez rejestracji.',
        'Formularz kontaktowy umożliwiający przesłanie zapytania ofertowego — bezpłatnie.',
        TODO('newsletter — jeśli faktycznie działa, opisać zasady zapisu i rezygnacji; jeśli nie, usunąć formularz ze stopki')
      ]
    },
    {
      heading: 'Wymagania techniczne',
      list: [
        'Urządzenie z dostępem do internetu.',
        'Aktualna przeglądarka internetowa z obsługą JavaScript.',
        'Aktywne konto poczty elektronicznej — w przypadku korzystania z formularza kontaktowego.'
      ]
    },
    {
      heading: 'Zakaz dostarczania treści bezprawnych',
      paragraphs: [
        'Zabronione jest przesyłanie za pośrednictwem formularza treści bezprawnych, obraźliwych, naruszających prawa osób trzecich lub zawierających złośliwe oprogramowanie.'
      ]
    },
    {
      heading: 'Charakter prezentowanych informacji',
      paragraphs: [
        'Informacje o usługach zamieszczone w serwisie mają charakter informacyjny i nie stanowią oferty w rozumieniu art. 66 Kodeksu cywilnego. Warunki współpracy ustalamy indywidualnie.'
      ]
    },
    {
      heading: 'Reklamacje',
      paragraphs: [
        `Reklamacje dotyczące działania serwisu można zgłaszać na adres ${COMPANY.email}. Reklamację rozpatrujemy w terminie 14 dni od dnia jej otrzymania, a odpowiedź przesyłamy na adres, z którego zgłoszenie zostało wysłane.`
      ]
    },
    {
      heading: 'Dane osobowe',
      paragraphs: [
        'Zasady przetwarzania danych osobowych oraz wykorzystywania plików cookies opisujemy w Polityce prywatności i Polityce cookies.'
      ]
    },
    {
      heading: 'Zmiany regulaminu',
      paragraphs: [
        'Zastrzegamy prawo do zmiany regulaminu. Aktualna wersja jest zawsze dostępna pod tym adresem, wraz z datą ostatniej aktualizacji.'
      ]
    }
  ]
}

// -------------------------------------------------------------- ANGIELSKI ---

const privacyEn: LegalDoc = {
  slug: LEGAL_SLUGS.privacy.en,
  title: 'Privacy policy',
  metaTitle: 'Privacy policy | STANIAX',
  metaDesc:
    'How staniax.pl processes personal data: controller, purposes, legal bases, recipients and the rights available to you.',
  updated: UPDATED,
  intro:
    'This page explains who processes your personal data in connection with the staniax.pl website, for what purpose and on what legal basis, and what rights you have.',
  sections: [
    {
      heading: 'Data controller',
      paragraphs: [
        `The controller is ${COMPANY.name}, ${COMPANY.seat}, Poland, registered in the National Court Register under KRS ${COMPANY.krs}, VAT ID ${COMPANY.nip}, REGON ${COMPANY.regon}.`,
        `Production plant: ${COMPANY.plant}.`,
        `Data protection contact: ${COMPANY.email}, phone ${COMPANY.phone}.`
      ]
    },
    {
      heading: 'Data we collect',
      list: [
        'Contact form: first name, surname, e-mail address, phone number (optional), project type and message content.',
        'Browsing data: IP address, browser and device type, pages visited — only if you consent to analytics cookies.'
      ]
    },
    {
      heading: 'Purposes and legal bases',
      list: [
        'Responding to enquiries and pre-contractual steps — Article 6(1)(b) GDPR.',
        'Ongoing business correspondence and defence against claims — Article 6(1)(f) GDPR (our legitimate interest).',
        'Google Analytics visit statistics — Article 6(1)(a) GDPR (your consent). Without consent the tool is not activated.',
        'Compliance with legal obligations, including tax and accounting — Article 6(1)(c) GDPR.'
      ]
    },
    {
      heading: 'Recipients',
      list: [
        'Resend (delivery of contact form e-mails),',
        'Vercel Inc. (website hosting),',
        'Google Ireland Limited (Google Analytics — only after your consent).'
      ]
    },
    {
      heading: 'Retention',
      list: [TODO('retention period for contact form correspondence'), 'Google Analytics: as configured in the property settings.']
    },
    {
      heading: 'Your rights',
      list: [
        'access to your data and a copy of it,',
        'rectification of inaccurate data,',
        'erasure,',
        'restriction of processing,',
        'data portability,',
        'objection to processing based on legitimate interest,',
        'withdrawal of consent at any time, without affecting the lawfulness of processing before withdrawal.'
      ]
    },
    {
      heading: 'Complaints',
      paragraphs: [
        'You may lodge a complaint with the President of the Personal Data Protection Office, ul. Stawki 2, 00-193 Warsaw, Poland.'
      ]
    }
  ]
}

const cookiesEn: LegalDoc = {
  slug: LEGAL_SLUGS.cookies.en,
  title: 'Cookie policy',
  metaTitle: 'Cookie policy | STANIAX',
  metaDesc: 'Which cookies staniax.pl uses, which require consent and how to change or withdraw your choice at any time.',
  updated: UPDATED,
  intro: 'Cookies are small text files stored on your device. Below we explain which ones we use and how to manage consent.',
  sections: [
    {
      heading: 'Necessary cookies',
      paragraphs: [
        'They keep the website working and remember your cookie choice, stored locally under the key “staniax-consent”. These do not require consent because they are essential to the service you request.'
      ]
    },
    {
      heading: 'Analytics cookies',
      paragraphs: [
        'We use Google Analytics 4 to see which pages are visited and where visitors come from. It sets cookies whose names start with “_ga”.',
        'These are activated only after you give consent. Until then the Google script is not downloaded at all, so no request reaches Google servers.'
      ]
    },
    {
      heading: 'What we do not do',
      list: [
        'We do not use advertising or marketing cookies.',
        'We do not profile users.',
        'We never treat continued browsing as consent.'
      ]
    },
    {
      heading: 'Changing or withdrawing consent',
      paragraphs: [
        'You can change your decision at any time via the “Cookie settings” link in the footer. Withdrawing consent is as easy as giving it and immediately removes analytics cookies.'
      ]
    }
  ]
}

const termsEn: LegalDoc = {
  slug: LEGAL_SLUGS.terms.en,
  title: 'Terms of service',
  metaTitle: 'Terms of service | STANIAX',
  metaDesc: 'Rules for using staniax.pl: scope of electronic services, technical requirements and the complaints procedure.',
  updated: UPDATED,
  intro: 'These terms set out the rules for using the staniax.pl website and the services provided by electronic means.',
  sections: [
    {
      heading: 'Service provider',
      paragraphs: [`${COMPANY.name}, ${COMPANY.seat}, Poland. KRS ${COMPANY.krs}, VAT ID ${COMPANY.nip}. Contact: ${COMPANY.email}.`]
    },
    {
      heading: 'Scope of services',
      list: [
        'Free access to information about our offer, technologies and completed projects.',
        'A contact form for sending enquiries, free of charge.'
      ]
    },
    {
      heading: 'Technical requirements',
      list: ['A device with internet access.', 'An up-to-date browser with JavaScript enabled.', 'An active e-mail account when using the contact form.']
    },
    {
      heading: 'Nature of the information provided',
      paragraphs: [
        'Information about services is provided for information purposes only and does not constitute an offer within the meaning of the Polish Civil Code. Terms of cooperation are agreed individually.'
      ]
    },
    {
      heading: 'Complaints',
      paragraphs: [`Complaints about the website can be sent to ${COMPANY.email}. We respond within 14 days of receipt.`]
    }
  ]
}

// -------------------------------------------------------------- NIEMIECKI ---

const privacyDe: LegalDoc = {
  slug: LEGAL_SLUGS.privacy.de,
  title: 'Datenschutzerklärung',
  metaTitle: 'Datenschutzerklärung | STANIAX',
  metaDesc:
    'Wie staniax.pl personenbezogene Daten verarbeitet: Verantwortlicher, Zwecke, Rechtsgrundlagen, Empfänger und Ihre Rechte.',
  updated: UPDATED,
  intro:
    'Nachfolgend erläutern wir, wer Ihre personenbezogenen Daten im Zusammenhang mit der Website staniax.pl verarbeitet, zu welchem Zweck und auf welcher Rechtsgrundlage.',
  sections: [
    {
      heading: 'Verantwortlicher',
      paragraphs: [
        `Verantwortlich ist ${COMPANY.name}, ${COMPANY.seat}, Polen, eingetragen im Landesgerichtsregister unter KRS ${COMPANY.krs}, USt-IdNr. ${COMPANY.nip}, REGON ${COMPANY.regon}.`,
        `Produktionswerk: ${COMPANY.plant}.`,
        `Kontakt in Datenschutzfragen: ${COMPANY.email}, Tel. ${COMPANY.phone}.`
      ]
    },
    {
      heading: 'Welche Daten wir erheben',
      list: [
        'Kontaktformular: Vorname, Nachname, E-Mail-Adresse, Telefonnummer (optional), Projektart und Nachricht.',
        'Nutzungsdaten: IP-Adresse, Browser- und Gerätetyp, besuchte Seiten — nur bei Einwilligung in Analyse-Cookies.'
      ]
    },
    {
      heading: 'Zwecke und Rechtsgrundlagen',
      list: [
        'Beantwortung von Anfragen und vorvertragliche Maßnahmen — Art. 6 Abs. 1 lit. b DSGVO.',
        'Laufende Geschäftskorrespondenz und Abwehr von Ansprüchen — Art. 6 Abs. 1 lit. f DSGVO.',
        'Besuchsstatistiken mit Google Analytics — Art. 6 Abs. 1 lit. a DSGVO (Ihre Einwilligung).',
        'Erfüllung gesetzlicher Pflichten — Art. 6 Abs. 1 lit. c DSGVO.'
      ]
    },
    {
      heading: 'Empfänger',
      list: [
        'Resend (Versand der Formular-E-Mails),',
        'Vercel Inc. (Hosting),',
        'Google Ireland Limited (Google Analytics — nur nach Ihrer Einwilligung).'
      ]
    },
    {
      heading: 'Speicherdauer',
      list: [TODO('Aufbewahrungsfrist für Korrespondenz aus dem Kontaktformular'), 'Google Analytics: gemäß Einstellung in der Property.']
    },
    {
      heading: 'Ihre Rechte',
      list: [
        'Auskunft und Kopie der Daten,',
        'Berichtigung,',
        'Löschung,',
        'Einschränkung der Verarbeitung,',
        'Datenübertragbarkeit,',
        'Widerspruch gegen Verarbeitung auf Grundlage berechtigter Interessen,',
        'jederzeitiger Widerruf der Einwilligung.'
      ]
    },
    {
      heading: 'Beschwerde',
      paragraphs: [
        'Sie können sich beim Präsidenten des Amtes für den Schutz personenbezogener Daten, ul. Stawki 2, 00-193 Warschau, Polen beschweren.'
      ]
    }
  ]
}

const cookiesDe: LegalDoc = {
  slug: LEGAL_SLUGS.cookies.de,
  title: 'Cookie-Richtlinie',
  metaTitle: 'Cookie-Richtlinie | STANIAX',
  metaDesc: 'Welche Cookies staniax.pl verwendet, welche eine Einwilligung erfordern und wie Sie Ihre Wahl jederzeit ändern.',
  updated: UPDATED,
  intro: 'Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden. Nachfolgend erklären wir, welche wir einsetzen.',
  sections: [
    {
      heading: 'Notwendige Cookies',
      paragraphs: [
        'Sie halten die Website funktionsfähig und speichern Ihre Cookie-Auswahl unter dem Schlüssel „staniax-consent“. Sie erfordern keine Einwilligung, da sie für den angeforderten Dienst erforderlich sind.'
      ]
    },
    {
      heading: 'Analyse-Cookies',
      paragraphs: [
        'Wir nutzen Google Analytics 4, um zu erfahren, welche Seiten besucht werden. Es setzt Cookies, deren Namen mit „_ga“ beginnen.',
        'Diese werden ausschließlich nach Ihrer Einwilligung aktiviert. Bis dahin wird das Google-Skript gar nicht geladen.'
      ]
    },
    {
      heading: 'Was wir nicht tun',
      list: [
        'Wir setzen keine Werbe- oder Marketing-Cookies ein.',
        'Wir erstellen keine Nutzerprofile.',
        'Weiteres Surfen gilt bei uns niemals als Einwilligung.'
      ]
    },
    {
      heading: 'Einwilligung ändern oder widerrufen',
      paragraphs: [
        'Über den Link „Cookie-Einstellungen“ im Footer können Sie Ihre Entscheidung jederzeit ändern. Der Widerruf ist ebenso einfach wie die Erteilung.'
      ]
    }
  ]
}

const termsDe: LegalDoc = {
  slug: LEGAL_SLUGS.terms.de,
  title: 'Allgemeine Geschäftsbedingungen',
  metaTitle: 'AGB | STANIAX',
  metaDesc: 'Regeln für die Nutzung von staniax.pl: Umfang der elektronischen Dienste, technische Anforderungen und Beschwerdeverfahren.',
  updated: UPDATED,
  intro: 'Diese Bedingungen regeln die Nutzung der Website staniax.pl und der elektronisch erbrachten Dienste.',
  sections: [
    {
      heading: 'Diensteanbieter',
      paragraphs: [`${COMPANY.name}, ${COMPANY.seat}, Polen. KRS ${COMPANY.krs}, USt-IdNr. ${COMPANY.nip}. Kontakt: ${COMPANY.email}.`]
    },
    {
      heading: 'Leistungsumfang',
      list: [
        'Kostenfreier Zugang zu Informationen über Angebot, Technologien und Projekte.',
        'Kontaktformular für Anfragen, kostenfrei.'
      ]
    },
    {
      heading: 'Technische Anforderungen',
      list: ['Gerät mit Internetzugang.', 'Aktueller Browser mit aktiviertem JavaScript.', 'Aktives E-Mail-Konto bei Nutzung des Formulars.']
    },
    {
      heading: 'Charakter der Informationen',
      paragraphs: [
        'Die Angaben zu Leistungen dienen der Information und stellen kein Angebot im Sinne des polnischen Zivilgesetzbuches dar. Die Bedingungen der Zusammenarbeit werden individuell vereinbart.'
      ]
    },
    {
      heading: 'Beschwerden',
      paragraphs: [`Beschwerden zur Website richten Sie an ${COMPANY.email}. Wir antworten innerhalb von 14 Tagen.`]
    }
  ]
}

export const LEGAL_DOCS: Record<LegalDocId, Record<Lang, LegalDoc>> = {
  privacy: { pl: privacyPl, en: privacyEn, de: privacyDe },
  cookies: { pl: cookiesPl, en: cookiesEn, de: cookiesDe },
  terms: { pl: termsPl, en: termsEn, de: termsDe }
}
