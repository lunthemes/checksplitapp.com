import type { PrivacyPage } from "../../types";

const link = (href: string, text: string) =>
  `<a class="font-medium text-brand-600 underline hover:text-brand-700" href="${href}">${text}</a>`;

export const privacyCs: PrivacyPage = {
  metaTitle: "Zásady ochrany osobních údajů – CheqSplit",
  metaDescription:
    "Jak CheqSplit shromažďuje, používá a chrání vaše informace při používání naší mobilní aplikace.",
  h1: "Zásady ochrany osobních údajů",
  lastUpdatedPrefix: "Naposledy aktualizováno:",
  lastUpdatedDate: "25. března 2026",
  intro:
    'CheqSplit („my“, „náš“ nebo „nás“) se zavazuje chránit vaše soukromí. Tyto zásady ochrany osobních údajů vysvětlují, jak shromažďujeme, používáme a chráníme vaše informace při používání naší mobilní aplikace.',
  s1Title: "1 — Informace, které shromažďujeme",
  s1Intro: "CheqSplit shromažďuje minimální data potřebná pro funkci dělení účtů:",
  s1Bullets: [
    {
      label: "Ověřování identity",
      text: "CheqSplit můžete používat v anonymní relaci, nebo se přihlásit či propojit účet e-mailem a heslem (ukládá a ověřuje Firebase Authentication), nebo se přihlásit přes Google. Pokud použijete e-mail/heslo nebo Google, obdržíme identifikátory, které Firebase přiřadí vašemu účtu (typicky e-mail a u Google vaše jméno), abyste se mohli přihlásit na jiných zařízeních a obnovit přístup. Hesla spravuje Firebase; neukládáme vaše heslo v čitelné podobě.",
    },
    {
      label: "Data o účtech a výletech",
      text: "Informace, které dobrovolně zadáte, včetně názvů položek, množství, cen, jmen účastníků, názvů výletů a souvisejících dat o sdílených výdajích.",
    },
    {
      label: "Obrázky účtenek a skenování",
      text: "Fotky, které pořídíte nebo importujete, mohou být analyzovány na zařízení pomocí rozpoznávání textu na zařízení (OCR). Když je v aplikaci zapnuté chytré skenování účtenek, části obrázku účtenky a/nebo extrahovaný text mohou být odeslány generativní AI službě Google (Gemini) k detekci položek a součtů. Před sdílením účtu vždy zkontrolujte a opravte položky.",
    },
    {
      label: "Předplatné",
      text: "Zakoupíte-li prémiový plán, platbu zpracovává Apple. K ověření oprávnění používáme RevenueCat; RevenueCat obdrží identifikátor uživatele aplikace a data související s nákupem podle jejich zásad.",
    },
    {
      label: "Informace o zařízení",
      text: "Základní údaje o zařízení a diagnostika pro fungování aplikace a hlášení pádů.",
    },
  ],
  s2Title: "2 — Jak vaše informace používáme",
  s2Intro: "Shromážděné informace používáme k tomu, abychom mohli:",
  s2List: [
    "Poskytovat funkce dělení a sdílení účtů",
    "Umožnit spolupráci v reálném čase s dalšími účastníky",
    "Ukládat historii účtů pro vaše pohodlí",
    "Zlepšovat výkon aplikace a opravovat chyby",
  ],
  s3Title: "3 — Ukládání a zabezpečení dat",
  s3Intro: "Vaše data jsou bezpečně uložena pomocí služeb Google Firebase:",
  s3List: [
    "Data účtů jsou uložena ve Firebase Realtime Database s bezpečnostními pravidly, která zajistí, že konkrétní účty mohou zobrazovat jen oprávnění účastníci.",
    "Data jsou při přenosu šifrována pomocí HTTPS.",
    "Neukládáme platební údaje ani platby nezpracováváme.",
  ],
  s4Title: "4 — Sdílení dat",
  s4Intro:
    "Vaše osobní údaje neprodáváme, nevyměňujeme ani nepronajímáme třetím stranám. Vaše data mohou být sdílena pouze:",
  s4List: [
    "S dalšími účastníky, které pozvete k dělení účtu (vidí položky účtu a vámi zvolené zobrazované jméno)",
    "S poskytovateli služeb (Firebase/Google) pro hosting a infrastrukturu",
    "Je-li to vyžadováno zákonem nebo k ochraně našich práv",
  ],
  s5Title: "5 — Uchovávání dat",
  s5Body:
    "Data účtů uchováváme, dokud je máte v aplikaci. Účty můžete kdykoli smazat. Dokončené relace jsou uloženy lokálně na vašem zařízení a lze je vymazat v nastavení aplikace.",
  s6Title: "6 — Vaše práva",
  s6Intro: "Máte právo:",
  s6List: [
    "Přistupovat k datům uloženým v aplikaci",
    "Mazat účty a historii relací",
    "Požádat o informace o datech, která uchováváme",
  ],
  s7Title: "7 — Soukromí dětí",
  s7Body:
    "CheqSplit není určen dětem mladším 13 let. Vědomě od dětí osobní údaje neshromažďujeme.",
  s8Title: "8 — Služby třetích stran",
  s8Intro: "Naše aplikace používá tyto služby třetích stran:",
  s8Bullets: [
    {
      label: "Google Firebase",
      text: `Ověřování identity, Realtime Database a související infrastruktura. Odkaz: ${link("https://firebase.google.com/support/privacy", "https://firebase.google.com/support/privacy")}`,
    },
    {
      label: "Google AI (Gemini)",
      text: `Volitelné zpracování v cloudu pro porozumění účtenkám, pokud je k dispozici chytré skenování. Odkaz: ${link("https://ai.google.dev/gemini-api/terms", "https://ai.google.dev/gemini-api/terms")} a platí zásady ochrany osobních údajů Google.`,
    },
    {
      label: "RevenueCat",
      text: `Stav předplatného a správa nákupů v aplikaci. Odkaz: ${link("https://www.revenuecat.com/privacy", "https://www.revenuecat.com/privacy")}`,
    },
    {
      label: "Apple",
      text: "Distribuce aplikace a nákupy v aplikaci prostřednictvím App Store.",
    },
    {
      label: "OCR na zařízení",
      text: "Rozpoznávání textu z obrázků účtenek může běžet na zařízení pomocí API na zařízení od Apple (na Androidu případně OCR zařízení/výrobce).",
    },
  ],
  s9Title: "9 — Změny těchto zásad",
  s9Body:
    'Tyto zásady ochrany osobních údajů můžeme čas od času aktualizovat. O změnách vás informujeme zveřejněním nových zásad v aplikaci a aktualizací data „Naposledy aktualizováno“.',
  s10Title: "10 — Kontakt",
  s10Intro: "Máte-li dotazy k těmto zásadám ochrany osobních údajů, kontaktujte nás:",
  emailLabel: "E-mail:",
  developerLabel: "Vývojář:",
  developerName: "Lunthemes",
  relatedNavLabel: "Viz také:",
  relatedTerms: "Podmínky služby",
  relatedDeleteAccount: "Smazat účet",
  relatedDeleteData: "Smazat data",
};
