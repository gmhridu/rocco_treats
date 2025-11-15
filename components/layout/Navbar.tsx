"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils"; // optional: create a cn utility or use clsx

const ingredients = [
  { path: "/turkey", name: "Turkey" },
  { path: "/pork-loin", name: "Pork Loin" },
  { path: "/beef-liver", name: "Beef Liver" },
  { path: "/chicken", name: "Chicken" },
  { path: "/beef-topper", name: "Beef Topper" },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on resize (desktop view)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  return (
    <>
      {/* Fixed navbar with min-height to prevent layout shift */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/assests/logo.png"
                  alt="Logo"
                  width={70}
                  height={60}
                  priority
                  className="h-12 w-auto object-contain lg:h-14"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:items-center lg:space-x-8">
              <NavLink href="/">Home</NavLink>

              {/* Desktop Dropdown */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className={cn(
                    "flex items-center gap-1 font-heritage font-bold text-lg text-[#C4797A] hover:text-[#a76b69] transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4797A] rounded-md px-1"
                  )}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  Ingredients
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform duration-200",
                      dropdownOpen && "rotate-180"
                    )}
                  />
                </button>

                {/* Dropdown Menu */}
                <ul
                  className={cn(
                    "absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2",
                    "bg-white rounded-md shadow-lg border-t-4 border-[#C4797A] py-2",
                    "opacity-0 invisible transition-all duration-200",
                    dropdownOpen && "opacity-100 visible"
                  )}
                  style={{
                    transform: dropdownOpen
                      ? "translateY(0)"
                      : "translateY(-8px)",
                  }}
                >
                  {ingredients.map((item) => (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        className="block px-4 py-2 text-lg font-heritage font-bold text-[#C4797A] hover:bg-[#f5e4e3] hover:text-[#a76b69] transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <NavLink href="/our-story">Our Story</NavLink>
              <NavLink href="/contact-us">Contact Us</NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-[#C4797A] hover:bg-[#f5e4e3] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-In Menu */}
        <div
          ref={mobileMenuRef}
          className={cn(
            "fixed inset-y-0 right-0 z-50 w-80 max-w-full bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden",
            "border-l border-gray-100",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
          style={{ top: "64px" }} // matches navbar height
        >
          <div className="flex flex-col space-y-1 p-6">
            <MobileNavLink href="/" onClick={() => setMobileOpen(false)}>
              Home
            </MobileNavLink>

            {/* Mobile Accordion for Ingredients */}
            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex w-full items-center justify-between py-3 text-lg font-heritage font-bold text-[#C4797A]"
              >
                Ingredients
                <ChevronDown
                  className={cn(
                    "size-5 transition-transform",
                    dropdownOpen && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid overflow-hidden transition-all duration-300",
                  dropdownOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="min-h-0">
                  <ul className="space-y-1 pl-4 pt-2 border-l-2 border-[#C4797A]">
                    {ingredients.map((item) => (
                      <li key={item.path}>
                        <MobileNavLink
                          href={item.path}
                          onClick={() => setMobileOpen(false)}
                          className="text-base"
                        >
                          {item.name}
                        </MobileNavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <MobileNavLink
              href="/our-story"
              onClick={() => setMobileOpen(false)}
            >
              Our Story
            </MobileNavLink>
            <MobileNavLink
              href="/contact-us"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </MobileNavLink>
          </div>
        </div>

        {/* Backdrop */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </header>
    </>
  );
}

/* Reusable NavLink Components */
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-heritage font-bold text-lg text-[#C4797A] hover:text-[#a76b69] transition-colors whitespace-nowrap"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
  className,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "block py-3 text-lg font-heritage font-bold text-[#C4797A] hover:text-[#a76b69] transition-colors",
        className
      )}
    >
      {children}
    </Link>
  );
}
