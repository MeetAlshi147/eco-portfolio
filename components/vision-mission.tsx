import { Telescope, Target } from "lucide-react";
import { CircuitDivider } from "./circuit-divider";
import { Reveal } from "./reveal";

export function VisionMission() {
  return (
    <section id="vision" className="relative overflow-hidden">
      <CircuitDivider />
      <div className="bg-canopy-800 py-24 text-sand-50 dark:bg-ink-900 sm:py-28">
        <div className="section-shell grid gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="glass-card h-full border-white/10 bg-white/5 p-8">
              <Telescope size={22} className="text-sprout-300" />
              <p className="eyebrow mt-4 text-sprout-300">Vision</p>
              <p className="mt-3 font-display text-xl leading-snug text-sand-50 sm:text-2xl">
                &ldquo;To grow into a software engineer capable of designing 
                scalable systems and solving complex real-world problems.&rdquo;
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass-card h-full border-white/10 bg-white/5 p-8">
              <Target size={22} className="text-sprout-300" />
              <p className="eyebrow mt-4 text-sprout-300">Mission</p>
              <p className="mt-3 font-display text-xl leading-snug text-sand-50 sm:text-2xl">
                &ldquo;Continuously learning and applying AI, software development, 
                and system design to create practical solutions and improve my technical 
                expertise.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </div>
      <CircuitDivider flip />
    </section>
  );
}
