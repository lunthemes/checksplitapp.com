import type { Dictionary } from "../types";

export const it: Dictionary = {
  meta: {
    title: "CheqSplit: dividi le spese, scansiona scontrini, traccia le spese di gruppo",
    description:
      "Dividi le spese, scansiona gli scontrini e tieni d'occhio le uscite in comune. CheqSplit ti mostra in modo chiaro chi deve quanto a chi, al ristorante, in viaggio, alla spesa o in qualsiasi piano a più persone.",
    ogDescription:
      "Dividi in modo equo: scontrino in app, spese condivise, saldi chiari. Cene, gite, convivenza, famiglia e compagnia.",
    twitterDescription:
      "Dividi le spese comuni senza fogli di calcolo o chat interminabili sull'ultimo centesimo.",
    softwareDescription:
      "CheqSplit ti aiuta a dividere le spese, a scansionare scontrini, a tracciare le uscite condivise e a capire subito chi deve quanto a chi, a cena, in viaggio o in gruppo.",
  },
  nav: {
    features: "Funzionalità",
    how: "Come funziona",
    useCases: "Casi d'uso",
    faq: "Domande frequenti",
  },
  header: { download: "Scarica gratis l’app" },
  hero: {
    title: "Dividete le spese, scansionate gli scontrini e lasciate che l’app faccia il resto",
    body: "Con CheqSplit puoi scansionare gli scontrini, tenere sotto controllo le spese condivise e vedere in un attimo cosa resta da saldare, dopo cena, in gita, a casa o in viaggio con amici e famiglia. L’app si scarica gratuitamente.",
    alts: [
      "CheqSplit: viaggio di gruppo e spese condivise",
      "App CheqSplit: elenco spese di gruppo",
      "CheqSplit: scontrino, divisione per riga",
    ],
  },
  heroSlide2: {
    title: "Dividi i conti al ristorante più velocemente",
    description: "Scansiona lo scontrino, assegna gli articoli e vedi chiaramente la quota di ciascuno — perfetto per cene con amici, appuntamenti e pasti di gruppo.",
    button: "Scopri di più",
  },
  features: {
    title: "Perché usare CheqSplit",
    items: [
      {
        title: "Scontrino in pochi secondi",
        desc: "Scansiona e recupera voci, IVA e totale senza riscrivere tutto a mano.",
      },
      {
        title: "Dividi riga per riga",
        desc: "Assegna ogni voce a chi l'ha ordinata, invece di spaccare il conto a metà a occhio.",
      },
      {
        title: "Tutte le uscite, un solo filo",
        desc: "Ristorante, spesa, viaggi: tutto ciò che il gruppo paga insieme, in un'unica linea del tempo.",
      },
      {
        title: "Saldo: chi deve a chi",
        desc: "I saldi si aggiornano in automatico: ognuno vede cosa deve ancora restituire o ricevere.",
      },
    ],
  },
  how: {
    title: "Come funziona CheqSplit",
    subtitle:
      "Cinque passaggi: spartire le spese, scansionare scontrini, tenere sotto controllo le uscite in comune e chi deve quanto a chi – dall’avvio del viaggio a un resoconto chiaro per tutto il gruppo.",
    stepPill: (n) => `PASSO ${n}`,
    steps: [
      {
        label: "Crea un viaggio in pochi secondi",
        body: "Mettici un nome, invita gli amici con link o QR e inizia subito a spartire le spese comuni.",
        imageAlt: "CheqSplit: viaggio di gruppo",
        bullets: [
          "Subito in movimento",
          "Invito via link o QR",
          "Cena, vacanza, o una gita con chi vuoi",
        ],
      },
      {
        label: "Dividi il conto, voce per voce",
        body: "Ricevete tutti la stessa ricevuta sul telefono e segnate, in diretta, cosa paga ciascuno.",
        imageAlt: "CheqSplit: scansiona scontrino, split",
        bullets: [
          "Segnate, chi sostiene quale voce",
          "Cose condivise, mance, extra",
          "A colpo d’occhio, chi, quanto e a chi",
        ],
      },
      {
        label: "Aggiungi le spese condivise",
        body: "Indica chi ha pagato e tra quali persone va diviso ciascun importo.",
        imageAlt: "CheqSplit: spese condivise, mobile",
        bullets: [
          "Ogni partecipante mette le sue voci",
          "Divisione sull’intera squadra o su un gruppo ristretto",
          "Tutto in un’unica sequenza condivisa",
        ],
      },
      {
        label: "Trova, chi, quanto, a chi",
        body: "CheqSplit calcola totali, quota per persona e a chi, in concreto, inviare i soldi.",
        imageAlt: "CheqSplit: riepilogo saldi, chi deve a chi",
        bullets: [
          "Totale uscite del gruppo",
          "Cifra, persona per persona",
          "Evidenzia, chi, a chi, quanto deve",
        ],
      },
      {
        label: "Tieni viaggio e report a portata",
        body: "Archivia i viaggi conclusi o esporta un PDF dettagliato con uscite, totali e un grafico chiaro.",
        imageAlt: "CheqSplit: report uscita o viaggio",
        bullets: [
          "Archivio di viaggi conclusi",
          "Report PDF con tutto il dettaglio",
          "Somme, tabelle e grafici",
        ],
      },
    ],
  },
  useCases: {
    title: "Ogni volta che dividi una spesa",
    intro:
      "Cene, gite, spesa, famiglia, coinquilini, acquisti condivisi: CheqSplit unisce scontrino, promemoria e conti. Scansioni, assegni, aggiungi sconti o maggiorazioni, e a fine giornata hai un saldo comprensibile per tutti, senza tabelle improvvisate a mezzanotte.",
    items: [
      { title: "Ristorante e locali", desc: "Scomponi il conto, dividi per piatto, chiudi l'uscita in modo equo." },
      { title: "Viaggi in gruppo", desc: "Voli, soggiorno, pasti: un unico registro per chi ha messo i soldi e per chi deve ancora restituire." },
      { title: "Casa e famiglia", desc: "Spesa, regali, piccoli acconti in comune, senza dimenticare nessuno." },
      { title: "Acquisti insieme", desc: "Regali, scorte, progetti divisi, con cifre e quote sempre visibili." },
    ],
  },
  cta: {
    title: "Pronto a dividere le spese con meno grattacapi?",
    body: "Scarica gratis CheqSplit: uscite di gruppo più ordinate, senza litigate sull’ultima cifra.",
    sectionAria: "Scarica CheqSplit gratis",
    imgAlt: "Home CheqSplit: dividi scontrini e spese condivise",
    badgeAlts: {
      appStore: "Scarica gratis sull’App Store",
      play: "Scarica gratis su Google Play",
    },
    playSoon: "Presto",
    playDisabledHint: "Non ancora disponibile",
    groupAria: "Scarica l’applicazione gratis",
  },
  faq: {
    title: "Domande frequenti",
    items: [
      {
        q: "Che cos'è CheqSplit?",
        a: "È un'app gratuita per dividere i conti, scansionare scontrini, tracciare le uscite a più e vedere come si ripartiscono i costi, senza fogli o chat infinite.",
      },
      {
        q: "Posso dividere un scontrino per articolo?",
        a: "Sì. Assegni ogni riga a chi l'ha consumata, così ognuno paga in proporzione a ciò che ha preso, non a una quota uguale «a occhio».",
      },
      {
        q: "Va bene per vacanze o gite a più persone?",
        a: "Sì. Crei un viaggio, aggiungi le spese, inviti le persone, carichi scontrini e, al termine, ottieni un resoconto con i saldi tra le persone.",
      },
      {
        q: "È adatto al solo ristorante?",
        a: "Anche supermercato, bar, gite, ovunque mettiate soldi in comune, non serve solo il ristorante.",
      },
      {
        q: "Funziona senza rete?",
        a: "Puoi lavorare con dati in locale sul dispositivo, ma per condividere il viaggio o sincronizzare il gruppo serve la connessione a internet.",
      },
      {
        q: "Come invito un amico?",
        a: "Crei un viaggio, inserisci le uscite e condividi il link. Chi entra vede lo stesso riepilogo e gli stessi saldi che vedi tu.",
      },
    ],
  },
  footer: {
    tagline: "Dividi le spese in modo chiaro, senza tabelle improvvisate e senza fraintendimenti a fine serata.",
    product: "Prodotto",
    company: "Azienda",
    legal: "Note legali",
    about: "Informazioni",
    contact: "Contatti",
    privacy: "Privacy",
    terms: "Termini",
    rights: "Tutti i diritti riservati.",
  },
  a11y: {
    keyFeatures: "Punti salienti",
    primaryNav: "Navigazione principale",
    openMenu: "Apri il menu",
    howSection: "Come funziona",
    logoHome: "Home CheqSplit",
  },
};
