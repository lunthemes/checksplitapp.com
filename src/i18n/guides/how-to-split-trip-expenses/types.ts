import type { FaqEntry } from "../../types";

export type GuideStep = {
  title: string;
  desc: string;
};

export interface TripExpensesGuideCopy {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  answer: string;
  answerFollow: string;
  rulesH2: string;
  rulesBody: string;
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
  exampleExpenseCaption: string;
  exampleExpenseRows: readonly {
    expense: string;
    payer: string;
    participants: string;
    amount: string;
  }[];
  exampleBalanceCaption: string;
  exampleBalanceRows: readonly {
    person: string;
    paid: string;
    share: string;
    net: string;
  }[];
  exampleSettle: string;
  exampleNote: string;
  productH2: string;
  productBody: string;
  productCta: string;
  receiptNoteBefore: string;
  receiptNoteLabel: string;
  receiptNoteAfter: string;
  faqH2: string;
  faq: readonly FaqEntry[];
  ctaTitle: string;
  ctaBody: string;
  crumbGuides: string;
  crumbCurrent: string;
  colExpense: string;
  colPayer: string;
  colParticipants: string;
  colAmount: string;
  colPerson: string;
  colPaid: string;
  colShare: string;
  colResult: string;
}
