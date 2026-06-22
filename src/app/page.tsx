"use client";

import { motion, type Variants } from "framer-motion";

const projects = [
  {
    name: "OpenClaude",
    description: "Open-source AI coding agent with 200+ model support",
    url: "https://github.com/Gitlawb/openclaude",
    year: "2025",
  },
  {
    name: "Lepton Dashboard",
    description: "Excel + Python automation suite for engineering workflows",
    url: null,
    year: "2025",
  },
  {
    name: "NVTR",
    description: "Excel to Autodesk Inventor automation",
    url: null,
    year: "2026",
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/Gitlawb" },
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
            Suryansh
          </span>
          <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-sm">
            Software engineer and builder. I work on tools that make technical
            work faster and more reliable.
          </p>
        </motion.div>

        {/* Work */}
        <motion.div variants={row} className="flex flex-col gap-3">
          <span className="text-[11px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            Work
          </span>
          <div className="flex flex-col">
            {projects.map((p) => (
              <motion.div
                key={p.name}
                variants={row}
                className="flex items-baseline justify-between gap-4 border-b border-zinc-100 py-2.5 last:border-0 dark:border-zinc-800"
              >
                <div className="flex min-w-0 items-baseline gap-3">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-500 dark:text-zinc-50 dark:hover:text-zinc-400"
                    >
                      {p.name}
                    </a>
                  ) : (
                    <span className="shrink-0 text-sm font-medium text-zinc-900 dark:text-zinc-50">
                      {p.name}
                    </span>
                  )}
                  <span className="truncate text-sm text-zinc-400 dark:text-zinc-500">
                    {p.description}
                  </span>
                </div>
                <span className="shrink-0 text-xs tabular-nums text-zinc-300 dark:text-zinc-700">
                  {p.year}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        <motion.div variants={row} className="flex gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel={l.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
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
