import FeaturesSection from "@/src/components/pages/home/feature-section/FeaturesSection";
import FrequentSection from "@/src/components/pages/home/frequent-section/FrequentSection";
import HeroSection from "@/src/components/pages/home/HeroSection";
import ReachUs from "@/src/components/pages/home/Reach-us-section/ReachUs";
import ServiceSection from "@/src/components/pages/home/service-section/ServiceSection";

export default async function Home() {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <FeaturesSection />
      <FrequentSection />
      <ReachUs />
    </main>
  );
}
