import type { Dictionary } from "../types";

export const de: Dictionary = {
  meta: {
    title: "App zum Teilen von Ausgaben mit Freunden | CheqSplit",
    description:
      "Scannt Restaurantbelege, erfasst gemeinsame Ausgaben und behaltet eure Salden im Blick.",
    ogDescription:
      "Ausgaben fair aufteilen: Belege scannen, gemeinsame Kosten verfolgen, Saldo kennen. Für Restaurants, Gruppenreisen, Wohngemeinschaft und Familie.",
    twitterDescription:
      "Gemeinsame Kosten teilen, ohne Taschenrechner, Excel und endlose Chats – CheqSplit rechnet mit.",
    softwareDescription:
      "CheqSplit hilft dir, Ausgaben zu teilen, Belege zu scannen, geteilte Kosten zu verfolgen und zu sehen, wer wem wie viel schuldet – im Alltag, auf Reisen und in Gruppen.",
  },
  nav: {
    features: "Funktionen",
    how: "So funktioniert's",
    useCases: "Einsatzbereiche",
    faq: "FAQ",
    restaurant: "Restaurantrechnung",
    groupExpenses: "Gruppenausgaben",
    guides: "Ratgeber",
  },
  header: { download: "Kostenlos herunterladen" },
  hero: {
    title: "Teilt Ausgaben mit Freunden und seht, wer wem etwas schuldet",
    body: "Scannt Restaurantbelege, erfasst gemeinsame Ausgaben und behaltet eure Salden im Blick. Ladet Freunde aus früheren Gruppen ein und besprecht Kosten im Gruppenchat oder direkt miteinander.",
    alts: [
      "CheqSplit-Startseite mit der aktuellen Gruppe",
      "Gruppenübersicht mit den Beiträgen der Teilnehmer",
      "CheqSplit: Rechnung splitten, Kassenbon-Zeilen",
    ],
  },
  heroSlide2: {
    title: "Restaurantrechnungen schneller aufteilen",
    description: "Scanne den Beleg, ordne die Artikel zu und sieh klar den Anteil jeder Person — ideal für Abendessen mit Freunden, Dates und Gruppenessen.",
    button: "So teilst du Rechnungen und scannst Belege",
  },
  workflows: {
    title: "Wählt, was ihr aufteilen wollt",
    restaurantTitle: "Eine Restaurantrechnung",
    restaurantText:
      "Scannt den Beleg, prüft die Positionen, ladet den Tisch ein und ordnet jede Position den Personen zu, die sie bestellt oder geteilt haben.",
    restaurantCta: "Restaurantrechnung aufteilen",
    groupTitle: "Gruppen- oder Reiseausgaben",
    groupText:
      "Halte gemeinsame Ausgaben in einer Gruppe fest: Erfasse Zahler und Teilnehmer, füge Belege unter Belege hinzu und prüfe unter Übersicht, wer wem etwas schuldet. CheqSplit berechnet Salden; es überweist kein Geld.",
    groupCta: "Gruppenausgaben verfolgen",
  },
  features: {
    title: "Warum CheqSplit?",
    items: [
      {
        title: "Belege in Sekunden erfassen",
        desc: "Scanne den Kassenzettel: Positionen, Steuern, Summe – ohne alles abzutippen.",
      },
      {
        title: "Nach Positionen aufteilen",
        desc: "Weise jede Position der Person zu, die wirklich bestellt hat – statt alles pauschal zu teilen.",
      },
      {
        title: "Alle Gruppenausgaben an einem Ort",
        desc: "Restaurant, Wochenende, Einkauf, gemeinsame Kosten – alles in einer Zeitleiste.",
      },
      {
        title: "Wer schuldet wem",
        desc: "CheqSplit hält die Salden aktuell, damit klar ist, wer wem was zahlt.",
      },
    ],
  },
  how: {
    title: "So funktioniert CheqSplit",
    subtitle:
      "Fünf Schritte: Kosten teilen, Belege scannen, gemeinsame Ausgaben im Blick und sehen, wer wem was schuldet – vom Reisestart bis zu einem verständlichen Report fürs ganze Team.",
    stepPill: (n) => `SCHRITT ${n}`,
    steps: [
      {
        label: "Erstelle eine Gruppe für deine Reise",
        body: "Tippe auf der Startseite auf Gruppe erstellen, gib der Gruppe einen Namen, wähle ihre Währung und lade Teilnehmer per Link oder QR-Code ein.",
        imageAlt: "CheqSplit-Startseite mit der aktuellen Gruppe",
        bullets: [
          "Ruckzuck eingerichtet",
          "Einladung per Link oder QR-Code",
          "Fürs Abendessen, den Urlaub, jede Gruppe",
        ],
      },
      {
        label: "Rechnung nach Posten teilen",
        body: "Alle sehen denselben Beleg auf dem Handy und markieren live eure Posten.",
        imageAlt: "CheqSplit: Kassenbon-Scanner, Aufteilung",
        bullets: [
          "Merkt, wer wofür zahlt",
          "Geteilte Gänge, Trinkgeld, Zuschläge",
          "Auf Anhieb klar, was wer schuldet",
        ],
      },
      {
        label: "Gemeinsame Ausgaben erfassen",
        body: "Öffne Ausgaben und tippe auf Ausgabe hinzufügen. Gib Beschreibung, Betrag und Währung ein, wähle optional eine Kategorie und den Zahler. Wähle für die Teilnehmer Alle oder Benutzerdefiniert. Jeder Teilnehmer kann Ausgaben hinzufügen.",
        imageAlt: "CheqSplit: Handy, geteilte Gruppenausgaben",
        bullets: [
          "Einträge aller beteiligten Leute",
          "Aufteilung fürs ganze Team oder nur einzelne",
          "Alles in einer gemeinsamen Abfolge",
        ],
      },
      {
        label: "Sehen, wer wem was schuldet",
        body: "CheqSplit führt alles zusammen, zeigt die Anteile und wer an wen Geld senden sollte.",
        imageAlt: "CheqSplit: Salden, wer wem was schuldet",
        bullets: [
          "Gesamtsumme der Kosten",
          "Ergebnis pro Person",
          "Eindeutig: wer, wem, wie viel",
        ],
      },
      {
        label: "Reise und Bericht sichern",
        body: "Beendete Reisen archivieren oder einen detaillierten PDF-Report exportieren – Kosten, Saldo, übersichtliches Diagramm.",
        imageAlt: "CheqSplit: Reise-Report, Ausgaben",
        bullets: [
          "Archiv abgeschlossener Reisen",
          "Detaillierter PDF-Report",
          "Summen, Tabellen und Diagramme",
        ],
      },
    ],
  },
  useCases: {
    title: "Für jede Situation mit geteilten Kosten",
    intro:
      "Sobald ihr als Gruppe einkauft, esst, verreist, CheqSplit passt dazu. Du scannst, ordnest zu, berücksichtigst Rabatt und Gebühren, und bekommst am Ende eine klare Abrechnung, ohne in Tabellenkalkulationen zu grübeln.",
    items: [
      {
        title: "Gastronomie",
        desc: "Jede Position, wer was bestellt hat, fairer Abschluss für alle.",
      },
      { title: "Gruppenreisen", desc: "Flug, Zimmer, Verpflegung, ein gemeinsamer Blick fürs Budget." },
      { title: "Wohnen & Familie", desc: "Einkauf, Alltag, alles, was getragen, aber klar abgerechnet werden soll." },
      {
        title: "Einkäufe zu mehreren",
        desc: "Geschenke, Sammelbestellungen, Projekte, bei denen ihr die Kosten teilt.",
      },
    ],
  },
  cta: {
    title: "Bereit, Ausgaben entspannter zu teilen?",
    body: "Hol dir CheqSplit kostenlos – eure Gruppe weiß schnell, wer wem was schuldet, ganz ohne Zettelwirtschaft.",
    sectionAria: "CheqSplit kostenlos herunterladen",
    imgAlt: "CheqSplit Start, Rechnung teilen, Ausgaben verfolgen",
    badgeAlts: {
      appStore: "Kostenlos im App Store laden",
      play: "Kostenlos bei Google Play",
    },
    groupAria: "App kostenlos herunterladen",
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Was ist CheqSplit?",
        a: "Eine kostenlose App, mit der du Kosten teilst, Kassenzettel scannst, alle Ausgaben der Gruppe im Blick behältst und auf einen Blick siehst, wer wem was schuldet – sauber, nachvollziehbar, Zeile für Zeile.",
      },
      {
        q: "Kann ich einen Kassenbon tatsächlich pro Artikel teilen?",
        a: "Ja. Du weist jede Zeile der richtigen Person zu – jeder zahlt nur, was wirklich zu seiner Bestellung gehört.",
      },
      {
        q: "Eignet sich die App für Gruppenreisen?",
        a: "Halte gemeinsame Ausgaben in einer Gruppe fest: Erfasse Zahler und Teilnehmer, füge Belege unter Belege hinzu und prüfe unter Übersicht, wer wem etwas schuldet. CheqSplit berechnet Salden; es überweist kein Geld.",
      },
      {
        q: "Kann ich CheqSplit auch für Restaurant und Wocheneinkauf nutzen?",
        a: "Immer, wenn zu zweit, dritt, viert bezahlt wird. Restaurant, Kaffee, Einkaufsliste, alles, was an einem Strang hängt.",
      },
      {
        q: "Gibt's das auch offline?",
        a: "Manches kannst du lokal auf dem Handy führen, doch geteilte Reisen und Synchronisierung mit deinen Leuten laufen online.",
      },
      {
        q: "Wie lade ich jemanden ein?",
        a: "In CheqSplit Reise anlegen, Ausgaben nachtragen, Reise-Link teilen – wer einsteigt, sieht dieselben Salden wie du.",
      },
    ],
  },
  footer: {
    tagline: "Teilt gemeinsame Ausgaben fair auf – ganz ohne Rätselraten.",
    product: "Produkt",
    company: "Unternehmen",
    legal: "Rechtliches",
    about: "Support",
    contact: "Kontakt",
    privacy: "Datenschutzerklärung",
    terms: "Nutzungsbedingungen",
    deleteAccount: "Konto löschen",
    deleteData: "Daten löschen",
    rights: "Alle Rechte vorbehalten.",
  },
  a11y: {
    keyFeatures: "Hauptfunktionen",
    primaryNav: "Hauptnavigation",
    openMenu: "Menü öffnen",
    howSection: "Ablauf",
    logoHome: "Zur Startseite CheqSplit",
  },
};
