import type { CaseVisualPlaceholder } from "@/data/case-content";

type CaseVisualPlaceholderProps = {
  placeholder: CaseVisualPlaceholder;
  tone?: "dark" | "light";
};

export function CaseVisualPlaceholder({
  placeholder,
  tone = "light",
}: CaseVisualPlaceholderProps) {
  return (
    <figure
      className={`relative overflow-hidden rounded-[1.9rem] p-5 sm:p-6 ${
        tone === "dark" ? "surface-card-dark" : "surface-card"
      }`}
    >
      <div
        className={`absolute inset-0 ${
          tone === "dark"
            ? "bg-[radial-gradient(circle_at_top_right,rgba(20,116,111,0.2),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]"
            : "bg-[radial-gradient(circle_at_top_right,rgba(20,116,111,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.48),transparent)]"
        }`}
      />

      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p
              className={`eyebrow ${
                tone === "dark" ? "text-white/46" : "text-muted"
              }`}
            >
              {placeholder.eyebrow}
            </p>
            <h3
              className={`mt-3 text-2xl font-semibold leading-tight tracking-[-0.04em] ${
                tone === "dark" ? "text-white" : "text-ink"
              }`}
            >
              {placeholder.title}
            </h3>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              tone === "dark"
                ? "border border-white/10 bg-white/[0.06] text-white/62"
                : "border border-line bg-white/78 text-ink/62"
            }`}
          >
            {placeholder.todoLabel}
          </span>
        </div>

        <div
          role="img"
          aria-label={placeholder.ariaLabel}
          className="mt-6 rounded-[1.5rem] border border-line bg-deep p-4 text-white"
        >
          {placeholder.variant === "dashboard" && <DashboardComposition />}
          {placeholder.variant === "tools" && <ToolsComposition />}
          {placeholder.variant === "alerts" && <AlertsComposition />}
          {placeholder.variant === "diagram" && <DiagramComposition />}
          {placeholder.variant === "ai" && <AiComposition />}
          {placeholder.variant === "framework" && <FrameworkComposition />}
          {placeholder.variant === "comparison" && <ComparisonComposition />}
          {placeholder.variant === "workflow" && <WorkflowComposition />}
          {placeholder.variant === "stakeholders" && (
            <StakeholdersComposition />
          )}
          {placeholder.variant === "sources" && <SourcesComposition />}
          {placeholder.variant === "pipeline" && <PipelineComposition />}
          {placeholder.variant === "semantic" && <SemanticComposition />}
          {placeholder.variant === "decisions" && <DecisionsComposition />}
        </div>

        <figcaption
          className={`mt-5 text-sm leading-6 sm:text-base ${
            tone === "dark" ? "text-white/62" : "text-ink/62"
          }`}
        >
          {placeholder.description}
        </figcaption>
      </div>
    </figure>
  );
}

function DashboardComposition() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[1.3rem] border border-white/8 bg-white/[0.04] p-4">
          <div className="flex items-center justify-between gap-3">
            <span className="eyebrow text-white/40">Live Matchboard</span>
            <span className="rounded-full bg-accent/18 px-3 py-1 text-xs text-white/62">
              TODO screen
            </span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {["Goals", "Corners", "Cards"].map((item) => (
              <div
                key={item}
                className="rounded-[1rem] border border-white/7 bg-white/[0.04] p-3"
              >
                <div className="h-1.5 w-8 rounded-full bg-accent" />
                <p className="mt-3 text-xs text-white/48">{item}</p>
                <div className="mt-3 space-y-2">
                  <div className="h-2 rounded-full bg-white/10" />
                  <div className="h-2 w-4/5 rounded-full bg-white/6" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.3rem] border border-white/8 bg-white/[0.04] p-4">
          <span className="eyebrow text-white/40">Signal Panels</span>
          <div className="mt-4 space-y-3">
            {[48, 72, 36].map((height) => (
              <div
                key={height}
                className="rounded-[1rem] border border-white/6 bg-white/[0.04] p-3"
              >
                <div className="h-2 w-20 rounded-full bg-white/14" />
                <div
                  className="mt-4 rounded-[0.8rem] bg-[linear-gradient(180deg,rgba(20,116,111,0.72),rgba(20,116,111,0.12))]"
                  style={{ height }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolsComposition() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {["Goals", "Corners", "Cards", "Shots"].map((item, index) => (
        <div
          key={item}
          className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-4"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="eyebrow text-white/42">{item}</span>
            <span className="h-2 w-2 rounded-full bg-accent" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {Array.from({ length: 8 }).map((_, cellIndex) => (
              <div
                key={`${item}-${cellIndex}`}
                className={`aspect-square rounded-[0.75rem] ${
                  (cellIndex + index) % 3 === 0
                    ? "bg-accent/28"
                    : "bg-white/[0.07]"
                }`}
              />
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-2 rounded-full bg-white/10" />
            <div className="h-2 w-2/3 rounded-full bg-white/[0.06]" />
          </div>
        </div>
      ))}
    </div>
  );
}

function AlertsComposition() {
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {[
        "Goal pressure rising in the second half",
        "Corner pattern detected across live fixtures",
        "Cards scenario flagged for manual review",
      ].map((message, index) => (
        <div
          key={message}
          className={`rounded-[1.2rem] border p-4 ${
            index === 1
              ? "ml-6 border-accent/24 bg-accent/14"
              : "mr-6 border-white/8 bg-white/[0.04]"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="eyebrow text-white/40">Telegram Alert</span>
            <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-white/58">
              TODO sample
            </span>
          </div>
          <p className="mt-4 text-sm leading-7 text-white/74 sm:text-base">
            {message}
          </p>
        </div>
      ))}
    </div>
  );
}

function DiagramComposition() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-4">
        <span className="eyebrow text-white/40">Inputs</span>
        <div className="mt-4 space-y-3">
          {["Live data", "Historical data", "User workflows"].map((item) => (
            <div
              key={item}
              className="rounded-[0.95rem] border border-white/7 bg-white/[0.04] px-4 py-3 text-sm text-white/72"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-4">
        <span className="eyebrow text-white/40">Product Flow</span>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {["Analytics", "Alerts", "AI", "Users"].map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <div className="rounded-[1rem] border border-white/7 bg-white/[0.04] px-4 py-3 text-sm text-white/72">
                {item}
              </div>
              {index < 3 && (
                <div className="h-px w-8 bg-[linear-gradient(90deg,rgba(20,116,111,0.9),rgba(255,255,255,0.2))]" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {["Dashboards", "External providers", "Telegram", "Product site"].map(
            (item) => (
              <div
                key={item}
                className="rounded-[0.95rem] border border-white/7 bg-white/[0.04] px-4 py-3 text-sm text-white/64"
              >
                {item}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function AiComposition() {
  return (
    <div className="grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-4">
        <span className="eyebrow text-white/40">Prompt Surface</span>
        <div className="mt-4 rounded-[1rem] border border-white/7 bg-white/[0.04] p-4">
          <div className="h-2 w-24 rounded-full bg-white/12" />
          <div className="mt-4 space-y-2">
            <div className="h-2 rounded-full bg-white/9" />
            <div className="h-2 w-11/12 rounded-full bg-white/8" />
            <div className="h-2 w-4/5 rounded-full bg-white/[0.06]" />
          </div>
        </div>
      </div>

      <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-4">
        <span className="eyebrow text-white/40">AI Output Blocks</span>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="rounded-[1rem] border border-white/7 bg-accent/14 p-4"
            >
              <div className="h-2 w-16 rounded-full bg-accent" />
              <div className="mt-4 space-y-2">
                <div className="h-2 rounded-full bg-white/10" />
                <div className="h-2 w-4/5 rounded-full bg-white/[0.07]" />
                <div className="h-2 w-2/3 rounded-full bg-white/[0.06]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FrameworkComposition() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.88fr_1.12fr]">
      <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-4">
        <span className="eyebrow text-white/40">Discovery Tracks</span>
        <div className="mt-4 space-y-3">
          {["Immersion", "Ideation", "Refinement"].map((item, index) => (
            <div
              key={item}
              className="rounded-[1rem] border border-white/7 bg-white/[0.04] p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-white/76">{item}</p>
                <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] text-white/54">
                  0{index + 1}
                </span>
              </div>
              <div className="mt-3 space-y-2">
                <div className="h-2 rounded-full bg-white/10" />
                <div className="h-2 w-4/5 rounded-full bg-white/[0.06]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-4">
        <span className="eyebrow text-white/40">Shared Structure</span>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {["Pain points", "Business rules", "Dependencies", "Approvals"].map(
            (item) => (
              <div
                key={item}
                className="rounded-[1rem] border border-white/7 bg-accent/14 p-4"
              >
                <div className="h-1.5 w-8 rounded-full bg-accent" />
                <p className="mt-4 text-sm text-white/74">{item}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function ComparisonComposition() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {[
        {
          label: "AS IS",
          items: ["Manual handoffs", "Exceptions scattered", "Legacy reliance"],
        },
        {
          label: "TO BE",
          items: ["Clear routing", "Defined rules", "Ready for automation"],
        },
      ].map((column, index) => (
        <div
          key={column.label}
          className={`rounded-[1.2rem] border p-4 ${
            index === 0
              ? "border-white/8 bg-white/[0.04]"
              : "border-accent/18 bg-accent/12"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="eyebrow text-white/40">{column.label}</span>
            <div
              className={`h-2.5 w-2.5 rounded-full ${
                index === 0 ? "bg-white/28" : "bg-accent"
              }`}
            />
          </div>
          <div className="mt-4 space-y-3">
            {column.items.map((item) => (
              <div
                key={item}
                className="rounded-[0.95rem] border border-white/7 bg-white/[0.04] px-4 py-3 text-sm text-white/72"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function WorkflowComposition() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-4">
          <span className="eyebrow text-white/40">Decision Flow</span>
          <div className="mt-4 flex flex-col gap-3">
            {[
              "Business need",
              "Rules and exceptions",
              "Technical validation",
              "Delivery-ready requirement",
            ].map((item, index, array) => (
              <div key={item} className="flex items-center gap-3">
                <div className="min-w-0 flex-1 rounded-[1rem] border border-white/7 bg-white/[0.04] px-4 py-3 text-sm text-white/72">
                  {item}
                </div>
                {index < array.length - 1 ? (
                  <div className="h-px w-8 bg-[linear-gradient(90deg,rgba(20,116,111,0.9),rgba(255,255,255,0.18))]" />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-4">
          <span className="eyebrow text-white/40">Open Questions</span>
          <div className="mt-4 space-y-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="rounded-[1rem] border border-dashed border-white/14 bg-white/[0.03] p-4"
              >
                <div className="h-2 w-20 rounded-full bg-white/12" />
                <div className="mt-3 h-2 rounded-full bg-white/8" />
                <div className="mt-2 h-2 w-4/5 rounded-full bg-white/[0.06]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StakeholdersComposition() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-4">
        <span className="eyebrow text-white/40">Stakeholder Groups</span>
        <div className="mt-4 grid gap-3">
          {["Operations", "Product", "Technology", "Approvers"].map((item) => (
            <div
              key={item}
              className="rounded-[1rem] border border-white/7 bg-white/[0.04] px-4 py-3 text-sm text-white/72"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-4">
        <span className="eyebrow text-white/40">Alignment Map</span>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {["Discovery", "Rules", "Validation", "Approval"].map((item) => (
            <div
              key={item}
              className="rounded-[1rem] border border-white/7 bg-accent/12 p-4"
            >
              <p className="text-sm text-white/76">{item}</p>
              <div className="mt-3 flex gap-2">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-7 w-7 rounded-full border border-white/10 bg-white/[0.05]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SourcesComposition() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          "Public databases",
          "Government portals",
          "Open reports",
          "Public registries",
        ].map((item) => (
          <div
            key={item}
            className="rounded-[1rem] border border-white/7 bg-white/[0.04] p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm text-white/74">{item}</p>
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/10" />
          </div>
        ))}
      </div>

      <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-4">
        <span className="eyebrow text-white/40">Collection Core</span>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="space-y-3">
            {["Source discovery", "Extraction rules"].map((item) => (
              <div
                key={item}
                className="rounded-[0.95rem] border border-white/7 bg-white/[0.04] px-4 py-3 text-sm text-white/70"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="hidden h-px w-12 bg-[linear-gradient(90deg,rgba(255,255,255,0.12),rgba(20,116,111,0.9),rgba(255,255,255,0.12))] lg:block" />

          <div className="rounded-[1rem] border border-accent/18 bg-accent/12 p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-white/80">
                Central collection
              </p>
              <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[11px] text-white/56">
                prototype
              </span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-2 rounded-full bg-white/10" />
              <div className="h-2 w-4/5 rounded-full bg-white/[0.06]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PipelineComposition() {
  const steps = [
    "Sources",
    "Collection",
    "Processing",
    "Enrichment",
    "Storage",
    "Search and Analysis",
  ];

  return (
    <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-4">
      <span className="eyebrow text-white/40">Pipeline Flow</span>
      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step}
            className="rounded-[1rem] border border-white/7 bg-white/[0.04] px-4 py-4"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm text-white/74">{step}</span>
              <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] text-white/56">
                0{index + 1}
              </span>
            </div>
            {index < steps.length - 1 ? (
              <div className="mt-4 h-px w-12 bg-[linear-gradient(90deg,rgba(20,116,111,0.9),rgba(255,255,255,0.16))]" />
            ) : (
              <div className="mt-4 h-px w-12 bg-transparent" />
            )}
            <div className="mt-3 h-2 rounded-full bg-white/10" />
            <div className="mt-2 h-2 w-4/5 rounded-full bg-white/[0.06]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SemanticComposition() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.88fr_1.12fr]">
      <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-4">
        <span className="eyebrow text-white/40">User Question</span>
        <div className="mt-4 rounded-[1rem] border border-white/7 bg-white/[0.04] p-4">
          <div className="h-2 w-24 rounded-full bg-white/12" />
          <div className="mt-4 space-y-2">
            <div className="h-2 rounded-full bg-white/10" />
            <div className="h-2 w-5/6 rounded-full bg-white/[0.06]" />
          </div>
        </div>

        <div className="mt-4 rounded-[1rem] border border-accent/18 bg-accent/12 p-4">
          <span className="eyebrow text-white/40">Semantic Retrieval</span>
          <div className="mt-3 grid gap-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="rounded-[0.9rem] border border-white/7 bg-white/[0.04] px-3 py-3 text-sm text-white/70"
              >
                Relevant record {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-3">
        <div className="rounded-[1rem] border border-white/7 bg-white/[0.04] p-4">
          <span className="eyebrow text-white/40">AI-Assisted Response</span>
          <div className="mt-4 space-y-2">
            <div className="h-2 rounded-full bg-white/10" />
            <div className="h-2 w-11/12 rounded-full bg-white/[0.08]" />
            <div className="h-2 w-4/5 rounded-full bg-white/[0.06]" />
          </div>
        </div>

        <div className="rounded-[1rem] border border-white/7 bg-white/[0.04] p-4">
          <span className="eyebrow text-white/40">Source References</span>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {["Record A", "Record B", "Record C", "Record D"].map((item) => (
              <div
                key={item}
                className="rounded-[0.9rem] border border-white/7 bg-white/[0.04] px-3 py-3 text-sm text-white/70"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DecisionsComposition() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-4">
        <span className="eyebrow text-white/40">Decision Criteria</span>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "Scalability",
            "Data quality",
            "Traceability",
            "Processing cost",
            "Maintainability",
          ].map((item, index) => (
            <div
              key={item}
              className={`rounded-[1rem] border p-4 ${
                index === 4
                  ? "sm:col-span-2 border-accent/18 bg-accent/12"
                  : "border-white/7 bg-white/[0.04]"
              }`}
            >
              <div className="h-1.5 w-8 rounded-full bg-accent" />
              <p className="mt-4 text-sm text-white/74">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-4">
        <span className="eyebrow text-white/40">Architecture Direction</span>
        <div className="mt-4 space-y-3">
          {[
            "Modular processing stages",
            "Structured source lineage",
            "Search-ready storage",
            "Controlled AI response layer",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[0.95rem] border border-white/7 bg-white/[0.04] px-4 py-3 text-sm text-white/70"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
