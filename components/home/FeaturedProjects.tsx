"use client"

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/constants/projects';

const FeaturedProjects = () => {
  // Take the first 3 projects for the featured section
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work in process simulation and automation
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 bg-gray-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-medium bg-teal-600/80 backdrop-blur-md px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                {/* Bookmark Icon */}
                {/* <button 
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg shadow-md flex items-center justify-center hover:bg-white transition-colors z-10"
                  aria-label="Bookmark project"
                >
                  <Bookmark className="w-5 h-5 text-gray-600" />
                </button> */}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2 h-10 sm:h-12">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 bg-gray-50 text-gray-400 text-xs font-medium rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Learn More Link */}
                <Link 
                  href={`/projects/${project.id}`}
                  className="w-full py-3 bg-[#1a2332] hover:bg-[#243447] text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Link 
            href="/projects"
            className="inline-flex items-center px-6 sm:px-8 py-3 border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
