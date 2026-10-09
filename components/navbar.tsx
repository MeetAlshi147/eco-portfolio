"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#activities", label: "Activities" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#vision", label: "Vision" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="section-shell">
        <div
          className={`glass flex items-center justify-between rounded-full px-4 py-2.5 transition-shadow duration-500 sm:px-5 ${
            scrolled ? "shadow-glass dark:shadow-glass-dark" : "shadow-none border-transparent bg-transparent backdrop-blur-0"
          }`}
        >
          <a
            href="#top"
            className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-canopy-800 dark:text-sand-50 group"
          >
            {/* Animated logo mark */}
            <span className="relative flex h-8 w-8 items-center justify-center">
              {/* Outer pulse ring */}
              <span className="absolute inset-0 rounded-full bg-sprout-400/30 scale-100 group-hover:scale-125 transition-transform duration-500" />
              {/* Inner circle */}
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-canopy-600 to-sprout-400 dark:from-sprout-300 dark:to-canopy-500 shadow-md">
                <span className="font-mono text-[11px] font-bold text-white dark:text-canopy-900 leading-none">
                  MA
                </span>
              </span>
            </span>
            Meet Alshi
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm text-canopy-800/80 transition-colors hover:bg-canopy-700/5 hover:text-canopy-900 dark:text-sand-100/80 dark:hover:bg-white/5 dark:hover:text-sand-50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-canopy-700/15 text-canopy-700 dark:border-sprout-300/20 dark:text-sprout-200 lg:hidden"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="glass mt-2 grid gap-1 rounded-3xl p-3 lg:hidden"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-2.5 text-sm text-canopy-800 transition-colors hover:bg-canopy-700/5 dark:text-sand-100 dark:hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
