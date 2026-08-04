"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ScanFace, Share2, LineChart, MessageSquare } from "lucide-react";
import { Project } from "@/data/types";
import { Reveal } from "./reveal";

const icons = {
  camera: ScanFace,
  network: Share2,
  chart: LineChart,
  chat: MessageSquare,
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = icons[project.icon];

  return (
    <Reveal delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="glass-card group flex h-full flex-col p-7"
      >
        <div className="flex items-start justify-between">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-canopy-700/8 text-canopy-700 transition-colors group-hover:bg-canopy-700 group-hover:text-sprout-100 dark:bg-white/5 dark:text-sprout-300 dark:group-hover:bg-sprout-300 dark:group-hover:text-canopy-900">
            <Icon size={19} />
          </span>
          <span className="chip">{project.category}</span>
        </div>

        <h3 className="mt-5 font-display text-xl text-canopy-900 dark:text-sand-50">
          {project.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-ink-900/70 dark:text-sand-100/70">
          {project.description}
        </p>

        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-xs leading-relaxed text-ink-900/60 dark:text-sand-100/60"
            >
              <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-canopy-500 dark:bg-sprout-400" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-canopy-700/10 pt-5 dark:border-sprout-300/10">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-canopy-700 hover:text-canopy-900 dark:text-sprout-300 dark:hover:text-sprout-100"
            >
              <Github size={14} /> GitHub Repo
            </a>
          )}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-canopy-700 hover:text-canopy-900 dark:text-sprout-300 dark:hover:text-sprout-100"
            >
              <ArrowUpRight size={14} /> Live Demo
            </a>
          ) : (
            <span className="text-xs text-ink-900/40 dark:text-sand-100/40">Live demo in progress</span>
          )}
        </div>
      </motion.div>
    </Reveal>
  );
}
