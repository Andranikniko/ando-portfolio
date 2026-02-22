import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
};

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

export default function ProjectsPage() {
  const main = projects.filter((p) => p.kind !== "fun");

  const byYear = main.reduce<Record<number, typeof main>>((acc, p) => {
    const year = p.year ?? 0;
    acc[year] ||= [];
    acc[year].push(p);
    return acc;
  }, {});

  const years = Object.keys(byYear)
    .map((y) => Number(y))
    .sort((a, b) => b - a);

  return (
    <div className="space-y-12">
      <header className="animate-fade-in space-y-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          A timeline of products I&apos;ve led, scaled, and shipped — from B2B
          SaaS platforms to AI-powered tools.
        </p>
      </header>

      <div className="space-y-14">
        {years.map((year) => (
          <section key={year} className="animate-fade-in-up space-y-5">
            <div className="flex items-center gap-4">
              <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-sm font-bold dark:bg-zinc-800">
                  {year === 0 ? "?" : String(year).slice(-2)}
                </span>
                {year === 0 ? "Other" : year}
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-zinc-200 to-transparent dark:from-zinc-800" />
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {byYear[year]
                .slice()
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((p) => (
                  <li key={p.slug} className="h-full">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="text-base font-semibold tracking-tight">
                            {p.title}
                          </h3>
                          {p.role && (
                            <p className="mt-0.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                              {p.role}
                            </p>
                          )}
                        </div>
                        <div className="flex shrink-0 flex-col items-end gap-1.5">
                          <StatusBadge status={p.status} />
                          {p.timeline && (
                            <span className="text-xs text-zinc-400 dark:text-zinc-500">
                              {p.timeline}
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                        {p.oneLiner}
                      </p>

                      {p.results && p.results.length > 0 && (
                        <div className="mt-3 rounded-xl bg-zinc-50 p-3 dark:bg-zinc-800/50">
                          <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                            {p.results[0]}
                          </p>
                        </div>
                      )}

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        View details
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
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
