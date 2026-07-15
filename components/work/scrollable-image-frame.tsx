"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ScrollableImageFrameProps = {
  ariaLabel: string;
  children: ReactNode;
  minWidth: number;
};

export function ScrollableImageFrame({
  ariaLabel,
  children,
  minWidth,
}: ScrollableImageFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const centerContent = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      container.scrollLeft = maxScroll > 0 ? maxScroll / 2 : 0;
    };

    centerContent();

    const frameId = window.requestAnimationFrame(centerContent);
    const timeoutId = window.setTimeout(centerContent, 180);
    const resizeObserver = new ResizeObserver(centerContent);

    resizeObserver.observe(container);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-6 overflow-x-auto pb-2"
      aria-label={ariaLabel}
      tabIndex={0}
    >
      <div className="w-full" style={{ minWidth: `${minWidth}px` }}>
        {children}
      </div>
    </div>
  );
}
