"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { TypingText } from "./typing-text";
import { LeafCircuit } from "./leaf-circuit";
import { LeafIcon, RecycleIcon, EarthIcon } from "./eco-icons";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Ambient eco-tech background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-sprout-100/60 via-sand-50 to-sand-50 dark:from-canopy-900/40 dark:via-ink-950 dark:to-ink-950" />
      <div className="pointer-events-none absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-sprout-200/50 blur-3xl animate-blob dark:bg-canopy-800/40" />
      <div className="pointer-events-none absolute -right-16 bottom-10 -z-10 h-80 w-80 rounded-full bg-soil-300/30 blur-3xl animate-blob dark:bg-soil-700/20" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-noise opacity-40" />

      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item} className="mb-6 flex flex-wrap items-center gap-2">
            <span className="chip">
              <LeafIcon className="h-3.5 w-3.5" /> AI/ML
            </span>
            <span className="chip">
              <RecycleIcon className="h-3.5 w-3.5" /> Computer Vision
            </span>
            <span className="chip">
              <EarthIcon className="h-3.5 w-3.5" /> Full-Stack Development
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-medium leading-[1.08] text-canopy-950 dark:text-sand-50 sm:text-5xl lg:text-6xl"
          >
            <TypingText text="Turning ideas into functional software" />
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 font-display text-2xl text-canopy-800 dark:text-sprout-200 sm:text-3xl"
          >
            Meet Mahesh Alshi
          </motion.p>

          <motion.p
            variants={item}
            className="mt-2 text-base text-ink-900/70 dark:text-sand-100/70"
          >
            B.Tech in Information Technology
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-900/70 dark:text-sand-100/70"
          >
            I work on building and refining software—from computer vision models to full-stack applications. My focus is on writing efficient code, structuring systems properly, and making things run reliably beyond just prototypes.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail size={15} /> Get in Touch
            </a>
            <a href="/resume/Meet Alshi Resume.pdf" download className="btn-ghost">
              <Download size={15} /> Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <LeafCircuit className="h-full w-full" />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-canopy-700/60 dark:text-sprout-300/50 sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
