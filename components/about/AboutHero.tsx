"use client";

import Image from 'next/image';
import Link from 'next/link';

const AboutHero = () => {
  return (
    <section className="w-full">
      {/* Dark Header */}
      <div className="bg-[#0f172a] py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mt-10 md:mt-20 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h1>
          <p className="text-blue-200 text-lg md:text-xl font-medium max-w-3xl">
            Process Engineer in training with hands-on experience in process simulation, process design, and polymerization research driven by practical engineering and sustainable technologies.
          </p>
          <Link
          href="#"
          className="inline-flex mt-5 items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-101 shadow-md hover:shadow-teal-500/50"
        >
          Resume
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        </div>
        
      </div>

      {/* Main Content & Stats */}
      <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Profile Picture */}
            <div className="lg:col-span-4">
              <div className="relative w-full max-w-sm mx-auto lg:sticky lg:top-24">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-teal-100 to-blue-100 shadow-xl">
                  <Image 
                    src="/abuga1.png" 
                    alt="Emmanuel Abuga - Process Engineer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10" />
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:col-span-8 space-y-6">
              <p className="text-slate-600 leading-relaxed text-lg">
                I am a Process Engineer in training with practical experience in process simulation, process design, and polymerization research. My technical background spans petrochemical processes, polymers, catalysis, and low-carbon technologies, with a strong focus on applying engineering fundamentals to real industrial challenges. I use tools such as MATLAB and Python to support engineering analysis, modeling, and data-driven problem-solving, alongside classical process design approaches.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                I hold a First Class Honors degree in Chemical Engineering from the University of Benin and am currently completing an MSc in Processes and Polymers Engineering at IFP School in France. Through academic and industrial projects, I have worked on high-pressure ethylene polymerization, catalyst behavior analysis, and process design studies, including full PFD and P&ID development, equipment sizing, and safety considerations.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
I enjoy working in multidisciplinary environments where theory meets practice, and I am particularly motivated by projects that improve process efficiency, safety, and sustainability. I am actively seeking graduate or junior process engineering opportunities where I can continue learning while contributing to impactful engineering solutions in the energy, chemical, or advanced manufacturing sectors.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="border-t border-b border-slate-100 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <span className="block text-4xl font-bold text-[#0d9488] mb-2">3+</span>
                <span className="text-slate-400 font-medium">Years Experience</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-[#0d9488] mb-2">10+</span>
                <span className="text-slate-400 font-medium">Projects Completed</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-[#0d9488] mb-2">10+</span>
                <span className="text-slate-400 font-medium">Tools & Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
