import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { PageViewType } from '../types';
import { Logo } from './Logo';
import { 
  Heart, 
  Linkedin, 
  Mail, 
  Phone, 
  Sparkles, 
  Code2, 
  ArrowUp, 
  MapPin, 
  ExternalLink 
} from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: PageViewType) => void;
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size="md" />
              <div>
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 text-lg block">
                  Hamza Khalid
                </span>
                <span className="text-xs text-blue-400/90 font-mono">Software Engineer & AI Architect</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              BS Software Engineering from NUML University. Specializing in Generative AI pipelines, Google Cloud certifications, React full-stack applications, and Flutter mobile systems.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Faisalabad, Pakistan • Open to Global Relocation & Remote</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-mono tracking-widest text-slate-200 uppercase">
              Portfolio Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => {
                    onNavigate?.('overview');
                    scrollToTop();
                  }}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Overview & Home Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate?.('projects');
                    scrollToTop();
                  }}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Projects & Demonstrations (10)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate?.('certifications');
                    scrollToTop();
                  }}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  14+ International Certifications
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate?.('skills');
                    scrollToTop();
                  }}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Technical Skills & Stack
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate?.('experience');
                    scrollToTop();
                  }}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Internships & Freelance Timeline
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate?.('about');
                    scrollToTop();
                  }}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  About & NUML Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate?.('contact');
                    scrollToTop();
                  }}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Contact & Hire Me
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect & Actions */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold font-mono tracking-widest text-slate-200 uppercase">
              Connect Directly
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="font-mono text-[11px]">{personalInfo.email}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </a>

              <a
                href={`https://wa.me/923217677493`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/80 text-emerald-300 hover:text-emerald-200 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp: +92 321 7677493</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </a>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-sm cursor-pointer transition-colors"
                >
                  View / Download Official CV
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Hamza Khalid. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              id="footer-scroll-top-btn"
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
