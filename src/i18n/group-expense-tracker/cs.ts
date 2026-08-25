import type { GroupExpenseTrackerCopy } from "./types";
import { groupExpenseTrackerEn } from "./en";

export const groupExpenseTrackerCs: GroupExpenseTrackerCopy = {
  metaTitle: "Sledujte skupinové výdaje a zjistěte, kdo komu dluží | CheqSplit",
  metaDescription: "Mějte všechny společné výdaje na jednom místě, u každého zaznamenejte, kdo zaplatil a kdo se na něm podílel, a kdykoli zkontrolujte zůstatky celé skupiny.",
  softwareDescription: "Mějte všechny společné výdaje na jednom místě, u každého zaznamenejte, kdo zaplatil a kdo se na něm podílel, a kdykoli zkontrolujte zůstatky celé skupiny.",
  h1: "Sledujte skupinové výdaje a zjistěte, kdo komu dluží",
  heroText: "Mějte všechny společné výdaje na jednom místě, u každého zaznamenejte, kdo zaplatil a kdo se na něm podílel, a kdykoli zkontrolujte zůstatky celé skupiny.",
  downloadCta: "Stáhnout zdarma",
  secondaryCta: "",
  nav: {
    how: "Jak funguje sledování skupinových výdajů",
    faq: "Časté dotazy",
  },
  timelineH2: "Společná historie výdajů místo zpráv rozházených po chatech",
  timelineText: "Jeden zaplatí hotel, druhý koupí vstupenky a někdo jiný taxi. Místo pozdějšího hledání ve zprávách ukládá CheqSplit každý výdaj do jednoho společného přehledu.",
  howH2: "Jak funguje sledování skupinových výdajů",
  steps: [
    {
      title: "Pozvěte skupinu do cesty",
      text: "Po vytvoření a pojmenování cesty pozvěte účastníky pomocí odkazu nebo QR kódu.",
      imageAlt: "Pozvěte skupinu do cesty",
    },
    {
      title: "Přidejte každý výdaj",
      text: "Otevřete kartu Expenses a klepněte na Add Expense. Zadejte popis a částku, vyberte, kdo zaplatil, a označte účastníky výdaje.",
      imageAlt: "Přidejte každý výdaj",
    },
    {
      title: "Vyberte, kdo se na výdaji podílel",
      text: "Zvolte Everyone nebo Custom a označte jen ty osoby, kterých se konkrétní výdaj skutečně týkal.",
      imageAlt: "Vyberte, kdo se na výdaji podílel",
    },
    {
      title: "Sledujte společnou historii výdajů",
      text: "Každý přidaný výdaj se zobrazí na kartě Expenses spolu s částkou, plátcem a účastníky.",
      imageAlt: "Sledujte společnou historii výdajů",
    },
    {
      title: "Zjistěte, kdo komu dluží",
      text: "V části Summary uvidíte, kdo má peníze dostat a kdo má zaplatit. CheqSplit počítá zůstatky, ale peníze neposílá.",
      imageAlt: "Zjistěte, kdo komu dluží",
    }
  ],
  subsetH2: "Pro každý výdaj použijte správné rozdělení",
  subsetText: "Ne každý výdaj patří celé skupině. Taxi přiřaďte jen těm, kteří jeli, vstupenky jen účastníkům a skutečně společné náklady celé skupině. U podrobného účtu z restaurace použijte kartu Bills a Add Bill.",
  receiptBridgeH2: "Přidejte do cesty účet z restaurace rozdělený podle položek",
  receiptBridgeText: "Když má skupina podrobný účet z restaurace, nejprve jej rozdělte podle jednotlivých položek včetně poplatků a spropitného. Potom v cestě otevřete kartu Bills a klepněte na Add Bill.",
  receiptBridgeCta: "Podívejte se, jak funguje rozdělení účtenky",
  reportH2: "Uchovejte záznam, ke kterému se skupina může vrátit",
  reportText: "Cestu archivujte a exportujte PDF přehled s výdaji, součty, tabulkami a grafem. Výsledek se kontroluje mnohem snadněji než závěrečné počítání zpaměti.",
  fitsH2: "Kdy se CheqSplit hodí",
  fits: [
    "Víkend nebo dovolená s přáteli",
    "Skupinová cesta s ubytováním, dopravou, jídlem, vstupenkami nebo aktivitami",
    "Několik výdajů na cestě zaplacených různými účastníky",
    "Podrobný účet z restaurace, přidaný z karty Bills pomocí Add Bill",
  ],
  faqH2: "Časté dotazy ke skupinovým výdajům",
  faq: [
    {
      q: "Mohou výdaje přidávat různí lidé?",
      a: "Ano. Kterýkoli účastník může otevřít kartu Expenses a klepnout na Add Expense. Pro podrobnou účtenku použijte kartu Bills a Add Bill.",
    },
    {
      q: "Může se výdaj týkat jen některých lidí?",
      a: "Ano. Zvolte Everyone nebo Custom a poté vyberte pouze účastníky, kteří daný výdaj sdíleli.",
    },
    {
      q: "Mohu naskenovat účtenku jako výdaj na cestě?",
      a: "Pro rozdělení podle jednotlivých položek použijte postup pro restauranční účtenku včetně daně a spropitného. Potom v cestě otevřete kartu Bills a klepněte na Add Bill.",
    },
    {
      q: "Jak zjistím, kdo má komu zaplatit?",
      a: "CheqSplit spojí skupinové výdaje a zobrazí výsledné zůstatky — kdo komu dluží. Vypočítá jednotlivé podíly, ale peníze neposílá.",
    },
    {
      q: "Mohu výsledek exportovat?",
      a: "Ano. CheqSplit může exportovat podrobný PDF přehled s výdaji, součty, tabulkami a grafem a dokončenou cestu lze archivovat.",
    },
  ],
  ctaTitle: "Mějte výdaje celé skupiny v jednom přehledu",
  ctaBody: "Vytvořte cestu, přidávejte výdaje průběžně a nechte CheqSplit ukázat, kdo komu dluží.",
  internalRestaurantBefore: "Potřebujete rozdělit jednu večeři podle položek? Použijte ",
  internalRestaurantLabel: "rozdělení účtu z restaurace",
  internalRestaurantAfter: " ke skenování, pozvání a přiřazení položek v reálném čase.",
  guideBridgeBefore: "Chcete nejdřív postup krok za krokem? Přečtěte si, ",
  guideBridgeLabel: "jak rozdělit výdaje na cestě s přáteli",
  guideBridgeAfter: ".",
  a11y: {
    nav: groupExpenseTrackerEn.a11y.nav,
    hero: "Sledujte skupinové výdaje a zjistěte, kdo komu dluží",
    timeline: "Společná historie výdajů místo zpráv rozházených po chatech",
    how: "Jak funguje sledování skupinových výdajů",
    subset: "Pro každý výdaj použijte správné rozdělení",
    receipt: "Přidejte do cesty účet z restaurace rozdělený podle položek",
    report: "Uchovejte záznam, ke kterému se skupina může vrátit",
    fits: "Kdy se CheqSplit hodí",
    faq: "Časté dotazy ke skupinovým výdajům",
  },
};
