import Image from "next/image";

import {
  type CaseVisual,
  type CaseVisualDiagram,
  type CaseVisualImage,
} from "@/data/case-content";

import { CaseVisualDiagram as CaseVisualDiagramBlock } from "@/components/work/case-visual-diagram";
import { CaseVisualPlaceholder } from "@/components/work/case-visual-placeholder";
import { ScrollableImageFrame } from "@/components/work/scrollable-image-frame";

type CaseVisualBlockProps = {
  className?: string;
  tone?: "dark" | "light";
  visual: CaseVisual;
};

export function CaseVisualBlock({
  className = "",
  tone = "light",
  visual,
}: CaseVisualBlockProps) {
  if (isDiagramVisual(visual)) {
    return (
      <CaseVisualDiagramBlock
        className={className}
        tone={tone}
        visual={visual}
      />
    );
  }

  if (!isImageVisual(visual)) {
    return (
      <div className={className}>
        <CaseVisualPlaceholder placeholder={visual} tone={tone} />
      </div>
    );
  }

  const surfaceClass = tone === "dark" ? "surface-card-dark" : "surface-card";
  const borderClass =
    tone === "dark"
      ? "border-white/10 bg-[#091012]"
      : "border-line bg-[#091012]";
  const imageFrame = (
    <div className={`overflow-hidden rounded-[1.5rem] border ${borderClass}`}>
      <Image
        src={visual.src}
        alt={visual.alt}
        width={visual.width}
        height={visual.height}
        priority={visual.priority}
        sizes={
          visual.sizes ??
          "(min-width: 1280px) 1120px, (min-width: 768px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
        }
        className="h-auto w-full object-contain"
      />
    </div>
  );

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
          <p
            className={`eyebrow ${
              tone === "dark" ? "text-white/46" : "text-muted"
            }`}
          >
            {visual.eyebrow}
          </p>
          <h3
            className={`text-balance text-2xl font-semibold leading-tight tracking-[-0.04em] ${
              tone === "dark" ? "text-white" : "text-ink"
            }`}
          >
            {visual.title}
          </h3>
        </div>

        {visual.mobileScrollable ? (
          <ScrollableImageFrame
            ariaLabel={`${visual.title} scrollable image container`}
            minWidth={visual.mobileMinWidth ?? 960}
          >
            {imageFrame}
          </ScrollableImageFrame>
        ) : (
          <div className="mt-6">{imageFrame}</div>
        )}

        <figcaption
          className={`mt-5 text-sm leading-6 sm:text-base ${
            tone === "dark" ? "text-white/62" : "text-ink/62"
          }`}
        >
          {visual.description}
        </figcaption>
      </div>
    </figure>
  );
}

function isImageVisual(visual: CaseVisual): visual is CaseVisualImage {
  return "kind" in visual && visual.kind === "image";
}

function isDiagramVisual(visual: CaseVisual): visual is CaseVisualDiagram {
  return "kind" in visual && visual.kind === "diagram";
}
