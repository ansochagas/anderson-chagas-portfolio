import type { ExpertiseGroup } from "@/data/site-content";

type SkillGroupProps = {
  group: ExpertiseGroup;
};

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <article className="surface-card rounded-[1.7rem] p-6">
      <p className="eyebrow text-muted">{group.title}</p>
      <p className="mt-5 text-base leading-7 text-ink/72">{group.summary}</p>
      <ul className="mt-6 space-y-3 text-sm leading-7 text-ink/78 sm:text-base">
        {group.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
