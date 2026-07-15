import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionIntro } from "@/components/ui/section-intro";
import { CaseVisualBlock } from "@/components/work/case-visual-block";
import type { CaseVisual, DetailedCaseStudy } from "@/data/case-content";
import type { CaseStudy } from "@/data/site-content";

type DetailedCasePageProps = {
  caseStudy: CaseStudy;
  detail: DetailedCaseStudy;
  nextCase?: CaseStudy;
};

export function DetailedCasePage(props: DetailedCasePageProps) {
  if (props.detail.slug === "bcs-sports-analytics") {
    return <BcsDetailedCasePage {...props} />;
  }

  return <DefaultDetailedCasePage {...props} />;
}

function DefaultDetailedCasePage({
  caseStudy,
  detail,
  nextCase,
}: DetailedCasePageProps) {
  const [heroVisual, challengeVisual, solutionVisual, ...galleryVisuals] =
    detail.visuals;

  return (
    <main className="flex-1 pb-24 pt-12 sm:pb-28 sm:pt-20">
      <section className="relative overflow-hidden pb-20 sm:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_12%,rgba(20,116,111,0.26),transparent_26%),radial-gradient(circle_at_86%_10%,rgba(255,255,255,0.12),transparent_18%),linear-gradient(180deg,#0d1415_0,#0d1415_72%,rgba(13,20,21,0.96)_100%)]" />
        <Container className="space-y-10">
          <div className="fade-up">
            <ButtonLink href="/work" variant="secondary">
              Back to Selected Work
            </ButtonLink>
          </div>

          <div className="grid gap-10 xl:grid-cols-[minmax(0,0.98fr)_minmax(380px,1.02fr)] xl:items-end">
            <div className="fade-up space-y-8 text-white">
              <div className="space-y-4">
                <p className="eyebrow text-white/46">
                  Selected Work / {caseStudy.category}
                </p>
                <h1 className="text-balance max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                  {detail.title}
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-white/72 sm:text-2xl sm:leading-9">
                  {detail.subtitle}
                </p>
              </div>

              <p className="max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
                {detail.heroDescription}
              </p>

              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/#contact" variant="primary">
                  {detail.contactCta.primaryLabel}
                </ButtonLink>
                <ButtonLink href="#gallery" variant="secondary">
                  View Case Evidence
                </ButtonLink>
              </div>
            </div>

            {heroVisual ? (
              <div className="fade-up-delay">
                <CaseVisualBlock visual={heroVisual} tone="dark" />
              </div>
            ) : null}
          </div>

          <ProjectFactsGrid facts={detail.projectFacts} />
        </Container>
      </section>

      <Container className="space-y-16 sm:space-y-20">
        <section className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(360px,1.22fr)] lg:items-start">
          <NarrativeBlock block={detail.challenge} maxWidth="max-w-xl" />
          {challengeVisual ? <CaseVisualBlock visual={challengeVisual} /> : null}
        </section>

        <WhatIDidSection detail={detail} />

        <section className="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)] xl:items-start">
          <SolutionSection detail={detail} />
          {solutionVisual ? <CaseVisualBlock visual={solutionVisual} /> : null}
        </section>

        <ApproachSection detail={detail} />
        <ImpactSection detail={detail} />

        <section id="gallery" className="space-y-8">
          <SectionIntro
            eyebrow="Visual Evidence"
            title="Selected visual evidence for the case."
            description={detail.galleryIntro}
          />

          {galleryVisuals.length ? (
            <div
              className={
                galleryVisuals.length > 1
                  ? "grid gap-6 xl:grid-cols-2"
                  : "max-w-4xl"
              }
            >
              {galleryVisuals.map((visual) => (
                <CaseVisualBlock key={visual.id} visual={visual} />
              ))}
            </div>
          ) : null}
        </section>

        <ContactSection detail={detail} />
        <NextCaseSection nextCase={nextCase} />
      </Container>
    </main>
  );
}

function BcsDetailedCasePage({
  caseStudy,
  detail,
  nextCase,
}: DetailedCasePageProps) {
  const platformOverview = findVisual(detail, "platform-overview");
  const liveMonitoring = findVisual(detail, "live-match-monitoring");
  const telegramAlert = findVisual(detail, "telegram-alert");
  const brandOverview = findVisual(detail, "brand-overview");

  return (
    <main className="flex-1 pb-24 pt-12 sm:pb-28 sm:pt-20">
      <section className="relative overflow-hidden pb-20 sm:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_12%,rgba(20,116,111,0.26),transparent_26%),radial-gradient(circle_at_86%_10%,rgba(255,255,255,0.12),transparent_18%),linear-gradient(180deg,#0d1415_0,#0d1415_72%,rgba(13,20,21,0.96)_100%)]" />
        <Container className="space-y-10">
          <div className="fade-up">
            <ButtonLink href="/work" variant="secondary">
              Back to Selected Work
            </ButtonLink>
          </div>

          <div className="fade-up max-w-4xl space-y-8 text-white">
            <div className="space-y-4">
              <p className="eyebrow text-white/46">
                Selected Work / {caseStudy.category}
              </p>
              <h1 className="text-balance max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                {detail.title}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-white/72 sm:text-2xl sm:leading-9">
                {detail.subtitle}
              </p>
            </div>

            <p className="max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
              {detail.heroDescription}
            </p>

            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/#contact" variant="primary">
                {detail.contactCta.primaryLabel}
              </ButtonLink>
              <ButtonLink href="#platform-overview" variant="secondary">
                View Product Screens
              </ButtonLink>
            </div>
          </div>

          <ProjectFactsGrid facts={detail.projectFacts} />
        </Container>
      </section>

      <Container className="space-y-16 sm:space-y-20">
        {platformOverview ? (
          <section id="platform-overview">
            <CaseVisualBlock visual={platformOverview} />
          </section>
        ) : null}

        <section className="max-w-4xl">
          <NarrativeBlock block={detail.challenge} />
        </section>

        <WhatIDidSection detail={detail} />

        {liveMonitoring ? (
          <section id="live-match-monitoring">
            <CaseVisualBlock visual={liveMonitoring} />
          </section>
        ) : null}

        <section className="max-w-5xl">
          <SolutionSection detail={detail} />
        </section>

        {telegramAlert ? (
          <section
            id="telegram-alert"
            className="mx-auto w-full max-w-[420px] sm:ml-auto sm:mr-0"
          >
            <CaseVisualBlock visual={telegramAlert} />
          </section>
        ) : null}

        <ApproachSection detail={detail} />

        {brandOverview ? (
          <section id="brand-overview">
            <CaseVisualBlock visual={brandOverview} />
          </section>
        ) : null}

        <ImpactSection detail={detail} />
        <NextCaseSection nextCase={nextCase} />
      </Container>
    </main>
  );
}

type NarrativeBlockProps = {
  block: DetailedCaseStudy["challenge"] | DetailedCaseStudy["approach"];
  maxWidth?: string;
};

function NarrativeBlock({ block, maxWidth = "max-w-4xl" }: NarrativeBlockProps) {
  return (
    <div className={`${maxWidth} space-y-5`}>
      <p className="eyebrow text-muted">{block.eyebrow}</p>
      <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-5xl">
        {block.title}
      </h2>
      <div className="space-y-4 text-base leading-8 text-ink/74 sm:text-lg">
        {block.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

type ProjectFactsGridProps = {
  facts: DetailedCaseStudy["projectFacts"];
};

function ProjectFactsGrid({ facts }: ProjectFactsGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {facts.map((fact, index) => (
        <article
          key={fact.label}
          className={`surface-card rounded-[1.5rem] p-5 ${
            index === 0 ? "fade-up" : "fade-up-delay"
          }`}
        >
          <p className="eyebrow text-muted">{fact.label}</p>
          <p className="mt-4 text-lg font-medium leading-7 text-ink">
            {fact.value}
          </p>
        </article>
      ))}
    </div>
  );
}

type DetailOnlyProps = {
  detail: DetailedCaseStudy;
};

function WhatIDidSection({ detail }: DetailOnlyProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-deep p-6 text-white shadow-[0_26px_90px_rgba(0,0,0,0.22)] sm:p-8 lg:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,116,111,0.2),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]" />
      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-start">
        <div className="space-y-4">
          <p className="eyebrow text-white/42">{detail.myRole.eyebrow}</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
            {detail.myRole.title}
          </h2>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {detail.myRole.points?.map((point) => (
            <li
              key={point}
              className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-white/76 sm:text-base"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SolutionSection({ detail }: DetailOnlyProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <p className="eyebrow text-muted">{detail.solution.eyebrow}</p>
        <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-5xl">
          {detail.solution.title}
        </h2>
        <div className="space-y-4 text-base leading-8 text-ink/74 sm:text-lg">
          {detail.solution.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {detail.solution.points?.map((point, index) => (
          <li
            key={point}
            className={`rounded-[1.2rem] border px-4 py-4 text-sm leading-7 sm:text-base ${
              index % 3 === 0
                ? "border-accent/18 bg-accent-soft text-ink/84"
                : "border-line bg-white/64 text-ink/74"
            }`}
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ApproachSection({ detail }: DetailOnlyProps) {
  return (
    <section className="surface-card rounded-[2rem] p-6 sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:items-center">
        <div className="space-y-4">
          <p className="eyebrow text-muted">{detail.approach.eyebrow}</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-5xl">
            {detail.approach.title}
          </h2>
          <div className="space-y-4 text-base leading-8 text-ink/74 sm:text-lg">
            {detail.approach.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <ApproachFlow steps={detail.approachFlow} />
          {detail.approachTags?.length ? (
            <div className="flex flex-wrap gap-3 text-sm text-ink/62">
              {detail.approachTags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-page-soft/72 px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ImpactSection({ detail }: DetailOnlyProps) {
  return (
    <section className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(320px,1.12fr)] lg:items-end">
      <div className="space-y-5">
        <p className="eyebrow text-muted">{detail.impact.eyebrow}</p>
        <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-5xl">
          {detail.impact.title}
        </h2>
        <div className="space-y-4 text-base leading-8 text-ink/74 sm:text-lg">
          {detail.impact.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <aside className="surface-card rounded-[1.9rem] p-6 sm:p-7">
        <p className="eyebrow text-muted">Evidence Note</p>
        <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-3xl">
          No unverified metrics included.
        </h3>
        <p className="mt-4 text-base leading-8 text-ink/70">
          {detail.impactPlaceholder}
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-ink/62">
          {[
            "Approved metrics only",
            "Public-safe evidence",
            "No invented outcomes",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-line bg-page-soft/72 px-4 py-2"
            >
              {item}
            </span>
          ))}
        </div>
      </aside>
    </section>
  );
}

function ContactSection({ detail }: DetailOnlyProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-deep p-6 text-white shadow-[0_32px_90px_rgba(0,0,0,0.22)] sm:p-8 lg:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,116,111,0.26),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)] lg:items-end">
        <div>
          <p className="eyebrow text-white/42">Contact</p>
          <h2 className="text-balance mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
            {detail.contactCta.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            {detail.contactCta.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 lg:justify-end">
          <ButtonLink href="/#contact" variant="primary">
            {detail.contactCta.primaryLabel}
          </ButtonLink>
          <ButtonLink href="/work" variant="secondary">
            {detail.contactCta.secondaryLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

type NextCaseSectionProps = {
  nextCase?: CaseStudy;
};

function NextCaseSection({ nextCase }: NextCaseSectionProps) {
  if (!nextCase) {
    return null;
  }

  return (
    <section className="surface-card rounded-[1.9rem] p-6 sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="eyebrow text-muted">Next Case</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-4xl">
            {nextCase.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-ink/72 sm:text-lg">
            {nextCase.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <ButtonLink href={`/work/${nextCase.slug}`} variant="ghost">
            {nextCase.linkLabel ?? "Open case"}
          </ButtonLink>
          <ButtonLink href="/work" variant="ghost">
            Browse All Work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function findVisual(detail: DetailedCaseStudy, id: string): CaseVisual | undefined {
  return detail.visuals.find((visual) => visual.id === id);
}

type ApproachFlowProps = {
  steps: string[];
};

function ApproachFlow({ steps }: ApproachFlowProps) {
  return (
    <div className="rounded-[1.5rem] border border-line bg-page-soft/72 p-4 sm:p-5">
      <p className="eyebrow text-muted">Flow</p>
      <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-0">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex items-center gap-3 lg:flex-1 lg:gap-0"
          >
            <div className="rounded-[1rem] border border-line bg-white/72 px-4 py-4 text-sm font-medium leading-6 text-ink/80 lg:w-full">
              {step}
            </div>
            {index < steps.length - 1 ? (
              <>
                <div className="hidden h-px w-8 bg-[linear-gradient(90deg,rgba(20,116,111,0.9),rgba(20,116,111,0.12))] lg:block" />
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-accent/18 bg-accent-soft text-xs text-accent lg:hidden">
                  &darr;
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
