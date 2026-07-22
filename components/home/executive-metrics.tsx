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
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {metrics.map((metric) => {
        const tone = toneClasses[metric.tone];

        return (
          <article
            key={`${metric.value}-${metric.label}`}
            className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#102734]/84 p-5 backdrop-blur-sm sm:p-6"
          >
            <div
              aria-hidden="true"
              className={`absolute inset-0 bg-[linear-gradient(160deg,var(--tw-gradient-stops))] ${tone.glow}`}
            />
            <div className="relative flex min-h-[9.8rem] flex-col">
              <span className={`h-1.5 w-12 rounded-full ${tone.line} block`} />
              <p
                className={`mt-5 text-[clamp(2rem,2vw,2.85rem)] font-semibold leading-none tracking-[-0.05em] ${tone.value}`}
              >
                {metric.value}
              </p>
              <p className="mt-auto pt-4 text-sm leading-6 text-white/70 sm:text-[0.96rem]">
                {metric.label}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
