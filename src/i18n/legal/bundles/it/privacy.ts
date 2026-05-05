import type { PrivacyPage } from "../../types";

const link = (href: string, text: string) =>
  `<a class="font-medium text-brand-600 underline hover:text-brand-700" href="${href}">${text}</a>`;

export const privacyIt: PrivacyPage = {
  metaTitle: "Informativa sulla privacy — CheqSplit",
  metaDescription:
    "Come CheqSplit raccoglie, utilizza e protegge le Sue informazioni quando utilizza la nostra applicazione mobile.",
  h1: "Informativa sulla privacy",
  lastUpdatedPrefix: "Ultimo aggiornamento:",
  lastUpdatedDate: "25 marzo 2026",
  intro:
    'CheqSplit («noi», «nostro» o «ci») si impegna a proteggere la Sua privacy. La presente Informativa sulla privacy spiega come raccogliamo, utilizziamo e tuteliamo le Sue informazioni quando utilizza la nostra applicazione mobile.',
  s1Title: "1 — Informazioni che raccogliamo",
  s1Intro:
    "CheqSplit raccoglie solo i dati minimi necessari per offrire la funzionalità di divisione delle spese:",
  s1Bullets: [
    {
      label: "Autenticazione",
      text: "Può usare CheqSplit con una sessione anonima oppure collegare o accedere con e-mail e password (memorizzate e verificate da Firebase Authentication) oppure accedere con Google. Se usa e-mail/password o Google, riceviamo gli identificativi che Firebase associa al Suo account (in genere l’e-mail e, per Google, il nome) così può accedere da altri dispositivi e recuperare l’accesso. Le password sono gestite da Firebase; non memorizziamo la Sua password in chiaro.",
    },
    {
      label: "Dati di conti e viaggi",
      text: "Informazioni che inserisce volontariamente, inclusi nomi delle voci, quantità, prezzi, nomi dei partecipanti, nomi dei viaggi e dati correlati alle spese condivise.",
    },
    {
      label: "Immagini degli scontrini e scansione",
      text: "Le foto che scatta o importa possono essere analizzate sul dispositivo tramite riconoscimento del testo locale (OCR). Quando la scansione intelligente degli scontrini è attiva nell’app, parti dell’immagine dello scontrino e/o del testo estratto possono essere inviate al servizio di IA generativa di Google (Gemini) per aiutare a rilevare righe e totali. Verifichi e corregga sempre le voci prima di condividere un conto.",
    },
    {
      label: "Abbonamenti",
      text: "Se acquista un piano premium, Apple elabora il pagamento. Utilizziamo RevenueCat per convalidare i diritti; RevenueCat riceve un identificativo utente dell’app e dati relativi all’acquisto come descritto nella loro policy.",
    },
    {
      label: "Informazioni sul dispositivo",
      text: "Dati di base sul dispositivo e diagnostica per il funzionamento dell’app e i report sugli arresti anomali.",
    },
  ],
  s2Title: "2 — Come utilizziamo le Sue informazioni",
  s2Intro: "Utilizziamo le informazioni raccolte per:",
  s2List: [
    "Fornire funzionalità di divisione e condivisione dei conti",
    "Consentire la collaborazione in tempo reale con altri partecipanti",
    "Conservare la cronologia dei Suoi conti per comodità",
    "Migliorare le prestazioni dell’app e correggere errori",
  ],
  s3Title: "3 — Archiviazione e sicurezza dei dati",
  s3Intro: "I Suoi dati sono archiviati in modo sicuro tramite i servizi Google Firebase:",
  s3List: [
    "I dati dei conti sono memorizzati in Firebase Realtime Database con regole di sicurezza che assicurano che solo i partecipanti autorizzati possano accedere a conti specifici.",
    "I dati sono crittografati in transito tramite HTTPS.",
    "Non memorizziamo informazioni di pagamento né elaboriamo pagamenti.",
  ],
  s4Title: "4 — Condivisione dei dati",
  s4Intro:
    "Non vendiamo, scambiamo o affittiamo le Sue informazioni personali a terzi. I Suoi dati possono essere condivisi solo:",
  s4List: [
    "Con altri partecipanti che invita a dividere un conto (possono vedere le voci del conto e il nome visualizzato da Lei scelto)",
    "Con fornitori di servizi (Firebase/Google) per hosting e infrastruttura",
    "Se richiesto dalla legge o per proteggere i nostri diritti",
  ],
  s5Title: "5 — Conservazione dei dati",
  s5Body:
    "I dati dei conti sono conservati finché li mantiene nell’app. Può eliminare i Suoi conti in qualsiasi momento. Le sessioni completate sono memorizzate localmente sul dispositivo e possono essere cancellate dalle impostazioni dell’app.",
  s6Title: "6 — I Suoi diritti",
  s6Intro: "Ha il diritto di:",
  s6List: [
    "Accedere ai dati memorizzati nell’app",
    "Eliminare i Suoi conti e la cronologia delle sessioni",
    "Richiedere informazioni sui dati in nostro possesso",
  ],
  s7Title: "7 — Privacy dei minori",
  s7Body:
    "CheqSplit non è destinato a minori di 13 anni. Non raccogliamo consapevolmente informazioni personali da minori.",
  s8Title: "8 — Servizi di terze parti",
  s8Intro: "La nostra app utilizza i seguenti servizi di terze parti:",
  s8Bullets: [
    {
      label: "Google Firebase",
      text: `Autenticazione, Realtime Database e infrastruttura correlata. Link: ${link("https://firebase.google.com/support/privacy", "https://firebase.google.com/support/privacy")}`,
    },
    {
      label: "Google AI (Gemini)",
      text: `Elaborazione cloud facoltativa per la comprensione degli scontrini quando la scansione intelligente è disponibile. Link: ${link("https://ai.google.dev/gemini-api/terms", "https://ai.google.dev/gemini-api/terms")} e si applicano le informative sulla privacy di Google.`,
    },
    {
      label: "RevenueCat",
      text: `Stato dell’abbonamento e gestione degli acquisti in-app. Link: ${link("https://www.revenuecat.com/privacy", "https://www.revenuecat.com/privacy")}`,
    },
    {
      label: "Apple",
      text: "Distribuzione dell’app e acquisti in-app tramite App Store.",
    },
    {
      label: "OCR sul dispositivo",
      text: "Il riconoscimento del testo dalle immagini degli scontrini può essere eseguito sul dispositivo tramite le API locali di Apple (e su Android, OCR del dispositivo/produttore ove applicabile).",
    },
  ],
  s9Title: "9 — Modifiche alla presente informativa",
  s9Body:
    'Possiamo aggiornare periodicamente la presente Informativa sulla privacy. La informeremo delle modifiche pubblicando la nuova informativa nell’app e aggiornando la data «Ultimo aggiornamento».',
  s10Title: "10 — Contatti",
  s10Intro: "Per domande sulla presente Informativa sulla privacy, ci contatti:",
  emailLabel: "E-mail:",
  developerLabel: "Sviluppatore:",
  developerName: "Lunthemes",
  relatedNavLabel: "Veda anche:",
  relatedTerms: "Termini di servizio",
  relatedDeleteAccount: "Eliminare il Suo account",
  relatedDeleteData: "Eliminare i Suoi dati",
};
