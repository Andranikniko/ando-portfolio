export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  description: string;
  tags: string[];
  status?: "Active" | "Shipped" | "Paused";
  links?: { label: string; href: string }[];

  role?: string;
  timeline?: string;

  problem?: string;
  approach?: string[];
  results?: string[];
  highlights?: string[];

  // Future: screenshots / media
  screenshots?: { alt: string; src: string }[];
};

export const projects: Project[] = [
  {
    slug: "legitgrails-b2b-platform",
    title: "LegitGrails B2B Platform",
    oneLiner: "Scaled a dual B2B/B2C SaaS authentication platform.",
    description:
      "Led the development and scaling of a dual B2B and B2C SaaS authentication service platform.",
    tags: ["B2B SaaS", "Auth", "APIs", "Shopify"],
    status: "Shipped",
    role: "Head of Product",
    timeline: "Oct 2022 – Present",
    links: [
      { label: "legitgrails.com", href: "https://legitgrails.com/" },
      { label: "Account", href: "https://account.legitgrails.com/" },
      { label: "B2B", href: "https://b2b.legitgrails.com/" },
      {
        label: "API Docs",
        href: "https://legit-grails.stoplight.io/docs/verification-api/9ad89a0cede23-summary",
      },
    ],
    problem:
      "Fragmented user experience for fashion resale businesses and individual users seeking item authentication, poor retention and limited automation.",
    approach: [
      "Rebuilt the user journey and architecture to support subscriptions, credits, order tracking, and integrations with Shopify and e-commerce APIs.",
      "Implemented financial guarantee model to de-risk the experience.",
      "Designed and launched loyalty and referral programs in close collaboration with business development.",
      "Led the full rebranding of the platform (UI/UX overhaul and repositioning).",
      "Built analytics dashboards (Amplitude, Looker) for insight-led prioritization.",
      "Expanded to Japanese market with localized UX and payment features.",
      "Launched public API integration with full documentation and a dedicated landing page.",
      "Onboarded new clients and supported enterprise integrations (GoodWill, British Red Cross, FarFetch).",
    ],
    results: [
      "Scaled from $5K to $120K MRR in under 2 years.",
      "Increased B2B retention and LTV via data-driven product iteration.",
      "Established LegitGrails as a top-tier player in authentication tech.",
    ],
  },
  {
    slug: "resale-x",
    title: "Resale-X (AI Application)",
    oneLiner: "AI recognition + price estimation for fashion resale.",
    description:
      "Created Resale-X as a spin-off AI tool for item recognition and price estimation using ML and LegitGrails historical data.",
    tags: ["AI", "ML", "Resale"],
    status: "Active",
    role: "Product Lead",
    timeline: "2024 – Present",
    links: [{ label: "resale-x.com", href: "https://resale-x.com/" }],
    problem:
      "Lack of scalable tools for automatic recognition and pricing of fashion resale items.",
    approach: [
      "Developed an MVP with the CTO of LegitGrails.",
      "Trained the AI model on marketplace photos and verification results.",
      "Created product pipeline and API infrastructure for external integrations.",
      "Built web app for B2B clients (resellers, consignment stores).",
      "Launched inside the LegitGrails user base, gathered feedback, and ran discovery for scaling.",
      "Signed first B2B clients including Daykonkuya Japan (implemented via WhatsApp bots at item intake).",
    ],
    results: [
      "Achieved 10+ B2B test clients in EU and US markets.",
      "Enabled partner platforms to pre-qualify item listings using AI.",
    ],
  },
  {
    slug: "vnx-compliance",
    title: "VNX.li Compliance Integration",
    oneLiner: "KYC/AML onboarding + compliance integrations for tokenized investments.",
    description:
      "Worked on a tokenized investment platform for HNWIs. Introduced built-in KYC/AML compliance flows and improved onboarding UX. Contributed to the historical launch of VNXAU (tokenized gold).",
    tags: ["FinTech", "Compliance", "KYC/AML"],
    status: "Shipped",
    role: "Product Manager & COO",
    timeline: "Jan 2022 – Oct 2022",
    links: [{ label: "vnx.li", href: "https://vnx.li/" }],
    problem:
      "Highly manual onboarding process and fragmented compliance integrations.",
    approach: [
      "Integrated KYC/KYB providers and crypto transaction screening.",
      "Designed onboarding wizard combining regulatory steps with UX best practices.",
      "Implemented transaction limits and risk scoring based on user profile.",
      "Integrated with SumSub for KYC/KYB compliance, transaction screening, and Travel Rule adherence.",
      "Helped structure DeFi strategy and supported liquidity provision management.",
      "Developed admin panel for user management and financial reporting.",
      "Contributed to internal audit reports and regulatory filings.",
    ],
    results: [
      "20+ HNWI accounts onboarded.",
      "Reduced compliance rejection rates and improved completion rates.",
      "Passed internal and external regulatory audits.",
    ],
  },
  {
    slug: "yesim-b2b",
    title: "Yesim B2B Platform and Mobile App",
    oneLiner: "B2B telecom SaaS GTM + retention via loyalty and packages.",
    description:
      "Led GTM and product development for a B2B telecom SaaS product and supported Yesim’s consumer app.",
    tags: ["B2B", "Telecom", "GTM"],
    status: "Shipped",
    role: "Product Manager",
    timeline: "Apr 2020 – Mar 2021",
    links: [
      { label: "yesim.app", href: "https://yesim.app/" },
      { label: "B2B", href: "https://yesim.app/b2b-enterprise/" },
    ],
    problem:
      "Limited user stickiness and no structured business loyalty offering.",
    approach: [
      "Developed loyalty program with cross-spending credits across airline partners.",
      "Set up partner API integrations and B2B dashboard.",
      "Managed roadmap and analytics using Amplitude and Pipedrive.",
      "Led development of country-specific eSIM packages (including unlimited offers) based on usage analysis and market demand.",
    ],
    results: [
      "Landed first enterprise B2B contract.",
      "Rolled out loyalty system that increased daily active users and reduced churn.",
      "Improved conversion and ARPU with tailored internet package design.",
    ],
  },
  {
    slug: "bchef",
    title: "BChef.lv (Side Project)",
    oneLiner: "Bootstrapped meal-kit delivery in Latvia during COVID.",
    description:
      "Built and launched Latvia’s first meal-kit delivery platform during COVID-19.",
    tags: ["Founder", "B2C", "Ops"],
    status: "Shipped",
    role: "Founder",
    timeline: "2020 – 2021",
    links: [{ label: "Instagram @bchef.lv", href: "https://www.instagram.com/bchef.lv/" }],
    problem: "No local solution for affordable, chef-designed meal kits.",
    approach: [
      "Created a menu planning and automatic calculation system on the backend after compiling a national supplier database.",
      "Collaborated with 5 local restaurants and chefs to design high-quality recipes.",
      "Integrated seamless API connections with local delivery partners.",
      "Acquired first 100 paying users in 100 days through direct marketing and partnerships.",
    ],
    results: [
      "Reached a valuation of €1.5M within 6 months of launch (bootstrapped).",
      "Operated for 1 year; pivoted and closed due to scaling difficulties.",
      "Gained hands-on experience in B2C ops, logistics, and foodtech GTM.",
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
