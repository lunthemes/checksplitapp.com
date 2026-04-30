import type { FaqEntry } from "../types";

export type SplitBillStepCopy = { title: string; desc: string };

export type SplitBillFeatureText = { title: string; desc: string };

export interface SplitBillLocaleCopy {
  metaTitle: string;
  metaDescription: string;
  softwareDescription: string;
  /** Full H1 string; must contain exactly one “CheqSplit” for gradient styling */
  h1: string;
  heroSubLine1: string;
  heroSubLine2: string;
  heroParagraph: string;
  /** H2 + paragraph below the three step cards */
  howSectionH2: string;
  howSectionSub: string;
  /** H2 above the three step cards */
  stepsSectionH2: string;
  steps: readonly [SplitBillStepCopy, SplitBillStepCopy, SplitBillStepCopy];
  features: readonly [
    SplitBillFeatureText,
    SplitBillFeatureText,
    SplitBillFeatureText,
    SplitBillFeatureText,
    SplitBillFeatureText,
    SplitBillFeatureText,
    SplitBillFeatureText,
  ];
  ctaTitle: string;
  ctaBody: string;
  faq: readonly [FaqEntry, FaqEntry, FaqEntry, FaqEntry, FaqEntry, FaqEntry];
  a11y: {
    hero: string;
    nav: string;
    stepsRegion: string;
    features: string;
    faq: string;
  };
}
