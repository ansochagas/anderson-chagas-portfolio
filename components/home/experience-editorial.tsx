import type { ExperienceHighlight } from "@/data/site-content";

type ExperienceEditorialProps = {
  entries: ExperienceHighlight[];
};

const toneClasses: Record<
  ExperienceHighlight["tone"],
  {
    chip: string;
    line: string;
  }
> = {
  blue: {
    chip: "text-[#8bcfff]",
    line: "bg-[#168BD2]",
  },
  purple: {
    chip: "text-[#c6ccff]",
    line: "bg-[#6E78C8]",
  },
  orange: {
    chip: "text-[#ffd48b]",
    line: "bg-[#F4A83D]",
  },
  green: {
    chip: "text-[#b8efc4]",
    line: "bg-[#62B778]",
  },
};

export function ExperienceEditorial({ entries }: ExperienceEditorialProps) {
  return (
    <div className="grid gap-5 xl:grid-cols-2">
      {entries.map((entry, index) => {
        const tone = toneClasses[entry.tone];
        const featured = index === 0;

        return (
          <article
            key={`${entry.company}-${entry.role}`}
            className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#102734]/88 p-6 backdrop-blur-sm sm:p-7 lg:p-8 ${
              featured ? "xl:col-span-2" : ""
            }`.trim()}
          >
            <div
              aria-hidden="true"
              className={`absolute left-0 top-0 h-full w-1 ${tone.line}`}
            />

            <div
              className={`grid gap-8 ${
                featured
                  ? "xl:grid-cols-[minmax(300px,0.78fr)_minmax(0,1.22fr)] xl:items-start"
                  : ""
              }`.trim()}
            >
              <div className="min-w-0">
                <p className={`eyebrow ${tone.chip}`}>{entry.company}</p>
                <h3 className="mt-4 max-w-[16ch] text-[clamp(2rem,2vw,2.85rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-white text-balance">
                  {entry.role}
                </h3>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-white/58">
                  <span>{entry.period}</span>
                  <span aria-hidden="true">&bull;</span>
                  <span>{entry.location}</span>
                </div>
              </div>

              <div className={`grid gap-5 ${featured ? "lg:grid-cols-2" : ""}`.trim()}>
                <div className="h-full rounded-[1.4rem] bg-[#081820]/64 p-5 sm:p-6">
                  <p className="eyebrow text-white/40">Challenge</p>
                  <p className="mt-3 text-base leading-7 text-white/76 sm:text-lg sm:leading-8">
                    {entry.challenge}
                  </p>
                </div>

                <div className="h-full rounded-[1.4rem] bg-white/[0.04] p-5 sm:p-6">
                  <p className="eyebrow text-white/40">Impact</p>
                  <p className="mt-3 text-base leading-7 text-white/74 sm:text-lg sm:leading-8">
                    {entry.impact}
                  </p>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
