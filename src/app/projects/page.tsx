import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  status?: "Active" | "Shipped" | "Paused";
};

const projects: Project[] = [
  {
    title: "Ando Portfolio",
    description: "This site — a lightweight place to publish product work.",
    tags: ["Next.js", "Tailwind"],
    status: "Active",
  },
  {
    title: "Add your next project here",
    description:
      "Replace with a real entry: problem, your role, what shipped, and impact.",
    tags: ["Template"],
    status: "Paused",
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
          </li>
        ))}
      </ul>
    </div>
  );
}
