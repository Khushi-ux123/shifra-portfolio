import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Code, Layers, ShieldCheck, Settings, Brain, Trophy } from 'lucide-react';
import { skillsData } from '../data';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', ...skillsData.map(cat => cat.category)];

  const getFilteredSkills = () => {
    if (activeTab === 'All') {
      return skillsData;
    }
    return skillsData.filter(cat => cat.category === activeTab);
  };

  const getIconForCategory = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'programming languages':
        return <Code className="w-5 h-5 text-amber-500" />;
      case 'frontend dev':
        return <Layers className="w-5 h-5 text-blue-500" />;
      case 'backend & db':
        return <ShieldCheck className="w-5 h-5 text-emerald-500" />;
      case 'tools & platforms':
        return <Settings className="w-5 h-5 text-purple-500" />;
      case 'soft skills':
        return <Brain className="w-5 h-5 text-pink-500" />;
      default:
        return <Star className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <motion.section 
      id="skills" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 bg-white dark:bg-slate-950 scroll-mt-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-extrabold tracking-tight font-display text-gray-900 dark:text-white" id="skills-heading">
            Skills Inventory
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 dark:bg-blue-400 mx-auto mt-3 rounded-full" />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Structured competency ratings with interactive progress displays.
          </p>
        </div>

        {/* Category Filters (Scrollable on Mobile) */}
        <div className="flex gap-2 mb-10 overflow-x-auto no-scrollbar pb-2 justify-start md:justify-center" id="skills-tabs">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex-shrink-0 ${
                activeTab === cat
                  ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-md hover:bg-blue-700 dark:hover:bg-blue-600'
                  : 'bg-gray-100 dark:bg-slate-900 text-gray-600 dark:text-gray-300 hover:bg-gray-200 hover:text-black dark:hover:bg-slate-800 dark:hover:text-white'
              }`}
              id={`skills-tab-${cat.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Lists Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFilteredSkills().map((categoryBlock, rootIdx) => (
            <div 
              key={rootIdx} 
              className="p-6 bg-gray-50/50 dark:bg-slate-900/40 rounded-2xl border border-gray-150/40 dark:border-slate-850/50 shadow-xs flex flex-col justify-between hover:bg-white dark:hover:bg-slate-900/80 hover:shadow-lg hover:border-gray-250 dark:hover:border-slate-750 transition-all duration-300 transform hover:-translate-y-0.5 group"
              id={`skill-card-${categoryBlock.category.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-2.5 border-b border-gray-200/50 dark:border-slate-800/50 group-hover:border-blue-500/30 transition-colors">
                  {getIconForCategory(categoryBlock.category)}
                  <h3 className="font-bold text-base text-gray-900 dark:text-white font-display uppercase tracking-wide group-hover:text-black dark:group-hover:text-blue-400 transition-colors">
                    {categoryBlock.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {categoryBlock.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-1.5 p-1 -mx-1 rounded-lg transition-colors duration-200 hover:bg-gray-100/50 dark:hover:bg-slate-800/40 group/skill">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white group-hover/skill:text-black dark:group-hover/skill:text-white transition-colors duration-200">{skill.name}</span>
                        <span className="font-mono text-gray-500 dark:text-gray-400 group-hover/skill:text-black dark:group-hover/skill:text-white transition-colors duration-200">{skill.level}%</span>
                      </div>
                      
                      {/* Visual Progress Bar */}
                      <div className="w-full h-2 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-500 dark:to-teal-500 rounded-full transition-all duration-750 ease-out group-hover/skill:brightness-105"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Display visual rating context */}
              <div className="mt-6 pt-3 border-t border-gray-100 dark:border-slate-850/30 flex items-center justify-between text-[10px] font-mono text-gray-500">
                <span className="flex items-center gap-1 group-hover:text-gray-700 dark:group-hover:text-gray-305 transition-colors">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> Professional Level
                </span>
                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-305 transition-colors">Active Stack</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
