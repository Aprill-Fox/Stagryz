import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let mouseX = 0, mouseY = 0, x = 0, y = 0;
    const onMove = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
    const onOver = (e) => {
      const t = e.target;
      if (t instanceof Element && (t.closest("a, button, [role='button']"))) {
        el.classList.add("cursor-lg");
      } else {
        el.classList.remove("cursor-lg");
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    let raf;
    const tick = () => {
      x += (mouseX - x) * 0.22;
      y += (mouseY - y) * 0.22;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-dot" aria-hidden />;
}
