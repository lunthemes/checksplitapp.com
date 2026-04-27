import type { Dictionary } from "../types";

export const it: Dictionary = {
  meta: {
    title: "CheqSplit: spartisci le spese, scansiona scontrini e traccia le bollette di gruppo",
    description:
      "CheqSplit ti aiuta a spartire le spese, scansionare scontrini, seguire le bollette condivise e capire chi deve cosa a chi dopo ristoranti, viaggi, spesa o attività di gruppo.",
    ogDescription:
      "Spartisci in modo equo: scontrino, voci, saldi. Perfetto per ristorante, viaggi, coinquilini e amici.",
    twitterDescription:
      "Modo semplice per condividere spese e bollette di gruppo senza fogli o stress.",
    softwareDescription:
      "CheqSplit ti aiuta a spartire, scansionare, tracciare spese e vedere i saldi dopo cene, viaggi o in gruppo.",
  },
  nav: {
    features: "Funzionalità",
    how: "Come funziona",
    useCases: "Casi d'uso",
    faq: "Domande",
  },
  header: { download: "Scarica l'app" },
  hero: {
    title:
      "Spartisci le spese, scansiona lo scontrino e vedi in tempo reale i saldi",
    body: "CheqSplit ti aiuta a spartire le spese, scansionare scontrini, tracciare costi condivisi e scoprire chi deve cosa a chi: ristorante, viaggio, spesa, gruppo.",
    alts: [
      "Schermata spese viaggio di gruppo CheqSplit",
      "App CheqSplit con spese condivise",
      "Dividi conto e voci scontrino CheqSplit",
    ],
  },
  features: {
    title: "Perché CheqSplit?",
    items: [
      {
        title: "Scontrino istantaneo",
        desc: "Scansione: articoli, prezzi, tasse, totali in secondi.",
      },
      {
        title: "Spesa per riga",
        desc: "Assegna ogni voce a chi tocca, invece di spartire a meta.",
      },
      {
        title: "Tutto sotto un tetto",
        desc: "Ristorante, spesa, viaggi e condivisioni, un'unica cronaca.",
      },
      {
        title: "Saldo chi-è-debitore",
        desc: "I saldi li calcola l'app, tutti sanno quanto restituire.",
      },
    ],
  },
  how: {
    title: "Come funziona CheqSplit",
    subtitle: "Cinque passi chiari, dal viaggio a un resoconto che tutti possono condividere.",
    stepPill: (n) => `Passo ${n}`,
    steps: [
      {
        label: "Crea un viaggio in un attimo",
        body: "Dai un nome, invita gli amici, niente giro a vuoto in impostazioni.",
        imageAlt: "CheqSplit: viaggio di gruppo",
        bullets: [
          "Pronto al volo",
          "Inviti semplici",
          "Cena o vacanze",
        ],
      },
      {
        label: "Spartisci per riga",
        body: "Conto dettagliato: ogni riga a chi le spetta, niente misteri.",
        imageAlt: "CheqSplit: scansiona scontrino",
        bullets: [
          "Dividi per riga",
          "Piatti condivisi e mance",
          "Commissioni incluse",
        ],
      },
      {
        label: "Segui ogni spesa condivisa",
        body: "Categorie e appunti, quadro unico in una linea del tempo.",
        imageAlt: "CheqSplit: spese condivise mobile",
        bullets: [
          "Categorie utili",
          "Scontrini e note",
          "Storia unica per il gruppo",
        ],
      },
      {
        label: "Pareggia in tempo reale",
        body: "Saldi che seguono i pagamenti, meno rincorrerie.",
        imageAlt: "CheqSplit: riepilogo saldi",
        bullets: [
          "Saldi netti",
          "Promemoria (fac.)",
          "Estratti condivisibili",
        ],
      },
      {
        label: "Rapporti pronti da condividere",
        body: "Grafici, totali, chi ha pagato – da mandare o rivedere dopo.",
        imageAlt: "CheqSplit: resoconto viaggio",
        bullets: [
          "Sintesi visive",
          "Link o immagine",
          "Riservatezza in primo piano",
        ],
      },
    ],
  },
  useCases: {
    title: "Ogni spesa in compagnia",
    intro:
      "Quando più persone condividono: cene, gite, spesa: CheqSplit nasce per questo. Ristorante, gita, coinquilini, famiglia, shopping. Scansiona, assegna, aggiungi sconti o commissioni, ricevi chiusura chiara.",
    items: [
      { title: "Ristorante", desc: "Scomponi il conto, sparti per piatto, paga in modo giusto." },
      { title: "Viaggi", desc: "Voli, hotel, pasti in un unico posto." },
      { title: "Famiglia", desc: "Spesa, eventi, voci in casa." },
      { title: "Acquisti a più", desc: "Regali, lotti, progetti con amici." },
    ],
  },
  cta: {
    title: "Pronti a spartire in modo semplice?",
    body: "Migliaia di gruppi già lo fanno, senza litigare sui numeri.",
    sectionAria: "Scarica CheqSplit",
    imgAlt: "Home app CheqSplit, divide le bollette",
    badgeAlts: { appStore: "Scarica sull'App Store", play: "Disponibile su Google Play" },
    playSoon: "Presto",
    playDisabledHint: "Non ancora disponibile",
    groupAria: "Scarica l'applicazione",
  },
  faq: {
    title: "Domande frequenti",
    items: [
      {
        q: "Che cos'è CheqSplit?",
        a: "App per dividere conti e tracciare spese di gruppo: scansiona, assegna righe, salda chi deve a chi.",
      },
      { q: "Si può per articolo?", a: "Sì, ogni riga va alla persona giusta, paghi solo quello che hai consumato." },
      { q: "E per le vacanze in gruppo?", a: "Sì: viaggio, spese, partecipanti, scontrini, report e saldo finale." },
      { q: "Al ristorante va bene?", a: "Sì, anche bar, negozi, parchi – ogni condivisione con più persone." },
      { q: "Off-line?", a: "In parte in locale, ma condividere e sync servono rete." },
      { q: "Come invito amici?", a: "Crea un viaggio, inserisci le spese, manda il link, entrano e vedono il saldo." },
    ],
  },
  footer: {
    tagline: "Il modo più facile per spartire: equo, veloce, chiaro.",
    product: "Prodotto",
    company: "Azienda",
    legal: "Note legali",
    about: "Info",
    contact: "Contatti",
    privacy: "Privacy",
    terms: "Termini",
    rights: "Tutti i diritti riservati.",
  },
  a11y: {
    keyFeatures: "In sintesi",
    primaryNav: "Principale",
    howSection: "Funzionamento",
    logoHome: "Home CheqSplit",
  },
};
