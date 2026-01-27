"use client";

import { BookOpen, ExternalLink, Award } from "lucide-react";
import Link from "next/link";

const PublicationsSection = () => {
  const publications = [
    {
      title: "A comprehensive insight into the role of synthesis methods on the properties and performance of bio-derived heterogeneous catalysts for biodiesel production",
      journal: "Molecular Catalysis",
      publisher: "Elsevier",
      year: "2025",
      doi: "10.1016/j.mcat.2025.115057",
      url: "https://doi.org/10.1016/j.mcat.2025.115057",
      type: "Review Article",
      color: "from-blue-500/10 to-teal-500/10",
      borderColor: "border-blue-200"
    },
    {
      title: "A comprehensive review of recent advances in the applications and biosynthesis of oxalic acid from bio-derived substrates",
      journal: "Environmental Research",
      publisher: "Elsevier",
      year: "2024",
      doi: "10.1016/j.envres.2024.118703",
      url: "https://doi.org/10.1016/j.envres.2024.118703",
      type: "Review Article",
      color: "from-teal-500/10 to-emerald-500/10",
      borderColor: "border-teal-200"
    }
  ];

  return (
    <section className="bg-slate-50 px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-white rounded-lg shadow-sm">
            <BookOpen className="w-6 h-6 text-[#0d9488]" />
          </div>
          <h2 className="text-3xl font-bold text-[#0f172a]">Scientific Publications</h2>
        </div>

        <div className="grid gap-8">
          {publications.map((pub, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-[#0d9488]/50 transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-teal-50 text-[#0d9488] text-xs font-bold uppercase tracking-wider rounded-full border border-teal-100">
                    {pub.type}
                  </span>
                  <span className="text-slate-400 text-sm font-medium">
                    {pub.year}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-4 leading-tight group-hover:text-[#0d9488] transition-colors">
                  {pub.title}
                </h3>

                <div className="flex flex-col md:flex-row md:items-center gap-4 text-slate-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-teal-600" />
                    <span className="font-semibold">{pub.journal}</span>
                  </div>
                  <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-200" />
                  <span>{pub.publisher}</span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
                  <code className="text-xs text-slate-400 font-mono">
                    DOI: {pub.doi}
                  </code>
                  
                  <Link 
                    href={pub.url}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-[#0d9488] font-bold text-sm hover:translate-x-1 transition-transform"
                  >
                    Read Full Paper
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              
              {/* Subtle accent background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-50 to-transparent -mr-16 -mt-16 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
