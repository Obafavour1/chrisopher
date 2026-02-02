import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: {
    default: "ABUGA | Chemical Engineer & Automation Specialist",
    template: "%s | ABUGA Portfolio"
  },
  description: "Professional portfolio of ABUGA, a Chemical Engineer and Developer specializing in process simulation, optimization, and automation using Python and MATLAB.",
  keywords: ["Chemical Engineer", "Process Automation", "Python", "MATLAB", "Process Simulation", "Engineering optimization", "Computational Problem Solving"],
  authors: [{ name: "ABUGA" }],
  creator: "ABUGA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
