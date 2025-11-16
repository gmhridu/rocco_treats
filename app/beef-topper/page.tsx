import BeefTopper from "@/components/beef-topper/BeefTopper";
import Image from "next/image";

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
