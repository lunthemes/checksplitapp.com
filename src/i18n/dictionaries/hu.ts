import type { Dictionary } from "../types";

export const hu: Dictionary = {
  meta: {
    title: "Közös költségek megosztása barátokkal | CheqSplit",
    description:
      "Olvassátok be az éttermi nyugtákat, vezessétek a közös kiadásokat, és kövessétek az egyenlegeket.",
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
    title: "Osszátok meg a kiadásokat, és lássátok, ki kinek tartozik",
    body: "Olvassátok be az éttermi nyugtákat, vezessétek a közös kiadásokat, és kövessétek az egyenlegeket. Hívjatok meg barátokat korábbi csoportokból, és beszéljétek meg a költségeket csoportos vagy privát csevegésben.",
    alts: [
      "A CheqSplit kezdőképernyője az aktuális csoporttal",
      "Csoportáttekintés a résztvevők befizetéseivel",
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
      "Tartsd a közös kiadásokat egy csoportban: rögzítsd a fizetőt és a résztvevőket, adj hozzá nyugtákat a Nyugták lapon, és nézd meg az Összesítésben, ki kinek tartozik. A CheqSplit egyenlegeket számol; pénzt nem utal.",
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
        label: "Hozz létre csoportot az utazáshoz",
        body: "A kezdőképernyőn koppints a Csoport létrehozása gombra, nevezd el a csoportot, válassz pénznemet, majd hívj meg résztvevőket hivatkozással vagy QR-kóddal.",
        imageAlt: "A CheqSplit kezdőképernyője az aktuális csoporttal",
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
        body: "Nyisd meg a Kiadások lapot, és koppints a Kiadás hozzáadása gombra. Add meg a leírást, összeget és pénznemet, opcionálisan a kategóriát, válaszd ki a fizetőt, majd a Mindenki vagy Egyéni lehetőséget a résztvevőkhöz. Bárki hozzáadhat kiadást.",
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
      { q: "Működik csoportos utazáshoz is?", a: "Tartsd a közös kiadásokat egy csoportban: rögzítsd a fizetőt és a résztvevőket, adj hozzá nyugtákat a Nyugták lapon, és nézd meg az Összesítésben, ki kinek tartozik. A CheqSplit egyenlegeket számol; pénzt nem utal." },
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
