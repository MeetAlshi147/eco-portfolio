"use client";

import { motion } from "framer-motion";

/**
 * Signature hero graphic. The leaf outline is a circuit-board silhouette;
 * its veins are PCB traces with solder-pad nodes, and the two halves
 * cross-fade in on load to read as "circuitry regrowing as nature."
 */
export function LeafCircuit({ className = "" }: { className?: string }) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.15, duration: 1.4, ease: [0.22, 1, 0.36, 1] },
        opacity: { delay: i * 0.15, duration: 0.3 },
      },
    }),
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 -z-10 rounded-full bg-sprout-200/50 blur-3xl dark:bg-canopy-700/30"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.svg
        viewBox="0 0 360 360"
        className="h-full w-full"
        initial="hidden"
        animate="visible"
      >
        {/* Leaf silhouette */}
        <motion.path
          d="M180 40c88 0 140 52 140 140S268 320 180 320 40 268 40 180C40 92 92 40 180 40Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-canopy-600 dark:text-sprout-300"
          variants={draw}
          custom={0}
        />
        {/* Central vein / trunk trace */}
        <motion.path
          d="M180 70v220"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-canopy-500 dark:text-sprout-400"
          variants={draw}
          custom={1}
        />
        {/* Circuit-trace veins, right */}
        <motion.path
          d="M180 120h40v30h30M180 180h55v-20M180 240h40v25h35"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-soil-500 dark:text-sprout-300/80"
          variants={draw}
          custom={2}
        />
        {/* Circuit-trace veins, left */}
        <motion.path
          d="M180 130h-38v25h-28M180 190h-50v-15M180 245h-42v20h-30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-soil-500 dark:text-sprout-300/80"
          variants={draw}
          custom={2.4}
        />
        {/* Solder-pad nodes */}
        {[
          [250, 150],
          [235, 160],
          [215, 245],
          [250, 265],
          [104, 155],
          [102, 175],
          [96, 245],
          [70, 265],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={3.2}
            fill="currentColor"
            className="text-canopy-700 dark:text-sprout-200"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 + i * 0.08, duration: 0.35 }}
          />
        ))}
      </motion.svg>
    </div>
  );
}
