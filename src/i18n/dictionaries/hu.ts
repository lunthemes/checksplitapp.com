import type { Dictionary } from "../types";

export const hu: Dictionary = {
  meta: {
    title: "CheqSplit: oszd a költségeket, szkenneld a blokkot, kövesd a közös kiadásokat",
    description:
      "A CheqSplit segít a költségek megosztásában, blokk vagy nyugta beolvasásában, közös kiadások követésében, és hogy egyértelműen lásd, ki kinek mennyivel tartozik – étteremben, utazáson, bevásárláskor, baráti vagy családi körben.",
    ogDescription:
      "Méltányosan oszd a költségeket: blokk beolvasás, tételek, egyenleg. Vendéglő, utak, bérlőtársak, baráti kör.",
    twitterDescription:
      "Egyszerű mód a közös költségek elszámolására táblázatok és folyamatos kézi számolás nélkül.",
    softwareDescription:
      "A CheqSplit segít költséget megosztani, blokkot szkennelni, közös kiadásokat követni, és megnézni, ki kinek mennyit tartozik, vacsorán, utazáson, csoportban.",
  },
  nav: { features: "Funkciók", how: "Működés", useCases: "Használat", faq: "GYIK" },
  header: { download: "Alkalmazás letöltése" },
  hero: {
    title:
      "Oszd a számlát, szkenelj blokkot, és tudd, ki kinek és mennyi tartozik",
    body: "A CheqSplit segít a költségek megosztásában, a blokkok beolvasásában és a közös kiadások követésében, hogy tisztán lásd, ki kinek mennyivel tartozik — étteremben, utazáson, bevásárláskor, baráti vagy családi környezetben.",
    alts: [
      "CheqSplit: csoportos utazás képernyő",
      "CheqSplit: közös kiadások",
      "Számlamegosztás, tétel sorok CheqSplit",
    ],
  },
  features: {
    title: "Miért épp a CheqSplit?",
    items: [
      { title: "Blokkok beolvasása pillanatok alatt", desc: "A szkenneléssel tételek, adók, végösszeg pár mp alatt, kézi pötyögés nélkül." },
      { title: "Tételenkénti megosztás", desc: "Minden sor a megfelelőhöz, nem vakon felezzük a végösszeget." },
      { title: "Egy helyen a kép", desc: "Étterem, bolt, utak, mind egy idővonalon." },
      { title: "Ki kinek tartozik", desc: "Az app számol mindenkinek világosan." },
    ],
  },
  how: {
    title: "Hogyan működik a CheqSplit",
    subtitle: "Öt világos lépés az utazástól a mindenkinek elfogadott összegzésig.",
    stepPill: (n) => `${n}. lépés`,
    steps: [
      {
        label: "Utazás másodpercek alatt",
        body: "Név, meghívók, fölös bonyolítás nélkül.",
        imageAlt: "CheqSplit: csoportos túra",
        bullets: ["Gyors létrehozás", "Hívó link", "Vacsora is, nyaralás is"],
      },
      {
        label: "Bonts soronként",
        body: "Részletes bizonylat: a sor a megfelelőhöz, a kerekítés oké.",
        imageAlt: "CheqSplit: blokk beolvasás",
        bullets: ["Sor szerinti osztás", "Közös tál, borravaló, díj", "Olvasható"],
      },
      {
        label: "A közös kiadásokat követni",
        body: "Jegyzetek, kategóriák, egy tiszta idővonal – kivel mi történt, egy helyen.",
        imageAlt: "CheqSplit: közös költség",
        bullets: ["Kategóriák", "Bizonylat vagy fénykép, jegyzet", "Egy idővonalon a csapat"],
      },
      {
        label: "Egyenlítsd a tartozást",
        body: "A fizetésekkel frissül az egyenleg – kevesebb „még mindig tartozol” beszéd.",
        imageAlt: "CheqSplit: egyenleg",
        bullets: ["Nettó tartozás", "Emlékeztető (opcionális)", "Összefoglaló export"],
      },
      {
        label: "Ossz meg tiszta, átlátható jelentést",
        body: "Grafikon, végösszeg, ki mire, küldd tovább vagy tartsd meg későbbre.",
        imageAlt: "CheqSplit: utazási, kiadási összegzés",
        bullets: ["Vizuális", "Link vagy kép", "Adatvédelem"],
      },
    ],
  },
  useCases: {
    title: "Minden közös költségre jó",
    intro: "Közös vacsora, túra, bevásárlás, baráti pénz: amikor többen dobtok a közösbe, a CheqSplit ad rendet. Beolvasod a blokkot, a tételeket a megfelelő emberekhez kapcsolod, kezeled a kedvezményt és a díjakat, a végén pedig tiszta, érthető lezárás, félreértések nélkül.",
    items: [
      { title: "Vendéglő", desc: "Tételekre bont, igazságosan zárj." },
      { title: "Csoportos utazások", desc: "Járat, szoba, eledel egy lapon." },
      { title: "Család", desc: "Kosár, program, benti kiadás." },
      { title: "Közös bevásárlás", desc: "Ajándék, nagybevásárlás, baráti vagy családi büdzsé, minden tétel nyomon." },
    ],
  },
  cta: {
    title: "Egyszerűbb elszámolás, kevesebb számológéppel töltött perc?",
    body: "A CheqSplit segít átláthatóan rendezni a közös kiadásokat, számolópapír nélkül, kevesebb félreértéssel.",
    sectionAria: "CheqSplit letöltése",
    imgAlt: "CheqSplit kezdőképernyő, közös számlák és kiadások",
    badgeAlts: { appStore: "Letöltés App Store-ból", play: "Letöltés Google Play-ből" },
    playSoon: "Hamarosan",
    playDisabledHint: "Még nem elérhető",
    groupAria: "Töltsd le",
  },
  faq: {
    title: "Gyakori kérdések",
    items: [
      { q: "Mi a CheqSplit?", a: "Alkalmazás közös számlákhoz: blokk beolvasás, tételes bontás, mindenki látja az egyenleget, ki kinek mennyit." },
      { q: "Lehet tételsoronként osztani a blokkot?", a: "Igen. A tételek emberekhez rendelhetők, mindenki azt fizeti, amit ténylegesen fogyasztott." },
      { q: "Működik csoportos utazáshoz is?", a: "Igen. Létrehozol egy utat, hozzáadsz kiadásokat, meghívod a társakat, a végén egy tiszta összegzést kapsz, ki kinek mennyivel tartozik." },
      { q: "Csak étteremhez jó?", a: "Bárhol, ahol több ember osztja a költséget: kocsma, bevásárlás, rövid vagy hosszabb utazás, közös vásárlás – a lényeg, hogy ne egyedül fizesd." },
      { q: "Használható hálózat nélkül is?", a: "Bizonyos adat helyben is marad, de a közös utat és a többiekkel való szinkront internethez kell kötni." },
      { q: "Hogyan hívok meg valakit?", a: "Indíts utat, vegyél fel tételket, oszd meg a meghívó linket, a belépő ugyanazt az egyenleget látja, amit te." },
    ],
  },
  footer: {
    tagline: "A legegyszerűbb a közös költségre: igaz, gyors, átlátható.",
    product: "Termék",
    company: "Cég",
    legal: "Jogi",
    about: "Rólunk",
    contact: "Kapcsolat",
    privacy: "Adatvédelem",
    terms: "Feltételek",
    rights: "Minden jog fenntartva.",
  },
  a11y: {
    keyFeatures: "Lényeg",
    primaryNav: "Elsődleges navigáció",
    howSection: "Folyamat",
    logoHome: "CheqSplit kezdőlap",
  },
};
