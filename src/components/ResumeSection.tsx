import React from 'react';
import { Download, FileText } from 'lucide-react';
import { socialLinks } from '../data/social';

export const ResumeSection: React.FC = () => {
  return (
    <section className="py-20 relative bg-obsidian-light/50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="max-w-2xl mx-auto p-8 sm:p-10 rounded-2xl glass-panel border border-gold/20 shadow-dark-card">
          <div className="w-12 h-12 rounded-xl bg-charcoal-surface border border-white/10 flex items-center justify-center text-gold mx-auto mb-4 shadow-gold-sm">
            <FileText className="w-6 h-6" />
          </div>

          <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold block mb-2">
            OFFICIAL CREDENTIALS
          </span>

          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-wide uppercase mb-3">
            CURRICULUM VITAE & RESUME
          </h2>

          <p className="text-titanium text-xs sm:text-sm leading-relaxed max-w-md mx-auto mb-6 font-light">
            Verified academic qualification (B.Sc. Computer Science), Python & full-stack development skills, digital marketing campaign achievements, and professional background.
          </p>

          <a
            href={socialLinks.resume.href}
            download={socialLinks.resume.fileName}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 text-xs font-semibold tracking-widest text-obsidian uppercase bg-gradient-to-r from-gold-light via-gold to-gold-dark hover:brightness-110 active:scale-95 transition-all rounded-md shadow-gold-sm cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD RESUME (PDF)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
