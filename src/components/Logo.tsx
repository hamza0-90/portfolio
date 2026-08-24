import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textClassName?: string;
  subtextClassName?: string;
  showStatus?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = false,
  textClassName = '',
  subtextClassName = '',
  showStatus = false,
}) => {
  const sizeMap = {
    sm: {
      container: 'w-8 h-8',
      text: 'text-sm',
      sub: 'text-[10px]',
    },
    md: {
      container: 'w-10 h-10',
      text: 'text-base',
      sub: 'text-xs',
    },
    lg: {
      container: 'w-12 h-12',
      text: 'text-lg',
      sub: 'text-xs',
    },
    xl: {
      container: 'w-16 h-16',
      text: 'text-2xl',
      sub: 'text-sm',
    },
  };

  const currentSize = sizeMap[size];

  return (
    <div className="inline-flex items-center gap-3 group select-none cursor-pointer">
      {/* Dynamic AI Neural Reactor / Quantum Neural Core Emblem */}
      <div className={`relative ${currentSize.container} flex items-center justify-center`}>
        {/* 1. Ambient Pulsing Neural Glow Aura */}
        <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 rounded-2xl blur-md opacity-75 group-hover:opacity-100 group-hover:scale-115 transition-all duration-500 animate-pulse-slow" />

        {/* 2. Outer Rotating Orbital Particle Ring (Cybernetic AI Ring) */}
        <div className="absolute inset-[-3px] rounded-2xl border border-cyan-400/30 opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

        {/* 3. Dark Futuristic Glass Body */}
        <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-[1.5px] shadow-2xl shadow-blue-500/30 border border-white/20 backdrop-blur-xl overflow-hidden transition-all duration-300 group-hover:border-cyan-400/80 group-hover:shadow-cyan-500/40">
          
          {/* Shimmering Holographic Scanline Sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

          {/* Core Visual SVG: AI Neural Brain / Quantum AI Processor Chip */}
          <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center p-1 relative overflow-hidden">
            {/* Background Cyber Grid Matrix */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(6,182,212,0.35),_transparent_70%)]" />

            <svg
              viewBox="0 0 100 100"
              className="w-full h-full relative z-10 transition-transform duration-300 group-hover:scale-110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* AI Cyan Electric Gradient */}
                <linearGradient id="ai-cyan-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>

                {/* AI Magenta-Violet Intelligence Gradient */}
                <linearGradient id="ai-violet-glow" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>

                {/* Sparkle Glow Core Filter */}
                <filter id="ai-core-blur" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* 1. Outer Neural Network Poly Connector Ring */}
              <polygon
                points="50,12 83,31 83,69 50,88 17,69 17,31"
                stroke="url(#ai-cyan-glow)"
                strokeWidth="2"
                strokeDasharray="6 3"
                opacity="0.85"
                fill="none"
              />

              {/* 2. Synaptic Neural Connections (Circuit Pathways) */}
              <line x1="50" y1="50" x2="50" y2="12" stroke="url(#ai-cyan-glow)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="50" y1="50" x2="83" y2="31" stroke="url(#ai-violet-glow)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="50" y1="50" x2="83" y2="69" stroke="url(#ai-violet-glow)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="50" y1="50" x2="50" y2="88" stroke="url(#ai-cyan-glow)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="50" y1="50" x2="17" y2="69" stroke="url(#ai-cyan-glow)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="50" y1="50" x2="17" y2="31" stroke="url(#ai-cyan-glow)" strokeWidth="2.5" strokeLinecap="round" />

              {/* 3. AI Brain / Quantum Spark Core Symbol (Isometric Diamond AI Chip) */}
              <polygon
                points="50,28 69,50 50,72 31,50"
                fill="url(#ai-cyan-glow)"
                opacity="0.9"
              />
              <polygon
                points="50,34 62,50 50,66 38,50"
                fill="url(#ai-violet-glow)"
              />

              {/* 4. Central Glowing AI Spark (4-Point Nova Sparkle) */}
              <path
                d="M 50 40 Q 50 50 60 50 Q 50 50 50 60 Q 50 50 40 50 Q 50 50 50 40 Z"
                fill="#ffffff"
                filter="url(#ai-core-blur)"
              />
              <circle cx="50" cy="50" r="3" fill="#ffffff" />

              {/* 5. Outer Synaptic Data Nodes (Glowing Nodes) */}
              <circle cx="50" cy="12" r="3.5" fill="#22d3ee" className="animate-ping opacity-80" />
              <circle cx="50" cy="12" r="2.5" fill="#ffffff" />

              <circle cx="83" cy="31" r="3" fill="#a855f7" />
              <circle cx="83" cy="31" r="1.5" fill="#ffffff" />

              <circle cx="83" cy="69" r="3" fill="#ec4899" />
              <circle cx="83" cy="69" r="1.5" fill="#ffffff" />

              <circle cx="50" cy="88" r="3" fill="#0284c7" />
              <circle cx="50" cy="88" r="1.5" fill="#ffffff" />

              <circle cx="17" cy="69" r="3" fill="#2563eb" />
              <circle cx="17" cy="69" r="1.5" fill="#ffffff" />

              <circle cx="17" cy="31" r="3" fill="#22d3ee" />
              <circle cx="17" cy="31" r="1.5" fill="#ffffff" />
            </svg>
          </div>
        </div>
      </div>

      {/* Optional Brand Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black tracking-tight stylish-name-gradient group-hover:scale-[1.01] transition-transform ${currentSize.text} ${textClassName}`}
            >
              Hamza Khalid
            </span>
            {showStatus && (
              <span className="relative flex h-2.5 w-2.5 ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-white"></span>
              </span>
            )}
          </div>
          <span
            className={`font-mono font-semibold text-slate-500 group-hover:text-blue-600 transition-colors ${currentSize.sub} ${subtextClassName}`}
          >
            Software Engineer & AI Architect
          </span>
        </div>
      )}
    </div>
  );
};
