import { operatingModel } from "@/data/site-content";

export function HeroVisual() {
  return (
    <aside className="surface-card-dark fade-up-delay relative overflow-hidden rounded-[2rem] p-6 text-white sm:p-7 lg:p-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/22 to-transparent" />

      <div className="relative space-y-6">
        <div className="space-y-3">
          <p className="eyebrow text-white/54">How I Work</p>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.04em]">
            Discovery, alignment and buildable product direction.
          </h2>
          <p className="text-sm leading-7 text-white/64 sm:text-base">
            A compact view of how I turn ambiguity into clear product
            structure, stakeholder alignment and delivery readiness.
          </p>
        </div>

        <div className="grid gap-3">
          {operatingModel.map((item) => (
            <article
              key={item.step}
              className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="eyebrow text-white/42">{item.step}</p>
                  <h3 className="mt-3 text-xl font-medium text-white">
                    {item.title}
                  </h3>
                </div>
                <span className="rounded-full border border-white/12 px-3 py-1 text-xs text-white/52">
                  Core flow
                </span>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/64">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}
