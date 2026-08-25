import type { GroupExpenseTrackerCopy } from "./types";
import { groupExpenseTrackerEn } from "./en";

export const groupExpenseTrackerRo: GroupExpenseTrackerCopy = {
  metaTitle: "Urmărește cheltuielile de grup și vezi cine cui datorează | CheqSplit",
  metaDescription: "Păstrează toate cheltuielile comune într-un singur loc, notează cine a plătit și cine a participat la fiecare cheltuială și vezi oricând soldurile grupului.",
  softwareDescription: "Păstrează toate cheltuielile comune într-un singur loc, notează cine a plătit și cine a participat la fiecare cheltuială și vezi oricând soldurile grupului.",
  h1: "Urmărește cheltuielile de grup și vezi cine cui datorează",
  heroText: "Păstrează toate cheltuielile comune într-un singur loc, notează cine a plătit și cine a participat la fiecare cheltuială și vezi oricând soldurile grupului.",
  downloadCta: "Descarcă gratuit",
  secondaryCta: "",
  nav: {
    how: "Cum funcționează evidența cheltuielilor de grup",
    faq: "Întrebări frecvente",
  },
  timelineH2: "Un istoric comun al cheltuielilor, în locul mesajelor împrăștiate",
  timelineText: "O persoană plătește hotelul, alta cumpără biletele, iar altcineva achită taxiul. În loc să căutați ulterior prin mesaje și notițe, CheqSplit păstrează fiecare cheltuială într-un singur istoric comun.",
  howH2: "Cum funcționează evidența cheltuielilor de grup",
  steps: [
    {
      title: "Invită grupul în călătorie",
      text: "După ce creezi și denumești călătoria, invită participanții prin link sau cod QR.",
      imageAlt: "Invită grupul în călătorie",
    },
    {
      title: "Adaugă fiecare cheltuială",
      text: "Deschide fila Cheltuieli și apasă Adaugă Cheltuială. Introdu descrierea și suma, alege cine a plătit și selectează cine a participat la cheltuială.",
      imageAlt: "Adaugă fiecare cheltuială",
    },
    {
      title: "Alege cine a participat la cheltuială",
      text: "Selectează Toți sau Personalizat, apoi bifează doar persoanele care au împărțit acea cheltuială.",
      imageAlt: "Alege cine a participat la cheltuială",
    },
    {
      title: "Urmărește istoricul cheltuielilor comune",
      text: "Fiecare cheltuială adăugată apare în fila Cheltuieli cu suma, plătitorul și participanții.",
      imageAlt: "Urmărește istoricul cheltuielilor comune",
    },
    {
      title: "Vezi cine cui datorează",
      text: "Deschide Rezumat pentru a vedea cine are de primit și cine are de plătit. CheqSplit calculează soldurile; nu transferă bani.",
      imageAlt: "Vezi cine cui datorează",
    }
  ],
  subsetH2: "Folosește împărțirea potrivită pentru fiecare cheltuială",
  subsetText: "Nu orice cheltuială aparține tuturor. Adaugă taxiul doar persoanelor care au mers cu el, biletele doar celor care au participat și cheltuielile comune întregului grup. Pentru o notă detaliată de restaurant, folosește fila Note și Adaugă Notă.",
  receiptBridgeH2: "Adaugă în călătorie o notă de restaurant împărțită pe produse",
  receiptBridgeText: "Când grupul are o notă detaliată de restaurant, folosește fluxul de împărțire a bonului pentru a atribui produsele, inclusiv taxele și bacșișul. Apoi deschide fila Note din călătorie și apasă Adaugă Notă.",
  receiptBridgeCta: "Vezi cum funcționează împărțirea bonului",
  reportH2: "Încheie cu un istoric la care grupul poate reveni",
  reportText: "Arhivează călătoria și exportă un raport PDF cu cheltuielile, totalurile, tabelele și graficul. Rezultatul este mai ușor de verificat decât un calcul final făcut doar din memorie.",
  fitsH2: "Când este potrivit CheqSplit",
  fits: [
    "Un weekend sau o vacanță cu prietenii",
    "O călătorie de grup cu cazare, transport, mese, bilete sau activități",
    "Mai multe cheltuieli de călătorie plătite de persoane diferite",
    "O notă de restaurant detaliată, adăugată din fila Note cu Adaugă Notă",
  ],
  faqH2: "Întrebări frecvente despre cheltuielile de grup",
  faq: [
    {
      q: "Pot persoane diferite să adauge cheltuieli?",
      a: "Da. Orice participant poate deschide fila Cheltuieli și apăsa Adaugă Cheltuială. Pentru un bon detaliat, folosește fila Note și apasă Adaugă Notă.",
    },
    {
      q: "O cheltuială poate fi împărțită doar între anumite persoane?",
      a: "Da. Alege Toți sau Personalizat, apoi selectează doar participanții care au împărțit acea cheltuială.",
    },
    {
      q: "Pot scana un bon pentru o cheltuială din călătorie?",
      a: "Folosește fluxul pentru bonul de restaurant ca să faci împărțirea pe produse, inclusiv taxele și bacșișul. Apoi deschide fila Note din călătorie și apasă Adaugă Notă.",
    },
    {
      q: "Cum aflu cine trebuie să plătească și cui?",
      a: "CheqSplit combină cheltuielile grupului și arată soldurile rezultate — cine cui datorează. Calculează părțile fiecăruia, dar nu transferă bani.",
    },
    {
      q: "Pot exporta rezultatul?",
      a: "Da. CheqSplit poate exporta un raport PDF detaliat cu cheltuieli, totaluri, tabele și un grafic, iar o călătorie finalizată poate fi arhivată.",
    },
  ],
  ctaTitle: "Păstrează toate cheltuielile grupului într-un singur loc",
  ctaBody: "Creează o călătorie, adaugă cheltuielile pe măsură ce apar și lasă CheqSplit să arate cine cui datorează.",
  internalRestaurantBefore: "Ai de împărțit un singur bon de cină pe produse? Folosește ",
  internalRestaurantLabel: "împărțirea notei de restaurant",
  internalRestaurantAfter: " pentru scanare, invitație și atribuirea produselor în timp real.",
  guideBridgeBefore: "Preferi mai întâi metoda pas cu pas? Citește ",
  guideBridgeLabel: "cum împarți cheltuielile de călătorie cu prietenii",
  guideBridgeAfter: ".",
  a11y: {
    nav: groupExpenseTrackerEn.a11y.nav,
    hero: "Urmărește cheltuielile de grup și vezi cine cui datorează",
    timeline: "Un istoric comun al cheltuielilor, în locul mesajelor împrăștiate",
    how: "Cum funcționează evidența cheltuielilor de grup",
    subset: "Folosește împărțirea potrivită pentru fiecare cheltuială",
    receipt: "Adaugă în călătorie o notă de restaurant împărțită pe produse",
    report: "Încheie cu un istoric la care grupul poate reveni",
    fits: "Când este potrivit CheqSplit",
    faq: "Întrebări frecvente despre cheltuielile de grup",
  },
};
