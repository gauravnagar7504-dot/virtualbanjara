import React from 'react';
import { Youtube, Play, ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { VIDEOS, BRAND_INFO } from '../data/content';
import { JourneyLine } from '../components/JourneyLine';
import { VideoItem } from '../types';

interface VideosPageProps {
  onOpenVideo: (video: VideoItem) => void;
}

export const VideosPage: React.FC<VideosPageProps> = ({ onOpenVideo }) => {
  const featuredVideo = VIDEOS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
      {/* Official Channel Profile Header (Responsive: Sits next to text on Desktop, Full-width under on Mobile) */}
      <div className="bg-[#FCFAF7] border-2 border-[#E8DFD0] rounded-3xl p-5 sm:p-8 lg:p-10 shadow-editorial relative overflow-hidden">
        <div className="sm:flex sm:items-center sm:gap-8">
          {/* Mobile Top Row: Avatar + Info side-by-side / Desktop: Avatar on Left */}
          <div className="flex items-center gap-4 sm:gap-8">
            <img
              src="/logo.png"
              alt="Virtual Banjara Official YouTube Channel"
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain rounded-full border-2 border-[#D8CCB9] p-1 bg-white shadow-md shrink-0"
            />
            {/* Mobile-Only Info */}
            <div className="space-y-0.5 sm:hidden flex-1 min-w-0">
              <h1 className="font-heading font-extrabold text-lg text-[#1B1A17] tracking-tight flex items-center gap-1.5">
                <span>Virtual Banjara</span>
                <span className="text-sm align-top text-[#C0392B]">®</span>
              </h1>
              <div className="text-xs font-sans font-bold text-[#1B1A17]">
                @VirtualBanjara
              </div>
              <div className="text-[11px] font-sans text-[#6F6A60]">
                726K subscribers • 808+ videos
              </div>
            </div>
          </div>

          {/* Desktop-Only Info & Left-Aligned Subscribe Button */}
          <div className="hidden sm:block space-y-3 flex-1">
            <div className="space-y-1">
              <h1 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-[#1B1A17] tracking-tight flex items-center gap-2">
                <span>Virtual Banjara</span>
                <span className="text-base align-top text-[#C0392B]">®</span>
              </h1>
              <div className="flex items-center space-x-2 text-xs sm:text-sm font-sans text-[#6F6A60]">
                <span className="font-bold text-[#1B1A17]">@VirtualBanjara</span>
                <span>•</span>
                <span>726K subscribers</span>
                <span>•</span>
                <span>808+ videos</span>
              </div>
            </div>

            <div className="pt-1">
              <a
                href="https://www.youtube.com/@VirtualBanjara?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#1B1A17] hover:bg-[#C0392B] text-white text-xs sm:text-sm font-sans font-semibold px-6 py-2.5 rounded-full transition-all shadow-sm hover:shadow active:scale-95"
              >
                Subscribe
              </a>
            </div>
          </div>

          {/* Mobile-Only Full-Width Subscribe Button */}
          <div className="pt-4 sm:hidden">
            <a
              href="https://www.youtube.com/@VirtualBanjara?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center bg-[#1B1A17] hover:bg-[#C0392B] text-white text-xs font-sans font-semibold py-2.5 rounded-full transition-all shadow-sm active:scale-95"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>

      {/* Featured Video Spotlight */}
      <div className="space-y-4">
        <span className="text-xs font-sans uppercase tracking-widest text-[#C0392B] font-semibold block">
          Featured Episode
        </span>
        <div className="bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl overflow-hidden shadow-editorial grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
          <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden bg-black group cursor-pointer" onClick={() => onOpenVideo(featuredVideo)}>
            <img
              src={featuredVideo.thumbnail}
              alt={featuredVideo.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#C0392B] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 fill-current ml-1" />
              </div>
            </div>
            <div className="absolute bottom-3 left-3 bg-black/70 px-2.5 py-1 rounded-xl text-xs font-sans text-white">
              {featuredVideo.duration}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs font-sans text-[#C0392B]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{featuredVideo.location}</span>
                <span>•</span>
                <span>{featuredVideo.category}</span>
              </div>
              <h2 className="font-heading text-base sm:text-xl lg:text-2xl font-bold text-[#1B1A17] leading-snug">
                {featuredVideo.title}
              </h2>
              {featuredVideo.titleHindi && (
                <p className="text-xs text-[#6F6A60] font-sans">{featuredVideo.titleHindi}</p>
              )}
              <p className="text-xs text-[#6F6A60] font-sans leading-relaxed pt-2">
                {featuredVideo.description}
              </p>
            </div>

            <div className="flex items-center space-x-3 pt-4 border-t border-[#E8DFD0]">
              <button
                onClick={() => onOpenVideo(featuredVideo)}
                className="inline-flex items-center space-x-2 bg-[#1B1A17] hover:bg-[#C0392B] text-white text-xs uppercase tracking-widest font-semibold px-4 py-2.5 rounded-xl transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Play Episode</span>
              </button>
              <a
                href={`https://www.youtube.com/watch?v=${featuredVideo.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-sans text-[#6F6A60] hover:text-[#C0392B]"
              >
                <span>Watch on YouTube</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {VIDEOS.map((video) => (
          <div
            key={video.id}
            onClick={() => onOpenVideo(video)}
            className="bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl overflow-hidden group cursor-pointer hover:border-[#C0392B] transition-colors shadow-editorial flex flex-col justify-between"
          >
            <div className="aspect-video relative overflow-hidden bg-black">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-[#C0392B] text-white flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded-xl text-[10px] font-sans text-white">
                {video.duration}
              </div>
            </div>

            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-sans text-[#C0392B] uppercase font-semibold">
                  {video.category} • {video.location}
                </div>
                <h3 className="font-heading font-bold text-base text-[#1B1A17] group-hover:text-[#C0392B] transition-colors line-clamp-2 leading-snug mt-1">
                  {video.title}
                </h3>
              </div>

              <div className="pt-3 border-t border-[#E8DFD0] flex items-center justify-between text-xs font-sans text-[#6F6A60]">
                <span>{video.views}</span>
                <span className="text-[#C0392B] font-semibold flex items-center space-x-1">
                  <span>Watch Now</span>
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <JourneyLine label="END OF VIDEO LIBRARY" />
    </div>
  );
};
