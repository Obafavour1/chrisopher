"use client";

import React, { use } from 'react';
import { projects } from '@/constants/projects';
import { 
  ArrowLeft, 
  Calendar, 
  Tag, 
  Github, 
  CheckCircle2,
  FolderOpen,
  Layers,
  Settings,
  Activity
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 py-8 border-b border-gray-100">
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
              {project.githubUrl ? "View on GitHub" : "View Folder"}
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
              
              {/* Key Features (Legacy / Simple Projects) */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <>
                  <p className="font-bold text-gray-900 mb-4">Key features:</p>
                  <ul className="space-y-3">
                    {project.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Engineering Contributions (Complex Projects) */}
            {project.keyEngineeringContributions && project.keyEngineeringContributions.length > 0 && (
              <div className="mt-12 space-y-8">
                <h3 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 flex items-center gap-2">
                  <Layers size={24} className="text-emerald-500" />
                  Engineering Contributions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.keyEngineeringContributions.map((contribution, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <span className="h-8 w-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-sm">
                          {idx + 1}
                        </span>
                        {contribution.title}
                      </h4>
                      <ul className="space-y-3 pl-11">
                        {contribution.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Technical Decisions (Advanced Engineering Projects) */}
            {project.keyTechnicalDecisions && (
              <div className="mt-12 space-y-8">
                <h3 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 flex items-center gap-2">
                  <Settings size={24} className="text-emerald-500" />
                  Key Technical Decisions
                </h3>
                <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                    {/* Operating Pressure */}
                    <div>
                      <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-2">Operating Pressure</span>
                      <p className="text-slate-800 font-medium">{project.keyTechnicalDecisions.operatingPressure}</p>
                    </div>

                    {/* Column Configuration */}
                    <div>
                      <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-2">Optimal Configuration</span>
                       <ul className="space-y-1 text-slate-700">
                         <li><span className="font-semibold text-emerald-600">{project.keyTechnicalDecisions.optimalConfiguration.theoreticalTrays}</span> Theoretical Trays</li>
                         <li><span className="font-semibold text-emerald-600">{project.keyTechnicalDecisions.optimalConfiguration.realTrays}</span> Real Trays (@{project.keyTechnicalDecisions.optimalConfiguration.trayEfficiencyPercent}% eff.)</li>
                         <li className="text-sm text-slate-500 mt-1">Multiplier: {project.keyTechnicalDecisions.optimalConfiguration.theoreticalStagesMultiplier}x min. stages</li>
                       </ul>
                    </div>

                    {/* Tray Locations */}
                    <div>
                      <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-2">Tray Locations</span>
                      <div className="flex gap-4">
                        <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                            <span className="text-xs text-slate-400 block">Feed Tray</span>
                            <span className="text-lg font-bold text-slate-800">{project.keyTechnicalDecisions.feedTrayLocation}</span>
                        </div>
                        <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                            <span className="text-xs text-slate-400 block">Side Draw</span>
                            <span className="text-lg font-bold text-slate-800">{project.keyTechnicalDecisions.propyleneSideDrawLocation}</span>
                        </div>
                      </div>
                    </div>

                    {/* Economics */}
                    <div>
                      <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-2">Economics & Energy</span>
                      <div className="space-y-2">
                         <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                             <span className="text-slate-600">Reboiler Duty</span>
                             <span className="font-bold text-slate-800">{project.keyTechnicalDecisions.reboilerDuty.value} {project.keyTechnicalDecisions.reboilerDuty.unit}</span>
                         </div>
                         <div className="flex justify-between items-center text-sm">
                             <span className="text-slate-600">Separation Cost</span>
                             <span className="font-bold text-emerald-600">{project.keyTechnicalDecisions.unitSeparationCost.value} {project.keyTechnicalDecisions.unitSeparationCost.currency} / {project.keyTechnicalDecisions.unitSeparationCost.per}</span>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Control & Operability */}
            {project.controlAndOperability && (
              <div className="mt-12 space-y-8">
                 <h3 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 flex items-center gap-2">
                  <Activity size={24} className="text-emerald-500" />
                  Control & Operability
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {/* Pressure Control */}
                   <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                      <h4 className="font-bold text-gray-800 mb-2 text-sm uppercase">Pressure Control</h4>
                      <p className="text-gray-600 text-sm">{project.controlAndOperability.pressureControl}</p>
                   </div>
                   
                    {/* Temperature Control */}
                   <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                      <h4 className="font-bold text-gray-800 mb-2 text-sm uppercase">Temp. Control</h4>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${project.controlAndOperability.temperatureControl.used ? 'bg-emerald-500' : 'bg-rose-400'}`}></div>
                        <span className="text-gray-600 text-sm">{project.controlAndOperability.temperatureControl.used ? 'Active' : 'Not Used'}</span>
                      </div>
                      <p className="text-gray-500 text-xs mt-2">{project.controlAndOperability.temperatureControl.reason}</p>
                   </div>

                   {/* Analyzers */}
                   <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                      <h4 className="font-bold text-gray-800 mb-2 text-sm uppercase">Analyzers</h4>
                      {project.controlAndOperability.compositionAnalyzers.online && (
                         <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded border border-blue-100 font-semibold">Online GC</span>
                      )}
                      <p className="text-gray-600 text-sm mt-2">{project.controlAndOperability.compositionAnalyzers.purpose}</p>
                   </div>

                    {/* Flow Controls */}
                   <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm md:col-span-2 lg:col-span-3">
                      <h4 className="font-bold text-gray-800 mb-3 text-sm uppercase">Flow Control Strategy</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.controlAndOperability.flowControls.map(fc => (
                          <span key={fc} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium capitalize">
                            {fc} Control
                          </span>
                        ))}
                         <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium capitalize">
                            Air Condenser Bypass ({project.controlAndOperability.airCondenserBypass.type})
                          </span>
                      </div>
                   </div>
                </div>
              </div>
            )}

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
          {project.keyAchievements && project.keyAchievements.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h2>
              <div className="grid grid-cols-1 gap-4">
                {project.keyAchievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-xl border border-gray-100 transition-all hover:bg-gray-50">
                    <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={24} />
                    <span className="text-gray-700 font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Navigation Footer */}
        <div className="mt-20 pt-10 border-t border-gray-100 flex items-center justify-between">
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
