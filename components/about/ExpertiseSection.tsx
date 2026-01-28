"use client";

import {  Check } from "lucide-react";
import Link from "next/link";

const ExpertiseSection = () => {
  const chemicalEngineering = [
    "Process simulation and modeling (PRO II, Aspen HYSYS)",
    "Process design, unit operation, and design calculations",
    "Process safety awareness (HAZOP / HAZID exposure)",
    "Life Cycle Assessment (SimaPro)",
  ];

  const dataEngineering = [
    "Engineering computation and modeling (MATLAB, Simulink)",
    "Python for numerical analysis and engineering problem-solving",
    "Basic data visualization and reporting (PowerPoint)",
  ];

  const designTools = [
    "PFD and P&ID development",
    "Equipment sizing and process documentation",
    "AutoCAD for process and layout drawings (progressive learning)",
    
  ];

  const softSkills = [
    "Clear verbal and written communication",
    "Strong interpersonal and teamwork skills",
    "Project coordination and time management",
    "Adaptability in multidisciplinary environments"
    
  ];

  return (
    <section className="bg-white px-6 md:px-12 lg:px-24 py-16 pb-24">
      <div className="max-w-5xl mx-auto ">
        {/* Certifications */}
        {/* <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 bg-slate-50 rounded-lg">
              <Award className="w-6 h-6 text-[#0d9488]" />
            </div>
            <h2 className="text-2xl font-bold text-[#0f172a]">Certifications</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {chemicalEngineering.map((cert, index) => (
              <div
                key={index}
                className="p-5 border border-[#0d9488]/40 bg-[#0d9488]/10 rounded-xl text-[#0f172a] font-medium hover:border-[#0d9488]/40 transition-all"
              >
                {cert}
              </div>
            ))}
          </div>
        </div> */}

        {/* Technical Expertise */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-12">Technical Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Chemical Engineering Skills */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#0f172a] mb-6">Process & Chemical Engineering</h3>
              <ul className="space-y-4 ">
                {chemicalEngineering.map((skill, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-500  ">
                    <Check className="w-5 h-5 text-[#0d9488]" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>


            {/* Data Engineering Skills */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#0f172a] mb-6">Computational & Data Engineering</h3>
              <ul className="space-y-4">
                {dataEngineering.map((skill, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-500">
                    <Check className="w-5 h-5 text-[#0d9488]" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Tools Skills */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#0f172a] mb-6">Engineering Design & Tools</h3>
              <ul className="space-y-4">
                {designTools.map((skill, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-500">
                    <Check className="w-5 h-5 text-[#0d9488]" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#0f172a] mb-6">Soft Skills</h3>
              <ul className="space-y-4">
                {softSkills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-500">
                    <Check className="w-5 h-5 text-[#0d9488]" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="bg-[#0f766e] rounded-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
            <p className="text-teal-50/80 mb-8 text-lg max-w-xl mx-auto">
              I&apos;m always open to new projects and collaborations.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[#0f766e] px-8 py-3 rounded-lg font-bold hover:bg-teal-50 transition-colors"
            >
              Contact Me
            </Link>
          </div>
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-900/20 rounded-full -ml-20 -mb-20 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
