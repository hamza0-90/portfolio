import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { 
  Layers, 
  Sparkles, 
  Brain, 
  Globe, 
  Smartphone, 
  Shield, 
  ArrowRight, 
  Cpu, 
  CheckCircle2, 
  ExternalLink,
  Code2,
  ArrowLeft,
  Search,
  Filter
} from 'lucide-react';
import { InteractiveProjectModal } from './InteractiveProjectModal';

interface ProjectsSectionProps {
  onBackToOverview?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onBackToOverview }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: { key: ProjectCategory; label: string; icon: React.ReactNode }[] = [
    { key: 'all', label: `All (${projectsData.length})`, icon: <Layers className="w-4 h-4" /> },
    { key: 'ai-ml', label: 'AI & GenAI (4)', icon: <Brain className="w-4 h-4" /> },
    { key: 'fullstack', label: 'Full-Stack Web (3)', icon: <Globe className="w-4 h-4" /> },
    { key: 'mobile', label: 'Mobile (Flutter) (1)', icon: <Smartphone className="w-4 h-4" /> },
    { key: 'security-db', label: 'Security & DB (2)', icon: <Shield className="w-4 h-4" /> },
  ];

  const filteredProjects = projectsData.filter((proj) => {
    const matchesCategory = selectedCategory === 'all' || proj.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="pt-24 pb-20 relative">
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
              Portfolio &gt; <span className="text-slate-700 font-semibold">Projects</span>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Projects & Technical Capstones
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            From Final Year Projects (FYP) utilizing Generative AI and market sentiment NLP to production-grade marketplaces, mobile apps, and cryptographic security tools.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.key}
                id={`proj-filter-${cat.key}`}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="proj-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects (e.g. AI, React, NLP)..."
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

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <Filter className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-700 font-semibold">No projects found matching your search</p>
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
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`rounded-2xl bg-white border transition-all flex flex-col justify-between overflow-hidden group hover:shadow-lg hover:border-blue-300 ${
                  project.featured
                    ? 'border-blue-300/90 shadow-sm ring-1 ring-blue-100'
                    : 'border-slate-200/90 shadow-sm'
                }`}
              >
                <div className="p-6 space-y-4">
                  {/* Header tags */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                        {project.categoryLabel}
                      </span>
                      {project.academicTag && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-purple-50 text-purple-700 border border-purple-200">
                          {project.academicTag}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      {project.period}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                      <span>{project.title}</span>
                      {project.interactiveDemoType && (
                        <span className="inline-flex p-1 rounded bg-blue-50 text-blue-600 text-[10px] font-mono border border-blue-200" title="Has Interactive Simulator">
                          <Sparkles className="w-3 h-3" />
                        </span>
                      )}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Brief description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key feature bullets */}
                  <div className="space-y-1.5 pt-1">
                    {project.keyFeatures.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-slate-100 text-[11px] font-mono text-slate-700 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-mono text-slate-500">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    id={`view-proj-btn-${project.id}`}
                    className="w-full py-2 px-3 rounded-xl bg-white hover:bg-blue-600 hover:text-white text-slate-700 border border-slate-200 hover:border-blue-600 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer group/btn shadow-sm"
                  >
                    <span>
                      {project.interactiveDemoType ? 'Open Live Demo & Architecture' : 'View Specifications & Stack'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal for Deep-Dive */}
        {activeModalProject && (
          <InteractiveProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}
      </div>
    </section>
  );
};
