import { faqItems } from "./landing";

export const siteUrl = "https://cheqsplitapp.com" as const;

/** softwareApplication: no aggregateRating (ratings in UI are not verified to match schema) */
export const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CheqSplit",
  operatingSystem: "iOS, Android",
  applicationCategory: "FinanceApplication",
  description:
    "CheqSplit helps you scan receipts, split bills by item, track group expenses, and see who owes whom.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
} as const;

export function getFaqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question" as const,
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: item.a,
      },
    })),
  };
}
