"use client";

import AboutHero from "./AboutHero";
import ExperienceSection from "./ExperienceSection";
import ExpertiseSection from "./ExpertiseSection";

const AboutInterface = () => {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <ExperienceSection />
      <ExpertiseSection />
    </main>
  );
};

export default AboutInterface;