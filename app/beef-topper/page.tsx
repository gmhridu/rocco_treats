import type { Metadata } from "next";
import BeefTopper from "@/components/beef-topper/BeefTopper";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Premium Beef Topper Dog Treats - Rocco Treats",
  description: "Discover Rocco Treats' premium air-dried Beef Topper dog treats. Made with 100% human-grade beef, no fillers, no artificial preservatives. Perfect high-protein training treats for your dog.",
  keywords: "beef topper dog treats, air-dried beef treats, premium dog treats, high protein dog treats, training treats for dogs, beef dog snacks, natural dog treats",
  authors: [{ name: "Rocco Treats" }],
  creator: "Rocco Treats",
  publisher: "Rocco Treats",
  alternates: {
    canonical: "/beef-topper"
  },
  openGraph: {
    title: "Premium Beef Topper Dog Treats - Rocco Treats",
    description: "Discover Rocco Treats' premium air-dried Beef Topper dog treats. Made with 100% human-grade beef, no fillers, no artificial preservatives.",
    url: "https://roccotreats.com/beef-topper",
    siteName: "Rocco Treats",
    images: [
      {
        url: "/assests/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rocco Treats - Premium Beef Topper Dog Treats"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Beef Topper Dog Treats - Rocco Treats",
    description: "Discover Rocco Treats' premium air-dried Beef Topper dog treats. Made with 100% human-grade beef, no fillers, no artificial preservatives.",
    images: ["/assests/og-image.jpg"],
  },
};

export default function BeefTopperPage() {
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

      <BeefTopper />
    </main>
  );
}
