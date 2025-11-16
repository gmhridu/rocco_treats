import type { Metadata } from "next";
import ContactUs from "@/components/contact-us/ContactUs";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Rocco Treats - Premium Air-Dried Dog Treats",
  description: "Get in touch with Rocco Treats for inquiries about our premium air-dried dog treats. Contact us for retail, distribution, or private labeling opportunities.",
  keywords: "contact rocco treats, dog treats contact, air-dried dog treats, pet treat inquiries, private label dog treats, wholesale dog treats",
  authors: [{ name: "Rocco Treats" }],
  creator: "Rocco Treats",
  publisher: "Rocco Treats",
  alternates: {
    canonical: "/contact-us"
  },
  openGraph: {
    title: "Contact Rocco Treats - Premium Air-Dried Dog Treats",
    description: "Get in touch with Rocco Treats for inquiries about our premium air-dried dog treats.",
    url: "https://roccotreats.com/contact-us",
    siteName: "Rocco Treats",
    images: [
      {
        url: "/assests/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rocco Treats - Contact Us"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Rocco Treats - Premium Air-Dried Dog Treats",
    description: "Get in touch with Rocco Treats for inquiries about our premium air-dried dog treats.",
    images: ["/assests/og-image.jpg"],
  },
};

export default function ContactUsPage() {
  return (
    <main className="relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assests/BB-web-background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/70 md:bg-white/60"></div>
      </div>
      <ContactUs />
    </main>
  );
}
