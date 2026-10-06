import { Code2, Brain, Wrench } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "./section-heading";
import { SkillBar } from "./skill-bar";
import { Reveal } from "./reveal";

const icons = { code: Code2, brain: Brain, wrench: Wrench };

export function Skills() {
  return (
    <section id="skills" className="bg-canopy-700/[0.035] py-24 dark:bg-white/[0.015] sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills"
          description="The toolkit behind the projects — built through coursework, self-study and hands-on iteration."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillCategories.map((cat, ci) => {
            const Icon = icons[cat.icon];
            return (
              <Reveal key={cat.category} delay={ci * 0.1}>
                <div className="glass-card h-full p-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-canopy-700/8 text-canopy-700 dark:bg-white/5 dark:text-sprout-300">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-canopy-900 dark:text-sand-50">
                    {cat.category}
                  </h3>
                  <div className="mt-6 space-y-5">
                    {cat.skills.map((s, si) => (
                      <SkillBar
                        key={s.name}
                        name={s.name}
                        level={s.level}
                        delay={0.1 + si * 0.12}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
