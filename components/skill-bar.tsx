"use client";

import { motion } from "framer-motion";

const labelColor: Record<string, string> = {
  "Beginner":               "bg-soil-400/15 text-soil-600 dark:bg-soil-500/20 dark:text-soil-300 border-soil-400/30",
  "Beginner – Intermediate":"bg-amber-400/10 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300 border-amber-400/30",
  "Intermediate":           "bg-sprout-400/15 text-canopy-700 dark:bg-sprout-400/20 dark:text-sprout-300 border-sprout-400/30",
  "Intermediate / Advanced":"bg-canopy-400/15 text-canopy-800 dark:bg-canopy-400/20 dark:text-canopy-200 border-canopy-400/30",
  "Advanced":               "bg-canopy-600/15 text-canopy-900 dark:bg-canopy-300/20 dark:text-canopy-100 border-canopy-600/30",
};

export function SkillBar({
  name,
  label,
  delay = 0,
}: {
  name: string;
  label: string;
  delay?: number;
}) {
  const colorClass =
    labelColor[label] ??
    "bg-sprout-400/15 text-canopy-700 dark:bg-sprout-400/20 dark:text-sprout-300 border-sprout-400/30";

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center justify-between gap-3"
    >
      <span className="text-sm text-ink-900/80 dark:text-sand-100/80">{name}</span>
      <span
        className={`shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-wide ${colorClass}`}
      >
        {label}
      </span>
    </motion.div>
  );
}
