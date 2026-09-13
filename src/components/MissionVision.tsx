import React from 'react';
import { Compass, Target } from 'lucide-react';
import { brandStatements } from '../data/statements';

export const MissionVision: React.FC = () => {
  const { mission, vision } = brandStatements;

  return (
    <section className="py-24 relative bg-obsidian border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Mission Block */}
          <div className="p-8 sm:p-10 rounded-2xl glass-panel border border-white/10 relative overflow-hidden flex flex-col justify-between hover:border-gold/30 transition-all group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-charcoal-surface border border-white/10 flex items-center justify-center text-gold">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-gold uppercase block">
                    FOUNDATIONAL PURPOSE
                  </span>
                  <h3 className="font-display font-bold text-lg text-white tracking-wide uppercase">
                    OUR MISSION
                  </h3>
                </div>
              </div>

              <blockquote className="text-base sm:text-lg text-titanium-light leading-relaxed font-light italic border-l-2 border-gold/60 pl-4 my-4">
                &ldquo;{mission}&rdquo;
              </blockquote>
            </div>

            <span className="text-[11px] uppercase tracking-widest text-titanium-muted font-mono pt-4 border-t border-white/5">
              Subash Reghan • Core Charter
            </span>
          </div>

          {/* Vision Block */}
          <div className="p-8 sm:p-10 rounded-2xl glass-panel border border-white/10 relative overflow-hidden flex flex-col justify-between hover:border-gold/30 transition-all group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-charcoal-surface border border-white/10 flex items-center justify-center text-gold">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-gold uppercase block">
                    LONG-TERM DESTINATION
                  </span>
                  <h3 className="font-display font-bold text-lg text-white tracking-wide uppercase">
                    OUR VISION
                  </h3>
                </div>
              </div>

              <blockquote className="text-base sm:text-lg text-white leading-relaxed font-light italic border-l-2 border-gold/60 pl-4 my-4">
                &ldquo;{vision}&rdquo;
              </blockquote>
            </div>

            <span className="text-[11px] uppercase tracking-widest text-titanium-muted font-mono pt-4 border-t border-white/5">
              Reghan Empire • Future Vision
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
