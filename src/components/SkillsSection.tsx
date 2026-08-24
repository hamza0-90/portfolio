import React, { useState } from 'react';
import { skillGroupsData } from '../data/portfolioData';
import { 
  Code2, 
  Brain, 
  Database, 
  Shield, 
  TrendingUp, 
  Search, 
  Sparkles, 
  CheckCircle2,
  Filter,
  ArrowLeft
} from 'lucide-react';

interface SkillsSectionProps {
  onBackToOverview?: () => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onBackToOverview }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    'AI, ML & Generative Models': <Brain className="w-5 h-5 text-blue-600" />,
    'Full-Stack Web & Mobile': <Code2 className="w-5 h-5 text-indigo-600" />,
    'Programming Languages & DB': <Database className="w-5 h-5 text-cyan-600" />,
    'Security, Systems & Tools': <Shield className="w-5 h-5 text-emerald-600" />,
    'SEO, Marketing & Strategy': <TrendingUp className="w-5 h-5 text-amber-600" />,
  };

  const filteredGroups = skillGroupsData
    .map((group) => {
      const isCategoryMatch = selectedCategory === 'all' || group.category === selectedCategory;
      if (!isCategoryMatch) return null;

      const filteredSkills = group.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (searchQuery && filteredSkills.length === 0) return null;

      return {
        ...group,
        skills: filteredSkills,
      };
    })
    .filter(Boolean) as typeof skillGroupsData;

  const totalSkillsCount = skillGroupsData.reduce(
    (acc, group) => acc + group.skills.length,
    0
  );

  return (
    <section id="skills" className="pt-24 pb-20 relative">
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
              Portfolio &gt; <span className="text-slate-700 font-semibold">Skills & Stack</span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Proficiency & Stack</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Skills & Competencies
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            A comprehensive overview of programming languages, modern frameworks, generative AI models, database architectures, and digital tools.
          </p>
        </div>

        {/* Controls: Category Filter Tabs & Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              id="skill-cat-all"
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm'
              }`}
            >
              All Skills ({totalSkillsCount})
            </button>
            {skillGroupsData.map((group) => (
              <button
                key={group.category}
                id={`skill-cat-${group.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(group.category)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedCategory === group.category
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm'
                }`}
              >
                {categoryIcons[group.category]}
                <span>{group.category.split('&')[0].trim()}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="skill-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Python, React)..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skill Groups Grid */}
        {filteredGroups.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <Filter className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-700 font-semibold">No skills found matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs text-blue-600 font-bold hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGroups.map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-blue-50 border border-blue-200/70">
                        {categoryIcons[group.category] || <Code2 className="w-5 h-5 text-blue-600" />}
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">{group.category}</h3>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {group.skills.length} skills
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-5 leading-relaxed">{group.description}</p>

                  <div className="space-y-4">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-slate-800">{skill.name}</span>
                            {skill.popularTag && (
                              <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                                Primary
                              </span>
                            )}
                          </div>
                          <span className="font-mono text-slate-500 font-semibold">{skill.level}%</span>
                        </div>

                        {/* Progress Meter */}
                        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden border border-slate-200/80">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
