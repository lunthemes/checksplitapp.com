import type { RestaurantBillGuideCopy } from "./types";

export const restaurantBillGuideRo: RestaurantBillGuideCopy = {
  metaTitle: "Cum împarți echitabil nota de plată la restaurant | CheqSplit",
  metaDescription: "Verifică bonul final, atribuie produsele individuale, împarte produsele comune între persoanele potrivite și asigură-te că toate sumele corespund totalului notei.",
  h1: "Cum împarți echitabil nota de plată la restaurant",
  answer: "Verifică bonul final, atribuie produsele individuale, împarte produsele comune între persoanele potrivite și asigură-te că toate sumele corespund totalului notei.",
  choiceH2: "Alege între împărțirea egală și împărțirea pe produse",
  choiceBody: "Împărțirea egală este cea mai rapidă atunci când comenzile sunt asemănătoare și toată lumea este de acord să împartă totalul. Dacă oamenii au comandat feluri de mâncare sau băuturi diferite, împărțirea pe produse este de obicei mai corectă: atribuie mai întâi fiecărei persoane propriile produse. Platourile, sticlele sau deserturile comune trebuie împărțite doar între cei care au consumat din ele. După atribuirea produselor, adaugă taxele, serviciul și bacșișul astfel încât toate sumele să ajungă la totalul bonului. Dacă nu coincid, probabil lipsește o poziție sau o taxă. Astfel, împărțirea rămâne legată de nota reală, nu de o estimare.",
  stepsH2: "Cum împarți nota de plată în 5 pași",
  steps: [
    { title: "Verifică bonul", desc: "Confirmă fiecare poziție și totalul final înainte ca cineva să înceapă împărțirea sumelor." },
    { title: "Atribuie comenzile individuale", desc: "Dă fiecărei persoane doar felurile de mâncare și băuturile pe care le-a comandat. Începe cu pozițiile evidente." },
    { title: "Împarte produsele comune", desc: "Include doar persoanele care au împărțit un platou sau o sticlă. Împarte egal sau după un procent convenit dacă porțiile nu au fost egale." },
    { title: "Verifică sumele rămase", desc: "Caută produse neatribuite, erori de scanare și taxe sau bacșiș rămase în afara împărțirii." },
    { title: "Arată rezultatul", desc: "Fiecare persoană trebuie să-și poată vedea partea și soldul rezultat înainte ca grupul să plece de la masă." }
  ],
  exampleH2: "Exemplu: împărțirea unei note de plată între patru persoane",
  exampleIntro: "Maya, Noah, Owen și Priya împart aceeași notă. Maya și Noah împart și o sticlă de vin. La subtotalul pentru mâncare și băuturi se aplică un serviciu de 10%.",
  exampleReceiptCaption: "Bon",
  exampleReceiptRows: [
    { item: "Paste (Maya)", amount: "€15.00" },
    { item: "Burger (Noah)", amount: "€15.00" },
    { item: "Pește la grătar (Owen)", amount: "€20.00" },
    { item: "Salată (Priya)", amount: "€10.00" },
    { item: "Sticlă de vin (Maya și Noah)", amount: "€20.00" },
    { item: "Subtotal", amount: "€80.00" },
    { item: "Serviciu (10%)", amount: "€8.00" },
    { item: "Total bon", amount: "€88.00" }
  ],
  exampleShareCaption: "Sumă de plată",
  exampleShareRows: [
    { person: "Maya (paste €15 + jumătate din vin €10 + serviciu €2.50)", amount: "€27.50" },
    { person: "Noah (burger €15 + jumătate din vin €10 + serviciu €2.50)", amount: "€27.50" },
    { person: "Owen (pește €20 + serviciu €2.00)", amount: "€22.00" },
    { person: "Priya (salată €10 + serviciu €1.00)", amount: "€11.00" },
    { person: "Totalul celor patru părți", amount: "€88.00" }
  ],
  exampleNote: "Serviciul este distribuit proporțional cu mâncarea și băuturile fiecărei persoane: Maya și Noah au câte €25 din subtotalul de €80, Owen €20, iar Priya €10. Cele patru părți însumează exact totalul de €88 al bonului.",
  productH2: "Împarte o notă de restaurant pe produse cu CheqSplit",
  productBody: "CheqSplit aplică aceiași pași: scanează bonul de restaurant, distribuie nota prin link sau cod QR, atribuie produsele individuale și comune, păstrează taxele și bacșișul ca sume separate și arată cine cui datorează. CheqSplit calculează soldurile; nu transferă bani.",
  productCta: "Împarte un bon de restaurant cu CheqSplit",
  faqH2: "Întrebări frecvente despre împărțirea notei de plată",
  faq: [
    {
      q: "Nota trebuie împărțită întotdeauna în mod egal?",
      a: "Doar dacă grupul este de acord și comenzile sunt asemănătoare. Dacă oamenii au comandat lucruri diferite, atribuie produsele astfel încât totalul fiecăruia să corespundă cu ceea ce a consumat.",
    },
    {
      q: "Cum trebuie împărțit un produs consumat în comun?",
      a: "Între persoanele care au participat — în mod egal sau după un procent convenit atunci când părțile nu sunt egale.",
    },
    {
      q: "De ce uneori nu corespund totalurile?",
      a: "Verifică produsele neatribuite, eventualele erori de scanare sau introducere și taxele ori bacșișul din Taxe și Bacșiș, astfel încât împărțirea să corespundă totalului de pe bon.",
    },
  ],
  ctaTitle: "Gata să împărțiți nota direct la masă?",
  ctaBody: "Scanează nota de plată, atribuie produsele persoanelor care le-au comandat și vezi clar cine cui datorează.",
  crumbGuides: "Ghiduri",
  crumbCurrent: "Nota de plată",
  colItem: "Produs",
  colAmount: "Sumă",
  colPerson: "Persoană",
  colDue: "Sumă de plată",
};
