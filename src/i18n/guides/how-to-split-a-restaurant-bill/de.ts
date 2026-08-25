import type { RestaurantBillGuideCopy } from "./types";

export const restaurantBillGuideDe: RestaurantBillGuideCopy = {
  metaTitle: "So teilt ihr eine Restaurantrechnung fair auf | CheqSplit",
  metaDescription: "Prüft den vollständigen Beleg, ordnet persönliche Positionen zu, teilt gemeinsame Positionen unter den richtigen Personen auf und stellt sicher, dass alle Beträge zur Gesamtrechnung passen.",
  h1: "So teilt ihr eine Restaurantrechnung fair auf",
  answer: "Prüft den vollständigen Beleg, ordnet persönliche Positionen zu, teilt gemeinsame Positionen unter den richtigen Personen auf und stellt sicher, dass alle Beträge zur Gesamtrechnung passen.",
  choiceH2: "Wählt zwischen gleicher Aufteilung und Aufteilung nach Positionen",
  choiceBody: "Eine gleichmäßige Aufteilung ist am schnellsten, wenn die Bestellungen ähnlich sind und alle mit demselben Anteil einverstanden sind. Haben die Personen unterschiedliche Speisen oder Getränke bestellt, ist eine Aufteilung nach Positionen meist fairer: Ordnet zuerst jedem die eigenen Bestellungen zu. Gemeinsame Platten, Flaschen oder Desserts sollten nur unter den Personen aufgeteilt werden, die davon hatten. Fügt anschließend Servicegebühren, Steuern und Trinkgeld hinzu, sodass alle Einzelanteile zusammen genau der Rechnungssumme entsprechen. Stimmen die Beträge nicht überein, fehlt wahrscheinlich eine Position oder Gebühr. So basiert die Aufteilung auf der tatsächlichen Rechnung und nicht auf einer groben Schätzung.",
  stepsH2: "Restaurantrechnung in 5 Schritten fair aufteilen",
  steps: [
    { title: "Beleg prüfen", desc: "Prüft jede Position und die Gesamtsumme, bevor ihr mit dem Aufteilen beginnt." },
    { title: "Eigene Bestellungen zuordnen", desc: "Ordnet jeder Person ausschließlich die Speisen und Getränke zu, die sie bestellt hat. Beginnt mit den eindeutigen Positionen." },
    { title: "Gemeinsame Positionen aufteilen", desc: "Berücksichtigt nur die Personen, die eine Platte oder Flasche geteilt haben. Teilt gleichmäßig oder nach einem vereinbarten Anteil." },
    { title: "Offene Beträge prüfen", desc: "Sucht nach nicht zugeordneten Positionen, Scanfehlern sowie Steuern oder Trinkgeld, die noch fehlen." },
    { title: "Ergebnis anzeigen", desc: "Jeder sollte seinen Anteil und den daraus entstehenden Saldo sehen können, damit die Aufteilung noch am Tisch nachvollziehbar ist." }
  ],
  exampleH2: "Beispiel: Eine Restaurantrechnung unter vier Personen aufteilen",
  exampleIntro: "Maya, Noah, Owen und Priya teilen sich eine Rechnung. Maya und Noah teilen außerdem eine Flasche Wein. Auf Speisen und Getränke wird eine Servicegebühr von 10 % erhoben.",
  exampleReceiptCaption: "Rechnung",
  exampleReceiptRows: [
    { item: "Pasta (Maya)", amount: "€15.00" },
    { item: "Burger (Noah)", amount: "€15.00" },
    { item: "Gegrillter Fisch (Owen)", amount: "€20.00" },
    { item: "Salat (Priya)", amount: "€10.00" },
    { item: "Flasche Wein (Maya und Noah)", amount: "€20.00" },
    { item: "Zwischensumme", amount: "€80.00" },
    { item: "Servicegebühr (10 %)", amount: "€8.00" },
    { item: "Rechnungssumme", amount: "€88.00" }
  ],
  exampleShareCaption: "Zu zahlender Betrag",
  exampleShareRows: [
    { person: "Maya (Pasta €15 + halber Wein €10 + Service €2.50)", amount: "€27.50" },
    { person: "Noah (Burger €15 + halber Wein €10 + Service €2.50)", amount: "€27.50" },
    { person: "Owen (Fisch €20 + Service €2.00)", amount: "€22.00" },
    { person: "Priya (Salat €10 + Service €1.00)", amount: "€11.00" },
    { person: "Summe aller vier Anteile", amount: "€88.00" }
  ],
  exampleNote: "Die Servicegebühr wird proportional zu den Speisen und Getränken jeder Person verteilt: Maya und Noah haben jeweils €25 der Zwischensumme von €80, Owen €20 und Priya €10. Zusammen ergeben die vier Anteile genau die Rechnungssumme von €88.",
  productH2: "Restaurantrechnung mit CheqSplit nach Positionen aufteilen",
  productBody: "CheqSplit setzt genau diesen Ablauf um: Restaurantbeleg scannen, Rechnung per Link oder QR-Code teilen, persönliche und gemeinsame Positionen zuordnen, Gebühren und Trinkgeld separat erfassen und sehen, wer wem etwas schuldet. CheqSplit berechnet die Salden, überweist aber kein Geld.",
  productCta: "Restaurantrechnung mit CheqSplit aufteilen",
  faqH2: "Häufige Fragen zum Aufteilen von Restaurantrechnungen",
  faq: [
    {
      q: "Sollte die Rechnung immer gleichmäßig aufgeteilt werden?",
      a: "Nur wenn die Gruppe damit einverstanden ist und die Bestellungen ähnlich sind. Wenn unterschiedlich bestellt wurde, ordnet die Positionen so zu, dass der Betrag jeder Person dem entspricht, was sie tatsächlich hatte.",
    },
    {
      q: "Wie sollte eine gemeinsame Position aufgeteilt werden?",
      a: "Unter den beteiligten Personen – entweder gleichmäßig oder nach einem vereinbarten Prozentsatz, wenn die Anteile unterschiedlich waren.",
    },
    {
      q: "Warum stimmen die Summen manchmal nicht überein?",
      a: "Prüft nicht zugeordnete Positionen, Scan- oder Eingabefehler sowie Steuern oder Trinkgeld unter Gebühren & Trinkgeld, damit die Aufteilung genau der Gesamtsumme auf dem Beleg entspricht.",
    },
  ],
  ctaTitle: "Bereit, die Rechnung direkt am Tisch aufzuteilen?",
  ctaBody: "Scannt die Restaurantrechnung, ordnet die Positionen den Personen zu, die sie bestellt haben, und seht klar, wer wem etwas schuldet.",
  crumbGuides: "Ratgeber",
  crumbCurrent: "Restaurantrechnung",
  colItem: "Position",
  colAmount: "Betrag",
  colPerson: "Person",
  colDue: "Zu zahlender Betrag",
};
