"use client";

import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="w-full">
      {/* Dark Header */}
      <div className="bg-[#0f172a] py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mt-10 md:mt-20 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h1>
          <p className="text-blue-200 text-lg md:text-xl font-medium max-w-3xl">
            Process Engineer in training with hands-on experience in process simulation, process design, and high-pressure polymerization research
          </p>
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
                I&apos;m a Process Engineer with hands-on experience in process simulation, process design, and high-pressure 
                polymerization research. Strong grasp on petrochemicals, polymers, and low-carbon technologies. Seeking graduate 
                opportunities to contribute to innovative projects in the energy and chemical sectors.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                My journey began with a First Class Honors degree in Chemical Engineering from the University of Benin, Nigeria, 
                followed by specialized training at IFP School in France. I&apos;ve worked on catalyst breakup analysis, 
                polymerization processes, and process design projects, combining theoretical knowledge with practical applications 
                in both research and industrial settings.
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
                <span className="block text-4xl font-bold text-[#0d9488] mb-2">15+</span>
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
