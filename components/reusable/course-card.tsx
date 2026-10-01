import Link from "next/link";
import Image from "next/image";
import { BarChart3, Star } from "lucide-react";

const studentAvatars = [
  "photo-1534528741775-53994a69daeb",
  "photo-1507003211169-0a1dd7228f2d",
  "photo-1494790108377-be9c29b29330",
  "photo-1500648767791-00dcc994a43e",
];

const tones: Record<string, string> = {
  mint: "bg-category-mint-bg text-category-mint-text",
  coral: "bg-category-coral-bg text-category-coral-text",
  violet: "bg-category-violet-bg text-category-violet-text",
};

export interface CourseCardProps {
  title: string;
  creator: string;
  category?: string;
  price: string;
  tone?: string;
  image?: string;
  rating?: string | number;
  starClassName?: string;
  badges?: string[];
  hideBadgesOnMobile?: boolean;
  avatarBadgeClass?: string;
  avatarBadgeText?: string;
  className?: string;
  slug?: string;
}

export function CourseCard({
  title,
  creator,
  category = "DESIGN",
  price,
  tone = "mint",
  image,
  rating = "4.5",
  starClassName = "fill-current text-border-divider",
  badges = ["17 Lessons", "2 hours 16 mins", "59 Comments"],
  hideBadgesOnMobile = true,
  avatarBadgeClass = "bg-brand-lime text-text-dark",
  avatarBadgeText = "26+",
  className = "",
  slug,
}: CourseCardProps) {
  const targetSlug =
    slug ??
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  return (
    <article className={`overflow-hidden rounded-[18px] border border-border-card bg-white p-2.5 text-text-primary ${className}`}>
      <Link
        href={`/courses/${targetSlug}`}
        className={`relative block aspect-[1.75] overflow-hidden rounded-xl group ${tones[tone] ?? tones.mint}`}
      >
        {image ? (
          <Image
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            src={image}
            alt=""
            fill
            sizes="(max-width: 760px) 50vw, 33vw"
          />
        ) : (
          <>
            <span className="relative z-1 p-5 text-[11px] font-bold tracking-[.13em]">{category}</span>
            <div className="absolute -right-[30px] -bottom-[115px] size-[210px] rounded-full border-[32px] border-white/50" />
            <div className="absolute top-[55px] left-[34%] size-[155px] rounded-full border-[22px] border-white/60" />
            <div className="absolute top-[66px] left-[44%] h-[100px] w-[108px] rotate-[27deg] skew-x-[-8deg] rounded-[20px] bg-white/60 shadow-[10px_14px_0_#101e4c25]" />
          </>
        )}
        {badges && badges.length > 0 && (
          <div className="absolute inset-x-3 bottom-3 flex justify-between gap-1 text-[10px] text-text-subtle max-sm:text-[8px]">
            {badges.map((label) => (
              <span
                key={label}
                className={`rounded-full bg-white/75 px-2.5 py-1 backdrop-blur-sm max-sm:px-1.5 ${hideBadgesOnMobile ? "hidden md:block" : "block"
                  }`}
              >
                {label}
              </span>
            ))}
          </div>
        )}
      </Link>
      <div className="px-0.75 pt-3.25 pb-1 max-md:px-0 max-md:pt-2.25">
        <div className="flex items-center justify-between gap-2.5">
          <h3 className="m-0 overflow-hidden text-ellipsis whitespace-nowrap text-lg font-bold tracking-[-.03em] max-md:text-xs">
            <Link
              href={`/courses/${targetSlug}`}
              className="hover:text-blue-700 transition-colors"
            >
              {title}
            </Link>
          </h3>
          <span className="flex shrink-0 items-center gap-1 text-xs text-text-subtle max-md:text-[10px]">
            {rating} <Star className={`size-3.75 max-md:size-2.75 ${starClassName}`} />
          </span>
        </div>
        <p className="my-1 mb-2.75 text-[11px] text-text-subtle max-md:mb-1.75 max-md:text-[9px]">
          by <Link className="text-blue-700" href="/creators">{creator}</Link>
        </p>
        <div className="flex items-center gap-2 text-[10px] text-text-subtle max-md:gap-1 max-md:text-[8px]">
          <span className="flex items-center gap-1.25 whitespace-nowrap rounded-full bg-surface-pill px-2.5 py-1.75 max-md:gap-1 max-md:px-1.25 max-md:py-1">
            <BarChart3 className="size-3.5 max-md:size-2.5" /> Beginner
          </span>
          <div className="ml-auto flex items-center pl-2">
            {studentAvatars.map((avatar) => (
              <Image
                key={avatar}
                src={`https://images.unsplash.com/${avatar}?auto=format&fit=crop&w=64&h=64&q=80`}
                alt=""
                aria-hidden="true"
                width={32}
                height={32}
                className="-ml-2 size-8 rounded-full border-2 border-white object-cover max-md:size-6"
              />
            ))}
            <span
              className={`-ml-2 grid size-8 place-items-center rounded-full border-2 border-white text-[10px] max-md:size-6 max-md:text-[8px] ${avatarBadgeClass}`}
            >
              {avatarBadgeText}
            </span>
          </div>
        </div>
        <strong className="mt-3 block whitespace-nowrap text-base font-semibold text-blue-700 max-md:mt-2 max-md:text-[11px]">
          {price}
          <small className="text-[9px] font-normal text-text-subtle max-md:text-[7px]">/lifetime</small>
        </strong>
      </div>
    </article>
  );
}

export { CourseCard as GenericCard, CourseCard as GenericCourseCard };

