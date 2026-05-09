import type { DeleteAccountPage } from "../../types";

const mail = '<a class="font-medium text-brand-600 underline hover:text-brand-700" href="mailto:support@cheqsplitapp.com">support@cheqsplitapp.com</a>';

export const deleteAccountRo: DeleteAccountPage = {
  metaTitle: "Ștergeți contul - CheqSplit",
  metaDescription:
    "Cum să solicitați ștergerea contului CheqSplit și a datelor personale asociate.",
  h1: "Ștergeți contul",
  lastUpdatedPrefix: "Ultima actualizare:",
  lastUpdatedDate: "16 aprilie 2026",
  intro:
    `Această pagină explică cum să solicitați ștergerea contului CheqSplit și a datelor personale asociate procesate de <strong>CheqSplit</strong> (aplicația listată pe Google Play la această înregistrare de dezvoltator).`,
  howTitle: "Cum să solicitați ștergerea contului",
  howSteps: [
    `Trimiteți un e-mail la ${mail} de la adresa legată de contul CheqSplit (aceeași pe care o folosiți pentru Firebase / autentificare Google, dacă este cazul).`,
    "Folosiți subiectul: <strong>Cerere de ștergere cont</strong>.",
    "În mesaj, precizați clar că doriți ștergerea contului CheqSplit și a datelor asociate. Dacă v-ați conectat cu Google, menționați adresa contului Google pentru a putea verifica identitatea.",
  ],
  howNote:
    "Putem răspunde pentru a confirma identitatea înainte de a procesa cererea. Dacă nu putem verifica cererea, putem solicita informații suplimentare.",
  whatDeleteTitle: "Ce ștergem",
  whatDeleteIntro: "După procesarea unei cereri verificate, ne propunem să ștergem sau să anonimizăm:",
  whatDeleteList: [
    "Datele profilului de autentificare păstrate în backend-ul nostru (de ex. înregistrarea utilizatorului Firebase Authentication asociată contului dvs.).",
    "Datele aplicației stocate sub identificatorul utilizatorului în bazele noastre de date (de ex. călătorii, bonuri și conținut conex legat de cont), cu respectarea constrângerilor tehnice și legale de mai jos.",
  ],
  retainTitle: "Ce poate fi păstrat (și de ce)",
  retainBullets: [
    {
      label: "Date agregate sau de-identificate",
      text: "care nu vă pot fi reatașate în mod rezonabil.",
    },
    {
      label: "Înregistrări pe care trebuie să le păstrăm",
      text: "pentru o perioadă limitată acolo unde legea o cere (de ex. obligații fiscale, contabile sau de prevenire a fraudei).",
    },
    {
      label: "Date păstrate doar pe dispozitivul dvs.",
      text: "până dezinstalați aplicația sau ștergeți datele aplicației; nu putem șterge de la distanță telefonul altui utilizator. Alți participanți pot păstra copii ale bonurilor partajate deja primite.",
    },
    {
      label: "Înregistrări despre abonamente și achiziții",
      text: "procesate de Apple sau Google și furnizorii noștri de plată/abonamente pot fi păstrate conform politicilor și cerințelor legale ale acestora; ștergerea contului CheqSplit nu șterge fișierele din sistemele de facturare App Store / Play.",
    },
  ],
  timingTitle: "Termene",
  timingBody:
    "Vom procesa cererile de ștergere verificate într-o perioadă rezonabilă, de obicei în <strong>30 de zile</strong>, cu excepția cazului în care o perioadă mai lungă este cerută de lege sau circumstanțe excepționale (de ex. dispută sau investigare abuz).",
  privacySeeAlso: "Pentru practici generale de confidențialitate, consultați",
  privacyLinkText: "Politica de confidențialitate",
  relatedNavLabel: "Legat:",
  relatedDeleteData: "Ștergeți datele (fără a șterge contul)",
  relatedTerms: "Termeni de utilizare",
};
