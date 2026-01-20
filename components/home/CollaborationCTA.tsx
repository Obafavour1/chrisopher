"use client"

import React from 'react';
import Link from 'next/link';

const CollaborationCTA = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#1a2332] via-[#1e2a3a] to-[#243447]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to collaborate?
          </h2>
          
          {/* Description */}
          <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
            I&apos;m always interested in{' '}
            <span className="text-teal-400 font-semibold underline decoration-teal-400/50">
              discussing
            </span>{' '}
            new projects and opportunities.
          </p>
          
          {/* CTA Button */}
          <Link 
            href="/contact"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-101 shadow-md hover:shadow-teal-500/50"
          >
            Contact Me
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollaborationCTA;
