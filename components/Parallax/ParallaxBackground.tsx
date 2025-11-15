"use client";

import { useEffect, useState } from "react";

export default function ParallaxBackground() {
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Parallax effect - move background at 30% speed of scroll
      setOffset(scrollY * 0.3);

      // Hide background after certain scroll point
      setIsVisible(scrollY < 2000);
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      data-parallax-background="true"
      className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assests/parallax.png')",
        transform: `translateY(${offset}px)`,
      }}
    />
  );
}
