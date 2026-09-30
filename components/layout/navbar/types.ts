import type { LucideIcon } from "lucide-react";

export interface NavLinkItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface NavbarProps {
  overlay?: boolean;
}
