import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import {
  getDetailedCaseBySlug,
  type CaseVisual,
  type CaseVisualImage,
} from "@/data/case-content";
import { publishedPortfolioCases } from "@/data/site-content";

function isImageVisual(visual: CaseVisual | undefined): visual is CaseVisualImage {
  return Boolean(visual && "kind" in visual && visual.kind === "image");
}

const compactEvidenceBySlug: Record<string, string> = {
  "enterprise-service-operations":
    "AS-IS / TO-BE mapping, business rules, ServiceNow + SAP and delivery readiness.",
  "ai-intelligence-pipeline":
    "Functional prototype covering collection, enrichment, semantic search and traceable answers.",
};

export function SelectedWorkTeasers() {
  const featuredCase = publishedPortfolioCases.find(
    (caseStudy) => caseStudy.slug === "bcs-sports-analytics",
  );
  const compactCases = publishedPortfolioCases.filter(
    (caseStudy) => caseStudy.slug !== "bcs-sports-analytics",
  );
  const featuredDetail = featuredCase
    ? getDetailedCaseBySlug(featuredCase.slug)
    : undefined;
  const featuredRole = featuredDetail?.projectFacts.find(
    (fact) => fact.label === "Role",
  )?.value;
  const featuredVisual = featuredDetail?.visuals.find(isImageVisual);
  const featuredHighlights = featuredDetail?.impactHighlights.slice(0, 3) ?? [];

  if (!featuredCase || !featuredDetail || !featuredVisual) {
    return null;
  }

  return (
    <div className="space-y-8">
      <article className="grid gap-8 rounded-[2.4rem] border border-white/10 bg-[#102734]/54 p-6 sm:p-8 xl:grid-cols-[minmax(0,0.94fr)_minmax(420px,1.06fr)] xl:items-start xl:p-10">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-sm font-medium text-[#8bcfff]">Featured case</p>
            <h3 className="max-w-[13ch] text-balance text-[clamp(2.4rem,4vw,4.8rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
              {featuredCase.title}
            </h3>
            <p className="max-w-[42rem] text-lg leading-8 text-white/72">
              {featuredCase.summary}
            </p>
          </div>

          <dl className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2 border-t border-white/10 pt-4">
              <dt className="text-sm font-medium text-white/42">Role</dt>
              <dd className="text-base leading-7 text-white/82 sm:text-lg">
                {featuredRole}
              </dd>
            </div>

            <div className="space-y-2 border-t border-white/10 pt-4">
              <dt className="text-sm font-medium text-white/42">Ownership</dt>
              <dd className="text-base leading-7 text-white/82 sm:text-lg">
                Product strategy, monetization and live monitoring evolution.
              </dd>
            </div>
          </dl>

          <div className="grid gap-3 sm:grid-cols-3">
            {featuredHighlights.map((item) => (
              <div
                key={`${item.label}-${item.value}`}
                className="rounded-[1.4rem] border border-white/10 bg-[#081820]/74 px-4 py-4"
              >
                <p
                  className={`text-[1.65rem] font-semibold tracking-[-0.05em] ${
                    item.label === "Users reached"
                      ? "text-[#b8efc4]"
                      : item.label === "Cumulative revenue"
                        ? "text-[#ffd48b]"
                        : "text-white"
                  }`}
                >
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/58">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <ButtonLink href={`/work/${featuredCase.slug}`} variant="primary">
            Open full case
          </ButtonLink>
        </div>

        <figure className="space-y-4">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#081820]/82 p-3">
            <Image
              src={featuredVisual.src}
              alt={featuredVisual.alt}
              width={featuredVisual.width}
              height={featuredVisual.height}
              priority
              sizes="(min-width: 1280px) 720px, (min-width: 768px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
              className="h-auto w-full rounded-[1.35rem] object-contain"
            />
          </div>
          <figcaption className="max-w-[52rem] text-sm leading-6 text-white/58 sm:text-base">
            {featuredVisual.description}
          </figcaption>
        </figure>
      </article>

      <div className="grid gap-6 xl:grid-cols-2">
        {compactCases.map((caseStudy) => {
          const detail = getDetailedCaseBySlug(caseStudy.slug);
          const role = detail?.projectFacts.find((fact) => fact.label === "Role")
            ?.value;

          if (!detail || !role) {
            return null;
          }

          return (
            <article
              key={caseStudy.slug}
              className="rounded-[2rem] border border-white/10 bg-[#102734]/38 p-6 sm:p-7"
            >
              <div className="space-y-4">
                <p className="text-sm font-medium text-[#8bcfff]">
                  {caseStudy.category}
                </p>
                <h3 className="max-w-[16ch] text-balance text-3xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-[2.2rem]">
                  {caseStudy.title}
                </h3>
                <p className="text-base leading-8 text-white/70 sm:text-lg">
                  {caseStudy.summary}
                </p>
              </div>

              <dl className="mt-6 grid gap-4">
                <div className="space-y-2 border-t border-white/10 pt-4">
                  <dt className="text-sm font-medium text-white/42">Role</dt>
                  <dd className="text-base leading-7 text-white/82">{role}</dd>
                </div>

                <div className="space-y-2 border-t border-white/10 pt-4">
                  <dt className="text-sm font-medium text-white/42">Evidence</dt>
                  <dd className="text-base leading-7 text-white/72">
                    {compactEvidenceBySlug[caseStudy.slug]}
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                <ButtonLink href={`/work/${caseStudy.slug}`} variant="secondary">
                  Open full case
                </ButtonLink>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
