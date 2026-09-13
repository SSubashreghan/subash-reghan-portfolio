import React from 'react';
import { GraduationCap, Briefcase, Compass } from 'lucide-react';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-obsidian-light/50 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide uppercase mb-4">
            {profileData.aboutTitle}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </div>

        {/* Story Narrative & Strategic Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Text */}
          <div className="lg:col-span-7 space-y-6 text-titanium text-base sm:text-lg leading-relaxed font-light">
            <p className="p-5 rounded-xl glass-panel border-l-2 border-gold/70 text-titanium-light">
              {profileData.aboutStory.intro}
            </p>
            <p>
              {profileData.aboutStory.philosophy}
            </p>
            <p className="text-titanium-light font-normal">
              {profileData.aboutStory.vision}
            </p>

            {/* Fast verified facts pill box */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              <div className="p-3 rounded-lg bg-charcoal/50 border border-white/5">
                <span className="text-[11px] text-titanium-muted uppercase tracking-wider block">Degree</span>
                <span className="text-xs text-white font-medium">B.Sc. Computer Science</span>
              </div>
              <div className="p-3 rounded-lg bg-charcoal/50 border border-white/5">
                <span className="text-[11px] text-titanium-muted uppercase tracking-wider block">Current Role</span>
                <span className="text-xs text-white font-medium">Digital Marketer (2025)</span>
              </div>
              <div className="p-3 rounded-lg bg-charcoal/50 border border-white/5">
                <span className="text-[11px] text-titanium-muted uppercase tracking-wider block">Core Domain</span>
                <span className="text-xs text-gold-light font-medium">Technology + Business</span>
              </div>
            </div>
          </div>

          {/* Strategic Attributes Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="p-6 rounded-xl glass-panel border border-white/5 hover:border-gold/30 transition-all group">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-charcoal-surface flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-sm tracking-wide uppercase">
                    Computer Science Discipline
                  </h3>
                  <p className="text-xs text-titanium-muted">{profileData.education.degree}</p>
                </div>
              </div>
              <p className="text-xs text-titanium leading-relaxed font-light">
                Strong theoretical and practical foundation in algorithms, relational schemas, data architectures, and software engineering.
              </p>
            </div>

            <div className="p-6 rounded-xl glass-panel border border-white/5 hover:border-gold/30 transition-all group">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-charcoal-surface flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-sm tracking-wide uppercase">
                    Commercial Acumen
                  </h3>
                  <p className="text-xs text-titanium-muted">Digital Marketing & Performance</p>
                </div>
              </div>
              <p className="text-xs text-titanium leading-relaxed font-light">
                Direct client campaign execution, audience profiling, Google & Meta Ads acquisition, and conversion funnel optimization.
              </p>
            </div>

            <div className="p-6 rounded-xl glass-panel border border-white/5 hover:border-gold/30 transition-all group">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-charcoal-surface flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-sm tracking-wide uppercase">
                    Entrepreneurial Direction
                  </h3>
                  <p className="text-xs text-titanium-muted">Reghan Empire Vision</p>
                </div>
              </div>
              <p className="text-xs text-titanium leading-relaxed font-light">
                Methodically engineering capabilities toward practical software, intelligent automation, and sustainable technology ventures.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
