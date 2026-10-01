"use client";

import Link from "next/link";
import LogoIcon from "@/components/icons/AllIcons";
import { Input } from "@/components/reusable/input";

export function RegisterForm() {
  return (
    <div className="w-full flex-1 max-w-md md:max-w-xl lg:max-w-125 xl:max-w-135">
      {/* Mobile-only Logo */}
      <div className="mb-6 flex justify-center lg:hidden">
        <Link href="/" className="transition-transform hover:scale-105">
          <LogoIcon className="size-9" />
        </Link>
      </div>

      <div className="rounded-2xl bg-white p-7 shadow-2xl sm:p-10 md:p-12 lg:p-10 xl:p-12">
        <span className="block text-xs font-semibold text-blue-600 sm:text-sm">
          Create an Account
        </span>
        <h2 className="mt-1.5 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
          Welcome to<br />ByteSpace
        </h2>

        <form
          className="mt-6 space-y-4 sm:mt-8 sm:space-y-4.5"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            id="fullName"
            label="Full Name"
            type="text"
            placeholder="Jamie Davis"
          />

          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="designer@example.com"
          />

          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="********"
          />

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
  );
}
