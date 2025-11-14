"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Partner() {
  return (
    <section className="py-16 md:py-24 lg:py-32 overflow-hidden bg-linear-to-b from-white to-[#faf6f6]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text + Bubble */}
          <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Speech Bubble Background */}
            <div
              className="absolute inset-0 -z-10 scale-110 transform"
              style={{
                backgroundImage: `url('/assests/partner.png')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
                filter: "brightness(1.05) saturate(1.1)",
              }}
            />

            {/* Title */}
            <h1 className="font-heritage text-4xl font-bold uppercase tracking-tight text-[#C4797A] md:text-5xl lg:text-6xl">
              Your Partner In
              <br className="hidden sm:block" />
              <span className="block text-[#a76b69]">Pet Treats</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg font-heritage text-sm leading-relaxed text-gray-700 md:text-base">
              <strong className="text-[#C4797A]">Step-by-Step to a Successful Private Label.</strong>{" "}
              Innovative, personalized, and tailored: <strong>Rocco Treats</strong> specializes in creating
              exclusive private-label brands for <strong>super-premium Dog Treats</strong>.
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              className="mt-8 rounded-full bg-[#C4797A] px-8 py-6 text-lg font-heritage font-semibold text-white shadow-lg transition-all hover:bg-[#a76b69] hover:shadow-xl"
            >
              See All Our Ingredients
            </Button>
          </div>

          {/* Right: Product Images */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <Image
                src="/assests/Dog-Treats.png"
                alt="Rocco Treats Product Lineup"
                width={1000}
                height={600}
                className="w-full drop-shadow-2xl lg:h-[200px]"
                priority
              />
              {/* Optional decorative glow */}
              <div className="pointer-events-none absolute -inset-4 rounded-full bg-[#C4797A]/5 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
