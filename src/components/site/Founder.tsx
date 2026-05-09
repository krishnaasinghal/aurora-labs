import { motion } from "framer-motion";
import founderImg from "@/assets/founder-new.jpg";

export function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden py-32">
      {/* cosmic bg */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,color-mix(in_oklab,var(--neon)_18%,transparent),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,oklch(0.3_0.1_280_/_0.3),transparent_60%)]" />
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/60"
            style={{
              top: `${(i * 53) % 100}%`,
              left: `${(i * 79) % 100}%`,
              opacity: 0.2 + ((i * 13) % 80) / 100,
              transform: `scale(${0.4 + ((i * 17) % 100) / 120})`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          {/* rotating ring */}
          <div className="absolute inset-0 rounded-full border border-[color:var(--neon)]/40 spin-slow" />
          <div className="absolute -inset-4 rounded-full border border-[color:var(--neon)]/20 spin-slow" style={{ animationDirection: "reverse" }} />
          <div className="absolute inset-0 rounded-full glow-neon" />
          <div className="absolute inset-3 overflow-hidden rounded-full border-gradient">
            <img
              src={founderImg}
              alt="Founder of Krishna Creative Agency"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[2000ms] hover:scale-110"
            />
          </div>
          {/* hud chip */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full glass-strong px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-[color:var(--neon)]">
            Founder · Creative Director
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--neon)]">/ The mind behind</div>
          <h2 className="font-display text-4xl font-bold leading-[1.05] md:text-6xl">
            The creative mind behind <span className="text-gradient italic">Krishna Creative Agency.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Building futuristic digital experiences for modern businesses — where Apple-level minimalism meets cinematic storytelling. Every pixel is engineered to make your brand feel inevitable.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { k: "5+", v: "Years crafting" },
              { k: "Awwwards", v: "Inspired output" },
              { k: "100%", v: "Founder-led" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl glass p-4">
                <div className="font-display text-2xl font-bold text-[color:var(--neon)]">{s.k}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
