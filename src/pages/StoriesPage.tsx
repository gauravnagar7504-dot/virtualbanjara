import React, { useState, useMemo } from 'react';
import { MapPin, Clock, ArrowRight, BookOpen, Filter } from 'lucide-react';
import { STORIES } from '../data/content';
import { JourneyLine } from '../components/JourneyLine';

interface StoriesPageProps {
  navigate: (path: string) => void;
}

export const StoriesPage: React.FC<StoriesPageProps> = ({ navigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCity, setSelectedCity] = useState<string>('All');

  const categories = ['All', 'Royal & Heritage', 'Nomadic & Wild', 'Desi Chulha', 'Street Food', 'Spiritual & Satvik'];
  const cities = ['All', 'Udaipur', 'Bikaner', 'Jaipur Outskirts', 'Alwar', 'Old Delhi'];

  const filteredStories = useMemo(() => {
    return STORIES.filter((story) => {
      const matchCat = selectedCategory === 'All' || story.category === selectedCategory;
      const matchCity = selectedCity === 'All' || story.location.city.includes(selectedCity);
      return matchCat && matchCity;
    });
  }, [selectedCategory, selectedCity]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
      {/* Editorial Header */}
      <div className="border-b border-[#E8DFD0] pb-8 space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-sans text-[#C0392B] uppercase tracking-widest font-semibold">
          <BookOpen className="w-4 h-4" />
          <span>Editorial Archive</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#1B1A17]">
          STORIES FROM THE ROAD
        </h1>
        <p className="text-base text-[#6F6A60] font-sans max-w-2xl">
          Deep-dive cultural essays, forgotten royal feast archives, and field notes from traditional kitchens across Rajasthan and India.
        </p>
      </div>

      {/* Filters Bar */}
      <div className="bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl p-4 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0 text-xs">
            <span className="font-sans text-[#D4881E] uppercase tracking-wider font-semibold mr-1 flex items-center">
              <Filter className="w-3 h-3 mr-1" /> Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl transition-colors whitespace-nowrap font-medium ${
                  selectedCategory === cat
                    ? 'bg-[#1B1A17] text-white font-semibold'
                    : 'bg-[#F3EBDD] text-[#6F6A60] hover:text-[#1B1A17]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* City Filter */}
          <div className="flex items-center space-x-2 text-xs">
            <span className="font-sans text-[#D4881E] uppercase tracking-wider font-semibold">Location:</span>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-[#F3EBDD] border border-[#D8CCB9] rounded-xl px-3 py-1.5 text-xs text-[#1B1A17] focus:outline-none"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      {filteredStories.length === 0 ? (
        <div className="text-center py-16 bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl text-[#6F6A60] space-y-2">
          <p className="text-base font-heading font-medium">No stories found matching your filter criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedCity('All');
            }}
            className="text-xs font-sans text-[#C0392B] underline font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <article
              key={story.id}
              onClick={() => navigate(`/stories/${story.slug}`)}
              className="bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl overflow-hidden group cursor-pointer hover:border-[#C0392B] transition-colors shadow-editorial flex flex-col justify-between"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-black/10">
                <img
                  src={story.heroImage}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#FCFAF7]/90 backdrop-blur-sm px-2.5 py-0.5 rounded-xl text-[11px] font-sans text-[#1B1A17] border border-[#E8DFD0]">
                  {story.category}
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 text-xs font-sans text-[#6F6A60]">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-[#C0392B]" />
                      <span>{story.location.city}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-[#D4881E]" />
                      <span>{story.readTime}</span>
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-xl text-[#1B1A17] group-hover:text-[#C0392B] transition-colors leading-snug">
                    {story.title}
                  </h2>

                  {story.titleHindi && (
                    <p className="text-xs text-[#6F6A60] font-sans line-clamp-1">
                      {story.titleHindi}
                    </p>
                  )}

                  <p className="text-xs text-[#6F6A60] font-sans line-clamp-3 leading-relaxed pt-1">
                    {story.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8DFD0] flex items-center justify-between">
                  <span className="text-[11px] font-sans text-[#D4881E]">{story.date}</span>
                  <span className="inline-flex items-center space-x-1 text-xs font-sans uppercase tracking-wider font-semibold text-[#C0392B]">
                    <span>Read Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <JourneyLine label="END OF STORIES ARCHIVE" />
    </div>
  );
};
