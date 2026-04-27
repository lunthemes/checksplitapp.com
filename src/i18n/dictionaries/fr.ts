import type { Dictionary } from "../types";

export const fr: Dictionary = {
  meta: {
    title: "CheqSplit : partager les dépenses, scanner des tickets et suivre les factures de groupe",
    description:
      "CheqSplit vous aide à partager les dépenses, scanner des tickets, suivre les factures partagées et savoir qui doit quoi à qui après un restaurant, un voyage, des courses ou une activité de groupe.",
    ogDescription:
      "Partagez les dépenses équitablement : scannez des tickets, suivez les factures partagées et voyez qui doit quoi à qui. Parfait pour les restaurants, voyages, colocataires et activités de groupe.",
    twitterDescription:
      "Le moyen simple de partager les dépenses et les factures de groupe sans calculs pénibles ni tableurs.",
    softwareDescription:
      "CheqSplit vous aide à partager les dépenses, scanner des tickets, suivre les factures partagées et savoir qui doit quoi à qui après un restaurant, un voyage ou une activité de groupe.",
  },
  nav: {
    features: "Fonctionnalités",
    how: "Fonctionnement",
    useCases: "Cas d'usage",
    faq: "FAQ",
  },
  header: { download: "Télécharger l'app" },
  hero: {
    title: "Partagez les dépenses, scannez des tickets et suivez les factures de groupe",
    body: "CheqSplit vous aide à partager les dépenses, scanner des tickets, suivre les factures partagées et savoir qui doit quoi à qui après un restaurant, un voyage, des courses ou une activité de groupe.",
    alts: [
      "Écran de suivi des dépenses de voyage de groupe CheqSplit",
      "Écran de l'app mobile CheqSplit montrant les dépenses partagées",
      "Répartition de facture et ligne de reçu en direct CheqSplit",
    ],
  },
  features: {
    title: "Pourquoi choisir CheqSplit ?",
    items: [
      {
        title: "Scannage instantané des factures",
        desc: "Utilisez le scan de ticket pour capturer articles, prix, taxes et totaux en quelques secondes.",
      },
      {
        title: "Répartir par article",
        desc: "Attribuez chaque ligne du reçu aux bonnes personnes plutôt que d'estimer un partage égal.",
      },
      {
        title: "Tout centraliser",
        desc: "Gardez factures de restaurant, courses, frais de voyage et dépenses partagées au même endroit.",
      },
      {
        title: "Qui doit quoi à qui",
        desc: "CheqSplit calcule les soldes automatiquement pour que chacun sache quoi régler.",
      },
    ],
  },
  how: {
    title: "Comment CheqSplit fonctionne",
    subtitle: "Cinq étapes claires, du voyage au rapport net que chacun peut lire en confiance.",
    stepPill: (n) => `Étape ${n}`,
    steps: [
      {
        label: "Créez un voyage en quelques secondes",
        body: "Donnez un nom, invitez vos amis et c'est parti—sans labyrinthe de configuration.",
        imageAlt: "Écran de suivi des dépenses de voyage de groupe CheqSplit",
        bullets: [
          "Création de voyage rapide",
          "Invitations en un geste",
          "Repas ou vacances",
        ],
      },
      {
        label: "Partagez les dépenses par article",
        body: "Détail fait main : chaque ligne va aux bonnes personnes, le calcul est limpide.",
        imageAlt: "Écran de scan de reçu CheqSplit",
        bullets: [
          "Répartitions par ligne",
          "Plats & parts partagées",
          "Pourboires et frais pris en charge",
        ],
      },
      {
        label: "Suivez chaque dépense partagée",
        body: "Catégorisez les sorties d'argent et gardez une vision complète en un seul fil.",
        imageAlt: "Écran mobile CheqSplit : dépenses partagées",
        bullets: [
          "Catégories utiles",
          "Reçus et notes",
          "Chronologie du groupe",
        ],
      },
      {
        label: "Réglez les soldes tout de suite",
        body: "L'équilibrage se met à jour au fur et à mesure des règlements—plus de relance constante.",
        imageAlt: "Écran de synthèse des soldes CheqSplit",
        bullets: [
          "Soldes nets",
          "Rappels (optionnel)",
          "Bilans exportables",
        ],
      },
      {
        label: "Partagez des comptes-rendus propres",
        body: "Graphiques, totaux et « qui a payé quoi » : prêts à envoyer ou à relire plus tard.",
        imageAlt: "Rapport de voyage CheqSplit",
        bullets: [
          "Synthèses visuelles",
          "Lien ou image",
          "Confidentialité d'abord",
        ],
      },
    ],
  },
  useCases: {
    title: "Toute dépense partagée",
    intro:
      "Dès que vous devez partager un coût avec d'autres—au restaurant, en voyage, aux courses—CheqSplit s'adapte à la vie : addition, groupes, courses entre colocataires, achats en famille, shopping entre amis. Plutôt que de tout calculer à la main, scannez le ticket, affectez les articles, ajoutez remises et frais, obtenez un règlement clair.",
    items: [
      {
        title: "Restaurants",
        desc: "Détaillez l'addition, partagez par plat et règlez équitablement.",
      },
      { title: "Voyages de groupe", desc: "Vols, hébergement et repas en un seul endroit." },
      { title: "Famille", desc: "Courses, événements et charges du foyer." },
      {
        title: "Achats en commun",
        desc: "Cadeaux, gros achats et projets entre amis.",
      },
    ],
  },
  cta: {
    title: "Prêt à mieux partager ?",
    body: "Rejoignez des milliers de groupes qui partagent les dépenses sans se prendre la tête.",
    sectionAria: "Télécharger CheqSplit",
    imgAlt:
      "Accueil de l'app mobile CheqSplit pour partager l'addition",
    badgeAlts: {
      appStore: "Télécharger sur l'App Store",
      play: "Télécharger sur Google Play",
    },
    playSoon: "Bientôt",
    playDisabledHint: "Pas encore disponible",
    groupAria: "Télécharger l'application",
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        q: "Qu'est-ce que CheqSplit ?",
        a: "CheqSplit est une app de partage de facture et de suivi des dépenses de groupe : scan de reçu, partage par article, coûts partagés et solde de qui doit quoi à qui.",
      },
      {
        q: "Puis-je partager un reçu article par article ?",
        a: "Oui. Vous affectez chaque ligne aux bonnes personnes, chacun ne paie que ce qu'il a consommé.",
      },
      {
        q: "CheqSplit est-il adapté aux voyages de groupe ?",
        a: "Oui. Créez un voyage, ajoutez des dépenses, invitez les participants, joignez des reçus, puis générez un compte final avec les soldes.",
      },
      {
        q: "Puis-je m'en servir pour un restaurant ?",
        a: "Oui. Restaurants, cafés, bar, supermarché, vacances—tout moment où plusieurs personnes partagent les coûts.",
      },
      {
        q: "CheqSplit fonctionne-t-il hors ligne ?",
        a: "Vous pouvez gérer une partie des données en local, mais le partage de voyage et la synchro avec d'autres participants nécessitent Internet.",
      },
      {
        q: "Comment inviter des personnes ?",
        a: "Créez un voyage dans CheqSplit, enregistrez des dépenses, puis partagez le lien du voyage pour qu'on rejoigne et voie le solde.",
      },
    ],
  },
  footer: {
    tagline: "Le moyen le plus simple de partager des dépenses de groupe : équitable, rapide, clair.",
    product: "Produit",
    company: "Entreprise",
    legal: "Mentions légales",
    about: "À propos",
    contact: "Contact",
    privacy: "Confidentialité",
    terms: "Conditions",
    rights: "Tous droits réservés.",
  },
  a11y: {
    keyFeatures: "Fonctionnalités clés",
    primaryNav: "Principal",
    howSection: "Fonctionnement",
    logoHome: "Accueil CheqSplit",
  },
};
