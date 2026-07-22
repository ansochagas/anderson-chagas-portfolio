const focusPillars = [
  {
    label: "SaaS",
    description: "Recurring products, monetization and growth direction.",
    tone: "bg-[#168BD2]",
  },
  {
    label: "AI",
    description: "Traceable LLM workflows, retrieval and decision support.",
    tone: "bg-[#6E78C8]",
  },
  {
    label: "Automation",
    description: "Operational efficiency across product and enterprise flows.",
    tone: "bg-[#62B778]",
  },
  {
    label: "Transformation",
    description: "Process redesign, governance and delivery readiness.",
    tone: "bg-[#F4A83D]",
  },
];

export function HeroVisual() {
  return (
    <aside className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#102734]/88 p-6 text-white backdrop-blur-sm sm:p-8 xl:p-9">
      <div
        aria-hidden="true"
        className="absolute -right-16 top-10 h-48 w-48 rounded-full bg-[#168BD2]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#6E78C8]/14 blur-3xl"
      />

      <div className="relative space-y-6 lg:space-y-7">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(220px,0.76fr)] md:items-start">
          <div>
            <p className="eyebrow text-white/42">Executive Focus</p>
            <h2 className="mt-4 max-w-[15ch] text-[clamp(2rem,2.3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-balance">
              Product strategy with technical execution built in.
            </h2>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-[#081820]/68 px-5 py-4 md:min-h-[7.5rem] md:text-right">
            <p className="eyebrow text-white/34">Operating Span</p>
            <p className="mt-3 text-[clamp(1rem,1.1vw,1.2rem)] font-medium leading-7 text-white/82 md:mt-5">
              Product
              <span className="mx-2 text-white/26">/</span>
              AI
              <span className="mx-2 text-white/26">/</span>
              Systems
            </p>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] xl:items-stretch">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            <div className="rounded-[1.8rem] border border-white/10 bg-[#081820]/68 p-5 xl:min-h-[10.5rem] xl:p-6">
              <p className="eyebrow text-white/40">Approach</p>
              <p className="mt-4 max-w-[28ch] text-[0.98rem] leading-7 text-white/72">
                Discovery-first product work connecting business context,
                technical feasibility and delivery readiness.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5 xl:min-h-[10.5rem] xl:p-6">
              <p className="eyebrow text-white/40">Leadership Lens</p>
              <p className="mt-4 max-w-[30ch] text-[0.98rem] leading-7 text-white/72">
                Stronger outcomes through backlog ownership, stakeholder
                alignment and hands-on collaboration with engineering.
              </p>
            </div>
          </div>

          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
            {focusPillars.map((pillar) => (
              <article
                key={pillar.label}
                className="min-w-0 rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-4 sm:min-h-[11rem] sm:p-5 xl:p-6"
              >
                <span className={`h-1.5 w-12 rounded-full ${pillar.tone} block`} />
                <h3 className="mt-5 break-words text-[clamp(1.08rem,0.95vw,1.42rem)] font-semibold leading-[1.04] tracking-[-0.04em]">
                  {pillar.label}
                </h3>
                <p className="mt-3 max-w-[22ch] text-sm leading-6 text-white/66 sm:text-[0.94rem] sm:leading-7">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
