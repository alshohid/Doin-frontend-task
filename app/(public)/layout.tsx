import { Footer } from "@/components/layout/Footer";
import type { ReactNode } from "react";
export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-text-primary">
      {children}
      <Footer />
    </div>
  );
}
