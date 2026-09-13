import React from 'react';
import { futureRoadmap } from '../data/roadmap';

export const FuturePlans: React.FC = () => {
  return (
    <section className="py-24 relative bg-obsidian-light/30 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>ROADMAP & STRATEGY</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide uppercase mb-4">
            WHAT I&apos;M BUILDING TOWARD
          </h2>
          <p className="text-titanium text-sm sm:text-base font-light max-w-2xl mx-auto">
            A clear multi-stage roadmap defining the progression from engineering foundations to the Reghan Empire technology company vision.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </div>

        {/* 5 Stages Grid */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {futureRoadmap.map((stage) => (
            <div
              key={stage.stage}
              className={`p-6 sm:p-8 rounded-2xl glass-panel border transition-all ${
                stage.status === 'active'
                  ? 'border-gold/40 shadow-gold-sm bg-charcoal/80'
                  : 'border-white/5 hover:border-gold/20'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                {/* Left: Stage info */}
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold tracking-widest text-gold uppercase">
                      {stage.label}
                    </span>
                    <span
                      className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded font-mono ${
                        stage.status === 'active'
                          ? 'bg-gold/20 text-gold-light border border-gold/30'
                          : 'bg-white/5 text-titanium-muted'
                      }`}
                    >
                      {stage.status === 'active' ? 'Active Focus' : stage.status === 'upcoming' ? 'Next Horizon' : 'Long-Term Vision'}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-wide mb-2">
                    {stage.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-titanium font-light leading-relaxed">
                    {stage.objective}
                  </p>
                </div>

                {/* Right: Focus pills */}
                <div className="flex flex-wrap gap-2 lg:max-w-sm">
                  {stage.focusItems.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] px-3 py-1 rounded bg-charcoal-surface border border-white/5 text-titanium-light"
                    >
                      {item}
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
