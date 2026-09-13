import React from 'react';
import { Layers, Terminal, Sparkles } from 'lucide-react';
import { projectsEmptyState } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative bg-obsidian-light/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>ENGINEERING PIPELINE</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide uppercase mb-4">
            PROJECTS
          </h2>
          <p className="text-titanium text-sm sm:text-base font-light max-w-2xl mx-auto">
            Active full-stack Python platforms, API integrations, and practical software solutions currently being built and tested.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </div>

        {/* Intentional, High-End Empty State */}
        <div className="max-w-4xl mx-auto p-8 sm:p-14 rounded-3xl glass-panel border border-gold/20 relative overflow-hidden shadow-dark-card text-center">
          
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold-light text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            {projectsEmptyState.badge}
          </div>

          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-wide uppercase mb-4">
            {projectsEmptyState.title}
          </h3>

          <p className="text-titanium text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light mb-10">
            {projectsEmptyState.description}
          </p>

          {/* Active Focus Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-3xl mx-auto mb-8">
            {projectsEmptyState.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-charcoal/70 border border-white/5 hover:border-gold/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-charcoal-surface border border-white/10 flex items-center justify-center text-gold mb-3">
                  {idx === 0 ? <Terminal className="w-4 h-4" /> : idx === 1 ? <Sparkles className="w-4 h-4" /> : <Layers className="w-4 h-4" />}
                </div>
                <h4 className="font-display font-semibold text-sm text-white mb-1">
                  {area.title}
                </h4>
                <p className="text-xs text-titanium-muted font-light leading-relaxed">
                  {area.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="text-xs text-titanium-muted tracking-wider uppercase font-mono">
            Structured Schema Initialized • Centralized Data Architecture Ready
          </div>
        </div>

      </div>
    </section>
  );
};
