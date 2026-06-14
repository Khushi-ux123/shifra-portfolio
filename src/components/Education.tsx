import React from 'react';
import { GraduationCap, Landmark, CheckCircle } from 'lucide-react';
import { educationData } from '../data';
import { motion } from 'motion/react';

export default function Education() {
  return (
    <motion.section 
      id="education" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-18 bg-gray-55/40 dark:bg-slate-900/10 border-t border-b border-gray-100 dark:border-slate-900 scroll-mt-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-extrabold tracking-tight font-display text-gray-900 dark:text-white" id="education-heading">
            Education Profile
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 dark:bg-blue-400 mx-auto mt-3 rounded-full" />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Academic foundation and specialized course work training.
          </p>
        </div>

        {/* Academic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="education-cards">
          {educationData.map((edu, idx) => {
            const isBtech = edu.degree.includes('Bachelor');
            return (
              <div 
                key={idx}
                className="p-6 bg-white dark:bg-slate-900/65 rounded-2xl border border-gray-150/40 dark:border-slate-850/50 hover:border-blue-500 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                id={`edu-card-${idx}`}
              >
                <div>
                  {/* Decorative Icon Panel */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100 dark:border-slate-855/30">
                    <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    {/* Grade Badge */}
                    <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 rounded-lg text-xs font-mono font-bold border border-emerald-100 dark:border-emerald-950/40">
                      {edu.grade}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-gray-900 dark:text-white font-display leading-tight">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-2 flex items-center gap-1">
                    <Landmark className="w-3.5 h-3.5 text-blue-500" />
                    {edu.institution}
                  </p>

                  {edu.details && (
                    <p className="text-xs text-gray-500 dark:text-gray-405 mt-4 leading-relaxed text-justify">
                      {edu.details}
                    </p>
                  )}
                </div>

                {isBtech && (
                  <div className="mt-6 pt-4 border-t border-gray-50 dark:border-slate-800/10 flex items-center gap-1.5 text-[10px] font-mono text-gray-400">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                    <span>Information Technology Stream</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
}
