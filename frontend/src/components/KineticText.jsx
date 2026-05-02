import { motion } from "framer-motion";

// Word-by-word reveal animation for kinetic typography
export default function KineticText({ text, className = "", delay = 0, as: Tag = "span" }) {
  const words = text.split(" ");
  return (
    <Tag className={`inline-block ${className}`} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-baseline mr-[0.25em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: "115%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
