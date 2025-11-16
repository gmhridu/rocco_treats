"use client";

import Image from "next/image";
import Link from "next/link";

const OurStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      {/* Header */}
      <h1 className="text-4xl sm:text-5xl font-semibold mb-8 font-heritage text-[#19574a]">
        OUR STORY
      </h1>

      {/* Image */}
      <div className="flex justify-center mb-10">
        <Image
          src="/assests/pexels-kampus-production-8734461-scaled.jpg"
          alt="Frank & Rocco"
          width={300}
          height={300}
          className="rounded-md shadow-md object-cover"
          priority={true}
        />
      </div>

      {/* Text Content */}
      <div className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed space-y-6 text-left mx-auto max-w-7xl">
        <p>
          Rocco Treats was born out of love for a loyal companion. Frank Van Der
          Merwe’s dog, Rocco, had recently passed away after a lifetime of
          companionship. Rocco loved the air-dried meat snacks that Frank had
          been creating for adventurous dogs for years. In dedication to his
          furry friend, Frank decided to start Rocco Treats.
        </p>

        <p>
          Frank, a fourth-generation meat trader from South Africa, first
          experienced air-dried meat at age 10 on his uncle Bill’s farm. He and
          his cousins would snack on the meat fresh off the line and even share
          it with the hunting dogs. After moving to the U.S., Frank carried on
          the tradition by introducing air-dried meat snacks for dogs.
        </p>

        <p>
          When Rocco came into Frank’s life, he quickly became a beloved
          companion. Frank started making air-dried meat snacks for him as a
          treat. Rocco loved them so much that Frank started making them for
          other dogs as well. After Rocco passed away, Frank wanted to create a
          legacy in honor of his loyal companion. That’s when Rocco Treats was
          born.
        </p>

        <p>
          At Rocco Treats, we are dedicated to crafting the same high-quality
          air-dried meat snacks that Rocco adored. Using locally sourced
          ingredients, our treats are made with the utmost care and respect for
          our furry friends. Every snack is crafted with the same love and
          attention that Frank gave to Rocco, ensuring they are both delicious
          and nutritious.
        </p>

        <p>
          In addition to our own line of treats, Rocco Treats also specializes
          in creating private-label products, offering premium, tailor-made
          solutions for brands looking to deliver exceptional treats to their
          customers.
        </p>
      </div>

      {/* Button */}
      <div className="mt-10">
        <Link href={"/contact-us"}>
          <button
            className="px-6 py-3 rounded-md text-white text-lg font-medium shadow-md transition hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: "#C4797A" }}
          >
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default OurStory;
