const items = [
  "Cinematic Design",
  "10s Impression",
  "Pixel Perfect",
  "Conversion First",
  "Awwwards Standard",
  "Built to Sell",
  "Mobile Native",
  "Lightning Fast",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-[color:var(--charcoal)]/40 py-6">
      <div className="flex w-max marquee gap-12 whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-12 font-display text-2xl font-medium uppercase tracking-tight text-foreground/70 md:text-3xl">
            <span>{t}</span>
            <span className="h-2 w-2 rounded-full bg-[color:var(--neon)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
