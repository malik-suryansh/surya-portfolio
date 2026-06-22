import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { Fade, FadeItem } from "@/components/fade";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-[600px] px-6 py-16 sm:py-24">
      <Fade className="flex flex-col gap-12">
        <FadeItem className="flex flex-col gap-2">
          <h1 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
            Selected Work
          </h1>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            A collection of projects spanning computer vision, reinforcement
            learning, geospatial intelligence, and software engineering.
          </p>
        </FadeItem>

        <FadeItem className="flex flex-col">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group flex items-baseline justify-between gap-4 border-b border-zinc-100 py-3 last:border-0 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900/50 -mx-3 px-3 rounded transition-colors"
            >
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="text-sm font-medium text-zinc-900 transition-colors group-hover:text-zinc-600 dark:text-zinc-50 dark:group-hover:text-zinc-300">
                  {p.name}
                </span>
                <span className="truncate text-xs text-zinc-400 dark:text-zinc-500">
                  {p.tagline}
                </span>
              </div>
              <span className="shrink-0 text-xs tabular-nums text-zinc-300 dark:text-zinc-700">
                {p.year}
              </span>
            </Link>
          ))}
        </FadeItem>
      </Fade>
    </div>
  );
}
