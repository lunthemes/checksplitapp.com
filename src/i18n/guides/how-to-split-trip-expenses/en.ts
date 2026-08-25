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
    "Before the first payment, agree which costs the whole group shares and which belong only to some people. Hotel nights often go to everyone; a taxi or museum ticket may not. Record the payer separately from the participants, because the person who paid is not always in the split. Add each expense while the amount and the people involved are still clear. If you spend in more than one currency, agree how to record those amounts—CheqSplit does not convert currencies. Clear rules at the start keep the shared record consistent until you review who owes whom.",
  stepsH2: "How to split trip expenses in 5 steps",
  steps: [
    {
      title: "Create the trip early",
      desc: "Name the trip, include the people involved, and add any costs that already exist so the group starts from one record.",
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
      desc: "Enter amounts while they are still fresh. In CheqSplit, open the Expenses tab and tap Add Expense. Any participant can add an expense.",
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
    "CheqSplit lets you create a trip for the group, record the payer and participants for each expense, keep the shared history visible, and see who owes whom. Add a taxi, hotel, or tickets from the Expenses tab with Add Expense. Add an itemized restaurant receipt from the Bills tab with Add Bill. Archive the trip and export a PDF report when you are done. It calculates balances; it does not transfer money or convert currencies.",
  productCta: "Track group and trip expenses with CheqSplit",
  receiptNoteBefore: "When a trip expense is an itemized restaurant bill, use the ",
  receiptNoteLabel: "receipt split method",
  receiptNoteAfter:
    " for the itemized split, including tax and tip. Then open the Bills tab on the trip and tap Add Bill.",
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
      a: "Use the restaurant receipt flow for the itemized split, including tax and tip. Then open the Bills tab on the trip and tap Add Bill.",
    },
    {
      q: "Does CheqSplit convert currencies?",
      a: "No. Currency conversion is not a verified CheqSplit capability. Record amounts as they appear on the expense.",
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
