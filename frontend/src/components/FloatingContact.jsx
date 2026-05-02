import { useState } from "react";
import { Phone, Send, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "../lib/site-data";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden md:block fixed right-5 bottom-6 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 bg-card border border-border shadow-xl p-3 rounded-sm flex flex-col gap-2 min-w-[230px]"
          >
            <a href={SITE.phoneHref} className="flex items-center gap-3 px-3 py-2.5 rounded-sm hover:bg-muted transition-colors">
              <span className="w-9 h-9 grid place-items-center rounded-sm bg-accent text-accent-foreground"><Phone className="w-4 h-4" /></span>
              <div>
                <div className="text-xs text-muted-foreground">Дзвінок</div>
                <div className="text-sm font-semibold text-foreground">{SITE.phone}</div>
              </div>
            </a>
            <a href={SITE.socials.telegram} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2.5 rounded-sm hover:bg-muted transition-colors">
              <span className="w-9 h-9 grid place-items-center rounded-sm bg-foreground text-background"><Send className="w-4 h-4" /></span>
              <div>
                <div className="text-xs text-muted-foreground">Telegram</div>
                <div className="text-sm font-semibold text-foreground">Швидкий чат</div>
              </div>
            </a>
            <a href={SITE.socials.viber} className="flex items-center gap-3 px-3 py-2.5 rounded-sm hover:bg-muted transition-colors">
              <span className="w-9 h-9 grid place-items-center rounded-sm bg-sage text-sage-foreground"><MessageCircle className="w-4 h-4" /></span>
              <div>
                <div className="text-xs text-muted-foreground">Viber</div>
                <div className="text-sm font-semibold text-foreground">Без дзвінка</div>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        data-testid="floating-contact-toggle"
        className="w-14 h-14 grid place-items-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30 hover:shadow-xl transition-shadow"
        aria-label={open ? "Закрити" : "Звʼязатись"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span key="phone" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <Phone className="w-5 h-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
