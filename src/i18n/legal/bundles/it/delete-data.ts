import type { DeleteDataPage } from "../../types";

const mail = '<a class="font-medium text-brand-600 underline hover:text-brand-700" href="mailto:support@cheqsplitapp.com">support@cheqsplitapp.com</a>';

export const deleteDataIt: DeleteDataPage = {
  metaTitle: "Eliminare i Suoi dati (senza eliminare l’account) — CheqSplit",
  metaDescription:
    "Rimuovere i dati dell’app CheqSplit senza chiudere il Suo account. Informazioni Google Play «elimina dati».",
  h1: "Eliminare i Suoi dati (senza eliminare l’account)",
  lastUpdatedPrefix: "Ultimo aggiornamento:",
  lastUpdatedDate: "16 aprile 2026",
  intro:
    "<strong>CheqSplit</strong> (questa app su Google Play) Le consente di rimuovere parte o tutti i dati dell’app <strong>senza</strong> chiudere il Suo account. Questa pagina è il link richiesto da Google Play per le richieste di «eliminazione dati».",
  step1Title: "Passo 1 — Nell’app (più veloce)",
  step1Intro: "Può eliminare i contenuti autonomamente:",
  step1Bullets: [
    {
      label: "Viaggi, conti e bozze",
      text: "Rimuova o archivi elementi dall’app come supportato da ogni schermata (es. eliminare un viaggio, svuotare un conto, scartare una bozza).",
    },
    {
      label: "Dati solo locali",
      text: "Svuotare lo spazio dell’app o disinstallare rimuove i dati memorizzati solo sul dispositivo.",
    },
  ],
  step1Note:
    "Le modifiche che apporta nell’app si sincronizzano con i nostri server quando il Suo account usa funzionalità cloud; rimuovere contenuti nell’app rimuove tali contenuti dal Suo spazio di lavoro attivo ove tecnicamente possibile.",
  step2Title: "Passo 2 — Scrivaci per pulizia lato server",
  step2Intro:
    "Se deve rimuovere dati specifici dai nostri sistemi (es. copie che non può eliminare nell’app, o un errore), ci contatti:",
  step2Steps: [
    `E-mail a ${mail} dall’indirizzo collegato al Suo account (o descriva come possiamo verificarLa).`,
    "Oggetto: <strong>Richiesta di eliminazione dati (senza chiusura account)</strong>.",
    "Elenci cosa eliminare (es. «tutti i viaggi prima del 2025», «viaggio denominato X», «immagini scontrini dalla data …»).",
  ],
  step2Note:
    "Possiamo chiederLe di confermare l’identità prima di modificare o eliminare dati legati al Suo account.",
  vsTitle: "Cosa eliminiamo vs cosa conserviamo",
  vsBullets: [
    {
      label: "Eliminato su richiesta / nell’app:",
      text: "Viaggi, conti, righe, etichette dei partecipanti e contenuti simili creati dall’utente che Lei rimuove o che rimuoviamo dopo una richiesta e-mail verificata, soggetti a backup e vincoli legali indicati sotto.",
    },
    {
      label: "Può essere conservato temporaneamente:",
      text: "Backup o repliche crittografati fino alla scadenza nei cicli di backup usuali (in genere breve termine).",
    },
    {
      label: "Può essere conservato più a lungo se richiesto dalla legge:",
      text: "Registrazioni minime per imposte, prevenzione delle frodi o procedimenti legali.",
    },
    {
      label: "Copie di altri utenti:",
      text: "Se ha condiviso un conto, altri partecipanti possono ancora avere la loro copia; non possiamo eliminare dati sul dispositivo di un’altra persona.",
    },
    {
      label: "Abbonamenti:",
      text: "La cronologia acquisti con Apple / Google segue le policy dello store; eliminare i dati dell’app non cancella le ricevute dello store.",
    },
  ],
  timingTitle: "Tempistiche",
  timingBody:
    "Miriamo a completare richieste verificate di eliminazione <strong>parziale</strong> entro <strong>30 giorni</strong>, salvo che legge o sicurezza richiedano diversamente.",
  accountInsteadLead: "Per eliminare l’intero account invece, veda",
  accountInsteadLinkText: "Eliminare il Suo account",
  accountInsteadTail: ".",
  privacyLead: "Privacy generale:",
  privacyLinkText: "Informativa sulla privacy",
  privacyTail: ".",
};
