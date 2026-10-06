import { Award } from "lucide-react";
import { Certification } from "@/data/types";
import { FileViewer } from "./file-viewer";
import { Reveal } from "./reveal";

export function CertificationCard({
  certification,
  index,
}: {
  certification: Certification;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.08}>
      <div className="glass-card flex h-full flex-col p-7 transition-transform duration-300 hover:-translate-y-1.5">
        <div className="flex items-start justify-between gap-3">
          <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-canopy-700/8 text-canopy-700 dark:bg-white/5 dark:text-sprout-300">
            <Award size={19} />
          </span>
          <span className="chip whitespace-nowrap">{certification.score}</span>
        </div>

        <h3 className="mt-4 font-display text-lg text-canopy-900 dark:text-sand-50">
          {certification.title}
        </h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-canopy-600 dark:text-sprout-400">
          {certification.issuer} · {certification.date}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-900/70 dark:text-sand-100/70">
          {certification.description}
        </p>

        <div className="mt-6 border-t border-canopy-700/10 pt-5 dark:border-sprout-300/10">
          <FileViewer
            fileUrl={certification.fileUrl}
            fileLabel={`${certification.title}.pdf`}
            fileType={certification.fileType}
          />
        </div>
      </div>
    </Reveal>
  );
}
