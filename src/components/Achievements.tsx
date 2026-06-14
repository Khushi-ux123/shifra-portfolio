import React from 'react';
import { Users, Briefcase, Flame } from 'lucide-react';
import { achievementsData } from '../data';
import { motion } from 'motion/react';

export default function Achievements() {
  const getIconForAchievement = (title: string) => {
    const term = title.toLowerCase();
    if (term.includes('representative')) {
      return <Users className="w-6 h-6 text-blue-600 dark:text-blue-450" />;
    } else if (term.includes('placement')) {
      return <Briefcase className="w-6 h-6 text-indigo-600 dark:text-teal-400" />;
    }
    return <Flame className="w-6 h-6 text-amber-500" />;
  };

  return (
    <motion.section 
      id="achievements" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-18 bg-gray-55/40 dark:bg-slate-900/10 border-t border-b border-gray-100 dark:border-slate-900 scroll-mt-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-extrabold tracking-tight font-display text-gray-900 dark:text-white" id="achievements-heading">
            Key Achievements & Leadership
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 dark:bg-blue-400 mx-auto mt-3 rounded-full" />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Activities showing dedication, organization, and leadership capacity.
          </p>
        </div>

        {/* Bento Board Layout of Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto" id="achievements-cards-grid">
          {achievementsData.map((ach, idx) => (
            <div 
              key={idx}
              className="group p-6 bg-white dark:bg-slate-900/60 border border-gray-150/45 dark:border-slate-850/45 rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              id={`achievement-card-${idx}`}
            >
              <div className="space-y-4">
                {/* Graphic badge icon */}
                <div className="p-3 bg-blue-50/50 dark:bg-blue-950/20 rounded-xl border border-blue-100/10 dark:border-blue-900/10 text-blue-600 dark:text-blue-400 self-start inline-block">
                  {getIconForAchievement(ach.title)}
                </div>

                <div className="space-y-2">
                  <h3 className="font-extrabold text-base text-gray-900 dark:text-white font-display group-hover:text-blue-600 dark:group-hover:text-blue-400 transition ml-0.5">
                    {ach.title}
                  </h3>
                  
                  {ach.description && (
                    <p className="text-xs text-gray-555 dark:text-gray-400 leading-relaxed text-justify">
                      {ach.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Node Badge bottom element */}
              <div className="mt-6 pt-3.5 border-t border-gray-100 dark:border-slate-850/30 text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                ⭐ Extracurricular Merit
              </div>
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
