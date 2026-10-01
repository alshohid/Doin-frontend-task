"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage = 1,
  totalPages = 5,
  onPageChange,
  className,
}: PaginationProps) {
  // Generate array of page numbers
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center justify-center gap-3 sm:gap-4 select-none", className)}
    >
      {/* Previous Button */}
      <button
        type="button"
        onClick={handlePrev}
        disabled={currentPage <= 1}
        className={cn(
          "flex size-11 items-center justify-center rounded-full border border-neutral-200 bg-white transition-all cursor-pointer shadow-xs",
          currentPage <= 1
            ? "cursor-not-allowed text-neutral-300 opacity-60"
            : "text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50 active:scale-95"
        )}
        aria-label="Previous page"
      >
        <ChevronLeft className="size-4.5" strokeWidth={2.2} />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-3 sm:gap-4.5 px-1">
        {pages.map((page) => {
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "min-w-6 text-center text-sm sm:text-base font-bold transition-colors cursor-pointer",
                isActive
                  ? "text-neutral-300 cursor-default"
                  : "text-neutral-800 hover:text-neutral-500 active:scale-95"
              )}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={handleNext}
        disabled={currentPage >= totalPages}
        className={cn(
          "flex size-11 items-center justify-center rounded-full border border-neutral-200 bg-white transition-all cursor-pointer shadow-xs",
          currentPage >= totalPages
            ? "cursor-not-allowed text-neutral-300 opacity-60"
            : "text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50 active:scale-95"
        )}
        aria-label="Next page"
      >
        <ChevronRight className="size-4.5" strokeWidth={2.2} />
      </button>
    </nav>
  );
}
