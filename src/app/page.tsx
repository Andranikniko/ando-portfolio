import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950 sm:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(600px_circle_at_20%_10%,rgba(99,102,241,0.15),transparent_60%),radial-gradient(600px_circle_at_70%_40%,rgba(16,185,129,0.10),transparent_60%)]" />
        <div className="relative space-y-4">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Product manager · startup builder
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            I love building products.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Here are a few projects I’ve shipped and a couple I’m currently
            exploring.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-white"
            >
              View projects
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              About me
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/projects"
          className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
        >
          <h2 className="text-lg font-medium">Projects</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Selected work with context, links, and outcomes.
          </p>
          <p className="mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-400">
            Browse →
          </p>
        </Link>

        <Link
          href="/about"
          className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
        >
          <h2 className="text-lg font-medium">About</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Short bio + focus + contact links.
          </p>
          <p className="mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-400">
            Learn more →
          </p>
        </Link>
      </section>
    </div>
  );
}
