import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Deep Elegant Gradient Canvas Underlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-100/90" />

      {/* 2. Luminous Animated Ambient Glow Spheres (Professional Tech Aura) */}
      <div 
        className="absolute -top-40 -left-40 w-[34rem] h-[34rem] rounded-full bg-gradient-to-tr from-blue-500/18 via-indigo-400/15 to-sky-300/10 blur-[100px] animate-float-slow"
      />
      <div 
        className="absolute top-1/4 -right-40 w-[38rem] h-[38rem] rounded-full bg-gradient-to-bl from-indigo-500/15 via-violet-400/12 to-blue-300/10 blur-[110px] animate-float-reverse"
      />
      <div 
        className="absolute top-2/3 -left-32 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-cyan-400/15 via-blue-500/12 to-transparent blur-[90px] animate-pulse-slow"
      />
      <div 
        className="absolute -bottom-36 right-1/4 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-blue-600/12 via-teal-400/10 to-indigo-500/15 blur-[100px] animate-float-diagonal"
      />

      {/* 3. High-Tech Continuous Moving Grid Mesh */}
      <div className="absolute inset-0 bg-subtle-grid-animated opacity-55" />

      {/* 4. Glowing Ambient Radial Light Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.12),_transparent_70%)]" />

      {/* 5. Floating Interactive Particles & Micro Sparks */}
      <div className="absolute inset-0">
        <span className="particle particle-1" />
        <span className="particle particle-2" />
        <span className="particle particle-3" />
        <span className="particle particle-4" />
        <span className="particle particle-5" />
        <span className="particle particle-6" />
        <span className="particle particle-7" />
        <span className="particle particle-8" />
        <span className="particle particle-9" />
        <span className="particle particle-10" />
      </div>

      {/* 6. Soft Perimeter Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(241,245,249,0.4)_100%)]" />
    </div>
  );
};

