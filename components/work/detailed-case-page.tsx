import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { CaseVisualBlock } from "@/components/work/case-visual-block";
import type {
  CaseImpactHighlight,
  CaseMethodsGroup,
  CaseVisual,
  DetailedCaseStudy,
} from "@/data/case-content";
import type { CaseStudy } from "@/data/site-content";

type DetailedCasePageProps = {
  caseStudy: CaseStudy;
  detail: DetailedCaseStudy;
  nextCase?: CaseStudy;
};

const toneClasses: Record<
  CaseImpactHighlight["tone"],
  {
    panel: string;
    value: string;
  }
> = {
  blue: {
    panel: "border-[#168BD2]/26 bg-[#168BD2]/10",
    value: "text-[#8bcfff]",
  },
  purple: {
    panel: "border-[#6E78C8]/26 bg-[#6E78C8]/10",
    value: "text-[#c6ccff]",
  },
  orange: {
    panel: "border-[#F4A83D]/26 bg-[#F4A83D]/10",
    value: "text-[#ffd48b]",
  },
  green: {
    panel: "border-[#62B778]/26 bg-[#62B778]/10",
    value: "text-[#b8efc4]",
  },
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
    <main id="main-content" className="flex-1 pb-24 pt-12 sm:pb-28 sm:pt-20">
      <CasePageHero
        caseStudy={caseStudy}
        detail={detail}
        secondaryHref={heroVisual ? "#case-evidence" : "/work"}
        secondaryLabel={heroVisual ? "View Case Evidence" : "Back to Selected Work"}
      />

      <Container className="space-y-16 sm:space-y-20">
        <ProjectFactsGrid facts={detail.projectFacts} />

        {heroVisual ? (
          <section id="case-evidence">
            <CaseVisualBlock tone="dark" visual={heroVisual} />
          </section>
        ) : null}

        <section className="grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-start">
          <EditorialTextBlock block={detail.challenge} />
          {challengeVisual ? (
            <CaseVisualBlock tone="dark" visual={challengeVisual} />
          ) : (
            <CompactNarrativeCard
              body={[detail.heroDescription]}
              eyebrow="Case Summary"
              title="Context for the work"
              tone="blue"
            />
          )}
        </section>

        <WhatIDidSection detail={detail} />

        <section className="grid gap-6 xl:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] xl:items-start">
          <SolutionSection detail={detail} />
          {solutionVisual ? (
            <CaseVisualBlock tone="dark" visual={solutionVisual} />
          ) : (
            <ApproachSection detail={detail} />
          )}
        </section>

        <section className="grid gap-6 xl:grid-cols-2 xl:items-start">
          <ApproachSection detail={detail} />
          <TechnologiesSection groups={detail.technologiesAndMethods} />
        </section>

        {galleryVisuals.length ? (
          <GallerySection
            description={detail.galleryIntro}
            visuals={galleryVisuals}
          />
        ) : null}

        <ImpactSection detail={detail} />
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
    <main id="main-content" className="flex-1 pb-24 pt-12 sm:pb-28 sm:pt-20">
      <CasePageHero
        caseStudy={caseStudy}
        detail={detail}
        secondaryHref="#platform-overview"
        secondaryLabel="View Product Screens"
      />

      <Container className="space-y-16 sm:space-y-20">
        <ProjectFactsGrid facts={detail.projectFacts} />

        {platformOverview ? (
          <section id="platform-overview">
            <CaseVisualBlock tone="dark" visual={platformOverview} />
          </section>
        ) : null}

        <section className="grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-start">
          <EditorialTextBlock block={detail.challenge} />
          <CompactNarrativeCard
            body={[
              "Data and analysis, live monitoring, automated alerts and actionable information were designed to work as a single product loop.",
            ]}
            eyebrow="Data to Action"
            tags={[
              "Sports data",
              "Analytical tools",
              "Real-time monitoring",
              "Automated alerts",
            ]}
            title="The operating logic behind the product"
            tone="green"
          />
        </section>

        <WhatIDidSection detail={detail} />

        {liveMonitoring ? (
          <section id="live-match-monitoring">
            <CaseVisualBlock tone="dark" visual={liveMonitoring} />
          </section>
        ) : null}

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] xl:items-start">
          <SolutionSection detail={detail} />

          {telegramAlert ? (
            <div id="telegram-alert" className="xl:pt-12">
              <CaseVisualBlock
                className="w-full max-w-[420px] xl:ml-auto"
                tone="dark"
                visual={telegramAlert}
              />
            </div>
          ) : (
            <CompactNarrativeCard
              body={[
                "Automated alerts distributed relevant match signals quickly, without asking users to monitor every live event manually.",
              ]}
              eyebrow="Automation"
              title="Telegram Alert"
              tone="blue"
            />
          )}
        </section>

        <ApproachSection
          detail={detail}
          methods={detail.technologiesAndMethods}
          showMethods
        />

        {brandOverview ? (
          <section id="brand-overview">
            <CaseVisualBlock tone="dark" visual={brandOverview} />
          </section>
        ) : null}

        <ImpactSection detail={detail} />
        <ContactSection detail={detail} />
        <NextCaseSection nextCase={nextCase} />
      </Container>
    </main>
  );
}

type CasePageHeroProps = {
  caseStudy: CaseStudy;
  detail: DetailedCaseStudy;
  secondaryHref: string;
  secondaryLabel: string;
};

function CasePageHero({
  caseStudy,
  detail,
  secondaryHref,
  secondaryLabel,
}: CasePageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-16 sm:pb-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_14%,rgba(22,139,210,0.18),transparent_28%),radial-gradient(circle_at_84%_12%,rgba(110,120,200,0.18),transparent_22%),radial-gradient(circle_at_72%_72%,rgba(98,183,120,0.12),transparent_24%),linear-gradient(180deg,#081820_0%,#081820_72%,rgba(8,24,32,0.98)_100%)]" />

      <Container className="space-y-10">
        <div className="fade-up">
          <ButtonLink href="/work" variant="secondary">
            Back to Selected Work
          </ButtonLink>
        </div>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] xl:items-start">
          <div className="space-y-8 text-white">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow text-[#8bcfff]">
                  Selected Work / {caseStudy.category}
                </p>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/54">
                  {caseStudy.status === "published" ? "Published" : "Draft"}
                </span>
              </div>

              <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                {detail.title}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-white/72 sm:text-2xl sm:leading-9">
                {detail.subtitle}
              </p>
            </div>

            <p className="max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
              {detail.heroDescription}
            </p>

            <div className="flex flex-wrap gap-2.5">
              {caseStudy.preview.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-white/66"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/#contact" variant="primary">
                {detail.contactCta.primaryLabel}
              </ButtonLink>
              <ButtonLink href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </ButtonLink>
            </div>
          </div>

          <aside className="space-y-4">
            <ImpactHighlightsGrid items={detail.impactHighlights} />

            <div className="rounded-[1.8rem] border border-white/10 bg-[#102734]/76 p-5">
              <p className="eyebrow text-white/42">Case Scope</p>
              <p className="mt-4 text-base leading-7 text-white/72">
                {caseStudy.summary}
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

type ProjectFactsGridProps = {
  facts: DetailedCaseStudy["projectFacts"];
};

function ProjectFactsGrid({ facts }: ProjectFactsGridProps) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {facts.map((fact, index) => (
        <article
          key={fact.label}
          className={`rounded-[1.55rem] border border-white/10 bg-[#102734]/76 p-5 text-white ${
            index === 0 ? "fade-up" : "fade-up-delay"
          }`}
        >
          <p className="eyebrow text-white/42">{fact.label}</p>
          <p className="mt-4 text-lg font-medium leading-7 text-white/84">
            {fact.value}
          </p>
        </article>
      ))}
    </section>
  );
}

type ImpactHighlightsGridProps = {
  items: CaseImpactHighlight[];
};

function ImpactHighlightsGrid({ items }: ImpactHighlightsGridProps) {
  return (
    <div className="rounded-[1.8rem] border border-white/10 bg-[#102734]/76 p-5">
      <p className="eyebrow text-white/42">Impact At A Glance</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => {
          const tone = toneClasses[item.tone];

          return (
            <article
              key={`${item.label}-${item.value}`}
              className={`rounded-[1.2rem] border p-4 ${tone.panel}`}
            >
              <p className={`text-2xl font-semibold tracking-[-0.04em] ${tone.value}`}>
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/68">
                {item.label}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

type EditorialTextBlockProps = {
  block: DetailedCaseStudy["challenge"] | DetailedCaseStudy["approach"];
};

function EditorialTextBlock({ block }: EditorialTextBlockProps) {
  return (
    <article className="rounded-[2rem] border border-white/8 bg-[#102734]/80 p-6 text-white sm:p-8">
      <p className="eyebrow text-white/42">{block.eyebrow}</p>
      <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
        {block.title}
      </h2>
      <div className="mt-5 space-y-4 text-base leading-8 text-white/72 sm:text-lg">
        {block.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

type CompactNarrativeCardProps = {
  body: string[];
  eyebrow: string;
  tags?: string[];
  title: string;
  tone: CaseImpactHighlight["tone"];
};

function CompactNarrativeCard({
  body,
  eyebrow,
  tags,
  title,
  tone,
}: CompactNarrativeCardProps) {
  const accent = toneClasses[tone];

  return (
    <article className="rounded-[2rem] border border-white/8 bg-[#081820]/72 p-6 text-white sm:p-8">
      <div className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${accent.panel} ${accent.value}`}>
        {eyebrow}
      </div>
      <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-base leading-8 text-white/72 sm:text-lg">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {tags?.length ? (
        <div className="mt-6 flex flex-wrap gap-2.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-white/66"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}

type DetailOnlyProps = {
  detail: DetailedCaseStudy;
};

function WhatIDidSection({ detail }: DetailOnlyProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[#102734]/84 p-6 text-white sm:p-8 lg:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,139,210,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />

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
    <article className="rounded-[2rem] border border-white/8 bg-[#102734]/80 p-6 text-white sm:p-8">
      <p className="eyebrow text-white/42">{detail.solution.eyebrow}</p>
      <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
        {detail.solution.title}
      </h2>

      <div className="mt-5 space-y-4 text-base leading-8 text-white/72 sm:text-lg">
        {detail.solution.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {detail.solution.points?.map((point, index) => (
          <li
            key={point}
            className={`rounded-[1.2rem] border px-4 py-4 text-sm leading-7 sm:text-base ${
              index % 3 === 0
                ? "border-[#168BD2]/24 bg-[#168BD2]/10 text-white/84"
                : "border-white/10 bg-[#081820]/72 text-white/72"
            }`}
          >
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

type ApproachSectionProps = {
  detail: DetailedCaseStudy;
  methods?: CaseMethodsGroup[];
  showMethods?: boolean;
};

function ApproachSection({
  detail,
  methods = [],
  showMethods = false,
}: ApproachSectionProps) {
  return (
    <section className="rounded-[2rem] border border-white/8 bg-[#081820]/72 p-6 text-white sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
        <div className="space-y-4">
          <p className="eyebrow text-white/42">{detail.approach.eyebrow}</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
            {detail.approach.title}
          </h2>
          <div className="space-y-4 text-base leading-8 text-white/72 sm:text-lg">
            {detail.approach.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <ApproachFlow steps={detail.approachFlow} />

          {detail.approachTags?.length ? (
            <div className="flex flex-wrap gap-3 text-sm text-white/62">
              {detail.approachTags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}

          {showMethods ? <MethodsGrid groups={methods} /> : null}
        </div>
      </div>
    </section>
  );
}

type TechnologiesSectionProps = {
  groups: CaseMethodsGroup[];
};

function TechnologiesSection({ groups }: TechnologiesSectionProps) {
  return (
    <section className="rounded-[2rem] border border-white/8 bg-[#102734]/80 p-6 text-white sm:p-8">
      <p className="eyebrow text-white/42">Technologies And Methods</p>
      <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
        Technologies and methods
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
        Product framing, technical choices and delivery methods were combined
        according to the context of the case.
      </p>

      <div className="mt-6">
        <MethodsGrid groups={groups} />
      </div>
    </section>
  );
}

type MethodsGridProps = {
  groups: CaseMethodsGroup[];
};

function MethodsGrid({ groups }: MethodsGridProps) {
  return (
    <div className="grid gap-4">
      {groups.map((group) => (
        <div key={group.label} className="rounded-[1.2rem] bg-white/[0.04] p-4">
          <p className="eyebrow text-white/40">{group.label}</p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ImpactSection({ detail }: DetailOnlyProps) {
  return (
    <section className="grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(340px,1.08fr)] xl:items-end">
      <article className="rounded-[2rem] border border-white/8 bg-[#102734]/80 p-6 text-white sm:p-8">
        <p className="eyebrow text-white/42">{detail.impact.eyebrow}</p>
        <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
          {detail.impact.title}
        </h2>
        <div className="mt-5 space-y-4 text-base leading-8 text-white/72 sm:text-lg">
          {detail.impact.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <aside className="rounded-[2rem] border border-white/8 bg-[#081820]/72 p-6 text-white sm:p-8">
        <p className="eyebrow text-white/42">Evidence Note</p>
        <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl">
          No unverified metrics included.
        </h3>
        <p className="mt-4 text-base leading-8 text-white/68">
          {detail.impactPlaceholder}
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/60">
          {[
            "Approved metrics only",
            "Public-safe evidence",
            "No invented outcomes",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2"
            >
              {item}
            </span>
          ))}
        </div>
      </aside>
    </section>
  );
}

type GallerySectionProps = {
  description: string;
  visuals: CaseVisual[];
};

function GallerySection({ description, visuals }: GallerySectionProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-3 text-white">
        <p className="eyebrow text-[#8bcfff]">Additional Evidence</p>
        <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
          Additional visual evidence for the case.
        </h2>
        <p className="max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
          {description}
        </p>
      </div>

      <div
        className={
          visuals.length > 1 ? "grid gap-6 xl:grid-cols-2" : "max-w-5xl"
        }
      >
        {visuals.map((visual) => (
          <CaseVisualBlock key={visual.id} tone="dark" visual={visual} />
        ))}
      </div>
    </section>
  );
}

function ContactSection({ detail }: DetailOnlyProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[#102734]/86 p-6 text-white sm:p-8 lg:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,139,210,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />

      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)] lg:items-end">
        <div>
          <p className="eyebrow text-white/42">Contact</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
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
    <section className="rounded-[2rem] border border-white/8 bg-[#081820]/72 p-6 text-white sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="eyebrow text-white/42">Next Case</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
            {nextCase.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-white/70 sm:text-lg">
            {nextCase.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <ButtonLink href={`/work/${nextCase.slug}`} variant="secondary">
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

function findVisual(detail: DetailedCaseStudy, id: string) {
  return detail.visuals.find((visual) => visual.id === id);
}

type ApproachFlowProps = {
  steps: string[];
};

function ApproachFlow({ steps }: ApproachFlowProps) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 sm:p-5">
      <p className="eyebrow text-white/40">Flow</p>
      <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-0">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex items-center gap-3 lg:flex-1 lg:gap-0"
          >
            <div className="rounded-[1rem] border border-white/10 bg-[#102734]/86 px-4 py-4 text-sm font-medium leading-6 text-white/80 lg:w-full">
              {step}
            </div>
            {index < steps.length - 1 ? (
              <>
                <div className="hidden h-px w-8 bg-[linear-gradient(90deg,rgba(22,139,210,0.86),rgba(22,139,210,0.12))] lg:block" />
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#168BD2]/24 bg-[#168BD2]/10 text-xs text-[#8bcfff] lg:hidden">
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
