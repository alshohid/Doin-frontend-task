import { Suspense } from "react";
import { SearchBar } from "@/components/reusable/search-bar";
import { CourseExplorer } from "@/components/courses/CourseExplorer";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative isolate overflow-hidden bg-brand-blue-hero px-4 pt-32 pb-16 text-white sm:pt-26 sm:pb-20 lg:pt-30 lg:pb-22">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20"
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
            Find Your Next Course
          </h1>
          <div className="mt-6 sm:mt-8">
            <SearchBar placeholder="Search" showDropdown />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <Suspense
          fallback={
            <div className="h-64 animate-pulse rounded-2xl bg-neutral-100" />
          }
        >
          <CourseExplorer />
        </Suspense>
      </section>
    </main>
  );
}
