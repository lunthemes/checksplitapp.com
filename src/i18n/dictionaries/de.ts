import type { Dictionary } from "../types";

export const de: Dictionary = {
  meta: {
    title: "CheqSplit: Ausgaben teilen, Belege scannen, Gruppenkosten im Blick",
    description:
      "Teile Ausgaben, scanne Kassenzettel, behalte geteilte Kosten im Blick und sieh schnell, wer wem wie viel schuldet – im Restaurant, auf Reisen, beim Einkauf oder in der Gruppe.",
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
  },
  header: { download: "App herunterladen" },
  hero: {
    title: "Ausgaben teilen, Belege scannen, Saldo kennen",
    body: "Teile Ausgaben, scanne Belege und behalte im Blick, wer wem was schuldet – nach dem Abendessen, auf dem Wochenend-Trip, beim Einkauf oder mit deiner Gruppe.",
    alts: [
      "CheqSplit: Gruppenreise, gemeinsame Ausgaben",
      "CheqSplit-App: geteilte Ausgaben im Überblick",
      "CheqSplit: Rechnung splitten, Kassenbon-Zeilen",
    ],
  },
  features: {
    title: "Warum CheqSplit?",
    items: [
      {
        title: "Belege in Sekunden erfassen",
        desc: "Scanne den Kassenzettel: Positionen, Steuern, Summe – ohne alles abzutippen.",
      },
      {
        title: "Pro Zeile teilen",
        desc: "Weise jede Position der Person zu, die wirklich bestellt hat – statt alles pauschal zu teilen.",
      },
      {
        title: "Alles an einem Ort",
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
        label: "Eine Reise in wenigen Sekunden anlegen",
        body: "Namen wählen, Leute per Link oder QR-Code einladen und geteilte Kosten sofort richten.",
        imageAlt: "CheqSplit: Gruppenreise, Übersicht",
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
        body: "Tragt ein, wer gezahlt hat und mit wem jeder Betrag geteilt werden soll.",
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
    body: "CheqSplit sorgt dafür, dass eure Gruppe schnell weiß, wer wem was schuldet – ganz ohne Zettelwirtschaft.",
    sectionAria: "CheqSplit herunterladen",
    imgAlt: "CheqSplit Start, Rechnung teilen, Ausgaben verfolgen",
    badgeAlts: {
      appStore: "Im App Store herunterladen",
      play: "Bei Google Play",
    },
    playSoon: "Bald",
    playDisabledHint: "Noch nicht verfügbar",
    groupAria: "App herunterladen",
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Was ist CheqSplit?",
        a: "Eine App, mit der du Kosten teilst, Kassenzettel scannst, alle Ausgaben der Gruppe im Blick behältst und auf einen Blick siehst, wer wem was schuldet – sauber, nachvollziehbar, Zeile für Zeile.",
      },
      {
        q: "Kann ich einen Kassenbon tatsächlich pro Artikel teilen?",
        a: "Ja. Du weist jede Zeile der richtigen Person zu – jeder zahlt nur, was wirklich zu seiner Bestellung gehört.",
      },
      {
        q: "Eignet sich die App für Gruppenreisen?",
        a: "Ja. Du legst eine Reise an, trägst geteilte Ausgaben ein, hängst Belegfotos daran und bekommst am Ende einen klaren Überblick, wer wem wie viel schuldet.",
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
    tagline: "Gruppenkosten leichter teilen: fair, klar, ohne doppelte Mathe-Runden.",
    product: "Produkt",
    company: "Unternehmen",
    legal: "Rechtliches",
    about: "Über uns",
    contact: "Kontakt",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
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
