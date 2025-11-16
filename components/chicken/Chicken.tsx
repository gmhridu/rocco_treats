"use client";

import Image from "next/image";
import { useEffect } from "react";

const Chicken = () => {
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
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-48 h-32 sm:w-56 sm:h-36 md:w-40 md:h-40 lg:w-52 lg:h-52">
              <Image
                src="/assests/4.png"
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
              Chicken
            </h1>
            <p className="text-md sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
              Activity Level: <span className="font-light">Normal</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl sm:max-w-2xl mx-auto md:mx-0">
              <strong className="font-bold text-[#333]">
                Best for Breeds:
              </strong>{" "}
              Hunting dogs (Hounds, Retrievers, Setters, Pointers, Spaniels and
              Water Dogs) or any active breeds needing that optimal fat to
              protein ratio
            </p>
            <button className="mt-4 sm:mt-6 px-5 sm:px-6 py-2 sm:py-3 bg-[#C4797A] text-white font-medium rounded-md hover:bg-[#b56566] transition cursor-pointer text-sm sm:text-base md:text-lg">
              Nutritional Data
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="mt-10 sm:mt-12 md:mt-16 space-y-8 sm:space-y-10 md:space-y-12 text-gray-700">
          <div>
            <h3 className="text-lg sm:text-xl  font-bold text-gray-900 mb-2">
              Good Source of Energy
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Chicken is lean meat and is perfect for our canine friends.
              Chicken provides a big source of energy for dogs. Dogs need
              protein as their main energy source and chicken is exactly that.
              Any excess protein that surpasses the need for muscle tissue
              maintenance is used for energy.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Builds Lean Muscle Mass
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Chicken helps your dog to build lean muscle mass. Muscle mass
              breaks down as your dog is active or ages and needs to be
              replaced. Chicken is the perfect solution which aids them to keep
              healthy and feeling good.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl  font-bold text-gray-900 mb-2">
              Provides Omega 6 Fatty Acids
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Chicken provides omega 6 fatty acids which help your dog to shine.
              They help your dog to sustain healthy skin and a shiny coat. He
              will be turning heads in the park!
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl  font-bold text-gray-900 mb-2">
              Great Source of Amino Acids
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Put simply, amino acids are the building blocks of protein. Ten of
              the twenty-two amino acids need to be acquired through diet or
              supplements for dogs. Dietary sources of essential amino acids are
              found within proteins, with the highest concentrations generally
              found in animal protein like chicken.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chicken;
