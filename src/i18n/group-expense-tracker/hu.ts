import type { GroupExpenseTrackerCopy } from "./types";
import { groupExpenseTrackerEn } from "./en";

export const groupExpenseTrackerHu: GroupExpenseTrackerCopy = {
  metaTitle: "Kövesd a csoport kiadásait, és lásd, ki kinek mennyivel tartozik | CheqSplit",
  metaDescription: "Tartsátok egy helyen az összes közös kiadást, rögzítsétek minden tételnél, ki fizetett és kik vettek részt benne, majd bármikor ellenőrizzétek a csoport egyenlegeit.",
  softwareDescription: "Tartsátok egy helyen az összes közös kiadást, rögzítsétek minden tételnél, ki fizetett és kik vettek részt benne, majd bármikor ellenőrizzétek a csoport egyenlegeit.",
  h1: "Kövesd a csoport kiadásait, és lásd, ki kinek mennyivel tartozik",
  heroText: "Tartsátok egy helyen az összes közös kiadást, rögzítsétek minden tételnél, ki fizetett és kik vettek részt benne, majd bármikor ellenőrizzétek a csoport egyenlegeit.",
  downloadCta: "Letöltés ingyen",
  secondaryCta: "",
  nav: {
    how: "Így működik a csoportos kiadások követése",
    faq: "Gyakori kérdések",
  },
  timelineH2: "Közös kiadástörténet szétszórt üzenetek helyett",
  timelineText: "Valaki kifizeti a szállást, más megveszi a jegyeket, egy harmadik pedig a taxit. Ahelyett, hogy később az üzenetek között keresgélnétek, a CheqSplit minden kiadást egy közös előzményben tart.",
  howH2: "Így működik a csoportos kiadások követése",
  steps: [
    {
      title: "Hívd meg a csoportot az utazásba",
      text: "Az utazás létrehozása és elnevezése után hívd meg a résztvevőket linkkel vagy QR-kóddal.",
      imageAlt: "Hívd meg a csoportot az utazásba",
    },
    {
      title: "Adj hozzá minden kiadást",
      text: "Nyisd meg az Kiadások fület, majd válaszd az Kiadás Hozzáadása lehetőséget. Add meg a leírást és az összeget, jelöld, ki fizetett, és válaszd ki a résztvevőket.",
      imageAlt: "Adj hozzá minden kiadást",
    },
    {
      title: "Válaszd ki, kik osztoztak a költségen",
      text: "Válaszd az Everyone vagy Custom lehetőséget, majd csak azokat jelöld meg, akiket valóban érintett az adott kiadás.",
      imageAlt: "Válaszd ki, kik osztoztak a költségen",
    },
    {
      title: "Kövesd a közös kiadástörténetet",
      text: "Minden hozzáadott kiadás megjelenik az Kiadások fülön az összeggel, a fizető személlyel és a résztvevőkkel.",
      imageAlt: "Kövesd a közös kiadástörténetet",
    },
    {
      title: "Nézd meg, ki kinek mennyivel tartozik",
      text: "Nyisd meg a Összegzés nézetet, és lásd, kinek jár pénz, illetve kinek kell fizetnie. A CheqSplit kiszámolja az egyenlegeket, de nem utal pénzt.",
      imageAlt: "Nézd meg, ki kinek mennyivel tartozik",
    }
  ],
  subsetH2: "Minden kiadást a megfelelő módon osszatok fel",
  subsetText: "Nem minden költség vonatkozik az egész csoportra. A taxit csak az utasokhoz, a jegyeket csak az érintettekhez, a valóban közös kiadásokat pedig az egész csoporthoz add hozzá. Tételes éttermi számlához használd a Számlák fület és az Add Bill lehetőséget.",
  receiptBridgeH2: "Adj tételes éttermi számlát az utazáshoz",
  receiptBridgeText: "Ha a csoportnak tételes éttermi számlája van, először oszd fel a tételeket, a díjakat és a borravalót is beleértve. Ezután nyisd meg az utazás Számlák fülét, és válaszd az Add Bill lehetőséget.",
  receiptBridgeCta: "Nézd meg, hogyan működik a számlamegosztás",
  reportH2: "Maradjon egy elszámolás, amelyhez később is visszatérhettek",
  reportText: "Archiváld az utazást, és exportálj PDF-jelentést a kiadásokról, összegekről, táblázatokról és diagramról. Ezt később sokkal könnyebb ellenőrizni, mint emlékezetből újraszámolni mindent.",
  fitsH2: "Mikor hasznos a CheqSplit",
  fits: [
    "Egy hétvége vagy nyaralás barátokkal",
    "Csoportos utazás szállással, közlekedéssel, étkezéssel, jegyekkel vagy programokkal",
    "Több utazási kiadás, amelyet különböző résztvevők fizettek",
    "Tételes éttermi számla, a Számlák fülről Add Bill lehetőséggel hozzáadva",
  ],
  faqH2: "Gyakori kérdések a csoportos kiadásokról",
  faq: [
    {
      q: "Több különböző résztvevő is hozzáadhat kiadásokat?",
      a: "Igen. Bármely résztvevő megnyithatja az Kiadások fület, és kiválaszthatja az Kiadás Hozzáadása lehetőséget. Tételes nyugtához használd a Számlák fület és az Add Bill lehetőséget.",
    },
    {
      q: "Vonatkozhat egy kiadás csak néhány emberre?",
      a: "Igen. Válaszd az Everyone vagy Custom lehetőséget, majd csak azokat a résztvevőket jelöld ki, akik valóban osztoztak azon a kiadáson.",
    },
    {
      q: "Beolvashatok egy nyugtát utazási kiadásként?",
      a: "A tételes felosztáshoz használd az éttermi nyugtákhoz készült folyamatot, az adóval és borravalóval együtt. Ezután nyisd meg az utazás Számlák fülét, és válaszd az Add Bill lehetőséget.",
    },
    {
      q: "Honnan tudom, kinek kell kinek fizetnie?",
      a: "A CheqSplit összesíti a csoport kiadásait, és megmutatja a kialakuló egyenlegeket — vagyis ki kinek mennyivel tartozik. A részesedéseket kiszámolja, de pénzt nem utal.",
    },
    {
      q: "Exportálhatom az eredményt?",
      a: "Igen. A CheqSplit részletes PDF-jelentést tud exportálni a kiadásokról, összegekről, táblázatokról és egy diagramról, a lezárt utazást pedig archiválhatod is.",
    },
  ],
  ctaTitle: "A csoport összes kiadása egyetlen átlátható helyen",
  ctaBody: "Hozz létre egy utazást, add hozzá a kiadásokat menet közben, a CheqSplit pedig megmutatja, ki kinek mennyivel tartozik.",
  internalRestaurantBefore: "Egy vacsora tételes felosztása kell? Használd a ",
  internalRestaurantLabel: "éttermi számla felosztását",
  internalRestaurantAfter: " beolvasáshoz, meghíváshoz és az élő tételkiosztáshoz.",
  guideBridgeBefore: "Előbb a lépésről lépésre módszert szeretnéd? Olvasd el: ",
  guideBridgeLabel: "így oszthatjátok fel az utazási költségeket barátokkal",
  guideBridgeAfter: ".",
  a11y: {
    nav: groupExpenseTrackerEn.a11y.nav,
    hero: "Kövesd a csoport kiadásait, és lásd, ki kinek mennyivel tartozik",
    timeline: "Közös kiadástörténet szétszórt üzenetek helyett",
    how: "Így működik a csoportos kiadások követése",
    subset: "Minden kiadást a megfelelő módon osszatok fel",
    receipt: "Adj tételes éttermi számlát az utazáshoz",
    report: "Maradjon egy elszámolás, amelyhez később is visszatérhettek",
    fits: "Mikor hasznos a CheqSplit",
    faq: "Gyakori kérdések a csoportos kiadásokról",
  },
};
