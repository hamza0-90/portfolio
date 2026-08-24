import React, { useState } from 'react';
import { certificationsData } from '../data/portfolioData';
import { Certification } from '../types';
import { 
  Award, 
  Brain, 
  Cpu, 
  Shield, 
  Code2, 
  TrendingUp, 
  Check, 
  Copy, 
  ExternalLink, 
  Sparkles,
  Search,
  Filter,
  ArrowLeft,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CertificationsSectionProps {
  onBackToOverview?: () => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onBackToOverview }) => {
  const [selectedIssuer, setSelectedIssuer] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  const issuers = [
    { key: 'all', label: `All (${certificationsData.length})` },
    { key: 'Google Cloud', label: 'Google Cloud (5)' },
    { key: 'Simplilearn', label: 'Simplilearn (7)' },
    { key: 'Alison', label: 'Alison (1)' },
    { key: 'Udemy', label: 'Udemy (1)' },
  ];

  const getIcon = (type: Certification['iconType']) => {
    switch (type) {
      case 'brain':
        return <Brain className="w-5 h-5" />;
      case 'cpu':
        return <Cpu className="w-5 h-5" />;
      case 'shield':
        return <Shield className="w-5 h-5" />;
      case 'trending':
        return <TrendingUp className="w-5 h-5" />;
      case 'code':
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  const handleCopyCode = (code: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopiedId(code);
    confetti({ particleCount: 25, spread: 50 });
    setTimeout(() => setCopiedId(null), 2500);
  };

  const filteredCerts = certificationsData.filter((cert) => {
    const matchesIssuer = selectedIssuer === 'all' || cert.issuer === selectedIssuer;
    const matchesSearch = searchQuery === '' || 
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skillsAcquired.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesIssuer && matchesSearch;
  });

  return (
    <section id="certifications" className="pt-24 pb-20 relative">
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
              Portfolio &gt; <span className="text-slate-700 font-semibold">Certifications</span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            International Certifications
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            14+ verified credentials from Google Cloud, Simplilearn, Alison, and Udemy spanning Generative AI, Attention Mechanisms, Autonomous AI Agents, Machine Learning, and Blockchain.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Issuer Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {issuers.map((item) => (
              <button
                key={item.key}
                id={`cert-filter-${item.key.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedIssuer(item.key)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedIssuer === item.key
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="cert-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search certifications (e.g. Google, AI)..."
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

        {/* Certifications Grid */}
        {filteredCerts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <Filter className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-700 font-semibold">No certifications found matching your criteria</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedIssuer('all');
              }}
              className="mt-3 text-xs text-blue-600 font-bold hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setActiveCert(cert)}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 transition-all flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-md"
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200/70 text-blue-600 group-hover:scale-105 transition-transform">
                        {getIcon(cert.iconType)}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 block font-mono">
                          {cert.issuer}
                        </span>
                        <span className="text-[11px] text-slate-400">{cert.issueDate}</span>
                      </div>
                    </div>

                    {cert.score && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {cert.score}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills Acquired */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skillsAcquired.slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-700 border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skillsAcquired.length > 3 && (
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-500">
                        +{cert.skillsAcquired.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Code & Action */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  {cert.credentialCode ? (
                    <button
                      onClick={(e) => handleCopyCode(cert.credentialCode!, e)}
                      className="flex items-center gap-1.5 text-[11px] font-mono text-slate-600 hover:text-blue-700 transition-colors py-1 px-2 rounded bg-slate-50 border border-slate-200 cursor-pointer"
                      title="Click to copy certificate code"
                    >
                      <span>ID: {cert.credentialCode}</span>
                      {copiedId === cert.credentialCode ? (
                        <Check className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <Copy className="w-3 h-3 text-slate-400" />
                      )}
                    </button>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-400">Verified Distinction</span>
                  )}

                  <span className="text-xs text-blue-600 font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                    <span>Inspect</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certificate Modal Viewer */}
        {activeCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
            onClick={() => setActiveCert(null)}
          >
            <div
              className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5 animate-in zoom-in-95"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                    {getIcon(activeCert.iconType)}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                      {activeCert.issuer}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-0.5">{activeCert.title}</h3>
                  </div>
                </div>
                <button
                  onClick={() => setActiveCert(null)}
                  className="p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                {activeCert.description}
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Verified Skills Acquired:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCert.skillsAcquired.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500 block">Date of Issue:</span>
                  <span className="font-semibold text-slate-900">{activeCert.issueDate}</span>
                </div>
                {activeCert.credentialCode && (
                  <div>
                    <span className="text-slate-500 block">Certificate Code:</span>
                    <span className="font-mono font-bold text-blue-700">
                      {activeCert.credentialCode}
                    </span>
                  </div>
                )}
              </div>

              <button
                onClick={() => setActiveCert(null)}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold cursor-pointer transition-colors"
              >
                Close Certificate Viewer
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
