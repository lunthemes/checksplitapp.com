import type { DeleteDataPage } from "../../types";

const mail = '<a class="font-medium text-brand-600 underline hover:text-brand-700" href="mailto:lungusterus@gmail.com">lungusterus@gmail.com</a>';

export const deleteDataFr: DeleteDataPage = {
  metaTitle: "Supprimer vos données (sans supprimer le compte) — CheqSplit",
  metaDescription:
    "Supprimer les données de l’application CheqSplit sans fermer votre compte. Informations Google Play « supprimer les données ».",
  h1: "Supprimer vos données (sans supprimer le compte)",
  lastUpdatedPrefix: "Dernière mise à jour :",
  lastUpdatedDate: "16 avril 2026",
  intro:
    "<strong>CheqSplit</strong> (cette application sur Google Play) vous permet de supprimer une partie ou la totalité des données de l’application <strong>sans</strong> fermer votre compte. Cette page est le lien exigé par Google Play pour les demandes de « suppression des données ».",
  step1Title: "Étape 1 — Dans l’application (le plus rapide)",
  step1Intro: "Vous pouvez supprimer le contenu vous-même :",
  step1Bullets: [
    {
      label: "Voyages, factures et brouillons",
      text: "Supprimez ou archivez les éléments dans l’application selon ce que permet chaque écran (p. ex. supprimer un voyage, effacer une facture, abandonner un brouillon).",
    },
    {
      label: "Données uniquement locales",
      text: "Vider le stockage de l’application ou désinstaller supprime les données stockées uniquement sur votre appareil.",
    },
  ],
  step1Note:
    "Les modifications que vous faites dans l’application se synchronisent avec nos serveurs lorsque votre compte utilise les fonctionnalités cloud ; supprimer du contenu dans l’application retire ce contenu de votre espace actif lorsque c’est techniquement possible.",
  step2Title: "Étape 2 — Nous écrire pour un nettoyage côté serveur",
  step2Intro:
    "Si vous devez supprimer des données spécifiques de nos systèmes (p. ex. des copies que vous ne pouvez pas supprimer dans l’application, ou une erreur), contactez-nous :",
  step2Steps: [
    `E-mail à ${mail} depuis l’adresse liée à votre compte (ou décrivez comment nous pouvons vous vérifier).`,
    "Objet : <strong>Demande de suppression de données (sans fermeture de compte)</strong>.",
    "Listez ce qu’il faut supprimer (p. ex. « tous les voyages avant 2025 », « voyage nommé X », « images de reçus à partir de la date … »).",
  ],
  step2Note:
    "Nous pouvons vous demander de confirmer votre identité avant de modifier ou supprimer des données liées à votre compte.",
  vsTitle: "Ce que nous supprimons vs conservons",
  vsBullets: [
    {
      label: "Supprimé sur demande / dans l’application :",
      text: "Voyages, factures, lignes, libellés de participants et contenus similaires créés par l’utilisateur que vous supprimez ou que nous supprimons après une demande par e-mail vérifiée, sous réserve des sauvegardes et obligations légales ci-dessous.",
    },
    {
      label: "Peut être conservé temporairement :",
      text: "Sauvegardes ou réplicas chiffrés jusqu’à leur expiration dans les cycles de sauvegarde habituels (généralement à court terme).",
    },
    {
      label: "Peut être conservé plus longtemps si la loi l’exige :",
      text: "Archives minimales pour les impôts, la prévention de la fraude ou une procédure judiciaire.",
    },
    {
      label: "Copies d’autres utilisateurs :",
      text: "Si vous avez partagé une facture, d’autres participants peuvent encore avoir leur copie ; nous ne pouvons pas supprimer des données sur l’appareil d’une autre personne.",
    },
    {
      label: "Abonnements :",
      text: "L’historique d’achat avec Apple / Google suit les politiques du store ; supprimer les données de l’application n’efface pas les reçus du store.",
    },
  ],
  timingTitle: "Délais",
  timingBody:
    "Nous visons à traiter les demandes de suppression <strong>partielle</strong> vérifiées sous <strong>30 jours</strong>, sauf si la loi ou la sécurité imposent autrement.",
  accountInsteadLead: "Pour supprimer l’intégralité de votre compte à la place, voir",
  accountInsteadLinkText: "Supprimer votre compte",
  accountInsteadTail: ".",
  privacyLead: "Confidentialité générale :",
  privacyLinkText: "Politique de confidentialité",
  privacyTail: ".",
};
