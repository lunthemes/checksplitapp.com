import type { SplitBillScreenVariant } from "./types";

export type SplitBillHeroScreen = {
  src: string;
  variant: SplitBillScreenVariant;
  width: number;
  height: number;
};

export type SplitBillFeatureAsset = {
  icon: string;
  img: string;
  imageAlt: string;
  variant: SplitBillScreenVariant;
  width: number;
  height: number;
};

const DEVICE = { variant: "device" as const, width: 3200, height: 2400 };
const BROWSER = { variant: "browser" as const, width: 588, height: 1280 };

/** Hero: scan, live item split, who owes whom. Decorative (empty alt). */
export const splitBillHeroScreens: readonly SplitBillHeroScreen[] = [
  { src: "/screens/split-bill-app/bill_1.png", ...DEVICE },
  { src: "/screens/split-bill-app/bill_5.png", ...DEVICE },
  { src: "/screens/split-bill-app/bill_6.png", ...DEVICE },
];

export const splitBillStepIcons = [
  "/app-icons/split-bill-app/scan-bill.svg",
  "/app-icons/split-bill-app/invite-split.svg",
  "/app-icons/split-bill-app/settle-up.svg",
] as const;

export const splitBillFeatureAssets: readonly SplitBillFeatureAsset[] = [
  {
    icon: "/app-icons/split-bill-app/scan-bill.svg",
    img: "/screens/split-bill-app/bill_1.png",
    imageAlt: "Scanning a restaurant receipt in CheqSplit",
    ...DEVICE,
  },
  {
    icon: "/app-icons/split-bill-app/review.svg",
    img: "/screens/split-bill-app/bill_2.png",
    imageAlt: "Reviewing the detected restaurant bill total and currency",
    ...DEVICE,
  },
  {
    icon: "/app-icons/split-bill-app/edit-items.svg",
    img: "/screens/split-bill-app/bill_3.png",
    imageAlt:
      "Reviewing restaurant bill items, prices, and Fees & Tips before sharing",
    ...DEVICE,
  },
  {
    icon: "/app-icons/split-bill-app/qr-invite.svg",
    img: "/screens/split-bill-app/bill_8.png",
    imageAlt: "QR code and shareable link for a CheqSplit restaurant bill",
    ...DEVICE,
  },
  {
    icon: "/app-icons/split-bill-app/invite-split.svg",
    img: "/screens/split-bill-app/bill_10.jpeg",
    imageAlt:
      "CheqSplit invitation page with Get the free app on the App Store and Continue in browser",
    ...BROWSER,
  },
  {
    icon: "/app-icons/split-bill-app/split-live.svg",
    img: "/screens/split-bill-app/bill_11.jpeg",
    imageAlt: "Selecting restaurant bill items in the CheqSplit browser view",
    ...BROWSER,
  },
  {
    icon: "/app-icons/split-bill-app/cta-check.svg",
    img: "/screens/split-bill-app/bill_5.png",
    imageAlt: "Friends selecting their items on a shared restaurant bill",
    ...DEVICE,
  },
  {
    icon: "/app-icons/split-bill-app/settle-up.svg",
    img: "/screens/split-bill-app/bill_6.png",
    imageAlt: "Who Owes Whom balances after a restaurant bill split",
    ...DEVICE,
  },
  {
    icon: "/app-icons/split-bill-app/settle-up.svg",
    img: "/screens/split-bill-app/bill_9.png",
    imageAlt: "Recording an external payment between two bill participants",
    ...DEVICE,
  },
  {
    icon: "/app-icons/split-bill-app/review.svg",
    img: "/screens/split-bill-app/bill_7.png",
    imageAlt:
      "Summary tab with a spending chart and one participant’s consumed items",
    ...DEVICE,
  },
];
