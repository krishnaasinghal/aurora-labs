import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-screen items-center overflow-hidden noise">
      {/* BG image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[color:var(--neon)]/20 blur-3xl float-y" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-96 w-96 rounded-full bg-[color:var(--neon)]/10 blur-3xl float-y" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--neon)] pulse-glow" />
          Krishna Creative Agency · Est. 2024
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-[6.5rem]"
        >
          We build websites that make businesses look <span className="text-gradient italic">expensive.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Affordable, high-converting digital experiences engineered for modern brands.
          Cinematic design. Lightning fast. Built to sell.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#contact" className="group relative inline-flex items-center gap-3 rounded-full bg-[color:var(--neon)] px-7 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.04] glow-neon">
            Book a free call
            <span className="grid h-6 w-6 place-items-center rounded-full bg-black text-[color:var(--neon)] transition-transform group-hover:rotate-45">↗</span>
          </a>
          <a href="#work" className="inline-flex items-center gap-3 rounded-full glass px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-white/10">
            View our work
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl glass md:grid-cols-4"
        >
          {[
            { k: "120+", v: "Projects shipped" },
            { k: "47", v: "Brands transformed" },
            { k: "4.9★", v: "Average client rating" },
            { k: "10s", v: "First impression" },
          ].map((s) => (
            <div key={s.v} className="bg-background/30 p-6">
              <div className="font-display text-3xl font-bold text-[color:var(--neon)] md:text-4xl">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* grid floor */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[40vh] grid-floor opacity-40" />
    </section>
  );
}
