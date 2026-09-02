import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, UtensilsCrossed, Youtube, Compass, ArrowRight } from 'lucide-react';
import { RECIPES, VIDEOS, FOOD_TRAILS } from '../data/content';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  navigate: (path: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, navigate }) => {
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'recipes' | 'videos' | 'trails'>('all');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { recipes: [], videos: [], trails: [] };

    const recipes = RECIPES.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        (r.titleHindi && r.titleHindi.toLowerCase().includes(q)) ||
        r.region.toLowerCase().includes(q) ||
        r.cuisine.toLowerCase().includes(q) ||
        r.ingredients.some((sec) =>
          sec.items.some((item) =>
            item.name.toLowerCase().includes(q) ||
            (item.hindiName && item.hindiName.toLowerCase().includes(q))
          )
        )
    );

    const videos = VIDEOS.filter(
      (v) =>
        v.title.toLowerCase().includes(q) ||
        (v.titleHindi && v.titleHindi.toLowerCase().includes(q)) ||
        v.description.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q)
    );

    const trails = FOOD_TRAILS.filter(
      (t) =>
        t.city.toLowerCase().includes(q) ||
        t.state.toLowerCase().includes(q) ||
        (t.description && t.description.toLowerCase().includes(q)) ||
        t.places.some((p: any) => p.name.toLowerCase().includes(q) || p.mustTry.some((m: any) => m.toLowerCase().includes(q)))
    );

    return { recipes, videos, trails };
  }, [query]);

  if (!isOpen) return null;

  const totalResults =
    results.recipes.length +
    results.videos.length +
    results.trails.length;

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-[#1B1A17]/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF6EF] border border-[#D8CCB9] rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Header */}
        <div className="p-4 border-b border-[#E8DFD0] flex items-center space-x-3 bg-[#FCFAF7]">
          <Search className="w-5 h-5 text-[#6F6A60]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search recipes, ingredients, videos, food trails..."
            className="flex-1 bg-transparent border-none text-[#1B1A17] placeholder-[#6F6A60] text-base focus:outline-none font-sans"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs font-sans text-[#6F6A60] hover:text-[#1B1A17]"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-[#6F6A60] hover:text-[#1B1A17] rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-4 py-2.5 border-b border-[#E8DFD0] flex items-center space-x-2 bg-[#FAF6EF] overflow-x-auto text-xs font-sans">
          {(['all', 'recipes', 'videos', 'trails'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1 rounded-full uppercase tracking-wider transition-colors ${
                filterType === type
                  ? 'bg-[#1B1A17] text-white font-semibold'
                  : 'bg-[#F3EBDD] text-[#6F6A60] hover:text-[#1B1A17]'
              }`}
            >
              {type === 'all' ? 'All Archive' : type}
            </button>
          ))}
          {query && (
            <span className="text-[#6F6A60] ml-auto shrink-0">
              {totalResults} result{totalResults !== 1 ? 's' : ''}
            </span>
          )}
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {!query ? (
            <div className="text-center py-12 text-[#6F6A60] space-y-2">
              <p className="text-sm font-sans">Type to explore Virtual Banjara archive...</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['Mutton', 'Jaipur', 'Udaipur', 'Kachri', 'Shikarbadi', 'Laal Maas'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 bg-[#F3EBDD] hover:bg-[#E8DFD0] rounded-full text-xs font-sans text-[#1B1A17] transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-12 text-[#6F6A60]">
              <p className="text-sm font-sans">No matching results found for "{query}"</p>
              <p className="text-xs font-sans text-[#C0392B] mt-1">Try searching a different dish, ingredient, or city</p>
            </div>
          ) : (
            <>
              {/* Recipes */}
              {(filterType === 'all' || filterType === 'recipes') && results.recipes.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs font-sans uppercase text-[#D4881E] font-semibold">
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                    <span>Recipes ({results.recipes.length})</span>
                  </div>
                  <div className="space-y-1">
                    {results.recipes.map((recipe) => (
                      <div
                        key={recipe.id}
                        onClick={() => handleSelect(`/recipes/${recipe.slug}`)}
                        className="p-2.5 rounded-lg hover:bg-[#F3EBDD] cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="font-heading font-bold text-sm text-[#1B1A17] group-hover:text-[#C0392B] transition-colors">
                            {recipe.title}
                          </div>
                          <div className="text-xs text-[#6F6A60] font-sans">
                            {recipe.region} • {recipe.cuisine} • {recipe.cookTime}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#6F6A60] group-hover:text-[#C0392B] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Videos */}
              {(filterType === 'all' || filterType === 'videos') && results.videos.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs font-sans uppercase text-[#C0392B] font-semibold">
                    <Youtube className="w-3.5 h-3.5" />
                    <span>Videos ({results.videos.length})</span>
                  </div>
                  <div className="space-y-1">
                    {results.videos.map((video) => (
                      <div
                        key={video.id}
                        onClick={() => handleSelect('/videos')}
                        className="p-2.5 rounded-lg hover:bg-[#F3EBDD] cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="font-heading font-bold text-sm text-[#1B1A17] group-hover:text-[#C0392B] transition-colors">
                            {video.title}
                          </div>
                          <div className="text-xs text-[#6F6A60] font-sans">
                            {video.category} • {video.location} • {video.duration}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#6F6A60] group-hover:text-[#C0392B] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Food Trails */}
              {(filterType === 'all' || filterType === 'trails') && results.trails.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs font-sans uppercase text-[#6F6A60] font-semibold">
                    <Compass className="w-3.5 h-3.5 text-[#C0392B]" />
                    <span>Food Trails ({results.trails.length})</span>
                  </div>
                  <div className="space-y-1">
                    {results.trails.map((trail) => (
                      <div
                        key={trail.id}
                        onClick={() => handleSelect(`/food-trails/${trail.slug}`)}
                        className="p-2.5 rounded-lg hover:bg-[#F3EBDD] cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="font-heading font-bold text-sm text-[#1B1A17] group-hover:text-[#C0392B] transition-colors">
                            {trail.city} Food Trail ({trail.state})
                          </div>
                          <div className="text-xs text-[#6F6A60] font-sans">
                            {trail.places.length} Curated Picks • {trail.categoryTag}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#6F6A60] group-hover:text-[#C0392B] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
