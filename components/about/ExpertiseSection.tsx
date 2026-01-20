"use client";

import { Award, Check } from "lucide-react";
import Link from "next/link";

const ExpertiseSection = () => {
  const certifications = [
    "Python for Data Science",
    "ASPEN Plus Advanced User",
    "Process Safety Management",
    "Six Sigma Green Belt",
  ];

  const programmingSkills = [
    "Python (NumPy, SciPy, Pandas, Matplotlib)",
    "MATLAB & Simulink",
    "VBA for Excel automation",
    "SQL & Database management",
  ];

  const engineeringSoftware = [
    "ASPEN Plus & HYSYS",
    "Computational Fluid Dynamics (CFD)",
    "Process Optimization Tools",
    "Data visualization tools",
  ];

  return (
    <section className="bg-white px-6 md:px-12 lg:px-24 py-16 pb-24">
      <div className="max-w-5xl mx-auto">
        {/* Certifications */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 bg-slate-50 rounded-lg">
              <Award className="w-6 h-6 text-[#0d9488]" />
            </div>
            <h2 className="text-2xl font-bold text-[#0f172a]">Certifications</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-5 border border-[#0d9488]/40 bg-[#0d9488]/10 rounded-xl text-[#0f172a] font-medium hover:border-[#0d9488]/40 transition-all"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-12">Technical Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Programming */}
            <div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-6">Programming & Scripting</h3>
              <ul className="space-y-4">
                {programmingSkills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-500">
                    <Check className="w-5 h-5 text-[#0d9488]" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engineering Software */}
            <div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-6">Engineering Software</h3>
              <ul className="space-y-4">
                {engineeringSoftware.map((software, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-500">
                    <Check className="w-5 h-5 text-[#0d9488]" />
                    <span>{software}</span>
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
            <button >
              <Link href="contact" className="bg-white text-[#0f766e] px-8 py-3 rounded-lg font-bold hover:bg-teal-50 transition-colors">Contact Me</Link>
            </button>
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
