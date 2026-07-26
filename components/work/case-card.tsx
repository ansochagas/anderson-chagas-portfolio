import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { CaseVisualBlock } from "@/components/work/case-visual-block";
import {
  getDetailedCaseBySlug,
  type CaseVisual,
  type CaseVisualImage,
} from "@/data/case-content";
import type { CaseStudy } from "@/data/site-content";

type CaseCardProps = {
  caseStudy: CaseStudy;
  featured?: boolean;
};

const workEvidenceBySlug: Record<string, string> = {
  "bcs-sports-analytics":
    "Product ownership across strategy, monetization, live monitoring and SaaS evolution.",
  "enterprise-service-operations":
    "AS-IS / TO-BE mapping, business rules, ServiceNow + SAP and delivery readiness.",
  "ai-intelligence-pipeline":
    "Functional prototype for collection, enrichment, semantic retrieval and traceable answers.",
};

function isImageVisual(visual: CaseVisual | undefined): visual is CaseVisualImage {
  return Boolean(visual && "kind" in visual && visual.kind === "image");
}

export function CaseCard({ caseStudy, featured = false }: CaseCardProps) {
  const detail = getDetailedCaseBySlug(caseStudy.slug);
  const coverVisual = detail?.visuals[0];
  const layoutClass = featured
    ? "xl:grid-cols-[minmax(0,0.84fr)_minmax(420px,1.16fr)]"
    : "xl:grid-cols-[minmax(0,0.88fr)_minmax(320px,1.12fr)]";
  const role = detail?.projectFacts.find((fact) => fact.label === "Role")?.value;
  const featuredHighlights = detail?.impactHighlights.slice(0, 3) ?? [];
  const imageVisual = isImageVisual(coverVisual) ? coverVisual : undefined;

  return (
    <article
      className={`rounded-[2.4rem] border border-white/10 bg-[#102734]/42 p-6 text-white sm:p-8 ${
        featured ? "lg:col-span-2" : ""
      }`.trim()}
    >
      <div className={`grid gap-8 xl:items-start ${layoutClass}`.trim()}>
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-[#8bcfff]">
              {caseStudy.category}
            </span>
            {caseStudy.slug === "ai-intelligence-pipeline" ? (
              <span className="text-sm text-white/48">Functional prototype</span>
            ) : null}
          </div>

          <h2
            className={`text-balance font-semibold leading-[0.92] tracking-[-0.05em] text-white ${
              featured
                ? "max-w-[14ch] text-[clamp(2.8rem,4vw,4.8rem)]"
                : "max-w-[16ch] text-[clamp(2.05rem,2.6vw,3.2rem)]"
            }`}
          >
            {caseStudy.title}
          </h2>
          <p className="max-w-[42rem] text-base leading-8 text-white/70 sm:text-lg">
            {detail?.heroDescription ?? caseStudy.summary}
          </p>

          <dl className="grid gap-4 sm:grid-cols-2">
            {role ? (
              <div className="space-y-2 border-t border-white/10 pt-4">
                <dt className="text-sm font-medium text-white/42">Role</dt>
                <dd className="text-base leading-7 text-white/82">{role}</dd>
              </div>
            ) : null}

            <div className="space-y-2 border-t border-white/10 pt-4">
              <dt className="text-sm font-medium text-white/42">Evidence</dt>
              <dd className="text-base leading-7 text-white/72">
                {workEvidenceBySlug[caseStudy.slug]}
              </dd>
            </div>
          </dl>

          {featured ? (
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
          ) : null}

          <div className="pt-2">
            <ButtonLink href={`/work/${caseStudy.slug}`} variant="secondary">
              {caseStudy.linkLabel ?? "Open case"}
            </ButtonLink>
          </div>
        </div>

        {coverVisual ? (
          <div className={featured ? "xl:pl-2" : ""}>
            {imageVisual ? (
              <figure className="space-y-4">
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#081820]/82 p-3">
                  <Image
                    src={imageVisual.src}
                    alt={imageVisual.alt}
                    width={imageVisual.width}
                    height={imageVisual.height}
                    priority={featured}
                    sizes={
                      featured
                        ? "(min-width: 1280px) 760px, (min-width: 768px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
                        : "(min-width: 1280px) 520px, (min-width: 768px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
                    }
                    className="h-auto w-full rounded-[1.35rem] object-contain"
                  />
                </div>
                <figcaption className="text-sm leading-6 text-white/58 sm:text-base">
                  {imageVisual.description}
                </figcaption>
              </figure>
            ) : (
              <CaseVisualBlock tone="dark" visual={coverVisual} />
            )}
          </div>
        ) : null}
      </div>
    </article>
  );
}
