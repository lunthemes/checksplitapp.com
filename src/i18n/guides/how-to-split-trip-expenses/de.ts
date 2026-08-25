import type { TripExpensesGuideCopy } from "./types";

export const tripExpensesGuideDe: TripExpensesGuideCopy = {
  metaTitle: "So teilt ihr Reisekosten mit Freunden | CheqSplit",
  metaDescription: "Erstellt eine gemeinsame Reise, erfasst bei jeder Ausgabe, wer bezahlt hat und wer beteiligt war, und prüft die Salden vor dem Ende der Reise.",
  h1: "So teilt ihr Reisekosten mit Freunden",
  answer: "Erstellt eine gemeinsame Reise, erfasst bei jeder Ausgabe, wer bezahlt hat und wer beteiligt war, und prüft die Salden vor dem Ende der Reise.",
  answerFollow: "Wenn ihr jede Ausgabe direkt eintragt, müsst ihr am Ende der Reise nicht alle Abrechnungen mühsam rekonstruieren.",
  rulesH2: "Regeln für die Ausgaben vor der Reise festlegen",
  rulesBody: "Legt vor der ersten Zahlung fest, welche Kosten die ganze Gruppe teilt und welche nur bestimmte Personen betreffen. Die Unterkunft wird oft von allen geteilt, ein Taxi oder Museumsticket dagegen vielleicht nur von einigen. Erfasst Zahler und Beteiligte getrennt, denn die Person, die bezahlt, muss nicht automatisch Teil der Aufteilung sein. Tragt Ausgaben ein, solange Betrag und Teilnehmer noch frisch im Gedächtnis sind. Wenn ihr mehrere Währungen verwendet, vereinbart vorher, wie ihr sie erfassen wollt – CheqSplit rechnet Währungen nicht um. Klare Regeln von Anfang an sorgen für eine konsistente Übersicht bis zur Schlussabrechnung.",
  stepsH2: "Reisekosten in 5 Schritten aufteilen",
  steps: [
    { title: "Reise frühzeitig anlegen", desc: "Gebt der Reise einen Namen, fügt die beteiligten Personen hinzu und tragt bereits entstandene Kosten ein, damit die Gruppe mit einer gemeinsamen Übersicht startet." },
    { title: "Festhalten, wer bezahlt hat", desc: "Gebt bei jeder Ausgabe eindeutig an, wer bezahlt hat – bei Tickets, Unterkunft, Transport, Restaurant oder einer Aktivität für die Gruppe." },
    { title: "Teilnehmer auswählen", desc: "Wählt alle nur dann aus, wenn die Kosten tatsächlich alle betreffen. Bei Taxi, Aktivität oder Restaurant markiert ihr nur die beteiligten Personen." },
    { title: "Ausgaben zeitnah hinzufügen", desc: "Tragt Beträge ein, solange ihr euch noch gut daran erinnert. Öffnet in CheqSplit den Tab Ausgaben und tippt auf Ausgabe hinzufügen. Jeder Teilnehmer kann eine Ausgabe hinzufügen." },
    { title: "Salden prüfen", desc: "Prüft vor Abschluss oder Export der Reise die gemeinsame Historie und wer wem wie viel schuldet. Ergänzt zuerst alle fehlenden Ausgaben." }
  ],
  exampleH2: "Beispiel: Wochenendtrip unter vier Freunden aufteilen",
  exampleIntro: "Alex, Blair, Casey und Dana verbringen ein Wochenende zusammen. Hotel und Museumstickets betreffen alle vier. Das Taxi wurde nur von Alex, Blair und Casey genutzt.",
  exampleExpenseCaption: "Ausgaben",
  exampleExpenseRows: [
    {
      expense: "Hotel",
      payer: "Alex",
      participants: "Alex, Blair, Casey, Dana",
      amount: "€400.00",
    },
    {
      expense: "Taxi",
      payer: "Blair",
      participants: "Alex, Blair, Casey",
      amount: "€45.00",
    },
    {
      expense: "Museumstickets",
      payer: "Dana",
      participants: "Alex, Blair, Casey, Dana",
      amount: "€80.00",
    }
  ],
  exampleBalanceCaption: "Bezahlt und Anteil",
  exampleBalanceRows: [
    { person: "Alex", paid: "€400.00", share: "€135.00", net: "bekommt €265.00" },
    { person: "Blair", paid: "€45.00", share: "€135.00", net: "schuldet €90.00" },
    { person: "Casey", paid: "€0.00", share: "€135.00", net: "schuldet €135.00" },
    { person: "Dana", paid: "€80.00", share: "€120.00", net: "schuldet €40.00" }
  ],
  exampleSettle: "Blair zahlt Alex €90, Casey zahlt €135 und Dana €40. Zusammen ergeben diese drei Zahlungen €265 – genau den Betrag, den Alex zurückbekommen soll.",
  exampleNote: "Anteile: Hotel €100 pro Person; Taxi €15 pro Person für die drei Mitfahrer; Tickets €20 pro Person. Dana ist nicht Taxi gefahren, deshalb beträgt ihr Anteil €120 statt €135. CheqSplit berechnet diese Salden, überweist aber kein Geld.",
  productH2: "Gemeinsame Reisekosten mit CheqSplit verfolgen",
  productBody: "Mit CheqSplit erstellt ihr eine Reise, erfasst für jede Ausgabe Zahler und Teilnehmer, behaltet die gemeinsame Historie im Blick und seht jederzeit, wer wem etwas schuldet. Taxi, Hotel oder Tickets fügt ihr unter Ausgaben mit Ausgabe hinzufügen hinzu, eine detaillierte Restaurantrechnung unter Rechnungen mit Rechnung Hinzufügen. Nach der Reise könnt ihr sie archivieren und einen PDF-Bericht exportieren. CheqSplit berechnet Salden, überweist aber kein Geld und rechnet keine Währungen um.",
  productCta: "Gruppen- und Reisekosten mit CheqSplit verfolgen",
  receiptNoteBefore: "Handelt es sich bei einer Reiseausgabe um eine detaillierte Restaurantrechnung, verwendet zunächst ",
  receiptNoteLabel: "die Aufteilung nach Positionen",
  receiptNoteAfter: " einschließlich Gebühren und Trinkgeld. Öffnet anschließend den Tab Rechnungen der Reise und tippt auf Rechnung Hinzufügen.",
  faqH2: "Häufige Fragen zum Aufteilen von Reisekosten",
  faq: [
    {
      q: "Betrifft jede Ausgabe automatisch alle Teilnehmer?",
      a: "Nein. Wählt nur die Teilnehmer aus, die an der jeweiligen Ausgabe beteiligt waren.",
    },
    {
      q: "Wann sollte eine Ausgabe eingetragen werden?",
      a: "So bald wie möglich – solange Betrag, Zahler und beteiligte Personen noch eindeutig bekannt sind.",
    },
    {
      q: "Wie sollte eine Restaurantrechnung behandelt werden?",
      a: "Verwendet für die detaillierte Aufteilung den Ablauf für Restaurantbelege, einschließlich Steuern und Trinkgeld. Öffnet danach in der Reise den Tab Rechnungen und tippt auf Rechnung Hinzufügen.",
    },
    {
      q: "Rechnet CheqSplit Währungen um?",
      a: "Nein. Eine Währungsumrechnung ist keine bestätigte Funktion von CheqSplit. Erfasst die Beträge so, wie sie bei der jeweiligen Ausgabe angegeben sind.",
    },
  ],
  ctaTitle: "Die gesamte Reise in einer gemeinsamen Übersicht",
  ctaBody: "Erstellt eine Reise für eure Gruppe, fügt Ausgaben direkt hinzu und lasst CheqSplit am Ende zeigen, wer wem wie viel schuldet.",
  crumbGuides: "Ratgeber",
  crumbCurrent: "Reisekosten",
  colExpense: "Ausgabe",
  colPayer: "Bezahlt von",
  colParticipants: "Teilnehmer",
  colAmount: "Betrag",
  colPerson: "Person",
  colPaid: "Bezahlt",
  colShare: "Anteil",
  colResult: "Ergebnis",
};
