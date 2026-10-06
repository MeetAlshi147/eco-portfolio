"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Eye, FileText, X } from "lucide-react";

interface FileViewerProps {
  fileUrl: string | null;
  fileLabel?: string;
  fileType?: "pdf" | "image";
}

export function FileViewer({
  fileUrl,
  fileLabel = "Document.pdf",
  fileType = "pdf",
}: FileViewerProps) {
  const [open, setOpen] = useState(false);

  if (!fileUrl) {
    return (
      <div className="flex items-center gap-2 rounded-full border border-dashed border-canopy-700/25 px-4 py-2 text-xs text-ink-900/50 dark:border-sprout-300/25 dark:text-sand-100/50">
        <FileText size={14} /> File coming soon
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap gap-2.5">
        <button type="button" onClick={() => setOpen(true)} className="btn-ghost !py-2 !px-4 text-xs">
          <Eye size={14} /> Preview
        </button>
        <a href={fileUrl} download className="btn-ghost !py-2 !px-4 text-xs">
          <Download size={14} /> Download
        </a>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card relative flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl bg-sand-50 dark:bg-ink-900"
            >
              <div className="flex items-center justify-between border-b border-canopy-700/10 px-5 py-3 dark:border-sprout-300/10">
                <p className="truncate font-mono text-xs text-ink-900/70 dark:text-sand-100/70">
                  {fileLabel}
                </p>
                <button
                  type="button"
                  aria-label="Close preview"
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-canopy-700 hover:bg-canopy-700/10 dark:text-sprout-200 dark:hover:bg-white/10"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="flex-1 bg-white dark:bg-ink-950">
                {fileType === "image" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={fileUrl}
                    alt={fileLabel}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <iframe src={fileUrl} title={fileLabel} className="h-full w-full" />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
