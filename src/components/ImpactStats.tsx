import React, { useState, useEffect, useRef } from 'react';
import { impactMetrics } from '../data/experience';

export const ImpactStats: React.FC = () => {
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState(impactMetrics.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const duration = 1600;
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounts(
        impactMetrics.map((metric) =>
          Math.min(metric.value, Math.round((metric.value / steps) * step))
        )
      );

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [inView]);

  return (
    <section ref={sectionRef} className="py-20 relative bg-obsidian border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactMetrics.map((metric, idx) => (
            <div
              key={metric.label}
              className="p-8 rounded-2xl glass-panel border border-white/5 text-center relative overflow-hidden group hover:border-gold/30 transition-colors"
            >
              {/* Number Count Display */}
              <div className="font-display font-bold text-4xl sm:text-5xl text-gold-gradient tracking-tight mb-2">
                {counts[idx]}
                {metric.suffix}
              </div>

              {/* Label */}
              <div className="text-xs uppercase tracking-[0.2em] font-display font-semibold text-white mb-2">
                {metric.label}
              </div>

              {/* Sublabel context */}
              <p className="text-xs text-titanium-muted font-light max-w-xs mx-auto">
                {metric.sublabel}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
