import Link from "next/link";

import type { CaseStudy } from "@/data/site-content";

type CaseCardProps = {
  caseStudy: CaseStudy;
  featured?: boolean;
};

export function CaseCard({ caseStudy, featured = false }: CaseCardProps) {
  const statusLabel =
    caseStudy.status === "published" ? "Published" : "Draft";

  return (
    <article
      className={`surface-card rounded-[1.9rem] p-5 sm:p-6 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden rounded-[1.6rem] border p-5 sm:p-6 ${
          featured
            ? "border-white/10 bg-deep text-white"
            : "border-line bg-page-soft/72 text-ink"
        }`}
      >
        <div
          className={`absolute inset-0 opacity-70 ${
            featured
              ? "bg-[radial-gradient(circle_at_top_right,rgba(20,116,111,0.32),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]"
              : "bg-[radial-gradient(circle_at_top_right,rgba(20,116,111,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.5),transparent)]"
          }`}
        />

        <div className="relative space-y-6">
          <div className="flex items-center justify-between gap-3">
            <span
              className={`eyebrow ${
                featured ? "text-white/46" : "text-muted"
              }`}
            >
              {caseStudy.category}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-xs ${
                featured
                  ? "border border-white/10 bg-white/[0.06] text-white/62"
                  : "border border-line bg-white/65 text-ink/56"
              }`}
            >
              {statusLabel}
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {caseStudy.preview.map((item) => (
              <div
                key={item}
                className={`rounded-[1.1rem] border px-4 py-4 ${
                  featured
                    ? "border-white/8 bg-white/[0.04]"
                    : "border-line bg-white/72"
                }`}
              >
                <div
                  className={`h-1.5 w-10 rounded-full ${
                    featured ? "bg-accent/80" : "bg-accent"
                  }`}
                />
                <p
                  className={`mt-4 text-sm leading-6 ${
                    featured ? "text-white/76" : "text-ink/68"
                  }`}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-7">
        <h3 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink">
          {caseStudy.title}
        </h3>
        <p className="mt-4 max-w-3xl text-base leading-8 text-ink/74 sm:text-lg">
          {caseStudy.summary}
        </p>
      </div>

      <ul className="mt-6 grid gap-3 text-sm leading-7 text-ink/74 sm:text-base">
        {caseStudy.focus.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-2xl text-sm leading-6 text-ink/56">
          {caseStudy.placeholderNote}
        </p>

        <Link
          href={`/work/${caseStudy.slug}`}
          className="inline-flex rounded-full border border-line bg-white/62 px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
        >
          {caseStudy.linkLabel ?? "Open case"}
        </Link>
      </div>
    </article>
  );
}
