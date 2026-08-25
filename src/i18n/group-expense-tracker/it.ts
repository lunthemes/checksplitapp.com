import type { GroupExpenseTrackerCopy } from "./types";
import { groupExpenseTrackerEn } from "./en";

export const groupExpenseTrackerIt: GroupExpenseTrackerCopy = {
  metaTitle: "Tieni sotto controllo le spese di gruppo e scopri chi deve quanto e a chi | CheqSplit",
  metaDescription: "Raccogli tutte le spese condivise in un unico posto, indica chi ha pagato e chi ha partecipato a ogni spesa e controlla in qualsiasi momento i saldi del gruppo.",
  softwareDescription: "Raccogli tutte le spese condivise in un unico posto, indica chi ha pagato e chi ha partecipato a ogni spesa e controlla in qualsiasi momento i saldi del gruppo.",
  h1: "Tieni sotto controllo le spese di gruppo e scopri chi deve quanto e a chi",
  heroText: "Raccogli tutte le spese condivise in un unico posto, indica chi ha pagato e chi ha partecipato a ogni spesa e controlla in qualsiasi momento i saldi del gruppo.",
  downloadCta: "Scarica gratis",
  secondaryCta: "",
  nav: {
    how: "Come funziona la gestione delle spese di gruppo",
    faq: "Domande frequenti",
  },
  timelineH2: "Uno storico condiviso invece di spese sparse tra i messaggi",
  timelineText: "Una persona paga l'hotel, un'altra compra i biglietti e qualcun altro paga il taxi. Invece di cercare tutto nelle chat a fine viaggio, CheqSplit conserva ogni spesa in un unico storico condiviso.",
  howH2: "Come funziona la gestione delle spese di gruppo",
  steps: [
    {
      title: "Invita il gruppo al viaggio",
      text: "Dopo aver creato e nominato il viaggio, invita i partecipanti tramite link o QR code.",
      imageAlt: "Invita il gruppo al viaggio",
    },
    {
      title: "Aggiungi ogni spesa",
      text: "Apri la scheda Spese e tocca Aggiungi spesa. Inserisci descrizione e importo, indica chi ha pagato e seleziona chi ha partecipato alla spesa.",
      imageAlt: "Aggiungi ogni spesa",
    },
    {
      title: "Scegli chi ha condiviso la spesa",
      text: "Seleziona Tutti o Personalizzato, quindi indica soltanto le persone coinvolte in quella spesa.",
      imageAlt: "Scegli chi ha condiviso la spesa",
    },
    {
      title: "Segui lo storico delle spese condivise",
      text: "Ogni spesa aggiunta compare nella scheda Spese con importo, persona che ha pagato e partecipanti.",
      imageAlt: "Segui lo storico delle spese condivise",
    },
    {
      title: "Scopri chi deve quanto e a chi",
      text: "Apri Riepilogo per vedere chi deve ricevere denaro e chi deve pagare. CheqSplit calcola i saldi, ma non trasferisce denaro.",
      imageAlt: "Scopri chi deve quanto e a chi",
    }
  ],
  subsetH2: "Usa la divisione giusta per ogni spesa",
  subsetText: "Non tutte le spese riguardano tutto il gruppo. Assegna il taxi solo a chi lo ha preso, i biglietti a chi ha partecipato e le vere spese comuni a tutto il gruppo. Per un conto dettagliato del ristorante, usa la scheda Conti e Aggiungi conto.",
  receiptBridgeH2: "Aggiungi al viaggio un conto del ristorante diviso per voce",
  receiptBridgeText: "Se il gruppo ha un conto dettagliato del ristorante, usa prima la divisione per voce per assegnare ciò che ha ordinato ciascuno, compresi servizio e mancia. Poi apri la scheda Conti del viaggio e tocca Aggiungi conto.",
  receiptBridgeCta: "Scopri come funziona la divisione dello scontrino",
  reportH2: "Conserva un riepilogo che il gruppo possa consultare anche dopo",
  reportText: "Archivia il viaggio ed esporta un riepilogo PDF con spese, totali, tabelle e grafico. È molto più facile da verificare rispetto a un conteggio finale ricostruito a memoria.",
  fitsH2: "Quando CheqSplit è utile",
  fits: [
    "Un weekend o una vacanza con gli amici",
    "Un viaggio di gruppo con alloggio, trasporti, pasti, biglietti o attività",
    "Diverse spese di viaggio pagate da persone diverse",
    "Un conto dettagliato del ristorante, aggiunto dalla scheda Conti con Aggiungi conto",
  ],
  faqH2: "Domande frequenti sulle spese di gruppo",
  faq: [
    {
      q: "Persone diverse possono aggiungere spese?",
      a: "Sì. Qualsiasi partecipante può aprire la scheda Spese e toccare Aggiungi spesa. Per uno scontrino dettagliato, usa la scheda Conti e tocca Aggiungi conto.",
    },
    {
      q: "Una spesa può riguardare solo alcune persone?",
      a: "Sì. Seleziona Tutti o Personalizzato, quindi scegli soltanto i partecipanti che hanno condiviso quella spesa.",
    },
    {
      q: "Posso scansionare uno scontrino come spesa di viaggio?",
      a: "Usa il flusso per lo scontrino del ristorante per dividere le singole voci, comprese imposte e mancia. Poi apri la scheda Conti del viaggio e tocca Aggiungi conto.",
    },
    {
      q: "Come faccio a sapere chi deve pagare chi?",
      a: "CheqSplit combina le spese del gruppo e mostra i saldi risultanti, cioè chi deve quanto e a chi. Calcola le quote, ma non trasferisce denaro.",
    },
    {
      q: "Posso esportare il risultato?",
      a: "Sì. CheqSplit può esportare un riepilogo PDF dettagliato con spese, totali, tabelle e un grafico. Inoltre, puoi archiviare un viaggio una volta concluso.",
    },
  ],
  ctaTitle: "Tutte le spese del gruppo in un unico riepilogo",
  ctaBody: "Crea un viaggio, aggiungi le spese man mano che si presentano e lascia che CheqSplit mostri chi deve quanto e a chi.",
  internalRestaurantBefore: "Devi dividere una singola cena per voce? Usa il ",
  internalRestaurantLabel: "divisore del conto del ristorante",
  internalRestaurantAfter: " per scansione, invito e assegnazione in tempo reale.",
  guideBridgeBefore: "Preferisci prima il metodo passo dopo passo? Leggi ",
  guideBridgeLabel: "come dividere le spese di viaggio con gli amici",
  guideBridgeAfter: ".",
  a11y: {
    nav: groupExpenseTrackerEn.a11y.nav,
    hero: "Tieni sotto controllo le spese di gruppo e scopri chi deve quanto e a chi",
    timeline: "Uno storico condiviso invece di spese sparse tra i messaggi",
    how: "Come funziona la gestione delle spese di gruppo",
    subset: "Usa la divisione giusta per ogni spesa",
    receipt: "Aggiungi al viaggio un conto del ristorante diviso per voce",
    report: "Conserva un riepilogo che il gruppo possa consultare anche dopo",
    fits: "Quando CheqSplit è utile",
    faq: "Domande frequenti sulle spese di gruppo",
  },
};
