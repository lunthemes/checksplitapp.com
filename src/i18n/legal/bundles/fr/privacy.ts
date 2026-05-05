import type { PrivacyPage } from "../../types";

const link = (href: string, text: string) =>
  `<a class="font-medium text-brand-600 underline hover:text-brand-700" href="${href}">${text}</a>`;

export const privacyFr: PrivacyPage = {
  metaTitle: "Politique de confidentialité — CheqSplit",
  metaDescription:
    "Comment CheqSplit collecte, utilise et protège vos informations lorsque vous utilisez notre application mobile.",
  h1: "Politique de confidentialité",
  lastUpdatedPrefix: "Dernière mise à jour :",
  lastUpdatedDate: "25 mars 2026",
  intro:
    'CheqSplit (« nous », « notre » ou « nos ») s’engage à protéger votre vie privée. La présente politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre application mobile.',
  s1Title: "1 — Informations que nous collectons",
  s1Intro:
    "CheqSplit collecte un minimum de données nécessaires pour fournir les fonctionnalités de partage de factures :",
  s1Bullets: [
    {
      label: "Authentification",
      text: "Vous pouvez utiliser CheqSplit avec une session anonyme, ou lier ou vous connecter avec un e-mail et un mot de passe (stockés et vérifiés par Firebase Authentication), ou vous connecter avec Google. Si vous utilisez l’e-mail/le mot de passe ou Google, nous recevons les identifiants que Firebase associe à votre compte (généralement l’e-mail et, pour Google, votre nom) afin que vous puissiez vous connecter sur d’autres appareils et récupérer l’accès. Les mots de passe sont gérés par Firebase ; nous ne stockons pas votre mot de passe en clair.",
    },
    {
      label: "Données de factures et de voyages",
      text: "Informations que vous saisissez volontairement, notamment noms d’articles, quantités, prix, noms des participants, noms de voyages et données associées aux dépenses partagées.",
    },
    {
      label: "Images de reçus et numérisation",
      text: "Les photos que vous prenez ou importez peuvent être analysées sur votre appareil via une reconnaissance de texte locale (OCR). Lorsque la numérisation intelligente des reçus est activée dans l’application, des parties de l’image du reçu et/ou du texte extrait peuvent être envoyées au service d’IA générative de Google (Gemini) pour aider à détecter les lignes et les totaux. Vérifiez et corrigez toujours les articles avant de partager une facture.",
    },
    {
      label: "Abonnements",
      text: "Si vous achetez un forfait premium, Apple traite le paiement. Nous utilisons RevenueCat pour valider les droits ; RevenueCat reçoit un identifiant utilisateur de l’application et des données liées aux achats comme décrit dans sa politique.",
    },
    {
      label: "Informations sur l’appareil",
      text: "Données de base sur l’appareil et diagnostics pour le fonctionnement de l’application et les rapports de plantage.",
    },
  ],
  s2Title: "2 — Comment nous utilisons vos informations",
  s2Intro: "Nous utilisons les informations collectées pour :",
  s2List: [
    "Fournir les fonctionnalités de partage et de division des factures",
    "Permettre la collaboration en temps réel avec d’autres participants",
    "Conserver l’historique de vos factures pour votre commodité",
    "Améliorer les performances de l’application et corriger les bogues",
  ],
  s3Title: "3 — Stockage et sécurité des données",
  s3Intro: "Vos données sont stockées en toute sécurité à l’aide des services Google Firebase :",
  s3List: [
    "Les données de factures sont stockées dans Firebase Realtime Database avec des règles de sécurité garantissant que seuls les participants autorisés peuvent accéder à des factures précises.",
    "Les données sont chiffrées en transit via HTTPS.",
    "Nous ne stockons pas d’informations de paiement et ne traitons pas les paiements.",
  ],
  s4Title: "4 — Partage des données",
  s4Intro:
    "Nous ne vendons, n’échangeons ni ne louons vos informations personnelles à des tiers. Vos données ne peuvent être partagées que :",
  s4List: [
    "Avec d’autres participants que vous invitez à partager une facture (ils peuvent voir les lignes de facture et le nom d’affichage que vous avez choisi)",
    "Avec des prestataires (Firebase/Google) pour l’hébergement et l’infrastructure",
    "Si la loi l’exige ou pour protéger nos droits",
  ],
  s5Title: "5 — Conservation des données",
  s5Body:
    "Les données de factures sont conservées tant que vous les gardez dans l’application. Vous pouvez supprimer vos factures à tout moment. Les sessions terminées sont stockées localement sur votre appareil et peuvent être effacées via les paramètres de l’application.",
  s6Title: "6 — Vos droits",
  s6Intro: "Vous avez le droit de :",
  s6List: [
    "Accéder à vos données stockées dans l’application",
    "Supprimer vos factures et l’historique des sessions",
    "Demander des informations sur les données que nous détenons",
  ],
  s7Title: "7 — Confidentialité des enfants",
  s7Body:
    "CheqSplit ne s’adresse pas aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d’informations personnelles auprès d’enfants.",
  s8Title: "8 — Services tiers",
  s8Intro: "Notre application utilise les services tiers suivants :",
  s8Bullets: [
    {
      label: "Google Firebase",
      text: `Authentification, Realtime Database et infrastructure associée. Lien : ${link("https://firebase.google.com/support/privacy", "https://firebase.google.com/support/privacy")}`,
    },
    {
      label: "Google AI (Gemini)",
      text: `Traitement cloud facultatif pour la compréhension des reçus lorsque la numérisation intelligente est disponible. Lien : ${link("https://ai.google.dev/gemini-api/terms", "https://ai.google.dev/gemini-api/terms")} ; les politiques de confidentialité de Google s’appliquent également.`,
    },
    {
      label: "RevenueCat",
      text: `Statut d’abonnement et gestion des achats intégrés. Lien : ${link("https://www.revenuecat.com/privacy", "https://www.revenuecat.com/privacy")}`,
    },
    {
      label: "Apple",
      text: "Distribution de l’application et achats intégrés via l’App Store.",
    },
    {
      label: "OCR sur l’appareil",
      text: "La reconnaissance de texte à partir d’images de reçus peut s’exécuter sur votre appareil via les API locales d’Apple (et sur Android, l’OCR de l’appareil/du fabricant le cas échéant).",
    },
  ],
  s9Title: "9 — Modifications de cette politique",
  s9Body:
    'Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique dans l’application et en mettant à jour la date de « Dernière mise à jour ».',
  s10Title: "10 — Nous contacter",
  s10Intro: "Pour toute question concernant cette politique de confidentialité, contactez-nous :",
  emailLabel: "E-mail :",
  developerLabel: "Développeur :",
  developerName: "Lunthemes",
  relatedNavLabel: "Voir aussi :",
  relatedTerms: "Conditions d’utilisation",
  relatedDeleteAccount: "Supprimer votre compte",
  relatedDeleteData: "Supprimer vos données",
};
