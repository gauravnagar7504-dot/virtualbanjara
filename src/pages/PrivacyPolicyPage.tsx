import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { JourneyLine } from '../components/JourneyLine';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-8 font-sans text-sm leading-relaxed text-[#1B1A17]">
      <div className="border-b border-[#E8DFD0] pb-6 space-y-2">
        <div className="inline-flex items-center space-x-2 text-xs font-sans text-[#C0392B] uppercase tracking-widest font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>Legal & Compliance</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#1B1A17]">
          PRIVACY POLICY
        </h1>
        <p className="text-xs text-[#6F6A60] font-sans">
          Last Updated: September 2026 • Applies to virtualbanjara.com
        </p>
      </div>

      <div className="space-y-6 bg-[#FCFAF7] border border-[#E8DFD0] rounded-2xl p-6 sm:p-10 shadow-sm">
        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-[#1B1A17]">1. Introduction</h2>
          <p className="text-[#6F6A60]">
            This Privacy Policy applies to Virtual Banjara® (accessible via https://virtualbanjara.com). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website or our structured collaboration inquiry forms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-[#1B1A17]">2. Information We Collect</h2>
          <p className="text-[#6F6A60]">
            Like most website operators, Virtual Banjara collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as browser type, language preference, referring site, and the date and time of each visitor request.
          </p>
          <p className="text-[#6F6A60]">
            When you submit a business collaboration inquiry, general inquiry, or join our community newsletter, we may collect your name, business name, phone number, email address, and project brief details solely for evaluating and responding to your request.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-[#1B1A17]">3. Use of Information</h2>
          <p className="text-[#6F6A60]">
            We use the information we collect to communicate with you regarding video production schedules, recipe archives, editorial queries, and commercial partnerships. We do not sell, rent, or trade your personal or business data to third-party marketing brokers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-[#1B1A17]">4. Third-Party Embeds & Services</h2>
          <p className="text-[#6F6A60]">
            Our website embeds video content from YouTube (Google LLC). Interacting with embedded players is subject to YouTube's Terms of Service and Google's Privacy Policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-[#1B1A17]">5. Contact Us</h2>
          <p className="text-[#6F6A60]">
            For questions regarding this Privacy Policy or your data, please contact our legal desk at <a href="mailto:contact@virtualbanjara.com" className="text-[#C0392B] underline">contact@virtualbanjara.com</a>.
          </p>
        </section>
      </div>
    </article>
  );
};
export default PrivacyPolicyPage;
