import { Navbar } from "@/components/layout/Navbar";
import { HeroContent } from "./hero/HeroContent";
import { HeroVisuals } from "./hero/HeroVisuals";
import { HeroStatCards } from "./hero/HeroStatCards";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[70vh] overflow-hidden bg-brand-blue-hero px-4 pt-24 pb-8 text-white sm:h-256 sm:px-6 sm:pt-28 sm:pb-0 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20"
      />
      <Navbar overlay />
      <HeroContent />
      <HeroVisuals />
      <HeroStatCards />
    </section>
  );
}
