import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  MessageSquare, 
  Check, 
  Copy, 
  ExternalLink, 
  Sparkles,
  Clock,
  ArrowLeft,
  Briefcase,
  Send,
  Globe,
  Github
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  onBackToOverview?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onBackToOverview }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedSecondaryEmail, setCopiedSecondaryEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'secondaryEmail' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else if (type === 'secondaryEmail') {
      setCopiedSecondaryEmail(true);
      setTimeout(() => setCopiedSecondaryEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
    confetti({ particleCount: 25, spread: 50 });
  };

  const whatsappUrl = `https://wa.me/923217677493?text=${encodeURIComponent(
    'Hello Hamza Khalid, I saw your portfolio and would like to discuss a job / project opportunity.'
  )}`;

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    'Software Engineering / Project Inquiry for Hamza Khalid'
  )}&body=${encodeURIComponent(
    'Hello Hamza,\n\nI would like to discuss an opportunity regarding...\n\nBest regards,'
  )}`;

  return (
    <section id="contact" className="pt-24 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back Button */}
        {onBackToOverview && (
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={onBackToOverview}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-600 text-xs font-semibold border border-slate-200 shadow-sm transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-blue-600" />
              <span>Back to Overview</span>
            </button>
            <div className="text-xs text-slate-400 font-medium hidden sm:block">
              Portfolio &gt; <span className="text-slate-700 font-semibold">Contact & Connect</span>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Mail className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span>Direct Channels</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-3 flex-wrap">
            <span>Contact</span>
            <span className="stylish-name-gradient stylish-glow-name">
              Hamza Khalid
            </span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Ready to collaborate on full-time engineering roles, AI system integrations, or high-performance web applications. Reach out directly through your preferred channel below.
          </p>
        </div>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          
          {/* Card 1: Primary Email */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                  Preferred
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Email Address</h3>
                <p className="text-xs text-slate-500 mt-0.5">Send a message directly to my inbox</p>
                <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-800 break-all select-all">
                  {personalInfo.email}
                </div>
                {personalInfo.secondaryEmail && (
                  <p className="text-[11px] text-slate-400 font-mono mt-1.5">
                    Alt: {personalInfo.secondaryEmail}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
              <a
                href={mailtoUrl}
                className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm shadow-blue-500/20 transition-all cursor-pointer active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                title="Copy primary email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="p-7 rounded-3xl bg-emerald-50/50 border border-emerald-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-300 flex items-center justify-center text-emerald-600">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Instant</span>
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">WhatsApp Instant Chat</h3>
                <p className="text-xs text-slate-600 mt-0.5">Direct chat for quick inquiries & voice notes</p>
                <div className="mt-3 p-3 rounded-xl bg-white border border-emerald-200 text-xs font-mono font-bold text-emerald-900 select-all">
                  {personalInfo.phone}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-emerald-200/60">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm shadow-emerald-500/20 transition-all cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
              <button
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="p-2.5 rounded-xl bg-white hover:bg-emerald-100/70 border border-emerald-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                title="Copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Card 3: Direct Phone Call */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6 md:col-span-2 lg:col-span-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  Voice Call
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Direct Telephone</h3>
                <p className="text-xs text-slate-500 mt-0.5">Available for voice interviews and direct phone calls</p>
                <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-800 select-all">
                  {personalInfo.phone}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>

        </div>

        {/* Professional Networks & Marketplace Profiles */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-blue-400 text-xs font-mono font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PROFESSIONAL PRESENCE</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Connect on Professional Platforms
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Response within 24 hours guaranteed</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* LinkedIn */}
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 transition-all flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">LinkedIn</div>
                  <div className="text-[11px] text-slate-400">Professional Profile</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* Fiverr */}
            <a
              href={personalInfo.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-400/50 transition-all flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Fiverr Freelance</div>
                  <div className="text-[11px] text-slate-400">Hire for Gigs & Tasks</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* Upwork */}
            <a
              href={personalInfo.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-400/50 transition-all flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Upwork Profile</div>
                  <div className="text-[11px] text-slate-400">Direct Contract Work</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/50 transition-all flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">GitHub</div>
                  <div className="text-[11px] text-slate-400">Code Repositories</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all" />
            </a>
          </div>

          {/* Location & Status Footer Banner */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Based in <strong className="text-white">{personalInfo.location}</strong> • Open to Remote Worldwide & Onsite Relocation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-300 font-semibold">{personalInfo.availability}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
