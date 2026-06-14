import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Sparkles, BookOpen, Layers, Heart, Database, AlertCircle } from 'lucide-react';
import { projectsData } from '../data';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'web' | 'java'>('all');

  const getFilteredProjects = () => {
    if (filter === 'all') return projectsData;
    return projectsData.filter(proj => proj.category === filter);
  };

  const getIconForProject = (title: string) => {
    if (title.toLowerCase().includes('mindwell')) {
      return <Heart className="w-5 h-5 text-rose-500 fill-rose-500/25" />;
    }
    return <BookOpen className="w-5 h-5 text-blue-500" />;
  };

  return (
    <motion.section 
      id="projects" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 bg-white dark:bg-slate-950 scroll-mt-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-extrabold tracking-tight font-display text-gray-900 dark:text-white" id="projects-heading">
            Featured Projects
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 dark:bg-blue-400 mx-auto mt-3 rounded-full" />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            A selection of software engineering prototypes and applications.
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex gap-2.5 mb-10 justify-center" id="project-filters">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-slate-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-800'
            }`}
            id="filter-projects-all"
          >
            All Stacks
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              filter === 'web'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-slate-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-800'
            }`}
            id="filter-projects-web"
          >
            React & AI
          </button>
          <button
            onClick={() => setFilter('java')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              filter === 'java'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-slate-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-800'
            }`}
            id="filter-projects-java"
          >
            Java & Relational SQL
          </button>
        </div>

        {/* Project Card Grids Loop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch" id="projects-grid">
          {getFilteredProjects().map((proj, idx) => {
            const isWeb = proj.category === 'web';
            return (
              <div 
                key={idx}
                className="group relative bg-gray-50/50 dark:bg-slate-900/35 border border-gray-150/45 dark:border-slate-850/45 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-blue-500 dark:hover:border-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                id={`project-card-${proj.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div>
                  {/* Top line panel */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-gray-100 dark:border-slate-850 shadow-xs">
                        {getIconForProject(proj.title)}
                      </div>
                      <span className="text-[10px] font-mono tracking-wider uppercase text-blue-600 dark:text-blue-400 font-bold">
                        {isWeb ? "Web App & AI API" : "Database & Core Java"}
                      </span>
                    </div>
                    {/* Github link symbol */}
                    <a 
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white bg-white dark:bg-slate-950 rounded-lg border border-gray-100 dark:border-slate-850 hover:shadow-sm hover:border-gray-200 transition"
                      title="Inspect project codebase"
                      id={`project-github-link-${idx}`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white font-display group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                      {proj.title}
                    </h3>
                    {proj.subtitle && (
                      <p className="text-xs font-mono text-gray-400 dark:text-gray-550">
                        {proj.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Bullet description paragraph lists */}
                  <div className="mt-5 space-y-3">
                    {proj.description.map((bullet, bulletIdx) => (
                      <p key={bulletIdx} className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                        {bullet}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Tech Tags & Action Footer */}
                <div className="mt-8 pt-5 border-t border-gray-100 dark:border-slate-850/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.techStack.map((tech, techIdx) => (
                      <span 
                        key={techIdx}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-gray-100 dark:bg-slate-800/60 border border-gray-200/20 dark:border-slate-800/25 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm hover:shadow-md hover:shadow-blue-500/10 active:scale-98 transition duration-200 cursor-pointer w-fit"
                    id={`project-view-code-${proj.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Code</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
}
