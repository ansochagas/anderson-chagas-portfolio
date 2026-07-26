import type { AccentTone } from "@/data/site-content";

type EditorialMetric = {
  label: string;
  tone: AccentTone;
  value: string;
};

type EditorialMetricsStripProps = {
  className?: string;
  items: EditorialMetric[];
};

const toneValueClasses: Record<AccentTone, string> = {
  blue: "text-[#8bcfff]",
  purple: "text-[#c6ccff]",
  orange: "text-[#ffd48b]",
  green: "text-[#b8efc4]",
};

export function EditorialMetricsStrip({
  className = "",
  items,
}: EditorialMetricsStripProps) {
  return (
    <div className={`border-y border-white/10 ${className}`.trim()}>
      <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:divide-white/10">
        {items.map((item) => (
          <div
            key={`${item.value}-${item.label}`}
            className="py-4 first:pt-0 last:pb-0 sm:px-4 sm:py-0 sm:first:pl-0 sm:last:pr-0"
          >
            <p
              className={`tabular-nums text-[1.55rem] font-semibold tracking-[-0.05em] sm:text-[1.85rem] ${toneValueClasses[item.tone]}`}
            >
              {item.value}
            </p>
            <p className="mt-2 text-sm leading-6 text-white/68 sm:text-[0.98rem]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
