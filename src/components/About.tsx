import React from 'react';
import { User, Terminal, Cpu, Database } from 'lucide-react';
import { aboutMe } from '../data';
import { motion } from 'motion/react';

export default function About() {
  const highlights = [
    {
      icon: Terminal,
      title: "Core Programming",
      desc: "Robust understanding of Object-Oriented Principles in Java, clean multi-threaded execution, and data workflows."
    },
    {
      icon: Cpu,
      title: "Full Stack Development",
      desc: "Building highly interactive frontend apps using React paired with robust Java / Advanced Java backend and MySQL databases."
    },
    {
      icon: Database,
      title: "Database Management",
      desc: "Skilled in organizing database records, framing relational SQL schema structures, and scripting query statements."
    }
  ];

  return (
    <motion.section 
      id="about" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 bg-gray-55/40 dark:bg-slate-900/10 border-t border-b border-gray-100 dark:border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight font-display text-gray-900 dark:text-white" id="about-heading">
            About Me
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 dark:bg-blue-400 mx-auto mt-3 rounded-full" />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            B.Tech Information Technology graduate with a passion for software craftsmanship.
          </p>
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Main Biography Column */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white flex items-center gap-2">
              <User className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              Who is Shifra Panwar?
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base italic border-l-4 border-blue-600 dark:border-blue-450 pl-4 py-1">
              "{aboutMe.intro}"
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              {aboutMe.details}
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-slate-800 shadow-xs">
                <span className="text-2xl font-bold font-display text-blue-600 dark:text-blue-400 block">8.31 /10</span>
                <span className="text-xs font-mono text-gray-500 block uppercase pt-1">B.Tech CGPA</span>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-slate-800 shadow-xs">
                <span className="text-2xl font-bold font-display text-indigo-600 dark:text-teal-400 block">2024</span>
                <span className="text-xs font-mono text-gray-550 block uppercase pt-1">Internship Completed</span>
              </div>
            </div>
          </div>

          {/* Core Strengths Columns */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <h4 className="text-md font-mono uppercase tracking-widest text-blue-600 dark:text-blue-405 font-bold mb-2">
              Core Competencies & Focus
            </h4>
            
            <div className="space-y-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 bg-white dark:bg-slate-900/60 rounded-xl border border-gray-150/40 dark:border-slate-850/40 hover:border-gray-300 dark:hover:border-slate-700 hover:shadow-md transition duration-300 flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-lg text-blue-600 dark:text-blue-400">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-gray-900 dark:text-white font-display">
                        {item.title}
                      </h5>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </motion.section>
  );
}
