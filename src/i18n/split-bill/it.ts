import type { SplitBillLocaleCopy } from "./types";
import { splitBillEn } from "./en";

export const splitBillIt: SplitBillLocaleCopy = {
  metaTitle: "Scansiona il conto e dividilo in base a ciò che ha ordinato ciascuno | CheqSplit",
  metaDescription: "Tutto il conto resta in un unico posto. Una persona scansiona lo scontrino con CheqSplit, mentre gli altri entrano tramite link o codice QR e selezionano ciò che hanno ordinato direttamente dal browser.",
  softwareDescription: "Tutto il conto resta in un unico posto. Una persona scansiona lo scontrino con CheqSplit, mentre gli altri entrano tramite link o codice QR e selezionano ciò che hanno ordinato direttamente dal browser.",
  h1: "Scansiona il conto e dividilo in base a ciò che ha ordinato ciascuno",
  heroSubLine1: "",
  heroSubLine2: "",
  heroParagraph: "",
  seoBlockH2: "Un solo conto, condiviso nell'app o nel browser",
  seoBlockP1: "Tutto il conto resta in un unico posto. Una persona scansiona lo scontrino con CheqSplit, mentre gli altri entrano tramite link o codice QR e selezionano ciò che hanno ordinato direttamente dal browser.",
  seoBlockP2: "Non serve che tutti al tavolo installino l'app. CheqSplit tiene insieme voci, partecipanti, pagamenti e risultato finale.",
  seoBlockP3: "",
  useCasesH2: "Un modo di dividere il conto basato sugli ordini reali",
  useCases: [
    { title: "Ordini individuali", text: "Assegna a ogni persona soltanto i piatti e le bevande che ha ordinato." },
    { title: "Voci condivise", text: "Dividi una bottiglia, un piatto condiviso o un dessert solo tra chi lo ha effettivamente consumato." },
    { title: "Servizio e mancia", text: "Aggiungi servizio, imposte e mancia in modo che la somma delle quote corrisponda al totale dello scontrino." },
  ],
  howSectionH2: "Come dividere il conto al ristorante con CheqSplit",
  howSectionSub: "",
  stepsSectionH2: "Come dividere il conto al ristorante con CheqSplit",
  steps: [
    { title: "Scansiona lo scontrino", desc: "Fotografa lo scontrino e CheqSplit trasforma voci e importi in un conto che puoi controllare prima di dividerlo." },
    { title: "Controlla il conto", desc: "Confronta il totale in CheqSplit con quello stampato sullo scontrino e correggi eventuali errori prima che gli altri inizino a selezionare ciò che hanno ordinato." },
    { title: "Dividi il conto", desc: "Correggi nome, quantità o prezzo se la scansione non ha riconosciuto perfettamente qualche dato." },
  ],
  features: [
    { title: "Scansiona lo scontrino del ristorante", desc: "Fotografa lo scontrino e CheqSplit trasforma voci e importi in un conto che puoi controllare prima di dividerlo." },
    { title: "Controlla il totale prima di iniziare", desc: "Confronta il totale in CheqSplit con quello stampato sullo scontrino e correggi eventuali errori prima che gli altri inizino a selezionare ciò che hanno ordinato." },
    { title: "Controlla e modifica ogni voce", desc: "Correggi nome, quantità o prezzo se la scansione non ha riconosciuto perfettamente qualche dato." },
    { title: "Invita gli amici tramite QR code o link", desc: "Condividi il QR code o il link del conto. Tutti possono aprirlo immediatamente." },
    { title: "Continua dal browser senza installare l'app", desc: "I tuoi amici possono aprire il link direttamente nel browser. Non devono installare CheqSplit per partecipare alla divisione." },
    { title: "Dividi il conto online", desc: "Tutti lavorano sullo stesso conto. Selezioni e modifiche restano in un unico posto, senza dover calcolare separatamente chi ha preso cosa." },
    { title: "Ognuno seleziona ciò che ha ordinato", desc: "Ogni partecipante sceglie le proprie voci. Piatti e bevande condivisi possono essere suddivisi tra più persone." },
    { title: "Scopri chi deve quanto e a chi", desc: "Una volta assegnate le voci, CheqSplit calcola gli importi e mostra chiaramente chi deve pagare chi." },
    { title: "Registra i pagamenti effettuati", desc: "Segna i pagamenti già effettuati per mantenere aggiornati i saldi e vedere cosa resta ancora da pagare." },
    { title: "Controlla come è stato diviso il conto", desc: "Puoi tornare al risultato finale in qualsiasi momento e verificare voci, importi e pagamenti di ogni persona." }
  ],
  ctaTitle: "Dividi il conto anche se i tuoi amici non hanno l'app",
  ctaBody: "Scansiona lo scontrino, condividi il link o il QR code e lascia che ognuno selezioni ciò che ha ordinato.",
  groupBridgeBefore: "Devi tenere questo conto del ristorante insieme a hotel, taxi o attività dello stesso gruppo? Aggiungi il conto completato dalla scheda Conti del viaggio con Aggiungi conto, poi continua con ",
  groupBridgeLabel: "il monitoraggio delle spese di gruppo",
  groupBridgeAfter: ".",
  guideBridgeBefore: "Preferisci prima il metodo passo dopo passo? Leggi ",
  guideBridgeLabel: "come dividere il conto al ristorante in modo equo",
  guideBridgeAfter: ".",
  faq: [
    {
      q: "CheqSplit può scansionare uno scontrino del ristorante con tutte le singole voci?",
      a: "Sì. Fotografa lo scontrino, poi controlla il totale, le voci, le quantità e i prezzi rilevati prima di iniziare a dividere il conto.",
    },
    {
      q: "Tutti i partecipanti devono avere l'app CheqSplit?",
      a: "No. Chi crea il conto lo scansiona nell'app, mentre gli invitati possono aprire il link e scegliere Continua nel browser.",
    },
    {
      q: "Posso dividere un conto del ristorante dal browser?",
      a: "Un invitato può aprire il conto condiviso nel browser, selezionare ciò che ha consumato, consultare Riepilogo e seguire il saldo risultante. Per creare e scansionare un nuovo conto serve l'app.",
    },
    {
      q: "I partecipanti possono entrare tramite QR code o link?",
      a: "Sì. Condividi il QR code o il link di invito in modo che tutti possano aprire lo stesso conto del ristorante nell'app o nel browser.",
    },
    {
      q: "Come si divide una stessa voce tra più persone?",
      a: "Ogni persona che ha condiviso quella voce la seleziona. CheqSplit divide automaticamente il prezzo in parti uguali tra tutti i partecipanti che l'hanno selezionata.",
    },
    {
      q: "Cosa faccio se lo scontrino viene scansionato male?",
      a: "Controlla il conto rilevato prima di condividerlo. Correggi una voce o un prezzo, aggiungi eventuali righe mancanti e inserisci imposte o mancia in Tasse e mancia quando necessario.",
    },
    {
      q: "A cosa serve Registra pagamento?",
      a: "Registra che un partecipante ne ha pagato un altro al di fuori di CheqSplit. Aggiorna lo storico del conto condiviso, ma non trasferisce né elabora denaro.",
    },
    {
      q: "Come posso vedere cosa ha consumato ogni persona?",
      a: "Apri la scheda Riepilogo e tocca la sezione di un partecipante nel grafico per vedere il suo totale e le voci incluse.",
    },
    {
      q: "CheqSplit trasferisce denaro?",
      a: "No. CheqSplit calcola i saldi e registra i pagamenti inseriti dai partecipanti. Non invia, riceve o elabora pagamenti.",
    },
    {
      q: "Posso aggiungere questo conto del ristorante a un viaggio?",
      a: "Sì. Completa prima la divisione del conto per voce, poi apri la scheda Conti del viaggio e tocca Aggiungi conto.",
    },
  ],
  a11y: {
    hero: "Scansiona il conto e dividilo in base a ciò che ha ordinato ciascuno",
    nav: splitBillEn.a11y.nav,
    stepsRegion: "Come dividere il conto al ristorante con CheqSplit",
    features: "Come dividere il conto al ristorante con CheqSplit",
    faq: "Domande frequenti",
  },
};
