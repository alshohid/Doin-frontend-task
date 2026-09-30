import Image from "next/image";
import { BarChart3 } from "lucide-react";

export function StudentVisualCard() {
  return (
    <div className="relative mx-auto flex min-h-87.5 w-full max-w-140 items-end justify-center sm:min-h-110">
      <Image
        className="absolute right-0 top-0 z-0 w-[38%] sm:w-[35%]"
        src="/images/professional-growth/frame-one.png"
        alt=""
        width={177}
        height={176}
      />
      <article className="absolute left-0 top-3 z-0 w-[58%] overflow-hidden rounded-2xl border border-border-card bg-white p-2.5 shadow-sm sm:left-[3%] sm:top-2 sm:w-[67%] sm:p-3">
        <div className="relative aspect-[1.7] overflow-hidden rounded-xl">
          <Image
            src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=85"
            alt="Designer working on a course project"
            fill
            sizes="(max-width: 640px) 58vw, 380px"
            className="object-cover"
          />
          <div className="absolute inset-x-2 bottom-2 flex gap-1 text-[8px] text-text-subtle sm:inset-x-3 sm:bottom-3 sm:text-[10px]">
            <span className="rounded-full bg-white/80 px-2 py-1">17 Lessons</span>
            <span className="rounded-full bg-white/80 px-2 py-1">2 hours 16 mins</span>
          </div>
        </div>
        <h3 className="mt-2 truncate text-sm font-semibold sm:text-lg">Learn Figma from Basic</h3>
        <p className="my-1 text-[10px] text-text-subtle sm:text-xs">by <span className="text-blue-700">purepearl studio</span></p>
        <div className="flex items-center justify-between text-[9px] text-text-subtle sm:text-xs">
          <span className="flex items-center gap-1 rounded-full bg-surface-pill px-2 py-1"><BarChart3 size={13} /> Beginner</span>
          <strong className="text-sm text-blue-700 sm:text-base">$25<small className="font-normal text-text-subtle">/lifetime</small></strong>
        </div>
      </article>
      <Image
        className="relative z-10 ml-[17%] h-auto w-[76%] max-w-110 object-contain drop-shadow-[0_18px_14px_#0003]"
        src="/images/professional-growth/person-one.png"
        alt="Student learning with a laptop and headphones"
        width={722}
        height={515}
      />
      <div className="absolute right-1 top-[35%] z-20 grid w-36 gap-1.5 rounded-2xl bg-white p-2.5 text-text-heading shadow-[0_12px_30px_#07123b24] sm:right-2 sm:top-[36%] sm:w-44 sm:p-3.5">
        <span className="text-[10px] font-medium text-text-subtle sm:text-xs">Learning Progress</span>
        <b className="text-xl font-bold leading-none sm:text-2xl">55%</b>
        <i className="h-1.5 rounded-lg bg-[linear-gradient(to_right,var(--brand-lime)_55%,#eee_55%)] sm:h-2" />
      </div>
    </div>
  );
}
