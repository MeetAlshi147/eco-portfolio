"use client";

import { motion } from "framer-motion";

interface CircuitDividerProps {
  flip?: boolean;
  className?: string;
}

/**
 * The site's signature motif: a trace that begins as right-angled circuit
 * segments (the "e-waste" side) and resolves into a single organic root
 * curve (the "reborn as nature" side). Used at every section seam.
 */
export function CircuitDivider({ flip = false, className = "" }: CircuitDividerProps) {
  return (
    <div
      className={`pointer-events-none relative h-16 w-full overflow-hidden sm:h-20 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className={`h-full w-full ${flip ? "-scale-y-100" : ""}`}
      >
        <motion.path
          d="M0 40 H160 V20 H360 V60 H520 V40 H700 C820 40 840 40 900 40 C1000 40 1040 20 1200 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-canopy-400/50 dark:text-sprout-400/30"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        {[160, 360, 520, 700].map((x, i) => (
          <motion.circle
            key={x}
            cx={x}
            cy={i % 2 === 0 ? 40 : 20}
            r={3}
            fill="currentColor"
            className="text-soil-500/60 dark:text-sprout-300/50"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 + i * 0.12, duration: 0.4 }}
          />
        ))}
      </svg>
    </div>
  );
}
