import type { Dictionary } from "../types";

export const ro: Dictionary = {
  meta: {
    title: "CheqSplit: împarte cheltuielile, scanează bonurile, urmărește cheltuielile de grup",
    description:
      "CheqSplit te ajută să împarți cheltuielile, să scanezi bonurile, să urmărești cheltuielile comune plătite de grup și să vezi clar cine cui datorează bani – după restaurant, la călătorii, la cumpărături sau în orice plan cu prietenii.",
    ogDescription:
      "Împarte cheltuielile echilibrat: scanează bonurile, urmărește cheltuielile comune, vezi cine cui datorează bani. Potrivit pentru restaurante, excursii, colegi de apartament și familii.",
    twitterDescription:
      "O modalitate simplă de a împărți cheltuielile fără Excel și fără conversații stânjenitoare la încheierea notei.",
    softwareDescription:
      "CheqSplit te ajută să împarți cheltuielile, să scanezi bonurile, să urmărești plățile de grup și să vezi cine cui datorează bani, la restaurant, în deplasări sau la activități cu prietenii.",
  },
  nav: {
    features: "Funcții",
    how: "Cum funcționează",
    useCases: "Cazuri de folosință",
    faq: "Întrebări frecvente",
  },
  header: { download: "Descarcă aplicația" },
  hero: {
    title: "Împarte cheltuielile, scanează bonurile, vezi cine cui datorează bani",
    body: "CheqSplit te ajută să împarți nota, să scanezi bonurile, să urmărești plățile făcute de grup și să vezi ușor cine cui datorează bani, după cină, la drum, la magazin sau când vă puneți banii la comun.",
    alts: [
      "CheqSplit: listă de cheltuieli la o excursie de grup",
      "CheqSplit: ecran aplicație cu plăți împărțite",
      "CheqSplit: notă de plată, împărțire pe articole",
    ],
  },
  features: {
    title: "De ce CheqSplit?",
    items: [
      {
        title: "Scanează bonul pe loc",
        desc: "Citește rapid articolele, TVA și totalul, fără să transcrii manual fiecare rând.",
      },
      {
        title: "Împarte pe fiecare articol",
        desc: "Fiecare poziție merge la cine a comandat, nu se împarte tot „după ochi”.",
      },
      {
        title: "Cheltuieli comune, într-un singur loc",
        desc: "De la plata notei la restaurant până la cumpărături și alte cheltuieli făcute de grup, totul e pe o singură listă, mereu la zi.",
      },
      {
        title: "Cine cui datorează bani",
        desc: "Soldurile se recalculează automat, ca fiecare să știe ce rest mai are de plătit.",
      },
    ],
  },
  how: {
    title: "Cum funcționează CheqSplit",
    subtitle:
      "Cinci pași: împarți notele de plată și cheltuielile comune, scanezi bonurile, urmărești decontul și vezi clar cine cui — de la o excursie nouă la un raport de încredere.",
    stepPill: (n) => `PASUL ${n}`,
    steps: [
      {
        label: "Creează o excursie în câteva secunde",
        body: "Dă-i un nume, invită-ți prietenii prin link sau cod QR și treci direct la împărțirea cheltuielilor comune.",
        imageAlt: "CheqSplit: excursie de grup",
        bullets: [
          "Pornire rapidă",
          "Invitație prin link sau cod QR",
          "Cină, vacanță sau orice echipă",
        ],
      },
      {
        label: "Împarte nota pe fiecare poziție",
        body: "Toți vedeți aceeași notă de plată pe telefoane și bifați, în timp real, ce vi se potrivește vouă.",
        imageAlt: "CheqSplit: scanare bon, împărțire pe rând",
        bullets: [
          "Marcați, cine plătește ce",
          "Poziții împărțite, bacșiș și taxe",
          "Dintr-o privire, cine datorează cât",
        ],
      },
      {
        label: "Adaugă cheltuieli comune",
        body: "Indică cine a plătit și cu cine vrei să împarți fiecare sumă.",
        imageAlt: "CheqSplit: cheltuieli comune, ecran mobil",
        bullets: [
          "Cheltuieli trecute de fiecare",
          "Întregul grup sau doar persoane alese",
          "Totul într-un singur flux comun",
        ],
      },
      {
        label: "Vezi, cine cui, cât datorează",
        body: "CheqSplit calculează totalul, cât revine fiecăruia și cine, cui trebuie să trimită bani.",
        imageAlt: "CheqSplit: sume datorate, cine pe cine a plătit",
        bullets: [
          "Suma totală a cheltuielilor",
          "Rezultatul pentru fiecare",
          "Clar, cine cui, în ce sumă",
        ],
      },
      {
        label: "Păstrează excursia și raportul",
        body: "Arhivează excursiile încheiate sau exportă un PDF amănunțit cu costuri, totaluri și o grafică lizibilă.",
        imageAlt: "CheqSplit: raport al excursiei, rezumat",
        bullets: [
          "Arhivă de excursii finalizate",
          "Raport PDF detaliat",
          "Sume, tabele și grafice",
        ],
      },
    ],
  },
  useCases: {
    title: "Pentru orice cheltuială pe care o împarți",
    intro:
      "Când mergeți la restaurant, faceți o excursie cu prietenii sau puneți bani la comun la cumpărături, CheqSplit ține totul ordonat. Scanezi, atribui fiecare articol, treci reduceri sau comisioane, iar la final ai un decont clar, fără tabel făcut pe genunchi.",
    items: [
      {
        title: "Restaurant & cafenea",
        desc: "Vezi pe farfurie cine a luat ce și închideți seara fără nervi.",
      },
      { title: "Excursii de grup", desc: "O singură listă pentru mese, cazare și restul de drum." },
      { title: "Casă & familie", desc: "Alimente, evenimente, cheltuieli mici, împărțite corect." },
      {
        title: "Cumpărături împreună",
        desc: "Cadouri, aprovizionare, proiecte făcute pe banii câtorva oameni.",
      },
    ],
  },
  cta: {
    title: "Vrei să lași în urmă haosul de la decont?",
    body: "CheqSplit pune ordine pe notele la restaurant, pe excursiile cu bani la comun și te ajută pe toți să știți cine a plătit cât.",
    sectionAria: "Descarcă CheqSplit",
    imgAlt: "CheqSplit, aplicația prin care împarți la comun bonurile și plățile de grup",
    badgeAlts: {
      appStore: "Descarcă pe App Store",
      play: "Disponibil pe Google Play",
    },
    playSoon: "Curând",
    playDisabledHint: "În curând aici",
    groupAria: "Descarcă aplicația",
  },
  faq: {
    title: "Întrebări frecvente",
    items: [
      {
        q: "Ce este CheqSplit?",
        a: "E o aplicație ca să împarți notele de plată și cheltuielile comune: scanezi bonurile, ții evidența, vezi cine cui datorează bani — tot într-un singur loc.",
      },
      {
        q: "Pot împărți bonul pe fiecare articol în parte?",
        a: "Da. Alegi linie cu linie: fiecare plătește ce a consumat, nu cât iese la o împărțeală aproximativă.",
      },
      {
        q: "E potrivită pentru excursii la mai mulți oameni?",
        a: "Da. Deschizi o excursie, treci cheltuielile, inviți oamenii, atașezi bonurile (scanate sau importate), iar la final poți scoate un decont: cine a plătit cât.",
      },
      {
        q: "Mă ajută doar la restaurant sau și în alte situații?",
        a: "Da, ori de câte ori împarți bani la mai mulți: cumpărături, băuturi, ture prin țară, vacanțe, cum vrei tu.",
      },
      {
        q: "Rulează și fără rețea?",
        a: "O parte din date rămân pe telefon, dar partajarea excursiei cu ceilalți și sincronizarea au nevoie de internet.",
      },
      {
        q: "Cum invit pe cineva într-o excursie?",
        a: "Deschizi excursia, adaugi tranzacțiile, apoi trimiți linkul de invitație. Din el intră cei invitați și văd decontul, inclusiv cât mai are fiecare de plătit.",
      },
    ],
  },
  footer: {
    tagline: "Cheltuieli comune, fără interpretări — corect, rapid și pe înțelesul tuturor.",
    product: "Produs",
    company: "Companie",
    legal: "Legal",
    about: "Despre",
    contact: "Contact",
    privacy: "Confidențialitate",
    terms: "Termeni",
    rights: "Toate drepturile rezervate.",
  },
  a11y: {
    keyFeatures: "Puncte principale",
    primaryNav: "Navigare principală",
    howSection: "Cum funcționează",
    logoHome: "Prima pagină CheqSplit",
  },
};
