type SectionIntroProps = {
  description: string;
  eyebrow: string;
  headingLevel?: "h1" | "h2";
  invert?: boolean;
  title: string;
};

export function SectionIntro({
  description,
  eyebrow,
  headingLevel = "h2",
  invert = false,
  title,
}: SectionIntroProps) {
  const HeadingTag = headingLevel;

  return (
    <div className="max-w-4xl space-y-4">
      <p className={`eyebrow ${invert ? "text-white/46" : "text-muted"}`}>
        {eyebrow}
      </p>
      <HeadingTag
        className={`text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl ${
          invert ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </HeadingTag>
      <p
        className={`max-w-3xl text-base leading-8 sm:text-lg ${
          invert ? "text-white/68" : "text-ink/72"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
