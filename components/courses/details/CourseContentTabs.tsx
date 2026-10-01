"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Star } from "lucide-react";
import type { CourseDetail } from "../course-details-data";
import { cn } from "@/lib/utils";

export interface CourseContentTabsProps {
  course: CourseDetail;
}

export function CourseContentTabs({ course }: CourseContentTabsProps) {
  const [activeTab, setActiveTab] = useState<"about" | "lessons" | "reviews">("about");

  return (
    <div className="space-y-8">
      {/* Navigation Tabs (About / Lessons / Reviews) matching screenshot */}
      <div className="flex items-center gap-3" role="tablist">
        {[
          { id: "about", label: "About" },
          { id: "lessons", label: "Lessons" },
          { id: "reviews", label: "Reviews" },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => setActiveTab(tab.id as "about" | "lessons" | "reviews")}
              className={cn(
                "rounded-full px-5 sm:px-6 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer",
                isActive
                  ? "bg-brand-lime text-neutral-900 shadow-xs"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab 1: About (Default view matching screenshot) */}
      {activeTab === "about" && (
        <div className="space-y-8 animate-in fade-in">
          {/* Description */}
          <div>
            <h2 className="text-xl font-bold tracking-tight text-neutral-900">
              Description
            </h2>
            <div className="mt-3 space-y-4 text-xs sm:text-sm leading-relaxed text-neutral-600">
              {course.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Sneak Peak Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900">
              Sneak Peak
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {course.sneakPeaks.map((peak, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl border border-neutral-100 bg-neutral-100 shadow-xs"
                >
                  <Image
                    src={peak.image}
                    alt={peak.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Key Points Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900">
              Key Points
            </h3>
            <div className="mt-4 space-y-3">
              {course.keyPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 shrink-0 fill-blue-600 text-white" />
                  <span className="text-xs sm:text-sm font-medium text-neutral-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Lessons Breakdown */}
      {activeTab === "lessons" && (
        <div className="space-y-4 animate-in fade-in">
          <h2 className="text-xl font-bold tracking-tight text-neutral-900">
            Course Curriculum ({course.totalLessons} Lessons)
          </h2>
          <div className="divide-y divide-neutral-100 rounded-2xl border border-neutral-200 bg-white">
            {course.previewLessons.map((lesson) => (
              <div
                key={lesson.number}
                className="flex items-center justify-between p-4 hover:bg-neutral-50"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-neutral-400">
                    {lesson.number}
                  </span>
                  <span className="text-sm font-semibold text-neutral-800">
                    {lesson.title}
                  </span>
                </div>
                <span className="text-xs font-medium text-neutral-500">
                  {lesson.duration}
                </span>
              </div>
            ))}
            <div className="p-4 text-center text-xs font-medium text-neutral-500">
              + {course.remainingVideosCount} more video lessons available in full course
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Reviews */}
      {activeTab === "reviews" && (
        <div className="space-y-4 animate-in fade-in">
          <h2 className="text-xl font-bold tracking-tight text-neutral-900">
            Student Reviews ({course.reviewCount})
          </h2>
          <div className="space-y-4">
            {[
              {
                name: "Sarah Jenkins",
                rating: 5,
                date: "2 weeks ago",
                comment:
                  "Exceptional course! The explanations are crystal clear and the real-world examples helped me land my first design client.",
              },
              {
                name: "Michael Chen",
                rating: 5,
                date: "1 month ago",
                comment:
                  "The best digital asset creation tutorial out there. Highly practical and beautifully delivered.",
              },
            ].map((review, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-neutral-900">{review.name}</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <Star key={idx} className="size-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
