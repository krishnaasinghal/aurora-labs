import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#founder", label: "Founder" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[color:var(--neon)] text-black glow-neon-sm">K</span>
          <span className="hidden sm:inline">Krishna<span className="text-[color:var(--neon)]">.</span></span>
        </a>
        <nav className={`hidden items-center gap-1 rounded-full px-2 py-2 md:flex ${scrolled ? "glass-strong" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="group relative inline-flex items-center gap-2 rounded-full bg-[color:var(--neon)] px-5 py-2.5 text-sm font-semibold text-black transition-all hover:scale-[1.03] glow-neon-sm">
          Book a call
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </header>
  );
}
