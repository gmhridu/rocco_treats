"use client";

import { useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    name: "Cortney",
    sub: "KIND TO SENSITIVE BELLIES",
    body: "I purchased these for my mother’s dog (Bella) for Christmas. Bella has a temperamental digestive system. They paid off big time. Bella loved them and they were kind to her belly. My mother was so pleased that she ended up buying more of them herself.",
    rating: 5,
  },
  {
    name: "Katrina Z.",
    sub: "AWESOME TRAINING TREATS",
    body: "Our dog loves the Turkey Breast Strips treats- when we use them for training, he is at his absolute best focus and performance when he knows these are the treats he’s getting.",
    rating: 5,
  },
  {
    name: "Serina",
    sub: "PERFECT FOR YOUR PICKY EATER",
    body: "My picky dog loves beef liver treats! He can’t have poultry, so I generally only buy him beef, salmon, and lamb. He’s very picky in general, plus I don’t like feeding him anything with multiple ingredients or preservatives due to his allergies, so this is perfect!",
    rating: 5,
  },
];

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

  return (
    <>
      <section className="py-16 md:py-24 lg:py-32 overflow-hidden bg-transparent">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Real Ingredients Text */}
          <div className="flex flex-col items-center justify-center">
            <h1
              className="text-3xl sm:text-4xl tracking-wider font-bold"
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontStyle: "italic",
                fontWeight: 900,
                color: "#c45d68",
                transform: "skewX(-5deg)",
                display: "inline-block",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                lineHeight: "1.1",
                letterSpacing: "1px",
              }}
            >
              real ingredients.
            </h1>

            <h2 className="text-3xl sm:text-4xl font-bold lg:text-5xl font-heritage text-[#c45d68] mt-5">
              no fillers.
            </h2>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center">
            <h5 className="text-2xl sm:text-[26px] font-semibold text-center text-[#333]">
              100% made in South Africa
            </h5>

            <p className="mt-5 text-[#333] text-lg font-semibold text-center max-w-3xl">
              Taking a regional, down-to-earth approach, we manufacture our
              products in the heart of Cape Town using high-quality raw
              materials that we source from the local area wherever possible. We
              subject our ingredients to in-depth quality checks and regularly
              undertake laboratory tests.
            </p>
            <Button className="mt-10 text-lg bg-[#c45d68]" size="lg">
              <Link href="/ingredients">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-transparent">
        <div className="max-w-[1350px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT IMAGE */}
            <div className="flex justify-center">
              <Image
                src="/assests/pexels-jozef-feher-2774140-scaled.jpg"
                alt="dog swimming"
                width={900}
                height={700}
                priority
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* RIGHT SLIDER */}
            <div className="relative w-full">
              {/* ARROWS (left & right outside) */}
              <div className="swiper-button-prev-custom absolute -left-12 top-1/2 -translate-y-1/2 text-red-600  w-16 h-16  flex items-center justify-center  cursor-pointer text-4xl">
                «
              </div>

              <div className="swiper-button-next-custom absolute -right-12 top-1/2 -translate-y-1/2 text-red-600  w-16 h-16 flex items-center justify-center cursor-pointer text-4xl">
                »
              </div>

              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={900}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                allowTouchMove={false}
                className="w-full"
              >
                {reviews.map((review, i) => (
                  <SwiperSlide key={i}>
                    <div className="text-center px-6">
                      {/* QUOTE ICON */}
                      <div className="text-gray-400 text-6xl mb-2 leading-none">
                        &ldquo;
                      </div>

                      {/* TITLE */}
                      <h3 className="text-3xl md:text-4xl  text-gray-900 mb-4 tracking-wide">
                        {review.sub}
                      </h3>

                      {/* BODY */}
                      <p className="text-gray-600  mx-auto text-base leading-relaxed mb-6">
                        {review.body}
                      </p>

                      {/* STARS */}
                      <div className="flex justify-center mb-4">
                        {[...Array(review.rating)].map((_, idx) => (
                          <span key={idx} className="text-yellow-400 text-2xl">
                            ★
                          </span>
                        ))}
                      </div>

                      {/* NAME — HANDWRITTEN STYLE */}
                      <p
                        className="text-gray-800 mt-2"
                        style={{
                          fontFamily: "'Dancing Script', cursive",
                          fontSize: "1.8rem",
                          fontWeight: 700,
                        }}
                      >
                        {review.name}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ingredients;
