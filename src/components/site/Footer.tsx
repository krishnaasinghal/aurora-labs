export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[color:var(--neon)] text-black font-bold">K</span>
          <span className="font-display text-sm">© {new Date().getFullYear()} Krishna Creative Agency</span>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-widest text-muted-foreground">
          <a href="#work" className="hover:text-[color:var(--neon)]">Work</a>
          <a href="#services" className="hover:text-[color:var(--neon)]">Services</a>
          <a href="#pricing" className="hover:text-[color:var(--neon)]">Pricing</a>
          <a href="#contact" className="hover:text-[color:var(--neon)]">Contact</a>
        </div>
        <div className="text-xs text-muted-foreground">Built in the dark · Shipped at speed</div>
      </div>
    </footer>
  );
}
