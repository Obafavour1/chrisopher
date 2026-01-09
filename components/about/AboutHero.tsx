"use client";

const AboutHero = () => {
  return (
    <section className="w-full">
      {/* Dark Header */}
      <div className="bg-[#0f172a] py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mt-10 md:mt-20 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h1>
          <p className="text-blue-200 text-lg md:text-xl font-medium max-w-3xl">
            Chemical Engineer passionate about automation and computational problem-solving
          </p>
        </div>
      </div>

      {/* Main Content & Stats */}
      <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid max-w-4xl mx-auto gap-12 mb-16">
            <p className="text-slate-600 leading-relaxed text-lg">
              I&apos;m a chemical engineer with a passion for leveraging programming and data science to solve complex
              engineering challenges. With expertise in Python and MATLAB, I&apos;ve developed simulation models,
              optimization algorithms, and automation solutions that have improved efficiency and reduced operational
              costs.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              My journey began with a strong foundation in process design and thermodynamics, which I&apos;ve complemented
              with advanced programming skills. This unique combination allows me to bridge the gap between traditional
              engineering and modern computational methods.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="border-t border-b border-slate-100 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <span className="block text-4xl font-bold text-[#0d9488] mb-2">5+</span>
                <span className="text-slate-400 font-medium">Years Experience</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-[#0d9488] mb-2">20+</span>
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
