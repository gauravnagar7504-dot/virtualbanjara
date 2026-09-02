import React, { useState } from 'react';
import { 
  MapPin, 
  ArrowRight, 
  Search
} from 'lucide-react';
import { FOOD_TRAILS } from '../data/content';

interface FoodTrailsPageProps {
  navigate: (path: string) => void;
}

export const FoodTrailsPage: React.FC<FoodTrailsPageProps> = ({ navigate }) => {
  const [activeTab, setActiveTab] = useState<string>('JAIPUR');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentTrail = FOOD_TRAILS.find((t) => t.city.toUpperCase() === activeTab) || FOOD_TRAILS[0];

  const filteredPlaces = currentTrail.places.filter((place) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      place.name.toLowerCase().includes(q) ||
      place.category.toLowerCase().includes(q) ||
      place.whyVBRecommends.toLowerCase().includes(q) ||
      place.mustTry.some((m: string) => m.toLowerCase().includes(q)) ||
      place.bestFor.toLowerCase().includes(q)
    );
  });

  return (
    <div className="bg-[#FAF7F0] text-[#1C1917] min-h-screen selection:bg-[#B83226] selection:text-white">
      {/* Hero Header */}
      <section className="border-b border-[#E8DFD0] pt-10 pb-10 sm:pt-14 sm:pb-16 bg-[#F5EFEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-sans uppercase tracking-[0.2em] text-[#B83226] font-semibold">
            Field Dispatch · Curated Recommendations
          </div>

          <div className="space-y-2">
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C1917] tracking-tight leading-[1.12]">
              FOLLOW THE FLAVOURS.
            </h1>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-serif italic text-[#B83226] tracking-tight">
              Discover the Places.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#57534E] font-sans leading-relaxed max-w-2xl pt-1">
            Places explored, experienced, and curated by Virtual Banjara®. 
            <span className="block font-medium text-[#1C1917] mt-0.5">
              "We've been there. We've experienced it. Here's where we'd send you."
            </span>
          </p>
        </div>
      </section>

      {/* Tabs Selector Navigation */}
      <nav aria-label="City Selection" className="border-b border-[#E8DFD0] bg-[#FAF7F0]/95 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3">
            {/* City Tabs */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {FOOD_TRAILS.map((trail) => {
                const isActive = activeTab === trail.city.toUpperCase();
                return (
                  <button
                    key={trail.id}
                    onClick={() => {
                      setActiveTab(trail.city.toUpperCase());
                      setSearchQuery('');
                    }}
                    className={`py-2.5 px-4 sm:px-5 rounded-xl text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-all flex items-center space-x-2.5 ${
                      isActive
                        ? 'bg-[#1C1917] text-white shadow-sm'
                        : 'bg-[#EFE7DC] text-[#78716C] hover:text-[#1C1917] hover:bg-[#E5DACD]'
                    }`}
                  >
                    <span>{trail.city}</span>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-[#B83226] text-white' : 'bg-[#FAF7F0] text-[#78716C]'
                    }`}>
                      {trail.places.length} Picks
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Search */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#78716C] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search places or dishes..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-[#D6CCC0] rounded-xl text-xs text-[#1C1917] focus:outline-none focus:border-[#B83226]"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content: Selected City Recommendations */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-10">
        {/* City Info Banner */}
        <div className="bg-white border border-[#E8DFD0] rounded-2xl p-5 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
          <div className="space-y-1">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#B83226] font-bold">
              FOOD TRAIL · {currentTrail.state}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C1917]">
              {currentTrail.city}
            </h2>
            <p className="text-xs sm:text-sm font-sans text-[#57534E] max-w-2xl">
              {currentTrail.description}
            </p>
          </div>

          <div className="bg-[#FAF7F0] border border-[#E8DFD0] px-4 py-3 rounded-xl shrink-0 text-left md:text-right">
            <div className="text-xs font-sans text-[#C88218] font-bold uppercase tracking-wider">
              {currentTrail.categoryTag}
            </div>
            <div className="text-xs font-sans text-[#78716C] mt-0.5">
              {filteredPlaces.length} of {currentTrail.places.length} Curated Spots
            </div>
          </div>
        </div>

        {/* Curated Recommendations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map((place) => (
            <article
              key={place.id}
              className="bg-white border border-[#E8DFD0] hover:border-[#B83226] rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md transition-all duration-300 group"
            >
              <div className="space-y-3.5">
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-sans font-extrabold text-[#B83226] bg-[#F3EBDD] px-2.5 py-0.5 rounded-lg border border-[#D8CCB9]">
                    #{place.number}
                  </span>
                  <span className="text-[10px] font-sans uppercase tracking-wider text-[#78716C] bg-[#FAF7F0] px-2.5 py-0.5 rounded-md border border-[#E8DFD0] font-semibold">
                    {place.category}
                  </span>
                </div>

                {/* Place Name Full Width */}
                <div className="space-y-1">
                  <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#1C1917] group-hover:text-[#B83226] transition-colors leading-snug">
                    {place.name}
                  </h3>
                  <div className="flex items-center space-x-1.5 text-xs font-sans text-[#78716C]">
                    <MapPin className="w-3.5 h-3.5 text-[#B83226] shrink-0" />
                    <span>{place.area}</span>
                  </div>
                </div>

                {/* WHY VB RECOMMENDS */}
                <div className="bg-[#FAF7F0] border-l-2 border-[#B83226] p-3 rounded-r-xl space-y-1">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#B83226] font-bold block">
                    WHY VB RECOMMENDS
                  </span>
                  <p className="text-xs sm:text-sm text-[#1C1917] font-sans italic leading-relaxed">
                    "{place.whyVBRecommends}"
                  </p>
                </div>

                {/* MUST TRY */}
                <div className="text-xs font-sans text-[#78716C]">
                  <span className="text-[#C88218] font-bold">Must Try: </span>
                  <span className="text-[#1C1917] font-medium font-sans">{place.mustTry.join(', ')}</span>
                </div>

                {/* BEST FOR */}
                <div className="text-xs font-sans text-[#57534E] pt-1 border-t border-[#F2ECE1]">
                  <strong className="font-sans text-[#78716C]">Best For: </strong>
                  <span>{place.bestFor}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Commercial Collaboration Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#181614] text-[#FAF7F0] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-sans uppercase tracking-[0.2em] text-[#C88218] font-semibold">
              Partner with Virtual Banjara®
            </div>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-white">
              Have a place worth discovering?
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A29E] font-sans max-w-xl">
              If you are a restaurant, heritage property, luxury resort, or food brand interested in working with Virtual Banjara, we'd love to hear your story.
            </p>
          </div>

          <button
            onClick={() => navigate('/collaborate')}
            className="inline-flex items-center space-x-2 bg-[#B83226] hover:bg-[#96261C] text-white text-xs uppercase tracking-widest font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md shrink-0"
          >
            <span>Work With Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
