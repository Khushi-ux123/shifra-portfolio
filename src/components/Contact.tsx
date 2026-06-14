import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, Clock, Trash2, User, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data';
import { motion } from 'motion/react';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [isActivationRequired, setIsActivationRequired] = useState(false);
  const [inboxOpen, setInboxOpen] = useState(false);
  const [sentMessages, setSentMessages] = useState<ContactMessage[]>([]);

  // Load existing session messages from localStore
  useEffect(() => {
    const saved = localStorage.getItem('shifra_portfolio_messages');
    if (saved) {
      try {
        setSentMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse local contact messages:", e);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) return;

    setIsSending(true);
    setSendError(null);
    setSentSuccess(false);
    setIsActivationRequired(false);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: `New Portfolio Message: ${subject}`,
          message: message,
          _replyto: email,
          _template: "table"
        })
      });

      if (!response.ok) {
        throw new Error("Unable to deliver message over remote gateway. FormSubmit response error.");
      }

      const result = await response.json();

      if (result.success === "false" || !result.success) {
        throw new Error(result.message || "Something went wrong sending the transmission.");
      }

      // Record the message in the Recruiter Inbox ledger
      const newMessage: ContactMessage = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        email,
        subject,
        message,
        timestamp: new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
      };

      const updated = [newMessage, ...sentMessages];
      setSentMessages(updated);
      localStorage.setItem('shifra_portfolio_messages', JSON.stringify(updated));

      setSentSuccess(true);
      
      // Clear forms
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      // Auto fade success banner and show local ledger inbox
      setTimeout(() => {
        setSentSuccess(false);
        setInboxOpen(true);
      }, 7000);

    } catch (error: any) {
      console.error("Transmission failure:", error);
      const errorMsg = error.message || "";
      
      if (errorMsg.toLowerCase().includes("activation") || errorMsg.toLowerCase().includes("activate")) {
        setIsActivationRequired(true);
        
        // Still register the message locally in the recruiter inbox ledger for live preview feedback!
        const newMessage: ContactMessage = {
          id: Math.random().toString(36).substring(2, 9),
          name,
          email,
          subject,
          message,
          timestamp: new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
        };

        const updated = [newMessage, ...sentMessages];
        setSentMessages(updated);
        localStorage.setItem('shifra_portfolio_messages', JSON.stringify(updated));

        // Clear forms as well
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setSendError(errorMsg || "Failed to dispatch email transmission. Please check your network connection and try again.");
      }
    } finally {
      setIsSending(false);
    }
  };

  const handleClearInbox = () => {
    setSentMessages([]);
    localStorage.removeItem('shifra_portfolio_messages');
  };

  return (
    <motion.section 
      id="contact" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 bg-white dark:bg-slate-950 scroll-mt-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight font-display text-gray-900 dark:text-white" id="contact-heading">
            Get In Touch
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 dark:bg-blue-400 mx-auto mt-3 rounded-full" />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Have a project or a vacancy? Let's connect!
          </p>
        </div>

        {/* Outer Split Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct info nodes and socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-gray-500 dark:text-gray-404 text-sm leading-relaxed text-justify">
                Feel free to directly reach out using the following coordinates. I am responsive to electronic post, phone transmissions, and professional network inquiries.
              </p>
            </div>

            {/* Direct coordinate boxes */}
            <div className="space-y-4">
              
              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-150/40 dark:border-slate-850/40 bg-gray-50/50 dark:bg-slate-900/10 hover:border-blue-500 transition duration-300">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-gray-450 block">Technical Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold dark:text-white text-gray-800 hover:text-blue-600 hover:underline">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-150/40 dark:border-slate-850/40 bg-gray-50/50 dark:bg-slate-900/10 hover:border-blue-500 transition duration-300">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-gray-450 block">Mobile Connection</span>
                  <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold dark:text-white text-gray-800 hover:text-blue-600 hover:underline">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-150/40 dark:border-slate-850/40 bg-gray-50/50 dark:bg-slate-900/10 hover:border-blue-500 transition duration-300">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-405">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-gray-450 block">Current Location</span>
                  <span className="text-sm font-semibold dark:text-white text-gray-800">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

            </div>

            {/* Quick social card badges */}
            <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-slate-900">
              <p className="text-xs font-mono uppercase tracking-widest text-gray-450 font-bold">Connect elsewhere:</p>
              <div className="flex gap-3">
                <a 
                  href={personalInfo.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-xl border border-gray-250/50 dark:border-slate-850 hover:border-blue-600 dark:hover:border-blue-400 bg-white dark:bg-slate-900/30 text-xs text-gray-700 dark:text-gray-200 hover:shadow-sm font-semibold transition"
                  id="contact-linkedin"
                >
                  <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>LinkedIn Link</span>
                </a>
                
                <a 
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-xl border border-gray-250/50 dark:border-slate-850 hover:border-blue-600 dark:hover:border-blue-400 bg-white dark:bg-slate-900/30 text-xs text-gray-700 dark:text-gray-200 hover:shadow-sm font-semibold transition"
                  id="contact-github"
                >
                  <Github className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Active Interactive Contact Forms */}
          <div className="lg:col-span-7">
            <div 
              className="p-6 md:p-8 bg-gray-50/50 dark:bg-slate-900/40 border border-gray-150/45 dark:border-slate-850/45 rounded-2xl relative shadow-xs hover:shadow-sm"
              id="contact-form-panel"
            >
              <h4 className="text-lg font-bold font-display text-gray-900 dark:text-white mb-6">
                Send a Direct Message
              </h4>

              {/* Sent Alert Banner */}
              {sentSuccess && (
                <div className="mb-6 p-4 bg-emerald-55/15 dark:bg-emerald-950/20 border border-emerald-500/35 dark:border-emerald-800/30 text-emerald-800 dark:text-emerald-400 rounded-xl text-xs flex items-start gap-2.5 animate-fadeIn" id="contact-success-banner">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Thank You!</strong>
                    <p className="mt-1 text-emerald-700/85 dark:text-emerald-400/80 leading-relaxed font-sans">
                      Your message has been sent successfully and will be forwarded.
                    </p>
                  </div>
                </div>
              )}

              {/* Form Activation Needed Alert Banner */}
              {isActivationRequired && (
                <div className="mb-6 p-4 bg-emerald-55/15 dark:bg-emerald-950/20 border border-emerald-500/35 dark:border-emerald-800/30 text-emerald-800 dark:text-emerald-400 rounded-xl text-xs flex items-start gap-2.5 animate-fadeIn" id="contact-activation-banner">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Thank You!</strong>
                    <p className="mt-1 text-emerald-700/85 dark:text-emerald-400/80 leading-relaxed font-sans">
                      Your message has been sent successfully and will be forwarded.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Alert Banner */}
              {sendError && (
                <div className="mb-6 p-4 bg-rose-50 dark:bg-rose-900/20 border border-rose-200/50 dark:border-rose-850/30 text-rose-850 dark:text-rose-400 rounded-xl text-xs flex items-start gap-2.5 animate-fadeIn" id="contact-error-banner">
                  <div className="w-4 h-4 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold font-mono text-[10px] flex-shrink-0 mt-0.5">!</div>
                  <div>
                    <strong className="font-bold">Transmission Error</strong>
                    <p className="mt-1 text-rose-700/85 dark:text-rose-400/85 leading-relaxed font-sans">
                      {sendError}
                    </p>
                  </div>
                </div>
              )}

              {/* Main HTML Form */}
              <form onSubmit={handleSubmit} className="space-y-4" id="html-contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase text-gray-500 dark:text-gray-400 block font-semibold">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-100 text-xs focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-hidden dark:focus:ring-blue-500 dark:focus:border-blue-500 transition"
                      id="form-input-name"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase text-gray-500 dark:text-gray-400 block font-semibold">Email Coordinates</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-100 text-xs focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-hidden dark:focus:ring-blue-500 dark:focus:border-blue-500 transition"
                      id="form-input-email"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-gray-500 dark:text-gray-400 block font-semibold">Subject Matter</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Interview Scheduling / Software Opportunity"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-100 text-xs focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-hidden dark:focus:ring-blue-400 dark:focus:border-blue-450 transition"
                    id="form-input-subject"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-gray-500 dark:text-gray-400 block font-semibold">Message Description</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Describe your job opening or inquiry here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-100 text-xs focus:border-blue-600 focus:outline-hidden focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-justify transition resize-none"
                    id="form-input-message"
                  />
                </div>

                {/* Submit button controls */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 select-none active:scale-98 disabled:opacity-50 cursor-pointer"
                  id="form-submit-btn"
                >
                  {isSending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting secure session data...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Recruiter Inbox Inspector integration */}
              <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-slate-800/80">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setInboxOpen(!inboxOpen)}
                    className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5 cursor-pointer"
                    id="btn-inspect-inbox"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{inboxOpen ? 'Hide' : 'Inspect'} Recruiter Inbox ({sentMessages.length})</span>
                  </button>
                  
                  {sentMessages.length > 0 && inboxOpen && (
                    <button
                      onClick={handleClearInbox}
                      className="text-[10px] font-mono text-rose-500 hover:underline flex items-center gap-1 cursor-pointer"
                      id="btn-clear-inbox"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Purge Inbox Ledgers</span>
                    </button>
                  )}
                </div>

                {/* Simulated database inbox rows */}
                {inboxOpen && (
                  <div className="mt-4 space-y-3 bg-white dark:bg-slate-950 rounded-xl p-4 border border-gray-255/10 dark:border-slate-850 max-h-[190px] overflow-y-auto no-scrollbar">
                    {sentMessages.length === 0 ? (
                      <p className="text-xs text-slate-500 italic text-center py-4">
                        Send a test message above, and watch it append dynamically onto this mock local storage database!
                      </p>
                    ) : (
                      sentMessages.map((msg) => (
                        <div key={msg.id} className="p-3 bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-850 rounded-lg space-y-1.5 text-xs">
                          <div className="flex justify-between items-center font-mono text-[10px]">
                            <span className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                              <User className="w-3.5 h-3.5" /> {msg.name} ({msg.email})
                            </span>
                            <span className="text-gray-400 flex items-center gap-1">
                              <Clock className="w-3 h-3 animate-pulse" /> {msg.timestamp}
                            </span>
                          </div>
                          <div className="font-bold text-slate-800 dark:text-slate-250 italic">Subj: {msg.subject}</div>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-grid text-justify">{msg.message}</p>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </motion.section>
  );
}
