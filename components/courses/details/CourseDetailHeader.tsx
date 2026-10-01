"use client";

import { useState } from "react";
import Link from "next/link";
import { Share2, Star, Users, Check } from "lucide-react";
import type { CourseDetail } from "../course-details-data";

export interface CourseDetailHeaderProps {
  course: CourseDetail;
}

export function CourseDetailHeader({ course }: CourseDetailHeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between text-white">
      {/* Left: Titles & Badges */}
      <div className="max-w-3xl">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          {course.title}
        </h1>
        <p className="mt-2 text-sm font-medium text-white/90 sm:text-base">
          {course.subtitle}
        </p>

        <p className="mt-3 text-xs text-white/80 sm:text-sm">
          by{" "}
          <Link
            href={course.creator.profileUrl ?? "/creators"}
            className="font-semibold text-white underline decoration-white/40 hover:text-brand-lime hover:decoration-brand-lime"
          >
            {course.creator.name.toLowerCase()}
          </Link>
        </p>

        {/* Metadata Badges Row matching screenshot */}
        <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
          {/* Level badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-neutral-800 shadow-xs">
            <svg
              className="size-3.5 text-neutral-800"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="20" x2="5" y2="15" />
              <line x1="12" y1="20" x2="12" y2="10" />
              <line x1="19" y1="20" x2="19" y2="4" />
            </svg>
            <span>{course.level}</span>
          </span>

          {/* Rating badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-neutral-800 shadow-xs">
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            <span>
              {course.rating} ({course.reviewCount} reviews)
            </span>
          </span>

          {/* Student Count badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-neutral-800 shadow-xs">
            <Users className="size-3.5 text-neutral-800" />
            <span>{course.studentCount} Students</span>
          </span>
        </div>
      </div>

      {/* Right: Share Button */}
      <div className="shrink-0">
        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-lime px-4 py-1.5 text-xs sm:text-sm font-semibold text-neutral-900 shadow-sm transition hover:brightness-105 active:scale-95 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="size-4" />
              <span>Link Copied!</span>
            </>
          ) : (
            <>
              <Share2 className="size-4" />
              <span>Share</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
