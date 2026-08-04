import { RecycleIcon } from "./eco-icons";

export function Footer() {
  return (
    <footer className="border-t border-canopy-700/10 py-10 dark:border-sprout-300/10">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2 font-display text-base text-canopy-800 dark:text-sand-50">
          <RecycleIcon className="h-4 w-4 text-canopy-600 dark:text-sprout-300" />
          Meet Mahesh Alshi
        </div>
        <p className="text-xs text-ink-900/50 dark:text-sand-100/50">
          Built with purpose | 
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
