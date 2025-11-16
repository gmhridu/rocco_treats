"use client";

import Image from "next/image";
import { useEffect } from "react";

const BeefTopper = () => {
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
                src="/assests/cow-square.png"
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
              Beef Topper
            </h1>
            <p className="text-md sm:text-lg md:text-xl text-gray-800 mb-2 sm:mb-3 mt-3">
              Best for Picky Eaters!
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl sm:max-w-2xl mx-auto md:mx-0">
              INGREDIENTS: USDA Beef, Vinegar, Salt, Roasted Crushed Coriander
              and Aromatics, Black Pepper and Rosemary
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
              Boost Naturally Occuring Protein in Food
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              The development concept was to take a ‘paleo’ approach to mimic
              what would occur whilst pack hunting and pack hunters would always
              up the value of their diet by eating the stomach contents of the
              prey. This is how carnivores get their veggies and fiber really.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Make Any Bowl a Sensory Experience
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Our Beef Meal Topper is made of selected natural aromatics and
              naturally occurring sources of fiber (like the coriander seed
              husk) to assist in the sensory enhancement of generic wet dog
              foods and kibble.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl  font-bold text-gray-900 mb-2">
              Simulate More Familiar Digestible Elements to Increase
              Bioavailability
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Black pepper contains piperine, which is a great activator of
              bioavailability during digestion. So, the rationale is really to
              up what our picky eaters can get out of their food underneath the
              topper as, sadly, many brands of dog foods are cheating the
              nutrition. So you are looking at meat flakes and powder (about 77%
              of USDA bottom rounds, with less than 2% pepper and up to 8% fiber
              derived from 23% of the coarse ground aromatic herbs).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeefTopper;
