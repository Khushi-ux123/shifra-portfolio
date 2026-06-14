import React from 'react';
import { Calendar, Briefcase, ChevronRight, Sparkles } from 'lucide-react';
import { experienceData } from '../data';
import { motion } from 'motion/react';

export default function Experience() {
  return (
    <motion.section 
      id="experience" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 bg-gray-55/40 dark:bg-slate-900/10 border-t border-b border-gray-100 dark:border-slate-900 scroll-mt-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight font-display text-gray-900 dark:text-white" id="experience-heading">
            Professional Experience
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 dark:bg-blue-400 mx-auto mt-3 rounded-full" />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Industrial projects and engineering internships completed.
          </p>
        </div>

        {/* Timeline Path Layout */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-slate-800 transform sm:-translate-x-1/2" />

          {/* Timeline Node List */}
          {experienceData.map((exp, idx) => (
            <div 
              key={idx} 
              className="relative flex flex-col sm:flex-row items-stretch gap-6 sm:gap-12 mb-12 last:mb-0"
              id={`experience-node-${idx}`}
            >
              {/* Node Bullet Mark */}
              <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center transform -translate-x-3.5 sm:-translate-x-4 border-4 border-white dark:border-slate-950 z-10 shadow-md">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Left Column (Visual spacing or period info on larger desktop viewports) */}
              <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:text-right flex flex-col justify-start">
                <div className="sm:pr-8 pt-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-900/20 sm:flex-row-reverse">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <p className="text-xs font-mono text-gray-400 dark:text-gray-500 mt-2 block sm:hidden md:block">
                     Mohali, India | Hybrid Training
                  </p>
                </div>
              </div>

              {/* Right Column (Actual Card details) */}
              <div className="w-full sm:w-1/2 pl-12 sm:pl-8">
                <div 
                  className="p-6 md:p-8 bg-white dark:bg-slate-900/50 border border-gray-150/45 dark:border-slate-850/45 hover:border-blue-400 dark:hover:border-slate-700 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300"
                  id={`experience-card-${idx}`}
                >
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white font-display">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 font-sans">
                      {exp.company}
                    </p>
                  </div>

                  {/* Bullet Lists */}
                  <ul className="mt-5 space-y-3.5 text-xs text-gray-600 dark:text-gray-300">
                    {exp.bullets.map((b, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Highlight technologies active during experience */}
                  <div className="mt-6 pt-4 border-t border-gray-50 dark:border-slate-850/40 flex flex-wrap gap-1.5 items-center">
                    <span className="text-[10px] font-mono text-gray-500 dark:text-gray-450 mr-2 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-blue-500" /> Key Stack:
                    </span>
                    <span className="px-2 py-0.5 bg-gray-100 dark:bg-slate-800 rounded-md text-[10px] font-mono text-gray-650 dark:text-gray-300">Core Java</span>
                    <span className="px-2 py-0.5 bg-gray-100 dark:bg-slate-800 rounded-md text-[10px] font-mono text-gray-650 dark:text-gray-300">MySQL</span>
                    <span className="px-2 py-0.5 bg-gray-100 dark:bg-slate-800 rounded-md text-[10px] font-mono text-gray-650 dark:text-gray-300 font-semibold">OOP Basics</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
