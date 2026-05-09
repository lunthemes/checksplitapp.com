import type { DeleteDataPage } from "../../types";

const mail = '<a class="font-medium text-brand-600 underline hover:text-brand-700" href="mailto:support@cheqsplitapp.com">support@cheqsplitapp.com</a>';

export const deleteDataCs: DeleteDataPage = {
  metaTitle: "Smazat data (bez smazání účtu) – CheqSplit",
  metaDescription:
    "Odstraňte data aplikace CheqSplit bez zavření účtu. Informace Google Play k „smazání dat“.",
  h1: "Smazat data (bez smazání účtu)",
  lastUpdatedPrefix: "Naposledy aktualizováno:",
  lastUpdatedDate: "16. dubna 2026",
  intro:
    "<strong>CheqSplit</strong> (tato aplikace na Google Play) umožňuje odstranit část nebo všechna data aplikace <strong>bez</strong> zavření účtu. Tato stránka je odkaz vyžadovaný Google Play pro žádosti o „smazání dat“.",
  step1Title: "Krok 1 — V aplikaci (nejrychlejší)",
  step1Intro: "Obsah můžete smazat sami:",
  step1Bullets: [
    {
      label: "Výlety, účty a koncepty",
      text: "Odstraňte nebo archivujte položky v aplikaci podle každé obrazovky (např. smažte výlet, vymažte účet, zahoďte koncept).",
    },
    {
      label: "Data jen lokálně",
      text: "Vymazání úložiště aplikace nebo odinstalace odstraní data uložená jen na zařízení.",
    },
  ],
  step1Note:
    "Změny v aplikaci se synchronizují s našimi servery, kde účet používá cloudové funkce; odstranění obsahu v aplikaci ho odstraní z aktivního pracovního prostoru tam, kde je to technicky možné.",
  step2Title: "Krok 2 — E-mail pro úklid na serveru",
  step2Intro:
    "Potřebujete-li odstranit konkrétní data z našich systémů (např. kopie, které nelze smazat v aplikaci, nebo chybu), kontaktujte nás:",
  step2Steps: [
    `Napište na ${mail} z adresy propojené s účtem (nebo popište, jak vás můžeme ověřit).`,
    "Předmět: <strong>Žádost o smazání dat (bez uzavření účtu)</strong>.",
    "Uveďte, co smazat (např. „všechny výlety před rokem 2025“, „výlet pojmenovaný X“, „obrázky účtenek z data …“).",
  ],
  step2Note:
    "Před změnou nebo smazáním dat vázaných na účet vás můžeme požádat o potvrzení identity.",
  vsTitle: "Co mažeme vs uchováváme",
  vsBullets: [
    {
      label: "Smazáno na žádost / v aplikaci:",
      text: "Uživatelsky vytvořené výlety, účty, položky, štítky účastníků a podobný obsah, který odstraníte nebo odstraníme po ověřené e-mailové žádosti, s ohledem na zálohy a právní zadržení níže.",
    },
    {
      label: "Může být dočasně uchováno:",
      text: "Šifrované zálohy nebo repliky, dokud v běžných cyklech záloh nevyprší (obvykle krátkodobě).",
    },
    {
      label: "Může být uchováno déle, pokud to vyžaduje zákon:",
      text: "Minimální záznamy pro daňové účely, prevenci podvodů nebo právní řízení.",
    },
    {
      label: "Kopie jiných uživatelů:",
      text: "Pokud jste sdíleli účet, ostatní účastníci mohou stále mít svou kopii; nemůžeme smazat data na cizím zařízení.",
    },
    {
      label: "Předplatné:",
      text: "Historie nákupů u Apple / Google se řídí pravidly obchodu; smazání dat aplikace nesmaže doklady v obchodě.",
    },
  ],
  timingTitle: "Lhůty",
  timingBody:
    "Ověřené žádosti o <strong>částečné</strong> smazání se snažíme dokončit do <strong>30 dnů</strong>, pokud zákon nebo bezpečnost nevyžadují jinak.",
  accountInsteadLead: "Chcete-li smazat celý účet, viz",
  accountInsteadLinkText: "Smazat účet",
  accountInsteadTail: ".",
  privacyLead: "Obecná ochrana údajů:",
  privacyLinkText: "Zásady ochrany osobních údajů",
  privacyTail: ".",
};
