import type { DeleteAccountPage } from "../../types";

const mail = '<a class="font-medium text-brand-600 underline hover:text-brand-700" href="mailto:support@cheqsplitapp.com">support@cheqsplitapp.com</a>';

export const deleteAccountCs: DeleteAccountPage = {
  metaTitle: "Smazat účet – CheqSplit",
  metaDescription:
    "Jak požádat o smazání účtu CheqSplit a souvisejících osobních údajů.",
  h1: "Smazat účet",
  lastUpdatedPrefix: "Naposledy aktualizováno:",
  lastUpdatedDate: "16. dubna 2026",
  intro:
    `Tato stránka vysvětluje, jak požádat o smazání účtu CheqSplit a souvisejících osobních údajů zpracovávaných aplikací <strong>CheqSplit</strong> (aplikace uvedená na Google Play u tohoto vývojáře).`,
  howTitle: "Jak požádat o smazání účtu",
  howSteps: [
    `Pošlete e-mail na ${mail} z adresy propojené s účtem CheqSplit (stejné e-mailové adresy, kterou používáte pro Firebase / přihlášení Google, pokud je to relevantní).`,
    "Použijte předmět: <strong>Žádost o smazání účtu</strong>.",
    "Ve zprávě jasně uveďte, že chcete smazat účet CheqSplit a související data. Pokud se přihlašujete přes Google, uveďte e-mail účtu Google, abychom mohli ověřit vaši identitu.",
  ],
  howNote:
    "Můžeme odpovědět k ověření identity před zpracováním žádosti. Pokud žádost nemůžeme ověřit, můžeme požádat o další informace.",
  whatDeleteTitle: "Co mažeme",
  whatDeleteIntro: "Po zpracování ověřené žádosti se snažíme smazat nebo anonymizovat:",
  whatDeleteList: [
    "Údaje profilu ověřování uložené v našem backendu (např. záznam uživatele Firebase Authentication spojený s vaším účtem).",
    "Data aplikace uložená pod vaším uživatelským identifikátorem v našich databázích (např. výlety, účty a související obsah vázaný na účet), s ohledem na technická a právní omezení níže.",
  ],
  retainTitle: "Co může zůstat (a proč)",
  retainBullets: [
    {
      label: "Agregovaná nebo de-identifikovaná data",
      text: "která vás nelze rozumně znovu propojit.",
    },
    {
      label: "Záznamy, které musíme uchovat",
      text: "po omezenou dobu tam, kde to vyžaduje zákon (např. daňové, účetní nebo povinnosti prevence podvodů).",
    },
    {
      label: "Data uložená jen na vašem zařízení",
      text: "dokud aplikaci neodinstalujete nebo nevymažete data aplikace; nelze vzdáleně smazat telefon jiného uživatele. Ostatní účastníci mohou mít kopie sdílených účtů, které již obdrželi.",
    },
    {
      label: "Záznamy o předplatném a nákupech",
      text: "zpracované Apple nebo Google a našimi poskytovateli plateb/předplatného mohou být uchovány podle jejich zásad a právních požadavků; smazání účtu CheqSplit nesmaže doklady v systémech účtování App Store / Play.",
    },
  ],
  timingTitle: "Lhůty",
  timingBody:
    "Ověřené žádosti o smazání zpracujeme v rozumné lhůtě, obvykle do <strong>30 dnů</strong>, pokud zákon nebo mimořádné okolnosti (např. spor nebo šetření zneužití) nevyžadují delší dobu.",
  privacySeeAlso: "Obecné postupy ochrany osobních údajů viz naše",
  privacyLinkText: "Zásady ochrany osobních údajů",
  relatedNavLabel: "Související:",
  relatedDeleteData: "Smazat data (bez smazání účtu)",
  relatedTerms: "Podmínky služby",
};
