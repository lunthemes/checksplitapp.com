import type { SplitBillLocaleCopy } from "./types";
import { splitBillEn } from "./en";

export const splitBillHu: SplitBillLocaleCopy = {
  metaTitle: "Olvasd be az éttermi számlát, és osszátok fel tételek szerint | CheqSplit",
  metaDescription: "A teljes számla egy helyen marad. Egyvalaki beolvassa a nyugtát a CheqSplittel, a többiek pedig linken vagy QR-kódon keresztül csatlakoznak, és közvetlenül a böngészőben kiválasztják, mit fogyasztottak.",
  softwareDescription: "A teljes számla egy helyen marad. Egyvalaki beolvassa a nyugtát a CheqSplittel, a többiek pedig linken vagy QR-kódon keresztül csatlakoznak, és közvetlenül a böngészőben kiválasztják, mit fogyasztottak.",
  h1: "Olvasd be az éttermi számlát, és osszátok fel tételek szerint",
  heroSubLine1: "",
  heroSubLine2: "",
  heroParagraph: "",
  seoBlockH2: "Egyetlen számla, megosztva az alkalmazásban vagy a böngészőben",
  seoBlockP1: "A teljes számla egy helyen marad. Egyvalaki beolvassa a nyugtát a CheqSplittel, a többiek pedig linken vagy QR-kódon keresztül csatlakoznak, és közvetlenül a böngészőben kiválasztják, mit fogyasztottak.",
  seoBlockP2: "Nem kell mindenkinek telepítenie az alkalmazást. A CheqSplit egy helyen tartja a tételeket, résztvevőket, fizetéseket és a végső elszámolást.",
  seoBlockP3: "",
  useCasesH2: "Számlamegosztás a valódi rendelések alapján",
  useCases: [
    { title: "Saját tételek", text: "Mindenkihez csak azokat az ételeket és italokat rendeld, amelyeket ő fogyasztott." },
    { title: "Közös tételek", text: "Egy közösen rendelt palackot, tálat vagy desszertet csak azok között ossz fel, akik fogyasztottak belőle." },
    { title: "Díjak és borravaló", text: "Add hozzá a szervizdíjat, adókat és borravalót úgy, hogy a felosztott összegek pontosan kiadják a számla végösszegét." },
  ],
  howSectionH2: "Így oszthatjátok fel az éttermi számlát a CheqSplittel",
  howSectionSub: "",
  stepsSectionH2: "Így oszthatjátok fel az éttermi számlát a CheqSplittel",
  steps: [
    { title: "Olvasd be a nyugtát", desc: "Fotózd le a nyugtát, a CheqSplit pedig átveszi a tételeket és összegeket egy ellenőrizhető számlába." },
    { title: "Ellenőrizd a számlát", desc: "Hasonlítsd össze a CheqSplitben látható összeget a nyugtán szereplő végösszeggel, és javítsd az esetleges hibákat." },
    { title: "Osszátok fel", desc: "Javítsd a nevet, mennyiséget vagy árat, ha a beolvasás valamit nem ismert fel megfelelően." },
  ],
  features: [
    { title: "Olvasd be az éttermi nyugtát", desc: "Fotózd le a nyugtát, a CheqSplit pedig átveszi a tételeket és összegeket egy ellenőrizhető számlába." },
    { title: "Felosztás előtt ellenőrizd a végösszeget", desc: "Hasonlítsd össze a CheqSplitben látható összeget a nyugtán szereplő végösszeggel, és javítsd az esetleges hibákat." },
    { title: "Ellenőrizd és szerkeszd az egyes tételeket", desc: "Javítsd a nevet, mennyiséget vagy árat, ha a beolvasás valamit nem ismert fel megfelelően." },
    { title: "Hívd meg a többieket QR-kóddal vagy linkkel", desc: "Oszd meg a számla QR-kódját vagy linkjét. Mindenki azonnal meg tudja nyitni." },
    { title: "Folytassátok a böngészőben, telepítés nélkül", desc: "A többiek közvetlenül a böngészőben nyithatják meg a linket. A részvételhez nem kell telepíteniük a CheqSplitet." },
    { title: "Osszátok fel a számlát online", desc: "Mindenki ugyanazt a számlát használja. A kiválasztások és módosítások együtt maradnak, így nem kell külön számolgatni, ki mit fogyasztott." },
    { title: "Mindenki kiválasztja, mit fogyasztott", desc: "Minden résztvevő megjelöli a saját tételeit. A közös ételek és italok több ember között is feloszthatók." },
    { title: "Nézd meg, ki kinek mennyivel tartozik", desc: "A tételek hozzárendelése után a CheqSplit kiszámolja az összegeket, és egyértelműen megmutatja, ki kinek mennyit fizessen." },
    { title: "Rögzítsd a már teljesített fizetéseket", desc: "Jelöld a megtörtént fizetéseket, hogy mindig az aktuális egyenlegeket és fennmaradó tartozásokat lásd." },
    { title: "Nézd meg, hogyan lett felosztva a számla", desc: "A végső elszámolást később is megnyithatod, és ellenőrizheted mindenki tételeit, összegeit és fizetéseit." }
  ],
  ctaTitle: "Osszátok fel a számlát akkor is, ha a többieknek nincs meg az app",
  ctaBody: "Olvasd be a nyugtát, oszd meg a linket vagy QR-kódot, és mindenki kiválaszthatja, mit fogyasztott.",
  groupBridgeBefore: "Ezt az éttermi számlát ugyanazon csoport szállásával, taxijával vagy programjaival együtt akarod nyilvántartani? Add hozzá a kész számlát az utazás Számlák fülén az Add Bill lehetőséggel, majd folytasd a ",
  groupBridgeLabel: "csoportos kiadások követésével",
  groupBridgeAfter: ".",
  guideBridgeBefore: "Előbb a lépésről lépésre módszert szeretnéd? Olvasd el: ",
  guideBridgeLabel: "így oszthatjátok fel igazságosan az éttermi számlát",
  guideBridgeAfter: ".",
  faq: [
    {
      q: "Be tudja olvasni a CheqSplit a tételes éttermi nyugtát?",
      a: "Igen. Fotózd le a nyugtát, majd a felosztás megkezdése előtt ellenőrizd a felismert végösszeget, tételeket, mennyiségeket és árakat.",
    },
    {
      q: "Minden résztvevőnek szüksége van a CheqSplit alkalmazásra?",
      a: "Nem. A házigazda az alkalmazásban hozza létre és olvassa be a számlát, a meghívottak pedig megnyithatják a linket, és választhatják a Folytatás böngészőben lehetőséget.",
    },
    {
      q: "Feloszthatok éttermi számlát a böngészőben?",
      a: "A meghívott résztvevő megnyithatja a közös számlát a böngészőben, kiválaszthatja az általa fogyasztott tételeket, megnézheti a Summary nézetet és követheti az így kialakuló egyenleget. Új számla létrehozásához és beolvasásához szükség van az alkalmazásra.",
    },
    {
      q: "Csatlakozhatnak a résztvevők QR-kóddal vagy linkkel?",
      a: "Igen. Oszd meg a QR-kódot vagy a meghívólinket, hogy mindenki ugyanazt az éttermi számlát nyithassa meg az alkalmazásban vagy a böngészőben.",
    },
    {
      q: "Hogyan oszt fel több ember egy közösen fogyasztott tételt?",
      a: "Mindenki kiválasztja a tételt, aki fogyasztott belőle. A CheqSplit automatikusan egyenlően osztja szét az árát az összes olyan résztvevő között, aki kijelölte.",
    },
    {
      q: "Mi történik, ha a nyugtát hibásan olvassa be az alkalmazás?",
      a: "Megosztás előtt ellenőrizd a felismert számlát. Javítsd a hibás tételt vagy árat, add hozzá a hiányzó sort, és szükség esetén add meg az adót vagy borravalót a Díjak és Borravaló részben.",
    },
    {
      q: "Mire való a Fizetés Rögzítése?",
      a: "Azt rögzíti, hogy egy résztvevő a CheqSplit rendszerén kívül fizetett egy másik résztvevőnek. Frissíti a közös számla nyilvántartását, de nem utal és nem dolgoz fel pénzt.",
    },
    {
      q: "Hogyan nézhetem meg, mit fogyasztott egy adott személy?",
      a: "Nyisd meg a Summary fület, majd koppints az adott résztvevő részére a diagramon. Itt láthatod a teljes összegét és a hozzá tartozó tételeket.",
    },
    {
      q: "A CheqSplit utal pénzt?",
      a: "Nem. A CheqSplit kiszámolja az egyenlegeket és rögzíti a résztvevők által megadott kiegyenlítéseket. Nem küld, nem fogad és nem dolgoz fel fizetéseket.",
    },
    {
      q: "Hozzáadhatom ezt az éttermi számlát egy utazáshoz?",
      a: "Igen. Először fejezd be a tételes éttermi számlamegosztást, majd nyisd meg az utazás Számlák fülét, és válaszd az Add Bill lehetőséget.",
    },
  ],
  a11y: {
    hero: "Olvasd be az éttermi számlát, és osszátok fel tételek szerint",
    nav: splitBillEn.a11y.nav,
    stepsRegion: "Így oszthatjátok fel az éttermi számlát a CheqSplittel",
    features: "Így oszthatjátok fel az éttermi számlát a CheqSplittel",
    faq: "Gyakori kérdések",
  },
};
