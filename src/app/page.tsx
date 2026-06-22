"use client";

import { motion, type Variants } from "framer-motion";

const research = [
  {
    name: "Building Footprint Segmentation",
    description: "ResNet-50 + transfer learning on satellite imagery, 89% accuracy, 80% IoU",
    year: "2024",
    url: null,
  },
  {
    name: "RL-Driven sEMG Denoising",
    description: "DQN + wavelet thresholding for prosthetic control signal processing",
    year: "2024",
    url: null,
  },
  {
    name: "XAI-Driven sEMG Hand Gesture Analysis",
    description: "Ensemble classifiers + LIME explainability — published IEEE ICPC2T 2024",
    year: "2023",
    url: "https://ieeexplore.ieee.org/",
  },
];

const projects = [
  {
    name: "OpenClaude",
    description: "Open-source AI coding agent with 200+ model support",
    year: "2025",
    url: "https://github.com/Gitlawb/openclaude",
  },
  {
    name: "POS Software",
    description: "Java Swing + MySQL point-of-sale system for retail",
    year: "2022",
    url: null,
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/SuryaMalik" },
  { label: "LinkedIn", href: "https://linkedin.com/in/suryansh-malik" },
  { label: "Email", href: "mailto:malik.suryansh@gmail.com" },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const row: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function ProjectRow({
  name,
  description,
  year,
  url,
}: {
  name: string;
  description: string;
  year: string;
  url: string | null;
}) {
  return (
    <motion.div
      variants={row}
      className="flex items-baseline justify-between gap-4 border-b border-zinc-100 py-2.5 last:border-0 dark:border-zinc-800"
    >
      <div className="flex min-w-0 items-baseline gap-3">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-500 dark:text-zinc-50 dark:hover:text-zinc-400"
          >
            {name}
          </a>
        ) : (
          <span className="shrink-0 text-sm font-medium text-zinc-900 dark:text-zinc-50">
            {name}
          </span>
        )}
        <span className="truncate text-sm text-zinc-400 dark:text-zinc-500">
          {description}
        </span>
      </div>
      <span className="shrink-0 text-xs tabular-nums text-zinc-300 dark:text-zinc-700">
        {year}
      </span>
    </motion.div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={row} className="flex flex-col gap-3">
      <span className="text-[11px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
        {title}
      </span>
      <div className="flex flex-col">{children}</div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-[600px] px-6 py-20 sm:py-32">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-14"
      >
        {/* Intro */}
        <motion.div variants={row} className="flex flex-col gap-2.5">
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
            Suryansh Malik
          </span>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            ML engineer and researcher. B.Tech AI & ML, Manipal University.
            Research intern at MNIT Jaipur — computer vision, biomedical signal
            processing, explainable AI. Published at IEEE ICPC2T 2024.
          </p>
        </motion.div>

        {/* Research */}
        <Section title="Research">
          {research.map((p) => (
            <ProjectRow key={p.name} {...p} />
          ))}
        </Section>

        {/* Projects */}
        <Section title="Projects">
          {projects.map((p) => (
            <ProjectRow key={p.name} {...p} />
          ))}
        </Section>

        {/* Links */}
        <motion.div variants={row} className="flex gap-5">
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
        </motion.div>
      </motion.div>
    </main>
  );
}
