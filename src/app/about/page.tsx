import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          About
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Product manager & startup builder. I love building.
        </p>
      </header>

      <section className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="text-base font-medium">Bio</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          I’m Ando — a product manager and startup builder with 6+ years of
          experience. I like turning messy problems into shipped products.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-base font-medium">What I like building</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
            <li>Products with clear value + crisp UX</li>
            <li>AI-enabled workflows</li>
            <li>Systems, tooling, and fast iteration loops</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-base font-medium">Contact</h2>
          <div className="mt-3 space-y-2 text-sm">
            <a
              className="block font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
              href="https://github.com/Andranikniko"
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </a>
            <a
              className="block font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
