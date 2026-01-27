"use client"

import React from 'react';

interface Skill {
  name: string;
  level?: 'Expert' | 'Advanced' | "";
  percentage: number;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Programming & Computational Engineering",
    skills: [
      { name: "Python (Engineering calculations, modeling, data analysis)", level: "", percentage: 90, color: "bg-teal-500" },
      { name: "MATLAB (Simulation, optimization, numerical methods)", level: "", percentage: 90, color: "bg-teal-500" },
      { name: "Simulink (Dynamic system modeling)", level: "", percentage: 85, color: "bg-teal-500" },
      
    ]
  },
  {
    title: "Process & Engineering Tools",
    skills: [
      { name: "PRO/II (Refinery and petrochemical process simulation)", level: "", percentage: 88, color: "bg-teal-500" },
      { name: "Aspen HYSYS (Hydrocarbon and energy system modeling)", level: "", percentage: 85, color: "bg-teal-500" },
      { name: "Process design, optimization, and unit operations", level: "", percentage: 90, color: "bg-teal-500" },
      { name: "PFD & P&ID development", level: "", percentage: 88, color: "bg-teal-500" },
      { name: "Life Cycle Assessment - SimaPro", level: "", percentage: 88, color: "bg-teal-500" }
    ]
  }
];

const TechnicalSkills = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Technical Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {skillsData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    {/* Skill Name and Level */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base font-semibold text-gray-900">
                        {skill.name}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 font-medium">
                        {skill.level}
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`absolute top-0 left-0 h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.percentage}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default TechnicalSkills;
