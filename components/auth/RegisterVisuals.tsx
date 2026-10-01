import Image from "next/image";
import Link from "next/link";
import LogoIcon from "@/components/icons/AllIcons";
import { CourseCard } from "@/components/reusable/course-card";
import { HERO_AVATARS } from "@/components/home/hero/constants";

export function RegisterVisuals() {
  return (
    <div className="hidden flex-1 flex-col items-start justify-center self-center lg:flex">
      {/* Top Brand Logo */}
      <Link href="/" className="inline-block transition-transform hover:scale-105">
        <LogoIcon className="size-9" />
      </Link>

      {/* Text Section */}
      <div className="mt-6 max-w-lg text-white xl:mt-8">
        <h1 className="text-2xl font-bold tracking-tight text-white xl:text-3xl">
          Sign up and come in
        </h1>
        <p className="mt-2.5 text-xs leading-relaxed text-white/80 xl:mt-3 xl:text-sm">
          The registration process is straightforward, uncomplicated, and efficient,
          allowing users to sign up quickly, easily, and at no cost
        </p>
      </div>

      {/* Cards & 3D Shapes Composition - Start-aligned with the text above */}
      <div className="relative mt-8 h-115 w-full max-w-135 lg:mt-10 lg:h-125 lg:max-w-145 xl:h-135 xl:max-w-160">
        {/* Shape 1: Lime Donut / Torus (Top Left) */}
        <Image
          src="/images/authPageImg/top-left-circle.svg"
          alt=""
          aria-hidden="true"
          width={177}
          height={176}
          className="pointer-events-none absolute -top-1 left-12 z-30 w-24 -rotate-12 drop-shadow-md select-none lg:left-14 lg:w-28 xl:w-32"
        />

        {/* Back Card: Build Digital Asset */}
        <div className="pointer-events-none absolute top-10 left-0 z-10 w-80 select-none lg:top-12 lg:w-84 xl:top-14 xl:w-92">
          <CourseCard
            title="Build Digit..."
            creator="purepearl studio"
            category="DESIGN"
            price="$25"
            tone="coral"
            image="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85"
            badges={["17 Lessons"]}
            hideBadgesOnMobile={false}
            avatarBadgeClass="bg-black text-white"
            className="shadow-[0_20px_45px_rgba(0,0,0,0.2)]"
          />

          {/* Shape 2: Lime Cone / Pyramid (Bottom Left of the Back Card) */}
          <Image
            src="/images/authPageImg/bottom-left-cone.svg"
            alt=""
            aria-hidden="true"
            width={346}
            height={343}
            className="pointer-events-none absolute -bottom-8 lg:-bottom-20 -left-5 z-30 w-28 drop-shadow-xl select-none lg:w-32 xl:w-36"
          />
        </div>

        {/* Front Card: The Power of Big Data */}
        <div className="absolute -top-4 left-24 z-20 w-84 rounded-[18px] lg:left-28 lg:w-88 xl:left-34 xl:w-98">
          <CourseCard
            title="the Power of Big Data"
            creator="purepearl studio"
            category="DATA & ANALYTICS"
            price="$25"
            tone="violet"
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85"
            rating="4.5"
            starClassName="fill-brand-lime text-brand-lime"
            badges={["17 Lessons", "2 hours 16 mins", "59 Comments"]}
            hideBadgesOnMobile={false}
            avatarBadgeClass="bg-black text-white"
            className="shadow-[0_25px_50px_rgba(0,0,0,0.25)]"
          />

          {/* Happy Students Overlay Card - Positioned right over the bottom of the card */}
          <div className="absolute -bottom-8 right-0 z-30 min-w-48 rounded-2xl bg-brand-lime p-3 text-neutral-900 shadow-[0_15px_35px_rgba(0,0,0,0.2)] lg:-bottom-28 lg:right-0 lg:min-w-54 xl:left-28 xl:min-w-60 xl:p-3.5">
            <b className="block text-xs font-bold leading-tight text-neutral-900 xl:text-sm">
              Happy Students
            </b>
            <div className="mt-0.5 flex items-center gap-1 text-[10px] font-semibold text-neutral-800 xl:text-[11px]">
              4.5 (240) <span className="text-blue-600">★</span>
            </div>
            <div className="mt-2 flex items-center">
              {HERO_AVATARS.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt=""
                  aria-hidden="true"
                  className="relative -mr-1.5 size-6 rounded-full border-2 border-white object-cover xl:size-7"
                  width={28}
                  height={28}
                />
              ))}
              <span className="relative grid size-6 place-items-center rounded-full bg-neutral-900 text-[9px] font-bold text-white xl:size-7 xl:text-[10px]">
                2K+
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
