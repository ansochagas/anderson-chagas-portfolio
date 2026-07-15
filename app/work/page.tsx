import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionIntro } from "@/components/ui/section-intro";
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
        <Container>
          <SectionIntro
            eyebrow="Case Index"
            title="Three published case studies across product, transformation and AI/data prototyping."
            description="A focused set of public cases using real product evidence or portfolio-safe diagrams where confidentiality applies."
            headingLevel="h1"
            invert
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {publishedPortfolioCases.map((caseStudy) => (
              <CaseCard
                key={caseStudy.slug}
                caseStudy={caseStudy}
                featured={caseStudy.featured}
              />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/" variant="ghost">
              Back to Home
            </ButtonLink>
            <ButtonLink href="/about" variant="ghost">
              About
            </ButtonLink>
          </div>
        </Container>
      </main>
    </PageShell>
  );
}
