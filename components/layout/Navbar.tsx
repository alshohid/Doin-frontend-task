"use client";

import { Menu, X } from "lucide-react";
import { Logo } from "@/components/reusable/logo";
import { DesktopNav } from "./navbar/desktop-nav";
import { MobileDrawer } from "./navbar/mobile-drawer";
import { useMobileMenu } from "./navbar/use-mobile-menu";
import type { NavbarProps } from "./navbar/types";

export function Navbar({ overlay }: NavbarProps = {}) {
  const { isOpen, isMounted, toggleMenu, closeMenu, pathname } = useMobileMenu();
  const isOverlay = overlay ?? (pathname === "/" || pathname.startsWith("/courses"));

  return (
    <header
      className={`z-20 h-30 w-full text-white max-md:h-19.5 ${
        isOverlay ? "absolute inset-x-0 top-0 bg-transparent" : "relative bg-brand-blue"
      }`}
    >
      <div className="relative mx-auto flex h-full w-[min(90%,1200px)] items-center justify-between gap-3 max-[420px]:w-[94%] max-[420px]:gap-2">
        <Logo className="shrink-0 text-2xl font-extrabold tracking-[-.04em] text-white max-md:text-[19px] max-[420px]:gap-1 max-[420px]:text-[15px] max-[420px]:[&_svg]:size-6" />

        <DesktopNav pathname={pathname} />

        <button
          type="button"
          className="grid size-10 shrink-0 place-items-center rounded-lg text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-drawer"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <MobileDrawer
        isOpen={isOpen}
        isMounted={isMounted}
        onClose={closeMenu}
        pathname={pathname}
      />
    </header>
  );
}
