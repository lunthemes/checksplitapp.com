import type { DeleteDataPage } from "../../types";

const mail = '<a class="font-medium text-brand-600 underline hover:text-brand-700" href="mailto:lungusterus@gmail.com">lungusterus@gmail.com</a>';

export const deleteDataHu: DeleteDataPage = {
  metaTitle: "Adatok törlése (fiók törlése nélkül) – CheqSplit",
  metaDescription:
    "Távolítsa el a CheqSplit alkalmazás adatait a fiók bezárása nélkül. Google Play „adattörlés” információ.",
  h1: "Adatok törlése (fiók törlése nélkül)",
  lastUpdatedPrefix: "Utolsó frissítés:",
  lastUpdatedDate: "2026. április 16.",
  intro:
    "A <strong>CheqSplit</strong> (ez az alkalmazás a Google Playen) lehetővé teszi az alkalmazás egy részének vagy az összes adatának eltávolítását <strong>a fiók bezárása nélkül</strong>. Ez az oldal a Google Play által megkövetelt link az „adattörlés” kérésekhez.",
  step1Title: "1. lépés — Az alkalmazásban (leggyorsabb)",
  step1Intro: "Ön maga törölheti a tartalmat:",
  step1Bullets: [
    {
      label: "Utazások, számlák és piszkozatok",
      text: "Távolítson el vagy archiváljon elemeket az alkalmazásban minden képernyő szerint (pl. töröljön egy utazást, ürítsen egy számlát, dobjon el egy piszkozatot).",
    },
    {
      label: "Csak helyi adatok",
      text: "Az alkalmazás tárhelyének törlése vagy eltávolítása törli a csak az eszközön tárolt adatokat.",
    },
  ],
  step1Note:
    "Az alkalmazásban végzett módosítások szinkronizálódnak a szervereinkkel, ha a fiók felhős funkciókat használ; a tartalom alkalmazásban történő eltávolítása eltávolítja az aktív munkaterületről, ahol ez technikailag lehetséges.",
  step2Title: "2. lépés — E-mail szerveroldali törléshez",
  step2Intro:
    "Ha konkrét adatokat kell eltávolítani rendszereinkből (pl. olyan másolatokat, amelyeket az alkalmazásban nem tud törölni, vagy tévedés miatt), lépjen kapcsolatba velünk:",
  step2Steps: [
    `Írjon a(z) ${mail} címre a fiókjához kapcsolt címről (vagy írja le, hogyan tudjuk ellenőrizni).`,
    "Tárgy: <strong>Adattörlési kérelem (fiók bezárása nélkül)</strong>.",
    "Sorolja fel, mit töröljünk (pl. „minden 2025 előtti utazás”, „X nevű utazás”, „nyugtaképek dátuma …”).",
  ],
  step2Note:
    "Kérhetjük az azonosítás megerősítését a fiókjához kötött adatok módosítása vagy törlése előtt.",
  vsTitle: "Mit törlünk vs mit tartunk meg",
  vsBullets: [
    {
      label: "Törölve kérésre / az alkalmazásban:",
      text: "Felhasználó által létrehozott utazások, számlák, tételek, résztvevő-címkék és hasonló tartalom, amelyet Ön eltávolít vagy mi eltávolítunk egy ellenőrzött e-mail-kérés után, a biztonsági mentések és jogi megőrzés korlátaival együtt lent.",
    },
    {
      label: "Ideiglenesen megőrizhető:",
      text: "Titkosított biztonsági másolatok vagy replikák, amíg a szokásos mentési ciklusokban le nem járnak (általában rövid távon).",
    },
    {
      label: "Hosszabb ideig megőrizhető, ha a törvény előírja:",
      text: "Minimális nyilvántartások adózás, csalásmegelőzés vagy jogi eljárás céljából.",
    },
    {
      label: "Más felhasználók másolatai:",
      text: "Ha megosztott egy számlát, más résztvevőknek lehet saját másolatuk; nem törölhetünk adatot másvalaki eszközén.",
    },
    {
      label: "Előfizetések:",
      text: "Az Apple / Google vásárlási előzményei a bolt szabályai szerint; az alkalmazás adatainak törlése nem törli a boltban lévő bizonylatokat.",
    },
  ],
  timingTitle: "Határidők",
  timingBody:
    "Ellenőrzött <strong>részleges</strong> törlési kéréseket <strong>30 napon</strong> belül igyekszünk teljesíteni, kivéve, ha a törvény vagy a biztonság mást nem követel.",
  accountInsteadLead: "A teljes fiók törléséhez lásd:",
  accountInsteadLinkText: "Fiók törlése",
  accountInsteadTail: ".",
  privacyLead: "Általános adatvédelem:",
  privacyLinkText: "Adatvédelmi szabályzat",
  privacyTail: ".",
};
