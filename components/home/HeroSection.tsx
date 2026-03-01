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
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
        <div className="hidden w-full md:flex justify-center items-center [perspective:1000px]">
          <Image
            src="/worldImage.png"
            alt=""
            height={1000}
            width={1000}
            className="animate-rotateSide object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
