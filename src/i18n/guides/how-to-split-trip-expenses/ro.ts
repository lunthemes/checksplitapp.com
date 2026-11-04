import type { TripExpensesGuideCopy } from "./types";

export const tripExpensesGuideRo: TripExpensesGuideCopy = {
  metaTitle: "Cum împarți cheltuielile de călătorie cu prietenii | CheqSplit",
  metaDescription: "Creează o singură călătorie, înregistrează cine a plătit și cine a participat la fiecare cheltuială și verifică soldurile înainte de încheierea călătoriei.",
  h1: "Cum împarți cheltuielile de călătorie cu prietenii",
  answer: "Creează o singură călătorie, înregistrează cine a plătit și cine a participat la fiecare cheltuială și verifică soldurile înainte de încheierea călătoriei.",
  answerFollow: "Dacă înregistrezi fiecare cheltuială pe măsură ce apare, grupul nu va trebui să refacă toate calculele la finalul călătoriei.",
  rulesH2: "Stabiliți regulile pentru cheltuieli înainte de călătorie",
  rulesBody: "Înainte de prima plată, stabiliți ce costuri împărțiți cu toții și care privesc doar anumite persoane. Înregistrați plătitorul separat de participanți și adăugați fiecare cheltuială la timp. Alegeți moneda grupului pentru solduri. Pentru cheltuieli în altă monedă, verificați cursul de referință și data, introduceți un curs manual sau suma debitată efectiv de bancă în moneda grupului. Regulile clare păstrează evidența consecventă.",
  stepsH2: "Cum împarți cheltuielile de călătorie în 5 pași",
  steps: [
    { title: "Creează un grup pentru călătorie", desc: "Pe ecranul principal, apasă Creează grup, denumește grupul, alege moneda și invită participanții prin link sau cod QR." },
    { title: "Înregistrează cine a plătit", desc: "Indică explicit cine a plătit fiecare cheltuială: bilete, cazare, transport, restaurant sau o activitate achitată pentru grup." },
    { title: "Selectează participanții", desc: "Include pe toată lumea doar dacă toți au împărțit costul. Pentru taxi, activitate sau restaurant, selectează doar persoanele implicate." },
    { title: "Adaugă cheltuielile pe măsură ce apar", desc: "Deschide Cheltuieli și apasă Adaugă cheltuială. Introdu descrierea, suma și moneda, alege opțional o categorie și plătitorul, apoi Toți sau Personalizat pentru participanți. Orice participant poate adăuga o cheltuială." },
    { title: "Verifică soldurile", desc: "Verifică istoricul comun și cine cui datorează înainte să închei sau să exporți călătoria. Completează mai întâi eventualele cheltuieli lipsă." }
  ],
  exampleH2: "Exemplu: împărțirea cheltuielilor unui weekend între patru prieteni",
  exampleIntro: "Alex, Blair, Casey și Dana petrec un weekend împreună. Hotelul și biletele la muzeu sunt pentru toți. Taxiul este doar pentru Alex, Blair și Casey.",
  exampleExpenseCaption: "Cheltuieli",
  exampleExpenseRows: [
    {
      expense: "Hotel",
      payer: "Alex",
      participants: "Alex, Blair, Casey, Dana",
      amount: "€400.00",
    },
    {
      expense: "Taxi",
      payer: "Blair",
      participants: "Alex, Blair, Casey",
      amount: "€45.00",
    },
    {
      expense: "Bilete la muzeu",
      payer: "Dana",
      participants: "Alex, Blair, Casey, Dana",
      amount: "€80.00",
    }
  ],
  exampleBalanceCaption: "Plătit versus partea datorată",
  exampleBalanceRows: [
    { person: "Alex", paid: "€400.00", share: "€135.00", net: "are de primit €265.00" },
    { person: "Blair", paid: "€45.00", share: "€135.00", net: "datorează €90.00" },
    { person: "Casey", paid: "€0.00", share: "€135.00", net: "datorează €135.00" },
    { person: "Dana", paid: "€80.00", share: "€120.00", net: "datorează €40.00" }
  ],
  exampleSettle: "Blair îi plătește lui Alex €90, Casey îi plătește €135, iar Dana €40. Cele trei plăți însumează €265, exact cât are Alex de primit.",
  exampleNote: "Părți: hotel €100 de persoană; taxi €15 de persoană pentru cei trei pasageri; bilete €20 de persoană. Dana nu a mers cu taxiul, așa că partea ei este €120 în loc de €135. CheqSplit poate calcula aceste solduri; nu transferă bani.",
  productH2: "Urmărește cheltuielile comune de călătorie cu CheqSplit",
  productBody: "Creează un grup din ecranul principal, alege moneda și invită participanții. Din Cheltuieli, apasă Adaugă cheltuială pentru cazare, taxi sau bilete: introdu suma, moneda, plătitorul și participanții prin Toți sau Personalizat; categoria este opțională. Din Bonuri, Adaugă bon deschide scanarea sau încărcarea. Verifică produsele, apoi împarte pe produse sau egal. Pentru altă monedă, folosește cursul de referință și data, un curs manual sau debitul bancar efectiv în moneda grupului. Verifică soldurile, exportă un raport PDF sau arhivează grupul. CheqSplit nu transferă bani.",
  productCta: "Urmărește cheltuielile de grup și de călătorie cu CheqSplit",
  receiptNoteBefore: "Dacă o cheltuială din călătorie este o notă de restaurant împărțită pe produse, folosește ",
  receiptNoteLabel: "metoda de împărțire a bonului",
  receiptNoteAfter: " direct din fila Bonuri a grupului, prin Adaugă bon. Scanează sau încarcă bonul, verifică produsele și totalul, apoi împarte pe produse sau egal; bonul se asociază automat grupului.",
  faqH2: "Întrebări frecvente despre împărțirea cheltuielilor de călătorie",
  faq: [
    {
      q: "Fiecare cheltuială trebuie împărțită între toți?",
      a: "Nu. Selectează doar participanții implicați în acea cheltuială.",
    },
    {
      q: "Când trebuie înregistrată o cheltuială?",
      a: "Cât mai curând posibil, cât timp suma, persoana care a plătit și participanții sunt încă ușor de reținut.",
    },
    {
      q: "Cum trebuie gestionată o notă de restaurant?",
      a: "În grup, deschide Bonuri și apasă Adaugă bon pentru a scana sau încărca un bon. Verifică produsele și totalul detectat; bonul se asociază automat grupului. Apoi începe împărțirea pe produse sau alege Împarte egal.",
    },
    {
      q: "CheqSplit convertește valutele?",
      a: "Da. Cheltuielile grupului pot fi în altă monedă. Verifică cursul de referință și data, introdu un curs manual sau debitul bancar efectiv în moneda grupului. CheqSplit folosește suma convertită pentru soldurile grupului; nu transferă bani.",
    },
  ],
  ctaTitle: "Păstrează întreaga călătorie într-un singur istoric comun",
  ctaBody: "Creează o călătorie pentru grup, adaugă cheltuielile pe măsură ce apar și lasă CheqSplit să arate cine cui datorează la final.",
  crumbGuides: "Ghiduri",
  crumbCurrent: "Cheltuieli de călătorie",
  colExpense: "Cheltuială",
  colPayer: "Plătitor",
  colParticipants: "Participanți",
  colAmount: "Sumă",
  colPerson: "Persoană",
  colPaid: "Plătit",
  colShare: "Parte",
  colResult: "Rezultat",
};
