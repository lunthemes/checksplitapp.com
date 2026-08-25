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
    restaurant: "Nota de plată",
    groupExpenses: "Cheltuieli de grup",
    guides: "Ghiduri",
  },
  header: { download: "Descarcă gratuit" },
  hero: {
    title: "Împarte cheltuielile, scanează bonurile și lasă aplicația să facă restul",
    body: "CheqSplit te ajută să împarți nota, să scanezi bonurile, să urmărești plățile făcute de grup și să vezi ușor cine cui datorează bani, după cină, la drum, la magazin sau când vă puneți banii la comun. Aplicația se descarcă gratuit.",
    alts: [
      "CheqSplit: listă de cheltuieli la o călătorie de grup",
      "CheqSplit: ecran aplicație cu plăți împărțite",
      "CheqSplit: notă de plată, împărțire pe articole",
    ],
  },
  heroSlide2: {
    title: "Împarte nota de la restaurant mai rapid",
    description: "Scanează bonul, atribuie articolele și vezi clar partea fiecăruia — perfect pentru cine cu prietenii, întâlniri și mese de grup.",
    button: "Află cum să împarți nota și să scanezi bonuri",
  },
  workflows: {
    title: "Alege ce vrei să împarți",
    restaurantTitle: "O notă de restaurant",
    restaurantText:
      "Scanează bonul, verifică produsele, invită masa și atribuie fiecare produs persoanelor care l-au comandat sau l-au împărțit.",
    restaurantCta: "Împarte o notă de restaurant",
    groupTitle: "Cheltuieli de grup sau de călătorie",
    groupText:
      "Creează o călătorie pentru grup, invită participanții și adaugă cheltuielile pe măsură ce apar. Folosește Adaugă Cheltuială pentru taxi, hotel sau bilete. Folosește Adaugă Notă din fila Note pentru un bon de restaurant detaliat. Păstrează un singur istoric comun și vezi cine cui datorează.",
    groupCta: "Urmărește cheltuielile de grup",
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
      "Cinci pași: împarți notele de plată și cheltuielile comune, scanezi bonurile, urmărești decontul și vezi clar cine cui — de la o călătorie nouă la un raport de încredere.",
    stepPill: (n) => `PASUL ${n}`,
    steps: [
      {
        label: "Creează o călătorie în câteva secunde",
        body: "Dă-i un nume, invită-ți prietenii prin link sau cod QR și treci direct la împărțirea cheltuielilor comune.",
        imageAlt: "CheqSplit: călătorie de grup",
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
        label: "Vezi cine cui și cât datorează",
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
        imageAlt: "CheqSplit: raport al călătoriei, rezumat",
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
      "Când mergi la restaurant, faci o călătorie cu prietenii sau pui bani la comun la cumpărături, CheqSplit ține totul ordonat. Scanezi, atribui fiecare articol, treci reduceri sau comisioane, iar la final ai un decont clar, fără tabel făcut pe genunchi.",
    items: [
      {
        title: "Restaurante și cafenele",
        desc: "Vezi pe farfurie cine a luat ce și închideți seara fără nervi.",
      },
      { title: "Excursii de grup", desc: "O singură listă pentru mese, cazare și restul de drum." },
      { title: "Casă și familie", desc: "Alimente, evenimente, cheltuieli mici, împărțite corect." },
      {
        title: "Cumpărături împreună",
        desc: "Cadouri, aprovizionare, proiecte făcute pe banii câtorva oameni.",
      },
    ],
  },
  cta: {
    title: "Vrei să lași în urmă haosul de la decont?",
    body: "Descarcă gratuit CheqSplit: pune ordine pe notele la restaurant, pe excursiile cu bani la comun și ajută întregul grup să știe cine a plătit cât.",
    sectionAria: "Descarcă gratuit CheqSplit",
    imgAlt: "CheqSplit, aplicația prin care împarți la comun bonurile și plățile de grup",
    badgeAlts: {
      appStore: "Descarcă gratuit din App Store",
      play: "Descarcă gratuit din Google Play",
    },
    groupAria: "Descarcă gratuit aplicația",
  },
  faq: {
    title: "Întrebări frecvente",
    items: [
      {
        q: "Ce este CheqSplit?",
        a: "E o aplicație gratuită ca să împarți notele de plată și cheltuielile comune: scanezi bonurile, ții evidența, vezi cine cui datorează bani — tot într-un singur loc.",
      },
      {
        q: "Pot împărți bonul pe fiecare articol în parte?",
        a: "Da. Alegi linie cu linie: fiecare plătește ce a consumat, nu cât iese la o împărțeală aproximativă.",
      },
      {
        q: "Este potrivită pentru călătorii de grup?",
        a: "Da. Deschizi o călătorie, treci cheltuielile, inviți oamenii, atașezi bonurile (scanate sau importate), iar la final poți scoate un decont: cine a plătit cât.",
      },
      {
        q: "Mă ajută doar la restaurant sau și în alte situații?",
        a: "Da, ori de câte ori împarți bani la mai mulți: cumpărături, băuturi, ture prin țară, vacanțe, cum vrei tu.",
      },
      {
        q: "Funcționează și fără internet?",
        a: "O parte din date rămân pe telefon, dar partajarea călătoriei cu ceilalți și sincronizarea au nevoie de internet.",
      },
      {
        q: "Cum invit pe cineva într-o călătorie?",
        a: "Deschizi excursia, adaugi tranzacțiile, apoi trimiți linkul de invitație. Din el intră cei invitați și văd decontul, inclusiv cât mai are fiecare de plătit.",
      },
    ],
  },
  footer: {
    tagline: "Împarte corect cheltuielile de grup, fără calcule și presupuneri.",
    product: "Produs",
    company: "Companie",
    legal: "Informații juridice",
    about: "Asistență",
    contact: "Contact",
    privacy: "Politica de confidențialitate",
    terms: "Termeni și condiții",
    deleteAccount: "Șterge contul",
    deleteData: "Șterge datele",
    rights: "Toate drepturile rezervate.",
  },
  a11y: {
    keyFeatures: "Puncte principale",
    primaryNav: "Navigare principală",
    openMenu: "Deschide meniul",
    howSection: "Cum funcționează",
    logoHome: "Prima pagină CheqSplit",
  },
};
