import { Fade, FadeItem } from "@/components/fade";
import Link from "next/link";

const links = [
  { label: "GitHub", href: "https://github.com/SuryaMalik" },
  { label: "LinkedIn", href: "https://linkedin.com/in/suryansh-malik" },
  { label: "Email", href: "mailto:malik.suryansh@gmail.com" },
];

const philosophy = [
  {
    title: "Useful",
    body: "Designed to solve real problems rather than optimize benchmark scores.",
  },
  {
    title: "Explainable",
    body: "Understandable enough that humans can trust and improve them.",
  },
  {
    title: "Efficient",
    body: "Built with awareness of computational constraints and deployment realities.",
  },
  {
    title: "Reproducible",
    body: "Grounded in rigorous experimentation and transparent methodology.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-[600px] px-6 py-16 sm:py-24">
      <Fade className="flex flex-col gap-20">
        {/* Hero */}
        <FadeItem className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
              Suryansh Malik
            </h1>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Research Engineer building intelligent systems with Machine Learning.
            </p>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            I work at the intersection of Computer Vision, Geospatial AI,
            Reinforcement Learning, and Explainable AI. My work focuses on
            making machine learning systems more accurate, interpretable, and
            useful in real-world environments.
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-400 dark:text-zinc-500">
            Currently exploring how foundation models, geospatial intelligence,
            and on-device AI can solve practical problems at scale.
          </p>
          <div className="flex gap-5 pt-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  l.href.startsWith("mailto") ? undefined : "noopener noreferrer"
                }
                className="text-xs text-zinc-400 transition-colors hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-zinc-50"
              >
                {l.label}
              </a>
            ))}
          </div>
        </FadeItem>

        {/* Intro */}
        <FadeItem className="flex flex-col gap-4">
          <span className="text-[11px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            About
          </span>
          <div className="flex flex-col gap-3">
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              I am a Machine Learning Engineer and AI Researcher based in India.
              Over the last few years I&apos;ve worked on machine learning systems for
              biomedical signal processing, satellite image analysis, semantic
              segmentation, explainable AI, and reinforcement learning.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              My approach combines research-driven thinking with practical
              engineering. I enjoy understanding how systems work, building them
              from first principles, and turning ideas into tools that people
              can actually use.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              When I&apos;m not training models, you&apos;ll probably find me exploring new
              AI architectures, experimenting with local inference systems, or
              studying how emerging technologies can be applied outside
              traditional software domains.
            </p>
          </div>
          <Link
            href="/work"
            className="text-xs text-zinc-400 underline underline-offset-4 transition-colors hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-zinc-50"
          >
            See my work →
          </Link>
        </FadeItem>

        {/* Philosophy */}
        <FadeItem className="flex flex-col gap-4">
          <span className="text-[11px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            Philosophy
          </span>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            I believe good machine learning systems should be:
          </p>
          <div className="flex flex-col gap-3">
            {philosophy.map((p) => (
              <div key={p.title} className="flex gap-3">
                <span className="shrink-0 text-sm font-medium text-zinc-700 dark:text-zinc-300 w-28">
                  {p.title}
                </span>
                <span className="text-sm text-zinc-400 dark:text-zinc-500 leading-relaxed">
                  {p.body}
                </span>
              </div>
            ))}
          </div>
        </FadeItem>
      </Fade>
    </div>
  );
}
