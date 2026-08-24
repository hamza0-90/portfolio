import React, { useState } from 'react';
import { experienceData } from '../data/portfolioData';
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  FileCheck, 
  Sparkles, 
  ExternalLink, 
  ChevronRight,
  ArrowLeft
} from 'lucide-react';

interface ExperienceTimelineProps {
  onBackToOverview?: () => void;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ onBackToOverview }) => {
  const [filterType, setFilterType] = useState<'all' | 'Internship' | 'Freelance'>('all');

  const filteredExperience = experienceData.filter((exp) => {
    if (filterType === 'all') return true;
    return exp.type === filterType;
  });

  return (
    <section id="experience" className="pt-24 pb-20 relative">
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
              Portfolio &gt; <span className="text-slate-700 font-semibold">Work Experience</span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work & Internship Experience</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional Experience & Internships
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Practical industry contributions across Web Development, Machine Learning, Data Science, Meta Ads, and international freelance client delivery on Fiverr/Upwork.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filterType === 'all'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm'
            }`}
          >
            All Roles ({experienceData.length})
          </button>
          <button
            onClick={() => setFilterType('Internship')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filterType === 'Internship'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm'
            }`}
          >
            Industry Internships (7)
          </button>
          <button
            onClick={() => setFilterType('Freelance')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filterType === 'Freelance'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm'
            }`}
          >
            Freelance & Client Delivery
          </button>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 md:ml-32 space-y-8">
          {filteredExperience.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-2 border-blue-600 group-hover:bg-blue-600 group-hover:scale-125 transition-all shadow-sm" />

              {/* Period Display on larger screens */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-28 text-xs font-mono text-blue-600 font-bold">
                {exp.period}
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 transition-all space-y-4 shadow-sm hover:shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="md:hidden text-xs font-mono text-blue-700 font-bold px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                        {exp.period}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                        {exp.type}
                      </span>
                      {exp.verifiedStatus === 'Active' && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Active Role
                        </span>
                      )}
                      {exp.verifiedStatus === 'Offer Received' && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1">
                          <FileCheck className="w-3 h-3" />
                          Offer Letter Verified
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 mt-1 font-medium">
                      <span className="text-blue-700 font-bold">{exp.company}</span>
                      <span className="text-slate-300">•</span>
                      <span className="flex items-center gap-1 text-slate-500 text-xs">
                        <MapPin className="w-3.5 h-3.5 text-blue-600" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {exp.letterId && (
                    <span className="text-[11px] font-mono text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">
                      ID: {exp.letterId}
                    </span>
                  )}
                </div>

                {/* Bullets */}
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {exp.skillsUsed.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md bg-slate-100 text-[11px] font-mono text-slate-700 border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
