import type { DeleteDataPage } from "../../types";

const mail = '<a class="font-medium text-brand-600 underline hover:text-brand-700" href="mailto:support@cheqsplitapp.com">support@cheqsplitapp.com</a>';

export const deleteDataDe: DeleteDataPage = {
  metaTitle: "Daten löschen (ohne Kontolöschung) – CheqSplit",
  metaDescription:
    "CheqSplit-App-Daten entfernen, ohne Ihr Konto zu schließen. Informationen zu Google Play „Daten löschen“.",
  h1: "Daten löschen (ohne Kontolöschung)",
  lastUpdatedPrefix: "Zuletzt aktualisiert:",
  lastUpdatedDate: "16. April 2026",
  intro:
    "<strong>CheqSplit</strong> (diese App im Google Play) ermöglicht es Ihnen, einen Teil oder alle Ihre App-Daten zu entfernen, <strong>ohne</strong> Ihr Konto zu schließen. Diese Seite ist der von Google Play für Anträge zum „Löschen von Daten“ verlangte Link.",
  step1Title: "Schritt 1 — In der App (am schnellsten)",
  step1Intro: "Sie können Inhalte selbst löschen:",
  step1Bullets: [
    {
      label: "Reisen, Rechnungen und Entwürfe",
      text: "Entfernen oder archivieren Sie Einträge in der App, wie von den jeweiligen Bildschirmen unterstützt (z. B. Reise löschen, Rechnung leeren, Entwurf verwerfen).",
    },
    {
      label: "Nur lokale Daten",
      text: "Das Leeren des App-Speichers oder die Deinstallation entfernt Daten, die nur auf Ihrem Gerät gespeichert sind.",
    },
  ],
  step1Note:
    "Änderungen in der App werden auf unsere Server synchronisiert, wenn Ihr Konto Cloud-Funktionen nutzt; das Entfernen von Inhalten in der App entfernt diese Inhalte in Ihrem aktiven Arbeitsbereich, soweit technisch möglich.",
  step2Title: "Schritt 2 — E-Mail für serverseitige Bereinigung",
  step2Intro:
    "Wenn bestimmte Daten aus unseren Systemen entfernt werden sollen (z. B. Kopien, die Sie in der App nicht löschen können, oder ein Fehler), kontaktieren Sie uns:",
  step2Steps: [
    `E-Mail an ${mail} von der mit Ihrem Konto verknüpften Adresse (oder beschreiben Sie, wie wir Sie verifizieren können).`,
    "Betreff: <strong>Antrag auf Datenlöschung (ohne Kontoschließung)</strong>.",
    "Listen Sie auf, was gelöscht werden soll (z. B. „alle Reisen vor 2025“, „Reise mit Namen X“, „Belegbilder vom Datum …“).",
  ],
  step2Note:
    "Wir können Sie bitten, Ihre Identität zu bestätigen, bevor wir mit Ihrem Konto verknüpfte Daten ändern oder löschen.",
  vsTitle: "Was wir löschen vs. behalten",
  vsBullets: [
    {
      label: "Auf Antrag / in der App gelöscht:",
      text: "Von Nutzerinnen und Nutzern erstellte Reisen, Rechnungen, Positionen, Teilnehmendenbezeichnungen und ähnliche App-Inhalte, die Sie entfernen oder die wir nach einem verifizierten E-Mail-Antrag entfernen, vorbehaltlich Sicherungen und gesetzlicher Aufbewahrung unten.",
    },
    {
      label: "Kurzfristig möglicherweise behalten:",
      text: "Verschlüsselte Sicherungen oder Repliken, bis sie in normalen Backup-Zyklen ablaufen (in der Regel kurzfristig).",
    },
    {
      label: "Länger möglicherweise behalten, wenn gesetzlich vorgeschrieben:",
      text: "Minimale Unterlagen zu Steuern, Betrugsprävention oder rechtlichen Verfahren.",
    },
    {
      label: "Kopien anderer Nutzer:",
      text: "Wenn Sie eine Rechnung geteilt haben, können andere Teilnehmende ihre Kopie noch haben; wir können Daten auf dem Gerät einer anderen Person nicht löschen.",
    },
    {
      label: "Abonnements:",
      text: "Der Kaufverlauf bei Apple / Google richtet sich nach Store-Richtlinien; das Löschen von App-Daten löscht keine Store-Belege.",
    },
  ],
  timingTitle: "Bearbeitungszeit",
  timingBody:
    "Wir streben an, verifizierte Anträge auf <strong>teilweise</strong> Löschung innerhalb von <strong>30 Tagen</strong> abzuschließen, sofern Recht oder Sicherheit nichts anderes erfordern.",
  accountInsteadLead: "Um stattdessen Ihr gesamtes Konto zu löschen, siehe",
  accountInsteadLinkText: "Konto löschen",
  accountInsteadTail: ".",
  privacyLead: "Allgemeiner Datenschutz:",
  privacyLinkText: "Datenschutzerklärung",
  privacyTail: ".",
};
