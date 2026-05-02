import { Sun, Moon } from "lucide-react";
import { useTheme } from "../lib/theme";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle({ className = "" }) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      data-testid="theme-toggle"
      aria-label="Перемкнути тему"
      className={`relative w-10 h-10 grid place-items-center rounded-sm border border-border bg-surface hover:bg-muted transition-colors ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span key="sun" initial={{ y: -8, opacity: 0, rotate: -45 }} animate={{ y: 0, opacity: 1, rotate: 0 }} exit={{ y: 8, opacity: 0, rotate: 45 }} transition={{ duration: 0.2 }}>
            <Sun className="w-4 h-4 text-foreground" />
          </motion.span>
        ) : (
          <motion.span key="moon" initial={{ y: -8, opacity: 0, rotate: 45 }} animate={{ y: 0, opacity: 1, rotate: 0 }} exit={{ y: 8, opacity: 0, rotate: -45 }} transition={{ duration: 0.2 }}>
            <Moon className="w-4 h-4 text-foreground" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
