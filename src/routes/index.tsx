import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Founder } from "@/components/site/Founder";
import { Work } from "@/components/site/Work";
import { Testimonials } from "@/components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { Simulator } from "@/components/site/Simulator";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { NeonCursor } from "@/components/site/Cursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krishna Creative Agency — Websites that look expensive" },
      { name: "description", content: "Cinematic, conversion-focused websites for modern brands. Premium design, lightning-fast delivery, honest pricing." },
      { property: "og:title", content: "Krishna Creative Agency — Websites that look expensive" },
      { property: "og:description", content: "Cinematic, high-converting websites for modern brands." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <NeonCursor />
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Founder />
      <Work />
      <Testimonials />
      <Simulator />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
