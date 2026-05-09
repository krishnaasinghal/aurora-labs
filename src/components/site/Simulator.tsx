import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Sparkles } from "lucide-react";

export function Simulator() {
  const [logo, setLogo] = useState<string | null>(null);
  const [stage, setStage] = useState<"idle" | "scanning" | "done">("idle");
  const inputRef = useRef<HTMLInputElement>(null);

  const onFile = (f: File) => {
    const reader = new FileReader();
    reader.onload = () => setLogo(reader.result as string);
    reader.readAsDataURL(f);
    setStage("scanning");
    setTimeout(() => setStage("done"), 2400);
  };

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--neon)]">/ AI Simulator · Beta</div>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
              Drop your logo. Watch your brand <span className="text-gradient italic">level up.</span>
            </h2>
            <p className="mt-5 max-w-lg text-muted-foreground">
              Our AI engine generates a futuristic concept of how your business could look — in seconds. No signup. Pure inspiration.
            </p>
            <button
              onClick={() => inputRef.current?.click()}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[color:var(--neon)] px-7 py-4 text-sm font-semibold text-black hover:scale-[1.03] glow-neon-sm"
            >
              <Upload size={16} /> Upload your logo
            </button>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])}
            />
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl glass-strong border-gradient">
              {/* terminal bar */}
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-muted-foreground">krishna.ai / simulator</span>
              </div>

              <div className="relative grid h-[calc(100%-44px)] place-items-center p-8">
                <AnimatePresence mode="wait">
                  {stage === "idle" && (
                    <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
                      <Sparkles className="mx-auto mb-4 text-[color:var(--neon)]" />
                      <p className="text-sm text-muted-foreground">Awaiting input. Drop a logo to begin.</p>
                    </motion.div>
                  )}
                  {stage === "scanning" && (
                    <motion.div key="scan" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative grid place-items-center">
                      {logo && <img src={logo} alt="Your logo" className="h-32 w-32 object-contain" />}
                      <div className="absolute inset-x-0 top-0 h-1 bg-[color:var(--neon)] glow-neon" style={{ animation: "scan 2.4s linear" }} />
                      <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[color:var(--neon)]">Generating concept…</p>
                    </motion.div>
                  )}
                  {stage === "done" && (
                    <motion.div key="done" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                      {logo && <img src={logo} alt="Your logo" className="mx-auto mb-4 h-20 w-20 object-contain" />}
                      <div className="font-display text-2xl font-bold text-gradient">Concept ready ✦</div>
                      <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                        Cinematic dark UI · neon accents · 3D motion. Want the real build?
                      </p>
                      <a href="#contact" className="mt-5 inline-flex rounded-full bg-[color:var(--neon)] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-black">
                        Book a call →
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <style>{`@keyframes scan { 0%{ transform: translateY(0) } 100% { transform: translateY(360px) } }`}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
