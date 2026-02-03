"use client";

import { useEffect, useState } from "react";

export default function LanguageToggle({ scrolled, isOpen }: { scrolled: boolean; isOpen: boolean }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const getCookie = (name: string) => {
      if (typeof document === "undefined") return undefined;
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
    };

    const currentLang = getCookie("googtrans");
    const detectedLang = currentLang?.endsWith("/fr") ? "fr" : "en";
    
    const timer = setTimeout(() => {
      setLang((prev) => (prev !== detectedLang ? detectedLang : prev));
    }, 0);

    return () => clearTimeout(timer);
  }, []);



  const toggleLanguage = () => {
    const newLang = lang === "en" ? "fr" : "en";
    const cookieValue = `/en/${newLang}`;
    
    // Set cookie for both the current domain and .domain (for subdomains)
    document.cookie = `googtrans=${cookieValue}; path=/`;
    document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}`;
    
    // Reload to apply translation
    window.location.reload();
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center space-x-1 px-3 py-1 rounded-full border transition-all duration-300 text-xs font-medium ${
        scrolled || isOpen
          ? "border-teal-500 text-teal-600 hover:bg-teal-50"
          : "border-white/30 text-white hover:bg-white/10"
      }`}
    >
      <span className={lang === "en" ? "font-bold underline" : "opacity-70"}>EN</span>
      <span className="opacity-40">|</span>
      <span className={lang === "fr" ? "font-bold underline" : "opacity-70"}>FR</span>
    </button>
  );
}
