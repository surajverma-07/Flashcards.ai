import BgGradiant from "@/components/common/BgGradiant";
import { HeroSection } from "@/components/home/heroSection";

export default function Home() {
  return (
    <section>
      <div className="relative w-full">
        <BgGradiant />
      <div className="flex flex-col">
        <HeroSection />
      </div>

      </div>
    </section>
  );
}
