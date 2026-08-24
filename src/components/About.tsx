import React from 'react';
import { personalInfo, educationData } from '../data/portfolioData';
import { Logo } from './Logo';
import { 
  GraduationCap, 
  BookOpen, 
  Languages, 
  CheckCircle, 
  Calendar, 
  MapPin,
  Sparkles,
  Terminal,
  Cpu,
  ArrowLeft
} from 'lucide-react';

interface AboutProps {
  onBackToOverview?: () => void;
}

export const About: React.FC<AboutProps> = ({ onBackToOverview }) => {
  return (
    <section id="about" className="pt-24 pb-20 relative">
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
              Portfolio &gt; <span className="text-slate-700 font-semibold">About & Academic Background</span>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Terminal className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span>Profile & Academic Background</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-3">
            <span>About</span>
            <span className="stylish-name-gradient stylish-glow-name">
              Hamza Khalid
            </span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Dedicated software engineer passionate about engineering high-impact intelligent systems, scalable web applications, and intuitive AI-driven solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bio & Core Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center gap-4">
                <Logo size="lg" />
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    <span className="stylish-name-gradient font-black">Hamza Khalid</span>
                    <span className="text-slate-800 text-base block font-bold">Software Engineer & AI Practitioner</span>
                  </h2>
                  <p className="text-xs text-blue-700 font-mono font-medium mt-0.5">BS SE (NUML University) • Faisalabad, Pakistan</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  I am a dedicated <strong className="text-slate-900 font-semibold">Software Engineering student at NUML University (Faisalabad Campus)</strong>, graduating in 2026. My engineering journey centers around full-stack web development, intelligent agent architectures, predictive machine learning, and mobile applications with Flutter.
                </p>
                <p>
                  With <strong className="text-blue-700 font-semibold">14+ internationally accredited certifications</strong> including Google Cloud (Generative AI Studio, Attention Mechanisms, LLMs, Responsible AI), Simplilearn (Blockchain, Neural Networks, NLP, n8n AI Agents), Alison, and Udemy, I blend strong theoretical foundations with real-world engineering practices.
                </p>
                <p>
                  As an active freelance software developer on <strong className="text-slate-900 font-semibold">Fiverr and Upwork</strong>, I have delivered client-ready websites, database schemas, and AI integrations with 100% adherence to deadlines and specifications.
                </p>
              </div>

              {/* Core Strengths Checklist */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2.5 text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Production-grade React & Full-Stack Web Development</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Generative AI, Attention Mechanisms & LLMs</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Cross-Platform Mobile Apps using Flutter & Dart</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Robust Relational Database & 3NF Schema Optimization</span>
                </div>
              </div>
            </div>

            {/* Languages Panel */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4 text-slate-800 font-bold text-base">
                <Languages className="w-5 h-5 text-blue-600" />
                <span>Languages & Communication</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 text-base">Urdu</div>
                    <div className="text-xs text-slate-500">Native Tongue</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                    Native
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 text-base">English</div>
                    <div className="text-xs text-slate-500">International Collaboration</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold">
                    Professional Working
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 mb-2 text-slate-900 font-bold text-xl">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <span>Academic Timeline</span>
            </div>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all ${
                    edu.status === 'In Progress'
                      ? 'bg-white border-blue-300 shadow-md ring-1 ring-blue-100'
                      : 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200 inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                    {edu.status === 'In Progress' && (
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Current Degree
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">{edu.degree}</h3>
                  <div className="text-sm font-semibold text-blue-700 mb-1">{edu.institution}</div>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mb-3">
                    <MapPin className="w-3 h-3" />
                    <span>{edu.location}</span>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-600 mt-2">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
