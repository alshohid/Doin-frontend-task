"use client";

import Link from "next/link";
import LogoIcon from "@/components/icons/AllIcons";
import { Input } from "@/components/reusable/input";

export function LoginForm() {
  return (
    <div className="w-full flex-1 max-w-md mx-auto md:max-w-xl lg:max-w-125 xl:max-w-135">
      {/* Mobile-only Logo */}
      <div className="mb-6 flex justify-center lg:hidden">
        <Link href="/" className="transition-transform hover:scale-105">
          <LogoIcon className="size-9" />
        </Link>
      </div>

      <div className="rounded-2xl bg-white p-7 shadow-2xl sm:p-10 md:p-12 lg:p-10 xl:p-12">
        <span className="block text-xs font-semibold text-blue-600 sm:text-sm">
          Sign In
        </span>
        <h2 className="mt-1.5 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
          Welcome Back
        </h2>

        <form
          className="mt-6 space-y-4 sm:mt-8 sm:space-y-4.5"
          onSubmit={(e) => e.preventDefault()}
        >
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
              className="cursor-pointer rounded-full bg-brand-lime px-7 py-2.5 text-sm font-medium text-neutral-950 shadow-sm transition hover:brightness-95 active:scale-95 sm:px-8 sm:py-3"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Divider with 'or' */}
        <div className="relative my-7 flex items-center justify-center sm:my-8">
          <div className="w-full border-t border-neutral-200" />
          <span className="absolute bg-white px-3 text-xs text-neutral-400">or</span>
        </div>

        {/* Social Logins: Facebook & Google */}
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Sign in with Facebook"
            className="flex size-13.5 cursor-pointer items-center justify-center rounded-2xl border border-neutral-200 text-neutral-900 transition hover:bg-neutral-50 active:scale-95 sm:size-14"
          >
            <svg
              className="size-6 text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Sign in with Google"
            className="flex size-13.5 cursor-pointer items-center justify-center rounded-2xl border border-neutral-200 text-neutral-900 transition hover:bg-neutral-50 active:scale-95 sm:size-14"
          >
            <svg
              className="size-5.5 text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
          </button>
        </div>

        {/* Footer Link */}
        <div className="mt-8 text-center text-xs text-neutral-600 sm:mt-10 sm:text-sm">
          New user?{" "}
          <Link href="/register" className="font-semibold text-blue-600 hover:underline">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
