import Link from "next/link";

import { SiteNav } from "@/components/layout/site-nav";
import { Container } from "@/components/ui/container";

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
          </div>

          <SiteNav />
        </div>
      </Container>
    </header>
  );
}
