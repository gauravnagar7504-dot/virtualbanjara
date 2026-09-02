import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight, Send, Check, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { JourneyLine } from '../components/JourneyLine';

interface ContactPageProps {
  navigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ navigate }) => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16">
      {/* Header */}
      <div className="border-b border-[#E8DFD0] pb-8 space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-sans text-[#C0392B] uppercase tracking-widest font-semibold">
          <Mail className="w-4 h-4" />
          <span>General Contact & Inquiries</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B1A17]">
          GET IN TOUCH
        </h1>
        <p className="text-base text-[#6F6A60] font-sans max-w-xl">
          Have feedback on an episode, a forgotten recipe recommendation, or a general question? We love hearing from our community.
        </p>
      </div>

      {/* Critical Distinction Notice */}
      <div className="p-6 bg-[#F3EBDD] border-l-4 border-[#C0392B] rounded-r-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-heading font-bold text-lg text-[#1B1A17]">
            Looking for Paid Brand Collaboration or Video Production?
          </h3>
          <p className="text-xs text-[#6F6A60] font-sans mt-0.5">
            For hotels, resorts, restaurants, and food brands seeking marketing production, visit our dedicated commercial desk.
          </p>
        </div>

        <button
          onClick={() => navigate('/collaborate')}
          className="inline-flex items-center space-x-1.5 text-xs font-sans uppercase tracking-widest font-bold bg-[#1B1A17] text-white px-5 py-3 rounded-xl shrink-0 hover:bg-[#C0392B] transition-colors shadow"
        >
          <span>Work With Us</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 2-Column Info & Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="font-heading font-bold text-xl text-[#1B1A17]">
              Contact Details
            </h3>

            <div className="space-y-4 text-xs font-sans">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C0392B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-sans text-[#D4881E] uppercase font-semibold">Base Location</div>
                  <div className="font-bold text-[#1B1A17] mt-0.5">Jaipur, Rajasthan, India</div>
                  <div className="text-[#6F6A60] mt-0.5">Available for documentary filming across India & Worldwide</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-[#C0392B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-sans text-[#D4881E] uppercase font-semibold">Email Desk</div>
                  <a href="mailto:collaboration@virtualbanjara.com" className="font-bold text-[#1B1A17] hover:text-[#C0392B] block mt-0.5">
                    collaboration@virtualbanjara.com
                  </a>
                  <a href="mailto:contact@virtualbanjara.com" className="text-[#6F6A60] hover:text-[#C0392B] block mt-0.5">
                    contact@virtualbanjara.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#C0392B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-sans text-[#D4881E] uppercase font-semibold">WhatsApp (Text Only)</div>
                  <div className="font-bold text-[#1B1A17] mt-0.5">{BRAND_INFO.socialLinks.phone}</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8DFD0] space-y-4">
              <a
                href={BRAND_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#25D366] text-white text-xs font-sans font-semibold py-3 px-4 rounded-xl hover:bg-[#1EBE5D] transition-colors shadow-xs"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Join Official WhatsApp Channel</span>
              </a>

              {/* Social Channels Row */}
              <div className="pt-2">
                <span className="text-[10px] font-sans text-[#6F6A60] uppercase tracking-wider block mb-2 font-semibold">
                  Official Channels
                </span>
                <div className="flex items-center space-x-2">
                  <a
                    href={BRAND_INFO.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-9 h-9 rounded-xl bg-white border border-[#D8CCB9] flex items-center justify-center text-[#1B1A17] hover:bg-[#C0392B] hover:text-white transition-all shadow-xs"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href={BRAND_INFO.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-xl bg-white border border-[#D8CCB9] flex items-center justify-center text-[#1B1A17] hover:bg-[#E1306C] hover:text-white transition-all shadow-xs"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={BRAND_INFO.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-9 h-9 rounded-xl bg-white border border-[#D8CCB9] flex items-center justify-center text-[#1B1A17] hover:bg-[#1877F2] hover:text-white transition-all shadow-xs"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={BRAND_INFO.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-xl bg-white border border-[#D8CCB9] flex items-center justify-center text-[#1B1A17] hover:bg-[#0A66C2] hover:text-white transition-all shadow-xs"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: General Message Form */}
        <div className="lg:col-span-7 bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl p-6 sm:p-8 shadow-sm">
          <h3 className="font-heading font-bold text-xl text-[#1B1A17] mb-4">
            Send a General Message
          </h3>

          {sent ? (
            <div className="p-8 bg-[#F3EBDD] rounded-2xl text-center space-y-3">
              <Check className="w-8 h-8 mx-auto text-[#C0392B]" />
              <h4 className="font-heading font-bold text-lg text-[#1B1A17]">Message Sent!</h4>
              <p className="text-xs text-[#6F6A60]">Thank you for reaching out. We will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
              <div className="space-y-1">
                <label className="font-sans uppercase text-[#1B1A17] font-semibold block">Your Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Ramesh Chandra"
                  className="w-full bg-white border border-[#D8CCB9] rounded-xl p-3 text-sm focus:outline-none focus:border-[#C0392B]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-sans uppercase text-[#1B1A17] font-semibold block">Email Address *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="e.g. ramesh@gmail.com"
                  className="w-full bg-white border border-[#D8CCB9] rounded-xl p-3 text-sm focus:outline-none focus:border-[#C0392B]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-sans uppercase text-[#1B1A17] font-semibold block">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="e.g. Traditional recipe recommendation from Bikaner"
                  className="w-full bg-white border border-[#D8CCB9] rounded-xl p-3 text-sm focus:outline-none focus:border-[#C0392B]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-sans uppercase text-[#1B1A17] font-semibold block">Message *</label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Write your thoughts, feedback, or culinary queries here..."
                  className="w-full bg-white border border-[#D8CCB9] rounded-xl p-3 text-sm focus:outline-none focus:border-[#C0392B]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center space-x-2 bg-[#1B1A17] hover:bg-[#C0392B] text-white font-sans uppercase tracking-wider font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
