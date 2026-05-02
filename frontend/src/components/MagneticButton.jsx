import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function MagneticButton({ as: As = "button", strength = 0.35, children, className = "", ...rest }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });
  const tx = useTransform(sx, (v) => v);
  const ty = useTransform(sy, (v) => v);

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: tx, y: ty }}
      className="inline-block"
    >
      <As className={className} {...rest}>
        {children}
      </As>
    </motion.div>
  );
}
