import type { Dictionary } from "../types";

export const pl: Dictionary = {
  meta: {
    title: "CheqSplit: dziel koszty, skanuj paragony, śledź wspólne rachunki",
    description:
      "CheqSplit pomaga dzielić koszty, skanować paragony, śledzić wspólne rachunki i szybko zobaczyć kto komu co jest winien — po restoranie, w podróży, na zakupach, w grupie.",
    ogDescription:
      "Dziel sprawiedliwe: skan, pozycje, salda. Restauracje, wyjazdy, współlokatorzy, znajomi.",
    twitterDescription:
      "Łatwy sposób na wspólne wydatki i rachunki bez tabeli i napięć.",
    softwareDescription:
      "CheqSplit pomaga dzielić koszty, skanować paragony, śledzić wspólne wydatki i stosunki kto-komu po imprezach, w podróży, w grupie.",
  },
  nav: { features: "Funkcje", how: "Działanie", useCases: "Zastosowania", faq: "FAQ" },
  header: { download: "Pobierz aplikację" },
  hero: {
    title: "Dziel koszty, skanuj paragony, śledź rachunki grupowe",
    body: "CheqSplit ułatwia dzielenie kosztów, skanowanie paragonów, śledzenie wspólnych wydatków i widzenie, kto komu się z czym rozlicza — w restauracji, w podróży, na zakupach, w grupie.",
    alts: [
      "Ekran wycieczki grupowej CheqSplit",
      "Aplikacja CheqSplit: wspólne wydatki",
      "Dzielenie rachunku, pozycje paragonu CheqSplit",
    ],
  },
  features: {
    title: "Dlaczego CheqSplit?",
    items: [
      { title: "Błyskawiczne skanowanie", desc: "Paragony, pozycje, podatki, suma w chwilę." },
      { title: "Dziel według pozycji", desc: "Przypisz linię do właściwej osoby zamiast łopatologicznie po równo." },
      { title: "Wszystko w jednym miejscu", desc: "Restauracja, sklep, wycieczka, wspólne koszty, jeden obrazek." },
      { title: "Kto komu", desc: "Aplikacja sumuje, każdy wie, ile wpłaca." },
    ],
  },
  how: {
    title: "Jak działa CheqSplit",
    subtitle: "Pięć jasnych kroków, od wycieczki po czytelny raport, który wszyscy uznają.",
    stepPill: (n) => `Krok ${n}`,
    steps: [
      {
        label: "Utwórz wycieczkę w sekundach",
        body: "Nazwij, zaproś znajomych — koniec dłubania w opcjach.",
        imageAlt: "CheqSplit: wycieczka grupowa",
        bullets: ["Szybki start", "Proste zaproszenia", "Kolacje albo urlop"],
      },
      {
        label: "Dziel według pozycji",
        body: "Szczegółowy rachunek: każda linia u kogo należy, rachunka się trzyma.",
        imageAlt: "CheqSplit: skan paragonu",
        bullets: ["Dziel per linia", "Dania na pół, napiwki, opłaty", "Czytelnie"],
      },
      {
        label: "Śledź każdy wspólny wydatek",
        body: "Kategorie, notatki, pełny obraz w jednej osi czasu.",
        imageAlt: "CheqSplit: wydatki mobilne",
        bullets: ["Kategorie", "Paragony i notatki", "Jedna oś"],
      },
      {
        label: "Rozlicz salda",
        body: "Salda aktualizują się przy płatnościach, mniej telefonowania o kasę.",
        imageAlt: "CheqSplit: salda",
        bullets: ["Salda netto", "Przypomnienia (opcj.)", "Eksport podsumowań"],
      },
      {
        label: "Podziel schludny raport",
        body: "Wykresy, sumy, kto płacił – do wysłania lub później.",
        imageAlt: "CheqSplit: raport wycieczki",
        bullets: ["Poglądowo", "Link lub plik", "Prywatność"],
      },
    ],
  },
  useCases: {
    title: "Każdy wspólny wydatek",
    intro: "Gdy wielu ludzi płaci razem: kolacja, wycieczka, zakupy, CheqSplit jest pod to. Zamiast liczyć ręcznie, skanuj, przypisuj, rabaty, prowizja, jasne zamknięcie.",
    items: [
      { title: "Restauracje", desc: "Pozycje, dziel, zapłać uczciwie." },
      { title: "Wycieczki", desc: "Loty, nocleg, jedzenie, jeden widok." },
      { title: "Rodzina", desc: "Zakupy, wydarzenia, dom." },
      { title: "Wspólne zakupy", desc: "Prezenty, hurt, plany z przyjaciółmi." },
    ],
  },
  cta: {
    title: "Dziel mądrzej?",
    body: "Tysiące grup już tak robi, bez wojny o kalkulator.",
    sectionAria: "Pobierz CheqSplit",
    imgAlt: "Ekran startu CheqSplit, dzielenie rachunku",
    badgeAlts: { appStore: "Pobierz w App Store", play: "Sklep Google Play" },
    playSoon: "Wkrótce",
    playDisabledHint: "Jeszcze niedostępne",
    groupAria: "Pobierz",
  },
  faq: {
    title: "Najczęściej pytania",
    items: [
      { q: "Co to CheqSplit?", a: "Aplikacja do dzielenia rachunków i wspólnych wydatków: skan, przypisania, salda kto-komu." },
      { q: "Czy per pozycja?", a: "Tak, każdą linię do właściwej osoby, płacisz tylko za to, co wziąłeś." },
      { q: "Wycieczka z ekipą?", a: "Tak: wycieczka, wydatki, ludzie, paragony, raport i salda." },
      { q: "Restauracja OK?", a: "Tak, bary, sklepy, wypad — gdzie wielu płaci." },
      { q: "Offline?", a: "Możesz lokalnie częściowo, ale sync i wspólna wycieczka wymaga sieci." },
      { q: "Jak zaprosić kogoś?", a: "Utwórz wycieczkę, dodaj koszty, wyślij link, dołączają, widzą salda." },
    ],
  },
  footer: {
    tagline: "Najprostsze dzielenie wspólnych kosztów: fair, szybko, czytelnie.",
    product: "Produkt",
    company: "Firma",
    legal: "Prawo",
    about: "O nas",
    contact: "Kontakt",
    privacy: "Prywatność",
    terms: "Warunki",
    rights: "Wszelkie prawa zastrzeżone.",
  },
  a11y: {
    keyFeatures: "Kluczowe funkcje",
    primaryNav: "Główna nawigacja",
    howSection: "Działanie",
    logoHome: "Strona główna CheqSplit",
  },
};
