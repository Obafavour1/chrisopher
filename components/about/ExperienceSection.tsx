"use client";

import { Briefcase, GraduationCap } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Process Engineer",
      period: "2022 - Present",
      bullets: [
        "Developed Python-based process simulation models using ASPEN Plus",
        "Implemented optimization algorithms reducing operational costs by 15%",
        "Led automation initiatives improving production efficiency",
      ],
    },
    {
      title: "Process Engineer",
      period: "2019 - 2022",
      bullets: [
        "Designed and validated process control systems using MATLAB",
        "Created data analysis dashboards for real-time monitoring",
        "Mentored junior engineers in programming best practices",
      ],
    },
  ];

  const education = [
    {
      degree: "M.S. Chemical Engineering",
      university: "University Name",
      specialization: "Specialization in Process Optimization & Simulation",
    },
    {
      degree: "B.S. Chemical Engineering",
      university: "University Name",
      specialization: "Graduated with Honors",
    },
  ];

  return (
    <section className="bg-white px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-5xl mx-auto grid  gap-16">
        {/* Experience Column */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 bg-slate-50 rounded-lg">
              <Briefcase className="w-6 h-6 text-[#0d9488]" />
            </div>
            <h2 className="text-2xl font-bold text-[#0f172a]">Professional Experience</h2>
          </div>

          <div className="space-y-12 relative border-l-2 border-[#0d9488]/30 ml-4 pl-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-white border-2 border-[#0d9488] rounded-full z-10" />
                
                <h3 className="text-xl font-bold text-[#0f172a] mb-1">{exp.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-slate-600 flex items-start gap-2">
                      <span className="text-[#0d9488] shrink-0 mt-1.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 bg-slate-50 rounded-lg">
              <GraduationCap className="w-6 h-6 text-[#0d9488]" />
            </div>
            <h2 className="text-2xl font-bold text-[#0f172a]">Education</h2>
          </div>

          <div className="space-y-12 relative border-l-2 border-[#0d9488]/30 ml-4 pl-8">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-white border-2 border-[#0d9488] rounded-full z-10" />
                
                <h3 className="text-xl font-bold text-[#0f172a] mb-1">{edu.degree}</h3>
                <p className="text-[#0d9488] font-medium text-sm mb-1">{edu.university}</p>
                <p className="text-slate-500 text-sm italic">{edu.specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
