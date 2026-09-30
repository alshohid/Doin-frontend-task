"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { NAV_LINKS } from "./constants";

interface DesktopNavProps {
  pathname: string;
}

export function DesktopNav({ pathname }: DesktopNavProps) {
  return (
    <>
      <nav
        aria-label="Main navigation"
        className="hidden shrink-0 items-center gap-7 whitespace-nowrap text-[15px] md:flex [&_a]:transition-opacity [&_a]:hover:opacity-75 [&_a]:focus-visible:rounded-sm [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-brand-lime"
      >
        {NAV_LINKS.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={isActive ? "font-semibold text-brand-lime" : ""}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="hidden shrink-0 items-center gap-7 whitespace-nowrap text-[15px] md:flex [&_a]:transition-opacity [&_a]:hover:opacity-75 [&_a]:focus-visible:rounded-sm [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-brand-lime">
        <Link href="/login">Sign In</Link>
        <Link href="/register">Join Us</Link>
        <Link
          href="/courses"
          aria-label="Course bag"
          className="grid place-items-center max-md:hidden"
        >
          <ShoppingBag size={19} />
        </Link>
      </div>
    </>
  );
}
