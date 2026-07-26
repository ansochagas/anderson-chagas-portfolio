import Image from "next/image";

import {
  type CaseVisual,
  type CaseVisualCollaborationDiagram,
  type CaseVisualComparisonDiagram,
  type CaseVisualDecisionFlowDiagram,
  type CaseVisualDiagram,
  type CaseVisualDiscoveryDiagram,
} from "@/data/case-content";

type CaseVisualThumbnailProps = {
  className?: string;
  visual: CaseVisual;
};

export function CaseVisualThumbnail({
  className = "",
  visual,
}: CaseVisualThumbnailProps) {
  if ("kind" in visual && visual.kind === "image") {
    return (
      <figure
        aria-label={visual.alt}
        className={`overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#081820]/84 ${className}`.trim()}
      >
        <div className="aspect-[16/10] p-3">
          <Image
            src={visual.src}
            alt={visual.alt}
            width={visual.width}
            height={visual.height}
            sizes="(min-width: 768px) 520px, calc(100vw - 2.5rem)"
            className="h-full w-full rounded-[1.05rem] object-cover object-top"
          />
        </div>
        <figcaption className="sr-only">{visual.description}</figcaption>
      </figure>
    );
  }

  if ("kind" in visual && visual.kind === "diagram") {
    return (
      <figure
        aria-label={visual.title}
        className={`overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0d2230] ${className}`.trim()}
      >
        <div className="aspect-[16/10] p-3">
          <div className="flex h-full flex-col rounded-[1.05rem] border border-white/10 bg-white/[0.03] p-3">
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white/46">
                {visual.eyebrow}
              </span>
              <span className="h-2 w-2 rounded-full bg-[#168BD2]" />
            </div>
            <div className="min-h-0 flex-1">
              <DiagramThumbnailRenderer visual={visual} />
            </div>
          </div>
        </div>
        <figcaption className="sr-only">{visual.description}</figcaption>
      </figure>
    );
  }

  return (
    <figure
      aria-label={visual.ariaLabel}
      className={`overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0d2230] ${className}`.trim()}
    >
      <div className="aspect-[16/10] p-3">
        <div className="flex h-full flex-col justify-between rounded-[1.05rem] border border-dashed border-white/14 bg-white/[0.03] p-4">
          <div className="space-y-2">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white/46">
              {visual.eyebrow}
            </p>
            <h3 className="text-sm font-medium leading-6 text-white/84">
              {visual.title}
            </h3>
          </div>
          <p className="text-sm leading-6 text-white/56">{visual.todoLabel}</p>
        </div>
      </div>
      <figcaption className="sr-only">{visual.description}</figcaption>
    </figure>
  );
}

function DiagramThumbnailRenderer({ visual }: { visual: CaseVisualDiagram }) {
  switch (visual.diagramType) {
    case "discovery":
      return <DiscoveryThumbnail visual={visual} />;
    case "comparison":
      return <ComparisonThumbnail visual={visual} />;
    case "decision-flow":
      return <DecisionFlowThumbnail visual={visual} />;
    case "collaboration":
      return <CollaborationThumbnail visual={visual} />;
    default:
      return null;
  }
}

function DiscoveryThumbnail({
  visual,
}: {
  visual: CaseVisualDiscoveryDiagram;
}) {
  return (
    <div className="grid h-full grid-cols-5 gap-2">
      {visual.steps.slice(0, 5).map((step, index) => (
        <div
          key={`${step.label}-${index}`}
          className="flex min-w-0 flex-col justify-between rounded-[0.85rem] border border-white/10 bg-white/[0.05] px-2 py-2"
        >
          <span className="h-1.5 w-6 rounded-full bg-[#168BD2]" />
          <p className="line-clamp-3 text-[0.65rem] leading-4 text-white/72">
            {shortLabel(step.label)}
          </p>
        </div>
      ))}
    </div>
  );
}

function ComparisonThumbnail({
  visual,
}: {
  visual: CaseVisualComparisonDiagram;
}) {
  return (
    <div className="grid h-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2">
      <StateColumn items={visual.currentState.items} />
      <div className="flex flex-col items-center gap-1">
        <div className="h-px w-5 bg-white/16" />
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-sm text-white/52">
          →
        </div>
        <div className="h-px w-5 bg-white/16" />
      </div>
      <StateColumn emphasis items={visual.futureState.items} />
    </div>
  );
}

function DecisionFlowThumbnail({
  visual,
}: {
  visual: CaseVisualDecisionFlowDiagram;
}) {
  const firstLane = visual.steps.slice(0, 3);
  const secondLane = visual.steps.slice(3);

  return (
    <div className="grid h-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-2">
      <StepLane steps={firstLane} />
      <div className="flex items-center justify-center">
        <div className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-white/52">
          Ready
        </div>
      </div>
      <StepLane steps={secondLane} highlightIndex={0} />
    </div>
  );
}

function CollaborationThumbnail({
  visual,
}: {
  visual: CaseVisualCollaborationDiagram;
}) {
  const items = visual.collaborators.slice(0, 4);

  return (
    <div className="relative h-full">
      <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

      <div className="absolute left-1/2 top-1/2 flex h-20 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1rem] border border-[#168BD2]/30 bg-[#168BD2]/14 px-3 text-center text-[0.65rem] leading-4 text-white/78">
        {shortLabel(visual.centerLabel)}
      </div>

      <ThumbnailNode className="left-0 top-2" label={items[0]?.label} />
      <ThumbnailNode className="right-0 top-2" label={items[1]?.label} />
      <ThumbnailNode className="left-0 bottom-2" label={items[2]?.label} />
      <ThumbnailNode className="right-0 bottom-2" label={items[3]?.label} />
    </div>
  );
}

function StateColumn({
  emphasis = false,
  items,
}: {
  emphasis?: boolean;
  items: string[];
}) {
  return (
    <div
      className={`grid h-full gap-2 rounded-[0.95rem] border px-2 py-2 ${
        emphasis
          ? "border-[#168BD2]/24 bg-[#168BD2]/10"
          : "border-white/10 bg-white/[0.04]"
      }`}
    >
      {items.slice(0, 4).map((item) => (
        <div
          key={item}
          className="h-4 rounded-full bg-white/[0.06] px-2 text-[0.6rem] leading-4 text-white/68"
        >
          <span className="block truncate pt-[0.05rem]">{shortLabel(item)}</span>
        </div>
      ))}
    </div>
  );
}

function StepLane({
  highlightIndex = -1,
  steps,
}: {
  highlightIndex?: number;
  steps: string[];
}) {
  return (
    <div className="grid h-full gap-2">
      {steps.map((step, index) => (
        <div
          key={step}
          className={`rounded-[0.8rem] border px-2 py-2 text-[0.62rem] leading-4 ${
            highlightIndex === index
              ? "border-[#168BD2]/24 bg-[#168BD2]/10 text-white/82"
              : "border-white/10 bg-white/[0.04] text-white/68"
          }`}
        >
          <span className="block line-clamp-2">{shortLabel(step)}</span>
        </div>
      ))}
    </div>
  );
}

function ThumbnailNode({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) {
  if (!label) {
    return null;
  }

  return (
    <div
      className={`absolute flex h-12 w-[5.6rem] items-center justify-center rounded-[0.95rem] border border-white/10 bg-white/[0.04] px-2 text-center text-[0.6rem] leading-4 text-white/68 ${className}`.trim()}
    >
      {shortLabel(label)}
    </div>
  );
}

function shortLabel(label: string) {
  return label.split(" ").slice(0, 2).join(" ");
}
