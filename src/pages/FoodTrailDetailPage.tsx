import React from 'react';
import { MapPin, ArrowLeft, ArrowRight, Compass, Play, ArrowUpRight, Sparkles } from 'lucide-react';
import { FOOD_TRAILS } from '../data/content';
import { CityFoodTrail, TrailRecommendation, VideoItem } from '../types';

interface FoodTrailDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
  onOpenVideo?: (video: VideoItem) => void;
}

export const FoodTrailDetailPage: React.FC<FoodTrailDetailPageProps> = ({ slug, navigate, onOpenVideo }) => {
  const trail: CityFoodTrail = FOOD_TRAILS.find((t) => t.slug === slug) || FOOD_TRAILS[0];

  const handleWatchVideo = (place: TrailRecommendation) => {
    if (place.youtubeId && onOpenVideo) {
      onOpenVideo({
        id: `trail-vid-${place.id}`,
        youtubeId: place.youtubeId,
        title: place.videoTitle || `${place.name} — Virtual Banjara`,
        category: 'Heritage',
        duration: '20:00',
        publishedDate: 'Field Documentary',
        thumbnail: `https://img.youtube.com/vi/${place.youtubeId}/hqdefault.jpg`,
        description: place.whyVBRecommends,
        location: place.area || place.city,
      });
    } else if (place.youtubeId) {
      window.open(`https://www.youtube.com/watch?v=${place.youtubeId}`, '_blank');
    }
  };

  return (
    <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
      {/* Back Button */}
      <button
        onClick={() => navigate('/food-trails')}
        className="inline-flex items-center space-x-1.5 text-xs font-sans uppercase tracking-widest text-[#6F6A60] hover:text-[#C0392B] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to All Food Trails</span>
      </button>

      {/* Hero Header */}
      <header className="space-y-4 border-b border-[#E8DFD0] pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-sans">
          <span className="px-3 py-1 bg-[#F3EBDD] rounded-full text-[#C0392B] font-semibold uppercase">
            FOOD TRAIL · {trail.state}
          </span>
          <span className="flex items-center space-x-1 text-[#6F6A60]">
            <MapPin className="w-3.5 h-3.5 text-[#C0392B]" />
            <span>{trail.city}</span>
          </span>
          <span className="text-[#D8CCB9]">•</span>
          <span className="text-[#D4881E] font-bold">{trail.places.length} Curated Picks</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B1A17] tracking-tight">
          {trail.city} FOOD TRAIL
        </h1>

        <p className="text-base sm:text-lg text-[#5C5449] font-sans leading-relaxed max-w-3xl">
          {trail.description}
        </p>

        <div className="pt-2">
          <span className="inline-block text-xs font-sans font-bold uppercase tracking-wider text-[#1B1A17] bg-[#F3EBDD] px-3.5 py-1.5 rounded-xl border border-[#D8CCB9]">
            {trail.categoryTag} · Real, not generic.
          </span>
        </div>
      </header>

      {/* Places List */}
      <section className="space-y-12">
        <div className="flex items-center justify-between border-b border-[#E8DFD0] pb-3">
          <h2 className="font-heading font-bold text-2xl text-[#1B1A17]">
            VB Curated Places in {trail.city}
          </h2>
          <span className="text-xs font-sans text-[#D4881E]">
            Verified Field Recommendations
          </span>
        </div>

        <div className="space-y-12">
          {trail.places.map((place, pIdx) => {
            const isEven = pIdx % 2 === 0;

            return (
              <div
                key={place.id}
                className="bg-[#FCFAF7] border-2 border-[#E8DFD0] hover:border-[#C0392B]/60 rounded-3xl overflow-hidden shadow-editorial hover:shadow-editorial-hover transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  <div
                    className={`lg:col-span-7 relative overflow-hidden bg-black/10 min-h-[300px] sm:min-h-[360px] ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    <div className="absolute top-4 left-4 bg-[#1B1A17]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-sans text-white flex items-center space-x-2 border border-white/20 shadow-md">
                      <span className="text-[#D4881E] font-bold">#{place.number}</span>
                      <span className="text-white/60">·</span>
                      <span className="uppercase tracking-widest">{trail.city}</span>
                    </div>

                    <div className="absolute top-4 right-4 flex items-center space-x-2">
                      <span
                        className={`w-3 h-3 rounded-full border border-white shadow ${
                          place.diet === 'Pure Veg' ? 'bg-emerald-500' : 'bg-rose-500'
                        }`}
                        title={place.diet}
                      />
                      <span className="bg-[#FAF6EF]/95 backdrop-blur-md px-3 py-1 rounded-xl text-[10px] font-sans text-[#1B1A17] border border-[#D8CCB9] uppercase font-bold">
                        {place.category}
                      </span>
                    </div>

                    {place.youtubeId && (
                      <div 
                        onClick={() => handleWatchVideo(place)}
                        className="absolute bottom-4 left-4 right-4 bg-[#1B1A17]/85 hover:bg-[#1B1A17] backdrop-blur-md p-3 rounded-2xl border border-white/20 flex items-center justify-between cursor-pointer transition-colors group/vid shadow-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-xl bg-[#C0392B] text-white flex items-center justify-center shrink-0 shadow">
                            <Play className="w-4 h-4 fill-current ml-0.5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-sans text-[#D4881E] uppercase font-bold tracking-wider block">
                              WATCH THE VB STORY
                            </span>
                            <p className="text-xs font-sans text-white font-medium line-clamp-1">
                              {place.videoTitle || `Watch ${place.name} on location`}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-sans text-[#FAF6EF] group-hover/vid:text-[#D4881E] uppercase tracking-wider font-semibold hidden sm:inline">
                          Play 4K →
                        </span>
                      </div>
                    )}
                  </div>

                  <div
                    className={`lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs font-sans text-[#C0392B] font-bold uppercase tracking-widest mb-1">
                          {trail.city} · FOOD TRAIL {place.number}
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-[#1B1A17] leading-snug">
                          {place.name}
                        </h3>
                        {place.nameHindi && (
                          <p className="font-heading text-sm text-[#8C8275] italic mt-0.5">
                            {place.nameHindi}
                          </p>
                        )}
                      </div>

                      <div className="bg-[#FAF6EF] border-l-4 border-[#C0392B] p-4 rounded-r-2xl space-y-1 shadow-sm">
                        <span className="text-[11px] font-sans uppercase tracking-widest text-[#C0392B] font-bold block">
                          WHY VB RECOMMENDS
                        </span>
                        <p className="text-xs sm:text-sm text-[#1B1A17] font-sans leading-relaxed italic">
                          "{place.whyVBRecommends}"
                        </p>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[11px] font-sans uppercase tracking-widest text-[#D4881E] font-bold block">
                          MUST TRY
                        </span>
                        <ul className="space-y-1">
                          {place.mustTry.map((dish, dIdx) => (
                            <li
                              key={dIdx}
                              className="flex items-center space-x-2 text-xs text-[#1B1A17] font-sans font-medium"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B] shrink-0" />
                              <span>{dish}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-1">
                        <span className="text-[11px] font-sans uppercase tracking-widest text-[#6D665B] font-bold block mb-0.5">
                          BEST SUITED FOR
                        </span>
                        <p className="text-xs text-[#5C5449] font-sans">
                          {place.bestFor}
                        </p>
                      </div>

                      {place.vbNote && (
                        <div className="p-3 bg-[#F3EBDD]/60 border border-[#D8CCB9] rounded-xl text-xs text-[#6D665B] font-sans">
                          <strong className="text-[#1B1A17] font-sans">VB NOTE: </strong>
                          {place.vbNote}
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-[#E8DFD0] space-y-3">
                      <div className="text-xs font-sans text-[#6D665B] flex items-center space-x-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#C0392B]" />
                        <span className="font-semibold text-[#1B1A17]">{place.area}</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        {place.mapUrl && (
                          <a
                            href={place.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 text-xs font-sans font-bold uppercase tracking-wider text-[#1B1A17] hover:text-[#C0392B] bg-[#F3EBDD] px-3.5 py-2 rounded-xl border border-[#D8CCB9] transition-colors"
                          >
                            <span>View Map</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {place.youtubeId && (
                          <button
                            onClick={() => handleWatchVideo(place)}
                            className="inline-flex items-center space-x-1.5 text-xs font-sans font-bold uppercase tracking-wider text-white bg-[#C0392B] hover:bg-[#9E2B1F] px-4 py-2 rounded-xl transition-colors shadow-sm"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Watch Story</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Business CTA */}
      <section className="pt-8">
        <div className="bg-[#1B1A17] text-[#FAF6EF] rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-sans uppercase tracking-widest text-[#D4881E] font-bold">
              KNOW A PLACE IN {trail.city}?
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#FAF6EF]">
              Partner with Virtual Banjara®
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A196] font-sans">
              Have a culinary brand or heritage kitchen worth discovering? Let's tell your story.
            </p>
          </div>

          <button
            onClick={() => navigate('/collaborate')}
            className="inline-flex items-center space-x-2 bg-[#C0392B] hover:bg-[#9E2B1F] text-white text-xs uppercase tracking-widest font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md shrink-0"
          >
            <span>Work With Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </article>
  );
};
