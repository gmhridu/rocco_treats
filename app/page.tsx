import type { Metadata } from "next";
import Home from "@/components/home/Home";

export const metadata: Metadata = {
  title: "Rocco Treats - Premium Air-Dried Dog Treats with Real Ingredients",
  description: "Discover Rocco Treats' premium air-dried dog treats made with 100% real ingredients. No fillers, no artificial preservatives. Made in South Africa, loved by dogs worldwide.",
  keywords: "dog treats, air-dried dog treats, premium dog treats, natural dog treats, South African dog treats, beef liver treats, turkey treats, pork loin treats, chicken treats, beef topper treats",
  authors: [{ name: "Rocco Treats" }],
  creator: "Rocco Treats",
  publisher: "Rocco Treats",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Rocco Treats - Premium Air-Dried Dog Treats",
    description: "Premium air-dried dog treats made with 100% real ingredients. No fillers, no artificial preservatives.",
    url: "https://roccotreats.com",
    siteName: "Rocco Treats",
    images: [
      {
        url: "/assests/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rocco Treats - Premium Air-Dried Dog Treats"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rocco Treats - Premium Air-Dried Dog Treats",
    description: "Premium air-dried dog treats made with 100% real ingredients. No fillers, no artificial preservatives.",
    images: ["/assests/og-image.jpg"],
  },
};

export default function HomePage() {
  return <>
    <Home />
  </>;
}
