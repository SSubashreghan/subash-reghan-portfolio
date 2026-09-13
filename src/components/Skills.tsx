'use client';

import React, { useState } from 'react';
import { Terminal, Megaphone, Film, Sparkles, Check, Compass } from 'lucide-react';
import { skillsCategories, SkillCategory } from '../data/skills';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getTabIcon = (id: string) => {
    switch (id) {
      case 'development':
        return <Terminal className="w-4 h-4" />;
      case 'marketing':
        return <Megaphone className="w-4 h-4" />;
      case 'creative':
        return <Film className="w-4 h-4" />;
      case 'emerging':
        return <Sparkles className="w-4 h-4" />;
      default:
        return <Compass className="w-4 h-4" />;
    }
  };

  const filteredCategories = activeTab === 'all'
    ? skillsCategories
    : skillsCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative bg-obsidian border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>TECHNICAL & COMMERCIAL TOOLKIT</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide uppercase mb-4">
            SKILLS & EXPERTISE
          </h2>
          <p className="text-titanium text-sm sm:text-base font-light max-w-2xl mx-auto">
            Practical skills in software development, digital marketing, and creative production, paired with active research into emerging AI technologies.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-display tracking-wider rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'all'
                ? 'bg-gold text-obsidian font-semibold shadow-gold-sm'
                : 'text-titanium hover:text-white glass-panel border border-white/5 hover:border-gold/20'
            }`}
          >
            <span>ALL DOMAINS</span>
          </button>
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 text-xs font-display tracking-wider rounded-lg transition-all flex items-center gap-2 ${
                activeTab === cat.id
                  ? 'bg-gold text-obsidian font-semibold shadow-gold-sm'
                  : 'text-titanium hover:text-white glass-panel border border-white/5 hover:border-gold/20'
              }`}
            >
              {getTabIcon(cat.id)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className={`p-8 sm:p-10 rounded-2xl glass-panel border transition-all duration-300 flex flex-col justify-between shadow-dark-card relative overflow-hidden group ${
                category.type === 'exploring'
                  ? 'border-gold/30 hover:border-gold/60'
                  : 'border-white/10 hover:border-gold/30'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-charcoal-surface border border-white/10 flex items-center justify-center text-gold group-hover:border-gold/30 transition-colors">
                      {getTabIcon(category.id)}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-wide uppercase group-hover:text-gold transition-colors">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded border ${
                      category.type === 'exploring'
                        ? 'bg-gold/10 text-gold-light border-gold/30'
                        : 'bg-charcoal text-titanium-muted border-white/10'
                    }`}
                  >
                    {category.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-titanium leading-relaxed mb-6 font-light">
                  {category.description}
                </p>

                {/* Skills Breakdown */}
                <div className="space-y-3 pt-4 border-t border-white/5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-lg bg-charcoal/50 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 hover:border-gold/20 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span className="text-xs text-white font-medium">{skill.name}</span>
                      </div>
                      <div className="flex items-center gap-2 pl-5 sm:pl-0">
                        <span className="text-[11px] text-titanium-muted font-light">{skill.focus}</span>
                        {skill.level && (
                          <span
                            className={`text-[9px] font-mono px-1.5 py-0.5 rounded tracking-wide ${
                              skill.level === 'Core'
                                ? 'bg-gold/15 text-gold-light'
                                : skill.level === 'Proficient'
                                ? 'bg-white/10 text-titanium-light'
                                : 'bg-gold/10 text-gold border border-gold/20'
                            }`}
                          >
                            {skill.level}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {category.type === 'exploring' && (
                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-titanium-muted font-light italic">
                  Note: Emerging technologies represent active research, prototyping, and personal projects, distinct from commercial client services.
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
