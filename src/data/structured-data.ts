import type { FaqEntry } from "../i18n/types";

export const siteUrl = "https://cheqsplitapp.com" as const;

export function getSoftwareApplicationJsonLd(description: string, pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CheqSplit",
    url: pageUrl,
    operatingSystem: "iOS, Android",
    applicationCategory: "FinanceApplication",
    description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  } as const;
}

export function getFaqPageJsonLd(faqItems: readonly FaqEntry[]) {
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
