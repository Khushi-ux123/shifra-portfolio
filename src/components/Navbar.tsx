import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Briefcase, FileText, Smartphone, User, Star, Award, GraduationCap, Mail } from 'lucide-react';
import { personalInfo } from '../data';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { label: 'About', id: 'about', icon: User },
    { label: 'Skills', id: 'skills', icon: Star },
    { label: 'Experience', id: 'experience', icon: Briefcase },
    { label: 'Projects', id: 'projects', icon: FileText },
    { label: 'Education', id: 'education', icon: GraduationCap },
    { label: 'Achievements', id: 'achievements', icon: Award },
    { label: 'Contact', id: 'contact', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      // Track active section on scroll
      const scrollPosition = window.scrollY + 120;
      const sections = ['hero', ...navItems.map(item => item.id)];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50 pointer-events-none print:hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-400 dark:from-blue-500 dark:via-cyan-400 dark:to-teal-500 transition-all duration-75 ease"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav 
        id="main-navbar"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled 
            ? 'glass-navbar shadow-md py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Name */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer group flex flex-col"
              id="nav-logo"
            >
              <span className="text-xl font-bold font-display tracking-tight text-gray-900 dark:text-white transition-colors">
                Shifra<span className="text-blue-600 dark:text-blue-400">.</span>
              </span>
              <span className="text-[10px] font-mono tracking-wider uppercase text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Full Stack Web Dev
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all duration-200 ${
                      isActive 
                        ? 'bg-blue-50/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 font-bold' 
                        : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/40'
                    }`}
                    id={`nav-link-${item.id}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Actions Panel */}
            <div className="hidden md:flex items-center gap-3">
              {/* Download Resume Direct Trigger */}
              <a
                href="/shifra_resume.pdf"
                download="Shifra_Panwar_Resume.pdf"
                className="px-4 py-2 text-xs font-semibold flex items-center gap-1.5 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-200 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 shadow-xs transition"
                id="header-download-resume-btn"
              >
                <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Download Resume</span>
              </a>

              {/* Theme Toggler */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-600 dark:text-amber-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                id="desktop-theme-toggle"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>

            {/* Mobile Controls Drawer Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-amber-400 bg-white dark:bg-gray-900 transition"
                id="mobile-theme-toggle"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
                id="mobile-hamburger-btn"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div 
          className={`md:hidden fixed inset-x-0 top-[60px] glass shadow-xl transition-all duration-300 transform origin-top ${
            isOpen ? 'scale-y-100 opacity-100 visible h-auto border-b border-gray-200 dark:border-gray-800' : 'scale-y-0 opacity-0 invisible h-0 overflow-hidden'
          }`}
          id="mobile-drawer"
        >
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 text-sm font-semibold rounded-lg flex items-center gap-2.5 transition ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/40'
                  }`}
                  id={`mobile-nav-link-${item.id}`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            
            <div className="pt-4 border-t border-gray-200/50 dark:border-gray-800/40 flex flex-col gap-2.5">
              <a
                href="/shifra_resume.pdf"
                download="Shifra_Panwar_Resume.pdf"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 px-4 text-center text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm flex items-center justify-center gap-2 transition"
                id="mobile-resume-pdf-btn"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
