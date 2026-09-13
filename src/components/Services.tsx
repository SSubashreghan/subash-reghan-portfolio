'use client';

import React from 'react';
import { Megaphone, Globe, Code2, Film, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';
import { servicesData, ServiceItem } from '../data/services';

interface ServicesProps {
  onSelectService?: (inquiryType: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'Megaphone':
        return <Megaphone className="w-6 h-6 text-gold" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-gold" />;
      case 'Code':
        return <Code2 className="w-6 h-6 text-gold" />;
      case 'Video':
        return <Film className="w-6 h-6 text-gold" />;
      default:
        return <Sparkles className="w-6 h-6 text-gold" />;
    }
  };

  const handleInquire = (inquiryType: string) => {
    if (onSelectService) {
      onSelectService(inquiryType);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative bg-obsidian-light/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>SOLUTIONS & DELIVERABLES</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide uppercase mb-4">
            SERVICES PROVIDED
          </h2>
          <p className="text-titanium text-sm sm:text-base font-light max-w-2xl mx-auto">
            Practical technology and digital growth services tailored for commercial clients, businesses, and founders seeking measurable results.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </div>

        {/* Services Grid: 4 Core Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-8 sm:p-10 rounded-2xl glass-panel border border-white/10 hover:border-gold/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-dark-card relative overflow-hidden"
            >
              {/* Subtle ambient accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/[0.03] rounded-full blur-3xl pointer-events-none group-hover:bg-gold/[0.08] transition-colors" />

              <div>
                {/* Card Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-charcoal-surface border border-white/10 flex items-center justify-center group-hover:border-gold/40 group-hover:bg-gold/10 transition-colors shadow-gold-sm">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gold px-3 py-1 rounded-full bg-obsidian border border-gold/20">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-wide mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-xs sm:text-sm text-titanium leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-white/5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-titanium-muted block mb-2">
                    Key Deliverables
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-titanium-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Business Benefit Box */}
                <div className="p-3.5 rounded-xl bg-charcoal/60 border border-white/5 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gold-light block mb-1">
                    Value to Your Business
                  </span>
                  <p className="text-xs text-titanium font-light leading-relaxed">
                    {service.businessBenefit}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleInquire(service.inquiryType)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-wider text-titanium-light hover:text-white uppercase glass-panel border border-white/10 hover:border-gold/50 hover:bg-white/5 active:scale-95 transition-all rounded-lg group-hover:border-gold/30"
                >
                  <span>Inquire About This Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
