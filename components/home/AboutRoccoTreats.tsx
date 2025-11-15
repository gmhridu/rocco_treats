// components/AboutRoccoTreats.tsx
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const AboutRoccoTreats = () => {
  return (
    <section className="py-12 md:py-16 overflow-hidden bg-[#C4797A]">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ==== Desktop / Tablet – side-by-side ==== */}
        <div className="hidden md:flex items-center justify-between gap-8 lg:gap-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/assests/Untitled-1hshshhss.png"
              alt="Rocco Treats Logo"
              width={300}
              height={300}
              className="h-auto w-full max-w-[200px] lg:max-w-[300px] object-contain"
              priority
            />
          </div>

          {/* Text + CTA */}
          <div className="flex-1 max-w-xl text-white">
            <p className="text-base lg:text-lg leading-relaxed">
              At <span className="font-semibold">Rocco Treats</span>, we take
              pride in being the producer of premium pet treats, crafted with
              care in South Africa. Rooted in quality and innovation, our
              products are enjoyed by doggy clients across the United States and
              Europe.
            </p>

            <p className="mt-6 lg:mt-8 text-base lg:text-lg font-semibold leading-relaxed">
              As experts in private label development, we are your trusted
              partner from concept to completion. Whether it’s creating custom
              recipes or supporting sales, our expertise ensures the production
              of top-quality treats for cats and dogs that cater to your brand’s
              unique needs.
            </p>

            <div className="mt-8 flex justify-start">
              <Button
                size="lg"
                className="rounded-full bg-[#0C71C3] px-8 py-6 text-base lg:text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#0a5fa3] hover:shadow-xl"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* ==== Mobile – stacked ==== */}
        <div className="md:hidden flex flex-col items-center text-center">
          {/* Logo – centered, responsive */}
          <div className="mb-8">
            <Image
              src="/assests/Untitled-1hshshhss.png"
              alt="Rocco Treats Logo"
              width={500}
              height={340}
              className=""
              priority
            />
          </div>

          {/* Text */}
          <div className="text-white">
            <p className="text-base leading-relaxed">
              At <span className="font-semibold">Rocco Treats</span>, we take
              pride in being the producer of premium pet treats, crafted with
              care in South Africa. Rooted in quality and innovation, our
              products are enjoyed by doggy clients across the United States and
              Europe.
            </p>

            <p className="mt-3 text-base leading-relaxed">
              As experts in private label development, we are your trusted
              partner from concept to completion. Whether it’s creating custom
              recipes or supporting sales, our expertise ensures the production
              of top-quality treats for cats and dogs that cater to your brand’s
              unique needs.
            </p>

            <div className="mt-6 flex items-center justify-center">
              <Button
                size="lg"
                className="rounded-full bg-[#0C71C3] px-8 py-6 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#0a5fa3] hover:shadow-xl cursor-pointer "
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRoccoTreats;
