import type { TripExpensesGuideCopy } from "./types";

export const tripExpensesGuideHu: TripExpensesGuideCopy = {
  metaTitle: "Így oszthatjátok fel az utazási költségeket barátokkal | CheqSplit",
  metaDescription: "Hozzatok létre egy közös utazást, rögzítsétek minden kiadásnál, ki fizetett és kik vettek részt benne, majd az utazás vége előtt ellenőrizzétek az egyenlegeket.",
  h1: "Így oszthatjátok fel az utazási költségeket barátokkal",
  answer: "Hozzatok létre egy közös utazást, rögzítsétek minden kiadásnál, ki fizetett és kik vettek részt benne, majd az utazás vége előtt ellenőrizzétek az egyenlegeket.",
  answerFollow: "Ha minden kiadást menet közben rögzítetek, az utazás végén nem kell újra összerakni az egész elszámolást.",
  rulesH2: "Már az utazás előtt állapodjatok meg a kiadások szabályairól",
  rulesBody: "Az első fizetés előtt egyezzetek meg, mely költségek vonatkoznak mindenkire, és melyek csak néhány emberre. A fizetőt a résztvevőktől külön rögzítsétek, és folyamatosan adjátok hozzá a kiadásokat. Válasszatok csoportpénznemet az egyenlegekhez. Más pénznemnél ellenőrizzétek a referenciaárfolyamot és dátumát, adjatok meg kézi árfolyamot vagy a bank által ténylegesen levont összeget a csoport pénznemében. Az egyértelmű szabályok egységes nyilvántartást biztosítanak.",
  stepsH2: "Utazási költségek felosztása 5 lépésben",
  steps: [
    { title: "Hozz létre csoportot az utazáshoz", desc: "A kezdőképernyőn koppints a Csoport létrehozása gombra, nevezd el a csoportot, válassz pénznemet, majd hívj meg résztvevőket hivatkozással vagy QR-kóddal." },
    { title: "Rögzítsd, ki fizetett", desc: "Minden kiadásnál egyértelműen jelöld, ki fizetett — legyen szó jegyről, szállásról, közlekedésről, étteremről vagy a csoport számára kifizetett programról." },
    { title: "Válaszd ki a résztvevőket", desc: "Csak akkor jelölj mindenkit, ha a költség valóban mindenkire vonatkozik. Taxinál, programnál vagy étteremnél csak az érintetteket válaszd ki." },
    { title: "Add hozzá folyamatosan a kiadásokat", desc: "Nyisd meg a Kiadások lapot, és koppints a Kiadás hozzáadása gombra. Add meg a leírást, összeget és pénznemet, opcionálisan a kategóriát, válaszd ki a fizetőt, majd a Mindenki vagy Egyéni lehetőséget a résztvevőkhöz. Bárki hozzáadhat kiadást." },
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
  productBody: "Hozz létre csoportot a kezdőképernyőn, válassz pénznemet, és hívd meg a résztvevőket. A Kiadások lapon a Kiadás hozzáadása gombbal rögzítheted a szállást, taxit vagy jegyeket: összeg, pénznem, fizető és résztvevők a Mindenki vagy Egyéni lehetőséggel; a kategória opcionális. A Nyugták lapon a Nyugta hozzáadása megnyitja a beolvasást vagy feltöltést. Ellenőrizd a tételeket, majd oszd fel tételenként vagy egyenlően. Más pénznemhez használj referenciaárfolyamot dátummal, kézi árfolyamot vagy tényleges banki terhelést a csoport pénznemében. Ellenőrizd az egyenlegeket, exportálj PDF-jelentést vagy archiváld a csoportot. A CheqSplit nem utal pénzt.",
  productCta: "Csoportos és utazási kiadások követése a CheqSplittel",
  receiptNoteBefore: "Ha egy utazási kiadás tételes éttermi számla, először használd ",
  receiptNoteLabel: "a számlamegosztási módszert",
  receiptNoteAfter: " közvetlenül a csoport Nyugták lapjáról a Nyugta hozzáadása gombbal. Olvasd be vagy töltsd fel a nyugtát, ellenőrizd a tételeket és a végösszeget, majd oszd fel tételenként vagy egyenlően; automatikusan a csoporthoz kapcsolódik.",
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
      a: "A csoportban nyisd meg a Nyugták lapot, és koppints a Nyugta hozzáadása gombra a beolvasáshoz vagy feltöltéshez. Ellenőrizd a felismert tételeket és a végösszeget; a nyugta automatikusan a csoporthoz kapcsolódik. Ezután oszd fel tételenként vagy egyenlően.",
    },
    {
      q: "A CheqSplit átváltja a pénznemeket?",
      a: "Igen. A csoport kiadásai más pénznemben is megadhatók. Ellenőrizd a referenciaárfolyamot és dátumát, adj meg kézi árfolyamot vagy tényleges banki terhelést a csoport pénznemében. A CheqSplit az átváltott összeget használja a csoport egyenlegeihez; pénzt nem utal.",
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
