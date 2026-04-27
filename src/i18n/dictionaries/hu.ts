import type { Dictionary } from "../types";

export const hu: Dictionary = {
  meta: {
    title: "CheqSplit: osszd a költséget, szkeneld a nyugtát, kövessd a közös számlát",
    description:
      "A CheqSplit segít költséget osztani, nyugtát szkenelni, közös számlákat nyomon követni és tisztán látni, ki kinek mit tartozik – étteremben, utazáson, bevásárláskor, baráti környezetben.",
    ogDescription:
      "Méltányosan oszd: szken, tételek, egyenleg. Vendéglő, utak, bérlőtársak, barátok.",
    twitterDescription:
      "Egyszerű mód a közös költségre és számlára, táblázat és feszültség nélkül.",
    softwareDescription:
      "A CheqSplit segít osztani, szkenelni, közös kiadást követni, és látni a tartozást vacsora, utazás, csoport alatt is.",
  },
  nav: { features: "Funkciók", how: "Működés", useCases: "Használat", faq: "GYIK" },
  header: { download: "Alkalmazás letöltése" },
  hero: {
    title:
      "Oszd a számlát, szkenelj blokkot, és tudd, ki kinek és mennyi tartozik",
    body: "A CheqSplit segít megbontani a terhet, beolvasni a blokkot, nőni a közös jegyekre és tudni, ki kinek tartozik. Étterem, út, bolt, baráti cél.",
    alts: [
      "CheqSplit: csoportos utazás képernyő",
      "CheqSplit: közös kiadások",
      "Számlamegosztás, tétel sorok CheqSplit",
    ],
  },
  features: {
    title: "Miért a CheqSplit?",
    items: [
      { title: "Pillanat alatt a számla", desc: "A szken: tételek, adók, végösszeg pár mp alatt." },
      { title: "Tényszeri osztás", desc: "Minden sor a megfelelőhöz, nem vakon felezni." },
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
        label: "Kövessd a közöset",
        body: "Jegyzetek, jegyek, egy térképe-ző idővonal.",
        imageAlt: "CheqSplit: közös költség",
        bullets: ["Kategóriák", "Bizonylat + jegyzet", "Egy szál"],
      },
      {
        label: "Egyezz a szaldó",
        body: "Fizetéskor frissül, kevesebb üzengetés.",
        imageAlt: "CheqSplit: egyenleg",
        bullets: ["Nettó", "Emlékeztető (opcionális)", "Összefoglalók kimentése"],
      },
      {
        label: "Oszd a rendes riportot",
        body: "Graf, összeg, ki miért, küldd vagy tudd később.",
        imageAlt: "CheqSplit: túr-jelentés",
        bullets: ["Vizuális", "Link vagy kép", "Adatvédelem"],
      },
    ],
  },
  useCases: {
    title: "Minden közös költségre jó",
    intro: "Ha sokan fognak: vacsorák, túrák, kocsi bevásárlás, a CheqSplit erre van. Beolvasás, sorok, leárazás, díj, végén tiszta lezárás.",
    items: [
      { title: "Vendéglő", desc: "Tételekre bont, igazságosan zárj." },
      { title: "Közös utak", desc: "Járat, szoba, eledel egy lapon." },
      { title: "Család", desc: "Kosár, program, benti kiadás." },
      { title: "Halmozott vásár", desc: "Ajándék, nagy elad, baráti terv." },
    ],
  },
  cta: {
    title: "Okosabban bontanád?",
    body: "Ezer kör csinálja, számológéppel nem fogyunk.",
    sectionAria: "Letöltés: CheqSplit",
    imgAlt: "Kezdőképernyő CheqSplit, számla oszt",
    badgeAlts: { appStore: "App Store", play: "Google Play" },
    playSoon: "Hamarosan",
    playDisabledHint: "Még nem elérhető",
    groupAria: "Töltsd le",
  },
  faq: {
    title: "Kérdések",
    items: [
      { q: "Mi a CheqSplit?", a: "Egy olyan appos számlamegosztó, szken, sor, egyenleg, ki kinek." },
      { q: "Soronkénti osztás?", a: "Igen, tétel emberekre, amit fogyasztottál, azt fizet." },
      { q: "Csoportos túr?", a: "Igen, út, költség, emberek, bizonyl, záró és zárási egyenleg." },
      { q: "Étterem?", a: "Igen, söröző, bolt, kirándul, mind, ahol több zseb folyik össze." },
      { q: "Háló nélkül?", a: "Részlegben lokál, de a közöss túr és a szinkron háló kell." },
      { q: "Hogyan hívlak valakit?", a: "Út, tételek, hivad kölcsön, belép, lát a szaldót." },
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
