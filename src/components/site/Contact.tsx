import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, Mail } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[60vh] max-w-4xl rounded-full bg-[color:var(--neon)]/15 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--neon)]">/ Let's build</div>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-7xl">
            Ready to look <span className="text-gradient italic">expensive?</span>
          </h2>
          <p className="mt-5 text-muted-foreground">Tell us about your brand. We'll reply within 12 hours.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mt-16 grid max-w-5xl gap-px overflow-hidden rounded-3xl glass-strong border-gradient md:grid-cols-5"
        >
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-5 bg-background/30 p-8 md:col-span-3 md:p-10"
          >
            {[
              { id: "name", label: "Your name", type: "text" },
              { id: "email", label: "Email address", type: "email" },
              { id: "brand", label: "Brand / Company", type: "text" },
            ].map((f) => (
              <div key={f.id} className="group relative">
                <input
                  required
                  id={f.id}
                  type={f.type}
                  placeholder=" "
                  className="peer h-14 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 pt-4 text-foreground outline-none transition-all focus:border-[color:var(--neon)]/60 focus:bg-white/[0.06]"
                />
                <label htmlFor={f.id} className="pointer-events-none absolute left-4 top-4 text-sm text-muted-foreground transition-all peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[color:var(--neon)] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:text-[color:var(--neon)]">
                  {f.label}
                </label>
              </div>
            ))}
            <div className="relative">
              <textarea
                required
                id="msg"
                rows={4}
                placeholder=" "
                className="peer w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 pb-2 pt-6 text-foreground outline-none transition-all focus:border-[color:var(--neon)]/60 focus:bg-white/[0.06]"
              />
              <label htmlFor="msg" className="pointer-events-none absolute left-4 top-4 text-sm text-muted-foreground transition-all peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[color:var(--neon)] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:text-[color:var(--neon)]">
                Project details
              </label>
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[color:var(--neon)] px-6 py-4 text-sm font-bold uppercase tracking-widest text-black transition-transform hover:scale-[1.01] glow-neon-sm"
            >
              {sent ? "Message sent ✓" : "Send transmission →"}
            </button>
          </form>

          <aside className="space-y-4 bg-[color:var(--charcoal)]/50 p-8 md:col-span-2 md:p-10">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Faster channels</div>
            {[
              { icon: MessageCircle, label: "WhatsApp us", sub: "+91 00000 00000", href: "https://wa.me/" },
              { icon: Calendar, label: "Book on Calendly", sub: "30-min discovery call", href: "https://calendly.com/" },
              { icon: Mail, label: "Email", sub: "hello@krishna.agency", href: "mailto:hello@krishna.agency" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group flex items-center gap-4 rounded-xl border border-white/5 p-4 transition-all hover:border-[color:var(--neon)]/40 hover:bg-white/5"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-[color:var(--neon)]/15 text-[color:var(--neon)] transition-transform group-hover:rotate-6">
                  <c.icon size={18} />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{c.label}</span>
                  <span className="block text-xs text-muted-foreground">{c.sub}</span>
                </span>
              </a>
            ))}
            <div className="mt-6 rounded-xl border border-[color:var(--neon)]/30 bg-[color:var(--neon)]/5 p-4 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Avg. reply time:</span> under 12 hours, weekdays.
            </div>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
