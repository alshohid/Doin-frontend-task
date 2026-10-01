"use client";

import { useState, useMemo, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { CourseFilterBar } from "@/components/reusable/course-filter-bar";
import { CourseGrid, ALL_COURSES } from "@/components/reusable/course-grid";
import { Pagination } from "@/components/reusable/pagination";

const ITEMS_PER_PAGE = 6;

export function CourseExplorer() {
  const catalogRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("q") ?? "";
  const initialCategory = searchParams.get("category") ?? "Featured";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState<string>("All Levels");
  const [selectedSort, setSelectedSort] = useState<string>("Most relevant");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [minRating, setMinRating] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Reset all filters to default
  const handleResetFilters = () => {
    setSelectedCategory("Featured");
    setSelectedLevel("All Levels");
    setSelectedSort("Most relevant");
    setPriceRange("all");
    setMinRating(0);
    setCurrentPage(1);
  };

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSelectLevel = (level: string) => {
    setSelectedLevel(level);
    setCurrentPage(1);
  };

  const handleSelectSort = (sort: string) => {
    setSelectedSort(sort);
    setCurrentPage(1);
  };

  const handleSelectPriceRange = (range: string) => {
    setPriceRange(range);
    setCurrentPage(1);
  };

  const handleSelectMinRating = (rating: number) => {
    setMinRating(rating);
    setCurrentPage(1);
  };

  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter((course) => {
      // 1. Text Search Filter
      if (queryParam.trim()) {
        const q = queryParam.toLowerCase();
        const matchesQuery =
          course.title.toLowerCase().includes(q) ||
          course.creator.toLowerCase().includes(q) ||
          (course.category && course.category.toLowerCase().includes(q));
        if (!matchesQuery) return false;
      }

      // 2. Category Filter
      if (selectedCategory && selectedCategory !== "Featured") {
        if (
          course.category?.toLowerCase() !== selectedCategory.toLowerCase() &&
          !course.category?.toLowerCase().includes(selectedCategory.toLowerCase())
        ) {
          return false;
        }
      }

      // 3. Level Filter
      if (selectedLevel !== "All Levels") {
        if (course.level && course.level !== selectedLevel && course.level !== "All Levels") {
          return false;
        }
      }

      // 4. Price Range Filter
      const price = course.numericPrice ?? 0;
      if (priceRange === "under-25" && price >= 25) return false;
      if (priceRange === "25-35" && (price < 25 || price > 35)) return false;
      if (priceRange === "above-35" && price <= 35) return false;

      // 5. Min Rating Filter
      const rating = typeof course.rating === "number" ? course.rating : parseFloat(course.rating ?? "0");
      if (minRating > 0 && rating < minRating) return false;

      return true;
    }).sort((a, b) => {
      // Sorting
      if (selectedSort === "Highest Rated") {
        const ratingA = typeof a.rating === "number" ? a.rating : parseFloat(a.rating ?? "0");
        const ratingB = typeof b.rating === "number" ? b.rating : parseFloat(b.rating ?? "0");
        return ratingB - ratingA;
      }
      if (selectedSort === "Price: Low to High") {
        return (a.numericPrice ?? 0) - (b.numericPrice ?? 0);
      }
      if (selectedSort === "Price: High to Low") {
        return (b.numericPrice ?? 0) - (a.numericPrice ?? 0);
      }
      if (selectedSort === "Newest") {
        return (b.id ?? "0").localeCompare(a.id ?? "0");
      }
      return 0; // "Most relevant"
    });
  }, [queryParam, selectedCategory, selectedLevel, selectedSort, priceRange, minRating]);

  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / ITEMS_PER_PAGE));
  const validCurrentPage = Math.min(currentPage, totalPages);

  const paginatedCourses = useMemo(() => {
    const startIndex = (validCurrentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCourses, validCurrentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div ref={catalogRef} className="space-y-8 scroll-mt-24">
      {/* Filter Bar (Matching screenshot) */}
      <CourseFilterBar
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        selectedLevel={selectedLevel}
        onSelectLevel={handleSelectLevel}
        selectedSort={selectedSort}
        onSelectSort={handleSelectSort}
        priceRange={priceRange}
        onSelectPriceRange={handleSelectPriceRange}
        minRating={minRating}
        onSelectMinRating={handleSelectMinRating}
        onResetFilters={handleResetFilters}
      />

      {/* Course Grid */}
      <div className="pt-2">
        <CourseGrid
          courses={paginatedCourses}
          emptyMessage={`No courses found in "${selectedCategory}".`}
        />
      </div>

      {/* Pagination Bar (Matching screenshot) */}
      {totalPages > 1 && (
        <div className="pt-6 sm:pt-10">
          <Pagination
            currentPage={validCurrentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}
