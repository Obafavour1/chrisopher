"use client"

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section  className="relative flex  bg-gradient-to-br from-[#1a2332] via-[#1e2a3a] to-[#243447] overflow-hidden">
      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)]"></div>
      
      <div className="relative z-10  px-4 sm:px-6 lg:px-32 py-20 sm:py-36">
        <div className="">
          {/* Welcome Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 backdrop-blur-sm mb-6 sm:mb-8">
            <span className="text-teal-300 text-xs sm:text-sm font-medium">
              Welcome to my portfolio
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Chemical Engineer &
            <br />
            <span className="text-teal-400">Developer</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
            Specialized in process simulation, optimization, and automation using Python and MATLAB. 
            Passionate about solving complex engineering problems through code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
            <Link 
              href="/projects"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-101 shadow-md hover:shadow-teal-500/50"
            >
              View My Work
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-101 backdrop-blur-sm"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <Link 
              href="https://github.com/ChrisAbuga" 
              target="_blank"
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-white transition-colors" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/emmanuelabuga" 
              target="_blank"
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-white transition-colors" />
            </Link>
            <Link 
              href="mailto:em.abugaofficial@gmail.com"
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-white transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div> */}
    </section>
  );
};

export default HeroSection;
