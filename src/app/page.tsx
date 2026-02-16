import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Product portfolio
        </h1>
        <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          A place to collect projects, experiments, and product thinking.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/projects"
          className="rounded-2xl border border-zinc-200 bg-white p-6 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
        >
          <h2 className="text-lg font-medium">Projects</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Selected work with short context, links, and outcomes.
          </p>
        </Link>

        <Link
          href="/about"
          className="rounded-2xl border border-zinc-200 bg-white p-6 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
        >
          <h2 className="text-lg font-medium">About</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            A quick bio, interests, and how to reach me.
          </p>
        </Link>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
        <p>
          Next up: add real projects (title, problem, role, links) + a short
          timeline.
        </p>
      </section>
    </div>
  );
}
