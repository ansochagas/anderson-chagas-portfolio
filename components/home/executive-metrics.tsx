import type { HeroMetric } from "@/data/site-content";

type ExecutiveMetricsProps = {
  metrics: HeroMetric[];
};

const toneClasses: Record<
  HeroMetric["tone"],
  {
    line: string;
    value: string;
  }
> = {
  blue: {
    line: "bg-[#168BD2]",
    value: "text-[#8bcfff]",
  },
  purple: {
    line: "bg-[#6E78C8]",
    value: "text-[#c6ccff]",
  },
  orange: {
    line: "bg-[#F4A83D]",
    value: "text-[#ffd48b]",
  },
  green: {
    line: "bg-[#62B778]",
    value: "text-[#b8efc4]",
  },
};

export function ExecutiveMetrics({ metrics }: ExecutiveMetricsProps) {
  return (
    <div className="border-y border-white/10">
      <div className="grid grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => {
        const tone = toneClasses[metric.tone];
        const mobileLeftBorder = index % 2 === 1 ? "border-l border-white/10" : "";
        const mobileTopBorder =
          index >= 2 ? "border-t border-white/10 lg:border-t-0" : "";
        const desktopLeftBorder = index > 0 ? "lg:border-l lg:border-white/10" : "";

        return (
          <article
            key={`${metric.value}-${metric.label}`}
            className={`px-4 py-5 sm:px-5 sm:py-6 lg:px-0 lg:py-7 ${mobileLeftBorder} ${mobileTopBorder} ${desktopLeftBorder} ${
              index > 0 ? "lg:pl-6" : ""
            }`.trim()}
          >
            <div className="flex min-h-[7.8rem] flex-col justify-between sm:min-h-[8.6rem]">
              <span className={`block h-1.5 w-11 rounded-full ${tone.line}`} />
              <p
                className={`tabular-nums pt-5 text-[clamp(1.9rem,7vw,2.7rem)] font-semibold leading-none tracking-[-0.06em] ${tone.value}`}
              >
                {metric.value}
              </p>
              <p className="max-w-[18ch] pt-3 text-sm leading-6 text-white/70 sm:text-[0.98rem]">
                {metric.label}
              </p>
            </div>
          </article>
        );
      })}
      </div>
    </div>
  );
}
