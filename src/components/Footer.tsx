import React from 'react';
import { ArrowUpRight, Youtube, Instagram, Facebook, Linkedin, Mail, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface FooterProps {
  navigate: (path: string) => void;
}

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const handleNav = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    {
      name: 'YouTube',
      url: BRAND_INFO.socialLinks.youtube,
      icon: Youtube,
      handle: '@VirtualBanjara',
      meta: '726K+ Subscribers',
      color: 'hover:bg-[#C0392B] hover:text-white',
      iconColor: 'text-[#C0392B]'
    },
    {
      name: 'Instagram',
      url: BRAND_INFO.socialLinks.instagram,
      icon: Instagram,
      handle: '@virtualbanjara',
      meta: 'Reels & Stories',
      color: 'hover:bg-[#E1306C] hover:text-white',
      iconColor: 'text-[#E1306C]'
    },
    {
      name: 'Facebook',
      url: BRAND_INFO.socialLinks.facebook,
      icon: Facebook,
      handle: 'Virtual Banjara',
      meta: 'Long-Form Community',
      color: 'hover:bg-[#1877F2] hover:text-white',
      iconColor: 'text-[#1877F2]'
    },
    {
      name: 'LinkedIn',
      url: BRAND_INFO.socialLinks.linkedin,
      icon: Linkedin,
      handle: 'Virtual Banjara',
      meta: 'Professional Media Network',
      color: 'hover:bg-[#0A66C2] hover:text-white',
      iconColor: 'text-[#0A66C2]'
    },
    {
      name: 'WhatsApp',
      url: BRAND_INFO.socialLinks.whatsapp,
      icon: WhatsAppIcon,
      handle: 'Official Channel',
      meta: 'Direct Broadcasts',
      color: 'hover:bg-[#25D366] hover:text-white',
      iconColor: 'text-[#25D366]'
    }
  ];

  return (
    <footer className="bg-[#F3EBDD] border-t border-[#E8DFD0] text-[#1B1A17] pt-14 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D8CCB9]">
          
          {/* Col 1: Brand Narrative & Proverb (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Virtual Banjara Logo"
                className="h-12 w-12 object-contain rounded-full border border-[#D8CCB9] p-0.5 bg-white shadow-sm shrink-0"
              />
              <div>
                <span className="font-heading font-bold text-xl md:text-2xl tracking-wide text-[#1B1A17] block">
                  VIRTUAL BANJARA<span className="text-xs align-top ml-0.5 text-[#C0392B]">®</span>
                </span>
                <p className="text-[11px] uppercase tracking-widest text-[#6F6A60] font-medium">
                  One Bite, One Story at a Time
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#5C5449] leading-relaxed max-w-md">
              A premium culinary and cultural storytelling media brand discovering and documenting India’s lost recipes, royal traditions, and living heritage across the subcontinent.
            </p>

            {/* Authentic Nomadic Proverb */}
            <div className="bg-[#FCFAF7] border-l-2 border-[#C0392B] p-4 rounded-r-2xl max-w-md shadow-xs space-y-1">
              <p className="text-xs sm:text-sm font-heading italic text-[#1B1A17] leading-snug">
                "{BRAND_INFO.proverb.hindi}"
              </p>
              <p className="text-[11px] text-[#6F6A60] leading-normal">
                — {BRAND_INFO.proverb.english} <span className="text-[#8C8275]">({BRAND_INFO.proverb.origin})</span>
              </p>
            </div>
          </div>

          {/* Col 2: Explore Content (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C0392B] font-bold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleNav('/recipes')}
                  className="text-[#5C5449] hover:text-[#C0392B] transition-colors text-left"
                >
                  Authentic Recipes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/videos')}
                  className="text-[#5C5449] hover:text-[#C0392B] transition-colors text-left"
                >
                  Videos & YouTube Library
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/food-trails')}
                  className="text-[#5C5449] hover:text-[#C0392B] transition-colors text-left"
                >
                  Curated Food Trails
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Brand & Business (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C0392B] font-bold">
              Brand & Business
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleNav('/about')}
                  className="text-[#5C5449] hover:text-[#C0392B] transition-colors text-left"
                >
                  About Ashish & Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/collaborate')}
                  className="text-[#5C5449] hover:text-[#C0392B] transition-colors text-left"
                >
                  Work With Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/contact')}
                  className="text-[#5C5449] hover:text-[#C0392B] transition-colors text-left"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/privacy-policy')}
                  className="text-[#5C5449] hover:text-[#C0392B] transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Social Icons & Channels (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C0392B] font-bold">
              Follow The Journey
            </h4>
            <p className="text-xs text-[#6F6A60]">
              Join our growing culinary community across official channels:
            </p>
            
            {/* Social Icons Row (5 Platforms) */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    title={s.name}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-[#D8CCB9] flex items-center justify-center text-[#1B1A17] shadow-xs ${s.color} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                );
              })}
            </div>

            {/* Direct Contact Line */}
            <div className="pt-2 text-xs text-[#6F6A60] space-y-1">
              <div>
                <span className="font-semibold text-[#1B1A17]">Collaborations: </span>
                <a href="mailto:collaboration@virtualbanjara.com" className="text-[#C0392B] hover:underline">
                  collaboration@virtualbanjara.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#6F6A60] gap-3 sm:gap-6">
          <p className="text-[#5C5449] leading-relaxed">
            © {new Date().getFullYear()} Virtual Banjara®. All rights reserved. Registered Trademark.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-[11px] sm:text-xs text-[#78716C]">
            <span>Base: Jaipur, Rajasthan, India</span>
            <button
              onClick={() => handleNav('/privacy-policy')}
              className="hover:text-[#C0392B] transition-colors"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
