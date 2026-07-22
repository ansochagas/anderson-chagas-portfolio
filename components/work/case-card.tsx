import Link from "next/link";

import { CaseVisualBlock } from "@/components/work/case-visual-block";
import { getDetailedCaseBySlug } from "@/data/case-content";
import type { CaseStudy } from "@/data/site-content";

type CaseCardProps = {
  caseStudy: CaseStudy;
  featured?: boolean;
};

const toneClasses = {
  blue: "text-[#8bcfff] border-[#168BD2]/24 bg-[#168BD2]/10",
  purple: "text-[#c6ccff] border-[#6E78C8]/24 bg-[#6E78C8]/10",
  orange: "text-[#ffd48b] border-[#F4A83D]/24 bg-[#F4A83D]/10",
  green: "text-[#b8efc4] border-[#62B778]/24 bg-[#62B778]/10",
} as const;

export function CaseCard({ caseStudy, featured = false }: CaseCardProps) {
  const detail = getDetailedCaseBySlug(caseStudy.slug);
  const coverVisual = detail?.visuals[0];
  const layoutClass = featured
    ? "xl:grid-cols-[minmax(0,1.04fr)_minmax(320px,0.96fr)] xl:items-start"
    : "";

  return (
    <article
      className={`rounded-[2.2rem] border border-white/8 bg-[#102734]/86 p-6 text-white backdrop-blur-sm sm:p-7 ${
        featured ? "lg:col-span-2" : ""
      }`.trim()}
    >
      <div className={`grid gap-8 ${layoutClass}`.trim()}>
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow text-[#8bcfff]">{caseStudy.category}</span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/54">
              {caseStudy.status === "published" ? "Published" : "Draft"}
            </span>
          </div>

          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">
            {caseStudy.title}
          </h2>
          <p className="max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
            {caseStudy.summary}
          </p>

          <div className="flex flex-wrap gap-2.5">
            {caseStudy.preview.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-white/68"
              >
                {item}
              </span>
            ))}
          </div>

          <ul className="grid gap-3 text-sm leading-7 text-white/72 sm:text-base">
            {caseStudy.focus.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#168BD2]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {detail?.impactHighlights?.length ? (
          <aside className="rounded-[1.8rem] border border-white/10 bg-[#081820]/70 p-5">
            <p className="eyebrow text-white/40">Impact At A Glance</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {detail.impactHighlights.slice(0, 4).map((item) => (
                <div
                  key={`${item.label}-${item.value}`}
                  className={`rounded-[1.25rem] border p-4 ${
                    toneClasses[item.tone]
                  }`}
                >
                  <p className="text-xl font-semibold tracking-[-0.04em]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/68">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        ) : null}
      </div>

      {coverVisual ? (
        <div className="mt-8">
          <CaseVisualBlock tone="dark" visual={coverVisual} />
        </div>
      ) : null}

      <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-2xl text-sm leading-6 text-white/54">
          {caseStudy.placeholderNote}
        </p>

        <Link
          href={`/work/${caseStudy.slug}`}
          className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/[0.1]"
        >
          {caseStudy.linkLabel ?? "Open case"}
        </Link>
      </div>
    </article>
  );
}
