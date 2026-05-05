import type { DeleteDataPage } from "../../types";

const mail = '<a class="font-medium text-brand-600 underline hover:text-brand-700" href="mailto:lungusterus@gmail.com">lungusterus@gmail.com</a>';

export const deleteDataRo: DeleteDataPage = {
  metaTitle: "Ștergeți datele (fără a șterge contul) - CheqSplit",
  metaDescription:
    "Eliminați datele aplicației CheqSplit fără a închide contul. Informații Google Play pentru „ștergere date”.",
  h1: "Ștergeți datele (fără a șterge contul)",
  lastUpdatedPrefix: "Ultima actualizare:",
  lastUpdatedDate: "16 aprilie 2026",
  intro:
    "<strong>CheqSplit</strong> (această aplicație pe Google Play) vă permite să eliminați o parte sau toate datele aplicației <strong>fără</strong> a închide contul. Această pagină este linkul cerut de Google Play pentru cereri de „ștergere date”.",
  step1Title: "Pasul 1 — În aplicație (cel mai rapid)",
  step1Intro: "Puteți șterge conținutul singuri:",
  step1Bullets: [
    {
      label: "Călătorii, bonuri și ciorne",
      text: "Eliminați sau arhivați elementele din aplicație conform fiecărui ecran (de ex. ștergeți o călătorie, goliți un bon, renunțați la o ciornă).",
    },
    {
      label: "Date doar locale",
      text: "Ștergerea stocării aplicației sau dezinstalarea elimină datele stocate doar pe dispozitiv.",
    },
  ],
  step1Note:
    "Modificările din aplicație se sincronizează cu serverele noastre unde contul folosește funcții cloud; eliminarea conținutului în aplicație îl elimină din spațiul activ de lucru acolo unde este posibil din punct de vedere tehnic.",
  step2Title: "Pasul 2 — E-mail pentru curățare pe server",
  step2Intro:
    "Dacă aveți nevoie ca anumite date să fie eliminate din sistemele noastre (de ex. copii pe care nu le puteți șterge în aplicație sau o greșeală), contactați-ne:",
  step2Steps: [
    `Trimiteți e-mail la ${mail} de la adresa legată de cont (sau descrieți cum vă putem verifica).`,
    "Subiect: <strong>Cerere de ștergere date (fără închidere cont)</strong>.",
    "Enumerați ce să ștergem (de ex. „toate călătoriile înainte de 2025”, „călătoria numită X”, „imagini de bonuri din data …”).",
  ],
  step2Note:
    "Vă putem cere să confirmați identitatea înainte de a modifica sau șterge date legate de cont.",
  vsTitle: "Ce ștergem vs păstrăm",
  vsBullets: [
    {
      label: "Șters la cerere / în aplicație:",
      text: "Călătorii, bonuri, poziții, etichete ale participanților și conținut similar creat de utilizator pe care îl eliminați sau pe care îl eliminăm după o cerere e-mail verificată, cu respectarea copiilor de rezervă și reținerilor legale de mai jos.",
    },
    {
      label: "Poate fi păstrat temporar:",
      text: "Copii de rezervă critografiate sau replici până expiră în ciclurile normale de backup (de obicei pe termen scurt).",
    },
    {
      label: "Poate fi păstrat mai mult dacă legea cere:",
      text: "Înregistrări minime pentru taxe, prevenirea fraudei sau proces juridic.",
    },
    {
      label: "Copiile altor utilizatori:",
      text: "Dacă ați partajat un bon, alți participanți pot avea în continuare copia lor; nu putem șterge date pe dispozitivul altcuiva.",
    },
    {
      label: "Abonamente:",
      text: "Istoricul achizițiilor cu Apple / Google urmează politicile magazinului; ștergerea datelor aplicației nu șterge fișierele din magazin.",
    },
  ],
  timingTitle: "Termene",
  timingBody:
    "Ne propunem să finalizăm cererile de ștergere <strong>parțială</strong> verificate în <strong>30 de zile</strong>, cu excepția cazului în care legea sau siguranța impun altfel.",
  accountInsteadLead: "Pentru a șterge întregul cont, consultați",
  accountInsteadLinkText: "Ștergeți contul",
  accountInsteadTail: ".",
  privacyLead: "Confidențialitate generală:",
  privacyLinkText: "Politica de confidențialitate",
  privacyTail: ".",
};
