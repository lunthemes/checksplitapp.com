import type { TripExpensesGuideCopy } from "./types";

export const tripExpensesGuideHu: TripExpensesGuideCopy = {
  metaTitle: "Így oszthatjátok fel az utazási költségeket barátokkal | CheqSplit",
  metaDescription: "Hozzatok létre egy közös utazást, rögzítsétek minden kiadásnál, ki fizetett és kik vettek részt benne, majd az utazás vége előtt ellenőrizzétek az egyenlegeket.",
  h1: "Így oszthatjátok fel az utazási költségeket barátokkal",
  answer: "Hozzatok létre egy közös utazást, rögzítsétek minden kiadásnál, ki fizetett és kik vettek részt benne, majd az utazás vége előtt ellenőrizzétek az egyenlegeket.",
  answerFollow: "Ha minden kiadást menet közben rögzítetek, az utazás végén nem kell újra összerakni az egész elszámolást.",
  rulesH2: "Már az utazás előtt állapodjatok meg a kiadások szabályairól",
  rulesBody: "Az első fizetés előtt döntsétek el, mely költségeket osztja az egész csoport, és melyek csak néhány embert érintenek. A szállás gyakran mindenkire vonatkozik, egy taxi vagy múzeumbelépő viszont lehet, hogy csak néhány résztvevőre. Külön rögzítsétek, ki fizetett és kik osztoztak a költségen, mert aki előre kifizette, nem feltétlenül része a felosztásnak. A kiadásokat addig adjátok hozzá, amíg az összegre és a résztvevőkre még pontosan emlékeztek. Ha több pénznemet használtok, előre egyezzetek meg a rögzítés módjáról — a CheqSplit nem vált át pénznemeket. Az elején lefektetett egyértelmű szabályok egységes elszámolást biztosítanak a végéig.",
  stepsH2: "Utazási költségek felosztása 5 lépésben",
  steps: [
    { title: "Hozd létre előre az utazást", desc: "Nevezd el, add hozzá a résztvevőket és a már meglévő költségeket, hogy az egész csoport egy közös nyilvántartásból induljon." },
    { title: "Rögzítsd, ki fizetett", desc: "Minden kiadásnál egyértelműen jelöld, ki fizetett — legyen szó jegyről, szállásról, közlekedésről, étteremről vagy a csoport számára kifizetett programról." },
    { title: "Válaszd ki a résztvevőket", desc: "Csak akkor jelölj mindenkit, ha a költség valóban mindenkire vonatkozik. Taxinál, programnál vagy étteremnél csak az érintetteket válaszd ki." },
    { title: "Add hozzá folyamatosan a kiadásokat", desc: "Rögzítsd az összegeket, amíg még jól emlékszel rájuk. A CheqSplitben nyisd meg az Kiadások fület, és válaszd az Kiadás Hozzáadása lehetőséget. Bármely résztvevő hozzáadhat kiadást." },
    { title: "Ellenőrizd az egyenlegeket", desc: "Az utazás lezárása vagy exportálása előtt ellenőrizd a közös történetet és azt, ki kinek mennyivel tartozik. Előbb egészítsd ki a hiányzó kiadásokat." }
  ],
  exampleH2: "Példa: egy hétvégi utazás költségeinek felosztása négy barát között",
  exampleIntro: "Alex, Blair, Casey és Dana együtt töltenek egy hétvégét. A szállás és a múzeumbelépők mindenkire vonatkoznak. A taxiban csak Alex, Blair és Casey utazott.",
  exampleExpenseCaption: "Kiadások",
  exampleExpenseRows: [
    {
      expense: "Szállás",
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
      expense: "Múzeumbelépők",
      payer: "Dana",
      participants: "Alex, Blair, Casey, Dana",
      amount: "€80.00",
    }
  ],
  exampleBalanceCaption: "Fizetett összeg és részesedés",
  exampleBalanceRows: [
    { person: "Alex", paid: "€400.00", share: "€135.00", net: "€265.00 jár neki" },
    { person: "Blair", paid: "€45.00", share: "€135.00", net: "€90.00 tartozása van" },
    { person: "Casey", paid: "€0.00", share: "€135.00", net: "€135.00 tartozása van" },
    { person: "Dana", paid: "€80.00", share: "€120.00", net: "€40.00 tartozása van" }
  ],
  exampleSettle: "Blair €90-ot fizet Alexnek, Casey €135-ot, Dana pedig €40-ot. A három fizetés együtt €265, pontosan annyi, amennyit Alexnek vissza kell kapnia.",
  exampleNote: "Részesedések: szállás €100 fejenként; taxi €15 fejenként a három utasnak; jegyek €20 fejenként. Dana nem utazott taxival, ezért az ő része €120 a €135 helyett. A CheqSplit kiszámolja ezeket az egyenlegeket, de nem utal pénzt.",
  productH2: "Kövesd a közös utazási kiadásokat a CheqSplittel",
  productBody: "A CheqSplittel létrehozhatsz egy utazást, minden kiadásnál rögzítheted a fizetőt és a résztvevőket, követheted a közös történetet, és láthatod, ki kinek mennyivel tartozik. A taxit, szállást vagy jegyeket az Kiadások fülön az Kiadás Hozzáadása segítségével, a tételes éttermi számlát pedig a Számlák fülön az Add Bill lehetőséggel adhatod hozzá. A végén archiváld az utazást és exportálj PDF-jelentést. A CheqSplit egyenlegeket számol, de nem utal pénzt és nem vált át pénznemeket.",
  productCta: "Csoportos és utazási kiadások követése a CheqSplittel",
  receiptNoteBefore: "Ha egy utazási kiadás tételes éttermi számla, először használd ",
  receiptNoteLabel: "a számlamegosztási módszert",
  receiptNoteAfter: " a tételekkel, díjakkal és borravalóval együtt. Ezután nyisd meg az utazás Számlák fülét, és válaszd az Add Bill lehetőséget.",
  faqH2: "Gyakori kérdések az utazási költségek felosztásáról",
  faq: [
    {
      q: "Minden kiadás automatikusan mindenkire vonatkozik?",
      a: "Nem. Csak azokat a résztvevőket válaszd ki, akiket az adott kiadás valóban érint.",
    },
    {
      q: "Mikor érdemes rögzíteni egy kiadást?",
      a: "Amint lehet — amíg az összeg, a fizető személy és az érintettek még egyértelműen emlékezetben vannak.",
    },
    {
      q: "Hogyan kell kezelni egy éttermi számlát?",
      a: "A tételes felosztáshoz használd az éttermi nyugtákhoz készült folyamatot, az adóval és borravalóval együtt. Ezután nyisd meg az utazás Számlák fülét, és válaszd az Add Bill lehetőséget.",
    },
    {
      q: "A CheqSplit átváltja a pénznemeket?",
      a: "Nem. A pénznemek átváltása nem igazolt CheqSplit-funkció. Az összegeket pontosan úgy rögzítsd, ahogy az adott kiadásnál szerepelnek.",
    },
  ],
  ctaTitle: "Az egész utazás egyetlen közös nyilvántartásban",
  ctaBody: "Hozz létre egy utazást a csoportnak, add hozzá a kiadásokat menet közben, és a végén a CheqSplit megmutatja, ki kinek mennyivel tartozik.",
  crumbGuides: "Útmutatók",
  crumbCurrent: "Utazási költségek",
  colExpense: "Kiadás",
  colPayer: "Fizető",
  colParticipants: "Résztvevők",
  colAmount: "Összeg",
  colPerson: "Személy",
  colPaid: "Fizetett",
  colShare: "Részesedés",
  colResult: "Eredmény",
};
