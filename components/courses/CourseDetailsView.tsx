import type { CourseDetail } from "./course-details-data";
import { CourseDetailHeader } from "./details/CourseDetailHeader";
import { CourseVideoPlayer } from "./details/CourseVideoPlayer";
import { CourseContentTabs } from "./details/CourseContentTabs";
import { CourseSidebar } from "./details/CourseSidebar";

export interface CourseDetailsViewProps {
  course: CourseDetail;
}

export function CourseDetailsView({ course }: CourseDetailsViewProps) {
  return (
    <div className="relative min-h-screen bg-white text-neutral-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-156.25 sm:h-192.5 lg:h-223.75 bg-brand-blue-hero z-0 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-38 pb-20">
        <CourseDetailHeader course={course} />
        <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-8">
            <CourseVideoPlayer
              thumbnail={course.heroVideoThumbnail}
              title={course.title}
            />

            <div className="mt-10 sm:mt-12">
              <CourseContentTabs course={course} />
            </div>
          </div>
          <div className="lg:col-span-4 sticky top-24 z-20">
            <CourseSidebar course={course} />
          </div>
        </div>
      </div>
    </div>
  );
}
