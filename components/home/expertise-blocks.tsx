import type { SkillBlock } from "@/data/site-content";

type ExpertiseBlocksProps = {
  blocks: SkillBlock[];
};

const toneClasses: Record<
  SkillBlock["tone"],
  {
    border: string;
    chip: string;
    glow: string;
  }
> = {
  blue: {
    border: "border-[#168BD2]/26",
    chip: "text-[#8bcfff]",
    glow: "from-[#168BD2]/20 via-transparent to-transparent",
  },
  purple: {
    border: "border-[#6E78C8]/26",
    chip: "text-[#c6ccff]",
    glow: "from-[#6E78C8]/18 via-transparent to-transparent",
  },
  orange: {
    border: "border-[#F4A83D]/26",
    chip: "text-[#ffd48b]",
    glow: "from-[#F4A83D]/18 via-transparent to-transparent",
  },
  green: {
    border: "border-[#62B778]/26",
    chip: "text-[#b8efc4]",
    glow: "from-[#62B778]/18 via-transparent to-transparent",
  },
};

export function ExpertiseBlocks({ blocks }: ExpertiseBlocksProps) {
  if (blocks.length < 4) {
    return null;
  }

  return (
    <div className="grid gap-4 xl:grid-cols-2 xl:auto-rows-fr">
      {blocks.map((block) => (
        <SkillPanel
          key={block.title}
          block={block}
          className="h-full min-h-[18rem]"
        />
      ))}
    </div>
  );
}

type SkillPanelProps = {
  block: SkillBlock;
  className?: string;
};

function SkillPanel({ block, className = "" }: SkillPanelProps) {
  const tone = toneClasses[block.tone];

  return (
    <article
      className={`relative overflow-hidden rounded-[2rem] border bg-[#102734]/84 p-6 backdrop-blur-sm sm:p-7 ${tone.border} ${className}`.trim()}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-[linear-gradient(150deg,var(--tw-gradient-stops))] ${tone.glow}`}
      />
      <div className="relative flex h-full flex-col">
        <p className={`eyebrow ${tone.chip}`}>{block.title}</p>
        <p className="mt-5 max-w-[30ch] text-[clamp(1rem,1.04vw,1.15rem)] leading-8 text-white/78">
          {block.summary}
        </p>

        <div className="mt-auto flex flex-wrap gap-2.5 pt-6">
          {block.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-white/68"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
