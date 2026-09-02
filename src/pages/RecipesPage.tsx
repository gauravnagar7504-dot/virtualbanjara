import React, { useState, useMemo } from 'react';
import { UtensilsCrossed, Clock, ChefHat, ArrowRight, Filter } from 'lucide-react';
import { RECIPES } from '../data/content';
import { JourneyLine } from '../components/JourneyLine';

interface RecipesPageProps {
  navigate: (path: string) => void;
}

export const RecipesPage: React.FC<RecipesPageProps> = ({ navigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDietary, setSelectedDietary] = useState<'all' | 'veg' | 'non-veg'>('all');

  const categories = ['All', 'Mutton', 'Chicken', 'Vegetarian', 'Seafood', 'Traditional', 'Royal & Heritage'];

  const filteredRecipes = useMemo(() => {
    return RECIPES.filter((recipe) => {
      const matchCat = selectedCategory === 'All' || recipe.category === selectedCategory;
      const matchDiet = selectedDietary === 'all' || recipe.dietary === selectedDietary;
      return matchCat && matchDiet;
    });
  }, [selectedCategory, selectedDietary]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
      {/* Editorial Header */}
      <div className="border-b border-[#E8DFD0] pb-8 space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-sans text-[#C0392B] uppercase tracking-widest font-semibold">
          <UtensilsCrossed className="w-4 h-4" />
          <span>Kitchen Archive</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B1A17]">
          THE RECIPES
        </h1>
        <p className="text-base text-[#6F6A60] font-sans max-w-2xl">
          Authentic flavours, forgotten desert cooking methods, and living kitchen traditions documented with precise measurements and chef techniques.
        </p>
      </div>

      {/* Filter Toolbar */}
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

          {/* Dietary Filter */}
          <div className="flex items-center space-x-2 text-xs shrink-0">
            <span className="font-sans text-[#D4881E] uppercase tracking-wider font-semibold">Diet:</span>
            <div className="flex items-center space-x-1 bg-[#F3EBDD] p-0.5 rounded-xl">
              {(['all', 'veg', 'non-veg'] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDietary(d)}
                  className={`px-2.5 py-1 rounded-xl uppercase text-[10px] font-sans font-bold transition-colors ${
                    selectedDietary === d
                      ? 'bg-[#1B1A17] text-white'
                      : 'text-[#6F6A60] hover:text-[#1B1A17]'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recipes Grid */}
      {filteredRecipes.length === 0 ? (
        <div className="text-center py-16 bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl text-[#6F6A60] space-y-2">
          <p className="text-base font-heading font-medium">No recipes found matching your selected filters.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedDietary('all');
            }}
            className="text-xs font-sans text-[#C0392B] underline font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => navigate(`/recipes/${recipe.slug}`)}
              className="bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl overflow-hidden group cursor-pointer hover:border-[#C0392B] transition-colors shadow-editorial flex flex-col justify-between"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-black/10">
                <img
                  src={recipe.heroImage}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#FCFAF7]/90 backdrop-blur-sm px-2.5 py-0.5 rounded-xl text-[10px] font-sans text-[#1B1A17] border border-[#E8DFD0] uppercase font-semibold">
                  {recipe.category}
                </div>
                <div className={`absolute top-3 right-3 w-3 h-3 rounded-full border border-white shadow ${
                  recipe.dietary === 'veg' ? 'bg-emerald-600' : 'bg-rose-600'
                }`} title={recipe.dietary === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'} />
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="text-[11px] font-sans text-[#C0392B] font-medium">
                    {recipe.region}
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#1B1A17] group-hover:text-[#C0392B] transition-colors leading-snug line-clamp-2">
                    {recipe.title}
                  </h3>
                  {recipe.titleHindi && (
                    <p className="text-xs text-[#6F6A60] font-sans line-clamp-1">
                      {recipe.titleHindi}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-[#E8DFD0] flex items-center justify-between text-xs font-sans text-[#6F6A60]">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-[#D4881E]" />
                    <span>{recipe.cookTime}</span>
                  </span>
                  <span className="text-[#C0392B] font-semibold">{recipe.difficulty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <JourneyLine label="END OF RECIPES ARCHIVE" />
    </div>
  );
};
