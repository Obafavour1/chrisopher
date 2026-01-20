"use client"

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: {
      title: "About",
      description: "Chemical engineer specializing in process simulation, optimization, and automation using Python and MATLAB."
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" }
      ]
    },
    connect: {
      title: "Connect",
      links: [
        { name: "GitHub", href: "https://github.com/ChrisAbuga" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/emmanuelabuga" },
        { name: "Email", href: "mailto:em.abugaofficial@gmail.com" }
      ]
    }
  };

  return (
    <footer className="bg-[#1a2332] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              {footerLinks.about.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              {footerLinks.about.description}
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              {footerLinks.quickLinks.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              {footerLinks.connect.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.connect.links.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700">
          <p className="text-center text-sm sm:text-base text-gray-400">
            © {currentYear} Chemical Engineer Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
