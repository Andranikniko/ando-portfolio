import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "Ando — Product Portfolio",
    template: "%s · Ando",
  },
  description: "Ando's product portfolio — projects, experiments, and notes.",
};

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh bg-zinc-50 font-sans text-zinc-900 antialiased dark:bg-black dark:text-zinc-50`}
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col px-6">
          <header className="sticky top-0 z-10 -mx-6 border-b border-zinc-200 bg-zinc-50/80 px-6 py-5 backdrop-blur dark:border-zinc-800 dark:bg-black/60">
            <div className="flex items-center justify-between">
              <Link href="/" className="font-medium tracking-tight">
                Ando
              </Link>
              <nav className="flex items-center gap-5">
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/fun-projects">Fun</NavLink>
                <NavLink href="/about">About</NavLink>
              </nav>
            </div>
          </header>

          <main className="py-12">{children}</main>

          <footer className="border-t border-zinc-200 py-10 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            <div className="flex items-center justify-between gap-4">
              <span>© {new Date().getFullYear()} Ando</span>
              <span className="text-zinc-400 dark:text-zinc-600">Built with Next.js</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
