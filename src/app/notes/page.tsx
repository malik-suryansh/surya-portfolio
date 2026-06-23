import type { Metadata } from "next";
import { notes } from "@/lib/notes";
import { Fade, FadeItem } from "@/components/fade";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Notes on machine learning, deep learning, and AI by Suryansh Malik — experiments, observations, and lessons from building real systems.",
  alternates: { canonical: "/notes" },
};

export default function NotesPage() {
  return (
    <div className="mx-auto max-w-[600px] px-6 py-16 sm:py-24">
      <Fade className="flex flex-col gap-12">
        <FadeItem className="flex flex-col gap-2">
          <h1 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
            Notes
          </h1>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            Thoughts, experiments, and lessons learned while building machine
            learning systems.
          </p>
        </FadeItem>

        <FadeItem className="flex flex-col gap-8">
          {notes.map((note) => (
            <div
              key={note.slug}
              className="flex flex-col gap-2 border-b border-zinc-100 pb-8 last:border-0 last:pb-0 dark:border-zinc-800"
            >
              <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                {note.title}
              </h2>
              <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {note.body}
              </p>
            </div>
          ))}
        </FadeItem>
      </Fade>
    </div>
  );
}
