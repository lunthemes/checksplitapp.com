import type { Dictionary } from "../types";

export const hu: Dictionary = {
  meta: {
    title: "CheqSplit: oszd a költségeket, szkenneld a blokkot, kövesd a közös kiadásokat",
    description:
      "A CheqSplit segít a költségek megosztásában, blokk vagy nyugta beolvasásában, közös kiadások követésében, és hogy egyértelműen lásd, ki kinek mennyivel tartozik – étteremben, utazáson, bevásárláskor, baráti vagy családi körben.",
    ogDescription:
      "Méltányosan oszd a költségeket: blokk beolvasás, tételek, egyenleg. Éttermek, utazások, bérlőtársak, baráti kör.",
    twitterDescription:
      "Egyszerű mód a közös költségek elszámolására táblázatok és folyamatos kézi számolás nélkül.",
    softwareDescription:
      "A CheqSplit segít költséget megosztani, blokkot szkennelni, közös kiadásokat követni, és megnézni, ki kinek mennyit tartozik, vacsorán, utazáson, csoportban.",
  },
  nav: {
    features: "Funkciók",
    how: "Működés",
    useCases: "Használat",
    faq: "GYIK",
    restaurant: "Éttermi számla",
    groupExpenses: "Csoportos kiadások",
    guides: "Útmutatók",
  },
  header: { download: "Letöltés ingyen" },
  hero: {
    title: "Osszátok meg a költségeket, szkenneljétek be a nyugtákat, a többit pedig bízzátok az alkalmazásra",
    body: "A CheqSplit segít a költségek megosztásában, a blokkok beolvasásában és a közös kiadások követésében, hogy tisztán lásd, ki kinek mennyivel tartozik — étteremben, utazáson, bevásárláskor, baráti vagy családi környezetben. Az alkalmazás ingyenesen letölthető.",
    alts: [
      "CheqSplit: csoportos utazás képernyő",
      "CheqSplit: közös kiadások",
      "Számlamegosztás, tétel sorok CheqSplit",
    ],
  },
  heroSlide2: {
    title: "Osszátok fel gyorsabban az éttermi számlát",
    description: "Olvassátok be a nyugtát, rendeljétek hozzá a tételeket, és lássátok tisztán mindenki részét — ideális baráti vacsorákhoz, randikhoz és közös étkezésekhez.",
    button: "Nézd meg, hogyan oszthatod meg a számlákat és szkennelheted a blokkokat",
  },
  workflows: {
    title: "Válaszd ki, mit osztasz fel",
    restaurantTitle: "Egy éttermi számla",
    restaurantText:
      "Olvasd be a nyugtát, ellenőrizd a tételeket, hívd meg az asztalt, és rendeld hozzá minden tételt azokhoz, akik rendelték vagy megosztották.",
    restaurantCta: "Éttermi számla felosztása",
    groupTitle: "Csoportos vagy utazási kiadások",
    groupText:
      "Hozz létre egy utazást a csoportnak, hívd meg a résztvevőket, és add hozzá a kiadásokat menet közben. Taxihoz, szálláshoz vagy jegyekhez használd a Kiadás Hozzáadása lehetőséget. Tételes éttermi nyugtához használd az Add Bill lehetőséget a Számlák fülön. Tartsd egy közös nyilvántartásban, és lásd, ki kinek tartozik.",
    groupCta: "Csoportos kiadások követése",
  },
  features: {
    title: "Miért épp a CheqSplit?",
    items: [
      { title: "Blokkok beolvasása pillanatok alatt", desc: "A szkenneléssel tételek, adók, végösszeg pár mp alatt, kézi pötyögés nélkül." },
      { title: "Tételenkénti megosztás", desc: "Minden sor a megfelelőhöz, nem vakon felezzük a végösszeget." },
      { title: "Minden közös kiadás egy helyen", desc: "Étterem, bolt, utak, mind egy idővonalon." },
      { title: "Ki kinek tartozik", desc: "Az app számol mindenkinek világosan." },
    ],
  },
  how: {
    title: "Hogyan működik a CheqSplit",
    subtitle:
      "Öt lépés: a költségek megosztása, a blokkok beolvasása, a közös kiadások követése és, hogy ki kinek mennyivel tartozik, egyértelmesen – az utazás kezdetétől egy átlátható összegzésig.",
    stepPill: (n) => `LÉPÉS ${n}`,
    steps: [
      {
        label: "Hozz létre utazást pár másodperc alatt",
        body: "Nevezd el, hívd meg a barátaidat linkkel vagy QR-kóddal, és rögtön kezd el osztani a közös kiadásokat.",
        imageAlt: "CheqSplit: csoportos túra",
        bullets: [
          "Gyors indulás",
          "Meghívó linkkel vagy QR-kóddal",
          "Vacsora, nyaralás, bármilyen csapat",
        ],
      },
      {
        label: "Bontsd szét a blokkot tételenként",
        body: "Ugyanazt a bizonylatot látjátok a telefonon, valós időben húzzátok hozzá, ki mit vállal.",
        imageAlt: "CheqSplit: blokk beolvasás",
        bullets: [
          "Jelöld, ki miért fizet",
          "Közös fogások, borravaló, díjak",
          "Egyből látszik, kinek, mennyi, kinek",
        ],
      },
      {
        label: "Rögzítsd a közös kiadásokat",
        body: "Jelöld, ki fizetett, és kik közt kell elosztani az összeget.",
        imageAlt: "CheqSplit: közös költség",
        bullets: [
          "Mindenki rögzítheti a saját tételét",
          "Az egész csapatra vagy kiválasztott tagokra",
          "Egy helyen, egy közös folyam",
        ],
      },
      {
        label: "Nézd meg, ki kinek, mennyivel tartozik",
        body: "A CheqSplit kiszámolja a végösszeget, tagonként, és mutatja, kinek kinek kell utalnia.",
        imageAlt: "CheqSplit: egyenleg",
        bullets: [
          "Teljes kiadási összeg",
          "Eredmény személyenként",
          "Egyértelmű, ki, kinek, mennyi",
        ],
      },
      {
        label: "Mentsd el az utazást és az összesítést",
        body: "Archiváld a lezárt túrákat, vagy exportálj részletes PDF-et kiadásokkal, összesítéssel, áttekinthető diagrammal.",
        imageAlt: "CheqSplit: utazási, kiadási összegzés",
        bullets: [
          "Befejezett utak archívuma",
          "Részletes PDF-jelentés",
          "Összegek, táblák, diagramok",
        ],
      },
    ],
  },
  useCases: {
    title: "Minden közös kiadáshoz",
    intro: "Közös vacsora, túra, bevásárlás, baráti pénz: amikor többen dobtok a közösbe, a CheqSplit ad rendet. Beolvasod a blokkot, a tételeket a megfelelő emberekhez kapcsolod, kezeled a kedvezményt és a díjakat, a végén pedig tiszta, érthető lezárás, félreértések nélkül.",
    items: [
      { title: "Éttermek", desc: "Tételekre bont, igazságosan zárj." },
      { title: "Csoportos utazások", desc: "Járat, szoba, eledel egy lapon." },
      { title: "Család", desc: "Kosár, program, benti kiadás." },
      { title: "Közös bevásárlás", desc: "Ajándék, nagybevásárlás, baráti vagy családi büdzsé, minden tétel nyomon." },
    ],
  },
  cta: {
    title: "Egyszerűbb elszámolás, kevesebb számológéppel töltött perc?",
    body: "Töltsd le ingyen a CheqSplitet – átláthatóan rendezi a közös kiadásokat, számolópapír nélkül, kevesebb félreértéssel.",
    sectionAria: "CheqSplit ingyenes letöltése",
    imgAlt: "CheqSplit kezdőképernyő, közös számlák és kiadások",
    badgeAlts: {
      appStore: "Ingyenes letöltés App Store-ból",
      play: "Ingyenes letöltés Google Play-ből",
    },
    groupAria: "Alkalmazás ingyenes letöltése",
  },
  faq: {
    title: "Gyakori kérdések",
    items: [
      { q: "Mi a CheqSplit?", a: "Ingyenes alkalmazás közös számlákhoz: blokk beolvasás, tételes bontás, mindenki látja az egyenleget, ki kinek mennyit." },
      { q: "Lehet tételsoronként osztani a blokkot?", a: "Igen. A tételek emberekhez rendelhetők, mindenki azt fizeti, amit ténylegesen fogyasztott." },
      { q: "Működik csoportos utazáshoz is?", a: "Igen. Létrehozol egy utazást, hozzáadsz kiadásokat, meghívod a társakat, a végén egy tiszta összegzést kapsz, ki kinek mennyivel tartozik." },
      { q: "Csak étteremhez jó?", a: "Bárhol, ahol több ember osztja a költséget: kocsma, bevásárlás, rövid vagy hosszabb utazás, közös vásárlás – a lényeg, hogy ne egyedül fizesd." },
      { q: "Használható hálózat nélkül is?", a: "Bizonyos adat helyben is marad, de a közös utazást és a többiekkel való szinkront internethez kell kötni." },
      { q: "Hogyan hívok meg valakit?", a: "Indíts utazást, vegyél fel tételeket, oszd meg a meghívó linket, a belépő ugyanazt az egyenleget látja, amit te." },
    ],
  },
  footer: {
    tagline: "Osszátok el igazságosan a közös kiadásokat, felesleges számolgatás nélkül.",
    product: "Termék",
    company: "Cég",
    legal: "Jogi információk",
    about: "Ügyfélszolgálat",
    contact: "Kapcsolat",
    privacy: "Adatvédelmi irányelvek",
    terms: "Felhasználási feltételek",
    deleteAccount: "Fiók törlése",
    deleteData: "Adataid törlése",
    rights: "Minden jog fenntartva.",
  },
  a11y: {
    keyFeatures: "Lényeg",
    primaryNav: "Elsődleges navigáció",
    openMenu: "Menü megnyitása",
    howSection: "Folyamat",
    logoHome: "CheqSplit kezdőlap",
  },
};
