import type { Metadata } from "next";
import OurStory from "@/components/our-story/OurStory";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Story - Rocco Treats Premium Air-Dried Dog Treats",
  description: "Discover the story behind Rocco Treats - premium air-dried dog treats made with 100% real ingredients. Learn about our commitment to quality, sustainability, and pet health.",
  keywords: "rocco treats story, premium dog treats, air-dried dog treats, south african dog treats, pet treat company, dog treat quality, sustainable pet products, pet health treats",
  authors: [{ name: "Rocco Treats" }],
  creator: "Rocco Treats",
  publisher: "Rocco Treats",
  alternates: {
    canonical: "/our-story"
  },
  openGraph: {
    title: "Our Story - Rocco Treats Premium Air-Dried Dog Treats",
    description: "Discover the story behind Rocco Treats - premium air-dried dog treats made with 100% real ingredients.",
    url: "https://roccotreats.com/our-story",
    siteName: "Rocco Treats",
    images: [
      {
        url: "/assests/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rocco Treats - Our Story"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story - Rocco Treats Premium Air-Dried Dog Treats",
    description: "Discover the story behind Rocco Treats - premium air-dried dog treats made with 100% real ingredients.",
    images: ["/assests/og-image.jpg"],
  },
};

export default function OurStoryPage() {
  return (
    <main className="relative min-h-screen h-full">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="/assests/BB-web-background.png"
          alt="Background"
          fill
          priority
        />
        <div className="absolute inset-0 bg-white/70 md:bg-white/60"></div>
      </div>
      <OurStory />
    </main>
  );
}
