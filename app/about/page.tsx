import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionIntro } from "@/components/ui/section-intro";
import { professionalSummary, whatIBring } from "@/data/site-content";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Concise professional profile for Anderson Chagas, focused on product strategy, technical collaboration and AI/automation opportunities.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <main className="flex-1 pb-24 pt-12 sm:pb-28 sm:pt-20">
        <Container className="space-y-8">
          <section className="surface-card rounded-[2rem] p-7 sm:p-9 lg:p-10">
            <SectionIntro
              eyebrow="About"
              title="Product leadership with technical depth."
              description="I work at the intersection of business and engineering, shaping product direction and turning complex requirements into buildable solutions."
              headingLevel="h1"
            />

            <div className="mt-8 max-w-4xl space-y-5 text-[1.02rem] leading-8 text-ink/78">
              {professionalSummary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-3">
            {whatIBring.map((item) => (
              <article
                key={item.title}
                className="surface-card rounded-[1.6rem] p-6"
              >
                <p className="eyebrow text-muted">Core Area</p>
                <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-ink/72">
                  {item.description}
                </p>
              </article>
            ))}
          </section>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/work" variant="ghost">
              View Selected Work
            </ButtonLink>
            <ButtonLink href="/#contact" variant="ghost">
              Contact
            </ButtonLink>
          </div>
        </Container>
      </main>
    </PageShell>
  );
}
