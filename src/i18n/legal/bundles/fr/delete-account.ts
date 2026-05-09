import type { DeleteAccountPage } from "../../types";

const mail = '<a class="font-medium text-brand-600 underline hover:text-brand-700" href="mailto:support@cheqsplitapp.com">support@cheqsplitapp.com</a>';

export const deleteAccountFr: DeleteAccountPage = {
  metaTitle: "Supprimer votre compte — CheqSplit",
  metaDescription:
    "Comment demander la suppression de votre compte CheqSplit et des données personnelles associées.",
  h1: "Supprimer votre compte",
  lastUpdatedPrefix: "Dernière mise à jour :",
  lastUpdatedDate: "16 avril 2026",
  intro:
    `Cette page explique comment demander la suppression de votre compte CheqSplit et des données personnelles associées traitées par <strong>CheqSplit</strong> (l’application répertoriée sur Google Play sous cette fiche développeur).`,
  howTitle: "Comment demander la suppression du compte",
  howSteps: [
    `Envoyez un e-mail à ${mail} depuis l’adresse e-mail liée à votre compte CheqSplit (la même que pour Firebase / connexion Google, le cas échéant).`,
    "Utilisez l’objet : <strong>Demande de suppression de compte</strong>.",
    "Indiquez clairement dans le message que vous souhaitez la suppression de votre compte CheqSplit et des données associées. Si vous vous êtes connecté avec Google, mentionnez l’e-mail du compte Google pour que nous puissions faire correspondre votre identité.",
  ],
  howNote:
    "Nous pouvons répondre pour confirmer votre identité avant de traiter la demande. Si nous ne pouvons pas vérifier la demande, nous pouvons demander des informations supplémentaires.",
  whatDeleteTitle: "Ce que nous supprimons",
  whatDeleteIntro: "Après traitement d’une demande vérifiée, nous visons à supprimer ou anonymiser :",
  whatDeleteList: [
    "Les données de profil d’authentification conservées dans notre backend (p. ex. l’enregistrement utilisateur Firebase Authentication associé à votre compte).",
    "Les données de l’application stockées sous votre identifiant utilisateur dans nos bases (p. ex. voyages, factures et contenus associés à votre compte), sous réserve des contraintes techniques et juridiques ci-dessous.",
  ],
  retainTitle: "Ce qui peut être conservé (et pourquoi)",
  retainBullets: [
    {
      label: "Données agrégées ou pseudonymisées",
      text: "qui ne peuvent raisonnablement pas être reliées à vous.",
    },
    {
      label: "Archives que nous devons conserver",
      text: "pour une durée limitée lorsque la loi l’exige (par exemple obligations fiscales, comptables ou de lutte contre la fraude).",
    },
    {
      label: "Données uniquement sur votre appareil",
      text: "jusqu’à ce que vous désinstalliez l’application ou effaciez les données de l’application ; nous ne pouvons pas effacer à distance le téléphone d’un autre utilisateur. Les autres participants peuvent conserver des copies de factures partagées qu’ils ont déjà reçues.",
    },
    {
      label: "Enregistrements d’abonnement et d’achat",
      text: "traités par Apple ou Google et nos prestataires de paiement/abonnement peuvent être conservés conformément à leurs politiques et obligations légales ; la suppression de votre compte CheqSplit ne supprime pas les reçus dans les systèmes de facturation App Store / Play.",
    },
  ],
  timingTitle: "Délais",
  timingBody:
    "Nous traiterons les demandes de suppression vérifiées dans un délai raisonnable, généralement sous <strong>30 jours</strong>, sauf si la loi ou des circonstances exceptionnelles (p. ex. litige ou enquête pour abus) imposent un délai plus long.",
  privacySeeAlso: "Pour les pratiques générales en matière de confidentialité, consultez notre",
  privacyLinkText: "politique de confidentialité",
  relatedNavLabel: "Liens associés :",
  relatedDeleteData: "Supprimer vos données (sans supprimer le compte)",
  relatedTerms: "Conditions d’utilisation",
};
