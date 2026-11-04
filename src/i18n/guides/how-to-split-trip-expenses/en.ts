import type { TripExpensesGuideCopy } from "./types";

export const tripExpensesGuideEn: TripExpensesGuideCopy = {
  metaTitle: "How to Split Trip Expenses with Friends | CheqSplit",
  metaDescription:
    "Create one trip record, note every payer and participant, add expenses promptly, and review final balances with this practical method.",
  h1: "How to split trip expenses with friends",
  answer:
    "Create one shared trip, agree which costs belong to everyone or only selected participants, record the payer and participants for every expense, and review the balances before the trip ends.",
  answerFollow:
    "Recording each cost this way means the group never has to sit down for a final-day accounting session to reconstruct who paid for what.",
  rulesH2: "Agree on the expense rules before the trip",
  rulesBody:
    "Before the first payment, agree which costs everyone shares and which include only selected people. Record the payer separately from the participants and add each expense promptly. Choose a group currency for balances. For expenses in another currency, check the reference rate and date, enter a manual rate, or use the amount actually debited by your bank in the group currency. Clear rules keep the shared record consistent.",
  stepsH2: "How to split trip expenses in 5 steps",
  steps: [
    {
      title: "Create a group for your trip",
      desc: "On the home screen, tap Create group, name the group, choose its currency, and invite participants by link or QR code.",
    },
    {
      title: "Record the payer",
      desc: "Make it explicit who paid for every expense—tickets, accommodation, transport, a restaurant expense, or an activity someone covered for the group.",
    },
    {
      title: "Select participants",
      desc: "Include everyone only when they shared the cost. For a taxi, activity, or restaurant expense, choose just the people involved.",
    },
    {
      title: "Add expenses as they happen",
      desc: "Open Expenses and tap Add Expense. Enter the description, amount and currency, optionally choose a category, select the payer, then choose Everyone or Custom for the participants. Any participant can add an expense.",
    },
    {
      title: "Review balances",
      desc: "Check the shared history and who owes whom before you close or export the trip. Fill in missing entries first.",
    },
  ],
  exampleH2: "Example: splitting a weekend trip between four friends",
  exampleIntro:
    "Alex, Blair, Casey, and Dana share a weekend. The hotel and museum tickets include everyone. The taxi includes only Alex, Blair, and Casey.",
  exampleExpenseCaption: "Expenses",
  exampleExpenseRows: [
    {
      expense: "Hotel",
      payer: "Alex",
      participants: "Alex, Blair, Casey, Dana",
      amount: "€400.00",
    },
    {
      expense: "Taxi",
      payer: "Blair",
      participants: "Alex, Blair, Casey",
      amount: "€45.00",
    },
    {
      expense: "Museum tickets",
      payer: "Dana",
      participants: "Alex, Blair, Casey, Dana",
      amount: "€80.00",
    },
  ],
  exampleBalanceCaption: "Paid versus share",
  exampleBalanceRows: [
    { person: "Alex", paid: "€400.00", share: "€135.00", net: "is owed €265.00" },
    { person: "Blair", paid: "€45.00", share: "€135.00", net: "owes €90.00" },
    { person: "Casey", paid: "€0.00", share: "€135.00", net: "owes €135.00" },
    { person: "Dana", paid: "€80.00", share: "€120.00", net: "owes €40.00" },
  ],
  exampleSettle:
    "Blair pays Alex €90, Casey pays Alex €135, and Dana pays Alex €40. Those three payments total €265, which matches what Alex is owed.",
  exampleNote:
    "Shares: hotel €100 each; taxi €15 each for the three riders; tickets €20 each. Dana did not take the taxi, so Dana’s share is €120 instead of €135. CheqSplit can calculate these balances; it does not transfer the money.",
  productH2: "Track shared trip expenses with CheqSplit",
  productBody:
    "Create a group from the home screen with Create group, choose its currency, and invite participants. Add hotel, taxi or ticket costs from Expenses with Add Expense, choosing the amount, currency, payer and Everyone or Custom participants; category is optional. From Bills, Add Bill opens receipt scanning or upload. Review the items, then split by item or equally. For another currency, use the reference rate and date, a manual rate or the actual bank debit in the group currency. Review balances, export a PDF report or archive the group. CheqSplit does not transfer money.",
  productCta: "Track group and trip expenses with CheqSplit",
  receiptNoteBefore: "When a trip expense is an itemized restaurant bill, use the ",
  receiptNoteLabel: "receipt split method",
  receiptNoteAfter:
    " directly from the group’s Bills tab with Add Bill. Scan or upload the receipt, review the items and total, then split by item or equally; the bill is linked to the group automatically.",
  faqH2: "Trip expense splitting FAQ",
  faq: [
    {
      q: "Does every expense include everyone?",
      a: "No. Select only the participants involved in that expense.",
    },
    {
      q: "When should an expense be recorded?",
      a: "As soon as practical—while the amount, payer, and people involved are still clear.",
    },
    {
      q: "How should a restaurant bill be handled?",
      a: "In the group, open Bills and tap Add Bill to scan or upload a receipt. Review the detected items and total; the bill is linked to the group automatically. Then start splitting by item or choose Split equally.",
    },
    {
      q: "Does CheqSplit convert currencies?",
      a: "Yes. Group expenses can use another currency. Check the reference exchange rate and date, enter a manual rate, or enter the actual bank debit in the group currency. CheqSplit uses the converted amount for group balances; it does not transfer money.",
    },
  ],
  ctaTitle: "Keep the trip in one shared record",
  ctaBody:
    "Create a trip for your group, add expenses as they happen, and let CheqSplit show who owes whom at the end.",
  crumbGuides: "Guides",
  crumbCurrent: "Trip expenses",
  colExpense: "Expense",
  colPayer: "Payer",
  colParticipants: "Participants",
  colAmount: "Amount",
  colPerson: "Person",
  colPaid: "Paid",
  colShare: "Share",
  colResult: "Result",
};
