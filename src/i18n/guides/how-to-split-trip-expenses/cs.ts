import type { TripExpensesGuideCopy } from "./types";

export const tripExpensesGuideCs: TripExpensesGuideCopy = {
  metaTitle: "Jak rozdělit výdaje na cestě s přáteli | CheqSplit",
  metaDescription: "Vytvořte jednu cestu, u každého výdaje zaznamenejte, kdo zaplatil a kdo se na něm podílel, a před koncem cesty zkontrolujte zůstatky.",
  h1: "Jak rozdělit výdaje na cestě s přáteli",
  answer: "Vytvořte jednu cestu, u každého výdaje zaznamenejte, kdo zaplatil a kdo se na něm podílel, a před koncem cesty zkontrolujte zůstatky.",
  answerFollow: "Když budete výdaje zapisovat průběžně, skupina nebude muset na konci celé vyúčtování skládat zpětně.",
  rulesH2: "Dohodněte pravidla výdajů ještě před cestou",
  rulesBody: "Před první platbou se dohodněte, které náklady sdílejí všichni a které jen někteří. Plátce evidujte odděleně od účastníků a výdaje přidávejte průběžně. Pro zůstatky zvolte měnu skupiny. U jiné měny zkontrolujte referenční kurz a datum, zadejte vlastní kurz nebo částku skutečně strženou bankou v měně skupiny. Jasná pravidla udrží záznamy jednotné.",
  stepsH2: "Jak rozdělit výdaje na cestě v 5 krocích",
  steps: [
    { title: "Vytvořte skupinu pro cestu", desc: "Na hlavní obrazovce klepněte na Vytvořit skupinu, pojmenujte ji, zvolte měnu a pozvěte účastníky odkazem nebo QR kódem." },
    { title: "Zaznamenejte, kdo zaplatil", desc: "U každého výdaje jasně uveďte plátce — u vstupenek, ubytování, dopravy, restaurace i aktivity zaplacené za skupinu." },
    { title: "Vyberte účastníky", desc: "Všechny zahrňte jen tehdy, když se na nákladu skutečně podíleli. U taxi, aktivity nebo restaurace vyberte jen dotčené osoby." },
    { title: "Přidávejte výdaje průběžně", desc: "Otevřete Výdaje a klepněte na Přidat výdaj. Zadejte popis, částku a měnu, případně kategorii, vyberte plátce a potom Všichni nebo Vlastní pro účastníky. Výdaj může přidat každý účastník." },
    { title: "Zkontrolujte zůstatky", desc: "Před uzavřením nebo exportem cesty projděte společnou historii a ověřte, kdo komu dluží. Nejdříve doplňte chybějící výdaje." }
  ],
  exampleH2: "Příklad: rozdělení víkendového výletu mezi čtyři přátele",
  exampleIntro: "Alex, Blair, Casey a Dana tráví víkend společně. Hotel a vstupenky do muzea se týkají všech. Taxi využili jen Alex, Blair a Casey.",
  exampleExpenseCaption: "Výdaje",
  exampleExpenseRows: [
    {
      expense: "Hotel",
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
      expense: "Vstupenky do muzea",
      payer: "Dana",
      participants: "Alex, Blair, Casey, Dana",
      amount: "€80.00",
    }
  ],
  exampleBalanceCaption: "Zaplaceno vs. podíl",
  exampleBalanceRows: [
    { person: "Alex", paid: "€400.00", share: "€135.00", net: "má dostat €265.00" },
    { person: "Blair", paid: "€45.00", share: "€135.00", net: "dluží €90.00" },
    { person: "Casey", paid: "€0.00", share: "€135.00", net: "dluží €135.00" },
    { person: "Dana", paid: "€80.00", share: "€120.00", net: "dluží €40.00" }
  ],
  exampleSettle: "Blair zaplatí Alexovi €90, Casey €135 a Dana €40. Tyto tři platby dohromady dávají €265, tedy přesně částku, kterou má Alex dostat.",
  exampleNote: "Podíly: hotel €100 na osobu; taxi €15 na každého ze tří cestujících; vstupenky €20 na osobu. Dana taxi nejela, takže její podíl je €120 místo €135. CheqSplit tyto zůstatky vypočítá, ale peníze neposílá.",
  productH2: "Sledujte společné cestovní výdaje s CheqSplit",
  productBody: "Na hlavní obrazovce vytvořte skupinu, zvolte měnu a pozvěte účastníky. Ve Výdajích přes Přidat výdaj zaznamenejte hotel, taxi či vstupenky: částku, měnu, plátce a účastníky přes Všichni nebo Vlastní; kategorie je volitelná. V Účtenkách otevře Přidat účtenku skenování nebo nahrání. Zkontrolujte položky a rozdělte je podle položek nebo rovným dílem. Pro jiné měny použijte referenční kurz s datem, vlastní kurz nebo skutečné bankovní stržení v měně skupiny. Zkontrolujte zůstatky, exportujte PDF zprávu nebo skupinu archivujte. CheqSplit nepřevádí peníze.",
  productCta: "Sledovat skupinové a cestovní výdaje s CheqSplit",
  receiptNoteBefore: "Pokud je výdaj na cestě podrobný účet z restaurace, použijte nejprve ",
  receiptNoteLabel: "rozdělení účtenky podle položek",
  receiptNoteAfter: " přímo ze záložky Účtenky ve skupině přes Přidat účtenku. Účtenku naskenujte nebo nahrajte, zkontrolujte položky a součet a rozdělte podle položek nebo rovným dílem; propojí se se skupinou automaticky.",
  faqH2: "Časté dotazy k rozdělení výdajů na cestě",
  faq: [
    {
      q: "Musí se každý výdaj rozdělit mezi všechny?",
      a: "Ne. Vyberte pouze účastníky, kterých se konkrétní výdaj týká.",
    },
    {
      q: "Kdy je nejlepší výdaj zaznamenat?",
      a: "Co nejdříve — dokud si ještě dobře pamatujete částku, plátce a zúčastněné osoby.",
    },
    {
      q: "Jak postupovat u účtu z restaurace?",
      a: "Ve skupině otevřete Účtenky a klepněte na Přidat účtenku pro skenování nebo nahrání. Zkontrolujte rozpoznané položky a celkovou částku; účtenka se automaticky propojí se skupinou. Potom ji rozdělte podle položek nebo rovným dílem.",
    },
    {
      q: "Převádí CheqSplit měny?",
      a: "Ano. Skupinové výdaje mohou být v jiné měně. Zkontrolujte referenční kurz a datum, zadejte vlastní kurz nebo skutečné bankovní stržení v měně skupiny. CheqSplit použije převedenou částku pro zůstatky skupiny; nepřevádí peníze.",
    },
  ],
  ctaTitle: "Všechny výdaje z cesty v jednom společném přehledu",
  ctaBody: "Vytvořte cestu, přidávejte výdaje průběžně a nechte CheqSplit na konci ukázat, kdo komu dluží.",
  crumbGuides: "Návody",
  crumbCurrent: "Výdaje na cestě",
  colExpense: "Výdaj",
  colPayer: "Plátce",
  colParticipants: "Účastníci",
  colAmount: "Částka",
  colPerson: "Osoba",
  colPaid: "Zaplaceno",
  colShare: "Podíl",
  colResult: "Výsledek",
};
