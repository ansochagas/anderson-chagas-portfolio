import type { ReactNode } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { CaseVisualBlock } from "@/components/work/case-visual-block";
import type {
  CaseImpactHighlight,
  CaseMethodsGroup,
  DetailedCaseStudy,
} from "@/data/case-content";
import type { CaseStudy } from "@/data/site-content";

type EditorialCaseSectionProps = {
  caseStudy: CaseStudy;
  detail: DetailedCaseStudy;
  index: number;
};

const toneClasses: Record<
  CaseImpactHighlight["tone"],
  {
    chip: string;
    panel: string;
  }
> = {
  blue: {
    chip: "text-[#8bcfff]",
    panel: "bg-[#168BD2]/10 border-[#168BD2]/24",
  },
  purple: {
    chip: "text-[#c6ccff]",
    panel: "bg-[#6E78C8]/10 border-[#6E78C8]/24",
  },
  orange: {
    chip: "text-[#ffd48b]",
    panel: "bg-[#F4A83D]/10 border-[#F4A83D]/24",
  },
  green: {
    chip: "text-[#b8efc4]",
    panel: "bg-[#62B778]/10 border-[#62B778]/24",
  },
};

export function EditorialCaseSection({
  caseStudy,
  detail,
  index,
}: EditorialCaseSectionProps) {
  const coverVisual = detail.visuals[0];

  return (
    <section
      id={index === 0 ? "selected-work" : undefined}
      className="space-y-8 rounded-[2.3rem] border border-white/8 bg-[#102734]/82 p-6 backdrop-blur-sm sm:p-8 xl:p-10"
    >
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] xl:items-start">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow text-[#8bcfff]">
              Case {String(index + 1).padStart(2, "0")}
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/54">
              {caseStudy.category}
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-white sm:text-5xl xl:text-6xl">
              {detail.title}
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-white/72 sm:text-xl">
              {caseStudy.summary}
            </p>
          </div>

          <ul className="flex flex-wrap gap-2.5">
            {caseStudy.preview.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-white/68"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href={`/work/${caseStudy.slug}`} variant="primary">
              Open Full Case
            </ButtonLink>
            <ButtonLink href="/#contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-[1.7rem] border border-white/10 bg-[#081820]/72 p-5">
            <p className="eyebrow text-white/42">Impact At A Glance</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {detail.impactHighlights.map((item) => {
                const tone = toneClasses[item.tone];

                return (
                  <article
                    key={`${item.label}-${item.value}`}
                    className={`rounded-[1.25rem] border p-4 ${tone.panel}`}
                  >
                    <p className={`text-2xl font-semibold tracking-[-0.04em] ${tone.chip}`}>
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

          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5">
            <p className="eyebrow text-white/42">Case Summary</p>
            <p className="mt-4 text-base leading-7 text-white/72">
              {detail.heroDescription}
            </p>
          </div>
        </aside>
      </div>

      {coverVisual ? <CaseVisualBlock tone="dark" visual={coverVisual} /> : null}

      <div className="grid gap-4 xl:grid-cols-2">
        <NarrativePanel
          body={detail.challenge.body}
          eyebrow="Challenge"
          title="Challenge"
        />
        <NarrativePanel
          body={detail.approach.body}
          eyebrow="Approach"
          title="Approach"
        >
          <div className="mt-5 flex flex-wrap gap-2.5">
            {detail.approachFlow.map((step) => (
              <span
                key={step}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-white/62"
              >
                {step}
              </span>
            ))}
          </div>
        </NarrativePanel>

        <ListPanel
          eyebrow="Solution"
          items={detail.solution.points ?? []}
          title="Solution"
        />
        <NarrativePanel
          body={detail.impact.body}
          eyebrow="Results"
          note={detail.impactPlaceholder}
          title="Results"
        />

        <ListPanel
          eyebrow="My Role"
          items={detail.myRole.points ?? []}
          title="My Role"
        />
        <MethodsPanel groups={detail.technologiesAndMethods} />
      </div>
    </section>
  );
}

type NarrativePanelProps = {
  body: string[];
  children?: ReactNode;
  eyebrow: string;
  note?: string;
  title: string;
};

function NarrativePanel({
  body,
  children,
  eyebrow,
  note,
  title,
}: NarrativePanelProps) {
  return (
    <article className="rounded-[1.8rem] border border-white/8 bg-[#081820]/66 p-5 sm:p-6">
      <p className="eyebrow text-white/42">{eyebrow}</p>
      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
        {title}
      </h3>

      <div className="mt-4 space-y-4 text-base leading-7 text-white/72">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {children}

      {note ? (
        <p className="mt-5 rounded-[1.2rem] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white/56">
          {note}
        </p>
      ) : null}
    </article>
  );
}

type ListPanelProps = {
  eyebrow: string;
  items: string[];
  title: string;
};

function ListPanel({ eyebrow, items, title }: ListPanelProps) {
  return (
    <article className="rounded-[1.8rem] border border-white/8 bg-white/[0.04] p-5 sm:p-6">
      <p className="eyebrow text-white/42">{eyebrow}</p>
      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
        {title}
      </h3>

      <ul className="mt-5 grid gap-3 text-sm leading-7 text-white/72 sm:text-base">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#168BD2]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

type MethodsPanelProps = {
  groups: CaseMethodsGroup[];
};

function MethodsPanel({ groups }: MethodsPanelProps) {
  return (
    <article className="rounded-[1.8rem] border border-white/8 bg-[#081820]/66 p-5 sm:p-6">
      <p className="eyebrow text-white/42">Technologies And Methods</p>
      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
        Technologies and methods
      </h3>

      <div className="mt-5 grid gap-4">
        {groups.map((group) => (
          <div key={group.label} className="rounded-[1.2rem] bg-white/[0.03] p-4">
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
    </article>
  );
}
