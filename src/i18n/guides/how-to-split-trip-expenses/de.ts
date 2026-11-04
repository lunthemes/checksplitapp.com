import type { TripExpensesGuideCopy } from "./types";

export const tripExpensesGuideDe: TripExpensesGuideCopy = {
  metaTitle: "So teilt ihr Reisekosten mit Freunden | CheqSplit",
  metaDescription: "Erstellt eine gemeinsame Reise, erfasst bei jeder Ausgabe, wer bezahlt hat und wer beteiligt war, und prüft die Salden vor dem Ende der Reise.",
  h1: "So teilt ihr Reisekosten mit Freunden",
  answer: "Erstellt eine gemeinsame Reise, erfasst bei jeder Ausgabe, wer bezahlt hat und wer beteiligt war, und prüft die Salden vor dem Ende der Reise.",
  answerFollow: "Wenn ihr jede Ausgabe direkt eintragt, müsst ihr am Ende der Reise nicht alle Abrechnungen mühsam rekonstruieren.",
  rulesH2: "Regeln für die Ausgaben vor der Reise festlegen",
  rulesBody: "Vereinbart vor der ersten Zahlung, welche Kosten alle und welche nur einzelne Personen tragen. Erfasst den Zahler getrennt von den Teilnehmern und tragt Ausgaben zeitnah ein. Wählt eine Gruppenwährung für die Salden. Prüft bei Ausgaben in anderen Währungen Referenzkurs und Datum, gebt einen manuellen Kurs ein oder verwendet den tatsächlich von der Bank abgebuchten Betrag in der Gruppenwährung. Klare Regeln sorgen für eine einheitliche Übersicht.",
  stepsH2: "Reisekosten in 5 Schritten aufteilen",
  steps: [
    { title: "Erstelle eine Gruppe für deine Reise", desc: "Tippe auf der Startseite auf Gruppe erstellen, gib der Gruppe einen Namen, wähle ihre Währung und lade Teilnehmer per Link oder QR-Code ein." },
    { title: "Festhalten, wer bezahlt hat", desc: "Gebt bei jeder Ausgabe eindeutig an, wer bezahlt hat – bei Tickets, Unterkunft, Transport, Restaurant oder einer Aktivität für die Gruppe." },
    { title: "Teilnehmer auswählen", desc: "Wählt alle nur dann aus, wenn die Kosten tatsächlich alle betreffen. Bei Taxi, Aktivität oder Restaurant markiert ihr nur die beteiligten Personen." },
    { title: "Ausgaben zeitnah hinzufügen", desc: "Öffne Ausgaben und tippe auf Ausgabe hinzufügen. Gib Beschreibung, Betrag und Währung ein, wähle optional eine Kategorie und den Zahler. Wähle für die Teilnehmer Alle oder Benutzerdefiniert. Jeder Teilnehmer kann Ausgaben hinzufügen." },
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
  productBody: "Erstelle auf der Startseite eine Gruppe, wähle ihre Währung und lade Teilnehmer ein. Erfasse Hotel, Taxi oder Tickets unter Ausgaben mit Ausgabe hinzufügen: Betrag, Währung, Zahler und Teilnehmer über Alle oder Benutzerdefiniert; die Kategorie ist optional. Unter Belege öffnet Beleg hinzufügen den Scan oder Upload. Prüfe die Positionen und teile sie nach Positionen oder gleichmäßig auf. Nutze für andere Währungen Referenzkurs und Datum, einen manuellen Kurs oder die tatsächliche Bankabbuchung in der Gruppenwährung. Prüfe Salden, exportiere einen PDF-Bericht oder archiviere die Gruppe. CheqSplit überweist kein Geld.",
  productCta: "Gruppen- und Reisekosten mit CheqSplit verfolgen",
  receiptNoteBefore: "Handelt es sich bei einer Reiseausgabe um eine detaillierte Restaurantrechnung, verwendet zunächst ",
  receiptNoteLabel: "die Aufteilung nach Positionen",
  receiptNoteAfter: " direkt über Belege und Beleg hinzufügen in der Gruppe. Scanne den Beleg oder lade ihn hoch, prüfe Positionen und Gesamtbetrag und teile ihn nach Positionen oder gleichmäßig auf; er wird automatisch mit der Gruppe verknüpft.",
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
      a: "Öffne in der Gruppe Belege und tippe auf Beleg hinzufügen, um einen Beleg zu scannen oder hochzuladen. Prüfe erkannte Positionen und Gesamtbetrag; der Beleg wird automatisch mit der Gruppe verknüpft. Teile ihn anschließend nach Positionen oder gleichmäßig auf.",
    },
    {
      q: "Rechnet CheqSplit Währungen um?",
      a: "Ja. Gruppenausgaben können in einer anderen Währung erfasst werden. Prüfe Referenzkurs und Datum, gib einen manuellen Kurs oder die tatsächliche Bankabbuchung in der Gruppenwährung ein. CheqSplit verwendet den umgerechneten Betrag für die Gruppensalden; es überweist kein Geld.",
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
