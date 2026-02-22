import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Fun projects",
};

export default function FunProjectsPage() {
  const fun = projects.filter((p) => p.kind === "fun");

  return (
    <div className="space-y-10">
      <header className="animate-fade-in space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50/80 px-3.5 py-1.5 text-xs font-medium text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-300">
          Side experiments
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Fun Projects
        </h1>
        <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Quick builds, weird ideas, and learning loops. These are the things I
          build for fun outside of work.
        </p>
      </header>

      {fun.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-12 text-center dark:border-zinc-700 dark:bg-zinc-900/50">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            No fun projects yet. Stay tuned.
          </p>
        </div>
      ) : (
        <ul className="animate-fade-in-up delay-100 grid gap-4 sm:grid-cols-2">
          {fun.map((p) => (
            <li key={p.slug} className="h-full">
              <Link
                href={`/projects/${p.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h2 className="text-base font-semibold tracking-tight">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {p.oneLiner}
                    </p>
                  </div>
                  {p.status && (
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                        p.status === "Active"
                          ? "status-active"
                          : p.status === "Shipped"
                            ? "status-shipped"
                            : "status-paused"
                      }`}
                    >
                      {p.status === "Active" && (
                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      )}
                      {p.status}
                    </span>
                  )}
                </div>

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

                <div className="mt-auto pt-4 flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400">
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
      )}
    </div>
  );
}
