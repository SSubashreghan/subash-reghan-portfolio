'use client';

import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { clientVideos, VideoCategory, VideoWork, googleDriveBackupUrl } from '../data/videos';
import { VideoModal } from './VideoModal';

export const ClientWork: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory>('ALL');
  const [activeModalVideo, setActiveModalVideo] = useState<VideoWork | null>(null);

  const categories: VideoCategory[] = [
    'ALL',
    'REELS',
    'SOCIAL MEDIA',
    'VIDEO EDITING',
    'MOTION GRAPHICS'
  ];

  const filteredVideos = selectedCategory === 'ALL'
    ? clientVideos
    : clientVideos.filter((v) => v.category === selectedCategory);

  return (
    <section id="client-work" className="py-24 relative bg-obsidian-light/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide uppercase mb-4">
            CLIENT & CREATIVE WORK
          </h2>
          <p className="text-titanium text-sm sm:text-base font-light max-w-2xl mx-auto">
            Selected digital marketing, promotional video production, and commercial media work. Click any item to watch directly inside the portfolio.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist" aria-label="Work Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-display font-medium tracking-wider rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gold text-obsidian shadow-gold-sm font-semibold'
                  : 'text-titanium hover:text-white glass-panel border border-white/5 hover:border-gold/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              aria-label={`Watch video: ${item.title}`}
              onClick={() => setActiveModalVideo(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveModalVideo(item);
                }
              }}
              className="group cursor-pointer rounded-2xl glass-panel border border-white/10 hover:border-gold/40 focus:outline-none focus:ring-2 focus:ring-gold/60 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1 shadow-dark-card"
            >
              {/* Media Thumbnail Container with Play Overlay */}
              <div className="relative w-full aspect-video bg-charcoal overflow-hidden flex items-center justify-center">
                <video
                  src={item.videoUrl}
                  preload="metadata"
                  muted
                  playsInline
                  aria-hidden="true"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent pointer-events-none" />

                {/* Play Button Icon */}
                <div className="absolute w-12 h-12 rounded-full bg-gold/90 text-obsidian flex items-center justify-center group-hover:scale-110 group-hover:bg-gold transition-all shadow-gold-md">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-obsidian/80 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-gold">
                  {item.category}
                </div>
              </div>

              {/* Content Info */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[11px] text-titanium-muted uppercase tracking-wider block mb-1">
                    {item.client}
                  </span>
                  <h3 className="font-display font-semibold text-base text-white group-hover:text-gold transition-colors line-clamp-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-titanium leading-relaxed line-clamp-2 font-light">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded bg-charcoal-surface text-titanium-muted border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* External Drive Backup Notice */}
        <div className="mt-14 p-4 rounded-xl glass-panel border border-white/5 max-w-xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="text-xs text-titanium-muted font-light">
            Direct video preview powered by portfolio assets.
          </span>
          <a
            href={googleDriveBackupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-gold hover:underline font-medium"
          >
            <span>Open Google Drive Source Folder</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Video Playback Modal */}
      <VideoModal
        video={activeModalVideo}
        onClose={() => setActiveModalVideo(null)}
      />
    </section>
  );
};
