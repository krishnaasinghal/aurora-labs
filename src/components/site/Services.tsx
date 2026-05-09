import { motion } from "framer-motion";
import {
  Briefcase, UtensilsCrossed, Dumbbell, User, ShoppingBag,
  Rocket, Bot, Sparkles,
} from "lucide-react";

const services = [
  { icon: Briefcase, title: "Business Websites", desc: "Premium corporate sites that earn trust on first scroll." },
  { icon: UtensilsCrossed, title: "Restaurant Websites", desc: "Mouth-watering menus with seamless reservations." },
  { icon: Dumbbell, title: "Gym Websites", desc: "High-energy brands that turn visitors into members." },
  { icon: User, title: "Portfolio Websites", desc: "Editorial-grade showcases for creators and pros." },
  { icon: ShoppingBag, title: "Ecommerce Stores", desc: "Conversion-tuned storefronts that scale revenue." },
  { icon: Rocket, title: "Landing Pages", desc: "Single-purpose pages built to print pipeline." },
  { icon: Bot, title: "AI Automation", desc: "Workflows that save your team 20+ hours a week." },
  { icon: Sparkles, title: "Branding", desc: "Identity systems your competitors will envy." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--neon)]">/ Services</div>
            <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
              Everything your brand needs to <span className="text-gradient italic">launch loud.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            One studio, full stack. From the first sketch to the last pixel — we craft the whole experience.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 border-gradient transition-shadow duration-500 hover:glow-neon-sm"
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle at 50% 0%, color-mix(in oklab, var(--neon) 18%, transparent), transparent 70%)" }} />
              <div className="mb-10 grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--neon)]/15 text-[color:var(--neon)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <s.icon size={22} strokeWidth={1.6} />
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[color:var(--neon)]/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Explore →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
