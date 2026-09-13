'use client';

import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, Maximize2 } from 'lucide-react';
import { VideoWork, googleDriveBackupUrl } from '../data/videos';

interface VideoModalProps {
  video: VideoWork | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (video) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      dialog.close();
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [video]);

  const handleClose = React.useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  }, [onClose]);

  // Handle ESC key dismiss
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && video) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [video, handleClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      handleClose();
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen().catch(err => console.error(err));
      } else {
        document.exitFullscreen().catch(err => console.error(err));
      }
    }
  };

  if (!video) return null;

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 m-auto max-w-4xl w-[95%] bg-obsidian/95 text-titanium-light rounded-2xl border border-gold/30 p-0 shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-md outline-none animate-in fade-in zoom-in-95 duration-200"
      aria-labelledby="video-modal-title"
    >
      <div className="p-4 sm:p-6 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold block mb-1">
              {video.category} • {video.client}
            </span>
            <h3 id="video-modal-title" className="font-display font-bold text-base sm:text-lg text-white">
              {video.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleFullscreen}
              className="p-2 text-titanium-muted hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              title="Toggle Fullscreen"
              aria-label="Toggle Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="p-2 text-titanium-muted hover:text-gold rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              title="Close modal"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden my-4 border border-white/10 flex items-center justify-center">
          <video
            ref={videoRef}
            src={video.videoUrl}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          >
            Your browser does not support HTML5 video playback.
          </video>
        </div>

        {/* Description & External Backup */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <p className="text-xs text-titanium font-light max-w-xl">
            {video.description}
          </p>

          <a
            href={googleDriveBackupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-titanium-muted hover:text-gold tracking-wider uppercase border border-white/10 rounded-md hover:border-gold/30 transition-all w-fit shrink-0"
          >
            <span>Google Drive Archive</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </dialog>
  );
};
