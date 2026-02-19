import BgGradiant from "@/components/common/BgGradiant";
import DemoSection from "@/components/home/demoSection";
import { HeroSection } from "@/components/home/heroSection";
import HowItWorks from "@/components/home/howItWorks";

export default function Home() {
  return (
    <section>
      <div className="relative w-full">
        <BgGradiant />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection/>
        <HowItWorks />
      </div>

      </div>
    </section>
  );
}
