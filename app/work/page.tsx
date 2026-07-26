import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { CaseCard } from "@/components/work/case-card";
import { publishedPortfolioCases } from "@/data/site-content";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Selected Work",
  description:
    "Selected case studies across SaaS, enterprise transformation and AI/data product prototyping.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <PageShell>
      <main id="main-content" className="flex-1 pb-24 pt-12 sm:pb-28 sm:pt-20">
        <Container className="space-y-12">
          <section className="grid gap-8 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:items-end">
            <div className="space-y-4 text-white">
              <p className="text-sm font-medium text-[#8bcfff]">Selected work</p>
              <h1 className="max-w-[14ch] text-balance text-[clamp(2.8rem,4.4vw,5.4rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                Three projects with different product and delivery demands.
              </h1>
            </div>

            <p className="max-w-[42rem] text-base leading-8 text-white/68 sm:text-lg">
              This index is intentionally concise. It helps the visitor choose a
              project quickly, while the detailed reasoning stays inside each
              full case page.
            </p>
          </section>

          <div className="space-y-6">
            {publishedPortfolioCases.map((caseStudy) => (
              <CaseCard
                key={caseStudy.slug}
                caseStudy={caseStudy}
                featured={caseStudy.slug === "bcs-sports-analytics"}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/" variant="secondary">
              Back to Home
            </ButtonLink>
            <ButtonLink href="/about" variant="secondary">
              About
            </ButtonLink>
          </div>
        </Container>
      </main>
    </PageShell>
  );
}
