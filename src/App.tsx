import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ThreeDBackground from './components/ThreeDBackground';
import { ArrowUp, Heart, Github, Linkedin, Mail, Terminal, FileText } from 'lucide-react';
import { personalInfo } from './data';

export default function App() {
  // Premium tech portfolios default beautifully to dark-mode
  const [isDark, setIsDark] = useState<boolean>(true);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [isBouncing, setIsBouncing] = useState<boolean>(false);

  useEffect(() => {
    // Check local preferences
    const savedTheme = localStorage.getItem('shifra_portfolio_theme');
    if (savedTheme) {
      const darkSelected = savedTheme === 'dark';
      setIsDark(darkSelected);
      applyTheme(darkSelected);
    } else {
      // Default to dark mode for immediate premium aesthetic, but check system preferences
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(true); // Default premium choice
      applyTheme(true);
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    applyTheme(nextDark);
    localStorage.setItem('shifra_portfolio_theme', nextDark ? 'dark' : 'light');
  };

  const scrollToTop = () => {
    setIsBouncing(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      setIsBouncing(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-gray-800 dark:text-gray-100 selection:bg-blue-600/30 dark:selection:bg-blue-400/30 transition-colors duration-300">
      
      {/* Dynamic SEO Meta & Social Sharing Tag Injector */}
      <SEO />

      {/* 3D-inspired dynamic particle & grid background overlay */}
      <ThreeDBackground />

      <header className="relative z-40 print:hidden">
        <Navbar 
          isDark={isDark} 
          toggleTheme={toggleTheme} 
        />
      </header>

      <main className="relative z-10 print:static print:-mt-24">
        
        {/* Render interactive sections */}
        <Hero />
        
        <About />
        
        <Skills />
        
        <Experience />
        
        <Projects />
        
        <Education />
        
        <Certifications />
        
        <Achievements />
        
        <Contact />

      </main>

      {/* Global Page Footer Component */}
      <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-900 py-12 relative z-10 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
            
            {/* Column 1: Small Logo / Title */}
            <div>
              <p className="text-md font-bold text-gray-900 dark:text-white font-display">
                Shifra Panwar<span className="text-blue-600 dark:text-blue-400">.</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Software Developer | Full Stack & Java Specialist
              </p>
            </div>

            {/* Column 2: Professional copyright credits */}
            <div className="md:text-right space-y-1">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Shifra Panwar. All rights reserved.
              </p>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 flex items-center justify-center md:justify-end gap-1 font-mono">
                Crafted with React & Tailwind 
              </p>
            </div>

          </div>
        </div>
      </footer>

      {/* Modern Floating Scroll-To-Top Button (Framer Motion) */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          animate={isBouncing ? { y: [0, -14, 4, -3, 0], scale: [1, 1.2, 0.9, 1.05, 1] } : { y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          whileHover={{ scale: 1.10 }}
          whileTap={{ scale: 0.90 }}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg cursor-pointer z-40 print:hidden"
          title="Scroll back to top"
          id="scroll-to-top-button"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}



    </div>
  );
}
