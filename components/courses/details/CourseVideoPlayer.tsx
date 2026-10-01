"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export interface CourseVideoPlayerProps {
  thumbnail: string;
  title: string;
}

export function CourseVideoPlayer({ thumbnail, title }: CourseVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-neutral-900 shadow-xl border border-white/10">
      <Image
        src={thumbnail}
        alt={title}
        fill
        priority
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 66vw"
      />

      {/* Video Overlay & Play Button */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/10">
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label="Play Course Video Preview"
          className="group flex size-18 sm:size-22 items-center justify-center rounded-2xl bg-white/40 p-4 backdrop-blur-md transition-all hover:scale-110 hover:bg-white/60 active:scale-95 shadow-2xl cursor-pointer"
        >
          <Play className="size-8 sm:size-10 fill-white text-white translate-x-0.5 group-hover:scale-105 transition-transform" />
        </button>
      </div>
    </div>
  );
}
