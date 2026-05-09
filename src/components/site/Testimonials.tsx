import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Aarav Mehta",
    role: "Founder, Maison Brûlot",
    initials: "AM",
    quote: "This website made my business look 10x more professional. Bookings doubled in the first month.",
  },
  {
    name: "Sienna Park",
    role: "CEO, Iron Republic",
    initials: "SP",
    quote: "Cinematic. Fast. Brutally on-brand. Our trial sign-ups jumped 147% in 6 weeks.",
  },
  {
    name: "Marcus Vale",
    role: "Director, Northwall Estates",
    initials: "MV",
    quote: "Felt like an Apple keynote in browser form. Clients now think we're a $50M agency.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--neon)]">/ Testimonials</div>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
            Founders who <span className="text-gradient italic">felt the difference.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative flex h-full flex-col rounded-3xl glass-strong p-8 border-gradient transition-shadow hover:glow-neon-sm"
            >
              <div className="mb-5 flex gap-1 text-[color:var(--neon)]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="font-display text-lg leading-snug text-foreground/95">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[color:var(--neon)] to-[color:var(--neon-glow)] text-sm font-bold text-black">
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
