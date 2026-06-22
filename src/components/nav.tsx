"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/research", label: "Research" },
  { href: "/notes", label: "Notes" },
  { href: "/now", label: "Now" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-zinc-100 bg-background/80 backdrop-blur-sm dark:border-zinc-800/50">
      <nav className="mx-auto flex max-w-[600px] items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-500 dark:text-zinc-50 dark:hover:text-zinc-400"
        >
          Suryansh Malik
        </Link>
        <div className="flex items-center gap-6">
          {navLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs transition-colors ${
                  active
                    ? "text-zinc-900 dark:text-zinc-50"
                    : "text-zinc-400 hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-zinc-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
