import HeroSection from "@/components/HeroSection";
import PointsSection from "@/components/PointsSection";
import StreakTimeline from "@/components/StreakTimeline";
import MultiplierCard from "@/components/MultiplierCard";
import RequirementBanner from "@/components/RequirementBanner";
import RewardsSection from "@/components/RewardsSection";
import IncompleteStreakSection from "@/components/IncompleteStreakSection";
import ExampleCard from "@/components/ExampleCard";
import TermsSection from "@/components/TermsSection";
import ClosingCTA from "@/components/ClosingCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <RewardsSection />
      <PointsSection />
      <StreakTimeline />
      <MultiplierCard />
      <RequirementBanner />
      <IncompleteStreakSection />
      <ExampleCard />
      <TermsSection />
      <ClosingCTA />
    </main>
  );
};

export default Index;
