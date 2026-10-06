"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sprout, BookOpen, NotebookPen, Link2 } from "lucide-react";
import { Activity } from "@/data/types";
import { FileViewer } from "./file-viewer";
import { Reveal } from "./reveal";

export function ActivityCard({ activity, index }: { activity: Activity; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.06}>
      <div className="glass-card overflow-hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-start justify-between gap-4 p-6 text-left sm:p-7"
        >
          <div>
            <span className="chip">{activity.type} · {activity.date}</span>
            <h3 className="mt-3 font-display text-xl text-canopy-900 dark:text-sand-50 sm:text-2xl">
              {activity.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-900/65 dark:text-sand-100/65">
              {activity.objective}
            </p>
          </div>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-canopy-700/8 text-canopy-700 dark:bg-white/5 dark:text-sprout-300"
          >
            <ChevronDown size={16} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-6 border-t border-canopy-700/10 px-6 pb-7 pt-6 dark:border-sprout-300/10 sm:px-7">
                <div>
                  <p className="eyebrow flex items-center gap-1.5">
                    <BookOpen size={12} /> Uploaded File
                  </p>
                  <div className="mt-2.5">
                    <FileViewer fileUrl={activity.fileUrl} fileLabel={activity.fileLabel} />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="eyebrow flex items-center gap-1.5">
                      <NotebookPen size={12} /> What I Learned
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-900/75 dark:text-sand-100/75">
                      {activity.whatILearned}
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow flex items-center gap-1.5">
                      <Sprout size={12} /> Sustainability Connection
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-900/75 dark:text-sand-100/75">
                      {activity.sustainabilityConnection}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-canopy-700/5 p-5 dark:bg-white/[0.03]">
                  <p className="eyebrow">Reflection</p>
                  <p className="mt-2 text-sm italic leading-relaxed text-ink-900/75 dark:text-sand-100/75">
                    &ldquo;{activity.reflection}&rdquo;
                  </p>
                </div>

                <div>
                  <p className="eyebrow flex items-center gap-1.5">
                    <Link2 size={12} /> References
                  </p>
                  <ul className="mt-2 space-y-1">
                    {activity.references.map((ref) => (
                      <li
                        key={ref}
                        className="text-xs leading-relaxed text-ink-900/60 dark:text-sand-100/60"
                      >
                        — {ref}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}
