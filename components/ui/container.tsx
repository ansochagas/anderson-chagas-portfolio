import type { ReactNode } from "react";

type ContainerProps = {
  as?: "div" | "main" | "section" | "header" | "footer";
  children: ReactNode;
  className?: string;
};

export function Container({
  as: Tag = "div",
  children,
  className = "",
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1180px] px-5 sm:px-6 lg:px-8 ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
