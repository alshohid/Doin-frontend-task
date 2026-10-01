import Image from "next/image";
import Link from "next/link";
import { BookOpen, Video, Award, Headphones } from "lucide-react";
import type { CourseDetail } from "../course-details-data";

export interface CourseSidebarProps {
  course: CourseDetail;
}

export function CourseSidebar({ course }: CourseSidebarProps) {
  return (
    <aside className="rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-7 shadow-xl">
      {/* Header: Lessons Count */}
      <h3 className="text-base sm:text-lg font-bold text-neutral-900">
        {course.totalLessons} Lessons ({course.totalHours} hours)
      </h3>

      {/* Lesson previews */}
      <div className="mt-4 space-y-2.5">
        {course.previewLessons.map((lesson) => (
          <div
            key={lesson.number}
            className="flex items-start justify-between gap-2 text-xs"
          >
            <div className="flex items-start gap-2">
              <span className="font-semibold text-neutral-400">{lesson.number}</span>
              <span className="font-medium text-neutral-700">{lesson.title}</span>
            </div>
            <span className="shrink-0 text-blue-600 font-medium">{lesson.duration}</span>
          </div>
        ))}
      </div>

      {/* More videos notice */}
      <p className="mt-3 text-xs text-neutral-400 font-medium">
        {course.remainingVideosCount} more videos
      </p>

      {/* Pitch */}
      <p className="mt-5 text-xs leading-relaxed text-neutral-600 font-medium">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      {/* Price */}
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-3xl font-extrabold text-blue-600">{course.price}</span>
        <span className="text-xs text-neutral-500 font-normal">/{course.period}</span>
      </div>

      {/* Enroll Button */}
      <button
        type="button"
        className="mt-4 w-full rounded-full bg-brand-lime py-3.5 text-center text-sm font-bold text-neutral-900 shadow-sm transition hover:brightness-105 active:scale-98 cursor-pointer"
      >
        Enroll Now
      </button>

      {/* This course include */}
      <div className="mt-6">
        <h4 className="text-sm font-bold text-neutral-900">This course include</h4>
        <ul className="mt-3 space-y-2.5 text-xs text-neutral-700">
          <li className="flex items-center gap-2.5">
            <BookOpen className="size-4 shrink-0 text-blue-600" />
            <span>Learning Resources</span>
          </li>
          <li className="flex items-center gap-2.5">
            <Video className="size-4 shrink-0 text-blue-600" />
            <span>Quality Lesson Videos</span>
          </li>
          <li className="flex items-center gap-2.5">
            <Award className="size-4 shrink-0 text-blue-600" />
            <span>Certificate of Completion</span>
          </li>
          <li className="flex items-center gap-2.5">
            <Headphones className="size-4 shrink-0 text-blue-600" />
            <span>Private Consultation</span>
          </li>
        </ul>
      </div>

      <hr className="my-6 border-neutral-100" />

      {/* Creator Box */}
      <div>
        <div className="flex items-center gap-3">
          <div className="relative size-12 shrink-0 overflow-hidden rounded-full border border-neutral-100">
            <Image
              src={course.creator.avatar}
              alt={course.creator.name}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div>
            <h5 className="text-sm font-bold text-neutral-900">{course.creator.name}</h5>
            <p className="text-xs text-neutral-500">{course.creator.role}</p>
          </div>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-neutral-600">
          {course.creator.bio}
        </p>

        <Link
          href={course.creator.profileUrl ?? "/creators"}
          className="mt-4 inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-2 text-xs font-semibold text-neutral-700 transition hover:bg-neutral-50 active:scale-95"
        >
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}
