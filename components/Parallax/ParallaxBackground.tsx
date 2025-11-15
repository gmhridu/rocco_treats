"use client";

import { useEffect, useState, useRef } from "react";

export default function ParallaxBackground() {
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const animationRef = useRef<number>(0);
  const lastScrollY = useRef(0);

  // Throttle function to limit scroll event frequency
  const throttle = (func: () => void, limit: number) => {
    let inThrottle: boolean;
    return function(...args: []) {
      if (!inThrottle) {
        func();
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Cancel previous animation frame
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      // Update with requestAnimationFrame for smoother performance
      animationRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // Parallax effect - move background at 30% speed of scroll
        const newOffset = scrollY * 0.3;

        // Only update if scroll position has changed significantly
        if (Math.abs(newOffset - offset) > 0.5) {
          setOffset(newOffset);
        }

        // Update last scroll position
        lastScrollY.current = scrollY;

        // Hide background after certain scroll point (increased to 3000 for better visibility)
        setIsVisible(scrollY < 3000);
      });
    };

    // Throttled scroll handler for better performance
    const throttledScroll = throttle(handleScroll, 16); // ~60fps

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [offset]);

  if (!isVisible) return null;

  return (
    <div
      data-parallax-background="true"
      className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assests/parallax.png')",
        transform: `translateY(${offset}px)`,
        willChange: "transform", // Optimize for performance
        transition: "transform 0.1s ease-out", // Smooth transition
      }}
    />
  );
}
