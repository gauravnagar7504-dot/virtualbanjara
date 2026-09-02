import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Clock, Users, ChefHat, MapPin, ArrowLeft, ArrowRight, Check, Youtube, ArrowUpRight, BookOpen, Camera, X } from 'lucide-react';
import { RECIPES } from '../data/content';
import { JourneyLine } from '../components/JourneyLine';

interface RecipeDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
}

export const RecipeDetailPage: React.FC<RecipeDetailPageProps> = ({ slug, navigate }) => {
  const recipe = RECIPES.find((r) => r.slug === slug) || RECIPES[0];
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Lock body scroll when image lightbox is open
  useEffect(() => {
    if (activeImage) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow || 'unset';
      };
    }
  }, [activeImage]);

  const toggleIngredient = (id: string) => {
    setCheckedIngredients((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-10">
      {/* Back Button */}
      <button
        onClick={() => navigate('/recipes')}
        className="inline-flex items-center space-x-1.5 text-xs font-sans uppercase tracking-widest text-[#6F6A60] hover:text-[#C0392B] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Recipes</span>
      </button>

      {/* Header */}
      <header className="space-y-4 border-b border-[#E8DFD0] pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-sans">
          <span className="px-2.5 py-1 bg-[#F3EBDD] rounded-xl text-[#C0392B] font-semibold uppercase">
            {recipe.category}
          </span>
          <span className="flex items-center space-x-1 text-[#6F6A60]">
            <MapPin className="w-3.5 h-3.5 text-[#C0392B]" />
            <span>{recipe.region}</span>
          </span>
          <span className="text-[#D8CCB9]">•</span>
          <span className="text-[#6F6A60]">{recipe.cuisine}</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#1B1A17] leading-tight">
          {recipe.title}
        </h1>

        {recipe.titleHindi && (
          <p className="text-base sm:text-lg text-[#C0392B] font-heading italic">
            {recipe.titleHindi}
          </p>
        )}

        {/* Quick Culinary Metadata Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          <div className="bg-[#FCFAF7] border border-[#E8DFD0] p-3.5 rounded-xl text-center">
            <div className="text-[11px] font-sans text-[#D4881E] uppercase">Prep Time</div>
            <div className="font-heading font-bold text-sm text-[#1B1A17] mt-0.5">{recipe.prepTime}</div>
          </div>
          <div className="bg-[#FCFAF7] border border-[#E8DFD0] p-3.5 rounded-xl text-center">
            <div className="text-[11px] font-sans text-[#D4881E] uppercase">Cook Time</div>
            <div className="font-heading font-bold text-sm text-[#1B1A17] mt-0.5">{recipe.cookTime}</div>
          </div>
          <div className="bg-[#FCFAF7] border border-[#E8DFD0] p-3.5 rounded-xl text-center">
            <div className="text-[11px] font-sans text-[#D4881E] uppercase">Servings</div>
            <div className="font-heading font-bold text-sm text-[#1B1A17] mt-0.5">{recipe.servings}</div>
          </div>
          <div className="bg-[#FCFAF7] border border-[#E8DFD0] p-3.5 rounded-xl text-center">
            <div className="text-[11px] font-sans text-[#D4881E] uppercase">Difficulty</div>
            <div className="font-heading font-bold text-sm text-[#C0392B] mt-0.5">{recipe.difficulty}</div>
          </div>
        </div>
      </header>

      {/* Hero Image Banner */}
      <div 
        onClick={() => setActiveImage(recipe.heroImage)}
        className="rounded-2xl overflow-hidden border border-[#D8CCB9] shadow-editorial bg-black/5 aspect-[16/9] relative group cursor-pointer"
      >
        <img
          src={recipe.heroImage}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-sans bg-black/70 px-3 py-1.5 rounded-2xl backdrop-blur-sm transition-opacity flex items-center space-x-1.5 border border-white/20">
            <Camera className="w-4 h-4" />
            <span>Click to View Full Size</span>
          </span>
        </div>
      </div>

      {/* Origin Story */}
      <div className="bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm">
        <h3 className="font-heading font-bold text-lg text-[#1B1A17] flex items-center space-x-2">
          <ChefHat className="w-5 h-5 text-[#C0392B]" />
          <span>The Origin & Culinary Context</span>
        </h3>
        <p className="text-sm sm:text-base text-[#6F6A60] font-sans leading-relaxed">
          {recipe.story}
        </p>
      </div>

      {/* Ingredients Checklist */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#E8DFD0] pb-3">
          <h2 className="font-heading font-bold text-2xl text-[#1B1A17]">
            Ingredients & Spices
          </h2>
          <span className="text-xs font-sans text-[#D4881E]">
            Tap items to cross off while cooking
          </span>
        </div>

        <div className="space-y-6">
          {recipe.ingredients.map((section, sIdx) => (
            <div key={sIdx} className="bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl p-5 space-y-3 shadow-sm">
              {section.section && (
                <h4 className="font-sans text-xs uppercase tracking-widest text-[#C0392B] font-bold">
                  {section.section}
                </h4>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {section.items.map((item, iIdx) => {
                  const key = `${sIdx}-${iIdx}`;
                  const isChecked = !!checkedIngredients[key];
                  return (
                    <div
                      key={iIdx}
                      onClick={() => toggleIngredient(key)}
                      className={`p-3 rounded-xl border flex items-start space-x-3 cursor-pointer transition-colors ${
                        isChecked
                          ? 'bg-[#F3EBDD]/60 border-[#D8CCB9] line-through text-[#6F6A60]'
                          : 'bg-white border-[#E8DFD0] hover:border-[#C0392B] text-[#1B1A17]'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-xl mt-0.5 shrink-0 flex items-center justify-center border ${
                          isChecked ? 'bg-[#C0392B] border-[#C0392B] text-white' : 'border-[#D8CCB9]'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div className="text-xs font-sans">
                        <div className="font-semibold">
                          {item.name} <span className="font-sans text-[#C0392B]">({item.amount})</span>
                        </div>
                        {item.hindiName && (
                          <div className="text-[11px] text-[#6F6A60] font-heading">{item.hindiName}</div>
                        )}
                        {item.note && (
                          <div className="text-[10px] text-[#D4881E] italic">{item.note}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step-by-Step Method */}
      <div className="space-y-6">
        <div className="border-b border-[#E8DFD0] pb-3">
          <h2 className="font-heading font-bold text-2xl text-[#1B1A17]">
            Traditional Cooking Method
          </h2>
        </div>

        <div className="space-y-6">
          {recipe.method.map((m) => (
            <div
              key={m.step}
              className="bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl p-6 space-y-3 shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <span className="w-7 h-7 rounded-full bg-[#1B1A17] text-white font-sans text-xs flex items-center justify-center font-bold">
                  {m.step}
                </span>
                <h3 className="font-heading font-bold text-lg text-[#1B1A17]">
                  {m.title}
                </h3>
              </div>

              <p className="text-sm text-[#1B1A17] font-sans leading-relaxed pl-10">
                {m.instruction}
              </p>

              {m.chefTip && (
                <div className="ml-10 p-3 bg-[#F3EBDD] border-l-2 border-[#D4881E] rounded-r-2xl text-xs text-[#6F6A60] font-sans italic">
                  <span className="font-bold text-[#1B1A17] not-italic">Chef's Secret: </span>
                  {m.chefTip}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Photo Gallery Section */}
      {recipe.gallery && recipe.gallery.length > 0 && (
        <div className="space-y-4 pt-4">
          <div className="flex items-center space-x-2 border-b border-[#E8DFD0] pb-3">
            <Camera className="w-5 h-5 text-[#C0392B]" />
            <h2 className="font-heading font-bold text-2xl text-[#1B1A17]">
              Kitchen & Field Gallery
            </h2>
            <span className="text-xs font-sans text-[#D4881E] ml-auto">
              {recipe.gallery.length} Photos
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {recipe.gallery.map((imgSrc, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImage(imgSrc)}
                className="aspect-square rounded-2xl overflow-hidden border border-[#D8CCB9] bg-black/5 cursor-pointer group relative shadow-sm hover:border-[#C0392B] transition-colors"
              >
                <img
                  src={imgSrc}
                  alt={`${recipe.title} photo ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-[11px] font-sans bg-black/60 px-2 py-1 rounded-xl transition-opacity">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Video Demonstration */}
      {recipe.youtubeId && (
        <div className="p-4 sm:p-6 bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl space-y-4 shadow-editorial">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#C0392B]/10 flex items-center justify-center shrink-0 border border-[#C0392B]/20">
                <Youtube className="w-5 h-5 text-[#C0392B]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#1B1A17] leading-snug">
                  Watch Recipe Cooked on Location
                </h3>
                <span className="text-[11px] font-sans text-[#D4881E] block">
                  Original 4K Episode by Virtual Banjara®
                </span>
              </div>
            </div>

            <a
              href={`https://www.youtube.com/watch?v=${recipe.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-1.5 text-xs font-sans font-semibold text-[#1B1A17] hover:text-white bg-[#F3EBDD] hover:bg-[#C0392B] px-4 py-2.5 rounded-2xl border border-[#D8CCB9] transition-all shadow-sm shrink-0 self-start sm:self-auto"
            >
              <span>Watch on YouTube</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#D8CCB9] bg-black shadow-md">
            <iframe
              src={`https://www.youtube.com/embed/${recipe.youtubeId}?rel=0`}
              title={recipe.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}

      {/* Lightbox Modal rendered directly on document.body via Portal */}
      {activeImage && createPortal(
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 md:p-8 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveImage(null)}
          style={{ zIndex: 999999 }}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="fixed top-5 right-5 bg-[#1B1A17]/90 hover:bg-[#C0392B] text-white p-3 rounded-full transition-colors border border-white/20 shadow-2xl focus:outline-none cursor-pointer"
            title="Close image (or click background)"
            style={{ zIndex: 1000000 }}
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-5xl max-h-[90vh] bg-transparent flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            style={{ zIndex: 999999 }}
          >
            <img
              src={activeImage}
              alt="Enlarged gallery photo"
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl border border-white/15"
            />
          </div>
        </div>,
        document.body
      )}

      </article>
  );
};
