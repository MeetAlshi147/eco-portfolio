import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function LeafIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 13.5C4 7 9 3 19 3c0 10-4 15-10.5 15C6 18 4 16 4 13.5Z" />
      <path d="M6.5 17.5 15 9" />
    </svg>
  );
}

export function RecycleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="m10 3-3 5.2M14 3l3 5.2M4.6 15 3 12l3-5.2M8 21l-3-1.6L4.6 15M17 21h3.4L22 18M20 15l1.4 3-1.4 3M14 21h-4" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function EarthIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9.5h17M3.5 14.5h17" />
      <path d="M12 3c2.4 2.4 3.6 5.7 3.6 9s-1.2 6.6-3.6 9c-2.4-2.4-3.6-5.7-3.6-9S9.6 5.4 12 3Z" />
    </svg>
  );
}

export function ChipIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="7" y="7" width="10" height="10" rx="1.4" />
      <path d="M9.5 7V4M14.5 7V4M9.5 20v-3M14.5 20v-3M7 9.5H4M7 14.5H4M20 9.5h-3M20 14.5h-3" />
    </svg>
  );
}

export function CircuitNodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <path d="M12 4v4M12 16v4M4 12h4M16 12h4" />
    </svg>
  );
}
