import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  const main = projects.filter((p) => p.kind !== "fun");

  const byYear = main.reduce<Record<number, typeof main>>((acc, p) => {
    const year = p.year ?? 0;
    acc[year] ||= [];
    acc[year].push(p);
    return acc;
  }, {});

  // Newest first so 2020 ends up at the bottom (timeline feel)
  const years = Object.keys(byYear)
    .map((y) => Number(y))
    .sort((a, b) => b - a);

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Projects
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Selected work. Ordered by year (newest → oldest).
        </p>
      </header>

      <div className="space-y-12">
        {years.map((year) => (
          <section key={year} className="space-y-4">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                {year === 0 ? "Other" : year}
              </h2>
              <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {byYear[year]
                .slice()
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((p) => (
                  <li key={p.slug} className="h-full">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="group block h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-base font-medium tracking-tight">
                            {p.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                            {p.oneLiner}
                          </p>
                        </div>
                        <div className="flex shrink-0 flex-col items-end gap-2">
                          {p.status ? (
                            <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:bg-black/30 dark:text-zinc-400">
                              {p.status}
                            </span>
                          ) : null}
                          {p.timeline ? (
                            <span className="text-xs text-zinc-500 dark:text-zinc-400">
                              {p.timeline}
                            </span>
                          ) : null}
                        </div>
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

                      <p className="mt-5 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        Open →
                      </p>
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
