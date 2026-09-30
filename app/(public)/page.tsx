import { HeroSection } from "@/components/home/HeroSection";
import { TrustedBy } from "@/components/home/TrustedBy";
import { DiscoverCourses } from "@/components/home/DiscoverCourses";
import { DiverseLearning } from "@/components/home/DiverseLearning";
import { ProfessionalGrowth } from "@/components/home/ProfessionalGrowth";
import { PotentialCreator } from "@/components/home/PotentialCreator";
import { OurCommunity } from "@/components/home/OurCommunity";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-text-primary">
      <HeroSection />
      <TrustedBy />
      <DiscoverCourses />
      <DiverseLearning />
      <ProfessionalGrowth />
      <PotentialCreator />
      <OurCommunity />
    </main>
  );
}
