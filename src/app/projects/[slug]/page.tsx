import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProject(resolvedParams.slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.oneLiner,
  };
}

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

function SectionCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-zinc-200/80 bg-white p-7 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/50">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
          {icon}
        </div>
        <h2 className="text-base font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await params;
  const project = getProject(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="animate-fade-in space-y-5">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Back to projects
        </Link>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {project.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {project.oneLiner}
            </p>
          </div>
          <StatusBadge status={project.status} />
        </div>
      </div>

      <section className="animate-fade-in-up delay-100 grid gap-3 sm:grid-cols-3">
        {project.role && (
          <div className="metric-card rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/50">
            <div className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Role
            </div>
            <div className="mt-1.5 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              {project.role}
            </div>
          </div>
        )}
        {project.timeline && (
          <div className="metric-card rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/50">
            <div className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Timeline
            </div>
            <div className="mt-1.5 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              {project.timeline}
            </div>
          </div>
        )}
        <div className="metric-card rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/50">
          <div className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Domain
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="animate-fade-in-up delay-200">
        <SectionCard
          title="Overview"
          icon={
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        >
          <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>

          {project.links?.length ? (
            <div className="mt-5 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300"
                >
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}
        </SectionCard>
      </div>

      {project.problem && (
        <div className="animate-fade-in-up delay-300">
          <SectionCard
            title="Problem"
            icon={
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            }
          >
            <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              {project.problem}
            </p>
          </SectionCard>
        </div>
      )}

      {project.approach?.length ? (
        <div className="animate-fade-in-up delay-300">
          <SectionCard
            title="Approach"
            icon={
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            }
          >
            <ul className="space-y-3">
              {project.approach.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-xs font-bold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>
      ) : null}

      {project.results?.length ? (
        <div className="animate-fade-in-up delay-300">
          <SectionCard
            title="Results"
            icon={
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
          >
            <ul className="space-y-3">
              {project.results.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>
      ) : null}

      {project.screenshots?.length ? (
        <div className="animate-fade-in-up delay-300">
          <SectionCard
            title="Screenshots"
            icon={
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {project.screenshots.map((s) => (
                <a
                  key={s.src}
                  href={s.src}
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-50 transition-all hover:shadow-lg dark:border-zinc-800/80 dark:bg-zinc-800/30"
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={1600}
                    height={900}
                    className="h-auto w-full object-cover transition group-hover:scale-[1.02]"
                  />
                </a>
              ))}
            </div>
            <p className="mt-3 text-xs text-zinc-400 dark:text-zinc-500">
              Click to open full size
            </p>
          </SectionCard>
        </div>
      ) : null}

      {project.highlights?.length ? (
        <div className="animate-fade-in-up delay-300">
          <SectionCard
            title="Highlights"
            icon={
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            }
          >
            <ul className="space-y-2">
              {project.highlights.map((item, i) => (
                <li key={i} className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {item}
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>
      ) : null}
    </div>
  );
}
