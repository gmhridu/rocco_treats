import AboutRoccoTreats from "./AboutRoccoTreats";
import Ingredients from "./Ingredients";
import Partner from "./Partner";
import ParallaxBackground from "@/components/Parallax/ParallaxBackground";

export default function Home() {
  return (
    <main>
      <ParallaxBackground />
      <Partner />
      <AboutRoccoTreats />
      <Ingredients />
    </main>
  );
}
