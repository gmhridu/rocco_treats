import type { Metadata } from "next";
import Ingredients from "@/components/ingredients/Ingredients";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Premium Air-Dried Dog Treat Ingredients - Rocco Treats",
  description: "Discover the real ingredients in Rocco Treats' premium air-dried dog treats. No fillers, no artificial preservatives. Made with 100% human-grade meats sourced from USA.",
  keywords: "dog treat ingredients, air-dried dog treats, premium dog treats, natural dog treats, beef liver treats, turkey treats, pork loin treats, chicken treats, beef topper treats, no fillers dog treats",
  authors: [{ name: "Rocco Treats" }],
  creator: "Rocco Treats",
  publisher: "Rocco Treats",
  alternates: {
    canonical: "/ingredients"
  },
  openGraph: {
    title: "Premium Air-Dried Dog Treat Ingredients - Rocco Treats",
    description: "Discover the real ingredients in Rocco Treats' premium air-dried dog treats. No fillers, no artificial preservatives.",
    url: "https://roccotreats.com/ingredients",
    siteName: "Rocco Treats",
    images: [
      {
        url: "/assests/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rocco Treats - Premium Air-Dried Dog Treat Ingredients"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Air-Dried Dog Treat Ingredients - Rocco Treats",
    description: "Discover the real ingredients in Rocco Treats' premium air-dried dog treats. No fillers, no artificial preservatives.",
    images: ["/assests/og-image.jpg"],
  },
};

export default function IngredientsPage() {
  return (
    <main className="relative min-h-screen h-full">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="/assests/BB-web-background.png"
          alt="Background"
          fill
          className=""
          priority
        />
        <div className="absolute inset-0 bg-white/70 md:bg-white/60"></div>
      </div>
      <Ingredients />
    </main>
  );
}
