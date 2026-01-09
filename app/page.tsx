
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TechnicalSkills from "@/components/home/TechnicalSkills";
import CollaborationCTA from "@/components/home/CollaborationCTA";



export default function Home() {
  return (
    <div className="min-h-screen">
      
      <HeroSection />
      <FeaturedProjects />
      <TechnicalSkills />
      <CollaborationCTA />
      
      
    </div>
  );
}
