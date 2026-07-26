import Link from "next/link";

import { SiteNav } from "@/components/layout/site-nav";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#081820]/88 text-white backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="inline-flex min-w-0 flex-1 flex-col">
            <span className="font-heading text-lg font-medium tracking-[-0.03em]">
              Anderson Chagas
            </span>
            <span className="text-sm text-white/56">
              Senior Technical Product Manager
            </span>
          </Link>
          <SiteNav />
        </div>
      </Container>
    </header>
  );
}
