import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// 3D tilt wrapper — used on service cards etc.
export default function TiltCard({ children, className = "", strength = 8 }) {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 200, damping: 20 });
  const sy = useSpring(my, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(sy, [0, 1], [strength, -strength]);
  const rotateY = useTransform(sx, [0, 1], [-strength, strength]);

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => { mx.set(0.5); my.set(0.5); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`tilt ${className}`}
    >
      {children}
    </motion.div>
  );
}
