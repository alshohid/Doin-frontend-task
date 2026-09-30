import {
  BackgroundDecorations,
  GrowthIntro,
  StudentVisualCard,
  CreatorVisualCard,
  CourseManagementInfo,
} from "./professional-growth";

export function ProfessionalGrowth() {
  return (
    <section className="relative isolate overflow-hidden bg-surface-soft px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
      <BackgroundDecorations />
      <div className="relative z-10 mx-auto grid max-w-300 grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
        <GrowthIntro />
        <StudentVisualCard />
        <CreatorVisualCard />
        <CourseManagementInfo />
      </div>
    </section>
  );
}
