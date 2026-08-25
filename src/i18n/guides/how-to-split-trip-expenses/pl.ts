import type { TripExpensesGuideCopy } from "./types";

export const tripExpensesGuidePl: TripExpensesGuideCopy = {
  metaTitle: "Jak podzielić wydatki na wyjeździe ze znajomymi | CheqSplit",
  metaDescription: "Utwórz jeden wyjazd, zapisuj, kto zapłacił i kto uczestniczył w każdym wydatku, a przed końcem wyjazdu sprawdź salda.",
  h1: "Jak podzielić wydatki na wyjeździe ze znajomymi",
  answer: "Utwórz jeden wyjazd, zapisuj, kto zapłacił i kto uczestniczył w każdym wydatku, a przed końcem wyjazdu sprawdź salda.",
  answerFollow: "Jeśli każdy wydatek zapiszecie na bieżąco, na koniec nie będzie trzeba odtwarzać całego rozliczenia od początku.",
  rulesH2: "Ustalcie zasady wydatków przed wyjazdem",
  rulesBody: "Jeszcze przed pierwszą płatnością ustalcie, które koszty dzieli cała grupa, a które dotyczą tylko części osób. Nocleg często jest wspólny dla wszystkich, ale taksówka czy bilet do muzeum już niekoniecznie. Osobno zapisuj, kto zapłacił i kto uczestniczył w danym wydatku, ponieważ osoba wykładająca pieniądze nie zawsze należy do grupy dzielącej koszt. Dodawaj wydatki, dopóki kwota i uczestnicy są jeszcze świeżo w pamięci. Jeśli korzystacie z kilku walut, wcześniej ustalcie sposób ich zapisywania — CheqSplit nie przelicza walut. Jasne zasady od początku pomagają utrzymać spójne rozliczenie aż do końca.",
  stepsH2: "Jak podzielić wydatki na wyjeździe w 5 krokach",
  steps: [
    { title: "Utwórz wyjazd z wyprzedzeniem", desc: "Nadaj mu nazwę, dodaj uczestników i wpisz istniejące już koszty, aby cała grupa zaczynała od jednego wspólnego zestawienia." },
    { title: "Zapisuj, kto zapłacił", desc: "Przy każdym wydatku jasno wskaż płatnika — dotyczy to biletów, noclegu, transportu, restauracji czy aktywności opłaconej za grupę." },
    { title: "Wybierz uczestników", desc: "Uwzględniaj wszystkich tylko wtedy, gdy koszt naprawdę dotyczy całej grupy. Przy taksówce, aktywności czy restauracji wybierz tylko osoby uczestniczące." },
    { title: "Dodawaj wydatki na bieżąco", desc: "Wpisuj kwoty, dopóki dobrze je pamiętasz. W CheqSplit otwórz kartę Wydatki i wybierz Dodaj Wydatek. Każdy uczestnik może dodać wydatek." },
    { title: "Sprawdź salda", desc: "Przed zakończeniem lub eksportem wyjazdu przejrzyj wspólną historię oraz sprawdź, kto komu ile jest winien. Najpierw uzupełnij brakujące wydatki." }
  ],
  exampleH2: "Przykład: podział kosztów weekendowego wyjazdu między cztery osoby",
  exampleIntro: "Alex, Blair, Casey i Dana spędzają razem weekend. Hotel i bilety do muzeum dotyczą wszystkich. Taksówkę dzielą tylko Alex, Blair i Casey.",
  exampleExpenseCaption: "Wydatki",
  exampleExpenseRows: [
    {
      expense: "Hotel",
      payer: "Alex",
      participants: "Alex, Blair, Casey, Dana",
      amount: "€400.00",
    },
    {
      expense: "Taksówka",
      payer: "Blair",
      participants: "Alex, Blair, Casey",
      amount: "€45.00",
    },
    {
      expense: "Bilety do muzeum",
      payer: "Dana",
      participants: "Alex, Blair, Casey, Dana",
      amount: "€80.00",
    }
  ],
  exampleBalanceCaption: "Zapłacono a należny udział",
  exampleBalanceRows: [
    { person: "Alex", paid: "€400.00", share: "€135.00", net: "ma otrzymać €265.00" },
    { person: "Blair", paid: "€45.00", share: "€135.00", net: "jest winien €90.00" },
    { person: "Casey", paid: "€0.00", share: "€135.00", net: "jest winien €135.00" },
    { person: "Dana", paid: "€80.00", share: "€120.00", net: "jest winien €40.00" }
  ],
  exampleSettle: "Blair płaci Alexowi €90, Casey €135, a Dana €40. Te trzy płatności razem dają €265 — dokładnie tyle, ile Alex powinien otrzymać.",
  exampleNote: "Udziały: hotel €100 na osobę; taksówka €15 na osobę dla trzech pasażerów; bilety €20 na osobę. Dana nie jechała taksówką, dlatego jej udział wynosi €120 zamiast €135. CheqSplit oblicza te salda, ale nie wykonuje przelewów.",
  productH2: "Śledź wspólne wydatki na wyjeździe z CheqSplit",
  productBody: "CheqSplit pozwala utworzyć wyjazd, zapisywać płatnika i uczestników każdego wydatku, zachować widoczną wspólną historię i sprawdzać, kto komu ile jest winien. Taksówkę, hotel i bilety dodasz w Wydatki przez Dodaj Wydatek, a szczegółowy rachunek z restauracji w Rachunki przez Add Bill. Po zakończeniu możesz zarchiwizować wyjazd i wyeksportować raport PDF. CheqSplit oblicza salda, ale nie wykonuje przelewów ani nie przelicza walut.",
  productCta: "Śledź wydatki grupowe i wyjazdowe z CheqSplit",
  receiptNoteBefore: "Jeśli wydatkiem na wyjeździe jest szczegółowy rachunek z restauracji, najpierw użyj ",
  receiptNoteLabel: "podziału według pozycji",
  receiptNoteAfter: ", w tym opłat i napiwku. Następnie otwórz kartę Rachunki w wyjeździe i wybierz Add Bill.",
  faqH2: "Najczęstsze pytania o dzielenie wydatków na wyjeździe",
  faq: [
    {
      q: "Czy każdy wydatek musi obejmować wszystkich uczestników?",
      a: "Nie. Wybierz tylko osoby, których dotyczy dany wydatek.",
    },
    {
      q: "Kiedy najlepiej zapisać wydatek?",
      a: "Jak najszybciej, dopóki kwota, osoba płacąca i uczestnicy są jeszcze dobrze znani.",
    },
    {
      q: "Jak należy rozliczyć rachunek z restauracji?",
      a: "Do podziału według pozycji użyj procesu dla paragonu z restauracji, uwzględniając podatek i napiwek. Następnie otwórz kartę Rachunki w wyjeździe i wybierz Add Bill.",
    },
    {
      q: "Czy CheqSplit przelicza waluty?",
      a: "Nie. Przeliczanie walut nie jest potwierdzoną funkcją CheqSplit. Zapisuj kwoty dokładnie tak, jak widnieją przy danym wydatku.",
    },
  ],
  ctaTitle: "Cały wyjazd w jednym wspólnym zestawieniu",
  ctaBody: "Utwórz wyjazd dla grupy, dodawaj wydatki na bieżąco, a CheqSplit pokaże na koniec, kto komu ile jest winien.",
  crumbGuides: "Poradniki",
  crumbCurrent: "Wydatki na wyjazd",
  colExpense: "Wydatek",
  colPayer: "Zapłacił",
  colParticipants: "Uczestnicy",
  colAmount: "Kwota",
  colPerson: "Osoba",
  colPaid: "Zapłacono",
  colShare: "Udział",
  colResult: "Wynik",
};
