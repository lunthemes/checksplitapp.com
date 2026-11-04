import type { Dictionary } from "../types";

export const it: Dictionary = {
  meta: {
    title: "App per dividere le spese con gli amici | CheqSplit",
    description:
      "Scansiona gli scontrini, registra le spese condivise e controlla i saldi con gli amici.",
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
    restaurant: "Conto al ristorante",
    groupExpenses: "Spese di gruppo",
    guides: "Guide",
  },
  header: { download: "Scarica gratis" },
  hero: {
    title: "Dividi le spese con gli amici e scopri chi deve a chi",
    body: "Scansiona gli scontrini, registra le spese condivise e controlla i saldi con gli amici. Invita persone dei gruppi precedenti e parla delle spese nella chat del gruppo o in privato.",
    alts: [
      "Schermata iniziale di CheqSplit con il gruppo attuale",
      "Panoramica del gruppo con i contributi dei partecipanti",
      "CheqSplit: scontrino, divisione per riga",
    ],
  },
  heroSlide2: {
    title: "Dividi i conti al ristorante più velocemente",
    description: "Scansiona lo scontrino, assegna gli articoli e vedi chiaramente la quota di ciascuno — perfetto per cene con amici, appuntamenti e pasti di gruppo.",
    button: "Scopri come dividere il conto e scansionare gli scontrini",
  },
  workflows: {
    title: "Scegli cosa stai dividendo",
    restaurantTitle: "Un conto del ristorante",
    restaurantText:
      "Scansiona lo scontrino, controlla le voci, invita il tavolo e assegna ogni voce a chi l'ha ordinata o condivisa.",
    restaurantCta: "Dividi un conto del ristorante",
    groupTitle: "Spese di gruppo o di viaggio",
    groupText:
      "Tieni le spese condivise in un gruppo: indica chi ha pagato e i partecipanti, aggiungi scontrini da Scontrini e controlla chi deve quanto a chi nel Riepilogo. CheqSplit calcola i saldi; non trasferisce denaro.",
    groupCta: "Segui le spese di gruppo",
  },
  features: {
    title: "Perché usare CheqSplit",
    items: [
      {
        title: "Scansiona lo scontrino in pochi secondi",
        desc: "Scansiona e recupera voci, IVA e totale senza riscrivere tutto a mano.",
      },
      {
        title: "Dividi riga per riga",
        desc: "Assegna ogni voce a chi l'ha ordinata, invece di spaccare il conto a metà a occhio.",
      },
      {
        title: "Tutte le spese in un unico posto",
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
        label: "Crea un gruppo per il viaggio",
        body: "Dalla schermata iniziale, tocca Crea gruppo, assegna un nome, scegli la valuta e invita i partecipanti tramite link o codice QR.",
        imageAlt: "Schermata iniziale di CheqSplit con il gruppo attuale",
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
        body: "Apri Spese e tocca Aggiungi spesa. Inserisci descrizione, importo e valuta, scegli facoltativamente una categoria e chi ha pagato, poi Tutti o Personalizzato per i partecipanti. Ogni partecipante può aggiungere una spesa.",
        imageAlt: "CheqSplit: spese condivise, mobile",
        bullets: [
          "Ogni partecipante mette le sue voci",
          "Divisione sull’intera squadra o su un gruppo ristretto",
          "Tutto in un’unica sequenza condivisa",
        ],
      },
      {
        label: "Scopri chi deve quanto e a chi",
        body: "CheqSplit calcola totali, quota per persona e a chi, in concreto, inviare i soldi.",
        imageAlt: "CheqSplit: riepilogo saldi, chi deve a chi",
        bullets: [
          "Totale uscite del gruppo",
          "Cifra, persona per persona",
          "Evidenzia, chi, a chi, quanto deve",
        ],
      },
      {
        label: "Conserva il viaggio e il riepilogo",
        body: "Archivia i viaggi conclusi o esporta un PDF dettagliato con uscite, totali e un grafico chiaro.",
        imageAlt: "CheqSplit: riepilogo uscita o viaggio",
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
      { title: "Acquisti di gruppo", desc: "Regali, scorte, progetti divisi, con cifre e quote sempre visibili." },
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
        a: "Tieni le spese condivise in un gruppo: indica chi ha pagato e i partecipanti, aggiungi scontrini da Scontrini e controlla chi deve quanto a chi nel Riepilogo. CheqSplit calcola i saldi; non trasferisce denaro.",
      },
      {
        q: "Serve solo al ristorante?",
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
    tagline: "Dividi le spese di gruppo in modo equo, senza calcoli complicati.",
    product: "Prodotto",
    company: "Azienda",
    legal: "Note legali",
    about: "Assistenza",
    contact: "Contatti",
    privacy: "Informativa sulla privacy",
    terms: "Termini di servizio",
    deleteAccount: "Elimina account",
    deleteData: "Elimina i tuoi dati",
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
