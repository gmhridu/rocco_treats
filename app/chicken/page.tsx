import type { Metadata } from "next";
import Chicken from "@/components/chicken/Chicken";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Premium Air-Dried Chicken Dog Treats - Rocco Treats",
  description: "Discover Rocco Treats' premium air-dried Chicken dog treats. Made with 100% human-grade chicken, no fillers, no artificial preservatives. Everyday treats perfect for dogs of all breeds.",
  keywords: "chicken dog treats, air-dried chicken treats, premium dog treats, everyday dog treats, chicken dog snacks, natural dog treats, poultry dog treats",
  authors: [{ name: "Rocco Treats" }],
  creator: "Rocco Treats",
  publisher: "Rocco Treats",
  alternates: {
    canonical: "/chicken"
  },
  openGraph: {
    title: "Premium Air-Dried Chicken Dog Treats - Rocco Treats",
    description: "Discover Rocco Treats' premium air-dried Chicken dog treats. Made with 100% human-grade chicken, no fillers, no artificial preservatives.",
    url: "https://roccotreats.com/chicken",
    siteName: "Rocco Treats",
    images: [
      {
        url: "/assests/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rocco Treats - Premium Air-Dried Chicken Dog Treats"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Air-Dried Chicken Dog Treats - Rocco Treats",
    description: "Discover Rocco Treats' premium air-dried Chicken dog treats. Made with 100% human-grade chicken, no fillers, no artificial preservatives.",
    images: ["/assests/og-image.jpg"],
  },
};

export default function ChickenPage() {
  return (
    <main>
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="/assests/BB-web-background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/70 md:bg-white/60"></div>
      </div>
      <Chicken />
    </main>
  );
}
