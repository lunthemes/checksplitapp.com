import type { RestaurantBillGuideCopy } from "./types";

export const restaurantBillGuideHu: RestaurantBillGuideCopy = {
  metaTitle: "Így oszthatjátok fel igazságosan az éttermi számlát | CheqSplit",
  metaDescription: "Ellenőrizzétek a teljes nyugtát, rendeljétek hozzá az egyéni tételeket, osszátok fel a közös tételeket a megfelelő személyek között, és győződjetek meg róla, hogy minden összeg kiadja a számla végösszegét.",
  h1: "Így oszthatjátok fel igazságosan az éttermi számlát",
  answer: "Ellenőrizzétek a teljes nyugtát, rendeljétek hozzá az egyéni tételeket, osszátok fel a közös tételeket a megfelelő személyek között, és győződjetek meg róla, hogy minden összeg kiadja a számla végösszegét.",
  choiceH2: "Válasszatok az egyenlő és a tételenkénti felosztás között",
  choiceBody: "Az egyenlő felosztás a leggyorsabb, ha a rendelések hasonlóak, és mindenki ugyanakkora részt szeretne fizetni. Ha viszont különböző ételeket és italokat rendeltetek, általában igazságosabb a tételenkénti felosztás: először mindenkihez rendeljétek hozzá a saját rendelését. A közösen fogyasztott tálakat, palackokat és desszerteket csak azok között osszátok fel, akik valóban fogyasztottak belőlük. Ezután adjátok hozzá a szervizdíjat, adókat és borravalót úgy, hogy az egyéni összegek pontosan kiadják a számla végösszegét. Ha az összegek nem egyeznek, valószínűleg kimaradt egy tétel vagy díj. Így az elszámolás a valódi számlán alapul, nem becslésen.",
  stepsH2: "Így oszthatjátok fel igazságosan az éttermi számlát 5 lépésben",
  steps: [
    { title: "Ellenőrizzétek a nyugtát", desc: "A felosztás előtt ellenőrizzetek minden tételt és a végösszeget." },
    { title: "Rendeljétek hozzá az egyéni rendeléseket", desc: "Mindenkihez csak azokat az ételeket és italokat rendeljétek, amelyeket ő rendelt. Kezdjétek az egyértelmű tételekkel." },
    { title: "Osszátok fel a közös tételeket", desc: "Csak azok vegyenek részt egy közös tál vagy palack költségében, akik fogyasztottak belőle. Osszátok egyenlően vagy az előre megbeszélt arányban." },
    { title: "Ellenőrizzétek a fennmaradó összegeket", desc: "Keressetek hozzá nem rendelt tételeket, beolvasási hibákat, illetve még fel nem osztott adót vagy borravalót." },
    { title: "Mutassátok meg az eredményt", desc: "Mindenki lássa a saját részét és a végső egyenleget, hogy még az asztalnál ellenőrizni tudjátok az elszámolást." }
  ],
  exampleH2: "Példa: éttermi számla felosztása négy ember között",
  exampleIntro: "Maya, Noah, Owen és Priya egy számlán osztoznak. Maya és Noah egy üveg bort is közösen fogyaszt. Az ételek és italok részösszegére 10% szervizdíj kerül.",
  exampleReceiptCaption: "Számla",
  exampleReceiptRows: [
    { item: "Tészta (Maya)", amount: "€15.00" },
    { item: "Burger (Noah)", amount: "€15.00" },
    { item: "Grillezett hal (Owen)", amount: "€20.00" },
    { item: "Saláta (Priya)", amount: "€10.00" },
    { item: "Egy üveg bor (Maya és Noah)", amount: "€20.00" },
    { item: "Részösszeg", amount: "€80.00" },
    { item: "Szervizdíj (10%)", amount: "€8.00" },
    { item: "Számla végösszege", amount: "€88.00" }
  ],
  exampleShareCaption: "Fizetendő összeg",
  exampleShareRows: [
    { person: "Maya (tészta €15 + a bor fele €10 + szerviz €2.50)", amount: "€27.50" },
    { person: "Noah (burger €15 + a bor fele €10 + szerviz €2.50)", amount: "€27.50" },
    { person: "Owen (hal €20 + szerviz €2.00)", amount: "€22.00" },
    { person: "Priya (saláta €10 + szerviz €1.00)", amount: "€11.00" },
    { person: "A négy rész összege", amount: "€88.00" }
  ],
  exampleNote: "A szervizdíj az egyes személyek étel- és italfogyasztásának arányában oszlik meg: Maya és Noah egyaránt €25-öt képvisel a €80 részösszegből, Owen €20-at, Priya pedig €10-et. A négy rész együtt pontosan €88, vagyis a számla végösszege.",
  productH2: "Oszd fel az éttermi számlát tételek szerint a CheqSplittel",
  productBody: "A CheqSplit ugyanezt a folyamatot valósítja meg: beolvassa az éttermi nyugtát, linkkel vagy QR-kóddal megosztja a számlát, hozzárendeli az egyéni és közös tételeket, külön kezeli a díjakat és a borravalót, majd megmutatja, ki kinek mennyivel tartozik. A CheqSplit egyenlegeket számol, de nem utal pénzt.",
  productCta: "Éttermi számla felosztása a CheqSplittel",
  faqH2: "Gyakori kérdések az éttermi számla felosztásáról",
  faq: [
    {
      q: "Mindig egyenlően kell felosztani a számlát?",
      a: "Csak akkor, ha a csoport ebben megegyezik, és a rendelések hasonlóak. Ha mindenki mást rendelt, úgy rendeld hozzá a tételeket, hogy mindenki összege azt tükrözze, amit valóban fogyasztott.",
    },
    {
      q: "Hogyan kell felosztani egy közös tételt?",
      a: "Az érintett személyek között — egyenlően vagy az előre megbeszélt arányban, ha nem azonos részt fogyasztottak.",
    },
    {
      q: "Miért tér el néha a végösszeg?",
      a: "Ellenőrizd a hozzá nem rendelt tételeket, a beolvasási vagy beviteli hibákat, valamint az adót vagy borravalót a Díjak és Borravaló részben, hogy a felosztott összeg pontosan megegyezzen a nyugtán szereplő végösszeggel.",
    },
  ],
  ctaTitle: "Készen álltok arra, hogy még az asztalnál felosszátok a számlát?",
  ctaBody: "Olvasd be a számlát, rendeld a tételeket azokhoz, akik rendelték őket, és azonnal láthatjátok, ki kinek mennyivel tartozik.",
  crumbGuides: "Útmutatók",
  crumbCurrent: "Éttermi számla",
  colItem: "Tétel",
  colAmount: "Összeg",
  colPerson: "Személy",
  colDue: "Fizetendő összeg",
};
