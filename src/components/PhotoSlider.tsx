import React from 'react';

const PHOTOS = [
  '/photos/IMG_0214.jpg',
  '/photos/IMG_0226.jpg',
  '/photos/IMG_0875.jpg',
  '/photos/IMG_1264.jpg',
  '/photos/IMG_1491.jpg',
  '/photos/IMG_1541.jpg',
  '/photos/IMG_2100.jpg',
  '/photos/IMG_2315.jpg',
  '/photos/IMG_2982.jpg',
  '/photos/IMG_4004.jpg',
  '/photos/IMG_4005.jpg',
  '/photos/IMG_5367.jpg',
  '/photos/IMG_5393.jpg',
  '/photos/IMG_5497.jpg',
  '/photos/IMG_6499.jpg',
  '/photos/IMG_653443.jpg',
  '/photos/IMG_975.jpg',
];

export const PhotoSlider: React.FC = () => {
  // Two duplicate sets create a continuous seamless -50% translation loop
  const seamlessPhotos = [...PHOTOS, ...PHOTOS];

  return (
    <div className="w-full bg-[#FAF6EF] overflow-hidden py-4 sm:py-6 select-none group">
      <div className="animate-marquee-slow flex space-x-4 sm:space-x-5 items-center">
        {seamlessPhotos.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-[#FCFAF7] border border-[#E8DFD0]"
          >
            <img
              src={src}
              alt="Virtual Banjara Field Archive"
              loading="lazy"
              draggable="false"
              className="h-60 sm:h-72 md:h-80 w-auto max-w-none object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
