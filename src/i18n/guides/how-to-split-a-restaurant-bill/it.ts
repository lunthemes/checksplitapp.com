import type { RestaurantBillGuideCopy } from "./types";

export const restaurantBillGuideIt: RestaurantBillGuideCopy = {
  metaTitle: "Come dividere il conto al ristorante in modo equo | CheqSplit",
  metaDescription: "Controlla lo scontrino finale, assegna le voci individuali, dividi quelle condivise tra le persone giuste e verifica che tutti gli importi corrispondano al totale.",
  h1: "Come dividere il conto al ristorante in modo equo",
  answer: "Controlla lo scontrino finale, assegna le voci individuali, dividi quelle condivise tra le persone giuste e verifica che tutti gli importi corrispondano al totale.",
  choiceH2: "Scegli tra divisione in parti uguali e divisione per voce",
  choiceBody: "Dividere il conto in parti uguali è la soluzione più rapida quando gli ordini sono simili e tutti sono d'accordo nel dividere il totale allo stesso modo. Se invece le persone hanno ordinato piatti o bevande diversi, la divisione per voce è solitamente più equa: assegna prima a ciascuno ciò che ha ordinato. Piatti condivisi, bottiglie e dessert devono essere suddivisi solo tra chi li ha effettivamente consumati. Aggiungi poi servizio, imposte e mancia affinché tutte le quote corrispondano al totale dello scontrino. Se i conti non tornano, probabilmente manca una voce o un costo aggiuntivo. In questo modo la divisione rimane fedele al conto reale, invece di basarsi su una stima.",
  stepsH2: "Come dividere il conto al ristorante in modo equo in 5 passaggi",
  steps: [
    { title: "Controlla lo scontrino", desc: "Verifica ogni voce e il totale finale prima di iniziare a dividere gli importi." },
    { title: "Assegna gli ordini individuali", desc: "Assegna a ogni persona solo i piatti e le bevande che ha ordinato. Inizia dalle voci più evidenti." },
    { title: "Dividi le voci condivise", desc: "Includi solo le persone che hanno condiviso il piatto o la bottiglia. Dividi in parti uguali oppure secondo una percentuale concordata." },
    { title: "Controlla gli importi rimasti", desc: "Verifica se ci sono voci non assegnate, errori di scansione o servizio e mancia non ancora inclusi." },
    { title: "Mostra il risultato", desc: "Ognuno deve poter vedere la propria quota e il saldo finale, così tutti possono verificare il conto prima di lasciare il tavolo." }
  ],
  exampleH2: "Esempio: dividere un conto al ristorante tra quattro persone",
  exampleIntro: "Maya, Noah, Owen e Priya condividono lo stesso conto. Maya e Noah dividono anche una bottiglia di vino. Sul subtotale di cibo e bevande viene applicato un servizio del 10%.",
  exampleReceiptCaption: "Scontrino",
  exampleReceiptRows: [
    { item: "Pasta (Maya)", amount: "€15.00" },
    { item: "Hamburger (Noah)", amount: "€15.00" },
    { item: "Pesce alla griglia (Owen)", amount: "€20.00" },
    { item: "Insalata (Priya)", amount: "€10.00" },
    { item: "Bottiglia di vino (Maya e Noah)", amount: "€20.00" },
    { item: "Subtotale", amount: "€80.00" },
    { item: "Servizio (10%)", amount: "€8.00" },
    { item: "Totale scontrino", amount: "€88.00" }
  ],
  exampleShareCaption: "Importo da pagare",
  exampleShareRows: [
    { person: "Maya (pasta €15 + metà vino €10 + servizio €2.50)", amount: "€27.50" },
    { person: "Noah (hamburger €15 + metà vino €10 + servizio €2.50)", amount: "€27.50" },
    { person: "Owen (pesce €20 + servizio €2.00)", amount: "€22.00" },
    { person: "Priya (insalata €10 + servizio €1.00)", amount: "€11.00" },
    { person: "Totale delle quattro quote", amount: "€88.00" }
  ],
  exampleNote: "Il servizio viene distribuito in proporzione alla spesa per cibo e bevande di ciascuno: Maya e Noah hanno €25 a testa del subtotale di €80, Owen €20 e Priya €10. Le quattro quote sommate danno esattamente €88, cioè il totale dello scontrino.",
  productH2: "Dividi il conto al ristorante per voce con CheqSplit",
  productBody: "CheqSplit applica gli stessi passaggi: scansiona lo scontrino, condivide il conto tramite link o QR code, assegna le voci individuali e condivise, gestisce separatamente servizio e mancia e mostra chi deve quanto e a chi. CheqSplit calcola i saldi, ma non trasferisce denaro.",
  productCta: "Dividi uno scontrino del ristorante con CheqSplit",
  faqH2: "Domande frequenti sulla divisione del conto",
  faq: [
    {
      q: "Il conto deve essere sempre diviso in parti uguali?",
      a: "Solo se il gruppo è d'accordo e gli ordini sono simili. Se ognuno ha ordinato cose diverse, assegna le singole voci in modo che il totale di ogni persona corrisponda a ciò che ha effettivamente consumato.",
    },
    {
      q: "Come va divisa una voce condivisa?",
      a: "Tra le persone coinvolte, in parti uguali oppure secondo una percentuale concordata quando le quote non sono uguali.",
    },
    {
      q: "Perché a volte i totali non coincidono?",
      a: "Controlla le voci non assegnate, gli errori di scansione o inserimento e le imposte o la mancia in Tasse e mancia, in modo che la divisione corrisponda al totale dello scontrino.",
    },
  ],
  ctaTitle: "Pronti a dividere il conto direttamente al tavolo?",
  ctaBody: "Scansiona il conto, assegna le voci alle persone che le hanno ordinate e scopri subito chi deve quanto e a chi.",
  crumbGuides: "Guide",
  crumbCurrent: "Conto al ristorante",
  colItem: "Voce",
  colAmount: "Importo",
  colPerson: "Persona",
  colDue: "Importo da pagare",
};
