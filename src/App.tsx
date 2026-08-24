import React, { useState } from 'react';
import { PageViewType } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AnimatedBackground } from './components/AnimatedBackground';
import { 
  LayoutDashboard, 
  Layers, 
  Award, 
  Code2, 
  Briefcase, 
  User, 
  Mail 
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<PageViewType>('overview');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleNavigate = (view: PageViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickNavTabs = [
    { id: 'overview' as PageViewType, label: 'Overview', mobileLabel: 'Overview', icon: LayoutDashboard },
    { id: 'projects' as PageViewType, label: 'Projects', mobileLabel: 'Projects', icon: Layers },
    { id: 'certifications' as PageViewType, label: 'Certs', mobileLabel: 'Certs', fullLabel: 'Certifications', icon: Award },
    { id: 'skills' as PageViewType, label: 'Skills', mobileLabel: 'Skills', icon: Code2 },
    { id: 'experience' as PageViewType, label: 'Experience', mobileLabel: 'Exp', icon: Briefcase },
    { id: 'about' as PageViewType, label: 'About', mobileLabel: 'About', icon: User },
    { id: 'contact' as PageViewType, label: 'Contact', mobileLabel: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-slate-50/80 text-slate-900 selection:bg-blue-500 selection:text-white font-sans relative flex flex-col justify-between overflow-x-hidden">
      {/* Continuous Ambient Animated Background */}
      <AnimatedBackground />

      {/* Top Main Navbar with multi-page navigation links */}
      <div className="relative z-20">
        <Navbar
          currentView={currentView}
          onSelectView={handleNavigate}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </div>

      {/* Main Multi-Page Container with bottom padding so bottom dock never overlaps */}
      <main className="flex-1 relative z-10 pb-24 sm:pb-20">
        {currentView === 'overview' && (
          <Hero
            onNavigate={handleNavigate}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {currentView === 'projects' && (
          <ProjectsSection onBackToOverview={() => handleNavigate('overview')} />
        )}

        {currentView === 'certifications' && (
          <CertificationsSection onBackToOverview={() => handleNavigate('overview')} />
        )}

        {currentView === 'skills' && (
          <SkillsSection onBackToOverview={() => handleNavigate('overview')} />
        )}

        {currentView === 'experience' && (
          <ExperienceTimeline onBackToOverview={() => handleNavigate('overview')} />
        )}

        {currentView === 'about' && (
          <About onBackToOverview={() => handleNavigate('overview')} />
        )}

        {currentView === 'contact' && (
          <ContactSection onBackToOverview={() => handleNavigate('overview')} />
        )}
      </main>

      {/* Quick Floating Bottom Switcher - FULLY VISIBLE & OPTIMIZED FOR BOTH MOBILE & DESKTOP */}
      <nav 
        aria-label="Quick Bottom Navigation"
        className="fixed bottom-2 sm:bottom-4 left-0 right-0 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-40 px-2 sm:px-0 flex justify-center pointer-events-none"
      >
        {/* MOBILE VIEW (< sm): Clean 7-Column Dock where all 7 buttons are 100% visible and accessible */}
        <div className="sm:hidden pointer-events-auto w-[96vw] max-w-md bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-2xl shadow-slate-900/15 rounded-2xl p-1 grid grid-cols-7 gap-0.5 items-center">
          {quickNavTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentView === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleNavigate(tab.id)}
                className={`flex flex-col items-center justify-center py-1.5 px-0.5 rounded-xl transition-all select-none active:scale-90 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-500/25 scale-[1.03]'
                    : 'text-slate-600 hover:text-slate-900 active:bg-slate-100'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span className="text-[9px] font-semibold truncate w-full text-center mt-0.5 leading-none">
                  {tab.mobileLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* DESKTOP & TABLET VIEW (>= sm): Wide Floating Pill Bar matching user's exact aesthetic */}
        <div className="hidden sm:flex pointer-events-auto items-center gap-1 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-slate-200/90 shadow-xl shadow-slate-400/20">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1 px-1">
            Jump to:
          </span>
          {quickNavTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentView === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleNavigate(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer select-none active:scale-95 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="text-xs">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="relative z-10">
        <Footer
          onNavigate={handleNavigate}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </div>

      {/* Printable / Downloadable Resume Modal */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}
    </div>
  );
}
