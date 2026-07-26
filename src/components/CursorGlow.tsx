import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 220}px, ${e.clientY - 220}px)`;
      el.style.opacity = "1";
    };
    const hide = () => (el.style.opacity = "0");

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 -z-0 hidden h-[440px] w-[440px] rounded-full opacity-0 transition-opacity duration-300 md:block"
      style={{
        background: "radial-gradient(circle, color-mix(in srgb, var(--color-teal) 12%, transparent) 0%, transparent 70%)",
      }}
    />
  );
}
