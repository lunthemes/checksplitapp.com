import type { SplitBillLocaleCopy } from "./types";
import { splitBillEn } from "./en";

export const splitBillCs: SplitBillLocaleCopy = {
  metaTitle: "Naskenujte účet a rozdělte ho podle položek | CheqSplit",
  metaDescription: "Celý účet zůstává na jednom místě. Jeden člověk naskenuje účtenku v CheqSplit a ostatní se připojí přes odkaz nebo QR kód a vyberou si své položky přímo v prohlížeči.",
  softwareDescription: "Celý účet zůstává na jednom místě. Jeden člověk naskenuje účtenku v CheqSplit a ostatní se připojí přes odkaz nebo QR kód a vyberou si své položky přímo v prohlížeči.",
  h1: "Naskenujte účet a rozdělte ho podle položek",
  heroSubLine1: "",
  heroSubLine2: "",
  heroParagraph: "",
  seoBlockH2: "Jedna účtenka, sdílená v aplikaci nebo v prohlížeči",
  seoBlockP1: "Celý účet zůstává na jednom místě. Jeden člověk naskenuje účtenku v CheqSplit a ostatní se připojí přes odkaz nebo QR kód a vyberou si své položky přímo v prohlížeči.",
  seoBlockP2: "Vyberte jídla a nápoje, které jste měli. Pokud řádek obsahuje více kusů, otevřete jej a vyberte jednotlivé spotřebované kusy. U společného jídla zúčastnění vyberou položku nebo sdílené kusy; CheqSplit vypočítá podíly.",
  seoBlockP3: "",
  useCasesH2: "Rozdělení účtu podle toho, co si kdo skutečně objednal",
  useCases: [
    { title: "Vlastní položky", text: "Přiřaďte každému jen jídlo a pití, které si objednal." },
    { title: "Sdílené položky", text: "Řádek může obsahovat více kusů, například dvě pizzy. Vyberte své kusy; společné položky nebo kusy se rozdělí rovným dílem mezi účastníky, kteří je vybrali. Rovnoměrné rozdělení použijte, pokud je nabízeno a skupině vyhovuje." },
    { title: "Poplatky a spropitné", text: "Přidejte servisní poplatek, daň a spropitné tak, aby rozdělená částka odpovídala celkové částce na účtence." },
  ],
  howSectionH2: "Jak rozdělit účet v restauraci s CheqSplit",
  howSectionSub: "",
  stepsSectionH2: "Jak rozdělit účet v restauraci s CheqSplit",
  steps: [
    { title: "Naskenujte účtenku", desc: "Vyfoťte účtenku a CheqSplit převede položky a částky do přehledu, který můžete před rozdělením zkontrolovat." },
    { title: "Zkontrolujte účet", desc: "Porovnejte součet v CheqSplit s částkou na účtence a případné chyby opravte ještě předtím, než si ostatní začnou vybírat své objednávky." },
    { title: "Rozdělte účet", desc: "Pokud skenování něco nerozpoznalo správně, opravte název, množství nebo cenu." },
  ],
  features: [
    { title: "Naskenujte účtenku z restaurace", desc: "Vyfoťte účtenku a CheqSplit převede položky a částky do přehledu, který můžete před rozdělením zkontrolovat." },
    { title: "Než začnete dělit, zkontrolujte celkovou částku", desc: "Porovnejte součet v CheqSplit s částkou na účtence a případné chyby opravte ještě předtím, než si ostatní začnou vybírat své objednávky." },
    { title: "Zkontrolujte a upravte každou položku", desc: "Pokud skenování něco nerozpoznalo správně, opravte název, množství nebo cenu." },
    { title: "Pozvěte přátele pomocí QR kódu nebo odkazu", desc: "Sdílejte QR kód nebo odkaz na účet. Každý se může okamžitě připojit." },
    { title: "Pokračujte v prohlížeči bez instalace aplikace", desc: "Přátelé mohou odkaz otevřít přímo v prohlížeči. Pro rozdělení účtu si CheqSplit instalovat nemusí." },
    { title: "Rozdělte účet online", desc: "Všichni pracují se stejným účtem. Výběry i změny zůstávají na jednom místě, takže nemusíte zvlášť počítat, kdo měl co." },
    { title: "Každý si vybere, co měl", desc: "Vyberte jídla a nápoje, které jste měli. Pokud řádek obsahuje více kusů, otevřete jej a vyberte jednotlivé spotřebované kusy. U společného jídla zúčastnění vyberou položku nebo sdílené kusy; CheqSplit vypočítá podíly." },
    {
      title: "Vyberte jednotlivé porce",
      desc: "Řádek může obsahovat více kusů, například dvě pizzy. Vyberte své kusy; společné položky nebo kusy se rozdělí rovným dílem mezi účastníky, kteří je vybrali. Rovnoměrné rozdělení použijte, pokud je nabízeno a skupině vyhovuje.",
    },
    { title: "Podívejte se, kdo komu dluží", desc: "Po přiřazení položek CheqSplit spočítá částky a přehledně ukáže, kdo má komu zaplatit." },
    { title: "Zaznamenejte provedenou platbu", desc: "Po zaplacení jinému účastníkovi mimo CheqSplit otevřete Zaznamenat platbu. Potvrďte příjemce, zadejte částku a případnou poznámku a uložte. Platba se zaznamená od vás vybranému příjemci." },
    { title: "Zkontrolujte, jak byl účet rozdělen", desc: "Podrobnosti účastníka ukazují zahrnuté položky, vybrané kusy a vypočtené podíly, abyste mohli rozdělení porovnat se skutečnou spotřebou." }
  ],
  ctaTitle: "Rozdělte účet, i když vaši přátelé aplikaci nemají",
  ctaBody: "Naskenujte účtenku, nasdílejte odkaz nebo QR kód a nechte každého vybrat, co měl.",
  groupBridgeBefore: "Chcete-li mít účtenku z restaurace spolu s hotelem, taxi nebo aktivitami, otevřete ve skupině Účtenky a klepněte na Přidat účtenku pro skenování nebo nahrání. Po kontrole rozdělte podle položek nebo rovným dílem a pokračujte na ",
  groupBridgeLabel: "sledování skupinových výdajů",
  groupBridgeAfter: ".",
  guideBridgeBefore: "Chcete nejdřív postup krok za krokem? Přečtěte si, ",
  guideBridgeLabel: "jak spravedlivě rozdělit účet v restauraci",
  guideBridgeAfter: ".",
  faq: [
    {
      q: "Umí CheqSplit naskenovat podrobnou účtenku z restaurace?",
      a: "Ano. Vyfoťte účtenku a před zahájením rozdělení zkontrolujte rozpoznaný celkový součet, položky, množství a ceny.",
    },
    {
      q: "Musí mít všichni účastníci aplikaci CheqSplit?",
      a: "Ne. Hostitel vytvoří a naskenuje účet v aplikaci, ale pozvaní hosté mohou otevřít odkaz a zvolit Continue in browser.",
    },
    {
      q: "Mohu rozdělit účet z restaurace v prohlížeči?",
      a: "Pozvaný host může otevřít sdílený účet v prohlížeči, vybrat položky, které měl, zobrazit Summary a sledovat výsledný zůstatek. Pro vytvoření a naskenování nového účtu je potřeba aplikace.",
    },
    {
      q: "Mohou se účastníci připojit přes QR kód nebo odkaz?",
      a: "Ano. Sdílejte QR kód nebo zvací odkaz, aby všichni mohli otevřít stejný účet z restaurace v aplikaci nebo prohlížeči.",
    },
    {
      q: "Jak rozdělí několik lidí jednu společnou položku?",
      a: "Řádek může obsahovat více kusů, například dvě pizzy. Vyberte své kusy; společné položky nebo kusy se rozdělí rovným dílem mezi účastníky, kteří je vybrali. Rovnoměrné rozdělení použijte, pokud je nabízeno a skupině vyhovuje.",
    },
    {
      q: "Co když byla účtenka naskenována nesprávně?",
      a: "Před sdílením rozpoznaný účet zkontrolujte. Opravte položku nebo cenu, přidejte chybějící řádek a případně zadejte daň nebo spropitné v Fees & Tips.",
    },
    {
      q: "Co dělá Record a Payment?",
      a: "Zaznamená, že jeden účastník zaplatil druhému mimo CheqSplit. Aktualizuje záznam sdíleného účtu, ale peníze nepřevádí ani nezpracovává.",
    },
    {
      q: "Jak zjistím, co měl každý člověk?",
      a: "Otevřete kartu Summary a klepněte na část grafu příslušného účastníka. Uvidíte jeho celkovou částku i zahrnuté položky.",
    },
    {
      q: "Převádí CheqSplit peníze?",
      a: "Ne. CheqSplit počítá zůstatky a zaznamenává vyrovnání zadaná účastníky. Peníze neposílá, nepřijímá ani nezpracovává.",
    },
    {
      q: "Mohu tento účet z restaurace přidat do cesty?",
      a: "Chcete-li účtenku zahrnout do skupiny, začněte v této skupině: otevřete Účtenky a klepněte na Přidat účtenku, poté ji naskenujte nebo nahrajte. Zkontrolujte položky a součet a rozdělte podle položek nebo rovným dílem. Účtenka se při tomto postupu propojí se skupinou automaticky.",
    },
  ],
  a11y: {
    hero: "Naskenujte účet a rozdělte ho podle položek",
    nav: splitBillEn.a11y.nav,
    stepsRegion: "Jak rozdělit účet v restauraci s CheqSplit",
    features: "Jak rozdělit účet v restauraci s CheqSplit",
    faq: "Časté dotazy",
  },
};
