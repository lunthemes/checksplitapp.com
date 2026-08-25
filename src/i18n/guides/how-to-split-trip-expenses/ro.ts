import type { TripExpensesGuideCopy } from "./types";

export const tripExpensesGuideRo: TripExpensesGuideCopy = {
  metaTitle: "Cum împarți cheltuielile de călătorie cu prietenii | CheqSplit",
  metaDescription: "Creează o singură călătorie, înregistrează cine a plătit și cine a participat la fiecare cheltuială și verifică soldurile înainte de încheierea călătoriei.",
  h1: "Cum împarți cheltuielile de călătorie cu prietenii",
  answer: "Creează o singură călătorie, înregistrează cine a plătit și cine a participat la fiecare cheltuială și verifică soldurile înainte de încheierea călătoriei.",
  answerFollow: "Dacă înregistrezi fiecare cheltuială pe măsură ce apare, grupul nu va trebui să refacă toate calculele la finalul călătoriei.",
  rulesH2: "Stabiliți regulile pentru cheltuieli înainte de călătorie",
  rulesBody: "Înainte de prima plată, stabiliți ce costuri aparțin întregului grup și care îi privesc doar pe unii participanți. Cazarea este adesea împărțită de toată lumea; un taxi sau un bilet la muzeu poate fi doar pentru câteva persoane. Notează separat cine a plătit și cine a participat, deoarece persoana care achită nu este întotdeauna inclusă în împărțire. Adaugă fiecare cheltuială cât timp suma și participanții sunt încă ușor de reținut. Dacă folosiți mai multe monede, stabiliți de la început cum le veți înregistra — CheqSplit nu face conversii valutare. Reguli clare de la început mențin istoricul consecvent până la calculul final.",
  stepsH2: "Cum împarți cheltuielile de călătorie în 5 pași",
  steps: [
    { title: "Creează călătoria din timp", desc: "Dă-i un nume, adaugă persoanele implicate și introdu orice costuri deja existente, astfel încât grupul să pornească de la un singur istoric." },
    { title: "Înregistrează cine a plătit", desc: "Indică explicit cine a plătit fiecare cheltuială: bilete, cazare, transport, restaurant sau o activitate achitată pentru grup." },
    { title: "Selectează participanții", desc: "Include pe toată lumea doar dacă toți au împărțit costul. Pentru taxi, activitate sau restaurant, selectează doar persoanele implicate." },
    { title: "Adaugă cheltuielile pe măsură ce apar", desc: "Introdu sumele cât încă sunt proaspete în memorie. În CheqSplit, deschide fila Cheltuieli și apasă Adaugă Cheltuială. Orice participant poate adăuga o cheltuială." },
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
  productBody: "CheqSplit îți permite să creezi o călătorie, să notezi cine a plătit și participanții fiecărei cheltuieli, să păstrezi istoricul comun vizibil și să vezi cine cui datorează. Adaugă taxiul, hotelul sau biletele din fila Cheltuieli cu Adaugă Cheltuială. Adaugă un bon de restaurant detaliat din fila Note cu Adaugă Notă. La final, arhivează călătoria și exportă un raport PDF. CheqSplit calculează soldurile; nu transferă bani și nu convertește valute.",
  productCta: "Urmărește cheltuielile de grup și de călătorie cu CheqSplit",
  receiptNoteBefore: "Dacă o cheltuială din călătorie este o notă de restaurant împărțită pe produse, folosește ",
  receiptNoteLabel: "metoda de împărțire a bonului",
  receiptNoteAfter: ", inclusiv taxele și bacșișul. Apoi deschide fila Note din călătorie și apasă Adaugă Notă.",
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
      a: "Folosește fluxul pentru bonul de restaurant ca să faci împărțirea pe produse, inclusiv taxele și bacșișul. Apoi deschide fila Note din călătorie și apasă Adaugă Notă.",
    },
    {
      q: "CheqSplit convertește valutele?",
      a: "Nu. Conversia valutară nu este o funcționalitate confirmată a CheqSplit. Înregistrează sumele exact așa cum apar pe cheltuială.",
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
