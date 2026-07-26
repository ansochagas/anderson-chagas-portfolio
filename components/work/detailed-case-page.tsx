import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { CaseVisualBlock } from "@/components/work/case-visual-block";
import type {
  CaseImpactHighlight,
  CaseMethodsGroup,
  CaseQuickFact,
  CaseVisual,
  DetailedCaseStudy,
} from "@/data/case-content";
import type { CaseStudy } from "@/data/site-content";

type DetailedCasePageProps = {
  caseStudy: CaseStudy;
  detail: DetailedCaseStudy;
  nextCase?: CaseStudy;
};

type AccentTone = CaseImpactHighlight["tone"];

const toneClasses: Record<
  AccentTone,
  {
    line: string;
    soft: string;
    value: string;
  }
> = {
  blue: {
    line: "bg-[#168BD2]",
    soft: "text-[#8bcfff]",
    value: "text-[#8bcfff]",
  },
  purple: {
    line: "bg-[#6E78C8]",
    soft: "text-[#c6ccff]",
    value: "text-[#c6ccff]",
  },
  orange: {
    line: "bg-[#F4A83D]",
    soft: "text-[#ffd48b]",
    value: "text-[#ffd48b]",
  },
  green: {
    line: "bg-[#62B778]",
    soft: "text-[#b8efc4]",
    value: "text-[#b8efc4]",
  },
};

const heroBackgroundByAccent: Record<AccentTone, string> = {
  blue:
    "bg-[radial-gradient(circle_at_18%_14%,rgba(22,139,210,0.22),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(22,139,210,0.12),transparent_24%),radial-gradient(circle_at_70%_76%,rgba(98,183,120,0.08),transparent_24%),linear-gradient(180deg,#081820_0%,#081820_76%,rgba(8,24,32,0.98)_100%)]",
  purple:
    "bg-[radial-gradient(circle_at_18%_14%,rgba(22,139,210,0.16),transparent_28%),radial-gradient(circle_at_84%_14%,rgba(110,120,200,0.2),transparent_22%),radial-gradient(circle_at_68%_76%,rgba(244,168,61,0.08),transparent_24%),linear-gradient(180deg,#081820_0%,#081820_76%,rgba(8,24,32,0.98)_100%)]",
  orange:
    "bg-[radial-gradient(circle_at_18%_14%,rgba(22,139,210,0.16),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(244,168,61,0.2),transparent_22%),radial-gradient(circle_at_70%_76%,rgba(98,183,120,0.08),transparent_24%),linear-gradient(180deg,#081820_0%,#081820_76%,rgba(8,24,32,0.98)_100%)]",
  green:
    "bg-[radial-gradient(circle_at_18%_14%,rgba(22,139,210,0.18),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(98,183,120,0.16),transparent_24%),radial-gradient(circle_at_70%_76%,rgba(110,120,200,0.1),transparent_24%),linear-gradient(180deg,#081820_0%,#081820_76%,rgba(8,24,32,0.98)_100%)]",
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
  const accent = detail.slug === "ai-intelligence-pipeline" ? "purple" : "blue";

  return (
    <main id="main-content" className="flex-1 pb-24 pt-12 sm:pb-28 sm:pt-20">
      <CasePageHero
        accent={accent}
        caseStudy={caseStudy}
        detail={detail}
        secondaryHref={heroVisual ? "#case-evidence" : "/work"}
        secondaryLabel={heroVisual ? "View case evidence" : "Back to selected work"}
      />

      <Container className="space-y-16 sm:space-y-20">
        <ProjectFactsStrip facts={detail.projectFacts} />

        {heroVisual ? (
          <section id="case-evidence">
            <CaseVisualBlock tone="dark" visual={heroVisual} />
          </section>
        ) : null}

        <section className="grid gap-8 border-t border-white/10 pt-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:gap-12 xl:pt-10">
          <NarrativePanel
            accent={accent}
            body={detail.challenge.body}
            label={detail.challenge.eyebrow}
            title={detail.challenge.title}
          />

          {challengeVisual ? (
            <CaseVisualBlock tone="dark" visual={challengeVisual} />
          ) : (
            <SupportPanel
              accent={accent}
              body={[detail.heroDescription]}
              label="Case summary"
              title="Context for the work"
            />
          )}
        </section>

        <section className="grid gap-8 border-t border-white/10 pt-8 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:gap-12 xl:pt-10">
          <NarrativePanel
            accent={accent}
            body={[
              "The role combined discovery, documentation, orchestration and product decision-making.",
            ]}
            label={detail.myRole.eyebrow}
            title={detail.myRole.title}
          />

          <EditorialList items={detail.myRole.points ?? []} />
        </section>

        <section className="grid gap-8 border-t border-white/10 pt-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:gap-12 xl:pt-10">
          <div className="space-y-8">
            <NarrativePanel
              accent={accent}
              body={detail.solution.body}
              label={detail.solution.eyebrow}
              title={detail.solution.title}
            />
            <EditorialList columns items={detail.solution.points ?? []} />
          </div>

          {solutionVisual ? (
            <CaseVisualBlock tone="dark" visual={solutionVisual} />
          ) : (
            <SupportPanel
              accent={accent}
              body={[
                "The solution combined process clarity, validated requirements and shared understanding before development.",
              ]}
              items={detail.solution.points}
              label="Solution structure"
              title="How the solution was organized"
            />
          )}
        </section>

        <section className="grid gap-8 border-t border-white/10 pt-8 xl:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] xl:gap-12 xl:pt-10">
          <NarrativePanel
            accent={accent}
            body={detail.approach.body}
            label={detail.approach.eyebrow}
            title={detail.approach.title}
          />

          <div className="space-y-10">
            <StepFlow accent={accent} steps={detail.approachFlow} />
            <MethodsRows groups={detail.technologiesAndMethods} />
          </div>
        </section>

        {galleryVisuals.length ? (
          <EvidenceGallery
            description={detail.galleryIntro}
            title="Additional evidence"
            visuals={galleryVisuals}
          />
        ) : null}

        <ImpactSection accent={accent} detail={detail} />
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
        accent="green"
        caseStudy={caseStudy}
        detail={detail}
        secondaryHref="#platform-overview"
        secondaryLabel="View product screens"
      />

      <Container className="space-y-16 sm:space-y-20">
        <ProjectFactsStrip facts={detail.projectFacts} />

        {platformOverview ? (
          <section id="platform-overview">
            <CaseVisualBlock tone="dark" visual={platformOverview} />
          </section>
        ) : null}

        <section className="grid gap-8 border-t border-white/10 pt-8 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:gap-12 xl:pt-10">
          <NarrativePanel
            accent="green"
            body={detail.challenge.body}
            label={detail.challenge.eyebrow}
            title={detail.challenge.title}
          />

          <SupportPanel
            accent="green"
            body={[
              "Data, analysis, monitoring and automated distribution were shaped to reduce research friction and speed up decision-making during live matches.",
            ]}
            items={[
              "Sports data and APIs",
              "Analytical tools",
              "Real-time monitoring",
              "Automated alerts",
            ]}
            label="Product loop"
            title="Data, monitoring and action in one workflow"
          />
        </section>

        <section className="grid gap-8 border-t border-white/10 pt-8 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:gap-12 xl:pt-10">
          <NarrativePanel
            accent="green"
            body={[
              "The role covered strategy, technical direction and product evolution across a long-running SaaS operation.",
            ]}
            label={detail.myRole.eyebrow}
            title={detail.myRole.title}
          />

          <EditorialList columns items={detail.myRole.points ?? []} />
        </section>

        {liveMonitoring ? (
          <section id="live-match-monitoring">
            <CaseVisualBlock tone="dark" visual={liveMonitoring} />
          </section>
        ) : null}

        <section className="grid gap-8 border-t border-white/10 pt-8 xl:grid-cols-[minmax(0,0.98fr)_minmax(320px,0.72fr)] xl:gap-12 xl:pt-10">
          <div className="space-y-8">
            <NarrativePanel
              accent="green"
              body={detail.solution.body}
              label={detail.solution.eyebrow}
              title={detail.solution.title}
            />
            <EditorialList columns items={detail.solution.points ?? []} />
          </div>

          {telegramAlert ? (
            <div id="telegram-alert" className="xl:pt-2">
              <CaseVisualBlock
                className="w-full max-w-[360px] xl:ml-auto"
                tone="dark"
                visual={telegramAlert}
              />
            </div>
          ) : (
            <SupportPanel
              accent="blue"
              body={[
                "Automated alerts distributed relevant match signals without asking users to monitor every live event manually.",
              ]}
              label="Automation"
              title="Telegram alert"
            />
          )}
        </section>

        <section className="grid gap-8 border-t border-white/10 pt-8 xl:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] xl:gap-12 xl:pt-10">
          <NarrativePanel
            accent="green"
            body={detail.approach.body}
            label={detail.approach.eyebrow}
            title={detail.approach.title}
          />

          <div className="space-y-10">
            <StepFlow accent="green" steps={detail.approachFlow} />
            <MethodsRows groups={detail.technologiesAndMethods} />
          </div>
        </section>

        {brandOverview ? (
          <section id="brand-overview">
            <CaseVisualBlock tone="dark" visual={brandOverview} />
          </section>
        ) : null}

        <ImpactSection accent="green" detail={detail} />
        <ContactSection detail={detail} />
        <NextCaseSection nextCase={nextCase} />
      </Container>
    </main>
  );
}

type CasePageHeroProps = {
  accent: AccentTone;
  caseStudy: CaseStudy;
  detail: DetailedCaseStudy;
  secondaryHref: string;
  secondaryLabel: string;
};

function CasePageHero({
  accent,
  caseStudy,
  detail,
  secondaryHref,
  secondaryLabel,
}: CasePageHeroProps) {
  const accentTone = toneClasses[accent];

  return (
    <section className="relative overflow-hidden pb-16 sm:pb-20">
      <div
        className={`absolute inset-0 -z-10 ${heroBackgroundByAccent[accent]}`}
      />

      <Container className="space-y-10">
        <div className="fade-up">
          <ButtonLink href="/work" variant="secondary">
            Back to selected work
          </ButtonLink>
        </div>

        <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)] xl:items-start">
          <div className="space-y-7 text-white">
            <div className="space-y-4">
              <p className={`text-sm font-medium ${accentTone.soft}`}>
                Work / {caseStudy.category}
              </p>

              <h1 className="max-w-[13ch] text-balance text-[clamp(2.7rem,5.1vw,5.6rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-white xl:max-w-[11ch]">
                {detail.title}
              </h1>

              <p className="max-w-[42rem] text-lg leading-8 text-white/74 sm:text-[1.45rem] sm:leading-9">
                {detail.subtitle}
              </p>
            </div>

            <p className="max-w-[44rem] text-base leading-8 text-white/68 sm:text-lg">
              {detail.heroDescription}
            </p>

            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/#contact" variant="primary">
                {detail.contactCta.primaryLabel}
              </ButtonLink>
              <ButtonLink href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </ButtonLink>
            </div>
          </div>

          <aside className="space-y-8 text-white">
            <div className="border-t border-white/10 pt-4">
              <p className="text-sm font-medium text-white/54">
                Impact at a glance
              </p>
              <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-6">
                {detail.impactHighlights.map((item) => (
                  <div key={`${item.label}-${item.value}`} className="space-y-2">
                    <span
                      aria-hidden="true"
                      className={`block h-1.5 w-10 rounded-full ${toneClasses[item.tone].line}`}
                    />
                    <p
                      className={`tabular-nums text-[1.6rem] font-semibold leading-none tracking-[-0.05em] ${toneClasses[item.tone].value}`}
                    >
                      {item.value}
                    </p>
                    <p className="text-sm leading-6 text-white/66">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="text-sm font-medium text-white/54">Case context</p>
              <p className="mt-4 max-w-[34rem] text-base leading-8 text-white/68">
                {caseStudy.summary}
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function ProjectFactsStrip({ facts }: { facts: CaseQuickFact[] }) {
  const desktopColumns =
    facts.length >= 4 ? "xl:grid-cols-4" : facts.length === 3 ? "xl:grid-cols-3" : "xl:grid-cols-2";

  return (
    <section className="border-y border-white/10">
      <div className={`grid sm:grid-cols-2 ${desktopColumns}`.trim()}>
        {facts.map((fact, index) => {
          const mobileTopBorder = index >= 1 ? "border-t border-white/10" : "";
          const desktopLeftBorder =
            index > 0 ? "xl:border-l xl:border-white/10" : "";

          return (
            <article
              key={fact.label}
              className={`px-0 py-5 text-white sm:px-5 xl:px-6 ${mobileTopBorder} sm:border-t-0 ${desktopLeftBorder}`.trim()}
            >
              <p className="text-sm font-medium text-white/50">{fact.label}</p>
              <p className="mt-3 max-w-[22ch] text-base leading-7 text-white/82 sm:text-lg">
                {fact.value}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

type NarrativePanelProps = {
  accent: AccentTone;
  body: string[];
  label: string;
  title: string;
};

function NarrativePanel({ accent, body, label, title }: NarrativePanelProps) {
  return (
    <article className="space-y-5 text-white">
      <div className="space-y-4">
        <p className={`text-sm font-medium ${toneClasses[accent].soft}`}>{label}</p>
        <h2 className="max-w-[14ch] text-balance text-[clamp(2.5rem,4vw,4.4rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-white">
          {title}
        </h2>
      </div>

      <div className="max-w-[44rem] space-y-4 text-base leading-8 text-white/72 sm:text-lg">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

type SupportPanelProps = {
  accent: AccentTone;
  body: string[];
  items?: string[];
  label: string;
  title: string;
};

function SupportPanel({
  accent,
  body,
  items,
  label,
  title,
}: SupportPanelProps) {
  return (
    <aside className="space-y-5 border-t border-white/10 pt-4 text-white">
      <p className={`text-sm font-medium ${toneClasses[accent].soft}`}>{label}</p>
      <h3 className="max-w-[18ch] text-balance text-2xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-[2rem]">
        {title}
      </h3>

      <div className="space-y-4 text-base leading-8 text-white/72 sm:text-lg">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {items?.length ? <EditorialList items={items} /> : null}
    </aside>
  );
}

function EditorialList({
  items,
  columns = false,
}: {
  items: string[];
  columns?: boolean;
}) {
  return (
    <ul className={`grid gap-x-6 ${columns ? "sm:grid-cols-2" : ""}`.trim()}>
      {items.map((item) => (
        <li
          key={item}
          className="border-t border-white/10 py-4 text-base leading-7 text-white/78 sm:text-lg"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function StepFlow({
  accent,
  steps,
}: {
  accent: AccentTone;
  steps: string[];
}) {
  return (
    <section className="space-y-4 text-white">
      <p className={`text-sm font-medium ${toneClasses[accent].soft}`}>Flow</p>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {steps.map((step, index) => (
          <div key={step} className="border-t border-white/10 pt-4">
            <p className="tabular-nums text-xs font-medium text-white/42">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-3 text-base leading-7 text-white/82">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MethodsRows({ groups }: { groups: CaseMethodsGroup[] }) {
  return (
    <section className="space-y-4 text-white">
      <p className="text-sm font-medium text-white/54">Technologies and methods</p>
      <div className="border-t border-white/10">
        {groups.map((group) => (
          <div
            key={group.label}
            className="grid gap-3 border-b border-white/10 py-4 lg:grid-cols-[minmax(150px,0.3fr)_minmax(0,1fr)]"
          >
            <p className="text-sm font-medium text-white/48">{group.label}</p>
            <p className="text-base leading-7 text-white/74 sm:text-lg">
              {group.items.join(" / ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceGallery({
  description,
  title,
  visuals,
}: {
  description: string;
  title: string;
  visuals: CaseVisual[];
}) {
  return (
    <section className="space-y-6 border-t border-white/10 pt-8 sm:pt-10">
      <div className="space-y-4 text-white">
        <p className="text-sm font-medium text-white/54">Additional evidence</p>
        <h2 className="max-w-[14ch] text-balance text-[clamp(2.4rem,3.8vw,4.2rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-white">
          {title}
        </h2>
        <p className="max-w-[46rem] text-base leading-8 text-white/68 sm:text-lg">
          {description}
        </p>
      </div>

      <div className={visuals.length > 1 ? "grid gap-6 xl:grid-cols-2" : ""}>
        {visuals.map((visual) => (
          <CaseVisualBlock key={visual.id} tone="dark" visual={visual} />
        ))}
      </div>
    </section>
  );
}

function ImpactSection({
  accent,
  detail,
}: {
  accent: AccentTone;
  detail: DetailedCaseStudy;
}) {
  return (
    <section className="grid gap-8 border-t border-white/10 pt-8 xl:grid-cols-[minmax(0,0.88fr)_minmax(320px,0.82fr)] xl:gap-12 xl:pt-10">
      <NarrativePanel
        accent={accent}
        body={detail.impact.body}
        label={detail.impact.eyebrow}
        title={detail.impact.title}
      />

      <aside className="space-y-5 border-t border-white/10 pt-4 text-white">
        <p className="text-sm font-medium text-white/54">Evidence note</p>
        <h3 className="max-w-[16ch] text-balance text-2xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-[2rem]">
          No unverified metrics included.
        </h3>
        <p className="max-w-[34rem] text-base leading-8 text-white/68 sm:text-lg">
          {detail.impactPlaceholder}
        </p>
      </aside>
    </section>
  );
}

function ContactSection({ detail }: { detail: DetailedCaseStudy }) {
  return (
    <section className="grid gap-8 border-t border-white/10 pt-8 text-white xl:grid-cols-[minmax(0,0.92fr)_minmax(320px,1.08fr)] xl:items-end xl:pt-10">
      <div className="space-y-5">
        <p className="text-sm font-medium text-white/54">Contact</p>
        <h2 className="max-w-[18ch] text-balance text-[clamp(2.2rem,4vw,4.4rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-white xl:max-w-[15ch]">
          {detail.contactCta.title}
        </h2>
        <p className="max-w-[44rem] text-base leading-8 text-white/68 sm:text-lg">
          {detail.contactCta.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 xl:justify-end">
        <ButtonLink href="/#contact" variant="primary">
          {detail.contactCta.primaryLabel}
        </ButtonLink>
        <ButtonLink href="/work" variant="secondary">
          {detail.contactCta.secondaryLabel}
        </ButtonLink>
      </div>
    </section>
  );
}

function NextCaseSection({ nextCase }: { nextCase?: CaseStudy }) {
  if (!nextCase) {
    return null;
  }

  return (
    <section className="grid gap-8 border-t border-white/10 pt-8 text-white xl:grid-cols-[minmax(0,0.92fr)_minmax(280px,1.08fr)] xl:items-end xl:pt-10">
      <div className="space-y-4">
        <p className="text-sm font-medium text-white/54">Next case</p>
        <h2 className="max-w-[18ch] text-balance text-[clamp(2.1rem,3.8vw,4rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-white xl:max-w-[16ch]">
          {nextCase.title}
        </h2>
        <p className="max-w-[42rem] text-base leading-8 text-white/68 sm:text-lg">
          {nextCase.summary}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 xl:justify-end">
        <ButtonLink href={`/work/${nextCase.slug}`} variant="secondary">
          {nextCase.linkLabel ?? "Open case"}
        </ButtonLink>
        <ButtonLink href="/work" variant="ghost">
          Browse all work
        </ButtonLink>
      </div>
    </section>
  );
}

function findVisual(detail: DetailedCaseStudy, id: string) {
  return detail.visuals.find((visual) => visual.id === id);
}
