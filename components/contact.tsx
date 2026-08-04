"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const socials = [
  { label: "Email", href: "mailto:meet.alshi@vit.edu.in", icon: Mail },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/meetalshi_147",
    icon: Linkedin,
  },
  { label: "GitHub", href: "https://github.com/meetalshi147", icon: Github },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Network error — please try again, or email me directly.");
    }
  }

  return (
    <section id="contact" className="section-shell py-24 sm:py-28">
      <SectionHeading
        eyebrow="Let's Talk"
        title="Get in Touch"
        description="Interested in AI-driven solutions, robotics, or sustainable e-waste management? I’m open to collaborations, projects, and meaningful discussions."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal delay={0.05}>
          <div className="glass-card h-full space-y-6 p-7">
            <div className="space-y-4">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-canopy-700/10 p-4 text-sm text-ink-900/80 transition-colors hover:border-canopy-700/30 hover:bg-canopy-700/5 dark:border-sprout-300/10 dark:text-sand-100/80 dark:hover:bg-white/5"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-canopy-700/8 text-canopy-700 dark:bg-white/5 dark:text-sprout-300">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="text-xs text-ink-900/50 dark:text-sand-100/50">{label}</p>
                    <p className="font-medium">
                      {label === "Email"
                        ? "meet.alshi@vit.edu.in"
                        : label === "LinkedIn"
                        ? "linkedin.com/in/meetalshi147"
                        : "github.com/meetalshi147"}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} className="glass-card space-y-5 p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="eyebrow">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-canopy-700/15 bg-white/60 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-900/30 focus:border-canopy-600 dark:border-sprout-300/15 dark:bg-white/5 dark:text-sand-50 dark:placeholder:text-sand-100/30"
                  placeholder="What should I call you?"
                />
              </div>
              <div>
                <label htmlFor="email" className="eyebrow">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-canopy-700/15 bg-white/60 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-900/30 focus:border-canopy-600 dark:border-sprout-300/15 dark:bg-white/5 dark:text-sand-50 dark:placeholder:text-sand-100/30"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="eyebrow">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full resize-none rounded-xl border border-canopy-700/15 bg-white/60 px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-900/30 focus:border-canopy-600 dark:border-sprout-300/15 dark:bg-white/5 dark:text-sand-50 dark:placeholder:text-sand-100/30"
                placeholder="Tell me about your idea, project, or question…"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <Loader2 size={15} className="animate-spin" />
                ) : (
                  <Send size={15} />
                )}
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "sent" && (
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-1.5 text-sm text-canopy-600 dark:text-sprout-400"
                >
                  <CheckCircle2 size={15} /> Message sent — thanks for reaching out!
                </motion.span>
              )}
              {status === "error" && (
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-1.5 text-sm text-soil-600 dark:text-soil-400"
                >
                  <AlertCircle size={15} /> {errorMsg}
                </motion.span>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
