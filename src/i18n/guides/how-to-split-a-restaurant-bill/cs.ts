import type { RestaurantBillGuideCopy } from "./types";

export const restaurantBillGuideCs: RestaurantBillGuideCopy = {
  metaTitle: "Jak spravedlivě rozdělit účet v restauraci | CheqSplit",
  metaDescription: "Zkontrolujte finální účtenku, přiřaďte jednotlivé položky, rozdělte společné položky mezi správné osoby a ověřte, že všechny částky odpovídají celkovému účtu.",
  h1: "Jak spravedlivě rozdělit účet v restauraci",
  answer: "Zkontrolujte finální účtenku, přiřaďte jednotlivé položky, rozdělte společné položky mezi správné osoby a ověřte, že všechny částky odpovídají celkovému účtu.",
  choiceH2: "Vyberte mezi rovnoměrným rozdělením a rozdělením podle položek",
  choiceBody: "Rozdělit účet rovným dílem je nejrychlejší, když jsou objednávky podobné a všichni souhlasí se stejným podílem. Pokud si lidé objednali různá jídla nebo nápoje, bývá spravedlivější rozdělení podle položek: nejprve každému přiřaďte jeho vlastní objednávku. Společné talíře, lahve nebo dezerty zahrňte jen těm, kteří je skutečně sdíleli. Nakonec přidejte servisní poplatek, daň a spropitné tak, aby jednotlivé podíly dohromady odpovídaly účtence. Pokud se částky neshodují, pravděpodobně chybí položka nebo poplatek. Výsledek tak odpovídá skutečnému účtu, ne hrubému odhadu.",
  stepsH2: "Jak spravedlivě rozdělit účet v restauraci v 5 krocích",
  steps: [
    { title: "Zkontrolujte účtenku", desc: "Než začnete cokoli dělit, ověřte každou položku i konečný součet." },
    { title: "Přiřaďte jednotlivé objednávky", desc: "Každému přiřaďte pouze jídlo a pití, které si objednal. Začněte jednoznačnými položkami." },
    { title: "Rozdělte společné položky", desc: "Zahrňte pouze ty, kteří sdíleli společný talíř nebo láhev. Rozdělte částku rovnoměrně nebo podle dohodnutého poměru." },
    { title: "Zkontrolujte zbývající částky", desc: "Vyhledejte nepřiřazené položky, chyby skenování a daň či spropitné, které ještě nebyly započítány." },
    { title: "Ukažte výsledek", desc: "Každý by měl vidět svůj podíl a výsledný zůstatek, aby všichni s rozdělením souhlasili ještě u stolu." }
  ],
  exampleH2: "Příklad: rozdělení účtu mezi čtyři osoby",
  exampleIntro: "Maya, Noah, Owen a Priya mají jednu společnou účtenku. Maya a Noah navíc sdílejí láhev vína. Na jídlo a pití se vztahuje 10% servisní poplatek.",
  exampleReceiptCaption: "Účtenka",
  exampleReceiptRows: [
    { item: "Těstoviny (Maya)", amount: "€15.00" },
    { item: "Burger (Noah)", amount: "€15.00" },
    { item: "Grilovaná ryba (Owen)", amount: "€20.00" },
    { item: "Salát (Priya)", amount: "€10.00" },
    { item: "Láhev vína (Maya a Noah)", amount: "€20.00" },
    { item: "Mezisoučet", amount: "€80.00" },
    { item: "Servisní poplatek (10%)", amount: "€8.00" },
    { item: "Celkem", amount: "€88.00" }
  ],
  exampleShareCaption: "Částka k úhradě",
  exampleShareRows: [
    { person: "Maya (těstoviny €15 + polovina vína €10 + servis €2.50)", amount: "€27.50" },
    { person: "Noah (burger €15 + polovina vína €10 + servis €2.50)", amount: "€27.50" },
    { person: "Owen (ryba €20 + servis €2.00)", amount: "€22.00" },
    { person: "Priya (salát €10 + servis €1.00)", amount: "€11.00" },
    { person: "Celkem za všechny čtyři podíly", amount: "€88.00" }
  ],
  exampleNote: "Servisní poplatek se rozděluje poměrně podle ceny jídla a pití: Maya a Noah mají každý €25 z mezisoučtu €80, Owen €20 a Priya €10. Všechny čtyři podíly dohromady dávají přesně €88, tedy celkovou částku účtenky.",
  productH2: "Rozdělte účet z restaurace podle položek s CheqSplit",
  productBody: "CheqSplit používá stejný postup: naskenuje účtenku, umožní sdílení přes odkaz nebo QR kód, přiřazení vlastních i společných položek, samostatné zadání poplatků a spropitného a zobrazí, kdo komu dluží. CheqSplit počítá zůstatky, ale peníze neposílá.",
  productCta: "Rozdělit účet z restaurace s CheqSplit",
  faqH2: "Časté dotazy k rozdělení účtu v restauraci",
  faq: [
    {
      q: "Musí být účet vždy rozdělen rovným dílem?",
      a: "Pouze pokud s tím skupina souhlasí a objednávky jsou podobné. Když si každý objednal něco jiného, přiřaďte položky tak, aby částka každého odpovídala tomu, co skutečně měl.",
    },
    {
      q: "Jak rozdělit společnou položku?",
      a: "Mezi osoby, které ji sdílely — rovným dílem nebo podle dohodnutého procenta, pokud nebyly podíly stejné.",
    },
    {
      q: "Proč se někdy výsledné částky neshodují?",
      a: "Zkontrolujte nepřiřazené položky, chyby při skenování nebo zadávání a daň či spropitné v Fees & Tips, aby rozdělení odpovídalo celkové částce na účtence.",
    },
  ],
  ctaTitle: "Chcete účet rozdělit rovnou u stolu?",
  ctaBody: "Naskenujte účtenku, přiřaďte položky lidem, kteří si je objednali, a hned uvidíte, kdo komu dluží.",
  crumbGuides: "Návody",
  crumbCurrent: "Účet v restauraci",
  colItem: "Položka",
  colAmount: "Částka",
  colPerson: "Osoba",
  colDue: "Částka k úhradě",
};
