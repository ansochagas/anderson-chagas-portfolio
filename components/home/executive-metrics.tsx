import type { HeroMetric } from "@/data/site-content";

type ExecutiveMetricsProps = {
  metrics: HeroMetric[];
};

const toneClasses: Record<
  HeroMetric["tone"],
  {
    glow: string;
    line: string;
    value: string;
  }
> = {
  blue: {
    glow: "from-[#168BD2]/22 via-[#168BD2]/12 to-transparent",
    line: "bg-[#168BD2]",
    value: "text-[#8bcfff]",
  },
  purple: {
    glow: "from-[#6E78C8]/22 via-[#6E78C8]/12 to-transparent",
    line: "bg-[#6E78C8]",
    value: "text-[#c6ccff]",
  },
  orange: {
    glow: "from-[#F4A83D]/22 via-[#F4A83D]/12 to-transparent",
    line: "bg-[#F4A83D]",
    value: "text-[#ffd48b]",
  },
  green: {
    glow: "from-[#62B778]/22 via-[#62B778]/12 to-transparent",
    line: "bg-[#62B778]",
    value: "text-[#b8efc4]",
  },
};

export function ExecutiveMetrics({ metrics }: ExecutiveMetricsProps) {
  return (
    <div className="grid gap-4 border-y border-white/10 py-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0 xl:py-8">
      {metrics.map((metric, index) => {
        const tone = toneClasses[metric.tone];

        return (
          <article
            key={`${metric.value}-${metric.label}`}
            className={`relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#102734]/42 p-5 sm:p-6 xl:rounded-none xl:border-0 xl:bg-transparent xl:px-0 xl:py-0 ${
              index > 0 ? "xl:pl-6" : ""
            }`}
          >
            <div
              aria-hidden="true"
              className={`absolute inset-0 xl:hidden bg-[linear-gradient(160deg,var(--tw-gradient-stops))] ${tone.glow}`}
            />
            <div className="relative flex min-h-[8.75rem] flex-col xl:min-h-[9.2rem]">
              <span className={`h-1.5 w-12 rounded-full ${tone.line} block`} />
              <p
                className={`mt-5 text-[clamp(2rem,2.6vw,3.2rem)] font-semibold leading-none tracking-[-0.06em] ${tone.value} text-pretty`}
              >
                {metric.value}
              </p>
              <p className="mt-auto max-w-[18ch] pt-4 text-sm leading-6 text-white/66 sm:text-[0.98rem]">
                {metric.label}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
