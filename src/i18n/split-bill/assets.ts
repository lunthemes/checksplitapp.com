/** Shared media paths for all locales (same screenshots & icons). */
export const splitBillHeroScreens = [
  "/screens/split-bill-app/overview-hero.png",
  "/screens/split-bill-app/split-hero.png",
  "/screens/split-bill-app/split-bill-1.png",
] as const;

export const splitBillStepIcons = [
  "/app-icons/split-bill-app/scan-bill.svg",
  "/app-icons/split-bill-app/invite-split.svg",
  "/app-icons/split-bill-app/settle-up.svg",
] as const;

export const splitBillFeatureAssets = [
  {
    icon: "/app-icons/split-bill-app/receipt-seconds.svg",
    img: "/screens/split-bill-app/split-bill-1.png",
    mediaImgMaxHeightPx: 400,
  },
  {
    icon: "/app-icons/split-bill-app/review.svg",
    img: "/screens/split-bill-app/split-bill-2.png",
  },
  {
    icon: "/app-icons/split-bill-app/edit-items.svg",
    img: "/screens/split-bill-app/split-bill-3.png",
  },
  {
    icon: "/app-icons/split-bill-app/qr-invite.svg",
    img: "/screens/split-bill-app/split-bill-4.png",
  },
  {
    icon: "/app-icons/split-bill-app/cta-check.svg",
    img: "/screens/split-bill-app/split-bill-5.png",
  },
  {
    icon: "/app-icons/split-bill-app/percentage.svg",
    img: "/screens/split-bill-app/split-bill-6.png",
  },
  {
    icon: "/app-icons/split-bill-app/settle-up.svg",
    img: "/screens/split-bill-app/who-owes-whom-1.png",
    mediaImgWidthPx: 220,
  },
] as const;
