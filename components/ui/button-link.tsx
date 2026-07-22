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
    "border border-[#168BD2]/60 bg-[#168BD2] text-white shadow-[0_18px_40px_rgba(22,139,210,0.28)] hover:bg-[#0f79ba]",
  secondary:
    "border border-white/14 bg-[#102734]/84 text-white shadow-[0_14px_32px_rgba(0,0,0,0.16)] hover:bg-[#163646]",
  ghost:
    "border border-white/10 bg-[#102734]/84 text-white hover:bg-white/[0.08]",
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
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168BD2]/45",
    disabled
      ? "cursor-not-allowed border border-white/10 bg-white/[0.03] text-white/38 shadow-none"
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
