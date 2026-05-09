import type { DeleteAccountPage } from "../../types";

const mail = '<a class="font-medium text-brand-600 underline hover:text-brand-700" href="mailto:support@cheqsplitapp.com">support@cheqsplitapp.com</a>';

export const deleteAccountDe: DeleteAccountPage = {
  metaTitle: "Konto löschen – CheqSplit",
  metaDescription:
    "So beantragen Sie die Löschung Ihres CheqSplit-Kontos und der zugehörigen personenbezogenen Daten.",
  h1: "Konto löschen",
  lastUpdatedPrefix: "Zuletzt aktualisiert:",
  lastUpdatedDate: "16. April 2026",
  intro:
    `Auf dieser Seite erfahren Sie, wie Sie die Löschung Ihres CheqSplit-Kontos und der zugehörigen personenbezogenen Daten beantragen können, die von <strong>CheqSplit</strong> verarbeitet werden (die unter diesem Entwickler-Eintrag im Google Play gelistete App).`,
  howTitle: "So beantragen Sie die Kontolöschung",
  howSteps: [
    `Senden Sie eine E-Mail an ${mail} von der E-Mail-Adresse, die mit Ihrem CheqSplit-Konto verknüpft ist (dieselbe Adresse wie für Firebase / Google-Anmeldung, falls zutreffend).`,
    "Verwenden Sie die Betreffzeile: <strong>Antrag auf Kontolöschung</strong>.",
    "Geben Sie in der Nachricht klar an, dass Sie Ihr CheqSplit-Konto und die zugehörigen Daten löschen möchten. Wenn Sie sich mit Google angemeldet haben, nennen Sie die E-Mail-Adresse des Google-Kontos, damit wir Ihre Identität zuordnen können.",
  ],
  howNote:
    "Wir können vor der Bearbeitung antworten, um Ihre Identität zu bestätigen. Wenn wir den Antrag nicht verifizieren können, bitten wir ggf. um zusätzliche Informationen.",
  whatDeleteTitle: "Was wir löschen",
  whatDeleteIntro: "Nach Bearbeitung eines verifizierten Antrags streben wir an, Folgendes zu löschen oder zu anonymisieren:",
  whatDeleteList: [
    "Ihre Authentifizierungsprofildaten in unserem Backend (z. B. den Firebase-Authentication-Benutzerdatensatz zu Ihrem Konto).",
    "Ihre App-Daten, die in unseren Datenbanken unter Ihrer Benutzerkennung gespeichert sind (z. B. Reisen, Rechnungen und zugehörige Inhalte, die mit Ihrem Konto verknüpft sind), vorbehaltlich technischer und rechtlicher Einschränkungen unten.",
  ],
  retainTitle: "Was ggf. aufbewahrt wird (und warum)",
  retainBullets: [
    {
      label: "Aggregierte oder anonymisierte Daten",
      text: "die Sie nicht mit vertretbarem Aufwand wieder zuordenbar sind.",
    },
    {
      label: "Aufbewahrungspflichtige Unterlagen",
      text: "für begrenzte Zeit, soweit gesetzlich vorgeschrieben (z. B. steuer-, buchhalterische oder betrugspräventive Pflichten).",
    },
    {
      label: "Nur auf Ihrem Gerät gespeicherte Daten",
      text: "bis Sie die App deinstallieren oder App-Daten löschen; wir können das Telefon einer anderen Person nicht aus der Ferne leeren. Andere Teilnehmende können Kopien geteilter Rechnungen behalten, die sie bereits erhalten haben.",
    },
    {
      label: "Abonnement- und Kaufdaten",
      text: "die von Apple oder Google und unseren Zahlungs-/Abonnementanbietern verarbeitet werden, können gemäß deren Richtlinien und gesetzlichen Anforderungen aufbewahrt werden; die Löschung Ihres CheqSplit-Kontos löscht keine Belege in den Abrechnungssystemen des App Store / Play.",
    },
  ],
  timingTitle: "Bearbeitungszeit",
  timingBody:
    "Wir bearbeiten verifizierte Löschanträge innerhalb eines angemessenen Zeitraums, in der Regel innerhalb von <strong>30 Tagen</strong>, sofern kein längerer Zeitraum gesetzlich vorgeschrieben ist oder außergewöhnliche Umstände vorliegen (z. B. Streit- oder Missbrauchsuntersuchung).",
  privacySeeAlso: "Allgemeine Datenschutzpraktiken finden Sie in unserer",
  privacyLinkText: "Datenschutzerklärung",
  relatedNavLabel: "Verwandt:",
  relatedDeleteData: "Daten löschen (ohne Kontolöschung)",
  relatedTerms: "Nutzungsbedingungen",
};
