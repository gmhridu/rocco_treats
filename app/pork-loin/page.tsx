import type { Metadata } from "next";
import PorkLoin from "@/components/pork-loin/PorkLoin";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Premium Air-Dried Pork Loin Dog Treats - Rocco Treats",
  description: "Discover Rocco Treats' premium air-dried Pork Loin dog treats. Made with 100% human-grade pork, no fillers, no artificial preservatives. High-energy treats perfect for active dogs.",
  keywords: "pork loin dog treats, air-dried pork treats, premium dog treats, high energy dog treats, pork dog snacks, natural dog treats, active dog treats",
  authors: [{ name: "Rocco Treats" }],
  creator: "Rocco Treats",
  publisher: "Rocco Treats",
  alternates: {
    canonical: "/pork-loin"
  },
  openGraph: {
    title: "Premium Air-Dried Pork Loin Dog Treats - Rocco Treats",
    description: "Discover Rocco Treats' premium air-dried Pork Loin dog treats. Made with 100% human-grade pork, no fillers, no artificial preservatives.",
    url: "https://roccotreats.com/pork-loin",
    siteName: "Rocco Treats",
    images: [
      {
        url: "/assests/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rocco Treats - Premium Air-Dried Pork Loin Dog Treats"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Air-Dried Pork Loin Dog Treats - Rocco Treats",
    description: "Discover Rocco Treats' premium air-dried Pork Loin dog treats. Made with 100% human-grade pork, no fillers, no artificial preservatives.",
    images: ["/assests/og-image.jpg"],
  },
};

export default function PorkLoinPage() {
  return (
    <main className="relative min-h-screen h-full">
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

      <PorkLoin />
    </main>
  );
}
