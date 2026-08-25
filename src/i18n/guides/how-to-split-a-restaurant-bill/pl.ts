import type { RestaurantBillGuideCopy } from "./types";

export const restaurantBillGuidePl: RestaurantBillGuideCopy = {
  metaTitle: "Jak sprawiedliwie podzielić rachunek w restauracji | CheqSplit",
  metaDescription: "Sprawdź cały paragon, przypisz pozycje indywidualne, podziel wspólne pozycje między odpowiednie osoby i upewnij się, że wszystkie kwoty zgadzają się z sumą rachunku.",
  h1: "Jak sprawiedliwie podzielić rachunek w restauracji",
  answer: "Sprawdź cały paragon, przypisz pozycje indywidualne, podziel wspólne pozycje między odpowiednie osoby i upewnij się, że wszystkie kwoty zgadzają się z sumą rachunku.",
  choiceH2: "Wybierz równy podział albo podział według pozycji",
  choiceBody: "Równy podział jest najszybszy, gdy zamówienia są podobne i wszyscy zgadzają się podzielić całkowitą kwotę po równo. Jeśli każdy zamówił inne dania lub napoje, zwykle sprawiedliwszy jest podział według pozycji: najpierw przypisz każdej osobie jej własne zamówienie. Wspólne dania, butelki i desery uwzględnij tylko dla osób, które rzeczywiście z nich korzystały. Następnie dodaj opłatę serwisową, podatki i napiwek tak, aby wszystkie udziały razem dawały dokładną sumę z paragonu. Jeśli kwoty się nie zgadzają, prawdopodobnie pominięto pozycję lub opłatę. Dzięki temu podział wynika z rzeczywistego rachunku, a nie z przybliżonych obliczeń.",
  stepsH2: "Jak sprawiedliwie podzielić rachunek w restauracji w 5 krokach",
  steps: [
    { title: "Sprawdź paragon", desc: "Potwierdź każdą pozycję oraz końcową sumę, zanim zaczniecie dzielić kwoty." },
    { title: "Przypisz indywidualne zamówienia", desc: "Każdej osobie przypisz tylko dania i napoje, które zamówiła. Zacznij od oczywistych pozycji." },
    { title: "Podziel wspólne pozycje", desc: "Uwzględnij wyłącznie osoby, które dzieliły dane danie lub butelkę. Podziel koszt po równo albo według uzgodnionych proporcji." },
    { title: "Sprawdź pozostałe kwoty", desc: "Poszukaj nieprzypisanych pozycji, błędów skanowania oraz podatku lub napiwku, które nie zostały jeszcze uwzględnione." },
    { title: "Pokaż wynik", desc: "Każdy powinien zobaczyć swoją część oraz końcowe saldo, aby wszyscy mogli zaakceptować rozliczenie jeszcze przy stole." }
  ],
  exampleH2: "Przykład: podział rachunku w restauracji między cztery osoby",
  exampleIntro: "Maya, Noah, Owen i Priya dzielą jeden rachunek. Maya i Noah dzielą również butelkę wina. Do sumy za jedzenie i napoje doliczane jest 10% opłaty serwisowej.",
  exampleReceiptCaption: "Rachunek",
  exampleReceiptRows: [
    { item: "Makaron (Maya)", amount: "€15.00" },
    { item: "Burger (Noah)", amount: "€15.00" },
    { item: "Grillowana ryba (Owen)", amount: "€20.00" },
    { item: "Sałatka (Priya)", amount: "€10.00" },
    { item: "Butelka wina (Maya i Noah)", amount: "€20.00" },
    { item: "Suma częściowa", amount: "€80.00" },
    { item: "Opłata serwisowa (10%)", amount: "€8.00" },
    { item: "Łączna kwota rachunku", amount: "€88.00" }
  ],
  exampleShareCaption: "Do zapłaty",
  exampleShareRows: [
    { person: "Maya (makaron €15 + połowa wina €10 + serwis €2.50)", amount: "€27.50" },
    { person: "Noah (burger €15 + połowa wina €10 + serwis €2.50)", amount: "€27.50" },
    { person: "Owen (ryba €20 + serwis €2.00)", amount: "€22.00" },
    { person: "Priya (sałatka €10 + serwis €1.00)", amount: "€11.00" },
    { person: "Suma czterech udziałów", amount: "€88.00" }
  ],
  exampleNote: "Opłata serwisowa jest rozdzielana proporcjonalnie do wartości jedzenia i napojów każdej osoby: Maya i Noah mają po €25 z sumy częściowej €80, Owen €20, a Priya €10. Cztery udziały razem dają dokładnie €88, czyli całkowitą kwotę rachunku.",
  productH2: "Podziel rachunek w restauracji według pozycji z CheqSplit",
  productBody: "CheqSplit realizuje ten sam proces: skanuje paragon, pozwala udostępnić rachunek przez link lub kod QR, przypisać indywidualne i wspólne pozycje, osobno uwzględnić opłaty i napiwek oraz sprawdzić, kto komu ile jest winien. CheqSplit oblicza saldo, ale nie wykonuje przelewów.",
  productCta: "Podziel rachunek z restauracji z CheqSplit",
  faqH2: "Najczęstsze pytania o dzielenie rachunku",
  faq: [
    {
      q: "Czy rachunek zawsze powinien być dzielony po równo?",
      a: "Tylko jeśli cała grupa się na to zgadza, a zamówienia są podobne. Jeśli każdy zamówił coś innego, przypisz pozycje tak, aby kwota każdej osoby odpowiadała temu, co rzeczywiście zamówiła.",
    },
    {
      q: "Jak podzielić wspólną pozycję?",
      a: "Między osoby, które ją dzieliły — po równo albo według uzgodnionych proporcji, jeśli udziały nie były jednakowe.",
    },
    {
      q: "Dlaczego czasami sumy się nie zgadzają?",
      a: "Sprawdź nieprzypisane pozycje, błędy skanowania lub ręcznego wpisywania oraz podatek lub napiwek w Opłaty i Napiwek, aby podział zgadzał się z całkowitą kwotą paragonu.",
    },
  ],
  ctaTitle: "Gotowi podzielić rachunek jeszcze przy stole?",
  ctaBody: "Zeskanuj rachunek, przypisz pozycje osobom, które je zamówiły, i od razu sprawdź, kto komu ile jest winien.",
  crumbGuides: "Poradniki",
  crumbCurrent: "Rachunek w restauracji",
  colItem: "Pozycja",
  colAmount: "Kwota",
  colPerson: "Osoba",
  colDue: "Do zapłaty",
};
