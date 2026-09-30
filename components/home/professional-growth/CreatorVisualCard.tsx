import Image from "next/image";
import { Star } from "lucide-react";
import { AVATARS } from "./constants";

export function CreatorVisualCard() {
  return (
    <div className="relative mx-auto flex min-h-87.5 w-full max-w-140 items-end justify-center sm:min-h-110">
      <Image
        className="absolute top-[8%] right-0 z-0 w-[32%] sm:top-[10%] sm:right-[2%] sm:w-[32%]"
        src="/images/professional-growth/frame-two.png"
        alt=""
        width={177}
        height={176}
      />
      <div className="absolute left-0 top-[10%] z-10 grid w-32 gap-1 rounded-xl bg-blue-700 p-2.5 text-[9px] text-white shadow-lg sm:left-1 sm:top-[8%] sm:w-40 sm:p-3 sm:text-xs">
        <div className="flex items-center justify-between">
          <span>Total Revenue</span>
          <small className="text-[8px] text-white/70">July 1-28</small>
        </div>
        <strong className="text-base font-bold sm:text-xl">$120.29</strong>
        <i className="h-1.5 rounded bg-[linear-gradient(to_right,var(--brand-lime)_55%,#ffffff44_55%)]" />
      </div>
      <div className="absolute left-0 top-[40%] z-10 grid w-30 gap-1 rounded-xl bg-blue-700 p-2.5 text-[9px] text-white shadow-lg sm:left-1 sm:top-[38%] sm:w-36 sm:p-3 sm:text-xs">
        <div className="flex items-center justify-between">
          <span>Year to Date</span>
          <small className="text-[8px] text-white/70">2023</small>
        </div>
        <strong className="text-base font-bold sm:text-xl">$1,200.38</strong>
        <span className="w-fit rounded-full bg-brand-lime px-2 py-0.5 text-[8px] font-semibold text-text-dark">+12%</span>
      </div>
      <Image
        className="relative z-10 ml-[20%] h-auto w-[76%] max-w-100 object-contain drop-shadow-[0_18px_14px_#0003] sm:ml-[22%] sm:w-[72%]"
        src="/images/professional-growth/person-two.png"
        alt="Creator managing and teaching online courses"
        width={600}
        height={700}
      />
      <div className="absolute bottom-[16%] right-0 z-20 w-40 rounded-2xl bg-white p-2.5 text-text-heading shadow-md sm:bottom-[15%] sm:right-2 sm:w-48 sm:p-3">
        <b className="text-[11px] font-semibold sm:text-xs">Happy Students</b>
        <div className="mt-0.5 flex items-center text-[9px] text-text-subtle sm:text-[10px]">
          4.5 (240) <Star className="ml-1 size-3 fill-brand-lime text-brand-lime" />
        </div>
        <div className="mt-1.5 flex items-center pl-1.5">
          {AVATARS.map((avatar) => (
            <Image
              key={avatar}
              src={`https://images.unsplash.com/${avatar}?auto=format&fit=crop&w=64&h=64&q=80`}
              alt=""
              aria-hidden="true"
              width={32}
              height={32}
              className="-ml-1.5 size-6 rounded-full border-2 border-white object-cover sm:size-7.5"
            />
          ))}
          <b className="-ml-1.5 grid size-6 place-items-center rounded-full border-2 border-white bg-brand-lime text-[8px] font-bold text-text-dark sm:size-7.5 sm:text-[10px]">
            2K+
          </b>
        </div>
      </div>
    </div>
  );
}
