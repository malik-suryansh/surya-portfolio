import type { Metadata } from "next";
import { Fade, FadeItem } from "@/components/fade";

export const metadata: Metadata = { title: "Now" };

const items = [
  {
    label: "Research",
    body: "Investigating computer vision systems for satellite imagery understanding and semantic segmentation.",
  },
  {
    label: "Building",
    body: "AI-powered tools and workflows that combine machine learning, geospatial intelligence, and automation.",
  },
  {
    label: "Learning",
    body: "Foundation models, multimodal systems, agentic workflows, and efficient local inference.",
  },
  {
    label: "Exploring",
    body: "The intersection of AI, hardware acceleration, and edge deployment.",
  },
];

export default function NowPage() {
  return (
    <div className="mx-auto max-w-[600px] px-6 py-16 sm:py-24">
      <Fade className="flex flex-col gap-12">
        <FadeItem className="flex flex-col gap-2">
          <h1 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
            Now
          </h1>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            A snapshot of what I&apos;m currently focused on.
          </p>
        </FadeItem>

        <FadeItem className="flex flex-col gap-5">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex gap-6 border-b border-zinc-100 pb-5 last:border-0 last:pb-0 dark:border-zinc-800"
            >
              <span className="w-20 shrink-0 text-xs font-medium text-zinc-400 dark:text-zinc-600 pt-0.5">
                {item.label}
              </span>
              <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {item.body}
              </p>
            </div>
          ))}
        </FadeItem>
      </Fade>
    </div>
  );
}
