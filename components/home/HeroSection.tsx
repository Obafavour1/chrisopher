"use client";

import {
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  Smile,
  Zap,
  Activity,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-[400px] pt-20 pb-10  bg-gradient-to-br from-[#1a2332] via-[#1e2a3a] to-[#243447] overflow-hidden">
      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex justify-between items-center">
        {/* Left Content Section */}
        <div className="w-full">
          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 backdrop-blur-sm mb-6 sm:mb-8"
          >
            <span className="flex gap-2 text-teal-300 text-xs sm:text-sm font-medium">
              Welcome to my portfolio{" "}
              <Smile className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl  font-bold text-white mb-4 sm:mb-6 leading-[1.1]">
            Chemical Engineer |
            <br />
            <span className="text-teal-400">Process & Energy</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl leading-relaxed">
            Chemical engineer with hands-on experience in process design, energy
            efficiency, and industrial simulation, supported by Python-based
            engineering tools, MATLAB and commercial simulators.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 sm:mb-12 w-full sm:w-auto">
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-teal-500/25"
            >
              View My Work
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white hover:bg-white/5 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Get In Touch
            </Link>
          </div>

          <Link
            href="/about#publications"
            className="flex items-center gap-2 text-teal-400 font-semibold hover:text-teal-300 transition-colors mb-6"
          >
            See publications{" "}
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {[
              {
                icon: Github,
                href: "https://github.com/ChrisAbuga",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/emmanuelabuga",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:em.abugaofficial@gmail.com",
                label: "Email",
              },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/50 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-gray-400 group-hover:text-teal-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-[450px] aspect-[4/5] sm:aspect-square"
        >
          {/* Decorative Background Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

          {/* Main Image Container */}
          <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-10 group">
            <Image
              src="/hero-image.jpg"
              alt="Engineering Facility"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"></div>

            {/* Overlay Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
          </div>

          {/* Floating Glass Badges - Adjusted for mobile */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 sm:p-4 rounded-2xl shadow-2xl z-20 flex items-center gap-3 sm:gap-4"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
              <Activity className="text-slate-900 w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-white text-xs sm:text-sm font-bold">
                Process Design
              </p>
              <p className="text-teal-400 text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider">
                Optimization
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 sm:p-4 rounded-2xl shadow-2xl z-20 flex items-center gap-3 sm:gap-4"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-white text-xs sm:text-sm font-bold">
                Energy Systems
              </p>
              <p className="text-blue-400 text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider">
                efficiency
              </p>
            </div>
          </motion.div>

          {/* Technical Badge */}
          <div className="absolute bottom-6 right-6 sm:bottom-12 sm:right-8 bg-teal-500/20 backdrop-blur-md border border-teal-500/30 px-3 py-1.5 rounded-full z-20 flex items-center gap-2">
            <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400" />
            <span className="text-teal-100 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest">
              Certified Engineer
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
