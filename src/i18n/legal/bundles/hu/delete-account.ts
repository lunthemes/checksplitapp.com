import type { DeleteAccountPage } from "../../types";

const mail = '<a class="font-medium text-brand-600 underline hover:text-brand-700" href="mailto:support@cheqsplitapp.com">support@cheqsplitapp.com</a>';

export const deleteAccountHu: DeleteAccountPage = {
  metaTitle: "Fiók törlése – CheqSplit",
  metaDescription:
    "Hogyan kérheti a CheqSplit-fiók és a kapcsolódó személyes adatok törlését.",
  h1: "Fiók törlése",
  lastUpdatedPrefix: "Utolsó frissítés:",
  lastUpdatedDate: "2026. április 16.",
  intro:
    `Ez az oldal elmagyarázza, hogyan kérheti a CheqSplit-fiók és a <strong>CheqSplit</strong> által feldolgozott kapcsolódó személyes adatok törlését (a Google Play-en ezen a fejlesztői listán szereplő alkalmazás).`,
  howTitle: "Hogyan kérje a fiók törlését",
  howSteps: [
    `Küldjön e-mailt a(z) ${mail} címre a CheqSplit-fiókjához kapcsolt címről (uganarról, amit a Firebase / Google-bejelentkezéshez használ, ha érinti).`,
    "Tárgy: <strong>Fióktörlési kérelem</strong>.",
    "Az üzenetben egyértelműen írja le, hogy a CheqSplit-fiókját és a kapcsolódó adatokat szeretné törölni. Ha Google-fiókkal jelentkezik be, említse meg a Google-fiók e-mail-címét az azonosítás érdekében.",
  ],
  howNote:
    "Válaszolhatunk az azonosítás megerősítésére a kérelem feldolgozása előtt. Ha nem tudjuk ellenőrizni a kérést, további információt kérhetünk.",
  whatDeleteTitle: "Mit törlünk",
  whatDeleteIntro: "Ellenőrzött kérelem feldolgozása után törlünk vagy anonimizálunk:",
  whatDeleteList: [
    "A backendünkben tárolt hitelesítési profiladatokat (pl. a Firebase Authentication felhasználói rekordja, amely a fiókjához kapcsolódik).",
    "Az alkalmazásadatait a felhasználói azonosítója alatt tárolva az adatbázisainkban (pl. utazások, számlák és a fiókjához kötött tartalom), a lenti technikai és jogi korlátok szerint.",
  ],
  retainTitle: "Mi maradhat meg (és miért)",
  retainBullets: [
    {
      label: "Összesített vagy de-identifikált adatok",
      text: "amelyek nem köthetők ésszerűen vissza Önhöz.",
    },
    {
      label: "Nyilvántartások, amelyeket meg kell őriznünk",
      text: "korlátozott ideig, ahol a törvény előírja (pl. adó-, könyvviteli vagy csalásmegelőzési kötelezettségek).",
    },
    {
      label: "Csak az Ön eszközén tárolt adatok",
      text: "amíg nem távolítja el az alkalmazást vagy nem törli az alkalmazás adatait; távolról nem törölhetjük más felhasználó telefonját. Más résztvevők megtarthatják a már megkapott megosztott számlák másolatait.",
    },
    {
      label: "Előfizetési és vásárlási nyilvántartások",
      text: "amelyeket az Apple vagy a Google és fizetési/előfizetési szolgáltatóink dolgoznak fel; az ő szabályzataik és jogi követelményeik szerint megőrizhetők; a CheqSplit-fiók törlése nem törli az App Store / Play számlázási rendszereiben lévő bizonylatokat.",
    },
  ],
  timingTitle: "Határidők",
  timingBody:
    "Az ellenőrzött törlési kéréseket ésszerű időn belül dolgozzuk fel, általában <strong>30 napon</strong> belül, kivéve, ha a törvény vagy rendkívüli körülmények (pl. vita vagy visszaélésvizsgálat) hosszabb időt írnak elő.",
  privacySeeAlso: "Általános adatvédelmi gyakorlatunkért lásd:",
  privacyLinkText: "Adatvédelmi szabályzat",
  relatedNavLabel: "Kapcsolódó:",
  relatedDeleteData: "Adatok törlése (fiók törlése nélkül)",
  relatedTerms: "Szolgáltatási feltételek",
};
