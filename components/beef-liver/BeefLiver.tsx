"use client";

import Image from "next/image";
import { useEffect } from "react";

const BeefLiver = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      const existing = document.querySelector(`link[href="${link.href}"]`);
      existing?.remove();
    };
  }, []);
  return (
    <div className="relative py-8 sm:py-12 md:py-16 max-w-7xl mx-auto rounded-lg shadow-lg my-8 sm:my-12 md:my-16 overflow-hidden z-50 border-2 border-[#C4797A] bg-white">
      <div className="px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          {/* Turkey Illustration */}
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-48 h-32 sm:w-56 sm:h-36 md:w-40 md:h-40 lg:w-52 lg:h-52">
              <Image
                src="/assests/3.png"
                alt="Turkey Illustration"
                width={200}
                height={150}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Title & Info */}
          <div className="flex-1 text-center md:text-left">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-2"
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontStyle: "italic",
                fontWeight: 900,
                color: "#C4797A",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              Beef Liver
            </h1>
            <p className="text-md sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
              Activity Level: <span className="font-light">Ay</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl sm:max-w-2xl mx-auto md:mx-0">
              <strong className="font-bold text-[#333]">
                Best for Breeds:
              </strong>{" "}
              All
            </p>
            <button className="mt-4 sm:mt-6 px-5 sm:px-6 py-2 sm:py-3 bg-[#C4797A] text-white font-medium rounded-md hover:bg-[#b56566] transition cursor-pointer text-sm sm:text-base md:text-lg">
              Nutritional Data
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="mt-10 sm:mt-12 md:mt-16 space-y-8 sm:space-y-10 md:space-y-12 text-gray-700">
          {/* High Protein */}
          <div>
            <h3 className="text-lg sm:text-xl  font-bold text-gray-900 mb-2">
              Rich in Nutrients
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Most importantly, beef liver is a good source of vitamin A, iron,
              copper, phosphorus, and zinc as well as B vitamins and essential
              fatty acids. If you have recently rescued a dog who was
              malnourished, finding a way to incorporate beef liver into your
              dog’s diet could be a game-changer for getting them back to
              health.
            </p>
          </div>

          {/* Rich in Riboflavin and Phosphorous */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Benefits the Liver
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Liver for your pup’s liver… easy to remember right? Liver has such
              a great nutritional profile it is easy to understand how it might
              help your dog if they are anemic, fatigued or suffering from a
              general malaise.
            </p>
          </div>

          {/* Low Caloric Content */}
          <div>
            <h3 className="text-lg sm:text-xl  font-bold text-gray-900 mb-2">
              Boosts Energy
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Liver is not only a good source of protein but it also is loaded
              with vitamin B12. This combination helps keep your pup full of
              energy. If your dog likes to run or hike with you consider some
              liver as a snack to keep the energy up!
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl  font-bold text-gray-900 mb-2">
              Great Source of Omega 3 and Omega 6 Fatty Acids
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              These fatty acids not only promote a fully functioning immune
              system but they also help keep your pup’s skin and coat looking
              healthy and shiny. Like in humans, great skin and healthy hair
              starts with what you’re eating. The same is true for your pup.
              Liver is a great food to add to your dog’s diet if they get sick
              easily or if their skin or coat is looking dull.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeefLiver;
