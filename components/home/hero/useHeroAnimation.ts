"use client";

import { type RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function useHeroAnimation(containerRef: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      if (!containerRef.current) return;

      const container = containerRef.current;

      // 1. Ambient gentle floating animations
      // Float shapes
      const shapeFloats = container.querySelectorAll(".hero-shape-float");
      shapeFloats.forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? 8 : -8,
          rotation: (i % 2 === 0 ? 1 : -1) * (2 + (i % 3) * 1.5),
          duration: 2.8 + (i % 3) * 0.7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.15,
        });
      });

      // Float stat cards
      const cardFloats = container.querySelectorAll(".hero-card-float");
      cardFloats.forEach((el, i) => {
        gsap.to(el, {
          y: i === 1 ? -6 : 6,
          duration: 3 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.25,
        });
      });

      // 2. Mouse Parallax & 3D Tilt Trigger
      // Only attach on fine pointer devices (desktops/laptops)
      const isFinePointer =
        typeof window !== "undefined" &&
        window.matchMedia("(pointer: fine)").matches;

      if (!isFinePointer) return;

      const card1 = container.querySelector('[data-hero-layer="card-1"]');
      const card2 = container.querySelector('[data-hero-layer="card-2"]');
      const card3 = container.querySelector('[data-hero-layer="card-3"]');
      const person = container.querySelector('[data-hero-layer="person"]');
      const frame = container.querySelector('[data-hero-layer="frame"]');

      // 6 Decorative Shapes with custom depth and rotation factors
      const shapesConfig = [
        { el: container.querySelector('[data-hero-layer="shape-0"]'), xF: -28, yF: -22, rot: 6 },
        { el: container.querySelector('[data-hero-layer="shape-1"]'), xF: 32, yF: -26, rot: -8 },
        { el: container.querySelector('[data-hero-layer="shape-2"]'), xF: -18, yF: 18, rot: 5 },
        { el: container.querySelector('[data-hero-layer="shape-3"]'), xF: -36, yF: 28, rot: -10 },
        { el: container.querySelector('[data-hero-layer="shape-4"]'), xF: 22, yF: -18, rot: 8 },
        { el: container.querySelector('[data-hero-layer="shape-5"]'), xF: 34, yF: 26, rot: -6 },
      ];

      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        // Normalized between -1 and 1 from center
        const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;

        // Card 1: UI/UX Design (with 3D tilt)
        if (card1) {
          gsap.to(card1, {
            x: normX * 20,
            y: normY * 16,
            rotateY: normX * 12,
            rotateX: -normY * 12,
            duration: 0.75,
            ease: "power2.out",
            overwrite: "auto",
          });
        }

        // Card 2: Learning Progress (moves counter to cursor)
        if (card2) {
          gsap.to(card2, {
            x: normX * -25,
            y: normY * -20,
            rotateY: normX * 14,
            rotateX: -normY * 14,
            duration: 0.8,
            ease: "power2.out",
            overwrite: "auto",
          });
        }

        // Card 3: Happy Students
        if (card3) {
          gsap.to(card3, {
            x: normX * 22,
            y: normY * -18,
            rotateY: normX * 10,
            rotateX: -normY * 10,
            duration: 0.85,
            ease: "power2.out",
            overwrite: "auto",
          });
        }

        // Hero Person (subtle focal depth)
        if (person) {
          gsap.to(person, {
            x: normX * -10,
            y: normY * -6,
            duration: 1,
            ease: "power2.out",
            overwrite: "auto",
          });
        }

        // Background Frame
        if (frame) {
          gsap.to(frame, {
            x: normX * 12,
            y: normY * 8,
            duration: 1.1,
            ease: "power2.out",
            overwrite: "auto",
          });
        }

        // Decorative 3D Shapes Parallax
        shapesConfig.forEach(({ el, xF, yF, rot }) => {
          if (!el) return;
          gsap.to(el, {
            x: normX * xF,
            y: normY * yF,
            rotation: normX * rot,
            duration: 0.85,
            ease: "power2.out",
            overwrite: "auto",
          });
        });
      };

      const handleMouseLeave = () => {
        // Return gracefully to base position on mouse leave
        const targets = [
          card1,
          card2,
          card3,
          person,
          frame,
          ...shapesConfig.map((s) => s.el),
        ].filter(Boolean);

        gsap.to(targets, {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          rotation: 0,
          duration: 1.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: containerRef }
  );
}
