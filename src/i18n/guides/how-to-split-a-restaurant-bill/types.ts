import type { FaqEntry } from "../../types";

export type GuideStep = {
  title: string;
  desc: string;
};

export interface RestaurantBillGuideCopy {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  answer: string;
  choiceH2: string;
  choiceBody: string;
  stepsH2: string;
  steps: readonly [
    GuideStep,
    GuideStep,
    GuideStep,
    GuideStep,
    GuideStep,
  ];
  exampleH2: string;
  exampleIntro: string;
  exampleReceiptCaption: string;
  exampleReceiptRows: readonly { item: string; amount: string }[];
  exampleShareCaption: string;
  exampleShareRows: readonly { person: string; amount: string }[];
  exampleNote: string;
  productH2: string;
  productBody: string;
  productCta: string;
  faqH2: string;
  faq: readonly FaqEntry[];
  ctaTitle: string;
  ctaBody: string;
  crumbGuides: string;
  crumbCurrent: string;
  colItem: string;
  colAmount: string;
  colPerson: string;
  colDue: string;
}
