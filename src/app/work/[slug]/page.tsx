import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject } from "@/lib/projects";
import { Fade, FadeItem } from "@/components/fade";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: `${project.tagline} ${project.intro}`.slice(0, 155),
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: project.name,
      description: project.tagline,
      url: `https://surya.nsh.co.in/work/${slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-[600px] px-6 py-16 sm:py-24">
      <Fade className="flex flex-col gap-12">
        {/* Back */}
        <FadeItem>
          <Link
            href="/work"
            className="text-xs text-zinc-400 transition-colors hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-zinc-50"
          >
            ← Work
          </Link>
        </FadeItem>

        {/* Header */}
        <FadeItem className="flex flex-col gap-2">
          <div className="flex items-baseline justify-between gap-4">
            <h1 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
              {project.name}
            </h1>
            <span className="shrink-0 text-xs tabular-nums text-zinc-300 dark:text-zinc-700">
              {project.year}
            </span>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 italic">
            {project.tagline}
          </p>
        </FadeItem>

        {/* Body */}
        <FadeItem className="flex flex-col gap-4">
          <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {project.intro}
          </p>
          {project.body.map((para, i) => (
            <p
              key={i}
              className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400"
            >
              {para}
            </p>
          ))}
        </FadeItem>

        {/* Results */}
        {project.results && (
          <FadeItem className="flex flex-col gap-3">
            <span className="text-[11px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
              Results
            </span>
            <ul className="flex flex-col gap-1.5">
              {project.results.map((r) => (
                <li key={r} className="flex items-baseline gap-2.5">
                  <span className="shrink-0 text-zinc-300 dark:text-zinc-700">
                    —
                  </span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {r}
                  </span>
                </li>
              ))}
            </ul>
          </FadeItem>
        )}

        {/* Technologies */}
        <FadeItem className="flex flex-col gap-3">
          <span className="text-[11px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            Technologies
          </span>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            {project.technologies.join(" · ")}
          </p>
        </FadeItem>
      </Fade>
    </div>
  );
}
