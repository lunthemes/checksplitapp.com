import type { Dictionary } from "../types";

export const ro: Dictionary = {
  meta: {
    title: "CheqSplit: împarte cheltuielile, scanează bonurile, urmărește facturile de grup",
    description:
      "CheqSplit te ajută să împarți cheltuielile, scanezi bonurile, urmărești facturile comune și vezi cine cui trebuie după restaurant, excursii, cumpărături sau activități de grup.",
    ogDescription:
      "Împarte cheltuielile corect: scanează bonurile, urmărește facturile de grup, vezi cine cui trebuie. Potrivit pentru excursii, colegi de apartament, familii.",
    twitterDescription:
      "Modul simplu de a împărți cheltuielile și facturile comune fără table și discuții inconfortabile.",
    softwareDescription:
      "CheqSplit te ajută să împarți cheltuielile, scanezi bonurile, urmărești facturile comune și vezi cine cui trebuie.",
  },
  nav: {
    features: "Funcții",
    how: "Cum funcționează",
    useCases: "Cazuri de utilizare",
    faq: "Întrebări frecvente",
  },
  header: { download: "Descarcă aplicația" },
  hero: {
    title: "Împarte cheltuielile, scanează bonurile, urmărește facturile de grup",
    body: "CheqSplit te ajută să împarți cheltuielile, scanezi bonurile, urmărești facturile comune și vezi cine cui trebuie după restaurant, excursii, cumpărături sau activități de grup.",
    alts: [
      "Ecran CheqSplit: excursie de grup și cheltuieli",
      "Ecran CheqSplit: aplicația mobilă cu cheltuieli comune",
      "Ecran CheqSplit: împărțire bon pe articole",
    ],
  },
  features: {
    title: "De ce CheqSplit?",
    items: [
      {
        title: "Scanează facturi instant",
        desc: "Folosește scanarea bonurilor pentru a captura articole, prețuri, taxe și totaluri în câteva secunde.",
      },
      {
        title: "Împarte pe articol",
        desc: "Atribuie fiecare linie de bon persoanelor potrivite, nu doar părți egale la ghici.",
      },
      {
        title: "Urmărește totul",
        desc: "Păstrează la un loc bonuri, cumpărături, costuri de excursie și cheltuieli comune.",
      },
      {
        title: "Vezi cine cui trebuie",
        desc: "CheqSplit calculează soldurile automat, ca toată lumea să știe ce de plătit.",
      },
    ],
  },
  how: {
    title: "Cum funcționează CheqSplit",
    subtitle:
      "Cinci pași clari, de la excursie la un raport lizibil în care toată lumea poate avea încredere.",
    stepPill: (n) => `Pasul ${n}`,
    steps: [
      {
        label: "Creează excursii în câteva secunde",
        body: "Botează excursia, invită prietenii și ești gata—fără setări complicate.",
        imageAlt: "Ecran excursie de grup în CheqSplit",
        bullets: [
          "Creare rapidă a excursiei",
          "Invitații dintr-un tap",
          "Potrivit și pentru cină, și pentru vacanță",
        ],
      },
      {
        label: "Împarte cheltuielile pe articol",
        body: "Bon pe articole: fiecare linie merge la cine trebuie, fără interpretări.",
        imageAlt: "Ecran CheqSplit: împarte bonul pe articol",
        bullets: [
          "Părțile pe rândul de bon",
          "Articole împărțite & tipuri de split",
          "Bacșișuri și comisioane tratare",
        ],
      },
      {
        label: "Urmărește fiecare cheltuială comună",
        body: "Clasifică cheltuielile și păstrează imaginea completă într-un total actualizat.",
        imageAlt: "Ecran CheqSplit: cheltuieli comune",
        bullets: [
          "Categorii utile",
          "Bonuri și notițe",
          "O singură cronologie pentru grup",
        ],
      },
      {
        label: "Reglează soldurile imediat",
        body: "Plătește la solduri care se actualizează pe măsură ce oamenii achită—fără a tot întreba.",
        imageAlt: "Ecran CheqSplit: soldul cine cui trebuie",
        bullets: [
          "Solduri nete",
          "Memento de plată (opțional)",
          "Rezumate exportabile",
        ],
      },
      {
        label: "Distribuie rapoarte de excursie clare",
        body: "Diagrame, totaluri și cine a plătit ce—gata de trimis sau revizuit ulterior.",
        imageAlt: "Ecran CheqSplit: raport de excursie",
        bullets: [
          "Rezumate vizuale",
          "Distribuie prin link sau ca imagine",
          "Confidențial implicit",
        ],
      },
    ],
  },
  useCases: {
    title: "Pentru orice cheltuială împărțită",
    intro:
      "Când vrei să împarți cheltuielile cu alții—de la o cină la o excursie—CheqSplit e făcut pentru situații reale: bon la restaurant, excursii de grup, cumpărături la comun cu colegii de apartament, cumpărături de familie și cumpărături cu prietenii. Fără calcule manuale: scanezi bonurile, aloci articole, adaugi comisioane sau reduceri și obții un rezumat clar al regularizării.",
    items: [
      {
        title: "Restaurante",
        desc: "Detalii pe farfurie, împărțit corect, regulat fără stres.",
      },
      { title: "Excursii de grup", desc: "Zboruri, hoteluri și mese la un loc." },
      { title: "Familii", desc: "Alimente, evenimente și facturi gospodărești." },
      {
        title: "Cumpărături comune",
        desc: "Cadouri, cumpărături în gros și proiecte cu prietenii.",
      },
    ],
  },
  cta: {
    title: "Gata să împarți fără bătăi de cap?",
    body: "Mii de grupuri împart cheltuielile fără stres.",
    sectionAria: "Descarcă CheqSplit",
    imgAlt: "Ecran aplicației CheqSplit pentru facturi împărțite",
    badgeAlts: {
      appStore: "Descarcă pe App Store",
      play: "Obține pe Google Play",
    },
    playSoon: "Curând",
    playDisabledHint: "Nedisponibil momentan",
    groupAria: "Descarcă aplicația",
  },
  faq: {
    title: "Întrebări frecvente",
    items: [
      {
        q: "Ce este CheqSplit?",
        a: "CheqSplit este o aplicație de împărțire a facturilor și de urmărire a cheltuielilor de grup, care te ajută să scanezi bonurile, împarți pe articol, urmărești costurile comune și vezi cine cui trebuie.",
      },
      {
        q: "Pot împărți un bon pe articol?",
        a: "Da. CheqSplit le permite fiecărui articol din bon să fie alocat unor anumiți oameni, ca fiecare să plătească doar ce a consumat.",
      },
      {
        q: "E bun CheqSplit pentru excursii de grup?",
        a: "Da. Poți crea o excursie, adăuga cheltuieli comune, invita participanți, atașa bonuri și genera un raport final cu cine cui trebuie.",
      },
      {
        q: "Pot folosi CheqSplit la restaurant?",
        a: "Da. E util la restaurante, cafenele, baruri, cumpărături, excursii și orice situație în care câțiva oameni împart plata.",
      },
      {
        q: "Funcționează CheqSplit offline?",
        a: "Poți gestiona local o parte din date, dar partajarea excursiilor și sincronizarea cu ceilalți necesită internet.",
      },
      {
        q: "Cum invit oamenii la o excursie?",
        a: "Creează o excursie în CheqSplit, adaugă cheltuieli, apoi partajează linkul excursiei ca prietenii să se alăture și să vadă soldul comun.",
      },
    ],
  },
  footer: {
    tagline: "Calea simplă de a împărți cheltuielile de grup—corect, rapid, clară.",
    product: "Produs",
    company: "Companie",
    legal: "Legale",
    about: "Despre",
    contact: "Contact",
    privacy: "Confidențialitate",
    terms: "Termeni",
    rights: "Toate drepturile rezervate.",
  },
  a11y: {
    keyFeatures: "Funcții principale",
    primaryNav: "Principal",
    howSection: "Cum funcționează",
    logoHome: "Pagină acasă CheqSplit",
  },
};
