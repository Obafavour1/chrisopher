"use client";

import { Briefcase, GraduationCap } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Process Engineer Research Intern",
      company: "CP2M Lyon",
      period: "Oct. 2025 - Present",
      bullets: [
        "Investigating catalyst breakup during high-pressure ethylene polymerization using Ziegler-Natta and metallocene catalysts",
        "Conducting gas and slurry phase polymerization; analyzing polymer morphology with SEM, DSC, NMR, and HT-SEC",
        "Exploring the influence of process conditions on catalyst behavior and polyolefine properties",
      ],
    },
    {
      title: "Research Assistant/Process Engineer",
      company: "Bioresources Valorization Lab",
      period: "Aug. 2023 - July 2024",
      bullets: [
        "Collaborated with multidisciplinary teams to assess process efficiency, environmental impact, and economics for industrial application",
        "Conducted literature reviews and technical analysis focused on low-carbon and renewable process technologies, including bio-based feedstocks and sustainable catalyst systems",
      ],
    },
    {
      title: "Process Engineer Trainee",
      company: "Polypropylene Unit, Warri Refining and Petrochemicals Company (WRPC)",
      period: "Sept. 2019 - Feb. 2021",
      bullets: [
        "Supported optimization of polypropylene production parameters, contributing to improved product quality and process efficiency",
        "Assisted in troubleshooting polymerization and purification operations, reducing downtime during critical plant activities",
      ],
    },
    {
      title: "Quality Control and Assurance Intern",
      company: "JC Udeozor Global Industries Limited",
      period: "July 2019 - Sept 2019",
      bullets: [
        "Carried out experimental analysis on the raw materials used in the production of medicated balm ointment and inhaler",
        "The analysis carried out include acid value, density, menthol content, amongst many others",
        "Active in process HAZOP, HAZID and PHA to ensure safe operations",
      ],
    },
  ];

  const education = [
    {
      degree: "MSc. Processes and Polymers Engineering",
      university: "IFP School (Ecole Nationale Supérieure du Pétrole et des Moteurs)",
      location: "Rueil-Malmaison, France",
      period: "2024/2025",
      specialization: "",
    },
    {
      degree: "Bachelor of Engineering (B.Eng.) in Chemical Engineering",
      university: "University of Benin",
      location: "Benin City, Nigeria",
      period: "2015 - 2020",
      specialization: "First Class Honors",
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
                <p className="text-[#0d9488] font-medium text-sm mb-1">{exp.company}</p>
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
                <p className="text-slate-500 text-sm mb-1">{edu.location}</p>
                <p className="text-slate-400 text-sm mb-1">{edu.period}</p>
                {edu.specialization && (
                  <p className="text-slate-500 text-sm italic">{edu.specialization}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
