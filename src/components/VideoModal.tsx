import React from 'react';
import { X, Youtube, ExternalLink } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B1A17]/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FCFAF7] border border-[#D8CCB9] rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-[#E8DFD0] flex items-center justify-between bg-[#FAF6EF]">
          <div className="flex items-center space-x-2">
            <Youtube className="w-5 h-5 text-[#C0392B]" />
            <span className="text-xs uppercase tracking-widest font-sans text-[#6F6A60]">
              {video.category} • {video.location}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Video"
            className="p-1 text-[#6F6A60] hover:text-[#1B1A17] rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 16:9 Video Embed */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Video Info Footer */}
        <div className="p-5 space-y-3 bg-[#FCFAF7]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-heading font-bold text-lg md:text-xl text-[#1B1A17]">
                {video.title}
              </h3>
              {video.titleHindi && (
                <p className="text-xs text-[#6F6A60] font-sans mt-0.5">{video.titleHindi}</p>
              )}
            </div>

            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold bg-[#1B1A17] text-white hover:bg-[#C0392B] px-3.5 py-2 rounded-xl transition-colors whitespace-nowrap"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-xs text-[#6F6A60] font-sans leading-relaxed">
            {video.description}
          </p>
        </div>
      </div>
    </div>
  );
};
