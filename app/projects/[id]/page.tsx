"use client";

import React, { use } from 'react';
import { projects } from '@/constants/projects';
import { 
  ArrowLeft, 
  Calendar, 
  Tag, 
  Github, 
  CheckCircle2,
  FolderOpen
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Header */}
      <header className="bg-[#0F172A] text-white pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-sm text-emerald-400 font-medium hover:text-emerald-300 transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium">
            {project.description}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 -mt-12 pb-24">
        {/* Project Image */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white mb-10 bg-gray-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 py-8 border-b border-gray-100">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-gray-400 font-bold flex items-center gap-2">
              <Calendar size={14} className="text-emerald-500" />
              Completed
            </span>
            <span className="text-gray-900 font-semibold">{project.date}</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-gray-400 font-bold flex items-center gap-2">
              <Tag size={14} className="text-emerald-500" />
              Category
            </span>
            <div>
              <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium border border-emerald-100">
                {project.category}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-gray-400 font-bold flex items-center gap-2 text-right md:text-left">
              <Github size={14} className="text-emerald-500" />
              Repository
            </span>
            <a
              href={project.githubUrl || project.folder}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#0F172A] text-white py-2 px-4 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors w-full md:w-auto"
            >
              {project.githubUrl ? <Github size={16} /> : <FolderOpen size={16} />}
              {project.githubUrl ? "View on GitHub" : "View  Folder"}
            </a>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* About */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Project</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.longDescription}
              </p>
              <p className="font-bold text-gray-900 mb-4">Key features:</p>
              <ul className="space-y-3">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Technologies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold border border-transparent hover:border-gray-300 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Key Achievements */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {project.keyAchievements.map((achievement, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-xl border border-gray-100 transition-all hover:bg-gray-50">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Navigation Footer */}
        <div className="mt-20 pt-10 border-t border-gray-100 flex items-center justify-between">
            {/* Find Next/Prev logic could go here if needed */}
            <Link 
                href="/projects"
                className="text-gray-500 hover:text-gray-900 font-medium transition-colors flex items-center gap-2"
            >
                <ArrowLeft size={18} />
                Explore other projects
            </Link>
        </div>
      </main>
    </div>
  );
}
