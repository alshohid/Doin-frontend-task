"use client";

import Image from "next/image";
import Link from "next/link";
import LogoIcon from "@/components/icons/AllIcons";
import { CourseCard } from "@/components/reusable/course-card";
import { HERO_AVATARS } from "@/components/home/hero/constants";

export default function RegisterPage() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-brand-blue-hero px-4 py-8 sm:px-6 sm:py-12 lg:px-12">
      {/* Blue Grid Pattern Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-25"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between gap-6 lg:gap-8 xl:gap-10">
        {/* Left Side: Hidden on mobile/tablet, visible on lg+ */}
        <div className="hidden flex-1 flex-col justify-between self-stretch lg:flex">
          {/* Top Brand & Info */}
          <div>
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <LogoIcon className="size-9" />
            </Link>

            <div className="mt-8 max-w-lg text-white">
              <h1 className="text-2xl font-bold tracking-tight text-white xl:text-3xl">
                Sign up and come in
              </h1>
              <p className="mt-3 text-xs leading-relaxed text-white/80 xl:text-sm">
                The registration process is straightforward, uncomplicated, and efficient,
                allowing users to sign up quickly, easily, and at no cost
              </p>
            </div>
          </div>

          {/* Cards & 3D Shapes Composition */}
          <div className="relative my-auto h-110 w-full max-w-132.5 self-center xl:h-120">
            {/* Shape 1: Lime Donut / Torus (Top Left) */}
            <Image
              src="/images/authPageImg/top-left-circle.svg"
              alt=""
              aria-hidden="true"
              width={177}
              height={176}
              className="pointer-events-none absolute -top-0 left-14 z-100 w-24 -rotate-12 drop-shadow-md select-none xl:left-15 xl:w-28"
            />

            {/* Back Card: Build Digital Asset */}
            <div className="pointer-events-none absolute top-12 left-0 z-10 w-75 select-none xl:top-18 xl:w-81.25">
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
            </div>

            {/* Front Card: The Power of Big Data */}
            <div className="absolute top-2 left-28 z-20 w-80 rounded-[18px] xl:left-34 xl:w-86.25">
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
            </div>

            {/* Shape 2: Lime Cone / Pyramid (Bottom Left) */}
            <Image
              src="/images/authPageImg/bottom-left-cone.svg"
              alt=""
              aria-hidden="true"
              width={346}
              height={343}
              className="pointer-events-none absolute bottom-4 -left-4 z-30 w-28 drop-shadow-xl select-none  xl:w-34"
            />

            {/* Happy Students Overlay Card */}
            <div className="absolute bottom-4 left-38 z-30 min-w-53.75 rounded-2xl bg-brand-lime p-3.5 text-neutral-900 shadow-[0_15px_35px_rgba(0,0,0,0.2)] xl:left-44">
              <b className="block text-sm font-bold leading-tight text-neutral-900">
                Happy Students
              </b>
              <div className="mt-0.5 flex items-center gap-1 text-[11px] font-semibold text-neutral-800">
                4.5 (240) <span className="text-blue-600">★</span>
              </div>
              <div className="mt-2 flex items-center">
                {HERO_AVATARS.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt=""
                    aria-hidden="true"
                    className="relative -mr-1.5 size-7 rounded-full border-2 border-white object-cover"
                    width={28}
                    height={28}
                  />
                ))}
                <span className="relative grid size-7 place-items-center rounded-full bg-neutral-900 text-[10px] font-bold text-white">
                  2K+
                </span>
              </div>
            </div>

            {/* Shape 3: White Wavy Ribbon (Right Edge) */}
            {/* <Image
              src="/images/hero-images/frame-two.png"
              alt=""
              aria-hidden="true"
              width={267}
              height={387}
              className="pointer-events-none absolute top-32 -right-4 z-30 w-24 drop-shadow-xl select-none xl:top-36 xl:-right-6 xl:w-28"
            /> */}
          </div>


          <div className="h-4" />
        </div>

        {/* Right Side: Register Form Card (Always visible, centered on mobile) */}
        <div className="w-full flex-1 max-w-120">
          {/* Mobile-only Logo */}
          <div className="mb-6 flex justify-center lg:hidden">
            <Link href="/" className="transition-transform hover:scale-105">
              <LogoIcon className="size-9" />
            </Link>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-2xl sm:p-10 md:p-12">
            <span className="block text-xs font-semibold text-blue-600 sm:text-sm">
              Create an Account
            </span>
            <h2 className="mt-1.5 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              Welcome to<br />ByteSpace
            </h2>

            <form className="mt-6 space-y-4 sm:mt-8 sm:space-y-4.5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-medium text-neutral-700 sm:text-sm"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Jamie Davis"
                  className="mt-1.5 w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 sm:py-3 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-neutral-700 sm:text-sm"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="designer@example.com"
                  className="mt-1.5 w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 sm:py-3 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-medium text-neutral-700 sm:text-sm"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="********"
                  className="mt-1.5 w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 sm:py-3 transition-colors"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="cursor-pointer rounded-full bg-brand-lime px-7 py-2.5 text-sm font-bold text-neutral-950 shadow-sm transition hover:brightness-95 active:scale-95 sm:px-8 sm:py-3"
                >
                  Continue
                </button>
              </div>
            </form>

            <div className="mt-8 text-center text-xs text-neutral-600 sm:mt-12 sm:text-sm">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-blue-600 hover:underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
