import Ingredients from "@/components/ingredients/Ingredients";
import Image from "next/image";

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
