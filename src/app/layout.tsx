import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Suryansh Malik", template: "%s · Suryansh Malik" },
  description:
    "ML engineer and researcher. Computer vision, geospatial AI, reinforcement learning, and explainable AI.",
  openGraph: {
    title: "Suryansh Malik",
    description: "ML engineer and researcher.",
    url: "https://surya.nsh.co.in",
    siteName: "Suryansh Malik",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-100 dark:border-zinc-800/50">
          <div className="mx-auto flex max-w-[600px] items-center justify-between px-6 py-6">
            <span className="text-xs text-zinc-400 dark:text-zinc-600">
              Suryansh Malik
            </span>
            <div className="flex gap-5">
              {[
                { label: "GitHub", href: "https://github.com/SuryaMalik" },
                { label: "LinkedIn", href: "https://linkedin.com/in/suryansh-malik" },
                { label: "Email", href: "mailto:malik.suryansh@gmail.com" },
              ].map((l) => (
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
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
