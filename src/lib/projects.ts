export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  description: string;
  tags: string[];
  status?: "Active" | "Shipped" | "Paused";
  links?: { label: string; href: string }[];
  highlights?: string[];
  role?: string;
  timeline?: string;
};

export const projects: Project[] = [
  {
    slug: "legitgrails-b2b-platform",
    title: "LegitGrails B2B Platform",
    oneLiner: "Scaled a dual B2B/B2C SaaS authentication platform.",
    description:
      "Led the development and scaling of a dual B2B/B2C SaaS authentication platform (from $5K to $120K MRR).",
    tags: ["B2B SaaS", "Auth", "APIs", "Shopify"],
    status: "Shipped",
    role: "Head of Product",
    timeline: "Oct 2022 – Present",
    links: [
      { label: "legitgrails.com", href: "https://legitgrails.com/" },
      { label: "B2B", href: "https://b2b.legitgrails.com/" },
      {
        label: "API Docs",
        href: "https://legit-grails.stoplight.io/docs/verification-api/9ad89a0cede23-summary",
      },
    ],
    highlights: [
      "Rebuilt user journey + architecture for subscriptions, credits, tracking, and integrations.",
      "Launched public API with docs + landing page.",
      "Rebrand + UX overhaul; analytics dashboards for prioritization.",
      "Enterprise integrations (GoodWill, British Red Cross, FarFetch).",
      "Results: $5K → $120K MRR in <2 years.",
    ],
  },
  {
    slug: "resale-x",
    title: "Resale-X (AI Application)",
    oneLiner: "AI recognition + price estimation for fashion resale.",
    description:
      "AI tool for item recognition and price estimation using ML + historical verification data.",
    tags: ["AI", "ML", "Resale"],
    status: "Active",
    role: "Product Lead",
    timeline: "2024 – Present",
    links: [{ label: "resale-x.com", href: "https://resale-x.com/" }],
    highlights: [
      "MVP built with CTO; model trained on marketplace photos + verification results.",
      "Pipeline + API infrastructure for external integrations.",
      "Signed 10+ B2B test clients; Daykonkuya Japan implemented via WhatsApp bots.",
    ],
  },
  {
    slug: "vnx-compliance",
    title: "VNX.li Compliance Integration",
    oneLiner: "KYC/AML onboarding + compliance integrations for tokenized investments.",
    description:
      "Built KYC/AML onboarding flows for a tokenized investment platform (HNWIs) and contributed to VNXAU (tokenized gold).",
    tags: ["FinTech", "Compliance", "KYC/AML"],
    status: "Shipped",
    role: "Product Manager & COO",
    timeline: "Jan 2022 – Oct 2022",
    links: [{ label: "vnx.li", href: "https://vnx.li/" }],
    highlights: [
      "Integrated KYC/KYB providers + screening; onboarding wizard + risk scoring.",
      "Supported DeFi strategy and liquidity management; built admin tooling.",
      "Results: 20+ HNWI accounts onboarded; improved completion rates; audits passed.",
    ],
  },
  {
    slug: "yesim-b2b",
    title: "Yesim B2B Platform and Mobile App",
    oneLiner: "B2B telecom SaaS GTM + retention via loyalty and packages.",
    description:
      "Led GTM and product development for a B2B telecom SaaS product; improved retention via loyalty & packages.",
    tags: ["B2B", "Telecom", "GTM"],
    status: "Shipped",
    role: "Product Manager",
    timeline: "Apr 2020 – Mar 2021",
    links: [
      { label: "yesim.app", href: "https://yesim.app/" },
      { label: "B2B", href: "https://yesim.app/b2b-enterprise/" },
    ],
    highlights: [
      "Built loyalty program; partner API integrations + B2B dashboard.",
      "Analytics-driven roadmap; optimized eSIM packages and conversion/ARPU.",
      "Results: first enterprise B2B contract; increased DAU and reduced churn.",
    ],
  },
  {
    slug: "bchef",
    title: "BChef.lv (Side Project)",
    oneLiner: "Bootstrapped meal-kit delivery in Latvia during COVID.",
    description:
      "Founder — built Latvia’s first meal-kit delivery platform during COVID; reached €1.5M valuation (bootstrapped).",
    tags: ["Founder", "B2C", "Ops"],
    status: "Shipped",
    role: "Founder",
    timeline: "2020 – 2021",
    links: [{ label: "Instagram", href: "https://www.instagram.com/bchef.lv/" }],
    highlights: [
      "Backend menu planning + automatic calculations; supplier database.",
      "Partnered with 5 local restaurants; 100 paying users in 100 days.",
      "Closed after 1 year due to scaling constraints (valuable ops/GTM learnings).",
    ],
  },
  {
    slug: "ando-portfolio",
    title: "Ando Portfolio",
    oneLiner: "Personal portfolio site.",
    description: "This site — a lightweight place to publish product work.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    status: "Shipped",
    highlights: ["Fast, clean, and easy to iterate."],
  },
  {
    slug: "agentic-ecom-engine",
    title: "Agentic E-com Engine",
    oneLiner: "Exploring agentic commerce + structured product data.",
    description:
      "Exploring agentic commerce + structured product data (work in progress).",
    tags: ["AI", "E-commerce", "R&D"],
    status: "Active",
    highlights: [
      "Problem discovery + prototyping.",
      "Positioning exploration (SMB vs procurement).",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
