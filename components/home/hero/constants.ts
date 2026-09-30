export interface DecorativeShape {
  src: string;
  className: string;
  width: number;
  height: number;
}

export const HERO_AVATARS: string[] = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&h=100&q=80",
];

export const HERO_DECORATIVE_SHAPES: DecorativeShape[] = [
  {
    src: "/images/hero-images/frame-one.png",
    className:
      "pointer-events-none absolute -left-2 top-[28%] z-0 hidden w-28 sm:block sm:w-40 md:w-52",
    width: 267,
    height: 387,
  },
  {
    src: "/images/hero-images/cone-two.png",
    className:
      "pointer-events-none absolute right-[-2%] top-[25%] z-0 hidden w-24 sm:block sm:w-32 md:w-44",
    width: 213,
    height: 372,
  },
  {
    src: "/images/hero-images/frame-two.png",
    className:
      "pointer-events-none absolute left-[15%] top-[49%] z-0 hidden w-20 sm:block sm:w-24",
    width: 177,
    height: 176,
  },
  {
    src: "/images/hero-images/cone-one.png",
    className:
      "pointer-events-none absolute left-[4%] bottom-[6%] z-0 hidden w-36 sm:block sm:w-48 md:w-60",
    width: 346,
    height: 343,
  },
  {
    src: "/images/hero-images/cone-three.png",
    className:
      "pointer-events-none absolute right-[5%] top-[47%] z-0 hidden w-20 sm:block sm:w-24 md:w-32",
    width: 190,
    height: 189,
  },
  {
    src: "/images/hero-images/frame-three.png",
    className:
      "pointer-events-none absolute right-[4%] bottom-[6%] z-0 hidden w-28 sm:block sm:w-40 md:w-48",
    width: 317,
    height: 332,
  },
];
