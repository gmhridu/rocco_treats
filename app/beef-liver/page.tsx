import type { Metadata } from "next";
import BeefLiver from "@/components/beef-liver/BeefLiver";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Premium Beef Liver Dog Treats - Rocco Treats",
  description: "Discover Rocco Treats' premium air-dried Beef Liver dog treats. Made with 100% human-grade beef liver, no fillers, no artificial preservatives. Nutrient-dense treats perfect for dogs needing extra nutrition.",
  keywords: "beef liver dog treats, air-dried liver treats, premium dog treats, nutrient dense dog treats, beef liver snacks, natural dog treats, high iron dog treats",
  authors: [{ name: "Rocco Treats" }],
  creator: "Rocco Treats",
  publisher: "Rocco Treats",
  alternates: {
    canonical: "/beef-liver"
  },
  openGraph: {
    title: "Premium Beef Liver Dog Treats - Rocco Treats",
    description: "Discover Rocco Treats' premium air-dried Beef Liver dog treats. Made with 100% human-grade beef liver, no fillers, no artificial preservatives.",
    url: "https://roccotreats.com/beef-liver",
    siteName: "Rocco Treats",
    images: [
      {
        url: "/assests/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rocco Treats - Premium Beef Liver Dog Treats"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Beef Liver Dog Treats - Rocco Treats",
    description: "Discover Rocco Treats' premium air-dried Beef Liver dog treats. Made with 100% human-grade beef liver, no fillers, no artificial preservatives.",
    images: ["/assests/og-image.jpg"],
  },
};

export default function BeefLiverPage() {
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
      <BeefLiver />
    </main>
  );
}
