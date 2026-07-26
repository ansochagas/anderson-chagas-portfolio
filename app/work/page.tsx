import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
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
          <section className="space-y-4 text-white">
            <h1 className="max-w-[15ch] text-balance text-[clamp(2.8rem,4.4vw,5.4rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
              Three product cases. Different contexts, constraints and
              decisions.
            </h1>
            <p className="max-w-[48rem] text-base leading-8 text-white/68 sm:text-lg">
              A SaaS built from zero, an enterprise service transformation and
              an AI-enabled intelligence prototype.
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
        </Container>
      </main>
    </PageShell>
  );
}
