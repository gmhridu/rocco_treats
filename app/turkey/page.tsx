import Turkey from "@/components/turkey/Turkey";
import Image from "next/image";

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
          priority
        />
        {/* Optional overlay to improve text readability */}
        <div className="absolute inset-0 bg-white/70 md:bg-white/60"></div>
      </div>
      <Turkey />
    </main>
  );
}
