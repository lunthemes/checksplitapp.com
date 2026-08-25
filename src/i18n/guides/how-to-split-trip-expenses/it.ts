import type { TripExpensesGuideCopy } from "./types";

export const tripExpensesGuideIt: TripExpensesGuideCopy = {
  metaTitle: "Come dividere le spese di viaggio con gli amici | CheqSplit",
  metaDescription: "Crea un unico viaggio, registra chi ha pagato e chi ha partecipato a ogni spesa e controlla i saldi prima della fine del viaggio.",
  h1: "Come dividere le spese di viaggio con gli amici",
  answer: "Crea un unico viaggio, registra chi ha pagato e chi ha partecipato a ogni spesa e controlla i saldi prima della fine del viaggio.",
  answerFollow: "Registrando ogni spesa man mano, il gruppo non dovrà rifare tutti i conti alla fine del viaggio.",
  rulesH2: "Stabilite le regole per le spese prima di partire",
  rulesBody: "Prima ancora del primo pagamento, stabilite quali costi riguardano tutto il gruppo e quali soltanto alcune persone. L'alloggio spesso viene diviso tra tutti, mentre un taxi o un biglietto per il museo può riguardare solo alcuni partecipanti. Registra separatamente chi ha pagato e chi partecipa alla spesa, perché chi anticipa i soldi non deve necessariamente essere incluso nella divisione. Aggiungi ogni spesa mentre importo e partecipanti sono ancora facili da ricordare. Se usate più valute, decidete in anticipo come registrarle: CheqSplit non effettua conversioni di valuta. Regole chiare fin dall'inizio mantengono lo storico coerente fino al saldo finale.",
  stepsH2: "Come dividere le spese di viaggio in 5 passaggi",
  steps: [
    { title: "Crea il viaggio in anticipo", desc: "Dagli un nome, aggiungi le persone coinvolte e inserisci le spese già sostenute, così tutto il gruppo parte da un unico storico." },
    { title: "Registra chi ha pagato", desc: "Indica chiaramente chi ha pagato ogni spesa: biglietti, alloggio, trasporti, ristorante o un'attività anticipata per il gruppo." },
    { title: "Seleziona i partecipanti", desc: "Includi tutti solo quando la spesa riguarda davvero l'intero gruppo. Per un taxi, un'attività o un ristorante, seleziona soltanto le persone coinvolte." },
    { title: "Aggiungi le spese subito", desc: "Inserisci gli importi mentre li ricordi ancora bene. In CheqSplit apri la scheda Spese e tocca Aggiungi spesa. Qualsiasi partecipante può aggiungere una spesa." },
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
  productBody: "CheqSplit ti permette di creare un viaggio, registrare chi ha pagato e i partecipanti di ogni spesa, tenere visibile lo storico condiviso e vedere chi deve quanto e a chi. Aggiungi taxi, hotel o biglietti da Spese con Aggiungi spesa e un conto dettagliato del ristorante da Conti con Aggiungi conto. Al termine archivia il viaggio ed esporta un riepilogo PDF. CheqSplit calcola i saldi, ma non trasferisce denaro e non converte valute.",
  productCta: "Tieni sotto controllo le spese di gruppo e di viaggio con CheqSplit",
  receiptNoteBefore: "Se una spesa del viaggio è un conto del ristorante dettagliato, usa prima ",
  receiptNoteLabel: "il metodo di divisione per voce",
  receiptNoteAfter: ", inclusi servizio e mancia. Poi apri la scheda Conti del viaggio e tocca Aggiungi conto.",
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
      a: "Usa il flusso per lo scontrino del ristorante per dividere le singole voci, comprese imposte e mancia. Poi apri la scheda Conti del viaggio e tocca Aggiungi conto.",
    },
    {
      q: "CheqSplit converte le valute?",
      a: "No. La conversione valutaria non è una funzionalità confermata di CheqSplit. Registra gli importi esattamente come compaiono nella spesa.",
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
