import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    price: "₹3999",
    tagline: "Launch fast, look premium.",
    features: ["Up to 5 pages", "Mobile responsive", "Basic SEO setup", "5-day delivery", "WhatsApp support"],
    highlight: false,
  },
  {
    name: "Advanced",
    price: "₹7999",
    tagline: "For serious operators ready to scale.",
    features: ["Up to 12 pages", "Custom animations", "CMS / Blog", "Lead capture + CRM", "Unlimited revisions", "Priority WhatsApp"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹9,999",
    tagline: "Cinematic experiences. Awwwards-level.",
    features: ["Unlimited pages", "3D / interactive design", "Conversion strategy", "Ecommerce / payments", "Dedicated PM", "30-day post-launch support"],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-[40vh] max-w-5xl rounded-full bg-[color:var(--neon)]/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--neon)]">/ Pricing</div>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
            Premium quality. <span className="text-gradient italic">Honest pricing.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">No retainers. No surprises. Just real outcomes shipped fast.</p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`group relative flex flex-col rounded-3xl p-8 border-gradient ${
                t.highlight
                  ? "glass-strong glow-neon scale-[1.02]"
                  : "glass"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[color:var(--neon)] px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                  Most Popular
                </div>
              )}
              <div className="text-sm uppercase tracking-widest text-muted-foreground">{t.name}</div>
              <div className="mt-4 flex items-baseline gap-2">
                <div className="font-display text-5xl font-bold">{t.price}</div>
                <div className="text-sm text-muted-foreground">/ project</div>
              </div>
              <p className="mt-3 text-sm text-foreground/80">{t.tagline}</p>

              <ul className="mt-8 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${t.highlight ? "bg-[color:var(--neon)] text-black" : "bg-white/10 text-[color:var(--neon)]"}`}>
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.03] ${
                  t.highlight
                    ? "bg-[color:var(--neon)] text-black glow-neon-sm"
                    : "glass hover:bg-white/10"
                }`}
              >
                Start with {t.name} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
