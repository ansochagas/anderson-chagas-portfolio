import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  className?: string;
  download?: boolean | string;
  disabled?: boolean;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-accent text-white shadow-[0_18px_40px_rgba(20,116,111,0.26)] hover:bg-accent-strong",
  secondary:
    "border border-white/12 bg-white/[0.05] text-white hover:bg-white/[0.1]",
  ghost:
    "border border-line bg-white/55 text-ink hover:bg-ink hover:text-white",
};

export function ButtonLink({
  children,
  className = "",
  download,
  disabled = false,
  href,
  variant = "primary",
}: ButtonLinkProps) {
  const classes = [
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45",
    disabled
      ? "cursor-not-allowed border border-line bg-white/30 text-ink/48 shadow-none"
      : variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (disabled || !href) {
    return (
      <span aria-disabled="true" className={classes}>
        {children}
      </span>
    );
  }

  const external = href.startsWith("http");
  const directHref = external || href.startsWith("mailto:") || href.startsWith("tel:");

  if (download) {
    return (
      <a
        className={classes}
        download={download}
        href={href}
      >
        {children}
      </a>
    );
  }

  if (directHref) {
    return (
      <a
        className={classes}
        href={href}
        rel={external ? "noreferrer noopener" : undefined}
        target={external ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      className={classes}
      href={href}
      rel={external ? "noreferrer noopener" : undefined}
      target={external ? "_blank" : undefined}
    >
      {children}
    </Link>
  );
}
