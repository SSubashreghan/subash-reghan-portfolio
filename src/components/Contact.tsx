'use client';

import React, { useState, useEffect } from 'react';
import { Mail, MessageSquare, Linkedin, Github, Send, ArrowUpRight, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';
import { socialLinks } from '../data/social';

interface ContactProps {
  initialInquiryType?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialInquiryType = 'Digital Marketing & Lead Gen' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: initialInquiryType,
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedSuccess, setSubmittedSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (initialInquiryType) {
      setFormData(prev => ({ ...prev, inquiryType: initialInquiryType }));
    }
  }, [initialInquiryType]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please include a brief message (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const text = `Hello Subash,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\nInquiry Domain: ${formData.inquiryType}\n\nMessage:\n${formData.message.trim()}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/916369658422?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setSubmittedSuccess('Redirecting to WhatsApp to send your inquiry...');
  };

  const handleEmailSend = () => {
    if (!validate()) return;

    const subject = encodeURIComponent(`Project Inquiry: ${formData.inquiryType} — ${formData.name.trim()}`);
    const body = encodeURIComponent(
      `Hello Subash,\n\nMy name is ${formData.name.trim()}.\nEmail: ${formData.email.trim()}\nDomain: ${formData.inquiryType}\n\nMessage:\n${formData.message.trim()}\n`
    );
    window.location.href = `mailto:subashreghan2@gmail.com?subject=${subject}&body=${body}`;
    setSubmittedSuccess('Opening your email client with your pre-filled inquiry...');
  };

  return (
    <section id="contact" className="py-24 relative bg-obsidian border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>DIRECT ENGAGEMENT</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-wide uppercase mb-4">
            LET&apos;S WORK TOGETHER.
          </h2>
          <p className="text-titanium text-sm sm:text-base font-light max-w-xl mx-auto">
            Available for digital marketing, Python full-stack web applications, video production, or exploring long-term technology collaborations.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Verified Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-display font-semibold uppercase tracking-widest text-titanium-muted mb-4">
              Verified Direct Channels
            </h3>

            {/* Email */}
            <a
              href={socialLinks.email.href}
              className="p-5 rounded-xl glass-panel border border-white/5 hover:border-gold/30 transition-all flex items-center gap-4 group"
              aria-label="Send email to Subash Reghan"
            >
              <div className="w-10 h-10 rounded-lg bg-charcoal-surface border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] text-titanium-muted uppercase tracking-wider block">Email Inquiries</span>
                <span className="text-sm font-medium text-white group-hover:text-gold transition-colors truncate block">
                  {socialLinks.email.displayValue}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-titanium-muted group-hover:text-gold" />
            </a>

            {/* WhatsApp */}
            <a
              href={socialLinks.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl glass-panel border border-white/5 hover:border-gold/30 transition-all flex items-center gap-4 group"
              aria-label="Direct WhatsApp message"
            >
              <div className="w-10 h-10 rounded-lg bg-charcoal-surface border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] text-titanium-muted uppercase tracking-wider block">WhatsApp Direct</span>
                <span className="text-sm font-medium text-white group-hover:text-gold transition-colors truncate block">
                  {socialLinks.whatsapp.displayValue}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-titanium-muted group-hover:text-gold" />
            </a>

            {/* LinkedIn */}
            <a
              href={socialLinks.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl glass-panel border border-white/5 hover:border-gold/30 transition-all flex items-center gap-4 group"
              aria-label="LinkedIn profile"
            >
              <div className="w-10 h-10 rounded-lg bg-charcoal-surface border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] text-titanium-muted uppercase tracking-wider block">LinkedIn Profile</span>
                <span className="text-sm font-medium text-white group-hover:text-gold transition-colors truncate block">
                  Subash Reghan
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-titanium-muted group-hover:text-gold" />
            </a>

            {/* GitHub */}
            <a
              href={socialLinks.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl glass-panel border border-white/5 hover:border-gold/30 transition-all flex items-center gap-4 group"
              aria-label="GitHub profile"
            >
              <div className="w-10 h-10 rounded-lg bg-charcoal-surface border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] text-titanium-muted uppercase tracking-wider block">GitHub Repositories</span>
                <span className="text-sm font-medium text-white group-hover:text-gold transition-colors truncate block">
                  SSubashreghan
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-titanium-muted group-hover:text-gold" />
            </a>

            {/* Location Pill */}
            <div className="p-4 rounded-xl bg-charcoal/40 border border-white/5 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-gold shrink-0" />
              <div className="text-xs text-titanium-light">
                <span className="text-white font-medium">Based in Puducherry / Pondicherry, India</span>
                <span className="block text-[11px] text-titanium-muted">Collaborating with clients worldwide</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleWhatsAppSend}
              noValidate
              className="p-8 sm:p-10 rounded-2xl glass-panel border border-white/10 shadow-dark-card space-y-5"
            >
              <div>
                <h3 className="font-display font-semibold text-lg sm:text-xl text-white mb-1">
                  Send a Project Inquiry
                </h3>
                <p className="text-xs text-titanium-muted font-light">
                  Submit directly to WhatsApp or send via your configured email client.
                </p>
              </div>

              {submittedSuccess && (
                <div className="p-4 rounded-xl bg-gold/15 border border-gold/40 text-gold-light text-xs flex items-center gap-3 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>{submittedSuccess}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="text-[11px] text-titanium-muted uppercase tracking-wider block mb-1">
                    Your Name <span className="text-gold">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="Enter your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full px-4 py-2.5 rounded-lg bg-charcoal/80 border text-white text-xs placeholder:text-titanium-muted focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500/70 focus:border-red-500' : 'border-white/10 focus:border-gold'
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-[11px] text-titanium-muted uppercase tracking-wider block mb-1">
                    Email Address <span className="text-gold">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="name@company.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-2.5 rounded-lg bg-charcoal/80 border text-white text-xs placeholder:text-titanium-muted focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500/70 focus:border-red-500' : 'border-white/10 focus:border-gold'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-inquiry-type" className="text-[11px] text-titanium-muted uppercase tracking-wider block mb-1">
                  Project Domain / Inquiry Type
                </label>
                <select
                  id="contact-inquiry-type"
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-charcoal/80 border border-white/10 text-white text-xs focus:border-gold focus:outline-none transition-colors"
                >
                  <option value="Digital Marketing & Lead Gen">Digital Marketing & Paid Ads Acquisition</option>
                  <option value="Web Development & Python">Website or Python Web App Development</option>
                  <option value="Video Marketing & Editing">Video Editing & Creative Media</option>
                  <option value="Business Partnership">Technology / Reghan Empire Partnership</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="text-[11px] text-titanium-muted uppercase tracking-wider block mb-1">
                  Message Details <span className="text-gold">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder="Describe your goals, project timeline, or questions..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`w-full px-4 py-2.5 rounded-lg bg-charcoal/80 border text-white text-xs placeholder:text-titanium-muted focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-red-500/70 focus:border-red-500' : 'border-white/10 focus:border-gold'
                  }`}
                />
                {errors.message && (
                  <p id="message-error" className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3 px-6 text-xs font-semibold tracking-widest text-obsidian uppercase bg-gradient-to-r from-gold-light via-gold to-gold-dark hover:brightness-110 active:scale-95 transition-all rounded-lg shadow-gold-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSend}
                  className="py-3 px-6 text-xs font-semibold tracking-widest text-titanium-light uppercase glass-panel border border-white/10 hover:border-gold/30 hover:text-white rounded-lg transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-gold" />
                  <span>Send via Email</span>
                </button>
              </div>

              <p className="text-[10px] text-titanium-muted text-center font-light pt-1">
                Your message details are formatted directly into your preferred messaging application with zero intermediaries.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
