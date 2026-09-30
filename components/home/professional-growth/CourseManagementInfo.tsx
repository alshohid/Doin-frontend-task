import { Check } from "lucide-react";
import { BENEFITS } from "./constants";

export function CourseManagementInfo() {
  return (
    <div>
      <h2 className="mb-5 text-[clamp(30px,4vw,44px)] leading-[1.13] tracking-[-.04em]">
        Create &amp; Manage Courses Easily.
      </h2>
      <p className="mb-7 max-w-125 text-sm leading-[1.75] text-text-body sm:text-base">
        <strong className="text-text-heading">ByteSpace</strong> supports
        individuals or entities in the creation, publication, and
        administration of educational courses.
      </p>
      <ul className="m-0 grid list-none gap-3 p-0 text-sm sm:text-base">
        {BENEFITS.map((benefit) => (
          <li className="flex items-center gap-2.5" key={benefit}>
            <Check className="size-5 shrink-0 rounded-full bg-blue-700 p-1 text-white" />
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}
