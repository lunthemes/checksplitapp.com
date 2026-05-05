import type { PrivacyPage } from "../../types";

const link = (href: string, text: string) =>
  `<a class="font-medium text-brand-600 underline hover:text-brand-700" href="${href}">${text}</a>`;

export const privacyDe: PrivacyPage = {
  metaTitle: "Datenschutzerklärung – CheqSplit",
  metaDescription:
    "Wie CheqSplit Ihre Daten erhebt, verwendet und schützt, wenn Sie unsere mobile Anwendung nutzen.",
  h1: "Datenschutzerklärung",
  lastUpdatedPrefix: "Zuletzt aktualisiert:",
  lastUpdatedDate: "25. März 2026",
  intro:
    'CheqSplit („wir“, „uns“ oder „unser“) setzt sich für den Schutz Ihrer Privatsphäre ein. Diese Datenschutzerklärung erläutert, wie wir Ihre Daten erheben, verwenden und schützen, wenn Sie unsere mobile Anwendung nutzen.',
  s1Title: "1 — Welche Informationen wir erheben",
  s1Intro:
    "CheqSplit erhebt nur die für die Funktionen zum Teilen von Rechnungen erforderlichen Mindestdaten:",
  s1Bullets: [
    {
      label: "Authentifizierung",
      text: "Sie können CheqSplit mit einer anonymen Sitzung nutzen oder ein Konto mit E-Mail und Passwort verknüpfen bzw. sich damit anmelden (gespeichert und verifiziert durch Firebase Authentication) oder sich mit Google anmelden. Bei E-Mail/Passwort oder Google erhalten wir die von Firebase Ihrem Konto zugeordneten Kennungen (in der Regel E-Mail und bei Google Ihren Namen), damit Sie sich auf anderen Geräten anmelden und den Zugang wiederherstellen können. Passwörter werden von Firebase verarbeitet; wir speichern Ihr Passwort nicht im Klartext.",
    },
    {
      label: "Rechnungs- und Reisedaten",
      text: "Informationen, die Sie freiwillig eingeben, einschließlich Artikelbezeichnungen, Mengen, Preise, Namen von Teilnehmenden, Reisenamen und zugehörige Daten zu gemeinsamen Ausgaben.",
    },
    {
      label: "Belegfotos und Scannen",
      text: "Aufnahmen oder importierte Fotos können auf Ihrem Gerät mittels geräteinterner Texterkennung (OCR) ausgewertet werden. Wenn die intelligente Beleg-Erfassung in der App aktiviert ist, können Teile des Belegbildes und/oder extrahierter Text an den generativen KI-Dienst (Gemini) von Google gesendet werden, um Positionssummen und Gesamtbeträge zu erkennen. Bitte prüfen und korrigieren Sie Positionen stets, bevor Sie eine Rechnung teilen.",
    },
    {
      label: "Abonnements",
      text: "Wenn Sie einen Premium-Tarif erwerben, verarbeitet Apple die Zahlung. Wir nutzen RevenueCat zur Prüfung von Berechtigungen; RevenueCat erhält eine App-Benutzerkennung und kaufbezogene Daten wie in deren Richtlinie beschrieben.",
    },
    {
      label: "Geräteinformationen",
      text: "Grundlegende Geräte- und Diagnosedaten für die App-Funktionalität und Absturzberichte.",
    },
  ],
  s2Title: "2 — Wie wir Ihre Informationen verwenden",
  s2Intro: "Wir verwenden die erhobenen Daten, um:",
  s2List: [
    "Funktionen zum Teilen und Aufteilen von Rechnungen bereitzustellen",
    "Echtzeit-Zusammenarbeit mit anderen Teilnehmenden zu ermöglichen",
    "Ihren Rechnungsverlauf zu Ihrer Bequemlichkeit zu speichern",
    "Leistung zu verbessern und Fehler zu beheben",
  ],
  s3Title: "3 — Datenspeicherung und Sicherheit",
  s3Intro: "Ihre Daten werden mit Google Firebase-Diensten sicher gespeichert:",
  s3List: [
    "Rechnungsdaten werden in der Firebase Realtime Database mit Sicherheitsregeln gespeichert, die sicherstellen, dass nur autorisierte Teilnehmende auf bestimmte Rechnungen zugreifen können.",
    "Daten werden bei der Übertragung per HTTPS verschlüsselt.",
    "Wir speichern keine Zahlungsdaten und verarbeiten keine Zahlungen.",
  ],
  s4Title: "4 — Weitergabe von Daten",
  s4Intro:
    "Wir verkaufen, handeln oder vermieten Ihre personenbezogenen Daten nicht an Dritte. Ihre Daten können nur weitergegeben werden:",
  s4List: [
    "An andere Teilnehmende, die Sie zum Teilen einer Rechnung einladen (sie sehen Rechnungspositionen und Ihren gewählten Anzeigenamen)",
    "An Dienstleister (Firebase/Google) für Hosting und Infrastruktur",
    "Wenn dies gesetzlich vorgeschrieben ist oder zum Schutz unserer Rechte erforderlich ist",
  ],
  s5Title: "5 — Aufbewahrung von Daten",
  s5Body:
    "Rechnungsdaten werden so lange aufbewahrt, wie Sie sie in der App behalten. Sie können Ihre Rechnungen jederzeit löschen. Abgeschlossene Sitzungen werden lokal auf Ihrem Gerät gespeichert und können in den App-Einstellungen geleert werden.",
  s6Title: "6 — Ihre Rechte",
  s6Intro: "Sie haben das Recht:",
  s6List: [
    "Auf Ihre in der App gespeicherten Daten zuzugreifen",
    "Ihre Rechnungen und Sitzungsverläufe zu löschen",
    "Informationen über die von uns gespeicherten Daten anzufordern",
  ],
  s7Title: "7 — Datenschutz von Kindern",
  s7Body:
    "CheqSplit richtet sich nicht an Kinder unter 13 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von Kindern.",
  s8Title: "8 — Dienste Dritter",
  s8Intro: "Unsere App nutzt folgende Dienste Dritter:",
  s8Bullets: [
    {
      label: "Google Firebase",
      text: `Authentifizierung, Realtime Database und zugehörige Infrastruktur. Link: ${link("https://firebase.google.com/support/privacy", "https://firebase.google.com/support/privacy")}`,
    },
    {
      label: "Google AI (Gemini)",
      text: `Optionale Cloud-Verarbeitung zum Verständnis von Belegen, wenn intelligente Erfassung verfügbar ist. Link: ${link("https://ai.google.dev/gemini-api/terms", "https://ai.google.dev/gemini-api/terms")}; es gelten die Datenschutzrichtlinien von Google.`,
    },
    {
      label: "RevenueCat",
      text: `Abonnementstatus und Verwaltung von In-App-Käufen. Link: ${link("https://www.revenuecat.com/privacy", "https://www.revenuecat.com/privacy")}`,
    },
    {
      label: "Apple",
      text: "App-Vertrieb und In-App-Käufe über den App Store.",
    },
    {
      label: "Geräteinternes OCR",
      text: "Die Texterkennung aus Belegbildern kann auf Ihrem Gerät mit den geräteinternen APIs von Apple ausgeführt werden (und unter Android die OCR des Geräts/Herstellers, soweit zutreffend).",
    },
  ],
  s9Title: "9 — Änderungen dieser Richtlinie",
  s9Body:
    'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir informieren Sie über Änderungen, indem wir die neue Datenschutzerklärung in der App veröffentlichen und das Datum „Zuletzt aktualisiert“ anpassen.',
  s10Title: "10 — Kontakt",
  s10Intro: "Bei Fragen zu dieser Datenschutzerklärung kontaktieren Sie uns:",
  emailLabel: "E-Mail:",
  developerLabel: "Entwickler:",
  developerName: "Lunthemes",
  relatedNavLabel: "Siehe auch:",
  relatedTerms: "Nutzungsbedingungen",
  relatedDeleteAccount: "Konto löschen",
  relatedDeleteData: "Daten löschen",
};
