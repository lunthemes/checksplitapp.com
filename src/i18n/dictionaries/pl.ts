import type { Dictionary } from "../types";

export const pl: Dictionary = {
  meta: {
    title: "CheqSplit: dziel wydatki, skanuj paragony, śledź wspólne rachunki",
    description:
      "CheqSplit pomaga dzielić wydatki, skanować paragony, pilnować wspólnych kosztów i szybko zobaczyć, kto komu ile jest winien – po restauracji, w podróży, na zakupach, w gronie znajomych.",
    ogDescription:
      "Dziel wydatki uczciwie: skanuj paragony, śledź wspólne koszty, miej jasne salda. Restauracje, wyjazdy, wspólne mieszkanie, rodzina.",
    twitterDescription:
      "Prosto dzielić wydatki i wspólne rachunki, bez tabel, screenów w czacie i nieporozumień przy rozliczaniu.",
    softwareDescription:
      "CheqSplit pomaga dzielić wydatki, skanować paragony, śledzić wspólne koszty i sprawdzać, kto komu ile jest winien, po spotkaniach, w podróży i w grupie.",
  },
  nav: { features: "Funkcje", how: "Jak to działa", useCases: "Zastosowania", faq: "FAQ" },
  header: { download: "Pobierz aplikację" },
  hero: {
    title: "Dziel wydatki, skanuj paragony, zobacz, kto komu ile jest winien",
    body: "CheqSplit ułatwia dzielenie wydatków, skanowanie paragonów, śledzenie wspólnych kosztów i rozliczanie, kto komu ile jest winien – w restauracji, na wyjeździe, na zakupach, w grupie.",
    alts: [
      "CheqSplit: wspólna podróż, lista wydatków",
      "Aplikacja CheqSplit: wspólne wydatki w grupie",
      "CheqSplit: podział rachunku, pozycje z paragonu",
    ],
  },
  features: {
    title: "Dlaczego CheqSplit?",
    items: [
      {
        title: "Skan paragonu w chwilę",
        desc: "Wczytaj pozycje, podatki i sumę – zamiast przepisywać wszystko ręcznie.",
      },
      {
        title: "Podział według pozycji",
        desc: "Przydziel każdą linię odpowiedniej osobie, zamiast dzielić wszystko po równo w ciemno.",
      },
      {
        title: "Jeden podgląd wszystkich kosztów",
        desc: "Jedna oś czasu: restauracja, wyjazd, zakupy i inne wspólne wydatki w jednym miejscu.",
      },
      {
        title: "Kto komu ile jest winien",
        desc: "Aplikacja liczy salda, a Ty widzisz, kto ma dopłacić, kto wychodzi na zero.",
      },
    ],
  },
  how: {
    title: "Jak działa CheqSplit",
    subtitle: "Pięć jasnych kroków, od wycieczki po czytelny raport, który wszyscy mogą zatwierdzić.",
    stepPill: (n) => `Krok ${n}`,
    steps: [
      {
        label: "Utwórz wycieczkę w minutę",
        body: "Daj nazwę, zaproś znajomych – i konfigurację masz z głowy.",
        imageAlt: "CheqSplit: wycieczka grupowa",
        bullets: ["Szybki start", "Proste zaproszenia", "Dla kolacji, weekendu albo dłuższego wyjazdu"],
      },
      {
        label: "Dziel wydatki według pozycji",
        body: "Szczegółowy rachunek: każda linia przypisana właśnie tym, którzy to zamówili.",
        imageAlt: "CheqSplit: skanowanie paragonu",
        bullets: ["Pozycja po pozycji", "Wspólne potrawy, napiwki, opłaty serwisowe", "Czytelny wynik"],
      },
      {
        label: "Zapisuj wszystko, co wspólne",
        body: "Kategorie, notatki i spójny obraz, na jednej osi czasu dla grupy.",
        imageAlt: "CheqSplit: lista wspólnych wydatków",
        bullets: ["Kategorie, które mają sens", "Zdjęcia paragonów", "Jedna linia czasowa wydatków"],
      },
      {
        label: "Rozlicz salda, kiedy płacicie",
        body: "Suma się aktualizuje, gdy ktoś płaci przelewem lub gotówką – mniej pytań „kiedy oddasz?”.",
        imageAlt: "CheqSplit: podsumowanie sald",
        bullets: ["Saldo netto na osobę", "Opcjonalne przypomnienia", "Eksport podsumowania"],
      },
      {
        label: "Udostępnij czytelny raport",
        body: "Wykres, suma, kto płacił, co miał w koszyku – łatwo wysłać dalej lub wrócić do niego później.",
        imageAlt: "CheqSplit: raport wycieczki",
        bullets: ["Czytelne podsumowania", "Link albo plik", "Dbałość o prywatność"],
      },
    ],
  },
  useCases: {
    title: "Na każdy wspólny wydatek",
    intro: "Gdy w kilka osób łączycie koszty, CheqSplit trzyma porządek: jecie, wyjeżdżacie, robicie zakupy wspólnie. Zamiast liczyć w głowie, skanuj, przypisuj pozycje, miej pod kontrolą zniżki czy napiwki, a na koniec wiesz, kto komu ile jest winien, bez pomyłek.",
    items: [
      { title: "Restauracje", desc: "Otwierasz pozycje z rachunku, dzielisz tak, by było uczciwie, zamykasz wieczór bez konfliktu." },
      { title: "Wycieczki w grupie", desc: "Lot, nocleg, jedzenie, jeden widok na wszystkich: kto za co zapłacił." },
      { title: "Dom i rodzina", desc: "Zakupy, drobne zdarzenia, wspólny budżet domu." },
      { title: "Wspólne zakupy", desc: "Prezenty, większe paczki, cokolwiek, co łączycie w kilka par rąk." },
    ],
  },
  cta: {
    title: "Mniej chaosu przy wspólnych rachunkach?",
    body: "Z CheqSplit szybko ustalicie, kto, ile i za co płaci — bez wojen o kalkulator.",
    sectionAria: "Pobierz CheqSplit",
    imgAlt: "Ekran startu CheqSplit, dzielenie rachunku",
    badgeAlts: { appStore: "Pobierz w App Store", play: "Pobierz w Google Play" },
    playSoon: "Wkrótce",
    playDisabledHint: "Jeszcze niedostępne",
    groupAria: "Pobierz aplikację",
  },
  faq: {
    title: "Najczęściej zadawane pytania",
    items: [
      { q: "Co to CheqSplit?", a: "Aplikacja do dzielenia rachunków i wspólnych wydatków. Skanujesz, przypisujesz linie, widzisz, kto komu ile jest winien, w jednym miejscu." },
      { q: "Czy da się dzielić rachunek do pozycji z paragonu?", a: "Tak. Każdą linię możesz dodać do właściwej osoby – płacisz tylko za to, z czego skorzystałeś." },
      { q: "Czy to się sprawdza na wycieczkach w kilka osób?", a: "Tak. Utwórz wycieczkę, dodawaj wydatki, wrzucaj zdjęcia paragonów, a na końcu wyciągnij z tego czytelną listę, kto komu ile jest winien." },
      { q: "Czy działa tylko w restauracji?", a: "Nie, zawsze wtedy, gdy kilka osób łączy w jednym koszty – w barze, sklepie, w podróży, na wspólnym zamówieniu." },
      { q: "A bez internetu?", a: "Część danych możesz mieć lokalnie, ale wspólna wycieczka i sync z ekipą wymaga połączenia z siecią." },
      { q: "Jak zaprosić kogoś do wycieczki?", a: "W CheqSplit utwórz wycieczkę, wprowadź wydatki, wyślij link do wycieczki – osoba, która dołącza, też zobaczy, jak wyglądają wspólne sumy i jej udział." },
    ],
  },
  footer: {
    tagline: "Dziel wspólne koszty w prosty, otwarty sposób – szybko, jasno, bez domysłów.",
    product: "Produkt",
    company: "Firma",
    legal: "Informacje prawne",
    about: "O nas",
    contact: "Kontakt",
    privacy: "Prywatność",
    terms: "Regulamin",
    rights: "Wszelkie prawa zastrzeżone.",
  },
  a11y: {
    keyFeatures: "Kluczowe funkcje",
    primaryNav: "Nawigacja główna",
    howSection: "Jak to działa",
    logoHome: "Strona główna CheqSplit",
  },
};
