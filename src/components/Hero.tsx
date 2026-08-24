import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { PageViewType } from '../types';
import { Logo } from './Logo';
import { 
  ArrowRight, 
  MessageSquare, 
  Download, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  Linkedin, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Code,
  Terminal,
  MapPin,
  Layers,
  Code2,
  Briefcase,
  User,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroProps {
  onNavigate: (view: PageViewType) => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.85 }
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const whatsappUrl = `https://wa.me/923217677493?text=${encodeURIComponent(
    "Hello Hamza Khalid, I am interested in your software engineering portfolio and would like to discuss an opportunity!"
  )}`;

  return (
    <div id="overview-hub" className="space-y-12 pb-16">
      {/* Top Banner Section */}
      <section
        id="hero"
        className="relative pt-24 pb-12 overflow-hidden"
      >
        {/* Ambient subtle light glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-r from-blue-200/40 via-indigo-100/50 to-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 subtle-grid-bg opacity-70 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,#000_60%,transparent_100%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Availability Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Full-time Roles & Freelance Delivery</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Google Cloud Certified in GenAI & Attention Models</span>
            </div>
          </div>

          {/* Main Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-200/90 text-xs font-mono text-slate-700 shadow-sm backdrop-blur-sm">
                  <Terminal className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                  <span className="text-slate-500">const developer =</span>
                  <span className="font-bold text-blue-700 font-sans">"Hamza Khalid";</span>
                </div>

                <div className="space-y-1">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                    <span className="block stylish-name-gradient stylish-glow-name text-4xl sm:text-5xl lg:text-6xl pb-1">
                      Hamza Khalid
                    </span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight block mt-1">
                      Software Engineer &{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                        AI Solutions Architect
                      </span>
                    </span>
                  </h1>
                </div>
              </div>

              <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
                Engineering scalable web applications, autonomous AI agent pipelines, and intelligent mobile systems. Specializing in{' '}
                <strong className="text-slate-900 font-semibold">Generative AI (Google Cloud & LLMs)</strong>,{' '}
                <strong className="text-slate-900 font-semibold">Full-Stack Web (React & Node.js)</strong>,{' '}
                <strong className="text-slate-900 font-semibold">Flutter Mobile</strong>, and robust database architectures.
              </p>

              {/* Location & Degree Badges */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-600 font-medium pt-1">
                <div className="flex items-center gap-1.5 text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>Faisalabad, Pakistan (Open to Global Remote Roles)</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>BS Software Engineering (NUML 2022–2026)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={() => onNavigate('projects')}
                  id="hero-explore-projects-btn"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <span>Explore Projects & Demos</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-whatsapp-btn"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300/80 text-sm font-bold transition-all shadow-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Direct Chat</span>
                </a>

                <button
                  onClick={onOpenResume}
                  id="hero-download-cv-btn"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm text-sm font-semibold transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 text-blue-600" />
                  <span>View / Download CV</span>
                </button>
              </div>

              {/* Direct Quick Contact Actions */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-linkedin"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 text-xs font-semibold transition-all shadow-sm"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                  <span>LinkedIn Profile</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  id="hero-copy-email-btn"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 text-xs font-semibold transition-all shadow-sm cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>{personalInfo.email}</span>
                  {copiedEmail ? (
                    <Check className="w-3 h-3 text-emerald-600" />
                  ) : (
                    <Copy className="w-3 h-3 text-slate-400" />
                  )}
                </button>

                <a
                  href={`tel:${personalInfo.phone}`}
                  id="hero-call-phone"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 text-xs font-semibold transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>{personalInfo.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Code Snippet & Highlights Showcase */}
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl bg-white border border-slate-200/90 p-5 shadow-lg shadow-slate-200/50">
                {/* Code Window Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Logo size="sm" />
                    <span className="font-mono text-slate-700 font-bold ml-1">hamza_khalid.ts</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 font-mono text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>ONLINE</span>
                  </div>
                </div>

                {/* Code Body */}
                <div className="font-mono text-xs text-slate-700 space-y-1.5 overflow-x-auto bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <p className="text-purple-700 font-semibold">const <span className="text-blue-700">engineer</span> = &#123;</p>
                  <p className="pl-4 text-slate-600">name: <span className="text-emerald-700 font-medium">'Hamza Khalid'</span>,</p>
                  <p className="pl-4 text-slate-600">degree: <span className="text-emerald-700 font-medium">'BS Software Engineering'</span>,</p>
                  <p className="pl-4 text-slate-600">university: <span className="text-emerald-700 font-medium">'NUML Faisalabad'</span>,</p>
                  <p className="pl-4 text-slate-600">certifications: <span className="text-amber-700 font-semibold">14</span>, <span className="text-slate-400">// Google Cloud, Simplilearn</span></p>
                  <p className="pl-4 text-slate-600">coreStack: [</p>
                  <p className="pl-8 text-blue-800">'Python', 'React', 'Generative AI',</p>
                  <p className="pl-8 text-blue-800">'Flutter', 'SQL', 'Node.js', 'n8n'</p>
                  <p className="pl-4 text-slate-600">],</p>
                  <p className="pl-4 text-slate-600">status: <span className="text-emerald-700 font-semibold">'Ready for High-Impact Roles'</span>,</p>
                  <p className="pl-4 text-slate-600">openForHire: <span className="text-blue-600 font-bold">true</span></p>
                  <p className="text-purple-700 font-semibold">&#125;;</p>
                </div>

                {/* Quick Highlight Pillars */}
                <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => onNavigate('certifications')}
                    className="p-3 rounded-xl bg-blue-50/70 border border-blue-200/60 hover:bg-blue-50 transition-all text-left cursor-pointer group/card"
                  >
                    <div className="flex items-center gap-1.5 text-blue-700 text-xs font-semibold mb-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>Certifications</span>
                    </div>
                    <div className="text-base font-bold text-slate-900">14+ Verified</div>
                    <div className="text-[11px] text-slate-500 group-hover/card:text-blue-600 transition-colors flex items-center gap-1 mt-0.5 font-medium">
                      <span>View details</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </button>

                  <button
                    onClick={() => onNavigate('projects')}
                    className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/60 hover:bg-emerald-50 transition-all text-left cursor-pointer group/card"
                  >
                    <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-semibold mb-1">
                      <Code className="w-3.5 h-3.5" />
                      <span>Projects</span>
                    </div>
                    <div className="text-base font-bold text-slate-900">10+ Delivered</div>
                    <div className="text-[11px] text-slate-500 group-hover/card:text-emerald-600 transition-colors flex items-center gap-1 mt-0.5 font-medium">
                      <span>Explore work</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Ribbon */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => onNavigate('certifications')}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all text-left cursor-pointer group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 mb-1 group-hover:scale-105 transition-transform inline-block">14+</div>
              <div className="text-sm font-bold text-slate-800">International Certifications</div>
              <p className="text-xs text-slate-500 mt-1">Google Cloud, Simplilearn, Alison, Udemy</p>
            </button>

            <button
              onClick={() => onNavigate('projects')}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all text-left cursor-pointer group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 mb-1 group-hover:scale-105 transition-transform inline-block">10+</div>
              <div className="text-sm font-bold text-slate-800">Major Software Projects</div>
              <p className="text-xs text-slate-500 mt-1">AI Website Builder, Daraz Analyzer, Linkify</p>
            </button>

            <button
              onClick={() => onNavigate('experience')}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all text-left cursor-pointer group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 mb-1 group-hover:scale-105 transition-transform inline-block">7+</div>
              <div className="text-sm font-bold text-slate-800">Industry Internships & Roles</div>
              <p className="text-xs text-slate-500 mt-1">Hex Softwares, Codomax, Crixsoft, TSgreentech</p>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all text-left cursor-pointer group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 mb-1 group-hover:scale-105 transition-transform inline-block">100%</div>
              <div className="text-sm font-bold text-slate-800">On-Time Client Delivery</div>
              <p className="text-xs text-slate-500 mt-1">Active freelance on Fiverr & Upwork</p>
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Portal Hub: Direct Navigation Cards for Every Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Portfolio Sections</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Explore Portfolio by Category
          </h2>
          <p className="text-slate-500 text-sm">
            Click any section button below to open its dedicated page with complete details, interactive demos, and credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Projects */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Projects & Technical Capstones</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  10 comprehensive projects including AI Website Builder, Daraz Sentiment Analyzer, Zerimo Startup Predictor, and Steganography Security.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-mono text-slate-700">GenAI / LLMs</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-mono text-slate-700">React & Node</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-mono text-slate-700">Flutter</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('projects')}
              id="hub-btn-projects"
              className="w-full py-2.5 px-4 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <span>View All 10 Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Certifications */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-indigo-300 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Verified International Certifications</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  14+ credentials from Google Cloud, Simplilearn, Alison, and Udemy spanning GenAI Studio, Attention Mechanisms, n8n AI Agents, and Blockchain.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-mono text-slate-700">Google Cloud (5)</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-mono text-slate-700">Simplilearn (7)</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-mono text-slate-700">Alison (96%)</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('certifications')}
              id="hub-btn-certifications"
              className="w-full py-2.5 px-4 rounded-xl bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <span>Inspect 14+ Certifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Skills */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-cyan-300 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Technical Skills & Tech Stack</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Complete breakdown of programming languages, machine learning tools, database schemas, frontend frameworks, and security utilities.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-mono text-slate-700">Python & Java</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-mono text-slate-700">React 19 & Tailwind</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-mono text-slate-700">SQL & 3NF</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('skills')}
              id="hub-btn-skills"
              className="w-full py-2.5 px-4 rounded-xl bg-cyan-50 hover:bg-cyan-600 text-cyan-700 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <span>Explore Technical Stack</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 4: Experience */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-purple-300 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Work Experience & Internships</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  7+ industry internships and roles across Web Development, Machine Learning, Data Science, and international freelance delivery on Fiverr/Upwork.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-mono text-slate-700">Hex Softwares</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-mono text-slate-700">Codomax Tech</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-mono text-slate-700">Crixsoft</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('experience')}
              id="hub-btn-experience"
              className="w-full py-2.5 px-4 rounded-xl bg-purple-50 hover:bg-purple-600 text-purple-700 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <span>View Experience Timeline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 5: About & Academic */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">About & Academic Background</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  BS Software Engineering degree at NUML University (2022–2026), core engineering strengths, and multilingual proficiency.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-mono text-slate-700">NUML Faisalabad</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-mono text-slate-700">Urdu (Native)</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-mono text-slate-700">English (Proficient)</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('about')}
              id="hub-btn-about"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <span>Read Bio & Education</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 6: Contact & Hire */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md hover:shadow-xl transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-white">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Get in Touch & Hire Me</h3>
                <p className="text-xs text-blue-100 mt-1 leading-relaxed">
                  Direct WhatsApp messaging, email communication, phone calling, and interactive proposal submission.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-white/20 text-[11px] font-mono text-white">WhatsApp Instant</span>
                <span className="px-2 py-0.5 rounded bg-white/20 text-[11px] font-mono text-white">24h Response</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              id="hub-btn-contact"
              className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-blue-700 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <span>Open Contact Portal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
