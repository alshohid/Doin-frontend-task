"use client";

import { useState, useRef, useEffect } from "react";
import { Filter, Shapes, Check, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
] as const;

export const LEVELS = ["All Levels", "Beginner", "Intermediate", "Advanced"] as const;

export const SORT_OPTIONS = [
  "Most relevant",
  "Highest Rated",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
] as const;

export interface FilterState {
  category: string;
  level: string;
  sort: string;
  priceRange?: string; // "all" | "under-25" | "25-35" | "above-35"
  minRating?: number; // 0 | 4.0 | 4.5
}

export interface CourseFilterBarProps {
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
  selectedLevel?: string;
  onSelectLevel?: (level: string) => void;
  selectedSort?: string;
  onSelectSort?: (sort: string) => void;
  priceRange?: string;
  onSelectPriceRange?: (range: string) => void;
  minRating?: number;
  onSelectMinRating?: (rating: number) => void;
  onResetFilters?: () => void;
  className?: string;
}

export function CourseFilterBar({
  selectedCategory = "Featured",
  onSelectCategory,
  selectedLevel = "All Levels",
  onSelectLevel,
  selectedSort = "Most relevant",
  onSelectSort,
  priceRange = "all",
  onSelectPriceRange,
  minRating = 0,
  onSelectMinRating,
  onResetFilters,
  className,
}: CourseFilterBarProps) {
  const [activeDropdown, setActiveDropdown] = useState<
    "filter" | "level" | "category" | "sort" | null
  >(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name: "filter" | "level" | "category" | "sort") => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const hasExtraFilters = priceRange !== "all" || minRating > 0;

  return (
    <div
      ref={containerRef}
      className={cn("w-full space-y-5 text-neutral-800", className)}
    >
      {/* Top Controls Row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Left Side: Filter, Level, Category */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {/* 1. Filter Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown("filter")}
              className={cn(
                "inline-flex h-10.5 items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-800 shadow-xs transition-colors hover:border-neutral-400 hover:bg-neutral-50 active:scale-98 cursor-pointer",
                (activeDropdown === "filter" || hasExtraFilters) &&
                  "border-neutral-900 bg-neutral-50 font-semibold"
              )}
              aria-expanded={activeDropdown === "filter"}
              aria-label="Filter courses"
            >
              <Filter className="size-4 shrink-0 text-neutral-700" />
              <span>Filter</span>
              {hasExtraFilters && (
                <span className="size-2 rounded-full bg-brand-lime" />
              )}
            </button>

            {/* Filter Dropdown Popover */}
            {activeDropdown === "filter" && (
              <div className="absolute left-0 top-full z-50 mt-2 w-72 rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl animate-in fade-in zoom-in-95">
                <div className="mb-3 flex items-center justify-between border-b border-neutral-100 pb-2">
                  <h4 className="text-sm font-bold text-neutral-900">
                    Additional Filters
                  </h4>
                  {hasExtraFilters && (
                    <button
                      type="button"
                      onClick={() => {
                        onResetFilters?.();
                        onSelectPriceRange?.("all");
                        onSelectMinRating?.(0);
                      }}
                      className="text-xs font-semibold text-blue-600 hover:underline"
                    >
                      Reset
                    </button>
                  )}
                </div>

                {/* Price range */}
                <div className="mb-4">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Price Range
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { id: "all", label: "All Prices" },
                      { id: "under-25", label: "Under $25" },
                      { id: "25-35", label: "$25 - $35" },
                      { id: "above-35", label: "$35 & above" },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => onSelectPriceRange?.(opt.id)}
                        className={cn(
                          "rounded-lg border px-2.5 py-1.5 text-xs font-medium text-left transition-colors",
                          priceRange === opt.id
                            ? "border-neutral-900 bg-neutral-900 text-white"
                            : "border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Minimum Rating */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Minimum Rating
                  </label>
                  <div className="flex gap-2">
                    {[
                      { val: 0, label: "All" },
                      { val: 4.0, label: "4.0+ ★" },
                      { val: 4.5, label: "4.5+ ★" },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => onSelectMinRating?.(opt.val)}
                        className={cn(
                          "flex-1 rounded-lg border py-1.5 text-xs font-medium transition-colors text-center",
                          minRating === opt.val
                            ? "border-neutral-900 bg-neutral-900 text-white"
                            : "border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 2. Level Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown("level")}
              className={cn(
                "inline-flex h-10.5 items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-800 shadow-xs transition-colors hover:border-neutral-400 hover:bg-neutral-50 active:scale-98 cursor-pointer",
                (activeDropdown === "level" || selectedLevel !== "All Levels") &&
                  "border-neutral-900 bg-neutral-50 font-semibold"
              )}
              aria-expanded={activeDropdown === "level"}
              aria-label="Filter by level"
            >
              {/* Stepped bar chart icon matching screenshot */}
              <svg
                className="size-4 shrink-0 text-neutral-800"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="20" x2="5" y2="15" />
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="19" y1="20" x2="19" y2="4" />
              </svg>
              <span>{selectedLevel === "All Levels" ? "Level" : selectedLevel}</span>
            </button>

            {activeDropdown === "level" && (
              <div className="absolute left-0 top-full z-50 mt-2 min-w-44 overflow-hidden rounded-2xl border border-neutral-200 bg-white py-1.5 shadow-xl animate-in fade-in zoom-in-95">
                {LEVELS.map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => {
                      onSelectLevel?.(level);
                      setActiveDropdown(null);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between px-4 py-2.5 text-left text-xs sm:text-sm font-medium transition-colors hover:bg-neutral-50",
                      selectedLevel === level
                        ? "font-semibold text-blue-600"
                        : "text-neutral-700"
                    )}
                  >
                    <span>{level}</span>
                    {selectedLevel === level && (
                      <Check className="size-4 text-blue-600" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 3. Category Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown("category")}
              className={cn(
                "inline-flex h-10.5 items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-800 shadow-xs transition-colors hover:border-neutral-400 hover:bg-neutral-50 active:scale-98 cursor-pointer",
                (activeDropdown === "category" ||
                  selectedCategory !== "Featured") &&
                  "border-neutral-900 bg-neutral-50 font-semibold"
              )}
              aria-expanded={activeDropdown === "category"}
              aria-label="Filter by category"
            >
              <Shapes className="size-4 shrink-0 text-neutral-800" />
              <span>
                {selectedCategory === "Featured" ? "Category" : selectedCategory}
              </span>
            </button>

            {activeDropdown === "category" && (
              <div className="absolute left-0 top-full z-50 mt-2 max-h-72 w-52 overflow-y-auto rounded-2xl border border-neutral-200 bg-white py-1.5 shadow-xl animate-in fade-in zoom-in-95">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      onSelectCategory?.(cat);
                      setActiveDropdown(null);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between px-4 py-2.5 text-left text-xs sm:text-sm font-medium transition-colors hover:bg-neutral-50",
                      selectedCategory === cat
                        ? "font-semibold text-blue-600"
                        : "text-neutral-700"
                    )}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && (
                      <Check className="size-4 text-blue-600" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Most relevant / Sort */}
        <div className="relative ml-auto">
          <button
            type="button"
            onClick={() => toggleDropdown("sort")}
            className={cn(
              "inline-flex h-10.5 items-center gap-2.5 rounded-full border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-800 shadow-xs transition-colors hover:border-neutral-400 hover:bg-neutral-50 active:scale-98 cursor-pointer",
              activeDropdown === "sort" &&
                "border-neutral-900 bg-neutral-50 font-semibold"
            )}
            aria-expanded={activeDropdown === "sort"}
            aria-label="Sort courses"
          >
            {/* Sort icon matching screenshot: 3 horizontal lines descending with vertical edge on left */}
            <svg
              className="size-4 shrink-0 text-neutral-800"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 6h16" />
              <path d="M4 12h12" />
              <path d="M4 18h8" />
              <path d="M4 6v12" />
            </svg>
            <span>{selectedSort}</span>
          </button>

          {activeDropdown === "sort" && (
            <div className="absolute right-0 top-full z-50 mt-2 min-w-48 overflow-hidden rounded-2xl border border-neutral-200 bg-white py-1.5 shadow-xl animate-in fade-in zoom-in-95">
              {SORT_OPTIONS.map((sort) => (
                <button
                  key={sort}
                  type="button"
                  onClick={() => {
                    onSelectSort?.(sort);
                    setActiveDropdown(null);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between px-4 py-2.5 text-left text-xs sm:text-sm font-medium transition-colors hover:bg-neutral-50",
                    selectedSort === sort
                      ? "font-semibold text-blue-600"
                      : "text-neutral-700"
                  )}
                >
                  <span>{sort}</span>
                  {selectedSort === sort && (
                    <Check className="size-4 text-blue-600" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Row: Category Pills matching screenshot */}
      <div
        className="flex items-center gap-2.5 overflow-x-auto pb-1 text-sm no-scrollbar scroll-smooth"
        role="tablist"
        aria-label="Course categories"
      >
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => onSelectCategory?.(cat)}
              className={cn(
                "inline-flex shrink-0 items-center justify-center rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all active:scale-95 cursor-pointer",
                isActive
                  ? "bg-brand-lime font-semibold text-neutral-900 shadow-xs"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
