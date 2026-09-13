'use client';

import React from 'react';
import Image from 'next/image';
import { socialLinks } from '../data/social';
import { ArrowUp, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 bg-obsidian border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-charcoal-surface border border-white/10 flex items-center justify-center p-1.5 shadow-gold-sm">
            <Image
              src="/assets/images/logo_reghan.png"
              alt="REGHAN Logo"
              width={36}
              height={36}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm text-white tracking-widest uppercase">
              SUBASH REGHAN
            </h4>
            <p className="text-[10px] text-titanium-muted tracking-wider uppercase">
              Digital Marketer • Python Full Stack Developer • Reghan Empire
            </p>
          </div>
        </div>

        {/* Verified Social & Professional Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-titanium-muted">
          <a
            href={socialLinks.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={socialLinks.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            GitHub
          </a>
          <a
            href={socialLinks.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            WhatsApp
          </a>
          <a
            href={socialLinks.email.href}
            className="hover:text-gold transition-colors"
          >
            Email
          </a>
          <a
            href={socialLinks.resume.href}
            download={socialLinks.resume.fileName}
            className="hover:text-gold transition-colors inline-flex items-center gap-1"
          >
            <FileText className="w-3 h-3" />
            <span>Resume</span>
          </a>
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="flex items-center gap-4 text-[11px] text-titanium-muted">
          <span>© {currentYear} Subash Reghan. All rights reserved.</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-full glass-panel hover:text-gold hover:border-gold/30 transition-colors cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
