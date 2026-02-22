"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`relative px-2 py-1 text-sm font-medium transition-colors ${
        isActive
          ? "text-zinc-900 dark:text-zinc-50"
          : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute -bottom-[1.125rem] left-0 right-0 h-0.5 rounded-full bg-zinc-900 dark:bg-zinc-50" />
      )}
    </Link>
  );
}
