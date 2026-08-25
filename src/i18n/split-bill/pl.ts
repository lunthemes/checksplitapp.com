import type { SplitBillLocaleCopy } from "./types";
import { splitBillEn } from "./en";

export const splitBillPl: SplitBillLocaleCopy = {
  metaTitle: "Zeskanuj rachunek i podziel go według zamówionych pozycji | CheqSplit",
  metaDescription: "Cały rachunek pozostaje w jednym miejscu. Jedna osoba skanuje paragon w CheqSplit, a pozostali otwierają go przez link lub kod QR i wybierają swoje pozycje bezpośrednio w przeglądarce.",
  softwareDescription: "Cały rachunek pozostaje w jednym miejscu. Jedna osoba skanuje paragon w CheqSplit, a pozostali otwierają go przez link lub kod QR i wybierają swoje pozycje bezpośrednio w przeglądarce.",
  h1: "Zeskanuj rachunek i podziel go według zamówionych pozycji",
  heroSubLine1: "",
  heroSubLine2: "",
  heroParagraph: "",
  seoBlockH2: "Jeden rachunek, dostępny w aplikacji lub przeglądarce",
  seoBlockP1: "Cały rachunek pozostaje w jednym miejscu. Jedna osoba skanuje paragon w CheqSplit, a pozostali otwierają go przez link lub kod QR i wybierają swoje pozycje bezpośrednio w przeglądarce.",
  seoBlockP2: "Nie każdy przy stole musi instalować aplikację. CheqSplit przechowuje pozycje, uczestników, płatności i końcowe rozliczenie razem.",
  seoBlockP3: "",
  useCasesH2: "Podział rachunku zgodny z tym, co każdy naprawdę zamówił",
  useCases: [
    { title: "Własne pozycje", text: "Przypisz każdej osobie tylko te dania i napoje, które zamówiła." },
    { title: "Wspólne pozycje", text: "Butelkę, wspólne danie lub deser podziel tylko między osoby, które z nich korzystały." },
    { title: "Opłaty i napiwek", text: "Dodaj opłatę serwisową, podatki i napiwek tak, aby suma udziałów zgadzała się z rachunkiem." },
  ],
  howSectionH2: "Jak podzielić rachunek w restauracji z CheqSplit",
  howSectionSub: "",
  stepsSectionH2: "Jak podzielić rachunek w restauracji z CheqSplit",
  steps: [
    { title: "Zeskanuj paragon", desc: "Zrób zdjęcie paragonu, a CheqSplit przeniesie pozycje i kwoty do czytelnego rachunku, który możesz sprawdzić przed podziałem." },
    { title: "Sprawdź rachunek", desc: "Porównaj sumę w CheqSplit z kwotą na paragonie i popraw ewentualne błędy, zanim uczestnicy zaczną wybierać swoje zamówienia." },
    { title: "Podziel rachunek", desc: "Popraw nazwę, ilość lub cenę, jeśli skanowanie nie rozpoznało czegoś prawidłowo." },
  ],
  features: [
    { title: "Zeskanuj paragon z restauracji", desc: "Zrób zdjęcie paragonu, a CheqSplit przeniesie pozycje i kwoty do czytelnego rachunku, który możesz sprawdzić przed podziałem." },
    { title: "Sprawdź sumę przed rozpoczęciem podziału", desc: "Porównaj sumę w CheqSplit z kwotą na paragonie i popraw ewentualne błędy, zanim uczestnicy zaczną wybierać swoje zamówienia." },
    { title: "Sprawdź i popraw każdą pozycję", desc: "Popraw nazwę, ilość lub cenę, jeśli skanowanie nie rozpoznało czegoś prawidłowo." },
    { title: "Zaproś znajomych kodem QR lub linkiem", desc: "Udostępnij kod QR albo link do rachunku. Każdy może od razu go otworzyć." },
    { title: "Korzystaj w przeglądarce bez instalowania aplikacji", desc: "Znajomi mogą otworzyć link bezpośrednio w przeglądarce. Nie muszą instalować CheqSplit, aby wziąć udział w podziale." },
    { title: "Podziel rachunek online", desc: "Wszyscy korzystają z tego samego rachunku. Wybory i zmiany są zapisane w jednym miejscu, więc nie trzeba osobno liczyć, kto co zamówił." },
    { title: "Każdy wybiera to, co zamówił", desc: "Każdy uczestnik zaznacza swoje pozycje. Wspólne dania i napoje można podzielić między kilka osób." },
    { title: "Sprawdź, kto komu ile jest winien", desc: "Po przypisaniu pozycji CheqSplit oblicza kwoty i jasno pokazuje, kto powinien komu zapłacić." },
    { title: "Zapisuj wykonane płatności", desc: "Oznaczaj dokonane płatności, aby saldo było zawsze aktualne i było wiadomo, co pozostało do zapłaty." },
    { title: "Sprawdź, jak podzielono rachunek", desc: "Do końcowego rozliczenia można wrócić później i sprawdzić pozycje, kwoty oraz płatności każdego uczestnika." }
  ],
  ctaTitle: "Podziel rachunek, nawet jeśli znajomi nie mają aplikacji",
  ctaBody: "Zeskanuj paragon, udostępnij link lub kod QR i pozwól każdemu wybrać to, co zamówił.",
  groupBridgeBefore: "Chcesz trzymać ten rachunek z restauracji razem z hotelem, taksówką lub atrakcjami tej samej grupy? Dodaj ukończony rachunek z karty Rachunki wyjazdu przez Add Bill, a następnie kontynuuj ",
  groupBridgeLabel: "śledzenie wydatków grupy",
  groupBridgeAfter: ".",
  guideBridgeBefore: "Wolisz najpierw metodę krok po kroku? Przeczytaj, ",
  guideBridgeLabel: "jak sprawiedliwie podzielić rachunek w restauracji",
  guideBridgeAfter: ".",
  faq: [
    {
      q: "Czy CheqSplit może zeskanować szczegółowy paragon z restauracji?",
      a: "Tak. Zrób zdjęcie paragonu, a przed rozpoczęciem podziału sprawdź wykrytą sumę, pozycje, ilości i ceny.",
    },
    {
      q: "Czy wszyscy uczestnicy muszą mieć aplikację CheqSplit?",
      a: "Nie. Gospodarz tworzy i skanuje rachunek w aplikacji, ale zaproszeni goście mogą otworzyć link i wybrać Kontynuuj w przeglądarce.",
    },
    {
      q: "Czy mogę podzielić rachunek z restauracji w przeglądarce?",
      a: "Zaproszony uczestnik może otworzyć wspólny rachunek w przeglądarce, wybrać pozycje, które zamówił, sprawdzić Summary i śledzić wynikowe saldo. Utworzenie i zeskanowanie nowego rachunku wymaga aplikacji.",
    },
    {
      q: "Czy uczestnicy mogą dołączyć przez kod QR lub link?",
      a: "Tak. Udostępnij kod QR lub link z zaproszeniem, aby wszyscy mogli otworzyć ten sam rachunek z restauracji w aplikacji albo przeglądarce.",
    },
    {
      q: "Jak kilka osób dzieli jedną wspólną pozycję?",
      a: "Każda osoba, która dzieliła daną pozycję, zaznacza ją. CheqSplit automatycznie rozdziela cenę po równo między wszystkich uczestników, którzy ją wybrali.",
    },
    {
      q: "Co zrobić, jeśli paragon został błędnie zeskanowany?",
      a: "Sprawdź wykryty rachunek przed jego udostępnieniem. Popraw pozycję lub cenę, dodaj brakujący wiersz i w razie potrzeby wpisz podatek lub napiwek w Opłaty i Napiwek.",
    },
    {
      q: "Co robi Zapisz Płatność?",
      a: "Zapisuje, że jeden uczestnik zapłacił drugiemu poza CheqSplit. Aktualizuje historię wspólnego rachunku, ale nie przekazuje ani nie przetwarza pieniędzy.",
    },
    {
      q: "Jak sprawdzić, co zamówiła każda osoba?",
      a: "Otwórz kartę Summary i wybierz sekcję danego uczestnika na wykresie, aby zobaczyć jego łączną kwotę oraz przypisane pozycje.",
    },
    {
      q: "Czy CheqSplit przelewa pieniądze?",
      a: "Nie. CheqSplit oblicza salda i zapisuje rozliczenia wprowadzone przez uczestników. Nie wysyła, nie odbiera ani nie przetwarza płatności.",
    },
    {
      q: "Czy mogę dodać ten rachunek z restauracji do wyjazdu?",
      a: "Tak. Najpierw zakończ podział rachunku według pozycji, następnie otwórz kartę Rachunki w wyjeździe i wybierz Add Bill.",
    },
  ],
  a11y: {
    hero: "Zeskanuj rachunek i podziel go według zamówionych pozycji",
    nav: splitBillEn.a11y.nav,
    stepsRegion: "Jak podzielić rachunek w restauracji z CheqSplit",
    features: "Jak podzielić rachunek w restauracji z CheqSplit",
    faq: "Najczęstsze pytania",
  },
};
