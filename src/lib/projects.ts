export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  description: string;
  tags: string[];
  status?: "Active" | "Shipped" | "Paused";
  links?: { label: string; href: string }[];

  kind?: "main" | "fun";

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
    timeline: "2022 – 2025",
    links: [
      { label: "legitgrails.com", href: "https://legitgrails.com/" },
      { label: "Account", href: "https://account.legitgrails.com/" },
      { label: "B2B", href: "https://b2b.legitgrails.com/" },
      {
        label: "API Docs",
        href: "https://legit-grails.stoplight.io/docs/verification-api/9ad89a0cede23-summary",
      },
    ],
    highlights: [
      "Part of a multi-year journey — see LegitGrails Mobile iOS App (2020–2025) for the consumer side.",
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
    screenshots: [
      {
        alt: "LegitGrails — New Authentication flow (order form)",
        src: "/projects/legitgrails-b2b-platform/new-auth.png",
      },
      {
        alt: "LegitGrails — analytics dashboard (registrations, conversions)",
        src: "/projects/legitgrails-b2b-platform/analytics-registrations.png",
      },
      {
        alt: "LegitGrails — key metrics (days to orders, avg orders per user)",
        src: "/projects/legitgrails-b2b-platform/metrics-orders.png",
      },
    ],
  },
  {
    slug: "legitgrails-mobile-ios-app",
    title: "LegitGrails Mobile iOS App",
    oneLiner: "Mobile iOS product for consumer authentication and customer lifecycle.",
    description:
      "Owned and evolved the iOS experience across discovery, onboarding, order submission and post-purchase flows — as part of the wider LegitGrails product ecosystem.",
    tags: ["iOS", "Mobile", "B2C", "Payments", "Retention"],
    status: "Shipped",
    role: "Product Lead",
    timeline: "2020 – 2025",
    links: [{ label: "legitgrails.com", href: "https://legitgrails.com/" }],
    problem:
      "Consumer authentication needed a fast, trustworthy mobile-first journey with high completion rates and clear post-purchase communication.",
    approach: [
      "Shaped end-to-end user journeys (onboarding → order submission → status tracking).",
      "Iterated UX to improve conversion and reduce support load.",
      "Aligned mobile roadmap with web/account experiences and back-office operations.",
      "Introduced clearer lifecycle comms (order state, next steps, expectations).",
    ],
    results: [
      "Improved usability and flow clarity for consumer users.",
      "Supported growth by reducing friction in the submission funnel.",
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
    screenshots: [
      {
        alt: "Resale-X — item details / pricing / counterfeit probability UI",
        src: "/projects/resale-x/ui-1.jpg",
      },
      {
        alt: "Resale-X — item page with valuation and counterfeit probability",
        src: "/projects/resale-x/ui-2.png",
      },
      {
        alt: "Resale-X — steps to the first deal (alerts workflow)",
        src: "/projects/resale-x/steps.png",
      },
    ],
  },
  {
    slug: "vnx-compliance",
    title: "VNX.li Compliance Integration",
    oneLiner:
      "KYC/AML onboarding + compliance integrations for tokenized investments.",
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
    screenshots: [
      {
        alt: "Yesim — eSIM onboarding (how it works)",
        src: "/projects/yesim-b2b/how-esim-works.png",
      },
      {
        alt: "Yesim — business product page (features and getting started)",
        src: "/projects/yesim-b2b/yesim-business.png",
      },
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
    links: [
      {
        label: "Instagram @bchef.lv",
        href: "https://www.instagram.com/bchef.lv/",
      },
    ],
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
    screenshots: [
      {
        alt: "BChef — how it works (3-step flow)",
        src: "/projects/bchef/how-it-works.png",
      },
    ],
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

  // Fun projects
  {
    kind: "fun",
    slug: "recipe_project",
    title: "recipe_project",
    oneLiner: "Recipe side project (WIP).",
    description: "Recipe side project (WIP).",
    tags: ["Fun", "Experiment"],
    status: "Active",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Andranikniko/recipe_project",
      },
    ],
  },
  {
    kind: "fun",
    slug: "anyone-free",
    title: "anyone-free",
    oneLiner: "App for social meetings.",
    description: "app for social meetings",
    tags: ["Fun", "Experiment"],
    status: "Active",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Andranikniko/anyone-free",
      },
      {
        label: "Live",
        href: "https://anyone-free.onrender.com",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
