import type { PrivacyPage } from "../../types";

const link = (href: string, text: string) =>
  `<a class="font-medium text-brand-600 underline hover:text-brand-700" href="${href}">${text}</a>`;

export const privacyPl: PrivacyPage = {
  metaTitle: "Polityka prywatności – CheqSplit",
  metaDescription:
    "Jak CheqSplit zbiera, wykorzystuje i chroni Twoje informacje podczas korzystania z naszej aplikacji mobilnej.",
  h1: "Polityka prywatności",
  lastUpdatedPrefix: "Ostatnia aktualizacja:",
  lastUpdatedDate: "25 marca 2026",
  intro:
    'CheqSplit („my”, „nasz” lub „nas”) zobowiązuje się chronić Twoją prywatność. Niniejsza Polityka prywatności wyjaśnia, w jaki sposób zbieramy, wykorzystujemy i chronimy Twoje informacje podczas korzystania z naszej aplikacji mobilnej.',
  s1Title: "1 — Informacje, które zbieramy",
  s1Intro: "CheqSplit zbiera minimalne dane niezbędne do funkcji dzielenia rachunków:",
  s1Bullets: [
    {
      label: "Uwierzytelnianie",
      text: "Możesz korzystać z CheqSplit w anonimowej sesji lub połączyć się lub zalogować za pomocą e-maila i hasła (przechowywanych i weryfikowanych przez Firebase Authentication) lub zalogować się przez Google. Jeśli używasz e-mail/hasło lub Google, otrzymujemy identyfikatory przypisane przez Firebase do Twojego konta (zwykle e-mail oraz w przypadku Google Twoje imię), abyś mógł logować się na innych urządzeniach i odzyskać dostęp. Hasłami zarządza Firebase; nie przechowujemy Twojego hasła w postaci jawnej.",
    },
    {
      label: "Dane o rachunkach i wyjazdach",
      text: "Informacje wprowadzane dobrowolnie, w tym nazwy pozycji, ilości, ceny, imiona uczestników, nazwy wyjazdów oraz powiązane dane o wspólnych wydatkach.",
    },
    {
      label: "Zdjęcia paragonów i skanowanie",
      text: "Zdjęcia, które robisz lub importujesz, mogą być analizowane na urządzeniu przy użyciu rozpoznawania tekstu na urządzeniu (OCR). Gdy w aplikacji włączone jest inteligentne skanowanie paragonów, fragmenty obrazu paragonu i/lub wyekstrahowany tekst mogą być wysyłane do generatywnej AI Google (Gemini), aby wykryć pozycje i sumy. Zawsze sprawdzaj i poprawiaj pozycje przed udostępnieniem rachunku.",
    },
    {
      label: "Subskrypcje",
      text: "Jeśli kupisz plan premium, płatność przetwarza Apple. Do walidacji uprawnień używamy RevenueCat; RevenueCat otrzymuje identyfikator użytkownika aplikacji oraz dane zakupu zgodnie z ich polityką.",
    },
    {
      label: "Informacje o urządzeniu",
      text: "Podstawowe dane urządzenia i diagnostyczne dla działania aplikacji i raportowania awarii.",
    },
  ],
  s2Title: "2 — Jak wykorzystujemy Twoje informacje",
  s2Intro: "Zebrane informacje wykorzystujemy w celu:",
  s2List: [
    "Świadczenia funkcji dzielenia i udostępniania rachunków",
    "Umożliwienia współpracy w czasie rzeczywistym z innymi uczestnikami",
    "Przechowywania historii rachunków dla Twojej wygody",
    "Poprawy wydajności aplikacji i naprawy błędów",
  ],
  s3Title: "3 — Przechowywanie i bezpieczeństwo danych",
  s3Intro: "Twoje dane są bezpiecznie przechowywane przy użyciu usług Google Firebase:",
  s3List: [
    "Dane rachunków są przechowywane w Firebase Realtime Database z regułami bezpieczeństwa zapewniającymi, że tylko upoważnieni uczestnicy mają dostęp do konkretnych rachunków.",
    "Dane są szyfrowane podczas transmisji przy użyciu HTTPS.",
    "Nie przechowujemy danych płatniczych ani nie przetwarzamy płatności.",
  ],
  s4Title: "4 — Udostępnianie danych",
  s4Intro:
    "Nie sprzedajemy, nie wymieniamy ani nie wynajmujemy Twoich danych osobowych stronom trzecim. Twoje dane mogą być udostępniane wyłącznie:",
  s4List: [
    "Innym uczestnikom, których zaprosisz do podziału rachunku (widzą pozycje rachunku i wybraną przez Ciebie nazwę wyświetlaną)",
    "Dostawcom usług (Firebase/Google) w zakresie hostingu i infrastruktury",
    "Jeśli wymaga tego prawo lub w celu ochrony naszych praw",
  ],
  s5Title: "5 — Przechowywanie danych",
  s5Body:
    "Dane rachunków są przechowywane tak długo, jak utrzymujesz je w aplikacji. Możesz usunąć rachunki w dowolnym momencie. Zakończone sesje są przechowywane lokalnie na Twoim urządzeniu i można je wyczyścić w ustawieniach aplikacji.",
  s6Title: "6 — Twoje prawa",
  s6Intro: "Masz prawo do:",
  s6List: [
    "Dostępu do danych przechowywanych w aplikacji",
    "Usunięcia rachunków i historii sesji",
    "Żądania informacji o przechowywanych przez nas danych",
  ],
  s7Title: "7 — Prywatność dzieci",
  s7Body:
    "CheqSplit nie jest przeznaczony dla dzieci poniżej 13 roku życia. Świadomie nie zbieramy danych osobowych od dzieci.",
  s8Title: "8 — Usługi stron trzecich",
  s8Intro: "Nasza aplikacja korzysta z następujących usług stron trzecich:",
  s8Bullets: [
    {
      label: "Google Firebase",
      text: `Uwierzytelnianie, Realtime Database i powiązana infrastruktura. Link: ${link("https://firebase.google.com/support/privacy", "https://firebase.google.com/support/privacy")}`,
    },
    {
      label: "Google AI (Gemini)",
      text: `Opcjonalne przetwarzanie w chmurze w celu rozpoznania paragonów, gdy dostępne jest inteligentne skanowanie. Link: ${link("https://ai.google.dev/gemini-api/terms", "https://ai.google.dev/gemini-api/terms")} oraz obowiązują polityki prywatności Google.`,
    },
    {
      label: "RevenueCat",
      text: `Status subskrypcji i zarządzanie zakupami w aplikacji. Link: ${link("https://www.revenuecat.com/privacy", "https://www.revenuecat.com/privacy")}`,
    },
    {
      label: "Apple",
      text: "Dystrybucja aplikacji i zakupy w aplikacji przez App Store.",
    },
    {
      label: "OCR na urządzeniu",
      text: "Rozpoznawanie tekstu ze zdjęć paragonów może działać na urządzeniu przy użyciu API Apple na urządzeniu (oraz na Androidzie OCR urządzenia/producenta tam, gdzie ma to zastosowanie).",
    },
  ],
  s9Title: "9 — Zmiany niniejszej polityki",
  s9Body:
    'Możemy od czasu do czasu aktualizować niniejszą Politykę prywatności. Powiadomimy Cię o zmianach, publikując nową Politykę prywatności w aplikacji i aktualizując datę „Ostatnia aktualizacja”.',
  s10Title: "10 — Kontakt",
  s10Intro: "W razie pytań dotyczących niniejszej Polityki prywatności skontaktuj się z nami:",
  emailLabel: "E-mail:",
  developerLabel: "Deweloper:",
  developerName: "Lunthemes",
  relatedNavLabel: "Zobacz także:",
  relatedTerms: "Warunki korzystania z usługi",
  relatedDeleteAccount: "Usuń konto",
  relatedDeleteData: "Usuń dane",
};
