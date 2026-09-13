import React from 'react';
import { MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import { currentExperience } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-obsidian-light/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>VERIFIED INDUSTRY TRACK RECORD</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide uppercase mb-4">
            CURRENT EXPERIENCE
          </h2>
          <p className="text-titanium text-sm sm:text-base font-light max-w-2xl mx-auto">
            Hands-on commercial impact, lead acquisition campaigns, and web development deliverables in my current industry role.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-10 rounded-2xl glass-panel border border-white/10 hover:border-gold/30 transition-all shadow-dark-card relative overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold-light text-xs font-medium uppercase tracking-wider mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  {currentExperience.employmentType} • {currentExperience.startDate} – {currentExperience.endDate}
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-wide">
                  {currentExperience.role}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-titanium">
                  <span className="text-white font-medium">{currentExperience.company}</span>
                  <span className="text-titanium-muted">•</span>
                  <span className="flex items-center gap-1 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    {currentExperience.location}
                  </span>
                </div>
              </div>

              {/* Company Website Link */}
              <a
                href={currentExperience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider text-titanium-light hover:text-gold uppercase rounded-lg glass-panel border border-white/10 hover:border-gold/30 transition-all w-fit focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <span>Visit Company</span>
                <ExternalLink className="w-3.5 h-3.5 text-gold" />
              </a>
            </div>

            {/* Experience Summary */}
            <p className="text-titanium text-sm sm:text-base leading-relaxed py-6 font-light">
              {currentExperience.summary}
            </p>

            {/* Responsibilities list */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-widest text-titanium-muted font-display font-semibold">
                Key Responsibilities & Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentExperience.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-charcoal/50 border border-white/5">
                    <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span className="text-xs text-titanium-light leading-snug font-light">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
