import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data';
import { motion } from 'motion/react';

export default function Certifications() {
  return (
    <motion.section 
      id="certifications" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 bg-white dark:bg-slate-950 scroll-mt-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-extrabold tracking-tight font-display text-gray-900 dark:text-white" id="certifications-heading">
            Certifications & Workshops
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 dark:bg-blue-400 mx-auto mt-3 rounded-full" />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Specialized engineering trainings, certificates, and coding workshops.
          </p>
        </div>

        {/* Certifications Card Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" id="certifications-list">
          {certificationsData.map((cert, idx) => {
            const isHackathon = cert.title.toLowerCase().includes('hackathon');
            return (
              <div 
                key={idx}
                className="group relative p-6 bg-gray-50/50 dark:bg-slate-900/40 border border-gray-150/45 dark:border-slate-850/45 rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex items-start gap-4"
                id={`cert-card-${idx}`}
              >
                {/* Visual Icon Node */}
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-gray-100 dark:border-slate-850 text-blue-600 dark:text-blue-450 shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {isHackathon ? <Sparkles className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                  </div>
                </div>

                {/* Info and Year */}
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-extrabold text-base text-gray-900 dark:text-white font-display group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                      {cert.title}
                    </h3>
                    {cert.year && (
                      <span className="text-[10px] font-mono font-bold text-gray-400 dark:text-gray-500 block uppercase">
                        {cert.year}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                    Issued by: {cert.issuer}
                  </p>

                  <p className="text-xs text-gray-400 dark:text-gray-500 pt-2 leading-relaxed">
                    {isHackathon 
                      ? "Acquired intense algorithmic training and developed practical solutions under strict timelines alongside peers at IIT Delhi." 
                      : "Completed specialized industrial syllabus focused on Advanced Object-Oriented patterns, database queries, and files."
                    }
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
}
