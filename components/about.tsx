import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { ChipIcon, LeafIcon, RecycleIcon } from "./eco-icons";
import { Lightbulb, FlaskConical, Rocket } from "lucide-react";

const facts = [
  { icon: ChipIcon, label: "Focus", value: "AI, ML & Robotics" },
  { icon: LeafIcon, label: "Core Skills", value: "Problem Solving | System Design | OOP" },
  { icon: RecycleIcon, label: "Approach", value: "Build → Learn → Improve" },
];

const mindset = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Curiosity",
    desc: "Every project starts with a question. I dig into problems before jumping to solutions.",
  },
  {
    icon: FlaskConical,
    step: "02",
    title: "Experiment",
    desc: "I prototype fast, break things on purpose, and learn from what doesn't work.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Ship & Improve",
    desc: "I push working software and keep refining it—reliability matters more than perfection.",
  },
];

const codeLines = [
  { token: "const", color: "text-canopy-400 dark:text-sprout-400", rest: " meet = {" },
  { indent: true, key: "  role", value: '"IT Student & Developer"' },
  { indent: true, key: "  focus", value: '["AI/ML", "Computer Vision"]' },
  { indent: true, key: "  stack", value: '["Python", "Java", "SQL"]' },
  { indent: true, key: "  tools", value: '["OpenCV", "TensorFlow", "React"]' },
  { indent: true, key: "  status", value: '"open to opportunities 🚀"' },
  { token: "}", color: "", rest: "" },
];

const stats = [
  { value: "5+", label: "Projects" },
  { value: "3+", label: "Domains" },
  { value: "B.Tech", label: "IT Graduate" },
];

export function About() {
  return (
    <section id="about" className="section-shell py-24 sm:py-28">
      {/* Top grid */}
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">

        {/* Left column: heading + portfolio card */}
        <div className="space-y-8">
          <SectionHeading
            eyebrow="About Me"
            title="Curiosity starts it. Code gives it form."
          />

          {/* Terminal / code card */}
          <Reveal delay={0.15}>
            <div className="glass-card overflow-hidden">
              {/* Terminal top bar */}
              <div className="flex items-center gap-1.5 border-b border-canopy-700/10 bg-canopy-800/5 px-4 py-3 dark:border-white/5 dark:bg-white/[0.02]">
                <span className="h-3 w-3 rounded-full bg-soil-400/70" />
                <span className="h-3 w-3 rounded-full bg-amber-400/70" />
                <span className="h-3 w-3 rounded-full bg-sprout-400/70" />
                <span className="ml-3 font-mono text-[11px] text-ink-900/40 dark:text-sand-100/30">
                  portfolio.ts
                </span>
              </div>

              {/* Code body */}
              <div className="px-5 py-5 font-mono text-[13px] leading-[1.9]">
                {codeLines.map((line, i) =>
                  line.indent ? (
                    <div key={i} className="flex gap-2">
                      <span className="text-canopy-500 dark:text-sprout-500 select-none">
                        {String(i).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="text-canopy-600 dark:text-sprout-300">{line.key}</span>
                        <span className="text-ink-900/50 dark:text-sand-100/40">: </span>
                        <span className="text-soil-600 dark:text-amber-300">{line.value}</span>
                        <span className="text-ink-900/50 dark:text-sand-100/40">,</span>
                      </span>
                    </div>
                  ) : (
                    <div key={i} className="flex gap-2">
                      <span className="text-canopy-500 dark:text-sprout-500 select-none">
                        {String(i).padStart(2, "0")}
                      </span>
                      <span>
                        <span className={line.color}>{line.token}</span>
                        <span className="text-ink-900/80 dark:text-sand-100/80">{line.rest}</span>
                      </span>
                    </div>
                  )
                )}
              </div>

              {/* Stats strip */}
              <div className="grid grid-cols-3 divide-x divide-canopy-700/10 border-t border-canopy-700/10 dark:divide-white/5 dark:border-white/5">
                {stats.map(({ value, label }) => (
                  <div key={label} className="py-4 text-center">
                    <p className="font-display text-xl font-semibold text-canopy-700 dark:text-sprout-300">
                      {value}
                    </p>
                    <p className="mt-0.5 font-mono text-[11px] tracking-wide text-ink-900/50 dark:text-sand-100/40 uppercase">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right column: bio + fact cards */}
        <Reveal delay={0.1} className="space-y-8">
          <p className="text-[15px] leading-[1.9] text-ink-900/75 dark:text-sand-100/75">
            I&apos;m an Information Technology student focused on developing practical software using AI and modern development tools. I work with Python, Java, and computer vision, with an emphasis on clean implementation, performance, and system structure.
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

      {/* Mindset strip */}
      <Reveal delay={0.2} className="mt-16">
        <p className="eyebrow mb-8 text-center">My Mindset</p>
        <div className="grid gap-5 sm:grid-cols-3">
          {mindset.map(({ icon: Icon, step, title, desc }) => (
            <div
              key={step}
              className="glass-card group relative overflow-hidden p-6 hover:-translate-y-1"
            >
              <span className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl font-bold text-canopy-700/5 dark:text-sprout-300/5 select-none">
                {step}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-canopy-700/8 text-canopy-700 dark:bg-white/5 dark:text-sprout-300">
                <Icon size={18} />
              </span>
              <h4 className="mt-4 font-display text-lg text-canopy-900 dark:text-sand-50">
                {title}
              </h4>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-900/65 dark:text-sand-100/65">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
