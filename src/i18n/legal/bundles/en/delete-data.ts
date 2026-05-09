import type { DeleteDataPage } from "../../types";

const mail = '<a class="font-medium text-brand-600 underline hover:text-brand-700" href="mailto:support@cheqsplitapp.com">support@cheqsplitapp.com</a>';

export const deleteDataEn: DeleteDataPage = {
  metaTitle: "Delete your data (without deleting account) - CheqSplit",
  metaDescription:
    "Remove CheqSplit app data without closing your account. Google Play “delete data” information.",
  h1: "Delete your data (without deleting account)",
  lastUpdatedPrefix: "Last updated:",
  lastUpdatedDate: "April 16, 2026",
  intro:
    "<strong>CheqSplit</strong> (this app on Google Play) lets you remove some or all of your app data <strong>without</strong> closing your account. This page is the link required by Google Play for “delete data” requests.",
  step1Title: "Step 1 — In the app (fastest)",
  step1Intro: "You can delete content yourself:",
  step1Bullets: [
    {
      label: "Trips, bills, and drafts",
      text: "Remove or archive items from the app as supported by each screen (e.g. delete a trip, clear a bill, discard a draft).",
    },
    {
      label: "Local-only data",
      text: "Clearing app storage or uninstalling removes data stored only on your device.",
    },
  ],
  step1Note:
    "Changes you make in the app sync to our servers where your account uses cloud features; removing content in-app removes that content from your active workspace where technically possible.",
  step2Title: "Step 2 — Email us for server-side cleanup",
  step2Intro:
    "If you need specific data removed from our systems (e.g. copies you cannot delete in the app, or a mistake), contact us:",
  step2Steps: [
    `Email ${mail} from the address linked to your account (or describe how we can verify you).`,
    "Subject: <strong>Data deletion request (no account closure)</strong>.",
    "List what to delete (e.g. “all trips before 2025”, “trip named X”, “receipt images from date …”).",
  ],
  step2Note:
    "We may ask you to confirm identity before changing or deleting data tied to your account.",
  vsTitle: "What we delete vs keep",
  vsBullets: [
    {
      label: "Deleted on request / in-app:",
      text: "User-created trips, bills, line items, participant labels, and similar app content you remove or that we remove after a verified email request, subject to backups and legal holds below.",
    },
    {
      label: "May be kept temporarily:",
      text: "Encrypted backups or replicas until they expire in normal backup cycles (typically short-term).",
    },
    {
      label: "May be kept longer if required by law:",
      text: "Minimal records for tax, fraud prevention, or legal process.",
    },
    {
      label: "Other users’ copies:",
      text: "If you shared a bill, other participants may still have their copy; we cannot delete data on someone else’s device.",
    },
    {
      label: "Subscriptions:",
      text: "Purchase history with Apple / Google follows store policies; deleting app data does not erase store receipts.",
    },
  ],
  timingTitle: "Timing",
  timingBody:
    "We aim to complete verified <strong>partial</strong> deletion requests within <strong>30 days</strong>, unless law or safety requires otherwise.",
  accountInsteadLead: "To delete your entire account instead, see",
  accountInsteadLinkText: "Delete your account",
  accountInsteadTail: ".",
  privacyLead: "General privacy:",
  privacyLinkText: "Privacy Policy",
  privacyTail: ".",
};
