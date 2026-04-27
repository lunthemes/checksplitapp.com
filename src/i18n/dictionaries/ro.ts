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
      "Cinci pași de la o excursie nouă la un rezumat de care să poți avea toți încredere.",
    stepPill: (n) => `Pasul ${n}`,
    steps: [
      {
        label: "Deschide o excursie în câteva secunde",
        body: "Alege un nume, invită grupul, și ești gata, fără o grămadă de setări.",
        imageAlt: "CheqSplit: excursie de grup",
        bullets: [
          "Excursia se creează rapid",
          "Invită-ți prietenii ușor",
          "Pentru cină în oraș, weekend, concediu",
        ],
      },
      {
        label: "Note pe articol, fără bătăi de cap",
        body: "Bonul e detaliat pe articole: fiecare linie ajunge la persoanele care au comandat-o.",
        imageAlt: "CheqSplit: scanare bon, împărțire pe rând",
        bullets: [
          "Împărțire per linie",
          "Feluri împărțite, bacșiș, taxe",
          "Fără calcule forțate la jumătate",
        ],
      },
      {
        label: "Urmărește fiecare cheltuială",
        body: "Pui categorii, note și vezi toată imaginea, într-un singur jurnal al grupului.",
        imageAlt: "CheqSplit: cheltuieli comune, ecran mobil",
        bullets: [
          "Categorii utile",
          "Bonuri & notițe",
          "O singură cronologie pentru toți",
        ],
      },
      {
        label: "Stinge diferențele, pas cu pas",
        body: "Când cineva plătește, soldurile se actualizează — mai puține mesaje „cât îmi datorezi?”.",
        imageAlt: "CheqSplit: sume datorate, cine pe cine a plătit",
        bullets: [
          "Sume nete pe persoană",
          "Memento (opțional) pentru plată",
          "Rezumate pe care le poți trimite mai departe",
        ],
      },
      {
        label: "Raport clar la final",
        body: "Totaluri, cine a plătit ce și, dacă e nevoie, ceva vizual. Trimiți link sau imagine.",
        imageAlt: "CheqSplit: raport al excursiei, rezumat",
        bullets: [
          "Rezumat ușor de urmărit",
          "Partajare prin link sau imagine",
          "Confidențialitate, implicit",
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
