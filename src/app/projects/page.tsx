import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
  status?: "Active" | "Shipped" | "Paused";
};

const projects: Project[] = [
  {
    title: "LegitGrails B2B Platform",
    description:
      "Led the development and scaling of a dual B2B/B2C SaaS authentication platform (from $5K to $120K MRR).",
    tags: ["B2B SaaS", "Auth", "APIs", "Shopify"],
    status: "Shipped",
    links: [
      { label: "legitgrails.com", href: "https://legitgrails.com/" },
      { label: "B2B", href: "https://b2b.legitgrails.com/" },
      {
        label: "API Docs",
        href: "https://legit-grails.stoplight.io/docs/verification-api/9ad89a0cede23-summary",
      },
    ],
  },
  {
    title: "Resale-X (AI Application)",
    description:
      "AI tool for item recognition and price estimation using ML + historical verification data.",
    tags: ["AI", "ML", "Resale"],
    status: "Active",
    links: [{ label: "resale-x.com", href: "https://resale-x.com/" }],
  },
  {
    title: "VNX.li Compliance Integration",
    description:
      "Built KYC/AML onboarding flows for a tokenized investment platform (HNWIs) and contributed to VNXAU (tokenized gold).",
    tags: ["FinTech", "Compliance", "KYC/AML"],
    status: "Shipped",
    links: [{ label: "vnx.li", href: "https://vnx.li/" }],
  },
  {
    title: "Yesim B2B Platform and Mobile App",
    description:
      "Led GTM and product development for a B2B telecom SaaS product; improved retention via loyalty & packages.",
    tags: ["B2B", "Telecom", "GTM"],
    status: "Shipped",
    links: [
      { label: "yesim.app", href: "https://yesim.app/" },
      { label: "B2B", href: "https://yesim.app/b2b-enterprise/" },
    ],
  },
  {
    title: "BChef.lv (Side Project)",
    description:
      "Founder — built Latvia’s first meal-kit delivery platform during COVID; reached €1.5M valuation (bootstrapped).",
    tags: ["Founder", "B2C", "Ops"],
    status: "Shipped",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/bchef.lv/",
      },
    ],
  },
  {
    title: "Ando Portfolio",
    description: "This site — a lightweight place to publish product work.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    status: "Shipped",
  },
  {
    title: "Agentic E-com Engine",
    description:
      "Exploring agentic commerce + structured product data (work in progress).",
    tags: ["AI", "E-commerce", "R&D"],
    status: "Active",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Projects
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Selected work. I keep entries short: what it was, why it mattered, and
          what shipped.
        </p>
      </header>

      <ul className="grid gap-4">
        {projects.map((p) => (
          <li
            key={p.title}
            className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-base font-medium">{p.title}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {p.description}
                </p>
              </div>
              {p.status ? (
                <span className="shrink-0 rounded-full border border-zinc-200 px-2 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                  {p.status}
                </span>
              ) : null}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {p.links?.length ? (
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
                  >
                    {l.label} →
                  </a>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
