import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { DetailedCasePage } from "@/components/work/detailed-case-page";
import { getDetailedCaseBySlug } from "@/data/case-content";
import {
  casePageSections,
  getPublishedCaseBySlug,
  publishedPortfolioCases,
} from "@/data/site-content";
import { createPageMetadata } from "@/lib/site-metadata";

type CasePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publishedPortfolioCases.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getPublishedCaseBySlug(slug);
  const detailedCase = getDetailedCaseBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Not Found",
    };
  }

  return createPageMetadata({
    title: caseStudy.title,
    description: detailedCase?.subtitle ?? caseStudy.summary,
    path: `/work/${slug}`,
  });
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const caseStudy = getPublishedCaseBySlug(slug);
  const detailedCase = getDetailedCaseBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const nextCase = detailedCase
    ? getPublishedCaseBySlug(detailedCase.nextCaseSlug)
    : undefined;

  return (
    <PageShell>
      {detailedCase ? (
        <DetailedCasePage
          caseStudy={caseStudy}
          detail={detailedCase}
          nextCase={nextCase}
        />
      ) : (
        <main className="flex-1 pb-24 pt-12 sm:pb-28 sm:pt-20">
          <Container className="grid gap-6 lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)]">
            <aside className="surface-card rounded-[2rem] p-7 sm:p-8">
              <p className="eyebrow text-muted">{caseStudy.category}</p>
              <h1 className="text-balance mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-5xl">
                {caseStudy.title}
              </h1>
              <p className="mt-6 text-base leading-8 text-ink/74 sm:text-lg">
                {caseStudy.summary}
              </p>

              <div className="mt-8 rounded-[1.5rem] border border-line bg-page-soft/70 p-5">
                <p className="eyebrow text-muted">Status</p>
                <p className="mt-4 text-lg font-medium leading-7 text-ink">
                  {caseStudy.status}
                </p>
                <p className="mt-3 text-sm leading-6 text-ink/62">
                  {caseStudy.placeholderNote}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/work" variant="ghost">
                  Back to Work
                </ButtonLink>
                <ButtonLink href="/#contact" variant="ghost">
                  Contact
                </ButtonLink>
              </div>
            </aside>

            <section className="surface-card rounded-[2rem] p-7 sm:p-8">
              <p className="eyebrow text-muted">Case Framework</p>
              <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-4xl">
                Content blocks already prepared for the full write-up.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-ink/72 sm:text-lg">
                The page structure is ready so each case can be written with the
                same product-thinking format later, without redesigning the
                site.
              </p>

              <div className="mt-10 grid gap-4">
                {casePageSections.map((section) => (
                  <article
                    key={section.title}
                    className="rounded-[1.5rem] border border-line bg-page-soft/72 p-5 sm:p-6"
                  >
                    <p className="eyebrow text-muted">{section.title}</p>
                    <p className="mt-4 text-base leading-7 text-ink/76 sm:text-lg">
                      {section.note}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </Container>
        </main>
      )}
    </PageShell>
  );
}
