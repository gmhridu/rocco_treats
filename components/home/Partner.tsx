"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Partner() {
  return (
    <section className="py-16 md:py-24 lg:py-32 overflow-hidden bg-linear-to-b from-white to-[#faf6f6]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Responsive Wrapper */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          {/* LEFT: TEXT + BUBBLE */}
          <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
            {/* Background Speech Bubble */}
            <div
              className="absolute inset-0 -z-10 scale-125 md:scale-110 lg:scale-100 opacity-30 md:opacity-40 lg:opacity-100"
              style={{
                backgroundImage: `url('/assests/partner.png')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
            />

            {/* Title */}
            <h1 className="font-heritage text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#C4797A]">
              Your Partner In
              <br className="hidden sm:block" />
              <span className="block text-[#a76b69]">Pet Treats</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg font-heritage text-sm md:text-base leading-relaxed text-gray-700">
              <strong className="text-[#C4797A]">
                Step-by-Step to a Successful Private Label.
              </strong>{" "}
              Innovative, personalized, and tailored:{" "}
              <strong>Rocco Treats</strong> specializes in creating exclusive
              private-label brands for <strong>super-premium Dog Treats</strong>
              .
            </p>

            {/* CTA Button */}
            <Link href={"/ingredients"}>
              <Button
                size="lg"
                className="mt-8 rounded-full bg-[#C4797A] px-8 py-6 text-base md:text-lg font-heritage font-semibold text-white shadow-lg transition-all hover:bg-[#a76b69] hover:shadow-xl"
              >
                See All Our Ingredients
              </Button>
            </Link>
          </div>

          {/* RIGHT: PRODUCT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/assests/Dog-Treats.png"
              alt="Rocco Treats Product Lineup"
              width={800}
              height={600}
              className="w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[700px] h-auto drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
