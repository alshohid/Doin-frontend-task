import Image from "next/image";
import { HERO_AVATARS } from "./constants";

export function HeroStatCards() {
  return (
    <div
      className="pointer-events-none relative z-2 mx-auto mt-5 flex w-full max-w-sm flex-col gap-5 sm:absolute sm:inset-0 sm:mt-0 sm:block sm:max-w-none"
      aria-label="Course highlights"
    >

      <div className="pointer-events-auto relative grid gap-1 rounded-xl bg-white px-3 py-2.5 text-left text-text-heading shadow-[0_12px_30px_#07123b24] sm:absolute sm:top-[60%] sm:left-[8%] sm:px-3.75 sm:py-3 md:top-[62%] md:left-[15%] lg:top-[62.4%] lg:left-[28%]">
        <strong className="text-sm sm:text-base">UI/UX Design</strong>
        <span className="text-xs sm:text-[11px] text-text-muted">
          200 Courses · 1000+ Students
        </span>
      </div>

      <div className="pointer-events-auto relative grid w-full gap-1.5 rounded-xl bg-white p-2.5 text-left text-text-heading shadow-[0_12px_30px_#07123b24] sm:absolute sm:top-[58%] sm:right-[6%] sm:w-44 sm:p-3 sm:gap-2 md:top-[61%] md:right-[12%] md:w-52 lg:top-[63.6%] lg:right-[25%] lg:w-58">
        <span className="text-xs sm:text-sm">Learning Progress</span>
        <b className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold leading-none">
          55%
        </b>
        <i className="h-1.5 sm:h-1.75 rounded-lg bg-[linear-gradient(to_right,var(--brand-lime)_55%,#eee_55%)]" />
      </div>

      <div className="pointer-events-auto relative grid w-full gap-1 rounded-xl bg-white p-2.5 text-left text-text-heading shadow-[0_12px_30px_#07123b24] sm:absolute sm:top-[77%] sm:left-[5%] sm:w-48 sm:p-3 md:top-[79%] md:left-[10%] md:w-56 lg:top-[81.7%] lg:left-[22.8%] lg:w-64.5">
        <b className="text-sm sm:text-base">Happy Students</b>
        <span className="text-xs sm:text-[11px] text-text-muted">
          4.5 (240) <em className="not-italic text-brand-lime">★</em>
        </span>
        <div className="mt-1 flex items-center">
          {HERO_AVATARS.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt=""
              aria-hidden="true"
              className="relative -mr-1.5 sm:-mr-2 size-7 sm:size-8.5 rounded-full border-2 border-white"
              width={28}
              height={28}
              sizes="28px"
            />
          ))}
          <b className="relative grid size-7 sm:size-8.5 place-items-center rounded-full bg-brand-lime text-text-dark text-xs sm:text-[11px]">
            2K+
          </b>
        </div>
      </div>
    </div>
  );
}
