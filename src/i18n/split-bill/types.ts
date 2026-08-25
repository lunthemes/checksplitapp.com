import type { FaqEntry } from "../types";

export type SplitBillStepCopy = { title: string; desc: string };

export type SplitBillFeatureText = {
  title: string;
  desc: string;
  extra?: string;
};

export type SplitBillUseCase = { title: string; text: string };

export type SplitBillScreenVariant = "device" | "browser";

export interface SplitBillLocaleCopy {
  metaTitle: string;
  metaDescription: string;
  softwareDescription: string;
  h1: string;
  heroSubLine1: string;
  heroSubLine2: string;
  heroParagraph: string;
  seoBlockH2: string;
  seoBlockP1: string;
  seoBlockP2: string;
  seoBlockP3: string;
  useCasesH2: string;
  useCases: readonly SplitBillUseCase[];
  howSectionH2: string;
  howSectionSub: string;
  stepsSectionH2: string;
  steps: readonly [SplitBillStepCopy, SplitBillStepCopy, SplitBillStepCopy];
  features: readonly SplitBillFeatureText[];
  ctaTitle: string;
  ctaBody: string;
  groupBridgeBefore: string;
  groupBridgeLabel: string;
  groupBridgeAfter: string;
  guideBridgeBefore: string;
  guideBridgeLabel: string;
  guideBridgeAfter: string;
  faq: readonly FaqEntry[];
  a11y: {
    hero: string;
    nav: string;
    stepsRegion: string;
    features: string;
    faq: string;
  };
}
