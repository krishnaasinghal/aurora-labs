import { motion } from "framer-motion";
import cafe from "@/assets/work-cafe.jpg";
import realestate from "@/assets/work-realestate.jpg";
import gym from "@/assets/work-gym.jpg";
import clothing from "@/assets/work-clothing.jpg";

const projects = [
  { img: cafe, title: "Maison Brûlot", tag: "Luxury Cafe", metric: "+218% reservations", color: "from-amber-500/20" },
  { img: realestate, title: "Northwall Estates", tag: "Real Estate", metric: "+3.4x qualified leads", color: "from-sky-500/20" },
  { img: gym, title: "Iron Republic", tag: "Gym Brand", metric: "+147% memberships", color: "from-lime-500/30" },
  { img: clothing, title: "LUTEA Atelier", tag: "Ecommerce", metric: "+92% revenue", color: "from-fuchsia-500/20" },
];

export function Work() {
  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--neon)]">/ Selected Work</div>
            <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
              Brands we made <span className="text-gradient italic">unforgettable.</span>
            </h2>
          </div>
          <a href="#contact" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-[color:var(--neon)]">All case studies →</a>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.1 }}
              className="group relative block overflow-hidden rounded-3xl glass border-gradient"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${p.color} to-transparent`} />
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="flex items-end justify-between gap-6 p-7">
                <div>
                  <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[color:var(--neon)]">{p.tag}</div>
                  <h3 className="font-display text-2xl font-bold md:text-3xl">{p.title}</h3>
                  <div className="mt-2 text-sm text-muted-foreground">{p.metric}</div>
                </div>
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[color:var(--neon)] text-black transition-transform duration-500 group-hover:rotate-45">
                  ↗
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
