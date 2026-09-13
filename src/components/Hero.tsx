'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ChevronDown, Sparkles, Terminal, TrendingUp, Linkedin, Github, Mail, FileText } from 'lucide-react';
import { profileData } from '../data/profile';
import { socialLinks } from '../data/social';

interface HeroProps {
  onHireMeClick: () => void;
  onWorkTogetherClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onHireMeClick, onWorkTogetherClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const scrollToWork = () => {
    const workSection = document.getElementById('client-work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#060709]"
      onMouseMove={handleMouseMove}
    >
      {/* ========================================================================= */}
      {/* LUXURY AMBIENT BACKGROUND LAYER */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none bg-[#060709]">
        {/* Base Obsidian Layer */}
        <div className="absolute inset-0 bg-[#060709]" />

        {/* Soft Ambient Gold Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] max-w-[950px] h-[55vh] rounded-full bg-gold/[0.05] blur-[150px] pointer-events-none" />

        {/* Soft Edge Falloff & Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#060709_85%)] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#060709] via-[#060709]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#060709] via-[#060709]/80 to-transparent pointer-events-none" />

        {/* Architectural Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '56px 56px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Brand & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Verified Identity Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-gold/20 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-display tracking-[0.25em] text-gold-light uppercase font-semibold">
                {profileData.name}
              </span>
              <span className="text-titanium-dark">•</span>
              <span className="text-[11px] tracking-wider text-titanium-muted">
                {profileData.corePositioning}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white mb-6">
              <span className="block uppercase tracking-wider text-silver-gradient">
                {profileData.heroHeadline.primary}
              </span>
              <span className="block text-gold text-2xl sm:text-4xl my-1 font-light opacity-80">+</span>
              <span className="block uppercase tracking-wider text-gold-gradient">
                {profileData.heroHeadline.secondary}
              </span>
            </h1>

            {/* Supporting line */}
            <p className="text-titanium text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-light">
              {profileData.heroSummary}
            </p>

            {/* Core Focus Pills */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs tracking-wider font-medium text-titanium-light bg-charcoal/80 border border-white/5 rounded-md">
                <TrendingUp className="w-3.5 h-3.5 text-gold" />
                Digital Marketing & Growth
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs tracking-wider font-medium text-titanium-light bg-charcoal/80 border border-white/5 rounded-md">
                <Terminal className="w-3.5 h-3.5 text-gold" />
                Python Full Stack
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs tracking-wider font-medium text-titanium-light bg-charcoal/80 border border-gold/20 rounded-md">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                Reghan Empire (Vision)
              </span>
            </div>

            {/* Primary & Secondary CTAs (Section 13) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              {/* Primary CTA: HIRE ME */}
              <button
                type="button"
                onClick={onHireMeClick}
                className="px-8 py-3.5 text-xs font-semibold tracking-widest text-obsidian uppercase bg-gradient-to-r from-gold-light via-gold to-gold-dark hover:brightness-110 active:scale-95 transition-all rounded-md shadow-gold-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>HIRE ME</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA: Let's Work Together */}
              <button
                type="button"
                onClick={onWorkTogetherClick}
                className="px-8 py-3.5 text-xs font-semibold tracking-widest text-titanium-light uppercase hover:text-white glass-panel border border-white/10 hover:border-gold/40 hover:bg-white/5 active:scale-95 transition-all rounded-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>LET&apos;S WORK TOGETHER</span>
              </button>
            </div>

            {/* Verified Professional Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5 w-full">
              <span className="text-[11px] font-mono uppercase tracking-widest text-titanium-muted">
                Profiles:
              </span>
              <a
                href={socialLinks.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-titanium hover:text-gold transition-colors"
                aria-label="Subash Reghan LinkedIn profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-gold" />
                <span>LinkedIn</span>
              </a>
              <a
                href={socialLinks.github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-titanium hover:text-gold transition-colors"
                aria-label="Subash Reghan GitHub profile"
              >
                <Github className="w-3.5 h-3.5 text-gold" />
                <span>GitHub</span>
              </a>
              <a
                href={socialLinks.email.href}
                className="inline-flex items-center gap-1.5 text-xs text-titanium hover:text-gold transition-colors"
                aria-label="Email Subash Reghan"
              >
                <Mail className="w-3.5 h-3.5 text-gold" />
                <span>Email</span>
              </a>
              <a
                href={socialLinks.resume.href}
                download={socialLinks.resume.fileName}
                className="inline-flex items-center gap-1.5 text-xs text-gold hover:underline font-medium"
                aria-label="Download resume PDF"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume (PDF)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Face-Focused Golden Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div
              className="relative w-64 sm:w-80 md:w-96 aspect-square transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`
              }}
            >
              {/* Strategic Gold Rim Glow */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-gold/20 via-transparent to-gold/30 blur-xl opacity-70" />
              
              {/* Outer Metallic Border Frame */}
              <div className="relative w-full h-full rounded-2xl p-[1px] bg-gradient-to-b from-gold/40 via-white/10 to-transparent">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-obsidian-card">
                  {/* Portrait image - Strictly face-focused */}
                  <Image
                    src="/assets/images/subash_hero_portrait.jpg"
                    alt="Subash Reghan — Portrait"
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[1.02] transition-transform duration-700 hover:scale-105"
                  />

                  {/* Subtle Vignette & Bottom Fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-50 pointer-events-none" />

                  {/* Corner Accent Badge */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-obsidian/85 backdrop-blur-md border border-gold/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-[10px] tracking-wider uppercase font-display text-titanium-light font-medium">
                      Subash Reghan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-titanium-muted hover:text-gold transition-colors"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-display">SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-gold/70" />
      </a>
    </section>
  );
};
