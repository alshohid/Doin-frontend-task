import Image from "next/image";
import { HERO_DECORATIVE_SHAPES } from "./constants";

export function HeroVisuals() {
  return (
    <>

      <Image
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 hidden h-auto w-[min(1149px,100vw)] -translate-x-1/2 sm:block"
        src="/images/hero-images/frame-four.png"
        alt=""
        width={1149}
        height={442}
        priority
      />


      <Image
        className="absolute bottom-0 left-1/2 z-1 hidden h-auto w-[min(722px,70vw)] -translate-x-1/2 object-contain sm:block"
        src="/images/hero-images/hero-person.png"
        alt="A student learning with a laptop"
        width={722}
        height={515}
        priority
        sizes="(max-width: 640px) 95vw, (max-width: 1024px) 85vw, (max-width: 1280px) 75vw, 680px"
      />


      {HERO_DECORATIVE_SHAPES.map((shape) => (
        <Image
          key={shape.src}
          aria-hidden="true"
          className={shape.className}
          src={shape.src}
          alt=""
          width={shape.width}
          height={shape.height}
        />
      ))}
    </>
  );
}
