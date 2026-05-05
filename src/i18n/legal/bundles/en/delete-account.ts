import type { DeleteAccountPage } from "../../types";

const mail = '<a class="font-medium text-brand-600 underline hover:text-brand-700" href="mailto:lungusterus@gmail.com">lungusterus@gmail.com</a>';

export const deleteAccountEn: DeleteAccountPage = {
  metaTitle: "Delete your account - CheqSplit",
  metaDescription:
    "How to request deletion of your CheqSplit account and associated personal data.",
  h1: "Delete your account",
  lastUpdatedPrefix: "Last updated:",
  lastUpdatedDate: "April 16, 2026",
  intro:
    `This page explains how to request deletion of your CheqSplit account and associated personal data processed by <strong>CheqSplit</strong> (the app listed on Google Play under this developer listing).`,
  howTitle: "How to request account deletion",
  howSteps: [
    `Send an email to ${mail} from the email address linked to your CheqSplit account (the same email you use for Firebase / Google sign-in, if applicable).`,
    "Use the subject line: <strong>Account deletion request</strong>.",
    "In the message, state clearly that you want your CheqSplit account and associated data deleted. If you signed in with Google, mention the Google account email so we can match your identity.",
  ],
  howNote:
    "We may reply to confirm your identity before processing the request. If we cannot verify the request, we may ask for additional information.",
  whatDeleteTitle: "What we delete",
  whatDeleteIntro: "After we process a verified request, we aim to delete or anonymize:",
  whatDeleteList: [
    "Your authentication profile data held in our backend (e.g. Firebase Authentication user record associated with your account).",
    "Your app data stored under your user identifier in our databases (e.g. trips, bills, and related content tied to your account), subject to technical and legal constraints below.",
  ],
  retainTitle: "What may be retained (and why)",
  retainBullets: [
    {
      label: "Aggregated or de-identified data",
      text: "that cannot reasonably be linked back to you.",
    },
    {
      label: "Records we must keep",
      text: "for a limited time where required by law (for example tax, accounting, or fraud-prevention obligations).",
    },
    {
      label: "Data held only on your device",
      text: "until you uninstall the app or clear app data; we cannot remotely wipe another user’s phone. Other participants may retain copies of shared bills they already received.",
    },
    {
      label: "Subscription and purchase records",
      text: "processed by Apple or Google and our payment/subscription providers may be retained according to their policies and legal requirements; deleting your CheqSplit account does not delete receipts in App Store / Play billing systems.",
    },
  ],
  timingTitle: "Timing",
  timingBody:
    "We will process verified deletion requests within a reasonable period, typically within <strong>30 days</strong>, unless a longer period is required by law or exceptional circumstances (e.g. dispute or abuse investigation).",
  privacySeeAlso: "For general privacy practices, see our",
  privacyLinkText: "Privacy Policy",
  relatedNavLabel: "Related:",
  relatedDeleteData: "Delete your data (without deleting account)",
  relatedTerms: "Terms of Service",
};
