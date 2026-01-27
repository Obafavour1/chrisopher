"use client";

import { useState, useMemo } from 'react';
import { Filter, ChevronDown, Github, ArrowRight, FolderOpen } from 'lucide-react';
import { projects } from '@/constants/projects';
import Link from 'next/link';
import Image from 'next/image';

const categories = ["All Projects", "Process Design & Engineering", "Energy Optimization", "Distillation & Separation Processes", "Process Engineering & P&ID Design", " Computational Modeling"];

const ProjectInterface = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [sortBy, setSortBy] = useState("Most Recent");

  const filteredProjects = useMemo(() => {
    let result = projects;
    if (activeCategory !== "All Projects") {
      result = result.filter(p => p.category === activeCategory);
    }
    
    if (sortBy === "Most Recent") {
      // Assuming they are already in order or would be sorted by date
      return [...result].reverse();
    }
    return result;
  }, [activeCategory, sortBy]);

  return (
    // <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-gray-50/50 min-h-screen">
    <div className="">
      <div className="bg-[#0f172a] py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mt-10 md:mt-20 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h1>
          <p className="text-blue-200 text-lg md:text-xl font-medium max-w-3xl">
            A collection of engineering projects built with Python and MATLAB
          </p>
        </div>
      </div>

      {/* main project section  */}
      <div className='max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-gray-50/50 min-h-screen'>
        {/* Header / Filter Section */}
      <div className="flex   mx-auto flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-gray-600 font-medium">
            <Filter size={18} />
            <span>Filter by Category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#0F172A] text-white shadow-lg shadow-blue-900/20"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-gray-600 font-medium md:justify-end">
            <span>Sort:</span>
          </div>
          <div className="relative inline-block text-left">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer hover:border-gray-400 transition-colors"
            >
              <option>Most Recent</option>
              <option>Oldest</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative h-56 w-full overflow-hidden bg-gray-200 flex-shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white text-sm font-medium bg-blue-600/80 backdrop-blur-md px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 h-10">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-auto">
                <Link
                  href={`/projects/${project.id}`}
                  className="flex-1 bg-[#0F172A] text-white py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors group/btn"
                >
                  Learn More
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all"
                  title="View on GitHub"
                >
                  {project.githubUrl ? <Github size={20} /> : <FolderOpen size={20} />}
                 
                  
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Footer Info */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        Showing {filteredProjects.length} projects
      </div>
    </div>
  );
};

export default ProjectInterface;