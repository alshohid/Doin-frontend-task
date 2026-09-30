import { LogoipsumOne, LogoipsumTwo } from "@/components/icons/AllIcons";

const BRANDS = [
  LogoipsumOne,
  LogoipsumTwo,
  LogoipsumOne,
  LogoipsumTwo,
  LogoipsumOne,
];

export function TrustedBy() {
  return (
    <section className="bg-surface-gray px-5">
      <div
        className="mx-auto flex min-h-32.5 w-[90%] max-w-300 flex-wrap items-center justify-between gap-x-[clamp(22px,5vw,76px)] gap-y-4 py-5 text-[18px] font-bold text-text-muted max-md:min-h-[95px] max-md:text-xs"
        aria-label="Trusted by leading teams"
      >
        {BRANDS.map((Brand, index) => (
          <Brand key={index} className="h-auto w-[clamp(96px,9vw,167px)]" />
        ))}
      </div>
    </section>
  );
}
