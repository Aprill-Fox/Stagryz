import { motion } from "framer-motion";

export const FadeIn = ({ children, delay = 0, y = 24, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const StaggerGrid = ({ children, className = "" }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.08 } },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = "" }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 28 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    }}
  >
    {children}
  </motion.div>
);

export const Section = ({ children, className = "", id, ...rest }) => (
  <section id={id} className={`py-20 lg:py-28 ${className}`} {...rest}>
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">{children}</div>
  </section>
);

export const Eyebrow = ({ children }) => (
  <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-orange-600">
    <span className="w-8 h-px bg-orange-600" /> {children}
  </div>
);
