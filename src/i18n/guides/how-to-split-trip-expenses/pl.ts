import type { TripExpensesGuideCopy } from "./types";

export const tripExpensesGuidePl: TripExpensesGuideCopy = {
  metaTitle: "Jak podzielić wydatki na wyjeździe ze znajomymi | CheqSplit",
  metaDescription: "Utwórz jeden wyjazd, zapisuj, kto zapłacił i kto uczestniczył w każdym wydatku, a przed końcem wyjazdu sprawdź salda.",
  h1: "Jak podzielić wydatki na wyjeździe ze znajomymi",
  answer: "Utwórz jeden wyjazd, zapisuj, kto zapłacił i kto uczestniczył w każdym wydatku, a przed końcem wyjazdu sprawdź salda.",
  answerFollow: "Jeśli każdy wydatek zapiszecie na bieżąco, na koniec nie będzie trzeba odtwarzać całego rozliczenia od początku.",
  rulesH2: "Ustalcie zasady wydatków przed wyjazdem",
  rulesBody: "Przed pierwszą płatnością ustalcie, które koszty dzielą wszyscy, a które tylko wybrane osoby. Zapisujcie płatnika oddzielnie od uczestników i dodawajcie wydatki na bieżąco. Wybierzcie walutę grupy dla sald. Przy innej walucie sprawdźcie kurs referencyjny i datę, wpiszcie kurs ręcznie lub rzeczywistą kwotę pobraną przez bank w walucie grupy. Jasne zasady zapewniają spójny zapis.",
  stepsH2: "Jak podzielić wydatki na wyjeździe w 5 krokach",
  steps: [
    { title: "Utwórz grupę na wyjazd", desc: "Na ekranie głównym wybierz Utwórz grupę, nadaj jej nazwę, wybierz walutę i zaproś uczestników przez link lub kod QR." },
    { title: "Zapisuj, kto zapłacił", desc: "Przy każdym wydatku jasno wskaż płatnika — dotyczy to biletów, noclegu, transportu, restauracji czy aktywności opłaconej za grupę." },
    { title: "Wybierz uczestników", desc: "Uwzględniaj wszystkich tylko wtedy, gdy koszt naprawdę dotyczy całej grupy. Przy taksówce, aktywności czy restauracji wybierz tylko osoby uczestniczące." },
    { title: "Dodawaj wydatki na bieżąco", desc: "Otwórz Wydatki i wybierz Dodaj wydatek. Wpisz opis, kwotę i walutę, opcjonalnie wybierz kategorię oraz płatnika, a następnie Wszyscy lub wybór własny dla uczestników. Każdy uczestnik może dodać wydatek." },
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
  productBody: "Utwórz grupę na ekranie głównym, wybierz walutę i zaproś uczestników. W Wydatkach wybierz Dodaj wydatek, aby zapisać hotel, taksówkę lub bilety: kwotę, walutę, płatnika i uczestników przez Wszyscy lub wybór własny; kategoria jest opcjonalna. W Paragonach opcja Dodaj paragon otwiera skanowanie lub przesyłanie. Sprawdź pozycje i podziel według pozycji lub po równo. Dla innych walut użyj kursu referencyjnego z datą, kursu ręcznego lub rzeczywistego obciążenia bankowego w walucie grupy. Sprawdź salda, wyeksportuj raport PDF lub zarchiwizuj grupę. CheqSplit nie przelewa pieniędzy.",
  productCta: "Śledź wydatki grupowe i wyjazdowe z CheqSplit",
  receiptNoteBefore: "Jeśli wydatkiem na wyjeździe jest szczegółowy rachunek z restauracji, najpierw użyj ",
  receiptNoteLabel: "podziału według pozycji",
  receiptNoteAfter: " bezpośrednio z zakładki Paragony w grupie przez Dodaj paragon. Zeskanuj lub prześlij paragon, sprawdź pozycje i sumę, a następnie podziel według pozycji lub po równo; paragon automatycznie łączy się z grupą.",
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
      a: "W grupie otwórz Paragony i wybierz Dodaj paragon, aby go zeskanować lub przesłać. Sprawdź rozpoznane pozycje i sumę; paragon automatycznie łączy się z grupą. Następnie podziel go według pozycji lub po równo.",
    },
    {
      q: "Czy CheqSplit przelicza waluty?",
      a: "Tak. Wydatki grupy mogą być w innej walucie. Sprawdź kurs referencyjny i datę, wpisz kurs ręcznie lub rzeczywiste obciążenie bankowe w walucie grupy. CheqSplit używa przeliczonej kwoty do sald grupy; nie przelewa pieniędzy.",
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
