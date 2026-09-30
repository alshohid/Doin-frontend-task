import Image from "next/image";

export function BackgroundDecorations() {
  return (
    <>
      <Image
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 w-[46vw] max-w-155"
        src="/images/professional-growth/ellipse-one.png"
        alt=""
        width={1025}
        height={711}
      />
      <Image
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 z-0 w-[30vw] max-w-105"
        src="/images/professional-growth/ellipse-two.png"
        alt=""
        width={669}
        height={719}
      />
      <Image
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-0 w-[28vw] max-w-95"
        src="/images/professional-growth/ellipse-three.png"
        alt=""
        width={425}
        height={554}
      />
      <Image
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-0 w-[34vw] max-w-117.5"
        src="/images/professional-growth/ellipse-four.png"
        alt=""
        width={758}
        height={712}
      />
    </>
  );
}
