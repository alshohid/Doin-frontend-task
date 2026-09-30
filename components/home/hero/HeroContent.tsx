import { SearchBar } from "@/components/reusable/search-bar";

export function HeroContent() {
  return (
    <div className="relative z-3 text-center max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-5xl lg:text-7xl xl:text-[4.5rem] font-semibold leading-tight tracking-tight">
        Get Access to Hundreds
        <br /> Courses Available
      </h1>
      <p className="mt-4 mx-auto text-xs md:text-sm text-text-hero-muted w-full leading-relaxed">
        Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
      </p>
      <div className="mt-8 sm:mt-10 max-w-md mx-auto">
        <SearchBar />
      </div>
    </div>
  );
}
