"use client";

import { useEffect, useId, useRef, useState } from "react";
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

  return <SiteNavContent key={pathname} pathname={pathname} />;
}

function SiteNavContent({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const desktopLinks = navigationItems.map((item) => {
    const active = isActiveLink(pathname, item.href);

    return (
      <li key={item.label}>
        <Link
          href={item.href}
          aria-current={active ? "page" : undefined}
          className={`inline-flex rounded-full px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8bcfff]/70 ${
            active
              ? "bg-white/[0.08] text-white"
              : "text-white/68 hover:bg-white/[0.06] hover:text-white"
          }`}
        >
          {item.label}
        </Link>
      </li>
    );
  });

  return (
    <nav ref={navRef} aria-label="Primary" className="relative shrink-0">
      <ul className="hidden items-center gap-2 text-sm lg:flex">{desktopLinks}</ul>

      <div className="lg:hidden">
        <button
          ref={buttonRef}
          type="button"
          aria-controls={panelId}
          aria-expanded={open}
          aria-haspopup="menu"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/14 bg-[#143343] px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-colors hover:border-[#8bcfff]/34 hover:bg-[#194154] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8bcfff]/70"
        >
          Menu
        </button>

        {open ? (
          <div
            id={panelId}
            role="menu"
            aria-label="Mobile menu"
            className="absolute right-0 top-full z-50 mt-3 w-[min(20rem,calc(100vw-2.5rem))] overflow-hidden rounded-[1.6rem] border border-white/12 bg-[#0b1f29]/98 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.38)] backdrop-blur-xl"
          >
            <ul className="grid gap-1">
              {navigationItems.map((item) => {
                const active = isActiveLink(pathname, item.href);

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      role="menuitem"
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={`flex min-h-11 items-center rounded-[1rem] px-4 py-3 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8bcfff]/70 ${
                        active
                          ? "bg-white/[0.08] text-white"
                          : "text-white/84 hover:bg-white/[0.05] hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
