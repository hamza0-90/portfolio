import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { PageViewType } from '../types';
import { Logo } from './Logo';
import { 
  FileText, 
  Linkedin, 
  ExternalLink,
  Sparkles,
  MessageSquare
} from 'lucide-react';

interface NavbarProps {
  currentView: PageViewType;
  onSelectView: (view: PageViewType) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectView, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBrandClick = () => {
    onSelectView('overview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <button
            onClick={handleBrandClick}
            id="nav-brand-logo"
            className="flex items-center gap-3 group text-left cursor-pointer transition-transform hover:scale-[1.01]"
          >
            <Logo size="md" />
            <div>
              <div className="font-extrabold tracking-tight flex items-center gap-1.5 text-sm sm:text-base">
                <span className="stylish-name-gradient font-black">
                  Hamza Khalid
                </span>
                <span className="relative flex h-2 w-2" title="Available for hire">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-mono font-medium flex items-center gap-1">
                <span>Software Engineer & AI</span>
              </p>
            </div>
          </button>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenResume}
              id="nav-view-cv-btn"
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-xs font-semibold border border-slate-200/90 shadow-sm transition-all cursor-pointer hover:border-slate-300 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
              <span>Resume / CV</span>
            </button>

            <a
              href={`https://wa.me/923217677493?text=${encodeURIComponent(
                'Hello Hamza Khalid, I checked your portfolio and would like to discuss a project / job opportunity.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-direct-btn"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold border border-emerald-200 transition-all cursor-pointer active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-linkedin-link"
              className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs transition-all shadow-sm shadow-blue-500/20 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-100 fill-current hidden sm:inline-block" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
