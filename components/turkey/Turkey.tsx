"use client";

import Image from "next/image";
import { useEffect } from "react";

const Turkey = () => {
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
                src="/assests/1.png"
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
              Turkey
            </h1>
            <p className="text-md sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
              Activity Level: <span className="font-light">Low</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl sm:max-w-2xl mx-auto md:mx-0">
              <strong className="font-bold text-[#333]">
                Best for Breeds:
              </strong>{" "}
              Basset Hound, Bulldogs, Bull Mastiffs, Cavalier King Charles
              Spaniels, Chow Chow, French Bulldogs, Great Danes, Pugs, Pekes,
              Shih Tzu and Hounds
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
              High Protein Content
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Turkey is rich in protein and therefore great for building muscles
              and muscle repair.
            </p>
          </div>

          {/* Rich in Riboflavin and Phosphorous */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Rich in Riboflavin and Phosphorous
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Canines gain a lot with a daily intake of food that is rich in
              riboflavin. The vitamin is responsible for fats and carbohydrates
              being metabolized into energy. In addition, riboflavin plays a big
              part in producing the red blood cells that carry oxygen and
              nutrients around the dog&apos;s body.
            </p>
            <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
              Phosphorus supports healthy kidney function in dogs, which helps
              flush out any toxins from a dog&apos;s body through its urine.
              This, in turn, helps a dog maintain the best shape as far as
              health is concerned.
            </p>
            <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
              In addition, phosphorus also aids muscle contractions which in
              turn help in motor functions, helping a dog&apos;s capacity to
              exercise and chew, or trailing by your side during your morning
              runs, and helps dogs maintain normal heart rates.
            </p>
          </div>

          {/* Low Caloric Content */}
          <div>
            <h3 className="text-lg sm:text-xl  font-bold text-gray-900 mb-2">
              Low Caloric Content
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              While rich in protein, turkey is fairly low in fat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Turkey;
