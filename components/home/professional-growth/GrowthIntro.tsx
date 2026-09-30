import { GROWTH_STATS } from "./constants";

export function GrowthIntro() {
  return (
    <div>
      <h2 className="mb-5 text-[clamp(30px,4vw,44px)] leading-[1.13] tracking-[-.04em]">
        Your Path to Professional Growth Starts Here!
      </h2>
      <p className="max-w-122.5 text-sm leading-[1.75] text-text-body sm:text-base">
        Explore our curated selection of courses tailored to enhance your
        capabilities and accelerate your career journey. Whether you are
        looking to sharpen specific skills, gain industry expertise, or
        embark on a new career path entirely, we have the resources you
        need.
      </p>
      <div className="mt-7 flex gap-8 sm:gap-12">
        {GROWTH_STATS.map(({ count, label }) => (
          <div className="grid gap-1 text-sm text-text-body" key={label}>
            <b className="text-3xl font-semibold tracking-tight text-blue-700 sm:text-4xl">
              {count}
            </b>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
