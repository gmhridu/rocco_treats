import ContactUs from "@/components/contact-us/ContactUs";
import Image from "next/image";

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
