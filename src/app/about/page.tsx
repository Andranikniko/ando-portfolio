import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const experience = [
  {
    role: "Head of Product",
    company: "LegitGrails",
    period: "2022 - 2025",
    description:
      "Scaled dual B2B/B2C SaaS authentication platform from $5K to $120K MRR. Led product strategy, rebranding, API launch, and expansion into Japan market.",
  },
  {
    role: "Product Lead",
    company: "Resale-X (AI spin-off)",
    period: "2024 - Present",
    description:
      "Built AI-powered item recognition and pricing tool. Signed first B2B clients across EU, US, and Japan.",
  },
  {
    role: "Product Manager & COO",
    company: "VNX.li",
    period: "2022",
    description:
      "Led KYC/AML compliance integration for tokenized investment platform. Contributed to historic launch of VNXAU (tokenized gold).",
  },
  {
    role: "Product Manager",
    company: "Yesim",
    period: "2020 - 2021",
    description:
      "Led B2B telecom SaaS GTM. Designed loyalty program and eSIM packages that increased DAU and reduced churn.",
  },
];

const skills = [
  { category: "Product Strategy", items: ["Roadmapping", "Discovery & Validation", "GTM Strategy", "Pricing & Monetization"] },
  { category: "Execution", items: ["Agile / Scrum", "Cross-functional Leadership", "Stakeholder Management", "API Product Design"] },
  { category: "Analytics", items: ["Amplitude", "Looker", "A/B Testing", "Cohort Analysis"] },
  { category: "Domain", items: ["B2B SaaS", "AI/ML Products", "FinTech / Compliance", "Marketplace / E-commerce"] },
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <header className="animate-fade-in space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-50/80 px-3.5 py-1.5 text-xs font-medium text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
          Senior Product Manager
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          About Me
        </h1>
        <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          I&apos;m Ando — a product manager and startup builder with 6+ years of
          experience turning complex problems into revenue-generating products.
          I work best at the intersection of strategy, design, and data.
        </p>
      </header>

      <section className="animate-fade-in-up delay-100">
        <div className="rounded-2xl border border-zinc-200/80 bg-white p-7 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/50">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h2 className="text-base font-semibold tracking-tight">
              What I Do
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                0 &rarr; 1 Products
              </div>
              <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                Discovery, validation, MVP, and launch for new product lines
              </p>
            </div>
            <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Scale & Growth
              </div>
              <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                Revenue scaling, retention loops, pricing, and market expansion
              </p>
            </div>
            <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                AI & Data Products
              </div>
              <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                ML-powered tools, API products, and data-driven prioritization
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="animate-fade-in-up delay-200">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        </div>
        <div className="space-y-4">
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="group rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/50"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    {exp.company}
                  </p>
                </div>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                  {exp.period}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="animate-fade-in-up delay-300">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold tracking-tight">Skills & Tools</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/50"
            >
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="animate-fade-in-up delay-400">
        <div className="rounded-2xl border border-zinc-200/80 bg-white p-7 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/50">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-base font-semibold tracking-tight">
              Get In Touch
            </h2>
          </div>
          <p className="mb-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            I&apos;m open to new opportunities and always happy to chat about
            product, startups, or interesting problems to solve.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/Andranikniko"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-700"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-700"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
