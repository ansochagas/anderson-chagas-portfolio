import type { Metadata } from "next";

import { ExperienceEditorial } from "@/components/home/experience-editorial";
import { ExpertiseBlocks } from "@/components/home/expertise-blocks";
import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import {
  aboutSkillBlocks,
  experienceHighlights,
  professionalSummary,
} from "@/data/site-content";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Executive profile for Anderson Chagas, focused on product strategy, technical delivery, AI and digital transformation.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <main className="flex-1 pb-24 pt-12 sm:pb-28 sm:pt-20">
        <Container className="space-y-12">
          <section className="grid gap-10 xl:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] xl:items-start">
            <div className="space-y-6 text-white">
              <p className="eyebrow text-[#8bcfff]">About</p>
              <h1 className="max-w-[14ch] text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Product leadership grounded in technology, process and delivery.
              </h1>
              <div className="max-w-[39rem] space-y-5 text-base leading-8 text-white/72 sm:text-lg">
                {professionalSummary.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>
                  I am especially effective where product ambiguity intersects
                  with enterprise complexity, cross-functional alignment and
                  technical implementation trade-offs.
                </p>
              </div>
            </div>

            <ExpertiseBlocks blocks={aboutSkillBlocks} />
          </section>

          <section className="space-y-8">
            <div className="grid gap-6 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:items-end">
              <div className="space-y-4 text-white">
                <p className="eyebrow text-[#c6ccff]">Experience</p>
                <h2 className="max-w-[14ch] text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl">
                  A path shaped by systems, products and transformation work.
                </h2>
              </div>

              <p className="max-w-[42rem] text-base leading-8 text-white/68 sm:text-lg">
                Experience across enterprise transformation, SaaS product
                leadership and process-oriented consulting, always with strong
                proximity to engineering and implementation detail.
              </p>
            </div>

            <ExperienceEditorial entries={experienceHighlights} />
          </section>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/work" variant="secondary">
              View Selected Work
            </ButtonLink>
            <ButtonLink href="/#contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
        </Container>
      </main>
    </PageShell>
  );
}
