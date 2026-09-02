import React from 'react';
import { 
 ArrowUpRight, 
 ArrowRight, 
 Play, 
 MapPin, 
 Clock, 
 UtensilsCrossed, 
 BookOpen, 
 Youtube, 
 Instagram, 
 CheckCircle2, 
 Sparkles,
 Quote,
 Video,
 Flame,
 Share2,
 Compass
} from 'lucide-react';
import { BRAND_INFO, RECIPES, VIDEOS, FOOD_TRAILS, WHY_WORK_WITH_VB } from '../data/content';
import { PhotoSlider } from '../components/PhotoSlider';
import { ReviewsSlider } from '../components/ReviewsSlider';
import { VideoItem } from '../types';

interface HomePageProps {
 navigate: (path: string) => void;
 onOpenVideo: (video: VideoItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate, onOpenVideo }) => {
 const featuredRecipes = RECIPES.slice(0, 4);
 const primaryVideo = VIDEOS[0];
 const secondaryVideos = VIDEOS.slice(1, 4);

 return (
 <div className="w-full bg-[#FAF7F0] text-[#1C1917] selection:bg-[#B83226] selection:text-white">
 {/* ========================================================================= */}
 {/* 01 — HERO SECTION (Editorial Grand Cover) */}
 {/* ========================================================================= */}
 <section className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center overflow-hidden bg-[#F5EFEB] border-b border-[#E8DFD0]">
 {/* Full Bleed Illustrated Banner Artwork */}
 <div 
 className="absolute inset-0 bg-cover bg-no-repeat bg-[position:82%_center] md:bg-right lg:bg-[position:right_center]"
 style={{ backgroundImage: "url('/hero-banner.png')" }}
 />

 {/* Soft atmospheric gradient for crisp typography */}
 <div className="absolute inset-0 bg-gradient-to-r from-[#F5EFEB] via-[#F5EFEB]/90 to-transparent sm:via-[#F5EFEB]/65 md:hidden" />

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 relative z-10 w-full">
 <div className="max-w-xl lg:max-w-2xl space-y-6">
 {/* Editorial Eyebrow */}
 <div className="flex items-center space-x-3 text-xs font-sans uppercase tracking-[0.2em] text-[#B83226] font-semibold">
 <span>EST. 2019</span>
 <span className="text-[#C88218]">•</span>
 <span>JAIPUR, RAJASTHAN</span>
 <span className="text-[#C88218]">•</span>
 <span>726K+ COMMUNITY</span>
 </div>

 {/* Master Headline */}
 <div className="space-y-3">
 <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1C1917] leading-[1.12]">
 One Bite, One Story <br />
 <span className="text-[#B83226] italic font-serif font-normal">at a Time.</span>
 </h1>
 
 {/* Rajasthani Nomadic Proverb */}
 <div className="pt-2">
 <p className="font-hindi text-lg sm:text-2xl lg:text-3xl text-[#8E2218] font-bold tracking-wide">
 'जो फिरे सो चरे, खूंटा सु बंधे भूखा मरे।'
 </p>
 <p className="text-[11px] sm:text-xs font-sans text-[#78716C] uppercase tracking-wider mt-1">
 Ancient Rajasthani Nomadic Proverb — "He who wanders, thrives."
 </p>
 </div>
 </div>

 {/* Supporting Editorial Paragraph */}
 <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-lg font-sans">
 Discovering and documenting India's authentic food, living heritage, lost kitchen recipes, and legendary hospitality through cinematic documentaries.
 </p>

 {/* CTAs */}
 <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
 <button
 onClick={() => navigate('/recipes')}
 className="inline-flex items-center justify-center space-x-2 bg-[#B83226] hover:bg-[#96261C] text-white text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
 >
 <span>Explore Recipes</span>
 <ArrowRight className="w-4 h-4" />
 </button>

 <button
 onClick={() => navigate('/food-trails')}
 className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-[#FAF7F0] text-[#1C1917] hover:text-[#B83226] border border-[#D6CCC0] hover:border-[#B83226] text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xs"
 >
 <span>Curated Food Trails</span>
 <ArrowUpRight className="w-4 h-4" />
 </button>
 </div>
 </div>
 </div>
 </section>

 {/* ========================================================================= */}
 {/* 01.5 — CONTINUOUS SLOW MARQUEE PHOTO SLIDER */}
 {/* ========================================================================= */}
 <PhotoSlider />

 <div className="space-y-12 sm:space-y-16 md:space-y-20 pt-4 sm:pt-6">

 {/* ========================================================================= */}
 {/* 02 — THE CHRONICLER: ASHISH WADHWANI (Magazine Profile Style) */}
 {/* ========================================================================= */}
 <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="py-6 sm:py-8 lg:py-10">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
 {/* Left: Founder Portrait */}
 <div className="lg:col-span-5 relative">
 <div className="relative rounded-2xl overflow-hidden border border-[#D8CCB9] shadow-editorial bg-[#1C1917] group">
 <img
 src="/ashish-wadhwani.jpg"
 alt="Ashish Wadhwani - Founder & Culinary Chronicler"
 className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
 />
 
 {/* Photo Caption Badge */}
 <div className="absolute bottom-4 left-4 right-4 bg-[#1C1917]/90 backdrop-blur-md p-3.5 rounded-xl border border-white/15 text-white">
 <div className="font-heading font-bold text-base text-white">Ashish Wadhwani</div>
 <div className="text-[11px] font-sans text-[#C88218] uppercase tracking-wider">
 Founder, Documentarian & Host
 </div>
 </div>
 </div>
 </div>

 {/* Right: Editorial Narrative */}
 <div className="lg:col-span-7 space-y-6">
 <div className="space-y-2">
 <div className="text-xs font-sans uppercase tracking-[0.2em] text-[#B83226] font-semibold">
 Field Dispatch · The Chronicler
 </div>

 <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] tracking-tight leading-tight">
 Wandering through India, <br className="hidden sm:inline" />
 one kitchen at a time.
 </h2>
 </div>

 <div className="space-y-4 text-sm sm:text-base text-[#57534E] font-sans leading-relaxed">
 <p>
 Virtual Banjara® was born from a simple, unhurried truth: the greatest culinary treasures of India rarely live on laminated menus. They reside in family courtyards, village chulhas, royal hunting lodges, and old-quarter hearths.
 </p>
 <p>
 Founded by Ashish Wadhwani, Virtual Banjara travels deep into the subcontinent's interior to document recipes, cooking techniques, and oral histories before they fade into modernity.
 </p>
 </div><div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
 <button
 onClick={() => navigate('/about')}
 className="inline-flex items-center justify-center space-x-2 bg-[#1C1917] hover:bg-[#B83226] text-white text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-sm"
 >
 <span>Read Full Philosophy</span>
 <ArrowRight className="w-3.5 h-3.5" />
 </button>
 <button
 onClick={() => navigate('/collaborate')}
 className="inline-flex items-center justify-center space-x-2 bg-[#FAF7F0] hover:bg-white text-[#1C1917] border border-[#D6CCC0] text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-xl transition-colors"
 >
 <span>Partner With Us</span>
 <ArrowUpRight className="w-3.5 h-3.5" />
 </button>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ========================================================================= */}
 {/* 03 — OUR SERVICES & BRAND COLLABORATIONS (Original Full Services Grid) */}
 {/* ========================================================================= */}
 <section className="bg-[#1B1A17] text-[#FAF6EF] py-10 sm:py-16 lg:py-20 relative overflow-hidden border-y border-[#2E2A24]">
 {/* Subtle Ambient Radial Glows */}
 <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#C0392B]/10 rounded-full filter blur-3xl pointer-events-none" />
 <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#D4881E]/10 rounded-full filter blur-3xl pointer-events-none" />

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-16">
 {/* Section Header */}
 <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2E2A24] pb-6 sm:pb-8">
 <div className="space-y-2.5 max-w-2xl">
 <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#25221D] border border-[#3D372E] rounded-full text-xs font-sans text-[#D4881E] uppercase tracking-widest font-semibold">
 <Sparkles className="w-3.5 h-3.5" />
 <span>Production & Brand Services</span>
 </div>
 <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAF6EF] tracking-tight leading-tight">
 OUR SERVICES
 </h2>
 <p className="font-hindi text-sm sm:text-base md:text-lg text-[#C0392B] font-semibold leading-relaxed">
 प्रामाणिक कंटेंट, पेशेवर प्रोडक्शन और लाखों दर्शकों का सच्चा भरोसा
 </p>
 <p className="text-xs sm:text-sm md:text-base text-[#A8A196] font-sans leading-relaxed">
 We partner exclusively with luxury heritage hotels, iconic restaurants, culinary enterprises, and cultural destinations to craft evergreen documentary brand assets.
 </p>
 </div>

 <button
 onClick={() => navigate('/collaborate')}
 className="inline-flex items-center justify-center space-x-2 bg-[#C0392B] hover:bg-[#9E2B1F] text-white text-xs uppercase tracking-widest font-semibold px-7 py-3.5 sm:py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl self-start md:self-auto shrink-0 active:scale-[0.98]"
 >
 <span>Work With Us</span>
 <ArrowRight className="w-4 h-4" />
 </button>
 </div>

 {/* 4 Services Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {/* Service 1 */}
 <div className="bg-[#24201A] border border-[#383228] hover:border-[#C0392B] rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 shadow-lg space-y-6">
 <div className="space-y-4">
 <div className="flex items-center justify-between">
 <div className="w-12 h-12 rounded-xl bg-[#C0392B]/15 border border-[#C0392B]/30 flex items-center justify-center text-[#C0392B] group-hover:scale-110 transition-transform">
 <Video className="w-6 h-6" />
 </div>
 <span className="text-[10px] font-sans uppercase tracking-wider text-[#D4881E] bg-[#2E281F] px-2.5 py-1 rounded-md border border-[#443C2E] font-semibold">
 Flagship
 </span>
 </div>

 <h3 className="font-heading font-bold text-xl text-[#FAF6EF] group-hover:text-[#D4881E] transition-colors leading-snug">
 YouTube 4K Documentaries
 </h3>

 <p className="text-xs sm:text-sm text-[#A8A196] font-sans leading-relaxed">
 15 to 30-minute cinematic deep-dives capturing master chefs, heritage recipes, and genuine hospitality for our 726K+ community.
 </p>

 <ul className="space-y-2 pt-2 border-t border-[#332D24] text-xs text-[#CBC3B5] font-sans">
 <li className="flex items-center space-x-2">
 <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B]" />
 <span>Dedicated 4K episode</span>
 </li>
 <li className="flex items-center space-x-2">
 <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B]" />
 <span>Permanent evergreen archive</span>
 </li>
 <li className="flex items-center space-x-2">
 <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B]" />
 <span>High-res photo bundle</span>
 </li>
 </ul>
 </div>

 <div className="pt-2">
 <button
 onClick={() => navigate('/collaborate')}
 className="w-full text-center text-xs font-sans uppercase tracking-wider font-semibold text-[#D4881E] hover:text-white bg-[#2E281F] hover:bg-[#C0392B] py-2.5 rounded-xl border border-[#443C2E] transition-colors"
 >
 Learn More →
 </button>
 </div>
 </div>

 {/* Service 2 */}
 <div className="bg-[#24201A] border border-[#383228] hover:border-[#D4881E] rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 shadow-lg space-y-6">
 <div className="space-y-4">
 <div className="flex items-center justify-between">
 <div className="w-12 h-12 rounded-xl bg-[#D4881E]/15 border border-[#D4881E]/30 flex items-center justify-center text-[#D4881E] group-hover:scale-110 transition-transform">
 <Flame className="w-6 h-6" />
 </div>
 <span className="text-[10px] font-sans uppercase tracking-wider text-[#C0392B] bg-[#2E281F] px-2.5 py-1 rounded-md border border-[#443C2E] font-semibold">
 Viral Reach
 </span>
 </div>

 <h3 className="font-heading font-bold text-xl text-[#FAF6EF] group-hover:text-[#D4881E] transition-colors leading-snug">
 Instagram High-Impact Reels
 </h3>

 <p className="text-xs sm:text-sm text-[#A8A196] font-sans leading-relaxed">
 Punchy, aesthetic 60 to 90-second vertical reels showcasing signature dishes, ambience, and chef mastery for rapid discovery.
 </p>

 <ul className="space-y-2 pt-2 border-t border-[#332D24] text-xs text-[#CBC3B5] font-sans">
 <li className="flex items-center space-x-2">
 <span className="w-1.5 h-1.5 rounded-full bg-[#D4881E]" />
 <span>Reels on @virtualbanjara</span>
 </li>
 <li className="flex items-center space-x-2">
 <span className="w-1.5 h-1.5 rounded-full bg-[#D4881E]" />
 <span>Story series with direct booking</span>
 </li>
 <li className="flex items-center space-x-2">
 <span className="w-1.5 h-1.5 rounded-full bg-[#D4881E]" />
 <span>Social cuts for brand use</span>
 </li>
 </ul>
 </div>

 <div className="pt-2">
 <button
 onClick={() => navigate('/collaborate')}
 className="w-full text-center text-xs font-sans uppercase tracking-wider font-semibold text-[#D4881E] hover:text-white bg-[#2E281F] hover:bg-[#C0392B] py-2.5 rounded-xl border border-[#443C2E] transition-colors"
 >
 Learn More →
 </button>
 </div>
 </div>

 {/* Service 3 */}
 <div className="bg-[#24201A] border border-[#383228] hover:border-[#C0392B] rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 shadow-lg space-y-6">
 <div className="space-y-4">
 <div className="flex items-center justify-between">
 <div className="w-12 h-12 rounded-xl bg-[#C0392B]/15 border border-[#C0392B]/30 flex items-center justify-center text-[#C0392B] group-hover:scale-110 transition-transform">
 <Share2 className="w-6 h-6" />
 </div>
 <span className="text-[10px] font-sans uppercase tracking-wider text-[#A8A196] bg-[#2E281F] px-2.5 py-1 rounded-md border border-[#443C2E] font-semibold">
 Mass Reach
 </span>
 </div>

 <h3 className="font-heading font-bold text-xl text-[#FAF6EF] group-hover:text-[#D4881E] transition-colors leading-snug">
 Facebook Deep Narratives
 </h3>

 <p className="text-xs sm:text-sm text-[#A8A196] font-sans leading-relaxed">
 Tailored community storytelling generating high shares, family dining conversations, and regional culinary tourism.
 </p>

 <ul className="space-y-2 pt-2 border-t border-[#332D24] text-xs text-[#CBC3B5] font-sans">
 <li className="flex items-center space-x-2">
 <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B]" />
 <span>Native bilingual captions</span>
 </li>
 <li className="flex items-center space-x-2">
 <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B]" />
 <span>Location & booking tags</span>
 </li>
 <li className="flex items-center space-x-2">
 <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B]" />
 <span>Active food group sharing</span>
 </li>
 </ul>
 </div>

 <div className="pt-2">
 <button
 onClick={() => navigate('/collaborate')}
 className="w-full text-center text-xs font-sans uppercase tracking-wider font-semibold text-[#D4881E] hover:text-white bg-[#2E281F] hover:bg-[#C0392B] py-2.5 rounded-xl border border-[#443C2E] transition-colors"
 >
 Learn More →
 </button>
 </div>
 </div>

 {/* Service 4 */}
 <div className="bg-[#24201A] border border-[#383228] hover:border-[#D4881E] rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 shadow-lg space-y-6">
 <div className="space-y-4">
 <div className="flex items-center justify-between">
 <div className="w-12 h-12 rounded-xl bg-[#D4881E]/15 border border-[#D4881E]/30 flex items-center justify-center text-[#D4881E] group-hover:scale-110 transition-transform">
 <Compass className="w-6 h-6" />
 </div>
 <span className="text-[10px] font-sans uppercase tracking-wider text-[#D4881E] bg-[#2E281F] px-2.5 py-1 rounded-md border border-[#443C2E] font-semibold">
 Advisory
 </span>
 </div>

 <h3 className="font-heading font-bold text-xl text-[#FAF6EF] group-hover:text-[#D4881E] transition-colors leading-snug">
 Culinary Consultation
 </h3>

 <p className="text-xs sm:text-sm text-[#A8A196] font-sans leading-relaxed">
 Leverage Ashish Wadhwani's deep field knowledge to unearth forgotten recipes, refine menu narratives, and audit hospitality concepts.
 </p>

 <ul className="space-y-2 pt-2 border-t border-[#332D24] text-xs text-[#CBC3B5] font-sans">
 <li className="flex items-center space-x-2">
 <span className="w-1.5 h-1.5 rounded-full bg-[#D4881E]" />
 <span>Culinary authenticity audit</span>
 </li>
 <li className="flex items-center space-x-2">
 <span className="w-1.5 h-1.5 rounded-full bg-[#D4881E]" />
 <span>Heirloom recipe concept framing</span>
 </li>
 <li className="flex items-center space-x-2">
 <span className="w-1.5 h-1.5 rounded-full bg-[#D4881E]" />
 <span>Brand positioning roadmap</span>
 </li>
 </ul>
 </div>

 <div className="pt-2">
 <button
 onClick={() => navigate('/collaborate')}
 className="w-full text-center text-xs font-sans uppercase tracking-wider font-semibold text-[#D4881E] hover:text-white bg-[#2E281F] hover:bg-[#C0392B] py-2.5 rounded-xl border border-[#443C2E] transition-colors"
 >
 Learn More →
 </button>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ========================================================================= */}
 {/* 04 — REAL YOUTUBE EPISODES (Cinematic Film Showcase) */}
 {/* ========================================================================= */}
 <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
 <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8DFD0] pb-6">
 <div className="space-y-1">
 <div className="text-xs font-sans uppercase tracking-[0.2em] text-[#B83226] font-semibold">
 The Field Archive · @VirtualBanjara
 </div>
 <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C1917] tracking-tight">
 Cinematic Episodes & Documentaries
 </h2>
 <p className="text-sm text-[#57534E] font-sans">
 Watch authentic village hearths, royal banquets, and desert cookouts recorded on location across India.
 </p>
 </div>

 <button
 onClick={() => navigate('/videos')}
 className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-sans font-bold text-[#B83226] hover:text-[#96261C] transition-colors shrink-0"
 >
 <span>Explore All 800+ Episodes</span>
 <ArrowRight className="w-4 h-4" />
 </button>
 </div>

 {/* Featured Film Highlight */}
 <div className="bg-[#FAF7F0] border border-[#E8DFD0] rounded-3xl p-5 sm:p-8 lg:p-10 shadow-editorial">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
 <div className="lg:col-span-7">
 <div 
 onClick={() => onOpenVideo(primaryVideo)}
 className="relative rounded-2xl overflow-hidden bg-black aspect-video cursor-pointer shadow-lg group"
 >
 <img
 src={primaryVideo.thumbnail}
 alt={primaryVideo.title}
 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
 />
 <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
 <div className="w-16 h-16 rounded-full bg-[#B83226] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
 <Play className="w-7 h-7 fill-current ml-1" />
 </div>
 </div>
 <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 rounded-md text-xs font-sans text-white">
 FEATURED DOCUMENTARY
 </div>
 <div className="absolute bottom-4 right-4 bg-black/80 px-2.5 py-1 rounded-md text-xs font-sans text-white">
 {primaryVideo.duration}
 </div>
 </div>
 </div>

 <div className="lg:col-span-5 space-y-4">
 <div className="text-xs font-sans text-[#C88218] uppercase font-bold tracking-wider">
 {primaryVideo.category} · {primaryVideo.location}
 </div>
 <h3 className="font-heading font-extrabold text-base sm:text-xl lg:text-2xl text-[#1C1917] leading-snug">
 {primaryVideo.title}
 </h3>
 <p className="text-xs sm:text-sm text-[#57534E] font-sans leading-relaxed">
 {primaryVideo.description}
 </p>
 <div className="pt-2">
 <button
 onClick={() => onOpenVideo(primaryVideo)}
 className="inline-flex items-center space-x-2 bg-[#B83226] hover:bg-[#96261C] text-white text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm"
 >
 <Play className="w-3.5 h-3.5 fill-current" />
 <span>Watch Full Episode</span>
 </button>
 </div>
 </div>
 </div>
 </div>

 {/* Secondary Videos Grid */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {secondaryVideos.map((video) => (
 <article
 key={video.id}
 onClick={() => onOpenVideo(video)}
 className="bg-white border border-[#E8DFD0] hover:border-[#B83226] rounded-2xl overflow-hidden group cursor-pointer shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
 >
 <div className="aspect-video relative overflow-hidden bg-black/10">
 <img
 src={video.thumbnail}
 alt={video.title}
 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
 />
 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
 <div className="w-10 h-10 rounded-full bg-[#B83226] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
 <Play className="w-4 h-4 fill-current ml-0.5" />
 </div>
 </div>
 <div className="absolute bottom-2.5 right-2.5 bg-black/80 px-2 py-0.5 rounded text-[10px] font-sans text-white">
 {video.duration}
 </div>
 </div>

 <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
 <div className="space-y-1.5">
 <div className="text-[10px] font-sans text-[#C88218] uppercase tracking-wider font-bold">
 {video.category} · {video.location}
 </div>
 <h4 className="font-heading font-bold text-sm sm:text-base text-[#1C1917] group-hover:text-[#B83226] transition-colors line-clamp-2 leading-snug">
 {video.title}
 </h4>
 </div>
 <div className="pt-2 border-t border-[#F2ECE1] text-[11px] font-sans text-[#78716C] flex items-center justify-between">
 <span>{video.views || 'Documentary'}</span>
 <span className="text-[#B83226] font-bold">Watch →</span>
 </div>
 </div>
 </article>
 ))}
 </div>
 </section>

 {/* ========================================================================= */}
 {/* 05 — AUTHENTIC HERITAGE RECIPES (Dark Website Theme) */}
 {/* ========================================================================= */}
 <section className="bg-[#1B1A17] text-[#FAF6EF] py-14 sm:py-20 relative overflow-hidden border-y border-[#2E2A24]">
 {/* Subtle Ambient Radial Glow */}
 <div className="absolute top-0 right-0 w-96 h-96 bg-[#C0392B]/10 rounded-full filter blur-3xl pointer-events-none" />
 <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4881E]/10 rounded-full filter blur-3xl pointer-events-none" />

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
 <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#2E2A24] pb-6">
 <div className="space-y-2 max-w-2xl">
 <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#25221D] border border-[#3D372E] rounded-full text-xs font-sans text-[#D4881E] uppercase tracking-widest font-semibold">
 <UtensilsCrossed className="w-3.5 h-3.5 text-[#C0392B]" />
 <span>The Living Kitchen · Heirlooms</span>
 </div>
 <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FAF6EF] tracking-tight">
 Authentic Heritage Recipes
 </h2>
 <p className="text-sm sm:text-base text-[#A8A196] font-sans">
 Exact heirloom measurements and techniques documented from royal lineages and desert kitchens.
 </p>
 </div>

 <button
 onClick={() => navigate('/recipes')}
 className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-sans font-bold text-[#D4881E] hover:text-[#FAF6EF] bg-[#2E281F] hover:bg-[#C0392B] px-5 py-3 rounded-xl border border-[#443C2E] transition-all shrink-0 self-start md:self-auto"
 >
 <span>View All Recipes</span>
 <ArrowRight className="w-4 h-4" />
 </button>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {featuredRecipes.map((recipe) => (
 <article
 key={recipe.id}
 onClick={() => navigate(`/recipes/${recipe.slug}`)}
 className="bg-[#24201A] border border-[#383228] hover:border-[#C0392B] rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
 >
 <div className="aspect-[4/3] relative overflow-hidden bg-black/30">
 <img
 src={recipe.heroImage}
 alt={recipe.title}
 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
 />
 <div className="absolute top-3 left-3 bg-[#1B1A17]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-sans text-white uppercase font-bold border border-white/20">
 {recipe.region}
 </div>
 </div>

 <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
 <div className="space-y-1.5">
 <div className="text-[10px] font-sans text-[#D4881E] uppercase font-bold tracking-wider">
 {recipe.cuisine}
 </div>
 <h3 className="font-heading font-bold text-base text-[#FAF6EF] group-hover:text-[#D4881E] transition-colors line-clamp-2 leading-snug">
 {recipe.title}
 </h3>
 </div>

 <div className="pt-3 border-t border-[#332D24] flex items-center justify-between text-[11px] font-sans text-[#A8A196]">
 <span>{recipe.cookTime}</span>
 <span className="text-[#C0392B] group-hover:text-[#D4881E] font-bold transition-colors">Cook Recipe →</span>
 </div>
 </div>
 </article>
 ))}
 </div>
 </div>
 </section>

 {/* ========================================================================= */}
 {/* 06 — CURATED FOOD TRAILS (Human Editorial Guide: Jaipur & Udaipur) */}
 {/* ========================================================================= */}
 <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
 <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8DFD0] pb-6">
 <div className="space-y-1 max-w-2xl">
 <div className="text-xs font-sans uppercase tracking-[0.2em] text-[#B83226] font-semibold">
 The Explorer's Dispatch
 </div>
 <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C1917] tracking-tight">
 Follow the flavours. Discover the places.
 </h2>
 <p className="text-sm text-[#57534E] font-sans">
 "We've been there. We've experienced it. Here's where we'd send you."
 </p>
 </div>

 <button
 onClick={() => navigate('/food-trails')}
 className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-sans font-bold text-[#B83226] hover:text-[#96261C] transition-colors shrink-0"
 >
 <span>Explore Dedicated Food Trails Page</span>
 <ArrowRight className="w-4 h-4" />
 </button>
 </div>

 {/* Two Curated City Sections: Jaipur & Udaipur */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
 {/* Jaipur Column */}
 <div className="bg-[#FAF7F0] border border-[#E8DFD0] rounded-3xl p-5 sm:p-7 space-y-5 shadow-editorial">
 <div className="border-b border-[#E8DFD0] pb-4 flex flex-wrap items-center justify-between gap-2">
 <div>
 <span className="text-[11px] font-sans uppercase tracking-widest text-[#B83226] font-bold block">
 RAJASTHAN · 6 CURATED PICKS
 </span>
 <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C1917]">
 JAIPUR
 </h3>
 </div>
 <span className="text-xs font-sans font-bold text-[#C88218] bg-[#F3EBDD] px-3 py-1 rounded-lg border border-[#D8CCB9]">
 Non-Veg Focused
 </span>
 </div>

 <div className="space-y-4">
 {FOOD_TRAILS[0]?.places.map((place) => (
 <article
 key={place.id}
 className="bg-white border border-[#E8DFD0] hover:border-[#B83226] rounded-2xl p-4 sm:p-5 space-y-3 transition-colors shadow-xs group"
 >
 <div className="flex items-center justify-between gap-2">
 <span className="text-xs font-sans font-extrabold text-[#B83226] bg-[#F3EBDD] px-2.5 py-0.5 rounded-lg border border-[#D8CCB9]">
 #{place.number}
 </span>
 <span className="text-[10px] font-sans uppercase tracking-wider text-[#78716C] bg-[#FAF7F0] px-2 py-0.5 rounded-md border border-[#E8DFD0] font-semibold">
 {place.category}
 </span>
 </div>

 <div className="space-y-1">
 <h4 className="font-heading font-bold text-lg sm:text-xl text-[#1C1917] group-hover:text-[#B83226] transition-colors leading-snug">
 {place.name}
 </h4>
 <div className="flex items-center space-x-1.5 text-xs font-sans text-[#78716C]">
 <MapPin className="w-3.5 h-3.5 text-[#B83226] shrink-0" />
 <span>{place.area}</span>
 </div>
 </div>

 <div className="bg-[#FAF7F0] border-l-2 border-[#B83226] p-3 rounded-r-xl text-xs sm:text-sm text-[#1C1917] italic font-sans leading-relaxed">
 "{place.whyVBRecommends}"
 </div>

 <div className="text-xs font-sans text-[#78716C]">
 <span className="text-[#C88218] font-bold">Must Try: </span>
 <span className="text-[#1C1917] font-medium font-sans">{place.mustTry.join(', ')}</span>
 </div>

 <div className="text-xs font-sans text-[#57534E] pt-1 border-t border-[#F2ECE1]">
 <strong className="font-sans text-[#78716C]">Best For: </strong>
 <span>{place.bestFor}</span>
 </div>
 </article>
 ))}
 </div>
 </div>

 {/* Udaipur Column */}
 <div className="bg-[#FAF7F0] border border-[#E8DFD0] rounded-3xl p-5 sm:p-7 space-y-5 shadow-editorial">
 <div className="border-b border-[#E8DFD0] pb-4 flex flex-wrap items-center justify-between gap-2">
 <div>
 <span className="text-[11px] font-sans uppercase tracking-widest text-[#B83226] font-bold block">
 RAJASTHAN · 5 CURATED PICKS
 </span>
 <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C1917]">
 UDAIPUR
 </h3>
 </div>
 <span className="text-xs font-sans font-bold text-[#C88218] bg-[#F3EBDD] px-3 py-1 rounded-lg border border-[#D8CCB9]">
 Views + Authentic Taste
 </span>
 </div>

 <div className="space-y-4">
 {FOOD_TRAILS[1]?.places.map((place) => (
 <article
 key={place.id}
 className="bg-white border border-[#E8DFD0] hover:border-[#B83226] rounded-2xl p-4 sm:p-5 space-y-3 transition-colors shadow-xs group"
 >
 <div className="flex items-center justify-between gap-2">
 <span className="text-xs font-sans font-extrabold text-[#B83226] bg-[#F3EBDD] px-2.5 py-0.5 rounded-lg border border-[#D8CCB9]">
 #{place.number}
 </span>
 <span className="text-[10px] font-sans uppercase tracking-wider text-[#78716C] bg-[#FAF7F0] px-2 py-0.5 rounded-md border border-[#E8DFD0] font-semibold">
 {place.category}
 </span>
 </div>

 <div className="space-y-1">
 <h4 className="font-heading font-bold text-lg sm:text-xl text-[#1C1917] group-hover:text-[#B83226] transition-colors leading-snug">
 {place.name}
 </h4>
 <div className="flex items-center space-x-1.5 text-xs font-sans text-[#78716C]">
 <MapPin className="w-3.5 h-3.5 text-[#B83226] shrink-0" />
 <span>{place.area}</span>
 </div>
 </div>

 <div className="bg-[#FAF7F0] border-l-2 border-[#B83226] p-3 rounded-r-xl text-xs sm:text-sm text-[#1C1917] italic font-sans leading-relaxed">
 "{place.whyVBRecommends}"
 </div>

 <div className="text-xs font-sans text-[#78716C]">
 <span className="text-[#C88218] font-bold">Must Try: </span>
 <span className="text-[#1C1917] font-medium font-sans">{place.mustTry.join(', ')}</span>
 </div>

 <div className="text-xs font-sans text-[#57534E] pt-1 border-t border-[#F2ECE1]">
 <strong className="font-sans text-[#78716C]">Best For: </strong>
 <span>{place.bestFor}</span>
 </div>
 </article>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* ========================================================================= */}
 {/* ========================================================================= */}
      {/* 07 — TESTIMONIALS (ReviewsSlider - Complete Full-Bleed Dark Theme) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#1B1A17] text-[#FAF6EF] py-16 sm:py-24 relative overflow-hidden border-y border-[#2E2A24]">
        {/* Ambient Radial Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C0392B]/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D4881E]/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#25221D] border border-[#3D372E] rounded-full text-xs font-sans text-[#D4881E] uppercase tracking-widest font-semibold">
              <Quote className="w-3.5 h-3.5 text-[#C0392B]" />
              <span>Real Stories · Real Love</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAF6EF] tracking-tight leading-tight">
              Words from the Culinary Journey
            </h2>
            <p className="text-sm sm:text-base text-[#A8A196] font-sans">
              Reflections and love from viewers, royal hosts, and patrons who journey with us.
            </p>
          </div>

          <ReviewsSlider />
        </div>
      </section>

 {/* ========================================================================= */}
 {/* 08 — WHY VIRTUAL BANJARA (Editorial Manifesto) */}
 {/* ========================================================================= */}
 <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="bg-[#F3EBDD] border border-[#D8CCB9] rounded-3xl p-6 sm:p-10 lg:p-14 space-y-8">
 <div className="max-w-3xl space-y-2">
 <div className="text-xs font-sans uppercase tracking-[0.2em] text-[#B83226] font-semibold">
 Editorial Integrity
 </div>
 <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C1917]">
 Why Virtual Banjara?
 </h2>
 <p className="text-sm text-[#57534E] font-sans">
 What sets our culinary storytelling apart from fast-paced digital food noise.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
 {WHY_WORK_WITH_VB.map((item, idx) => (
 <div
 key={idx}
 className="bg-white border border-[#E8DFD0] rounded-2xl p-5 sm:p-6 space-y-2 shadow-xs"
 >
 <div className="text-xs font-sans text-[#B83226] font-bold">
 0{idx + 1}
 </div>
 <h4 className="font-heading font-bold text-base text-[#1C1917]">
 {item.title}
 </h4>
 <p className="text-xs text-[#57534E] font-sans leading-relaxed">
 {item.description}
 </p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ========================================================================= */}
 {/* ========================================================================= */}
      {/* 09 — FINAL INVITATION (Commercial Collaboration) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[#1B1A17] border border-[#2E2A24] text-[#FAF6EF] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="text-xs font-sans uppercase tracking-widest text-[#D4881E] font-semibold">
                Partner with Virtual Banjara®
              </div>
              <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[#FAF6EF] leading-snug tracking-normal">
                Have a culinary legacy or luxury destination worth documenting?
              </h2>
              <p className="text-xs sm:text-sm text-[#A8A196] font-sans leading-relaxed max-w-xl">
                We collaborate with boutique resorts, historic havelis, luxury brands, and culinary masters to produce permanent cinematic assets.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => navigate('/collaborate')}
                className="w-full text-center inline-flex items-center justify-center space-x-2 bg-[#C0392B] hover:bg-[#9E2B1F] text-white text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md active:scale-[0.98]"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="w-full text-center inline-flex items-center justify-center space-x-2 bg-[#2E281F] hover:bg-[#383228] text-[#FAF6EF] border border-[#443C2E] text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-xl transition-all active:scale-[0.98]"
              >
                <span>Direct Inquiry</span>
              </button>
            </div>
          </div>
        </div>
      </section>

 </div>
 </div>
 );
};
