"use client";

import { Download } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const resumeUrl = "/resume/Meet Alshi Resume.pdf";

export function Resume() {
  return (
    <section id="resume" className="section-shell py-24 sm:py-28">
      <SectionHeading eyebrow="Full Overview" title="Resume" />

      <Reveal delay={0.1} className="mt-10">
        <div className="glass-card overflow-hidden p-3">
          <div className="flex items-center justify-between gap-4 p-4">
            <p className="font-mono text-xs text-ink-900/60 dark:text-sand-100/60">
              A quick snapshot of my skills, projects, and experience in AI, 
              software development, and problem-solving.
            </p>
            <a href={resumeUrl} download className="btn-primary !py-2.5 !px-5 text-xs">
              <Download size={14} /> Get My Resume
            </a>
          </div>
          <div className="h-[600px] w-full overflow-hidden rounded-2xl bg-white dark:bg-ink-950">
            <iframe src={resumeUrl} title="Resume preview" className="h-full w-full" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
