import Image from "next/image";
import { HERO_DECORATIVE_SHAPES } from "./constants";

export function HeroVisuals() {
  return (
    <>
      {/* Background Frame Layer */}
      <div
        data-hero-layer="frame"
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 hidden h-auto w-[min(1149px,100vw)] -translate-x-1/2 sm:block will-change-transform"
      >
        <Image
          aria-hidden="true"
          className="h-auto w-full select-none"
          src="/images/hero-images/frame-four.png"
          alt=""
          width={1149}
          height={442}
          priority
        />
      </div>

      {/* Hero Person Layer */}
      <div
        data-hero-layer="person"
        className="pointer-events-none absolute bottom-0 left-1/2 z-1 hidden h-auto w-[min(722px,70vw)] -translate-x-1/2 sm:block will-change-transform"
      >
        <Image
          className="h-auto w-full object-contain select-none"
          src="/images/hero-images/hero-person.png"
          alt="A student learning with a laptop"
          width={722}
          height={515}
          priority
          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 85vw, (max-width: 1280px) 75vw, 680px"
        />
      </div>

      {/* Decorative 3D Floating Shapes */}
      {HERO_DECORATIVE_SHAPES.map((shape, index) => (
        <div
          key={shape.src}
          data-hero-layer={`shape-${index}`}
          className={`${shape.className} will-change-transform select-none`}
        >
          <div className="hero-shape-float">
            <Image
              aria-hidden="true"
              src={shape.src}
              alt=""
              width={shape.width}
              height={shape.height}
              className="h-auto w-full"
            />
          </div>
        </div>
      ))}
    </>
  );
}
