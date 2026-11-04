import type { SplitBillLocaleCopy } from "./types";
import { splitBillEn } from "./en";

export const splitBillFr: SplitBillLocaleCopy = {
  metaTitle: "Scannez l'addition et partagez-la selon ce que chacun a pris | CheqSplit",
  metaDescription: "Toute l'addition reste au même endroit. Une personne scanne le ticket avec CheqSplit, puis les autres rejoignent le partage via un lien ou un QR code et sélectionnent ce qu'ils ont consommé directement dans leur navigateur.",
  softwareDescription: "Toute l'addition reste au même endroit. Une personne scanne le ticket avec CheqSplit, puis les autres rejoignent le partage via un lien ou un QR code et sélectionnent ce qu'ils ont consommé directement dans leur navigateur.",
  h1: "Scannez l'addition et partagez-la selon ce que chacun a pris",
  heroSubLine1: "",
  heroSubLine2: "",
  heroParagraph: "",
  seoBlockH2: "Une seule addition, partagée dans l'app ou dans le navigateur",
  seoBlockP1: "Toute l'addition reste au même endroit. Une personne scanne le ticket avec CheqSplit, puis les autres rejoignent le partage via un lien ou un QR code et sélectionnent ce qu'ils ont consommé directement dans leur navigateur.",
  seoBlockP2: "Sélectionnez les plats et boissons consommés. Si une ligne contient plusieurs unités, ouvrez-la et choisissez les unités consommées. Pour un plat partagé, les personnes concernées sélectionnent l’article ou les unités partagées ; CheqSplit calcule les parts.",
  seoBlockP3: "",
  useCasesH2: "Un partage qui tient compte de ce que chacun a réellement commandé",
  useCases: [
    { title: "Commandes individuelles", text: "Attribuez à chacun uniquement les plats et boissons qu'il a commandés." },
    { title: "Articles partagés", text: "Une ligne peut contenir plusieurs unités, comme deux pizzas. Choisissez celles consommées ; les articles ou unités partagés sont répartis à parts égales entre les participants qui les ont sélectionnés. Utilisez le partage égal lorsqu’il est proposé et convient au groupe." },
    { title: "Frais et pourboire", text: "Ajoutez les frais de service, taxes et pourboires afin que le total réparti corresponde exactement à l'addition." },
  ],
  howSectionH2: "Comment partager une addition au restaurant avec CheqSplit",
  howSectionSub: "",
  stepsSectionH2: "Comment partager une addition au restaurant avec CheqSplit",
  steps: [
    { title: "Scannez le ticket", desc: "Prenez le ticket en photo : CheqSplit transforme les articles et les montants en une addition que vous pouvez vérifier avant de la partager." },
    { title: "Vérifiez l'addition", desc: "Comparez le total dans CheqSplit avec celui imprimé sur le ticket et corrigez toute erreur avant que chacun sélectionne sa commande." },
    { title: "Partagez l'addition", desc: "Corrigez le nom, la quantité ou le prix si le scan n'a pas parfaitement reconnu le ticket." },
  ],
  features: [
    { title: "Scannez le ticket du restaurant", desc: "Prenez le ticket en photo : CheqSplit transforme les articles et les montants en une addition que vous pouvez vérifier avant de la partager." },
    { title: "Vérifiez le total avant de commencer", desc: "Comparez le total dans CheqSplit avec celui imprimé sur le ticket et corrigez toute erreur avant que chacun sélectionne sa commande." },
    { title: "Vérifiez et modifiez chaque article", desc: "Corrigez le nom, la quantité ou le prix si le scan n'a pas parfaitement reconnu le ticket." },
    { title: "Invitez vos amis avec un QR code ou un lien", desc: "Partagez le QR code ou le lien de l'addition. Chacun peut l'ouvrir immédiatement." },
    { title: "Continuez dans le navigateur, sans installer l'app", desc: "Vos amis ouvrent simplement le lien dans leur navigateur. Ils n'ont pas besoin d'installer CheqSplit pour participer." },
    { title: "Partagez l'addition en ligne", desc: "Tout le monde travaille sur la même addition. Les sélections et modifications restent regroupées, sans avoir à recalculer séparément qui a pris quoi." },
    { title: "Chacun sélectionne ce qu'il a consommé", desc: "Sélectionnez les plats et boissons consommés. Si une ligne contient plusieurs unités, ouvrez-la et choisissez les unités consommées. Pour un plat partagé, les personnes concernées sélectionnent l’article ou les unités partagées ; CheqSplit calcule les parts." },
    {
      title: "Choisissez les portions individuelles",
      desc: "Une ligne peut contenir plusieurs unités, comme deux pizzas. Choisissez celles consommées ; les articles ou unités partagés sont répartis à parts égales entre les participants qui les ont sélectionnés. Utilisez le partage égal lorsqu’il est proposé et convient au groupe.",
    },
    { title: "Voyez qui doit combien à qui", desc: "Une fois les articles attribués, CheqSplit calcule les montants et indique clairement qui doit payer qui." },
    { title: "Enregistrez les paiements effectués", desc: "Après avoir payé un autre participant en dehors de CheqSplit, ouvrez Enregistrer un paiement. Confirmez le destinataire, saisissez le montant et une note facultative, puis enregistrez. Le paiement est enregistré de vous vers le destinataire choisi." },
    { title: "Vérifiez comment l'addition a été répartie", desc: "Le détail de chaque participant présente les articles inclus, les unités sélectionnées et les parts calculées pour vérifier la répartition selon la consommation." }
  ],
  ctaTitle: "Partagez l'addition même si vos amis n'ont pas l'app",
  ctaBody: "Scannez le ticket, partagez un lien ou un QR code et laissez chacun sélectionner ce qu'il a consommé.",
  groupBridgeBefore: "Pour réunir un ticket de restaurant et les frais d’hôtel, de taxi ou d’activités, ouvrez Tickets dans le groupe et appuyez sur Ajouter un ticket pour le scanner ou l’importer. Après vérification, répartissez par article ou à parts égales, puis poursuivez avec ",
  groupBridgeLabel: "le suivi des dépenses de groupe",
  groupBridgeAfter: ".",
  guideBridgeBefore: "Vous préférez d'abord une méthode pas à pas ? Lisez ",
  guideBridgeLabel: "comment partager équitablement une addition au restaurant",
  guideBridgeAfter: ".",
  faq: [
    {
      q: "CheqSplit peut-il scanner un ticket de restaurant détaillé ?",
      a: "Oui. Photographiez le ticket, puis vérifiez le total, les articles, les quantités et les prix détectés avant de commencer le partage.",
    },
    {
      q: "Tous les participants doivent-ils avoir l'application CheqSplit ?",
      a: "Non. L'organisateur crée et scanne l'addition dans l'application, mais les invités peuvent ouvrir le lien et choisir Continuer dans le navigateur.",
    },
    {
      q: "Puis-je partager une addition de restaurant dans le navigateur ?",
      a: "Un invité peut ouvrir l'addition partagée dans son navigateur, sélectionner les articles qu'il a consommés, consulter Résumé et suivre le solde obtenu. La création et le scan d'une nouvelle addition nécessitent l'application.",
    },
    {
      q: "Les participants peuvent-ils rejoindre le partage par QR code ou lien ?",
      a: "Oui. Partagez le QR code ou le lien d'invitation afin que chacun puisse ouvrir la même addition dans l'application ou dans le navigateur.",
    },
    {
      q: "Comment plusieurs personnes partagent-elles un même article ?",
      a: "Une ligne peut contenir plusieurs unités, comme deux pizzas. Choisissez celles consommées ; les articles ou unités partagés sont répartis à parts égales entre les participants qui les ont sélectionnés. Utilisez le partage égal lorsqu’il est proposé et convient au groupe.",
    },
    {
      q: "Que faire si le ticket a été mal scanné ?",
      a: "Vérifiez l'addition détectée avant de la partager. Corrigez un article ou un prix, ajoutez une ligne manquante et saisissez les taxes ou le pourboire dans Frais et Pourboire si nécessaire.",
    },
    {
      q: "À quoi sert Enregistrer un Paiement ?",
      a: "Cette fonction enregistre qu'un participant en a payé un autre en dehors de CheqSplit. Elle met à jour l'historique de l'addition partagée, mais ne transfère ni ne traite d'argent.",
    },
    {
      q: "Comment voir ce que chaque personne a consommé ?",
      a: "Ouvrez l'onglet Résumé et touchez la section d'un participant dans le graphique pour voir son total et les articles qui lui sont attribués.",
    },
    {
      q: "CheqSplit transfère-t-il de l'argent ?",
      a: "Non. CheqSplit calcule les soldes et enregistre les règlements saisis par les participants. Il n'envoie, ne reçoit et ne traite aucun paiement.",
    },
    {
      q: "Puis-je ajouter cette addition de restaurant à un voyage ?",
      a: "Pour inclure un ticket dans un groupe, commencez depuis ce groupe : ouvrez Tickets et appuyez sur Ajouter un ticket, puis scannez ou importez le ticket. Vérifiez les articles et le total, puis répartissez par article ou à parts égales. Le ticket est automatiquement associé au groupe pendant ce parcours.",
    },
  ],
  a11y: {
    hero: "Scannez l'addition et partagez-la selon ce que chacun a pris",
    nav: splitBillEn.a11y.nav,
    stepsRegion: "Comment partager une addition au restaurant avec CheqSplit",
    features: "Comment partager une addition au restaurant avec CheqSplit",
    faq: "Questions fréquentes",
  },
};
