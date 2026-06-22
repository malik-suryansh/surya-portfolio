import type { Metadata } from "next";
import { Fade, FadeItem } from "@/components/fade";

export const metadata: Metadata = { title: "Research" };

const interests = [
  "Computer Vision",
  "Explainable Artificial Intelligence",
  "Reinforcement Learning",
  "Foundation Models",
  "Geospatial Intelligence",
  "Biomedical Signal Processing",
  "Human-AI Interaction",
  "Edge AI",
];

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-[600px] px-6 py-16 sm:py-24">
      <Fade className="flex flex-col gap-14">
        {/* Header */}
        <FadeItem className="flex flex-col gap-2">
          <h1 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
            Research
          </h1>
          <p className="text-sm text-zinc-400 dark:text-zinc-500 max-w-sm">
            I am particularly interested in building machine learning systems
            that are not only effective but also interpretable,
            resource-efficient, and deployable in real-world settings.
          </p>
        </FadeItem>

        {/* Interests */}
        <FadeItem className="flex flex-col gap-3">
          <span className="text-[11px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            Research Interests
          </span>
          <div className="flex flex-col gap-1.5">
            {interests.map((interest) => (
              <div key={interest} className="flex items-baseline gap-2.5">
                <span className="shrink-0 text-zinc-300 dark:text-zinc-700">
                  —
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {interest}
                </span>
              </div>
            ))}
          </div>
        </FadeItem>

        {/* Publications */}
        <FadeItem className="flex flex-col gap-4">
          <span className="text-[11px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            Publications
          </span>
          <div className="flex flex-col gap-3 border-b border-zinc-100 pb-6 dark:border-zinc-800">
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                XAI-Driven sEMG Feature Analysis for Hand Gestures
              </span>
              <span className="shrink-0 text-xs tabular-nums text-zinc-300 dark:text-zinc-700">
                2024
              </span>
            </div>
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              2024 Third International Conference on Power, Control and
              Computing Technologies (ICPC2T)
            </p>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              This work investigates the use of Explainable AI techniques to
              understand machine learning models used for hand gesture
              recognition from surface electromyography signals. The research
              combines feature engineering, ensemble learning, and
              interpretability methods to create transparent classification
              systems for biomedical applications.
            </p>
          </div>
        </FadeItem>
      </Fade>
    </div>
  );
}
