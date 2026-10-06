import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { ChipIcon, LeafIcon, RecycleIcon } from "./eco-icons";

const facts = [
  { icon: ChipIcon, label: "Focus", value: "AI, ML & Robotics" },
  { icon: LeafIcon, label: "Core Skills", value: "Problem Solving | System Design | OOP" },
  { icon: RecycleIcon, label: "Approach", value: "Build → Learn → Improve" },
];

export function About() {
  return (
    <section id="about" className="section-shell py-24 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="About Me"
          title="Not Just Building Software—making it work reliably"
        />

        <Reveal delay={0.1} className="space-y-8">
          <p className="text-[15px] leading-[1.9] text-ink-900/75 dark:text-sand-100/75">
            I’m an Information Technology student focused on developing practical software using AI and modern development tools. I work with Python, Java, and computer vision, with an emphasis on clean implementation, performance, and system structure.
            My projects include face recognition systems, analytics dashboards, and full-stack applications, where I focus on making solutions reliable and usable—not just functional.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass-card p-5 hover:-translate-y-1">
                <Icon className="h-5 w-5 text-canopy-600 dark:text-sprout-300" />
                <p className="eyebrow mt-3">{label}</p>
                <p className="mt-1 font-display text-lg text-canopy-900 dark:text-sand-50">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
