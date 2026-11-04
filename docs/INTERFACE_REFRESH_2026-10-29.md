# Interface and workflow refresh — 29 October 2026

Local update prepared against CheqSplit 3.0.1 running on iPhone 16 / iOS 18.6.

## Scope and layout

Existing website layout, colors, typography, responsive breakpoints, image grouping, cropping containers and iPhone framing are retained. The restaurant page gains one feature row using its existing template to explain the new per-unit selection flow. Existing page paths, titles, H1, canonical URLs, hreflang and structured-data generation remain in place. Long localized words are allowed to wrap in the footer and hero columns to prevent clipping/overflow at tablet widths; grid proportions are unchanged. Restaurant feature image alt text now uses each locale’s translated feature title.

## Screenshots

24 WebP assets are updated or added. Native captures come from the running app, not generated interface illustrations. Simulator chrome is removed; the genuine iPhone bezel is retained. Landscape feature artboards retain 1600 × 1200 dimensions and a centered phone. Portrait source dimensions match their predecessors. The CTA retains its existing tilted device shell and composition, with the current Home screen projected onto its display.

- Home, group Overview, Expenses, Summary, invitations and Bills: Weekend in Rome demo.
- Receipt review, invite, item selection, individual portions, summary, participant details and payment form: supplied Italian receipt, named Dinner in Amalfi; detected total EUR 194.50.
- Browser invitation and live split: current local `Cheqsplit/web` application, same test receipt, 588 × 1280 captures. Browser variants retain their existing browser-style framing.
- Camera screenshot retained: owner confirmed camera design is unchanged.
- PDF viewer/report previews retained: these represent exported documents, not the redesigned application interface.
- Old unused image files retained; this update does not delete reference material.

Changed screenshot references use a stable release query `v=20261029` to refresh caches. This value is constant across pages, devices and reloads.

## Verified workflow corrections in all 11 locales

- Home starts with Create group; group currency is selected during creation.
- Add Expense includes amount/currency, optional category, payer and Everyone/Custom participants.
- In a group, Bills > Add Bill starts receipt scan/import directly. Review Items links the receipt to that group; users can split by items or equally. No instructions to import an already completed standalone receipt into a group.
- Quantity greater than one opens individual unit selection. A selected item or unit shared by multiple participants is divided equally among those participants. No percentage-slider claim is made.
- Group multi-currency uses a reference exchange rate/date, manual rate, or actual bank debit in the group currency. Removed outdated claims that conversion is unsupported.
- Payments are records of external transfers; CheqSplit does not process money.

## Verification

Run Astro check, production build and the existing localized-page checks in USE_DIST mode; perform responsive browser checks through the connected browser. Verify image loading, feature/copy alignment, FAQ structured data, titles, canonical and hreflang. Results are recorded in the completion report.

## Separate suggestions (not implemented)

Consider dedicated, evidence-backed pages for multi-currency group expenses and friend balances after those flows are validated visually. Evaluate organic landing-page visits leading to store clicks and activated users; rankings and traffic increases cannot be guaranteed by this refresh alone.

## Verified results

- Astro check: 211 files, 0 errors / 0 warnings / 0 hints.
- Production build: 132 pages generated successfully.
- Existing localized-page verifier (`USE_DIST=1`): PASS, 121 URLs. Checks titles, descriptions, one H1, canonical links, all hreflang alternatives, FAQ markup parity, translations and placeholders.
- Connected-browser responsive checks: 99 combinations = 33 marketing pages across 11 languages at 390, 768 and 1440px. No horizontal page overflow; one H1 per page.
- Browser visual review: current Home phone grouping, new portion-selection row, receipt and group pages. Per-portion feature count and localized image alt confirmed.
- 24 current assets total approximately 1.05 MB; the 22 replaced originals total approximately 1.27 MB. Native frame composition and source canvas dimensions are retained.
- Temporary simulator source adjustments were restored byte-for-byte to their pre-capture versions. No app version or release files were changed for this work.
- Changes remain local; no production publication or remote push.

Image SEO reference: https://developers.google.com/search/docs/appearance/google-images (descriptive/contextual alt text, image quality and file size, consistent crawlable image URLs).


## White header correction
Record a Payment uses a corrected native capture. Add Expense and participant-selection assets now replace only the white header background using an ImageGen-derived background patch; original UI and canvas dimensions retained. Updated both group-page assets and the homepage Add Expense asset, with cache versions refreshed. Native simulator access remains unavailable, so these two are edited website illustrations rather than new native captures.
