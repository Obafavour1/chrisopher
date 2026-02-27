"use client";

import { useEffect } from "react";

interface GoogleTranslate {
  translate: {
    TranslateElement: new (
      options: {
        pageLanguage: string;
        includedLanguages?: string;
        autoDisplay?: boolean;
        layout?: number;
      },
      elementId: string
    ) => void;
  };
}

declare global {
  interface Window {
    google: GoogleTranslate;
    googleTranslateInit: () => void;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    // Check if script already exists
    if (document.querySelector('script[src*="translate.google.com"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{ display: "none" }}
    />
  );
}

