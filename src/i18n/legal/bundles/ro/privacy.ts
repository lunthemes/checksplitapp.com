import type { PrivacyPage } from "../../types";

const link = (href: string, text: string) =>
  `<a class="font-medium text-brand-600 underline hover:text-brand-700" href="${href}">${text}</a>`;

export const privacyRo: PrivacyPage = {
  metaTitle: "Politica de confidențialitate - CheqSplit",
  metaDescription:
    "Cum colectează CheqSplit, folosește și protejează informațiile dvs. când utilizați aplicația noastră mobilă.",
  h1: "Politica de confidențialitate",
  lastUpdatedPrefix: "Ultima actualizare:",
  lastUpdatedDate: "25 martie 2026",
  intro:
    'CheqSplit („noi”, „al nostru” sau „ne”) se angajează să vă protejeze confidențialitatea. Această Politică de confidențialitate explică cum colectăm, folosim și protejăm informațiile dvs. când utilizați aplicația noastră mobilă.',
  s1Title: "1 — Informațiile pe care le colectăm",
  s1Intro: "CheqSplit colectează date minime necesare pentru funcționalitatea de împărțire a bonurilor:",
  s1Bullets: [
    {
      label: "Autentificare",
      text: "Puteți folosi CheqSplit cu o sesiune anonimă sau vă puteți conecta sau asocia cu e-mail și parolă (stocate și verificate de Firebase Authentication) sau cu Google. Dacă folosiți e-mail/parolă sau Google, primim identificatorii pe care Firebase îi asociază contului dvs. (de obicei e-mailul și, pentru Google, numele) pentru a vă putea conecta pe alte dispozitive și recupera accesul. Parolele sunt gestionate de Firebase; nu stocăm parola dvs. în clar.",
    },
    {
      label: "Date despre bonuri și călătorii",
      text: "Informațiile pe care le introduceți voluntar, inclusiv denumiri ale articolelor, cantități, prețuri, nume ale participanților, nume ale călătoriilor și date conexe despre cheltuieli partajate.",
    },
    {
      label: "Imagini de bonuri și scanare",
      text: "Fotografiile pe care le faceți sau le importați pot fi analizate pe dispozitiv folosind recunoașterea textului pe dispozitiv (OCR). Când scanarea inteligentă a bonurilor este activată în aplicație, porțiuni din imaginea bonului și/sau textul extras pot fi trimise serviciului de inteligență artificială generativă Google (Gemini) pentru a ajuta la detectarea pozițiilor și totalurilor. Ar trebui să revizuiți și să corectați mereu articolele înainte de a partaja un bon.",
    },
    {
      label: "Abonamente",
      text: "Dacă achiziționați un plan premium, Apple procesează plata. Folosim RevenueCat pentru a valida drepturile; RevenueCat primește un identificator de utilizator al aplicației și date legate de achiziție, conform politicii lor.",
    },
    {
      label: "Informații despre dispozitiv",
      text: "Date de bază despre dispozitiv și diagnostice pentru funcționarea aplicației și raportarea crash-urilor.",
    },
  ],
  s2Title: "2 — Cum folosim informațiile dvs.",
  s2Intro: "Folosim informațiile colectate pentru a:",
  s2List: [
    "Oferi funcționalitate de împărțire și partajare a bonurilor",
    "Permite colaborare în timp real cu alți participanți",
    "Stoca istoricul bonurilor pentru confortul dvs.",
    "Îmbunătăți performanța aplicației și remedia erori",
  ],
  s3Title: "3 — Stocarea și securitatea datelor",
  s3Intro: "Datele dvs. sunt stocate în siguranță folosind serviciile Google Firebase:",
  s3List: [
    "Datele bonurilor sunt stocate în Firebase Realtime Database cu reguli de securitate care asigură că doar participanții autorizați pot accesa bonurile specifice.",
    "Datele sunt criptate în tranzit folosind HTTPS.",
    "Nu stocăm informații de plată și nu procesăm plăți.",
  ],
  s4Title: "4 — Partajarea datelor",
  s4Intro:
    "Nu vindem, nu schimbăm și nu închiriem informațiile dvs. personale către terți. Datele dvs. pot fi partajate doar:",
  s4List: [
    "Cu alți participanți pe care îi invitați să împartă un bon (pot vedea articolele bonului și numele afișat ales de dvs.)",
    "Cu furnizori de servicii (Firebase/Google) pentru găzduire și infrastructură",
    "Dacă le cere legea sau pentru a ne proteja drepturile",
  ],
  s5Title: "5 — Păstrarea datelor",
  s5Body:
    "Datele bonurilor sunt păstrate atât timp cât le păstrați în aplicație. Puteți șterge bonurile oricând. Sesiunile finalizate sunt stocate local pe dispozitivul dvs. și pot fi șterse din setările aplicației.",
  s6Title: "6 — Drepturile dvs.",
  s6Intro: "Aveți dreptul să:",
  s6List: [
    "Accesați datele stocate în aplicație",
    "Ștergeți bonurile și istoricul sesiunilor",
    "Solicitați informații despre datele pe care le deținem",
  ],
  s7Title: "7 — Confidențialitatea copiilor",
  s7Body:
    "CheqSplit nu este destinat copiilor sub 13 ani. Nu colectăm în mod conștient informații personale de la copii.",
  s8Title: "8 — Servicii terțe",
  s8Intro: "Aplicația noastră folosește următoarele servicii terțe:",
  s8Bullets: [
    {
      label: "Google Firebase",
      text: `Autentificare, Realtime Database și infrastructură conexă. Link: ${link("https://firebase.google.com/support/privacy", "https://firebase.google.com/support/privacy")}`,
    },
    {
      label: "Google AI (Gemini)",
      text: `Procesare opțională în cloud pentru înțelegerea bonurilor când scanarea inteligentă este disponibilă. Link: ${link("https://ai.google.dev/gemini-api/terms", "https://ai.google.dev/gemini-api/terms")} și se aplică politicile de confidențialitate Google.`,
    },
    {
      label: "RevenueCat",
      text: `Starea abonamentului și gestionarea achizițiilor în aplicație. Link: ${link("https://www.revenuecat.com/privacy", "https://www.revenuecat.com/privacy")}`,
    },
    {
      label: "Apple",
      text: "Distribuirea aplicației și achizițiile în aplicație prin App Store.",
    },
    {
      label: "OCR pe dispozitiv",
      text: "Recunoașterea textului din imaginile bonurilor poate rula pe dispozitiv folosind API-urile pe dispozitiv ale Apple (și pe Android, OCR al dispozitivului/furnizorului acolo unde este cazul).",
    },
  ],
  s9Title: "9 — Modificări ale acestei politici",
  s9Body:
    'Putem actualiza această Politică de confidențialitate din când în când. Vă vom anunța despre modificări publicând noua Politică de confidențialitate în aplicație și actualizând data „Ultima actualizare”.',
  s10Title: "10 — Contact",
  s10Intro: "Dacă aveți întrebări despre această Politică de confidențialitate, contactați-ne:",
  emailLabel: "E-mail:",
  developerLabel: "Dezvoltator:",
  developerName: "Lunthemes",
  relatedNavLabel: "Vedeți și:",
  relatedTerms: "Termeni de utilizare",
  relatedDeleteAccount: "Ștergeți contul",
  relatedDeleteData: "Ștergeți datele",
};
