// Altruiso — Investment Pitch form.
// Supports businesses that solve meaningful problems, strengthen industries,
// and create opportunity for people and communities.
//
// Types: contact_group (multiple fields on one screen), short_text
// (inputType: text|email|url|number|tel, optional prefix/suffix), long_text,
// multiple_choice, dropdown, file.
// contact_group sub-field `id` is the flat key written to Firestore.

const UN_SDGS = [
  "1 — No Poverty",
  "2 — Zero Hunger",
  "3 — Good Health and Well-being",
  "4 — Quality Education",
  "5 — Gender Equality",
  "6 — Clean Water and Sanitation",
  "7 — Affordable and Clean Energy",
  "8 — Decent Work and Economic Growth",
  "9 — Industry, Innovation and Infrastructure",
  "10 — Reduced Inequalities",
  "11 — Sustainable Cities and Communities",
  "12 — Responsible Consumption and Production",
  "13 — Climate Action",
  "14 — Life Below Water",
  "15 — Life on Land",
  "16 — Peace, Justice and Strong Institutions",
  "17 — Partnerships for the Goals",
  "Multiple goals",
  "None / Not sure",
];

export const questions = [
  // ── Grouped: about you ──────────────────────────────────
  {
    id: "q_you",
    type: "contact_group",
    title: "About you",
    required: true,
    fields: [
      { id: "first_name", label: "First name", type: "text", required: true },
      { id: "last_name", label: "Last name", type: "text", required: true },
      { id: "email", label: "Your email address", type: "email", required: true },
      { id: "social_url", label: "Your LinkedIn or other social profile URL", type: "url", required: true },
    ],
  },
  // ── Grouped: other founders (optional) ──────────────────
  {
    id: "q_founders",
    type: "contact_group",
    title: "Other founders",
    hint: "Optional — leave blank if you're a solo founder.",
    required: false,
    fields: [
      { id: "other_founders", label: "Name(s) of any other founders", type: "text" },
      { id: "other_founders_links", label: "Links to their LinkedIn profiles", type: "url" },
    ],
  },
  // ── Grouped: your company ───────────────────────────────
  {
    id: "q_company",
    type: "contact_group",
    title: "Your company",
    required: true,
    fields: [
      { id: "company_name", label: "Company name", type: "text", required: true },
      { id: "company_website", label: "Company website", type: "url", required: true },
      { id: "business_location", label: "Where is the business based?", type: "text", required: true },
      { id: "sector", label: "What sector is your business / product?", type: "text", required: true },
    ],
  },
  {
    id: "q_description",
    name: "company_description",
    type: "long_text",
    title: "Describe your company in one or two sentences",
    required: true,
  },
  {
    id: "q_usp",
    name: "usp",
    type: "long_text",
    title: "What is your USP? What makes you different from your competitors?",
    required: true,
  },
  {
    id: "q_rtw",
    name: "right_to_work_uk",
    type: "multiple_choice",
    title: "Do the founders have the right to work in the UK?",
    required: true,
    options: ["Yes", "No", "Some of the founders"],
  },
  {
    id: "q_stage",
    name: "business_stage",
    type: "multiple_choice",
    title: "What best describes your stage of business?",
    required: true,
    options: [
      "Idea / concept",
      "Pre-seed",
      "Seed",
      "Early revenue",
      "Series A",
      "Growth / scaling",
      "Established & profitable",
    ],
  },
  {
    id: "q_solves",
    name: "solves_meaningful_problems",
    type: "multiple_choice",
    title:
      "Does your product solve meaningful problems, strengthen industries, and create opportunities?",
    required: true,
    options: ["Yes", "Partially", "No"],
  },
  {
    id: "q_how_solves",
    name: "how_solves",
    type: "long_text",
    title:
      "How does your product solve meaningful problems, strengthen industries, and create opportunities?",
    required: false,
  },
  {
    id: "q_innovation",
    name: "innovation",
    type: "long_text",
    title:
      "How does your company use innovation — through technology or to differentiate the business model?",
    required: true,
  },
  {
    id: "q_sdg",
    name: "un_sdg",
    type: "dropdown",
    title: "Which, if any, of the UN SDG 17 goals does your business address?",
    required: true,
    options: UN_SDGS,
  },
  {
    id: "q_customers",
    name: "customer_base",
    type: "multiple_choice",
    title: "What best describes your customer base?",
    required: true,
    options: ["B2B", "B2C", "B2B2C", "B2G (government)", "Marketplace", "Other"],
  },
  // ── Grouped: traction & financials ──────────────────────
  {
    id: "q_traction",
    type: "contact_group",
    title: "Traction & financials",
    required: true,
    fields: [
      { id: "employees", label: "Number of employees (full-time equivalents)", type: "number", required: true },
      { id: "revenue_ltm", label: "Revenue over the last 12 months ($)", type: "number", required: true },
      { id: "revenue_monthly", label: "Current monthly revenue ($)", type: "number", required: true },
    ],
  },
  // ── Grouped: the raise ──────────────────────────────────
  {
    id: "q_raise",
    type: "contact_group",
    title: "The raise",
    required: true,
    fields: [
      { id: "raising_amount", label: "How much are you raising at this stage? ($)", type: "number", required: true },
      { id: "valuation", label: "What valuation are you raising at? ($)", type: "number", required: true },
      { id: "raised_prior", label: "How much have you raised prior to this round? ($)", type: "number", required: true },
      { id: "team_equity_pct", label: "How much of the equity do you / your team have? (%)", type: "number", required: true },
    ],
  },
  {
    id: "q_partnership",
    name: "partnership_wants",
    type: "multiple_choice",
    title: "What are you looking for with a partnership from Altruiso?",
    required: false,
    options: ["Advice & support", "Just money", "Both", "Other"],
  },
  // ── Grouped: ideal deal (optional) ──────────────────────
  {
    id: "q_ideal_deal",
    type: "contact_group",
    title: "What would be your ideal capital-for-equity deal with Altruiso?",
    hint: "Optional.",
    required: false,
    fields: [
      { id: "ideal_dollar_value", label: "Total $ value from Altruiso", type: "number" },
      { id: "ideal_equity_pct", label: "% equity", type: "number" },
    ],
  },
  {
    id: "q_deck",
    name: "pitch_deck_url",
    type: "short_text",
    inputType: "url",
    title: "Share a link to your pitch deck",
    hint: "Paste a Google Drive, Dropbox, Notion, or DocSend link — please make sure sharing is enabled so we can view it.",
    required: true,
  },
];
