import type { TripExpensesGuideCopy } from "./types";

export const tripExpensesGuideCs: TripExpensesGuideCopy = {
  metaTitle: "Jak rozdělit výdaje na cestě s přáteli | CheqSplit",
  metaDescription: "Vytvořte jednu cestu, u každého výdaje zaznamenejte, kdo zaplatil a kdo se na něm podílel, a před koncem cesty zkontrolujte zůstatky.",
  h1: "Jak rozdělit výdaje na cestě s přáteli",
  answer: "Vytvořte jednu cestu, u každého výdaje zaznamenejte, kdo zaplatil a kdo se na něm podílel, a před koncem cesty zkontrolujte zůstatky.",
  answerFollow: "Když budete výdaje zapisovat průběžně, skupina nebude muset na konci celé vyúčtování skládat zpětně.",
  rulesH2: "Dohodněte pravidla výdajů ještě před cestou",
  rulesBody: "Ještě před první platbou si určete, které náklady sdílí celá skupina a které se týkají jen některých lidí. Ubytování často patří všem, taxi nebo vstupenka do muzea ale nemusí. Vždy zvlášť zaznamenejte, kdo zaplatil a kdo se na výdaji podílel — plátce nemusí být vždy součástí rozdělení. Výdaje přidávejte průběžně, dokud si částku i účastníky dobře pamatujete. Pokud používáte více měn, předem se dohodněte, jak je budete zapisovat; CheqSplit měny nepřevádí. Jasná pravidla od začátku udrží společný přehled konzistentní až do závěrečného vyúčtování.",
  stepsH2: "Jak rozdělit výdaje na cestě v 5 krocích",
  steps: [
    { title: "Vytvořte cestu včas", desc: "Pojmenujte cestu, přidejte účastníky a zapište už vzniklé náklady, aby skupina začínala s jedním společným přehledem." },
    { title: "Zaznamenejte, kdo zaplatil", desc: "U každého výdaje jasně uveďte plátce — u vstupenek, ubytování, dopravy, restaurace i aktivity zaplacené za skupinu." },
    { title: "Vyberte účastníky", desc: "Všechny zahrňte jen tehdy, když se na nákladu skutečně podíleli. U taxi, aktivity nebo restaurace vyberte jen dotčené osoby." },
    { title: "Přidávejte výdaje průběžně", desc: "Částky zapisujte, dokud je máte v čerstvé paměti. V CheqSplit otevřete kartu Expenses a klepněte na Add Expense. Výdaj může přidat kterýkoli účastník." },
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
  productBody: "CheqSplit umožňuje vytvořit cestu, zaznamenat plátce a účastníky každého výdaje, sledovat společnou historii a kdykoli zjistit, kdo komu dluží. Taxi, hotel nebo vstupenky přidejte přes Expenses a Add Expense, podrobnou restauraci přes Bills a Add Bill. Po skončení cestu archivujte a exportujte PDF přehled. CheqSplit počítá zůstatky, ale neposílá peníze ani nepřevádí měny.",
  productCta: "Sledovat skupinové a cestovní výdaje s CheqSplit",
  receiptNoteBefore: "Pokud je výdaj na cestě podrobný účet z restaurace, použijte nejprve ",
  receiptNoteLabel: "rozdělení účtenky podle položek",
  receiptNoteAfter: " včetně poplatků a spropitného. Poté otevřete kartu Bills v cestě a klepněte na Add Bill.",
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
      a: "Pro podrobné rozdělení použijte postup pro restauranční účtenku včetně daně a spropitného. Potom v cestě otevřete kartu Bills a klepněte na Add Bill.",
    },
    {
      q: "Převádí CheqSplit měny?",
      a: "Ne. Převod měn není ověřenou funkcí CheqSplit. Částky zapisujte přesně tak, jak jsou uvedeny u daného výdaje.",
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
