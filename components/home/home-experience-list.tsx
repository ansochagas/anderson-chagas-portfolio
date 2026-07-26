import type { ExperienceHighlight } from "@/data/site-content";

type HomeExperienceListProps = {
  entries: ExperienceHighlight[];
};

const toneClasses: Record<
  ExperienceHighlight["tone"],
  {
    label: string;
    line: string;
  }
> = {
  blue: {
    label: "text-[#8bcfff]",
    line: "bg-[#168BD2]",
  },
  purple: {
    label: "text-white/72",
    line: "bg-white/18",
  },
  orange: {
    label: "text-[#ffd48b]",
    line: "bg-[#F4A83D]",
  },
  green: {
    label: "text-[#b8efc4]",
    line: "bg-[#62B778]",
  },
};

export function HomeExperienceList({ entries }: HomeExperienceListProps) {
  return (
    <div className="border-t border-white/10">
      {entries.map((entry) => {
        const tone = toneClasses[entry.tone];

        return (
          <article
            key={`${entry.company}-${entry.role}`}
            className="grid gap-6 border-b border-white/10 py-8 xl:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] xl:gap-10"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-9 rounded-full ${tone.line}`}
                />
                <p className={`text-[0.72rem] font-semibold tracking-[0.22em] ${tone.label}`}>
                  {entry.company}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="max-w-[17ch] text-balance text-[clamp(2rem,3vw,3.6rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-white">
                  {entry.role}
                </h3>
                <p className="text-sm leading-6 text-white/54 sm:text-base">
                  {entry.period}{" "}
                  <span aria-hidden="true" className="px-2 text-white/28">
                    /
                  </span>
                  {entry.location}
                </p>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <div className="space-y-3">
                <p className="text-sm font-medium text-white/42">Challenge</p>
                <p className="text-base leading-8 text-white/74 sm:text-lg">
                  {entry.challenge}
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-white/42">Impact</p>
                <p className="text-base leading-8 text-white/74 sm:text-lg">
                  {entry.impact}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
