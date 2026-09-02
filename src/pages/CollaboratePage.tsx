import React, { useState } from 'react';
import { 
 Sparkles, 
 ArrowUpRight, 
 CheckCircle2, 
 Video, 
 Flame, 
 Share2, 
 Compass, 
 Send, 
 ShieldCheck, 
 Phone, 
 Mail, 
 MapPin,
 HelpCircle,
 Check,
 ChevronDown
} from 'lucide-react';
import { COLLABORATION_SERVICES, COLLABORATION_PROCESS, WHY_WORK_WITH_VB, BRAND_INFO } from '../data/content';
import { JourneyLine } from '../components/JourneyLine';

export const CollaboratePage: React.FC = () => {
 const [formState, setFormState] = useState({
 brandName: '',
 contactPerson: '',
 email: '',
 phone: '',
 location: '',
 businessType: 'Restaurant / Fine Dining',
 websiteSocial: '',
 projectScope: '',
 preferredPlatform: ['YouTube Long-Form'],
 budgetRange: '₹1,00,000 – ₹2,50,000',
 preferredShootDate: '',
 message: ''
 });

 const [submitted, setSubmitted] = useState(false);
 const [errorMsg, setErrorMsg] = useState('');

 const handlePlatformToggle = (platform: string) => {
 setFormState((prev) => {
 const exists = prev.preferredPlatform.includes(platform);
 return {
 ...prev,
 preferredPlatform: exists
 ? prev.preferredPlatform.filter((p) => p !== platform)
 : [...prev.preferredPlatform, platform]
 };
 });
 };

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 if (!formState.brandName || !formState.contactPerson || !formState.email || !formState.phone) {
 setErrorMsg('Please fill in all mandatory fields (Brand Name, Contact Person, Email, Phone).');
 return;
 }
 setErrorMsg('');
 setSubmitted(true);
 };

 return (
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16">
 {/* Editorial Commercial Header */}
 <div className="bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl p-8 sm:p-12 shadow-editorial">
 <div className="max-w-3xl space-y-4">
 <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#F3EBDD] border border-[#D8CCB9] rounded-xl text-xs font-sans text-[#C0392B] uppercase tracking-widest font-semibold">
 <Sparkles className="w-3.5 h-3.5 text-[#C0392B]" />
 <span>Commercial Acquisitions & Brand Partnerships</span>
 </div>

 <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B1A17] leading-tight">
 LET'S CREATE YOUR STORY.
 </h1>

 <p className="text-base sm:text-lg text-[#6F6A60] font-sans leading-relaxed">
 Your culinary or hospitality enterprise has a heritage, a culinary philosophy, and a guest experience. We tell that story with documentary-level cinema and broadcast it to an established, high-intent audience.
 </p>

 <div className="pt-2 flex flex-wrap gap-6 text-xs font-sans text-[#D4881E]">
 <span> Verified 726K+ Audience</span>
 <span> 4K Cinema Production</span>
 <span> Permanent Search Asset</span>
 <span> Structured Paid Model</span>
 </div>
 </div>
 </div>

 {/* Services Grid */}
 <section className="space-y-8">
 <div className="space-y-2">
 <span className="text-xs font-sans uppercase tracking-widest text-[#C0392B] font-bold block">
 Collaboration Offerings
 </span>
 <h2 className="font-heading text-3xl font-bold text-[#1B1A17]">
 HOW WE WORK WITH BUSINESSES
 </h2>
 <p className="text-sm text-[#6F6A60] font-sans max-w-xl">
 Choose from our primary media formats or craft a tailored multi-platform campaign.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {COLLABORATION_SERVICES.map((srv) => (
 <div
 key={srv.id}
 className="bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl p-6 sm:p-8 space-y-6 shadow-editorial flex flex-col justify-between"
 >
 <div className="space-y-4">
 <div className="flex items-center justify-between">
 <span className="text-[11px] font-sans uppercase tracking-widest text-[#C0392B] bg-[#F3EBDD] px-3 py-1 rounded-xl font-bold">
 {srv.badge}
 </span>
 <div className="text-xs font-sans text-[#6F6A60]">
 {srv.id === 'srv-1' && <Video className="w-5 h-5 text-[#C0392B]" />}
 {srv.id === 'srv-2' && <Flame className="w-5 h-5 text-[#C0392B]" />}
 {srv.id === 'srv-3' && <Share2 className="w-5 h-5 text-[#C0392B]" />}
 {srv.id === 'srv-4' && <Compass className="w-5 h-5 text-[#C0392B]" />}
 </div>
 </div>

 <div>
 <h3 className="font-heading font-bold text-2xl text-[#1B1A17]">
 {srv.title}
 </h3>
 <p className="text-xs text-[#D4881E] font-sans mt-0.5">
 {srv.subtitle}
 </p>
 </div>

 <p className="text-sm text-[#6F6A60] font-sans leading-relaxed">
 {srv.description}
 </p>

 {/* Deliverables Checklist */}
 <div className="space-y-2 pt-2">
 <div className="text-xs font-sans uppercase tracking-wider text-[#1B1A17] font-bold">
 Deliverables Include:
 </div>
 <ul className="space-y-1.5 text-xs text-[#6F6A60] font-sans">
 {srv.deliverables.map((item, idx) => (
 <li key={idx} className="flex items-start space-x-2">
 <CheckCircle2 className="w-3.5 h-3.5 text-[#C0392B] shrink-0 mt-0.5" />
 <span>{item}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>

 <div className="pt-4 border-t border-[#E8DFD0] text-xs font-sans text-[#6F6A60]">
 <span className="font-bold text-[#1B1A17]">Ideal for: </span>
 {srv.idealFor}
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* The Business Value Equation */}
 <section className="bg-[#1B1A17] text-[#FCFAF7] rounded-2xl p-8 sm:p-12 space-y-6 shadow-2xl">
 <div className="max-w-2xl space-y-2">
 <span className="text-xs font-sans uppercase tracking-widest text-[#D4881E] font-bold">
 The Commercial Advantage
 </span>
 <h2 className="font-heading text-3xl font-bold text-white">
 FROM A VISIT TO A PERMANENT BRAND ASSET
 </h2>
 </div>

 <p className="text-sm text-[#D8CCB9] font-sans leading-relaxed max-w-2xl">
 Standard social advertisements vanish the moment your ad budget is exhausted. A Virtual Banjara documentary becomes a permanent search asset on YouTube and Google — continuing to educate travelers and diners years after publication.
 </p>

 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs font-sans text-center">
 <div className="p-4 bg-white/5 rounded-xl border border-white/10">
 <div className="text-lg font-heading font-bold text-[#FCFAF7]">High-Intent</div>
 <div className="text-[11px] text-[#D4881E] mt-1">Travelers & Foodies</div>
 </div>
 <div className="p-4 bg-white/5 rounded-xl border border-white/10">
 <div className="text-lg font-heading font-bold text-[#FCFAF7]">Authenticity</div>
 <div className="text-[11px] text-[#D4881E] mt-1">Story over Promotion</div>
 </div>
 <div className="p-4 bg-white/5 rounded-xl border border-white/10">
 <div className="text-lg font-heading font-bold text-[#FCFAF7]">Search Rank</div>
 <div className="text-[11px] text-[#D4881E] mt-1">Permanent SEO Footprint</div>
 </div>
 <div className="p-4 bg-white/5 rounded-xl border border-white/10">
 <div className="text-lg font-heading font-bold text-[#FCFAF7]">Multi-Channel</div>
 <div className="text-[11px] text-[#D4881E] mt-1">YT + IG + FB + Web</div>
 </div>
 </div>
 </section>

 {/* 4-Step Production Process */}
 <section className="space-y-8">
 <div className="space-y-2">
 <span className="text-xs font-sans uppercase tracking-widest text-[#C0392B] font-bold block">
 Production Timeline
 </span>
 <h2 className="font-heading text-3xl font-bold text-[#1B1A17]">
 HOW A COLLABORATION UNFOLDS
 </h2>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {COLLABORATION_PROCESS.map((item) => (
 <div
 key={item.step}
 className="bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl p-6 space-y-3 shadow-sm"
 >
 <div className="text-2xl font-heading font-bold text-[#C0392B]">
 {item.step}
 </div>
 <h4 className="font-heading font-bold text-lg text-[#1B1A17]">
 {item.title}
 </h4>
 <p className="text-xs text-[#6F6A60] font-sans leading-relaxed">
 {item.description}
 </p>
 </div>
 ))}
 </div>
 </section>

 <JourneyLine label="DIRECT LEAD QUALIFICATION" />

 {/* Lead Qualification & Booking Form */}
 <section id="enquiry-form" className="bg-[#FCFAF7] border-2 border-[#E8DFD0] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-editorial max-w-5xl mx-auto">
 <div className="space-y-8">
 <div className="text-center space-y-2.5 max-w-xl mx-auto">
 <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#F3EBDD] border border-[#D8CCB9] rounded-full text-xs font-sans text-[#C0392B] uppercase tracking-widest font-bold">
 <Sparkles className="w-3.5 h-3.5" />
 <span>Structured Project Inquiry</span>
 </div>
 <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#1B1A17] tracking-tight">
 START THE CONVERSATION
 </h2>
 <p className="text-xs sm:text-sm text-[#6F6A60] font-sans leading-relaxed">
 Please provide comprehensive details so our production desk can review your brief and schedule a preliminary strategy call.
 </p>
 </div>

 {submitted ? (
 <div className="p-8 sm:p-10 bg-[#F3EBDD] border border-[#D8CCB9] rounded-2xl text-center space-y-4 animate-fadeIn">
 <div className="w-14 h-14 rounded-full bg-[#C0392B] text-white flex items-center justify-center mx-auto shadow-md">
 <Check className="w-7 h-7 stroke-[3]" />
 </div>
 <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B1A17]">
 Inquiry Successfully Received!
 </h3>
 <p className="text-sm text-[#6F6A60] font-sans max-w-md mx-auto leading-relaxed">
 Thank you for submitting your project brief for <span className="font-bold text-[#1B1A17]">{formState.brandName}</span>. Our production desk will review your details and revert within 24–48 business hours.
 </p>
 <div className="pt-2 text-xs font-sans text-[#D4881E] font-semibold">
 Urgent requirement? WhatsApp directly: {BRAND_INFO.socialLinks.phone}
 </div>
 </div>
 ) : (
 <form onSubmit={handleSubmit} className="space-y-6 font-sans">
 {errorMsg && (
 <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold rounded-xl">
 {errorMsg}
 </div>
 )}

 {/* Row 1: Brand & Contact Person */}
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
 <div className="space-y-1.5">
 <label className="text-xs font-sans uppercase tracking-wider text-[#1B1A17] font-bold block">
 Business / Brand Name <span className="text-[#C0392B]">*</span>
 </label>
 <input
 type="text"
 required
 placeholder="e.g. Royal Haveli Resort & Spa"
 value={formState.brandName}
 onChange={(e) => setFormState({ ...formState, brandName: e.target.value })}
 className="w-full bg-white border border-[#D8CCB9] hover:border-[#B8A890] focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/15 rounded-xl px-4 py-3.5 text-sm text-[#1B1A17] font-sans placeholder:text-[#A8A196] outline-none transition-all shadow-xs"
 />
 </div>

 <div className="space-y-1.5">
 <label className="text-xs font-sans uppercase tracking-wider text-[#1B1A17] font-bold block">
 Contact Person & Title <span className="text-[#C0392B]">*</span>
 </label>
 <input
 type="text"
 required
 placeholder="e.g. Vikramaditya Singh (GM)"
 value={formState.contactPerson}
 onChange={(e) => setFormState({ ...formState, contactPerson: e.target.value })}
 className="w-full bg-white border border-[#D8CCB9] hover:border-[#B8A890] focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/15 rounded-xl px-4 py-3.5 text-sm text-[#1B1A17] font-sans placeholder:text-[#A8A196] outline-none transition-all shadow-xs"
 />
 </div>
 </div>

 {/* Row 2: Email & Phone */}
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
 <div className="space-y-1.5">
 <label className="text-xs font-sans uppercase tracking-wider text-[#1B1A17] font-bold block">
 Official Email <span className="text-[#C0392B]">*</span>
 </label>
 <input
 type="email"
 required
 placeholder="e.g. contact@royalhaveli.com"
 value={formState.email}
 onChange={(e) => setFormState({ ...formState, email: e.target.value })}
 className="w-full bg-white border border-[#D8CCB9] hover:border-[#B8A890] focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/15 rounded-xl px-4 py-3.5 text-sm text-[#1B1A17] font-sans placeholder:text-[#A8A196] outline-none transition-all shadow-xs"
 />
 </div>

 <div className="space-y-1.5">
 <label className="text-xs font-sans uppercase tracking-wider text-[#1B1A17] font-bold block">
 WhatsApp / Phone Number <span className="text-[#C0392B]">*</span>
 </label>
 <input
 type="tel"
 required
 placeholder="+91 98765 43210"
 value={formState.phone}
 onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
 className="w-full bg-white border border-[#D8CCB9] hover:border-[#B8A890] focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/15 rounded-xl px-4 py-3.5 text-sm text-[#1B1A17] font-sans placeholder:text-[#A8A196] outline-none transition-all shadow-xs"
 />
 </div>
 </div>

 {/* Row 3: Location & Business Type */}
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
 <div className="space-y-1.5">
 <label className="text-xs font-sans uppercase tracking-wider text-[#1B1A17] font-bold block">
 Location (City & State) <span className="text-[#C0392B]">*</span>
 </label>
 <input
 type="text"
 required
 placeholder="e.g. Udaipur, Rajasthan"
 value={formState.location}
 onChange={(e) => setFormState({ ...formState, location: e.target.value })}
 className="w-full bg-white border border-[#D8CCB9] hover:border-[#B8A890] focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/15 rounded-xl px-4 py-3.5 text-sm text-[#1B1A17] font-sans placeholder:text-[#A8A196] outline-none transition-all shadow-xs"
 />
 </div>

 <div className="space-y-1.5">
 <label className="text-xs font-sans uppercase tracking-wider text-[#1B1A17] font-bold block">
 Enterprise Category <span className="text-[#C0392B]">*</span>
 </label>
 <div className="relative">
 <select
 value={formState.businessType}
 onChange={(e) => setFormState({ ...formState, businessType: e.target.value })}
 className="w-full appearance-none bg-white border border-[#D8CCB9] hover:border-[#B8A890] focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/15 rounded-xl px-4 py-3.5 pr-10 text-sm text-[#1B1A17] font-sans outline-none transition-all shadow-xs cursor-pointer"
 >
 <option value="Heritage Hotel / Palace / Resort">Heritage Hotel / Palace / Resort</option>
 <option value="Restaurant / Fine Dining">Restaurant / Fine Dining</option>
 <option value="Iconic Sweetmaker / Street Legend">Iconic Sweetmaker / Street Legend</option>
 <option value="Food / FMCG / Spice Brand">Food / FMCG / Spice Brand</option>
 <option value="Culinary Tourism / Experience">Culinary Tourism / Experience</option>
 <option value="Other Commercial Project">Other Commercial Project</option>
 </select>
 <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6F6A60] pointer-events-none" />
 </div>
 </div>
 </div>

 {/* Preferred Platform Multi-select */}
 <div className="space-y-2">
 <label className="text-xs font-sans uppercase tracking-wider text-[#1B1A17] font-bold block">
 Preferred Platform Format (Select all that apply)
 </label>
 <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-sans">
 {[
 'YouTube Long-Form',
 'Instagram Reels',
 'Facebook Long-Form',
 'Food Business Consultation'
 ].map((p) => {
 const isChecked = formState.preferredPlatform.includes(p);
 return (
 <button
 type="button"
 key={p}
 onClick={() => handlePlatformToggle(p)}
 className={`px-4 py-3.5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between shadow-xs font-medium cursor-pointer ${
 isChecked
 ? 'bg-[#1B1A17] text-white border-[#1B1A17] shadow-sm'
 : 'bg-white text-[#57534E] border-[#D8CCB9] hover:border-[#C0392B]/40 hover:bg-[#FAF6EF]'
 }`}
 >
 <span className="truncate pr-1">{p}</span>
 {isChecked && <Check className="w-4 h-4 shrink-0 text-[#FAF6EF]" />}
 </button>
 );
 })}
 </div>
 </div>

 {/* Budget Range & Shoot Timing */}
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
 <div className="space-y-1.5">
 <label className="text-xs font-sans uppercase tracking-wider text-[#1B1A17] font-bold block">
 Estimated Production Budget
 </label>
 <div className="relative">
 <select
 value={formState.budgetRange}
 onChange={(e) => setFormState({ ...formState, budgetRange: e.target.value })}
 className="w-full appearance-none bg-white border border-[#D8CCB9] hover:border-[#B8A890] focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/15 rounded-xl px-4 py-3.5 pr-10 text-sm text-[#1B1A17] font-sans outline-none transition-all shadow-xs cursor-pointer"
 >
 <option value="₹75,000 – ₹1,50,000">₹75,000 – ₹1,50,000 (Short-Form/Reels Package)</option>
 <option value="₹1,50,000 – ₹3,00,000">₹1,50,000 – ₹3,00,000 (Standard 4K YouTube Episode)</option>
 <option value="₹3,00,000 – ₹6,00,000">₹3,00,000 – ₹6,00,000 (Comprehensive Multi-Platform Campaign)</option>
 <option value="₹6,00,000+">₹6,00,000+ (Multi-Property / Destination Series)</option>
 <option value="Consultation Only">Brand / Culinary Consultation Only</option>
 </select>
 <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6F6A60] pointer-events-none" />
 </div>
 </div>

 <div className="space-y-1.5">
 <label className="text-xs font-sans uppercase tracking-wider text-[#1B1A17] font-bold block">
 Target Shoot Window / Timeline
 </label>
 <input
 type="text"
 placeholder="e.g. Next 30 days / Winter Season"
 value={formState.preferredShootDate}
 onChange={(e) => setFormState({ ...formState, preferredShootDate: e.target.value })}
 className="w-full bg-white border border-[#D8CCB9] hover:border-[#B8A890] focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/15 rounded-xl px-4 py-3.5 text-sm text-[#1B1A17] font-sans placeholder:text-[#A8A196] outline-none transition-all shadow-xs"
 />
 </div>
 </div>

 {/* Project Brief */}
 <div className="space-y-1.5">
 <label className="text-xs font-sans uppercase tracking-wider text-[#1B1A17] font-bold block">
 Project Brief & What You Would Like to Showcase
 </label>
 <textarea
 rows={4}
 placeholder="Tell us about your signature culinary heritage, special preparations, master chefs, or unique property atmosphere..."
 value={formState.message}
 onChange={(e) => setFormState({ ...formState, message: e.target.value })}
 className="w-full bg-white border border-[#D8CCB9] hover:border-[#B8A890] focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/15 rounded-xl p-4 text-sm text-[#1B1A17] font-sans placeholder:text-[#A8A196] outline-none transition-all shadow-xs"
 />
 </div>

 {/* Bottom Actions */}
 <div className="pt-4 border-t border-[#E8DFD0] flex flex-col sm:flex-row items-center justify-between gap-4">
 <div className="flex items-center space-x-2 text-xs text-[#6F6A60] font-sans">
 <Mail className="w-4 h-4 text-[#C0392B]" />
 <span>Direct email: <a href="mailto:collaboration@virtualbanjara.com" className="text-[#C0392B] font-semibold hover:underline">collaboration@virtualbanjara.com</a></span>
 </div>

 <button
 type="submit"
 className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#C0392B] hover:bg-[#9E2B1F] text-white text-xs uppercase tracking-widest font-semibold py-4 px-9 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
 >
 <Send className="w-4 h-4" />
 <span>Start The Conversation</span>
 </button>
 </div>
 </form>
 )}
 </div>
 </section>
 </div>
 );
};
