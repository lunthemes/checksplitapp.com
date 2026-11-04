/**
 * Assets under `public/screens/group-expense-tracker/`.
 * Demo group: Weekend in Rome (Jordan, Maria, Sam, Alex, John).
 * Frame_* screenshots keep transparency; encoded as WebP without cropping.
 */
const base = "/screens/group-expense-tracker";

export const getFeatureIcons = {
  timeline: "/app-icons/track-expenses.svg",
  invite: "/app-icons/split-bill-app/qr-invite.svg",
  addExpense: "/app-icons/track-expenses.svg",
  participants: "/app-icons/split-item.svg",
  history: "/app-icons/split-bill-app/review.svg",
  balances: "/app-icons/who-owes-whom.svg",
  subset: "/app-icons/split-item.svg",
  receipt: "/app-icons/split-bill-app/scan-bill.svg",
  report: "/app-icons/report.svg",
} as const;

export const getAssets = {
  heroPrimary: `${base}/Frame_11.webp?v=20261029-gap3`,
  heroSecondary: `${base}/Frame_3.webp?v=20261029-gap3`,
  createInvite: `${base}/Frame_10.webp?v=20261029-gap3`,
  addExpense: `${base}/Frame_4.webp?v=20261029-gap3`,
  selectedParticipants: `${base}/Frame_2.webp?v=20261029-gap3`,
  history: `${base}/Frame_11.webp?v=20261029-gap3`,
  balances: `${base}/Frame_8.webp?v=20261029-gap3`,
  /** PDF page previews (export uses native share sheet — not in-app UI). */
  report: `${base}/group-expense-pdf-report.webp`,
  reportPage2: `${base}/group-expense-pdf-report-p2.webp`,
  receiptBridge: `${base}/Frame_6.webp?v=20261029-gap3`,
  heroBg: "/backgrounds/split-bill-app.webp",
} as const;
