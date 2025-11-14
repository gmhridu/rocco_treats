"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const ingredients = [
  { path: "/turkey", name: "Turkey" },
  { path: "/pork-loin", name: "Pork Loin" },
  { path: "/beef-liver", name: "Beef Liver" },
  { path: "/chicken", name: "Chicken" },
  { path: "/beef-topper", name: "Beef Topper" },
] as const;

export default function Navbar() {
  return (
    <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-24">
      <header className="grid grid-cols-3 items-center py-4">
        <div className="flex justify-start">
          <Image
            src="/assests/logo.png"
            alt="Logo"
            width={70}
            height={60}
            priority
            className="object-contain"
          />
        </div>

        <nav className="flex justify-center items-center space-x-8 text-sm">
          <Link
            href="/"
            className="font-heritage font-bold text-lg text-[#C4797A] hover:text-[#a76b69] transition-colors"
          >
            Home
          </Link>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 font-heritage font-bold text-lg text-[#C4797A] hover:text-[#a76b69] transition-colors cursor-pointer"
            >
              Ingredients
              <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
            </button>

            <ul
              className={`
                invisible absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56
                bg-white rounded-md shadow-lg border-t-4 border-[#C4797A]
                py-2 opacity-0 transition-opacity duration-200
                group-hover:visible group-hover:opacity-100 z-50
              `}
            >
              {ingredients.map((item) => (
                <li
                  key={item.path}
                  className="px-4 py-2 text-[#C4797A] font-heritage font-bold text-lg hover:bg-[#f5e4e3] hover:text-[#a76b69] transition-colors"
                >
                  <Link href={item.path} className="block w-full">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/our-story"
            className="font-heritage font-bold text-lg text-[#C4797A] hover:text-[#a76b69] transition-colors whitespace-nowrap"
          >
            Our Story
          </Link>

          <Link
            href="/contact-us"
            className="font-heritage font-bold text-lg text-[#C4797A] hover:text-[#a76b69] transition-colors whitespace-nowrap"
          >
            Contact Us
          </Link>

          <div className="flex justify-end" />
        </nav>
        <div className="flex justify-end" />
      </header>
    </section>
  );
}
