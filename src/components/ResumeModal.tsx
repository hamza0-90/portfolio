import React, { useState } from 'react';
import { personalInfo, educationData, experienceData, certificationsData, projectsData, skillGroupsData } from '../data/portfolioData';
import { Logo } from './Logo';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  const [copiedText, setCopiedText] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyTextCV = () => {
    const cvText = `HAMZA KHALID - SOFTWARE ENGINEER
Email: ${personalInfo.email} | Phone: ${personalInfo.phone} | Location: ${personalInfo.location}
LinkedIn: ${personalInfo.linkedIn}

PROFILE SUMMARY
${personalInfo.bio}

EDUCATION
${educationData.map(e => `• ${e.degree} - ${e.institution} (${e.period})`).join('\n')}

TECHNICAL SKILLS
• Programming: Python, Java, SQL, PHP, JavaScript, TypeScript
• Web & Mobile: React 19, Flutter & Dart, Node.js, Express, Tailwind CSS, HTML5/CSS3
• AI & ML: Generative AI, LLMs, Attention Mechanisms, n8n AI Agents, NLP, Steganography
• Systems & DB: Linux, Parrot OS, MySQL, PostgreSQL, Relational DB Normalization (3NF)

KEY PROJECTS
${projectsData.slice(0, 5).map(p => `• ${p.title} (${p.period}): ${p.tagline}`).join('\n')}

VERIFIED CERTIFICATIONS
${certificationsData.map(c => `• ${c.title} - ${c.issuer} (${c.issueDate}${c.credentialCode ? `, Code: ${c.credentialCode}` : ''})`).join('\n')}

EXPERIENCE & INTERNSHIPS
${experienceData.map(ex => `• ${ex.role} at ${ex.company} (${ex.period})`).join('\n')}

LANGUAGES
• Urdu (Native) | English (Professional Working Proficiency)
`;

    navigator.clipboard.writeText(cvText);
    setCopiedText(true);
    confetti({ particleCount: 30, spread: 60 });
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl max-h-[92vh] bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
      >
        {/* Modal Toolbar */}
        <div className="p-4 sm:px-6 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              <span className="stylish-name-gradient font-black">Hamza Khalid</span> - Curriculum Vitae
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyTextCV}
              className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all border border-slate-200 shadow-sm cursor-pointer"
            >
              {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedText ? 'Copied Text' : 'Copy Text CV'}</span>
            </button>

            <button
              onClick={handlePrint}
              id="resume-print-btn"
              className="px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200 cursor-pointer ml-1"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Paper */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-800 font-sans space-y-8 print:p-0">
          {/* Header */}
          <div className="border-b border-slate-200 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
                  Hamza Khalid
                </h1>
                <p className="text-blue-700 font-semibold text-base mt-0.5">
                  Software Engineer & AI Developer
                </p>
              </div>

              <div className="text-xs text-slate-600 space-y-1 font-mono">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                  <a href={personalInfo.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700">
                    linkedin.com/in/hamza-khalid-629a20299/
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono tracking-widest text-blue-700 uppercase border-b border-slate-200 pb-1">
              Profile Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono tracking-widest text-blue-700 uppercase border-b border-slate-200 pb-1">
              Technical Core Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <strong className="text-slate-900">Programming:</strong> Python, Java, SQL, PHP, JavaScript, TypeScript
              </div>
              <div>
                <strong className="text-slate-900">Frameworks & Web:</strong> React (18/19), Flutter, Node.js, Express, Tailwind CSS
              </div>
              <div>
                <strong className="text-slate-900">AI / ML & Agents:</strong> Generative AI, Attention Mechanisms, LLMs, n8n AI Agents, NLP
              </div>
              <div>
                <strong className="text-slate-900">Tools & OS:</strong> Linux, Parrot OS, Git/GitHub, Android Studio, MySQL, PostgreSQL
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold font-mono tracking-widest text-blue-700 uppercase border-b border-slate-200 pb-1">
              Education
            </h2>
            <div className="space-y-2 text-xs">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-slate-900">{edu.degree}</div>
                    <div className="text-slate-600">{edu.institution}, {edu.location}</div>
                  </div>
                  <span className="font-mono text-blue-700 font-semibold">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold font-mono tracking-widest text-blue-700 uppercase border-b border-slate-200 pb-1">
              Experience & Internships
            </h2>
            <div className="space-y-3 text-xs">
              {experienceData.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex justify-between items-start">
                    <div className="font-bold text-slate-900">
                      {exp.role} — <span className="text-blue-700">{exp.company}</span>
                    </div>
                    <span className="font-mono text-slate-500">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 space-y-0.5 pl-1">
                    {exp.description.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold font-mono tracking-widest text-blue-700 uppercase border-b border-slate-200 pb-1">
              Key Projects
            </h2>
            <div className="space-y-2 text-xs">
              {projectsData.slice(0, 6).map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-900">
                      {proj.title} <span className="font-normal text-slate-500">({proj.techStack.slice(0, 4).join(', ')})</span>
                    </span>
                    <span className="font-mono text-slate-500">{proj.period}</span>
                  </div>
                  <p className="text-slate-600 mt-0.5">{proj.tagline}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold font-mono tracking-widest text-blue-700 uppercase border-b border-slate-200 pb-1">
              Verified International Certifications (14+)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificationsData.map((c) => (
                <div key={c.id} className="p-2 rounded bg-slate-50 border border-slate-200">
                  <div className="font-semibold text-slate-900">{c.title}</div>
                  <div className="text-[11px] text-slate-500">
                    {c.issuer} • {c.issueDate} {c.credentialCode ? `(ID: ${c.credentialCode})` : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-1">
            <h2 className="text-xs font-bold font-mono tracking-widest text-blue-700 uppercase border-b border-slate-200 pb-1">
              Languages
            </h2>
            <p className="text-xs text-slate-700">
              <strong>Urdu:</strong> Native | <strong>English:</strong> Professional Working Proficiency
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
