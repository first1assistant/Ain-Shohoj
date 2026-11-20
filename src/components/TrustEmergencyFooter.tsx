import { useState } from 'react';
import {
  AlertTriangle,
  BookOpenCheck,
  Check,
  Copy,
  HelpCircle,
  Lock,
  PhoneCall,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import { Language } from '../types';
import { UI_COPY } from '../data/content';

interface TrustEmergencyFooterProps {
  language: Language;
}

export function TrustEmergencyFooter({ language }: TrustEmergencyFooterProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const trustIcons = [ShieldCheck, BookOpenCheck, HelpCircle, Lock];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(UI_COPY.footer.emailPlaceholder);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 1800);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <>
      {/* Section 8: Safety and Trust */}
      <section id="safety" className="py-14 sm:py-20 bg-white border-y border-[#12284C]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#12284C] text-balance">
              {UI_COPY.safety.title[language]}
            </h2>
            <p className="text-base sm:text-lg text-[#12284C]/75 mt-2.5 leading-relaxed">
              {UI_COPY.safety.subtitle[language]}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {UI_COPY.safety.items.map((item, idx) => {
              const Icon = trustIcons[idx];
              return (
                <div
                  key={item.title.en}
                  className="rounded-3xl bg-[#FFF9EE] border border-[#12284C]/12 p-6 flex flex-col gap-3.5"
                >
                  <span className="w-11 h-11 rounded-2xl bg-white border border-[#12284C]/10 text-[#12284C] flex items-center justify-center">
                    <Icon className="w-5 h-5" strokeWidth={1.85} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#12284C]">
                    {item.title[language]}
                  </h3>
                  <p className="text-sm sm:text-base text-[#12284C]/80 leading-relaxed">
                    {item.desc[language]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 9: Emergency Help */}
      <section id="emergency" className="py-14 sm:py-20 bg-[#FFF9EE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-bold text-[#12284C] mb-2">
              <AlertTriangle className="w-4 h-4 text-[#C9A24B]" strokeWidth={2} aria-hidden="true" />
              <span>{language === 'bn' ? 'তাৎক্ষণিক সুরক্ষা নির্দেশিকা' : 'Immediate Safety Guidance'}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#12284C] text-balance">
              {UI_COPY.emergency.title[language]}
            </h2>
            <p className="text-base sm:text-lg text-[#12284C]/80 mt-2.5 leading-relaxed">
              {UI_COPY.emergency.subtitle[language]}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {UI_COPY.emergency.cards.map((card) => (
              <div
                key={card.id}
                className="rounded-3xl bg-white border border-[#12284C]/15 p-6 sm:p-7 flex flex-col"
              >
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#12284C] pb-3.5 mb-4 border-b border-[#12284C]/10">
                  {card.title[language]}
                </h3>
                <ul className="space-y-3">
                  {card.points[language].map((pt, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm sm:text-base text-[#12284C]/85 leading-relaxed"
                    >
                      <span className="w-6 h-6 rounded-lg bg-[#FFF9EE] border border-[#12284C]/15 text-[#12284C] text-xs font-bold flex items-center justify-center shrink-0 tabular-nums mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-[#12284C] text-[#FFF9EE] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="w-11 h-11 rounded-2xl bg-[#C9A24B] text-[#12284C] flex items-center justify-center shrink-0">
              <PhoneCall className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
            </span>
            <p className="text-sm sm:text-base font-medium leading-relaxed text-[#FFF9EE]/95">
              {UI_COPY.emergency.notice[language]}
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Footer */}
      <footer className="bg-[#12284C] text-[#FFF9EE] border-t border-[#FFF9EE]/10 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#FFF9EE]/12">
            <div className="md:col-span-6 space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-[#C9A24B] text-[#12284C] flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="font-display text-2xl font-extrabold text-[#FFF9EE]">
                  {UI_COPY.brand[language]}
                </span>
              </div>
              <p className="text-base text-[#C9A24B] font-semibold">
                {UI_COPY.tagline[language]}
              </p>
              <p className="text-sm text-[#FFF9EE]/80 max-w-md leading-relaxed">
                {UI_COPY.footer.disclaimer[language]}
              </p>
            </div>

            <div className="md:col-span-6 md:flex md:flex-col md:items-end justify-between space-y-3">
              <div className="md:text-right">
                <p className="text-sm text-[#FFF9EE]/70 mb-2">
                  {UI_COPY.footer.contactLabel[language]}
                </p>
                <div className="inline-flex items-center gap-2 rounded-xl bg-[#1D3B6B] border border-[#FFF9EE]/15 px-3.5 py-2">
                  <span className="text-sm sm:text-base font-medium text-[#FFF9EE]">
                    {UI_COPY.footer.emailPlaceholder}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label={language === 'bn' ? 'ইমেইল কপি করুন' : 'Copy contact email'}
                    className="min-h-[36px] min-w-[36px] rounded-lg bg-[#12284C] text-[#C9A24B] hover:bg-[#C9A24B] hover:text-[#12284C] flex items-center justify-center transition-colors"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4" strokeWidth={2.2} />
                    ) : (
                      <Copy className="w-4 h-4" strokeWidth={1.85} />
                    )}
                  </button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#FFF9EE]/60">
                {UI_COPY.footer.location[language]}
              </p>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-[#FFF9EE]/65">
            <span>{UI_COPY.brand[language]}</span>
            <span>{UI_COPY.footer.disclaimer[language]}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
