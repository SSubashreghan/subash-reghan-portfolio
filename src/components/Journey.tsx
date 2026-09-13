import React from 'react';
import { journeyMilestones } from '../data/journey';

export const Journey: React.FC = () => {
  return (
    <section className="py-24 relative bg-obsidian-light/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>EVOLUTION & PROGRESSION</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide uppercase mb-4">
            MY JOURNEY
          </h2>
          <p className="text-titanium text-sm sm:text-base font-light max-w-2xl mx-auto">
            A deliberate path of continuous capability building—bridging foundational computer science, performance digital marketing, and the Reghan Empire vision.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </div>

        {/* Timeline Flow */}
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l border-gold/30 ml-4 sm:ml-32 space-y-10 pl-6 sm:pl-8">
            {journeyMilestones.map((item) => (
              <div key={item.step} className="relative group">
                {/* Step indicator on axis */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-mono transition-colors ${
                    item.type === 'present'
                      ? 'bg-gold border-white text-obsidian font-bold shadow-gold-sm'
                      : item.type === 'future'
                      ? 'bg-obsidian border-gold/60 text-gold'
                      : 'bg-charcoal border-titanium-dark text-titanium'
                  }`}
                >
                  {item.step}
                </div>

                {/* Content Box */}
                <div className="p-5 sm:p-6 rounded-xl glass-panel border border-white/5 hover:border-gold/30 transition-all shadow-dark-card">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-gold transition-colors uppercase tracking-wider">
                      {item.label}
                    </h3>
                    <span
                      className={`text-[9px] uppercase tracking-wider font-mono px-2 py-0.5 rounded ${
                        item.type === 'present'
                          ? 'bg-gold/20 text-gold-light border border-gold/30'
                          : item.type === 'future'
                          ? 'bg-white/5 text-titanium-muted border border-white/10'
                          : 'text-titanium-muted'
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>
                  <p className="text-xs text-titanium font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
