"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect } from "react";

const Ingredients = () => {
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

  const products = [
    { name: "Turkey", img: "/assests/1.png", url: "/turkey" },
    { name: "Pork Loin", img: "/assests/2.png", url: "/pork-loin" },
    { name: "Beef Liver", img: "/assests/3.png", url: "/beef-liver" },
    { name: "Chicken", img: "/assests/4.png", url: "/chicken" },
    { name: "Beef Topper", img: "/assests/3.png", url: "/beef-topper" },
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 text-[#19574a] leading-relaxed">
      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl text-center font-heritage tracking-wide">
        Real Ingredients. No Fillers.
      </h1>

      {/* Intro Paragraphs */}
      <div className="space-y-6 mt-10 text-lg md:text-xl max-w-5xl font-light mx-auto">
        <p>
          All our products are <strong>air-dried</strong> to harvest the best of
          nature’s proteins, fatty acids and minerals that your fur-baby
          requires as a carnivore.
        </p>

        <p>
          Although descended from wolves and wild dogs thousands of years ago
          and domesticated, dogs’ digestion does not thrive with cooked or
          modified foods. Cooking destroys protein chains and reduces the
          bioavailability of nutrients for your dog.
        </p>

        <p>
          Many hunting breeds still show a natural preference for chicken or
          turkey because these flightless birds would appeal to a hunter looking
          for high reward/low energy to catch. Also depending on the
          activity-level of the breed, high energy dogs need higher levels of
          fat and will have a preference for pork. Dogs who are not getting
          enough amino acids will automatically want liver to make up the
          shortfall.
        </p>
      </div>

      {/* Yellow Section */}
      <div className="relative mt-10 overflow-hidden rounded-t-[80px]">
        <div className="relative z-10 px-6 md:px-12 py-14 space-y-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heritage text-[#19574a]">
            Turkey for Lazy Days — Pork for Busy Days — Beef for Super Days —
            Chicken for Everyday!
          </h2>

          <p className="max-w-5xl mx-auto text-lg md:text-xl">
            All of our human grade meats are USA-sourced and USDA-inspected. We
            use the time honored method of air-drying to preserve our meats in
            order to retain the nutrients and flavor with no need for fillers.
            No artificial preservatives are used. Our treats are made in small
            batches to ensure a fresh and high quality product.
          </p>

          {/* Product Icons */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mt-16">
            {products.map((product) => (
              <div
                key={product.name}
                className="flex flex-col items-center gap-4 md:gap-6 group"
              >
                <p
                  className="text-2xl md:text-4xl font-semibold text-[#d24727]"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  {product.name}
                </p>
                <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-300"
                  />
                </div>

                <div className="mt-4 md:mt-6">
                  <Link href={product.url}>
                    <Button
                      className="bg-[#d24727] text-white hover:bg-[#d24727]/90 hover:shadow-lg transition-all duration-300 transform cursor-pointer"
                      size={"lg"}
                    >
                      NUTRITION INFO
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clouds */}
      <div className="absolute top-20 left-10 w-32 h-20 bg-white/60 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-32 right-20 w-40 h-24 bg-white/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-1/3 w-36 h-20 bg-white/40 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default Ingredients;
