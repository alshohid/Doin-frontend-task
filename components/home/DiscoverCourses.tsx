import { Skills } from "@/components/home/Skills";
import { CourseGrid } from "@/components/reusable/course-grid";

export function DiscoverCourses() {
  return (
    <section className="mx-auto w-[90%] max-w-300 py-19.5 max-md:py-13">
      <div className="mx-auto mb-[38px] text-center max-md:mb-[26px]">
        <h2 className="mb-[15px] text-[clamp(28px,3vw,42px)] leading-[1.15] tracking-[-.04em] max-md:text-[27px]">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>
        <p className="m-0 text-[15px] leading-[1.65] text-text-secondary max-md:text-xs">
          At Bytespace Courses, we bring you closer to life-changing
          knowledge. Explore a variety of courses across different
          <br className="max-md:hidden" /> fields, from technology to the
          arts, and make a difference in your career and life.
        </p>
      </div>
      <Skills />
      <CourseGrid />
    </section>
  );
}
