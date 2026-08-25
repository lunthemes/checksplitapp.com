import type { GroupExpenseTrackerCopy } from "./types";
import { groupExpenseTrackerEn } from "./en";

export const groupExpenseTrackerPl: GroupExpenseTrackerCopy = {
  metaTitle: "Śledź wydatki grupy i sprawdzaj, kto komu ile jest winien | CheqSplit",
  metaDescription: "Trzymaj wszystkie wspólne wydatki w jednym miejscu, zapisuj, kto zapłacił i kto uczestniczył w danym koszcie, a w każdej chwili sprawdzaj saldo całej grupy.",
  softwareDescription: "Trzymaj wszystkie wspólne wydatki w jednym miejscu, zapisuj, kto zapłacił i kto uczestniczył w danym koszcie, a w każdej chwili sprawdzaj saldo całej grupy.",
  h1: "Śledź wydatki grupy i sprawdzaj, kto komu ile jest winien",
  heroText: "Trzymaj wszystkie wspólne wydatki w jednym miejscu, zapisuj, kto zapłacił i kto uczestniczył w danym koszcie, a w każdej chwili sprawdzaj saldo całej grupy.",
  downloadCta: "Pobierz za darmo",
  secondaryCta: "",
  nav: {
    how: "Jak działa śledzenie wydatków grupowych",
    faq: "Najczęstsze pytania",
  },
  timelineH2: "Wspólna historia wydatków zamiast informacji rozsianych po wiadomościach",
  timelineText: "Jedna osoba płaci za hotel, druga kupuje bilety, a ktoś inny opłaca taksówkę. Zamiast później przeszukiwać wiadomości, CheqSplit zapisuje wszystkie wydatki w jednym wspólnym zestawieniu.",
  howH2: "Jak działa śledzenie wydatków grupowych",
  steps: [
    {
      title: "Zaproś grupę do wyjazdu",
      text: "Po utworzeniu i nazwaniu wyjazdu zaproś uczestników za pomocą linku lub kodu QR.",
      imageAlt: "Zaproś grupę do wyjazdu",
    },
    {
      title: "Dodaj każdy wydatek",
      text: "Otwórz kartę Wydatki i wybierz Dodaj Wydatek. Wpisz opis i kwotę, wskaż, kto zapłacił, oraz wybierz uczestników danego wydatku.",
      imageAlt: "Dodaj każdy wydatek",
    },
    {
      title: "Wybierz, kto uczestniczył w koszcie",
      text: "Wybierz Everyone lub Custom, a następnie zaznacz tylko osoby, których dotyczył dany wydatek.",
      imageAlt: "Wybierz, kto uczestniczył w koszcie",
    },
    {
      title: "Śledź wspólną historię wydatków",
      text: "Każdy dodany wydatek pojawia się na karcie Wydatki razem z kwotą, osobą płacącą i uczestnikami.",
      imageAlt: "Śledź wspólną historię wydatków",
    },
    {
      title: "Sprawdź, kto komu ile jest winien",
      text: "Otwórz Podsumowanie, aby zobaczyć, kto ma otrzymać pieniądze, a kto powinien zapłacić. CheqSplit oblicza salda, ale nie wykonuje przelewów.",
      imageAlt: "Sprawdź, kto komu ile jest winien",
    }
  ],
  subsetH2: "Dopasuj sposób podziału do konkretnego wydatku",
  subsetText: "Nie każdy koszt dotyczy całej grupy. Taksówkę przypisz tylko pasażerom, bilety osobom, które z nich korzystały, a prawdziwie wspólne wydatki całej grupie. W przypadku szczegółowego rachunku z restauracji użyj karty Rachunki i Add Bill.",
  receiptBridgeH2: "Dodaj do wyjazdu rachunek z restauracji podzielony według pozycji",
  receiptBridgeText: "Jeśli grupa ma szczegółowy rachunek z restauracji, najpierw podziel go według pozycji, uwzględniając opłaty i napiwek. Następnie otwórz kartę Rachunki w wyjeździe i wybierz Add Bill.",
  receiptBridgeCta: "Zobacz, jak działa dzielenie rachunku",
  reportH2: "Zachowaj zestawienie, do którego grupa może później wrócić",
  reportText: "Zarchiwizuj wyjazd i wyeksportuj raport PDF z wydatkami, sumami, tabelami i wykresem. Takie zestawienie łatwiej sprawdzić niż końcowe rozliczenie odtwarzane z pamięci.",
  fitsH2: "Kiedy warto użyć CheqSplit",
  fits: [
    "Weekend lub wakacje ze znajomymi",
    "Wyjazd grupowy z noclegiem, transportem, posiłkami, biletami lub atrakcjami",
    "Kilka wydatków na wyjeździe opłaconych przez różne osoby",
    "Szczegółowy rachunek z restauracji, dodany z karty Rachunki przez Add Bill",
  ],
  faqH2: "Najczęstsze pytania o wydatki grupowe",
  faq: [
    {
      q: "Czy różne osoby mogą dodawać wydatki?",
      a: "Tak. Każdy uczestnik może otworzyć kartę Wydatki i wybrać Dodaj Wydatek. W przypadku szczegółowego rachunku użyj karty Rachunki i Add Bill.",
    },
    {
      q: "Czy wydatek może dotyczyć tylko części osób?",
      a: "Tak. Wybierz Everyone lub Custom, a następnie zaznacz tylko uczestników, którzy rzeczywiście dzielili ten wydatek.",
    },
    {
      q: "Czy mogę zeskanować paragon jako wydatek na wyjeździe?",
      a: "Do szczegółowego podziału według pozycji użyj procesu dla paragonu z restauracji, uwzględniając podatek i napiwek. Następnie otwórz kartę Rachunki w wyjeździe i wybierz Add Bill.",
    },
    {
      q: "Skąd wiadomo, kto powinien komu zapłacić?",
      a: "CheqSplit łączy wydatki grupy i pokazuje wynikowe salda — kto komu ile jest winien. Oblicza udziały, ale nie wykonuje przelewów.",
    },
    {
      q: "Czy mogę wyeksportować wynik?",
      a: "Tak. CheqSplit może wyeksportować szczegółowy raport PDF z kosztami, sumami, tabelami i wykresem. Zakończony wyjazd można również zarchiwizować.",
    },
  ],
  ctaTitle: "Wszystkie wydatki grupy w jednym czytelnym zestawieniu",
  ctaBody: "Utwórz wyjazd, dodawaj wydatki na bieżąco, a CheqSplit pokaże, kto komu ile jest winien.",
  internalRestaurantBefore: "Chcesz podzielić jeden rachunek z kolacji według pozycji? Użyj ",
  internalRestaurantLabel: "dzielenie rachunku z restauracji",
  internalRestaurantAfter: " do skanowania, zapraszania i przypisywania pozycji na żywo.",
  guideBridgeBefore: "Wolisz najpierw metodę krok po kroku? Przeczytaj ",
  guideBridgeLabel: "jak podzielić wydatki na wyjeździe ze znajomymi",
  guideBridgeAfter: ".",
  a11y: {
    nav: groupExpenseTrackerEn.a11y.nav,
    hero: "Śledź wydatki grupy i sprawdzaj, kto komu ile jest winien",
    timeline: "Wspólna historia wydatków zamiast informacji rozsianych po wiadomościach",
    how: "Jak działa śledzenie wydatków grupowych",
    subset: "Dopasuj sposób podziału do konkretnego wydatku",
    receipt: "Dodaj do wyjazdu rachunek z restauracji podzielony według pozycji",
    report: "Zachowaj zestawienie, do którego grupa może później wrócić",
    fits: "Kiedy warto użyć CheqSplit",
    faq: "Najczęstsze pytania o wydatki grupowe",
  },
};
