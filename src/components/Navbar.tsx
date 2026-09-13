'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { socialLinks } from '../data/social';

interface NavbarProps {
  onHireMeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onHireMeClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Exact navigation items per Section 39 of Master Audit specification
  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'CLIENT WORK', href: '#client-work' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'VISION', href: '#vision' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Brand Identity */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gold/50 rounded-lg p-1"
          aria-label="Subash Reghan Portfolio Home"
        >
          <div className="w-9 h-9 rounded-lg bg-charcoal-surface border border-white/10 flex items-center justify-center p-1.5 group-hover:border-gold/40 transition-colors">
            <Image
              src="/assets/images/logo_reghan.png"
              alt="REGHAN Logo"
              width={36}
              height={36}
              className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(212,175,55,0.3)]"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-[0.18em] text-white group-hover:text-gold transition-colors">
              REGHAN
            </span>
            <span className="text-[9px] tracking-[0.22em] text-titanium-muted uppercase">
              TECHNOLOGY × BUSINESS
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-[0.14em] text-titanium hover:text-gold transition-colors font-medium relative py-1 focus:outline-none focus:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary CTA: HIRE ME */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onHireMeClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider text-obsidian bg-gradient-to-r from-gold-light via-gold to-gold-dark hover:brightness-110 active:scale-95 transition-all rounded-md shadow-gold-sm cursor-pointer"
          >
            <span>HIRE ME</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-titanium hover:text-white rounded-lg glass-panel focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[62px] bg-obsidian/98 backdrop-blur-2xl z-50 px-6 py-6 flex flex-col justify-between border-t border-white/5 animate-in fade-in duration-200 overflow-y-auto max-h-[calc(100vh-62px)]">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-[0.18em] text-titanium-light hover:text-gold transition-colors font-display font-medium border-b border-white/5 pb-2.5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-titanium-muted" />
              </a>
            ))}
          </nav>

          <div className="space-y-4 pt-6 border-t border-white/10 mt-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onHireMeClick();
              }}
              className="w-full py-3 text-center text-xs font-semibold tracking-widest text-obsidian uppercase bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-lg shadow-gold-sm"
            >
              HIRE ME
            </button>
            <div className="flex justify-center gap-6 pt-2 text-xs text-titanium-muted">
              <a href={socialLinks.linkedin.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                LinkedIn
              </a>
              <a href={socialLinks.whatsapp.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                WhatsApp
              </a>
              <a href={socialLinks.github.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                GitHub
              </a>
              <a href={socialLinks.resume.href} download={socialLinks.resume.fileName} className="hover:text-gold">
                Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
