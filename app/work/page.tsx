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
      <main className="flex-1 pb-24 pt-12 sm:pb-28 sm:pt-20">
        <Container className="space-y-10">
          <section className="grid gap-6 xl:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] xl:items-end">
            <div className="space-y-4 text-white">
              <p className="eyebrow text-[#8bcfff]">Case Index</p>
              <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Published case studies across product, transformation and AI.
              </h1>
            </div>

            <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              A focused selection of executive product work using real product
              evidence where possible and portfolio-safe diagrams where
              confidentiality applies.
            </p>
          </section>

          <div className="grid gap-6 lg:grid-cols-2">
            {publishedPortfolioCases.map((caseStudy) => (
              <CaseCard
                key={caseStudy.slug}
                caseStudy={caseStudy}
                featured={caseStudy.featured}
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
