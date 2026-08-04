import { ReactNode } from "react";
import { Reveal } from "./reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-canopy-900 dark:text-sand-50 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-ink-900/70 dark:text-sand-100/70">
          {description}
        </p>
      )}
    </Reveal>
  );
}
