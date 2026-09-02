import React from 'react';
import { ArrowUpRight, ArrowRight, Compass, Heart, ShieldCheck, Sparkles, Youtube, Award, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { JourneyLine } from '../components/JourneyLine';

interface AboutPageProps {
  navigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10 sm:space-y-16">
      {/* Header */}
      <div className="border-b border-[#E8DFD0] pb-8 space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-sans text-[#C0392B] uppercase tracking-widest font-semibold">
          <Compass className="w-4 h-4" />
          <span>Brand Story & Heritage</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B1A17]">
          ABOUT VIRTUAL BANJARA®
        </h1>
        <p className="text-lg text-[#6D665B] font-heading italic">
          One Bite, One Story at a Time
        </p>
      </div>

      {/* The Mission & Philosophy */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4 text-base sm:text-lg text-[#1B1A17] font-sans leading-relaxed">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B1A17]">
              What We Do
            </h2>
            <p>
              Virtual Banjara® is a premier culinary and cultural storytelling brand dedicated to discovering, documenting, and preserving India’s lost, hidden, and authentic recipes.
            </p>
            <p className="text-sm text-[#6D665B]">
              We go beyond shallow food reviews to create narrative-led documentaries that capture the cooking process, living heritage, hospitable people, and real cultural experiences through cinematic 4K videos and curated editorial literature.
            </p>
            <p className="text-sm text-[#6D665B]">
              Working exclusively on a professional paid collaboration model, we help luxury heritage properties, iconic culinary institutions, and cultural enterprises build a meaningful, authentic, and lasting digital brand asset.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#FCFAF7] border-2 border-[#E8DFD0] rounded-3xl p-6 sm:p-8 space-y-5 shadow-editorial">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#C0392B]" />
              <h3 className="font-sans text-xs uppercase tracking-widest text-[#C0392B] font-bold">
                Bilingual Mission & Vision
              </h3>
            </div>

            <div className="space-y-4 text-xs font-sans">
              <div className="p-4 sm:p-5 bg-[#F3EBDD] rounded-2xl border border-[#D8CCB9] space-y-2">
                <div className="flex items-center space-x-2">
                  <Compass className="w-4 h-4 text-[#C0392B] shrink-0" />
                  <h4 className="font-bold text-[#1B1A17] text-sm sm:text-base">Our Vision / हमारा विज़न</h4>
                </div>
                <p className="text-[#6D665B] text-xs sm:text-sm leading-relaxed">
                  To become the world’s largest bilingual food archive and storytelling hub.
                </p>
                <p className="text-xs text-[#C0392B] font-semibold leading-relaxed">
                  दुनिया का सबसे बड़ा द्विभाषी फूड आर्काइव और स्टोरीटेलिंग हब बनना।
                </p>
              </div>

              <div className="p-4 sm:p-5 bg-white rounded-2xl border border-[#E8DFD0] space-y-2">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-[#D4881E] shrink-0" />
                  <h4 className="font-bold text-[#1B1A17] text-sm sm:text-base">Our Mission / हमारा मिशन</h4>
                </div>
                <p className="text-[#6D665B] text-xs sm:text-sm leading-relaxed">
                  To make authentic food stories accessible and promote heritage cooking through meaningful content.
                </p>
                <p className="text-xs text-[#D4881E] font-semibold leading-relaxed">
                  प्रामाणिक भोजन कहानियों को सभी तक पहुँचाना और विरासत पाक शैली को सार्थक कंटेंट के माध्यम से बढ़ावा देना।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JourneyLine label="THE FOUNDER" />

      {/* Founder Section Featuring IMG_6500 */}
      <section className="bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl p-6 sm:p-10 md:p-12 shadow-editorial">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Portrait using IMG_6500.jpg */}
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#D8CCB9] shadow-md bg-[#1B1A17] group">
              <img
                src="/ashish-wadhwani.jpg"
                alt="Ashish Wadhwani - Founder of Virtual Banjara"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#1B1A17]/85 backdrop-blur-md px-3 py-1 rounded-2xl text-[11px] font-sans text-white flex items-center space-x-1.5 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-[#C0392B]" />
                <span className="font-semibold tracking-wider uppercase">Founder & Host</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-sans uppercase tracking-widest text-[#C0392B] font-bold block">
              Founder & Culinary Explorer
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1B1A17]">
              ASHISH WADHWANI
            </h2>
            <p className="font-hindi text-base sm:text-lg text-[#D4881E] font-bold">
              ज़मीनी स्वाद, शाही विरासत और इंसानी कहानियों का घुमंतू खोजी
            </p>

            <p className="text-sm sm:text-base text-[#5C5449] font-sans leading-relaxed">
              Ashish Wadhwani turned his lifelong love for authentic Indian cuisine and forgotten regional techniques into one of India’s most respected culinary platforms.
            </p>
            <p className="text-sm sm:text-base text-[#5C5449] font-sans leading-relaxed">
              His calm, respectful, and story-first approach has earned the trust of royal families, traditional khansamas, street halwais, and over <strong>726,000+ dedicated subscribers</strong> who rely on Virtual Banjara for honest culinary discovery.
            </p>

            <div className="pt-3 grid grid-cols-2 gap-3 text-xs font-sans">
              <div className="p-3 bg-[#FAF6EF] border border-[#E8DFD0] rounded-2xl">
                <div className="text-[#6D665B] uppercase text-[10px]">Headquarters</div>
                <div className="font-bold text-[#1B1A17] text-sm mt-0.5">Jaipur, Rajasthan</div>
              </div>
              <div className="p-3 bg-[#FAF6EF] border border-[#E8DFD0] rounded-2xl">
                <div className="text-[#6D665B] uppercase text-[10px]">Specialization</div>
                <div className="font-bold text-[#C0392B] text-sm mt-0.5">Living Heritage Recipes</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigate('/collaborate')}
                className="inline-flex items-center space-x-2 bg-[#C0392B] hover:bg-[#9E2B1F] text-white text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-2xl transition-colors shadow"
              >
                <span>Collaborate With Ashish</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey Timeline (2020 - Present) */}
      <section className="space-y-6">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B1A17]">
          Our Journey
        </h2>
        <p className="text-sm text-[#6D665B] font-sans max-w-xl">
          From a home-based lockdown video to a trusted culinary media house followed by millions across India and the globe.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-6 bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl space-y-2 shadow-sm">
            <div className="text-xs font-sans text-[#C0392B] font-bold uppercase">2020 — The Spark</div>
            <h4 className="font-heading font-bold text-base text-[#1B1A17]">Lockdown Origins</h4>
            <p className="text-xs text-[#6D665B] font-sans leading-relaxed">
              Started with a single home-cooked recipe video during the pandemic, driven by the desire to archive heirloom family recipes before they vanished.
            </p>
          </div>

          <div className="p-6 bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl space-y-2 shadow-sm">
            <div className="text-xs font-sans text-[#C0392B] font-bold uppercase">2022–2024 — The Expansion</div>
            <h4 className="font-heading font-bold text-base text-[#1B1A17]">Into The Wilderness</h4>
            <p className="text-xs text-[#6D665B] font-sans leading-relaxed">
              Traveled through Mewar, Marwar, Shekhawati, Awadh, and Kashmir, filming inside royal hunting lodges and remote desert hamlets.
            </p>
          </div>

          <div className="p-6 bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl space-y-2 shadow-sm">
            <div className="text-xs font-sans text-[#C0392B] font-bold uppercase">2025–Present — Authority</div>
            <h4 className="font-heading font-bold text-base text-[#1B1A17]">Premier Media House</h4>
            <p className="text-xs text-[#6D665B] font-sans leading-relaxed">
              Over 800 episodes, 726K+ community, official partnership with JioNews, and professional collaboration arm for luxury hospitality brands.
            </p>
          </div>
        </div>
      </section>

      {/* JioNews Official Partnership Announcement */}
      <section className="bg-[#F3EBDD] border border-[#D8CCB9] rounded-2xl p-8 space-y-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1.5 text-xs font-sans text-[#C0392B] font-bold uppercase">
            <Award className="w-4 h-4" />
            <span>Media Partnership</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-[#1B1A17]">
            Virtual Banjara® is Now on JioNews
          </h3>
          <p className="text-xs text-[#6D665B] font-sans max-w-lg">
            Our food and lifestyle documentary content is officially featured across the JioNews national app and web ecosystem under TV & Videos → Lifestyle.
          </p>
        </div>

        <button
          onClick={() => navigate('/videos')}
          className="inline-flex items-center space-x-1.5 text-xs font-sans uppercase tracking-widest font-semibold bg-[#1B1A17] hover:bg-[#C0392B] text-white px-5 py-3 rounded-2xl shrink-0 shadow transition-colors"
        >
          <span>Watch Episodes</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </section>

      {/* CTA Box */}
      <section className="p-8 sm:p-12 bg-[#FCFAF7] border border-[#D8CCB9] rounded-2xl text-center space-y-4 shadow-editorial">
        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#1B1A17]">
          Join The Journey
        </h3>
        <p className="text-sm text-[#6D665B] font-sans max-w-md mx-auto">
          Whether you are a food lover or a business with a great culinary story, we welcome you to connect with us.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <button
            onClick={() => navigate('/collaborate')}
            className="bg-[#C0392B] hover:bg-[#9E2B1F] text-white text-xs uppercase tracking-widest font-semibold px-7 py-3.5 rounded-2xl transition-colors shadow"
          >
            Work With Us
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#F3EBDD] hover:bg-white text-[#1B1A17] border border-[#D8CCB9] text-xs uppercase tracking-widest font-semibold px-7 py-3.5 rounded-2xl transition-colors shadow-sm"
          >
            Contact Team
          </button>
        </div>
      </section>
    </div>
  );
};
