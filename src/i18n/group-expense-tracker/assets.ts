/**
 * Assets under `public/screens/group-expense-tracker/`.
 * Demo trip: Weekend in Prague (Nina, Leo, Sam, Maya).
 * Frame_*.png are author-supplied — do not re-encode or crop.
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
  heroPrimary: `${base}/Frame_11.png`,
  heroSecondary: `${base}/Frame_3.png`,
  createInvite: `${base}/Frame_10.png`,
  addExpense: `${base}/Frame_4.png`,
  selectedParticipants: `${base}/Frame_2.png`,
  history: `${base}/Frame_11.png`,
  balances: `${base}/Frame_8.png`,
  /** PDF page previews (export uses native share sheet — not in-app UI). */
  report: `${base}/group-expense-pdf-report.webp`,
  reportPage2: `${base}/group-expense-pdf-report-p2.webp`,
  receiptBridge: `${base}/Frame_6.png`,
  heroBg: "/backgrounds/split-bill-app.png",
} as const;
