"use client";

import AboutHero from "./AboutHero";
import ExperienceSection from "./ExperienceSection";
import ExpertiseSection from "./ExpertiseSection";
import PublicationsSection from "./PublicationsSection";

const AboutInterface = () => {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <ExperienceSection />
      <PublicationsSection />
      <ExpertiseSection />
    </main>
  );
};

export default AboutInterface;