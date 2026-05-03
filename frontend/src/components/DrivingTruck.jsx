import { motion } from "framer-motion";

/* Subtle driving truck across a horizontal guide-line.
   CSS animation — no large assets, runs at ~60fps. */
export default function DrivingTruck({ className = "" }) {
  return (
    <div className={`relative w-full h-14 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute top-1/2 left-0 right-0 h-px bg-border" />
      <div className="absolute top-1/2 left-0 right-0 h-px flex">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
          <span key={i} className="flex-1 border-t-2 border-dashed border-accent/20 opacity-60" />
        ))}
      </div>
      <motion.div
        className="truck-line absolute top-1/2 -translate-y-1/2"
        initial={{ x: 0 }}
      >
        <svg width="60" height="32" viewBox="0 0 60 32" fill="none">
          <rect x="2" y="10" width="34" height="14" rx="1" fill="hsl(var(--accent))" />
          <path d="M36 14 L50 14 L54 20 L54 24 L36 24 Z" fill="hsl(var(--foreground))" />
          <rect x="40" y="16" width="8" height="5" rx="0.5" fill="hsl(var(--surface))" />
          <circle cx="12" cy="26" r="3.5" fill="hsl(var(--foreground))" />
          <circle cx="12" cy="26" r="1.5" fill="hsl(var(--surface))" />
          <circle cx="46" cy="26" r="3.5" fill="hsl(var(--foreground))" />
          <circle cx="46" cy="26" r="1.5" fill="hsl(var(--surface))" />
        </svg>
      </motion.div>
    </div>
  );
}
