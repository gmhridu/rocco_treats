"use client";

import Image from "next/image";
import { useEffect } from "react";

const PorkLoin = () => {
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
                src="/assests/2.png"
                alt="Turkey Illustration"
                width={200}
                height={150}
                className="object-contain"
                priority={true}
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
              Pork
            </h1>
            <p className="text-md sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
              Activity Level: <span className="font-light">High</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl sm:max-w-2xl mx-auto md:mx-0">
              <strong className="font-bold text-[#333]">
                Best for Breeds:
              </strong>{" "}
              Border Collies, Golden Retrievers, Pointers, Australian Sheperds,
              Vizsla, Terriers, Poodles, Water Dogs, Corgis, German Spitz,
              Sheepdogs, Huskies, Labradors, Springers, Pinchers, and Setters.
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
              High in Amino Acid Content
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Pork, contains the essential amino acids that are necessary for
              building your pet’s cells, tissues and organs, as well as for
              maintaining proper physiological functions.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Rich in Thiamine and Potassium
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Thiamine, also known as Vitamin B1 is an essential vitamin for
              dogs. This means they cannot make it themselves, and it must be
              included in their diet for optimum health. Without thiamine, your
              dog could experience stomach upset, neurological issues and muscle
              weakness. Thiamine is also used to help convert food into energy,
              allowing your pup to remain strong and energetic.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Other Benefits
            </h3>
            <ul className="list-disc list-inside">
              <li className="text-sm sm:text-base md:text-lg leading-relaxed">
                Fight inflammation
              </li>
              <li className="text-sm sm:text-base md:text-lg leading-relaxed">
                Reduce anxiety
              </li>
              <li className="text-sm sm:text-base md:text-lg leading-relaxed">
                Improve cardiovascular health
              </li>
              <li className="text-sm sm:text-base md:text-lg leading-relaxed">
                Promote healthy kidney function
              </li>
              <li className="text-sm sm:text-base md:text-lg leading-relaxed">
                Loaded with niacin, potassium, magnesium, phosphorus, and
                vitamin D
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorkLoin;
