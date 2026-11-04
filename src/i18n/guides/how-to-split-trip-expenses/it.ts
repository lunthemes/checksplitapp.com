import type { TripExpensesGuideCopy } from "./types";

export const tripExpensesGuideIt: TripExpensesGuideCopy = {
  metaTitle: "Come dividere le spese di viaggio con gli amici | CheqSplit",
  metaDescription: "Crea un unico viaggio, registra chi ha pagato e chi ha partecipato a ogni spesa e controlla i saldi prima della fine del viaggio.",
  h1: "Come dividere le spese di viaggio con gli amici",
  answer: "Crea un unico viaggio, registra chi ha pagato e chi ha partecipato a ogni spesa e controlla i saldi prima della fine del viaggio.",
  answerFollow: "Registrando ogni spesa man mano, il gruppo non dovrà rifare tutti i conti alla fine del viaggio.",
  rulesH2: "Stabilite le regole per le spese prima di partire",
  rulesBody: "Prima del primo pagamento, concordate quali costi dividere tra tutti e quali riguardano solo alcune persone. Registrate separatamente chi paga e i partecipanti e aggiungete subito ogni spesa. Scegliete una valuta di gruppo per i saldi. Per spese in un’altra valuta, controllate il tasso di riferimento e la data, inserite un tasso manuale oppure l’importo effettivamente addebitato dalla banca nella valuta del gruppo. Regole chiare mantengono coerente il registro.",
  stepsH2: "Come dividere le spese di viaggio in 5 passaggi",
  steps: [
    { title: "Crea un gruppo per il viaggio", desc: "Dalla schermata iniziale, tocca Crea gruppo, assegna un nome, scegli la valuta e invita i partecipanti tramite link o codice QR." },
    { title: "Registra chi ha pagato", desc: "Indica chiaramente chi ha pagato ogni spesa: biglietti, alloggio, trasporti, ristorante o un'attività anticipata per il gruppo." },
    { title: "Seleziona i partecipanti", desc: "Includi tutti solo quando la spesa riguarda davvero l'intero gruppo. Per un taxi, un'attività o un ristorante, seleziona soltanto le persone coinvolte." },
    { title: "Aggiungi le spese subito", desc: "Apri Spese e tocca Aggiungi spesa. Inserisci descrizione, importo e valuta, scegli facoltativamente una categoria e chi ha pagato, poi Tutti o Personalizzato per i partecipanti. Ogni partecipante può aggiungere una spesa." },
    { title: "Controlla i saldi", desc: "Prima di chiudere o esportare il viaggio, verifica lo storico condiviso e chi deve quanto e a chi. Aggiungi prima eventuali spese mancanti." }
  ],
  exampleH2: "Esempio: dividere le spese di un weekend tra quattro amici",
  exampleIntro: "Alex, Blair, Casey e Dana trascorrono un weekend insieme. Hotel e biglietti del museo riguardano tutti. Il taxi viene condiviso solo da Alex, Blair e Casey.",
  exampleExpenseCaption: "Spese",
  exampleExpenseRows: [
    {
      expense: "Hotel",
      payer: "Alex",
      participants: "Alex, Blair, Casey, Dana",
      amount: "€400.00",
    },
    {
      expense: "Taxi",
      payer: "Blair",
      participants: "Alex, Blair, Casey",
      amount: "€45.00",
    },
    {
      expense: "Biglietti del museo",
      payer: "Dana",
      participants: "Alex, Blair, Casey, Dana",
      amount: "€80.00",
    }
  ],
  exampleBalanceCaption: "Pagato e quota",
  exampleBalanceRows: [
    { person: "Alex", paid: "€400.00", share: "€135.00", net: "deve ricevere €265.00" },
    { person: "Blair", paid: "€45.00", share: "€135.00", net: "deve €90.00" },
    { person: "Casey", paid: "€0.00", share: "€135.00", net: "deve €135.00" },
    { person: "Dana", paid: "€80.00", share: "€120.00", net: "deve €40.00" }
  ],
  exampleSettle: "Blair paga €90 ad Alex, Casey gli paga €135 e Dana €40. I tre pagamenti totalizzano €265, esattamente quanto Alex deve ricevere.",
  exampleNote: "Quote: hotel €100 a persona; taxi €15 a persona per i tre passeggeri; biglietti €20 a persona. Dana non ha preso il taxi, quindi la sua quota è €120 invece di €135. CheqSplit calcola questi saldi, ma non trasferisce denaro.",
  productH2: "Tieni sotto controllo le spese condivise del viaggio con CheqSplit",
  productBody: "Crea un gruppo dalla schermata iniziale, scegli la valuta e invita i partecipanti. Da Spese, Aggiungi spesa permette di registrare hotel, taxi o biglietti: importo, valuta, pagante e partecipanti tramite Tutti o Personalizzato; la categoria è facoltativa. Da Scontrini, Aggiungi scontrino apre scansione o caricamento. Verifica le voci, poi dividi per voce o in parti uguali. Per altre valute, usa tasso di riferimento e data, un tasso manuale o l’addebito bancario effettivo nella valuta del gruppo. Controlla i saldi, esporta un rapporto PDF o archivia il gruppo. CheqSplit non trasferisce denaro.",
  productCta: "Tieni sotto controllo le spese di gruppo e di viaggio con CheqSplit",
  receiptNoteBefore: "Se una spesa del viaggio è un conto del ristorante dettagliato, usa prima ",
  receiptNoteLabel: "il metodo di divisione per voce",
  receiptNoteAfter: " direttamente dalla scheda Scontrini del gruppo con Aggiungi scontrino. Scansiona o carica lo scontrino, verifica voci e totale, poi dividi per voce o in parti uguali; viene collegato automaticamente al gruppo.",
  faqH2: "Domande frequenti sulla divisione delle spese di viaggio",
  faq: [
    {
      q: "Ogni spesa deve includere tutti?",
      a: "No. Seleziona soltanto i partecipanti coinvolti in quella specifica spesa.",
    },
    {
      q: "Quando conviene registrare una spesa?",
      a: "Il prima possibile, finché l'importo, chi ha pagato e le persone coinvolte sono ancora facili da ricordare.",
    },
    {
      q: "Come va gestito un conto del ristorante?",
      a: "Nel gruppo, apri Scontrini e tocca Aggiungi scontrino per scansionare o caricare uno scontrino. Verifica le voci e il totale rilevati; lo scontrino viene collegato automaticamente al gruppo. Poi dividi per voce o in parti uguali.",
    },
    {
      q: "CheqSplit converte le valute?",
      a: "Sì. Le spese del gruppo possono essere in un’altra valuta. Controlla il tasso di riferimento e la data, inserisci un tasso manuale o l’addebito bancario effettivo nella valuta del gruppo. CheqSplit usa l’importo convertito per i saldi del gruppo; non trasferisce denaro.",
    },
  ],
  ctaTitle: "Tutte le spese del viaggio in un unico riepilogo condiviso",
  ctaBody: "Crea un viaggio per il gruppo, aggiungi le spese man mano che si presentano e lascia che CheqSplit mostri chi deve quanto e a chi alla fine.",
  crumbGuides: "Guide",
  crumbCurrent: "Spese di viaggio",
  colExpense: "Spesa",
  colPayer: "Pagato da",
  colParticipants: "Partecipanti",
  colAmount: "Importo",
  colPerson: "Persona",
  colPaid: "Pagato",
  colShare: "Quota",
  colResult: "Risultato",
};
