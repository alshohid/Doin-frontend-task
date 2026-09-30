"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { ChevronRight, ShoppingBag, X } from "lucide-react";
import { Logo } from "@/components/reusable/logo";
import { NAV_LINKS } from "./constants";

interface MobileDrawerProps {
  isOpen: boolean;
  isMounted: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileDrawer({
  isOpen,
  isMounted,
  onClose,
  pathname,
}: MobileDrawerProps) {
  if (!isMounted) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[100] md:hidden transition-[visibility] duration-300 ${
        isOpen ? "visible" : "invisible delay-300 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Right-side drawer panel */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 right-0 flex h-dvh w-[82vw] max-w-[340px] flex-col border-l border-white/15 bg-gradient-to-b from-brand-blue to-[#0528a5] text-white shadow-[-10px_0_30px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-in-out sm:w-80 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex h-19.5 items-center justify-between border-b border-white/15 px-5">
          <Logo
            onClick={onClose}
            className="shrink-0 text-xl font-extrabold tracking-[-.04em] text-white"
          />
          <button
            type="button"
            onClick={onClose}
            className="grid size-9 place-items-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-brand-lime"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="flex-1 overflow-y-auto px-4 py-5">
          <div className="mb-2 px-3 text-xs font-semibold tracking-wider text-white/50 uppercase">
            Menu
          </div>
          <nav className="flex flex-col gap-1.5" aria-label="Mobile links">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`group flex items-center justify-between rounded-xl px-3.5 py-3 text-[15px] font-medium transition-all ${
                    isActive
                      ? "bg-white/15 text-brand-lime shadow-xs"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid size-8 place-items-center rounded-lg transition-colors ${
                        isActive
                          ? "bg-brand-lime/20 text-brand-lime"
                          : "bg-white/10 text-white/80 group-hover:bg-white/20 group-hover:text-white"
                      }`}
                    >
                      <Icon size={17} />
                    </span>
                    <span>{link.name}</span>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`transition-transform group-hover:translate-x-0.5 ${
                      isActive ? "text-brand-lime" : "text-white/30"
                    }`}
                  />
                </Link>
              );
            })}

            <Link
              href="/courses"
              onClick={onClose}
              className="group flex items-center justify-between rounded-xl px-3.5 py-3 text-[15px] font-medium text-white/85 transition-all hover:bg-white/10 hover:text-white"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-lg bg-white/10 text-white/80 transition-colors group-hover:bg-white/20 group-hover:text-white">
                  <ShoppingBag size={17} />
                </span>
                <span>Course Bag</span>
              </div>
              <ChevronRight
                size={16}
                className="text-white/30 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </nav>
        </div>

        {/* Drawer Footer Actions */}
        <div className="border-t border-white/15 bg-black/10 px-5 py-5">
          <div className="flex flex-col gap-2.5">
            <Link
              href="/login"
              onClick={onClose}
              className="flex h-11 w-full items-center justify-center rounded-full border border-white/20 text-center text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-brand-lime"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={onClose}
              className="flex h-11 w-full items-center justify-center rounded-full bg-brand-lime text-center text-sm font-bold text-[#111] transition-transform hover:bg-brand-lime/90 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-white"
            >
              Join Us
            </Link>
          </div>
          <p className="mt-4 text-center text-[11px] text-white/40">
            © ByteSpace. Learn from creators.
          </p>
        </div>
      </aside>
    </div>,
    document.body
  );
}
