import type { FaqEntry } from "../types";

export type GetStep = {
  title: string;
  text: string;
  imageAlt: string;
};

export interface GroupExpenseTrackerCopy {
  metaTitle: string;
  metaDescription: string;
  softwareDescription: string;
  h1: string;
  heroText: string;
  downloadCta: string;
  secondaryCta: string;
  nav: {
    how: string;
    faq: string;
  };
  timelineH2: string;
  timelineText: string;
  howH2: string;
  steps: readonly [GetStep, GetStep, GetStep, GetStep, GetStep];
  subsetH2: string;
  subsetText: string;
  receiptBridgeH2: string;
  receiptBridgeText: string;
  receiptBridgeCta: string;
  reportH2: string;
  reportText: string;
  fitsH2: string;
  fits: readonly [string, string, string, string];
  faqH2: string;
  faq: readonly [FaqEntry, FaqEntry, FaqEntry, FaqEntry, FaqEntry];
  ctaTitle: string;
  ctaBody: string;
  internalRestaurantBefore: string;
  internalRestaurantLabel: string;
  internalRestaurantAfter: string;
  guideBridgeBefore: string;
  guideBridgeLabel: string;
  guideBridgeAfter: string;
  a11y: {
    nav: string;
    hero: string;
    timeline: string;
    how: string;
    subset: string;
    receipt: string;
    report: string;
    fits: string;
    faq: string;
  };
}
