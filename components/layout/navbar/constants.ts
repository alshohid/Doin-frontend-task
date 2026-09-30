import { Home, BookOpen, Users } from "lucide-react";
import type { NavLinkItem } from "./types";

export const NAV_LINKS: NavLinkItem[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Creators", href: "/creators", icon: Users },
];
