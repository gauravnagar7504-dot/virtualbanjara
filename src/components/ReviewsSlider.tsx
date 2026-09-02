import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Youtube } from 'lucide-react';

export interface ReviewItem {
  id: string;
  rating: number;
  quote: string;
  videoTitle: string;
  author: string;
  handle: string;
}

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    rating: 5,
    quote: 'Agar Kisi Ko Achii Or Desi Receipe Dekhni Ho Or Rajasthan Ki Nayi Nayi Jagah Ke Baare Me Janna Ho To Virtual Banjara Is The Best ..... Ashish Ji Is Best Person All Food Vlogger.....',
    videoTitle: 'Jaipur के इस Farm में बनता है (NATURE MUTTON) organic सब्जिया चूल्हे सिल्बट्टे पर कुटे मसालो के साथ',
    author: 'VIKAS RATHORE',
    handle: 'YT @vikasrathore1150'
  },
  {
    id: 'rev-2',
    rating: 5,
    quote: 'आशीष भाई आपका वीडियो खाने का मजा देता ही है लेकिन जो लोकेशनों पर जाते हो उसका जवाब नहीं',
    videoTitle: 'Dundlod राज घराने की अनोखीं रेसिपी(MAAS KE SULE KA SHORBA) Mutton recipe with ROYAL FAMILY Rajasthan',
    author: 'HEY RAJ VLOGS',
    handle: 'YT @heyrajvlogs'
  },
  {
    id: 'rev-3',
    rating: 5,
    quote: 'Aaj ka video ab तक sabse behtreen video or jo maharaja ka vyaktitav bhi jabardast h mast virtual banzara best wishes ...',
    videoTitle: 'Udaipur राज घराने की शिकारबाड़ी (FISH RECIPE) by Maharaja of Udaipur Dr. Lakshyaraj singh ji Mewar',
    author: 'DUGU HATILA',
    handle: 'YT @DUGUHATILA2705'
  },
  {
    id: 'rev-4',
    rating: 5,
    quote: 'आपकी आज तक कि सबसे अच्छी video हैं, आपने श्री जी हुज़ूर की सादगी आम जनता को दिखायी हैं जिससे आम आदमी को पता चलता है कि राजा साहब हमारे जैसे ही हैं...',
    videoTitle: 'Udaipur राज घराने की शिकारबाड़ी (FISH RECIPE) by Maharaja of Udaipur Dr. Lakshyaraj singh ji Mewar',
    author: 'RAVI RAGHUVANSHI',
    handle: 'YT @RAVIRAGHUVANSHI367'
  },
  {
    id: 'rev-5',
    rating: 5,
    quote: 'Ashish ji I have been regularly following you for years. Your Andaaz is surely the best. You are so respectful towards your host and your presentation is the best. Most of the people who do food vlogs are very loud and are generally talking about themselves. BUT AAP KI BAAT HI KHUCH AUR HAI. I will surely invite you to my house sometime and inform you 3 months in advance of the date. Keep up your presentation Ashish kapoor..',
    videoTitle: 'Udaipur राज घराने की शिकारबाड़ी (FISH RECIPE) by Maharaja of Udaipur Dr. Lakshyaraj singh ji Mewar',
    author: 'ASHISH KAPOOR',
    handle: 'YT @MrAshishkapoor'
  }
];

export const ReviewsSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play loop
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevReview = () => {
    setActiveIndex((current) => (current === 0 ? REVIEWS.length - 1 : current - 1));
  };

  const nextReview = () => {
    setActiveIndex((current) => (current + 1) % REVIEWS.length);
  };

  // Display two reviews at a time
  const currentReviews = [
    REVIEWS[activeIndex % REVIEWS.length],
    REVIEWS[(activeIndex + 1) % REVIEWS.length]
  ];

  return (
    <div 
      className="relative max-w-7xl mx-auto px-0 sm:px-4 space-y-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Two Testimonial Cards Side by Side (Dark Theme) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {currentReviews.map((review, idx) => (
          <div
            key={`${review.id}-${idx}`}
            className={`bg-[#24201A] border border-[#383228] hover:border-[#C0392B] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden transition-all duration-300 flex-col justify-between space-y-6 group hover:-translate-y-1 ${
              idx === 1 ? 'hidden md:flex' : 'flex'
            }`}
          >
            {/* Subtle Watermark Quote */}
            <Quote className="absolute -top-3 -right-3 w-24 h-24 text-[#D4881E]/10 pointer-events-none group-hover:scale-110 transition-transform duration-500" />

            <div className="space-y-5 relative z-10">
              {/* Top Header: Star Rating & Platform Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-1.5 bg-[#2E281F] px-3 py-1.5 rounded-full border border-[#443C2E]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-[#D4881E] fill-[#D4881E]"
                    />
                  ))}
                  <span className="text-xs font-sans font-bold text-[#FAF6EF] ml-1">5.0</span>
                </div>

                <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#25221D] border border-[#3D372E] rounded-full text-[11px] font-sans text-[#D4881E] font-semibold">
                  <Youtube className="w-3.5 h-3.5 text-[#C0392B]" />
                  <span>Verified Viewer</span>
                </div>
              </div>

              {/* Quote Body */}
              <div className="min-h-[100px] sm:min-h-[120px] flex items-center">
                <p className="text-sm sm:text-base font-heading italic text-[#FAF6EF] leading-relaxed line-clamp-5">
                  "{review.quote}"
                </p>
              </div>

              {/* Video Reference Footnote */}
              {review.videoTitle && (
                <div className="pt-3 border-t border-[#332D24]">
                  <span className="text-[10px] font-sans text-[#A8A196] uppercase tracking-wider block mb-0.5">
                    Referenced YouTube Episode:
                  </span>
                  <p className="text-xs font-sans font-medium text-[#C0392B] group-hover:text-[#D4881E] transition-colors line-clamp-1">
                    {review.videoTitle}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Author Section */}
            <div className="pt-4 border-t border-[#332D24] flex items-center justify-between relative z-10">
              <div>
                <h4 className="font-heading font-bold text-base text-[#FAF6EF] tracking-wide">
                  {review.author}
                </h4>
                <span className="text-xs font-sans text-[#A8A196] block">
                  {review.handle}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows surrounding Pagination Dots */}
      <div className="flex justify-center items-center space-x-4 pt-2">
        <button
          onClick={prevReview}
          className="p-3 rounded-full bg-[#2E281F] border border-[#443C2E] text-[#FAF6EF] hover:bg-[#C0392B] hover:text-white hover:border-[#C0392B] transition-all shadow-sm focus:outline-none active:scale-95"
          aria-label="Previous reviews"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center space-x-2">
          {REVIEWS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-[#C0392B]'
                  : 'w-2.5 bg-[#3D372E] hover:bg-[#C0392B]/50'
              }`}
              aria-label={`Slide to review ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextReview}
          className="p-3 rounded-full bg-[#2E281F] border border-[#443C2E] text-[#FAF6EF] hover:bg-[#C0392B] hover:text-white hover:border-[#C0392B] transition-all shadow-sm focus:outline-none active:scale-95"
          aria-label="Next reviews"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
