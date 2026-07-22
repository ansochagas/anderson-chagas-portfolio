import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { navigationItems } from "@/data/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#081820]/88 text-white backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="inline-flex flex-col">
              <span className="font-heading text-lg font-medium tracking-[-0.03em]">
                Anderson Chagas
              </span>
              <span className="text-sm text-white/42">
                Senior Technical Product Manager
              </span>
            </Link>

            <div className="lg:hidden">
              <ButtonLink href="/#contact" variant="secondary">
                Contact
              </ButtonLink>
            </div>
          </div>

          <nav aria-label="Primary">
            <ul className="flex flex-wrap items-center gap-2 text-sm text-white/58">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex rounded-full px-4 py-2 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="/#contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}
