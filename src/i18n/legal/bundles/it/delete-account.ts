import type { DeleteAccountPage } from "../../types";

const mail = '<a class="font-medium text-brand-600 underline hover:text-brand-700" href="mailto:support@cheqsplitapp.com">support@cheqsplitapp.com</a>';

export const deleteAccountIt: DeleteAccountPage = {
  metaTitle: "Eliminare il Suo account — CheqSplit",
  metaDescription:
    "Come richiedere l’eliminazione del Suo account CheqSplit e dei dati personali associati.",
  h1: "Eliminare il Suo account",
  lastUpdatedPrefix: "Ultimo aggiornamento:",
  lastUpdatedDate: "16 aprile 2026",
  intro:
    `Questa pagina spiega come richiedere l’eliminazione del Suo account CheqSplit e dei dati personali associati trattati da <strong>CheqSplit</strong> (l’app elencata su Google Play in questa scheda sviluppatore).`,
  howTitle: "Come richiedere l’eliminazione dell’account",
  howSteps: [
    `Invii un’e-mail a ${mail} dall’indirizzo collegato al Suo account CheqSplit (lo stesso usato per Firebase / accesso Google, se applicabile).`,
    "Usi l’oggetto: <strong>Richiesta di eliminazione account</strong>.",
    "Nel messaggio indichi chiaramente che desidera eliminare il Suo account CheqSplit e i dati associati. Se ha effettuato l’accesso con Google, menzioni l’e-mail dell’account Google così possiamo associare la Sua identità.",
  ],
  howNote:
    "Possiamo rispondere per confermare la Sua identità prima di elaborare la richiesta. Se non possiamo verificarla, possiamo chiedere ulteriori informazioni.",
  whatDeleteTitle: "Cosa eliminiamo",
  whatDeleteIntro: "Dopo aver elaborato una richiesta verificata, miriamo a eliminare o anonimizzare:",
  whatDeleteList: [
    "I dati del profilo di autenticazione nel nostro backend (es. record utente Firebase Authentication associato al Suo account).",
    "I dati dell’app memorizzati sotto il Suo identificativo utente nei nostri database (es. viaggi, conti e contenuti correlati legati al Suo account), soggetti ai vincoli tecnici e legali indicati di seguito.",
  ],
  retainTitle: "Cosa può essere conservato (e perché)",
  retainBullets: [
    {
      label: "Dati aggregati o de-identificati",
      text: "che non possano essere ragionevolmente ricondotti a Lei.",
    },
    {
      label: "Registrazioni che dobbiamo conservare",
      text: "per un periodo limitato ove richiesto dalla legge (ad esempio obblighi fiscali, contabili o di prevenzione delle frodi).",
    },
    {
      label: "Dati solo sul Suo dispositivo",
      text: "fino a quando non disinstalla l’app o cancella i dati dell’app; non possiamo cancellare da remoto il telefono di un altro utente. Altri partecipanti possono conservare copie di conti condivisi che hanno già ricevuto.",
    },
    {
      label: "Registrazioni di abbonamento e acquisto",
      text: "elaborate da Apple o Google e dai nostri fornitori di pagamento/abbonamento possono essere conservate secondo le loro policy e i requisiti legali; l’eliminazione del Suo account CheqSplit non elimina le ricevute nei sistemi di fatturazione App Store / Play.",
    },
  ],
  timingTitle: "Tempistiche",
  timingBody:
    "Elaboreremo le richieste di eliminazione verificate entro un periodo ragionevole, in genere entro <strong>30 giorni</strong>, salvo che la legge o circostanze eccezionali (es. controversia o indagine su abusi) richiedano un periodo più lungo.",
  privacySeeAlso: "Per le pratiche generali sulla privacy, veda la nostra",
  privacyLinkText: "Informativa sulla privacy",
  relatedNavLabel: "Correlati:",
  relatedDeleteData: "Eliminare i Suoi dati (senza eliminare l’account)",
  relatedTerms: "Termini di servizio",
};
