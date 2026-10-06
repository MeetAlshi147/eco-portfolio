"use client";

import { motion } from "framer-motion";

export function SkillBar({ name, level, delay = 0 }: { name: string; level: number; delay?: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-ink-900/80 dark:text-sand-100/80">{name}</span>
        <span className="font-mono text-xs text-canopy-600 dark:text-sprout-400">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-canopy-700/8 dark:bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-canopy-500 to-sprout-400 dark:from-canopy-400 dark:to-sprout-300"
        />
      </div>
    </div>
  );
}
