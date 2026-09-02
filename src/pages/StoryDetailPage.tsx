import React from 'react';
import { MapPin, Clock, ArrowLeft, ArrowRight, Play, Youtube, ArrowUpRight, Quote, BookOpen } from 'lucide-react';
import { STORIES, RECIPES, FOOD_TRAILS } from '../data/content';
import { JourneyLine } from '../components/JourneyLine';
import { VideoItem } from '../types';

interface StoryDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
  onOpenVideo: (video: VideoItem) => void;
}

export const StoryDetailPage: React.FC<StoryDetailPageProps> = ({ slug, navigate, onOpenVideo }) => {
  const story = STORIES.find((s) => s.slug === slug) || STORIES[0];

  const relatedRecipes = (story.relatedRecipeSlugs || [])
    .map((s) => RECIPES.find((r) => r.slug === s))
    .filter(Boolean);

  const relatedTrail = story.relatedTrailSlug 
    ? FOOD_TRAILS.find((t) => t.slug === story.relatedTrailSlug) 
    : null;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-10">
      {/* Back Button */}
      <button
        onClick={() => navigate('/stories')}
        className="inline-flex items-center space-x-1.5 text-xs font-sans uppercase tracking-widest text-[#6F6A60] hover:text-[#C0392B] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Stories</span>
      </button>

      {/* Article Header */}
      <header className="space-y-4 border-b border-[#E8DFD0] pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-sans">
          <span className="px-2.5 py-1 bg-[#F3EBDD] rounded-xl text-[#C0392B] font-semibold uppercase">
            {story.category}
          </span>
          <span className="flex items-center space-x-1 text-[#6F6A60]">
            <MapPin className="w-3.5 h-3.5 text-[#C0392B]" />
            <span>{story.location.area ? `${story.location.area}, ` : ''}{story.location.city}, {story.location.state}</span>
          </span>
          <span className="text-[#D8CCB9]">•</span>
          <span className="text-[#6F6A60]">{story.readTime}</span>
          <span className="text-[#D8CCB9]">•</span>
          <span className="text-[#6F6A60]">{story.date}</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B1A17] leading-tight">
          {story.title}
        </h1>

        {story.titleHindi && (
          <p className="text-base sm:text-lg text-[#C0392B] font-heading italic">
            {story.titleHindi}
          </p>
        )}

        <div className="pt-2 text-xs font-sans text-[#D4881E] uppercase tracking-wider">
          By {story.author} • Virtual Banjara Field Documentarian
        </div>
      </header>

      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden border border-[#D8CCB9] shadow-editorial bg-black/5 aspect-[16/9]">
        <img
          src={story.heroImage}
          alt={story.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Lead Paragraph Excerpt */}
      <div className="bg-[#FCFAF7] border-l-4 border-[#C0392B] p-6 rounded-r-2xl shadow-sm">
        <p className="text-base sm:text-lg font-heading italic text-[#1B1A17] leading-relaxed">
          {story.excerpt}
        </p>
      </div>

      {/* Main Story Content */}
      <div className="space-y-6 text-[#1B1A17] font-sans text-base sm:text-lg leading-relaxed max-w-none">
        {story.content.map((p: any, idx: number) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      {/* Featured Quote Box */}
      {story.quote && (
        <div className="my-10 p-8 bg-[#F3EBDD] border border-[#D8CCB9] rounded-2xl text-center space-y-3">
          <Quote className="w-8 h-8 mx-auto text-[#C0392B]/60" />
          <blockquote className="font-heading text-xl sm:text-2xl italic text-[#1B1A17] max-w-2xl mx-auto">
            "{story.quote.text}"
          </blockquote>
          <div className="text-xs font-sans text-[#D4881E] uppercase tracking-widest font-semibold">
            — {story.quote.author}
          </div>
        </div>
      )}

      {/* Embedded Video Section */}
      {story.youtubeId && (
        <div className="p-6 bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Youtube className="w-5 h-5 text-[#C0392B]" />
              <h3 className="font-heading font-bold text-lg text-[#1B1A17]">
                Watch The Full Documentary Episode
              </h3>
            </div>
            <a
              href={`https://www.youtube.com/watch?v=${story.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans text-[#C0392B] hover:underline flex items-center space-x-1"
            >
              <span>Open on YouTube</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#D8CCB9] bg-black shadow">
            <iframe
              src={`https://www.youtube.com/embed/${story.youtubeId}?rel=0`}
              title={story.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}

      {/* Gallery */}
      {story.gallery && story.gallery.length > 0 && (
        <div className="space-y-4 pt-6">
          <h3 className="font-heading font-bold text-xl text-[#1B1A17]">
            Visual Field Notes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {story.gallery.map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden border border-[#E8DFD0] aspect-[4/3]">
                <img
                  src={img}
                  alt={`${story.title} field note ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Recipes & Food Trails */}
      {(relatedRecipes.length > 0 || relatedTrail) && (
        <div className="pt-10 border-t border-[#E8DFD0] space-y-6">
          <h3 className="font-heading font-bold text-2xl text-[#1B1A17]">
            Connected In The Archive
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedRecipes.map((rec) => (
              <div
                key={rec!.id}
                onClick={() => navigate(`/recipes/${rec!.slug}`)}
                className="bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl p-4 flex items-center space-x-4 cursor-pointer group hover:border-[#C0392B] transition-colors"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#E8DFD0]">
                  <img
                    src={rec!.heroImage}
                    alt={rec!.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-sans text-[#C0392B] uppercase font-semibold">
                    Related Recipe
                  </span>
                  <h4 className="font-heading font-bold text-sm text-[#1B1A17] group-hover:text-[#C0392B] transition-colors line-clamp-1">
                    {rec!.title}
                  </h4>
                  <div className="text-[11px] text-[#6F6A60] font-sans">{rec!.cookTime} • {rec!.difficulty}</div>
                </div>
              </div>
            ))}

            {relatedTrail && (
              <div
                onClick={() => navigate(`/food-trails/${relatedTrail.slug}`)}
                className="bg-[#F3EBDD] border border-[#D8CCB9] rounded-2xl p-4 flex items-center space-x-4 cursor-pointer group hover:border-[#C0392B] transition-colors"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#D8CCB9]">
                  <img
                    src={relatedTrail.heroImage}
                    alt={relatedTrail.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-sans text-[#D4881E] uppercase font-semibold">
                    Related Food Trail
                  </span>
                  <h4 className="font-heading font-bold text-sm text-[#1B1A17] group-hover:text-[#C0392B] transition-colors line-clamp-1">
                    {relatedTrail.title}
                  </h4>
                  <div className="text-[11px] text-[#6F6A60] font-sans">{relatedTrail.city} • {relatedTrail.stopsCount} Spots</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bottom Conversion Box */}
      <div className="p-8 bg-[#FCFAF7] border border-[#D8CCB9] rounded-2xl text-center space-y-4">
        <h3 className="font-heading font-bold text-xl text-[#1B1A17]">
          Have an Authentic Culinary Story?
        </h3>
        <p className="text-xs text-[#6F6A60] font-sans max-w-md mx-auto">
          We collaborate with heritage properties, restaurants, and food brands across India to document and broadcast living traditions.
        </p>
        <button
          onClick={() => navigate('/collaborate')}
          className="inline-flex items-center space-x-2 bg-[#1B1A17] hover:bg-[#C0392B] text-white text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-xl transition-colors shadow"
        >
          <span>Work With Virtual Banjara</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};
