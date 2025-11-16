import type { Metadata } from "next";
import Turkey from "@/components/turkey/Turkey";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Premium Air-Dried Turkey Dog Treats - Rocco Treats",
  description: "Discover Rocco Treats' premium air-dried Turkey dog treats. Made with 100% human-grade turkey, no fillers, no artificial preservatives. Lean protein treats perfect for dogs of all sizes.",
  keywords: "turkey dog treats, air-dried turkey treats, premium dog treats, lean protein dog treats, turkey dog snacks, natural dog treats, hypoallergenic dog treats",
  authors: [{ name: "Rocco Treats" }],
  creator: "Rocco Treats",
  publisher: "Rocco Treats",
  alternates: {
    canonical: "/turkey"
  },
  openGraph: {
    title: "Premium Air-Dried Turkey Dog Treats - Rocco Treats",
    description: "Discover Rocco Treats' premium air-dried Turkey dog treats. Made with 100% human-grade turkey, no fillers, no artificial preservatives.",
    url: "https://roccotreats.com/turkey",
    siteName: "Rocco Treats",
    images: [
      {
        url: "/assests/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rocco Treats - Premium Air-Dried Turkey Dog Treats"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Air-Dried Turkey Dog Treats - Rocco Treats",
    description: "Discover Rocco Treats' premium air-dried Turkey dog treats. Made with 100% human-grade turkey, no fillers, no artificial preservatives.",
    images: ["/assests/og-image.jpg"],
  },
};

export default function TurkeyPage() {
  return (
    <main>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assests/BB-web-background.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority={true}
        />
        {/* Optional overlay to improve text readability */}
        <div className="absolute inset-0 bg-white/70 md:bg-white/60"></div>
      </div>
      <Turkey />
    </main>
  );
}
