import type {
  CaseDiagramStep,
  CaseVisualCollaborationDiagram,
  CaseVisualComparisonDiagram,
  CaseVisualDecisionFlowDiagram,
  CaseVisualDiagram,
  CaseVisualDiscoveryDiagram,
} from "@/data/case-content";

type CaseVisualDiagramProps = {
  className?: string;
  tone?: "dark" | "light";
  visual: CaseVisualDiagram;
};

export function CaseVisualDiagram({
  className = "",
  tone = "light",
  visual,
}: CaseVisualDiagramProps) {
  const surfaceClass = tone === "dark" ? "surface-card-dark" : "surface-card";
  const frameClass =
    tone === "dark"
      ? "border-white/10 bg-[#0f1819]"
      : "border-line bg-page-soft/72";
  const eyebrowClass = tone === "dark" ? "text-white/46" : "text-muted";
  const titleClass = tone === "dark" ? "text-white" : "text-ink";
  const captionClass = tone === "dark" ? "text-white/62" : "text-ink/62";

  return (
    <figure
      className={`relative overflow-hidden rounded-[1.9rem] p-5 sm:p-6 ${surfaceClass} ${className}`.trim()}
    >
      <div
        className={`absolute inset-0 ${
          tone === "dark"
            ? "bg-[radial-gradient(circle_at_top_right,rgba(20,116,111,0.2),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]"
            : "bg-[radial-gradient(circle_at_top_right,rgba(20,116,111,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.48),transparent)]"
        }`}
      />

      <div className="relative">
        <div className="space-y-3">
          <p className={`eyebrow ${eyebrowClass}`}>{visual.eyebrow}</p>
          <h3
            className={`text-balance text-2xl font-semibold leading-tight tracking-[-0.04em] ${titleClass}`}
          >
            {visual.title}
          </h3>
        </div>

        <div className={`mt-6 rounded-[1.5rem] border p-4 sm:p-5 ${frameClass}`}>
          <DiagramRenderer tone={tone} visual={visual} />
        </div>

        <figcaption className={`mt-5 text-sm leading-6 sm:text-base ${captionClass}`}>
          {visual.description}
        </figcaption>
      </div>
    </figure>
  );
}

type DiagramRendererProps = {
  tone: "dark" | "light";
  visual: CaseVisualDiagram;
};

function DiagramRenderer({ tone, visual }: DiagramRendererProps) {
  switch (visual.diagramType) {
    case "discovery":
      return <DiscoveryDiagram tone={tone} visual={visual} />;
    case "comparison":
      return <ComparisonDiagram tone={tone} visual={visual} />;
    case "decision-flow":
      return <DecisionFlowDiagram tone={tone} visual={visual} />;
    case "collaboration":
      return <CollaborationDiagram tone={tone} visual={visual} />;
    default:
      return null;
  }
}

type ToneProps = {
  tone: "dark" | "light";
};

function DiscoveryDiagram({
  tone,
  visual,
}: ToneProps & { visual: CaseVisualDiscoveryDiagram }) {
  const emphasisLabels = new Set(
    visual.emphasisLabels?.length
      ? visual.emphasisLabels
      : [visual.steps[visual.steps.length - 1]?.label].filter(Boolean),
  );

  return (
    <div className="space-y-3">
      <div
        aria-label="Discovery sequence"
        className="flex flex-col gap-3 lg:flex-row lg:items-stretch"
      >
        {visual.steps.map((step, index) => (
          <div
            key={step.label}
            className="flex flex-1 flex-col lg:flex-row lg:items-center"
          >
            <StepCard
              description={step.description}
              emphasis={emphasisLabels.has(step.label)}
              index={index}
              label={step.label}
              tone={tone}
            />
            {index < visual.steps.length - 1 ? (
              <DirectionalConnector tone={tone} />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function ComparisonDiagram({
  tone,
  visual,
}: ToneProps & { visual: CaseVisualComparisonDiagram }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch">
      <StatePanel
        items={visual.currentState.items}
        label={visual.currentState.label}
        tone={tone}
      />
      <TransitionBridge tone={tone} />
      <StatePanel
        emphasis
        items={visual.futureState.items}
        label={visual.futureState.label}
        tone={tone}
      />
    </div>
  );
}

function DecisionFlowDiagram({
  tone,
  visual,
}: ToneProps & { visual: CaseVisualDecisionFlowDiagram }) {
  const firstLane = visual.steps.slice(0, 3);
  const secondLane = visual.steps.slice(3);

  return (
    <div className="space-y-4">
      <div className="space-y-3 lg:hidden">
        {visual.steps.map((step, index) => (
          <div key={step} className="space-y-3">
            <StepCard
              emphasis={step === "Open questions"}
              index={index}
              label={step}
              tone={tone}
            />
            {index < visual.steps.length - 1 ? (
              <DirectionalConnector tone={tone} />
            ) : null}
          </div>
        ))}
      </div>

      <div className="hidden gap-4 lg:grid lg:grid-cols-[minmax(0,0.82fr)_auto_minmax(0,1.18fr)]">
        <div className="space-y-3">
          {firstLane.map((step, index) => (
            <div key={step} className="space-y-3">
              <StepCard
                emphasis={step === "Open questions"}
                index={index}
                label={step}
                tone={tone}
              />
              {index < firstLane.length - 1 ? (
                <VerticalConnector tone={tone} />
              ) : null}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <BridgeBadge label="Before Development" tone={tone} />
        </div>

        <div className="space-y-3">
          {secondLane.map((step, index) => (
            <div key={step} className="space-y-3">
              <StepCard
                emphasis={step === "Open questions"}
                index={index + firstLane.length}
                label={step}
                tone={tone}
              />
              {index < secondLane.length - 1 ? (
                <VerticalConnector tone={tone} />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <p
        className={`rounded-[1.1rem] border px-4 py-4 text-sm leading-6 sm:text-base ${
          tone === "dark"
            ? "border-accent/24 bg-accent/14 text-white/74"
            : "border-accent/18 bg-accent-soft/72 text-ink/74"
        }`}
      >
        {visual.note}
      </p>
    </div>
  );
}

function CollaborationDiagram({
  tone,
  visual,
}: ToneProps & { visual: CaseVisualCollaborationDiagram }) {
  const leftColumn = visual.collaborators.slice(0, 2);
  const rightColumn = visual.collaborators.slice(2, 4);
  const continuousImprovement = visual.collaborators[4];
  const centerFirst = visual.mobileCenterPlacement !== "last";

  return (
    <div className="space-y-4">
      <div className="space-y-3 lg:hidden">
        {centerFirst ? (
          <CenterNode
            description={visual.centerDescription}
            eyebrow={visual.centerEyebrow}
            label={visual.centerLabel}
            tone={tone}
          />
        ) : null}
        {visual.collaborators.map((item) => (
          <CollaborationNode key={item.label} item={item} tone={tone} />
        ))}
        {centerFirst ? null : (
          <CenterNode
            description={visual.centerDescription}
            eyebrow={visual.centerEyebrow}
            label={visual.centerLabel}
            tone={tone}
          />
        )}
      </div>

      <div className="hidden lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(220px,0.88fr)_minmax(0,1fr)] lg:items-center lg:gap-4">
        <div className="space-y-3">
          {leftColumn.map((item) => (
            <CollaborationNode key={item.label} item={item} tone={tone} />
          ))}
        </div>

        <div className="relative flex flex-col items-center gap-4 py-6">
          <div
            aria-hidden="true"
            className={`absolute left-1/2 top-[4.4rem] h-px w-[calc(100%+8rem)] -translate-x-1/2 ${
              tone === "dark" ? "bg-white/12" : "bg-line-strong"
            }`}
          />
          <div
            aria-hidden="true"
            className={`absolute left-1/2 top-[calc(4.4rem+1px)] h-[4.5rem] w-px -translate-x-1/2 ${
              tone === "dark" ? "bg-white/12" : "bg-line-strong"
            }`}
          />
          <CenterNode
            description={visual.centerDescription}
            eyebrow={visual.centerEyebrow}
            label={visual.centerLabel}
            tone={tone}
          />
          {continuousImprovement ? (
            <CollaborationNode
              compact
              item={continuousImprovement}
              tone={tone}
            />
          ) : null}
        </div>

        <div className="space-y-3">
          {rightColumn.map((item) => (
            <CollaborationNode key={item.label} item={item} tone={tone} />
          ))}
        </div>
      </div>
    </div>
  );
}

type StepCardProps = ToneProps & {
  description?: string;
  emphasis?: boolean;
  index: number;
  label: string;
};

function StepCard({
  description,
  emphasis = false,
  index,
  label,
  tone,
}: StepCardProps) {
  const baseClass =
    tone === "dark"
      ? "border-white/10 bg-white/[0.04]"
      : "border-line bg-white/72";
  const emphasisClass =
    tone === "dark"
      ? "border-accent/28 bg-accent/12"
      : "border-accent/18 bg-accent-soft/75";
  const titleClass = tone === "dark" ? "text-white" : "text-ink";
  const bodyClass = tone === "dark" ? "text-white/70" : "text-ink/70";
  const eyebrowClass = tone === "dark" ? "text-white/40" : "text-muted";

  return (
    <article
      className={`rounded-[1.15rem] border p-4 sm:p-5 ${
        emphasis ? emphasisClass : baseClass
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className={`eyebrow ${eyebrowClass}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-accent/80" />
      </div>
      <h4 className={`mt-4 text-base font-medium leading-6 ${titleClass}`}>
        {label}
      </h4>
      {description ? (
        <p className={`mt-3 text-sm leading-6 sm:text-base ${bodyClass}`}>
          {description}
        </p>
      ) : null}
    </article>
  );
}

type StatePanelProps = ToneProps & {
  emphasis?: boolean;
  items: string[];
  label: string;
};

function StatePanel({
  emphasis = false,
  items,
  label,
  tone,
}: StatePanelProps) {
  const baseClass =
    tone === "dark"
      ? "border-white/10 bg-white/[0.04]"
      : "border-line bg-white/72";
  const emphasisClass =
    tone === "dark"
      ? "border-accent/28 bg-accent/12"
      : "border-accent/18 bg-accent-soft/72";
  const eyebrowClass = tone === "dark" ? "text-white/40" : "text-muted";
  const itemClass = tone === "dark" ? "text-white/72" : "text-ink/72";

  return (
    <section
      className={`rounded-[1.2rem] border p-4 sm:p-5 ${
        emphasis ? emphasisClass : baseClass
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className={`eyebrow ${eyebrowClass}`}>{label}</span>
        <span
          aria-hidden="true"
          className={`h-2.5 w-2.5 rounded-full ${
            emphasis ? "bg-accent" : tone === "dark" ? "bg-white/26" : "bg-line-strong"
          }`}
        />
      </div>

      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className={`flex items-start gap-3 text-sm leading-6 sm:text-base ${itemClass}`}>
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function CenterNode({
  description,
  eyebrow = "Facilitator",
  label,
  tone,
}: ToneProps & { description?: string; eyebrow?: string; label: string }) {
  return (
    <article
      className={`relative z-10 w-full rounded-[1.25rem] border px-5 py-5 text-center ${
        tone === "dark"
          ? "border-accent/28 bg-accent/14"
          : "border-accent/18 bg-accent-soft/78"
      }`}
    >
      <p className={`eyebrow ${tone === "dark" ? "text-white/40" : "text-muted"}`}>
        {eyebrow}
      </p>
      <h4
        className={`mt-4 text-xl font-semibold leading-tight tracking-[-0.04em] ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {label}
      </h4>
      {description ? (
        <p
          className={`mt-3 text-sm leading-6 sm:text-base ${
            tone === "dark" ? "text-white/72" : "text-ink/72"
          }`}
        >
          {description}
        </p>
      ) : null}
    </article>
  );
}

function CollaborationNode({
  compact = false,
  item,
  tone,
}: ToneProps & { compact?: boolean; item: CaseDiagramStep }) {
  return (
    <article
      className={`rounded-[1.1rem] border p-4 ${
        tone === "dark"
          ? "border-white/10 bg-white/[0.04]"
          : "border-line bg-white/72"
      } ${compact ? "text-center" : ""}`}
    >
      <h4
        className={`text-base font-medium leading-6 ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {item.label}
      </h4>
      {item.description ? (
        <p
          className={`mt-3 text-sm leading-6 sm:text-base ${
            tone === "dark" ? "text-white/70" : "text-ink/70"
          }`}
        >
          {item.description}
        </p>
      ) : null}
    </article>
  );
}

function DirectionalConnector({ tone }: ToneProps) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center py-1 lg:px-3 ${
        tone === "dark" ? "text-white/28" : "text-muted"
      }`}
    >
      <span className="text-base lg:hidden">&darr;</span>
      <span className="hidden text-base lg:inline">&rarr;</span>
    </div>
  );
}

function VerticalConnector({ tone }: ToneProps) {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center py-1"
    >
      <div className={`h-5 w-px ${tone === "dark" ? "bg-white/12" : "bg-line-strong"}`} />
    </div>
  );
}

function TransitionBridge({ tone }: ToneProps) {
  return (
    <div
      aria-hidden="true"
      className="flex flex-col items-center justify-center gap-2 lg:flex-row"
    >
      <div className={`h-8 w-px lg:h-px lg:w-8 ${tone === "dark" ? "bg-white/12" : "bg-line-strong"}`} />
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm ${
          tone === "dark"
            ? "border-white/10 bg-white/[0.04] text-white/48"
            : "border-line bg-white/78 text-muted"
        }`}
      >
        <span className="lg:hidden">&darr;</span>
        <span className="hidden lg:inline">&rarr;</span>
      </div>
      <div className={`h-8 w-px lg:h-px lg:w-8 ${tone === "dark" ? "bg-white/12" : "bg-line-strong"}`} />
    </div>
  );
}

function BridgeBadge({ label, tone }: ToneProps & { label: string }) {
  return (
    <div
      className={`rounded-full border px-3 py-2 text-[11px] font-medium uppercase tracking-[0.22em] ${
        tone === "dark"
          ? "border-white/10 bg-white/[0.05] text-white/54"
          : "border-line bg-white/78 text-muted"
      }`}
    >
      {label}
    </div>
  );
}
