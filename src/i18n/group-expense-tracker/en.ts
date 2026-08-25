import type { GroupExpenseTrackerCopy } from "./types";

export const groupExpenseTrackerEn: GroupExpenseTrackerCopy = {
  metaTitle: "Group Expense Tracker — See Who Owes Whom | CheqSplit",
  metaDescription:
    "Track group expenses in one trip: record who paid, choose selected participants, and see who owes whom with CheqSplit.",
  softwareDescription:
    "CheqSplit helps you track group expenses over time: create a trip for your group, record who paid, choose who shared each cost, and see who owes whom.",
  h1: "Track group expenses and see who owes whom",
  heroText:
    "Keep every group expense and every balance in one shared record: create a trip, record who paid, choose who shared each cost, and see who owes whom.",
  downloadCta: "Get the free app",
  secondaryCta: "How group tracking works",
  nav: {
    how: "How it works",
    faq: "FAQ",
  },
  timelineH2: "A shared expense history instead of scattered messages",
  timelineText:
    "One person pays for the hotel, another covers the taxi, and someone else buys museum tickets. Those costs appear together in the Expenses tab so the group can see the same record instead of comparing notes later.",
  howH2: "How group expense tracking works",
  steps: [
    {
      title: "Invite the group to the trip",
      text: "After creating and naming the trip, invite participants by link or QR code.",
      imageAlt: "Invite participants to a CheqSplit trip by link or QR code",
    },
    {
      title: "Add each expense",
      text: "Open the Expenses tab and tap Add Expense. Enter the description and amount, choose who paid, and select who shares the expense. Any participant can add an expense.",
      imageAlt: "Add Expense form with description, amount, payer, and who shares the cost",
    },
    {
      title: "Choose who shared the cost",
      text: "Choose Everyone or Custom, then select only the participants who shared that expense.",
      imageAlt: "Selecting the participants who shared a taxi expense",
    },
    {
      title: "Follow the shared expense history",
      text: "Every added expense appears in the Expenses tab with its amount, payer and participants.",
      imageAlt: "Expenses tab listing taxi, hotel, and museum tickets for Weekend in Prague",
    },
    {
      title: "See who owes whom",
      text: "Open the Summary tab to see who owes whom and each person’s spent and consumed amounts. CheqSplit calculates balances; it does not transfer money.",
      imageAlt: "Summary tab showing who owes whom for the trip",
    },
  ],
  subsetH2: "Choose the right split for each expense",
  subsetText:
    "Not every cost belongs to everyone. Add a taxi for four people without charging the two who walked. Record a meal as a regular expense when only the total matters and select only the diners involved. If you need to split an itemized restaurant receipt, use the Bills tab and Add Bill.",
  receiptBridgeH2: "Bring an itemized restaurant bill into the trip",
  receiptBridgeText:
    "When the cost is an itemized restaurant receipt, use the restaurant receipt flow for the itemized split, including tax and tip. Then open the Bills tab on the trip and tap Add Bill.",
  receiptBridgeCta: "See how receipt splitting works",
  reportH2: "Keep a record the group can return to",
  reportText:
    "Archive a finished trip or export a PDF report with expenses, totals, tables, and a chart. The result is easier to check than a final number with no history behind it.",
  fitsH2: "When CheqSplit is useful",
  fits: [
    "A weekend or holiday with friends",
    "A group trip with accommodation, transport, meals, tickets, or activities",
    "Several trip expenses paid by different participants",
    "An itemized restaurant bill, added from the Bills tab with Add Bill",
  ],
  faqH2: "Group expense tracker FAQ",
  faq: [
    {
      q: "Can different people add expenses?",
      a: "Yes. Any participant can open the Expenses tab and tap Add Expense. For an itemized receipt, use the Bills tab and tap Add Bill.",
    },
    {
      q: "Can an expense apply to only some people?",
      a: "Yes. Choose Everyone or Custom, then select only the participants who shared that expense.",
    },
    {
      q: "Can I scan a receipt for a trip expense?",
      a: "Use the restaurant receipt flow for the itemized split, including tax and tip. Then open the Bills tab on the trip and tap Add Bill.",
    },
    {
      q: "How do I know who should pay whom?",
      a: "CheqSplit combines the group’s expenses and shows the resulting balances—who owes whom. It calculates shares; it does not transfer money.",
    },
    {
      q: "Can I export the result?",
      a: "Yes. CheqSplit can export a detailed PDF report with costs, totals, tables, and a chart, and you can archive a finished trip.",
    },
  ],
  ctaTitle: "Give the group one clear record",
  ctaBody:
    "Create a trip for your group, add costs while they are fresh, and let CheqSplit keep the group balance visible.",
  internalRestaurantBefore: "Need to split one dinner receipt by item? Use the ",
  internalRestaurantLabel: "restaurant bill splitter",
  internalRestaurantAfter: " for scan, invite, and live item assignment.",
  guideBridgeBefore: "Prefer a step-by-step method first? Read ",
  guideBridgeLabel: "how to split trip expenses with friends",
  guideBridgeAfter: ".",
  a11y: {
    nav: "Main navigation",
    hero: "Group expense tracker — introduction",
    timeline: "Shared expense history",
    how: "How group expense tracking works",
    subset: "Selected participants for an expense",
    receipt: "Itemized bill on the Bills tab",
    report: "Balances and PDF report",
    fits: "When to use CheqSplit for group expenses",
    faq: "Frequently asked questions",
  },
};
