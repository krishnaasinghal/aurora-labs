import { useEffect, useRef } from "react";

export function NeonCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rx = 0, ry = 0, x = 0, y = 0;
    let raf = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
    };
    const loop = () => {
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx - 22}px, ${ry - 22}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-11 w-11 rounded-full border border-[color:var(--neon)]/60 mix-blend-difference md:block"
        style={{ boxShadow: "0 0 20px color-mix(in oklab, var(--neon) 60%, transparent)" }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2 w-2 rounded-full bg-[color:var(--neon)] md:block"
      />
    </>
  );
}
