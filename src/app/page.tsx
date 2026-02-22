import Link from "next/link";
import { projects } from "@/lib/projects";

const metrics = [
  { value: "$120K", label: "MRR Scaled", sublabel: "from $5K in 2 years" },
  { value: "6+", label: "Years in Product", sublabel: "B2B SaaS & Startups" },
  { value: "7+", label: "Products Shipped", sublabel: "across 4 industries" },
  { value: "3", label: "Markets Entered", sublabel: "EU, US, Japan" },
];

function StatusBadge({ status }: { status?: string }) {
  if (!status) return null;
  const cls =
    status === "Active"
      ? "status-active"
      : status === "Shipped"
        ? "status-shipped"
        : "status-paused";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${cls}`}
    >
      {status === "Active" && (
        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
      )}
      {status}
    </span>
  );
}

export default function Home() {
  const featured = projects
    .filter((p) => p.kind !== "fun" && p.results?.length)
    .slice(0, 3);

  return (
    <div className="space-y-20">
      <section className="animate-fade-in relative">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/50">
          <div className="pointer-events-none absolute inset-0 animate-gradient [background:linear-gradient(135deg,rgba(79,70,229,0.08)_0%,rgba(16,185,129,0.06)_25%,rgba(139,92,246,0.06)_50%,rgba(6,182,212,0.05)_75%,rgba(79,70,229,0.08)_100%)]" />
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />

          <div className="relative px-8 py-14 sm:px-12 sm:py-20">
            <div className="animate-fade-in-up delay-100 mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-50/80 px-3.5 py-1.5 text-xs font-medium text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Open to opportunities
            </div>

            <h1 className="animate-fade-in-up delay-200 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              I scale products{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400">
                from zero to revenue.
              </span>
            </h1>

            <p className="animate-fade-in-up delay-300 mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400">
              Senior Product Manager with 6+ years building B2B SaaS, AI tools,
              and marketplace products. Shipped platforms that scaled to $120K
              MRR, launched in 3 markets, and served enterprise clients like
              FarFetch and British Red Cross.
            </p>

            <div className="animate-fade-in-up delay-400 mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-900/10 transition-all hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-900/20 dark:bg-zinc-50 dark:text-zinc-900 dark:shadow-zinc-50/5 dark:hover:bg-white"
              >
                View case studies
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition-all hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
              >
                About me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="animate-fade-in-up delay-300">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="metric-card rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/50 animate-fade-in-up"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
                {m.value}
              </div>
              <div className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {m.label}
              </div>
              <div className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-500">
                {m.sublabel}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="animate-fade-in-up delay-400">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Featured Work
            </h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Products I've led from concept to revenue
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700 sm:inline-flex dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            View all &rarr;
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group relative flex flex-col rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {p.title}
                </h3>
                <StatusBadge status={p.status} />
              </div>

              <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {p.oneLiner}
              </p>

              {p.results && p.results.length > 0 && (
                <div className="mt-4 rounded-xl bg-zinc-50 p-3 dark:bg-zinc-800/50">
                  <p className="text-xs font-medium text-zinc-900 dark:text-zinc-200">
                    {p.results[0]}
                  </p>
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400">
                Read case study
                <svg
                  className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/projects"
            className="text-sm font-medium text-indigo-600 dark:text-indigo-400"
          >
            View all projects &rarr;
          </Link>
        </div>
      </section>

      <section className="animate-fade-in-up delay-500">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/fun-projects"
            className="group rounded-2xl border border-zinc-200/80 bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold tracking-tight">Side Projects</h2>
            <p className="mt-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Quick builds and experiments outside of work.
            </p>
            <p className="mt-3 text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Explore &rarr;
            </p>
          </Link>

          <Link
            href="/about"
            className="group rounded-2xl border border-zinc-200/80 bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold tracking-tight">About Me</h2>
            <p className="mt-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Background, skills, and how to get in touch.
            </p>
            <p className="mt-3 text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Learn more &rarr;
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
