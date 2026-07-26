"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/data/site-content";

function isActiveLink(pathname: string, href: string) {
  if (href === "/work") {
    return pathname === "/work" || pathname.startsWith("/work/");
  }

  if (href === "/about") {
    return pathname === "/about";
  }

  return false;
}

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary">
      <ul className="flex flex-wrap items-center gap-2 text-sm text-white/62">
        {navigationItems.map((item) => {
          const active = isActiveLink(pathname, item.href);

          return (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex rounded-full px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8bcfff]/70 ${
                  active
                    ? "bg-white/[0.08] text-white"
                    : "hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
