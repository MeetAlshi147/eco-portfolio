import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Education() {
  return (
    <section id="education" className="section-shell py-24 sm:py-28">
      <SectionHeading eyebrow="Academics" title="Education" />

      <Reveal delay={0.1} className="mt-10">
        <div className="glass-card flex flex-col gap-5 p-7 sm:flex-row sm:items-center sm:gap-6">
          <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-canopy-700/8 text-canopy-700 dark:bg-white/5 dark:text-sprout-300">
            <GraduationCap size={24} />
          </span>
          <div>
            <h3 className="font-display text-xl text-canopy-900 dark:text-sand-50">
              B.Tech in Information Technology
            </h3>
            <p className="mt-1 text-sm text-ink-900/70 dark:text-sand-100/70">
              VIDYALANKAR INSTITUTE OF TECHNOLOGY
            </p>
          </div>
          <span className="chip sm:ml-auto">2024 — 2028</span>
        </div>
      </Reveal>
      
      <Reveal delay={0.1} className="mt-10">
        <div className="glass-card flex flex-col gap-5 p-7 sm:flex-row sm:items-center sm:gap-6">
          <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-canopy-700/8 text-canopy-700 dark:bg-white/5 dark:text-sprout-300">
            <GraduationCap size={24} />
          </span>
          <div>
            <h3 className="font-display text-xl text-canopy-900 dark:text-sand-50">
              HSC
            </h3>
            <p className="mt-1 text-sm text-ink-900/70 dark:text-sand-100/70">
              ST JOHN JR. COLLEGE
            </p>
          </div>
          <span className="chip sm:ml-auto">2022 — 2024</span>
        </div>
      </Reveal>


      <Reveal delay={0.1} className="mt-10">
        <div className="glass-card flex flex-col gap-5 p-7 sm:flex-row sm:items-center sm:gap-6">
          <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-canopy-700/8 text-canopy-700 dark:bg-white/5 dark:text-sprout-300">
            <GraduationCap size={24} />
          </span>
          <div>
            <h3 className="font-display text-xl text-canopy-900 dark:text-sand-50">
              SSC
            </h3>
            <p className="mt-1 text-sm text-ink-900/70 dark:text-sand-100/70">
              BHARATI VIDYAPEETH UNIVERSITY
            </p>
          </div>
          <span className="chip sm:ml-auto">2021 — 2022</span>
        </div>
      </Reveal>


    </section>
  );
}
