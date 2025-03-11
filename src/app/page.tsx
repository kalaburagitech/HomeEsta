import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { PropertySelection } from "@/components/sections/property-selection";
import { Footer } from "@/components/sections/footer";
import { AdditionalFeatures } from "@/components/sections/additional-features";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { MarqueeSection } from "@/components/sections/marquee-section";

export default function Page() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <main className="pt-16">
        <HeroSection />
        <FeaturesSection />
        <PropertySelection />
        <FeaturesGrid />
        <AdditionalFeatures />
        <MarqueeSection />
        <Footer />
      </main>
    </div>
  );
}
