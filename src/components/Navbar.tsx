import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { PageViewType } from '../types';
import { Logo } from './Logo';
import { 
  Code2, 
  User, 
  Briefcase, 
  Award, 
  Mail, 
  FileText, 
  Menu, 
  X, 
  ExternalLink,
  Sparkles,
  Layers,
  LayoutDashboard
} from 'lucide-react';

interface NavbarProps {
  currentView: PageViewType;
  onSelectView: (view: PageViewType) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onSelectView, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageViewType; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: Layers },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'about', label: 'About', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (viewId: PageViewType) => {
    onSelectView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3'
          : 'bg-white/70 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Home Switcher */}
          <button
            onClick={() => handleNavClick('overview')}
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

          {/* Desktop Nav Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/80 shadow-inner">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-btn-${item.id}`}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white text-blue-600 shadow-sm border border-slate-200/60 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={onOpenResume}
              id="nav-view-cv-btn"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-xs font-semibold border border-slate-200 shadow-sm transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Resume / CV</span>
            </button>

            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-linkedin-link"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs transition-all shadow-sm shadow-blue-500/20 hover:scale-[1.02] cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-100 fill-current" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>

          {/* Mobile Menu & Quick CV */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              id="mobile-nav-cv-quick-btn"
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-blue-600"
              title="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden mt-2 px-4 pt-2 pb-6 bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top-2"
        >
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors text-left cursor-pointer ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border border-blue-200/80 font-bold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-500'}`} />
                    <span>{item.label}</span>
                  </div>
                  {isActive && <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-bold">Active</span>}
                </button>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-200"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                <span>View Full Resume / CV</span>
              </button>
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-sm"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
