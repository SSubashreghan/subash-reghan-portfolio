import React from 'react';
import Image from 'next/image';
import { brandStatements } from '../data/statements';

export const ReghanEmpire: React.FC = () => {
  const { reghanEmpire } = brandStatements;

  return (
    <section id="vision" className="py-28 relative bg-obsidian overflow-hidden border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Emblem & Brand Title Lockup */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-8">
            <div className="absolute -inset-4 bg-gold/15 rounded-full blur-2xl pointer-events-none" />
            <Image
              src="/assets/images/logo_reghan.png"
              alt="REGHAN EMPIRE Emblem"
              width={144}
              height={144}
              className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_15px_30px_rgba(212,175,55,0.35)]"
            />
          </div>

          <span className="text-xs font-display tracking-[0.35em] text-gold uppercase font-semibold block mb-3">
            {reghanEmpire.subtitle}
          </span>

          <h2 className="metallic-3d-text text-3xl sm:text-5xl lg:text-6xl tracking-[0.2em] uppercase font-bold text-white mb-6">
            {reghanEmpire.title}
          </h2>

          <p className="text-titanium text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-light">
            {reghanEmpire.summary}
          </p>

          <div className="inline-flex items-center gap-2 mt-6 px-4 py-1.5 rounded-full bg-charcoal border border-white/10 text-xs text-titanium-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/80" />
            <span>Framed as a long-term technology vision • Real-world problem solving</span>
          </div>
        </div>

        {/* 4 Pillars of the Future Ecosystem */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reghanEmpire.pillars.map((pillar) => (
            <div
              key={pillar.name}
              className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/5 hover:border-gold/40 transition-all flex flex-col justify-between group hover:-translate-y-1 shadow-dark-card"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-charcoal-surface border border-white/10 flex items-center justify-center text-gold mb-4 group-hover:border-gold/30">
                  <span className="font-mono text-xs font-bold text-gold">RE</span>
                </div>
                <h3 className="font-display font-semibold text-base text-white uppercase tracking-wider mb-2 group-hover:text-gold transition-colors">
                  {pillar.name}
                </h3>
                <p className="text-xs text-titanium font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
