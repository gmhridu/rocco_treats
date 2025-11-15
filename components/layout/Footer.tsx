"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const ingredients = [
  { path: "/turkey", name: "Turkey" },
  { path: "/pork-loin", name: "Pork Loin" },
  { path: "/beef-liver", name: "Beef Liver" },
  { path: "/chicken", name: "Chicken" },
  { path: "/beef-topper", name: "Beef Topper" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#C4797A] pt-16 pb-5">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-20">

          {/* LEFT SECTION */}
          <div className="text-center md:text-left">
            <Image
              src="/assests/cow-square-1-480x480.png"
              alt="Cow Square"
              width={80}
              height={80}
              className="mx-auto md:mx-0"
            />

            <p className="text-white mt-5 leading-relaxed max-w-sm text-lg mx-auto md:mx-0">
              Feel good about what you’re giving your dog with Rocco Treats
              single ingredient, high protein meat strips! All treats are South
              Africa sourced & made.
            </p>
          </div>

          {/* MIDDLE MENU SECTION */}
          <div className="text-center md:text-left">
            <h3 className="text-white tracking-wide text-base font-semibold mb-4">
              MENU
            </h3>

            <ul className="space-y-4 text-[#f2efa1] text-base">

              <li>
                <Link className="hover:text-white transition" href="/">
                  HOME
                </Link>
              </li>

              {/* Dropdown */}
              <li className="relative group cursor-pointer w-max mx-auto md:mx-0">
                <div className="flex items-center gap-1 hover:text-white transition">
                  <span>INGREDIENTS</span>
                  <ChevronDown size={16} />
                </div>

                {/* Dropdown panel */}
                <div className="absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 mt-2 w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <ul className="p-4 space-y-3 text-[#d14727] text-sm border-t-4 border-[#d14727]">
                    {ingredients.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.path}
                          className="block hover:text-black hover:translate-x-1 transition-all duration-200"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link className="hover:text-white transition" href="/our-story">
                  OUR STORY
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/contact-us">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT SECTION – Subscribe */}
          <div className="text-center md:text-left">
            <p className="text-[#f2efa1] text-base leading-relaxed mb-4 max-w-sm mx-auto md:mx-0">
              Receive updates, tutorials, discounts and resources sent straight
              to your inbox every month.
            </p>

            <div className="flex mt-4 max-w-sm mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 w-full text-sm outline-none bg-white rounded-l-md"
              />
              <button className="px-6 py-3 text-white font-semibold text-sm bg-[#d14727] rounded-r-md hover:bg-[#b63e21] transition">
                SUBSCRIBE
              </button>
            </div>

            <p className="text-[#77838e] mt-2 text-sm">
              You can unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-white/20 mt-10 pt-6 text-white text-sm">
          © {year} • Rocco Treats
        </div>
      </div>
    </footer>
  );
};

export default Footer;
