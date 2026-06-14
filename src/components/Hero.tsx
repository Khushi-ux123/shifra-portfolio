import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Terminal, Play, ArrowRight, Download, Eye, Check, Copy, Phone } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [logMessages, setLogMessages] = useState<string[]>([]);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [showResumeDropdown, setShowResumeDropdown] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  const runCode = () => {
    if (isRunning) return;
    setIsRunning(true);
    setHasRun(true);
    setLogMessages([]);
    
    const logs = [
      "javac DeveloperProfile.java ...",
      "Compiling Java class standard bytecode ...",
      "java DeveloperProfile ...",
      "----------------------------------------",
      "👤 Name: " + personalInfo.name,
      "🚀 Current Stage: Graduate Seeking Roles",
      "⚡ Focus Area: Web & Java Applications",
      "✨ Vision: Building practical custom software.",
      "----------------------------------------",
      "SUCCESS: Initialized and ready to deploy!"
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        setLogMessages(prev => [...prev, log]);
        if (index === logs.length - 1) {
          setIsRunning(false);
        }
      }, (index + 1) * 350);
    });
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 flex flex-col justify-center items-center overflow-hidden bg-radial from-blue-50/20 via-white to-white dark:from-slate-900/30 dark:via-slate-950 dark:to-slate-950"
    >
      {/* 3D Style Ambient Spatial Layout Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Layer 1: Radial Depth Lighting */}
        <div className="absolute inset-0 bg-radial from-blue-600/10 via-transparent to-transparent opacity-60 dark:opacity-40 scale-150 blur-[100px]" />
        
        {/* Layer 2: Glowing 3D Orb Shadows */}
        <div className="absolute top-[20%] left-[15%] w-[350px] h-[350px] bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-gradient-to-br from-teal-500/10 to-blue-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '12s' }} />

        {/* Layer 3: Interactive 3D CSS Geometrics (Rotating & Floating with perspective) */}
        <div className="absolute inset-0 flex justify-center items-center opacity-30 dark:opacity-40" style={{ perspective: '1200px' }}>
          {/* Large 3D CSS Ring/Torus simulation with CSS Transforms */}
          <div 
            className="absolute border-2 border-dashed border-blue-500/20 dark:border-blue-400/20 rounded-full animate-spin"
            style={{ 
              width: '600px', 
              height: '600px', 
              transform: 'rotateX(65deg) rotateY(15deg) rotateZ(0deg)',
              animationDuration: '30s'
            }}
          />
          <div 
            className="absolute border border-indigo-500/15 rounded-full animate-spin"
            style={{ 
              width: '450px', 
              height: '450px', 
              transform: 'rotateX(-45deg) rotateY(-25deg) rotateZ(0deg)',
              animationDuration: '24s',
              animationDirection: 'reverse'
            }}
          />

          {/* Tiny 3D Glassmorphic Floaties using CSS perspective offsets */}
          <div 
            className="absolute w-12 h-12 glass shadow-lg rounded-xl opacity-80 animate-bounce"
            style={{ 
              top: '15%',
              right: '25%',
              transform: 'rotateX(30deg) rotateY(45deg) translateZ(100px)',
              animationDuration: '6s'
            }}
          />
          <div 
            className="absolute w-16 h-16 glass shadow-2xl rounded-2xl opacity-70 animate-bounce"
            style={{ 
              bottom: '25%',
              left: '20%',
              transform: 'rotateX(-25deg) rotateY(-35deg) translateZ(150px)',
              animationDuration: '8s',
              animationDirection: 'reverse'
            }}
          />

          {/* Glowing depth perspective points */}
          <div className="absolute w-2 h-2 rounded-full bg-blue-500/40 animate-ping" style={{ top: '30%', left: '40%' }} />
          <div className="absolute w-3 h-3 rounded-full bg-teal-500/30 animate-pulse" style={{ bottom: '40%', right: '35%' }} />
        </div>
      </div>

      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Credentials Layout */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200/50 dark:border-blue-850/30 text-blue-700 dark:text-blue-400 font-mono text-xs font-semibold">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Available for immediate hiring opportunities
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-gray-900 dark:text-white" id="hero-title">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">{personalInfo.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-300 font-display font-medium max-w-xl">
                {personalInfo.role}
              </p>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
                Software Developer passionate about building scalable web applications and solving real-world problems through technology. Focused on Java engineering and responsive front-end layouts.
              </p>
            </div>

            {/* Quick Contact Strips */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 font-mono text-xs text-gray-400 dark:text-gray-500">
              <span className="flex items-center gap-1.5 text-gray-650 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition cursor-default">
                📍 {personalInfo.location}
              </span>
              <button 
                onClick={handleCopyPhone}
                className="flex items-center gap-1.5 text-gray-650 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition hover:underline"
                title="Click to copy phone number"
                id="hero-phone-cta"
              >
                <Phone className="w-3.5 h-3.5 text-green-500" />
                <span>{personalInfo.phone}</span>
                {phoneCopied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3 text-gray-400" />}
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="/shifra_resume.pdf"
                download="Shifra_Panwar_Resume.pdf"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-bold text-sm shadow-md hover:shadow-lg hover:shadow-blue-500/10 active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer"
                id="hero-download-resume-btn"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
              
              <button
                onClick={() => handleScrollTo('projects')}
                className="px-6 py-3.5 rounded-xl border border-gray-300 dark:border-gray-750 hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900/40 text-gray-700 dark:text-gray-200 font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer"
                id="hero-view-projects-btn"
              >
                <Eye className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>View Projects</span>
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="px-6 py-3.5 rounded-xl border border-gray-300 dark:border-gray-750 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-50/20 dark:hover:bg-blue-950/20 text-gray-700 dark:text-gray-200 font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer"
                id="hero-contact-me-btn"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Social Channels Panel */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-200/60 dark:border-gray-800/60 self-start">
              <p className="text-xs font-mono text-gray-500">Find me on:</p>
              <div className="flex items-center gap-2.5">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 sm:p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 hover:shadow-xs transition"
                  title="Shoot an email"
                  id="hero-email-social"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a 
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 hover:shadow-xs transition"
                  title="Check git repos"
                  id="hero-github-social"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href={personalInfo.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 hover:shadow-xs transition"
                  title="Connect on LinkedIn"
                  id="hero-linkedin-social"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Java Compiler Ide Code Presentation Widget */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div 
              className="w-full max-w-md bg-slate-900 text-slate-100 rounded-xl overflow-hidden shadow-2xl border border-slate-800/80 font-mono text-xs flex flex-col relative"
              id="hero-java-ide-widget"
            >
              {/* IDE Top Window Panel */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/70 border-b border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                  <span className="text-[10px] text-slate-450 ml-2 select-none flex items-center gap-1 font-mono">
                    <Terminal className="w-3 h-3 text-slate-400" />
                    DeveloperProfile.java
                  </span>
                </div>
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className={`px-2.5 py-1 text-[11px] font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-md flex items-center gap-1 shadow-xs active:scale-95 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                  id="ide-run-btn"
                >
                  <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} fill="currentColor" />
                  <span>{isRunning ? 'Running...' : 'Compile & Run'}</span>
                </button>
              </div>

              {/* Text IDE Canvas lines */}
              <div className="flex-1 p-5 leading-relaxed overflow-x-auto text-[11px] sm:text-xs text-slate-300 max-h-[280px]">
                <div className="flex gap-4">
                  {/* Line Numbers */}
                  <div className="text-slate-650 text-right select-none pr-1 border-r border-slate-800/40">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                  </div>
                  {/* Code Line details */}
                  <div className="flex-1 whitespace-pre">
                    <div><span className="text-pink-400">package</span> com.shifrapanwar;</div>
                    <div><span className="text-pink-400">public class</span> <span className="text-blue-300">Developer</span> &#123;</div>
                    <div>  <span className="text-pink-400">public static void</span> <span className="text-teal-300">main</span>(String[] args) &#123;</div>
                    <div>    <span className="text-teal-400">String</span> name = <span className="text-emerald-400">"{personalInfo.name}"</span>;</div>
                    <div>    <span className="text-teal-400">String</span> role = <span className="text-emerald-400">"Full Stack Web"</span>;</div>
                    <div>    <span className="text-teal-400">String</span> lang = <span className="text-emerald-400">"Java & JS core specialist"</span>;</div>
                    <div>    System.out.<span className="text-teal-300">println</span>(<span className="text-amber-300">"Building clean code!"</span>);</div>
                    <div>  &#125;</div>
                    <div>&#125;</div>
                  </div>
                </div>
              </div>

              {/* IDE Output Terminal Area */}
              <div className="bg-slate-950 p-4 border-t border-slate-800/80 min-h-[140px] text-[10px] text-slate-400 font-mono">
                <div className="flex items-center justify-between text-slate-500 uppercase tracking-widest text-[9px] mb-2 font-bold pb-1.5 border-b border-slate-900">
                  <span>Compilation output log:</span>
                  <span>Console terminal</span>
                </div>
                
                {/* Simulated build system log lists */}
                {!hasRun ? (
                  <div className="text-slate-500 italic flex items-center justify-center pt-4 h-[80px]">
                    Click "Compile & Run" above to trigger the compiler...
                  </div>
                ) : (
                  <div className="space-y-1 h-[100px] overflow-y-auto no-scrollbar scroll-smooth">
                    {logMessages.map((msg, i) => {
                      const isSuccess = msg.includes("SUCCESS");
                      const isCommand = msg.startsWith("java") || msg.startsWith("javac");
                      return (
                        <div 
                          key={i} 
                          className={`${
                            isSuccess 
                              ? 'text-green-400 font-bold' 
                              : isCommand 
                              ? 'text-blue-400' 
                              : 'text-slate-350'
                          }`}
                        >
                          {msg.startsWith("java") || msg.startsWith("javac") ? "$ " : ""}
                          {msg}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
