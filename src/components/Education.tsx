import React from 'react';
import { GraduationCap } from 'lucide-react';
import { profileData } from '../data/profile';

export const Education: React.FC = () => {
  return (
    <section className="py-20 relative bg-obsidian border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-mono tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>ACADEMIC QUALIFICATION</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide uppercase">
            EDUCATION
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
        </div>

        <div className="max-w-md mx-auto">
          <div className="p-8 sm:p-10 rounded-2xl glass-panel border border-white/10 hover:border-gold/30 transition-all text-center shadow-dark-card">
            <div className="w-14 h-14 rounded-2xl bg-charcoal-surface border border-white/10 flex items-center justify-center text-gold mx-auto mb-5 shadow-gold-sm">
              <GraduationCap className="w-7 h-7" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-gold block mb-2">
              Academic Degree
            </span>

            <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-wide uppercase mb-3">
              {profileData.education.degree}
            </h3>

            <p className="text-xs text-titanium leading-relaxed font-light">
              Foundational grounding in computer science principles, algorithms, data structures, and software engineering discipline.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
